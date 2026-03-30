"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Menu", href: "/paket-menu" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Galeri", href: "/galeri" },
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
        
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
           {/* Ikon Portal Admin Mobile (di luar drawer agar cepat diakses) */}
           <Link href="/login" className="text-stone-900">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

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

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#D9EAD3] ${
          isOpen ? "max-h-screen opacity-100 border-t border-stone-200" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 font-serif">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-xl ${
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