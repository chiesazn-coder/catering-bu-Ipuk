import Image from 'next/image';

export default function MapsSection() {
  // Gunakan Place ID agar link lebih akurat dan menampilkan informasi bisnis lengkap
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Catering+Bu+Ipuk+Nartoyo&query_place_id=ChIJOSexsJZZei4RapWd3xffifA";

  return (
    <section className="px-12 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8">
        Maps Lokasi
      </h2>

      {/* Container Gambar Maps dibungkus dengan Link */}
      <a 
        href={googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden border border-stone-300 shadow-md group"
      >
        <Image 
          src="/maps-lokasi.png" 
          alt="Lokasi Catering Bu Ipuk Nartoyo"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Interaktif */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors cursor-pointer flex items-center justify-center">
            <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-stone-800">
                Buka di Google Maps
            </span>
        </div>
      </a>

      <div className="mt-4">
        <p className="font-serif text-stone-700 italic">
          * Klik gambar untuk membuka di Google Maps
        </p>
      </div>
    </section>
  );
}