import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { heroStack, nav } from '../data/content'
import { useI18n } from '../i18n/I18nProvider'
import LangSwitch from './LangSwitch'
import {
  ArrowRightIcon,
  ArrowsOutCardinalIcon,
  SoccerBallIcon,
} from '@phosphor-icons/react'

// Os objetos arremessáveis (bola/controle) moram na página inteira: ver Toys.tsx e App.tsx.
export default function Hero({ hasInteracted }: { hasInteracted: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  // Parallax: escreve CSS vars direto no elemento (sem re-render).
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty(
      '--mx',
      String(((e.clientX - r.left) / r.width) * 2 - 1),
    )
    el.style.setProperty(
      '--my',
      String(((e.clientY - r.top) / r.height) * 2 - 1),
    )
  }
  const onLeave = () => {
    sectionRef.current?.style.setProperty('--mx', '0')
    sectionRef.current?.style.setProperty('--my', '0')
  }

  return (
    <section
      ref={sectionRef}
      className="hero"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="hero__watermark" aria-hidden="true">
        MATEUS
      </div>
      <h1 className="hero__name">MATEUS SOUZA</h1>
      <div className="hero__halftone" aria-hidden="true" />
      <img
        className="hero__photo"
        src="/images/silhueta-9-cortado.webp"
        alt={t.hero.photoAlt}
        draggable={false}
      />

      <header className="hero__header">
        <a href="#top" className="hero__logo">
          <SoccerBallIcon
            size={20}
            weight="fill"
            color="var(--accent)"
            aria-hidden="true"
          />
          MATEUS
        </a>
        <nav aria-label={t.nav.mainLabel} className="hero__nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {t.nav[n.key]}
            </a>
          ))}
        </nav>
        <div className="hero__meta">
          <LangSwitch />
          <span className="hero__location">
            {t.hero.location}
            <img
              className="hero__flag"
              src="/images/flag-br.svg"
              alt=""
              width={20}
              height={15}
            />
          </span>
        </div>
      </header>

      <a href="#contato" className="hero__cta">
        {t.hero.cta}{' '}
        <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
      </a>
      <p className="hero__hint" aria-hidden="true" data-hidden={hasInteracted}>
        <ArrowsOutCardinalIcon size={16} weight="bold" /> {t.hero.hint}
      </p>

      <div className="hero__stackbar">
        {heroStack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  )
}
