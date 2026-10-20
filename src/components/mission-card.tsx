import { AspectStory } from "@/components/aspect-story";
import { CalculationPanel } from "@/components/calculation-panel";
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
  const displayName = name.trim().split(/\s+/)[0];

  return (
    <div className="space-y-6">
      <p className="text-sm text-mist-500">
        {displayName} · {formatDate(birthDate)}
      </p>
      <AspectStory
        reading={getMission(mision)}
        layerLabel="Camino de Vida"
        layerSubtitle="Misión de Vida"
        name={name}
      >
        <CalculationPanel birthDate={birthDate} />
      </AspectStory>
    </div>
  );
}
