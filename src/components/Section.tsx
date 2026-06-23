'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
    >
      {children}
    </motion.h2>
  );
}
