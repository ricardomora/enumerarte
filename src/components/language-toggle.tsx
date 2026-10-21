"use client";

import { useLocale, useUi } from "@/components/locale-provider";
import type { Locale } from "@/content/types";

const OPTIONS: readonly { locale: Locale; label: string }[] = [
  { locale: "es", label: "ES" },
  { locale: "en", label: "EN" },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const ui = useUi();

  return (
    <fieldset className="m-0 inline-flex min-w-0 rounded-full border border-ink-700 bg-ink-950/90 p-0.5 text-xs font-medium backdrop-blur-sm">
      <legend className="sr-only">{ui.languageLabel}</legend>
      {OPTIONS.map((option) => {
        const selected = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            aria-pressed={selected}
            onClick={() => setLocale(option.locale)}
            className={`rounded-full px-2.5 py-1 transition ${
              selected ? "bg-[#f5a524] text-[#1a1206]" : "text-mist-300 hover:text-mist-100"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </fieldset>
  );
}
