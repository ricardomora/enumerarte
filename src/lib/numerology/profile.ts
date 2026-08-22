/**
 * Perfil completo derivado de fecha de nacimiento y nombre.
 *
 * Decisión de diseño: las fechas se representan como `{ day, month, year }` en
 * enteros y nunca como `Date`. Un `Date` arrastra husos horarios y una fecha de
 * nacimiento no tiene huso: el 15 de abril es el 15 de abril en Caracas y en
 * Madrid. Usar `Date` aquí produce errores de un día según el servidor, que es
 * el bug clásico de este tipo de aplicaciones.
 */

import { computeNameNumbers, type NameNumbers, type YPolicy } from "./letters";
import { type Digit, digitSum, type NumerologyValue, reduce, reduceToDigit } from "./reduce";

export interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

/** Los desafíos sí pueden valer 0, a diferencia del resto del sistema. */
export type ChallengeValue = 0 | Digit;

export interface Pinnacles {
  first: NumerologyValue;
  second: NumerologyValue;
  third: NumerologyValue;
  fourth: NumerologyValue;
}

export interface Challenges {
  first: ChallengeValue;
  second: ChallengeValue;
  third: ChallengeValue;
  fourth: ChallengeValue;
}

export interface PersonalCycles {
  reference: CalendarDate;
  year: NumerologyValue;
  month: NumerologyValue;
  day: NumerologyValue;
}

export interface NumerologyProfile {
  birthDate: CalendarDate;
  /** Camino de vida. En el vocabulario del producto, el núcleo. */
  mision: NumerologyValue;
  /** Día de nacimiento reducido: el don con el que se llega. */
  regaloDivino: NumerologyValue;
  name: NameNumbers | null;
  pinnacles: Pinnacles;
  challenges: Challenges;
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function isValidDate({ day, month, year }: CalendarDate): boolean {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) return false;
  if (month < 1 || month > 12) return false;
  if (year < 1) return false;
  const limit = month === 2 && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month - 1];
  return day >= 1 && day <= limit;
}

function assertValidDate(date: CalendarDate): void {
  if (!isValidDate(date)) {
    throw new RangeError(
      `Fecha inválida: ${date.day}/${date.month}/${date.year}. Se espera día, mes y año reales.`,
    );
  }
}

/**
 * Camino de vida: suma de todos los dígitos de la fecha completa, reducida con
 * preservación de maestros.
 *
 * Existe una convención alternativa que reduce día, mes y año por separado
 * antes de sumar. Las dos coinciden en la gran mayoría de los casos pero no
 * siempre. Elegimos la suma directa por ser la más extendida y la más simple de
 * explicar al usuario, que es lo que importa dado que el producto se apoya en
 * mostrar el cálculo.
 */
export function computeMision(date: CalendarDate): NumerologyValue {
  assertValidDate(date);
  return reduce(digitSum(date.day) + digitSum(date.month) + digitSum(date.year));
}

/**
 * Pináculos y desafíos se calculan sobre los componentes reducidos a un solo
 * dígito (sin maestros), que es la convención estándar. Los resultados sí
 * admiten maestros.
 */
function reducedComponents(date: CalendarDate) {
  return {
    day: reduceToDigit(digitSum(date.day)),
    month: reduceToDigit(digitSum(date.month)),
    year: reduceToDigit(digitSum(date.year)),
  };
}

export function computePinnacles(date: CalendarDate): Pinnacles {
  assertValidDate(date);
  const { day, month, year } = reducedComponents(date);
  const first = reduce(month + day);
  const second = reduce(day + year);
  return {
    first,
    second,
    third: reduce(first + second),
    fourth: reduce(month + year),
  };
}

export function computeChallenges(date: CalendarDate): Challenges {
  assertValidDate(date);
  const { day, month, year } = reducedComponents(date);
  const first = Math.abs(month - day) as ChallengeValue;
  const second = Math.abs(day - year) as ChallengeValue;
  return {
    first,
    second,
    third: Math.abs(first - second) as ChallengeValue,
    fourth: Math.abs(month - year) as ChallengeValue,
  };
}

/**
 * Ciclos personales relativos a una fecha de referencia. El año personal usa
 * el día y el mes de nacimiento con el año de referencia; el mes personal
 * encadena desde el año personal; el día personal desde el mes personal.
 */
export function computePersonalCycles(
  birthDate: CalendarDate,
  reference: CalendarDate,
): PersonalCycles {
  assertValidDate(birthDate);
  assertValidDate(reference);

  const year = reduce(
    digitSum(birthDate.day) + digitSum(birthDate.month) + digitSum(reference.year),
  );
  const month = reduce(year + digitSum(reference.month));
  const day = reduce(month + digitSum(reference.day));

  return { reference, year, month, day };
}

export interface ProfileInput {
  birthDate: CalendarDate;
  /** Nombre completo de nacimiento. Opcional: el perfil de fecha ya es útil. */
  fullName?: string;
  yPolicy?: YPolicy;
}

export function computeProfile({
  birthDate,
  fullName,
  yPolicy = "contextual",
}: ProfileInput): NumerologyProfile {
  assertValidDate(birthDate);

  const trimmedName = fullName?.trim();

  return {
    birthDate,
    mision: computeMision(birthDate),
    regaloDivino: reduce(digitSum(birthDate.day)),
    name: trimmedName ? computeNameNumbers(trimmedName, yPolicy) : null,
    pinnacles: computePinnacles(birthDate),
    challenges: computeChallenges(birthDate),
  };
}
