import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";

/** Escribe el correo en la tabla `subscriptions` del deployment de Convex. */
export async function saveSubscription(email: string): Promise<void> {
  const url = process.env.CONVEX_URL;
  if (!url) {
    throw new Error("Falta CONVEX_URL");
  }

  const client = new ConvexHttpClient(url);
  await client.mutation(api.subscriptions.subscribe, { email });
}
