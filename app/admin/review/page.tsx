"use client";

export default function KelolaReview() {
  const reviews = [
    {
      id: 1,
      nama: "Melina Yasniti Syah",
      review: "Masakannya enak, gurih, bumbunya pas, patut untuk dicoba lagi",
      rating: 5,
    },
    {
      id: 2,
      nama: "Febriana Ratu Sintya",
      review: "ENAKKK PUOLLLL, tidak menyangka ternyata seenak ini masakannya, saya tau dari tmn saya makanan disini enak, terus saya coba ternyata beneran enak di lidah saya",
      rating: 5,
    },
  ];

  // Fungsi untuk merender bintang berdasarkan jumlah rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center gap-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-[#E2E618] text-3xl">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="font-serif text-stone-900">
      {/* Judul Halaman */}
      <h2 className="text-4xl font-bold mb-2">Kelola Review dan Rating</h2>
      <p className="text-xl text-stone-700 mb-10">
        Mengelola informasi review dan rating catering
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

      {/* Tabel Review */}
      <div className="overflow-x-auto border border-stone-800">
        <table className="w-full text-left border-collapse bg-white text-xl">
          <thead>
            <tr className="bg-[#948484] text-stone-900 border-b border-stone-800 font-bold">
              <th className="p-4 border-r border-stone-800 text-center w-20">No</th>
              <th className="p-4 border-r border-stone-800 text-center w-64">Nama</th>
              <th className="p-4 border-r border-stone-800 text-center">Review</th>
              <th className="p-4 text-center w-64">Rating</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item, index) => (
              <tr key={item.id} className="border-b border-stone-800 last:border-b-0">
                <td className="p-6 border-r border-stone-800 text-center font-bold align-top pt-10">
                  {index + 1}
                </td>
                <td className="p-6 border-r border-stone-800 align-top pt-10 leading-tight">
                  {item.nama}
                </td>
                <td className="p-6 border-r border-stone-800 align-top pt-10 leading-relaxed italic">
                  &quot;{item.review}&quot;
                </td>
                <td className="p-6 text-center align-top pt-10">
                  {renderStars(item.rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xl text-stone-800 italic">
        <p>Showing 1 to {reviews.length} of 4 entries</p>
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