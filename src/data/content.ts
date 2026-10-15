// Todo o texto do site num lugar só. Itens entre [COLCHETES] são placeholders a preencher.

export const contact = {
  email: '[SEU EMAIL]', // TODO
  linkedin: '#linkedin', // TODO
  github: '#github', // TODO
};

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export const heroStack = ['React', 'Next.js', 'TypeScript', 'Micro-frontends', 'Python', 'OpenAPI'];

export const about = {
  paragraphs: [
    'Sou engenheiro front-end e fullstack, com cerca de 6 anos de experiência. Nos últimos 4, faço parte do time que constrói o console de clientes de uma nuvem pública brasileira.',
    'Trabalho com React, Next.js, TypeScript e micro-frontends, e não paro na interface: também entrego o BFF em Python, os contratos OpenAPI, o CI/CD e a configuração de gateway.',
  ],
  stats: [
    { value: '6+', label: 'anos de experiência' },
    { value: '4', label: 'anos em um console de nuvem pública' },
    { value: '[N]', label: '[SEU NÚMERO: produtos, telas, deploys…]' }, // TODO
  ],
};

export type Job = { period: string; company: string; role: string; desc: string };

export const jobs: Job[] = [
  {
    period: '05/2022 — atual',
    // Decisão em aberto: citar ou não a Magalu Cloud pelo nome (ver CLAUDE.md).
    company: 'Luizalabs · Magalu Cloud',
    role: 'Senior Front-End / Fullstack',
    desc: 'Faço parte do time que constrói o console de clientes da nuvem pública: React, Next.js, TypeScript e micro-frontends, além de BFF em Python, contratos OpenAPI, CI/CD e gateway.',
  },
  { period: '[PERÍODO]', company: '[EMPRESA ANTERIOR]', role: '[CARGO]', desc: '[O que você construiu lá, em uma ou duas frases.]' },
  { period: '[PERÍODO]', company: '[EMPRESA ANTERIOR]', role: '[CARGO]', desc: '[O que você construiu lá, em uma ou duas frases.]' },
];

export type Project = { name: string; year: string; tag: string; desc: string; image?: string; placeholder: string; tint?: string; href?: string };

export const projects: Project[] = [
  {
    name: 'Console de nuvem pública',
    year: '2022 — hoje',
    tag: 'Produto',
    placeholder: '[PRINT DO CONSOLE]',
    tint: '#e3e8f7',
    desc: 'Faço parte do time que constrói o console de clientes, em micro-frontends com React e Next.js.',
  },
  { name: '[NOME DO PROJETO]', year: '[ANO]', tag: '[TIPO]', placeholder: '[IMAGEM]', desc: '[Uma frase sobre o problema e o que você entregou.]' },
  { name: '[NOME DO PROJETO]', year: '[ANO]', tag: '[TIPO]', placeholder: '[IMAGEM]', desc: '[Uma frase sobre o problema e o que você entregou.]' },
  { name: '[NOME DO PROJETO]', year: '[ANO]', tag: '[TIPO]', placeholder: '[IMAGEM]', desc: '[Uma frase sobre o problema e o que você entregou.]' },
];

export const stack = [
  { title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'Micro-frontends'] },
  { title: 'Back-end', items: ['Python (BFF)', 'OpenAPI'] },
  { title: 'Infra', items: ['CI/CD', 'API Gateway'] },
];

export const footerLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

// Hobbies — seção ainda não construída (ver CLAUDE.md).
export const hobbies = ['Futebol (jogar e assistir — corinthiano)', 'Academia (musculação)', 'Video game (PC)', 'Muay Thai', 'Programar'];
