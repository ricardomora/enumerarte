"use client";

import { useState } from "react";
import { NumberGlyph } from "@/components/number-glyph";
import type { NumerologyValue } from "@/lib/numerology";

interface ShareableMomentProps {
  layerLabel: string;
  value: NumerologyValue;
  title: string;
  essence: string;
  name: string;
}

export function ShareableMoment({ layerLabel, value, title, essence, name }: ShareableMomentProps) {
  const [copied, setCopied] = useState(false);
  const displayName = name.trim().split(/\s+/)[0];

  const shareText = `${displayName} · ${layerLabel} ${value}\n"${essence}"\n— enumerarte.com`;

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text: shareText, title: "Mi lectura · Enumerarte" });
        return;
      } catch {
        // Usuario canceló o share no disponible; cae a copiar.
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-mist-500">
        Tu momento · listo para compartir
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-ink-600 bg-linear-to-br from-ink-900 via-ink-800 to-ink-950 p-6 shadow-[inset_0_1px_0_rgba(244,242,255,0.06)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-accent-500/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -left-6 size-24 rounded-full bg-glow-400/10 blur-2xl"
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-wider text-accent-400">
              {layerLabel}
            </p>
            <p className="text-sm text-mist-500">{displayName}</p>
          </div>
          <NumberGlyph value={value} size="sm" />
        </div>

        <p className="relative mt-5 text-lg font-medium leading-snug text-mist-100">{title}</p>
        <blockquote className="relative mt-3 border-l-2 border-glow-400/50 pl-4 text-pretty text-base italic leading-relaxed text-mist-300">
          {essence}
        </blockquote>

        <p className="relative mt-5 text-right font-mono text-xs text-mist-500">enumerarte.com</p>
      </div>

      <button
        type="button"
        onClick={handleShare}
        className="w-full rounded-xl border border-ink-600 bg-ink-900/60 px-5 py-3 text-sm font-medium text-mist-100 transition hover:border-accent-500/40 hover:bg-accent-500/10"
      >
        {copied ? "Copiado al portapapeles" : "Compartir esta capa"}
      </button>
    </div>
  );
}
