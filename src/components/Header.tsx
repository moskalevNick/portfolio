'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/translations';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ru' : 'en');
  };

  const nextLocale: Locale = locale === 'en' ? 'ru' : 'en';

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          NM
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:moskalevnikolay1@gmail.com"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/moskalevNick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/NikolayMoskalev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>

          <div className="mx-2 h-5 w-px bg-white/10" />

          <button
            onClick={toggleLocale}
            className="inline-flex h-8 items-center justify-center rounded-md border border-white/10 px-3 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-white/5"
            aria-label={`Switch to ${nextLocale}`}
          >
            {locale === 'en' ? 'RU' : 'EN'}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
