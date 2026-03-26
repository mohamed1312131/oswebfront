import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Users, LayoutDashboard, BarChart2, ChevronDown, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false);
  const { t } = useTranslation();

  const applicationItems = [
    { icon: GraduationCap, label: t('nav.apps.teacher'), path: '/app/teacher' },
    { icon: Users, label: t('nav.apps.parent'), path: '/app/parent' },
    { icon: LayoutDashboard, label: t('nav.apps.assistant'), path: '/app/assistant' },
    { icon: BarChart2, label: t('nav.apps.manager'), path: '/app/manager' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAppsOpen(false);
  };

  return (
    <>
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
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
            <img src={logoImage} alt={t('common.brand')} />
          </Link>

          {/* Center Navigation - Desktop only */}
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
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link to="/book-demo" className="hidden md:block">
              <button className="navbarCta px-5 text-sm font-medium" style={{ color: 'white' }}>
                {t('nav.bookDemo')}
              </button>
            </Link>

            {/* Hamburger button - mobile only */}
            <button
              type="button"
              className="navbarHamburger md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="navbarMobileBackdrop"
              onClick={closeMobileMenu}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="navbarMobilePanel"
            >
              {/* Panel Header */}
              <div className="navbarMobileHeader">
                <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
                  <img src={logoImage} alt={t('common.brand')} />
                </Link>
                <button
                  type="button"
                  className="navbarHamburger"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="navbarMobileNav">
                <Link to="/" className="navbarMobileLink" onClick={closeMobileMenu}>
                  {t('nav.home')}
                </Link>

                <Link to="/solution" className="navbarMobileLink" onClick={closeMobileMenu}>
                  {t('nav.solutions')}
                </Link>

                {/* Applications accordion */}
                <div>
                  <button
                    type="button"
                    className="navbarMobileLink navbarMobileDropdownBtn"
                    onClick={() => setMobileAppsOpen(!mobileAppsOpen)}
                    aria-expanded={mobileAppsOpen}
                  >
                    <span>{t('nav.applications')}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileAppsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileAppsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="navbarMobileSubMenu">
                          {applicationItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="navbarMobileSubLink"
                              onClick={closeMobileMenu}
                            >
                              <item.icon size={16} style={{ color: '#2D472C' }} />
                              <span>{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/contact" className="navbarMobileLink" onClick={closeMobileMenu}>
                  {t('nav.contact')}
                </Link>

                <Link to="/about" className="navbarMobileLink" onClick={closeMobileMenu}>
                  {t('nav.about')}
                </Link>
              </nav>

              {/* Bottom actions */}
              <div className="navbarMobileFooter">
                <LanguageSwitcher />
                <Link to="/book-demo" onClick={closeMobileMenu} style={{ display: 'block' }}>
                  <button className="navbarCta navbarMobileCta" style={{ color: 'white' }}>
                    {t('nav.bookDemo')}
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
