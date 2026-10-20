const STARS = [
  [4, 6, 1.1],
  [12, 18, 0.7],
  [22, 9, 0.9],
  [31, 27, 0.6],
  [41, 14, 1.2],
  [53, 33, 0.7],
  [64, 8, 0.8],
  [73, 22, 1],
  [84, 12, 0.6],
  [93, 29, 0.9],
  [8, 42, 0.7],
  [18, 55, 1],
  [29, 48, 0.6],
  [47, 61, 0.8],
  [58, 44, 1.1],
  [69, 58, 0.6],
  [81, 47, 0.9],
  [96, 53, 0.7],
  [6, 74, 0.8],
  [15, 88, 0.6],
  [27, 71, 1],
  [38, 83, 0.7],
  [52, 76, 1.2],
  [66, 91, 0.6],
  [77, 69, 0.9],
  [89, 84, 0.7],
  [97, 73, 1],
  [11, 3, 0.5],
  [36, 4, 0.6],
  [60, 3, 0.5],
  [88, 5, 0.6],
] as const;

/** Cielo fijo, el mismo lenguaje visual que el mapa de nodos. */
export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[#07060f]">
      <svg
        aria-hidden
        className="size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Estrellas</title>
        {STARS.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r * 0.18} fill="rgba(244,242,255,0.8)" />
        ))}
      </svg>
    </div>
  );
}
