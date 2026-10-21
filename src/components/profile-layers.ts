export type ProfileLayer = "nucleo" | "escudo" | "alma" | "destino";

export interface LayerTone {
  hex: string;
  glow: string;
  ring: string;
  text: string;
  glowClass: string;
  label: string;
}

/** Cada parte del mapa lleva su propio color. El número no cambia el significado. */
export const LAYER_TONE: Record<ProfileLayer, LayerTone> = {
  nucleo: {
    hex: "#f5a524",
    glow: "rgba(245,165,36,0.55)",
    ring: "border-[#f5a524]",
    text: "text-[#f8d48a]",
    glowClass: "shadow-[0_0_28px_rgba(245,165,36,0.55)]",
    label: "text-[#f5a524]",
  },
  escudo: {
    hex: "#c084fc",
    glow: "rgba(168,85,247,0.55)",
    ring: "border-[#c084fc]",
    text: "text-[#f3e8ff]",
    glowClass: "shadow-[0_0_28px_rgba(168,85,247,0.55)]",
    label: "text-[#d8b4fe]",
  },
  alma: {
    hex: "#fb923c",
    glow: "rgba(251,146,60,0.5)",
    ring: "border-[#fb923c]",
    text: "text-[#ffedd5]",
    glowClass: "shadow-[0_0_28px_rgba(251,146,60,0.5)]",
    label: "text-[#fdba74]",
  },
  destino: {
    hex: "#22d3ee",
    glow: "rgba(34,211,238,0.5)",
    ring: "border-[#22d3ee]",
    text: "text-[#ecfeff]",
    glowClass: "shadow-[0_0_28px_rgba(34,211,238,0.5)]",
    label: "text-[#67e8f9]",
  },
};

export const NUMBERS_MAP_TITLE =
  "Estos son tus otros números, dale click al número para conocer más";

export const LAYER_COPY: Record<ProfileLayer, { title: string; subtitle: string }> = {
  nucleo: { title: "Camino de Vida", subtitle: "Misión de Vida" },
  escudo: { title: "Personalidad", subtitle: "Tu Imagen Externa" },
  alma: { title: "Alma", subtitle: "Deseo del Corazón" },
  destino: { title: "Expresión", subtitle: "Destino" },
};

export function layerTitle(layer: ProfileLayer): string {
  return LAYER_COPY[layer].title;
}
