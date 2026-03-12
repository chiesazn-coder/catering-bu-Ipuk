"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function KonfirmasiPembayaran() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // State untuk mengontrol popup

  // Fungsi untuk menangani pemilihan file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Fungsi tombol kirim
  const handleKirim = () => {
    if (selectedFile) {
      // Logic: Menampilkan popup keberhasilan
      setIsSuccess(true);
    } else {
      alert("Silakan unggah bukti pembayaran terlebih dahulu.");
    }
  };

  // Fungsi untuk menutup popup dan kembali ke Beranda
  const handleClosePopup = () => {
    setIsSuccess(false);
    router.push('/'); // Navigasi ke halaman beranda
  };

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12 font-serif">
        <h1 className="text-3xl font-bold text-[#4C3F5E] mb-4">
          Konfirmasi Pembayaran
        </h1>
        <p className="text-lg text-stone-800 leading-relaxed mb-8">
          Silakan lakukan pembayaran sesuai dengan total pesanan melalui nomor rekening yang 
          telah disediakan. Kemudian unggah bukti pembayaran pada kolom yang tersedia agar 
          pesanan anda dapat segera diproses.
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
              <div className="relative w-64 h-64 mb-4 border-2 border-stone-200 rounded-lg overflow-hidden">
                <img src={preview} alt="Preview Bukti" className="object-cover w-full h-full" />
              </div>
              <button 
                onClick={() => {setPreview(null); setSelectedFile(null);}}
                className="text-red-500 font-bold underline"
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
                className="bg-[#4A86E8] text-white px-8 py-2 rounded-full font-bold shadow-md"
              >
                Pilih File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
          )}
        </div>

        {/* Tombol Navigasi Bawah */}
        <div className="flex justify-between items-center mt-12">
          <button onClick={() => router.back()} className="px-14 py-3 bg-[#B3A9A9] text-stone-900 font-bold rounded-lg border border-stone-400">
            Kembali
          </button>
          <button 
            onClick={handleKirim}
            disabled={!selectedFile}
            className={`px-14 py-3 font-bold rounded-lg transition ${selectedFile ? 'bg-[#5B4E64] text-white' : 'bg-stone-300 text-stone-500'}`}
          >
            Kirim
          </button>
        </div>
      </div>

      <Footer />

      {/* MODAL POPUP (Logic Sesuai Gambar Referensi) */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center max-w-sm w-full mx-4 border border-stone-200">
            {/* Icon Checkmark Bulat Hijau */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 border-2 border-green-500">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h2 className="text-xl font-bold text-stone-800 mb-8 text-center">
              Pembayaran Berhasil
            </h2>

            <button 
              onClick={handleClosePopup}
              className="w-full bg-[#5B4E64] text-white py-2 px-10 rounded-lg font-bold hover:bg-[#43394a] transition-colors"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </main>
  );
}