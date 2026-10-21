export const premiumCopy = {
  title: "El círculo completo",
  lead: "Guardar más vínculos y volver a ellos. Todavía no está a la venta y este botón no cobra.",
  features: [
    "Más de dos personas en tu círculo",
    "El mapa de esas personas, guardado para volver",
    "Una práctica semanal para ti y para cada vínculo",
    "Un aviso cuando esa opción se pueda usar",
  ],
  action: "Quiero que me avisen",
  confirm:
    "Todavía no está a la venta. Si dejas tu correo arriba, con la casilla marcada, te avisamos cuando se pueda guardar el círculo.",
  limitNote: (used: number, max: number) =>
    `Gratis incluye ${max} conexiones (${used}/${max}). Guardar el círculo completo todavía no está a la venta.`,
} as const;
