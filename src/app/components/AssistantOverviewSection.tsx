import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import adminImage from '../../assets/admin.png';

export function AssistantOverviewSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Label */}
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}
            >
              {t('home.assistantOverview.label')}
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '36px',
                fontWeight: '700',
                color: '#333333',
                lineHeight: '1.2',
                maxWidth: '420px'
              }}
            >
              {t('home.assistantOverview.title')}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 pt-4">
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '420px' }}>
                {t('home.assistantOverview.p1')}
              </p>

              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '420px' }}>
                {t('home.assistantOverview.p2')}
              </p>

              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '420px' }}>
                {t('home.assistantOverview.p3')}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Admin Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div
              style={{
                width: '100%',
                maxWidth: '460px',
                height: '580px',
                borderRadius: '18px',
                position: 'relative',
                overflow: 'hidden',
                background:
                  'radial-gradient(120% 120% at 0% 0%, rgba(197, 160, 89, 0.18) 0%, rgba(255,255,255,0) 55%), linear-gradient(135deg, rgba(45, 71, 44, 0.10), rgba(197, 160, 89, 0.08))',
                border: '1px solid rgba(45, 71, 44, 0.14)',
                boxShadow: '0 18px 50px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src={adminImage}
                alt={t('home.assistantOverview.imageAlt')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  filter: 'saturate(1.05) contrast(1.03)',
                }}
                loading="lazy"
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(45, 71, 44, 0.10) 0%, rgba(0,0,0,0.06) 55%, rgba(0,0,0,0.10) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
