import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Target, Heart, Users, Play, Coffee, GraduationCap, MapPin, TrendingUp, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import partImg from '../../assets/part.png';
import './About.css';
import proposImg from '../../assets/propos.png';
import cultureImg from '../../assets/Culturr.png';

export default function About() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: t('about.values.simplicity.title'),
      description: t('about.values.simplicity.description')
    },
    {
      icon: Heart,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description')
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Lock,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description')
    }
  ];

  const aboutP2Bullets = String(t('about.aboutSection.p2'))
    .split(/\n\s*\n/g)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Who We Are */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6" style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-175px',
            right: '-175px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none'
          }}
        />

        <div className="max-w-[1280px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
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
                {t('about.who.badge')}
              </div>
              <h1
                className="page-h1"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginBottom: '20px',
                  maxWidth: '460px'
                }}
              >
                {t('about.who.title')}
              </h1>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '420px' }}>
                {t('about.who.subtitle')}
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="about-who-media">
                <img
                  src={partImg}
                  alt={t('about.who.title')}
                  className="about-who-media__img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="about-who-media" style={{ maxWidth: '520px' } as React.CSSProperties}>
                <img
                  src={proposImg}
                  alt={t('about.aboutSection.title')}
                  className="about-who-media__img"
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="about-text"
            >
              <h2
                className="page-h2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '20px'
                }}
              >
                {t('about.aboutSection.title')}
              </h2>
              <p className="about-text__lead">
                {t('about.aboutSection.p1')}
              </p>

              <ul className="about-text__bullets">
                {aboutP2Bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Values */}
      <section className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
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
              {t('about.values.badge')}
            </div>
            <h2
              className="page-h2-lg"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                color: '#333333'
              }}
            >
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '48px' }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                className="transition-all duration-200"
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <value.icon size={32} style={{ color: '#C5A059', marginBottom: '16px' }} />
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '12px'
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section - Our Culture */}
      <section className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2
                className="page-h2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '20px'
                }}
              >
                {t('about.culture.title')}
              </h2>
              <p className="about-text__paragraph">{t('about.culture.p1')}</p>
              <p className="about-text__paragraph">{t('about.culture.p2')}</p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="about-culture-media">
                <img src={cultureImg} alt={t('about.culture.title')} className="about-culture-media__img" />
                <div className="about-culture-media__shine" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA Banner */}
      <section className="py-16 md:py-20 px-4 md:px-6" style={{ backgroundColor: '#2D472C' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            className="page-h2-lg"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            {t('about.cta.title')}
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            {t('about.cta.subtitle')}
          </p>
          <div className="about-cta" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-demo" className="about-cta__link">
              <button className="about-cta__btn about-cta__btn--primary" type="button">
                {t('about.cta.primary')}
              </button>
            </Link>
            <Link to="/contact" className="about-cta__link">
              <button className="about-cta__btn about-cta__btn--secondary" type="button">
                {t('about.cta.secondary')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}