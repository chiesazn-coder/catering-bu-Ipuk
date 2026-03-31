"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function KelolaAkun() {
  const router = useRouter();
  
  // State dummy untuk data profil
  const [formData, setFormData] = useState({
    nama: "Admin Bu Ipuk",
    email: "admin@buipuk.com",
    noTelp: "08274486304",
    password: "********",
  });

  return (
    <div className="font-serif text-stone-900 min-h-screen p-4">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-2">Kelola Akun</h2>
      <p className="text-xl text-stone-700 mb-10">
        Kelola akun untuk memperbarui informasi profil pengguna
      </p>

      <div className="max-w-5xl space-y-8">
        {/* Input Nama */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Nama</label>
          <input
            type="text"
            value={formData.nama}
            readOnly
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none text-xl shadow-inner"
          />
        </div>

        {/* Input Email */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Email</label>
          <input
            type="email"
            value={formData.email}
            readOnly
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none text-xl shadow-inner"
          />
        </div>

        {/* Input No Telp */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">No Telp</label>
          <input
            type="text"
            value={formData.noTelp}
            readOnly
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none text-xl shadow-inner"
          />
        </div>

        {/* Input Password */}
        <div className="space-y-3">
          <label className="text-2xl font-bold block">Password</label>
          <input
            type="password"
            value={formData.password}
            readOnly
            className="w-full p-4 bg-[#F0F0F0] rounded-xl border border-stone-400 focus:outline-none text-xl shadow-inner"
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
            className="bg-[#F2B661] text-black px-12 py-3 rounded-lg text-2xl font-bold hover:bg-[#e0a54d] transition-all active:scale-95 shadow-md flex items-center gap-2"
          >
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
}