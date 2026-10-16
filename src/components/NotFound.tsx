import { useRef } from 'react'
import { ArrowLeftIcon, SoccerBallIcon } from '@phosphor-icons/react'
import { useI18n } from '../i18n/I18nProvider'
import LangSwitch from './LangSwitch'
import RollingText from './RollingText'
import { useToys, type ToyStarts } from './Toys'

// no celular o texto ocupa o meio da tela: bola e controle começam embaixo
const STARTS: ToyStarts = {
  mobile: { ball: { x: 0.22, y: 0.84 }, pad: { x: 0.78, y: 0.9 } },
}

export default function NotFound() {
  const { t } = useI18n()
  // a bola e o controle também jogam aqui: a página é o campo
  const pageRef = useRef<HTMLDivElement>(null)
  const { toys } = useToys(pageRef, STARTS)

  return (
    <div ref={pageRef} className="page nf">
      <div className="nf__watermark" aria-hidden="true">
        404
      </div>

      <header className="nf__header">
        <a href="/" className="hero__logo">
          <SoccerBallIcon
            size={20}
            weight="fill"
            color="var(--accent)"
            aria-hidden="true"
          />
          MATEUS
        </a>
        <LangSwitch />
      </header>

      <main className="nf__body">
        <p className="label">/404</p>
        <h1 className="nf__title">{t.notFound.heading}</h1>
        <p className="nf__text">{t.notFound.text}</p>
        <a
          href="/"
          className="cta__button nf__button roll-trigger"
          aria-label={t.notFound.cta}
        >
          <span className="cta__button-icon">
            <ArrowLeftIcon
              size={16}
              weight="bold"
              color="#FFFFFF"
              aria-hidden="true"
            />
          </span>
          <RollingText text={t.notFound.cta} />
        </a>
      </main>

      {toys}
    </div>
  )
}
