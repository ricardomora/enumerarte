"use client";

import { useId, useState } from "react";
import { contactCopy } from "@/content/contact";
import { getVisitorId, track } from "@/lib/track";

export function SubscribeForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, intent: "subscribe", visitorId: getVisitorId() }),
      });
      if (!response.ok) throw new Error(String(response.status));
      track("subscribed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="pt-[60px] text-sm leading-relaxed text-mist-100">{contactCopy.subscribeDone}</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 space-y-2 pt-[60px] text-left"
      noValidate
    >
      <div className="flex w-full min-w-0 gap-2">
        <label htmlFor={inputId} className="sr-only">
          {contactCopy.subscribeTitle}
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(inputEvent) => setEmail(inputEvent.target.value)}
          placeholder={contactCopy.subscribePlaceholder}
          autoComplete="email"
          className="w-full min-w-0 flex-1 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-xl bg-[#f5a524] px-5 py-3 text-sm font-medium text-[#1a1206] transition hover:bg-[#f8d48a] disabled:opacity-60"
        >
          {status === "sending" ? contactCopy.subscribeSending : contactCopy.subscribeSubmit}
        </button>
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-glow-300">
          {contactCopy.subscribeError}
        </p>
      ) : null}
    </form>
  );
}
