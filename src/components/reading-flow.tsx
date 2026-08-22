"use client";

import { useEffect, useState } from "react";
import { EmailCapture } from "@/components/email-capture";
import { PairCard } from "@/components/pair-card";
import { PersonForm, type PersonInput } from "@/components/person-form";
import { PriceGate } from "@/components/price-gate";
import { ProfileMap } from "@/components/profile-map";
import { ShareButtons } from "@/components/share-buttons";
import { StickyFlowAction } from "@/components/sticky-flow-action";
import { FREE_LINK_LIMIT } from "@/lib/limits";
import { computeProfile, type NameNumbers, type NumerologyValue } from "@/lib/numerology";
import { track } from "@/lib/track";

type Step = "self" | "mission" | "other" | "pair";

interface Person extends PersonInput {
  mision: NumerologyValue;
  nameNumbers: NameNumbers | null;
}

type OtherFormMode = { kind: "add" } | { kind: "replace"; index: number };

function resolvePerson(person: PersonInput): Person {
  const profile = computeProfile({ birthDate: person.birthDate, fullName: person.name });
  return {
    ...person,
    mision: profile.mision,
    nameNumbers: profile.name,
  };
}

/** Solo el primer nombre: es como la gente se refiere a los suyos. */
function firstName(name: string): string {
  return name.trim().split(/\s+/)[0];
}

export function ReadingFlow() {
  const [step, setStep] = useState<Step>("self");
  const [self, setSelf] = useState<Person | null>(null);
  const [linked, setLinked] = useState<Person[]>([]);
  const [viewIndex, setViewIndex] = useState(0);
  const [otherFormMode, setOtherFormMode] = useState<OtherFormMode>({ kind: "add" });

  const atLinkLimit = linked.length >= FREE_LINK_LIMIT;
  const activeOther = linked[viewIndex] ?? null;

  useEffect(() => {
    track("flow_started");
  }, []);

  useEffect(() => {
    if (step === "mission") track("second_person_prompted");
    if (step === "pair") track("pair_viewed");
  }, [step]);

  function handleSelf(person: PersonInput) {
    const resolved = resolvePerson(person);
    setSelf(resolved);
    track("self_computed", { mision: resolved.mision });
    setStep("mission");
  }

  function handleOther(person: PersonInput) {
    const resolved = resolvePerson(person);

    if (otherFormMode.kind === "replace") {
      setLinked((current) =>
        current.map((entry, index) => (index === otherFormMode.index ? resolved : entry)),
      );
      setViewIndex(otherFormMode.index);
      setStep("pair");
      return;
    }

    if (linked.length >= FREE_LINK_LIMIT) {
      track("price_clicked", { tier: "premium", reason: "link_limit" });
      setStep("pair");
      return;
    }

    const nextLinked = [...linked, resolved];
    setLinked(nextLinked);
    setViewIndex(nextLinked.length - 1);
    track("second_person_added", {
      mision: resolved.mision,
      selfMision: self?.mision,
      linkCount: nextLinked.length,
    });
    setStep("pair");
  }

  function startAddOther() {
    if (atLinkLimit) {
      track("price_clicked", { tier: "premium", reason: "link_limit" });
      return;
    }
    setOtherFormMode({ kind: "add" });
    setStep("other");
  }

  function startReplaceOther(index: number) {
    setOtherFormMode({ kind: "replace", index });
    setStep("other");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/40 backdrop-blur-sm">
      <div className="p-5 sm:p-7">
        {step === "self" ? (
          <PersonForm
            title="Descubre tu mapa"
            hint="Nombre completo y fecha de nacimiento. Sin registro, sin contraseña — solo tu señal personal."
            nameLabel="Nombre completo"
            namePlaceholder="Nombre y apellidos"
            requireFullName
            submitLabel="Revelar mi mapa"
            onSubmit={handleSelf}
          />
        ) : null}

        {step === "mission" && self ? (
          <div className="space-y-6 pb-2">
            <ProfileMap
              name={self.name}
              birthDate={self.birthDate}
              mision={self.mision}
              nameNumbers={self.nameNumbers}
            />
          </div>
        ) : null}

        {step === "other" && self ? (
          <PersonForm
            title={
              otherFormMode.kind === "replace"
                ? `Cambiar a ${firstName(linked[otherFormMode.index]?.name ?? "esta persona")}`
                : `¿Quién es esa persona, ${firstName(self.name)}?`
            }
            hint={
              otherFormMode.kind === "add" && linked.length === FREE_LINK_LIMIT - 1
                ? `Tu ${FREE_LINK_LIMIT}ª conexión gratis. Para todo tu círculo, Premium viene en camino.`
                : "Nombre y fecha — con eso vemos la dinámica entre ustedes dos."
            }
            namePlaceholder="Su nombre"
            submitLabel="Ver la conexión"
            onSubmit={handleOther}
          />
        ) : null}

        {step === "pair" && self && activeOther ? (
          <div className="space-y-8">
            {linked.length > 1 ? (
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Personas vinculadas">
                {linked.map((person, index) => (
                  <button
                    key={`${person.name}-${person.birthDate.year}-${person.birthDate.month}-${person.birthDate.day}`}
                    type="button"
                    role="tab"
                    aria-selected={index === viewIndex}
                    onClick={() => setViewIndex(index)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      index === viewIndex
                        ? "bg-accent-500/20 text-mist-100 ring-1 ring-accent-500/50"
                        : "bg-ink-900/60 text-mist-500 hover:text-mist-300"
                    }`}
                  >
                    Con {firstName(person.name)}
                  </button>
                ))}
              </div>
            ) : null}

            <PairCard
              self={{ name: firstName(self.name), mision: self.mision }}
              other={{ name: firstName(activeOther.name), mision: activeOther.mision }}
            />

            <div className="space-y-8 border-t border-ink-700 pt-6">
              <ShareButtons
                a={self.mision}
                b={activeOther.mision}
                selfName={firstName(self.name)}
                otherName={firstName(activeOther.name)}
              />
              <EmailCapture mision={self.mision} />

              {atLinkLimit ? (
                <div className="space-y-3">
                  <p className="text-center text-sm text-mist-500">
                    Gratis incluye {FREE_LINK_LIMIT} conexiones ({linked.length}/{FREE_LINK_LIMIT}).
                    Tu círculo completo abre con Premium.
                  </p>
                  <PriceGate compact />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => startReplaceOther(viewIndex)}
                  className="w-full text-sm text-mist-500 underline decoration-ink-600 underline-offset-4 transition hover:text-mist-300"
                >
                  Cambiar a {firstName(activeOther.name)}
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>

      {step === "mission" && self ? (
        <StickyFlowAction
          label="Añadir a alguien importante"
          hint="Tu pareja, tu mamá, tu jefe — mira qué pasa entre ustedes"
          onClick={startAddOther}
        />
      ) : null}

      {step === "pair" && self && activeOther && !atLinkLimit ? (
        <StickyFlowAction
          label={`Añadir otra persona (${linked.length}/${FREE_LINK_LIMIT})`}
          onClick={startAddOther}
        />
      ) : null}
    </div>
  );
}
