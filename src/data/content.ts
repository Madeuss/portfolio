// Dados do site que NÃO mudam com o idioma. Todo o texto traduzível fica em src/i18n/{pt,en,es}.ts.
import type { Dictionary, HobbyId, StackGroupId } from '../i18n/types'

export const contact = {
  email: 'mateus1two3@gmail.com',
  linkedin: 'https://linkedin.com/in/mateusdevsouza',
  github: 'https://github.com/madeuss',
}

type NavKey = keyof Pick<
  Dictionary['nav'],
  'home' | 'about' | 'experience' | 'projects' | 'hobbies' | 'contact'
>

export const nav: { key: NavKey; href: string }[] = [
  { key: 'about', href: '#sobre' },
  { key: 'experience', href: '#experiencia' },
  { key: 'projects', href: '#projetos' },
  { key: 'hobbies', href: '#hobbies' },
  { key: 'contact', href: '#contato' },
]

export const footerLinks: { key: NavKey; href: string }[] = [
  { key: 'home', href: '#top' },
  ...nav,
]

// Faixa sob a hero: um pouco de cada camada (front, back, infra).
export const heroStack = [
  'React',
  'Micro-frontends',
  'Python',
  'Kubernetes',
  'Docker',
  'API Gateway',
]

/** Visual de cada projeto, na mesma ordem de `projects.items` nos dicionários. */
export const projectMeta: { tint?: string; image?: string; href?: string }[] = [
  { tint: '#e3e8f7', image: '/images/console-home-v2.webp' },
  {
    image: '/images/firenze.webp',
    href: 'https://github.com/Madeuss/firenze',
  },
  {
    image: '/images/covid-tracker.webp',
    href: 'https://github.com/Madeuss/Covid-19-Tracker',
  },
  // Portfólio 3D jogável, em construção (subdomínio próprio)
  {
    image: '/images/portfolio-3d.webp',
    href: 'https://3d.madeusdev.com',
  },
]

// Títulos dos grupos ficam nos dicionários (stack.groups).
export const stack: { id: StackGroupId; items: string[] }[] = [
  {
    id: 'frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Micro-frontends',
      'Astro',
      'Context API',
      'Tailwind CSS',
      'Storybook',
      'Design Systems',
      'Accessibility (WCAG)',
    ],
  },
  {
    id: 'backend',
    items: [
      'Python',
      'FastAPI',
      'Node.js',
      'OpenAPI (spec-first)',
      'BFF',
      'OAuth 2.0 / OIDC',
      'Redis',
    ],
  },
  {
    id: 'testing',
    items: [
      'Vitest',
      'Jest',
      'Testing Library',
      'Playwright',
      'Cypress',
      'MSW',
    ],
  },
  {
    id: 'infra',
    items: [
      'GitLab CI/CD',
      'Docker',
      'Kubernetes',
      'ArgoCD',
      'Kong API Gateway',
    ],
  },
  {
    id: 'observability',
    items: ['OpenSearch', 'Sentry', 'Prometheus', 'PostHog'],
  },
]

// Escudo do time do coração (imagem do Mat; não desenhamos logos). SVG monocromático,
// usado como máscara CSS para herdar a cor do contexto (ver componente Crest).
export const crest = '/images/corinthians_escudo.svg'

// Hobbies — cartas estilo FIFA Ultimate Team (frente: atributos; verso: mídia + frase).
// Nome, posição, siglas dos atributos e frase ficam nos dicionários (mesma ordem de `stats`).
// `media` (vídeo .mp4 ou imagem) só é baixada quando a carta vira.
// TODO: aceitar várias mídias por hobby e sortear uma (por acesso ou a cada virada).
export type HobbyIcon = 'ball' | 'dumbbell' | 'gamepad' | 'glove' | 'code'
export type Hobby = {
  id: HobbyId
  overall: number
  icon: HobbyIcon
  /** valores dos 6 atributos (de brincadeira) */
  stats: number[]
  media?: string
  /** enquadramento vertical da mídia no verso (0% = topo, 100% = base) */
  mediaY?: string
  club?: boolean // mostra o escudo na frente da carta, como o clube nas cartas do FUT
}

export const hobbies: Hobby[] = [
  {
    id: 'futebol',
    overall: 99,
    icon: 'ball',
    stats: [84, 86, 82, 88, 99, 99],
    media: '/images/soccer_funny_fail.mp4',
    mediaY: '60%', // mostra a bola, que fica na base do vídeo
    club: true,
  },
  {
    id: 'academia',
    overall: 88,
    icon: 'dumbbell',
    stats: [86, 80, 90, 82, 88, 75],
    media: '/images/gym.mp4',
  },
  {
    id: 'videogame',
    overall: 94,
    icon: 'gamepad',
    stats: [89, 85, 84, 90, 70, 99],
    media: '/images/game_01.gif',
  },
  {
    id: 'muaythai',
    overall: 77,
    icon: 'glove',
    stats: [84, 83, 80, 78, 85, 88],
    media: '/images/muay_thai_03.mp4',
    mediaY: '10%', // mostra a bola, que fica na base do vídeo
  },
  {
    id: 'programar',
    overall: 91,
    icon: 'code',
    stats: [93, 92, 84, 90, 89, 99],
    media: '/images/programming.mp4',
  },
]
