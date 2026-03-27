"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    const confirmLogout = confirm("Apakah Anda yakin ingin keluar dari portal admin?");
    if (confirmLogout) {
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    }
  };

  const menuItems = [
    { 
      name: "Beranda", 
      href: "/admin/dashboard", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "FAQ", 
      href: "/admin/faq", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Paket Menu", 
      href: "/admin/menu", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      name: "Tentang Kami", 
      href: "/admin/tentang", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Galeri", 
      href: "/admin/galeri", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
        </svg>
      )
    },
    { 
      name: "Pembayaran", 
      href: "/admin/pembayaran", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: "Review dan Rating", 
      href: "/admin/review", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* HEADER */}
      <header className="bg-[#D9EAD3] px-6 py-3 flex justify-between items-center border-b border-stone-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold text-stone-800">Catering Bu Ipuk</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-800">Admin</h1>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-[#576743] text-white flex flex-col justify-between">
          <div>
            <div className="p-6 text-center border-b border-white/10">
              <h2 className="text-xl font-bold tracking-widest uppercase">Admin</h2>
            </div>
            <nav className="mt-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 px-6 py-4 hover:bg-black/10 transition-all border-l-4 ${
                      isActive ? "bg-black/20 border-white font-bold" : "border-transparent"
                    }`}
                  >
                    <span className="text-white">{item.icon}</span>
                    <span className="text-lg">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-6 py-8 hover:bg-red-900/30 transition-colors mt-auto border-t border-white/10 group"
          >
            <svg className="w-6 h-6 text-white group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-lg font-bold">Logout</span>
          </button>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 bg-white">
          <div className="p-8 max-w-6xl min-h-screen">
            {children}
          </div>

          {/* FOOTER */}
          <footer className="bg-[#D9EAD3] p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-800 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6">Alamat :</h3>
                <p className="text-xl leading-relaxed">
                  Perum APH B-23 Seturan Baru, Kledokan,<br />
                  Caturtunggal, Depok, Sleman, Yogyakarta
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Hubungi Kami :</h3>
                <p className="text-xl">Telp : 08274486304</p>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-stone-400/30 text-center text-stone-600">
              © 2026 Catering Bu Ipuk Nartoyo. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}