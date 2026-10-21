import type { Metadata } from "next";
import Link from "next/link";
import { ExampleReading } from "@/components/example-reading";
import { SiteFooter } from "@/components/site-footer";
import { Starfield } from "@/components/starfield";
import { chromeCopy, exampleCopy, legalIdentity } from "@/content/legal";
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
      <Link
        href="/"
        className="mb-6 inline-flex w-fit items-center gap-1.5 text-sm text-mist-300 transition hover:text-mist-100"
      >
        {chromeCopy.backHome}
      </Link>
      <header className="space-y-3 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
          {exampleCopy.kicker}
        </p>
        <h1 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
          {exampleCopy.title}
        </h1>
        <p className="mx-auto max-w-md text-pretty text-sm leading-relaxed text-mist-300">
          {exampleCopy.lead}
        </p>
        <Link
          href={pairPath}
          className="inline-block text-sm text-mist-100 underline decoration-ink-600 underline-offset-4"
        >
          {exampleCopy.pairLink}
        </Link>
      </header>
      <div className="mt-8">
        <ExampleReading />
      </div>
      <SiteFooter className="mt-12" note={legalIdentity.brand} />
    </main>
  );
}
