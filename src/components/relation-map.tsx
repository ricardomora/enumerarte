"use client";

import { useState } from "react";
import { RELATION_LABELS } from "@/components/link-person-form";
import { EnergyPulse, NodeOrb } from "@/components/node-orb";
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

const SELF_TONE = {
  ring: "border-[#f5a524]",
  text: "text-[#f8d48a]",
  glowClass: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
  label: "text-[#f5a524]",
  hex: "#f5a524",
};

const RELATION_TONE: Record<
  RelationshipType,
  { ring: string; text: string; glowClass: string; label: string; hex: string }
> = {
  pareja: {
    ring: "border-[#fb923c]",
    text: "text-[#ffedd5]",
    glowClass: "shadow-[0_0_28px_rgba(251,146,60,0.55)]",
    label: "text-[#fdba74]",
    hex: "#fb923c",
  },
  familia: {
    ring: "border-[#c084fc]",
    text: "text-[#f3e8ff]",
    glowClass: "shadow-[0_0_28px_rgba(168,85,247,0.55)]",
    label: "text-[#d8b4fe]",
    hex: "#c084fc",
  },
  amistad: {
    ring: "border-[#22d3ee]",
    text: "text-[#ecfeff]",
    glowClass: "shadow-[0_0_28px_rgba(34,211,238,0.5)]",
    label: "text-[#67e8f9]",
    hex: "#22d3ee",
  },
  trabajo: {
    ring: "border-[#f5a524]",
    text: "text-[#f8d48a]",
    glowClass: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
    label: "text-[#f5a524]",
    hex: "#f5a524",
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
  const [bursts, setBursts] = useState<Record<number, number>>({});
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
          {STARS.map(([x, y, r], index) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r={r}
              fill="rgba(244,242,255,0.85)"
              className="animate-twinkle"
              style={{ animationDelay: `${(index % 7) * 0.35}s` }}
            />
          ))}
          {placed.map((node) => {
            const tone = RELATION_TONE[node.person.relationship];
            const linked = node.index === activeIndex;
            return (
              <line
                key={node.person.birthKey}
                x1={SELF.x}
                y1={SELF.y}
                x2={node.x}
                y2={node.y}
                stroke={linked ? tone.hex : "rgba(244,242,255,0.22)"}
                strokeWidth={linked ? 1.6 : 1.1}
              />
            );
          })}
          {placed.map((node) =>
            node.index === activeIndex ? (
              <EnergyPulse
                key={`${node.person.birthKey}-pulse`}
                x1={SELF.x}
                y1={SELF.y}
                x2={node.x}
                y2={node.y}
                color={RELATION_TONE[node.person.relationship].hex}
              />
            ) : null,
          )}
        </svg>

        <div className="relative" style={{ aspectRatio: `${VIEW.width} / ${VIEW.height}` }}>
          <NodeCircle
            x={SELF.x}
            y={SELF.y}
            value={self.mision}
            title={self.name}
            subtitle="Tú"
            tone={SELF_TONE}
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
              burst={bursts[node.index] ?? 0}
              onSelect={() => {
                setBursts((current) => ({
                  ...current,
                  [node.index]: (current[node.index] ?? 0) + 1,
                }));
                onSelect(node.index);
              }}
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
  burst = 0,
  onSelect,
}: {
  x: number;
  y: number;
  value: NumerologyValue;
  title: string;
  subtitle: string;
  tone: { ring: string; text: string; glowClass: string; label: string; hex: string };
  active: boolean;
  burst?: number;
  onSelect?: () => void;
}) {
  const circle = (
    <>
      <NodeOrb
        value={value}
        ring={tone.ring}
        text={tone.text}
        glowClass={tone.glowClass}
        hex={tone.hex}
        active={active}
        burst={burst}
      />
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
      className="absolute -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-105"
      style={position}
    >
      {circle}
    </button>
  );
}
