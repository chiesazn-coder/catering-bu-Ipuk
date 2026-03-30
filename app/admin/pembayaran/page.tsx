"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";

// 1. Interface yang sudah disinkronkan dengan Database (bukti_transfer)
interface Pembayaran {
  id: number;
  pilihan_paket: string;
  nama_pemesan: string;
  no_telp: string;
  alamat: string;
  jumlah_porsi: number;
  catatan: string;
  bukti_transfer: string; // Sesuai nama kolom di Supabase
  status: string;
  created_at: string;
}

export default function KelolaPembayaran() {
  const [pembayaranData, setPembayaranData] = useState<Pembayaran[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const supabase = createClient();

  // 2. Fungsi fetch data
  const fetchPembayaran = useCallback(async (isInitial = false) => {
    if (isInitial) setLoading(true);
    
    const { data, error } = await supabase
      .from("pembayaran")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPembayaranData(data as Pembayaran[]);
    }
    
    if (isInitial) setLoading(false);
  }, [supabase]);

  // 3. Sinkronisasi awal
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("pembayaran")
        .select("*")
        .order("created_at", { ascending: false });

      if (isMounted) {
        if (!error && data) {
          setPembayaranData(data as Pembayaran[]);
        }
        setLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [supabase]);

  // 4. Fungsi Update Status (Pending <-> Disetujui)
  const handleUpdateStatus = async (id: number, currentStatus: string) => {
    const nextStatus = currentStatus === "Disetujui" ? "Pending" : "Disetujui";
    const { error } = await supabase
      .from("pembayaran")
      .update({ status: nextStatus })
      .eq("id", id);

    if (!error) {
      setPembayaranData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: nextStatus } : item))
      );
    }
  };

  const filteredData = pembayaranData.filter((item) =>
    item.nama_pemesan?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-serif text-stone-900">
      <h2 className="text-4xl font-bold mb-2">Kelola Konfirmasi Pembayaran</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola informasi konfirmasi pembayaran catering
      </p>

      {/* Search Bar */}
      <div className="flex justify-end mb-12">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Cari nama pemesan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl shadow-inner"
          />
        </div>
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto border border-stone-800 shadow-sm bg-white">
        <table className="w-full text-left border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
              <th className="p-3 border-r border-stone-800 text-center w-12">Id</th>
              <th className="p-3 border-r border-stone-800 text-center">Paket</th>
              <th className="p-3 border-r border-stone-800">Nama Pemesan</th>
              <th className="p-3 border-r border-stone-800 text-center">No Telp</th>
              <th className="p-3 border-r border-stone-800">Alamat</th>
              <th className="p-3 border-r border-stone-800 text-center">Tanggal</th>
              <th className="p-3 border-r border-stone-800 text-center">Porsi</th>
              <th className="p-3 border-r border-stone-800">Catatan</th>
              <th className="p-3 border-r border-stone-800 text-center">Bukti</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={10} className="p-10 text-center italic text-stone-500">
                  Sinkronisasi dengan database...
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((data) => (
                <tr key={data.id} className="border-b border-stone-800 hover:bg-stone-50 transition-colors">
                  <td className="p-3 border-r border-stone-800 text-center font-bold align-top pt-4">{data.id}</td>
                  <td className="p-3 border-r border-stone-800 text-center align-top pt-4">{data.pilihan_paket}</td>
                  <td className="p-3 border-r border-stone-800 align-top pt-4 font-semibold">{data.nama_pemesan}</td>
                  <td className="p-3 border-r border-stone-800 text-center align-top pt-4">{data.no_telp}</td>
                  <td className="p-3 border-r border-stone-800 align-top pt-4 text-xs max-w-[150px] leading-tight">{data.alamat}</td>
                  <td className="p-3 border-r border-stone-800 text-center align-top pt-4 text-xs">
                    {new Date(data.created_at).toLocaleDateString("id-ID")}
                  </td>
                  <td className="p-3 border-r border-stone-800 text-center align-top pt-4 font-bold">{data.jumlah_porsi}</td>
                  <td className="p-3 border-r border-stone-800 align-top pt-4 text-xs italic max-w-[120px]">
                    &quot;{data.catatan || "-"}&quot;
                  </td>
                  <td className="p-3 border-r border-stone-800 text-center align-top pt-4">
                    {/* PERBAIKAN: Menggunakan data.bukti_transfer */}
                    {data.bukti_transfer ? (
                      <a href={data.bukti_transfer} target="_blank" rel="noopener noreferrer">
                        <div className="relative w-16 h-12 mx-auto border border-stone-300 bg-stone-100 shadow-sm hover:scale-110 transition-transform cursor-pointer">
                          <Image 
                            src={data.bukti_transfer} 
                            alt="Bukti Bayar" 
                            fill 
                            className="object-contain" 
                          />
                        </div>
                      </a>
                    ) : (
                      <span className="text-xs text-stone-400 italic">No Img</span>
                    )}
                  </td>
                  <td className="p-3 text-center align-top pt-4">
                    <button 
                      onClick={() => handleUpdateStatus(data.id, data.status)}
                      className={`px-3 py-1 rounded-md text-stone-900 font-bold border border-stone-400 text-xs transition-colors shadow-sm active:scale-95 ${
                        data.status === "Disetujui" ? "bg-[#A2C48E] hover:bg-[#8db377]" : "bg-yellow-200 hover:bg-yellow-300"
                      }`}
                    >
                      {data.status || "Pending"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="p-10 text-center text-stone-500 italic">
                  Tidak ada data pembayaran ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-center text-lg text-stone-800 italic">
        <p>Total {filteredData.length} data ditampilkan</p>
        <div className="flex gap-4 items-center not-italic">
          <button 
            onClick={() => fetchPembayaran(true)}
            className="bg-stone-200 px-4 py-2 rounded border border-stone-400 font-bold hover:bg-stone-300 transition-all text-base shadow-sm"
          >
            Refresh Data
          </button>
          <div className="flex border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5]">
            <button className="px-6 py-2 bg-white font-bold border-r border-stone-400">1</button>
          </div>
        </div>
      </div>
    </div>
  );
}