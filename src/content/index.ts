/**
 * Registro de contenido y búsqueda con respaldo.
 *
 * Cualquier clave que falte en el idioma pedido cae al idioma por defecto en
 * lugar de romper la interfaz. Los huecos se detectan en CI con
 * `pnpm content:check`, no en producción con una pantalla en blanco.
 */

import { type NumerologyValue, pairKey } from "@/lib/numerology";
import { destinies as enDestinies, shields as enShields, souls as enSouls } from "./en/aspects";
import { BOND_FRAME_EN } from "./en/bond-frame";
import { missions as enMissions } from "./en/missions";
import { pairBonds as enPairBonds } from "./en/pair-bonds";
import { pairs as enPairs } from "./en/pairs";
import { destinies as esDestinies, shields as esShields, souls as esSouls } from "./es/aspects";
import { missions as esMissions } from "./es/missions";
import { BOND_FRAME, pairBonds } from "./es/pair-bonds";
import { pairs as esPairs } from "./es/pairs";
import {
  DEFAULT_LOCALE,
  type DestinyContent,
  type Locale,
  type LocaleContent,
  type MissionContent,
  type PairReading,
  type ShieldContent,
  type SoulContent,
} from "./types";

export const content: Record<Locale, LocaleContent> = {
  es: {
    missions: esMissions,
    pairs: esPairs,
    souls: esSouls,
    shields: esShields,
    destinies: esDestinies,
  },
  en: {
    missions: enMissions,
    pairs: enPairs,
    souls: enSouls,
    shields: enShields,
    destinies: enDestinies,
  },
};

function resolveAspect<T extends { value: NumerologyValue }>(
  table: Record<string, T>,
  fallback: Record<string, T>,
  value: NumerologyValue,
): T {
  const key = String(value);
  const found = table[key] ?? fallback[key];
  if (!found) {
    throw new Error(`Sin contenido para el valor ${key}`);
  }
  return found;
}

export function getMission(
  value: NumerologyValue,
  locale: Locale = DEFAULT_LOCALE,
): MissionContent {
  return resolveAspect(content[locale].missions, content[DEFAULT_LOCALE].missions, value);
}

export function getSoul(value: NumerologyValue, locale: Locale = DEFAULT_LOCALE): SoulContent {
  return resolveAspect(content[locale].souls, content[DEFAULT_LOCALE].souls, value);
}

export function getShield(value: NumerologyValue, locale: Locale = DEFAULT_LOCALE): ShieldContent {
  return resolveAspect(content[locale].shields, content[DEFAULT_LOCALE].shields, value);
}

export function getDestiny(
  value: NumerologyValue,
  locale: Locale = DEFAULT_LOCALE,
): DestinyContent {
  return resolveAspect(content[locale].destinies, content[DEFAULT_LOCALE].destinies, value);
}

export function getPair(
  a: NumerologyValue,
  b: NumerologyValue,
  locale: Locale = DEFAULT_LOCALE,
): PairReading {
  const key = pairKey(a, b);
  const found = content[locale].pairs[key] ?? content[DEFAULT_LOCALE].pairs[key];
  const bonds = (locale === "en" ? enPairBonds[key] : undefined) ?? pairBonds[key];
  if (!found || !bonds) {
    throw new Error(`Sin contenido de par para la clave ${key}`);
  }
  return { ...found, bonds };
}

export function bondFrame(locale: Locale = DEFAULT_LOCALE) {
  return locale === "en" ? BOND_FRAME_EN : BOND_FRAME;
}

export { BOND_FRAME, pairBonds } from "./es/pair-bonds";
export type {
  AspectReading,
  DestinyContent,
  Locale,
  MissionContent,
  PairContent,
  PairReading,
  ShieldContent,
  SoulContent,
} from "./types";
export { DEFAULT_LOCALE, LOCALES } from "./types";
