import type { CSSProperties } from 'react'
import { crest } from '../data/content'
import { useI18n } from '../i18n/I18nProvider'

// Ícones de interface vêm do Phosphor (@phosphor-icons/react, MIT). Aqui fica só o que não é ícone de lib.

// Escudo do time (imagem do Mat). Renderizado como máscara: a cor vem de `color` no CSS.
export function Crest({ className = '' }: { className?: string }) {
  const { t } = useI18n()
  return (
    <span
      className={`crest ${className}`}
      role="img"
      aria-label={t.footer.crest}
      style={{ '--crest-url': `url(${crest})` } as CSSProperties}
    />
  )
}
