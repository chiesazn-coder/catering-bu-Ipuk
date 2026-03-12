export default function Footer() {
  return (
    <footer className="bg-[#D9EAD3] px-12 py-16 mt-12 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        
        {/* Kolom Alamat */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Alamat :
          </h3>
          <div className="text-xl font-serif text-stone-900 leading-relaxed">
            <p>Perum APH B-23 Seturan Baru, Kledokan,</p>
            <p>Caturtunggal, Depok, Sleman, Yogyakarta</p>
          </div>
        </div>

        {/* Kolom Kontak */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            Hubungi Kami :
          </h3>
          <div className="text-xl font-serif text-stone-900">
            <p>Telp : 08274486304</p>
          </div>
        </div>

      </div>
      
      {/* Garis Pemisah & Copyright */}
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-stone-400/30 font-serif text-stone-600">
        <p>© 2026 Catering Bu Ipuk Nartoyo. All rights reserved.</p>
      </div>
    </footer>
  );
}