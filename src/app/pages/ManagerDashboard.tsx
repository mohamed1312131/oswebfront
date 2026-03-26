import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import managar1 from '../../assets/managar1.jpg';
import managar2 from '../../assets/managar2.jpg';
import managar3 from '../../assets/managar3.jpg';
import managar4 from '../../assets/managar 4.jpg';
import heroBg from '../../assets/back4.jpg';
import './managerDashboardMockup.css';

export default function ManagerDashboard() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: BarChart3, title: t('managerDashboard.features.analytics.title'), description: t('managerDashboard.features.analytics.description') },
    { icon: TrendingUp, title: t('managerDashboard.features.performance.title'), description: t('managerDashboard.features.performance.description') },
    { icon: Users, title: t('managerDashboard.features.roles.title'), description: t('managerDashboard.features.roles.description') },
    { icon: DollarSign, title: t('managerDashboard.features.financialReports.title'), description: t('managerDashboard.features.financialReports.description') },
    { icon: Calendar, title: t('managerDashboard.features.planning.title'), description: t('managerDashboard.features.planning.description') },
    { icon: FileText, title: t('managerDashboard.features.documents.title'), description: t('managerDashboard.features.documents.description') },
  ];

  const screens = [
    { title: t('managerDashboard.screens.stats'), image: managar2 },
    { title: t('managerDashboard.screens.finance'), image: managar3 },
    { title: t('managerDashboard.screens.reports'), image: managar4 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: '#F9F9F7' }}>
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* (badge handled by i18n below) */}
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}
              >
                {t('managerDashboard.hero.badge')}
              </div>
              <h1
                className="page-h1"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '900',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginBottom: '20px'
                }}
              >
                {t('managerDashboard.hero.title')}
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                {t('managerDashboard.hero.subtitle')}
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
              >
                {t('managerDashboard.hero.ctaFeatures')}
              </button>
            </motion.div>

            {/* Right - Manager Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="mgr-hero-media">
                <div className="mgr-hero-media__frame">
                  <div className="mgr-hero-media__bar">
                    <div className="mgr-hero-media__dots" aria-hidden="true">
                      <span className="mgr-hero-media__dot mgr-hero-media__dot--red" />
                      <span className="mgr-hero-media__dot mgr-hero-media__dot--yellow" />
                      <span className="mgr-hero-media__dot mgr-hero-media__dot--green" />
                    </div>
                    <div className="mgr-hero-media__title">OmniSchool • Manager</div>
                  </div>

                  <div className="mgr-hero-media__media">
                    <img
                      src={managar1}
                      alt={t('managerDashboard.hero.title')}
                      className="mgr-hero-media__img"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section className="py-24 px-4 md:px-6" style={{ backgroundColor: 'white' }}>
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
              {t('managerDashboard.featuresSection.badge')}
            </div>
            <h2
              className="page-h2"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              {t('managerDashboard.featuresSection.title')}
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
                <feature.icon size={24} style={{ color: '#C5A059', marginBottom: '12px' }} />
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
      <section className="py-24 px-4 md:px-6" style={{ backgroundColor: '#F9F9F7' }}>
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
              {t('managerDashboard.preview.badge')}
            </div>
            <h2
              className="page-h2"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              {t('managerDashboard.preview.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                className="mx-auto w-full max-w-[340px]"
              >
                <div className="mgr-preview-card">
                  <div className="mgr-preview-card__top">
                    <div className="mgr-preview-card__chip">{screen.title}</div>
                    <div style={{ width: '56px', height: '16px', borderRadius: '999px', background: 'rgba(255,255,255,0.14)' }} />
                  </div>

                  <div className="mgr-preview-card__media">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="mgr-preview-card__img"
                      loading="lazy"
                    />
                    <div className="mgr-preview-card__fade" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - CTA Banner */}
      <section className="py-24 px-4 md:px-6" style={{ backgroundColor: '#2D472C' }}>
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
            {t('managerDashboard.cta.title')}
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            {t('managerDashboard.cta.subtitle')}
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
              {t('managerDashboard.cta.button')}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}