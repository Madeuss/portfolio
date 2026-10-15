import { useI18n } from '../i18n/I18nProvider'
import { LOCALES, type Locale } from '../i18n/types'
import RollingText from './RollingText'

// Nome de cada idioma nele mesmo (não traduz junto com o site).
const NAMES: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
}

/** Seletor PT / EN / ES. `tone="dark"` para fundos escuros (footer). */
export default function LangSwitch({
  tone = 'light',
}: {
  tone?: 'light' | 'dark'
}) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className="lang"
      data-tone={tone}
      role="group"
      aria-label={t.language.label}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="lang__item">
          {i > 0 && (
            <span className="lang__sep" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className="lang__btn roll-trigger"
            aria-label={NAMES[l]}
            aria-pressed={locale === l}
            lang={l}
            onClick={() => setLocale(l)}
          >
            <RollingText text={l.toUpperCase()} />
          </button>
        </span>
      ))}
    </div>
  )
}
