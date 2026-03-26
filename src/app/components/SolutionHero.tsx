import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import bgImage from '../../assets/bg.png';
import dashboardAdminImg from '../../assets/1.jpg';
import emploiDuTempsImg from '../../assets/2.jpg';
import appEnseignantImg from '../../assets/3.jpg';
import pa1Img from '../../assets/pa1.jpg';
import appParentImg from '../../assets/4.jpg';
import './SolutionHero.css';

export function SolutionHero() {
  const { t } = useTranslation();

  return (
    <section
      style={{ backgroundColor: '#F9F9F7' }}
      className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-32 px-4 md:px-6"
    >
      {/* Full-cover background image (CLEAR). Readability is handled by overlays. */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none',
            transform: 'none',
            opacity: 1,
            imageRendering: 'auto',
          }}
        />

        {/* Readability overlay (match HeroSection styling) */}
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

      {/* Decorative Circles */}
      <div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(45, 71, 44, 0.06)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(45, 71, 44, 0.06)' }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Label */}
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
              }}
            >
              {t('home.solutionHero.badge')}
            </div>

            {/* Title */}
            <h1
              className="page-h1"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '900',
                color: '#333333',
                lineHeight: '1.1',
                maxWidth: '480px',
              }}
            >
              {t('home.solutionHero.title')}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                maxWidth: '420px',
              }}
            >
              {t('home.solutionHero.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/book-demo">
                <button
                  className="font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: '#2D472C',
                    color: 'white',
                    height: '48px',
                    minWidth: '160px',
                    borderRadius: '4px',
                    fontSize: '15px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {t('home.solutionHero.cta')}
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Floating Mockup Cards (desktop only) */}
          <div className="solution-hero-cards hidden lg:block">
            {/* Card 1 - Dashboard Admin (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="solution-hero-card solution-hero-card--lg"
              style={{ top: '28px', left: 0, transform: 'rotate(-1deg)' }}
            >
              <img
                src={dashboardAdminImg}
                alt={t('home.solutionHero.cards.admin.alt')}
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--green">
                {t('home.solutionHero.cards.admin.badge')}
              </div>
            </motion.div>

            {/* Card 2 - Emploi du Temps (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="solution-hero-card solution-hero-card--md"
              style={{ top: 0, right: '18px', transform: 'rotate(2deg)' }}
            >
              <img
                src={emploiDuTempsImg}
                alt={t('home.solutionHero.cards.timetable.alt')}
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--gold">
                {t('home.solutionHero.cards.timetable.badge')}
              </div>
            </motion.div>

            {/* Card 3 - App Enseignant (Bottom Left - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="solution-hero-card solution-hero-card--phone"
              style={{ bottom: '70px', left: '88px', transform: 'rotate(-2deg)' }}
            >
              <img
                src={appEnseignantImg}
                alt={t('home.solutionHero.cards.teacher.alt')}
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--green">
                {t('home.solutionHero.cards.teacher.badge')}
              </div>
            </motion.div>

            {/* Card 5 - App assistant (pa1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
              className="solution-hero-card solution-hero-card--phone"
              style={{ bottom: '48px', left: '260px', transform: 'rotate(-1deg)', zIndex: 4 }}
            >
              <img src={pa1Img} alt="App assistant" className="solution-hero-card__img" />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--green">App assistant</div>
            </motion.div>

            {/* Card 6 - App Parent (Bottom Right - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              className="solution-hero-card solution-hero-card--phone"
              style={{ bottom: '28px', right: '0px', transform: 'rotate(1deg)' }}
            >
              <img
                src={appParentImg}
                alt={t('home.solutionHero.cards.parent.alt')}
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--gold">
                {t('home.solutionHero.cards.parent.badge')}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile-only image grid */}
        <div className="lg:hidden mt-10 grid grid-cols-2 gap-3">
          {[dashboardAdminImg, emploiDuTempsImg, appEnseignantImg, appParentImg].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(229,231,235,0.9)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              }}
            >
              <img src={img} alt="" className="w-full h-[130px] object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}