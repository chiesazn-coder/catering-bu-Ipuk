import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const paketData = [
  { id: 1, nama: "Paket 1", harga: "Rp 25.000", image: "/paket1.png", deskripsi: "Nasi putih, daging srundeng, kering tempe, sambal goreng kreni, dadar telur, sambal, timun, dan kering kentang" },
  { id: 2, nama: "Paket 2", harga: "Rp 30.000", image: "/paket2.png", deskripsi: "Nasi putih, tumis brokoli, semur ati, sambal goreng kreni, udang goreng tepung, dan jeruk" },
  { id: 3, nama: "Paket 3", harga: "Rp 28.000", image: "/paket3.png", deskripsi: "Nasi putih, tempe goreng, sayur asam, gulai ayam, ikan goreng, dan sambal" },
  { id: 4, nama: "Paket 4", harga: "Rp 32.000", image: "/paket4.png", deskripsi: "Nasi putih, ayam kecap, telur balado, sambal goreng kreni, mie tumis, capcay, jeruk, dan kerupuk" },
  { id: 5, nama: "Paket 5", harga: "Rp 22.000", image: "/paket5.png", deskripsi: "Nasi putih, dendeng, sambal goreng kreni, tumis brokoli" },
  { id: 6, nama: "Paket 6", harga: "Rp 35.000", image: "/paket6.png", deskripsi: "Nasi putih, ayam goreng, cumi goreng tepung, tumis buncis, tumis semur telur puyuh, dan emping" },
  { id: 7, nama: "Paket 7", harga: "Rp 27.000", image: "/paket7.png", deskripsi: "Nasi putih dan merah, sayur tempe, ayam bakar, bakwan, daun singkong santan, jeruk, dan peyek" },
  { id: 8, nama: "Paket 8", harga: "Rp 18.000", image: "/paket8.png", deskripsi: "Nasi kuning, ayam goreng, sambal kering tempe, sambal goreng kreni, dan timun" },
  { id: 9, nama: "Paket 9", harga: "Rp 21.000", image: "/paket9.png", deskripsi: "Nasi putih, cumi goreng tepung, sop, sayur tahu kubis, dan pisang" },
];

export default function PaketMenuPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Halaman */}
      <section className="px-12 pt-16 pb-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#4C3F5E] mb-4 italic">
          Paket Menu
        </h1>
        <p className="text-xl font-serif text-stone-800">
          Pilihan paket menu catering dengan kualitas makanan yang terjaga dan rasa yang lezat
        </p>
      </section>

      {/* Grid Paket Menu */}
      <section className="px-12 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paketData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#A7BC9F] rounded-[2.5rem] p-6 border border-stone-800 flex flex-col shadow-sm"
            >
              {/* Gambar Paket */}
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 border border-stone-400">
                <Image 
                  src={item.image} 
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Judul & Harga */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-serif font-bold text-[#2D4226]">
                  {item.nama}
                </h3>
                <span className="text-xl font-serif font-bold text-stone-900">
                  {item.harga}
                </span>
              </div>

              {/* Deskripsi Menu */}
              <p className="text-stone-900 font-serif leading-snug mb-8 flex-grow">
                {item.deskripsi}
              </p>

              {/* Tombol Pemesanan */}
              <Link href={`/paket-menu/${item.id}`} className="w-full">
                <button className="w-full bg-[#5B4E64] text-white py-3 rounded-xl font-serif text-xl font-medium">
                  Lanjut Pemesanan
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}