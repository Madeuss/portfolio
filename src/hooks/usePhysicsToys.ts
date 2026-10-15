import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react'

/**
 * Física leve para os objetos arremessáveis. O container é a página inteira: os objetos nascem
 * no hero, mas podem ser arrastados/arremessados até o footer (presos só nas laterais e no menu).
 *
 * - Arrastar: o objeto segue o ponteiro e inclina conforme a velocidade horizontal.
 * - Soltar com velocidade: sai na direção/velocidade dos últimos ~110 ms do arraste.
 * - Atrito, quique nas bordas do container (restituição 0.78) e giro proporcional à velocidade.
 * - Colisão círculo × círculo entre os objetos (massas iguais).
 * - Arrastando perto da borda de cima/baixo da janela, a página rola junto (auto-scroll).
 *
 * Tudo roda em requestAnimationFrame escrevendo `transform` direto no DOM via ref:
 * nenhum setState por frame, então o resto da página não re-renderiza.
 *
 * Se um dia quiser física "de verdade" (gravidade, pilhas, colisão com o texto),
 * dá para trocar este hook por Matter.js mantendo a mesma API (register / bind).
 */

export type ToyConfig = {
  id: string
  /** posição inicial: x em fração da largura, y em fração da altura do hero (1ª dobra) */
  start: { x: number; y: number }
  /** rotação inicial em graus */
  rotation: number
  /** meia largura / meia altura do elemento em px (para colisão com as bordas) */
  hw: number
  hh: number
  /** raio de colisão entre objetos, em px */
  radius: number
  /** graus por ms de giro para cada px/ms de velocidade horizontal */
  spin: number
}

type Sample = { t: number; x: number; y: number }

type Body = {
  cfg: ToyConfig
  el: HTMLElement | null
  x: number
  y: number
  vx: number
  vy: number
  r: number
  va: number
  tilt: number
  dragging: boolean
  dx: number
  dy: number
  lastX: number
  /** último ponteiro em coordenadas da janela (para o auto-scroll) */
  clientX: number
  clientY: number
  samples: Sample[]
}

const FRICTION = 0.9972 // por ms
const SPIN_FRICTION = 0.9968 // por ms
const RESTITUTION = 0.78 // quique nas bordas
const BOUNCE_BETWEEN = 0.85 // quique entre objetos
const MAX_SPEED = 5 // px/ms
const TOP_SAFE = 70 // não invadir o menu
const SAMPLE_WINDOW = 110 // ms usados para medir a velocidade do arremesso
const EDGE = 90 // px da borda da janela em que o auto-scroll começa
const EDGE_SPEED = 1.1 // px/ms de rolagem máxima

// Altura do hero (100vh entre 680 e 1000px, ver .hero no CSS): referência da posição inicial.
const heroHeight = () => clamp(window.innerHeight, 680, 1000)

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))

