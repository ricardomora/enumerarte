"use client";

import { useState } from "react";
import { AspectPanel } from "@/components/aspect-panel";
import { CalculationPanel } from "@/components/calculation-panel";
import { getDestiny, getMission, getShield, getSoul } from "@/content";
import { formatDate } from "@/lib/date-input";
import type { CalendarDate, NameNumbers, NumerologyValue } from "@/lib/numerology";

type ProfileLayer = "nucleo" | "escudo" | "alma" | "destino";

const TABS: { id: ProfileLayer; label: string; needsName: boolean }[] = [
  { id: "nucleo", label: "Núcleo", needsName: false },
  { id: "escudo", label: "Escudo", needsName: true },
  { id: "alma", label: "Alma", needsName: true },
  { id: "destino", label: "Destino", needsName: true },
];

interface ProfileMapProps {
  name: string;
  birthDate: CalendarDate;
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
}

function tensionLine(
  nucleo: NumerologyValue,
  other: NumerologyValue,
  otherLabel: string,
): string | null {
  if (nucleo === other) return null;
  return `Tu Núcleo es ${nucleo} y tu ${otherLabel} es ${other}. Esa diferencia explica por qué por dentro sientes una cosa y hacia afuera proyectas otra.`;
}

export function ProfileMap({ name, birthDate, mision, nameNumbers }: ProfileMapProps) {
  const [layer, setLayer] = useState<ProfileLayer>("nucleo");
  const displayName = name.trim().split(/\s+/)[0];

  const activeTab = TABS.find((tab) => tab.id === layer) ?? TABS[0];
  const nameLocked = activeTab.needsName && !nameNumbers;

  return (
    <div className="space-y-6">
      <p className="text-sm text-mist-500">
        {displayName} · {formatDate(birthDate)}
      </p>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Capas del mapa personal">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={layer === tab.id}
            onClick={() => setLayer(tab.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              layer === tab.id
                ? "bg-accent-500/20 text-mist-100 ring-1 ring-accent-500/50"
                : "bg-ink-900/60 text-mist-500 hover:text-mist-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {nameLocked ? (
        <p className="rounded-xl border border-ink-700 bg-ink-900/60 p-4 text-sm text-mist-300">
          Para ver {activeTab.label.toLowerCase()} necesitamos tu nombre completo (nombre y
          apellidos), como en tu documento.
        </p>
      ) : null}

      {layer === "nucleo" ? (
        <AspectPanel reading={getMission(mision)} layerLabel="Núcleo">
          <CalculationPanel birthDate={birthDate} />
        </AspectPanel>
      ) : null}

      {layer === "escudo" && nameNumbers ? (
        <div className="space-y-4">
          {tensionLine(mision, nameNumbers.escudo, "Escudo") ? (
            <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-sm text-mist-300">
              {tensionLine(mision, nameNumbers.escudo, "Escudo")}
            </p>
          ) : null}
          <AspectPanel reading={getShield(nameNumbers.escudo)} layerLabel="Escudo" />
        </div>
      ) : null}

      {layer === "alma" && nameNumbers ? (
        <div className="space-y-4">
          {tensionLine(mision, nameNumbers.alma, "Alma") ? (
            <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-sm text-mist-300">
              {tensionLine(mision, nameNumbers.alma, "Alma")}
            </p>
          ) : null}
          <AspectPanel reading={getSoul(nameNumbers.alma)} layerLabel="Alma" />
        </div>
      ) : null}

      {layer === "destino" && nameNumbers ? (
        <AspectPanel reading={getDestiny(nameNumbers.destino)} layerLabel="Destino" />
      ) : null}
    </div>
  );
}
