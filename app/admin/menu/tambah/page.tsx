"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TambahPaketMenu() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSimpan = () => {
    // Logika simpan data bisa ditambahkan di sini
    setShowModal(true);
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4 pb-20">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-10 font-serif">Tambah Paket Menu</h2>

      <div className="max-w-6xl space-y-8">
        {/* Input Gambar */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block font-serif">Gambar</label>
          <div className="flex w-full">
            <div className="flex-grow p-4 bg-[#F0F0F0] rounded-l-xl border border-stone-400 border-r-0 shadow-inner h-14"></div>
            <label className="bg-[#8C8C8C] text-white px-10 flex items-center justify-center rounded-r-xl font-bold text-xl cursor-pointer hover:bg-stone-500 transition-all shadow-md min-w-[180px]">
              Browser
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Input Judul Paket */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block font-serif">Judul Paket</label>
          <input
            type="text"
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner"
          />
        </div>

        {/* Input Harga */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block font-serif">Harga</label>
          <input
            type="text"
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner"
          />
        </div>

        {/* Input Deskripsi */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block font-serif">Deskripsi</label>
          <textarea
            placeholder="Halaman ini digunakan untuk menambahkan data baru paket menu"
            className="w-full p-6 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 min-h-[300px] text-xl shadow-inner placeholder-stone-700 italic"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center pt-10">
          <button
            onClick={() => router.back()}
            className="bg-[#A69999] text-black px-16 py-3 rounded-lg text-2xl font-bold hover:bg-stone-400 transition-all active:scale-95 shadow-md font-serif"
          >
            Kembali
          </button>
          
          <button
            onClick={handleSimpan}
            className="bg-[#5C527F] text-white px-16 py-3 rounded-lg text-2xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md font-serif"
          >
            Simpan
          </button>
        </div>
      </div>

      {/* Modal Sukses */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] p-10 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-green-600">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2 font-serif">Berhasil!</h3>
            <p className="text-stone-600 text-center mb-8 font-serif">Menu baru berhasil ditambahkan.</p>
            <button
              onClick={() => { setShowModal(false); router.push("/admin/menu"); }}
              className="w-full bg-[#5C527F] text-white py-3 rounded-xl font-bold text-xl hover:bg-[#484063]"
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </div>
  );
}