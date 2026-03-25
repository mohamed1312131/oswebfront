import { motion } from 'motion/react';

const pearls = [
  'Excellence Académique & Sportive',
  'Arts Visuels & Spectacle',
  'Développement de la Personnalité',
  'Innovation & Créativité',
  'Entrepreneuriat & Leadership',
  'Valeurs Universelles & Éthique',
  'Communauté & Solidarité',
  'Compétences Professionnelles',
  'Apprentissage par Projet',
  'Intelligence Émotionnelle',
  'Citoyenneté Mondiale',
];

export function ElevenPearlsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: '#C5A059' }}
          >
            Notre Philosophie
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '40px', 
            fontWeight: '700', 
            color: '#2D472C',
            letterSpacing: '-0.02em'
          }}
          className="text-center mb-4"
        >
          Les Onze Perles — Une Éducation Complète
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          Omnischool est construit autour d'un cadre holistique unique qui couvre tous les aspects du développement de l'enfant
        </motion.p>

        {/* Numbered List Grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
          {pearls.map((pearl, index) => (
            <motion.div
              key={pearl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 * index }}
              className="pb-6 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px', 
                    fontWeight: '700', 
                    color: '#C5A059',
                    minWidth: '40px'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#2D472C',
                    lineHeight: '1.4'
                  }}
                >
                  {pearl}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
