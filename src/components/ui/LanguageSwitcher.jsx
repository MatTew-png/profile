import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher({ className = '', compact = false }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-switcher-pill font-label-mono ${compact ? 'compact' : ''} ${className}`}
      role="group"
      aria-label="Language Switcher"
    >
      <Globe size={13} className="lang-globe-icon text-cyan" />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage('th')}
        className={`lang-btn ${language === 'th' ? 'active' : ''}`}
        aria-pressed={language === 'th'}
        title="เปลี่ยนเป็นภาษาไทย"
      >
        TH
      </button>
    </div>
  );
}
