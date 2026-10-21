"use client";

import { useState } from "react";
import { EnergyPulse, NodeOrb } from "@/components/node-orb";
import {
  LAYER_COPY,
  LAYER_TONE,
  NUMBERS_MAP_TITLE,
  type ProfileLayer,
} from "@/components/profile-layers";
import { SectionShare } from "@/components/section-share";
import { getMission } from "@/content";
import type { NameNumbers, NumerologyValue } from "@/lib/numerology";
import type { ShareCardData, ShareMapNode } from "@/lib/share";

interface CosmicMapProps {
  name: string;
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

export function CosmicMap({ name, mision, nameNumbers, active, onSelect }: CosmicMapProps) {
  const [bursts, setBursts] = useState<Partial<Record<ProfileLayer, number>>>({});
  const nodes: NodeSpec[] = [
    { id: "nucleo", x: 160, y: 108, value: mision, locked: false },
    { id: "escudo", x: 58, y: 248, value: nameNumbers?.escudo ?? null, locked: !nameNumbers },
    { id: "alma", x: 160, y: 248, value: nameNumbers?.alma ?? null, locked: !nameNumbers },
    { id: "destino", x: 262, y: 248, value: nameNumbers?.destino ?? null, locked: !nameNumbers },
  ];
  const anchor = nodes[0];
  const branches = nodes.slice(1);

  return (
    <section aria-label="Relación entre tus números">
      <div className="overflow-hidden rounded-2xl border border-ink-700 bg-[#07060f]">
        <div className="flex justify-end px-3 pt-3">
          <SectionShare
            section="mapa-de-numeros"
            text={mapShareText(name, mision, nameNumbers)}
            card={mapShareCard(name, mision, nameNumbers)}
          />
        </div>
        <p className="px-4 text-center text-pretty text-base font-medium leading-snug text-mist-100">
          {NUMBERS_MAP_TITLE}
        </p>
        <div className="relative">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full"
            viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
            preserveAspectRatio="xMidYMid meet"
          >
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
            {branches.map((node) => {
              const linked = active === node.id || active === anchor.id;
              return (
                <line
                  key={node.id}
                  x1={anchor.x}
                  y1={anchor.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={linked ? LAYER_TONE[node.id].hex : "rgba(244,242,255,0.22)"}
                  strokeOpacity={linked ? 0.85 : 1}
                  strokeWidth={linked ? 1.6 : 1.1}
                />
              );
            })}
            {branches.map((node) =>
              active === node.id || active === anchor.id ? (
                <EnergyPulse
                  key={`${node.id}-pulse`}
                  x1={anchor.x}
                  y1={anchor.y}
                  x2={node.x}
                  y2={node.y}
                  color={LAYER_TONE[node.id].hex}
                />
              ) : null,
            )}
          </svg>

          <div
            role="tablist"
            aria-label="Partes de tu mapa"
            className="relative"
            style={{ aspectRatio: `${VIEW.width} / ${VIEW.height}` }}
          >
            {nodes.map((node) => (
              <MapNode
                key={node.id}
                node={node}
                active={active === node.id}
                burst={bursts[node.id] ?? 0}
                onSelect={(layer) => {
                  setBursts((current) => ({ ...current, [layer]: (current[layer] ?? 0) + 1 }));
                  onSelect(layer);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function mapNode(layer: ProfileLayer, value: NumerologyValue | null): ShareMapNode {
  const copy = LAYER_COPY[layer];
  return {
    value: value === null ? "?" : String(value),
    label: copy.title,
    subtitle: copy.subtitle,
    color: LAYER_TONE[layer].hex,
  };
}

function mapNumberLine(layer: ProfileLayer, value: NumerologyValue | null): string {
  const copy = LAYER_COPY[layer];
  if (value === null) return `${copy.title} · se revela con el nombre completo`;
  return `${copy.title} ${value} · ${copy.subtitle}`;
}

function mapShareCard(
  name: string,
  mision: NumerologyValue,
  nameNumbers: NameNumbers | null,
): ShareCardData {
  const who = name.trim().split(/\s+/)[0] || "Alguien";
  const mission = getMission(mision);
  return {
    kicker: `${who} te comparte su mapa`,
    message: mission.title,
    detail: [
      mapNumberLine("nucleo", mision),
      mapNumberLine("escudo", nameNumbers?.escudo ?? null),
      mapNumberLine("alma", nameNumbers?.alma ?? null),
      mapNumberLine("destino", nameNumbers?.destino ?? null),
      "",
      mission.essence,
    ].join("\n"),
    left: { value: mision, label: LAYER_COPY.nucleo.title },
    map: {
      top: mapNode("nucleo", mision),
      bottom: [
        mapNode("escudo", nameNumbers?.escudo ?? null),
        mapNode("alma", nameNumbers?.alma ?? null),
        mapNode("destino", nameNumbers?.destino ?? null),
      ],
    },
  };
}

function mapShareText(
  name: string,
  mision: NumerologyValue,
  nameNumbers: NameNumbers | null,
): string {
  const card = mapShareCard(name, mision, nameNumbers);
  return [card.kicker, card.message, card.detail]
    .filter((line) => line && line.length > 0)
    .join("\n");
}

function MapNode({
  node,
  active,
  burst,
  onSelect,
}: {
  node: NodeSpec;
  active: boolean;
  burst: number;
  onSelect: (layer: ProfileLayer) => void;
}) {
  const copy = LAYER_COPY[node.id];
  const tone = LAYER_TONE[node.id];

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-label={`${copy.title}, ${node.locked ? "bloqueado" : node.value}. ${copy.subtitle}`}
      disabled={node.locked}
      onClick={() => onSelect(node.id)}
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100 ${
        node.locked ? "opacity-40" : ""
      }`}
      style={{ left: `${(node.x / VIEW.width) * 100}%`, top: `${(node.y / VIEW.height) * 100}%` }}
    >
      <NodeOrb
        value={node.locked ? "?" : (node.value ?? "")}
        ring={tone.ring}
        text={tone.text}
        glowClass={tone.glowClass}
        hex={tone.hex}
        active={active && !node.locked}
        burst={node.locked ? 0 : burst}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 text-center leading-tight ${
          node.id === "nucleo" ? "bottom-full mb-1.5 w-28" : "top-full mt-1.5 w-[5.5rem] sm:w-28"
        }`}
      >
        <span
          className={`block font-medium ${tone.label} ${
            node.id === "nucleo" ? "text-[11px] sm:text-xs" : "text-[13px] sm:text-sm"
          }`}
        >
          {copy.title}
        </span>
        <span
          className={`mt-0.5 block text-mist-500 ${
            node.id === "nucleo" ? "text-[10px]" : "text-[11px] sm:text-xs"
          }`}
        >
          {copy.subtitle}
        </span>
      </span>
    </button>
  );
}
