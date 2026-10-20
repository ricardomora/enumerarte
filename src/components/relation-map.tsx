"use client";

import { RELATION_LABELS } from "@/components/link-person-form";
import type { NumerologyValue, RelationshipType } from "@/lib/numerology";

export interface RelationNode {
  name: string;
  mision: NumerologyValue;
  relationship: RelationshipType;
  /** Fecha y nombre, para distinguir a dos personas parecidas. */
  birthKey: string;
}

const VIEW = { width: 320, height: 380 };
const SELF = { x: 160, y: 286 };

const STARS = [
  [18, 22, 1.1],
  [46, 48, 0.7],
  [78, 16, 0.9],
  [112, 40, 0.6],
  [148, 18, 1],
  [196, 34, 0.7],
  [236, 14, 1.1],
  [274, 42, 0.6],
  [302, 24, 0.8],
  [28, 96, 0.6],
  [88, 88, 0.8],
  [210, 78, 0.7],
  [292, 110, 0.9],
  [16, 168, 0.8],
  [64, 196, 0.6],
  [250, 188, 0.7],
  [304, 170, 1],
  [36, 248, 0.7],
  [100, 270, 0.6],
  [188, 262, 0.8],
  [268, 246, 0.6],
  [140, 150, 0.5],
] as const;

const RELATION_TONE: Record<
  RelationshipType,
  { ring: string; text: string; glow: string; label: string }
> = {
  pareja: {
    ring: "border-[#fb923c]",
    text: "text-[#ffedd5]",
    glow: "shadow-[0_0_28px_rgba(251,146,60,0.55)]",
    label: "text-[#fdba74]",
  },
  familia: {
    ring: "border-[#c084fc]",
    text: "text-[#f3e8ff]",
    glow: "shadow-[0_0_28px_rgba(168,85,247,0.55)]",
    label: "text-[#d8b4fe]",
  },
  amistad: {
    ring: "border-[#22d3ee]",
    text: "text-[#ecfeff]",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.5)]",
    label: "text-[#67e8f9]",
  },
  trabajo: {
    ring: "border-[#f5a524]",
    text: "text-[#f8d48a]",
    glow: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
    label: "text-[#f5a524]",
  },
};

function personPosition(index: number, total: number): { x: number; y: number } {
  if (total <= 1) return { x: 160, y: 56 };
  return index === 0 ? { x: 64, y: 96 } : { x: 256, y: 96 };
}

export function RelationMap({
  self,
  people,
  activeIndex,
  onSelect,
}: {
  self: { name: string; mision: NumerologyValue };
  people: RelationNode[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const placed = people.map((person, index) => ({
    person,
    index,
    ...personPosition(index, people.length),
  }));

  return (
    <section className="space-y-3" aria-label="Mapa de personas">
      <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-[#07060f]">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full"
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Estrellas</title>
          {STARS.map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="rgba(244,242,255,0.75)" />
          ))}
          {placed.map((node) => (
            <line
              key={node.person.birthKey}
              x1={SELF.x}
              y1={SELF.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(244,242,255,0.28)"
              strokeWidth="1.25"
            />
          ))}
          {placed.map((node) => (
            <circle
              key={`${node.person.birthKey}-mid`}
              cx={(SELF.x + node.x) / 2}
              cy={(SELF.y + node.y) / 2}
              r="2.2"
              fill="rgba(244,242,255,0.85)"
            />
          ))}
        </svg>

        <div className="relative" style={{ aspectRatio: `${VIEW.width} / ${VIEW.height}` }}>
          <NodeCircle
            x={SELF.x}
            y={SELF.y}
            value={self.mision}
            title={self.name}
            subtitle="Tú"
            tone={{
              ring: "border-[#f5a524]",
              text: "text-[#f8d48a]",
              glow: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
              label: "text-[#f5a524]",
            }}
            active
          />
          {placed.map((node) => (
            <NodeCircle
              key={node.person.birthKey}
              x={node.x}
              y={node.y}
              value={node.person.mision}
              title={node.person.name}
              subtitle={RELATION_LABELS[node.person.relationship]}
              tone={RELATION_TONE[node.person.relationship]}
              active={node.index === activeIndex}
              onSelect={() => onSelect(node.index)}
            />
          ))}
        </div>
      </div>
      {people.length > 1 ? (
        <p className="text-center text-xs text-mist-500">Toca una persona para ver esa relación.</p>
      ) : (
        <p className="text-center text-xs text-mist-500">
          Tú y quien te importa, en el mismo mapa.
        </p>
      )}
    </section>
  );
}

function NodeCircle({
  x,
  y,
  value,
  title,
  subtitle,
  tone,
  active,
  onSelect,
}: {
  x: number;
  y: number;
  value: NumerologyValue;
  title: string;
  subtitle: string;
  tone: { ring: string; text: string; glow: string; label: string };
  active: boolean;
  onSelect?: () => void;
}) {
  const circle = (
    <>
      <span
        className={`grid size-14 place-items-center rounded-full border-2 bg-[#07060f]/80 font-mono text-xl tabular-nums sm:size-16 sm:text-2xl ${tone.ring} ${tone.text} ${
          active ? tone.glow : "opacity-80"
        }`}
      >
        {value}
      </span>
      <span className="absolute top-full left-1/2 mt-1.5 w-28 -translate-x-1/2 text-center leading-tight">
        <span className={`block text-[11px] font-medium sm:text-xs ${tone.label}`}>{title}</span>
        <span className="mt-0.5 block text-[10px] text-mist-500">{subtitle}</span>
      </span>
    </>
  );

  const position = {
    left: `${(x / VIEW.width) * 100}%`,
    top: `${(y / VIEW.height) * 100}%`,
  };

  if (!onSelect) {
    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={position}>
        {circle}
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={`${title}, ${subtitle}, ${value}`}
      onClick={onSelect}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={position}
    >
      {circle}
    </button>
  );
}
