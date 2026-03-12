import Image from 'next/image';

export default function MapsSection() {
  return (
    <section className="px-12 py-16 max-w-7xl mx-auto">
      {/* Judul Section */}
      <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">
        Maps Lokasi
      </h2>

      {/* Container Gambar Maps */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden border border-stone-300 shadow-md">
        {/* Pastikan kamu sudah menyimpan screenshot maps tersebut 
            di folder public dengan nama 'maps-lokasi.png' 
        */}
        <Image 
          src="/maps-lokasi.png" 
          alt="Lokasi Catering Bu Ipuk Nartoyo"
          fill
          className="object-cover"
        />
        
        {/* Overlay opsional agar terlihat lebih interaktif saat di-hover */}
        <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors cursor-pointer" />
      </div>

      {/* Info Tambahan di bawah Map (Opsional agar lebih informatif) */}
      <div className="mt-4">
        <p className="font-serif text-stone-700 italic">
          * Klik gambar untuk membuka di Google Maps
        </p>
      </div>
    </section>
  );
}