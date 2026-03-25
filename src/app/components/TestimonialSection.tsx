import { motion } from 'motion/react';

export function TestimonialSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Large Opening Quote */}
          <div
            style={{ 
              fontFamily: 'Georgia, serif',
              fontSize: '80px', 
              color: '#C5A059',
              lineHeight: '1',
              marginBottom: '32px'
            }}
          >
            "
          </div>

          {/* Quote Text */}
          <p
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px', 
              fontStyle: 'italic', 
              color: '#2D472C', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}
          >
            Omnischool a transformé la gestion de notre école. Ce qui prenait des heures ne prend plus que quelques minutes. 
            Nos enseignants adorent l'application mobile et les parents sont plus impliqués que jamais.
          </p>

          {/* Author */}
          <div>
            <p style={{ fontWeight: '600', color: '#333333', fontSize: '16px', marginBottom: '4px' }}>
              M. Karim Mansour
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              Directeur, École Privée Les Oliviers, Tunis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
