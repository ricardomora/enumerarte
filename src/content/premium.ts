export const premiumCopy = {
  title: "El círculo completo",
  lead: "Guardar más vínculos y volver a ellos. Déjanos tu correo y te avisamos cuando se pueda.",
  features: [
    "Más de dos personas en tu círculo",
    "El mapa de esas personas, guardado para volver",
    "Una práctica semanal para ti y para cada vínculo",
    "Un aviso cuando esa opción se pueda usar",
  ],
  action: "Quiero que me avisen",
  confirm:
    "Si dejas tu correo arriba, con la casilla marcada, te avisamos cuando se puedan guardar más vínculos. Este botón no cobra.",
  limitNote: (used: number, max: number) =>
    `Gratis guarda ${max} conexiones (${used}/${max}). Déjanos tu correo y te avisamos cuando se puedan guardar más.`,
} as const;
