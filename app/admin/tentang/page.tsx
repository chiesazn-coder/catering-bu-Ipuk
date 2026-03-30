"use client";

import Image from "next/image";

export default function KelolaTentangKami() {
  return (
    <div className="font-serif text-stone-900">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Kelola Tentang Kami</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola informasi tentang kami catering
      </p>

      {/* Tabel Tentang Kami */}
      <div className="overflow-x-auto border border-stone-800">
        <table className="w-full text-left border-collapse bg-white text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800">
              <th className="p-4 border-r border-stone-800 text-center w-20">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Gambar</th>
              <th className="p-4 border-r border-stone-800 text-center">Judul</th>
              <th className="p-4 border-r border-stone-800 text-center">Deskripsi</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-stone-800 last:border-b-0">
              <td className="p-6 border-r border-stone-800 text-center font-bold align-top pt-10">
                1
              </td>
              <td className="p-6 border-r border-stone-800 text-center align-top">
                <div className="relative w-40 h-64 mx-auto border border-stone-300">
                  <Image 
                    src="/catering-about.png" // Ganti dengan path gambar kamu
                    alt="Catering Bu Ipuk"
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="p-6 border-r border-stone-800 align-top pt-10 font-bold leading-tight">
                Catering Bu Ipuk Nartoyo
              </td>
              <td className="p-6 border-r border-stone-800 align-top pt-10 leading-relaxed max-w-xs">
                Catering Bu Ipuk Nartoyo merupakan usaha kuliner yang berdiri sejak tahun 1996
              </td>
              <td className="p-6 text-center align-top pt-10">
                <button className="bg-[#F2B661] text-white px-8 py-2 rounded-lg flex items-center justify-center gap-2 mx-auto font-bold shadow-sm hover:bg-[#e0a54d] transition-all">
                  <span className="text-2xl">✏️</span> <span className="text-xl">Edit</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}