"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Daftar menu navigasi
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Menu", href: "/paket-menu" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Artikel", href: "/artikel" },
    { name: "Review dan Rating", href: "/review" },
  ];

  return (
    <nav className="flex items-center justify-between px-12 py-3 bg-[#D9EAD3] sticky top-0 z-50 border-b border-stone-200">
      {/* Logo di Kiri */}
      <div className="flex items-center">
        <Link href="/">
          <div className="w-16 h-16 relative cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="Logo Bu Ipuk" 
              fill 
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      
      {/* Menu di Kanan */}
      <div className="flex gap-10">
        {navLinks.map((link) => {
          // Cek apakah link ini sedang aktif
          const isActive = pathname === link.href;

          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-2xl font-serif transition-colors duration-300 ${
                isActive 
                  ? "text-stone-500 font-bold" // Warna font saat halaman dibuka (Active)
                  : "text-stone-900 hover:text-stone-500" // Warna font default
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}