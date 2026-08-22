import { CalculationPanel } from "@/components/calculation-panel";
import { NumberGlyph } from "@/components/number-glyph";
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
  const mission = getMission(mision);

  return (
    <article className="animate-rise space-y-6">
      <header className="flex items-center gap-5">
        <NumberGlyph value={mision} />
        <div className="min-w-0 space-y-1">
          <p className="truncate text-sm text-mist-500">
            {name} · {formatDate(birthDate)}
          </p>
          <h2 className="text-balance text-2xl font-medium text-mist-100">{mission.title}</h2>
          <p className="text-pretty text-mist-300">{mission.essence}</p>
        </div>
      </header>

      <p className="text-pretty leading-relaxed text-mist-300">{mission.body}</p>

      <dl className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-4">
          <dt className="text-xs uppercase tracking-wider text-accent-400">Lo que aportas</dt>
          <dd className="mt-2 text-pretty text-sm leading-relaxed text-mist-300">
            {mission.strength}
          </dd>
        </div>
        <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-4">
          <dt className="text-xs uppercase tracking-wider text-glow-300">Dónde te atascas</dt>
          <dd className="mt-2 text-pretty text-sm leading-relaxed text-mist-300">
            {mission.friction}
          </dd>
        </div>
      </dl>

      <CalculationPanel birthDate={birthDate} />
    </article>
  );
}
