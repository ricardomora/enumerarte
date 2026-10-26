import type { RelationshipType } from "@/lib/numerology";
import type { Locale } from "./types";

const monthsEs = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

const monthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const relationsEs: Record<RelationshipType, string> = {
  pareja: "Pareja",
  familia: "Familia",
  amistad: "Amistad",
  trabajo: "Trabajo",
};

const relationsEn: Record<RelationshipType, string> = {
  pareja: "Partner",
  familia: "Family",
  amistad: "Friend",
  trabajo: "Work",
};

const layersEs: LayerCopy = {
  nucleo: { title: "Camino de Vida", subtitle: "Misión de Vida" },
  escudo: { title: "Personalidad", subtitle: "Tu Imagen Externa" },
  alma: { title: "Alma", subtitle: "Deseo del Corazón" },
  destino: { title: "Expresión", subtitle: "Destino" },
};

const layersEn: LayerCopy = {
  nucleo: { title: "Life Path", subtitle: "Life Mission" },
  escudo: { title: "Personality", subtitle: "Your Outer Image" },
  alma: { title: "Soul", subtitle: "Heart's Desire" },
  destino: { title: "Expression", subtitle: "Destiny" },
};

export interface LayerCopy {
  nucleo: { title: string; subtitle: string };
  escudo: { title: string; subtitle: string };
  alma: { title: string; subtitle: string };
  destino: { title: string; subtitle: string };
}

export interface UiCopy {
  languageLabel: string;
  months: readonly string[];
  day: string;
  month: string;
  year: string;
  relations: Record<RelationshipType, string>;
  layers: LayerCopy;
  and: string;
  you: string;
  someone: string;
  back: string;
  backHome: string;
  backToMap: string;
  homeTitle: string;
  homeLead: string;
  homeLink: string;
  discoverTitle: string;
  discoverHint: string;
  fullName: string;
  fullNamePlaceholder: string;
  reveal: string;
  seeConnection: string;
  birthDate: string;
  relationship: string;
  addName: string;
  linkFirst: string;
  linkMore: string;
  missingDate: string;
  invalidDate: string;
  futureDate: string;
  shortName: string;
  incompleteName: string;
  missingRelationship: string;
  howYouMove: string;
  whatYouBring: string;
  whereYouGrow: string;
  moreClosed: string;
  moreOpen: string;
  underPressure: string;
  inBonds: string;
  whatOthersSee: string;
  weekly: string;
  betweenYou: string;
  pairNumbers: (left: number, right: number) => string;
  numbersMapTitle: string;
  connectionsTitle: string;
  peopleMap: string;
  locked: string;
  revealedWithName: string;
  nameLocked: (label: string) => string;
  tension: (life: number, label: string, other: number) => string;
  calcShow: (subject: string) => string;
  calcHide: string;
  calcVerify: string;
  sum: string;
  masterStop: string;
  vowels: string;
  consonants: string;
  allLetters: string;
  soulRule: string;
  shieldRule: string;
  destinyRule: string;
  sharesLayer: (who: string, layer: string) => string;
  sharesConnection: (from: string, to: string) => string;
  sharesMap: (who: string) => string;
  sharesPeople: (who: string) => string;
  share: string;
  closeShare: string;
  close: string;
  previewTitle: string;
  preparing: string;
  shareNote: string;
  sendImage: string;
  saveImage: string;
  copyText: string;
  copied: string;
  shareReady: string;
  shareSavedApp: string;
  shareSavedDevice: string;
  shareFailed: string;
  homeNote: string;
  pairNote: string;
  brand: string;
  disclaimer: string;
  footerLabel: string;
  footerLinks: readonly { href: string; label: string }[];
  effective: string;
  notFoundTitle: string;
  notFoundBody: string;
  errorTitle: string;
  errorBody: string;
  retry: string;
  exampleKicker: string;
  exampleTitle: string;
  exampleLead: string;
  examplePairLink: string;
  practiceLabel: string;
  yourMapTitle: string;
  yourMapBody: string;
  pathsTitle: string;
  pathsLead: string;
  whoTheyAre: string;
  numberConnections: string;
  limitNote: (used: number, max: number) => string;
  premiumTitle: string;
  premiumLead: string;
  premiumFeatures: readonly string[];
  premiumAction: string;
  premiumConfirm: string;
  subscribeTitle: string;
  subscribePlaceholder: string;
  subscribeSubmit: string;
  subscribeSending: string;
  subscribeConsentLead: string;
  subscribeConsentLink: string;
  subscribeConsentMissing: string;
  subscribeDone: string;
  subscribeError: string;
  contactTitle: string;
  contactBody: string;
  contactReasons: readonly { id: string; label: string; subject: string }[];
  feedbackTitle: string;
  feedbackHint: string;
  feedbackPlaceholder: string;
  feedbackSubmit: string;
  feedbackSubject: string;
  feedbackNote: string;
  feedbackEmpty: string;
  feedbackOpened: string;
  whatsappTitle: string;
  whatsappBody: string;
  whatsappAction: string;
  masterKicker: (master: number) => string;
  masterLead: (master: number, root: number) => string;
}

