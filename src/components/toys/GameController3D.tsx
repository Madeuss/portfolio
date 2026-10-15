import { useId } from 'react'

const BODY =
  'M62 10H138C168 10 186 30 194 64C202 98 196 124 176 126C160 128 150 110 140 100H60C50 110 40 128 24 126C4 124-2 98 6 64C14 30 32 10 62 10Z'

/** --rot é escrita pelo hook de física; o centro de giro é o meio do controle. */
const SPIN = {
  transform: 'rotate(var(--rot, 0deg))',
  transformOrigin: '100px 68px',
} as const

/** Controle de video game "3D" desenhado à mão em SVG (original, sem licença de terceiros). */
export default function GameController3D({ width = 150 }: { width?: number }) {
  const uid = useId().replace(/:/g, '')
  const iris = `iris-${uid}`,
    face = `face-${uid}`
  return (
    <svg
      width={width}
      height={width * (146 / 210)}
      viewBox="0 0 210 146"
      overflow="visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={iris} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B6CFF" />
          <stop offset=".4" stopColor="#E0E0EA" />
          <stop offset=".68" stopColor="#5A47E0" />
          <stop offset="1" stopColor="#26262E" />
        </linearGradient>
        <linearGradient id={face} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A3A42" />
          <stop offset=".5" stopColor="#151519" />
          <stop offset="1" stopColor="#070708" />
        </linearGradient>
      </defs>
      {/* lateral: gira junto, mas o deslocamento (7,9) fica fixo na tela → profundidade sempre embaixo/direita */}
      <g transform="translate(7 9)">
        <g style={SPIN}>
          <path fill={`url(#${iris})`} d={BODY} />
        </g>
      </g>
      <g style={SPIN}>
        <path fill={`url(#${face})`} d={BODY} />
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity=".18"
          strokeWidth="2"
          strokeLinecap="round"
          d="M40 22C48 15 55 13 62 13H138C146 13 153 15 160 22"
        />
        {/* direcional */}
        <path
          fill="#2E2E36"
          stroke="#45454F"
          strokeWidth="1.5"
          d="M45 46h12v12h12v12H57v12H45V70H33V58h12z"
        />
        {/* botões */}
        <circle
          cx="150"
          cy="46"
          r="8"
          fill="#2E2E36"
          stroke="#8B6CFF"
          strokeWidth="2"
        />
        <circle
          cx="166"
          cy="62"
          r="8"
          fill="#2E2E36"
          stroke="#45454F"
          strokeWidth="1.5"
        />
        <circle
          cx="134"
          cy="62"
          r="8"
          fill="#2E2E36"
          stroke="#45454F"
          strokeWidth="1.5"
        />
        <circle
          cx="150"
          cy="78"
          r="8"
          fill="#2E2E36"
          stroke="#45454F"
          strokeWidth="1.5"
        />
        {/* analógicos */}
        <circle
          cx="82"
          cy="88"
          r="11"
          fill="#1E1E24"
          stroke="#45454F"
          strokeWidth="1.5"
        />
        <circle cx="80" cy="86" r="6" fill="#33333B" />
        <circle
          cx="118"
          cy="88"
          r="11"
          fill="#1E1E24"
          stroke="#45454F"
          strokeWidth="1.5"
        />
        <circle cx="116" cy="86" r="6" fill="#33333B" />
        <rect x="90" y="40" width="20" height="6" rx="3" fill="#2E2E36" />
      </g>
    </svg>
  )
}
