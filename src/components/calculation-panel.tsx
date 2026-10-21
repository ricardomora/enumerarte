"use client";

import { useUi } from "@/components/locale-provider";
import { type CalendarDate, explainMision } from "@/lib/numerology";
import { track } from "@/lib/track";

/**
 * Panel de transparencia del cálculo.
 *
 * Es una decisión de posicionamiento, no un detalle técnico: toda la categoría
 * funciona escondiendo de dónde sale el número. Mostrar la aritmética completa
 * es lo que separa a Enumerarte de una app de adivinación.
 */
export function CalculationPanel({
  birthDate,
  subject,
}: {
  birthDate: CalendarDate;
  subject?: string;
}) {
  const ui = useUi();
  const label = subject ?? ui.layers.nucleo.title;
  const explanation = explainMision(birthDate, { day: ui.day, month: ui.month, year: ui.year });

  return (
    <details
      className="group rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3"
      onToggle={(toggleEvent) => {
        if (toggleEvent.currentTarget.open) {
          track("calculation_expanded", { section: "nucleo" });
        }
      }}
    >
      <summary className="cursor-pointer list-none text-sm text-mist-500 transition hover:text-mist-300">
        <span className="group-open:hidden">{ui.calcShow(label)}</span>
        <span className="hidden group-open:inline">{ui.calcHide}</span>
      </summary>

      <div className="mt-4 space-y-3 font-mono text-sm">
        {explanation.parts.map((part) => (
          <div key={part.label} className="flex items-baseline justify-between gap-4">
            <span className="text-mist-500">
              {part.label} {part.source}
            </span>
            <span className="text-mist-300">
              {part.digits.join(" + ")} = {part.total}
            </span>
          </div>
        ))}

        <div className="flex items-baseline justify-between gap-4 border-t border-ink-700 pt-3">
          <span className="text-mist-500">{ui.sum}</span>
          <span className="text-mist-100">{explanation.initialTotal}</span>
        </div>

        {explanation.steps.map((step) => (
          <div key={step.expression} className="flex items-baseline justify-between gap-4">
            <span className="text-mist-500">{step.expression}</span>
            <span className={step.stoppedAtMaster ? "text-glow-300" : "text-mist-300"}>
              {step.result}
              {step.stoppedAtMaster ? ui.masterStop : ""}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-mist-500">{ui.calcVerify}</p>
    </details>
  );
}
