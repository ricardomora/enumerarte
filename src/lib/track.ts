/**
 * Instrumentación de la Fase 0.
 *
 * Solo existe para responder una pregunta: ¿qué porcentaje de la gente que
 * calcula su propio número añade a una segunda persona? Esa razón
 * (`second_person_added` sobre `self_computed`) valida o refuta la tesis
 * relacional entera, que es lo único que la Fase 0 tiene que averiguar.
 *
 * Los eventos se envían al servidor y no directo al proveedor de analítica para
 * que la clave no quede en el cliente y para tener un único punto donde
 * cambiar de proveedor.
 */

export type TrackEvent =
  | "flow_started"
  /** Denominador de la métrica clave. */
  | "self_computed"
  | "calculation_expanded"
  | "second_person_prompted"
  /** Numerador de la métrica clave. */
  | "second_person_added"
  | "pair_viewed"
  | "email_captured"
  /** Puerta falsa: clic en un precio para un producto que todavía no existe. */
  | "price_clicked"
  /** Alguien decide difundir su lectura. Entrada del bucle viral. */
  | "share_clicked"
  /** Alguien llega desde un enlace compartido. Salida del bucle viral. */
  | "share_opened";

const VISITOR_KEY = "enumerarte.visitor";

export function getVisitorId(): string {
  if (typeof window === "undefined") return "server";
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const fresh = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, fresh);
    return fresh;
  } catch {
    // Navegación privada o almacenamiento bloqueado: el evento sigue sirviendo
    // en el agregado aunque no podamos deduplicar por visitante.
    return "anonymous";
  }
}

export function track(event: TrackEvent, properties: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    event,
    visitorId: getVisitorId(),
    properties: { ...properties, path: window.location.pathname },
  });

  // sendBeacon sobrevive a que el usuario navegue o cierre la pestaña justo
  // después de la interacción, que es exactamente cuando ocurren los eventos
  // de abandono que más interesan medir.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // La analítica nunca debe romper la experiencia.
  });
}
