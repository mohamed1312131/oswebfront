import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
] as const;

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const current = ((i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0] as
    | 'en'
    | 'fr'
    | 'ar');

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-[#6B7280]" />
      <select
        aria-label={t('common.language')}
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="text-sm bg-transparent border border-[#E5E7EB] rounded-md px-2 py-1 text-[#374151]"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
