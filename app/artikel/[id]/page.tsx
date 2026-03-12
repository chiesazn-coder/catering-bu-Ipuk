"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Data artikel lengkap (Simulasi database)
const artikelContent = [
  {
    id: "1",
    judul: "Tips Memilih Menu Catering yang Tepat untuk Acara",
    tanggal: "12 Maret 2026",
    image: "/artikel-tips.png",
    isi: [
      "Memilih menu catering yang tepat merupakan hal yang sangat penting dalam sebuah acara, karena hidangan yang disajikan dapat mempengaruhi kenyamanan dan kepuasan para tamu yang hadir. Berikut adalah beberapa tips yang bisa Anda ikuti:",
      "1. Sesuaikan dengan Jenis Acara: Acara formal seperti pernikahan tentu membutuhkan menu yang berbeda dengan acara santai seperti ulang tahun atau piknik keluarga.",
      "2. Kenali Tamu Undangan: Pertimbangkan rentang usia tamu dan kemungkinan adanya pantangan makanan (dietary restrictions).",
      "3. Lakukan Food Tasting: Sebelum memesan dalam jumlah besar, pastikan Anda sudah mencoba rasa dan kualitas masakan dari penyedia katering.",
      "4. Pertimbangkan Variasi Menu: Pastikan ada keseimbangan antara karbohidrat, protein, sayuran, dan hidangan penutup.",
      "Dengan persiapan yang matang, hidangan katering akan menjadi salah satu bagian yang paling berkesan bagi tamu Anda."
    ]
  },
  // Tambahkan data artikel 2 dan 3 di sini...
];

export default function DetailArtikelPage() {
  const { id } = useParams();
  const router = useRouter();

  // Mencari artikel berdasarkan ID
  const artikel = artikelContent.find((item) => item.id === id) || artikelContent[0];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-5xl mx-auto px-6 py-16 font-serif">
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-stone-600 hover:text-black mb-8 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Kembali ke Artikel
        </button>

        {/* Judul Artikel */}
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
          {artikel.judul}
        </h1>
        
        <p className="text-stone-500 mb-10">{artikel.tanggal} • Oleh Admin Bu Ipuk</p>

        {/* Gambar Utama (Sesuai style gambar referensi) */}
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border border-stone-200 mb-12 shadow-sm">
          <Image 
            src={artikel.image} 
            alt={artikel.judul}
            fill
            className="object-cover"
          />
        </div>

        {/* Konten Artikel */}
        <div className="space-y-6 text-xl text-stone-800 leading-relaxed max-w-4xl">
          {artikel.isi.map((paragraf, index) => (
            <p key={index}>{paragraf}</p>
          ))}
        </div>

        {/* Garis Pembatas Bawah */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <p className="italic text-stone-500 text-center">
            Terima kasih telah membaca. Bagikan artikel ini jika bermanfaat.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}