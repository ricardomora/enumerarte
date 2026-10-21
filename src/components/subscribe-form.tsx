"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useUi } from "@/components/locale-provider";
import { legalIdentity } from "@/content/legal";
import { getVisitorId, trackOnce } from "@/lib/track";

export function SubscribeForm() {
  const ui = useUi();
  const inputId = useId();
  const consentId = useId();
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "consent">("idle");

  async function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (status === "sending") return;
    if (!accepted) {
      setStatus("consent");
      return;
    }
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          intent: "subscribe",
          visitorId: getVisitorId(),
          consent: true,
          policyVersion: legalIdentity.policyVersion,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      trackOnce("subscribed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <p className="pt-[60px] text-sm leading-relaxed text-mist-100">{ui.subscribeDone}</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 space-y-2 pt-[60px] text-left"
      noValidate
    >
      <div className="flex w-full min-w-0 gap-2">
        <label htmlFor={inputId} className="sr-only">
          {ui.subscribeTitle}
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          placeholder={ui.subscribePlaceholder}
          autoComplete="email"
          className="w-full min-w-0 flex-1 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-xl bg-[#f5a524] px-5 py-3 text-sm font-medium text-[#1a1206] transition hover:bg-[#f8d48a] disabled:opacity-60"
        >
          {status === "sending" ? ui.subscribeSending : ui.subscribeSubmit}
        </button>
      </div>
      <label
        htmlFor={consentId}
        className="flex items-start gap-2 text-xs leading-relaxed text-mist-500"
      >
        <input
          id={consentId}
          type="checkbox"
          checked={accepted}
          onChange={(inputEvent) => {
            setAccepted(inputEvent.target.checked);
            if (inputEvent.target.checked) setStatus("idle");
          }}
          className="mt-0.5 size-3.5 shrink-0 accent-[#f5a524]"
        />
        <span>
          {ui.subscribeConsentLead}{" "}
          <Link
            href="/privacidad"
            className="text-mist-300 underline decoration-ink-600 underline-offset-2"
          >
            {ui.subscribeConsentLink}
          </Link>
          .
        </span>
      </label>
      {status === "consent" ? (
        <p role="alert" className="text-sm text-glow-300">
          {ui.subscribeConsentMissing}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-glow-300">
          {ui.subscribeError}
        </p>
      ) : null}
    </form>
  );
}
