/**
 * Construcción de enlaces para compartir.
 *
 * Decisión de privacidad que determina el diseño: la URL compartida lleva solo
 * los dos números y los nombres de pila, nunca las fechas de nacimiento. La
 * lectura del par depende únicamente de los números, así que no hay ninguna
 * razón para exponer el dato sensible de un tercero en un enlace que va a
 * circular por WhatsApp.
 *
 * El texto de la invitación tampoco dice "únete a mi app" sino qué dice de los
 * dos, porque el invitado tiene que aterrizar en contenido sobre él y no en una
 * pantalla de registro.
 */

import { type NumerologyValue, pairKey } from "@/lib/numerology";

/**
 * Deja un nombre en algo seguro de poner en una URL y de mostrar en la página:
 * solo letras y espacios, y suficientemente corto para no romper el diseño ni
 * convertir el enlace en un vehículo de texto arbitrario.
 */
export function sanitizeShareName(raw: string): string {
  return raw
    .normalize("NFC")
    .replace(/[^\p{L}\p{M}\s'-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24);
}

export function buildPairPath(
  a: NumerologyValue,
  b: NumerologyValue,
  names?: { a?: string; b?: string },
): string {
  const key = pairKey(a, b);
  const params = new URLSearchParams();

  // Los nombres se asocian al orden canónico de la clave, no al orden en que
  // el usuario introdujo a las personas, para que el enlace sea reproducible.
  const [firstName, secondName] = a <= b ? [names?.a, names?.b] : [names?.b, names?.a];
  const cleanFirst = firstName ? sanitizeShareName(firstName) : "";
  const cleanSecond = secondName ? sanitizeShareName(secondName) : "";
  if (cleanFirst) params.set("a", cleanFirst);
  if (cleanSecond) params.set("b", cleanSecond);

  const query = params.toString();
  return query ? `/par/${key}?${query}` : `/par/${key}`;
}

export interface ShareTarget {
  id: string;
  label: string;
  href: string;
}

/**
 * Enlaces de intención por red. Instagram no aparece porque no tiene ninguna
 * forma de compartir un enlace desde la web: la única vía es la hoja nativa del
 * sistema, que el componente ofrece aparte cuando el navegador la soporta.
 */
export function shareTargets(url: string, text: string): ShareTarget[] {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  return [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    },
    {
      id: "telegram",
      label: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      id: "x",
      label: "X",
      href: `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      id: "facebook",
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: "email",
      label: "Correo",
      href: `mailto:?subject=${encodeURIComponent("Mira lo que dice de nosotros dos")}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
    },
  ];
}

export function shareMessage(selfName: string, otherName: string): string {
  const hasNames = selfName.length > 0 && otherName.length > 0;
  return hasNames
    ? `Mira lo que dice de ${selfName} y ${otherName}.`
    : "Mira lo que dice de nosotros dos.";
}
