"use client";

import Link from "next/link";
import { BackHome } from "@/components/back-home";
import { useLocale, useUi } from "@/components/locale-provider";
import { NumberGlyph } from "@/components/number-glyph";
import { SiteFooter } from "@/components/site-footer";
import { getDestiny, getMission, getPair, getShield, getSoul } from "@/content";
import type { AspectReading } from "@/content/types";
import { ALL_VALUES, type NumerologyValue } from "@/lib/numerology";
import { buildPairPath } from "@/lib/share";

export function NumberLanding({ value }: { value: NumerologyValue }) {
  const { locale } = useLocale();
  const ui = useUi();
  const mission = getMission(value, locale);
  const layers = [
    { id: "nucleo", reading: mission },
    { id: "escudo", reading: getShield(value, locale) },
    { id: "alma", reading: getSoul(value, locale) },
    { id: "destino", reading: getDestiny(value, locale) },
  ] as const;

  return (
    <main className="grain mx-auto w-full max-w-2xl px-5 py-14 sm:py-20">
      <BackHome />
      <header className="space-y-4 text-center">
        <NumberGlyph value={value} label={ui.layers.nucleo.title} />
        <h1 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
          {mission.title}
        </h1>
        <p className="text-pretty text-mist-300">{mission.essence}</p>
      </header>

      <div className="mt-10 space-y-8">
        {layers.map((layer) => (
          <AspectBlock key={layer.id} kicker={ui.layers[layer.id].title} reading={layer.reading} />
        ))}
      </div>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-medium text-mist-100">{ui.numberConnections}</h2>
        <ul className="space-y-2">
          {ALL_VALUES.map((other) => {
            const pair = getPair(value, other, locale);
            return (
              <li key={other}>
                <Link
                  href={buildPairPath(value, other)}
                  className="block rounded-xl border border-ink-700 bg-ink-900/40 px-4 py-3 text-sm transition hover:border-accent-500/50"
                >
                  <span className="font-mono text-accent-400">{other}</span>
                  <span className="mt-1 block text-mist-100">{pair.headline}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-center">
        <h2 className="text-lg font-medium text-mist-100">{ui.yourMapTitle}</h2>
        <p className="text-sm text-mist-500">{ui.yourMapBody}</p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-accent-500 px-6 py-3.5 font-medium text-white transition hover:bg-accent-400"
        >
          {ui.reveal}
        </Link>
      </section>

      <SiteFooter className="mt-12" note="pair" />
    </main>
  );
}

function AspectBlock({ kicker, reading }: { kicker: string; reading: AspectReading }) {
  const ui = useUi();

  return (
    <article className="space-y-4 rounded-2xl border border-ink-700 bg-ink-900/40 p-6 sm:p-8">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">{kicker}</p>
        <h2 className="text-balance text-xl font-medium text-mist-100">{reading.title}</h2>
        <p className="text-pretty text-mist-300">{reading.essence}</p>
      </header>
      <Field label={ui.howYouMove} text={reading.body} />
      <ListField label={ui.whatYouBring} items={reading.strengths} />
      <ListField label={ui.whereYouGrow} items={reading.frictions} />
      <Field label={ui.underPressure} text={reading.underPressure} />
      <Field label={ui.inBonds} text={reading.inRelationships} />
      <Field label={ui.whatOthersSee} text={reading.blindSpot} />
      <Field label={ui.weekly} text={reading.microPractice} />
    </article>
  );
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div className="space-y-1">
      <h3 className="text-xs uppercase tracking-wider text-accent-400">{label}</h3>
      <p className="text-pretty leading-relaxed text-mist-100">{text}</p>
    </div>
  );
}

function ListField({ label, items }: { label: string; items: readonly [string, string, string] }) {
  return (
    <div className="space-y-1">
      <h3 className="text-xs uppercase tracking-wider text-accent-400">{label}</h3>
      <ul className="list-disc space-y-1 pl-5 text-pretty leading-relaxed text-mist-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
