"use client";

import Link from "next/link";
import { useLocale, useUi } from "@/components/locale-provider";
import { NumberGlyph } from "@/components/number-glyph";
import { ShareArrival, ShareContinueLink } from "@/components/share-arrival";
import { SiteFooter } from "@/components/site-footer";
import { bondFrame, getMission, getPair } from "@/content";
import { type NumerologyValue, RELATIONSHIP_TYPES } from "@/lib/numerology";
import { numberPath } from "@/lib/share";

export function PairLanding({
  a,
  b,
  canonical,
  nameA,
  nameB,
}: {
  a: NumerologyValue;
  b: NumerologyValue;
  canonical: string;
  nameA: string;
  nameB: string;
}) {
  const { locale } = useLocale();
  const ui = useUi();
  const content = getPair(a, b, locale);
  const missionA = getMission(a, locale);
  const missionB = getMission(b, locale);

  return (
    <main className="grain mx-auto w-full max-w-2xl px-5 py-14 sm:py-20">
      <ShareArrival pair={canonical} />

      <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
        Enumerarte
      </p>

      <article className="mt-10 space-y-6 rounded-2xl border border-ink-700 bg-ink-900/40 p-6 sm:p-8">
        <header className="space-y-5">
          <div className="flex items-center justify-center gap-4">
            <NumberGlyph value={a} size="sm" label={nameA || missionA.title} />
            <span aria-hidden className="text-ink-600">
              ·
            </span>
            <NumberGlyph value={b} size="sm" label={nameB || missionB.title} />
          </div>
          <h1 className="text-balance text-center text-2xl font-medium text-mist-100 sm:text-3xl">
            {content.headline}
          </h1>
        </header>

        <p className="text-pretty leading-relaxed text-mist-300">{content.body}</p>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-wider text-accent-400">{ui.whoTheyAre}</h2>
          {[
            { id: "a", value: a, mission: missionA },
            { id: "b", value: b, mission: missionB },
          ].map((side) => (
            <div key={side.id} className="space-y-2">
              <Link
                href={numberPath(side.value)}
                className="text-sm font-medium text-mist-100 underline decoration-ink-600 underline-offset-4"
              >
                {side.value} · {side.mission.title}
              </Link>
              <p className="text-pretty text-sm leading-relaxed text-mist-300">
                {side.mission.essence}
              </p>
              <p className="text-pretty leading-relaxed text-mist-100">{side.mission.body}</p>
            </div>
          ))}
        </section>

        {RELATIONSHIP_TYPES.map((relationship) => {
          const frame = bondFrame(locale)[relationship];
          return (
            <section key={relationship} className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-accent-400">{frame.title}</h2>
              <p className="text-pretty text-sm leading-relaxed text-mist-500">{frame.lead}</p>
              <p className="text-pretty leading-relaxed text-mist-100">
                {content.bonds[relationship]}
              </p>
            </section>
          );
        })}

        <div className="rounded-xl border border-accent-500/30 bg-accent-500/8 p-5">
          <p className="text-xs uppercase tracking-wider text-accent-400">{ui.practiceLabel}</p>
          <p className="mt-2 text-pretty leading-relaxed text-mist-100">{content.practice}</p>
        </div>
      </article>

      <section className="mt-8 space-y-4 text-center">
        <div className="space-y-1">
          <h2 className="text-balance text-lg font-medium text-mist-100">{ui.yourMapTitle}</h2>
          <p className="text-sm text-mist-500">{ui.yourMapBody}</p>
        </div>
        <ShareContinueLink className="inline-block rounded-xl bg-accent-500 px-6 py-3.5 font-medium text-white transition hover:bg-accent-400">
          {ui.reveal}
        </ShareContinueLink>
      </section>

      <SiteFooter className="mt-12" note="pair" />
    </main>
  );
}
