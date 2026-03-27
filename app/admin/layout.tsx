"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Beranda", href: "/admin/dashboard", icon: "🏠" },
    { name: "FAQ", href: "/admin/faq", icon: "❓" },
    { name: "Paket Menu", href: "/admin/menu", icon: "🍱" },
    { name: "Tentang Kami", href: "/admin/tentang", icon: "ℹ️" },
    { name: "Galeri", href: "/admin/galeri", icon: "🖼️" },
    { name: "Pembayaran", href: "/admin/pembayaran", icon: "💵" },
    { name: "Review dan Rating", href: "/admin/review", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* HEADER */}
      <header className="bg-[#D9EAD3] px-6 py-3 flex justify-between items-center border-b border-stone-200">
        <div className="w-10 h-10 relative">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <h1 className="text-2xl font-bold text-stone-800">Admin</h1>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-[#576743] text-white flex flex-col justify-between">
          <div>
            <div className="p-6 text-center border-b border-white/20">
              <h2 className="text-xl font-bold">Admin</h2>
            </div>
            <nav className="mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-6 py-3 hover:bg-black/10 transition-colors ${
                    pathname === item.href ? "bg-black/20" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <button className="flex items-center gap-4 px-6 py-8 hover:bg-black/10 mt-auto">
            <span>🚪</span> Logout
          </button>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 bg-white">
          <div className="p-8 max-w-5xl">
            {children}
          </div>

          {/* FOOTER (Sesuai Desain) */}
          <footer className="bg-[#D9EAD3] p-12 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-800">
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