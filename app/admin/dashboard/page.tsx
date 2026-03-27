"use client";

export default function AdminDashboard() {
  const pesanan = [
    { id: 1, nama: "Melina Yasniti Syah", harga: "Rp. 750.000", status: "Disetujui" },
    { id: 2, nama: "Iskandar Raditya", harga: "Rp. 1.230.000", status: "Disetujui" },
  ];

  const reviews = [
    { nama: "Melina Yasniti Syah", text: "Masakannya enak, gurih, bumbunya pas, patut untuk dicoba lagi" },
    { nama: "Iskandar Raditya", text: "Nasinya pulen, lauk yang dibuat gurih pas dengan bumbu cita rasanya, buahnya pun masih segar tidak seperti biasanya sudah sedikit kematangan, sangat enak" },
    { nama: "Febriana Ratu Sintya", text: "ENAKKK PUOLLLL, tidak menyangka ternyata seenak ini masakannya, saya tau dari tmn saya makanan disini enak, terus saya coba ternyata beneran enak di lidah saya" },
  ];

  return (
    <div className="font-serif text-stone-900">
      {/* Judul & Deskripsi */}
      <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
      <p className="text-xl text-stone-700 mb-8 leading-tight">
        Halaman admin digunakan untuk mengelola konten dan informasi pada website catering
      </p>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#EEF7C5] p-10 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-3xl font-bold mb-6">Total Pesanan</h3>
          <p className="text-4xl font-bold">23</p>
        </div>
        <div className="bg-[#B3BC8E] p-10 rounded-[30px] flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-3xl font-bold mb-6">Total Pendapatan</h3>
          <p className="text-3xl font-bold">Rp. 7.500.000</p>
        </div>
      </div>

      {/* Tabel Pesanan */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-6">Pesanan</h3>
        <div className="overflow-x-auto border border-stone-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#948484] text-stone-900 border-b border-stone-800">
                <th className="p-4 border-r border-stone-800 text-center w-16">Id</th>
                <th className="p-4 border-r border-stone-800 text-center">Nama Pemesan</th>
                <th className="p-4 border-r border-stone-800 text-center">Harga</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {pesanan.map((item) => (
                <tr key={item.id} className="border-b border-stone-800">
                  <td className="p-4 border-r border-stone-800 font-bold text-center">{item.id}</td>
                  <td className="p-4 border-r border-stone-800 text-xl">{item.nama}</td>
                  <td className="p-4 border-r border-stone-800 text-xl text-center">{item.harga}</td>
                  <td className="p-4 text-center">
                    <span className="bg-[#A2C48E] px-6 py-1 rounded-md text-stone-900 font-bold border border-stone-400">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Review Terbaru */}
      <section>
        <h3 className="text-3xl font-bold mb-6">Review Terbaru</h3>
        <div className="border border-stone-800 divide-y divide-stone-800">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-stretch">
              <div className="p-6 flex-1 border-b md:border-b-0 md:border-r border-stone-800">
                <h4 className="text-2xl font-bold mb-2">{rev.nama}</h4>
                <p className="text-lg leading-relaxed text-stone-800 italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="p-6 flex items-center justify-center bg-white md:w-32 min-h-[100px]">
                <button className="bg-[#606060] text-white px-6 py-2 rounded-lg font-bold hover:bg-stone-700 transition-colors whitespace-nowrap">
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