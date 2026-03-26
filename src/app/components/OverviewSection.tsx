import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cap4 from '../../assets/cap4.png';
import { useTranslation } from 'react-i18next';

export function OverviewSection() {
  const { t } = useTranslation();

  const features = t('home.overviewSection.features', { returnObjects: true }) as string[];

  return (
    <section className="py-20 px-4 md:px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="relative"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 22px 70px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(0,0,0,0.08)',
                // Slightly wider visual presence on desktop
                width: 'calc(100% + 36px)',
                maxWidth: 'calc(100% + 36px)',
              }}
            >
              {/*
               * Use a fixed-height container for consistent display and better clarity.
               * On large screens we show more of the image.
               */}
              <div className="w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                <ImageWithFallback
                  src={cap4}
                  alt={t('home.overviewSection.imageAlt')}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Very light overlay (keeps brand feel but doesn't darken the image) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45, 71, 44, 0.08) 0%, rgba(45, 71, 44, 0.00) 45%, rgba(197, 160, 89, 0.06) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Subtle highlight border */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '16px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title */}
            <h2
              className="page-h2-lg"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                color: '#333333',
                lineHeight: '1.2',
                letterSpacing: '-0.01em'
              }}
            >
              {t('home.overviewSection.title')}
            </h2>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={`${feature}-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: '#C5A059', flexShrink: 0 }}
                    fill="#C5A059"
                  />
                  <span style={{ fontSize: '15px', color: '#333333', lineHeight: '1.5' }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
