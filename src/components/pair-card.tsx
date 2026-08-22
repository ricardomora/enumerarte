import { NumberGlyph } from "@/components/number-glyph";
import { getPair } from "@/content";
import type { NumerologyValue } from "@/lib/numerology";

export function PairCard({
  self,
  other,
}: {
  self: { name: string; mision: NumerologyValue };
  other: { name: string; mision: NumerologyValue };
}) {
  const pair = getPair(self.mision, other.mision);

  return (
    <article className="animate-rise space-y-6">
      <header className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <NumberGlyph value={self.mision} size="sm" label={self.name} />
          <span aria-hidden className="text-ink-600">
            ·
          </span>
          <NumberGlyph value={other.mision} size="sm" label={other.name} />
        </div>
        <h2 className="text-balance text-center text-2xl font-medium text-mist-100">
          {pair.headline}
        </h2>
      </header>

      <p className="text-pretty leading-relaxed text-mist-300">{pair.body}</p>

      <div className="rounded-xl border border-accent-500/40 bg-accent-500/10 p-5">
        <p className="text-xs uppercase tracking-wider text-accent-400">Señal para esta semana</p>
        <p className="mt-2 text-pretty leading-relaxed text-mist-100">{pair.practice}</p>
      </div>
    </article>
  );
}
