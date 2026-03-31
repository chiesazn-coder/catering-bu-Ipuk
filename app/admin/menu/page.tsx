"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function KelolaPaketMenu() {
  const router = useRouter();
  
  // State untuk mengontrol Modal Hapus
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const menuData = [
    {
      id: 1,
      src: "/paket1.png", // Ganti dengan path gambar menu kamu
      judul: "Paket 1",
      harga: "Rp25.000",
      deskripsi: "Nasi putih, daging srundeng, kering tempe, sambal goreng kreni, dadar telur, sambal, timun, dan kering kentang",
    },
  ];

  // Fungsi untuk memicu modal hapus
  const triggerDelete = (judul: string) => {
    setSelectedMenu(judul);
    setIsModalOpen(true);
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen relative">
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
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl shadow-inner border border-stone-300"
          />
        </div>
        <button 
          onClick={() => router.push("/admin/menu/tambah")}
          className="bg-[#4188F1] text-white px-12 py-3 rounded-lg text-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-md"
        >
          Tambah
        </button>
      </div>

      {/* Tabel Paket Menu */}
      <div className="overflow-x-auto border border-stone-800 bg-white">
        <table className="w-full text-left border-collapse text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
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
                  <div className="relative w-32 h-20 mx-auto border border-stone-300 rounded overflow-hidden">
                    <Image 
                      src={item.src} 
                      alt={item.judul}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 text-center italic">
                  {item.judul}
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 text-center">
                  {item.harga}
                </td>
                <td className="p-4 border-r border-stone-800 align-top pt-6 leading-relaxed max-w-xs italic text-lg">
                  {item.deskripsi}
                </td>
                <td className="p-4 text-center align-top pt-6">
                  <div className="flex flex-row gap-2 justify-center">
                    <button 
                      onClick={() => router.push("/admin/menu/edit")}
                      className="bg-[#F2B661] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm hover:bg-[#e0a54d] transition-all active:scale-95"
                    >
                      <span className="text-lg">✏️</span> Edit
                    </button>
                    <button 
                      onClick={() => triggerDelete(item.judul)}
                      className="bg-[#C84343] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-sm hover:bg-red-700 transition-all active:scale-95"
                    >
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
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800 italic font-serif">
        <p>Showing 1 to {menuData.length} of 4 entries</p>
        
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] not-italic shadow-sm">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">«</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">‹</button>
          <button className="px-6 py-2 border-r border-stone-400 bg-white font-bold text-black">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">›</button>
          <button className="px-4 py-2 hover:bg-stone-300 font-bold">»</button>
        </div>
      </div>

      {/* --- POP-UP MODAL KONFIRMASI HAPUS (DUMMY) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-[40px] p-12 max-w-2xl w-full mx-4 shadow-2xl flex flex-col items-center transform transition-transform scale-100">
            
            {/* Ikon Tanda Seru Jingga */}
            <div className="w-32 h-32 border-8 border-orange-100 rounded-full flex items-center justify-center mb-8">
              <span className="text-7xl text-orange-400 font-serif font-bold">!</span>
            </div>
            
            <h3 className="text-4xl font-bold text-stone-800 mb-6 font-serif">Konfirmasi Hapus</h3>
            
            <p className="text-3xl text-stone-700 text-center mb-12 font-serif leading-snug">
              Apakah Anda Yakin Ingin Menghapus?
            </p>
            
            {/* Tombol Aksi Modal */}
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-14 py-3 border-2 border-stone-400 rounded-2xl font-bold text-2xl hover:bg-stone-100 transition-colors min-w-[200px] font-serif"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  console.log("Menghapus:", selectedMenu);
                  setIsModalOpen(false);
                }}
                className="px-14 py-3 bg-[#5C527F] text-white rounded-2xl font-bold text-2xl hover:bg-[#484063] transition-all shadow-lg min-w-[200px] font-serif"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}