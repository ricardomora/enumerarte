import { ImageResponse } from "next/og";
import { getPair } from "@/content";
import { parsePairKey } from "@/lib/numerology";

/**
 * Imagen de vista previa de la lectura compartida.
 *
 * Es lo que decide si un enlace pegado en WhatsApp se abre o se ignora, así que
 * cuenta como parte del mecanismo de crecimiento y no como adorno.
 *
 * Muestra los dos números y el titular de la dinámica, nunca los nombres.
 * `opengraph-image` solo recibe los parámetros de ruta, y además meter nombres
 * de terceros en una imagen cacheada en CDN sería peor para la privacidad.
 */

export const alt = "Lectura de par en Enumerarte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const parsed = parsePairKey(pair);
  const headline = parsed ? getPair(parsed.a, parsed.b).headline : "Enumerarte";

  const glyph = (value: number, isMaster: boolean) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 160,
        height: 160,
        borderRadius: 999,
        border: `3px solid ${isMaster ? "#c9a227" : "#9a80ff"}`,
        background: isMaster ? "rgba(201,162,39,0.12)" : "rgba(124,92,255,0.12)",
        color: isMaster ? "#e6c04a" : "#9a80ff",
        fontSize: 76,
      }}
    >
      {value}
    </div>
  );

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#0b0a14",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 8,
          color: "#9a80ff",
          textTransform: "uppercase",
        }}
      >
        Enumerarte
      </div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#c8c4d8" }}>
        Te comparten esta conexión
      </div>

      {parsed ? (
        <div style={{ display: "flex", alignItems: "center", gap: 48, marginTop: 48 }}>
          {glyph(parsed.a, parsed.a > 9)}
          <div style={{ display: "flex", color: "#3a3560", fontSize: 56 }}>·</div>
          {glyph(parsed.b, parsed.b > 9)}
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          marginTop: 56,
          fontSize: 60,
          lineHeight: 1.15,
          color: "#f4f2ff",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        {headline}
      </div>
    </div>,
    size,
  );
}
