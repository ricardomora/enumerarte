"use client";

import type { NameNumbers, NumerologyValue } from "@/lib/numerology";

export type ProfileLayer = "nucleo" | "escudo" | "alma" | "destino";

interface LayerNode {
  id: ProfileLayer;
  label: string;
  value: NumerologyValue | null;
  locked: boolean;
}

interface LayerConstellationProps {
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
  active: ProfileLayer;
  onSelect: (layer: ProfileLayer) => void;
}

const POSITIONS: Record<ProfileLayer, string> = {
  nucleo: "left-1/2 top-0 -translate-x-1/2",
  escudo: "left-0 top-1/2 -translate-y-1/2",
  alma: "right-0 top-1/2 -translate-y-1/2",
  destino: "left-1/2 bottom-0 -translate-x-1/2",
};

function isMaster(value: NumerologyValue): boolean {
  return value > 9;
}

function NodeButton({
  node,
  active,
  onSelect,
}: {
  node: LayerNode;
  active: boolean;
  onSelect: (layer: ProfileLayer) => void;
}) {
  const master = node.value !== null && isMaster(node.value);

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-disabled={node.locked}
      disabled={node.locked}
      onClick={() => onSelect(node.id)}
      className={`absolute flex flex-col items-center gap-1.5 transition ${POSITIONS[node.id]} ${
        node.locked ? "cursor-not-allowed opacity-40" : "hover:scale-105"
      }`}
    >
      <span
        className={`grid size-14 place-items-center rounded-full border font-mono text-lg tabular-nums sm:size-16 sm:text-xl ${
          active
            ? master
              ? "border-glow-400 bg-glow-400/20 text-glow-300 shadow-[0_0_24px_rgba(201,162,39,0.35)]"
              : "border-accent-400 bg-accent-500/25 text-mist-100 shadow-[0_0_24px_rgba(124,92,255,0.35)]"
            : master
              ? "border-glow-400/40 bg-glow-400/8 text-glow-300"
              : "border-ink-600 bg-ink-900/80 text-mist-300"
        }`}
      >
        {node.locked ? "?" : node.value}
      </span>
      <span
        className={`text-xs font-medium tracking-wide ${active ? "text-mist-100" : "text-mist-500"}`}
      >
        {node.label}
      </span>
    </button>
  );
}

export function LayerConstellation({
  mision,
  nameNumbers,
  active,
  onSelect,
}: LayerConstellationProps) {
  const nodes: LayerNode[] = [
    { id: "nucleo", label: "Núcleo", value: mision, locked: false },
    {
      id: "escudo",
      label: "Escudo",
      value: nameNumbers?.escudo ?? null,
      locked: !nameNumbers,
    },
    { id: "alma", label: "Alma", value: nameNumbers?.alma ?? null, locked: !nameNumbers },
    {
      id: "destino",
      label: "Destino",
      value: nameNumbers?.destino ?? null,
      locked: !nameNumbers,
    },
  ];

  return (
    <div
      className="relative mx-auto h-44 w-full max-w-xs sm:h-48"
      role="tablist"
      aria-label="Capas del mapa personal"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 200 160"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="100" y1="32" x2="32" y2="80" stroke="rgba(124,92,255,0.25)" strokeWidth="1" />
        <line x1="100" y1="32" x2="168" y2="80" stroke="rgba(124,92,255,0.25)" strokeWidth="1" />
        <line x1="32" y1="80" x2="100" y2="128" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <line x1="168" y1="80" x2="100" y2="128" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <line x1="32" y1="80" x2="168" y2="80" stroke="rgba(154,146,196,0.15)" strokeWidth="1" />
      </svg>

      {nodes.map((node) => (
        <NodeButton key={node.id} node={node} active={active === node.id} onSelect={onSelect} />
      ))}
    </div>
  );
}
