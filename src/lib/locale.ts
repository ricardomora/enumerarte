import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/content/types";

export const LOCALE_COOKIE = "enumerarte-locale";

export function parseLocale(value: string | null | undefined): Locale {
  if (value && (LOCALES as readonly string[]).includes(value)) return value as Locale;
  return DEFAULT_LOCALE;
}

export function localeTag(locale: Locale): string {
  return locale === "en" ? "en" : "es";
}
