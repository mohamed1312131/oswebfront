import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { ProductCardsSection } from './components/ProductCardsSection';
import { UserRolesSection } from './components/UserRolesSection';
import { TimeForTeachingSection } from './components/TimeForTeachingSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BookDemoSection } from './components/BookDemoSection';
import { Footer } from './components/Footer';

export default function Home() {
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
      <HeroSection />
      <OverviewSection />
      <ProductCardsSection />
      <UserRolesSection />
      <TimeForTeachingSection />
      <ProblemSection />
      <SolutionSection />
      <BookDemoSection />
      <Footer />
    </div>
  );
}