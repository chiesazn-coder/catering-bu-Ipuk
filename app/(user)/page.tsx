import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import GallerySection from '../components/GallerySection'; // Import komponen baru
import FaqSection from '../components/FaqSection';
import MapsSection from '../components/MapsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MenuSection />
      <GallerySection /> {/* Section Galeri ditambahkan di sini */}
      <FaqSection />
      <MapsSection />
      <Footer />
    </main>
  );
}