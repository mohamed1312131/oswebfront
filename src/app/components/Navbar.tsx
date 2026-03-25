import { motion } from 'motion/react';
import { GraduationCap, Users, LayoutDashboard, BarChart2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImage from '../../assets/logooo.png';
import './Navbar.css';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const { t } = useTranslation();

  const applicationItems = [
    { icon: GraduationCap, label: t('nav.apps.teacher'), path: '/app/teacher' },
    { icon: Users, label: t('nav.apps.parent'), path: '/app/parent' },
    { icon: LayoutDashboard, label: t('nav.apps.assistant'), path: '/app/assistant' },
    { icon: BarChart2, label: t('nav.apps.manager'), path: '/app/manager' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`navbarRoot fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'navbarRoot--scrolled' : ''
      }`}
    >
      <div className="navbarInner max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="navbarLogo">
          <img src={logoImage} alt={t('common.brand')} />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="navbarLink">
            {t('nav.home')}
          </Link>

          <Link to="/solution" className="navbarLink">
            {t('nav.solutions')}
          </Link>

          {/* Applications Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setApplicationsOpen(true)}
            onMouseLeave={() => setApplicationsOpen(false)}
          >
            <button type="button" className="navbarDropdownBtn" aria-expanded={applicationsOpen}>
              {t('nav.applications')}
              <ChevronDown size={16} style={{ opacity: 0.9 }} />
            </button>

            {applicationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-3"
                style={{ zIndex: 100 }}
              >
                <div className="navbarDropdownMenu">
                  {applicationItems.map((item, index) => (
                    <div key={item.path}>
                      <Link to={item.path} className="navbarDropdownItem">
                        <item.icon size={16} style={{ color: '#2D472C', opacity: 0.95 }} />
                        <span>{item.label}</span>
                      </Link>

                      {index < applicationItems.length - 1 && (
                        <div style={{ height: '1px', backgroundColor: 'rgba(229,231,235,0.65)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <Link to="/contact" className="navbarLink">
            {t('nav.contact')}
          </Link>

          <Link to="/about" className="navbarLink">
            {t('nav.about')}
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link to="/book-demo">
            <button className="navbarCta px-5 text-sm font-medium" style={{ color: 'white' }}>
              {t('nav.bookDemo')}
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}