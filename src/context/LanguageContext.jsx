import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'th' || saved === 'en') return saved;
      return 'en'; // default to English for international baseline
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    if (lang === 'th' || lang === 'en') {
      setLanguageState(lang);
      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch (err) {
        console.warn('Unable to persist language in localStorage', err);
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const dict = useMemo(() => translations[language] || translations.en, [language]);

  // Deep key resolver (e.g. t('hero.greeting') -> 'Hello, I am')
  const t = (path, fallback = '') => {
    if (!path) return fallback;
    const parts = path.split('.');
    let current = dict;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return fallback || path;
      }
    }
    return current ?? fallback;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    dict,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
