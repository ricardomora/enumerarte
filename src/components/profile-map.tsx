"use client";

import { useRef, useState } from "react";
import { AspectStory } from "@/components/aspect-story";
import { CalculationPanel } from "@/components/calculation-panel";
import { CosmicMap } from "@/components/cosmic-map";
import { useLocale, useUi } from "@/components/locale-provider";
import { MasterAside } from "@/components/master-aside";
import { NameCalculationPanel } from "@/components/name-calculation-panel";
import { LAYER_TONE, type ProfileLayer } from "@/components/profile-layers";
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
  tension,
}: {
  nucleo: NumerologyValue;
  other: NumerologyValue;
  otherLabel: string;
  tension: (life: number, label: string, other: number) => string;
}) {
  if (nucleo === other) return null;
  return (
    <p className="rounded-xl border border-glow-400/30 bg-glow-400/8 p-4 text-center text-sm text-mist-300">
      {tension(nucleo, otherLabel, other)}
    </p>
  );
}

export function ProfileMap({ name, birthDate, mision, nameNumbers }: ProfileMapProps) {
  const { locale } = useLocale();
  const ui = useUi();
  const [layer, setLayer] = useState<ProfileLayer>("nucleo");
  const readingRef = useRef<HTMLDivElement>(null);
  const label = ui.layers[layer].title;
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
              {ui.nameLocked(label)}
            </p>
            {map}
          </div>
        ) : null}

        {layer === "nucleo" ? (
          <AspectStory
            reading={getMission(mision, locale)}
            layerLabel={ui.layers.nucleo.title}
            layerSubtitle={ui.layers.nucleo.subtitle}
            name={name}
            tone={LAYER_TONE.nucleo}
          >
            <CalculationPanel birthDate={birthDate} subject={ui.layers.nucleo.title} />
            {map}
            {master ? <MasterAside master={master} root={mision} /> : null}
          </AspectStory>
        ) : null}

        {layer === "escudo" && nameNumbers ? (
          <AspectStory
            reading={getShield(nameNumbers.escudo, locale)}
            layerLabel={ui.layers.escudo.title}
            layerSubtitle={ui.layers.escudo.subtitle}
            name={name}
            tone={LAYER_TONE.escudo}
            afterHeader={
              <TensionNote
                nucleo={mision}
                other={nameNumbers.escudo}
                otherLabel={ui.layers.escudo.title}
                tension={ui.tension}
              />
            }
          >
            <NameCalculationPanel nameNumbers={nameNumbers} kind="escudo" />
            {map}
          </AspectStory>
        ) : null}

        {layer === "alma" && nameNumbers ? (
          <AspectStory
            reading={getSoul(nameNumbers.alma, locale)}
            layerLabel={ui.layers.alma.title}
            layerSubtitle={ui.layers.alma.subtitle}
            name={name}
            tone={LAYER_TONE.alma}
            afterHeader={
              <TensionNote
                nucleo={mision}
                other={nameNumbers.alma}
                otherLabel={ui.layers.alma.title}
                tension={ui.tension}
              />
            }
          >
            <NameCalculationPanel nameNumbers={nameNumbers} kind="alma" />
            {map}
          </AspectStory>
        ) : null}

        {layer === "destino" && nameNumbers ? (
          <AspectStory
            reading={getDestiny(nameNumbers.destino, locale)}
            layerLabel={ui.layers.destino.title}
            layerSubtitle={ui.layers.destino.subtitle}
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
