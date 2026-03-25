import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr/translation.json';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    supportedLngs: ['fr', 'en', 'ar'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      // Ensure we persist only primary codes (fr/en/ar)
      convertDetectedLanguage: (lng) => (lng ? String(lng).split('-')[0] : lng),
    },
    react: { useSuspense: false },
  });

// Keep direction in sync app-wide
const setDir = (lng) => {
  const lang = (lng || i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
};

setDir(i18n.language);

i18n.on('languageChanged', (lng) => setDir(lng));

// Make sure we normalize initial language as well (e.g. fr-FR -> fr)
const normalized = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0];
if (normalized !== i18n.language) {
  i18n.changeLanguage(normalized);
}

export default i18n;
