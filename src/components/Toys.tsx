import type { RefObject } from 'react'
import { usePhysicsToys, type ToyConfig } from '../hooks/usePhysicsToys'
import SoccerBall3D from './toys/SoccerBall3D'
import GameController3D from './toys/GameController3D'

const TOYS: ToyConfig[] = [
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

/**
 * Objetos arremessáveis que vivem na página inteira (posicionados em relação a `pageRef`).
 * Decorativos, por isso aria-hidden. `hasInteracted` vai para o hero esconder a dica "pode arrastar".
 */
export function useToys(pageRef: RefObject<HTMLElement>) {
  const { register, bind, hasInteracted } = usePhysicsToys(pageRef, TOYS)

  const toys = (
    <>
      <div
        ref={register('ball')}
        className="toy"
        aria-hidden="true"
        {...bind('ball')}
      >
        <div className="toy__bob">
          <SoccerBall3D size={108} />
        </div>
      </div>
      <div
        ref={register('pad')}
        className="toy"
        aria-hidden="true"
        {...bind('pad')}
      >
        <div className="toy__bob--slow">
          <GameController3D width={150} />
        </div>
      </div>
    </>
  )

  return { toys, hasInteracted }
}
