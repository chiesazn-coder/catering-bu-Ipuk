"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Review {
  id: number;
  nama: string;
  rating: number;
  ulasan: string;
}

export default function ReviewPage() {
  // Data dummy untuk daftar review di sisi kiri
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      nama: "Melina Yasniti Syah",
      rating: 5,
      ulasan: "Masakannya enak, gurih, bumbunya pas, patut untuk dicoba lagi"
    },
    {
      id: 2,
      nama: "Febriana Ratu Sintya",
      rating: 5,
      ulasan: "ENAKKK PUOLLLL, tidak menyangka ternyata seenak ini masakannya, saya tau dari tmn saya makanan disini enak, terus saya coba ternyata beneran enak di lidah saya"
    },
    {
      id: 3,
      nama: "Iskandar Raditya",
      rating: 5,
      ulasan: "Nasinya pulen, lauk yang dibuat gurih pas dengan bumbu cita rasanya, buahnya pun masih segar tidak seperti biasanya sudah sedikit kematangan, sangat enak"
    }
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header Halaman */}
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#4C3F5E] mb-2">
            Review dan Rating
          </h1>
          <p className="text-xl font-serif text-stone-800 max-w-3xl">
            Kumpulan review dan rating dari pelanggan sebagai bentuk pengalaman terhadap layanan catering
          </p>
        </header>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12">
          
          {/* SISI KIRI: Daftar Review (2 Kolom di Desktop) */}
          <div className="lg:col-span-2 space-y-8">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="border-2 border-[#A7BC9F] rounded-[2.5rem] p-8 md:p-10 bg-white"
              >
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                  {rev.nama}
                </h3>
                {/* Bintang Gold */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill={i < rev.rating ? "#FFD700" : "#E5E7EB"}>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-serif text-stone-800 leading-relaxed">
                  {rev.ulasan}
                </p>
              </div>
            ))}
          </div>

          {/* SISI KANAN: Form Review (Sidebar) */}
          <aside className="lg:col-span-1">
            <div className="bg-[#A7BC9F] rounded-[2.5rem] p-8 sticky top-24 border border-stone-400">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Review dan Rating
              </h2>
              <p className="text-stone-800 font-serif mb-6 leading-snug">
                Review dan rating dari anda sangat membantu perkembangan catering kami. 
                Berikan komentar dan penilaian anda agar kami dapat terus meningkatkan kualitas makanan dan pelayanan.
              </p>

              {/* Input Rating Bintang Interaktif (Dummy Visual) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <button key={i} className="hover:scale-110 transition cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block font-serif font-bold mb-2">Nama</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#5B4E64] outline-none" 
                  />
                </div>
                <div>
                  <label className="block font-serif font-bold mb-2">Deskripsi</label>
                  <textarea 
                    rows={6} 
                    className="w-full p-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-[#5B4E64] outline-none"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-[#5B4E64] text-white py-3 rounded-xl font-serif text-xl font-bold hover:bg-[#43394a] transition mt-4"
                >
                  Kirim
                </button>
              </form>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}