"use client";

import { useEffect, useState } from "react";
import { EmailCapture } from "@/components/email-capture";
import { PairCard } from "@/components/pair-card";
import { PersonForm, type PersonInput } from "@/components/person-form";
import { PriceGate } from "@/components/price-gate";
import { ProfileMap } from "@/components/profile-map";
import { ShareButtons } from "@/components/share-buttons";
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
    <div className="rounded-2xl border border-ink-700 bg-ink-900/40 p-5 backdrop-blur-sm sm:p-7">
      {step === "self" ? (
        <PersonForm
          title="Empieza por ti"
          hint="Nada de registro ni contraseña. Con nombre completo y fecha activamos Núcleo, Alma, Escudo y Destino."
          nameLabel="Nombre completo"
          namePlaceholder="Nombre y apellidos"
          requireFullName
          submitLabel="Ver mi mapa"
          onSubmit={handleSelf}
        />
      ) : null}

      {step === "mission" && self ? (
        <div className="space-y-8">
          <ProfileMap
            name={self.name}
            birthDate={self.birthDate}
            mision={self.mision}
            nameNumbers={self.nameNumbers}
          />

          <div className="space-y-4 border-t border-ink-700 pt-6">
            <div className="space-y-1">
              <h3 className="text-balance text-lg font-medium text-mist-100">
                Ahora lo que de verdad importa: alguien más
              </h3>
              <p className="text-sm text-mist-500">
                Tu pareja, tu mamá, tu jefe, quien sea que te esté costando entender. No le avisamos
                a nadie y no necesita registrarse. Gratis puedes vincular hasta {FREE_LINK_LIMIT}{" "}
                personas.
              </p>
            </div>
            <button
              type="button"
              onClick={startAddOther}
              className="w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white transition hover:bg-accent-400 active:scale-[0.99]"
            >
              Añadir a una persona
            </button>
          </div>
        </div>
      ) : null}

      {step === "other" && self ? (
        <PersonForm
          title={
            otherFormMode.kind === "replace"
              ? `Cambiar a ${firstName(linked[otherFormMode.index]?.name ?? "esta persona")}`
              : `¿A quién quieres entender, ${firstName(self.name)}?`
          }
          hint={
            otherFormMode.kind === "add" && linked.length === FREE_LINK_LIMIT - 1
              ? `Esta es tu ${FREE_LINK_LIMIT}ª persona gratis. Para un círculo más grande, Premium está en camino.`
              : "Con el nombre y la fecha basta. No hace falta la hora de nacimiento, y por eso el análisis sale completo desde el primer intento."
          }
          namePlaceholder="Su nombre"
          submitLabel="Ver cómo se llevan"
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
                  Gratis incluye hasta {FREE_LINK_LIMIT} personas ({linked.length}/{FREE_LINK_LIMIT}
                  ). Para mapear a todo tu círculo necesitas Premium.
                </p>
                <PriceGate compact />
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={startAddOther}
                  className="w-full rounded-xl border border-accent-500/50 bg-accent-500/15 px-5 py-3.5 font-medium text-mist-100 transition hover:bg-accent-500/25"
                >
                  Añadir otra persona ({linked.length}/{FREE_LINK_LIMIT} gratis)
                </button>
                <button
                  type="button"
                  onClick={() => startReplaceOther(viewIndex)}
                  className="w-full text-sm text-mist-500 underline decoration-ink-600 underline-offset-4 transition hover:text-mist-300"
                >
                  Cambiar a {firstName(activeOther.name)}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
