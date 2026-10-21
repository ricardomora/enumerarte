/**
 * Recolector de eventos.
 *
 * Reenvía a PostHog si hay clave. El correo, el nombre y la fecha no viajan:
 * si el cliente los manda, se descartan antes del log y del reenvío.
 */

import { allowRequest, clientAddress, EVENT_LIMIT, redactProperties } from "@/lib/request-guard";

const POSTHOG_HOST = process.env.POSTHOG_HOST ?? "https://us.i.posthog.com";

interface EventPayload {
  event?: unknown;
  visitorId?: unknown;
  properties?: unknown;
}

export async function POST(request: Request) {
  if (!allowRequest(`events:${clientAddress(request)}`, EVENT_LIMIT.limit, EVENT_LIMIT.windowMs)) {
    return new Response(null, { status: 429 });
  }

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
    typeof visitorId === "string" && visitorId.length > 0 && visitorId.length <= 80
      ? visitorId
      : "anonymous";
  const properties = redactProperties(
    payload.properties !== null && typeof payload.properties === "object"
      ? (payload.properties as Record<string, unknown>)
      : {},
  );

  console.log(
    JSON.stringify({
      type: "analytics",
      event,
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
    } catch {
      console.error("No se pudo reenviar el evento a PostHog");
    }
  }

  return new Response(null, { status: 204 });
}
