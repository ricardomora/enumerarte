/**
 * Puerta de cobertura de contenido.
 *
 * El espacio de contenido es combinatorio y crece rápido, así que la única
 * manera de que no queden celdas vacías es verificarlo automáticamente. Este
 * script cumple para el contenido el mismo papel que los tests para el motor.
 *
 * El idioma por defecto es obligatorio, porque es el respaldo de todos los
 * demás: si tiene huecos, la aplicación puede romperse en producción. Los otros
 * idiomas se reportan como pendientes sin fallar, salvo que se pase --strict.
 */

import { content } from "@/content";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/content/types";
import { ALL_VALUES, allPairKeys } from "@/lib/numerology";

const strict = process.argv.includes("--strict");

interface LocaleReport {
  locale: Locale;
  missingMissions: string[];
  missingPairs: string[];
  malformed: string[];
}

function isBlank(value: unknown): boolean {
  return typeof value !== "string" || value.trim().length === 0;
}

function auditLocale(locale: Locale): LocaleReport {
  const { missions, pairs } = content[locale];
  const missingMissions: string[] = [];
  const missingPairs: string[] = [];
  const malformed: string[] = [];

  for (const value of ALL_VALUES) {
    const key = String(value);
    const entry = missions[key];
    if (!entry) {
      missingMissions.push(key);
      continue;
    }
    if (entry.value !== value) {
      malformed.push(`mission ${key}: el campo value dice ${entry.value}`);
    }
    for (const field of ["title", "essence", "body", "strength", "friction"] as const) {
      if (isBlank(entry[field])) malformed.push(`mission ${key}: ${field} vacío`);
    }
  }

  const expectedPairKeys = allPairKeys();
  for (const key of expectedPairKeys) {
    const entry = pairs[key];
    if (!entry) {
      missingPairs.push(key);
      continue;
    }
    if (entry.key !== key) {
      malformed.push(`pair ${key}: el campo key dice ${entry.key}`);
    }
    for (const field of ["headline", "body", "practice"] as const) {
      if (isBlank(entry[field])) malformed.push(`pair ${key}: ${field} vacío`);
    }
  }

  // Claves presentes que no pertenecen al espacio canónico: normalmente un par
  // escrito al revés, como 6x5 en lugar de 5x6.
  const canonical = new Set<string>(expectedPairKeys);
  for (const key of Object.keys(pairs)) {
    if (!canonical.has(key)) {
      malformed.push(`pair ${key}: clave no canónica o inexistente`);
    }
  }

  return { locale, missingMissions, missingPairs, malformed };
}

const reports = LOCALES.map(auditLocale);
const totalMissions = ALL_VALUES.length;
const totalPairs = allPairKeys().length;

let failed = false;

console.log("Cobertura de contenido\n");

for (const report of reports) {
  const missions = totalMissions - report.missingMissions.length;
  const pairs = totalPairs - report.missingPairs.length;
  const isDefault = report.locale === DEFAULT_LOCALE;
  const label = isDefault ? `${report.locale} (respaldo)` : report.locale;

  console.log(`  ${label}`);
  console.log(`    misiones  ${missions}/${totalMissions}`);
  console.log(`    pares     ${pairs}/${totalPairs}`);

  if (report.malformed.length > 0) {
    console.log(`    malformados (${report.malformed.length}):`);
    for (const problem of report.malformed.slice(0, 10)) {
      console.log(`      - ${problem}`);
    }
    if (report.malformed.length > 10) {
      console.log(`      ... y ${report.malformed.length - 10} más`);
    }
    failed = true;
  }

  const hasGaps = report.missingMissions.length > 0 || report.missingPairs.length > 0;
  if (hasGaps) {
    if (report.missingMissions.length > 0) {
      console.log(`    misiones faltantes: ${report.missingMissions.join(", ")}`);
    }
    if (report.missingPairs.length > 0) {
      const shown = report.missingPairs.slice(0, 12).join(", ");
      const rest = report.missingPairs.length > 12 ? ` (+${report.missingPairs.length - 12})` : "";
      console.log(`    pares faltantes: ${shown}${rest}`);
    }
    if (isDefault || strict) failed = true;
    else console.log("    pendiente, no bloquea porque no es el idioma de respaldo");
  }

  console.log("");
}

if (failed) {
  console.error("La cobertura de contenido no pasa.");
  process.exit(1);
}

console.log("Cobertura de contenido correcta.");
