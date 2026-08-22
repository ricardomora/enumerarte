import type { CalendarDate } from "@/lib/numerology";

/**
 * Convierte el valor de un `<input type="date">` (siempre "AAAA-MM-DD") en la
 * fecha del dominio.
 *
 * Se parsea a mano en lugar de usar `new Date(value)`, que interpreta la cadena
 * como UTC medianoche y devuelve el día anterior en cualquier huso al oeste de
 * Greenwich. Para una audiencia latinoamericana eso significaría un número de
 * misión equivocado para todos los nacidos el día 1 de cada mes.
 */
export function parseDateInput(value: string): CalendarDate | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  };
}

export function toDateInputValue(date: CalendarDate): string {
  const month = String(date.month).padStart(2, "0");
  const day = String(date.day).padStart(2, "0");
  return `${date.year}-${month}-${day}`;
}

/**
 * Hoy en el huso del usuario.
 *
 * Nunca debe llamarse durante el renderizado del servidor: la página se
 * prerenderiza, así que el valor quedaría congelado en el momento del build y
 * dejaría de coincidir con el del cliente al día siguiente.
 */
export function todayCalendarDate(): CalendarDate {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
}

/** Negativo si `a` es anterior a `b`, cero si son el mismo día, positivo si es posterior. */
export function compareCalendarDates(a: CalendarDate, b: CalendarDate): number {
  return a.year - b.year || a.month - b.month || a.day - b.day;
}

export function isFutureDate(date: CalendarDate, today = todayCalendarDate()): boolean {
  return compareCalendarDates(date, today) > 0;
}

export function formatDate(date: CalendarDate, locale = "es-ES"): string {
  // timeZone UTC es obligatorio: Date.UTC(2000, mes-1, 1) a medianoche UTC cae
  // en el mes anterior en husos al oeste (p. ej. Colombia UTC-5), y sin UTC
  // Intl mostraría "julio" para agosto.
  const monthName = new Intl.DateTimeFormat(locale, {
    month: "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2000, date.month - 1, 1)));
  return `${date.day} de ${monthName} de ${date.year}`;
}
