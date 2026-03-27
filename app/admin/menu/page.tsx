"use client";

import Image from "next/image";

export default function KelolaPaketMenu() {
  const menuData = [
    {
      id: 1,
      src: "/paket-1.jpg", // Ganti dengan path gambar menu kamu
      judul: "Paket 1",
      harga: "Rp25.000",
      deskripsi: "Nasi putih, daging srundeng, kering tempe, sambal goreng kreni, dadar telur, sambal, timun, dan kering kentang",
    },
  ];

  return (
    <div className="font-serif text-stone-900">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Kelola Paket Menu</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola informasi paket menu catering
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

      {/* Tabel Paket Menu */}
      <div className="overflow-x-auto border border-stone-800">
        <table className="w-full text-left border-collapse bg-white text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800">
              <th className="p-4 border-r border-stone-800 text-center w-16">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Gambar</th>
              <th className="p-4 border-r border-stone-800 text-center">Judul Paket</th>
              <th className="p-4 border-r border-stone-800 text-center">Harga</th>
              <th className="p-4 border-r border-stone-800 text-center">Deskripsi</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((item, index) => (
              <tr key={item.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-4 border-r border-stone-800 text-center font-bold align-top pt-6">
                  {index + 1}
                </td>
                <td className="p-4 border-r border-stone-800 text-center align-top pt-6">
                  <div className="relative w-32 h-20 mx-auto border border-stone-300">
                    <Image 
                      src={item.src} 
                      alt={item.judul}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 text-center">
                  {item.judul}
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 text-center">
                  {item.harga}
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 leading-relaxed max-w-xs">
                  {item.deskripsi}
                </td>
                <td className="p-4 text-center align-top pt-6">
                  <div className="flex flex-row gap-2 justify-center">
                    <button className="bg-[#F2B661] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm hover:bg-[#e0a54d]">
                      <span className="text-lg">✏️</span> Edit
                    </button>
                    <button className="bg-[#C84343] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm hover:bg-red-700">
                      <span className="text-lg">🗑️</span> Hapus
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
        <p>Showing 1 to {menuData.length} of 4 entries</p>
        
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] not-italic">
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