import Image from 'next/image';
import Link from 'next/link';

const menus = [
  {
    id: 1,
    nama: "Paket 1",
    harga: "Rp 25.000",
    deskripsi: "Nasi putih, daging srundeng, kering tempe, sambal goreng kreni, dadar telur, sambal, timun, dan kering kentang",
    image: "/paket1.png"
  },
  {
    id: 2,
    nama: "Paket 2",
    harga: "Rp 30.000",
    deskripsi: "Nasi putih, tumis brokoli, semur ati, sambal goreng kreni, udang goreng tepung, dan jeruk",
    image: "/paket2.png"
  },
  {
    id: 3,
    nama: "Paket 3",
    harga: "Rp 28.000",
    deskripsi: "Nasi putih, tempe goreng, sayur asam, gulai ayam, ikan goreng, dan sambal",
    image: "/paket3.png"
  }
];

export default function MenuSection() {
  return (
    <section className="px-12 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 italic">
        Paket Tersedia
      </h2>

      {/* Grid Menu */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {menus.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#A7BC9F] rounded-[2.5rem] p-6 border border-stone-300 shadow-sm flex flex-col"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 border border-stone-400">
              <Image 
                src={item.image} 
                alt={item.nama}
                fill
                className="object-cover"
              />
            </div>

            {/* Header Menu */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-serif font-bold text-[#2D4226]">{item.nama}</h3>
              <span className="text-xl font-serif font-bold text-stone-900">{item.harga}</span>
            </div>

            {/* Deskripsi */}
            <p className="text-stone-900 font-serif leading-snug mb-8 flex-grow">
              {item.deskripsi}
            </p>

            {/* Tombol Lanjut Pemesanan - Langsung ke dynamic route [id] */}
            <Link href={`/paket-menu/${item.id}`} className="w-full">
              <button className="w-full bg-[#5B4E64] text-white py-3 rounded-xl font-serif text-xl font-medium hover:bg-[#43394a] transition shadow-md active:scale-95">
                Lanjut Pemesanan
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Selengkapnya - Mengarah ke halaman daftar paket menu lengkap */}
      <Link href="/paket-menu" className="w-full">
        <button className="w-full bg-[#B3A9A9] text-stone-900 py-4 rounded-xl font-serif text-2xl font-medium hover:bg-[#a19797] transition border border-stone-400 shadow-sm active:scale-[0.99]">
          Lihat Selengkapnya
        </button>
      </Link>
    </section>
  );
}