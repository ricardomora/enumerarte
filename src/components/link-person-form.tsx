"use client";

import { useEffect, useId, useState } from "react";
import { isFutureDate, todayCalendarDate } from "@/lib/date-input";
import { type CalendarDate, isValidDate, type RelationshipType } from "@/lib/numerology";

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
  onCancel: () => void;
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
  "w-full rounded-xl border border-ink-700 bg-ink-900 px-3 py-3 text-sm text-mist-100 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25";

export function LinkPersonForm({ submitLabel, initial, onSubmit, onCancel }: LinkPersonFormProps) {
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
      setError("Elige día, mes y año.");
      return;
    }

    const birthDate = { day: Number(day), month: Number(month), year: Number(year) };
    if (!isValidDate(birthDate)) {
      setError("Revisa la fecha: no parece un día real.");
      return;
    }

    if (isFutureDate(birthDate)) {
      setError("Esa fecha está en el futuro.");
      return;
    }

    if (!relationship) {
      setError("Elige qué es esta persona para ti.");
      return;
    }

    setError(null);
    onSubmit({ name: name.trim(), birthDate, relationship });
  }

  return (
    <form onSubmit={handleSubmit} className="animate-rise space-y-5" noValidate>
      <div className="space-y-1.5">
        <h2 className="text-balance text-xl font-medium text-mist-100">
          Descubre cómo es tu relación
        </h2>
        <p className="text-sm leading-relaxed text-mist-500">
          Con la fecha basta: el vínculo se lee desde el Camino de Vida de cada uno. El nombre solo
          pone la etiqueta en tu mapa de personas.
        </p>
      </div>

      <fieldset className="space-y-1.5">
        <legend className="text-xs uppercase tracking-wider text-mist-500">
          Fecha de nacimiento
        </legend>
        <div className="grid grid-cols-3 gap-2">
          <select
            id={dayId}
            aria-label="Día"
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className={fieldClass}
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
            className={fieldClass}
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
            className={fieldClass}
          >
            <option value="">Año</option>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <div className="space-y-1.5">
        <label
          htmlFor={relationId}
          className="block text-xs uppercase tracking-wider text-mist-500"
        >
          Parentesco
        </label>
        <select
          id={relationId}
          value={relationship}
          onChange={(event) => setRelationship(event.target.value as RelationshipType | "")}
          className={fieldClass}
        >
          <option value="">Qué es para ti</option>
          {(Object.keys(RELATION_LABELS) as RelationshipType[]).map((type) => (
            <option key={type} value={type}>
              {RELATION_LABELS[type]}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={nameId} className="block text-xs uppercase tracking-wider text-mist-500">
          Cómo le dices
        </label>
        <input
          id={nameId}
          type="text"
          value={name}
          onChange={(inputEvent) => setName(inputEvent.target.value)}
          placeholder="Opcional. Ana, mamá, jefe…"
          autoComplete="off"
          className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-mist-100 outline-none transition placeholder:text-ink-600 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25"
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-glow-300">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white transition hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 active:scale-[0.99]"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full py-2 text-sm text-mist-500 transition hover:text-mist-300"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
