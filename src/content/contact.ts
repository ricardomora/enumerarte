/** Correo de la app. Todo lo que la gente escribe llega a esta bandeja. */
export const CONTACT_EMAIL = "enumerarteapp@gmail.com";

/** WhatsApp de la app, sin espacios, listo para wa.me. */
export const WHATSAPP_NUMBER = "573213322022";

export const WHATSAPP_DISPLAY = "+57 321 332 2022";

export const contactCopy = {
  title: "Escríbenos",
  body: "Si quieres más información, enterarte de las novedades o pedir una consulta personalizada, escríbenos a este correo.",
  reasons: [
    { id: "info", label: "Más información", subject: "Quiero más información" },
    { id: "updates", label: "Novedades", subject: "Quiero enterarme de las novedades" },
    {
      id: "consult",
      label: "Consulta personalizada",
      subject: "Quiero una consulta personalizada",
    },
  ],
  feedbackTitle: "Comentarios",
  feedbackHint: "Cuéntanos qué te sirvió, qué no, o qué te gustaría ver.",
  feedbackPlaceholder: "Tu comentario",
  feedbackSubmit: "Enviar comentario",
  feedbackSubject: "Comentario sobre Enumerarte",
  feedbackNote: "Se abre tu correo con el mensaje, dirigido a enumerarteapp@gmail.com.",
  feedbackEmpty: "Escribe tu comentario antes de enviarlo.",
  feedbackOpened: "Listo. Si no se abrió tu correo, escríbenos directo a enumerarteapp@gmail.com.",
  whatsappTitle: "Escríbenos a nuestro WhatsApp",
  whatsappBody: "Si prefieres un mensaje directo, estamos en este número.",
  whatsappAction: "Abrir WhatsApp",
  subscribeTitle: "Suscríbete",
  subscribeBody: "Novedades, funciones nuevas y un aviso cuando la app esté lista. Solo tu correo.",
  subscribePlaceholder: "tu@correo.com",
  subscribeSubmit: "Suscribirme",
  subscribeSending: "Guardando",
  subscribeDone: "Listo. Te escribimos cuando haya novedades o cuando la app esté lista.",
  subscribeError: "No se pudo guardar. Revisa el correo e intenta de nuevo.",
  subscribePrivacy: "Guardamos tu correo para avisarte. Puedes pedir que lo borremos.",
} as const;
