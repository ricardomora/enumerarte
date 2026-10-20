"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { renderShareCard } from "@/lib/render-share-card";
import { type ShareCardData, shareCaption } from "@/lib/share";
import { track } from "@/lib/track";

interface SectionShareProps {
  /** Texto de respaldo si esta parte no tiene tarjeta. */
  text: string;
  section: string;
  /** Ruta propia, como la del par. Si falta, se comparte el inicio. */
  path?: string;
  /** Imagen que se envía: números y una frase, no solo el enlace. */
  card?: ShareCardData;
}

export function SectionShare({ text, section, path, card }: SectionShareProps) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [preview, setPreview] = useState("");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const url = `${origin || "https://enumerarte.com"}${path ?? ""}`;
  const caption = card ? shareCaption(card, url) : text;
  const cardKey = card
    ? `${card.kicker}|${card.message}|${card.detail ?? ""}|${card.left.value}|${card.left.label}|${card.right?.value ?? ""}|${card.right?.label ?? ""}`
    : "";
  const cardRef = useRef(card);
  cardRef.current = card;

  useEffect(() => {
    const current = cardRef.current;
    if (!open || !current || cardKey.length === 0) return;
    let cancelled = false;
    let objectUrl = "";
    setBlob(null);
    setPreview("");
    setStatus(null);

    renderShareCard(current)
      .then((next) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(next);
        setBlob(next);
        setPreview(objectUrl);
      })
      .catch(() => {
        if (!cancelled) setStatus("No se pudo preparar la imagen.");
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [open, cardKey]);

  async function handleSend() {
    if (!blob) return;
    track("share_clicked", { channel: "imagen", section });
    const file = new File([blob], "enumerarte.png", { type: "image/png" });
    const payload: ShareData = { files: [file], text: caption, title: "Enumerarte" };

    try {
      if (navigator.canShare?.(payload)) {
        await navigator.share(payload);
        setStatus("Imagen lista. Desde ahí eliges WhatsApp, historia o TikTok.");
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }

    downloadBlob(blob);
    setStatus("Imagen guardada. Ábrela en WhatsApp, Instagram o TikTok.");
  }

  function handleSave() {
    if (!blob) return;
    track("share_clicked", { channel: "descarga", section });
    downloadBlob(blob);
    setStatus("Imagen guardada en tu dispositivo.");
  }

  async function handleCopy() {
    track("share_clicked", { channel: "enlace", section });
    try {
      await navigator.clipboard.writeText(caption);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Cerrar vista para compartir" : "Compartir"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid size-8 place-items-center rounded-lg border border-ink-600 bg-ink-900/70 text-mist-100 transition hover:border-accent-500/50 hover:bg-accent-500/10"
      >
        <ShareIcon />
      </button>

      {open && card
        ? createPortal(
            <div className="fixed inset-0 z-50 grid place-items-center p-4">
              <button
                type="button"
                aria-label="Cerrar"
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpen(false)}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="share-card-title"
                className="relative max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-2xl border border-ink-700 bg-ink-950 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 id="share-card-title" className="text-sm font-medium text-mist-100">
                    Así lo va a ver
                  </h2>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="grid size-8 place-items-center text-mist-300"
                    aria-label="Cerrar"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="mt-3 overflow-hidden rounded-xl border border-ink-700 bg-[#07060f]">
                  {preview ? (
                    <div
                      role="img"
                      aria-label={card.kicker}
                      className="mx-auto h-[52vh] max-w-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url("${preview}")` }}
                    />
                  ) : (
                    <p className="px-4 py-16 text-center text-sm text-mist-500">
                      Preparando la imagen…
                    </p>
                  )}
                </div>

                <p className="mt-3 text-center text-xs leading-relaxed text-mist-500">
                  Se envía la imagen, con los números y el mensaje. El enlace para abrirla va en el
                  texto cuando el sitio está publicado.
                </p>

                <div className="mt-4 space-y-2">
                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={!blob}
                    className="w-full rounded-xl bg-[#f5a524] px-4 py-3 text-sm font-medium text-[#1a1206] transition hover:bg-[#f8d48a] disabled:opacity-50"
                  >
                    Enviar imagen
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={!blob}
                    className="w-full rounded-xl border border-ink-600 px-4 py-3 text-sm text-mist-100 transition hover:border-ink-500 disabled:opacity-50"
                  >
                    Guardar imagen
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full py-2 text-sm text-mist-500 transition hover:text-mist-300"
                  >
                    {copied ? "Copiado" : "Copiar texto"}
                  </button>
                </div>

                {status ? <p className="mt-2 text-center text-xs text-mist-300">{status}</p> : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function downloadBlob(blob: Blob) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = "enumerarte.png";
  link.click();
  URL.revokeObjectURL(objectUrl);
}

function ShareIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none">
      <title>Compartir</title>
      <path d="M10 3.5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6.5 6.5 10 3l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 10.5v4.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none">
      <title>Cerrar</title>
      <path d="m6 6 8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
