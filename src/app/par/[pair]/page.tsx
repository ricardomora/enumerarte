import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PairLanding } from "@/components/pair-landing";
import { getPair } from "@/content";
import { allPairKeys, parsePairKey } from "@/lib/numerology";
import { sanitizeShareName } from "@/lib/share";

/**
 * Página de aterrizaje del enlace compartido.
 *
 * Es la pieza del bucle viral: el invitado no cae en un registro sino en la
 * lectura de su relación, y solo después se le ofrece calcular lo suyo. Esa
 * diferencia entre "regístrate" y "aquí está tu lectura" es la que separa una
 * conversión del dos por ciento de una del veinte.
 *
 * La URL solo lleva los dos números y los nombres de pila. Las fechas de
 * nacimiento nunca salen del dispositivo de quien comparte.
 */

/** Las 78 rutas son finitas y conocidas, así que se prerenderizan todas. */
export function generateStaticParams() {
  return allPairKeys().map((pair) => ({ pair }));
}

function readNames(searchParams: Record<string, string | string[] | undefined>) {
  const pick = (value: string | string[] | undefined) =>
    typeof value === "string" ? sanitizeShareName(value) : "";
  return { a: pick(searchParams.a), b: pick(searchParams.b) };
}

export async function generateMetadata(props: PageProps<"/par/[pair]">): Promise<Metadata> {
  const { pair } = await props.params;
  const parsed = parsePairKey(pair);
  if (!parsed) return { title: { absolute: "Enumerarte" } };

  const content = getPair(parsed.a, parsed.b);
  const names = readNames(await props.searchParams);
  const who = names.a && names.b ? `${names.a} y ${names.b}` : `un ${parsed.a} y un ${parsed.b}`;

  return {
    title: content.headline,
    description: `Lo que pasa entre ${who}. ${content.headline}.`,
    openGraph: {
      title: content.headline,
      description: `Lo que pasa entre ${who}.`,
      type: "article",
      locale: "es_ES",
    },
  };
}

export default async function PairPage(props: PageProps<"/par/[pair]">) {
  const { pair } = await props.params;
  const parsed = parsePairKey(pair);
  if (!parsed) notFound();

  // Una clave invertida sirve el mismo contenido, así que se redirige en lugar
  // de duplicar la página en dos direcciones distintas.
  if (parsed.canonical !== pair) {
    const query = new URLSearchParams();
    const names = readNames(await props.searchParams);
    if (names.a) query.set("a", names.a);
    if (names.b) query.set("b", names.b);
    const suffix = query.toString();
    redirect(`/par/${parsed.canonical}${suffix ? `?${suffix}` : ""}`);
  }

  const names = readNames(await props.searchParams);

  return (
    <PairLanding
      a={parsed.a}
      b={parsed.b}
      canonical={parsed.canonical}
      nameA={names.a}
      nameB={names.b}
    />
  );
}
