/**
 * Contenido como datos, nunca como código.
 *
 * Regla de integridad del proyecto: el número es solo la clave de enrutamiento.
 * La carga útil debe ser consejo relacional apoyado en comunicación y manejo
 * de conflicto, de modo que sea válido para el usuario independientemente de si
 * el número que lo seleccionó significa algo.
 *
 * Ver la sección 6-bis del plan: la numerología no tiene validez predictiva
 * demostrada, así que el valor entregado tiene que estar en el consejo.
 */

import type { NumerologyValue, PairKey, RelationshipType } from "@/lib/numerology";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

/** Lectura estructurada compartida por Camino de Vida, Personalidad, Alma y Expresión. */
export interface AspectReading {
  value: NumerologyValue;
  /** Nombre corto del arquetipo. Es lo que el usuario comparte. */
  title: string;
  /** Una línea memorable. Va en la tarjeta compartible y en la OG image. */
  essence: string;
  /** Dos o tres frases sobre cómo se mueve esta persona en esta capa. */
  body: string;
  /** Tres situaciones concretas, no adjetivos sueltos. */
  strengths: readonly [string, string, string];
  /** Tres patrones de atasco, sin tono de castigo. */
  frictions: readonly [string, string, string];
  /** Cómo se ve bajo presión (más visceral que friction). */
  underPressure: string;
  /** Cómo se mueve con pareja, familia y amigos. */
  inRelationships: string;
  /** Lo que otros ven y tú no (genera el "cómo supiste eso"). */
  blindSpot: string;
  /** Una acción concreta para esta semana. */
  microPractice: string;
}

export type MissionContent = AspectReading;

export type SoulContent = AspectReading;
export type ShieldContent = AspectReading;
export type DestinyContent = AspectReading;

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

/** La misma dinámica, leída en el parentesco que la persona eligió. */
export type PairBonds = Record<RelationshipType, string>;

export interface PairReading extends PairContent {
  bonds: PairBonds;
}

export interface BondFrame {
  title: string;
  /** Qué mira esta nota. No es un puntaje. */
  lead: string;
}

export interface LocaleContent {
  missions: Record<string, MissionContent>;
  pairs: Record<string, PairContent>;
  souls: Record<string, SoulContent>;
  shields: Record<string, ShieldContent>;
  destinies: Record<string, DestinyContent>;
}
