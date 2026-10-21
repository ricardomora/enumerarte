"use client";

import { useEffect, useState } from "react";
import { track, trackOnce } from "@/lib/track";

/**
 * Puerta falsa de premium único.
 *
 * Una sola oferta clara: lo relacional en el tiempo (más personas, alertas,
 * consejos). El clic no cobra nada; mide interés mientras la capa premium se
 * construye.
 */

const PREMIUM_FEATURES = [
  "Más de dos personas en tu círculo",
  "Alertas cuando alguien cercano entra en un ciclo difícil",
  "Consejo semanal para ti y para tratar a cada vínculo",
  "Calendario de días favorables",
] as const;

export function PriceGate({ compact = false }: { compact?: boolean }) {
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
        <div className={`flex items-center gap-2 ${compact ? "" : "justify-center"}`}>
          <h3 className="text-balance text-lg font-medium text-mist-100">Enumerarte Premium</h3>
          <span className="rounded-full border border-glow-400/40 bg-glow-400/10 px-2.5 py-0.5 text-xs font-medium text-glow-300">
            En construcción
          </span>
        </div>
        <p className="text-sm text-mist-500">
          Lo relacional en el tiempo: tu círculo completo, avisos cruzados y consejos para la
          semana.
        </p>
      </div>

      <div className="rounded-xl border border-accent-500/50 bg-accent-500/8 p-5">
        <ul className="space-y-2.5 text-sm text-mist-300">
          {PREMIUM_FEATURES.map((feature) => (
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
          Avísame cuando esté listo
        </button>
      </div>

      {clicked ? (
        <p role="status" className="animate-rise text-center text-sm text-mist-300">
          Todavía lo estamos construyendo. Deja tu correo arriba y serás de los primeros en
          probarlo.
        </p>
      ) : null}
    </section>
  );
}
