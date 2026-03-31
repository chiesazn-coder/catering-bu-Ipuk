"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Data Dummy sesuai desain Figma
const dummyGaleri = [
  { id: 1, image: "/galeri1.png", deskripsi: "Dekorasi Buffet Utama" },
];

export default function KelolaGaleri() {
  const router = useRouter();
  const [images, setImages] = useState(dummyGaleri);
  
  // State untuk Modal Hapus
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Fungsi untuk memicu modal
  const triggerDelete = (id: number) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };

  // Fungsi konfirmasi hapus (Dummy)
  const confirmDelete = () => {
    setImages(images.filter((img) => img.id !== selectedId));
    setShowDeleteModal(false);
    setSelectedId(null);
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-2 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2 font-serif">Kelola Galeri</h2>
          <p className="text-xl text-stone-700 font-serif">Mengelola informasi artikel catering</p>
        </div>
        <button 
          onClick={() => router.push("/admin/galeri/tambah")}
          className="bg-[#4285F4] text-white px-12 py-3 rounded-lg font-bold text-xl shadow-md hover:bg-blue-600 transition-all active:scale-95"
        >
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
              <th className="p-4 text-center w-80 font-serif">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {images.length > 0 ? (
              images.map((img, index) => (
                <tr key={img.id} className="border-b border-stone-800 last:border-b-0">
                  <td className="p-4 border-r border-stone-800 text-center font-bold text-2xl align-middle">
                    {index + 1}
                  </td>
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
                  <td className="p-4 align-middle">
                    <div className="flex justify-center gap-6">
                      <button 
                        onClick={() => router.push("/admin/galeri/edit")}
                        className="bg-[#F4B400] text-white px-8 py-3 rounded-lg flex items-center gap-3 font-bold text-lg hover:bg-yellow-600 transition-colors shadow-sm"
                      >
                        <span className="text-2xl">✏️</span> Edit
                      </button>
                      <button 
                        onClick={() => triggerDelete(img.id)}
                        className="bg-[#DB4437] text-white px-8 py-3 rounded-lg flex items-center gap-3 font-bold text-lg hover:bg-red-700 transition-colors shadow-sm"
                      >
                        <span className="text-2xl">🗑️</span> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-10 text-center text-stone-500 italic text-xl">
                  Tidak ada data galeri.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-8 flex justify-between items-center text-xl">
        <p className="italic text-stone-700 font-serif">
          Showing {images.length > 0 ? 1 : 0} to {images.length} of {images.length} entries
        </p>
        <div className="flex items-center border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] shadow-sm">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300">«</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300">‹</button>
          <button className="px-6 py-2 bg-white font-bold border-r border-stone-400">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300">›</button>
          <button className="px-4 py-2 hover:bg-stone-300">»</button>
        </div>
      </div>

      {/* --- MODAL KONFIRMASI HAPUS --- */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] p-12 max-w-2xl w-full mx-4 shadow-2xl flex flex-col items-center">
            {/* Ikon Tanda Seru Lingkaran */}
            <div className="w-32 h-32 border-8 border-orange-100 rounded-full flex items-center justify-center mb-8">
              <span className="text-7xl text-orange-400 font-serif">!</span>
            </div>
            
            <h3 className="text-4xl font-bold text-stone-800 mb-6 font-serif">Konfirmasi Hapus</h3>
            <p className="text-3xl text-stone-600 text-center mb-12 font-serif px-4 leading-snug">
              Apakah Anda Yakin Ingin Menghapus?
            </p>
            
            <div className="flex gap-6 w-full justify-center">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-14 py-4 border-2 border-stone-400 rounded-2xl font-bold text-2xl hover:bg-stone-100 transition-all min-w-[200px] font-serif"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="px-14 py-4 bg-[#5C527F] text-white rounded-2xl font-bold text-2xl hover:bg-[#484063] transition-all shadow-lg min-w-[200px] font-serif"
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