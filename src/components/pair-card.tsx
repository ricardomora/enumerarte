import { SectionShare } from "@/components/section-share";
import { getPair } from "@/content";
import type { NumerologyValue } from "@/lib/numerology";
import { clipShareLine, type ShareCardData } from "@/lib/share";

export function PairCard({
  self,
  other,
  relationshipLabel,
  sharePath,
  children,
}: {
  self: { name: string; mision: NumerologyValue };
  other: { name: string; mision: NumerologyValue };
  relationshipLabel: string;
  sharePath: string;
  children?: React.ReactNode;
}) {
  const pair = getPair(self.mision, other.mision);
  const who = `${self.name} y ${other.name}`;
  const connection: ShareCardData = {
    kicker: `${self.name} te comparte esta conexión con ${other.name}`,
    message: pair.headline,
    detail: clipShareLine(pair.body),
    left: { value: self.mision, label: self.name },
    right: { value: other.mision, label: other.name },
  };

  return (
    <article id="pair-reading" className="animate-rise space-y-8">
      <header className="space-y-2 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
          {relationshipLabel}
        </p>
        <p className="text-sm text-mist-500">{who}</p>
        <h2 className="text-balance text-2xl font-medium text-mist-100 sm:text-3xl">
          {pair.headline}
        </h2>
      </header>

      <PairSection
        label="Qué pasa entre ustedes"
        text={`${who}\n${pair.headline}\n${pair.body}`}
        section="par:cuerpo"
        path={sharePath}
        card={connection}
      >
        <p className="text-pretty text-base leading-relaxed text-mist-100">{pair.body}</p>
      </PairSection>

      <PairSection
        label="Señal para esta semana"
        text={`${who}\nSeñal para esta semana\n${pair.practice}`}
        section="par:practica"
        path={sharePath}
        tone="accent"
        card={{
          ...connection,
          message: "Señal para esta semana",
          detail: clipShareLine(pair.practice),
        }}
      >
        <p className="text-pretty text-base leading-relaxed text-mist-100">{pair.practice}</p>
      </PairSection>

      {children}
    </article>
  );
}

function PairSection({
  label,
  text,
  section,
  path,
  card,
  tone = "neutral",
  children,
}: {
  label: string;
  text: string;
  section: string;
  path: string;
  card: ShareCardData;
  tone?: "neutral" | "accent";
  children: React.ReactNode;
}) {
  const frame =
    tone === "accent"
      ? "border-accent-500/25 border-l-4 border-l-accent-500 bg-accent-500/6"
      : "border-ink-700/80 bg-ink-900/50";

  return (
    <section className={`rounded-xl border p-4 backdrop-blur-sm ${frame}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="pt-1 text-xs uppercase tracking-wider text-accent-400">{label}</h3>
        <SectionShare section={section} text={text} path={path} card={card} />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}
