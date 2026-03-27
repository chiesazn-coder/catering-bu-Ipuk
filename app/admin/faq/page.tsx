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
    <div className="font-serif text-stone-900">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Kelola FAQ</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola pertanyaan dan jawaban yang sering diajukan
      </p>

      {/* Baris Atas: Cari & Tambah */}
      <div className="flex flex-col md:flex-row justify-end items-end gap-6 mb-12">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Cari"
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl"
          />
        </div>
        <button className="bg-[#4188F1] text-white px-12 py-3 rounded-lg text-2xl font-bold hover:bg-blue-600 transition-colors shadow-md">
          Tambah
        </button>
      </div>

      {/* Tabel FAQ */}
      <div className="overflow-x-auto border border-stone-800">
        <table className="w-full text-left border-collapse bg-white text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800">
              <th className="p-4 border-r border-stone-800 text-center w-20">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Pertanyaan</th>
              <th className="p-4 border-r border-stone-800 text-center">Jawaban</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-6 border-r border-stone-800 text-center font-bold">
                  {index + 1}
                </td>
                <td className="p-6 border-r border-stone-800 leading-relaxed">
                  {faq.pertanyaan}
                </td>
                <td className="p-6 border-r border-stone-800 leading-relaxed">
                  {faq.jawaban}
                </td>
                <td className="p-6 text-center">
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <button className="bg-[#F2B661] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-32 font-bold shadow-sm hover:bg-[#e0a54d]">
                      <span>✏️</span> Edit
                    </button>
                    <button className="bg-[#C84343] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 w-32 font-bold shadow-sm hover:bg-red-700">
                      <span>🗑️</span> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Tabel: Pagination */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800 italic">
        <p>Showing 1 to {faqs.length} of 4 entries</p>
        
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5]">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&lt;&lt;</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&lt;</button>
          <button className="px-6 py-2 border-r border-stone-400 bg-white font-bold">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&gt;</button>
          <button className="px-4 py-2 hover:bg-stone-300 font-bold">&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}