import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function BookDemoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '40px',
            fontWeight: '700',
            color: '#2D472C',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}
          className="mb-4"
        >
          {t('home.bookDemo.title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', textAlign: 'center' }}
          className="mb-12"
        >
          {t('home.bookDemo.subtitle')}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Link to="/book-demo">
            <button
              className="px-12 py-4 font-medium transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#2D472C',
                color: 'white',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              {t('home.bookDemo.cta')}
            </button>
          </Link>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm" style={{ color: '#6B7280' }}>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#C5A059' }} />
              <span>{t('home.bookDemo.trust.fastResponse')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#C5A059' }} />
              <span>{t('home.bookDemo.trust.freeDemo')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#C5A059' }} />
              <span>{t('home.bookDemo.trust.noCommitment')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
