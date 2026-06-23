'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Nikolay. {t.footer.rights}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
