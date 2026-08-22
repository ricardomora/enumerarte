"use client";

import { useEffect, useId, useState } from "react";
import {
  isFutureDate,
  parseDateInput,
  toDateInputValue,
  todayCalendarDate,
} from "@/lib/date-input";
import { type CalendarDate, isValidDate } from "@/lib/numerology";

export interface PersonInput {
  name: string;
  birthDate: CalendarDate;
}

interface PersonFormProps {
  title: string;
  hint?: string;
  namePlaceholder: string;
  nameLabel?: string;
  requireFullName?: boolean;
  submitLabel: string;
  onSubmit: (person: PersonInput) => void;
}

export function PersonForm({
  title,
  hint,
  namePlaceholder,
  nameLabel = "Nombre",
  requireFullName = false,
  submitLabel,
  onSubmit,
}: PersonFormProps) {
  const nameId = useId();
  const dateId = useId();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  // El tope del selector se fija tras montar, nunca durante el renderizado.
  // Esta página se prerenderiza, así que calcular "hoy" en el servidor lo
  // congelaría en la fecha del build y rompería la hidratación al día siguiente.
  const [maxDate, setMaxDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    setMaxDate(toDateInputValue(todayCalendarDate()));
  }, []);

  function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();

    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Escribe al menos un nombre.");
      return;
    }

    if (requireFullName) {
      const parts = trimmed.split(/\s+/).filter((part) => part.length >= 2);
      if (parts.length < 2) {
        setError("Escribe nombre y apellidos, como en tu documento.");
        return;
      }
    }

    const parsed = parseDateInput(date);
    if (!parsed || !isValidDate(parsed)) {
      setError("Revisa la fecha: no parece un día real.");
      return;
    }

    // El atributo `max` es solo una ayuda del selector y se puede saltar
    // escribiendo la fecha a mano, así que el rechazo real ocurre aquí.
    if (isFutureDate(parsed)) {
      setError("Esa fecha está en el futuro.");
      return;
    }

    setError(null);
    onSubmit({ name: trimmed, birthDate: parsed });
  }

  return (
    <form onSubmit={handleSubmit} className="animate-rise space-y-5" noValidate>
      <div className="space-y-1.5">
        <h2 className="text-balance text-xl font-medium text-mist-100 sm:text-2xl">{title}</h2>
        {hint ? <p className="text-sm text-mist-500">{hint}</p> : null}
      </div>

      <div className="space-y-3">
        <div className="space-y-1.5">
          <label htmlFor={nameId} className="block text-xs uppercase tracking-wider text-mist-500">
            {nameLabel}
          </label>
          <input
            id={nameId}
            type="text"
            value={name}
            onChange={(inputEvent) => setName(inputEvent.target.value)}
            placeholder={namePlaceholder}
            autoComplete="off"
            className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor={dateId} className="block text-xs uppercase tracking-wider text-mist-500">
            Fecha de nacimiento
          </label>
          <input
            id={dateId}
            type="date"
            value={date}
            max={maxDate}
            min="1900-01-01"
            onChange={(inputEvent) => setDate(inputEvent.target.value)}
            className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-mist-100 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
          />
        </div>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-glow-300">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white transition hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 active:scale-[0.99]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
