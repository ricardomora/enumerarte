import { getMission } from "@/content";
import { uiCopy } from "@/content/ui";
import type { MasterNumber } from "@/lib/numerology";
import type { Locale } from "./types";
import { DEFAULT_LOCALE } from "./types";

/** Nota breve cuando el camino de vida pasó por 11, 22 o 33. */
export function masterAside(master: MasterNumber, root: number, locale: Locale = DEFAULT_LOCALE) {
  const reading = getMission(master, locale);
  const copy = uiCopy(locale);
  return {
    kicker: copy.masterKicker(master),
    lead: copy.masterLead(master, root),
    title: reading.title,
    essence: reading.essence,
  };
}
