import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LOCALES, type Dictionary, type Locale } from './types'
import pt from './pt'
import en from './en'
import es from './es'

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en, es }
const STORAGE_KEY = 'lang'

/** Escolha salva > idioma do navegador > inglês (visitante de fora, idioma não suportado). */
function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (LOCALES as readonly string[]).includes(saved))
      return saved as Locale
  } catch {
    // storage bloqueado: segue para o navegador
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.slice(0, 2).toLowerCase()
    if ((LOCALES as readonly string[]).includes(base)) return base as Locale
  }
  return 'en'
}

type I18n = { locale: Locale; setLocale: (l: Locale) => void; t: Dictionary }

const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const t = DICTIONARIES[locale]

  // <html lang>, título e description acompanham o idioma
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo<I18n>(
    () => ({
      locale,
      t,
      setLocale: (l) => {
        setLocaleState(l)
        try {
          localStorage.setItem(STORAGE_KEY, l)
        } catch {
          // sem storage, a escolha vale só nesta visita
        }
      },
    }),
    [locale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n precisa estar dentro de <I18nProvider>')
  return ctx
}
