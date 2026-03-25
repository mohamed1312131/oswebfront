import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Users, ClipboardCheck, Calendar, FileText, Mail, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import dash1 from '../../assets/pcg.png';
import dash2 from '../../assets/dash2.jpg';
import dash3 from '../../assets/dash3.jpg';
import dash4 from '../../assets/dash4.jpg';
import dash5 from '../../assets/dash5.jpg';
import dash6 from '../../assets/dash6.jpg';
import dash7 from '../../assets/dash7.jpg';
import dash8 from '../../assets/dash8.jpg';
import dash9 from '../../assets/dash 9.jpg';
import dash10 from '../../assets/dash10.jpg';
import heroBg from '../../assets/back3.jpg';

export default function AssistantDashboard() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeShotIndex, setActiveShotIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeShotIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveShotIndex(null);
      if (e.key === 'ArrowRight') setActiveShotIndex((i) => (i === null ? i : (i + 1) % dashboardShots.length));
      if (e.key === 'ArrowLeft') setActiveShotIndex((i) => (i === null ? i : (i - 1 + dashboardShots.length) % dashboardShots.length));
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeShotIndex]);

  const scrollToFeatures = () => {
    const el = document.getElementById('assistant-features');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const features = [
    { icon: Users, title: t('assistantDashboard.features.students.title'), description: t('assistantDashboard.features.students.description') },
    { icon: ClipboardCheck, title: t('assistantDashboard.features.teachers.title'), description: t('assistantDashboard.features.teachers.description') },
    { icon: Calendar, title: t('assistantDashboard.features.timetable.title'), description: t('assistantDashboard.features.timetable.description') },
    { icon: FileText, title: t('assistantDashboard.features.pdfReports.title'), description: t('assistantDashboard.features.pdfReports.description') },
    { icon: Mail, title: t('assistantDashboard.features.communication.title'), description: t('assistantDashboard.features.communication.description') },
    { icon: TrendingUp, title: t('assistantDashboard.features.finance.title'), description: t('assistantDashboard.features.finance.description') },
  ];

  const dashboardShots = [
    { src: dash2, alt: t('assistantDashboard.shots.1') },
    { src: dash3, alt: t('assistantDashboard.shots.2') },
    { src: dash4, alt: t('assistantDashboard.shots.3') },
    { src: dash5, alt: t('assistantDashboard.shots.4') },
    { src: dash6, alt: t('assistantDashboard.shots.5') },
    { src: dash7, alt: t('assistantDashboard.shots.6') },
    { src: dash8, alt: t('assistantDashboard.shots.7') },
    { src: dash9, alt: t('assistantDashboard.shots.8') },
    { src: dash10, alt: t('assistantDashboard.shots.9') },
  ];

  const activeShot = activeShotIndex !== null ? dashboardShots[activeShotIndex] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Lightbox Modal */}
      {activeShot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t('assistantDashboard.lightbox.ariaLabel')}
          className="fixed inset-0 z-[9999]"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t('assistantDashboard.lightbox.close')}
            className="absolute inset-0 w-full h-full"
            onClick={() => setActiveShotIndex(null)}
            style={{ backgroundColor: 'rgba(17, 24, 39, 0.72)' }}
          />

          {/* Panel */}
          <div className="relative h-full w-full p-4 sm:p-8 flex items-center justify-center">
            <div
              className="relative w-full max-w-[1100px]"
              style={{
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(229,231,235,0.9)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
              }}
            >
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(229,231,235,0.9)' }}>
                <div className="text-[12px]" style={{ color: '#6B7280' }}>
                  {activeShot.alt}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-md text-[12px] transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: '#F3F4F6', color: '#111827' }}
                    onClick={() => setActiveShotIndex((i) => (i === null ? i : (i - 1 + dashboardShots.length) % dashboardShots.length))}
                  >
                    {t('assistantDashboard.lightbox.previous')}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-md text-[12px] transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: '#F3F4F6', color: '#111827' }}
                    onClick={() => setActiveShotIndex((i) => (i === null ? i : (i + 1) % dashboardShots.length))}
                  >
                    {t('assistantDashboard.lightbox.next')}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-md text-[12px] transition-opacity duration-200 hover:opacity-80"
                    style={{ backgroundColor: '#111827', color: 'white' }}
                    onClick={() => setActiveShotIndex(null)}
                  >
                    {t('assistantDashboard.lightbox.close')}
                  </button>
                </div>
              </div>

              <div className="p-3 sm:p-4" style={{ backgroundColor: '#0B1220' }}>
                <div
                  className="w-full"
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#111827',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <img
                    src={activeShot.src}
                    alt={activeShot.alt}
                    className="w-full h-[70vh] object-contain bg-[#0B1220]"
                  />
                </div>
                <div className="mt-3 text-center text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {t('assistantDashboard.lightbox.hint')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 1 - Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F9F9F7' }}>
        {/* Full-cover background image (match Home hero style) */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'none',
              transform: 'none',
              opacity: 1,
              imageRendering: 'auto',
            }}
          />

          {/* Readability overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(249,249,247,0.92) 0%, rgba(249,249,247,0.80) 42%, rgba(249,249,247,0.15) 100%),' +
                'radial-gradient(900px 500px at 22% 28%, rgba(45, 71, 44, 0.12) 0%, rgba(45, 71, 44, 0.00) 65%),' +
                'radial-gradient(700px 420px at 78% 18%, rgba(197, 160, 89, 0.16) 0%, rgba(197, 160, 89, 0.00) 70%)',
            }}
          />

          {/* Subtle noise/texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 10% 10%, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.00) 45%), radial-gradient(circle at 90% 20%, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.00) 40%)',
              mixBlendMode: 'multiply',
              opacity: 0.25,
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto relative" style={{ zIndex: 1 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}
              >
                {t('assistantDashboard.hero.badge')}
              </div>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginBottom: '20px'
                }}
              >
                {t('assistantDashboard.hero.title')}
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                {t('assistantDashboard.hero.subtitle')}
              </p>
              <button
                className="transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#2D472C',
                  color: 'white',
                  borderRadius: '4px',
                  padding: '0 32px',
                  height: '48px',
                  fontSize: '15px',
                  fontWeight: '500'
                }}
                onClick={scrollToFeatures}
                type="button"
              >
                {t('assistantDashboard.hero.ctaFeatures')}
              </button>
            </motion.div>

            {/* Right - Desktop Visual (dash1) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Premium blurred glow background */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[360px] h-[260px] sm:w-[520px] sm:h-[340px] lg:w-[560px] lg:h-[360px] xl:w-[620px] xl:h-[400px] rounded-[28px]"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(45,71,44,0.14) 0%, rgba(45,71,44,0) 68%),' +
                      'radial-gradient(closest-side, rgba(197,160,89,0.16) 0%, rgba(197,160,89,0) 64%)',
                    filter: 'blur(18px)',
                    transform: 'translateZ(0)',
                  }}
                />
              </div>

              {/* Framed container */}
              <div
                className="relative w-[360px] sm:w-[520px] lg:w-[560px] xl:w-[620px]"
                style={{
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(229,231,235,0.92)',
                  boxShadow: '0 18px 48px rgba(17,24,39,0.12)',
                  backdropFilter: 'blur(10px)',
                  padding: '10px',
                }}
              >
                {/* glossy top bar */}
                <div
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    borderRadius: '14px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(249,249,247,0.80) 100%)',
                    border: '1px solid rgba(229,231,235,0.95)',
                    marginBottom: '10px',
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F87171' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#34D399' }} />
                  </div>
                  <div className="ml-auto text-[11px]" style={{ color: '#6B7280' }}>
                    OmniSchool • Dashboard Assistant
                  </div>
                </div>

                <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(229,231,235,0.9)' }}>
                  <img
                    src={dash1}
                    alt="Dashboard Assistant OmniSchool"
                    className="w-full h-auto transition-transform duration-300 ease-out hover:scale-[1.02]"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      backgroundColor: 'white',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section id="assistant-features" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '12px'
              }}
            >
              {t('assistantDashboard.features.badge')}
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#333333'
              }}
            >
              {t('assistantDashboard.features.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                className="transition-all duration-200"
                style={{
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <feature.icon size={24} style={{ color: '#2D472C', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#333333', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Dashboard Screens Showcase */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '12px'
              }}
            >
              {t('assistantDashboard.screens.badge')}
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#333333'
              }}
            >
              {t('assistantDashboard.screens.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardShots.map((shot, index) => (
              <motion.button
                key={shot.alt}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: (index % 3) * 0.08 }}
                className="overflow-hidden text-left"
                onClick={() => setActiveShotIndex(index)}
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(45, 71, 44, 0.55)',
                }}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-[220px] object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - CTA Banner */}
      <section className="py-24 px-6" style={{ backgroundColor: '#2D472C' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '36px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            {t('assistantDashboard.cta.title')}
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            {t('assistantDashboard.cta.subtitle')}
          </p>
          <Link to="/book-demo">
            <button
              className="transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#C5A059',
                color: '#2D472C',
                borderRadius: '4px',
                padding: '0 32px',
                height: '48px',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              {t('assistantDashboard.cta.button')}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
