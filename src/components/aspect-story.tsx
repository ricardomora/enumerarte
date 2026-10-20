"use client";

import { NumberGlyph } from "@/components/number-glyph";
import { SectionShare } from "@/components/section-share";
import type { AspectReading } from "@/content/types";
import type { NumerologyValue } from "@/lib/numerology";
import { clipShareLine, type ShareCardData } from "@/lib/share";

interface AspectStoryProps {
  reading: AspectReading;
  layerLabel: string;
  layerSubtitle?: string;
  name: string;
  /** Controles para cambiar de capa, justo después de la esencia. */
  afterHeader?: React.ReactNode;
  children?: React.ReactNode;
}

function shareText(
  name: string,
  layerLabel: string,
  value: NumerologyValue,
  heading: string,
  body: string,
): string {
  const who = name.trim().split(/\s+/)[0] || "Alguien";
  return `${who} · ${layerLabel} ${value}\n${heading}\n${body}`;
}

function numberCard(
  name: string,
  layerLabel: string,
  value: NumerologyValue,
  heading: string,
  body: string,
): ShareCardData {
  const who = name.trim().split(/\s+/)[0] || "Alguien";
  return {
    kicker: `${who} te comparte su ${layerLabel}`,
    message: heading,
    detail: clipShareLine(body),
    left: { value, label: layerLabel },
  };
}

export function AspectStory({
  reading,
  layerLabel,
  layerSubtitle,
  name,
  afterHeader,
  children,
}: AspectStoryProps) {
  return (
    <article className="animate-rise space-y-8">
      <header className="space-y-5 text-center">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
            {layerLabel}
          </p>
          {layerSubtitle ? <p className="text-xs text-mist-500">{layerSubtitle}</p> : null}
        </div>
        <NumberGlyph value={reading.value} />
        <div className="mx-auto max-w-sm space-y-2">
          <h2 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
            {reading.title}
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-glow-300">{reading.essence}</p>
        </div>
      </header>

      {afterHeader}

      <ReadingBlock
        label="Cómo te mueves"
        share={shareText(name, layerLabel, reading.value, "Cómo te mueves", reading.body)}
        card={numberCard(name, layerLabel, reading.value, "Cómo te mueves", reading.body)}
        section={`${layerLabel}:cuerpo`}
      >
        <p className="text-pretty text-base leading-relaxed text-mist-100">{reading.body}</p>
      </ReadingBlock>

      <div className="grid gap-3 sm:grid-cols-2">
        <ReadingBlock
          label="Lo que aportas"
          share={shareText(
            name,
            layerLabel,
            reading.value,
            "Lo que aportas",
            reading.strengths.join(" "),
          )}
          card={numberCard(
            name,
            layerLabel,
            reading.value,
            "Lo que aportas",
            reading.strengths.join(" "),
          )}
          section={`${layerLabel}:fortalezas`}
          tone="accent"
        >
          <div className="space-y-2.5">
            {reading.strengths.map((item) => (
              <p key={item} className="text-pretty text-sm leading-relaxed text-mist-200">
                {item}
              </p>
            ))}
          </div>
        </ReadingBlock>
        <ReadingBlock
          label="Dónde crecer"
          share={shareText(
            name,
            layerLabel,
            reading.value,
            "Dónde crecer",
            reading.frictions.join(" "),
          )}
          card={numberCard(
            name,
            layerLabel,
            reading.value,
            "Dónde crecer",
            reading.frictions.join(" "),
          )}
          section={`${layerLabel}:fricciones`}
          tone="glow"
        >
          <div className="space-y-2.5">
            {reading.frictions.map((item) => (
              <p key={item} className="text-pretty text-sm leading-relaxed text-mist-200">
                {item}
              </p>
            ))}
          </div>
        </ReadingBlock>
      </div>

      <div className="space-y-3">
        <ReadingBlock
          label="Bajo presión"
          share={shareText(name, layerLabel, reading.value, "Bajo presión", reading.underPressure)}
          card={numberCard(name, layerLabel, reading.value, "Bajo presión", reading.underPressure)}
          section={`${layerLabel}:presion`}
        >
          <p className="text-pretty text-sm leading-relaxed text-mist-300">
            {reading.underPressure}
          </p>
        </ReadingBlock>
        <ReadingBlock
          label="En tus vínculos"
          share={shareText(
            name,
            layerLabel,
            reading.value,
            "En tus vínculos",
            reading.inRelationships,
          )}
          card={numberCard(
            name,
            layerLabel,
            reading.value,
            "En tus vínculos",
            reading.inRelationships,
          )}
          section={`${layerLabel}:vinculos`}
        >
          <p className="text-pretty text-sm leading-relaxed text-mist-300">
            {reading.inRelationships}
          </p>
        </ReadingBlock>
        <ReadingBlock
          label="Lo que otros ven"
          share={shareText(name, layerLabel, reading.value, "Lo que otros ven", reading.blindSpot)}
          card={numberCard(name, layerLabel, reading.value, "Lo que otros ven", reading.blindSpot)}
          section={`${layerLabel}:punto-ciego`}
          tone="glow"
        >
          <p className="text-pretty text-sm leading-relaxed text-mist-300">{reading.blindSpot}</p>
        </ReadingBlock>
      </div>

      <ReadingBlock
        label="Señal para esta semana"
        share={shareText(
          name,
          layerLabel,
          reading.value,
          "Señal para esta semana",
          reading.microPractice,
        )}
        card={numberCard(
          name,
          layerLabel,
          reading.value,
          "Señal para esta semana",
          reading.microPractice,
        )}
        section={`${layerLabel}:practica`}
        tone="accent"
      >
        <p className="text-pretty text-base leading-relaxed text-mist-100">
          {reading.microPractice}
        </p>
      </ReadingBlock>

      {children}
    </article>
  );
}

function ReadingBlock({
  label,
  share,
  card,
  section,
  tone = "neutral",
  children,
}: {
  label: string;
  share: string;
  card: ShareCardData;
  section: string;
  tone?: "neutral" | "accent" | "glow";
  children: React.ReactNode;
}) {
  const frame =
    tone === "accent"
      ? "border-accent-500/25 border-l-4 border-l-accent-500 bg-accent-500/6"
      : tone === "glow"
        ? "border-glow-400/25 border-l-4 border-l-glow-400 bg-glow-400/6"
        : "border-ink-700/80 bg-ink-900/50";
  const labelClass = tone === "glow" ? "text-glow-300" : "text-accent-400";

  return (
    <section className={`rounded-xl border p-4 backdrop-blur-sm ${frame}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className={`pt-1 text-xs uppercase tracking-wider ${labelClass}`}>{label}</h3>
        <SectionShare section={section} text={share} card={card} />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
