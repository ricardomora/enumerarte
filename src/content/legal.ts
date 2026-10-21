import { CONTACT_EMAIL } from "./contact";

/**
 * Identidad pública del sitio.
 *
 * La cédula, el celular personal y la calle van solo en el formulario de
 * AdSense. Aquí se publica el nombre, la ciudad y el correo de contacto.
 */
export const legalIdentity = {
  brand: "Enumerarte",
  name: "Ricardo Daniel Mora Uzcategui",
  city: "Bogotá",
  country: "Colombia",
  address: "Bogotá, Colombia",
  siteUrl: "https://www.enumerarte.com",
  email: CONTACT_EMAIL,
  policyVersion: "2026-10-21",
  updatedLabel: "21 de octubre de 2026",
} as const;

export const chromeCopy = {
  backHome: "Volver al inicio",
  notFoundTitle: "Esta página no está",
  notFoundBody: "El enlace no coincide con una lectura publicada.",
  errorTitle: "No se pudo abrir esta página",
  errorBody: "Puedes reintentar, o volver al inicio y calcular el mapa de nuevo.",
  retry: "Reintentar",
} as const;

export const siteDisclaimer =
  "Una lectura para conversar. No predice salud, dinero ni el futuro de una relación. Está pensada para personas adultas.";

export const footerLinks = [
  { href: "/ejemplo", label: "Ejemplo" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/escribenos", label: "Escríbenos" },
] as const;

export const exampleCopy = {
  title: "Un mapa de ejemplo",
  description: "Una lectura completa, publicada para quien quiera leerla sin escribir su fecha.",
  kicker: "Ejemplo publicado",
  lead: "Elena Vargas y Mateo Ruiz son personas de ejemplo. Los textos son los mismos que vería cualquiera con estos números. No hace falta escribir una fecha para leerlos.",
  homeLink: "Lee un mapa de ejemplo, sin escribir tu fecha.",
  pairLink: "La misma conexión, en su página pública.",
  self: {
    name: "Elena Vargas",
    birthDate: { day: 15, month: 4, year: 1990 },
  },
  other: {
    name: "Mateo Ruiz",
    birthDate: { day: 20, month: 7, year: 1988 },
    relationship: "pareja" as const,
  },
};

const googleDataUse = "https://policies.google.com/technologies/partner-sites";
const googleAdsSettings = "https://adssettings.google.com";
const aboutAds = "https://www.aboutads.info/choices";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  links?: readonly { href: string; label: string }[];
}

