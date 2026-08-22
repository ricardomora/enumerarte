"use client";

import { useState } from "react";
import { NumberGlyph } from "@/components/number-glyph";
import { ShareableMoment } from "@/components/shareable-moment";
import type { AspectReading } from "@/content/types";

type StoryStep = "reveal" | "mirror" | "balance" | "depth" | "practice";

const STEPS: StoryStep[] = ["reveal", "mirror", "balance", "depth", "practice"];

const STEP_LABELS: Record<StoryStep, string> = {
  reveal: "Esencia",
  mirror: "Espejo",
  balance: "Luz y sombra",
  depth: "Profundidad",
  practice: "Esta semana",
};

interface AspectStoryProps {
  reading: AspectReading;
  layerLabel: string;
  name: string;
  children?: React.ReactNode;
}

export function AspectStory({ reading, layerLabel, name, children }: AspectStoryProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = STEPS[stepIndex];

  function goNext() {
    setStepIndex((index) => Math.min(index + 1, STEPS.length - 1));
  }

  function goPrev() {
    setStepIndex((index) => Math.max(index - 1, 0));
  }

  return (
    <article className="animate-rise space-y-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
          {layerLabel}
        </p>
        <p className="text-xs text-mist-500">
          {stepIndex + 1} / {STEPS.length} · {STEP_LABELS[step]}
        </p>
      </div>

      <div key={step} className="animate-story-slide min-h-[280px] space-y-5">
        {step === "reveal" ? (
          <div className="flex flex-col items-center space-y-5 py-4 text-center">
            <NumberGlyph value={reading.value} label={layerLabel} />
            <div className="max-w-sm space-y-2">
              <h2 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
                {reading.title}
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-glow-300">{reading.essence}</p>
            </div>
          </div>
        ) : null}

        {step === "mirror" ? (
          <div className="space-y-4 py-2">
            <p className="text-xs uppercase tracking-wider text-mist-500">Cómo te mueves</p>
            <p className="text-pretty text-lg leading-relaxed text-mist-100">{reading.body}</p>
          </div>
        ) : null}

        {step === "balance" ? (
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-accent-500/25 border-l-4 border-l-accent-500 bg-accent-500/6 p-4">
              <dt className="text-xs uppercase tracking-wider text-accent-400">Lo que aportas</dt>
              <dd className="mt-3 space-y-2.5">
                {reading.strengths.map((item) => (
                  <p key={item} className="text-pretty text-sm leading-relaxed text-mist-200">
                    {item}
                  </p>
                ))}
              </dd>
            </div>
            <div className="rounded-xl border border-glow-400/25 border-l-4 border-l-glow-400 bg-glow-400/6 p-4">
              <dt className="text-xs uppercase tracking-wider text-glow-300">Dónde crecer</dt>
              <dd className="mt-3 space-y-2.5">
                {reading.frictions.map((item) => (
                  <p key={item} className="text-pretty text-sm leading-relaxed text-mist-200">
                    {item}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        ) : null}

        {step === "depth" ? (
          <div className="space-y-3">
            <DepthBlock label="Bajo presión" text={reading.underPressure} />
            <DepthBlock label="En tus vínculos" text={reading.inRelationships} />
            <DepthBlock label="Lo que otros ven" text={reading.blindSpot} accent="glow" />
          </div>
        ) : null}

        {step === "practice" ? (
          <div className="space-y-5">
            <div className="rounded-xl border border-accent-500/40 bg-accent-500/10 p-5">
              <p className="text-xs uppercase tracking-wider text-accent-400">
                Señal para esta semana
              </p>
              <p className="mt-3 text-pretty text-base leading-relaxed text-mist-100">
                {reading.microPractice}
              </p>
            </div>
            <ShareableMoment
              layerLabel={layerLabel}
              value={reading.value}
              title={reading.title}
              essence={reading.essence}
              name={name}
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={stepIndex === 0}
          className="rounded-xl border border-ink-700 px-4 py-2.5 text-sm text-mist-300 transition enabled:hover:border-ink-600 enabled:hover:text-mist-100 disabled:opacity-30"
        >
          Atrás
        </button>

        <div className="flex flex-1 justify-center gap-1.5" aria-hidden>
          {STEPS.map((item, index) => (
            <span
              key={item}
              className={`h-1.5 rounded-full transition-all ${
                index === stepIndex ? "w-6 bg-accent-500" : "w-1.5 bg-ink-600"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={stepIndex === STEPS.length - 1}
          className="rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-medium text-white transition enabled:hover:bg-accent-400 disabled:opacity-30"
        >
          Siguiente
        </button>
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
    <div className="rounded-xl border border-ink-700/80 bg-ink-900/50 p-4 backdrop-blur-sm">
      <p className={`text-xs uppercase tracking-wider ${labelClass}`}>{label}</p>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-mist-300">{text}</p>
    </div>
  );
}
