"use client";

import { useState } from "react";
import { NumberGlyph } from "@/components/number-glyph";
import type { AspectReading } from "@/content/types";

const LAYER_LABELS = {
  strengths: "Lo que aportas",
  frictions: "Dónde te atascas",
} as const;

interface AspectPanelProps {
  reading: AspectReading;
  layerLabel?: string;
  children?: React.ReactNode;
}

/**
 * Una capa del mapa personal con revelación progresiva: esencia → cuerpo →
 * aportes/atascos → profundidad → práctica.
 */
export function AspectPanel({ reading, layerLabel, children }: AspectPanelProps) {
  const [depthOpen, setDepthOpen] = useState(false);

  return (
    <article className="animate-rise space-y-6">
      <header className="flex items-start gap-5">
        <NumberGlyph value={reading.value} label={layerLabel} />
        <div className="min-w-0 space-y-1">
          <h2 className="text-balance text-2xl font-medium text-mist-100">{reading.title}</h2>
          <p className="text-pretty text-mist-300">{reading.essence}</p>
        </div>
      </header>

      <p className="text-pretty leading-relaxed text-mist-300">{reading.body}</p>

      <dl className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-4">
          <dt className="text-xs uppercase tracking-wider text-accent-400">
            {LAYER_LABELS.strengths}
          </dt>
          <dd className="mt-3 space-y-2">
            {reading.strengths.map((item) => (
              <p key={item} className="text-pretty text-sm leading-relaxed text-mist-300">
                {item}
              </p>
            ))}
          </dd>
        </div>
        <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-4">
          <dt className="text-xs uppercase tracking-wider text-glow-300">
            {LAYER_LABELS.frictions}
          </dt>
          <dd className="mt-3 space-y-2">
            {reading.frictions.map((item) => (
              <p key={item} className="text-pretty text-sm leading-relaxed text-mist-300">
                {item}
              </p>
            ))}
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => setDepthOpen((open) => !open)}
        className="w-full rounded-xl border border-ink-700 bg-ink-900/40 px-4 py-3 text-sm text-mist-500 transition hover:border-ink-600 hover:text-mist-300"
        aria-expanded={depthOpen}
      >
        {depthOpen ? "Ocultar capas profundas" : "Ver más capas"}
      </button>

      {depthOpen ? (
        <div className="animate-rise space-y-4">
          <DepthBlock label="Bajo presión" text={reading.underPressure} />
          <DepthBlock label="En relaciones" text={reading.inRelationships} />
          <DepthBlock label="Punto ciego" text={reading.blindSpot} accent="glow" />
        </div>
      ) : null}

      <div className="rounded-xl border border-accent-500/30 bg-accent-500/8 p-4">
        <p className="text-xs uppercase tracking-wider text-accent-400">Esta semana</p>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-mist-100">
          {reading.microPractice}
        </p>
      </div>

      {children}
    </article>
  );
}

function DepthBlock({
  label,
  text,
  accent = "accent",
}: {
  label: string;
  text: string;
  accent?: "accent" | "glow";
}) {
  const labelClass = accent === "glow" ? "text-glow-300" : "text-accent-400";

  return (
    <div className="rounded-xl border border-ink-700 bg-ink-900/60 p-4">
      <p className={`text-xs uppercase tracking-wider ${labelClass}`}>{label}</p>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-mist-300">{text}</p>
    </div>
  );
}
