import { useState, type RefObject } from 'react'
import { usePhysicsToys, type ToyConfig } from '../hooks/usePhysicsToys'
import SoccerBall3D from './toys/SoccerBall3D'
import GameController3D from './toys/GameController3D'

const BASE: ToyConfig[] = [
  {
    id: 'ball',
    start: { x: 0.15, y: 0.42 },
    rotation: -10,
    hw: 54,
    hh: 55,
    radius: 46,
    spin: 1.2,
  },
  {
    id: 'pad',
    start: { x: 0.84, y: 0.6 },
    rotation: 12,
    hw: 75,
    hh: 52,
    radius: 56,
    spin: 0.45,
  },
]

const BALL_SIZE = 108
const PAD_WIDTH = 150

// No celular os objetos ficam ~1/3 menores (e a física acompanha, via hw/hh/radius).
const SMALL_SCREEN = '(max-width: 640px)'
const MOBILE_SCALE = 0.66
const MOBILE_START: Record<string, { x: number; y: number }> = {
  ball: { x: 0.16, y: 0.5 },
  pad: { x: 0.84, y: 0.66 },
}

type Start = Record<string, { x: number; y: number }>

/** Posições iniciais por página (sobrepõem as padrão), separadas por desktop e celular. */
export type ToyStarts = { desktop?: Start; mobile?: Start }

function scaled(scale: number, starts: ToyStarts = {}): ToyConfig[] {
  const mobile = scale !== 1
  const own = mobile ? starts.mobile : starts.desktop
  const fallback: Start = mobile ? MOBILE_START : {}
  return BASE.map((c) => ({
    ...c,
    start: own?.[c.id] ?? fallback[c.id] ?? c.start,
    hw: c.hw * scale,
    hh: c.hh * scale,
    radius: c.radius * scale,
  }))
}

/**
 * Objetos arremessáveis que vivem na página inteira (posicionados em relação a `pageRef`).
 * Decorativos, por isso aria-hidden. `hasInteracted` vai para o hero esconder a dica "pode arrastar".
 */
export function useToys(pageRef: RefObject<HTMLElement>, starts?: ToyStarts) {
  // Lido uma vez: os corpos da física são criados no primeiro render.
  const [scale] = useState(() =>
    window.matchMedia(SMALL_SCREEN).matches ? MOBILE_SCALE : 1,
  )
  const [configs] = useState(() => scaled(scale, starts))
  const { register, bind, hasInteracted } = usePhysicsToys(pageRef, configs)

  const toys = (
    <>
      <div
        ref={register('ball')}
        className="toy"
        aria-hidden="true"
        {...bind('ball')}
      >
        <div className="toy__bob">
          <SoccerBall3D size={BALL_SIZE * scale} />
        </div>
      </div>
      <div
        ref={register('pad')}
        className="toy"
        aria-hidden="true"
        {...bind('pad')}
      >
        <div className="toy__bob--slow">
          <GameController3D width={PAD_WIDTH * scale} />
        </div>
      </div>
    </>
  )

  return { toys, hasInteracted }
}
