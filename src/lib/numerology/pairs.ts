/**
 * Claves canónicas de par, base de todo el contenido relacional.
 *
 * Una lectura de par no tiene dirección: la dinámica entre un 6 y un 5 es la
 * misma se mire desde donde se mire. Por eso la clave se canonicaliza
 * ordenando los dos valores, y así el contenido se escribe una sola vez.
 *
 * El espacio es pequeño y acotado: 12 valores posibles (1-9 más 11, 22 y 33)
 * dan 12 * 13 / 2 = 78 pares. Esa cifra es el alcance de contenido de la Fase 0.
 */

import { ALL_VALUES, type NumerologyValue } from "./reduce";

export type PairKey = `${number}x${number}`;

/** Tipos de vínculo del grafo. El contenido tipado por relación llega en Fase 1. */
export const RELATIONSHIP_TYPES = ["pareja", "familia", "amistad", "trabajo"] as const;

export type RelationshipType = (typeof RELATIONSHIP_TYPES)[number];

/**
 * Clave canónica de un par. Ordena numéricamente para que `pairKey(6, 5)` y
 * `pairKey(5, 6)` devuelvan lo mismo.
 */
export function pairKey(a: NumerologyValue, b: NumerologyValue): PairKey {
  const [low, high] = a <= b ? [a, b] : [b, a];
  return `${low}x${high}`;
}

/** Las 78 claves de par, en orden estable. Usada por el script de cobertura. */
export function allPairKeys(): PairKey[] {
  const keys: PairKey[] = [];
  for (let i = 0; i < ALL_VALUES.length; i += 1) {
    for (let j = i; j < ALL_VALUES.length; j += 1) {
      keys.push(pairKey(ALL_VALUES[i], ALL_VALUES[j]));
    }
  }
  return keys;
}

export const TOTAL_PAIR_KEYS = (ALL_VALUES.length * (ALL_VALUES.length + 1)) / 2;

export interface ParsedPairKey {
  a: NumerologyValue;
  b: NumerologyValue;
  /** La forma canónica, que puede diferir de la recibida. */
  canonical: PairKey;
}

/**
 * Lee una clave de par que llega desde el exterior, típicamente una URL
 * compartida por WhatsApp donde cualquiera puede haberla editado a mano.
 *
 * Acepta el orden invertido y devuelve la forma canónica, para que la página
 * pueda redirigir en lugar de servir el mismo contenido en dos direcciones
 * distintas. Devuelve `null` ante cualquier cosa que no sea un par real, de
 * modo que la ruta pueda responder 404 en vez de calcular sobre basura.
 */
export function parsePairKey(raw: string): ParsedPairKey | null {
  const match = /^(\d{1,2})x(\d{1,2})$/.exec(raw);
  if (!match) return null;

  const a = Number(match[1]);
  const b = Number(match[2]);
  const allowed = ALL_VALUES as readonly number[];
  if (!allowed.includes(a) || !allowed.includes(b)) return null;

  return {
    a: a as NumerologyValue,
    b: b as NumerologyValue,
    canonical: pairKey(a as NumerologyValue, b as NumerologyValue),
  };
}
