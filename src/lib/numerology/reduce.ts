/**
 * Núcleo aritmético del sistema.
 *
 * La reducción teosófica es aritmética modular: el dígito raíz de cualquier
 * n >= 1 es `1 + ((n - 1) mod 9)`. Sumar dígitos repetidamente converge al
 * mismo valor, pero la forma cerrada deja claro que el sistema entero mapea
 * cualquier entrada sobre nueve clases.
 *
 * La única excepción son los números maestros: la reducción se detiene si un
 * paso intermedio cae en 11, 22 o 33.
 */

export const MASTER_NUMBERS = [11, 22, 33] as const;

export type MasterNumber = (typeof MASTER_NUMBERS)[number];
export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Valores posibles de cualquier posición del mapa: 1-9 más maestros. */
export type NumerologyValue = Digit | MasterNumber;

export const ALL_VALUES: readonly NumerologyValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

export function isMasterNumber(n: number): n is MasterNumber {
  return (MASTER_NUMBERS as readonly number[]).includes(n);
}

/** Suma de los dígitos decimales de un entero no negativo. */
export function digitSum(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(`digitSum espera un entero no negativo, recibió ${n}`);
  }
  let total = 0;
  let rest = n;
  while (rest > 0) {
    total += rest % 10;
    rest = Math.floor(rest / 10);
  }
  return total;
}

/**
 * Dígito raíz puro, sin excepción de maestros. Forma cerrada de la reducción
 * teosófica: equivale a sumar dígitos hasta llegar a un solo dígito.
 */
export function digitalRoot(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(`digitalRoot espera un entero no negativo, recibió ${n}`);
  }
  if (n === 0) return 0;
  return 1 + ((n - 1) % 9);
}

/**
 * Reducción con preservación de números maestros.
 *
 * Suma dígitos paso a paso y se detiene en cuanto el resultado es un solo
 * dígito o un maestro (11, 22, 33). Ejemplos: 29 -> 11 (para), 38 -> 11 (para),
 * 48 -> 12 -> 3.
 *
 * Se suma dígito a dígito en lugar de usar la forma cerrada precisamente
 * porque los maestros solo son detectables en los pasos intermedios.
 */
export function reduce(n: number): NumerologyValue {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError(`reduce espera un entero no negativo, recibió ${n}`);
  }
  let current = n;
  while (current > 9) {
    if (isMasterNumber(current)) return current;
    current = digitSum(current);
  }
  // current es 0-9 aquí. El 0 solo aparece con entrada 0, que no es un valor
  // válido del sistema; lo tratamos como 9 porque la reducción teosófica no
  // tiene clase cero.
  return (current === 0 ? 9 : current) as Digit;
}

/**
 * Reducción estricta a un solo dígito, ignorando maestros. Necesaria para los
 * desafíos, que se calculan sobre componentes ya reducidos a un dígito.
 */
export function reduceToDigit(n: number): Digit {
  const root = digitalRoot(n);
  return (root === 0 ? 9 : root) as Digit;
}
