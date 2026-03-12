import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-12 py-16 max-w-7xl mx-auto">
      
      {/* Kolon Kiri: Teks */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-serif font-bold text-brand-text leading-tight">
          Selamat Datang
        </h1>
        <h2 className="text-4xl font-serif font-bold text-brand-text leading-tight">
          di Catering Bu Ipuk Nartoyo
        </h2>
        <p className="text-xl text-stone-800 leading-relaxed font-serif max-w-xl">
          Kami menyediakan berbagai pilihan paket menu catering yang lezat dan 
          berkualitas untuk memenuhi kebutuhan acara Anda, mulai dari acara 
          keluarga hingga berbagai kegiatan lainnya
        </p>
      </div>

      {/* Kolom Kanan: Gambar (DIPERBAIKI) */}
      <div className="flex-1 flex justify-center md:justify-end">
        {/*
          1. Kita hapus aspect-[4/3] agar tidak memaksa kotak jadi melebar.
          2. Kita ganti aspect-[3/4] (portrait) agar sesuai proporsi gambar asli.
          3. Kita batasi tinggi maksimalnya (h-[500px]) agar tidak terlalu tinggi di layar besar.
        */}
        <div className="relative w-full max-w-[400px] aspect-[3/4] h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
          <Image 
            src="/chef-cooking.png" 
            alt="Chef Cooking"
            fill
            className="object-cover object-top" // object-top untuk memastikan wajah chef tidak terpotong jika ada penyesuaian
            priority
          />
        </div>
      </div>

    </section>
  );
}