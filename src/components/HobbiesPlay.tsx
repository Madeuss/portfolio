import { useEffect, useRef, useState } from 'react';
import { hobbies, type Hobby, type HobbyScene } from '../data/content';
import { DumbbellIcon, SoccerBallIcon } from './icons';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cada cena recebe `play` (contador de cliques). Mudar a `key` remonta o elemento
// e reinicia a animação CSS, então cliques seguidos sempre disparam de novo.

function BallScene({ play }: { play: number }) {
  return (
    <span className="scene scene--ball">
      <span key={play} className={play ? 'scene__ball is-playing' : 'scene__ball'}>
        <SoccerBallIcon size={76} />
      </span>
      <span key={`s${play}`} className={play ? 'scene__shadow is-playing' : 'scene__shadow'} />
    </span>
  );
}

function DumbbellScene({ play }: { play: number }) {
  return (
    <span className="scene scene--dumbbell">
      <span key={play} className={play ? 'scene__dumbbell is-playing' : 'scene__dumbbell'}>
        <DumbbellIcon size={104} />
      </span>
      {play > 0 && (
        <span className="scene__reps" aria-hidden="true">
          {play} {play === 1 ? 'rep' : 'reps'}
        </span>
      )}
    </span>
  );
}

const KEYS = ['Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F', 'Z', 'X', 'C', 'V'];
const WASD = ['W', 'A', 'S', 'D'];

function PcScene({ play }: { play: number }) {
  return (
    <span key={play} className={play ? 'scene scene--pc is-playing' : 'scene scene--pc'}>
      <span className="pc__keyboard">
        {KEYS.map((k) => (
          <span key={k} className="pc__key" data-wasd={WASD.includes(k) || undefined} style={{ ['--i' as string]: WASD.indexOf(k) }}>
            {k}
          </span>
        ))}
        <span className="pc__key pc__key--space" />
      </span>
      <span className="pc__mouse">
        <span className="pc__wheel" />
      </span>
    </span>
  );
}

function BagScene({ play }: { play: number }) {
  return (
    <span className="scene scene--bag">
      <span key={play} className={play ? 'bag is-playing' : 'bag'}>
        <span className="bag__chain" />
        <span className="bag__body">
          <span className="bag__band" />
          <span className="bag__band bag__band--low" />
        </span>
      </span>
    </span>
  );
}

const COMMAND = 'npm run dev';
const OUTPUT = ['VITE v5.4  ready in 259 ms', '➜  Local: http://localhost:5173/'];

function TerminalScene({ play }: { play: number }) {
  const [typed, setTyped] = useState(0);
  const [lines, setLines] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (!play) return;
    timers.current.forEach(clearTimeout);
    if (reducedMotion()) {
      setTyped(COMMAND.length);
      setLines(OUTPUT.length);
      return;
    }
    setTyped(0);
    setLines(0);
    const t: number[] = [];
    for (let i = 1; i <= COMMAND.length; i++) t.push(window.setTimeout(() => setTyped(i), i * 70));
    const done = COMMAND.length * 70;
    OUTPUT.forEach((_, i) => t.push(window.setTimeout(() => setLines(i + 1), done + 350 + i * 260)));
    timers.current = t;
    return () => t.forEach(clearTimeout);
  }, [play]);

  return (
    <span className="scene scene--terminal">
      <span className="term">
        <span className="term__bar">
          <i /><i /><i />
        </span>
        <span className="term__line">
          <span className="term__prompt">~/mat $</span> {COMMAND.slice(0, typed)}
          {lines === 0 && <span className="term__cursor" />}
        </span>
        {OUTPUT.slice(0, lines).map((l) => (
          <span className="term__line term__line--out" key={l}>{l}</span>
        ))}
        {lines === OUTPUT.length && (
          <span className="term__line">
            <span className="term__prompt">~/mat $</span> <span className="term__cursor" />
          </span>
        )}
      </span>
    </span>
  );
}

const SCENES: Record<HobbyScene, (p: { play: number }) => JSX.Element> = {
  ball: BallScene,
  dumbbell: DumbbellScene,
  pc: PcScene,
  bag: BagScene,
  terminal: TerminalScene,
};

const ACTIONS: Record<HobbyScene, string> = {
  ball: 'quicar a bola',
  dumbbell: 'levantar o halter',
  pc: 'apertar as teclas',
  bag: 'bater no saco',
  terminal: 'rodar o comando',
};

// GIF como recompensa do clique: entra depois que a animação termina, fica um tempo e some.
const GIF_DELAY = 1100;
const GIF_DURATION = 3200;

function PlayCard({ hobby }: { hobby: Hobby }) {
  const [play, setPlay] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const timers = useRef<number[]>([]);
  const Scene = SCENES[hobby.scene];

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleClick = () => {
    setPlay((n) => n + 1);
    if (!hobby.gif) return;
    timers.current.forEach(clearTimeout);
    setShowGif(false);
    const delay = reducedMotion() ? 0 : GIF_DELAY;
    timers.current = [
      window.setTimeout(() => setShowGif(true), delay),
      window.setTimeout(() => setShowGif(false), delay + GIF_DURATION),
    ];
  };

  return (
    <li>
      <button type="button" className="play" onClick={handleClick} aria-label={`${hobby.name}: ${ACTIONS[hobby.scene]}`}>
        <span className="play__stage" data-scene={hobby.scene}>
          <Scene play={play} />
          {/* só monta o <img> depois do primeiro clique, para não baixar GIFs pesadas no load */}
          {hobby.gif && play > 0 && <img className="play__gif" src={hobby.gif} alt="" data-show={showGif} />}
          {hobby.crest ? (
            <img className="play__crest" src={hobby.crest} alt="" />
          ) : (
            hobby.id === 'futebol' && <span className="play__pill play__pill--crest">[ESCUDO]</span>
          )}
          {!hobby.gif && hobby.gifHint && <span className="play__pill">{hobby.gifHint}</span>}
        </span>
        <span className="play__body">
          <span className="play__name">{hobby.name}</span>
          <span className="play__quote">{hobby.quote}</span>
          <span className="play__cta">Clique para {ACTIONS[hobby.scene]} →</span>
        </span>
      </button>
    </li>
  );
}

export default function HobbiesPlay() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Fora do código</h2>
          <p className="label">/Hobbies</p>
        </div>
        <ul className="play__grid">
          {hobbies.map((h) => (
            <PlayCard hobby={h} key={h.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
