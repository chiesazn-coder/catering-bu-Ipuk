"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DaftarPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noTelp: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();

    if (data.success) {
      alert("Pendaftaran Berhasil! Silakan Login.");
      router.push('/login');
    } else {
      alert(data.message || "Pendaftaran Gagal");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6 font-serif">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* SISI KIRI: Logo */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk Catering" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* SISI KANAN: Form */}
        <div className="space-y-8 md:pl-10">
          <div>
            <h1 className="text-5xl font-bold text-stone-900 mb-2">Daftar</h1>
            <p className="text-stone-700 text-xl leading-snug">
              Silakan daftar dengan mengisi data diri untuk membuat akun dan melanjutkan pemesanan
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Input Nama */}
            <div className="space-y-2">
              <label className="text-2xl font-bold text-stone-900 block">Nama</label>
              <input 
                name="nama"
                type="text" 
                required
                onChange={handleChange}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
              />
            </div>

            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-2xl font-bold text-stone-900 block">Email</label>
              <input 
                name="email"
                type="email" 
                required
                onChange={handleChange}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
              />
            </div>

            {/* Input No Telp */}
            <div className="space-y-2">
              <label className="text-2xl font-bold text-stone-900 block">No Telp</label>
              <input 
                name="noTelp"
                type="tel" 
                required
                onChange={handleChange}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
              />
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <label className="text-2xl font-bold text-stone-900 block">Password</label>
              <input 
                name="password"
                type="password" 
                required
                onChange={handleChange}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
              />
            </div>

            <div className="flex justify-center pt-6">
              <button 
                type="submit"
                className="bg-[#5B4E64] text-white px-20 py-4 rounded-xl text-2xl font-bold hover:bg-[#43394a] transition-all shadow-lg active:scale-95"
              >
                Daftar
              </button>
            </div>
          </form>

          <p className="text-center text-lg pt-4 border-t border-stone-100">
            Sudah memiliki akun? <Link href="/login" className="text-cyan-600 underline font-bold">Login</Link> Sekarang
          </p>
        </div>
      </div>
    </main>
  );
}