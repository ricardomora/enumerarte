export type ProfileLayer = "nucleo" | "escudo" | "alma" | "destino";

export const LAYER_COPY: Record<ProfileLayer, { title: string; subtitle: string }> = {
  nucleo: { title: "Camino de Vida", subtitle: "Misión de Vida" },
  escudo: { title: "Personalidad", subtitle: "Tu Imagen Externa" },
  alma: { title: "Alma", subtitle: "Deseo del Corazón" },
  destino: { title: "Expresión", subtitle: "Destino" },
};

export function layerTitle(layer: ProfileLayer): string {
  return LAYER_COPY[layer].title;
}
