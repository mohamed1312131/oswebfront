import { motion } from 'motion/react';
import { Clock, CheckCircle } from 'lucide-react';
import imagee from '../../assets/imagee.png';
import { useTranslation } from 'react-i18next';

export function TimeForTeachingSection() {
  const { t } = useTranslation();

  const stats = t('home.timeForTeaching.stats', { returnObjects: true }) as Array<{ number: string; label: string }>;

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Premium blurred glow background (same style as cap8) */}
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[640px] lg:h-[640px] xl:w-[900px] xl:h-[900px] rounded-[48px]"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(45,71,44,0.18) 0%, rgba(45,71,44,0) 65%),' +
                    'radial-gradient(closest-side, rgba(197,160,89,0.20) 0%, rgba(197,160,89,0) 60%)',
                  filter: 'blur(26px)',
                  transform: 'translateZ(0)',
                }}
              />
            </div>

            {/* Framed mockup container */}
            <div
              className="relative w-[360px] sm:w-[460px] lg:w-[560px] xl:w-[800px]"
              style={{
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.70)',
                border: '1px solid rgba(229,231,235,0.85)',
                boxShadow: '0 30px 90px rgba(17,24,39,0.14)',
                backdropFilter: 'blur(10px)',
                padding: '14px',
              }}
            >
              {/* glossy top bar */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(249,249,247,0.7) 100%)',
                  border: '1px solid rgba(229,231,235,0.9)',
                  marginBottom: '12px',
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F87171' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#34D399' }} />
                </div>
                <div className="ml-auto text-[11px]" style={{ color: '#6B7280' }}>
                  {t('home.timeForTeaching.mockupTitle')}
                </div>
              </div>

              {/* Screenshot area: enforce ratio so the image fills nicely */}
              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(229,231,235,0.9)',
                  boxShadow: '0 14px 34px rgba(0,0,0,0.10)',
                  backgroundColor: 'white',
                  aspectRatio: '16 / 9',
                }}
              >
                <img
                  src={imagee}
                  alt={t('home.timeForTeaching.imageAlt')}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block',
                    backgroundColor: 'white',
                  }}
                />
              </div>
            </div>

            {/* Floating Notification Card 1 - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
              className="absolute top-12 right-8 flex items-center gap-2 p-3"
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
              }}
            >
              <Clock size={16} style={{ color: '#2D472C', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#333333', whiteSpace: 'nowrap' }}>
                {t('home.timeForTeaching.notifications.timetableUpdated')}
              </span>
            </motion.div>

            {/* Floating Notification Card 2 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
              className="absolute bottom-12 left-8 flex items-center gap-2 p-3"
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
              }}
            >
              <CheckCircle size={16} style={{ color: '#C5A059', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#333333', whiteSpace: 'nowrap' }}>
                {t('home.timeForTeaching.notifications.attendanceRecorded')}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title */}
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#333333',
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
              }}
            >
              {t('home.timeForTeaching.title')}
            </h2>

            {/* Subtitle */}
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>{t('home.timeForTeaching.subtitle')}</p>

            {/* Stats Row */}
            <div className="flex gap-8 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 * index }}
                  className="text-center"
                >
                  {/* Number */}
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#C5A059', marginBottom: '4px' }}>{stat.number}</div>
                  {/* Label */}
                  <div style={{ fontSize: '13px', color: '#6B7280' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
