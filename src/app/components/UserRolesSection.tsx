import { motion } from 'motion/react';
import { ToggleRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import cap8 from '../../assets/cap8.png';

export function UserRolesSection() {
  const { t } = useTranslation();

  const roles = [
    t('home.userRoles.roles.admin'),
    t('home.userRoles.roles.teacher'),
    t('home.userRoles.roles.parent'),
    t('home.userRoles.roles.manager'),
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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
                letterSpacing: '-0.01em'
              }}
            >
              {t('home.userRoles.title')}
            </h2>

            {/* Subtitle */}
            <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6' }}>
              {t('home.userRoles.subtitle')}
            </p>

            {/* Toggle Pills */}
            <div className="space-y-3 pt-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 * index }}
                  className="flex items-center justify-between px-6"
                  style={{
                    backgroundColor: '#2D472C',
                    color: 'white',
                    height: '44px',
                    width: '200px',
                    borderRadius: '999px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  <span>{role}</span>
                  <ToggleRight size={20} style={{ color: '#C5A059' }} fill="#C5A059" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Premium blurred glow background (no circle) */}
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
                  OmniSchool • Aperçu
                </div>
              </div>

              <img
                src={cap8}
                alt="OmniSchool apps preview"
                className="w-full h-auto"
                style={{
                  borderRadius: '18px',
                  border: '1px solid rgba(229,231,235,0.9)',
                  boxShadow: '0 14px 34px rgba(0,0,0,0.10)',
                  backgroundColor: 'white',
                  display: 'block',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
