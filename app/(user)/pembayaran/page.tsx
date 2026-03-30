"use client";

import { useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from "@/utils/supabase/client";
import Footer from '../../components/Footer';

// Komponen utama dibungkus Suspense karena menggunakan useSearchParams
function PembayaranContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  
  // Mengambil ID pesanan dari URL (misal: /pembayaran?id=123)
  const orderId = searchParams.get('id');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleKirim = async () => {
    if (!selectedFile) return alert("Silakan unggah bukti pembayaran terlebih dahulu.");
    if (!orderId) return alert("ID Pesanan tidak ditemukan. Silakan lakukan pemesanan ulang.");

    setLoading(true);
    try {
      // 1. Persiapkan nama file unik
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${orderId}-${Date.now()}.${fileExt}`;
      const filePath = `bukti/${fileName}`;

      // 2. Upload ke Supabase Storage (Bucket: bukti-transfer)
      const { error: uploadError } = await supabase.storage
        .from('bukti-transfer')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // 3. Ambil Public URL dari file yang diupload
      const { data: { publicUrl } } = supabase.storage
        .from('bukti-transfer')
        .getPublicUrl(filePath);

      // 4. Update kolom bukti_transfer di tabel 'pembayaran' berdasarkan ID
      const { error: updateError } = await supabase
        .from('pembayaran')
        .update({ bukti_transfer: publicUrl })
        .eq('id', orderId);

      if (updateError) throw updateError;

      // Jika semua berhasil, tampilkan popup sukses
      setIsSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Gagal mengunggah: " + err.message);
      } else {
        alert("Terjadi kesalahan sistem yang tidak diketahui.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setIsSuccess(false);
    router.push('/');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-serif">
      <h1 className="text-3xl font-bold text-[#4C3F5E] mb-4">
        Konfirmasi Pembayaran
      </h1>
      <p className="text-lg text-stone-800 leading-relaxed mb-8">
        Silakan lakukan pembayaran sesuai dengan total pesanan melalui nomor rekening yang 
        telah disediakan. Kemudian unggah bukti pembayaran pada kolom yang tersedia.
        {orderId && (
          <span className="block mt-2 text-sm font-bold text-green-700 italic">
            Mengonfirmasi untuk Pesanan ID: #{orderId}
          </span>
        )}
      </p>

      <div className="bg-[#A7BC9F] inline-block px-6 py-4 rounded-sm border border-stone-400 mb-10">
        <p className="text-xl font-bold text-stone-900">
          No Rek : <span className="ml-2">8950555263 (BCA)</span>
        </p>
      </div>

      {/* Area Upload */}
      <div className="w-full border border-stone-300 rounded-[2rem] p-16 flex flex-col items-center justify-center min-h-[400px] bg-white shadow-sm">
        {preview ? (
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4 border-2 border-stone-200 rounded-lg overflow-hidden shadow-inner">
              <img src={preview} alt="Preview Bukti" className="object-cover w-full h-full" />
            </div>
            <button 
              onClick={() => { setPreview(null); setSelectedFile(null); }}
              className="text-red-500 font-bold underline hover:text-red-700 transition"
            >
              Hapus & Pilih Ulang
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-stone-300">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-700">Upload Gambar</h3>
            <p className="text-stone-400 text-sm mb-6">JPG, PNG, atau GIF (maks 5MB)</p>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#4A86E8] text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-blue-600 transition"
            >
              Pilih File
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between items-center mt-12">
        <button 
          onClick={() => router.back()} 
          className="px-14 py-3 bg-[#B3A9A9] text-stone-900 font-bold rounded-lg border border-stone-400 hover:bg-stone-400 transition"
        >
          Kembali
        </button>
        <button 
          onClick={handleKirim}
          disabled={!selectedFile || loading}
          className={`px-14 py-3 font-bold rounded-lg transition-all shadow-lg ${
            selectedFile && !loading 
              ? 'bg-[#5B4E64] text-white hover:bg-[#43394a]' 
              : 'bg-stone-300 text-stone-500 cursor-not-allowed'
          }`}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>

      {/* MODAL POPUP */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center max-w-sm w-full mx-4 border border-stone-100 scale-in-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 border-[3px] border-green-500 shadow-sm">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">
              Pembayaran Berhasil
            </h2>
            <button 
              onClick={handleClosePopup}
              className="w-full bg-[#5B4E64] text-white py-3 px-10 rounded-xl font-bold hover:bg-[#43394a] transition-all active:scale-95 shadow-lg"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Komponen Pembungkus agar useSearchParams berjalan di Next.js Client Component
export default function KonfirmasiPembayaran() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<div className="p-20 text-center font-serif">Memuat halaman...</div>}>
        <PembayaranContent />
      </Suspense>
      <Footer />
    </main>
  );
}