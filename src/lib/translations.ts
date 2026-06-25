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
      role: 'Frontend / Fullstack developer',
      description:
        'Fullstack & Frontend developer with strong product vision. Experienced in leading web teams, Smart TV ecosystem (Tizen, WebOS), high-load streaming, and full-cycle development.',
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
          title: 'Voka.tv web',
          role: 'Web-app Developer · team of 30',
          description:
            'Developed the client side of a high-load web application using React with MobX for state management, along with a custom SSR solution on Node.js.\n' +
              '\n' +
              'Implemented code splitting, lazy loading for components and routes, and client-side data caching to optimize performance, thereby improving FCP by 30%.\n' +
              '\n' +
              'Integrated a video player with HLS and DASH support, worked with adaptive bitrate and DRM-protected content.\n' +
              '\n' +
              'Handled responsive and cross-browser layout, build configuration (Webpack), and frontend CI/CD setup.',
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
          description: 'Built landing pages from scratch using Static Site Generation (SSG) and Incremental Static Regeneration (ISR) for instant load times and excellent Core Web Vitals, achieving a Lighthouse Performance Score of 95+ and increasing conversion rates.\n' +
              '\n' +
              'Developed the visual layer with React + Tailwind CSS (or Styled Components), fully adaptive for mobile and tablet devices. Actively used animations (Framer Motion, GSAP, CSS transitions) to capture attention and boost engagement.\n' +
              '\n' +
              'Lead capture forms implemented with React Hook Form + Yup, sending data directly to CRMs (amoCRM, HubSpot, Bitrix24) via Webhook or API. Set up end-to-end analytics: Google Tag Manager, Google Analytics 4, Facebook Pixel, and dataLayer events.\n' +
              '\n' +
              'Integrated payment systems (Stripe, PayPal, Tinkoff) and email marketing services (Unisender, Mailchimp) into the landing pages.\n' +
              '\n' +
              'Optimized performance: prioritized loading with next/image, WebP/AVIF formats, lazy loading for below-the-fold components, skeleton screens, and CDN caching. As a result, First Contentful Paint decreased by 10% and Largest Contentful Paint by 20%.',
          tags: ['React.js', 'Node.js'],
        },
        {
          period: 'Oct 2022 — Feb 2023',
          title: 'Face Recognition Web App',
          role: 'Full-stack Developer',
          description:
            'Full-stack developer on a face identification system for retail and hospitality.\n' +
              'Single-handedly built the client side from scratch (from design to production) using React with Redux for state management, and the server side with NestJS + MongoDB. Database interaction via Prisma ORM. Set up a fully-fledged REST API and seamless data exchange between frontend and backend.\n' +
              'Integrated an external face recognition service: when a customer enters a store or hotel, the system automatically loads their profile including discount, purchase history, behavioral data, and photo.\n' +
              'Deployed via Netlify.',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
        {
          period: 'Jul 2019 — Feb 2020',
          title: 'Task Management System',
          role: 'Frontend Developer',
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
        'Open to interesting projects, Frontend & Fullstack positions. Let’s build something great together.',
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
      role: 'Frontend / Fullstack developer',
      description:
        'Fullstack & Frontend разработчик с сильным продуктовым видением. Опыт руководства веб-командами, экосистемой Smart TV (Tizen, WebOS), высоконагруженным стримингом и полным циклом разработки.',
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
          title: 'Voka.tv web',
          role: 'Web-app Developer · команда из 30 человек',
          description:
            'Разрабатывал клиентскую часть высоконагруженного веб-приложения на React с использованием MobX для управления состоянием, а так же самописным SSR на node.js.\n' +
              'Реализовал code splitting, lazy loading компонентов и роутов, кэширование данных на клиенте для оптимизации производительности, тем самым ускорил FCP на 30%.\n' +
              'Интегрировал видеоплеер с поддержкой HLS, dash, работал с адаптивным битрейтом и DRM-контентом.\n' +
              'Занимался адаптивной и кроссбраузерной вёрсткой, настройкой сборки (Webpack), настройкой CI/CD для фронтенда.\n',
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
          description: 'Разрабатывал лендинги с нуля, используя статическую генерацию (SSG) и инкрементальную регенерацию (ISR) для мгновенной загрузки и отличных показателей Core Web Vitals. Это позволило достичь Lighthouse Performance Score 95+ и повысить конверсию.\n' +
              'Визуальная часть на React + Tailwind CSS (или Styled Components) с полной адаптацией под мобильные устройства и планшеты. Активно применял анимации (Framer Motion, GSAP, CSS transitions) для удержания внимания и увеличения вовлечённости.\n' +
              'Формы захвата лидов реализованы через React Hook Form + Yup, с отправкой данных напрямую в CRM (amoCRM, HubSpot, Bitrix24) через Webhook или API. Настроил сквозную аналитику: Google Tag Manager, Google Analytics 4, Facebook Pixel, события в dataLayer.\n' +
              'Лендинги интегрировал с платёжными системами (Stripe, PayPal, Tinkoff) и сервисами рассылок (Unisender, Mailchimp).\n' +
              'Оптимизировал производительность: next/image с приоритетной загрузкой, WebP/AVIF, lazy loading компонентов ниже линии сгиба, скелетоны, кэширование через CDN. В результате First Contentful Paint снизился на 10%, а Largest Contentful Paint — на 20%.',
          tags: ['React.js', 'Node.js'],
        },
        {
          period: 'Окт 2022 — Фев 2023',
          title: 'Face Recognition Web App',
          role: 'Full-stack Developer',
          description:
            'Full-stack разработчик в проекте системы идентификации по лицу для ритейла и гостиничного бизнеса.\n' +
              'В одиночку с нуля (от макета до production) разработал клиентскую часть на React с Redux (управление состоянием) и серверную часть на NestJS + MongoDB. Взаимодействие с базой данных — через Prisma ORM. Настроил полноценное REST API и обмен данными между фронтендом и бэкендом.\n' +
              'Реализовал интеграцию с внешним сервисом распознавания лиц (Face Recognition): при входе клиента в магазин/отель система автоматически загружает его профиль со скидкой, историей покупок, поведенческими данными и фотографией.\n' +
              'Задеплоено было через Netlify',
          tags: ['React', 'NestJS', 'Prisma', 'Firebase'],
        },
        {
          period: 'Июл 2019 — Фев 2020',
          title: 'Task Management System',
          role: 'Frontend Developer',
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
        'Открыт к интересным проектам, позициям Frontend и Fullstack разработчика. Давайте делать крутые вещи вместе.',
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
