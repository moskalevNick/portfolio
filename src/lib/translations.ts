export type Locale = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to new opportunities',
      role: 'Tech Lead / Front-end Architect',
      description:
        'Tech Lead & Front-end architect with strong product vision. Experienced in leading web teams, Smart TV ecosystem (Tizen, WebOS), high-load streaming, and full-cycle development.',
      location: 'Remote / Europe',
      focus: 'Smart TV · Web · Full-cycle',
      languages: 'English B1 · Russian native',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'View projects',
    },
    experience: {
      title: 'Latest experience',
      items: [
        {
          period: '2024 — present',
          title: 'Smart TV Platform & Web Ecosystem',
          role: 'Tech Lead · Web Development Team (10+ engineers)',
          description:
            'Leading cross-functional team of frontend and Smart TV developers, defining technical roadmap and architecture. Design and implementation of unified web runtime for Smart TVs (Samsung Tizen, LG WebOS) and web dashboards.',
          tags: ['React.js', 'TypeScript', 'Tizen SDK', 'WebOS', 'Node.js', 'Webpack', 'Jest'],
        },
        {
          period: 'Jul 2023 — now',
          title: 'TV-alike Streaming Service',
          role: 'Web-app Developer · team of 30',
          description:
            'Full-cycle development, design & logic improvements, performance optimizations, custom SSR. Integration with streaming backends, DRM, and analytics modules.',
          tags: ['React.js', 'MobX', 'TypeScript', 'SSR', 'Styled-components'],
        },
        {
          period: 'Jan — Mar 2024',
          title: 'Chromecast Receiver',
          role: 'JS Developer',
          description:
            'Full development, maintenance & performance improvements for screen mirroring receiver.',
          tags: ['JavaScript', 'CSS', 'Cast API'],
        },
        {
          period: 'Jun — Sep 2023',
          title: 'Enterprise Corporate Site',
          role: 'Team Lead · 4 members',
          description: 'Technical & architectural solutions, code review, deployment, refactoring.',
          tags: ['React.js', 'Node.js'],
        },
        {
          period: 'Oct 2022 — Feb 2023',
          title: 'Face Recognition Web App',
          role: 'Full-stack Developer',
          description:
            'Backend for high-frequency requests, image storage, Telegram bot, SPA deployment.',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
        {
          period: 'Jul 2019 — Feb 2020',
          title: 'Task Management System',
          role: 'Front-end Developer',
          description: 'Auth system, task drag&drop, weather widget, data storage.',
          tags: ['React', 'Redux', 'JWT', 'Firebase'],
        },
      ],
    },
    projects: {
      title: 'Selected projects',
      items: [
        {
          title: 'Smart TV Platform',
          description:
            'Unified web runtime for Samsung Tizen and LG WebOS with performance optimization for low-end TV hardware.',
          tags: ['Tizen', 'WebOS', 'React', 'TypeScript', 'Webpack'],
        },
        {
          title: 'Streaming Web App',
          description: 'Custom SSR streaming service with DRM integration, analytics, and TV interfaces.',
          tags: ['React', 'MobX', 'SSR', 'Styled-components'],
        },
        {
          title: 'Chromecast Receiver',
          description: 'Lightweight screen mirroring receiver built with the Cast API and vanilla JS.',
          tags: ['JavaScript', 'CSS', 'Cast API'],
        },
        {
          title: 'Face Recognition App',
          description:
            'Full-stack solution for face recognition with high-frequency image processing and Telegram notifications.',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
      ],
    },
    skills: {
      title: 'Tech stack',
      groups: [
        { title: 'Core', skills: ['HTML5/CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js'] },
        { title: 'Smart TV', skills: ['Tizen', 'WebOS', 'LG SDK', 'Smart TV Alliance'] },
        { title: 'State & tools', skills: ['Redux', 'MobX', 'Webpack', 'Styled-components'] },
        { title: 'Backend / DB', skills: ['NestJS', 'Express', 'MongoDB', 'Firebase'] },
      ],
      languagesTitle: 'Languages',
      russian: 'Russian — Native',
      english: 'English — Intermediate (B1)',
      educationTitle: 'Education',
      education: 'BSc Computer Science',
    },
    contact: {
      title: 'Get in touch',
      description:
        'Open to interesting projects, Tech Lead positions, and Smart TV / streaming opportunities. Let’s build something great together.',
      links: [
        { label: 'Email', value: 'moskalevnikolay1@gmail.com', href: 'mailto:moskalevnikolay1@gmail.com' },
        { label: 'GitHub', value: 'github.com/moskalevNick', href: 'https://github.com/moskalevNick' },
        { label: 'LinkedIn', value: 'linkedin.com/in/nickmoskalev', href: 'https://www.linkedin.com/in/nickmoskalev/' },
        { label: 'Telegram', value: '@NikolayMoskalev', href: 'https://t.me/NikolayMoskalev' },
      ],
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with Next.js, Tailwind CSS & Framer Motion',
    },
  },
  ru: {
    nav: {
      experience: 'Опыт',
      projects: 'Проекты',
      skills: 'Стек',
      contact: 'Контакты',
    },
    hero: {
      badge: 'Открыт к предложениям',
      role: 'Tech Lead / Front-end Architect',
      description:
        'Tech Lead и front-end архитектор с сильным продуктовым видением. Опыт руководства веб-командами, экосистемой Smart TV (Tizen, WebOS), высоконагруженным стримингом и полным циклом разработки.',
      location: 'Удалённо / Европа',
      focus: 'Smart TV · Web · Full-cycle',
      languages: 'Английский B1 · Русский родной',
      ctaPrimary: 'Связаться',
      ctaSecondary: 'Смотреть проекты',
    },
    experience: {
      title: 'Опыт работы',
      items: [
        {
          period: '2024 — н.в.',
          title: 'Smart TV Platform & Web Ecosystem',
          role: 'Tech Lead · команда веб-разработки (10+ инженеров)',
          description:
            'Руководство кросс-функциональной командой frontend и Smart TV разработчиков, определение технической дорожной карты и архитектуры. Проектирование и реализация единой веб-среды для Smart TV (Samsung Tizen, LG WebOS) и веб-дашбордов.',
          tags: ['React.js', 'TypeScript', 'Tizen SDK', 'WebOS', 'Node.js', 'Webpack', 'Jest'],
        },
        {
          period: 'Июл 2023 — н.в.',
          title: 'TV-alike Streaming Service',
          role: 'Web-app Developer · команда из 30 человек',
          description:
            'Full-cycle разработка, доработка дизайна и логики, оптимизация производительности, кастомный SSR. Интеграция со стриминговыми бэкендами, DRM и аналитическими модулями.',
          tags: ['React.js', 'MobX', 'TypeScript', 'SSR', 'Styled-components'],
        },
        {
          period: 'Янв — Мар 2024',
          title: 'Chromecast Receiver',
          role: 'JS Developer',
          description:
            'Полная разработка, поддержка и оптимизация производительности приёмника для трансляции экрана.',
          tags: ['JavaScript', 'CSS', 'Cast API'],
        },
        {
          period: 'Июн — Сен 2023',
          title: 'Enterprise Corporate Site',
          role: 'Team Lead · 4 человека',
          description: 'Технические и архитектурные решения, code review, деплой, рефакторинг.',
          tags: ['React.js', 'Node.js'],
        },
        {
          period: 'Окт 2022 — Фев 2023',
          title: 'Face Recognition Web App',
          role: 'Full-stack Developer',
          description:
            'Бэкенд для высокочастотных запросов, хранилище изображений, Telegram-бот, деплой SPA.',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
        {
          period: 'Июл 2019 — Фев 2020',
          title: 'Task Management System',
          role: 'Front-end Developer',
          description: 'Система авторизации, drag&drop задач, виджет погоды, хранилище данных.',
          tags: ['React', 'Redux', 'JWT', 'Firebase'],
        },
      ],
    },
    projects: {
      title: 'Избранные проекты',
      items: [
        {
          title: 'Smart TV Platform',
          description:
            'Единая веб-среда для Samsung Tizen и LG WebOS с оптимизацией производительности под слабое TV-железо.',
          tags: ['Tizen', 'WebOS', 'React', 'TypeScript', 'Webpack'],
        },
        {
          title: 'Streaming Web App',
          description: 'Кастомный SSR стриминговый сервис с DRM, аналитикой и TV-интерфейсами.',
          tags: ['React', 'MobX', 'SSR', 'Styled-components'],
        },
        {
          title: 'Chromecast Receiver',
          description: 'Лёгкий приёмник для трансляции экрана на базе Cast API и чистого JS.',
          tags: ['JavaScript', 'CSS', 'Cast API'],
        },
        {
          title: 'Face Recognition App',
          description:
            'Full-stack решение для распознавания лиц с высокочастотной обработкой изображений и уведомлениями в Telegram.',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
      ],
    },
    skills: {
      title: 'Технологический стек',
      groups: [
        { title: 'Core', skills: ['HTML5/CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js'] },
        { title: 'Smart TV', skills: ['Tizen', 'WebOS', 'LG SDK', 'Smart TV Alliance'] },
        { title: 'State & tools', skills: ['Redux', 'MobX', 'Webpack', 'Styled-components'] },
        { title: 'Backend / DB', skills: ['NestJS', 'Express', 'MongoDB', 'Firebase'] },
      ],
      languagesTitle: 'Языки',
      russian: 'Русский — Родной',
      english: 'Английский — Intermediate (B1)',
      educationTitle: 'Образование',
      education: 'BSc Computer Science',
    },
    contact: {
      title: 'Связаться',
      description:
        'Открыт к интересным проектам, позициям Tech Lead и возможностям в Smart TV / стриминге. Давайте делать крутые вещи вместе.',
      links: [
        { label: 'Email', value: 'moskalevnikolay1@gmail.com', href: 'mailto:moskalevnikolay1@gmail.com' },
        { label: 'GitHub', value: 'github.com/moskalevNick', href: 'https://github.com/moskalevNick' },
        { label: 'LinkedIn', value: 'linkedin.com/in/nickmoskalev', href: 'https://www.linkedin.com/in/nickmoskalev/' },
        { label: 'Telegram', value: '@NikolayMoskalev', href: 'https://t.me/NikolayMoskalev' },
      ],
    },
    footer: {
      rights: 'Все права защищены.',
      built: 'Сделано на Next.js, Tailwind CSS & Framer Motion',
    },
  },
};

export type Translations = typeof translations.en;
