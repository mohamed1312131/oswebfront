import { motion } from 'motion/react';
import { Building2, GraduationCap, Users, Star } from 'lucide-react';

const stats = [
  { icon: Building2, number: '50+', label: 'Écoles' },
  { icon: GraduationCap, number: '15,000+', label: 'Élèves' },
  { icon: Users, number: '800+', label: 'Enseignants' },
  { icon: Star, number: '98%', label: 'Satisfaction' },
];

export function StatsSection() {
  return (
    <section style={{ backgroundColor: '#2D472C' }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 * index }}
              className="text-center py-8 relative"
            >
              {/* Vertical Divider - except for last item */}
              {index < stats.length - 1 && (
                <div 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px hidden md:block"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                />
              )}
              
              <stat.icon size={24} style={{ color: '#C5A059', marginBottom: '12px', marginLeft: 'auto', marginRight: 'auto' }} />
              <div
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  fontSize: '48px', 
                  fontWeight: '700', 
                  color: '#C5A059' 
                }}
                className="mb-2"
              >
                {stat.number}
              </div>
              <div style={{ fontSize: '14px', fontWeight: '400', color: 'white' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
