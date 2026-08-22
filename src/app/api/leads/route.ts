/**
 * Captura de correo de la Fase 0.
 *
 * Guardar la lista en el proveedor de analítica es suficiente mientras el
 * objetivo sea medir conversión y poder exportar los contactos. Cuando la Fase 1
 * traiga Convex, este archivo pasa a escribir en la tabla de leads y nada más
 * cambia en el cliente.
 *
 * Solo se almacena el correo y el número de misión, nunca la fecha de nacimiento
 * completa: para medir conversión no hace falta y guardarla sería recoger un dato
 * sensible sin propósito.
 */

const POSTHOG_HOST = process.env.POSTHOG_HOST ?? "https://us.i.posthog.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let payload: { email?: unknown; visitorId?: unknown; mision?: unknown };
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

  console.log(
    JSON.stringify({ type: "lead", email, mision: payload.mision, at: new Date().toISOString() }),
  );

  const apiKey = process.env.POSTHOG_KEY;
  if (apiKey) {
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
