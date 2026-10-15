import type { CSSProperties } from 'react';
import { crest } from '../data/content';

// Ícones inline. SoccerBallIcon = Phosphor Icons "soccer-ball-fill" (licença MIT).
// Se preferir a lib: npm i @phosphor-icons/react → <SoccerBall weight="fill" />

export function SoccerBallIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill={color} aria-hidden="true">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,39.38,24.79-17.05a88.41,88.41,0,0,1,36.18,27l-8,26.94c-.2,0-.41.1-.61.17l-22.82,7.41a7.59,7.59,0,0,0-1,.4L136,88.62c0-.2,0-.41,0-.62V64C136,63.79,136,63.58,136,63.38ZM95.24,46.33,120,63.38c0,.2,0,.41,0,.62V88c0,.21,0,.42,0,.62L91.44,108.29a7.59,7.59,0,0,0-1-.4l-22.82-7.41c-.2-.07-.41-.12-.61-.17l-8-26.94A88.41,88.41,0,0,1,95.24,46.33Zm-13,129.09H53.9a87.4,87.4,0,0,1-13.790-43.07l22-16.88a5.77,5.77,0,0,0,.58.22l22.83,7.42a7.83,7.83,0,0,0,.93.22l10.79,31.42c-.15.18-.3.36-.44.55L82.7,174.71A7.8,7.8,0,0,0,82.24,175.42ZM150.69,213a88.16,88.16,0,0,1-45.38,0L95.25,184.6c.13-.16.27-.31.39-.48l14.11-19.42a7.66,7.66,0,0,0,.46-.7h35.58a7.66,7.66,0,0,0,.46.7l14.11,19.42c.12.17.26.32.39.48Zm23.07-37.61a7.8,7.8,0,0,0-.46-.71L159.19,155.3c-.14-.19-.29-.37-.44-.55l10.79-31.42a7.83,7.83,0,0,0,.93-.22l22.83-7.42a5.77,5.77,0,0,0,.58-.22l22,16.88a87.4,87.4,0,0,1-13.79,43.07Z" />
    </svg>
  );
}

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12L12 4" />
      <path d="M5 4h7v7" />
    </svg>
  );
}

export function MoveIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v12M2 8h12M5 4.5L8 2l3 2.5M5 11.5L8 14l3-2.5M4.5 5L2 8l2.5 3M11.5 5L14 8l-2.5 3" />
    </svg>
  );
}

// Ícones de linha das cartas de Hobbies (originais, sem marcas).
type LineIconProps = { size?: number };

export function DumbbellIcon({ size = 48 }: LineIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 24h16" />
      <rect x="9" y="14" width="7" height="20" rx="2" />
      <rect x="32" y="14" width="7" height="20" rx="2" />
      <path d="M5 19v10M43 19v10" />
    </svg>
  );
}

export function GamepadIcon({ size = 48 }: LineIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 14h18c6 0 9.5 4.5 10.5 11l1.3 8.2c.6 3.8-3.6 6.4-6.7 4.1L32 32H16l-6.1 5.3c-3.1 2.3-7.3-.3-6.7-4.1L4.5 25C5.5 18.5 9 14 15 14z" />
      <path d="M13 21v7M9.5 24.5h7" />
      <circle cx="32" cy="22" r="1.2" fill="currentColor" />
      <circle cx="36" cy="26" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function GloveIcon({ size = 48 }: LineIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 30V16c0-5 4-9 9-9h5c6 0 10 4 10 10v9c0 4-3 7-7 7H17" />
      <path d="M14 22h-2.5a3.5 3.5 0 0 0 0 7H14" />
      <path d="M22 17h10" />
      <rect x="15" y="33" width="18" height="9" rx="2" />
    </svg>
  );
}

export function CodeIcon({ size = 48 }: LineIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 14L6 24l10 10M32 14l10 10-10 10M27 9l-6 30" />
    </svg>
  );
}

// Escudo do time (imagem do Mat). Renderizado como máscara: a cor vem de `color` no CSS.
export function Crest({ className = '' }: { className?: string }) {
  return <span className={`crest ${className}`} role="img" aria-label="Escudo do Corinthians" style={{ '--crest-url': `url(${crest})` } as CSSProperties} />;
}
