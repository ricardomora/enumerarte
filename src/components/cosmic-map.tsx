"use client";

import { LAYER_COPY, type ProfileLayer } from "@/components/profile-layers";
import type { NameNumbers, NumerologyValue } from "@/lib/numerology";

interface CosmicMapProps {
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
  active: ProfileLayer;
  onSelect: (layer: ProfileLayer) => void;
}

interface NodeSpec {
  id: ProfileLayer;
  x: number;
  y: number;
  value: NumerologyValue | null;
  locked: boolean;
}

const VIEW = { width: 320, height: 360 };

const TONE: Record<ProfileLayer, { ring: string; text: string; glow: string; label: string }> = {
  nucleo: {
    ring: "border-[#f5a524]",
    text: "text-[#f8d48a]",
    glow: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
    label: "text-[#f5a524]",
  },
  escudo: {
    ring: "border-[#c084fc]",
    text: "text-[#f3e8ff]",
    glow: "shadow-[0_0_28px_rgba(168,85,247,0.55)]",
    label: "text-[#d8b4fe]",
  },
  alma: {
    ring: "border-[#fb923c]",
    text: "text-[#ffedd5]",
    glow: "shadow-[0_0_28px_rgba(251,146,60,0.5)]",
    label: "text-[#fdba74]",
  },
  destino: {
    ring: "border-[#22d3ee]",
    text: "text-[#ecfeff]",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.5)]",
    label: "text-[#67e8f9]",
  },
};

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

export function CosmicMap({ mision, nameNumbers, active, onSelect }: CosmicMapProps) {
  const nodes: NodeSpec[] = [
    { id: "escudo", x: 160, y: 48, value: nameNumbers?.escudo ?? null, locked: !nameNumbers },
    { id: "alma", x: 54, y: 168, value: nameNumbers?.alma ?? null, locked: !nameNumbers },
    { id: "destino", x: 266, y: 168, value: nameNumbers?.destino ?? null, locked: !nameNumbers },
    { id: "nucleo", x: 160, y: 268, value: mision, locked: false },
  ];
  const anchor = nodes[3];

  return (
    <section className="space-y-3" aria-label="Relación entre tus números">
      <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-[#07060f]">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full"
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {STARS.map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="rgba(244,242,255,0.75)" />
          ))}
          {nodes.slice(0, 3).map((node) => (
            <line
              key={node.id}
              x1={anchor.x}
              y1={anchor.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(244,242,255,0.28)"
              strokeWidth="1.25"
            />
          ))}
          {nodes.slice(0, 3).map((node) => (
            <circle
              key={`${node.id}-mid`}
              cx={(anchor.x + node.x) / 2}
              cy={(anchor.y + node.y) / 2}
              r="2.2"
              fill="rgba(244,242,255,0.85)"
            />
          ))}
        </svg>

        <div
          role="tablist"
          aria-label="Partes de tu mapa"
          className="relative"
          style={{ aspectRatio: `${VIEW.width} / ${VIEW.height}` }}
        >
          {nodes.map((node) => (
            <MapNode key={node.id} node={node} active={active === node.id} onSelect={onSelect} />
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-mist-500">Toca un nodo para abrir esa parte.</p>
    </section>
  );
}

function MapNode({
  node,
  active,
  onSelect,
}: {
  node: NodeSpec;
  active: boolean;
  onSelect: (layer: ProfileLayer) => void;
}) {
  const copy = LAYER_COPY[node.id];
  const tone = TONE[node.id];

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-label={`${copy.title}, ${node.locked ? "bloqueado" : node.value}. ${copy.subtitle}`}
      disabled={node.locked}
      onClick={() => onSelect(node.id)}
      className="absolute -translate-x-1/2 -translate-y-1/2 disabled:cursor-not-allowed"
      style={{ left: `${(node.x / VIEW.width) * 100}%`, top: `${(node.y / VIEW.height) * 100}%` }}
    >
      <span
        className={`grid size-14 place-items-center rounded-full border-2 bg-[#07060f]/80 font-mono text-xl tabular-nums sm:size-16 sm:text-2xl ${tone.ring} ${tone.text} ${
          active ? tone.glow : "opacity-80"
        } ${node.locked ? "opacity-40" : ""}`}
      >
        {node.locked ? "?" : node.value}
      </span>
      <span className="absolute top-full left-1/2 mt-1.5 w-28 -translate-x-1/2 text-center leading-tight">
        <span className={`block text-[11px] font-medium sm:text-xs ${tone.label}`}>
          {copy.title}
        </span>
        <span className="mt-0.5 block text-[10px] text-mist-500">{copy.subtitle}</span>
      </span>
    </button>
  );
}
