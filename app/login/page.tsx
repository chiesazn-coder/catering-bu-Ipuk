"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// Pastikan path @/utils/... sudah benar sesuai letak folder utils kamu
import { createClient } from "@/utils/supabase/client"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  // Panggil fungsi createClient() di sini
  const supabase = createClient(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Gagal Login: " + error.message);
      } else {
        alert("Selamat Datang, Login Berhasil!");
        router.push("/admin/dashboard"); 
        router.refresh(); 
      }
    } catch (err) {
      alert("Terjadi kesalahan sistem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
        
        {/* Sisi Kiri: Logo */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Sisi Kanan: Form */}
        <div className="flex-1 w-full max-w-md text-stone-900">
          <h1 className="text-4xl font-serif font-bold mb-2">Login</h1>
          <p className="text-lg text-stone-600 mb-8 font-serif leading-tight">
            Silakan login untuk mengakses akun anda
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xl font-bold font-serif mb-2">Email</label>
              <input 
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none focus:ring-2 focus:ring-[#5B4E64] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xl font-bold font-serif mb-2">Password</label>
              <input 
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-300 bg-[#F3F1F5] focus:outline-none focus:ring-2 focus:ring-[#5B4E64] transition-all"
                required
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <button 
                type="submit"
                disabled={loading}
                className={`w-48 py-3 bg-[#5B4E64] text-white text-xl font-bold rounded-lg hover:bg-[#4a3f52] transition-all shadow-md ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Memproses..." : "Login"}
              </button>
              
              <p className="text-lg font-serif">
                Tidak memiliki akun? {" "}
                <Link href="/register" className="text-cyan-600 hover:underline font-semibold">
                  Buat Akun Baru
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}