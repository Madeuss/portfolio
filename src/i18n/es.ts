import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    htmlLang: 'es',
    title: 'Mateus Souza — Software Engineer',
    description:
      'Portafolio de Mateus Souza, ingeniero front-end y fullstack en São Paulo, Brasil.',
  },
  language: { label: 'Idioma' },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    mainLabel: 'Principal',
    footerLabel: 'Pie de página',
  },
  hero: {
    location: 'São Paulo, BR',
    cta: '// HABLEMOS',
    hint: 'puedes arrastrar',
    photoAlt:
      'Mateus de espaldas, con la camiseta a rayas azul y negra MADEUS 9',
  },
  about: {
    label: '/Sobre mí',
    statement: [
      'Hago que productos complejos parezcan simples, del componente al ',
      'deploy',
      '.',
    ],
    paragraphs: [
      'Soy ingeniero front-end y fullstack, con cerca de 6 años de experiencia. En los últimos 4, formo parte del equipo que construye la consola de clientes de una nube pública brasileña.',
      'Trabajo con React, Next.js, TypeScript y micro-frontends, y no me quedo en la interfaz: también entrego el BFF en Python, los contratos OpenAPI, el CI/CD y la configuración del gateway.',
    ],
    stats: [
      { value: '6+', label: 'años de experiencia' },
      { value: '4', label: 'años en una consola de nube pública' },
      { value: '[N]', label: '[SEU NÚMERO: produtos, telas, deploys…]' }, // TODO
    ],
  },
  experience: {
    title: 'Experiencia',
    label: '/Dónde trabajé',
    jobs: [
      {
        period: '05/2022 — actualidad',
        company: 'Luizalabs · Magalu Cloud',
        role: 'Senior Front-End / Fullstack',
        desc: 'Formo parte del equipo que construye la consola de clientes de la nube pública: React, Next.js, TypeScript y micro-frontends, además de BFF en Python, contratos OpenAPI, CI/CD y gateway.',
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
    title: 'Proyectos',
    label: '/Trabajos seleccionados',
    items: [
      {
        name: 'Consola de nube pública',
        year: '2022 — hoy',
        tag: 'Producto',
        placeholder: '[PRINT DO CONSOLE]',
        desc: 'Formo parte del equipo que construye la consola de clientes, con micro-frontends en React y Next.js.',
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
    title: 'Fuera del código',
    label: '/Hobbies',
    hint: 'Haz clic en una carta para girarla.',
    flip: 'girar carta',
    showStats: 'mostrar atributos',
    items: {
      futebol: {
        name: 'Fútbol',
        pos: 'DEL',
        // ritmo, tiro, pase, regate, garra, hincha
        attrs: ['RIT', 'TIR', 'PAS', 'REG', 'GAR', 'HIN'],
        quote: 'Juego, miro y sufro. Hincha del Corinthians desde siempre.',
      },
      academia: {
        name: 'Gimnasio',
        pos: 'MUS',
        // fuerza, resistencia, constancia, técnica, disciplina, pre-entreno
        attrs: ['FUE', 'RES', 'CON', 'TÉC', 'DIS', 'PRE'],
        quote: 'El día de pierna no se salta.',
      },
      videogame: {
        name: 'Videojuegos',
        pos: 'PC',
        // reflejos, puntería, estrategia, fps, rabia, gg
        attrs: ['REF', 'PUN', 'EST', 'FPS', 'RAB', 'GG'],
        quote: 'PC master race. "Solo una partida más" nunca es solo una más.',
      },
      muaythai: {
        name: 'Muay Thai',
        pos: 'LUC',
        // golpe, patada, clinch, defensa, gas, foco
        attrs: ['GOL', 'PAT', 'CLI', 'DEF', 'GAS', 'FOC'],
        quote: 'Ocho armas, cabeza fría. Ayuda hasta en el code review.',
      },
      programar: {
        name: 'Programar',
        pos: 'DEV',
        // react, typescript, python, css, depuración, café
        attrs: ['REA', 'TS', 'PY', 'CSS', 'DEP', 'CAF'],
        quote:
          'También es hobby: el proyecto paralelo a las 23 h es mi Football Manager.',
      },
    },
  },
  contact: {
    label: '/Contacto',
    title: ['¿Construimos', 'algo ', 'juntos?'],
    button: 'Envíame un e-mail',
    buttonLabel: 'Enviar e-mail',
    note: 'Abierto a nuevas vacantes y proyectos freelance.',
  },
  footer: {
    claim: ['Interfaces', 'que escalan', 'con el producto.'],
    links: '/Links',
    contact: '/Contacto',
    crest: 'Escudo del Corinthians',
  },
}

export default es
