"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup menu mobile

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Menu", href: "/paket-menu" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Artikel", href: "/artikel" },
    { name: "Review dan Rating", href: "/review" },
  ];

  return (
    <nav className="bg-[#D9EAD3] sticky top-0 z-50 border-b border-stone-200">
      <div className="flex items-center justify-between px-6 md:px-12 py-3">
        
        {/* Logo di Kiri */}
        <div className="flex items-center">
          <Link href="/">
            <div className="w-12 h-12 md:w-16 md:h-16 relative cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="Logo Bu Ipuk" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        
        {/* Menu Desktop (Hidden di Mobile) */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-2xl font-serif transition-colors duration-300 ${
                  isActive ? "text-stone-500 font-bold" : "text-stone-900 hover:text-stone-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Icon (Hanya muncul di Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-stone-900 focus:outline-none p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Hanya muncul saat isOpen true) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#D9EAD3] ${
          isOpen ? "max-h-screen opacity-100 border-t border-stone-200" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Tutup menu setelah klik link
                className={`text-xl font-serif ${
                  isActive ? "text-stone-500 font-bold" : "text-stone-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}