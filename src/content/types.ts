/**
 * Contenido como datos, nunca como código.
 *
 * Regla de integridad del proyecto: el número es solo la clave de enrutamiento.
 * La carga útil (`practice` en los pares) debe ser consejo relacional apoyado en
 * comunicación y manejo de conflicto, de modo que sea válido para el usuario
 * independientemente de si el número que lo seleccionó significa algo.
 *
 * Ver la sección 6-bis del plan: la numerología no tiene validez predictiva
 * demostrada, así que el valor entregado tiene que estar en el consejo.
 */

import type { NumerologyValue, PairKey } from "@/lib/numerology";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export interface MissionContent {
  value: NumerologyValue;
  /** Nombre corto del arquetipo. Es lo que el usuario comparte. */
  title: string;
  /** Una línea memorable. Va en la tarjeta compartible y en la OG image. */
  essence: string;
  /** Dos o tres frases sobre cómo se mueve esta persona. */
  body: string;
  /** Lo que aporta de forma natural. */
  strength: string;
  /** Dónde se atasca. Evitar el tono de castigo: es información, no juicio. */
  friction: string;
}

export interface PairContent {
  key: PairKey;
  /** La dinámica en pocas palabras. */
  headline: string;
  /** Qué pasa realmente entre estas dos personas. */
  body: string;
  /**
   * La carga útil real: una acción concreta y verificable. Debe seguir siendo
   * buen consejo aunque se ignore por completo la numerología.
   */
  practice: string;
}

export interface LocaleContent {
  missions: Record<string, MissionContent>;
  pairs: Record<string, PairContent>;
}
