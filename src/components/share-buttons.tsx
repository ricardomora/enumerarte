"use client";

import { useEffect, useState } from "react";
import type { NumerologyValue } from "@/lib/numerology";
import { buildPairPath, shareMessage, shareTargets } from "@/lib/share";
import { track } from "@/lib/track";

interface ShareButtonsProps {
  a: NumerologyValue;
  b: NumerologyValue;
  selfName: string;
  otherName: string;
}

export function ShareButtons({ a, b, selfName, otherName }: ShareButtonsProps) {
  // El origen solo se conoce en el cliente, así que el enlace absoluto se
  // construye tras montar en lugar de adivinar el dominio en el servidor.
  const [origin, setOrigin] = useState("");
  const [copied, setCopied] = useState(false);
  const [canUseNativeShare, setCanUseNativeShare] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
    setCanUseNativeShare(typeof navigator.share === "function");
  }, []);

  const path = buildPairPath(a, b, { a: selfName, b: otherName });
  const url = origin ? `${origin}${path}` : "";
  const message = shareMessage(selfName, otherName);
  const ready = url.length > 0;

  async function handleNativeShare() {
    track("share_clicked", { channel: "nativo" });
    try {
      await navigator.share({ title: "Enumerarte", text: message, url });
    } catch {
      // El usuario canceló la hoja de compartir. No es un error que reportar.
    }
  }

  async function handleCopy() {
    track("share_clicked", { channel: "enlace" });
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="space-y-3">
      <p className="text-sm text-mist-300">
        Mándale esto a {otherName || "la otra persona"}. Verá la lectura de ustedes dos, no una
        pantalla de registro.
      </p>

      <div className="flex flex-wrap gap-2">
        {ready
          ? shareTargets(url, message).map((target) => (
              <a
                key={target.id}
                href={target.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("share_clicked", { channel: target.id })}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                  target.id === "whatsapp"
                    ? "border-accent-500/60 bg-accent-500/15 text-mist-100 hover:bg-accent-500/25"
                    : "border-ink-700 bg-ink-900/60 text-mist-300 hover:border-ink-600 hover:text-mist-100"
                }`}
              >
                {target.label}
              </a>
            ))
          : null}

        {canUseNativeShare ? (
          <button
            type="button"
            onClick={handleNativeShare}
            disabled={!ready}
            className="rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-2.5 text-sm font-medium text-mist-300 transition hover:border-ink-600 hover:text-mist-100 disabled:opacity-50"
          >
            Más opciones
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleCopy}
          disabled={!ready}
          className="rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-2.5 text-sm font-medium text-mist-300 transition hover:border-ink-600 hover:text-mist-100 disabled:opacity-50"
        >
          {copied ? "Copiado" : "Copiar enlace"}
        </button>
      </div>

      <p className="text-xs text-mist-500">
        El enlace lleva solo los dos números, nunca las fechas de nacimiento.
      </p>
    </section>
  );
}
