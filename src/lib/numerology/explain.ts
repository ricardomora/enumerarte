/**
 * Explicación paso a paso del cálculo.
 *
 * Esto no es una utilidad de depuración: es una función de producto. La
 * categoría entera se apoya en que el usuario no vea de dónde sale el número.
 * Mostrar la aritmética completa es la posición de honestidad del proyecto y
 * además la razón por la que un ingeniero confía en la herramienta.
 */

import { type CalendarDate, missionMaster } from "./profile";
import { digitSum, isMasterNumber, type MasterNumber, type NumerologyValue } from "./reduce";

export interface ExplainStep {
  /** Lo que se suma, ya escrito para mostrar: "1 + 5". */
  expression: string;
  result: number;
  /** Verdadero cuando la reducción se detuvo por ser un número maestro. */
  stoppedAtMaster: boolean;
}

export interface MisionExplanation {
  parts: { label: string; source: number; digits: number[]; total: number }[];
  /** Suma de los tres componentes antes de reducir. */
  initialTotal: number;
  steps: ExplainStep[];
  result: NumerologyValue;
  /** 11, 22 o 33 si la suma pasó por uno. La lectura usa `result`, no este. */
  master: MasterNumber | null;
}

function digitsOf(n: number): number[] {
  return String(n)
    .split("")
    .map((digit) => Number(digit));
}

/**
 * Traza la reducción de un número, paso a paso, tal como la hace `reduce`.
 *
 * Si la entrada ya es un dígito o un maestro, no hay pasos que mostrar: el
 * número se queda como está. Cada paso tiene una expresión distinta porque la
 * suma de dígitos siempre decrece, así que la expresión sirve de clave estable.
 */
export function explainReduction(from: number): ExplainStep[] {
  const steps: ExplainStep[] = [];
  let current = from;
  while (current > 9 && !isMasterNumber(current)) {
    const digits = digitsOf(current);
    const next = digitSum(current);
    steps.push({
      expression: digits.join(" + "),
      result: next,
      stoppedAtMaster: isMasterNumber(next),
    });
    current = next;
  }
  return steps;
}

/**
 * Desglose completo de la misión: los tres componentes de la fecha, su suma y
 * cada paso de la reducción hasta el resultado.
 */
export function explainMision(
  date: CalendarDate,
  labels: { day: string; month: string; year: string },
): MisionExplanation {
  const parts = [
    { label: labels.day, source: date.day, digits: digitsOf(date.day), total: digitSum(date.day) },
    {
      label: labels.month,
      source: date.month,
      digits: digitsOf(date.month),
      total: digitSum(date.month),
    },
    {
      label: labels.year,
      source: date.year,
      digits: digitsOf(date.year),
      total: digitSum(date.year),
    },
  ];

  const initialTotal = parts.reduce((sum, part) => sum + part.total, 0);
  const steps = explainToDigit(initialTotal);
  const last = steps.at(-1);

  return {
    parts,
    initialTotal,
    steps,
    result: (last ? last.result : initialTotal) as NumerologyValue,
    master: missionMaster(date),
  };
}

/** Igual que `explainReduction`, pero no se detiene en 11, 22 ni 33. */
function explainToDigit(from: number): ExplainStep[] {
  const steps: ExplainStep[] = [];
  let current = from;
  while (current > 9) {
    const digits = digitsOf(current);
    const next = digitSum(current);
    steps.push({
      expression: digits.join(" + "),
      result: next,
      stoppedAtMaster: false,
    });
    current = next;
  }
  return steps;
}
