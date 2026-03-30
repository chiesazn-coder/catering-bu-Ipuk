import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-white">

      
      <section className="flex flex-col md:flex-row items-start gap-12 px-12 py-16 max-w-7xl mx-auto">
        
        {/* Kolom Kiri: Teks Sejarah & Visi */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-serif font-bold text-[#4C3F5E] leading-tight">
            Catering Bu Ipuk Nartoyo
          </h1>
          
          <div className="text-lg font-serif text-stone-900 leading-relaxed space-y-4 text-justify">
            <p>
              Catering Bu Ipuk Nartoyo merupakan usaha kuliner yang berdiri sejak tahun 1996 
              dan telah melayani berbagai kebutuhan konsumsi masyarakat dengan cita rasa 
              khas rumahan. Dengan pengalaman puluhan tahun, kami berkomitmen menyajikan 
              makanan yang lezat, higienis, dan berkualitas untuk berbagai acara seperti 
              hajatan, syukuran, maupun kegiatan lainnya.
            </p>
            <p>
              Kami menyediakan layanan prasmanan maupun nasi box disesuaikan dengan jumlah 
              minimal pemesanan tertentu. Kami memiliki visi menjadi usaha catering yang 
              terpercaya dan dikenal oleh masyarakat dengan menyajikan makanan yang lezat 
              serta pelayanan terbaik.
            </p>
            <p>
              Untuk mewujudkannya, kami menyediakan berbagai pilihan menu bercita rasa khas 
              dengan bahan yang segar dan higienis agar tetap dipercaya oleh pelanggan.
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Gambar Prasmanan */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-md">
            <Image 
              src="/prasmanan.png" // Simpan gambar prasmanan kamu di folder public
              alt="Sajian Catering Bu Ipuk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}