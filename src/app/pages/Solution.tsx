import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { SolutionHero } from '../components/SolutionHero';
import { AdminOverviewSection } from '../components/AdminOverviewSection';
import { AssistantOverviewSection } from '../components/AssistantOverviewSection';
import { Footer } from '../components/Footer';

export default function Solution() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />
      <SolutionHero />
      <AdminOverviewSection />
      <AssistantOverviewSection />
      <Footer />
    </div>
  );
}