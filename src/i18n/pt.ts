import type { Dictionary } from './types'

const pt: Dictionary = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Mateus Souza — Software Engineer',
    description:
      'Portfólio de Mateus Souza, engenheiro front-end e fullstack em São Paulo.',
  },
  language: { label: 'Idioma' },
  nav: {
    home: 'Home',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    contact: 'Contato',
    mainLabel: 'Principal',
    footerLabel: 'Rodapé',
  },
  hero: {
    location: 'São Paulo, BR',
    cta: '// FALE COMIGO',
    hint: 'pode arrastar',
    photoAlt: 'Mateus de costas, com a camisa listrada azul e preta MADEUS 9',
  },
  about: {
    label: '/Sobre',
    statement: [
      'Faço produtos complexos parecerem simples, do componente ao ',
      'deploy',
      '.',
    ],
    paragraphs: [
      'Sou engenheiro front-end e fullstack, com cerca de 6 anos de experiência. Nos últimos 4, faço parte do time que constrói o console de clientes de uma nuvem pública brasileira.',
      'Trabalho com React, Next.js, TypeScript e micro-frontends, e não paro na interface: também entrego o BFF em Python, os contratos OpenAPI, o CI/CD e a configuração de gateway.',
    ],
    stats: [
      { value: '6+', label: 'anos de experiência' },
      { value: '4', label: 'anos em um console de nuvem pública' },
      { value: '[N]', label: '[SEU NÚMERO: produtos, telas, deploys…]' }, // TODO
    ],
  },
  experience: {
    title: 'Experiência',
    label: '/Onde trabalhei',
    jobs: [
      {
        period: '05/2022 — atual',
        // Decisão em aberto: citar ou não a Magalu Cloud pelo nome.
        company: 'Luizalabs · Magalu Cloud',
        role: 'Senior Front-End / Fullstack',
        desc: 'Faço parte do time que constrói o console de clientes da nuvem pública: React, Next.js, TypeScript e micro-frontends, além de BFF em Python, contratos OpenAPI, CI/CD e gateway.',
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
    title: 'Projetos',
    label: '/Trabalhos selecionados',
    items: [
      {
        name: 'Console de nuvem pública',
        year: '2022 — hoje',
        tag: 'Produto',
        placeholder: '[PRINT DO CONSOLE]',
        desc: 'Faço parte do time que constrói o console de clientes, em micro-frontends com React e Next.js.',
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
    title: 'Fora do código',
    label: '/Hobbies',
    hint: 'Clique numa carta para virar.',
    flip: 'virar carta',
    showStats: 'mostrar atributos',
    items: {
      futebol: {
        name: 'Futebol',
        pos: 'ATA',
        attrs: ['RIT', 'FIN', 'PAS', 'DRI', 'RAÇ', 'TOR'],
        quote: 'Jogo, assisto e sofro. Corinthiano desde sempre.',
      },
      academia: {
        name: 'Academia',
        pos: 'MUS',
        attrs: ['FOR', 'RES', 'CON', 'TÉC', 'DIS', 'PRÉ'],
        quote: 'Dia de perna não se pula.',
      },
      videogame: {
        name: 'Video game',
        pos: 'PC',
        attrs: ['REF', 'MIR', 'EST', 'FPS', 'RAG', 'GG'],
        quote: 'PC master race. "Só mais uma partida" nunca é só mais uma.',
      },
      muaythai: {
        name: 'Muay Thai',
        pos: 'LUT',
        attrs: ['SOC', 'CHU', 'CLI', 'DEF', 'GÁS', 'FOC'],
        quote: 'Oito armas, uma cabeça fria. Ajuda até em code review.',
      },
      programar: {
        name: 'Programar',
        pos: 'DEV',
        attrs: ['REA', 'TS', 'PY', 'CSS', 'DEB', 'CAF'],
        quote:
          'Também é hobby: projeto paralelo às 23h é o meu Football Manager.',
      },
    },
  },
  contact: {
    label: '/Contato',
    title: ['Bora construir', 'algo ', 'juntos?'],
    button: 'Mande um e-mail',
    buttonLabel: 'Enviar e-mail',
    note: 'Aberto a novas vagas e projetos freelance.',
  },
  footer: {
    claim: ['Interfaces', 'que escalam', 'com o produto.'],
    links: '/Links',
    contact: '/Contato',
    crest: 'Escudo do Corinthians',
  },
}

export default pt
