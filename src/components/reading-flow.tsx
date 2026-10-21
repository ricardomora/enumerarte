"use client";

import { useEffect, useState } from "react";
import {
  LinkPersonForm,
  type LinkPersonInput,
  RELATION_LABELS,
} from "@/components/link-person-form";
import { PairCard } from "@/components/pair-card";
import { PersonForm, type PersonInput } from "@/components/person-form";
import { PriceGate } from "@/components/price-gate";
import { ProfileMap } from "@/components/profile-map";
import { RelationMap } from "@/components/relation-map";
import { SubscribeForm } from "@/components/subscribe-form";
import { formatDate } from "@/lib/date-input";
import { FREE_LINK_LIMIT } from "@/lib/limits";
import {
  computeProfile,
  type NameNumbers,
  type NumerologyValue,
  type RelationshipType,
} from "@/lib/numerology";
import { buildPairPath } from "@/lib/share";
import { track, trackOnce } from "@/lib/track";

type Step = "self" | "mission" | "pair";

interface Person extends PersonInput {
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
}

interface LinkedPerson extends Person {
  relationship: RelationshipType;
}

function resolvePerson(person: PersonInput): Person {
  const profile = computeProfile({ birthDate: person.birthDate, fullName: person.name });
  return {
    ...person,
    mision: profile.mision,
    nameNumbers: profile.name,
  };
}

function personLabel(person: LinkedPerson): string {
  const trimmed = person.name.trim();
  return trimmed ? firstName(trimmed) : RELATION_LABELS[person.relationship];
}

/** Solo el primer nombre: es como la gente se refiere a los suyos. */
function firstName(name: string): string {
  return name.trim().split(/\s+/)[0];
}

export function ReadingFlow() {
  const [step, setStep] = useState<Step>("self");
  const [self, setSelf] = useState<Person | null>(null);
  const [linked, setLinked] = useState<LinkedPerson[]>([]);
  const [viewIndex, setViewIndex] = useState(0);

  const atLinkLimit = linked.length >= FREE_LINK_LIMIT;
  const activeOther = linked[viewIndex] ?? null;

  useEffect(() => {
    trackOnce("flow_started");
  }, []);

  useEffect(() => {
    if (step === "mission") trackOnce("second_person_prompted");
    if (step === "pair") trackOnce("pair_viewed");
  }, [step]);

  function handleSelf(person: PersonInput) {
    const resolved = resolvePerson(person);
    setSelf(resolved);
    track("self_computed", { mision: resolved.mision });
    setStep("mission");
  }

  function handleLink(input: LinkPersonInput) {
    if (linked.length >= FREE_LINK_LIMIT) {
      track("price_clicked", { tier: "premium", reason: "link_limit" });
      setStep(activeOther ? "pair" : "mission");
      return;
    }

    const resolved: LinkedPerson = { ...resolvePerson(input), relationship: input.relationship };
    const nextLinked = [...linked, resolved];
    setLinked(nextLinked);
    setViewIndex(nextLinked.length - 1);
    track("second_person_added", {
      mision: resolved.mision,
      selfMision: self?.mision,
      linkCount: nextLinked.length,
      relationship: resolved.relationship,
      hasName: resolved.name.trim().length > 0,
    });
    setStep("pair");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setStep(step === "pair" ? "mission" : "self");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-1 flex-col">
      {step !== "self" ? (
        <button
          type="button"
          onClick={goBack}
          className="mb-4 inline-flex w-fit items-center gap-1.5 text-sm text-mist-300 transition hover:text-mist-100"
        >
          <ArrowLeft />
          {step === "pair" ? "Volver a tu mapa" : "Volver al inicio"}
        </button>
      ) : null}

      <header className="space-y-3 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">Enumerarte</p>
        <h1 className="relative text-balance text-2xl font-medium leading-tight text-[#f5a524] sm:text-4xl">
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 -z-10 h-16 w-[min(100%,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5a524]/35 blur-3xl"
          />
          Tu mapa. Tus vínculos. Tus señales.
        </h1>
        {step === "self" || !self ? (
          <p className="mx-auto max-w-md text-pretty text-sm leading-relaxed text-mist-300 sm:text-base">
            Descubre lo que dicen tus números sobre ti y sobre quienes te importan. Sin hora de
            nacimiento. Sin registro y sin login.
          </p>
        ) : (
          <div className="space-y-1">
            <p className="text-base text-mist-100">{self.name}</p>
            <p className="text-sm text-mist-300">{formatDate(self.birthDate)}</p>
          </div>
        )}
      </header>

      <section className="mt-6 flex-1">
        <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/40 backdrop-blur-sm">
          <div className="p-5 sm:p-7">
            {step === "self" ? (
              <PersonForm
                title="Descubre tu mapa"
                hint="Primero tu fecha. Después tu nombre completo."
                nameLabel="Nombre completo"
                namePlaceholder="Nombre y apellidos"
                requireFullName
                submitLabel="Revelar mi mapa"
                initial={self ?? undefined}
                onSubmit={handleSelf}
              />
            ) : null}

            {step === "mission" && self ? (
              <ProfileMap
                name={self.name}
                birthDate={self.birthDate}
                mision={self.mision}
                nameNumbers={self.nameNumbers}
              />
            ) : null}

            {step === "pair" && self && activeOther ? (
              <div className="space-y-8">
                <PairCard
                  self={{ name: firstName(self.name), mision: self.mision }}
                  other={{ name: personLabel(activeOther), mision: activeOther.mision }}
                  relationship={activeOther.relationship}
                  relationshipLabel={RELATION_LABELS[activeOther.relationship]}
                  sharePath={buildPairPath(self.mision, activeOther.mision, {
                    a: firstName(self.name),
                    b: personLabel(activeOther),
                  })}
                >
                  <RelationMap
                    self={{ name: firstName(self.name), mision: self.mision }}
                    people={linked.map((person) => ({
                      name: personLabel(person),
                      mision: person.mision,
                      relationship: person.relationship,
                      birthKey: `${person.relationship}-${person.birthDate.year}-${person.birthDate.month}-${person.birthDate.day}-${person.name}`,
                    }))}
                    activeIndex={viewIndex}
                    onSelect={(index) => {
                      setViewIndex(index);
                      trackOnce("person_selected", { index }, `person_selected:${index}`);
                      document
                        .getElementById("pair-reading")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  />
                </PairCard>
                {atLinkLimit ? (
                  <div className="space-y-3">
                    <p className="text-center text-sm text-mist-500">
                      Gratis incluye {FREE_LINK_LIMIT} conexiones ({linked.length}/{FREE_LINK_LIMIT}
                      ). Tu círculo completo abre con Premium.
                    </p>
                    <PriceGate compact />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

          {(step === "mission" || step === "pair") && self ? (
            <div className="sticky bottom-0 min-w-0 border-t border-ink-700/80 bg-ink-950/90 px-5 py-4 backdrop-blur-md sm:px-7">
              {!atLinkLimit ? (
                <LinkPersonForm
                  submitLabel="Ver conexión"
                  onSubmit={handleLink}
                  addingAnother={linked.length > 0}
                />
              ) : null}
              <SubscribeForm />
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none">
      <title>Volver</title>
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
