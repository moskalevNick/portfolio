'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'ru')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  // Prevent hydration mismatch by rendering default locale on server
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ locale: 'en', setLocale, t: translations.en }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
