"use client";

import { useEffect, useId, useState } from "react";
import { isFutureDate, todayCalendarDate } from "@/lib/date-input";
import { type CalendarDate, isValidDate, type RelationshipType } from "@/lib/numerology";
import { track } from "@/lib/track";

export const RELATION_LABELS: Record<RelationshipType, string> = {
  pareja: "Pareja",
  familia: "Familia",
  amistad: "Amistad",
  trabajo: "Trabajo",
};

export interface LinkPersonInput {
  name: string;
  birthDate: CalendarDate;
  relationship: RelationshipType;
}

interface LinkPersonFormProps {
  submitLabel: string;
  initial?: LinkPersonInput;
  onSubmit: (person: LinkPersonInput) => void;
  /** Ya hay al menos una persona en el árbol. */
  addingAnother?: boolean;
}

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

const FIRST_YEAR = 1900;

const fieldClass =
  "h-11 min-w-0 rounded-xl border border-ink-700 bg-ink-900 px-3 text-sm text-mist-100 outline-none transition focus:border-[#f5a524] focus:ring-2 focus:ring-[#f5a524]/25";

export function LinkPersonForm({
  submitLabel,
  initial,
  onSubmit,
  addingAnother = false,
}: LinkPersonFormProps) {
  const dayId = useId();
  const monthId = useId();
  const yearId = useId();
  const nameId = useId();
  const relationId = useId();
  const [name, setName] = useState(initial?.name ?? "");
  const [relationship, setRelationship] = useState<RelationshipType | "">(
    initial?.relationship ?? "",
  );
  const [day, setDay] = useState(initial ? String(initial.birthDate.day) : "");
  const [month, setMonth] = useState(initial ? String(initial.birthDate.month) : "");
  const [year, setYear] = useState(initial ? String(initial.birthDate.year) : "");
  const [error, setError] = useState<string | null>(null);

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
      reject("missing_date", "Elige día, mes y año.");
      return;
    }

    const birthDate = { day: Number(day), month: Number(month), year: Number(year) };
    if (!isValidDate(birthDate)) {
      reject("invalid_date", "Revisa la fecha: no parece un día real.");
      return;
    }

    if (isFutureDate(birthDate)) {
      reject("future_date", "Esa fecha está en el futuro.");
      return;
    }

    if (!relationship) {
      reject("missing_relationship", "Elige qué es esta persona para ti.");
      return;
    }

    setError(null);
    onSubmit({ name: name.trim(), birthDate, relationship });
    setName("");
    setRelationship("");
    setDay("");
    setMonth("");
    setYear("");
  }

  function reject(reason: string, message: string) {
    track("form_rejected", { step: "link", reason });
    setError(message);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-3" noValidate>
      <h2 className="relative text-balance text-center text-lg font-medium leading-snug text-[#f5a524] sm:text-xl">
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 -z-10 h-10 w-[min(100%,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5a524]/40 blur-2xl"
        />
        {addingAnother
          ? "Agrega más personas a tu árbol de conexiones"
          : "Descubre la conexión que tienes con otra persona"}
      </h2>

      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center">
        <p className="shrink-0 text-sm text-mist-300">Fecha de nacimiento</p>
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-2">
          <select
            id={dayId}
            aria-label="Día"
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className={`${fieldClass} w-full`}
          >
            <option value="">Día</option>
            {Array.from({ length: 31 }, (_, index) => index + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            id={monthId}
            aria-label="Mes"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className={`${fieldClass} w-full`}
          >
            <option value="">Mes</option>
            {MONTHS.map((label, index) => (
              <option key={label} value={index + 1}>
                {label}
              </option>
            ))}
          </select>
          <select
            id={yearId}
            aria-label="Año"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className={`${fieldClass} w-full`}
          >
            <option value="">Año</option>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        <select
          id={relationId}
          aria-label="Parentesco"
          value={relationship}
          onChange={(event) => setRelationship(event.target.value as RelationshipType | "")}
          className={`${fieldClass} w-full`}
        >
          <option value="">Parentesco</option>
          {(Object.keys(RELATION_LABELS) as RelationshipType[]).map((type) => (
            <option key={type} value={type}>
              {RELATION_LABELS[type]}
            </option>
          ))}
        </select>
        <input
          id={nameId}
          type="text"
          aria-label="Nombre"
          value={name}
          onChange={(inputEvent) => setName(inputEvent.target.value)}
          placeholder="Agrégale un nombre"
          autoComplete="off"
          className={`${fieldClass} w-full placeholder:text-ink-600`}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-glow-300">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-xl bg-[#f5a524] px-5 py-3.5 text-sm font-medium text-[#1a1206] shadow-[0_8px_32px_rgba(245,165,36,0.45)] transition hover:bg-[#f8d48a] active:scale-[0.99]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
