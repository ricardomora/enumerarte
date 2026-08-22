/**
 * Registro de contenido y búsqueda con respaldo.
 *
 * Cualquier clave que falte en el idioma pedido cae al idioma por defecto en
 * lugar de romper la interfaz. Los huecos se detectan en CI con
 * `pnpm content:check`, no en producción con una pantalla en blanco.
 */

import { type NumerologyValue, pairKey } from "@/lib/numerology";
import { missions as enMissions } from "./en/missions";
import { pairs as enPairs } from "./en/pairs";
import { missions as esMissions } from "./es/missions";
import { pairs as esPairs } from "./es/pairs";
import {
  DEFAULT_LOCALE,
  type Locale,
  type LocaleContent,
  type MissionContent,
  type PairContent,
} from "./types";

export const content: Record<Locale, LocaleContent> = {
  es: { missions: esMissions, pairs: esPairs },
  en: { missions: enMissions, pairs: enPairs },
};

export function getMission(
  value: NumerologyValue,
  locale: Locale = DEFAULT_LOCALE,
): MissionContent {
  const key = String(value);
  const found = content[locale].missions[key] ?? content[DEFAULT_LOCALE].missions[key];
  if (!found) {
    throw new Error(`Sin contenido de misión para el valor ${key}`);
  }
  return found;
}

export function getPair(
  a: NumerologyValue,
  b: NumerologyValue,
  locale: Locale = DEFAULT_LOCALE,
): PairContent {
  const key = pairKey(a, b);
  const found = content[locale].pairs[key] ?? content[DEFAULT_LOCALE].pairs[key];
  if (!found) {
    throw new Error(`Sin contenido de par para la clave ${key}`);
  }
  return found;
}

export type { Locale, MissionContent, PairContent } from "./types";
export { DEFAULT_LOCALE, LOCALES } from "./types";
