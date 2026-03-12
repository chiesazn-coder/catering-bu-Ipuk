"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Data Lengkap Paket 1 - 9
const paketData = [
  { id: "1", nama: "Paket 1", harga: 25000, image: "/paket1.png", deskripsi: "Nasi putih, daging srundeng, kering tempe, sambal goreng kreni, dadar telur, sambal, timun, dan kering kentang" },
  { id: "2", nama: "Paket 2", harga: 30000, image: "/paket2.png", deskripsi: "Nasi putih, tumis brokoli, semur ati, sambal goreng kreni, udang goreng tepung, dan jeruk" },
  { id: "3", nama: "Paket 3", harga: 28000, image: "/paket3.png", deskripsi: "Nasi putih, tempe goreng, sayur asam, gulai ayam, ikan goreng, dan sambal" },
  { id: "4", nama: "Paket 4", harga: 32000, image: "/paket4.png", deskripsi: "Nasi putih, ayam kecap, telur balado, sambal goreng kreni, mie tumis, capcay, jeruk, dan kerupuk" },
  { id: "5", nama: "Paket 5", harga: 22000, image: "/paket5.png", deskripsi: "Nasi putih, dendeng, sambal goreng kreni, tumis brokoli" },
  { id: "6", nama: "Paket 6", harga: 35000, image: "/paket6.png", deskripsi: "Nasi putih, ayam goreng, cumi goreng tepung, tumis buncis, tumis semur telur puyuh, dan emping" },
  { id: "7", nama: "Paket 7", harga: 27000, image: "/paket7.png", deskripsi: "Nasi putih dan merah, sayur tempe, ayam bakar, bakwan, daun singkong santan, jeruk, dan peyek" },
  { id: "8", nama: "Paket 8", harga: 18000, image: "/paket8.png", deskripsi: "Nasi kuning, ayam goreng, sambal kering tempe, sambal goreng kreni, dan timun" },
  { id: "9", nama: "Paket 9", harga: 21000, image: "/paket9.png", deskripsi: "Nasi putih, cumi goreng tepung, sop, sayur tahu kubis, dan pisang" },
];

export default function PemesananPage() {
  const { id } = useParams();
  const router = useRouter();
  
  // Mencari data paket berdasarkan ID di URL
  const paket = paketData.find((p) => p.id === id) || paketData[0];

  const [jumlah, setJumlah] = useState(1);
  const totalHarga = paket.harga * jumlah;

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Di sini kamu bisa menambahkan logic simpan data ke state management atau localStorage
    // Untuk sekarang, kita langsung arahkan ke halaman pembayaran
    router.push('/pembayaran');
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12 font-serif">
        <h1 className="text-3xl font-bold text-[#4C3F5E] mb-2">
          Pemesanan Paket Menu
        </h1>
        <p className="text-stone-600 mb-10">
          Lengkapi data pemesanan untuk memesan paket menu catering yang dipilih, setelah itu Anda dapat melanjutkan ke tahap pembayaran.
        </p>

        {/* Ringkasan Paket */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
          <div className="flex-1 order-2 md:order-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#2D4226]">{paket.nama}</h2>
              <span className="text-2xl font-bold text-stone-900">
                Rp {paket.harga.toLocaleString('id-ID')}
              </span>
            </div>
            <p className="text-lg leading-relaxed text-stone-800">
              {paket.deskripsi}
            </p>
          </div>
          <div className="w-full md:w-80 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md order-1 md:order-2">
            <Image src={paket.image} alt={paket.nama} fill className="object-cover" />
          </div>
        </div>

        {/* Form Pemesanan */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="font-bold block">Paket Pilihan</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="jenis" required className="w-5 h-5 accent-stone-800" /> 
                Box (minimal 30 porsi)
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="jenis" className="w-5 h-5 accent-stone-800" /> 
                Prasmanan (minimal 100 porsi)
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold block">Nama Pemesan</label>
            <input type="text" required className="w-full p-3 bg-[#F0F0F0] border border-stone-400 rounded-xl" />
          </div>

          <div className="space-y-2">
            <label className="font-bold block">No Telp</label>
            <input type="tel" required className="w-full p-3 bg-[#F0F0F0] border border-stone-400 rounded-xl" />
          </div>

          <div className="space-y-2">
            <label className="font-bold block">Alamat</label>
            <textarea rows={4} required className="w-full p-3 bg-[#F0F0F0] border border-stone-400 rounded-xl" />
          </div>

          <div className="space-y-2">
            <label className="font-bold block">Tanggal Pemesanan</label>
            <input type="date" required className="w-full p-3 bg-[#F0F0F0] border border-stone-400 rounded-xl" />
          </div>

          {/* Stepper Jumlah Porsi */}
          <div className="space-y-2">
            <label className="font-bold block">Jumlah Porsi</label>
            <div className="flex items-center gap-6 text-2xl">
              <button 
                type="button" 
                onClick={() => setJumlah(Math.max(1, jumlah - 1))} 
                className="font-bold text-stone-500 hover:text-black transition"
              > 
                - 
              </button>
              <span className="font-bold min-w-[20px] text-center">{jumlah}</span>
              <button 
                type="button" 
                onClick={() => setJumlah(jumlah + 1)} 
                className="font-bold text-stone-500 hover:text-black transition"
              > 
                + 
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold block">Catatan Tambahan (Opsi)</label>
            <textarea rows={6} className="w-full p-3 bg-[#F0F0F0] border border-stone-400 rounded-xl" />
          </div>

          {/* Footer Form: Total Harga */}
          <div className="pt-8 flex justify-between items-center border-t border-stone-300 mt-10">
            <span className="text-xl font-bold">Total Harga</span>
            <span className="text-2xl font-bold">
              Rp {totalHarga.toLocaleString('id-ID')}
            </span>
          </div>

          {/* Navigasi Tombol */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="w-full py-4 bg-[#A8A1A1] text-stone-900 font-bold rounded-lg shadow-md hover:bg-stone-400 transition"
            >
              Kembali
            </button>
            <button 
              type="submit" 
              className="w-full py-4 bg-[#5B4E64] text-white font-bold rounded-lg shadow-md hover:bg-[#43394a] transition"
            >
              Lanjut Pembayaran
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}