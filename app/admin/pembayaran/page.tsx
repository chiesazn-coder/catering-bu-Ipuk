"use client";

import Image from "next/image";

export default function KelolaPembayaran() {
  const pembayaranData = [
    {
      id: 1,
      pilihanPaket: "Box",
      namaPemesan: "Regina Nauli Tyas",
      noTelp: "082248950584",
      alamat: "Jalan Mahoni Griya Perumnas Nagumi Blok.F No.78, Sleman",
      tanggalPemesanan: "20/07/2026",
      jumlahPorsi: 40,
      catatan: "Telurnya tidak usah diiris, hanya berbentuk dadar",
      buktiBayar: "/bukti-transfer.jpg", // Ganti dengan path file struk di folder public
      status: "Disetujui",
    },
  ];

  return (
    <div className="font-serif text-stone-900">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Kelola Konfirmasi Pembayaran</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola informasi konfirmasi pembayaran catering
      </p>

      {/* Baris Cari */}
      <div className="flex justify-end mb-12">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Cari"
            className="w-full p-4 bg-[#D9D9D9] rounded-xl focus:outline-none placeholder-stone-600 text-xl"
          />
        </div>
      </div>

      {/* Tabel Pembayaran Luas */}
      <div className="overflow-x-auto border border-stone-800">
        <table className="w-full text-left border-collapse bg-white text-base">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
              <th className="p-3 border-r border-stone-800 text-center">Id</th>
              <th className="p-3 border-r border-stone-800 text-center">Pilihan Paket</th>
              <th className="p-3 border-r border-stone-800 text-center">Nama Pemesan</th>
              <th className="p-3 border-r border-stone-800 text-center">No Telp</th>
              <th className="p-3 border-r border-stone-800 text-center">Alamat</th>
              <th className="p-3 border-r border-stone-800 text-center">Tanggal Pemesanan</th>
              <th className="p-3 border-r border-stone-800 text-center">Jumlah Porsi</th>
              <th className="p-3 border-r border-stone-800 text-center">Catatan</th>
              <th className="p-3 border-r border-stone-800 text-center">Bukti Pembayaran</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {pembayaranData.map((data) => (
              <tr key={data.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-3 border-r border-stone-800 text-center font-bold align-top pt-4">{data.id}</td>
                <td className="p-3 border-r border-stone-800 text-center align-top pt-4">{data.pilihanPaket}</td>
                <td className="p-3 border-r border-stone-800 align-top pt-4">{data.namaPemesan}</td>
                <td className="p-3 border-r border-stone-800 text-center align-top pt-4">{data.noTelp}</td>
                <td className="p-3 border-r border-stone-800 align-top pt-4 text-sm max-w-[150px] leading-tight">{data.alamat}</td>
                <td className="p-3 border-r border-stone-800 text-center align-top pt-4 text-sm">{data.tanggalPemesanan}</td>
                <td className="p-3 border-r border-stone-800 text-center align-top pt-4 font-bold">{data.jumlahPorsi}</td>
                {/* PERBAIKAN DI SINI: Menggunakan &quot; untuk membungkus catatan */}
                <td className="p-3 border-r border-stone-800 align-top pt-4 text-sm max-w-[150px] italic">
                   &quot;{data.catatan}&quot;
                </td>
                <td className="p-3 border-r border-stone-800 text-center align-top pt-4">
                  <div className="relative w-20 h-16 mx-auto border border-stone-300 bg-stone-100">
                    <Image 
                      src={data.buktiBayar} 
                      alt="Bukti Transfer"
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>
                <td className="p-3 text-center align-top pt-4">
                  <span className="bg-[#A2C48E] px-4 py-1 rounded-md text-stone-900 font-bold border border-stone-400 text-sm whitespace-nowrap">
                    {data.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800 italic">
        <p>Showing 1 to {pembayaranData.length} of 4 entries</p>
        <div className="flex mt-4 md:mt-0 border border-stone-400 rounded-md overflow-hidden bg-[#E5E5E5] not-italic">
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&lt;&lt;</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&lt;</button>
          <button className="px-6 py-2 border-r border-stone-400 bg-white font-bold">1</button>
          <button className="px-4 py-2 border-r border-stone-400 hover:bg-stone-300 font-bold">&gt;</button>
          <button className="px-4 py-2 hover:bg-stone-300 font-bold">&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}