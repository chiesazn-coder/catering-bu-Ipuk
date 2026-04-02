"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditAkun() {
  const router = useRouter();

  // State dummy untuk data yang akan diedit
  const [formData, setFormData] = useState({
    nama: "Ipuk",
    email: "Ipuk@gmail.com",
    noTelp: "0876543565789",
    password: "password123",
  });

  const handleSimpan = () => {
    // Logika simpan perubahan bisa diletakkan di sini
    alert("Informasi akun berhasil diperbarui!");
    router.push("/admin/kelola-akun");
  };

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-2 font-serif">Edit Akun</h2>
      <p className="text-xl text-stone-700 mb-10 font-serif">
        Perbarui informasi akun admin
      </p>

      <div className="max-w-5xl space-y-8 font-serif">
        {/* Input Nama */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Nama</label>
          <input
            type="text"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner"
          />
        </div>

        {/* Input Email */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner"
          />
        </div>

        {/* Input No Telp */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">No Telp</label>
          <input
            type="text"
            value={formData.noTelp}
            onChange={(e) => setFormData({ ...formData, noTelp: e.target.value })}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner"
          />
        </div>

        {/* Input Password */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 text-xl shadow-inner tracking-widest"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center pt-10">
          <button
            onClick={() => router.back()}
            className="bg-[#A69999] text-black px-16 py-3 rounded-lg text-2xl font-bold hover:bg-stone-400 transition-all active:scale-95 shadow-md min-w-[200px]"
          >
            Kembali
          </button>
          
          <button
            onClick={handleSimpan}
            className="bg-[#5C527F] text-white px-16 py-3 rounded-lg text-2xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md min-w-[200px]"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}