/**
 * Texto que "rola" letra por letra no hover (efeito da referência majd-portfolio).
 * O elemento pai precisa da classe `roll-trigger`. O texto acessível fica no pai (aria-label).
 */
export default function RollingText({
  text,
  stagger = 22,
}: {
  text: string
  stagger?: number
}) {
  return (
    <span className="roll" aria-hidden="true">
      {text.split('').map((ch, i) => (
        <span key={i} style={{ transitionDelay: `${i * stagger}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  )
}
