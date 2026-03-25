import { motion } from 'motion/react';
import { Smartphone, Monitor, Users, BarChart3, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const apps = [
  { 
    id: 'admin', 
    name: 'Admin Dashboard',
    type: 'desktop',
    icon: Monitor,
    features: [
      { icon: BarChart3, label: '450 Élèves', value: '+12% ce mois' },
      { icon: Calendar, label: '32 Classes actives' },
      { icon: CheckCircle, label: '98% Taux présence' },
    ]
  },
  { 
    id: 'teacher', 
    name: 'Teacher App',
    type: 'mobile',
    icon: Smartphone,
    features: [
      { icon: Users, label: 'Présences instantanées' },
      { icon: CheckCircle, label: 'Notes simplifiées' },
      { icon: Calendar, label: 'Emploi du temps' },
    ]
  },
  { 
    id: 'parent', 
    name: 'Parent App',
    type: 'mobile',
    icon: Smartphone,
    features: [
      { icon: BarChart3, label: 'Notes en temps réel' },
      { icon: CheckCircle, label: 'Absences & retards' },
      { icon: Calendar, label: 'Paiements en ligne' },
    ]
  },
];

export function AppsShowcaseSection() {
  const [activeTab, setActiveTab] = useState('admin');
  const currentApp = apps.find(app => app.id === activeTab)!;

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
            Nos Applications
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
          Conçu pour Chaque Utilisateur
        </motion.h2>

        {/* Tabbed Interface */}
        <div className="mb-12">
          <div className="flex justify-center gap-8 border-b" style={{ borderColor: '#E5E7EB' }}>
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveTab(app.id)}
                className="pb-4 px-2 text-sm font-medium transition-all duration-200 relative"
                style={{ 
                  color: activeTab === app.id ? '#2D472C' : '#6B7280'
                }}
              >
                {app.name}
                {activeTab === app.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#2D472C' }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* App Mockup */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {currentApp.type === 'desktop' ? (
            // Desktop Browser Frame
            <div
              className="rounded-lg overflow-hidden border"
              style={{ 
                backgroundColor: 'white',
                borderColor: '#E5E7EB'
              }}
            >
              {/* Chrome Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F87171' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#34D399' }} />
                </div>
                <div className="flex-1 ml-4 px-3 py-1 text-xs rounded" style={{ backgroundColor: '#F9F9F7', color: '#6B7280' }}>
                  app.omnischool.tn/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-12 aspect-[16/9]" style={{ backgroundColor: '#F9F9F7' }}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {currentApp.features.map((feature, i) => (
                    <div key={i} className="p-6 rounded border" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
                      <feature.icon size={24} style={{ color: '#2D472C', marginBottom: '12px' }} />
                      <div className="text-sm font-medium mb-1" style={{ color: '#333333' }}>{feature.label}</div>
                      {feature.value && <div className="text-xs" style={{ color: '#6B7280' }}>{feature.value}</div>}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[70, 85, 50, 65].map((width, i) => (
                    <div key={i} className="h-4 rounded" style={{ backgroundColor: 'white', width: `${width}%` }} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Mobile Phone Frame
            <div className="flex justify-center">
              <div
                className="rounded-3xl overflow-hidden border"
                style={{ 
                  backgroundColor: 'white',
                  borderColor: '#E5E7EB',
                  width: '320px'
                }}
              >
                {/* Phone Notch */}
                <div className="flex justify-center py-3" style={{ backgroundColor: '#2D472C' }}>
                  <div className="w-24 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                </div>

                {/* Mobile Content */}
                <div className="p-6 aspect-[9/16]" style={{ backgroundColor: '#F9F9F7' }}>
                  <h3 className="text-lg font-semibold mb-6" style={{ color: '#2D472C' }}>Dashboard</h3>
                  <div className="space-y-4">
                    {currentApp.features.map((feature, i) => (
                      <div key={i} className="p-4 rounded border flex items-center gap-3" style={{ backgroundColor: 'white', borderColor: '#E5E7EB' }}>
                        <feature.icon size={20} style={{ color: '#C5A059' }} />
                        <span className="text-sm" style={{ color: '#333333' }}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
