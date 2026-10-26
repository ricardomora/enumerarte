import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NumberLanding } from "@/components/number-landing";
import { getMission } from "@/content";
import { ALL_VALUES, type NumerologyValue } from "@/lib/numerology";

export function generateStaticParams() {
  return ALL_VALUES.map((value) => ({ valor: String(value) }));
}

function parseValue(raw: string): NumerologyValue | null {
  if (!/^\d{1,2}$/.test(raw)) return null;
  const value = Number(raw);
  return (ALL_VALUES as readonly number[]).includes(value) ? (value as NumerologyValue) : null;
}

export async function generateMetadata(props: PageProps<"/numero/[valor]">): Promise<Metadata> {
  const { valor } = await props.params;
  const value = parseValue(valor);
  if (!value) return { title: { absolute: "Enumerarte" } };

  const mission = getMission(value);
  return {
    title: mission.title,
    description: mission.essence,
    openGraph: {
      title: mission.title,
      description: mission.essence,
      type: "article",
      locale: "es_ES",
    },
  };
}

export default async function NumberPage(props: PageProps<"/numero/[valor]">) {
  const { valor } = await props.params;
  const value = parseValue(valor);
  if (!value) notFound();

  return <NumberLanding value={value} />;
}
