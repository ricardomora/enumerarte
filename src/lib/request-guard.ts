interface RateBucket {
  hits: number[];
}

/**
 * Límite por proceso. En un hosting con varias instancias cada una cuenta lo
 * suyo: frena una ráfaga contra el proceso que la recibió, no un cupo global.
 */
export function createRateLimiter(now: () => number = Date.now) {
  const buckets = new Map<string, RateBucket>();

  return function allow(key: string, limit: number, windowMs: number): boolean {
    const current = now();
    const bucket = buckets.get(key) ?? { hits: [] };
    bucket.hits = bucket.hits.filter((hit) => current - hit < windowMs);
    if (bucket.hits.length >= limit) {
      buckets.set(key, bucket);
      return false;
    }
    bucket.hits.push(current);
    buckets.set(key, bucket);
    return true;
  };
}

export const allowRequest = createRateLimiter();

export const LEAD_LIMIT = { limit: 8, windowMs: 15 * 60 * 1000 };
export const EVENT_LIMIT = { limit: 180, windowMs: 60 * 1000 };

export function clientAddress(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first.slice(0, 64);
  return "unknown";
}

const BLOCKED_PROPERTY = new Set(["email", "correo", "birthdate", "fullname", "name", "nombre"]);

/** Quita del evento cualquier campo que pueda ser un correo, un nombre o una fecha. */
export function redactProperties(properties: Record<string, unknown>): Record<string, unknown> {
  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (BLOCKED_PROPERTY.has(key.toLowerCase())) continue;
    if (typeof value === "string" && value.includes("@")) continue;
    clean[key] = value;
  }
  return clean;
}
