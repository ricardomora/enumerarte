"use client";

import { NumberGlyph } from "@/components/number-glyph";
import type { LayerTone } from "@/components/profile-layers";
import { SectionShare } from "@/components/section-share";
import type { AspectReading } from "@/content/types";
import type { NumerologyValue } from "@/lib/numerology";
import { clipShareLine, type ShareCardData } from "@/lib/share";

interface AspectStoryProps {
  reading: AspectReading;
  layerLabel: string;
  layerSubtitle?: string;
  name: string;
  tone: LayerTone;
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
  tone,
  afterHeader,
  children,
}: AspectStoryProps) {
  return (
    <article key={tone.hex} className="animate-rise space-y-8">
      <header className="space-y-5 text-center">
        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: tone.hex }}>
            {layerLabel}
          </p>
          {layerSubtitle ? <p className="text-xs text-mist-500">{layerSubtitle}</p> : null}
        </div>
        <NumberGlyph value={reading.value} color={tone.hex} />
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
        accent={tone.hex}
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
          accent={tone.hex}
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
          accent={tone.hex}
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
          accent={tone.hex}
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
          accent={tone.hex}
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
          accent={tone.hex}
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
        accent={tone.hex}
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
  accent,
  children,
}: {
  label: string;
  share: string;
  card: ShareCardData;
  section: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rounded-xl border border-l-4 bg-ink-900/50 p-4 backdrop-blur-sm transition duration-300"
      style={{
        borderColor: `${accent}33`,
        borderLeftColor: accent,
        backgroundColor: `${accent}10`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="pt-1 text-xs uppercase tracking-wider" style={{ color: accent }}>
          {label}
        </h3>
        <SectionShare section={section} text={share} card={card} />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
