import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { NumberGlyph } from "@/components/number-glyph";
import { ShareArrival } from "@/components/share-arrival";
import { getMission, getPair } from "@/content";
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
  if (!parsed) return { title: "Enumerarte" };

  const content = getPair(parsed.a, parsed.b);
  const names = readNames(await props.searchParams);
  const who = names.a && names.b ? `${names.a} y ${names.b}` : `un ${parsed.a} y un ${parsed.b}`;

  return {
    title: `${content.headline} · Enumerarte`,
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

  const content = getPair(parsed.a, parsed.b);
  const names = readNames(await props.searchParams);
  const missionA = getMission(parsed.a);
  const missionB = getMission(parsed.b);

  return (
    <main className="grain mx-auto w-full max-w-2xl px-5 py-14 sm:py-20">
      <ShareArrival pair={parsed.canonical} />

      <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
        Enumerarte
      </p>

      <article className="mt-10 space-y-6 rounded-2xl border border-ink-700 bg-ink-900/40 p-6 sm:p-8">
        <header className="space-y-5">
          <div className="flex items-center justify-center gap-4">
            <NumberGlyph value={parsed.a} size="sm" label={names.a || missionA.title} />
            <span aria-hidden className="text-ink-600">
              ·
            </span>
            <NumberGlyph value={parsed.b} size="sm" label={names.b || missionB.title} />
          </div>
          <h1 className="text-balance text-center text-2xl font-medium text-mist-100 sm:text-3xl">
            {content.headline}
          </h1>
        </header>

        <p className="text-pretty leading-relaxed text-mist-300">{content.body}</p>

        <div className="rounded-xl border border-accent-500/30 bg-accent-500/8 p-5">
          <p className="text-xs uppercase tracking-wider text-accent-400">Qué hacer con esto</p>
          <p className="mt-2 text-pretty leading-relaxed text-mist-100">{content.practice}</p>
        </div>
      </article>

      <section className="mt-8 space-y-4 text-center">
        <div className="space-y-1">
          <h2 className="text-balance text-lg font-medium text-mist-100">¿Y tu mapa?</h2>
          <p className="text-sm text-mist-500">
            Descubre tu Núcleo y mira qué señales conectan con las personas de tu vida.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block rounded-xl bg-accent-500 px-6 py-3.5 font-medium text-white transition hover:bg-accent-400"
        >
          Revelar mi mapa
        </Link>
      </section>

      <footer className="mt-12 text-center text-xs text-mist-500">
        Enumerarte · Tu mapa y tus vínculos
      </footer>
    </main>
  );
}
