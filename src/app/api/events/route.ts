/**
 * Recolector de eventos.
 *
 * Único punto donde se decide a dónde va la analítica. Hoy reenvía a PostHog si
 * hay clave configurada y siempre deja un registro estructurado, que en Vercel
 * queda consultable en los logs. Cambiar de proveedor es cambiar este archivo.
 *
 * Deliberadamente no se guarda nada identificable: el `visitorId` es un UUID
 * generado en el cliente y no se registran nombres ni fechas de nacimiento.
 */

const POSTHOG_HOST = process.env.POSTHOG_HOST ?? "https://us.i.posthog.com";

interface EventPayload {
  event?: unknown;
  visitorId?: unknown;
  properties?: unknown;
}

export async function POST(request: Request) {
  let payload: EventPayload;
  try {
    payload = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const { event, visitorId } = payload;
  if (typeof event !== "string" || event.length === 0 || event.length > 64) {
    return new Response(null, { status: 400 });
  }

  const distinctId =
    typeof visitorId === "string" && visitorId.length > 0 ? visitorId : "anonymous";
  const properties =
    payload.properties !== null && typeof payload.properties === "object"
      ? (payload.properties as Record<string, unknown>)
      : {};

  console.log(
    JSON.stringify({
      type: "analytics",
      event,
      distinctId,
      properties,
      at: new Date().toISOString(),
    }),
  );

  const apiKey = process.env.POSTHOG_KEY;
  if (apiKey) {
    try {
      const response = await fetch(`${POSTHOG_HOST}/capture/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          event,
          distinct_id: distinctId,
          properties,
        }),
      });
      if (!response.ok) {
        console.error("PostHog rechazó el evento", response.status);
      }
    } catch (error) {
      console.error("No se pudo reenviar el evento a PostHog", error);
    }
  }

  // 204 y sin cuerpo: sendBeacon no lee la respuesta.
  return new Response(null, { status: 204 });
}
