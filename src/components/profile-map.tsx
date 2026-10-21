"use client";

import { useRef, useState } from "react";
import { AspectStory } from "@/components/aspect-story";
import { CalculationPanel } from "@/components/calculation-panel";
import { CosmicMap } from "@/components/cosmic-map";
import { MasterAside } from "@/components/master-aside";
import { NameCalculationPanel } from "@/components/name-calculation-panel";
import { LAYER_COPY, LAYER_TONE, layerTitle, type ProfileLayer } from "@/components/profile-layers";
import { getDestiny, getMission, getShield, getSoul } from "@/content";
import {
  type CalendarDate,
  missionMaster,
  type NameNumbers,
  type NumerologyValue,
} from "@/lib/numerology";
import { trackOnce } from "@/lib/track";

interface ProfileMapProps {
  name: string;
  birthDate: CalendarDate;
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
}

function TensionNote({
  nucleo,
  other,
  otherLabel,
}: {
  nucleo: NumerologyValue;
  other: NumerologyValue;
  otherLabel: string;
}) {
  if (nucleo === other) return null;
  return (
    <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-center text-sm text-mist-300">
      Tu Camino de Vida vibra en {nucleo} y tu {otherLabel} en {other}. Dos señales distintas — ahí
      está la tensión entre lo que sientes por dentro y lo que proyectas.
    </p>
  );
}

export function ProfileMap({ name, birthDate, mision, nameNumbers }: ProfileMapProps) {
  const [layer, setLayer] = useState<ProfileLayer>("nucleo");
  const readingRef = useRef<HTMLDivElement>(null);
  const label = layerTitle(layer);
  const nameLocked = layer !== "nucleo" && !nameNumbers;

  function selectLayer(next: ProfileLayer) {
    setLayer(next);
    trackOnce("layer_opened", { layer: next }, `layer_opened:${next}`);
    readingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const master = missionMaster(birthDate);
  const map = (
    <CosmicMap
      name={name}
      mision={mision}
      nameNumbers={nameNumbers}
      active={layer}
      onSelect={selectLayer}
    />
  );

  return (
    <div className="space-y-6">
      <div ref={readingRef} className="scroll-mt-4">
        {nameLocked ? (
          <div className="space-y-4">
            <p className="rounded-xl border border-ink-700 bg-ink-900/60 p-4 text-center text-sm text-mist-300">
              Tu {label.toLowerCase()} se revela con nombre completo — nombre y apellidos, como en
              tu acta.
            </p>
            {map}
          </div>
        ) : null}

        {layer === "nucleo" ? (
          <AspectStory
            reading={getMission(mision)}
            layerLabel={LAYER_COPY.nucleo.title}
            layerSubtitle={LAYER_COPY.nucleo.subtitle}
            name={name}
            tone={LAYER_TONE.nucleo}
          >
            <CalculationPanel birthDate={birthDate} subject={LAYER_COPY.nucleo.title} />
            {map}
            {master ? <MasterAside master={master} root={mision} /> : null}
          </AspectStory>
        ) : null}

        {layer === "escudo" && nameNumbers ? (
          <AspectStory
            reading={getShield(nameNumbers.escudo)}
            layerLabel={LAYER_COPY.escudo.title}
            layerSubtitle={LAYER_COPY.escudo.subtitle}
            name={name}
            tone={LAYER_TONE.escudo}
            afterHeader={
              <TensionNote nucleo={mision} other={nameNumbers.escudo} otherLabel="Personalidad" />
            }
          >
            <NameCalculationPanel nameNumbers={nameNumbers} kind="escudo" />
            {map}
          </AspectStory>
        ) : null}

        {layer === "alma" && nameNumbers ? (
          <AspectStory
            reading={getSoul(nameNumbers.alma)}
            layerLabel={LAYER_COPY.alma.title}
            layerSubtitle={LAYER_COPY.alma.subtitle}
            name={name}
            tone={LAYER_TONE.alma}
            afterHeader={<TensionNote nucleo={mision} other={nameNumbers.alma} otherLabel="Alma" />}
          >
            <NameCalculationPanel nameNumbers={nameNumbers} kind="alma" />
            {map}
          </AspectStory>
        ) : null}

        {layer === "destino" && nameNumbers ? (
          <AspectStory
            reading={getDestiny(nameNumbers.destino)}
            layerLabel={LAYER_COPY.destino.title}
            layerSubtitle={LAYER_COPY.destino.subtitle}
            name={name}
            tone={LAYER_TONE.destino}
          >
            <NameCalculationPanel nameNumbers={nameNumbers} kind="destino" />
            {map}
          </AspectStory>
        ) : null}
      </div>
    </div>
  );
}
