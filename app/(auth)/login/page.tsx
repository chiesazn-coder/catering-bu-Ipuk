"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Memanggil API login
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();

    if (data.success) {
      alert("Selamat Datang Bu Ipuk!");
      router.push('/admin'); // Redirect ke dashboard admin
    } else {
      alert(data.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6 font-serif">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* SISI KIRI: Logo */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk Catering" 
              fill 
              className="object-contain"
              priority // Mempercepat loading gambar utama
            />
          </div>
        </div>

        {/* SISI KANAN: Form */}
        <div className="space-y-10 md:pl-10">
          <div>
            <h1 className="text-5xl font-bold text-stone-900 mb-2">Login</h1>
            <p className="text-stone-700 text-xl leading-snug max-w-md">
              Silakan login untuk mengakses akun anda
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-7">
            {/* Input Email */}
            <div className="space-y-3">
              <label className="text-2xl font-bold text-stone-900 block">
                Email
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
                placeholder="Masukkan email anda..."
              />
            </div>

            {/* Input Password */}
            <div className="space-y-3">
              <label className="text-2xl font-bold text-stone-900 block">
                Password
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-[#F3F1F5] border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#5B4E64] shadow-inner text-lg" 
                placeholder="Masukkan password anda..."
              />
            </div>

            {/* Tombol Login (Disesuaikan agar mirip gambar) */}
            <div className="flex justify-center pt-8">
              <button 
                type="submit"
                className="bg-[#5B4E64] text-white px-20 py-4 rounded-xl text-2xl font-bold hover:bg-[#43394a] transition-all shadow-lg active:scale-95"
              >
                Login
              </button>
            </div>
          </form>

          {/* Bagian Bawah Form */}
          <div className="pt-6 border-t border-stone-100 mt-12">
            <p className="text-center text-xl text-stone-800">
              Tidak memiliki akun? Buat <Link href="/daftar" className="text-cyan-600 underline font-bold hover:text-cyan-700">Akun</Link> Baru
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}