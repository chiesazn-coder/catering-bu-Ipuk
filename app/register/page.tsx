"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; 

export default function RegisterAdminPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noTelp: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([
            {
              id: authData.user.id,
              full_name: formData.nama,
              phone_number: formData.noTelp,
              role: "admin",
            },
          ]);

        if (profileError) throw profileError;

        alert("Registrasi Berhasil!");
        router.push("/login");
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Terjadi kesalahan yang tidak terduga.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-serif text-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl w-full p-4">
        
        {/* Sisi Kiri: Visual Logo - Ukuran Disesuaikan */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
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

        {/* Sisi Kanan: Form Register - Max Width Dikecilkan agar presisi */}
        <div className="flex-1 w-full max-w-sm md:max-w-md">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-3 leading-tight">Register</h1>
            <p className="text-xl leading-snug">
              Silakan daftar dengan mengisi data diri untuk membuat akun dan melanjutkan pemesanan
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Nama */}
            <div className="space-y-2">
              <label className="text-xl font-bold block">Nama</label>
              <input 
                type="text"
                value={formData.nama}
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none text-lg transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xl font-bold block">Email</label>
              <input 
                type="email"
                placeholder="ipuk@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none text-lg transition-all"
                required
              />
            </div>

            {/* No Telp */}
            <div className="space-y-2">
              <label className="text-xl font-bold block">No Telp</label>
              <input 
                type="text"
                value={formData.noTelp}
                onChange={(e) => setFormData({...formData, noTelp: e.target.value})}
                className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none text-lg transition-all"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xl font-bold block">Password</label>
              <input 
                type="password"
                placeholder="........"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#F0F0F0] shadow-inner focus:outline-none text-lg transition-all"
                required
              />
            </div>

            {/* Tombol Simpan - Ukuran Lebih Proporsional */}
            <div className="flex justify-center md:justify-end pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="bg-[#5C527F] text-white px-14 py-3 rounded-xl text-xl font-bold hover:bg-[#484063] transition-all active:scale-95 shadow-md min-w-[180px]"
              >
                {loading ? "..." : "Simpan"}
              </button>
            </div>
          </form>

          {errorMessage && (
            <p className="mt-4 text-red-600 text-center text-lg italic font-bold">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}