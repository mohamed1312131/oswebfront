import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import heroBg from '../../assets/back2.jpg';
import ens1 from '../../assets/ens15.png';
import ens3 from '../../assets/ens3.jpg';
import profileImg from '../../assets/3.jpg';
import ens5 from '../../assets/ens5.jpg';
import ens6 from '../../assets/ens6.jpg';
import ens7 from '../../assets/ens7.jpg';
import './appHeroMockup.css';
import { useTranslation } from 'react-i18next';

export default function TeacherApp() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const el = document.getElementById('teacher-features');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const screens = [
    { title: t('teacherApp.screens.calendar'), image: ens3 },
    { title: t('teacherApp.screens.profile'), image: profileImg },
    { title: t('teacherApp.screens.attendanceSheet'), image: ens5 },
    { title: t('teacherApp.screens.homeworkPublish'), image: ens6 },
    { title: t('teacherApp.screens.contactAdmin'), image: ens7 },
  ];

  const teacherFeatures = [
    { title: t('teacherApp.features.smartAttendance.title'), description: t('teacherApp.features.smartAttendance.description') },
    { title: t('teacherApp.features.syllabus.title'), description: t('teacherApp.features.syllabus.description') },
    { title: t('teacherApp.features.grades.title'), description: t('teacherApp.features.grades.description') },
    { title: t('teacherApp.features.homework.title'), description: t('teacherApp.features.homework.description') },
    { title: t('teacherApp.features.timetable.title'), description: t('teacherApp.features.timetable.description') },
    { title: t('teacherApp.features.requests.title'), description: t('teacherApp.features.requests.description') },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

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
                {t('teacherApp.hero.badge')}
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
                {t('teacherApp.hero.title')}
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                {t('teacherApp.hero.description')}
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
                {t('teacherApp.hero.ctaFeatures')}
              </button>
            </motion.div>

            {/* Right - Image (ens15) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="omni-hero-mockup">
                <div className="omni-hero-mockup__frame">
                  <div className="omni-hero-mockup__bar">
                    <div className="omni-hero-mockup__dots" aria-hidden="true">
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--red" />
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--yellow" />
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--green" />
                    </div>
                    <div className="omni-hero-mockup__title">{t('teacherApp.hero.mockupTitle')}</div>
                  </div>

                  <div className="omni-hero-mockup__media">
                    <img
                      src={ens1}
                      alt={t('teacherApp.hero.imageAlt')}
                      className="omni-hero-mockup__img"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section id="teacher-features" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
              {t('teacherApp.featuresSection.badge')}
            </div>
            <h2
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              {t('teacherApp.featuresSection.title')}
            </h2>
          </div>

          {/* Features grid (text cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                className="group p-6 border transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 18px 44px rgba(17,24,39,0.08)',
                  minHeight: '150px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2D472C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#333333',
                    marginBottom: '8px',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.55' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - App Screens Showcase */}
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
              {t('teacherApp.preview.badge')}
            </div>
            <h2
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              {t('teacherApp.preview.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.06 }}
                className="mx-auto w-full max-w-[220px]"
              >
                <div
                  style={{
                    borderRadius: '26px',
                    background: 'rgba(255,255,255,0.78)',
                    border: '1px solid rgba(45, 71, 44, 0.35)',
                    boxShadow: '0 18px 44px rgba(17,24,39,0.10)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px',
                  }}
                >
                  {/* Mini phone frame */}
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(45, 71, 44, 0.28)',
                      background: 'white',
                    }}
                  >
                    {/* Top bar */}
                    <div
                      className="flex items-center justify-between px-3"
                      style={{
                        height: '52px',
                        backgroundColor: '#2D472C',
                      }}
                    >
                      <div className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
                        {screen.title}
                      </div>
                      <div
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.18)',
                        }}
                      />
                    </div>

                    {/* Screenshot */}
                    <div style={{ aspectRatio: '9 / 16', backgroundColor: '#F9F9F7' }}>
                      <img
                        src={screen.image}
                        alt={`Écran ${screen.title}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
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
            {t('teacherApp.cta.title')}
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            {t('teacherApp.cta.subtitle')}
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
              {t('teacherApp.cta.button')}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}