export function usePhysicsToys(
  containerRef: RefObject<HTMLElement>,
  configs: ToyConfig[],
) {
  const bodies = useRef<Record<string, Body>>({})
  const raf = useRef(0)
  const last = useRef(0)
  const size = useRef({ w: 0, h: 0 })
  const [hasInteracted, setHasInteracted] = useState(false)

  // cria os corpos uma vez
  if (Object.keys(bodies.current).length === 0) {
    configs.forEach((cfg) => {
      bodies.current[cfg.id] = {
        cfg,
        el: null,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        r: cfg.rotation,
        va: 0,
        tilt: 0,
        dragging: false,
        dx: 0,
        dy: 0,
        lastX: 0,
        clientX: 0,
        clientY: 0,
        samples: [],
      }
    })
  }

  const apply = (b: Body) => {
    if (!b.el) return
    // A rotação vai numa CSS var: cada SVG gira só a "face", mantendo a lateral 3D e o brilho
    // sempre no mesmo lado (senão o efeito de profundidade gira junto e fica estranho).
    b.el.style.transform = `translate3d(${b.x - b.cfg.hw}px, ${b.y - b.cfg.hh}px, 0) scale(${b.dragging ? 1.08 : 1})`
    b.el.style.setProperty('--rot', `${b.r}deg`)
    b.el.dataset.dragging = String(b.dragging)
  }

  const bounds = (b: Body) => ({
    minX: b.cfg.hw,
    maxX: size.current.w - b.cfg.hw,
    minY: b.cfg.hh + TOP_SAFE,
    maxY: size.current.h - b.cfg.hh,
  })

  const tick = useCallback((now: number) => {
    raf.current = 0
    const dt = Math.min(32, now - last.current)
    last.current = now
    const list = Object.values(bodies.current)
    let active = false

    for (const b of list) {
      if (b.dragging) {
        // auto-scroll: ponteiro parado perto da borda da janela continua levando o objeto
        const vh = window.innerHeight
        const push =
          b.clientY > vh - EDGE
            ? (b.clientY - (vh - EDGE)) / EDGE
            : b.clientY < EDGE
              ? -(EDGE - b.clientY) / EDGE
              : 0
        if (push !== 0 && containerRef.current) {
          window.scrollBy(0, push * EDGE_SPEED * dt)
          const r = containerRef.current.getBoundingClientRect()
          const bd = bounds(b)
          b.y = clamp(b.clientY - r.top - b.dy, bd.minY, bd.maxY)
          b.samples.push({ t: now, x: b.x, y: b.y })
        }
        b.r += (b.tilt - b.r) * 0.25
        active = true
        apply(b)
        continue
      }
      if (Math.hypot(b.vx, b.vy) < 0.008 && Math.abs(b.va) < 0.008) {
        b.vx = b.vy = b.va = 0
        continue
      }
      b.x += b.vx * dt
      b.y += b.vy * dt
      const f = Math.pow(FRICTION, dt)
      b.vx *= f
      b.vy *= f
      b.va *= Math.pow(SPIN_FRICTION, dt)
      b.r += b.va * dt

      const { minX, maxX, minY, maxY } = bounds(b)
      if (b.x < minX) {
        b.x = minX
        b.vx = Math.abs(b.vx) * RESTITUTION
        b.va *= -0.7
      }
      if (b.x > maxX) {
        b.x = maxX
        b.vx = -Math.abs(b.vx) * RESTITUTION
        b.va *= -0.7
      }
      if (b.y < minY) {
        b.y = minY
        b.vy = Math.abs(b.vy) * RESTITUTION
      }
      if (b.y > maxY) {
        b.y = maxY
        b.vy = -Math.abs(b.vy) * RESTITUTION
      }
      active = true
    }

    // colisões entre pares
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i],
          c = list[j]
        const dx = c.x - a.x,
          dy = c.y - a.y
        const dist = Math.hypot(dx, dy) || 1
        const minD = a.cfg.radius + c.cfg.radius
        if (dist >= minD) continue
        const nx = dx / dist,
          ny = dy / dist,
          overlap = minD - dist
        if (!a.dragging && !c.dragging) {
          a.x -= (nx * overlap) / 2
          a.y -= (ny * overlap) / 2
          c.x += (nx * overlap) / 2
          c.y += (ny * overlap) / 2
        } else if (a.dragging) {
          c.x += nx * overlap
          c.y += ny * overlap
        } else {
          a.x -= nx * overlap
          a.y -= ny * overlap
        }

        const rel = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny
        if (rel < 0) {
          const imp = (-(1 + BOUNCE_BETWEEN) * rel) / 2
          if (!a.dragging) {
            a.vx -= imp * nx
            a.vy -= imp * ny
            a.va -= imp * 0.6
          }
          if (!c.dragging) {
            c.vx += imp * nx
            c.vy += imp * ny
            c.va += imp * 0.3
          }
        }
        active = true
      }
    }

    list.forEach(apply)
    if (active) raf.current = requestAnimationFrame(tick)
  }, [])

  const start = useCallback(() => {
    if (raf.current) return
    last.current = performance.now()
    raf.current = requestAnimationFrame(tick)
  }, [tick])

  // posição inicial + resize (x proporcional à largura; y fica onde está — a altura da página muda
  // à toa com imagens/fontes carregando e não deve "puxar" os objetos)
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const r = el.getBoundingClientRect()
      const prev = size.current
      Object.values(bodies.current).forEach((b) => {
        if (prev.w === 0) {
          b.x = b.cfg.start.x * r.width
          b.y = b.cfg.start.y * heroHeight()
        } else {
          b.x = (b.x / prev.w) * r.width
        }
        size.current = { w: r.width, h: r.height }
        const bd = bounds(b)
        b.x = clamp(b.x, bd.minX, Math.max(bd.minX, bd.maxX))
        b.y = clamp(b.y, bd.minY, Math.max(bd.minY, bd.maxY))
        apply(b)
      })
      size.current = { w: r.width, h: r.height }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [containerRef])

  useEffect(
    () => () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = 0
    },
    [],
  )

  const register = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      const b = bodies.current[id]
      if (!b) return
      b.el = el
      if (el) apply(b)
    },
    [],
  )

  const local = (e: ReactPointerEvent) => {
    const r = containerRef.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const bind = (id: string) => ({
    onPointerDown: (e: ReactPointerEvent<HTMLElement>) => {
      const b = bodies.current[id]
      if (!b || !containerRef.current) return
      e.preventDefault()
      e.currentTarget.setPointerCapture(e.pointerId)
      const p = local(e)
      b.dragging = true
      b.vx = b.vy = b.va = 0
      b.dx = p.x - b.x
      b.dy = p.y - b.y
      b.lastX = e.clientX
      b.clientX = e.clientX
      b.clientY = e.clientY
      b.samples = [{ t: performance.now(), x: b.x, y: b.y }]
      setHasInteracted(true)
      start()
    },
    onPointerMove: (e: ReactPointerEvent<HTMLElement>) => {
      const b = bodies.current[id]
      if (!b?.dragging) return
      const p = local(e)
      const bd = bounds(b)
      b.x = clamp(p.x - b.dx, bd.minX, bd.maxX)
      b.y = clamp(p.y - b.dy, bd.minY, bd.maxY)
      b.tilt = clamp((e.clientX - b.lastX) * 1.6, -28, 28)
      b.lastX = e.clientX
      b.clientX = e.clientX
      b.clientY = e.clientY
      const now = performance.now()
      b.samples.push({ t: now, x: b.x, y: b.y })
      b.samples = b.samples.filter((s) => now - s.t < SAMPLE_WINDOW).slice(-8)
    },
    onPointerUp: (e: ReactPointerEvent<HTMLElement>) => {
      const b = bodies.current[id]
      if (!b?.dragging) return
      b.dragging = false
      if (e.currentTarget.hasPointerCapture(e.pointerId))
        e.currentTarget.releasePointerCapture(e.pointerId)
      const now = performance.now()
      const s = b.samples.filter((p) => now - p.t < SAMPLE_WINDOW)
      if (s.length > 1) {
        const a = s[0],
          z = s[s.length - 1]
        const dt = Math.max(16, z.t - a.t)
        let vx = (z.x - a.x) / dt,
          vy = (z.y - a.y) / dt
        const sp = Math.hypot(vx, vy)
        if (sp > MAX_SPEED) {
          vx *= MAX_SPEED / sp
          vy *= MAX_SPEED / sp
        }
        b.vx = vx
        b.vy = vy
        b.va = vx * b.cfg.spin
      }
      apply(b)
      start()
    },
    onPointerCancel: () => {
      const b = bodies.current[id]
      if (b) {
        b.dragging = false
        apply(b)
      }
    },
  })

  return { register, bind, hasInteracted }
}
