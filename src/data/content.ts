// Dados do site que NÃO mudam com o idioma. Todo o texto traduzível fica em src/i18n/{pt,en,es}.ts.
import type { Dictionary, HobbyId } from '../i18n/types'

export const contact = {
  email: '[SEU EMAIL]', // TODO
  linkedin: '#linkedin', // TODO
  github: '#github', // TODO
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

export const heroStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Micro-frontends',
  'Python',
  'OpenAPI',
]

/** Visual de cada projeto, na mesma ordem de `projects.items` nos dicionários. */
export const projectMeta: { tint?: string; image?: string; href?: string }[] = [
  { tint: '#e3e8f7' }, // TODO: image (print do console)
  {},
  {},
  {},
]

export const stack = [
  {
    title: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'Micro-frontends'],
  },
  { title: 'Back-end', items: ['Python (BFF)', 'OpenAPI'] },
  { title: 'Infra', items: ['CI/CD', 'API Gateway'] },
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
  club?: boolean // mostra o escudo na frente da carta, como o clube nas cartas do FUT
}

export const hobbies: Hobby[] = [
  {
    id: 'futebol',
    overall: 88,
    icon: 'ball',
    stats: [84, 86, 82, 88, 99, 99],
    media: '/images/soccer_funny_fail.mp4',
    club: true,
  },
  {
    id: 'academia',
    overall: 84,
    icon: 'dumbbell',
    stats: [86, 80, 90, 82, 88, 75],
    media: '/images/gym.mp4',
  },
  {
    id: 'videogame',
    overall: 87,
    icon: 'gamepad',
    stats: [89, 85, 84, 90, 70, 99],
    media: '/images/game_01.gif',
  },
  {
    id: 'muaythai',
    overall: 82,
    icon: 'glove',
    stats: [84, 83, 80, 78, 85, 88],
    media: '/images/muay_thai_03.mp4',
  },
  {
    id: 'programar',
    overall: 91,
    icon: 'code',
    stats: [93, 92, 84, 90, 89, 99],
    media: '/images/programming.mp4',
  },
]
