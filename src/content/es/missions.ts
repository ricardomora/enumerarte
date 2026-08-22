import type { MissionContent } from "../types";

export const missions: Record<string, MissionContent> = {
  "1": {
    value: 1,
    title: "El que abre camino",
    essence: "Necesitas que la decisión sea tuya.",
    body: "Arrancas cosas. Donde otros esperan instrucciones, tú ya estás probando. No es que quieras mandar: es que esperar te resulta físicamente incómodo. Funcionas mejor cuando tienes un territorio propio, aunque sea pequeño.",
    strength: "Arrancas lo que nadie se atreve a arrancar.",
    friction:
      "Confundes pedir ayuda con perder autoridad, y terminas cargando solo con cosas que no tenías que cargar.",
  },
  "2": {
    value: 2,
    title: "El que sostiene el vínculo",
    essence: "Sientes el clima de la sala antes que nadie.",
    body: "Lees a las personas rápido y sin proponértelo. Percibes la tensión antes de que alguien la nombre, y sueles ser quien suaviza. Tu aporte casi nunca se ve, porque consiste en que las cosas no se rompan.",
    strength: "Detectas lo que la gente siente y no dice.",
    friction: "Cedes tan pronto para evitar el roce que después no sabes qué querías tú.",
  },
  "3": {
    value: 3,
    title: "El que le pone palabras",
    essence: "Entiendes las cosas al decirlas en voz alta.",
    body: "Procesas hacia afuera. Hablando, escribiendo, haciendo reír. La gente te busca porque contigo el ambiente se aligera, y eso es un trabajo real aunque nadie lo llame así. Necesitas público, no por vanidad, sino porque pensar en silencio te cuesta.",
    strength: "Traduces a palabras lo que otros solo sienten.",
    friction:
      "Usas el humor para esquivar la conversación difícil, y luego la conversación sigue ahí.",
  },
  "4": {
    value: 4,
    title: "El que construye el piso",
    essence: "La improvisación ajena te cuesta el sueño.",
    body: "Piensas en pasos, plazos y qué puede fallar. Eres quien nota que falta un tornillo cuando todos ya están celebrando. Tu tranquilidad depende de que las cosas tengan un orden verificable, y eso se siente como control aunque en realidad sea cuidado.",
    strength: "Convertís las ideas de otros en algo que aguanta.",
    friction:
      "Confundes cambio de plan con falta de respeto, y te pones rígido justo cuando hay que ceder.",
  },
  "5": {
    value: 5,
    title: "El que necesita salida",
    essence: "La rutina cerrada te apaga antes que el cansancio.",
    body: "Te mueve lo nuevo: otro tema, otra ciudad, otra manera de hacerlo. Aprendes rápido porque te aburres rápido. Puedes comprometerte de verdad, pero necesitas ver que la puerta no está trancada.",
    strength: "Te adaptas cuando el plan se cae, y arrastras a los demás.",
    friction:
      "Cambias de ruta antes de que la anterior diera fruto, y a veces confundes libertad con no elegir.",
  },
  "6": {
    value: 6,
    title: "El que se hace cargo",
    essence: "Te ocupas de todos y nadie se ocupa de ti.",
    body: "Eres el punto de apoyo del grupo. La gente acude a ti con problemas y tú resuelves, incluso lo que no te toca. Tu sentido de estar bien está muy amarrado a que los tuyos estén bien, y eso es hermoso y agotador a la vez.",
    strength: "La gente confía en ti cosas que no le cuenta a nadie.",
    friction: "Ayudas sin que te lo pidan y después te resientes por no ser reconocido.",
  },
  "7": {
    value: 7,
    title: "El que necesita entender",
    essence: "Antes de responder te vas para dentro.",
    body: "No te sirve la explicación superficial: quieres saber cómo funciona por debajo. Para eso necesitas silencio y distancia, y eso los demás lo suelen leer como frialdad o enojo. Tu confianza se gana con tiempo, no con simpatía.",
    strength: "Ves el patrón que a todos se les pasó.",
    friction:
      "Te aíslas justo cuando más te haría falta hablarlo, y llamas independencia a lo que a veces es miedo.",
  },
  "8": {
    value: 8,
    title: "El que administra la realidad",
    essence: "Mides las cosas por resultado, no por intención.",
    body: "Piensas en términos de recursos, poder y consecuencias. No te incomoda el dinero ni la autoridad, y sabes moverte donde otros se paralizan. Tu forma de cuidar suele ser resolver lo material, aunque eso no siempre se recibe como cariño.",
    strength: "Convertís el esfuerzo en resultado concreto.",
    friction: "Mides el valor de las personas por lo que producen, empezando por ti mismo.",
  },
  "9": {
    value: 9,
    title: "El que cierra ciclos",
    essence: "Cargas cosas que ni son tuyas.",
    body: "Ves el cuadro completo y te importa lo que le pasa a gente que no conoces. Sueltas etapas, lugares y personas más veces que la mayoría, y eso te dio una mirada amplia y también algo de melancolía. Das mucho sin llevar la cuenta.",
    strength: "Entiendes a personas muy distintas de ti.",
    friction: "Te entregas a lo colectivo para no mirar lo que te duele de cerca.",
  },
  "11": {
    value: 11,
    title: "El que siente de más",
    essence: "Intuyes antes de poder explicarlo.",
    body: "Tienes la sensibilidad del 2 pero subida de volumen. Captás cosas del ambiente y de la gente que después se confirman, y no sabes de dónde salieron. Ese mismo canal que te hace intuitivo te deja expuesto: lo que a otros les roza, a ti te atraviesa.",
    strength: "Inspiras a la gente casi sin intentarlo.",
    friction: "Vives con el sistema nervioso encendido y confundes la ansiedad con intuición.",
  },
  "22": {
    value: 22,
    title: "El que construye para durar",
    essence: "Piensas en grande y en detalle, a la vez.",
    body: "Tienes la ambición amplia y la disciplina del 4 para bajarla a tierra. Ves estructuras completas antes de que existan y te tomas en serio construirlas. Eso te vuelve valioso y también muy exigente, contigo primero.",
    strength: "Sostienes proyectos que sobreviven a quien los empezó.",
    friction: "Vives contra un estándar que nadie te pidió y llamas mediocridad al descanso.",
  },
  "33": {
    value: 33,
    title: "El que enseña cuidando",
    essence: "Te vuelves refugio de gente que no lo pidió.",
    body: "El cuidado del 6 llevado más allá de tu círculo. Acompañas, explicas, contienes, y la gente sale de una conversación contigo sintiéndose mejor. El riesgo es obvio: cargas con el peso emocional de muchos y no tienes dónde descargarlo.",
    strength: "Haces que la gente se sienta entendida sin tener que explicarse.",
    friction: "Confundes ser necesitado con ser querido, y te vacías sosteniendo.",
  },
};
