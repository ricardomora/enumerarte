"use client";

import { useId, useState } from "react";
import { CONTACT_EMAIL, contactCopy, WHATSAPP_DISPLAY } from "@/content/contact";
import { mailTo, whatsAppLink } from "@/lib/contact";
import { track } from "@/lib/track";

export function ContactSection() {
  const messageId = useId();
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  function handleFeedback(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    const comment = message.trim();
    if (comment.length < 2) {
      setError(contactCopy.feedbackEmpty);
      setOpened(false);
      return;
    }
    setError(null);
    setOpened(true);
    track("contact_clicked", { channel: "comentario" });
    window.location.href = mailTo(contactCopy.feedbackSubject, comment);
  }

  return (
    <section aria-labelledby="contact-title" className="mt-10 space-y-6">
      <div className="space-y-3 text-center">
        <h2 id="contact-title" className="text-lg font-medium text-mist-100">
          {contactCopy.title}
        </h2>
        <p className="mx-auto max-w-md text-pretty text-sm leading-relaxed text-mist-300">
          {contactCopy.body}
        </p>
        <a
          href={mailTo("Hola desde Enumerarte")}
          onClick={() => track("contact_clicked", { channel: "correo" })}
          className="inline-block text-sm font-medium text-[#f5a524] underline decoration-[#f5a524]/40 underline-offset-4"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {contactCopy.reasons.map((reason) => (
          <a
            key={reason.id}
            href={mailTo(reason.subject)}
            onClick={() => track("contact_clicked", { channel: "motivo", reason: reason.id })}
            className="rounded-full border border-ink-600 px-4 py-2 text-sm text-mist-100 transition hover:border-[#f5a524]/60 hover:text-[#f8d48a]"
          >
            {reason.label}
          </a>
        ))}
      </div>

      <form
        onSubmit={handleFeedback}
        className="space-y-3 rounded-2xl border border-ink-700 bg-ink-900/40 p-5"
        noValidate
      >
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-mist-100">{contactCopy.feedbackTitle}</h3>
          <p className="text-sm text-mist-500">{contactCopy.feedbackHint}</p>
        </div>
        <label htmlFor={messageId} className="sr-only">
          {contactCopy.feedbackTitle}
        </label>
        <textarea
          id={messageId}
          value={message}
          onChange={(inputEvent) => setMessage(inputEvent.target.value)}
          placeholder={contactCopy.feedbackPlaceholder}
          rows={4}
          className="w-full resize-y rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
        {error ? (
          <p role="alert" className="text-sm text-glow-300">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="w-full rounded-xl border border-[#f5a524]/50 bg-[#f5a524]/15 px-5 py-3 text-sm font-medium text-[#f8d48a] transition hover:bg-[#f5a524]/25"
        >
          {contactCopy.feedbackSubmit}
        </button>
        <p className="text-xs leading-relaxed text-mist-500">
          {opened ? contactCopy.feedbackOpened : contactCopy.feedbackNote}
        </p>
      </form>

      <div className="space-y-3 rounded-2xl border border-ink-700 bg-ink-900/40 p-5 text-center">
        <h3 className="text-sm font-medium text-mist-100">{contactCopy.whatsappTitle}</h3>
        <p className="text-sm text-mist-500">{contactCopy.whatsappBody}</p>
        <a
          href={whatsAppLink("Hola, escribo desde Enumerarte.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("contact_clicked", { channel: "whatsapp" })}
          className="inline-block text-sm font-medium text-[#f5a524]"
        >
          {WHATSAPP_DISPLAY}
        </a>
        <a
          href={whatsAppLink("Hola, escribo desde Enumerarte.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("contact_clicked", { channel: "whatsapp" })}
          className="block w-full rounded-xl border border-[#f5a524]/50 bg-[#f5a524]/15 px-5 py-3 text-sm font-medium text-[#f8d48a] transition hover:bg-[#f5a524]/25"
        >
          {contactCopy.whatsappAction}
        </a>
      </div>
    </section>
  );
}
