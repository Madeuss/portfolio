import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    title: 'Mateus Souza — Software Engineer',
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
      "I'm a front-end and fullstack engineer with about 6 years of experience. For the last 4, I've been part of the team building the customer console of a Brazilian public cloud.",
      "I work with React, Next.js, TypeScript and micro-frontends, and I don't stop at the interface: I also ship the Python BFF, the OpenAPI contracts, CI/CD and the gateway configuration.",
    ],
    stats: [
      { value: '6+', label: 'years of experience' },
      { value: '4', label: 'years on a public cloud console' },
      { value: '[N]', label: '[SEU NÚMERO: produtos, telas, deploys…]' }, // TODO
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
        desc: "Part of the team building the public cloud's customer console: React, Next.js, TypeScript and micro-frontends, plus a Python BFF, OpenAPI contracts, CI/CD and gateway.",
      },
      {
        period: '[PERÍODO]',
        company: '[EMPRESA ANTERIOR]',
        role: '[CARGO]',
        desc: '[O que você construiu lá, em uma ou duas frases.]',
      },
      {
        period: '[PERÍODO]',
        company: '[EMPRESA ANTERIOR]',
        role: '[CARGO]',
        desc: '[O que você construiu lá, em uma ou duas frases.]',
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
        name: '[NOME DO PROJETO]',
        year: '[ANO]',
        tag: '[TIPO]',
        placeholder: '[IMAGEM]',
        desc: '[Uma frase sobre o problema e o que você entregou.]',
      },
      {
        name: '[NOME DO PROJETO]',
        year: '[ANO]',
        tag: '[TIPO]',
        placeholder: '[IMAGEM]',
        desc: '[Uma frase sobre o problema e o que você entregou.]',
      },
      {
        name: '[NOME DO PROJETO]',
        year: '[ANO]',
        tag: '[TIPO]',
        placeholder: '[IMAGEM]',
        desc: '[Uma frase sobre o problema e o que você entregou.]',
      },
    ],
  },
  stack: { label: '/Stack' },
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
        quote: 'I play, I watch, I suffer. Corinthians fan since forever.',
      },
      academia: {
        name: 'Gym',
        pos: 'LFT',
        // strength, endurance, consistency, technique, discipline, pre-workout
        attrs: ['STR', 'END', 'CON', 'TEC', 'DIS', 'PRE'],
        quote: 'Never skip leg day.',
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
}

export default en
