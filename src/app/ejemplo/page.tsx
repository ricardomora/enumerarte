import type { Metadata } from "next";
import { ExampleIntro, ExampleReading } from "@/components/example-reading";
import { SiteFooter } from "@/components/site-footer";
import { Starfield } from "@/components/starfield";
import { exampleCopy } from "@/content/legal";
import { computeMision } from "@/lib/numerology";
import { buildPairPath } from "@/lib/share";

export const metadata: Metadata = {
  title: exampleCopy.title,
  description: exampleCopy.description,
};

export default function ExamplePage() {
  const pairPath = buildPairPath(
    computeMision(exampleCopy.self.birthDate),
    computeMision(exampleCopy.other.birthDate),
    { a: "Elena", b: "Mateo" },
  );

  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <Starfield />
      <ExampleIntro pairPath={pairPath} />
      <div className="mt-8">
        <ExampleReading />
      </div>
      <SiteFooter className="mt-12" />
    </main>
  );
}
