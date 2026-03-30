"use client";

import { useState } from "react";

export default function KelolaFAQ() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      pertanyaan: "Berapa minimal pemesanan untuk paket catering?",
      jawaban: "Untuk paket box minimal 30 porsi, dan prasmanan 100 porsi",
    },
    {
      id: 2,
      pertanyaan: "Apakah catering melayani berbagai jenis acara?",
      jawaban: "Melayani berbagai jenis acara",
    },
  ]);

  return (
    <div className="font-serif text-stone-900 min-h-screen">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-2">Kelola FAQ</h2>
      <p className="text-xl text-stone-700 mb-8">
        Mengelola pertanyaan dan jawaban yang sering diajukan
      </p>

      {/* Row Cari (Full Width Right) */}
      <div className="flex justify-end mb-6">
        <div className="w-full md:w-[450px]">
          <input
            type="text"
            placeholder="Cari"
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl shadow-inner border border-stone-300"
          />
        </div>
      </div>

      {/* Row Tambah */}
      <div className="flex justify-end mb-10">
        <button className="bg-[#4285F4] text-white px-16 py-3 rounded-lg text-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-md">
          Tambah
        </button>
      </div>

      {/* Tabel FAQ */}
      <div className="overflow-x-auto border border-stone-800 bg-white">
        <table className="w-full text-left border-collapse text-lg md:text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
              <th className="p-4 border-r border-stone-800 text-center w-24">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Pertanyaan</th>
              <th className="p-4 border-r border-stone-800 text-center">Jawaban</th>
              <th className="p-4 text-center w-80">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-6 border-r border-stone-800 text-center font-bold align-middle">
                  {index + 1}
                </td>
                <td className="p-6 border-r border-stone-800 leading-snug align-middle italic">
                  {faq.pertanyaan}
                </td>
                <td className="p-6 border-r border-stone-800 leading-snug align-middle italic">
                  {faq.jawaban}
                </td>
                <td className="p-6 align-middle">
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <button className="bg-[#F4B400] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 font-bold shadow-sm hover:bg-yellow-600 transition-colors">
                      <span className="text-xl">✏️</span> Edit
                    </button>
                    <button className="bg-[#DB4437] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 font-bold shadow-sm hover:bg-red-700 transition-colors">
                      <span className="text-xl">🗑️</span> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800">
        <p className="italic">Showing 1 to {faqs.length} of 4 entries</p>
        
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] shadow-sm">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">«</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">‹</button>
          <button className="px-6 py-2 border-r border-stone-400 bg-white font-bold text-black">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">›</button>
          <button className="px-4 py-2 hover:bg-stone-300 font-bold">»</button>
        </div>
      </div>
    </div>
  );
}