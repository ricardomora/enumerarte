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
import { pairBonds as enPairBonds } from "@/content/en/pair-bonds";
import { pairBonds } from "@/content/es/pair-bonds";
import { type AspectReading, DEFAULT_LOCALE, LOCALES, type Locale } from "@/content/types";
import { ALL_VALUES, allPairKeys, RELATIONSHIP_TYPES } from "@/lib/numerology";

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

const ASPECT_FIELDS = [
  "title",
  "essence",
  "body",
  "underPressure",
  "inRelationships",
  "blindSpot",
  "microPractice",
] as const;

function auditAspect(prefix: string, key: string, entry: AspectReading): string[] {
  const malformed: string[] = [];
  if (isBlank(entry.title)) malformed.push(`${prefix} ${key}: title vacío`);
  for (const field of ASPECT_FIELDS) {
    if (field === "title") continue;
    if (isBlank(entry[field])) malformed.push(`${prefix} ${key}: ${field} vacío`);
  }
  for (const listField of ["strengths", "frictions"] as const) {
    const list = entry[listField];
    if (!Array.isArray(list) || list.length !== 3) {
      malformed.push(`${prefix} ${key}: ${listField} debe tener exactamente 3 entradas`);
      continue;
    }
    for (const [index, item] of list.entries()) {
      if (isBlank(item)) malformed.push(`${prefix} ${key}: ${listField}[${index}] vacío`);
    }
  }
  return malformed;
}

function auditLocale(locale: Locale): LocaleReport {
  const { missions, pairs, souls, shields, destinies } = content[locale];
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
    malformed.push(...auditAspect("mission", key, entry));
  }

  for (const [label, table] of [
    ["soul", souls],
    ["shield", shields],
    ["destiny", destinies],
  ] as const) {
    for (const value of ALL_VALUES) {
      const key = String(value);
      const entry = table[key];
      if (!entry) {
        if (locale === DEFAULT_LOCALE) malformed.push(`${label} ${key}: faltante`);
        continue;
      }
      if (entry.value !== value) {
        malformed.push(`${label} ${key}: el campo value dice ${entry.value}`);
      }
      malformed.push(...auditAspect(label, key, entry));
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
    const bonds = (locale === "en" ? enPairBonds : pairBonds)[key];
    if (!bonds) {
      malformed.push(`pair ${key}: sin nota por parentesco`);
    } else {
      for (const relationship of RELATIONSHIP_TYPES) {
        if (isBlank(bonds[relationship])) {
          malformed.push(`pair ${key}: bonds.${relationship} vacío`);
        }
      }
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
