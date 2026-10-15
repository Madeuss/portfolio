import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { heroStack, nav } from '../data/content';
import { usePhysicsToys, type ToyConfig } from '../hooks/usePhysicsToys';
import { ArrowRight, MoveIcon, SoccerBallIcon } from './icons';
import SoccerBall3D from './toys/SoccerBall3D';
import GameController3D from './toys/GameController3D';

const TOYS: ToyConfig[] = [
  { id: 'ball', start: { x: 0.15, y: 0.42 }, rotation: -10, hw: 54, hh: 55, radius: 46, spin: 1.2 },
  { id: 'pad', start: { x: 0.84, y: 0.6 }, rotation: 12, hw: 75, hh: 52, radius: 56, spin: 0.45 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { register, bind, hasInteracted } = usePhysicsToys(sectionRef, TOYS);

  // Parallax: escreve CSS vars direto no elemento (sem re-render).
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', String(((e.clientX - r.left) / r.width) * 2 - 1));
    el.style.setProperty('--my', String(((e.clientY - r.top) / r.height) * 2 - 1));
  };
  const onLeave = () => {
    sectionRef.current?.style.setProperty('--mx', '0');
    sectionRef.current?.style.setProperty('--my', '0');
  };

  return (
    <section ref={sectionRef} className="hero" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero__watermark" aria-hidden="true">MATEUS</div>
      <h1 className="hero__name">MATEUS SOUZA</h1>
      <div className="hero__halftone" aria-hidden="true" />
      <img
        className="hero__photo"
        src="/images/silhueta-9-cortado.webp"
        alt="Mateus de costas, com a camisa listrada azul e preta MADEUS 9"
        draggable={false}
      />

      <header className="hero__header">
        <a href="#top" className="hero__logo">
          <SoccerBallIcon size={20} color="var(--accent)" />
          MATEUS
        </a>
        <nav aria-label="Principal" className="hero__nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <span className="hero__location">São Paulo, BR</span>
      </header>

      {/* Objetos arremessáveis — decorativos, por isso aria-hidden */}
      <div ref={register('ball')} className="toy" aria-hidden="true" {...bind('ball')}>
        <div className="toy__bob"><SoccerBall3D size={108} /></div>
      </div>
      <div ref={register('pad')} className="toy" aria-hidden="true" {...bind('pad')}>
        <div className="toy__bob--slow"><GameController3D width={150} /></div>
      </div>

      <a href="#contato" className="hero__cta">
        {'// FALE COMIGO'} <ArrowRight />
      </a>
      <p className="hero__hint" aria-hidden="true" data-hidden={hasInteracted}>
        <MoveIcon /> pode arrastar
      </p>

      <div className="hero__stackbar">
        {heroStack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}
