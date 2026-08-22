"use client";

import { useEffect, useState } from "react";
import { EmailCapture } from "@/components/email-capture";
import { MissionCard } from "@/components/mission-card";
import { PairCard } from "@/components/pair-card";
import { PersonForm, type PersonInput } from "@/components/person-form";
import { PriceGate } from "@/components/price-gate";
import { computeMision, type NumerologyValue } from "@/lib/numerology";
import { track } from "@/lib/track";

type Step = "self" | "mission" | "other" | "pair";

interface Person extends PersonInput {
  mision: NumerologyValue;
}

function withMision(person: PersonInput): Person {
  return { ...person, mision: computeMision(person.birthDate) };
}

/** Solo el primer nombre: es como la gente se refiere a los suyos. */
function firstName(name: string): string {
  return name.trim().split(/\s+/)[0];
}

export function ReadingFlow() {
  const [step, setStep] = useState<Step>("self");
  const [self, setSelf] = useState<Person | null>(null);
  const [other, setOther] = useState<Person | null>(null);

  useEffect(() => {
    track("flow_started");
  }, []);

  useEffect(() => {
    if (step === "mission") track("second_person_prompted");
    if (step === "pair") track("pair_viewed");
  }, [step]);

  function handleSelf(person: PersonInput) {
    const resolved = withMision(person);
    setSelf(resolved);
    track("self_computed", { mision: resolved.mision });
    setStep("mission");
  }

  function handleOther(person: PersonInput) {
    const resolved = withMision(person);
    setOther(resolved);
    // Numerador de la métrica que valida la tesis relacional entera.
    track("second_person_added", { mision: resolved.mision, selfMision: self?.mision });
    setStep("pair");
  }

  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-900/40 p-5 backdrop-blur-sm sm:p-7">
      {step === "self" ? (
        <PersonForm
          title="Empieza por ti"
          hint="Nada de registro ni contraseña. Solo tu nombre y tu fecha."
          namePlaceholder="Tu nombre"
          submitLabel="Ver mi número"
          onSubmit={handleSelf}
        />
      ) : null}

      {step === "mission" && self ? (
        <div className="space-y-8">
          <MissionCard name={self.name} birthDate={self.birthDate} mision={self.mision} />

          <div className="space-y-4 border-t border-ink-700 pt-6">
            <div className="space-y-1">
              <h3 className="text-balance text-lg font-medium text-mist-100">
                Ahora lo que de verdad importa: alguien más
              </h3>
              <p className="text-sm text-mist-500">
                Tu pareja, tu mamá, tu jefe, quien sea que te esté costando entender. No le avisamos
                a nadie y no necesita registrarse.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep("other")}
              className="w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white transition hover:bg-accent-400 active:scale-[0.99]"
            >
              Añadir a una persona
            </button>
          </div>
        </div>
      ) : null}

      {step === "other" && self ? (
        <PersonForm
          title={`¿A quién quieres entender, ${firstName(self.name)}?`}
          hint="Con el nombre y la fecha basta. No hace falta la hora de nacimiento, y por eso el análisis sale completo desde el primer intento."
          namePlaceholder="Su nombre"
          submitLabel="Ver cómo se llevan"
          onSubmit={handleOther}
        />
      ) : null}

      {step === "pair" && self && other ? (
        <div className="space-y-8">
          <PairCard
            self={{ name: firstName(self.name), mision: self.mision }}
            other={{ name: firstName(other.name), mision: other.mision }}
          />

          <div className="space-y-8 border-t border-ink-700 pt-6">
            <EmailCapture mision={self.mision} />
            <PriceGate />
          </div>

          <button
            type="button"
            onClick={() => {
              setOther(null);
              setStep("other");
            }}
            className="w-full text-sm text-mist-500 underline decoration-ink-600 underline-offset-4 transition hover:text-mist-300"
          >
            Probar con otra persona
          </button>
        </div>
      ) : null}
    </div>
  );
}
