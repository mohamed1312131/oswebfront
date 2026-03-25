import { motion } from 'motion/react';
import { GraduationCap, Users, DollarSign, Calendar, Megaphone, Building2, FileText, PartyPopper } from 'lucide-react';

const featuresLeft = [
  {
    icon: DollarSign,
    title: 'Finance & Paiements',
    description: 'Facturation automatique, suivi des paiements, rapports financiers complets',
  },
  {
    icon: Calendar,
    title: 'Emploi du Temps IA',
    description: 'Génération intelligente des emplois du temps sans conflits automatiquement',
  },
];

const featuresRight = [
  {
    icon: GraduationCap,
    title: 'Gestion des Élèves',
    description: 'Dossiers complets, historiques, notes',
  },
  {
    icon: Users,
    title: 'Gestion des Enseignants',
    description: 'Planification, contrats, évaluations',
  },
  {
    icon: Megaphone,
    title: 'Communication Centre',
    description: 'Annonces, notifications push, SMS',
  },
  {
    icon: Building2,
    title: 'Services Campus',
    description: 'Cantine, transport, bibliothèque',
  },
  {
    icon: FileText,
    title: 'Rapports & PDF',
    description: 'Bulletins, certificats, relevés',
  },
  {
    icon: PartyPopper,
    title: 'Gestion des Événements',
    description: 'Activités, sorties, célébrations',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
      <div className="max-w-7xl mx-auto">
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
            Fonctionnalités
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
          className="text-center mb-16"
        >
          Tout ce dont votre école a besoin
        </motion.h2>

        {/* Asymmetric Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - 2 Large Cards */}
          <div className="space-y-6">
            {featuresLeft.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                className="group p-8 border transition-all duration-200"
                style={{ 
                  backgroundColor: 'white', 
                  borderColor: '#E5E7EB',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2D472C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <feature.icon size={20} style={{ color: '#C5A059', marginBottom: '12px' }} />
                <h3
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#333333' 
                  }}
                  className="mb-2"
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Columns - 6 Smaller Cards in 2 columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {featuresRight.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + index * 0.05 }}
                className="group p-6 border transition-all duration-200"
                style={{ 
                  backgroundColor: 'white', 
                  borderColor: '#E5E7EB',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2D472C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <feature.icon size={20} style={{ color: '#C5A059', marginBottom: '12px' }} />
                <h3
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: '#333333' 
                  }}
                  className="mb-2"
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.5' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
