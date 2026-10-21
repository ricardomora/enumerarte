"use client";

import { AspectStory } from "@/components/aspect-story";
import { CalculationPanel } from "@/components/calculation-panel";
import { useLocale, useUi } from "@/components/locale-provider";
import { LAYER_TONE } from "@/components/profile-layers";
import { getMission } from "@/content";
import { formatDate } from "@/lib/date-input";
import type { CalendarDate, NumerologyValue } from "@/lib/numerology";

export function MissionCard({
  name,
  birthDate,
  mision,
}: {
  name: string;
  birthDate: CalendarDate;
  mision: NumerologyValue;
}) {
  const { locale } = useLocale();
  const ui = useUi();
  const displayName = name.trim().split(/\s+/)[0];

  return (
    <div className="space-y-6">
      <p className="text-sm text-mist-500">
        {displayName} · {formatDate(birthDate, locale === "en" ? "en" : "es")}
      </p>
      <AspectStory
        reading={getMission(mision, locale)}
        layerLabel={ui.layers.nucleo.title}
        layerSubtitle={ui.layers.nucleo.subtitle}
        name={name}
        tone={LAYER_TONE.nucleo}
      >
        <CalculationPanel birthDate={birthDate} />
      </AspectStory>
    </div>
  );
}
