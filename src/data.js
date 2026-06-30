// ── Edit your content here ──────────────────────────────────────────────
// Everything the site renders comes from this file, so you can update copy
// without touching the components.

export const profile = {
  name: 'Paulina Alarcón',
  role: 'Full Stack Developer',
  tagline: 'Backend & Fintech',
  location: 'Córdoba, Argentina',
  email: 'alarconayelenpaulina@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/paulina-alarcon-6247b4171/',
    github: 'https://github.com/paualarcon7',
    cv: './CV-Paulina-Alarcon-en.pdf', // file lives in /public
  },
  intro:
    "I'm a Full Stack Developer with 3+ years building production fintech systems end to end. I work mostly on the backend — Node.js/Express and NestJS services designed with clean architecture (Hexagonal / DDD) — and across the stack with React/TypeScript and Flutter.",
}

export const about = [
  'I care about secure API integration, maintainable architecture, and shipping real product that reaches real users. Most of my work runs in production at fintech companies, where reliability and clean design genuinely matter.',
  'I started in English translation studies and moved into software through the Henry full-stack bootcamp. That path gave me a C2-level command of English and a habit of learning fast and going deep — today I focus on backend architecture, system design, and modern TypeScript.',
]

// Professional experience — described as case studies (no private code shared).
export const experience = [
  {
    company: 'Finnix.ai',
    role: 'Full Stack Developer',
    period: 'Apr 2023 — Present',
    summary:
      'Building production fintech systems end to end: a customer-facing Flutter mobile app, Node.js/Express and NestJS backend services (Hexagonal architecture + DDD), and an internal operations dashboard in React + Material-UI.',
    highlights: [
      'Integrated payment flows, identity verification (OCR) and credit-bureau services into the lending journey.',
      'Built multi-tenant partner APIs secured with Auth0/OAuth2 (M2M), deployed on Google Cloud Platform (Cloud Run + API Gateway).',
      'Implemented credit-decisioning rules and customer-status flows on MySQL/TypeORM with Redis caching.',
    ],
    tags: ['NestJS', 'Node.js', 'Flutter', 'React', 'MySQL', 'Redis', 'GCP', 'Auth0'],
  },
  {
    company: 'Potentiia',
    role: 'Full Stack Developer',
    period: 'Mar 2025 — Present',
    summary:
      'Developing an enterprise React/TypeScript platform built as an Nx monorepo with a hexagonal (Ports & Adapters) frontend architecture for program management and customer analytics.',
    highlights: [
      'Type-safe API integration via OpenAPI code generation, with TanStack Query and Zustand for state.',
      'Multi-tenant features with subscription-based entitlements and feature gating, plus enterprise SSO (WorkOS).',
      'Full testing pyramid (Vitest, React Testing Library, Playwright e2e + a11y) and observability (Sentry, GCP Cloud Trace).',
    ],
    tags: ['React', 'TypeScript', 'Nx', 'OpenAPI', 'WorkOS', 'Playwright', 'GCP'],
  },
]

// Earlier / academic projects with public, live demos.
export const projects = [
  {
    name: 'Street Art Wine Club',
    blurb:
      'E-commerce SPA for a wine club: product catalog, cart and checkout, user & admin profiles, filtering and pagination. Built as the final team project at Henry Bootcamp.',
    tags: ['React', 'Redux', 'Express', 'PostgreSQL', 'Auth0', 'PayPal'],
    demo: 'https://street-art-wine-club-front-end-wc6e.vercel.app/',
    code: '',
  },
  {
    name: 'Videogames App',
    blurb:
      'A games catalog with search, filtering, ordering and a controlled creation form, backed by my first from-scratch REST API. Individual project at Henry Bootcamp.',
    tags: ['React', 'Redux', 'Express', 'PostgreSQL'],
    demo: '',
    code: '',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Dart', 'SQL', 'Java'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'TypeORM', 'Sequelize'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Flutter', 'Material-UI', 'TailwindCSS', 'Zustand', 'TanStack Query'] },
  { group: 'Databases & Infra', items: ['MySQL', 'PostgreSQL', 'Redis', 'Google Cloud Platform', 'Firebase', 'GitHub Actions'] },
  { group: 'Architecture & Practices', items: ['Hexagonal (Ports & Adapters)', 'DDD', 'Microservices', 'OpenAPI', 'Monorepo (Nx)', 'Auth0 / OAuth2 / JWT', 'Scrum / Agile'] },
  { group: 'Testing', items: ['Jest', 'Vitest', 'React Testing Library', 'Playwright'] },
]

export const education = [
  { title: 'Full Stack Web Developer', org: 'Henry Bootcamp', period: 'Jun 2022 — Mar 2023 · 700 hrs' },
  { title: 'English Translation', org: 'National University of Córdoba', period: 'Feb 2017 — Not concluded (1st–2nd year passed)' },
  { title: 'Introduction to Programming in Java', org: 'UTN', period: '2021 · 150 hrs' },
]
