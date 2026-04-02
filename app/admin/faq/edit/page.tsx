"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditFAQ() {
  const router = useRouter();

  // State dummy (nanti bisa diambil dari API/Database berdasarkan ID)
  const [pertanyaan, setPertanyaan] = useState("Berapa minimal pemesanan untuk paket catering?");
  const [jawaban, setJawaban] = useState("Untuk paket box minimal 30 porsi, dan prasmanan 100 porsi");

  const handleUpdate = () => {
    // Logika update data di sini
    alert("Data berhasil diperbarui!");
    router.push("/admin/faq");
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Edit FAQ</h2>
      <p className="text-xl text-stone-700 mb-10">
        Halaman ini digunakan untuk memperbarui data yang sudah ada
      </p>

      <div className="max-w-5xl space-y-8">
        {/* Input Pertanyaan */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Pertanyaan</label>
          <textarea
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 min-h-[100px] text-xl shadow-inner leading-relaxed"
          />
        </div>

        {/* Input Jawaban */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Jawaban</label>
          <textarea
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 min-h-[150px] text-xl shadow-inner leading-relaxed"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center pt-10">
          <button
            onClick={() => router.back()}
            className="bg-[#A69999] text-black px-12 py-3 rounded-lg text-2xl font-bold hover:bg-stone-400 transition-all active:scale-95 shadow-md min-w-[200px]"
          >
            Kembali
          </button>
          
          <button
            onClick={handleUpdate}
            className="bg-[#5C527F] text-white px-12 py-3 rounded-lg text-2xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md min-w-[200px]"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}