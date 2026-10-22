import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    htmlLang: 'es',
    title: 'Madeus',
    description:
      'Portafolio de Mateus Souza, ingeniero front-end y fullstack en São Paulo, Brasil.',
  },
  language: { label: 'Idioma' },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    hobbies: 'Hobbies',
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
      'Soy ingeniero front-end y fullstack, con más de 6 años de experiencia. En los últimos 4, formo parte del equipo que construye la consola de clientes de una nube pública brasileña — máquinas virtuales, Kubernetes, storage, VPC, IAM y billing —, donde impulso decisiones de arquitectura front-end: micro-frontends, paquetes publicados de forma independiente y migraciones de plataforma como Next.js 16 y React 19.',
      'No me quedo en el navegador: entrego BFFs en Python (FastAPI), flujos de OAuth 2.0 y SSO, pipelines de CI/CD en GitLab y configuración de Kubernetes (ArgoCD) y Kong API Gateway en múltiples regiones. También escribo ADRs y documentos técnicos, reviso código entre equipos y mentoreo a desarrolladores en testing y arquitectura front-end.',
    ],
    stats: [
      { value: '6+', label: 'años de experiencia' },
      { value: '4+', label: 'años en una consola de nube pública' },
      { value: '1', label: 'torneo interclases ganado' },
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
        desc: 'Formo parte del equipo que construye la consola de clientes de la nube pública, del front-end en React y Next.js al BFF en Python y la configuración de plataforma.',
        highlights: [
          'Lideré la migración de la plataforma a Next.js 16 y React 19 en un monorepo TypeScript de 7 paquetes, sin downtime para los clientes.',
          'Impulsé la migración de monorepo a polyrepo: los micro-frontends pasaron a ser paquetes versionados en un registry npm privado, y cada equipo lanza su producto de forma independiente.',
          'Construí el producto de IAM de punta a punta — miembros, roles, permisos, grupos y RBAC por proyecto —, del front-end en React a los endpoints del BFF en FastAPI.',
          'Implanté un flujo spec-first: las specs OpenAPI generan clientes tipados compartidos entre productos, eliminando tipos escritos a mano y divergencias de contrato.',
          'Configuración de plataforma en múltiples regiones: rutas en Kong API Gateway (400+ cambios revisados) y deploys en Kubernetes vía ArgoCD.',
        ],
      },
      {
        period: '08/2024 — 02/2025',
        company: 'Jinboo',
        role: 'Front-End Developer · Contrato',
        desc: 'Contrato: nuevas features en las aplicaciones web y mobile nativa del producto OBT, estabilización de bugs en el front-end y corrección de defectos de API en el back-end en Go.',
      },
      {
        period: '07/2020 — 05/2022',
        company: 'AutoSeg',
        role: 'Front-End Developer · Trainee → Junior',
        desc: 'Landing pages e interfaces de producto del concepto a producción, refactorización de páginas legadas en JavaScript a componentes React y TypeScript, integración con el back-end en Ruby on Rails y los primeros tests automatizados del código.',
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
        name: 'Firenze',
        year: '2026',
        tag: 'Juego · IA',
        placeholder: '[PRINT DO JOGO]',
        desc: 'Juego de misterio investigativo con sospechosos impulsados por LLM: casos generados de forma determinista, un solver independiente que garantiza que todo caso tenga solución y aislamiento de contexto como frontera de arquitectura.',
      },
      {
        name: 'Covid-19 Tracker',
        year: '2020',
        tag: 'Web app',
        placeholder: '[MOCKUP]',
        desc: 'App en React que mapea la COVID-19 en el mundo: casos confirmados, muertes y recuperados por país, en un mapa interactivo con Mapbox, consumiendo una API pública con Axios y Context API.',
      },
      {
        name: 'Portafolio 3D',
        year: '2026',
        tag: 'Sitio 3D',
        placeholder: '[PRINT DO 3D]',
        desc: 'Mi portafolio jugable: recorre la casa de mis sueños y abre proyectos, stack y contacto interactuando con los objetos. React Three Fiber, física con Rapier y personaje controlable.',
      },
    ],
  },
  stack: {
    label: '/Stack',
    groups: {
      frontend: 'Front-end',
      backend: 'Back-end & APIs',
      testing: 'Pruebas',
      infra: 'Infra & DevOps',
      observability: 'Observabilidad',
    },
  },
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
        quote: 'Vai Corinthians!',
      },
      academia: {
        name: 'Gimnasio',
        pos: 'MUS',
        // fuerza, resistencia, constancia, técnica, disciplina, pre-entreno
        attrs: ['FUE', 'RES', 'CON', 'TÉC', 'DIS', 'PRE'],
        quote: 'Light weight, baby!',
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
  notFound: {
    title: '404 · Madeus',
    heading: 'Balón fuera.',
    text: 'Esta página no existe, o se fue al banquillo. Pero el balón sigue en juego: dale una patada.',
    cta: 'Volver al inicio',
  },
}

export default es