const es: UiCopy = {
  languageLabel: "Idioma",
  months: monthsEs,
  day: "Día",
  month: "Mes",
  year: "Año",
  relations: relationsEs,
  layers: layersEs,
  and: "y",
  you: "Tú",
  someone: "Alguien",
  back: "Volver",
  backHome: "Volver al inicio",
  backToMap: "Volver a tu mapa",
  homeTitle: "Tu mapa. Tus vínculos. Tus señales.",
  homeLead:
    "Descubre lo que dicen tus números sobre ti y sobre quienes te importan. Sin hora de nacimiento. Sin registro y sin login.",
  homeLink: "Lee un mapa de ejemplo, sin escribir tu fecha.",
  discoverTitle: "Descubre tu mapa",
  discoverHint: "Primero tu fecha. Después tu nombre completo.",
  fullName: "Nombre completo",
  fullNamePlaceholder: "Nombre y apellidos",
  reveal: "Revelar mi mapa",
  seeConnection: "Ver conexión",
  birthDate: "Fecha de nacimiento",
  relationship: "Parentesco",
  addName: "Agrégale un nombre",
  linkFirst: "Descubre la conexión que tienes con otra persona",
  linkMore: "Agrega más personas a tu árbol de conexiones",
  missingDate: "Elige día, mes y año.",
  invalidDate: "Revisa la fecha: no parece un día real.",
  futureDate: "Esa fecha está en el futuro.",
  shortName: "Escribe al menos un nombre.",
  incompleteName: "Escribe nombre y apellidos, como en tu documento.",
  missingRelationship: "Elige qué es esta persona para ti.",
  howYouMove: "Cómo te mueves",
  whatYouBring: "Lo que aportas",
  whereYouGrow: "Dónde crecer",
  moreClosed:
    "Dale click aquí si quieres leer más sobre cómo eres bajo presión, en tus vínculos, cómo otros te ven y el consejo de la semana",
  moreOpen: "Ocultar bajo presión, vínculos, lo que otros ven y la señal de la semana",
  underPressure: "Bajo presión",
  inBonds: "En tus vínculos",
  whatOthersSee: "Lo que otros ven",
  weekly: "Señal para esta semana",
  betweenYou: "Qué pasa entre ustedes",
  pairNumbers: (left, right) => `Camino de Vida ${left} y ${right}`,
  numbersMapTitle: "Estos son tus otros números, dale click al número para conocer más",
  connectionsTitle: "Este es tu mapa de conexiones",
  peopleMap: "Mapa de personas",
  locked: "bloqueado",
  revealedWithName: "se revela con el nombre completo",
  nameLocked: (label) =>
    `Tu ${label.toLowerCase()} se revela con nombre completo — nombre y apellidos, como en tu acta.`,
  tension: (life, label, other) =>
    `Tu Camino de Vida vibra en ${life} y tu ${label} en ${other}. Dos señales distintas — ahí está la tensión entre lo que sientes por dentro y lo que proyectas.`,
  calcShow: (subject) => `Ver cómo se calcula tu ${subject}`,
  calcHide: "Ocultar el cálculo",
  calcVerify: "La cuenta completa, por si quieres verificarla tú mismo.",
  sum: "Suma",
  masterStop: " · maestro, no se reduce más",
  vowels: "Vocales",
  consonants: "Consonantes",
  allLetters:
    "Este nombre no separa vocales y consonantes, así que la cuenta usa todas las letras.",
  soulRule: "Suma de las vocales del nombre completo, reducida.",
  shieldRule: "Suma de las consonantes del nombre completo, reducida. Es la imagen que proyectas.",
  destinyRule: "Suma de todas las letras del nombre completo, reducida.",
  sharesLayer: (who, layer) => `${who} te comparte su ${layer}`,
  sharesConnection: (from, to) => `${from} te comparte esta conexión con ${to}`,
  sharesMap: (who) => `${who} te comparte su mapa`,
  sharesPeople: (who) => `${who} te comparte su mapa de conexiones`,
  share: "compartir",
  closeShare: "Cerrar vista para compartir",
  close: "Cerrar",
  previewTitle: "Así lo va a ver",
  preparing: "Preparando la imagen…",
  shareNote:
    "Se envía la imagen, con los números y el mensaje. El enlace para abrirla va en el texto cuando el sitio está publicado.",
  sendImage: "Enviar imagen",
  saveImage: "Guardar imagen",
  copyText: "Copiar texto",
  copied: "Copiado",
  shareReady: "Imagen lista. Desde ahí eliges WhatsApp, historia o TikTok.",
  shareSavedApp: "Imagen guardada. Ábrela en WhatsApp, Instagram o TikTok.",
  shareSavedDevice: "Imagen guardada en tu dispositivo.",
  shareFailed: "No se pudo preparar la imagen.",
  homeNote: "Un espejo para entenderte y conectar — tú decides qué hacer con lo que descubras.",
  pairNote: "Enumerarte · Tu mapa y tus vínculos",
  brand: "Enumerarte",
  disclaimer:
    "Una lectura para conversar. No predice salud, dinero ni el futuro de una relación. Está pensada para personas adultas.",
  footerLabel: "Pie",
  footerLinks: [
    { href: "/#caminos", label: "Números" },
    { href: "/ejemplo", label: "Ejemplo" },
    { href: "/privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
    { href: "/escribenos", label: "Escríbenos" },
  ],
  effective: "Vigente desde el",
  notFoundTitle: "Esta página no está",
  notFoundBody: "El enlace no coincide con una lectura publicada.",
  errorTitle: "No se pudo abrir esta página",
  errorBody: "Puedes reintentar, o volver al inicio y calcular el mapa de nuevo.",
  retry: "Reintentar",
  exampleKicker: "Ejemplo publicado",
  exampleTitle: "Un mapa de ejemplo",
  exampleLead:
    "Elena Vargas y Mateo Ruiz son personas de ejemplo. Los textos son los mismos que vería cualquiera con estos números. No hace falta escribir una fecha para leerlos.",
  examplePairLink: "La misma conexión, en su página pública.",
  practiceLabel: "Qué hacer con esto",
  yourMapTitle: "¿Y tu mapa?",
  yourMapBody:
    "Descubre tu Camino de Vida y mira qué señales conectan con las personas de tu vida.",
  pathsTitle: "Los doce caminos",
  pathsLead:
    "Enumerarte calcula un Camino de Vida a partir de la fecha y tres números a partir del nombre: Personalidad, Alma y Expresión. Cada número tiene una lectura para conversar, y cada par de números tiene una nota de cómo se vive ese vínculo en el amor, la familia, la amistad y el trabajo. No es un puntaje y no predice salud, dinero ni una relación. Estas doce lecturas están publicadas para leerlas sin escribir una fecha. Abre un número para leer cómo se mueve, qué aporta, dónde se atasca y qué puede hacer esta semana. Desde esa página se llega a sus doce conexiones.",
  whoTheyAre: "Quiénes son",
  numberConnections: "Sus conexiones",
  limitNote: (used, max) =>
    `Gratis guarda ${max} conexiones (${used}/${max}). Déjanos tu correo y te avisamos cuando se puedan guardar más.`,
  premiumTitle: "El círculo completo",
  premiumLead:
    "Guardar más vínculos y volver a ellos. Déjanos tu correo y te avisamos cuando se pueda.",
  premiumFeatures: [
    "Más de dos personas en tu círculo",
    "El mapa de esas personas, guardado para volver",
    "Una práctica semanal para ti y para cada vínculo",
    "Un aviso cuando esa opción se pueda usar",
  ],
  premiumAction: "Quiero que me avisen",
  premiumConfirm:
    "Si dejas tu correo arriba, con la casilla marcada, te avisamos cuando se puedan guardar más vínculos. Este botón no cobra.",
  subscribeTitle: "Suscríbete",
  subscribePlaceholder: "tu@correo.com",
  subscribeSubmit: "Suscribirte",
  subscribeSending: "Guardando",
  subscribeConsentLead:
    "Acepto que Enumerarte guarde este correo para avisarme de promociones y ofertas, según la",
  subscribeConsentLink: "política de privacidad",
  subscribeConsentMissing: "Marca la casilla para poder guardar el correo.",
  subscribeDone: "Listo. Te escribimos cuando haya promociones y ofertas.",
  subscribeError: "No se pudo guardar. Revisa el correo e intenta de nuevo.",
  contactTitle: "Escríbenos",
  contactBody:
    "Si quieres más información o enterarte de las novedades, escríbenos a este correo. Es una conversación sobre el sitio, no una predicción.",
  contactReasons: [
    { id: "info", label: "Más información", subject: "Quiero más información" },
    { id: "updates", label: "Novedades", subject: "Quiero enterarme de las novedades" },
    { id: "talk", label: "Conversar sobre el sitio", subject: "Quiero conversar sobre el sitio" },
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
  masterKicker: (master) => `También aparece el ${master}`,
  masterLead: (master, root) =>
    `La suma pasa por ${master} antes de llegar al ${root}. Hay quien deja el ${master} sin reducir y lo llama número maestro. Esta lectura usa el ${root}.`,
};

const en: UiCopy = {
  languageLabel: "Language",
  months: monthsEn,
  day: "Day",
  month: "Month",
  year: "Year",
  relations: relationsEn,
  layers: layersEn,
  and: "and",
  you: "You",
  someone: "Someone",
  back: "Back",
  backHome: "Back to the start",
  backToMap: "Back to your map",
  homeTitle: "Your map. Your bonds. Your signals.",
  homeLead:
    "See what your numbers say about you and the people who matter to you. No birth time. No account and no login.",
  homeLink: "Read a sample map, without entering your date.",
  discoverTitle: "Discover your map",
  discoverHint: "Your date first. Then your full name.",
  fullName: "Full name",
  fullNamePlaceholder: "First and last name",
  reveal: "Reveal my map",
  seeConnection: "See the connection",
  birthDate: "Birth date",
  relationship: "Relationship",
  addName: "Add a name",
  linkFirst: "Discover the connection you have with another person",
  linkMore: "Add more people to your connection tree",
  missingDate: "Choose day, month, and year.",
  invalidDate: "Check the date: that does not look like a real day.",
  futureDate: "That date is in the future.",
  shortName: "Write at least a name.",
  incompleteName: "Write a first and last name, as on your document.",
  missingRelationship: "Choose what this person is to you.",
  howYouMove: "How you move",
  whatYouBring: "What you bring",
  whereYouGrow: "Where to grow",
  moreClosed:
    "Click here if you want to read more about how you are under pressure, in your bonds, how others see you, and this week's advice",
  moreOpen: "Hide under pressure, bonds, how others see you, and this week's signal",
  underPressure: "Under pressure",
  inBonds: "In your bonds",
  whatOthersSee: "What others see",
  weekly: "Signal for this week",
  betweenYou: "What happens between you",
  pairNumbers: (left, right) => `Life Path ${left} and ${right}`,
  numbersMapTitle: "These are your other numbers. Click a number to read more",
  connectionsTitle: "This is your connection map",
  peopleMap: "People map",
  locked: "locked",
  revealedWithName: "appears with the full name",
  nameLocked: (label) =>
    `Your ${label.toLowerCase()} appears with a full name — first and last, as on your papers.`,
  tension: (life, label, other) =>
    `Your Life Path vibrates at ${life} and your ${label} at ${other}. Two different signals — that is the tension between what you feel inside and what you project.`,
  calcShow: (subject) => `See how your ${subject} is calculated`,
  calcHide: "Hide the calculation",
  calcVerify: "The full sum, in case you want to check it yourself.",
  sum: "Sum",
  masterStop: " · master, it is not reduced further",
  vowels: "Vowels",
  consonants: "Consonants",
  allLetters: "This name does not split vowels and consonants, so the sum uses every letter.",
  soulRule: "Sum of the vowels in the full name, reduced.",
  shieldRule: "Sum of the consonants in the full name, reduced. It is the image you project.",
  destinyRule: "Sum of every letter in the full name, reduced.",
  sharesLayer: (who, layer) => `${who} shares their ${layer}`,
  sharesConnection: (from, to) => `${from} shares this connection with ${to}`,
  sharesMap: (who) => `${who} shares their map`,
  sharesPeople: (who) => `${who} shares their connection map`,
  share: "share",
  closeShare: "Close share view",
  close: "Close",
  previewTitle: "How it will look",
  preparing: "Preparing the image…",
  shareNote:
    "The image goes out with the numbers and the message. The link to open it is in the text when the site is published.",
  sendImage: "Send image",
  saveImage: "Save image",
  copyText: "Copy text",
  copied: "Copied",
  shareReady: "Image ready. From there you choose WhatsApp, a story, or TikTok.",
  shareSavedApp: "Image saved. Open it in WhatsApp, Instagram, or TikTok.",
  shareSavedDevice: "Image saved on your device.",
  shareFailed: "The image could not be prepared.",
  homeNote:
    "A mirror for understanding yourself and connecting — you decide what to do with what you find.",
  pairNote: "Enumerarte · Your map and your bonds",
  brand: "Enumerarte",
  disclaimer:
    "A reading meant for conversation. It does not predict health, money, or the future of a relationship. It is meant for adults.",
  footerLabel: "Footer",
  footerLinks: [
    { href: "/#caminos", label: "Numbers" },
    { href: "/ejemplo", label: "Example" },
    { href: "/privacidad", label: "Privacy" },
    { href: "/terminos", label: "Terms" },
    { href: "/escribenos", label: "Write to us" },
  ],
  effective: "In effect since",
  notFoundTitle: "This page is not here",
  notFoundBody: "The link does not match a published reading.",
  errorTitle: "This page could not be opened",
  errorBody: "You can try again, or go back to the start and calculate the map once more.",
  retry: "Try again",
  exampleKicker: "Published example",
  exampleTitle: "A sample map",
  exampleLead:
    "Elena Vargas and Mateo Ruiz are example people. The texts are the same ones anyone with these numbers would see. You do not need to enter a date to read them.",
  examplePairLink: "The same connection, on its public page.",
  practiceLabel: "What to do with this",
  yourMapTitle: "And your map?",
  yourMapBody:
    "Discover your Life Path and see which signals connect with the people in your life.",
  pathsTitle: "The twelve paths",
  pathsLead:
    "Enumerarte calculates a Life Path from a date and three numbers from a name: Personality, Soul, and Expression. Each number has a reading meant for conversation, and each pair of numbers has a note on how that bond is lived in love, in the family, between friends, and at work. It is not a score and it does not predict health, money, or a relationship. These twelve readings are published so they can be read without entering a date. Open a number to read how that person moves, what they bring, where they get stuck, and what they can do this week. That page leads to their twelve connections.",
  whoTheyAre: "Who they are",
  numberConnections: "Their connections",
  limitNote: (used, max) =>
    `Free saves ${max} connections (${used}/${max}). Leave your email and we will tell you when more can be saved.`,
  premiumTitle: "The full circle",
  premiumLead:
    "Save more bonds and come back to them. Leave your email and we will tell you when that is possible.",
  premiumFeatures: [
    "More than two people in your circle",
    "The map of those people, saved so you can return",
    "A weekly practice for you and for each bond",
    "A notice when that option can be used",
  ],
  premiumAction: "Tell me when it is ready",
  premiumConfirm:
    "If you leave your email above, with the box checked, we will tell you when more bonds can be saved. This button does not charge.",
  subscribeTitle: "Subscribe",
  subscribePlaceholder: "you@email.com",
  subscribeSubmit: "Subscribe",
  subscribeSending: "Saving",
  subscribeConsentLead:
    "I agree that Enumerarte stores this email to tell me about promotions and offers, according to the",
  subscribeConsentLink: "privacy policy",
  subscribeConsentMissing: "Check the box so the email can be saved.",
  subscribeDone: "Done. We will write when there are promotions and offers.",
  subscribeError: "It could not be saved. Check the email and try again.",
  contactTitle: "Write to us",
  contactBody:
    "If you want more information or news, write to this email. It is a conversation about the site, not a prediction.",
  contactReasons: [
    { id: "info", label: "More information", subject: "I want more information" },
    { id: "updates", label: "News", subject: "I want to hear about news" },
    { id: "talk", label: "Talk about the site", subject: "I want to talk about the site" },
  ],
  feedbackTitle: "Comments",
  feedbackHint: "Tell us what helped, what did not, or what you would like to see.",
  feedbackPlaceholder: "Your comment",
  feedbackSubmit: "Send comment",
  feedbackSubject: "Comment about Enumerarte",
  feedbackNote: "Your email app opens with the message, addressed to enumerarteapp@gmail.com.",
  feedbackEmpty: "Write your comment before sending it.",
  feedbackOpened:
    "Done. If your email did not open, write to us directly at enumerarteapp@gmail.com.",
  whatsappTitle: "Write to us on WhatsApp",
  whatsappBody: "If you prefer a direct message, we are on this number.",
  whatsappAction: "Open WhatsApp",
  masterKicker: (master) => `The ${master} also appears`,
  masterLead: (master, root) =>
    `The sum passes through ${master} before it reaches ${root}. Some people leave ${master} unreduced and call it a master number. This reading uses ${root}.`,
};

export function uiCopy(locale: Locale): UiCopy {
  return locale === "en" ? en : es;
}
