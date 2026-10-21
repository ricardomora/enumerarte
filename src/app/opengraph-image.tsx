import { ImageResponse } from "next/og";

/**
 * Vista previa de la home cuando alguien pega enumerarte.com en WhatsApp.
 * No lleva un número de camino de vida: esta página no es la lectura de nadie.
 */

export const alt = "Enumerarte · Tu mapa y tus vínculos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#07060f",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 10,
          color: "#c4b5fd",
          textTransform: "uppercase",
        }}
      >
        Enumerarte
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 168,
          height: 168,
          marginTop: 36,
          borderRadius: 999,
          border: "6px solid #f5a524",
          background: "rgba(245,165,36,0.16)",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: "#f8d48a",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          fontSize: 48,
          color: "#f4f2ff",
        }}
      >
        Tu mapa. Tus vínculos. Tus señales.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 24,
          color: "#8d89a3",
        }}
      >
        enumerarte.com
      </div>
    </div>,
    size,
  );
}
