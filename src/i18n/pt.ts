import type { Dictionary } from './types'

const pt: Dictionary = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Madeus',
    description:
      'Portfólio de Mateus Souza, engenheiro front-end e fullstack em São Paulo.',
  },
  language: { label: 'Idioma' },
  nav: {
    home: 'Home',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    hobbies: 'Hobbies',
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
      'Sou engenheiro front-end e fullstack, com mais de 6 anos de experiência. Nos últimos 4, faço parte do time que constrói o console de clientes de uma nuvem pública brasileira — máquinas virtuais, Kubernetes, storage, VPC, IAM e billing —, onde puxo decisões de arquitetura front-end: micro-frontends, pacotes publicados de forma independente e migrações de plataforma como Next.js 16 e React 19.',
      'Não paro no navegador: entrego BFFs em Python (FastAPI), fluxos de OAuth 2.0 e SSO, pipelines de CI/CD no GitLab e configuração de Kubernetes (ArgoCD) e Kong API Gateway em múltiplas regiões. Também escrevo ADRs e documentos técnicos, reviso código entre times e mentoro devs em testes e arquitetura front-end.',
    ],
    stats: [
      { value: '6+', label: 'anos de experiência' },
      { value: '4+', label: 'anos em um console de nuvem pública' },
      { value: '1', label: 'interclasse vencida' },
    ],
  },
  experience: {
    title: 'Experiência',
    label: '/Onde trabalhei',
    jobs: [
      {
        period: '05/2022 — atual',
        company: 'Luizalabs · Magalu Cloud',
        role: 'Senior Front-End / Fullstack',
        desc: 'Faço parte do time que constrói o console de clientes da nuvem pública, do front-end em React e Next.js ao BFF em Python e à configuração de plataforma.',
        highlights: [
          'Liderei a migração da plataforma para Next.js 16 e React 19 em um monorepo TypeScript de 7 pacotes, sem downtime para os clientes.',
          'Conduzi a migração de monorepo para polyrepo: micro-frontends viraram pacotes versionados em um registry npm privado, e cada time passou a lançar seu produto de forma independente.',
          'Construí o produto de IAM de ponta a ponta — membros, papéis, permissões, grupos e RBAC por projeto —, do front-end em React aos endpoints do BFF em FastAPI.',
          'Implantei um fluxo spec-first: specs OpenAPI geram clientes tipados compartilhados entre os produtos, acabando com tipos escritos à mão e divergência de contrato.',
          'Configuração de plataforma em múltiplas regiões: rotas no Kong API Gateway (400+ mudanças revisadas) e deploys no Kubernetes via ArgoCD.',
        ],
      },
      {
        period: '08/2024 — 02/2025',
        company: 'Jinboo',
        role: 'Front-End Developer · Contrato',
        desc: 'Contrato: novas features nas aplicações web e mobile nativa do produto OBT, estabilização de bugs no front-end e correção de defeitos de API no back-end em Go.',
      },
      {
        period: '07/2020 — 05/2022',
        company: 'AutoSeg',
        role: 'Front-End Developer · Trainee → Júnior',
        desc: 'Landing pages e interfaces de produto do conceito à produção, refatoração de páginas legadas em JavaScript para componentes React e TypeScript, integração com o back-end em Ruby on Rails e os primeiros testes automatizados do código.',
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
        name: 'Firenze',
        year: '2026',
        tag: 'Jogo · IA',
        placeholder: '[PRINT DO JOGO]',
        desc: 'Jogo de mistério investigativo com suspeitos movidos a LLM: casos gerados de forma determinística, um solver independente que garante que todo caso tem solução e isolamento de contexto como fronteira de arquitetura.',
      },
      {
        name: 'Covid-19 Tracker',
        year: '2020',
        tag: 'Web app',
        placeholder: '[MOCKUP]',
        desc: 'App em React que mapeia a COVID-19 pelo mundo: casos confirmados, mortes e recuperados por país, num mapa interativo com Mapbox, consumindo uma API pública com Axios e Context API.',
      },
      {
        name: 'Portfólio 3D',
        year: '2026',
        tag: 'Em construção',
        placeholder: '[PRINT DO 3D]',
        desc: 'Meu próximo portfólio, em construção: um site jogável em que você anda pela minha casa dos sonhos e abre projetos, stack e contato interagindo com os objetos. React Three Fiber, física com Rapier e personagem controlável.',
      },
    ],
  },
  stack: {
    label: '/Stack',
    groups: {
      frontend: 'Front-end',
      backend: 'Back-end & APIs',
      testing: 'Testes',
      infra: 'Infra & DevOps',
      observability: 'Observabilidade',
    },
  },
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
        quote: 'Vai Corinthians!',
      },
      academia: {
        name: 'Academia',
        pos: 'MUS',
        attrs: ['FOR', 'RES', 'CON', 'TÉC', 'DIS', 'PRÉ'],
        quote: 'Light weight, baby!',
      },
      videogame: {
        name: 'Video game',
        pos: 'PC',
        attrs: ['REF', 'MIR', 'EST', 'FPS', 'RAG', 'GG'],
        quote: '"Só mais uma partida" nunca é só mais uma.',
      },
      muaythai: {
        name: 'Muay Thai',
        pos: 'LUT',
        attrs: ['SOC', 'CHU', 'CLI', 'DEF', 'GÁS', 'FOC'],
        quote: 'IBIXI IBIXI - CÁBLICK',
      },
      programar: {
        name: 'Programar',
        pos: 'DEV',
        attrs: ['REA', 'TS', 'PY', 'CSS', 'DEB', 'CAF'],
        quote: 'Nome: Mateus, Habilidade: Quebrar Códigos',
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
  notFound: {
    title: '404 · Madeus',
    heading: 'Bola fora.',
    text: 'Essa página não existe, ou foi pro banco. Mas a bola continua em jogo: pode chutar.',
    cta: 'Voltar pro início',
  },
}

export default pt
