"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function KelolaFAQ() {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

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

  // Fungsi Dummy untuk Hapus
  const handleConfirmDelete = () => {
    setFaqs(faqs.filter(faq => faq.id !== selectedId));
    setShowDeleteModal(false);
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen relative">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-2">Kelola FAQ</h2>
      <p className="text-xl text-stone-700 mb-8">
        Mengelola pertanyaan dan jawaban yang sering diajukan
      </p>

      {/* Row Cari */}
      <div className="flex justify-end mb-6">
        <div className="w-full md:w-[450px]">
          <input
            type="text"
            placeholder="Cari"
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl shadow-inner border border-stone-300"
          />
        </div>
      </div>

      {/* Row Tambah */}
      <div className="flex justify-end mb-10">
        <button 
          onClick={() => router.push("/admin/faq/tambah")}
          className="bg-[#4285F4] text-white px-16 py-3 rounded-lg text-2xl font-bold transition-all active:scale-95 shadow-md"
        >
          Tambah
        </button>
      </div>

      {/* Tabel FAQ */}
      <div className="overflow-x-auto border border-stone-800 bg-white">
        <table className="w-full text-left border-collapse text-lg md:text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
              <th className="p-4 border-r border-stone-800 text-center w-24">No</th>
              <th className="p-4 border-r border-stone-800 text-center">Pertanyaan</th>
              <th className="p-4 border-r border-stone-800 text-center">Jawaban</th>
              <th className="p-4 text-center w-80">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-6 border-r border-stone-800 text-center font-bold align-middle">{index + 1}</td>
                <td className="p-6 border-r border-stone-800 leading-snug align-middle italic">{faq.pertanyaan}</td>
                <td className="p-6 border-r border-stone-800 leading-snug align-middle italic">{faq.jawaban}</td>
                <td className="p-6 align-middle">
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <button 
                      onClick={() => router.push("/admin/faq/edit")} 
                      className="bg-[#F4B400] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 font-bold shadow-sm hover:bg-yellow-600 transition-colors"
                    >
                      <span className="text-xl">✏️</span> Edit
                    </button>
                    <button 
                      onClick={() => { setSelectedId(faq.id); setShowDeleteModal(true); }}
                      className="bg-[#DB4437] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 font-bold shadow-sm hover:bg-red-700 transition-colors"
                    >
                      <span className="text-xl">🗑️</span> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800">
        <p className="italic">Showing 1 to {faqs.length} of 4 entries</p>
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] shadow-sm">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">«</button>
          <button className="px-6 py-2 border-r border-stone-400 bg-white font-bold text-black">1</button>
          <button className="px-4 py-2 hover:bg-stone-300 font-bold">»</button>
        </div>
      </div>

      {/* --- MODAL HAPUS (SESUAI GAMBAR) --- */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] p-12 max-w-2xl w-full mx-4 shadow-2xl flex flex-col items-center">
            {/* Icon Tanda Seru Orange */}
            <div className="w-32 h-32 border-8 border-orange-200 rounded-full flex items-center justify-center mb-8">
              <span className="text-7xl text-orange-400 font-serif">!</span>
            </div>
            
            <h3 className="text-4xl font-bold text-stone-800 mb-6 font-serif">Konfirmasi Hapus</h3>
            <p className="text-3xl text-stone-700 text-center mb-12 font-serif">
              Apakah Anda Yakin Ingin Menghapus?
            </p>
            
            <div className="flex gap-6 w-full justify-center">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-12 py-3 border-2 border-stone-400 rounded-xl font-bold text-2xl hover:bg-stone-100 transition-colors min-w-[180px]"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-12 py-3 bg-[#5C527F] text-white rounded-xl font-bold text-2xl hover:bg-[#484063] transition-colors shadow-lg min-w-[180px]"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL EDIT (DUMMY) --- */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] p-10 max-w-3xl w-full mx-4 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 underline">Edit FAQ</h3>
            <div className="space-y-4">
              <label className="block text-xl font-bold">Pertanyaan</label>
              <textarea className="w-full p-4 bg-stone-100 rounded-xl border border-stone-300 min-h-[100px]" defaultValue="Berapa minimal pemesanan?" />
              <label className="block text-xl font-bold">Jawaban</label>
              <textarea className="w-full p-4 bg-stone-100 rounded-xl border border-stone-300 min-h-[100px]" defaultValue="Minimal 30 porsi." />
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setShowEditModal(false)} className="px-8 py-2 bg-stone-400 text-white rounded-lg font-bold">Batal</button>
              <button onClick={() => setShowEditModal(false)} className="px-8 py-2 bg-[#5C527F] text-white rounded-lg font-bold">Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}