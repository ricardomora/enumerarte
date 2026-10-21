"use client";

import { RELATION_LABELS } from "@/components/link-person-form";
import { PairCard } from "@/components/pair-card";
import { ProfileMap } from "@/components/profile-map";
import { exampleCopy } from "@/content/legal";
import { computeProfile } from "@/lib/numerology";
import { buildPairPath } from "@/lib/share";

function givenName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? fullName;
}

export function ExampleReading() {
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
        relationshipLabel={RELATION_LABELS[relationship]}
        sharePath={buildPairPath(self.mision, other.mision, {
          a: givenName(exampleCopy.self.name),
          b: givenName(exampleCopy.other.name),
        })}
      />
    </div>
  );
}
