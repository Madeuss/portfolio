import { useId } from 'react';

/** Bola de futebol "3D" desenhada à mão em SVG (original, sem licença de terceiros). */
export default function SoccerBall3D({ size = 108 }: { size?: number }) {
  const uid = useId().replace(/:/g, '');
  const iris = `iris-${uid}`, face = `face-${uid}`, clip = `clip-${uid}`;
  return (
    <svg width={size} height={size * (154 / 150)} viewBox="0 0 150 154" overflow="visible" aria-hidden="true">
      <defs>
        <linearGradient id={iris} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B6CFF" />
          <stop offset=".45" stopColor="#D9D9E3" />
          <stop offset=".7" stopColor="#5A47E0" />
          <stop offset="1" stopColor="#2B2B33" />
        </linearGradient>
        <radialGradient id={face} cx=".36" cy=".3" r=".8">
          <stop offset="0" stopColor="#4A4A52" />
          <stop offset=".55" stopColor="#16161A" />
          <stop offset="1" stopColor="#050506" />
        </radialGradient>
        <clipPath id={clip}>
          <circle cx="70" cy="70" r="64" />
        </clipPath>
      </defs>
      {/* lateral iridescente = "espessura" */}
      <circle cx="78" cy="80" r="64" fill={`url(#${iris})`} />
      <circle cx="70" cy="70" r="64" fill={`url(#${face})`} />
      {/* só os gomos giram (--rot vem do hook de física) */}
      <g clipPath={`url(#${clip})`}>
        <g
          style={{ transform: 'rotate(var(--rot, 0deg))', transformOrigin: '70px 70px' }}
          fill="#2C2C33" stroke="#3E3E47" strokeWidth="2.5" strokeLinejoin="round"
        >
          <path d="M70 46l22.8 16.6-8.7 26.8H55.9l-8.7-26.8z" />
          <path d="M70 46V18M92.8 62.6l26.6-8.6M84.1 89.4l16.4 22.6M55.9 89.4l-16.4 22.6M47.2 62.6L20.6 54" fill="none" />
          <path d="M52 2l18 16 18-16 6-14H46z" />
          <path d="M119.4 54l10.6-22 18 6 2 30-14 12z" />
          <path d="M100.5 112l23.5 2 4 20-24 14-14-14z" />
          <path d="M39.5 112l-23.5 2-4 20 24 14 14-14z" />
          <path d="M20.6 54L10 32l-18 6-2 30 14 12z" />
        </g>
      </g>
      <ellipse cx="50" cy="36" rx="22" ry="11" transform="rotate(-28 50 36)" fill="#FFFFFF" opacity=".16" />
      <circle cx="70" cy="70" r="63" fill="none" stroke="#FFFFFF" strokeOpacity=".08" strokeWidth="2" />
    </svg>
  );
}
