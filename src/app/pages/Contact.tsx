import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Calendar, MessageSquare, Headphones, MapPin, Mail, Clock, CheckCircle, ChevronDown, ChevronUp, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router';
import { apiPost } from '../lib/api';
import c1Image from '../../assets/contact.png';
import './Contact.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await apiPost('/api/contact/submit', payload);

      setFormSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setSubmitError(err?.message ?? "Erreur lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToContactForm = () => {
    const el = document.getElementById('contact-form');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqs = [
    {
      question: t('contact.page.faq.items.0.q'),
      answer: t('contact.page.faq.items.0.a'),
    },
    {
      question: t('contact.page.faq.items.1.q'),
      answer: t('contact.page.faq.items.1.a'),
    },
    {
      question: t('contact.page.faq.items.2.q'),
      answer: t('contact.page.faq.items.2.a'),
    },
    {
      question: t('contact.page.faq.items.3.q'),
      answer: t('contact.page.faq.items.3.a'),
    },
  ];

  return (
    <div style={{ backgroundColor: '#F9F9F7', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Hero */}
      <section className="page-hero-section" style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Circle - Top Left */}
        <div
          style={{
            position: 'absolute',
            top: '-285px',
            left: '-285px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative Circle - Bottom Right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-240px',
            right: '-240px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1
                className="page-h1"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  maxWidth: '440px',
                  marginBottom: '20px',
                }}
              >
                {t('contact.page.heroTitle')}
              </h1>
              <p
                style={{
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  maxWidth: '420px',
                }}
              >
                {t('contact.page.heroSubtitle')}
              </p>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="contact-hero-media"
            >
              <img src={c1Image} alt={t('contact.hero.imageAlt')} className="contact-hero-media__img" />
              <div className="contact-hero-media__overlay" />
              <div className="contact-hero-media__badges">
                <span className="contact-hero-media__badgePrimary">{t('contact.hero.badgePrimary')}</span>
                <span className="contact-hero-media__badgeSecondary">{t('contact.hero.badgeSecondary')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - 3 Contact Cards */}
      <section style={{ backgroundColor: 'white', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 - Book a demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',

                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <Calendar size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                {t('contact.page.cards.demo.title')}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('contact.page.cards.demo.description')}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <Link to="/book-demo">
                  <button
                    className="transition-all duration-200 hover:opacity-90"
                    style={{
                      width: '100%',
                      height: '40px',
                      backgroundColor: '#2D472C',
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    {t('contact.page.cards.demo.button')}
                  </button>
                </Link>

                {/* keep same bottom spacing across cards */}
                <div style={{ height: '28px' }} aria-hidden="true" />
              </div>
            </motion.div>

            {/* Card 2 - Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',

                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <MessageSquare size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                {t('contact.page.cards.sales.title')}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('contact.page.cards.sales.description')}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <button
                  type="button"
                  className="transition-all duration-200"
                  style={{
                    width: '100%',
                    height: '40px',
                    backgroundColor: 'white',
                    color: '#2D472C',
                    borderRadius: '4px',
                    border: '1px solid #2D472C',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                  onClick={scrollToContactForm}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D472C';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#2D472C';
                  }}
                >
                  {t('contact.page.cards.sales.button')}
                </button>

                {/* keep same bottom spacing across cards */}
                <div style={{ height: '28px' }} aria-hidden="true" />
              </div>
            </motion.div>

            {/* Card 3 - Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',

                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <Headphones size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                {t('contact.page.cards.support.title')}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                {t('contact.page.cards.support.description')}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="transition-all duration-200"
                  style={{
                    width: '100%',
                    height: '40px',
                    backgroundColor: '#F3F4F6',
                    color: '#9CA3AF',
                    borderRadius: '4px',
                    border: '1px solid #E5E7EB',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                  }}
                >
                  {t('contact.page.cards.support.button')}
                </button>
                <div
                  style={{
                    marginTop: '10px',
                    height: '18px',
                    fontSize: '13px',
                    color: '#2D472C',
                    fontWeight: 600,
                  }}
                >
                  N'est pas disponible pour le moment
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Contact Form + Info */}
      <section style={{ backgroundColor: '#F9F9F7', paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                id="contact-form"
                className="contact-form-inner"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                }}
              >
                {!formSubmitted ? (
                  <>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#333333',
                        marginBottom: '24px',
                      }}
                    >
                      {t('contact.page.form.title')}
                    </h2>

                    <form onSubmit={handleSubmit}>
                      {/* Row 1 - First Name & Last Name */}
                      <div className="form-grid-2col" style={{ gap: '16px', marginBottom: '16px' }}>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="firstName"
                          >
                            {t('contact.page.form.firstName.label')}
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder={t('contact.page.form.firstName.placeholder')}
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="lastName"
                          >
                            {t('contact.page.form.lastName.label')}
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder={t('contact.page.form.lastName.placeholder')}
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                      </div>

                      {/* Row 2 - Email & Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="email"
                          >
                            {t('contact.page.form.email.label')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t('contact.page.form.email.placeholder')}
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="phone"
                          >
                            {t('contact.page.form.phone.label')}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t('contact.page.form.phone.placeholder')}
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                      </div>

                      {/* Row 3 - Subject */}
                      <div style={{ marginBottom: '16px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="subject"
                        >
                          {t('contact.page.form.subject.label')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          style={{
                            width: '100%',
                            height: '40px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '0 12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                            backgroundColor: 'white',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                        >
                          <option value="">{t('contact.page.form.subject.placeholder')}</option>
                          <option value="demo">{t('contact.page.form.subject.options.demo')}</option>
                          <option value="features">{t('contact.page.form.subject.options.features')}</option>
                          <option value="pricing">{t('contact.page.form.subject.options.pricing')}</option>
                          <option value="support">{t('contact.page.form.subject.options.support')}</option>
                          <option value="partnership">{t('contact.page.form.subject.options.partnership')}</option>
                          <option value="other">{t('contact.page.form.subject.options.other')}</option>
                        </select>
                      </div>

                      {/* Row 4 - Message */}
                      <div style={{ marginBottom: '24px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="message"
                        >
                          {t('contact.page.form.message.label')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t('contact.page.form.message.placeholder')}
                          rows={5}
                          style={{
                            width: '100%',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                            resize: 'vertical',
                            minHeight: '120px',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                        />
                      </div>

                      {/* Submit Button */}
                      {submitError && (
                        <div
                          role="alert"
                          style={{
                            marginBottom: '12px',
                            padding: '10px 12px',
                            borderRadius: '6px',
                            border: '1px solid rgba(239, 68, 68, 0.35)',
                            backgroundColor: 'rgba(239, 68, 68, 0.08)',
                            color: '#991B1B',
                            fontSize: '13px',
                          }}
                        >
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          height: '48px',
                          backgroundColor: '#2D472C',
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: '600',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s ease-out',
                          opacity: isSubmitting ? 0.85 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = isSubmitting ? '0.85' : '1';
                        }}
                      >
                        {isSubmitting ? t('contact.page.form.submitting') : t('contact.page.form.submit')}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <CheckCircle size={64} style={{ color: '#C5A059', margin: '0 auto 24px' }} />
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#333333',
                        marginBottom: '12px',
                      }}
                    >
                      {t('contact.page.success.title')}
                    </h2>
                    <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
                      {t('contact.page.success.subtitle')}
                    </p>
                    <Link to="/">
                      <button
                        style={{
                          padding: '12px 32px',
                          backgroundColor: 'white',
                          color: '#2D472C',
                          border: '1px solid #2D472C',
                          borderRadius: '4px',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-out',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2D472C';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = '#2D472C';
                        }}
                      >
                        {t('contact.page.success.backHome')}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '24px',
                }}
              >
                {t('contact.page.info.title')}
              </h2>

              {/* Contact Info Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                {/* Address */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        {t('contact.page.info.addressLabel')}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>{t('contact.page.info.addressValue')}</div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        {t('contact.page.info.emailLabel')}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>contact@omnischool.tn</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Clock size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        {t('contact.page.info.hoursLabel')}
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>{t('contact.page.info.hoursValue')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://www.linkedin.com/company/omnilinks-tn/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Linkedin size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61576014832405"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Facebook size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/omnilinks.tn/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Instagram size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - FAQ Strip */}
      <section style={{ backgroundColor: '#F9F9F7', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <h2
            className="page-h2"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              color: '#333333',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {t('contact.page.faq.title')}
          </h2>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: activeAccordion === index ? '#2D472C' : '#333333',
                      transition: 'color 0.2s ease-out',
                    }}
                  >
                    {faq.question}
                  </div>
                  {activeAccordion === index ? (
                    <ChevronUp size={20} style={{ color: '#2D472C', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: '#6B7280', flexShrink: 0 }} />
                  )}
                </div>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      overflow: 'hidden',
                      paddingTop: '12px',
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: '1.6',
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
