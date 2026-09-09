// Decorative gold wheat/laurel sprig.
// NOTE: materials/ contains no wheat/laurel accent asset, so this is drawn
// inline as an SVG in the gold palette. Flagged for author sign-off.

type Props = {
  className?: string
  vertical?: boolean
}

function Sprig() {
  // Drawn along the X axis, stem from x=2 to x=94 (viewBox 0 0 96 24).
  return (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M2 12 H92" />
      {Array.from({ length: 7 }).map((_, i) => {
        const x = 14 + i * 11
        return (
          <g key={i}>
            <path d={`M${x} 12 q-3 -7 -9 -9`} />
            <path d={`M${x} 12 q-3 7 -9 9`} />
          </g>
        )
      })}
      <path d="M92 12 q4 -3 6 0 q-4 3 -6 0" fill="currentColor" />
    </g>
  )
}

export default function WheatSprig({ className = '', vertical = false }: Props) {
  return (
    <svg
      viewBox={vertical ? '0 0 24 96' : '0 0 96 24'}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {vertical ? (
        <g transform="translate(24 0) rotate(90)">
          <Sprig />
        </g>
      ) : (
        <Sprig />
      )}
    </svg>
  )
}
