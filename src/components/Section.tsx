import { ReactNode } from 'react';
import Reveal from './Reveal';

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
    <Reveal delay={0}>
      <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
    </Reveal>
  );
}
