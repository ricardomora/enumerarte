import { getMission } from "@/content";
import type { MasterNumber } from "@/lib/numerology";

/** Nota breve cuando el camino de vida pasó por 11, 22 o 33. */
export function masterAside(master: MasterNumber, root: number) {
  const reading = getMission(master);
  return {
    kicker: `También aparece el ${master}`,
    lead: `La suma pasa por ${master} antes de llegar al ${root}. Hay quien deja el ${master} sin reducir y lo llama número maestro. Esta lectura usa el ${root}.`,
    title: reading.title,
    essence: reading.essence,
  };
}
