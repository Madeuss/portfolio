export const LOCALES = ['pt', 'en', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export type Job = {
  period: string
  company: string
  role: string
  desc: string
  /** conquistas em destaque (opcional) */
  highlights?: string[]
}
export type Project = {
  name: string
  year: string
  tag: string
  desc: string
  placeholder: string
}
export type StackGroupId =
  'frontend' | 'backend' | 'testing' | 'infra' | 'observability'
export type HobbyId =
  'futebol' | 'academia' | 'videogame' | 'muaythai' | 'programar'
/** Textos de uma carta de hobby. `attrs` segue a ordem dos valores em content.ts (6 itens). */
export type HobbyText = {
  name: string
  pos: string
  attrs: string[]
  quote: string
}

/**
 * Todo o texto do site, por idioma. Placeholders entre [COLCHETES] ficam iguais em todos os
 * idiomas até serem preenchidos.
 */
export type Dictionary = {
  meta: { htmlLang: string; title: string; description: string }
  language: { label: string }
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    hobbies: string
    contact: string
    mainLabel: string
    footerLabel: string
  }
  hero: { location: string; cta: string; hint: string; photoAlt: string }
  about: {
    label: string
    /** frase de destaque: [antes, trecho em azul, depois] */
    statement: [string, string, string]
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  experience: { title: string; label: string; jobs: Job[] }
  projects: { title: string; label: string; items: Project[] }
  stack: { label: string; groups: Record<StackGroupId, string> }
  hobbies: {
    title: string
    label: string
    hint: string
    flip: string
    showStats: string
    items: Record<HobbyId, HobbyText>
  }
  contact: {
    label: string
    /** título em duas linhas; o último trecho da segunda linha vai em azul */
    title: [string, string, string]
    button: string
    buttonLabel: string
    note: string
  }
  footer: { claim: string[]; links: string; contact: string; crest: string }
}
