import React from 'react';
import Link from 'next/link';

const GallerySection = () => {
  const images = [
    { src: '/galeri1.png', alt: 'Catering Buffet' },
    { src: '/galeri2.png', alt: 'Hampers Besek' },
    { src: '/galeri3.png', alt: 'Menu Makanan' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-serif">
      <h2 className="text-3xl font-bold text-stone-900 mb-8">Galeri</h2>
      
      {/* Grid Gambar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya */}
      <div className="mt-10">
        <Link href="/galeri">
          <button className="w-full py-4 bg-[#B2A9A9] text-stone-900 text-xl font-medium rounded-sm border border-stone-400 hover:bg-[#a39a9a] transition-all active:scale-[0.98] shadow-sm">
            Lihat Selengkapnya
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;