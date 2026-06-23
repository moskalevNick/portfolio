'use client';

import Tag from './Tag';
import Section, { SectionTitle } from './Section';
import Reveal from './Reveal';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionTitle>{t.experience.title}</SectionTitle>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-[120px] md:block" />

        <div className="space-y-12">
          {t.experience.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="group relative md:pl-[152px]">
                <span className="mb-2 block text-sm text-muted md:absolute md:left-0 md:top-1 md:w-[96px] md:text-right">
                  {item.period}
                </span>

                <div className="rounded-2xl border border-white/5 bg-surface/50 p-6 transition-colors hover:border-white/10 hover:bg-surface">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mb-3 text-sm text-accent">{item.role}</p>
                  <p className="mb-4 leading-relaxed text-muted">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
