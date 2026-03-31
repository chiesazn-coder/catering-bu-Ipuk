"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TambahFAQ() {
  const router = useRouter();
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");
  const [showModal, setShowModal] = useState(false); // State untuk modal

  const handleSimpan = () => {
    // Di sini nanti tempat logika simpan ke database
    setShowModal(true); // Tampilkan modal kustom
  };

  const closeAndRedirect = () => {
    setShowModal(false);
    router.push("/admin/faq"); // Kembali ke halaman utama
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4 relative">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Tambah FAQ</h2>
      <p className="text-xl text-stone-700 mb-10">
        Halaman ini digunakan untuk menambahkan data baru FAQ
      </p>

      <div className="max-w-5xl space-y-8">
        {/* Input Pertanyaan */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Pertanyaan</label>
          <textarea
            value={pertanyaan}
            onChange={(e) => setPertanyaan(e.target.value)}
            placeholder="Masukkan pertanyaan..."
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 min-h-[100px] text-xl shadow-inner"
          />
        </div>

        {/* Input Jawaban */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Jawaban</label>
          <textarea
            value={jawaban}
            onChange={(e) => setJawaban(e.target.value)}
            placeholder="Masukkan jawaban..."
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 min-h-[150px] text-xl shadow-inner"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center pt-10">
          <button
            onClick={() => router.back()}
            className="bg-[#A69999] text-black px-12 py-3 rounded-lg text-2xl font-bold hover:bg-stone-400 transition-all active:scale-95 shadow-md"
          >
            Kembali
          </button>
          
          <button
            onClick={handleSimpan}
            className="bg-[#3D3459] text-white px-12 py-3 rounded-lg text-2xl font-bold hover:bg-[#2A2440] transition-all active:scale-95 shadow-md"
          >
            Simpan
          </button>
        </div>
      </div>

      {/* --- DESIGN POP-UP MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all scale-100 flex flex-col items-center">
            {/* Icon Centang Bulat */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-green-600">✓</span>
            </div>
            
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Berhasil!</h3>
            <p className="text-stone-600 text-center mb-8 text-lg">
              Data FAQ baru telah berhasil disimpan ke sistem.
            </p>
            
            <button
              onClick={closeAndRedirect}
              className="w-full bg-[#3D3459] text-white py-3 rounded-xl font-bold text-xl hover:bg-[#2A2440] transition-colors shadow-lg"
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </div>
  );
}