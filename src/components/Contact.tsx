'use client';

import { motion } from 'framer-motion';
import { Mail, Github, ArrowUpRight, Send } from 'lucide-react';
import Section, { SectionTitle } from './Section';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const icons: Record<string, React.ElementType> = {
    Email: Mail,
    GitHub: Github,
    Telegram: Send,
  };

  return (
    <Section id="contact" className="bg-white/[0.02]">
      <SectionTitle>{t.contact.title}</SectionTitle>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 max-w-xl text-lg leading-relaxed text-muted"
      >
        {t.contact.description}
      </motion.p>

      <div className="space-y-4">
        {t.contact.links.map((link, index) => {
          const Icon = icons[link.label] || Mail;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="group flex items-center justify-between rounded-2xl border border-white/5 bg-surface/50 p-6 transition-colors hover:border-white/10 hover:bg-surface"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors group-hover:text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">{link.label}</p>
                  <p className="text-lg font-medium text-foreground">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
