"use client";

import { createContext, useContext, useState } from "react";
import type { Locale } from "@/content/types";
import { type UiCopy, uiCopy } from "@/content/ui";
import { LOCALE_COOKIE, localeTag } from "@/lib/locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState(initialLocale);

  function setLocale(next: Locale) {
    setLocaleState(next);
    document.documentElement.lang = localeTag(next);
    // The Cookie Store API is still missing in Firefox.
    // biome-ignore lint/suspicious/noDocumentCookie: the preference has to survive a reload in every browser
    document.cookie = `${LOCALE_COOKIE}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale fuera de LocaleProvider");
  return value;
}

export function useUi(): UiCopy {
  return uiCopy(useLocale().locale);
}
