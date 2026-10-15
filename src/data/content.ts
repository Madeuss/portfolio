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

// Hobbies — duas versões da seção, ambas lendo esta lista (escolher uma e apagar a outra):
//   HobbiesCards → cartas estilo FIFA Ultimate Team (frente: atributos; verso: GIF + frase)
//   HobbiesPlay  → cards com micro-interação própria (`scene`) ao clicar
// Atributos são de brincadeira: ajuste à vontade. `gif` é opcional (ex.: '/images/hobby-futebol.gif');
// sem ele, aparece o placeholder `gifHint`. `crest` = escudo do time (imagem sua; não desenhamos logos).
export type HobbyIcon = 'ball' | 'dumbbell' | 'gamepad' | 'glove' | 'code';
export type HobbyScene = 'ball' | 'dumbbell' | 'pc' | 'bag' | 'terminal';
export type Hobby = {
  id: string;
  name: string;
  pos: string;
  overall: number;
  icon: HobbyIcon;
  attrs: [string, number][];
  scene: HobbyScene;
  quote: string; // TODO: frases são sugestões, troque pelas suas
  gif?: string;
  gifHint?: string;
  crest?: string;
};

export const hobbies: Hobby[] = [
  {
    id: 'futebol',
    scene: 'ball',
    gifHint: '[GIF DE GOL / TORCIDA]',
    // crest: '/images/escudo.png', // TODO: escudo (imagem sua)
    name: 'Futebol',
    pos: 'ATA',
    overall: 88,
    icon: 'ball',
    attrs: [['RIT', 84], ['FIN', 86], ['PAS', 82], ['DRI', 88], ['RAÇ', 99], ['TOR', 99]],
    quote: 'Jogo, assisto e sofro. Corinthiano desde sempre.',
  },
  {
    id: 'academia',
    scene: 'dumbbell',
    name: 'Academia',
    pos: 'MUS',
    overall: 84,
    icon: 'dumbbell',
    attrs: [['FOR', 86], ['RES', 80], ['CON', 90], ['TÉC', 82], ['DIS', 88], ['PRÉ', 75]],
    quote: 'Dia de perna não se pula.',
  },
  {
    id: 'videogame',
    scene: 'pc',
    gifHint: '[GIF DE JOGO]',
    name: 'Video game',
    pos: 'PC',
    overall: 87,
    icon: 'gamepad',
    attrs: [['REF', 89], ['MIR', 85], ['EST', 84], ['FPS', 90], ['RAG', 70], ['GG', 99]],
    quote: 'PC master race. "Só mais uma partida" nunca é só mais uma.',
  },
  {
    id: 'muaythai',
    scene: 'bag',
    name: 'Muay Thai',
    pos: 'LUT',
    overall: 82,
    icon: 'glove',
    attrs: [['SOC', 84], ['CHU', 83], ['CLI', 80], ['DEF', 78], ['GÁS', 85], ['FOC', 88]],
    quote: 'Oito armas, uma cabeça fria. Ajuda até em code review.',
  },
  {
    id: 'programar',
    scene: 'terminal',
    name: 'Programar',
    pos: 'DEV',
    overall: 91,
    icon: 'code',
    attrs: [['REA', 93], ['TS', 92], ['PY', 84], ['CSS', 90], ['DEB', 89], ['CAF', 99]],
    quote: 'Também é hobby: projeto paralelo às 23h é o meu Football Manager.',
  },
];
