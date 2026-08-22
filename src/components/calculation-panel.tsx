"use client";

import { type CalendarDate, explainMision } from "@/lib/numerology";
import { track } from "@/lib/track";

/**
 * Panel de transparencia del cálculo.
 *
 * Es una decisión de posicionamiento, no un detalle técnico: toda la categoría
 * funciona escondiendo de dónde sale el número. Mostrar la aritmética completa
 * es lo que separa a Enumerarte de una app de adivinación.
 */
export function CalculationPanel({ birthDate }: { birthDate: CalendarDate }) {
  const explanation = explainMision(birthDate, { day: "Día", month: "Mes", year: "Año" });

  return (
    <details
      className="group rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3"
      onToggle={(toggleEvent) => {
        if (toggleEvent.currentTarget.open) track("calculation_expanded");
      }}
    >
      <summary className="cursor-pointer list-none text-sm text-mist-500 transition hover:text-mist-300">
        <span className="group-open:hidden">Ver de dónde sale este número</span>
        <span className="hidden group-open:inline">Ocultar el cálculo</span>
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
          <span className="text-mist-500">Suma</span>
          <span className="text-mist-100">{explanation.initialTotal}</span>
        </div>

        {explanation.steps.map((step) => (
          <div key={step.expression} className="flex items-baseline justify-between gap-4">
            <span className="text-mist-500">{step.expression}</span>
            <span className={step.stoppedAtMaster ? "text-glow-300" : "text-mist-300"}>
              {step.result}
              {step.stoppedAtMaster ? " · maestro, no se reduce más" : ""}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-mist-500">
        Es aritmética modular: reducir un número sumando sus dígitos equivale a calcular su resto
        entre nueve. Cualquiera puede reproducir esta cuenta a mano, y para nosotros eso es una
        característica del producto, no un problema.
      </p>
    </details>
  );
}
