'use client';

import { motion } from 'framer-motion';
import Section, { SectionTitle } from './Section';
import Tag from './Tag';
import { useLanguage } from '@/context/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionTitle>{t.skills.title}</SectionTitle>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-8 sm:grid-cols-2"
      >
        {t.skills.groups.map((group) => (
          <motion.div
            key={group.title}
            variants={itemVariant}
            className="rounded-2xl border border-white/5 bg-surface/50 p-6"
          >
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 grid gap-8 rounded-2xl border border-white/5 bg-surface/50 p-8 sm:grid-cols-2"
      >
        <div>
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted">
            {t.skills.languagesTitle}
          </h3>
          <p className="text-foreground">{t.skills.russian}</p>
          <p className="text-muted">{t.skills.english}</p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-muted">
            {t.skills.educationTitle}
          </h3>
          <p className="text-foreground">{t.skills.education}</p>
        </div>
      </motion.div>
    </Section>
  );
}
