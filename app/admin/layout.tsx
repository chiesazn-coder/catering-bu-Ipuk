"use client"; // Tambahkan ini karena kita pakai icon komponen

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  HelpCircle, 
  ShoppingBag, 
  Info, 
  FileText, 
  Star, 
  CreditCard,
  LogOut 
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Beranda', icon: LayoutDashboard, href: '/admin' },
    { name: 'FAQ', icon: HelpCircle, href: '/admin/faq' },
    { name: 'Paket Menu', icon: ShoppingBag, href: '/admin/paket-menu' },
    { name: 'Tentang Kami', icon: Info, href: '/admin/tentang' },
    { name: 'Artikel', icon: FileText, href: '/admin/artikel' },
    { name: 'Review dan Rating', icon: Star, href: '/admin/review' },
    { name: 'Pembayaran', icon: CreditCard, href: '/admin/pembayaran' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* Header Atas */}
      <header className="bg-[#D9EAD3] px-12 py-3 flex justify-between items-center border-b border-stone-200 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
        </div>
        <span className="font-bold text-2xl text-stone-800">Admin</span>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Kiri */}
        <aside className="w-80 bg-[#4F5D33] text-white flex flex-col sticky top-20 h-[calc(100vh-80px)] shadow-xl">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold italic border-b border-white/20 pb-4">Admin</h2>
          </div>
          
          <nav className="flex-1 px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${
                    isActive 
                    ? "bg-white/20 shadow-inner" 
                    : "hover:bg-white/10"
                  }`}
                >
                  <Icon 
                    className={`w-6 h-6 transition-transform group-hover:scale-110 ${
                      isActive ? "text-white" : "text-white/70"
                    }`} 
                  />
                  <span className={`text-xl ${isActive ? "font-bold" : "font-medium text-white/90"}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Tombol Logout di Bawah Sidebar */}
          <div className="p-4 border-t border-white/10">
            <Link 
              href="/" 
              className="flex items-center gap-4 px-6 py-4 rounded-xl hover:bg-red-500/20 transition-colors text-white/80 hover:text-white"
            >
              <LogOut className="w-6 h-6" />
              <span className="text-xl">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Konten Utama */}
        <main className="flex-1 bg-white p-12 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}