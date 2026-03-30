"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Pesanan {
  id: number;
  nama_pemesan: string;
  jumlah_bayar: number | null;
  status: string;
}

export default function AdminDashboard() {
  const [pesanan, setPesanan] = useState<Pesanan[]>([]);
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      
      // 1. Ambil data pesanan terbaru (limit 5 untuk ringkasan di beranda)
      const { data, error, count } = await supabase
        .from("pembayaran")
        .select("id, nama_pemesan, jumlah_bayar, status", { count: "exact" })
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPesanan(data.slice(0, 5)); // Hanya ambil 5 teratas untuk tabel ringkasan
        setTotalPesanan(count || 0);

        // 2. Hitung Total Pendapatan dari semua yang statusnya "Disetujui"
        const total = data
          .filter((item) => item.status === "Disetujui" && item.jumlah_bayar)
          .reduce((acc, curr) => acc + (curr.jumlah_bayar || 0), 0);
        
        setTotalPendapatan(total);
      }
      setLoading(false);
    };

    fetchDashboardData();
  }, [supabase]);

  // Fungsi format rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Dummy reviews (bisa kamu ganti nanti kalau tabel review sudah ada)
  const reviews = [
    { nama: "Melina Yasniti Syah", text: "Masakannya enak, gurih, bumbunya pas, patut untuk dicoba lagi" },
    { nama: "Iskandar Raditya", text: "Nasinya pulen, lauk yang dibuat gurih pas dengan bumbu cita rasanya..." },
  ];

  return (
    <div className="font-serif text-stone-900">
      <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
      <p className="text-xl text-stone-700 mb-8 leading-tight">
        Halaman admin digunakan untuk mengelola konten dan informasi pada website catering
      </p>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#EEF7C5] p-10 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm border border-stone-200">
          <h3 className="text-3xl font-bold mb-6">Total Pesanan</h3>
          <p className="text-5xl font-bold">{loading ? "..." : totalPesanan}</p>
        </div>
        <div className="bg-[#B3BC8E] p-10 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm border border-stone-200">
          <h3 className="text-3xl font-bold mb-6">Total Pendapatan</h3>
          <p className="text-4xl font-bold">{loading ? "..." : formatRupiah(totalPendapatan)}</p>
          <p className="text-sm mt-2 italic text-stone-700">*Dari pesanan yang disetujui</p>
        </div>
      </div>

      {/* Tabel Pesanan Terbaru */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-3xl font-bold">Pesanan Terbaru</h3>
          <p className="text-stone-500 italic">Menampilkan 5 data terakhir</p>
        </div>
        <div className="overflow-x-auto border border-stone-800 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
                <th className="p-4 border-r border-stone-800 text-center w-16">Id</th>
                <th className="p-4 border-r border-stone-800 text-center">Nama Pemesan</th>
                <th className="p-4 border-r border-stone-800 text-center">Harga</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} className="p-10 text-center italic">Memuat data...</td></tr>
              ) : pesanan.length > 0 ? (
                pesanan.map((item) => (
                  <tr key={item.id} className="border-b border-stone-800 last:border-b-0">
                    <td className="p-4 border-r border-stone-800 font-bold text-center">{item.id}</td>
                    <td className="p-4 border-r border-stone-800 text-xl font-semibold">{item.nama_pemesan}</td>
                    <td className="p-4 border-r border-stone-800 text-xl text-center">
                      {item.jumlah_bayar ? formatRupiah(item.jumlah_bayar) : <span className="text-stone-400 italic text-sm">Belum diinput</span>}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-6 py-1 rounded-md text-stone-900 font-bold border border-stone-400 ${item.status === 'Disetujui' ? 'bg-[#A2C48E]' : 'bg-yellow-200'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={4} className="p-10 text-center italic">Belum ada pesanan masuk.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Review Terbaru */}
      <section>
        <h3 className="text-3xl font-bold mb-6">Review Terbaru</h3>
        <div className="border border-stone-800 divide-y divide-stone-800 bg-white shadow-sm">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-stretch hover:bg-stone-50">
              <div className="p-6 flex-1 border-b md:border-b-0 md:border-r border-stone-800">
                <h4 className="text-2xl font-bold mb-2">{rev.nama}</h4>
                <p className="text-lg leading-relaxed text-stone-800 italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="p-6 flex items-center justify-center md:w-32">
                <button className="bg-[#606060] text-white px-6 py-2 rounded-lg font-bold hover:bg-stone-700 transition-colors">
                  Baca
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}