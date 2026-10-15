import { useState } from 'react';
import { hobbies, type Hobby, type HobbyIcon } from '../data/content';
import { CodeIcon, Crest, DumbbellIcon, GamepadIcon, GloveIcon, SoccerBallIcon } from './icons';

function Icon({ name }: { name: HobbyIcon }) {
  switch (name) {
    case 'ball':
      return <SoccerBallIcon size={56} />;
    case 'dumbbell':
      return <DumbbellIcon size={56} />;
    case 'gamepad':
      return <GamepadIcon size={56} />;
    case 'glove':
      return <GloveIcon size={56} />;
    case 'code':
      return <CodeIcon size={56} />;
  }
}

function HobbyCard({ hobby }: { hobby: Hobby }) {
  const [flipped, setFlipped] = useState(false);
  // GIFs são pesadas: o <img> só monta depois da primeira virada.
  const [seen, setSeen] = useState(false);

  return (
    <li className="fut">
      <button
        type="button"
        className="fut__inner"
        data-flipped={flipped}
        aria-pressed={flipped}
        aria-label={`${hobby.name}: ${flipped ? 'mostrar atributos' : 'virar carta'}`}
        onClick={() => {
          setFlipped((f) => !f);
          setSeen(true);
        }}
      >
        <span className="fut__face fut__face--front" aria-hidden={flipped}>
          <span className="fut__top">
            <span className="fut__overall">{hobby.overall}</span>
            <span className="fut__pos">{hobby.pos}</span>
            {hobby.club && <Crest className="fut__crest" />}
          </span>
          <span className="fut__icon">
            <Icon name={hobby.icon} />
          </span>
          <span className="fut__name">{hobby.name}</span>
          <span className="fut__attrs">
            {hobby.attrs.map(([k, v]) => (
              <span className="fut__attr" key={k}>
                <b>{v}</b> {k}
              </span>
            ))}
          </span>
        </span>

        <span className="fut__face fut__face--back" aria-hidden={!flipped}>
          <span className="fut__media">
            {hobby.gif ? seen && <img src={hobby.gif} alt="" /> : <span className="fut__placeholder">[GIF]</span>}
          </span>
          <span className="fut__quote">“{hobby.quote}”</span>
          <span className="fut__back-name">{hobby.name}</span>
        </span>
      </button>
    </li>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Fora do código</h2>
          <p className="label">/Hobbies</p>
        </div>
        <p className="hobbies__hint">Clique numa carta para virar.</p>
        <ul className="hobbies__grid">
          {hobbies.map((h) => (
            <HobbyCard hobby={h} key={h.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
