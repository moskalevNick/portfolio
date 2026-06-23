'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section, { SectionTitle } from './Section';
import Tag from './Tag';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" className="bg-white/[0.02]">
      <SectionTitle>{t.projects.title}</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-6 transition-colors hover:border-white/10 hover:bg-surface"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mb-4 leading-relaxed text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
