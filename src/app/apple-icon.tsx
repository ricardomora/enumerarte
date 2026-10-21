import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** El mismo nodo, a tamaño de icono de inicio en el teléfono. */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#07060f",
      }}
    >
      <div
        style={{
          width: 112,
          height: 112,
          borderRadius: 999,
          border: "8px solid #f5a524",
          background: "rgba(245,165,36,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
    </div>,
    size,
  );
}
