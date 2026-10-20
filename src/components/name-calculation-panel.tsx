"use client";

import { explainReduction, type LetterBreakdown, type NameNumbers } from "@/lib/numerology";
import { track } from "@/lib/track";

type NameLayer = "alma" | "escudo" | "destino";

const COPY: Record<NameLayer, { subject: string; rule: string }> = {
  alma: {
    subject: "Alma",
    rule: "Suma de las vocales del nombre completo, reducida.",
  },
  escudo: {
    subject: "Personalidad",
    rule: "Suma de las consonantes del nombre completo, reducida. Es la imagen que proyectas.",
  },
  destino: {
    subject: "Expresión",
    rule: "Suma de todas las letras del nombre completo, reducida.",
  },
};

function totalOf(entries: LetterBreakdown[]): number {
  return entries.reduce((sum, entry) => sum + entry.value, 0);
}

function selection(
  nameNumbers: NameNumbers,
  kind: NameLayer,
): {
  entries: LetterBreakdown[];
  usedAllLetters: boolean;
} {
  if (kind === "destino") return { entries: nameNumbers.breakdown, usedAllLetters: false };

  const vowels = nameNumbers.breakdown.filter((entry) => entry.isVowel);
  const consonants = nameNumbers.breakdown.filter((entry) => !entry.isVowel);
  if (kind === "alma") {
    return vowels.length > 0
      ? { entries: vowels, usedAllLetters: false }
      : { entries: nameNumbers.breakdown, usedAllLetters: true };
  }
  return consonants.length > 0
    ? { entries: consonants, usedAllLetters: false }
    : { entries: nameNumbers.breakdown, usedAllLetters: true };
}

export function NameCalculationPanel({
  nameNumbers,
  kind,
}: {
  nameNumbers: NameNumbers;
  kind: NameLayer;
}) {
  const copy = COPY[kind];
  const { entries, usedAllLetters } = selection(nameNumbers, kind);
  const total = totalOf(entries);
  const steps = explainReduction(total);
  const vowels = nameNumbers.breakdown.filter((entry) => entry.isVowel);
  const consonants = nameNumbers.breakdown.filter((entry) => !entry.isVowel);

  return (
    <details
      className="group rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3"
      onToggle={(toggleEvent) => {
        if (toggleEvent.currentTarget.open) track("calculation_expanded", { section: kind });
      }}
    >
      <summary className="cursor-pointer list-none text-sm text-mist-500 transition hover:text-mist-300">
        <span className="group-open:hidden">Ver cómo se calcula tu {copy.subject}</span>
        <span className="hidden group-open:inline">Ocultar el cálculo</span>
      </summary>

      <div className="mt-4 space-y-4">
        <p className="text-sm leading-relaxed text-mist-300">{copy.rule}</p>
        {usedAllLetters ? (
          <p className="text-xs leading-relaxed text-mist-500">
            Este nombre no separa vocales y consonantes, así que la cuenta usa todas las letras.
          </p>
        ) : null}

        {kind === "destino" ? (
          <div className="space-y-2 text-sm">
            <GroupLine label="Vocales" entries={vowels} />
            <GroupLine label="Consonantes" entries={consonants} />
          </div>
        ) : (
          <LetterRow entries={entries} />
        )}

        <div className="space-y-2 border-t border-ink-700 pt-3 font-mono text-sm">
          <div>
            <span className="text-mist-500">Suma</span>
            <p className="mt-1 text-pretty break-words text-mist-100">
              {entries.map((entry) => entry.value).join(" + ")} = {total}
            </p>
          </div>
          {steps.map((step) => (
            <div key={step.expression} className="flex items-baseline justify-between gap-4">
              <span className="text-mist-500">{step.expression}</span>
              <span className={step.stoppedAtMaster ? "text-glow-300" : "text-mist-300"}>
                {step.result}
                {step.stoppedAtMaster ? " · maestro, no se reduce más" : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}

function GroupLine({ label, entries }: { label: string; entries: LetterBreakdown[] }) {
  if (entries.length === 0) return null;
  return (
    <div className="rounded-lg border border-ink-700 bg-ink-950/50 px-3 py-2">
      <p className="text-xs uppercase tracking-wider text-mist-500">{label}</p>
      <p className="mt-1 font-mono text-sm text-mist-300">
        {entries.map((entry) => `${entry.letter} ${entry.value}`).join(" · ")} = {totalOf(entries)}
      </p>
    </div>
  );
}

function LetterRow({ entries }: { entries: LetterBreakdown[] }) {
  return (
    <p className="font-mono text-sm leading-relaxed text-mist-300">
      {entries.map((entry) => `${entry.letter} ${entry.value}`).join(" · ")}
    </p>
  );
}
