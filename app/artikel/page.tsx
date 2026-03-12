import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const artikelData = [
  {
    id: 1,
    judul: "Tips Memilih Menu Catering yang Tepat untuk Acara",
    deskripsi: "Memilih menu catering yang tepat merupakan hal yang sangat penting dalam sebuah acara, karena hidangan yang disajikan dapat mempengaruhi kenyamanan dan kepuasan para tamu yang hadir",
    image: "/artikel-tips.png" // Simpan gambar prasmanan kayu di public
  },
  {
    id: 2,
    judul: "Cara Menentukan Jumlah Porsi Catering untuk Acara",
    deskripsi: "Menentukan jumlah porsi merupakan hal penting dalam pemesanan catering. Umumnya jumlah porsi disesuaikan dengan jumlah tamu yang hadir serta jenis acara yang diselenggarakan.",
    image: "/artikel-porsi.png" // Simpan gambar besek pita biru di public
  },
  {
    id: 3,
    judul: "Keuntungan Menggunakan Jasa Catering untuk Acara",
    deskripsi: "Menggunakan jasa catering dapat membantu mempermudah persiapan acara karena Anda tidak perlu repot menyiapkan makanan sendiri. Selain menghemat waktu dan tenaga, catering juga menyediakan menu yang lebih bervariasi serta penyajian yang lebih rapi dan profesional",
    image: "/artikel-untung.png" // Simpan gambar piring di public
  }
];

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="px-12 py-16 max-w-7xl mx-auto space-y-10">
        {artikelData.map((artikel) => (
          <div 
            key={artikel.id} 
            className="bg-[#A7BC9F] border border-stone-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start"
          >
            {/* Sisi Kiri: Teks */}
            <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {artikel.judul}
              </h2>
              <p className="text-lg md:text-xl font-serif text-stone-900 leading-relaxed mb-8">
                {artikel.deskripsi}
              </p>
              
              {/* Tombol Ungu */}
              <Link href={`/artikel/${artikel.id}`}>
                <button className="bg-[#5B4E64] text-white px-8 py-3 rounded-xl font-serif text-lg font-medium hover:bg-[#483d50] transition shadow-md">
                  Lihat Selengkapnya
                </button>
              </Link>
            </div>

            {/* Sisi Kanan: Gambar */}
            <div className="w-full md:w-[400px] shrink-0">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-stone-400">
                <Image 
                  src={artikel.image} 
                  alt={artikel.judul}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}