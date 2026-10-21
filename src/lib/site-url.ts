/**
 * URL base del sitio, necesaria para resolver las imágenes de vista previa.
 *
 * Sin esto Next resuelve las URLs de Open Graph contra `localhost:3000`, y
 * WhatsApp o Facebook intentarían descargar la vista previa desde ahí y
 * fallarían en silencio. Como el enlace compartido es el mecanismo de
 * crecimiento, una vista previa rota no es un detalle cosmético.
 *
 * Se prefiere el valor explícito para que el dominio propio gane sobre el que
 * asigna la plataforma, y así todas las vistas previas apunten al mismo sitio
 * aunque haya despliegues de vista previa activos.
 */
const CANONICAL_SITE = "https://www.enumerarte.com";

export function siteUrl(): URL {
  const explicit = process.env.SITE_URL;
  if (explicit) return new URL(explicit);

  if (process.env.NODE_ENV === "production") return new URL(CANONICAL_SITE);

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return new URL(`https://${vercelProduction}`);

  return new URL("http://localhost:3000");
}
