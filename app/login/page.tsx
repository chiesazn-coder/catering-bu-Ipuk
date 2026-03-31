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
        router.push("/admin/dashboard"); 
        router.refresh(); 
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-serif text-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl w-full p-4 md:p-10">
        
        {/* Sisi Kiri: Visual Logo */}
        <div className="flex-1 flex justify-center animate-fade-in mb-6 md:mb-0">
          <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px]">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Sisi Kanan: Form Login */}
        <div className="flex-1 w-full max-w-sm">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-3 leading-tight">Login</h1>
            <p className="text-xl leading-snug">
              Silakan login untuk mengakses akun anda
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-7">
            <div className="space-y-3">
              <label className="text-xl font-bold block">Email</label>
              <input 
                type="email"
                placeholder="ipuk@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none focus:ring-2 focus:ring-stone-400 text-xl transition-all"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="text-xl font-bold block">Password</label>
              <input 
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none focus:ring-2 focus:ring-stone-400 text-xl transition-all"
                required
              />
            </div>

            <div className="flex flex-col items-center gap-6 pt-2">
              <div className="w-full flex justify-center">
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-[#5C527F] text-white px-16 py-3 rounded-lg text-2xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md"
                >
                  {loading ? "..." : "Login"}
                </button>
              </div>
              
              <p className="text-xl">
                Tidak memiliki akun? Buat{" "}
                <Link 
                  href="/register" 
                  className="text-[#6FB9C3] hover:underline font-bold"
                >
                  Akun
                </Link>{" "}
                Baru
              </p>
            </div>
          </form>

          {errorMessage && (
            <p className="mt-5 text-red-600 text-center text-lg italic font-bold">
              {errorMessage === "Invalid login credentials" ? "Email atau password salah!" : errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}