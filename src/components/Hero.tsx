'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Monitor } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl"
        >
          Nikolay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl text-xl text-muted md:text-2xl"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {t.hero.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Monitor className="h-4 w-4" />
            {t.hero.focus}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-4 w-4" />
            {t.hero.languages}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-8 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}
