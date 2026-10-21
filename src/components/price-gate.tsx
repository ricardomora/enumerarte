"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/locale-provider";
import { track, trackOnce } from "@/lib/track";

/**
 * Aviso de la oferta que todavía no se vende.
 *
 * El clic no cobra. El texto no promete un calendario ni un ciclo futuro.
 */

export function PriceGate({ compact = false }: { compact?: boolean }) {
  const ui = useUi();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    trackOnce("price_shown", { tier: "premium" });
  }, []);

  function handleClick() {
    track("price_clicked", { tier: "premium" });
    setClicked(true);
  }

  return (
    <section className="space-y-4">
      <div className={`space-y-1 ${compact ? "text-left" : "text-center"}`}>
        <h3 className="text-balance text-lg font-medium text-mist-100">{ui.premiumTitle}</h3>
        <p className="text-sm text-mist-500">{ui.premiumLead}</p>
      </div>

      <div className="rounded-xl border border-accent-500/50 bg-accent-500/8 p-5">
        <ul className="space-y-2.5 text-sm text-mist-300">
          {ui.premiumFeatures.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden className="text-accent-400">
                ·
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleClick}
          className="mt-5 w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white transition hover:bg-accent-400 active:scale-[0.99]"
        >
          {ui.premiumAction}
        </button>
      </div>

      {clicked ? (
        <p role="status" className="animate-rise text-center text-sm text-mist-300">
          {ui.premiumConfirm}
        </p>
      ) : null}
    </section>
  );
}
