"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface Review {
  id: number;
  nama: string;
  rating: number;
  ulasan: string;
}

export default function ReviewPage() {
  // State untuk daftar review
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, nama: "Melina Yasniti Syah", rating: 5, ulasan: "Masakannya enak, gurih, bumbunya pas, patut untuk dicoba lagi" },
    { id: 2, nama: "Febriana Ratu Sintya", rating: 5, ulasan: "ENAKKK PUOLLLL, tidak menyangka ternyata seenak ini masakannya..." },
    { id: 3, nama: "Iskandar Raditya", rating: 5, ulasan: "Nasinya pulen, lauk yang dibuat gurih pas dengan bumbu cita rasanya..." }
  ]);

  // State untuk Form & Modal
  const [formData, setFormData] = useState({ nama: '', ulasan: '', rating: 5 });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logika dummy: menambah review baru ke list (opsional)
    const newReview: Review = {
      id: Date.now(),
      nama: formData.nama || "Anonim",
      rating: formData.rating,
      ulasan: formData.ulasan || "Tidak ada ulasan."
    };

    setReviews([newReview, ...reviews]);
    setShowModal(true); // Munculkan pop-up
    setFormData({ nama: '', ulasan: '', rating: 5 }); // Reset form
  };

  return (
    <main className="min-h-screen bg-white relative">


      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#4C3F5E] mb-2">Review dan Rating</h1>
          <p className="text-xl font-serif text-stone-800 max-w-3xl">Kumpulan review dan rating dari pelanggan...</p>
        </header>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          
          {/* SISI KIRI: Daftar Review */}
          <div className="lg:col-span-2 space-y-8">
            {reviews.map((rev) => (
              <div key={rev.id} className="border-2 border-[#A7BC9F] rounded-[2.5rem] p-8 md:p-10 bg-white shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{rev.nama}</h3>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill={i < rev.rating ? "#FFD700" : "#E5E7EB"}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-serif text-stone-800 leading-relaxed">{rev.ulasan}</p>
              </div>
            ))}
          </div>

          {/* SISI KANAN: Form Review */}
          <aside className="lg:col-span-1">
            <div className="bg-[#A7BC9F] rounded-[2.5rem] p-8 sticky top-24 border border-stone-400">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">Berikan Ulasan</h2>
              
              {/* Rating Interaktif */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setFormData({...formData, rating: i + 1})}
                    className="hover:scale-110 transition cursor-pointer"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill={i < formData.rating ? "#FFD700" : "#F3F4F6"}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-serif font-bold mb-2">Nama</label>
                  <input 
                    required
                    type="text" 
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    className="w-full p-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#5B4E64] outline-none" 
                  />
                </div>
                <div>
                  <label className="block font-serif font-bold mb-2">Deskripsi</label>
                  <textarea 
                    required
                    rows={6} 
                    value={formData.ulasan}
                    onChange={(e) => setFormData({...formData, ulasan: e.target.value})}
                    className="w-full p-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#5B4E64] outline-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#5B4E64] text-white py-3 rounded-xl font-serif text-xl font-bold hover:bg-[#43394a] transition mt-4"
                >
                  Kirim
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* MODAL POP-UP */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99] px-6">
          <div className="bg-white rounded-[2rem] p-10 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-[#A7BC9F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">Terima Kasih!</h2>
            <p className="text-stone-600 font-serif mb-8">Review Anda telah berhasil kami terima.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-[#A7BC9F] text-stone-900 py-3 rounded-xl font-bold hover:bg-[#96a98f] transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}