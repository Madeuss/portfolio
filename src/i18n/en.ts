import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    title: 'Madeus',
    description:
      'Portfolio of Mateus Souza, front-end and fullstack engineer based in São Paulo, Brazil.',
  },
  language: { label: 'Language' },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    hobbies: 'Hobbies',
    contact: 'Contact',
    mainLabel: 'Main',
    footerLabel: 'Footer',
  },
  hero: {
    location: 'São Paulo, BR',
    cta: '// GET IN TOUCH',
    hint: 'drag me around',
    photoAlt:
      'Mateus seen from behind, wearing a blue and black striped MADEUS 9 shirt',
  },
  about: {
    label: '/About',
    statement: [
      'I make complex products feel simple, from component to ',
      'deploy',
      '.',
    ],
    paragraphs: [
      "I'm a front-end and fullstack engineer with 6+ years of experience. For the last 4, I've been part of the team building the customer console of a Brazilian public cloud — virtual machines, Kubernetes, storage, VPC, IAM and billing — where I drive front-end architecture decisions: micro-frontends, independently published packages and platform migrations like Next.js 16 and React 19.",
      "I don't stop at the browser: I ship Python (FastAPI) BFFs, OAuth 2.0 and SSO flows, GitLab CI/CD pipelines and Kubernetes (ArgoCD) and Kong API Gateway configuration across multiple regions. I also write ADRs and design docs, review code across teams and mentor developers on testing and front-end architecture.",
    ],
    stats: [
      { value: '6+', label: 'years of experience' },
      { value: '4+', label: 'years on a public cloud console' },
      { value: '1', label: 'school football tournament won' },
    ],
  },
  experience: {
    title: 'Experience',
    label: "/Where I've worked",
    jobs: [
      {
        period: '05/2022 — present',
        company: 'Luizalabs · Magalu Cloud',
        role: 'Senior Front-End / Fullstack',
        desc: "Part of the team building the public cloud's customer console, from the React and Next.js front-end to the Python BFF and platform configuration.",
        highlights: [
          'Led the platform-wide migration to Next.js 16 and React 19 across a 7-package TypeScript monorepo, with no customer-facing downtime.',
          'Drove the monorepo-to-polyrepo migration: micro-frontends became versioned packages on a private npm registry, so each team ships its product independently.',
          'Built the IAM product end to end — members, roles, permissions, groups and project-scoped RBAC — from the React front-end to the FastAPI BFF endpoints.',
          'Set up a spec-first API workflow: OpenAPI specs generate typed clients shared across products, removing hand-written types and contract drift.',
          'Platform configuration across multiple regions: Kong API Gateway routing (400+ reviewed changes) and Kubernetes deploys via ArgoCD.',
        ],
      },
      {
        period: '08/2024 — 02/2025',
        company: 'Jinboo',
        role: 'Front-End Developer · Contract',
        desc: 'Concurrent contract: new features across the web and native mobile apps of the OBT product, front-end bug fixing and API defect fixes in the Go back-end.',
      },
      {
        period: '07/2020 — 05/2022',
        company: 'AutoSeg',
        role: 'Front-End Developer · Trainee → Junior',
        desc: 'Landing pages and product interfaces from concept to production, refactoring legacy JavaScript pages into React and TypeScript components, integrating with the Ruby on Rails back-end and introducing the first automated tests.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    label: '/Selected work',
    items: [
      {
        name: 'Public cloud console',
        year: '2022 — present',
        tag: 'Product',
        placeholder: '[PRINT DO CONSOLE]',
        desc: 'Part of the team building the customer console, with micro-frontends in React and Next.js.',
      },
      {
        name: 'Firenze',
        year: '2026',
        tag: 'Game · AI',
        placeholder: '[PRINT DO JOGO]',
        desc: 'Investigative mystery game with LLM-driven suspects: deterministic case generation, an independent solver that guarantees every case is solvable, and context isolation as an architectural boundary.',
      },
      {
        name: 'Covid-19 Tracker',
        year: '2020',
        tag: 'Web app',
        placeholder: '[MOCKUP]',
        desc: 'React app that maps COVID-19 around the world: confirmed cases, deaths and recoveries by country on an interactive Mapbox map, consuming a public API with Axios and the Context API.',
      },
      {
        name: 'This portfolio',
        year: '2026',
        tag: 'Website',
        placeholder: '[PRINT DO SITE]',
        desc: 'Throwable ball and controller with hand-rolled physics, PT/EN/ES i18n with a typed dictionary, FUT cards with a 3D flip and media that only loads when used. Physics and i18n built from scratch, no libraries.',
      },
    ],
  },
  stack: {
    label: '/Stack',
    groups: {
      frontend: 'Front-end',
      backend: 'Back-end & APIs',
      testing: 'Testing',
      infra: 'Infra & DevOps',
      observability: 'Observability',
    },
  },
  hobbies: {
    title: 'Off the clock',
    label: '/Hobbies',
    hint: 'Click a card to flip it.',
    flip: 'flip card',
    showStats: 'show stats',
    items: {
      futebol: {
        name: 'Football',
        pos: 'ST',
        // pace, shooting, passing, dribbling, grit, fandom
        attrs: ['PAC', 'SHO', 'PAS', 'DRI', 'GRT', 'FAN'],
        quote: 'Vai Corinthians!',
      },
      academia: {
        name: 'Gym',
        pos: 'LFT',
        // strength, endurance, consistency, technique, discipline, pre-workout
        attrs: ['STR', 'END', 'CON', 'TEC', 'DIS', 'PRE'],
        quote: 'Light weight, baby!',
      },
      videogame: {
        name: 'Video games',
        pos: 'PC',
        // reflexes, aim, strategy, fps, rage, gg
        attrs: ['REF', 'AIM', 'STR', 'FPS', 'RAG', 'GG'],
        quote: 'PC master race. "Just one more match" is never just one more.',
      },
      muaythai: {
        name: 'Muay Thai',
        pos: 'FGT',
        // punch, kick, clinch, defense, cardio, focus
        attrs: ['PUN', 'KCK', 'CLI', 'DEF', 'CRD', 'FOC'],
        quote:
          'Eight limbs, one cool head. Comes in handy even in code review.',
      },
      programar: {
        name: 'Coding',
        pos: 'DEV',
        // react, typescript, python, css, debugging, coffee
        attrs: ['REA', 'TS', 'PY', 'CSS', 'DBG', 'COF'],
        quote:
          "It's a hobby too: an 11 p.m. side project is my Football Manager.",
      },
    },
  },
  contact: {
    label: '/Contact',
    title: ["Let's build", 'something ', 'together?'],
    button: 'Send me an email',
    buttonLabel: 'Send email',
    note: 'Open to new roles and freelance projects.',
  },
  footer: {
    claim: ['Interfaces', 'that scale', 'with the product.'],
    links: '/Links',
    contact: '/Contact',
    crest: 'Corinthians crest',
  },
  notFound: {
    title: '404 · Madeus',
    heading: 'Out of bounds.',
    text: "This page doesn't exist, or it got benched. The ball is still in play, though: go ahead and kick it.",
    cta: 'Back to home',
  },
}

export default en
