/**
 * Captura de correo.
 *
 * Una suscripción se guarda en Convex solo con la casilla de la política
 * vigente. El registro de esta ruta no incluye el correo.
 */

import { legalIdentity } from "@/content/legal";
import { subscriptionConsentError } from "@/lib/lead-consent";
import { allowRequest, clientAddress, LEAD_LIMIT } from "@/lib/request-guard";
import { saveSubscription } from "@/lib/subscriptions";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  if (!allowRequest(`leads:${clientAddress(request)}`, LEAD_LIMIT.limit, LEAD_LIMIT.windowMs)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: {
    email?: unknown;
    visitorId?: unknown;
    mision?: unknown;
    intent?: unknown;
    consent?: unknown;
    policyVersion?: unknown;
  };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const intent = payload.intent === "subscribe" ? "subscribe" : "lead";
  if (intent !== "subscribe") {
    return Response.json({ ok: false, error: "unsupported_intent" }, { status: 422 });
  }

  const consentError = subscriptionConsentError({
    consent: payload.consent,
    policyVersion: payload.policyVersion,
  });
  if (consentError) {
    return Response.json({ ok: false, error: consentError }, { status: 422 });
  }

  try {
    await saveSubscription(email, legalIdentity.policyVersion);
  } catch {
    console.error("No se pudo guardar la suscripción");
    return Response.json({ ok: false, error: "subscribe_failed" }, { status: 502 });
  }

  console.log(
    JSON.stringify({
      type: "subscribe",
      at: new Date().toISOString(),
    }),
  );

  return Response.json({ ok: true });
}