export const privacyPolicy = {
  title: "Privacidad",
  description:
    "Qué datos guarda Enumerarte, para qué, durante cuánto tiempo y cómo pedir que se borren.",
  sections: [
    {
      id: "responsable",
      title: "Quién responde",
      paragraphs: [
        `${legalIdentity.name}, persona natural, responde por ${legalIdentity.brand}. El sitio es ${legalIdentity.siteUrl} y se ofrece desde ${legalIdentity.address}. Para ejercer tus derechos escribe a ${legalIdentity.email}.`,
        `Esta versión es la ${legalIdentity.policyVersion}, publicada el ${legalIdentity.updatedLabel}.`,
      ],
    },
    {
      id: "datos",
      title: "Qué datos hay",
      paragraphs: [
        "Si te suscribes, guardamos el correo, la fecha en que lo enviaste y la versión de esta política que aceptaste. Sirve para avisarte de promociones y de cuando el círculo se pueda guardar.",
        "La fecha de nacimiento y el nombre completo se usan en tu navegador para armar la lectura. No se envían al servidor para calcular el mapa. Si compartes un enlace, ese enlace lleva los números y el nombre de pila que tú eliges, no la fecha.",
        "Las visitas dejan un identificador anónimo en el almacenamiento local del dispositivo, y eventos como «abrió el mapa» o «miró una conexión». Esos eventos incluyen la ruta y números, no el nombre ni la fecha. El hosting puede registrar la dirección IP en sus propios logs de operación.",
      ],
    },
    {
      id: "finalidad",
      title: "Para qué se usan",
      paragraphs: [
        "El correo se usa para escribirte lo que pediste al suscribirte, y para borrarlo si lo pides. Los eventos sirven para entender qué partes de la lectura se abren. No se venden listas de correos.",
      ],
    },
    {
      id: "encargados",
      title: "Quién más los trata",
      paragraphs: [
        "El correo queda en Convex. El sitio se publica en Vercel, que procesa la conexión. Los eventos, sin el correo, se reenvían a PostHog en Estados Unidos. Si más adelante hay anuncios, Google puede tratar identificadores para mostrarlos y medirlos.",
      ],
    },
    {
      id: "anuncios",
      title: "Cookies y anuncios",
      paragraphs: [
        "Hoy el sitio no carga un script de anuncios y no guarda una cookie propia de publicidad. El identificador de visita vive en el almacenamiento local, no en una cookie.",
        "Si se activan anuncios, terceros, incluido Google, pueden guardar y leer cookies en el navegador, o usar identificadores y la dirección IP, para mostrar anuncios a partir de visitas a este sitio o a otros. El uso de cookies publicitarias de Google permite que Google y sus socios muestren anuncios según esas visitas.",
        "Puedes rechazar la publicidad personalizada en la configuración de anuncios de Google, o en aboutads.info. El enlace de cómo Google usa los datos en sitios de sus socios está debajo.",
      ],
      links: [
        { href: googleDataUse, label: "Cómo usa Google los datos en sitios de socios" },
        { href: googleAdsSettings, label: "Configuración de anuncios de Google" },
        { href: aboutAds, label: "Opciones de aboutads.info" },
      ],
    },
    {
      id: "plazo",
      title: "Durante cuánto tiempo",
      paragraphs: [
        "El correo se conserva hasta que pides la baja. Los eventos de uso siguen el plazo del proveedor de analítica. Los logs del hosting siguen el plazo de ese proveedor.",
      ],
    },
    {
      id: "derechos",
      title: "Tus derechos",
      paragraphs: [
        `Puedes conocer, actualizar, rectificar y suprimir tu correo, y revocar la autorización, escribiendo a ${legalIdentity.email} desde la misma dirección. Si el correo está suscrito, lo borramos de la base de suscripciones. También puedes acudir a la Superintendencia de Industria y Comercio.`,
        "La autorización se pide con una casilla antes de guardar el correo. Enviarlo sin esa casilla no lo guarda.",
      ],
    },
    {
      id: "edad",
      title: "Personas adultas",
      paragraphs: [
        "El servicio está pensado para personas adultas. No está dirigido a menores y no se configura como un sitio para niños. No pidas una lectura de un menor ni suscribas su correo.",
      ],
    },
  ] as const satisfies readonly LegalSection[],
};

export const termsOfUse = {
  title: "Términos",
  description: "Qué ofrece Enumerarte y qué queda fuera de esa oferta.",
  sections: [
    {
      id: "que-es",
      title: "Qué es este sitio",
      paragraphs: [
        `${legalIdentity.brand} calcula unos números a partir de una fecha y un nombre, y muestra textos para conversar sobre una persona y sus vínculos. Es un vocabulario compartido. La decisión de qué hacer con eso es tuya. Quien responde por el sitio es ${legalIdentity.name}.`,
      ],
    },
    {
      id: "que-no-es",
      title: "Qué no es",
      paragraphs: [
        "No es un instrumento clínico, no es terapia y no es consejo médico, psicológico, legal ni financiero. No predice salud, dinero ni el futuro de una pareja, una familia o un trabajo. No hay un puntaje de compatibilidad.",
        "Los textos de cada número y de cada vínculo son consejos de comunicación. Siguen siendo útiles aunque los números no signifiquen nada.",
      ],
    },
    {
      id: "tus-datos",
      title: "Lo que compartes",
      paragraphs: [
        "La fecha y el nombre se quedan en tu navegador para la lectura. Si generas un enlace, eliges el nombre de pila que viaja con los números. El correo solo se guarda si marcas la casilla y envías el formulario.",
        `El detalle de encargados, plazos y derechos está en la política de privacidad, versión ${legalIdentity.policyVersion}.`,
      ],
    },
    {
      id: "circulo",
      title: "El círculo que todavía no se vende",
      paragraphs: [
        "Guardar más de dos vínculos forma parte de una oferta que aún no está a la venta. El botón que la menciona no cobra y no reserva un cupo. Si dejas el correo, es para avisarte cuando esa opción exista, no para comprar algo hoy.",
      ],
    },
    {
      id: "contacto",
      title: "Contacto",
      paragraphs: [
        `Para una pregunta sobre estos términos escribe a ${legalIdentity.email}. ${legalIdentity.name} ofrece el servicio desde ${legalIdentity.address}.`,
      ],
    },
  ] as const satisfies readonly LegalSection[],
};
