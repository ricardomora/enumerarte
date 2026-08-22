"use client";

import { useState } from "react";
import { track } from "@/lib/track";

/**
 * Puerta falsa de precio.
 *
 * Mide disposición a pagar antes de construir la capa premium. El clic no cobra
 * nada y el mensaje posterior dice la verdad: todavía no existe. Simular un
 * cobro real sería engañoso y además arruinaría la señal, porque el abandono
 * en el checkout no distinguiría desinterés de desconfianza.
 */

const TIERS = [
  { id: "mensual", price: "3,99", period: "al mes", note: "Cancelas cuando quieras" },
  { id: "anual", price: "24", period: "al año", note: "Equivale a 2 al mes", featured: true },
  { id: "unico", price: "39", period: "pago único", note: "Acceso permanente" },
] as const;

export function PriceGate() {
  const [clicked, setClicked] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      <div className="space-y-1 text-center">
        <h3 className="text-balance text-lg font-medium text-mist-100">
          Mapea a todo tu círculo, no solo a una persona
        </h3>
        <p className="text-sm text-mist-500">
          Vínculos ilimitados, calendario de días favorables y avisos cuando alguien cercano entra
          en un ciclo difícil.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <button
            key={tier.id}
            type="button"
            onClick={() => {
              track("price_clicked", { tier: tier.id, price: tier.price });
              setClicked(tier.id);
            }}
            className={`rounded-xl border p-4 text-left transition ${
              "featured" in tier && tier.featured
                ? "border-accent-500/60 bg-accent-500/10 hover:bg-accent-500/20"
                : "border-ink-700 bg-ink-900/60 hover:border-ink-600"
            }`}
          >
            <p className="font-mono text-2xl text-mist-100">
              ${tier.price}
              <span className="ml-1 text-xs text-mist-500">{tier.period}</span>
            </p>
            <p className="mt-1 text-xs text-mist-500">{tier.note}</p>
          </button>
        ))}
      </div>

      {clicked ? (
        <p role="status" className="animate-rise text-center text-sm text-mist-300">
          Todavía no está listo, y preferimos decírtelo a cobrarte por algo que no existe. Deja tu
          correo arriba y serás de los primeros.
        </p>
      ) : null}
    </section>
  );
}
