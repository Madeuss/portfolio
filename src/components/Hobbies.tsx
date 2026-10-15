import { useState } from 'react'
import { hobbies, type Hobby, type HobbyIcon } from '../data/content'
import { useI18n } from '../i18n/I18nProvider'
import {
  BarbellIcon,
  BoxingGloveIcon,
  CodeIcon,
  GameControllerIcon,
  SoccerBallIcon,
  type Icon as PhosphorIcon,
} from '@phosphor-icons/react'
import { Crest } from './icons'

const ICONS: Record<HobbyIcon, PhosphorIcon> = {
  ball: SoccerBallIcon,
  dumbbell: BarbellIcon,
  gamepad: GameControllerIcon,
  glove: BoxingGloveIcon,
  code: CodeIcon,
}

function Icon({ name }: { name: HobbyIcon }) {
  const Glyph = ICONS[name]
  return <Glyph size={56} aria-hidden="true" />
}

// .mp4 vira <video> em loop mudo (substituto leve de GIF); qualquer outra coisa vira <img>.
function Media({ src }: { src: string }) {
  if (src.endsWith('.mp4'))
    return (
      <video src={src} autoPlay muted loop playsInline aria-hidden="true" />
    )
  return <img src={src} alt="" />
}

function HobbyCard({ hobby }: { hobby: Hobby }) {
  const { t } = useI18n()
  const text = t.hobbies.items[hobby.id]
  const [flipped, setFlipped] = useState(false)
  // A mídia só monta depois da primeira virada, para não baixar nada antes do clique.
  const [seen, setSeen] = useState(false)

  return (
    <li className="fut">
      <button
        type="button"
        className="fut__inner"
        data-flipped={flipped}
        aria-pressed={flipped}
        aria-label={`${text.name}: ${flipped ? t.hobbies.showStats : t.hobbies.flip}`}
        onClick={() => {
          setFlipped((f) => !f)
          setSeen(true)
        }}
      >
        <span className="fut__face fut__face--front" aria-hidden={flipped}>
          <span className="fut__top">
            <span className="fut__overall">{hobby.overall}</span>
            <span className="fut__pos">{text.pos}</span>
            {hobby.club && <Crest className="fut__crest" />}
          </span>
          <span className="fut__icon">
            <Icon name={hobby.icon} />
          </span>
          <span className="fut__name">{text.name}</span>
          <span className="fut__attrs">
            {hobby.stats.map((v, i) => (
              <span className="fut__attr" key={i}>
                <b>{v}</b> {text.attrs[i]}
              </span>
            ))}
          </span>
        </span>

        <span className="fut__face fut__face--back" aria-hidden={!flipped}>
          <span className="fut__media">
            {hobby.media ? (
              seen && <Media src={hobby.media} />
            ) : (
              <span className="fut__placeholder">[GIF]</span>
            )}
          </span>
          <span className="fut__quote">“{text.quote}”</span>
          <span className="fut__back-name">{text.name}</span>
        </span>
      </button>
    </li>
  )
}

export default function Hobbies() {
  const { t } = useI18n()

  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.hobbies.title}</h2>
          <p className="label">{t.hobbies.label}</p>
        </div>
        <p className="hobbies__hint">{t.hobbies.hint}</p>
        <ul className="hobbies__grid">
          {hobbies.map((h) => (
            <HobbyCard hobby={h} key={h.id} />
          ))}
        </ul>
      </div>
    </section>
  )
}
