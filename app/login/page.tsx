"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient(); 

  // Cek apakah user sudah login saat halaman dibuka
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push("/admin/dashboard");
      }
    };
    checkUser();
  }, [router, supabase]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        // Berhasil login
        router.push("/admin/dashboard"); 
        router.refresh(); 
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan sistem yang tidak terduga.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Sisi Kiri: Visual Logo */}
        <div className="flex-1 flex justify-center animate-fade-in">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk" 
              fill 
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Sisi Kanan: Card Form */}
        <div className="flex-1 w-full max-w-md bg-white p-2">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-5xl font-serif font-bold text-stone-800 mb-3">Login</h1>
            <p className="text-xl text-stone-500 font-serif">
              Portal Khusus Staff & Admin Catering
            </p>
          </div>

          {/* Alert Error jika login gagal */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-lg">
              <p className="font-bold text-sm">Gagal Login</p>
              <p className="text-xs">{errorMessage === "Invalid login credentials" ? "Email atau password salah." : errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-bold font-serif text-stone-700">Email</label>
              <input 
                type="email"
                placeholder="admin@buipuk.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4E64] transition-all placeholder:text-stone-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-bold font-serif text-stone-700">Password</label>
              <input 
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4E64] transition-all placeholder:text-stone-400"
                required
              />
            </div>

            <div className="flex flex-col items-center gap-6 pt-4">
              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-4 bg-[#5B4E64] text-white text-xl font-bold rounded-xl hover:bg-[#4a3f52] active:scale-95 transition-all shadow-lg shadow-stone-200 ${
                  loading ? "opacity-70 cursor-wait" : ""
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </span>
                ) : "Login"}
              </button>
              
              <div className="text-center space-y-2">
                <p className="text-stone-500 font-serif">
                  Bukan staff? {" "}
                  <Link href="/" className="text-[#5B4E64] hover:underline font-bold transition-all">
                    Kembali ke Beranda
                  </Link>
                </p>
                <p className="text-xs text-stone-400">
                  © 2026 Catering Bu Ipuk Nartoyo
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}