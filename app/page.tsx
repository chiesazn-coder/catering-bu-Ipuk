import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import FaqSection from './components/FaqSection';
import MapsSection from './components/MapsSection';
import Footer from './components/Footer'; // Import baru

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MenuSection />
      <FaqSection />
      <MapsSection />
      <Footer /> {/* Bagian penutup */}
    </main>
  );
}