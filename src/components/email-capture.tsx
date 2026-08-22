"use client";

import { useId, useState } from "react";
import type { NumerologyValue } from "@/lib/numerology";
import { getVisitorId, track } from "@/lib/track";

type Status = "idle" | "sending" | "done" | "error";

export function EmailCapture({ mision }: { mision: NumerologyValue }) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mision, visitorId: getVisitorId() }),
      });
      if (!response.ok) throw new Error(String(response.status));
      track("email_captured", { mision });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-accent-500/30 bg-accent-500/8 p-5 text-center">
        <p className="text-mist-100">
          Guardado. Te escribimos cuando puedas mapear a todo tu círculo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <label htmlFor={inputId} className="block text-sm text-mist-300">
        Guarda esta lectura y recibe la de tu círculo cuando esté lista.
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          placeholder="tu@correo.com"
          autoComplete="email"
          className="min-w-0 flex-1 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl border border-accent-500/50 bg-accent-500/15 px-5 py-3 font-medium text-mist-100 transition hover:bg-accent-500/25 disabled:opacity-60"
        >
          {status === "sending" ? "Guardando" : "Guardar"}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-glow-300">
          No se pudo guardar. Revisa el correo e intenta de nuevo.
        </p>
      ) : null}
      <p className="text-xs text-mist-500">
        Solo guardamos tu correo y tu número. Nada más, y puedes pedir que lo borremos.
      </p>
    </form>
  );
}
