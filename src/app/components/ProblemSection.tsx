import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import './ProblemSection.css';

export function ProblemSection() {
  const { t } = useTranslation();

  const stats = t('home.vision.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;

  return (
    <section className="visionSection py-24 px-4 md:px-6">
      <div className="visionGlow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto visionContainer">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <span className="visionBadge">{t('home.vision.badge')}</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="visionTitle text-center mb-16"
        >
          {t('home.vision.title')}
        </motion.h2>

        {/* Vision Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="visionText"
        >
          <ul className="visionList">
            <li className="visionListItem">{t('home.vision.p1')}</li>
            <li className="visionListItem">{t('home.vision.p2')}</li>
            <li className="visionListItem">{t('home.vision.p3')}</li>
          </ul>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className="visionStats"
        >
          {stats.map((s, idx) => (
            <div key={`${s.value}-${idx}`} className="visionStat">
              <div style={{ textAlign: 'center' }}>
                <div className="visionStatNumber">{s.value}</div>
                <div className="visionStatLabel">{s.label}</div>
              </div>

              {idx < stats.length - 1 && <div className="visionDivider" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
