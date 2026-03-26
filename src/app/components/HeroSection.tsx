import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import heroBackground from '../../assets/baground.jpg';
import cap1 from '../../assets/cap1.png';
import cap2 from '../../assets/cap2.png';
import cap3 from '../../assets/cap3.png';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      style={{ backgroundColor: '#F9F9F7' }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Full-cover background image (CLEAR). Readability is handled by overlays. */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Keep it crisp: avoid blur, reduce transforms that can trigger resampling.
            filter: 'none',
            transform: 'none',
            opacity: 1,
            imageRendering: 'auto',
          }}
        />

        {/* Readability overlay (premium look) */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
          {/* Left Content - Text Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <h1
              className="hero-title"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '900',
                color: '#333333',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p
              style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}
              className="max-w-lg"
            >
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/book-demo">
                <button
                  className="px-8 font-medium transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: '#2D472C',
                    color: 'white',
                    borderRadius: '4px',
                    height: '48px',
                    fontSize: '15px',
                  }}
                >
                  {t('home.hero.ctaBookDemo')}
                </button>
              </Link>

              <Link to="/solution">
                <button
                  type="button"
                  className="heroSecondaryCta"
                  aria-label={t('home.hero.ctaDiscover')}
                >
                  <span className="heroSecondaryCta__label">
                    {t('home.hero.ctaDiscover')}
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Clean, structured showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative hidden lg:block"
            style={{ perspective: '1200px', height: '560px' }}
          >
            {/* Soft glow behind screenshots */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(520px 320px at 40% 42%, rgba(45, 71, 44, 0.18) 0%, rgba(45, 71, 44, 0.00) 62%),' +
                  'radial-gradient(460px 280px at 78% 28%, rgba(197, 160, 89, 0.22) 0%, rgba(197, 160, 89, 0.00) 68%)',
                opacity: 0.95,
              }}
            />

            {/* Admin (desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -18, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className="absolute left-0 top-24 w-[420px] rounded-3xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255,255,255,0.86)',
                border: '1px solid rgba(255,255,255,0.55)',
                boxShadow: '0 28px 90px rgba(0, 0, 0, 0.18)',
                backdropFilter: 'blur(10px)',
                transform: 'translateZ(-40px) rotate(-2deg)',
                zIndex: 1,
              }}
              whileHover={{ y: -4, rotate: -1.5 }}
            >
              <div className="relative">
                <img
                  src={cap1}
                  alt={t('home.hero.mockups.admin.alt')}
                  className="w-full h-[300px] object-cover"
                  style={{ display: 'block' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.00) 42%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(45, 71, 44, 0.92)',
                    color: 'white',
                    borderRadius: '9999px',
                    boxShadow: '0 10px 24px rgba(45, 71, 44, 0.25)',
                  }}
                >
                  {t('home.hero.mockups.admin.badge')}
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="text-sm font-semibold" style={{ color: '#111827' }}>
                  {t('home.hero.mockups.admin.title')}
                </div>
                <div className="text-xs mt-1" style={{ color: '#6B7280' }}>
                  {t('home.hero.mockups.admin.subtitle')}
                </div>
              </div>
            </motion.div>

            {/* Teacher (same dimension as admin) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="absolute left-1/2 top-1/2 w-[420px] rounded-3xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.60)',
                boxShadow: '0 34px 120px rgba(0, 0, 0, 0.22)',
                backdropFilter: 'blur(10px)',
                transform: 'translate(-50%, -56%) rotate(-1deg) translateZ(20px)',
                zIndex: 3,
              }}
              whileHover={{ y: -6, rotate: -0.5 }}
            >
              <div className="relative">
                <img
                  src={cap2}
                  alt={t('home.hero.mockups.teacher.alt')}
                  className="w-full h-[300px] object-cover"
                  style={{ display: 'block' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.00) 30%),' +
                      'linear-gradient(0deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.00) 35%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: '#C5A059',
                    color: '#2D472C',
                    borderRadius: '9999px',
                    boxShadow: '0 14px 30px rgba(197, 160, 89, 0.38)',
                  }}
                >
                  {t('home.hero.mockups.teacher.badge')}
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="text-sm font-semibold" style={{ color: '#111827' }}>
                  {t('home.hero.mockups.teacher.title')}
                </div>
                <div className="text-xs mt-1" style={{ color: '#6B7280' }}>
                  {t('home.hero.mockups.teacher.subtitle')}
                </div>
              </div>
            </motion.div>

            {/* Parent (same dimension as admin) */}
            <motion.div
              initial={{ opacity: 0, x: 18, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
              className="absolute right-0 top-10 w-[420px] rounded-3xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(255,255,255,0.86)',
                border: '1px solid rgba(255,255,255,0.55)',
                boxShadow: '0 26px 90px rgba(0, 0, 0, 0.18)',
                backdropFilter: 'blur(10px)',
                transform: 'rotate(2deg) translateZ(-10px)',
                zIndex: 2,
                opacity: 0.98,
              }}
              whileHover={{ y: -4, rotate: 1.5 }}
            >
              <div className="relative">
                <img
                  src={cap3}
                  alt={t('home.hero.mockups.parent.alt')}
                  className="w-full h-[300px] object-cover"
                  style={{ display: 'block' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.00) 35%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.88)',
                    color: '#2D472C',
                    borderRadius: '9999px',
                    border: '1px solid rgba(45, 71, 44, 0.18)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {t('home.hero.mockups.parent.badge')}
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="text-sm font-semibold" style={{ color: '#111827' }}>
                  {t('home.hero.mockups.parent.title')}
                </div>
                <div className="text-xs mt-1" style={{ color: '#6B7280' }}>
                  {t('home.hero.mockups.parent.subtitle')}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
