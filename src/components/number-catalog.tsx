"use client";

import Link from "next/link";
import { useLocale, useUi } from "@/components/locale-provider";
import { getMission } from "@/content";
import { ALL_VALUES } from "@/lib/numerology";
import { numberPath } from "@/lib/share";

/** Las doce lecturas, en el HTML de la portada, para quien no llena el formulario. */
export function NumberCatalog() {
  const { locale } = useLocale();
  const ui = useUi();

  return (
    <section id="caminos" className="mt-10 space-y-4">
      <h2 className="text-balance text-xl font-medium text-mist-100">{ui.pathsTitle}</h2>
      <p className="text-pretty text-sm leading-relaxed text-mist-300">{ui.pathsLead}</p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ALL_VALUES.map((value) => {
          const mission = getMission(value, locale);
          return (
            <li key={value}>
              <Link
                href={numberPath(value)}
                className="block h-full rounded-xl border border-ink-700 bg-ink-900/40 p-4 transition hover:border-accent-500/50"
              >
                <span className="font-mono text-sm text-accent-400">{value}</span>
                <span className="mt-1 block text-sm font-medium text-mist-100">
                  {mission.title}
                </span>
                <span className="mt-1 block text-pretty text-sm leading-relaxed text-mist-500">
                  {mission.essence}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
