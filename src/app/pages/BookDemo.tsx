import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle, Mail, Phone, MapPin, LayoutDashboard, GraduationCap, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router';
import { API_BASE_URL } from '../lib/api';
import { useTranslation } from 'react-i18next';

export default function BookDemo() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolName: '',
    email: '',
    phone: '',
    city: '',
    studentCount: '',
    apps: {
      assistant: false,
      teacher: false,
      parent: false,
      manager: false,
    },
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCheckboxChange = (app: keyof typeof formData.apps) => {
    setFormData({
      ...formData,
      apps: {
        ...formData.apps,
        [app]: !formData.apps[app],
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Backend expects Tunisian format: exactly 8 digits (no +216)
    const normalizedPhone = formData.phone.replace(/\s+/g, '').replace(/^\+216/, '');
    if (!/^\d{8}$/.test(normalizedPhone)) {
      setSubmitError(t('bookDemo.form.errors.invalidPhone'));
      return;
    }

    const interestedIn = Object.entries(formData.apps)
      .filter(([, v]) => v)
      .map(([k]) => {
        // Send stable EN identifiers to backend (not translated labels)
        switch (k) {
          case 'assistant':
            return 'Assistant Dashboard';
          case 'teacher':
            return 'Teacher App';
          case 'parent':
            return 'Parent App';
          case 'manager':
            return 'Manager Dashboard';
          default:
            return k;
        }
      });

    const payload = {
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email.trim(),
      phone: normalizedPhone,
      schoolName: formData.schoolName.trim(),
      city: formData.city.trim(),
      // This form doesn't collect PRIMARY/SECONDARY/BOTH; default to BOTH.
      schoolType: 'BOTH',
      numberOfStudents: (() => {
        switch (formData.studentCount) {
          case 'less-100':
            return 80;
          case '100-200':
            return 150;
          case '200-400':
            return 300;
          case '400-600':
            return 500;
          case '600+':
            return 650;
          default:
            return 50;
        }
      })(),
      level: null,
      currentSystem: null,
      preferredDate: null,
      preferredTime: null,
      interestedIn,
      message: formData.message ? formData.message : null,
    };

    try {
      setIsSubmitting(true);

      const res = await fetch(`${API_BASE_URL}/api/demo/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        const msg = errBody?.message || errBody?.error || t('bookDemo.form.errors.serverError', { status: res.status });
        throw new Error(msg);
      }

      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t('bookDemo.form.errors.submitFailed'));
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

  return (
    <div style={{ backgroundColor: '#F9F9F7', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      <div className="relative" style={{ minHeight: '100vh', paddingTop: 'clamp(76px, 10vw, 80px)', paddingBottom: '80px' }}>
        {/* Decorative Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: '#2D472C',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-250px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: '#2D472C',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />

        {/* Main Content */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                }}
              >
                {t('bookDemo.hero.badge')}
              </div>
              <h1
                className="page-h1"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginTop: '16px',
                }}
              >
                {t('bookDemo.hero.title')}
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  maxWidth: '420px',
                  marginTop: '20px',
                }}
              >
                {t('bookDemo.hero.subtitle')}
              </p>

              {/* Benefits */}
              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {(t('bookDemo.hero.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#C5A059', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#333333' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>{t('bookDemo.contact.email')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>{t('bookDemo.contact.phone')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>{t('bookDemo.contact.location')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                className="contact-form-inner"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
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
                      }}
                    >
                      {t('bookDemo.form.title')}
                    </h2>

                    <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
                      {submitError && (
                        <div
                          style={{
                            marginBottom: '16px',
                            padding: '12px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(220, 38, 38, 0.06)',
                            border: '1px solid rgba(220, 38, 38, 0.2)',
                            color: '#991B1B',
                            fontSize: '13px',
                            lineHeight: 1.4,
                          }}
                        >
                          {submitError}
                        </div>
                      )}

                      {/* Row 1 - First Name & Last Name */}
                      <div className="form-grid-2col" style={{ gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="firstName">
                            {t('bookDemo.form.firstName.label')}
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder={t('bookDemo.form.firstName.placeholder')}
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
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="lastName">
                            {t('bookDemo.form.lastName.label')}
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder={t('bookDemo.form.lastName.placeholder')}
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

                      {/* Row 2 - School Name */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="schoolName">
                          {t('bookDemo.form.schoolName.label')}
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          name="schoolName"
                          required
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          placeholder={t('bookDemo.form.schoolName.placeholder')}
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

                      {/* Row 3 - Email & Phone */}
                      <div className="form-grid-2col" style={{ gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="email">
                            {t('bookDemo.form.email.label')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t('bookDemo.form.email.placeholder')}
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
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="phone">
                            {t('bookDemo.form.phone.label')}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t('bookDemo.form.phone.placeholder')}
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

                      {/* Row 4 - City & Student Count */}
                      <div className="form-grid-2col" style={{ gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="city">
                            {t('bookDemo.form.city.label')}
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder={t('bookDemo.form.city.placeholder')}
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
                          <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="studentCount">
                            {t('bookDemo.form.studentCount.label')}
                          </label>
                          <select
                            id="studentCount"
                            name="studentCount"
                            required
                            value={formData.studentCount}
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
                            <option value="">{t('bookDemo.form.studentCount.options.placeholder')}</option>
                            <option value="less-100">{t('bookDemo.form.studentCount.options.less100')}</option>
                            <option value="100-200">{t('bookDemo.form.studentCount.options.between100and200')}</option>
                            <option value="200-400">{t('bookDemo.form.studentCount.options.between200and400')}</option>
                            <option value="400-600">{t('bookDemo.form.studentCount.options.between400and600')}</option>
                            <option value="600+">{t('bookDemo.form.studentCount.options.more600')}</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 5 - Applications Checkboxes */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '12px' }}>
                          {t('bookDemo.form.apps.label')}
                        </label>
                        <div className="form-grid-2col" style={{ gap: '12px' }}>
                          <div
                            onClick={() => handleCheckboxChange('assistant')}
                            style={{
                              border: formData.apps.assistant ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.assistant ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <LayoutDashboard size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>{t('bookDemo.form.apps.options.assistant')}</span>
                            {formData.apps.assistant && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('teacher')}
                            style={{
                              border: formData.apps.teacher ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.teacher ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <GraduationCap size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>{t('bookDemo.form.apps.options.teacher')}</span>
                            {formData.apps.teacher && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('parent')}
                            style={{
                              border: formData.apps.parent ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.parent ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <Users size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>{t('bookDemo.form.apps.options.parent')}</span>
                            {formData.apps.parent && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('manager')}
                            style={{
                              border: formData.apps.manager ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.manager ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <BarChart2 size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>{t('bookDemo.form.apps.options.manager')}</span>
                            {formData.apps.manager && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>
                        </div>
                      </div>

                      {/* Row 6 - Message */}
                      <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }} htmlFor="message">
                          {t('bookDemo.form.message.label')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={t('bookDemo.form.message.placeholder')}
                          rows={4}
                          style={{
                            width: '100%',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                            resize: 'vertical',
                            minHeight: '100px',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                        />
                      </div>

                      {/* Submit Button */}
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
                          opacity: isSubmitting ? 0.75 : 1,
                          transition: 'all 0.2s ease-out',
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) e.currentTarget.style.opacity = '1';
                        }}
                      >
                        {isSubmitting ? t('bookDemo.form.submit.submitting') : t('bookDemo.form.submit.label')}
                      </button>

                      {/* Note */}
                      <div style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', marginTop: '12px' }}>
                        {t('bookDemo.form.trustLine')}
                      </div>
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
                      {t('bookDemo.success.title')}
                    </h2>
                    <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>{t('bookDemo.success.subtitle')}</p>
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
                        {t('bookDemo.success.backHome')}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
