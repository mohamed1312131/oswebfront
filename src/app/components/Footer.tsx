import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function Footer() {
  const { t } = useTranslation();

  const solutionLinkItems = [
    { key: 'footer.solutions.teacher', to: '/app/teacher' },
    { key: 'footer.solutions.parent', to: '/app/parent' },
    { key: 'footer.solutions.manager', to: '/app/manager' },
  ];

  const featureLinkKeys = [
    'footer.features.students',
    'footer.features.finance',
    'footer.features.timetable',
    'footer.features.communication',
  ];

  return (
    <footer style={{ backgroundColor: '#2D472C' }} className="pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top border */}
        <div className="h-px mb-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Main Footer Content - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '700', color: 'white' }}>
                {t('common.brand')}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }} className="mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576014832405"
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.social.facebook')}
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Facebook size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/omnilinks-tn/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.social.linkedin')}
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Linkedin size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
              <a
                href="https://www.instagram.com/omnilinks.tn/?hl=fr"
                target="_blank"
                rel="noreferrer"
                aria-label={t('footer.social.instagram')}
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Instagram size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                {t('footer.headings.solutions')}
              </h4>
              <ul className="space-y-3">
                {solutionLinkItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      to={item.to}
                      className="text-sm transition-opacity duration-200 hover:opacity-70"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                {t('footer.headings.features')}
              </h4>
              <ul className="space-y-3">
                {featureLinkKeys.map((key) => (
                  <li key={key}>
                    <a
                      href="#"
                      className="text-sm transition-opacity duration-200 hover:opacity-70"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
              {t('footer.headings.contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <a href="mailto:contact@omnischool.tn" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <a href="tel:+21612345678" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {t('footer.contact.addressLine1')}<br />
                  {t('footer.contact.addressLine2')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-center sm:text-left"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              {t('footer.copyright')}
            </p>

            <p
              className="text-center"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              {t('footer.poweredBy')}
            </p>

            <div
              className="flex items-center justify-center sm:justify-end gap-4"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                {t('footer.legal.privacy')}
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                {t('footer.legal.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
