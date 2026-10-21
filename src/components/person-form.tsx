"use client";

import { useEffect, useId, useState } from "react";
import { useUi } from "@/components/locale-provider";
import { isFutureDate, todayCalendarDate } from "@/lib/date-input";
import { type CalendarDate, isValidDate } from "@/lib/numerology";
import { track } from "@/lib/track";

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
  initial?: PersonInput;
  onSubmit: (person: PersonInput) => void;
}

const FIRST_YEAR = 1900;

const fieldClass =
  "w-full rounded-xl border border-ink-700 bg-ink-900 px-3 py-3 text-sm text-mist-100 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25";

export function PersonForm({
  title,
  hint,
  namePlaceholder,
  nameLabel = "Nombre",
  requireFullName = false,
  submitLabel,
  initial,
  onSubmit,
}: PersonFormProps) {
  const ui = useUi();
  const dayId = useId();
  const monthId = useId();
  const yearId = useId();
  const nameId = useId();
  const [name, setName] = useState(initial?.name ?? "");
  const [day, setDay] = useState(initial ? String(initial.birthDate.day) : "");
  const [month, setMonth] = useState(initial ? String(initial.birthDate.month) : "");
  const [year, setYear] = useState(initial ? String(initial.birthDate.year) : "");
  const [error, setError] = useState<string | null>(null);

  // El último año se fija tras montar. Calcular "hoy" en el servidor lo
  // congelaría en la fecha del build.
  const [maxYear, setMaxYear] = useState<number | null>(null);
  useEffect(() => {
    setMaxYear(todayCalendarDate().year);
  }, []);

  const years = maxYear
    ? Array.from({ length: maxYear - FIRST_YEAR + 1 }, (_, index) => maxYear - index)
    : [];

  function handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();

    if (!day || !month || !year) {
      reject("missing_date", ui.missingDate);
      return;
    }

    const birthDate = { day: Number(day), month: Number(month), year: Number(year) };
    if (!isValidDate(birthDate)) {
      reject("invalid_date", ui.invalidDate);
      return;
    }

    if (isFutureDate(birthDate)) {
      reject("future_date", ui.futureDate);
      return;
    }

    const trimmed = name.trim();
    if (trimmed.length < 2) {
      reject("short_name", ui.shortName);
      return;
    }

    if (requireFullName) {
      const parts = trimmed.split(/\s+/).filter((part) => part.length >= 2);
      if (parts.length < 2) {
        reject("incomplete_name", ui.incompleteName);
        return;
      }
    }

    setError(null);
    onSubmit({ name: trimmed, birthDate });
  }

  function reject(reason: string, message: string) {
    track("form_rejected", { step: "self", reason });
    setError(message);
  }

  return (
    <form onSubmit={handleSubmit} className="animate-rise space-y-5" noValidate>
      <div className="space-y-1.5">
        <h2 className="text-balance text-xl font-medium text-mist-100 sm:text-2xl">{title}</h2>
        {hint ? <p className="text-sm text-mist-500">{hint}</p> : null}
      </div>

      <fieldset className="space-y-1.5">
        <legend className="text-xs uppercase tracking-wider text-mist-500">{ui.birthDate}</legend>
        <div className="grid grid-cols-3 gap-2">
          <select
            id={dayId}
            aria-label={ui.day}
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className={fieldClass}
          >
            <option value="">{ui.day}</option>
            {Array.from({ length: 31 }, (_, index) => index + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            id={monthId}
            aria-label={ui.month}
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className={fieldClass}
          >
            <option value="">{ui.month}</option>
            {ui.months.map((label, index) => (
              <option key={label} value={index + 1}>
                {label}
              </option>
            ))}
          </select>
          <select
            id={yearId}
            aria-label={ui.year}
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className={fieldClass}
          >
            <option value="">{ui.year}</option>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

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
          autoComplete="name"
          className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
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
