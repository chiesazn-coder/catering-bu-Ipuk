export default function AdminDashboard() {
  const dataPesanan = [
    { id: 1, nama: "Melina Yasniti Syah", harga: "750.000", status: "Disetujui" },
    { id: 2, nama: "Iskandar Raditya", harga: "1.230.000", status: "Disetujui" },
  ];

  return (
    <div className="space-y-10">
      {/* Judul */}
      <div>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Dashboard</h1>
        <p className="text-stone-600 text-lg">
          Halaman admin digunakan untuk mengelola konten dan informasi pada website catering
        </p>
      </div>

      {/* Baris Statistik */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#F2FAD2] p-8 rounded-3xl text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Total Pesanan</h2>
          <p className="text-4xl font-bold">23</p>
        </div>
        <div className="bg-[#B5C198] p-8 rounded-3xl text-center shadow-sm text-stone-900">
          <h2 className="text-2xl font-bold mb-4">Total Pendapatan</h2>
          <p className="text-4xl font-bold">Rp. 7.500.000</p>
        </div>
      </div>

      {/* Tabel Pesanan */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Pesanan</h2>
        
        <div className="border-2 border-stone-800 rounded-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#A08888] text-stone-900 border-b-2 border-stone-800">
                <th className="p-4 border-r-2 border-stone-800 w-16">Id</th>
                <th className="p-4 border-r-2 border-stone-800">Nama Pemesan</th>
                <th className="p-4 border-r-2 border-stone-800">Harga</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataPesanan.map((item) => (
                <tr key={item.id} className="border-b-2 border-stone-800 last:border-b-0">
                  <td className="p-6 text-center font-bold border-r-2 border-stone-800">{item.id}</td>
                  <td className="p-6 border-r-2 border-stone-800 text-lg">{item.nama}</td>
                  <td className="p-6 border-r-2 border-stone-800 text-lg text-center">Rp. {item.harga}</td>
                  <td className="p-6 text-center">
                    <span className="bg-[#B5E1A0] px-4 py-1 rounded-md font-bold text-sm border border-stone-400">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Baris Kosong agar tabel terlihat tinggi sesuai figma */}
              <tr className="h-40">
                <td className="border-r-2 border-stone-800"></td>
                <td className="border-r-2 border-stone-800"></td>
                <td className="border-r-2 border-stone-800"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center text-lg">
          <p>Showing 1 to 4 of 4 entries</p>
          <div className="flex border border-stone-400 rounded overflow-hidden">
            <button className="px-4 py-2 bg-stone-200 border-r border-stone-400 hover:bg-stone-300">«</button>
            <button className="px-4 py-2 bg-stone-200 border-r border-stone-400 hover:bg-stone-300">‹</button>
            <button className="px-6 py-2 bg-stone-100 border-r border-stone-400">1</button>
            <button className="px-4 py-2 bg-stone-200 border-r border-stone-400 hover:bg-stone-300">›</button>
            <button className="px-4 py-2 bg-stone-200 hover:bg-stone-300">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}