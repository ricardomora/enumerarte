"use client";

import { useState } from "react";
import { useUi } from "@/components/locale-provider";
import { NumberGlyph } from "@/components/number-glyph";
import type { LayerTone } from "@/components/profile-layers";
import { SectionShare } from "@/components/section-share";
import type { AspectReading } from "@/content/types";
import type { NumerologyValue } from "@/lib/numerology";
import type { ShareCardData } from "@/lib/share";

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
  someone: string,
  name: string,
  layerLabel: string,
  value: NumerologyValue,
  heading: string,
  body: string,
): string {
  const who = name.trim().split(/\s+/)[0] || someone;
  return `${who} · ${layerLabel} ${value}\n${heading}\n${body}`;
}

function numberCard(
  someone: string,
  sharesLayer: (who: string, layer: string) => string,
  name: string,
  layerLabel: string,
  value: NumerologyValue,
  heading: string,
  body: string,
): ShareCardData {
  const who = name.trim().split(/\s+/)[0] || someone;
  return {
    kicker: sharesLayer(who, layerLabel),
    message: heading,
    detail: body,
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
  const ui = useUi();
  const [moreOpen, setMoreOpen] = useState(false);
  const text = (heading: string, body: string) =>
    shareText(ui.someone, name, layerLabel, reading.value, heading, body);
  const card = (heading: string, body: string) =>
    numberCard(ui.someone, ui.sharesLayer, name, layerLabel, reading.value, heading, body);

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
        label={ui.howYouMove}
        share={text(ui.howYouMove, reading.body)}
        card={card(ui.howYouMove, reading.body)}
        section={`${layerLabel}:cuerpo`}
        accent={tone.hex}
      >
        <p className="text-pretty text-base leading-relaxed text-mist-100">{reading.body}</p>
      </ReadingBlock>

      <div className="grid gap-3 sm:grid-cols-2">
        <ReadingBlock
          label={ui.whatYouBring}
          share={text(ui.whatYouBring, reading.strengths.join("\n"))}
          card={card(ui.whatYouBring, reading.strengths.join("\n"))}
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
          label={ui.whereYouGrow}
          share={text(ui.whereYouGrow, reading.frictions.join("\n"))}
          card={card(ui.whereYouGrow, reading.frictions.join("\n"))}
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
        <button
          type="button"
          aria-expanded={moreOpen}
          onClick={() => setMoreOpen((open) => !open)}
          className="w-full rounded-xl border border-ink-700 bg-ink-900/50 px-4 py-3 text-left text-sm leading-relaxed text-mist-100 transition hover:border-[#f5a524]/50 hover:text-[#f8d48a]"
        >
          {moreOpen ? ui.moreOpen : ui.moreClosed}
        </button>
        {moreOpen ? (
          <div className="space-y-3">
            <ReadingBlock
              label={ui.underPressure}
              share={text(ui.underPressure, reading.underPressure)}
              card={card(ui.underPressure, reading.underPressure)}
              section={`${layerLabel}:presion`}
              accent={tone.hex}
            >
              <p className="text-pretty text-sm leading-relaxed text-mist-300">
                {reading.underPressure}
              </p>
            </ReadingBlock>
            <ReadingBlock
              label={ui.inBonds}
              share={text(ui.inBonds, reading.inRelationships)}
              card={card(ui.inBonds, reading.inRelationships)}
              section={`${layerLabel}:vinculos`}
              accent={tone.hex}
            >
              <p className="text-pretty text-sm leading-relaxed text-mist-300">
                {reading.inRelationships}
              </p>
            </ReadingBlock>
            <ReadingBlock
              label={ui.whatOthersSee}
              share={text(ui.whatOthersSee, reading.blindSpot)}
              card={card(ui.whatOthersSee, reading.blindSpot)}
              section={`${layerLabel}:punto-ciego`}
              accent={tone.hex}
            >
              <p className="text-pretty text-sm leading-relaxed text-mist-300">
                {reading.blindSpot}
              </p>
            </ReadingBlock>
            <ReadingBlock
              label={ui.weekly}
              share={text(ui.weekly, reading.microPractice)}
              card={card(ui.weekly, reading.microPractice)}
              section={`${layerLabel}:practica`}
              accent={tone.hex}
            >
              <p className="text-pretty text-base leading-relaxed text-mist-100">
                {reading.microPractice}
              </p>
            </ReadingBlock>
          </div>
        ) : null}
      </div>

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
        <h3 className="min-w-0 pt-1 text-xs uppercase tracking-wider" style={{ color: accent }}>
          {label}
        </h3>
        <SectionShare section={section} text={share} card={card} />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
