import assert from "node:assert/strict";
import { test } from "node:test";
import { subscriptionConsentError } from "../lib/lead-consent.js";
import { legalIdentity, privacyPolicy, siteDisclaimer, termsOfUse } from "./legal.js";

test("la política dice cookies, Google y el correo de contacto", () => {
  const privacy = privacyPolicy.sections.map((section) => section.paragraphs.join(" ")).join("\n");
  const terms = termsOfUse.sections.map((section) => section.paragraphs.join(" ")).join("\n");
  assert.match(privacy, /Google/);
  assert.match(privacy, /cookies/i);
  assert.match(privacy, /personas adultas/);
  assert.match(privacy, /enumerarteapp@gmail\.com/);
  assert.equal(privacy.includes("NIT"), false);
  assert.match(siteDisclaimer, /No predice/);
  assert.match(terms, /No predice/);
});

test("la suscripción exige la casilla y la versión vigente", () => {
  assert.equal(
    subscriptionConsentError({ consent: false, policyVersion: legalIdentity.policyVersion }),
    "consent_required",
  );
  assert.equal(
    subscriptionConsentError({ consent: true, policyVersion: "1999-01-01" }),
    "policy_version",
  );
  assert.equal(
    subscriptionConsentError({ consent: true, policyVersion: legalIdentity.policyVersion }),
    null,
  );
});
