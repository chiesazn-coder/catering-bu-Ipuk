"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function EditGaleri() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSimpan = () => {
    // Logika update data ke database di sini
    setShowModal(true);
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-2">Edit Galeri</h2>
      <p className="text-xl text-stone-700 mb-10">
        Halaman ini digunakan untuk memperbarui data yang sudah ada
      </p>

      <div className="max-w-5xl space-y-8">
        {/* Section Gambar */}
        <div className="space-y-4">
          <label className="text-2xl font-bold block">Gambar</label>
          
          {/* Preview Gambar yang Mau Diedit */}
          <div className="relative w-72 h-72 border border-stone-300 shadow-sm overflow-hidden rounded-sm">
            <Image
              src="/galeri1.png" // Ganti dengan path gambar yang sesuai
              alt="Preview Galeri"
              fill
              className="object-cover"
            />
          </div>

          {/* Input File (Browser) */}
          <div className="flex w-full max-w-4xl">
            {/* Box Abu-abu Kosong */}
            <div className="flex-grow p-4 bg-[#F0F0F0] rounded-l-xl border border-stone-400 border-r-0 shadow-inner h-16"></div>
            
            {/* Tombol Browser */}
            <label className="bg-[#8C8C8C] text-white px-12 flex items-center justify-center rounded-r-xl font-bold text-2xl cursor-pointer hover:bg-stone-500 transition-all shadow-md min-w-[200px]">
              Browser
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Tombol Navigasi Bawah */}
        <div className="flex justify-between items-center pt-20">
          <button
            onClick={() => router.back()}
            className="bg-[#A69999] text-black px-16 py-3 rounded-lg text-2xl font-bold hover:bg-stone-400 transition-all active:scale-95 shadow-md"
          >
            Kembali
          </button>
          
          <button
            onClick={handleSimpan}
            className="bg-[#5C527F] text-white px-16 py-3 rounded-lg text-2xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md"
          >
            Simpan
          </button>
        </div>
      </div>

      {/* Modal Sukses Update */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] p-10 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl text-green-600">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2 font-serif">Berhasil!</h3>
            <p className="text-stone-600 text-center mb-8 font-serif">
              Data galeri telah berhasil diperbarui.
            </p>
            <button
              onClick={() => { setShowModal(false); router.push("/admin/galeri"); }}
              className="w-full bg-[#5C527F] text-white py-3 rounded-xl font-bold text-xl hover:bg-[#484063] transition-colors shadow-lg"
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </div>
  );
}