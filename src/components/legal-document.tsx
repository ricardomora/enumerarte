"use client";

import { BackHome } from "@/components/back-home";
import { useLocale, useUi } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { Starfield } from "@/components/starfield";
import { privacyPolicyEn, termsOfUseEn, updatedLabelEn } from "@/content/en/legal-pages";
import { legalIdentity, privacyPolicy, termsOfUse } from "@/content/legal";

export function LegalDocument({ kind }: { kind: "privacy" | "terms" }) {
  const { locale } = useLocale();
  const ui = useUi();
  const document =
    kind === "privacy"
      ? locale === "en"
        ? privacyPolicyEn
        : privacyPolicy
      : locale === "en"
        ? termsOfUseEn
        : termsOfUse;
  const updated = locale === "en" ? updatedLabelEn : legalIdentity.updatedLabel;

  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <Starfield />
      <BackHome />
      <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
        {legalIdentity.brand}
      </p>
      <h1 className="mt-3 text-balance text-center text-2xl font-medium text-mist-100 sm:text-3xl">
        {document.title}
      </h1>
      <p className="mt-3 text-center text-sm text-mist-500">
        {ui.effective} {updated}
      </p>
      <div className="mt-8 space-y-8">
        {document.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-3">
            <h2 className="text-lg font-medium text-mist-100">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty text-sm leading-relaxed text-mist-300">
                {paragraph}
              </p>
            ))}
            {"links" in section && section.links ? (
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mist-100 underline decoration-ink-600 underline-offset-4"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      <SiteFooter className="mt-12" />
    </main>
  );
}
