import type { Metadata } from "next";
import { Inika } from "next/font/google"; // Import Inika
import "./globals.css";

// Konfigurasi font Inika
const inika = Inika({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-inika" 
});

export const metadata: Metadata = {
  title: "Catering Bu Ipuk Nartoyo",
  description: "Sajian Autentik Rasa Istimewa",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Pakai variabel inika di sini */}
      <body className={`${inika.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}