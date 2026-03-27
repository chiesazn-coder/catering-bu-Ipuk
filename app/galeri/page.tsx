"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GaleriPage() {
  // Data gambar (silakan ganti path src dengan file asli kamu)
  const galeriImages = [
    { id: 1, src: '/images/galeri1.png', alt: 'Prasmanan Catering' },
    { id: 2, src: '/images/galeri2.png', alt: 'Hampers Besek Biru' },
    { id: 3, src: '/images/galeri3.png', alt: 'Lauk Pauk Catering' },
    { id: 4, src: '/images/galeri4.png', alt: 'Olahan Bakso Balado' },
    { id: 5, src: '/images/galeri5.png', alt: 'Produksi Box Catering' },
    { id: 6, src: '/images/galeri6.png', alt: 'Nasi Kuning Kotak' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 font-serif">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5B4E64] mb-4">
            Galeri
          </h1>
          <p className="text-xl text-stone-800 italic">
            Beberapa gambaran mengenai Catering Bu Ipuk Nartoyo
          </p>
        </div>

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeriImages.map((image) => (
            <div 
              key={image.id} 
              className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-sm border border-stone-100 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}