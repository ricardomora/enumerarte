/**
 * Captura de correo.
 *
 * Una suscripción (promociones y ofertas) se guarda en la tabla `subscriptions`
 * de Convex. El resto de correos, los de la lectura del círculo, siguen en el
 * registro y en el proveedor de analítica si hay clave.
 *
 * Solo se almacena el correo y, en el lead del círculo, el número de misión.
 * Nunca la fecha de nacimiento completa.
 */

import { saveSubscription } from "@/lib/subscriptions";

const POSTHOG_HOST = process.env.POSTHOG_HOST ?? "https://us.i.posthog.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let payload: { email?: unknown; visitorId?: unknown; mision?: unknown; intent?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const distinctId =
    typeof payload.visitorId === "string" && payload.visitorId.length > 0
      ? payload.visitorId
      : email;

  const intent = payload.intent === "subscribe" ? "subscribe" : "lead";

  if (intent === "subscribe") {
    try {
      await saveSubscription(email);
    } catch (error) {
      console.error("No se pudo guardar la suscripción", error);
      return Response.json({ ok: false, error: "subscribe_failed" }, { status: 502 });
    }
  }

  console.log(
    JSON.stringify({
      type: intent,
      email,
      mision: payload.mision,
      at: new Date().toISOString(),
    }),
  );

  const apiKey = process.env.POSTHOG_KEY;
  // La suscripción ya sale por track("subscribed") hacia /api/events.
  // Reenviarla aquí la contaría dos veces en PostHog.
  if (apiKey && intent !== "subscribe") {
    try {
      await fetch(`${POSTHOG_HOST}/capture/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          event: "email_captured",
          distinct_id: distinctId,
          properties: {
            mision: payload.mision,
            intent,
            $set: { email },
          },
        }),
      });
    } catch (error) {
      console.error("No se pudo registrar el lead en PostHog", error);
    }
  }

  return Response.json({ ok: true });
}
