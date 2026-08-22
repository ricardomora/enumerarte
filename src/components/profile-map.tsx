"use client";

import { useState } from "react";
import { AspectStory } from "@/components/aspect-story";
import { CalculationPanel } from "@/components/calculation-panel";
import { LayerConstellation, type ProfileLayer } from "@/components/layer-constellation";
import { getDestiny, getMission, getShield, getSoul } from "@/content";
import { formatDate } from "@/lib/date-input";
import type { CalendarDate, NameNumbers, NumerologyValue } from "@/lib/numerology";

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
  return `Tu Núcleo vibra en ${nucleo} y tu ${otherLabel} en ${other}. Dos señales distintas — ahí está la tensión entre lo que sientes por dentro y lo que proyectas.`;
}

export function ProfileMap({ name, birthDate, mision, nameNumbers }: ProfileMapProps) {
  const [layer, setLayer] = useState<ProfileLayer>("nucleo");
  const displayName = name.trim().split(/\s+/)[0];

  const layerLabels: Record<ProfileLayer, string> = {
    nucleo: "Núcleo",
    escudo: "Escudo",
    alma: "Alma",
    destino: "Destino",
  };

  const nameLocked = layer !== "nucleo" && !nameNumbers;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-mist-500">
          {displayName} · {formatDate(birthDate)}
        </p>
        <p className="mt-1 text-xs text-mist-500">Tu mapa · cuatro capas conectadas</p>
      </div>

      <LayerConstellation
        mision={mision}
        nameNumbers={nameNumbers}
        active={layer}
        onSelect={setLayer}
      />

      {nameLocked ? (
        <p className="rounded-xl border border-ink-700 bg-ink-900/60 p-4 text-center text-sm text-mist-300">
          Tu {layerLabels[layer].toLowerCase()} se revela con nombre completo — nombre y apellidos,
          como en tu acta.
        </p>
      ) : null}

      {layer === "nucleo" ? (
        <AspectStory reading={getMission(mision)} layerLabel="Núcleo" name={name}>
          <CalculationPanel birthDate={birthDate} />
        </AspectStory>
      ) : null}

      {layer === "escudo" && nameNumbers ? (
        <div className="space-y-4">
          {tensionLine(mision, nameNumbers.escudo, "Escudo") ? (
            <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-center text-sm text-mist-300">
              {tensionLine(mision, nameNumbers.escudo, "Escudo")}
            </p>
          ) : null}
          <AspectStory reading={getShield(nameNumbers.escudo)} layerLabel="Escudo" name={name} />
        </div>
      ) : null}

      {layer === "alma" && nameNumbers ? (
        <div className="space-y-4">
          {tensionLine(mision, nameNumbers.alma, "Alma") ? (
            <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-center text-sm text-mist-300">
              {tensionLine(mision, nameNumbers.alma, "Alma")}
            </p>
          ) : null}
          <AspectStory reading={getSoul(nameNumbers.alma)} layerLabel="Alma" name={name} />
        </div>
      ) : null}

      {layer === "destino" && nameNumbers ? (
        <AspectStory reading={getDestiny(nameNumbers.destino)} layerLabel="Destino" name={name} />
      ) : null}
    </div>
  );
}
