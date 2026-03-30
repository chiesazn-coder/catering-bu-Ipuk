"use client";

import Image from "next/image";
import { useState } from "react";

// Data Dummy sesuai desain Figma
const dummyGaleri = [
  { id: 1, image: "/galeri1.png", deskripsi: "Dekorasi Buffet Utama" },
];

export default function KelolaGaleri() {
  const [images] = useState(dummyGaleri);

  return (
    <div className="font-serif text-stone-900 min-h-screen p-2">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">Kelola Galeri</h2>
          <p className="text-xl text-stone-700">Mengelola informasi artikel catering</p>
        </div>
        <button className="bg-[#4285F4] text-white px-12 py-3 rounded-lg font-bold text-xl shadow-md hover:bg-blue-600 transition-all active:scale-95">
          Tambah
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-stone-800 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#948484] border-b border-stone-800 font-bold text-xl">
              <th className="p-4 border-r border-stone-800 text-center w-24">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Gambar</th>
              <th className="p-4 text-center w-80">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {images.map((img, index) => (
              <tr key={img.id} className="border-b border-stone-800 last:border-b-0">
                {/* Kolom Nomor */}
                <td className="p-4 border-r border-stone-800 text-center font-bold text-2xl align-middle">
                  {index + 1}
                </td>
                
                {/* Kolom Gambar */}
                <td className="p-8 border-r border-stone-800">
                  <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto rounded-xl overflow-hidden border border-stone-300 shadow-sm">
                    <Image
                      src={img.image}
                      alt={`Galeri ${img.id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                {/* Kolom Aksi */}
                <td className="p-4 align-middle">
                  <div className="flex justify-center gap-6">
                    <button className="bg-[#F4B400] text-white px-8 py-3 rounded-lg flex items-center gap-3 font-bold text-lg hover:bg-yellow-600 transition-colors shadow-sm">
                      <span className="text-2xl">✎</span> Edit
                    </button>
                    <button className="bg-[#DB4437] text-white px-8 py-3 rounded-lg flex items-center gap-3 font-bold text-lg hover:bg-red-700 transition-colors shadow-sm">
                      <span className="text-2xl">🗑</span> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer sesuai Figma */}
      <div className="mt-8 flex justify-between items-center text-xl">
        <p className="italic text-stone-700">
          Showing 1 to {images.length} of {images.length} entries
        </p>
        
        <div className="flex items-center border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] shadow-sm">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 transition-colors">«</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 transition-colors">‹</button>
          <button className="px-6 py-2 bg-white font-bold border-r border-stone-400">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 transition-colors">›</button>
          <button className="px-4 py-2 hover:bg-stone-300 transition-colors">»</button>
        </div>
      </div>
    </div>
  );
}