"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from "@/utils/supabase/client";

interface Paket {
  id: string;
  nama: string;
  harga: number;
  image: string;
  deskripsi: string;
}

const paketData: Paket[] = [
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
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const supabase = createClient();
  
  const paket = paketData.find((p) => p.id === id) || paketData[0];

  const [loading, setLoading] = useState(false);
  const [jenisPaket, setJenisPaket] = useState("Box");
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState(30); // Default minimal porsi sesuai teks form
  const [catatan, setCatatan] = useState("");

  const totalHarga = paket.harga * jumlah;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("pembayaran")
        .insert([
          {
            pilihan_paket: `${paket.nama} (${jenisPaket})`,
            nama_pemesan: nama,
            no_telp: telp,
            alamat: alamat,
            tanggal_pemesanan: tanggal,
            jumlah_porsi: jumlah,
            jumlah_bayar: totalHarga, // <-- SEKARANG HARGA OTOMATIS MASUK KE DATABASE
            catatan: catatan,
            status: "Pending",
          },
        ])
        .select();

      if (error) {
        alert("Gagal mengirim pesanan: " + error.message);
      } else if (data && data.length > 0) {
        router.push(`/pembayaran?id=${data[0].id}`);
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan sistem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pb-20 font-serif text-stone-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#4C3F5E] mb-3 italic">
          Pemesanan Paket Menu
        </h1>
        <p className="text-stone-600 mb-12 text-lg">
          Lengkapi data pemesanan untuk memesan paket menu catering yang dipilih.
        </p>

        {/* Ringkasan Paket */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-start">
          <div className="flex-1 order-2 md:order-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#2D4226]">{paket.nama}</h2>
              <span className="text-3xl font-bold text-black">
                Rp {paket.harga.toLocaleString('id-ID')}
              </span>
            </div>
            <p className="text-xl leading-relaxed text-stone-800">
              {paket.deskripsi}
            </p>
          </div>
          <div className="w-full md:w-[400px] relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-md order-1 md:order-2 border border-stone-200">
            <Image src={paket.image} alt={paket.nama} fill className="object-cover" />
          </div>
        </div>

        {/* Form Pemesanan */}
        <form onSubmit={handleSubmit} className="space-y-8 text-xl">
          <div className="space-y-4">
            <label className="font-bold block">Paket Pilihan</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="jenis" 
                  value="Box"
                  checked={jenisPaket === "Box"}
                  onChange={(e) => setJenisPaket(e.target.value)}
                  className="w-6 h-6 border-2 border-black" 
                /> 
                <span>Box (minimal 30 porsi)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="jenis" 
                  value="Prasmanan"
                  checked={jenisPaket === "Prasmanan"}
                  onChange={(e) => setJenisPaket(e.target.value)}
                  className="w-6 h-6 border-2 border-black" 
                /> 
                <span>Prasmanan (minimal 100 porsi)</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-bold block">Nama Pemesan</label>
            <input 
              type="text" 
              required 
              placeholder="Masukkan nama lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-4 bg-[#EBEBEB] border border-stone-400 rounded-xl outline-none" 
            />
          </div>

          <div className="space-y-3">
            <label className="font-bold block">No Telp</label>
            <input 
              type="tel" 
              required 
              placeholder="Contoh: 08123456789"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
              className="w-full p-4 bg-[#EBEBEB] border border-stone-400 rounded-xl outline-none" 
            />
          </div>

          <div className="space-y-3">
            <label className="font-bold block">Alamat Pengiriman</label>
            <textarea 
              rows={4} 
              required 
              placeholder="Masukkan alamat lengkap tujuan pengiriman"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full p-4 bg-[#EBEBEB] border border-stone-400 rounded-xl outline-none" 
            />
          </div>

          <div className="space-y-3">
            <label className="font-bold block">Tanggal Pemesanan</label>
            <input 
              type="date" 
              required 
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full p-4 bg-[#EBEBEB] border border-stone-400 rounded-xl outline-none" 
            />
          </div>

          <div className="space-y-3">
            <label className="font-bold block">Jumlah Porsi</label>
            <div className="flex items-center gap-8 bg-[#EBEBEB] w-fit px-6 py-2 rounded-xl border border-stone-400">
              <button 
                type="button" 
                onClick={() => setJumlah(Math.max(1, jumlah - 1))} 
                className="text-4xl font-bold hover:text-stone-500 transition px-2"
              > - </button>
              <span className="font-bold text-3xl min-w-[50px] text-center">{jumlah}</span>
              <button 
                type="button" 
                onClick={() => setJumlah(jumlah + 1)} 
                className="text-4xl font-bold hover:text-stone-500 transition px-2"
              > + </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-bold block">Catatan Tambahan (Opsi)</label>
            <textarea 
              rows={4} 
              placeholder="Contoh: Sambal dipisah, minta sendok plastik, dll."
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full p-4 bg-[#EBEBEB] border border-stone-400 rounded-xl outline-none" 
            />
          </div>

          {/* Footer Total */}
          <div className="pt-12 flex justify-between items-center border-t-2 border-stone-800 mt-16">
            <span className="text-3xl font-bold">Total Harga</span>
            <div className="text-right">
              <span className="text-4xl font-bold text-[#4C3F5E]">
                Rp {totalHarga.toLocaleString('id-ID')}
              </span>
              <p className="text-sm text-stone-500 italic mt-1">(Belum termasuk ongkir jika ada)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="w-full py-5 bg-[#A8A1A1] text-black font-bold rounded-xl shadow-md hover:bg-stone-400 transition text-2xl"
            >
              Kembali
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-5 bg-[#4C435F] text-white font-bold rounded-xl shadow-lg hover:bg-[#3b344a] transition text-2xl active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? "Menyimpan..." : "Lanjut Pembayaran"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}