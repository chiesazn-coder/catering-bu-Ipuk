"use client";

import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noTelp: "",
    password: ""
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Logika Supabase Register + Profiles akan ditaruh di sini nanti
    console.log("Daftar dengan:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
        
        {/* Sisi Kiri: Logo */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Sisi Kanan: Form */}
        <div className="flex-1 w-full max-w-md">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">Register</h1>
          <p className="text-lg text-stone-600 mb-8 font-serif leading-tight">
            Silakan daftar dengan mengisi data diri untuk membuat akun dan melanjutkan pemesanan
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xl font-bold font-serif mb-1">Nama</label>
              <input 
                type="text"
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                className="w-full p-3 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xl font-bold font-serif mb-1">Email</label>
              <input 
                type="email"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xl font-bold font-serif mb-1">No Telp</label>
              <input 
                type="text"
                onChange={(e) => setFormData({...formData, noTelp: e.target.value})}
                className="w-full p-3 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xl font-bold font-serif mb-1">Password</label>
              <input 
                type="password"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col items-center pt-6">
              <button 
                type="submit"
                className="w-48 py-3 bg-[#5B4E64] text-white text-xl font-bold rounded-lg hover:bg-[#4a3f52] transition-all shadow-md"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}