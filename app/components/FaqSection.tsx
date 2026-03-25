"use client"; // Wajib karena kita menggunakan interaksi klik (useState)
import { useState } from 'react';

const faqData = [
  {
    question: "Berapa minimal pemesanan untuk paket catering?",
    answer: "Minimal pemesanan untuk paket nasi box 30 porsi, dan untuk prasmanan 100 porsi"
  },
  {
    question: "Apakah catering melayani berbagai jenis acara?",
    answer: "Ya, kami melayani berbagai acara seperti pernikahan, syukuran, rapat kantor, ulang tahun, hingga acara duka."
  },
  {
    question: "Bagaimana cara melakukan pemesanan paket catering?",
    answer: "Anda bisa menekan 'lanjut pemesanan' pada halaman paket menu"
  },
  {
    question: "Apakah tersedia layanan pengantaran pesanan?",
    answer: "Tersedia, kami melayani pengantaran karena sudah include dengan makanan."
  },
  {
    question: "Apakah tersedia paket catering untuk acara besar?",
    answer: "Tersedia, untuk memenuhi kebutuhan anda."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-12 py-16 max-w-7xl mx-auto">
      <div className="bg-[#A7BC9F] border border-stone-800 overflow-hidden shadow-sm">
        {/* Header FAQ */}
        <div className="p-6 border-b border-stone-800">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">FAQ</h2>
          <p className="text-xl font-serif text-stone-800">Membantu pengguna menemukan informasi dengan cepat</p>
        </div>

        {/* List Pertanyaan */}
        <div>
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-stone-800 last:border-b-0">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-black/5 transition-colors group"
              >
                <span className="text-xl font-serif text-stone-900 pr-4">
                  {item.question}
                </span>
                {/* Ikon Segitiga Sesuai Gambar */}
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </span>
              </button>

              {/* Jawaban (Akan muncul saat activeIndex sesuai) */}
              <div 
                className={`overflow-hidden transition-all duration-300 bg-white/30 ${
                  activeIndex === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'
                }`}
              >
                <p className="text-lg font-serif text-stone-900 italic">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}