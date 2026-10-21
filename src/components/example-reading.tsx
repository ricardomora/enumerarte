"use client";

import Link from "next/link";
import { BackHome } from "@/components/back-home";
import { useUi } from "@/components/locale-provider";
import { PairCard } from "@/components/pair-card";
import { ProfileMap } from "@/components/profile-map";
import { exampleCopy } from "@/content/legal";
import { computeProfile } from "@/lib/numerology";
import { buildPairPath } from "@/lib/share";

function givenName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? fullName;
}

export function ExampleIntro({ pairPath }: { pairPath: string }) {
  const ui = useUi();

  return (
    <>
      <BackHome />
      <header className="space-y-3 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
          {ui.exampleKicker}
        </p>
        <h1 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
          {ui.exampleTitle}
        </h1>
        <p className="mx-auto max-w-md text-pretty text-sm leading-relaxed text-mist-300">
          {ui.exampleLead}
        </p>
        <Link
          href={pairPath}
          className="inline-block text-sm text-mist-100 underline decoration-ink-600 underline-offset-4"
        >
          {ui.examplePairLink}
        </Link>
      </header>
    </>
  );
}

export function ExampleReading() {
  const ui = useUi();
  const self = computeProfile({
    birthDate: exampleCopy.self.birthDate,
    fullName: exampleCopy.self.name,
  });
  const other = computeProfile({
    birthDate: exampleCopy.other.birthDate,
    fullName: exampleCopy.other.name,
  });
  const relationship = exampleCopy.other.relationship;

  return (
    <div className="space-y-10">
      <ProfileMap
        name={exampleCopy.self.name}
        birthDate={self.birthDate}
        mision={self.mision}
        nameNumbers={self.name}
      />
      <PairCard
        self={{ name: givenName(exampleCopy.self.name), mision: self.mision }}
        other={{ name: givenName(exampleCopy.other.name), mision: other.mision }}
        relationship={relationship}
        relationshipLabel={ui.relations[relationship]}
        sharePath={buildPairPath(self.mision, other.mision, {
          a: givenName(exampleCopy.self.name),
          b: givenName(exampleCopy.other.name),
        })}
      />
    </div>
  );
}
