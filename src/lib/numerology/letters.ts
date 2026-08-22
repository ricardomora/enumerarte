/**
 * Tabla pitagórica y normalización de nombres.
 *
 * La tabla pitagórica es la misma función modular que la reducción, aplicada a
 * la posición alfabética: valor = 1 + ((índice base 0) mod 9). De ahí que A, J
 * y S valgan 1 (posiciones 1, 10 y 19).
 *
 * Convenciones adoptadas para español, documentadas porque la literatura no es
 * unánime y el sistema debe ser reproducible:
 *
 * 1. Las tildes se ignoran: JOSÉ se trata como JOSE.
 * 2. La Ñ se trata como N (valor 5). Es la convención mayoritaria en español.
 * 3. La Ü se trata como U.
 * 4. La Y es contextual por defecto: cuenta como vocal solo si ninguna letra
 *    contigua dentro de la misma palabra es vocal. Así MYRNA tiene la Y como
 *    vocal y YOLANDA como consonante. Es la regla estándar de la literatura y
 *    se puede sobreescribir con `yPolicy`.
 * 5. Cualquier carácter que no sea letra A-Z tras normalizar actúa como
 *    separador de palabra y no aporta valor.
 */

import { type Digit, type NumerologyValue, reduce } from "./reduce";

const STRICT_VOWELS = new Set(["A", "E", "I", "O", "U"]);

export type YPolicy = "contextual" | "vowel" | "consonant";

export interface LetterBreakdown {
  letter: string;
  value: Digit;
  isVowel: boolean;
}

/**
 * Valor pitagórico de una letra A-Z ya normalizada.
 * `1 + ((posición base 0) mod 9)`.
 */
export function letterValue(letter: string): Digit {
  const code = letter.charCodeAt(0) - 65;
  if (code < 0 || code > 25) {
    throw new RangeError(`letterValue espera una letra A-Z, recibió "${letter}"`);
  }
  return (1 + (code % 9)) as Digit;
}

/**
 * Quita diacríticos y deja solo A-Z en mayúsculas, preservando los espacios
 * como separadores de palabra. La descomposición NFD convierte Ñ en N más
 * tilde combinante, de modo que eliminar los diacríticos ya implementa la
 * convención Ñ -> N.
 */
export function normalizeName(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]+/g, " ")
    .trim();
}

function isVowelAt(word: string, index: number, yPolicy: YPolicy): boolean {
  const letter = word[index];
  if (STRICT_VOWELS.has(letter)) return true;
  if (letter !== "Y") return false;

  if (yPolicy === "vowel") return true;
  if (yPolicy === "consonant") return false;

  const previous = index > 0 ? word[index - 1] : undefined;
  const next = index < word.length - 1 ? word[index + 1] : undefined;
  const touchesVowel =
    (previous !== undefined && STRICT_VOWELS.has(previous)) ||
    (next !== undefined && STRICT_VOWELS.has(next));
  return !touchesVowel;
}

/**
 * Desglosa un nombre en letras con su valor y su clasificación vocal/consonante.
 * Devolver el desglose completo (y no solo los totales) es deliberado: la
 * transparencia del cálculo es parte del producto, así que la interfaz debe
 * poder mostrar letra por letra de dónde sale cada número.
 */
export function breakdownName(raw: string, yPolicy: YPolicy = "contextual"): LetterBreakdown[] {
  const normalized = normalizeName(raw);
  if (normalized.length === 0) return [];

  return normalized
    .split(" ")
    .filter((word) => word.length > 0)
    .flatMap((word) =>
      [...word].map((letter, index) => ({
        letter,
        value: letterValue(letter),
        isVowel: isVowelAt(word, index, yPolicy),
      })),
    );
}

export interface NameNumbers {
  /** Suma de todas las letras, reducida. La expresión o destino. */
  destino: NumerologyValue;
  /** Suma de las vocales, reducida. Los deseos internos. */
  alma: NumerologyValue;
  /** Suma de las consonantes, reducida. La máscara social. */
  escudo: NumerologyValue;
  breakdown: LetterBreakdown[];
}

export function computeNameNumbers(raw: string, yPolicy: YPolicy = "contextual"): NameNumbers {
  const breakdown = breakdownName(raw, yPolicy);
  if (breakdown.length === 0) {
    throw new Error("El nombre no contiene ninguna letra utilizable");
  }

  let all = 0;
  let vowels = 0;
  let consonants = 0;
  for (const entry of breakdown) {
    all += entry.value;
    if (entry.isVowel) vowels += entry.value;
    else consonants += entry.value;
  }

  return {
    destino: reduce(all),
    // Un nombre puede no tener vocales o no tener consonantes (raro pero
    // posible con iniciales), y reduce(0) no está definido en el sistema.
    alma: vowels === 0 ? reduce(all) : reduce(vowels),
    escudo: consonants === 0 ? reduce(all) : reduce(consonants),
    breakdown,
  };
}
