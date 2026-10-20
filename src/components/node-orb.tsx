"use client";

const SPARKS = Array.from({ length: 10 }, (_, index) => {
  const angle = (Math.PI * 2 * index) / 10;
  const distance = 26 + (index % 3) * 10;
  return {
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance,
    delay: index * 0.02,
  };
});

export function NodeOrb({
  value,
  ring,
  text,
  glowClass,
  hex,
  active,
  burst = 0,
}: {
  value: string | number;
  ring: string;
  text: string;
  glowClass: string;
  hex: string;
  active: boolean;
  burst?: number;
}) {
  return (
    <span className="relative grid size-14 place-items-center sm:size-16">
      <span
        aria-hidden
        className={`absolute inset-1 rounded-full blur-md ${active ? "animate-node-aura" : "opacity-40"}`}
        style={{ background: hex }}
      />
      <span
        className={`relative grid size-14 place-items-center rounded-full border-2 bg-[#07060f]/80 font-mono text-xl tabular-nums transition duration-300 sm:size-16 sm:text-2xl ${ring} ${text} ${
          active ? `${glowClass} scale-105` : "opacity-80"
        }`}
      >
        {value}
      </span>
      {burst > 0 ? <Sparks key={burst} color={hex} /> : null}
    </span>
  );
}

function Sparks({ color }: { color: string }) {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {SPARKS.map((spark) => (
        <span
          key={`${spark.dx}-${spark.dy}`}
          className="animate-spark absolute top-1/2 left-1/2 size-1.5 rounded-full"
          style={{
            background: color,
            ["--dx" as string]: `${spark.dx}px`,
            ["--dy" as string]: `${spark.dy}px`,
            animationDelay: `${spark.delay}s`,
          }}
        />
      ))}
    </span>
  );
}

export function EnergyPulse({
  x1,
  y1,
  x2,
  y2,
  color,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
}) {
  return (
    <circle r="2.6" fill="#ffffff">
      <title>Pulso</title>
      <animate attributeName="cx" from={x1} to={x2} dur="2.4s" repeatCount="indefinite" />
      <animate attributeName="cy" from={y1} to={y2} dur="2.4s" repeatCount="indefinite" />
      <animate
        attributeName="fill"
        values={`#ffffff;${color};#ffffff`}
        dur="2.4s"
        repeatCount="indefinite"
      />
    </circle>
  );
}
