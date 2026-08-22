import type { MissionContent } from "../types";

export const missions: Record<string, MissionContent> = {
  "1": {
    value: 1,
    title: "El que abre camino",
    essence: "Necesitas que la decisión sea tuya.",
    body: "Arrancas cosas. Donde otros esperan instrucciones, tú ya estás probando. No es que quieras mandar: es que esperar te resulta físicamente incómodo. Funcionas mejor cuando tienes un territorio propio, aunque sea pequeño.",
    strengths: [
      "Arrancas lo que nadie se atreve a arrancar.",
      "Propones la primera versión cuando el grupo está paralizado por no saber por dónde empezar.",
      "Tomas decisiones con la información que hay, sin esperar certeza total.",
    ],
    frictions: [
      "Confundes pedir ayuda con perder autoridad, y terminas cargando solo con cosas que no tenías que cargar.",
      "Cuando alguien cuestiona tu idea, lo lees como ataque personal en lugar de como aporte.",
      "Te adelantas tanto que la gente siente que no tuvo voz en lo que ya está en marcha.",
    ],
    underPressure:
      "Te vuelves más tajante y menos dispuesto a escuchar; prefieres decidir solo antes que negociar bajo estrés.",
    inRelationships:
      "En pareja y en amistad sueles tomar la iniciativa, pero quienes te quieren a veces necesitan sentir que también pueden liderar sin que lo vivas como desafío.",
    blindSpot:
      "Para ti moverte es avanzar; para otros, tu velocidad puede sentirse como que ya decidiste por ellos.",
    microPractice:
      "Esta semana, antes de proponer una solución, pregunta a una persona cercana qué haría ella y espera la respuesta completa sin intervenir.",
  },
  "2": {
    value: 2,
    title: "El que sostiene el vínculo",
    essence: "Sientes el clima de la sala antes que nadie.",
    body: "Lees a las personas rápido y sin proponértelo. Percibes la tensión antes de que alguien la nombre, y sueles ser quien suaviza. Tu aporte casi nunca se ve, porque consiste en que las cosas no se rompan.",
    strengths: [
      "Detectas lo que la gente siente y no dice.",
      "Suavizas el ambiente sin que nadie te lo pida, porque notas la tensión antes de que explote.",
      "Recuerdas detalles de lo que importa a cada persona y eso hace que se sientan vistos.",
    ],
    frictions: [
      "Cedes tan pronto para evitar el roce que después no sabes qué querías tú.",
      "Evitas nombrar lo que te molesta hasta que acumulas tanto que explotas o te retiras.",
      "Te haces indispensable mediando y luego te cansas de ser el pegamento de todos.",
    ],
    underPressure:
      "Te encoges o te adaptas demasiado; priorizas la paz del grupo sobre lo que necesitas decir.",
    inRelationships:
      "Eres el referente emocional de muchos, pero rara vez pides que alguien te escuche a ti con la misma atención.",
    blindSpot: "Crees que estás evitando conflictos, cuando a veces solo los estás posponiendo.",
    microPractice:
      "Elige una conversación pendiente esta semana y di una sola frase que empiece con «yo necesito» antes de preguntar cómo se siente el otro.",
  },
  "3": {
    value: 3,
    title: "El que le pone palabras",
    essence: "Entiendes las cosas al decirlas en voz alta.",
    body: "Procesas hacia afuera. Hablando, escribiendo, haciendo reír. La gente te busca porque contigo el ambiente se aligera, y eso es un trabajo real aunque nadie lo llame así. Necesitas público, no por vanidad, sino porque pensar en silencio te cuesta.",
    strengths: [
      "Traduces a palabras lo que otros solo sienten.",
      "Alivias tensiones con humor o metáforas cuando el ambiente se pone pesado.",
      "Haces que temas incómodos suenen abordables porque los nombras con naturalidad.",
    ],
    frictions: [
      "Usas el humor para esquivar la conversación difícil, y luego la conversación sigue ahí.",
      "Hablas tanto procesando que el otro siente que no le queda espacio para responder.",
      "Te distraes con lo entretenido del relato y evitas cerrar acuerdos concretos.",
    ],
    underPressure:
      "Hablas más rápido y con más chistes; pareces ligero cuando por dentro estás abrumado.",
    inRelationships:
      "La gente te busca para desahogarse, pero a veces confunden tu capacidad de escuchar con que todo te resbala.",
    blindSpot:
      "Para ti pensar en voz alta es necesario; para otros, puede sonar como que ya tomaste posición sin consultarlos.",
    microPractice:
      "En una charla difícil esta semana, deja pasar diez segundos de silencio después de que el otro termine antes de responder. No llenes el espacio.",
  },
  "4": {
    value: 4,
    title: "El que construye el piso",
    essence: "La improvisación ajena te cuesta el sueño.",
    body: "Piensas en pasos, plazos y qué puede fallar. Eres quien nota que falta un tornillo cuando todos ya están celebrando. Tu tranquilidad depende de que las cosas tengan un orden verificable, y eso se siente como control aunque en realidad sea cuidado.",
    strengths: [
      "Convertís las ideas de otros en algo que aguanta.",
      "Anticipas lo que puede fallar y preparas alternativas antes de que sea urgente.",
      "Das estabilidad al grupo porque cumples lo que prometes, en plazo y con detalle.",
    ],
    frictions: [
      "Confundes cambio de plan con falta de respeto, y te pones rígido justo cuando hay que ceder.",
      "Te cuesta delegar porque nadie lo hará «como debe hacerse».",
      "Exiges el mismo orden que te funciona a ti, aunque al otro le sirva otro ritmo.",
    ],
    underPressure: "Te aferras al plan original y te cuesta admitir que hay que improvisar.",
    inRelationships:
      "Demuestras cariño resolviendo lo práctico, pero a veces el otro necesitaba escucha antes que solución.",
    blindSpot:
      "Lo que tú llamas cuidado — tener todo bajo control — a veces se siente como falta de confianza en el otro.",
    microPractice:
      "Delega una tarea pequeña esta semana sin corregir cómo se hace. Solo pide el resultado y aguanta la incomodidad.",
  },
  "5": {
    value: 5,
    title: "El que necesita salida",
    essence: "La rutina cerrada te apaga antes que el cansancio.",
    body: "Te mueve lo nuevo: otro tema, otra ciudad, otra manera de hacerlo. Aprendes rápido porque te aburres rápido. Puedes comprometerte de verdad, pero necesitas ver que la puerta no está trancada.",
    strengths: [
      "Te adaptas cuando el plan se cae, y arrastras a los demás.",
      "Traes ideas frescas cuando el grupo está estancado en lo mismo de siempre.",
      "Aprendes rápido en situaciones nuevas y contagias esa energía.",
    ],
    frictions: [
      "Cambias de ruta antes de que la anterior diera fruto, y a veces confundes libertad con no elegir.",
      "Prometes más de lo que alcanzas a sostener porque cada cosa nueva te entusiasma al principio.",
      "Te incomoda la conversación sobre compromiso a largo plazo y la esquivas con humor o cambio de tema.",
    ],
    underPressure:
      "Quieres escapar o renegociar las reglas; la sensación de estar atrapado te nubla el juicio.",
    inRelationships:
      "Necesitas espacio y variedad; quien te quiere puede leerlo como falta de interés cuando en realidad es cómo recargas energía.",
    blindSpot:
      "Crees que tu flexibilidad es un regalo para todos; quienes necesitan previsibilidad a veces la viven como inestabilidad.",
    microPractice:
      "Comprométete por escrito con una sola cosa esta semana y no la abandones aunque aparezca algo más interesante. Avísale a alguien cercano.",
  },
  "6": {
    value: 6,
    title: "El que se hace cargo",
    essence: "Te ocupas de todos y nadie se ocupa de ti.",
    body: "Eres el punto de apoyo del grupo. La gente acude a ti con problemas y tú resuelves, incluso lo que no te toca. Tu sentido de estar bien está muy amarrado a que los tuyos estén bien, y eso es hermoso y agotador a la vez.",
    strengths: [
      "La gente confía en ti cosas que no le cuenta a nadie.",
      "Notas quién necesita ayuda antes de que lo pida y actúas sin hacer teatro.",
      "Creás un entorno donde los demás se sienten seguros porque alguien está pendiente.",
    ],
    frictions: [
      "Ayudas sin que te lo pidan y después te resientes por no ser reconocido.",
      "Te cuesta decir que no porque sientes que los abandonas si no puedes con todo.",
      "Mezclas lo que necesitan los otros con lo que tú necesitas sentirte útil.",
    ],
    underPressure:
      "Asumes más responsabilidad de la tuya y te quejas después de haber dicho que sí a todo.",
    inRelationships:
      "Eres el pilar de familia o amigos, pero rara vez dejas que te cuiden con la misma intensidad.",
    blindSpot:
      "Crees que demuestras amor resolviendo; a veces el otro solo quería que estuvieras presente sin arreglar nada.",
    microPractice:
      "Cuando alguien te cuente un problema esta semana, pregunta «¿quieres que te escuche o que te ayude a resolver?» antes de actuar.",
  },
  "7": {
    value: 7,
    title: "El que necesita entender",
    essence: "Antes de responder te vas para dentro.",
    body: "No te sirve la explicación superficial: quieres saber cómo funciona por debajo. Para eso necesitas silencio y distancia, y eso los demás lo suelen leer como frialdad o enojo. Tu confianza se gana con tiempo, no con simpatía.",
    strengths: [
      "Ves el patrón que a todos se les pasó.",
      "Escuchas con profundidad y recuerdas lo que dijo la persona semanas atrás.",
      "Ofreces perspectiva calmada cuando otros reaccionan impulsivamente.",
    ],
    frictions: [
      "Te aíslas justo cuando más te haría falta hablarlo, y llamas independencia a lo que a veces es miedo.",
      "Desconfías de respuestas rápidas y eso puede sonar a desprecio por quien actúa con prisa.",
      "Te retiras a pensar y el otro interpreta silencio como rechazo o indiferencia.",
    ],
    underPressure:
      "Te cierras y necesitas más espacio; quien te presiona para hablar ya lo empeora.",
    inRelationships:
      "Das consejos muy pensados, pero a veces el otro necesitaba contención antes que análisis.",
    blindSpot:
      "Para ti el silencio es procesamiento; para quien te quiere puede ser la señal de que algo está mal y no se lo vas a decir.",
    microPractice:
      "Esta semana, en una conversación importante, avisa antes de retirarte: «Necesito pensarlo; no es que esté enojado, vuelvo en [tiempo concreto]».",
  },
  "8": {
    value: 8,
    title: "El que administra la realidad",
    essence: "Mides las cosas por resultado, no por intención.",
    body: "Piensas en términos de recursos, poder y consecuencias. No te incomoda el dinero ni la autoridad, y sabes moverte donde otros se paralizan. Tu forma de cuidar suele ser resolver lo material, aunque eso no siempre se recibe como cariño.",
    strengths: [
      "Convertís el esfuerzo en resultado concreto.",
      "Tomas decisiones difíciles cuando otros evitan el tema por incomodidad.",
      "Protegés recursos — tiempo, dinero, energía — para que el grupo no se queme.",
    ],
    frictions: [
      "Mides el valor de las personas por lo que producen, empezando por ti mismo.",
      "Cortas conversaciones emocionales porque te parecen improductivas, y el otro se siente invalidado.",
      "Compites incluso en vínculos cercanos sin darte cuenta de que estás llevando la cuenta.",
    ],
    underPressure:
      "Te vuelves más frío y orientado a resultados; emociones te parecen ruido que hay que eliminar.",
    inRelationships:
      "Demuestras compromiso resolviendo lo material, pero quien te quiere a veces necesita oír que el vínculo importa más que el rendimiento.",
    blindSpot: "Crees que ser directo es ser honesto; a veces tu claridad se siente como juicio.",
    microPractice:
      "En una conversación esta semana, dedica los primeros cinco minutos solo a escuchar sin proponer solución ni evaluar si la queja es «razonable».",
  },
  "9": {
    value: 9,
    title: "El que cierra ciclos",
    essence: "Cargas cosas que ni son tuyas.",
    body: "Ves el cuadro completo y te importa lo que le pasa a gente que no conoces. Sueltas etapas, lugares y personas más veces que la mayoría, y eso te dio una mirada amplia y también algo de melancolía. Das mucho sin llevar la cuenta.",
    strengths: [
      "Entiendes a personas muy distintas de ti.",
      "Ayudas a otros a soltar lo que ya no les sirve — relaciones, proyectos, resentimientos — con compasión.",
      "Ves el contexto más amplio y evitas que el grupo se quede peleando por detalles.",
    ],
    frictions: [
      "Te entregas a lo colectivo para no mirar lo que te duele de cerca.",
      "Te cuesta pedir lo tuyo porque sientes que otros lo necesitan más.",
      "Te desconectas emocionalmente cuando algo termina, y quienes te quieren lo viven como distancia abrupta.",
    ],
    underPressure:
      "Te vuelves filosófico o distante; hablas del «cuadro grande» para no sentir lo inmediato.",
    inRelationships:
      "Das mucho y sueltas fácil; quien te ama puede no saber si tu generosidad incluye quedarte.",
    blindSpot:
      "Crees que tu capacidad de soltar es madurez; a veces es evitar el duelo que te tocaría procesar.",
    microPractice:
      "Esta semana, dile a una persona cercana una necesidad tuya concreta — no un favor grande, algo pequeño — sin justificar por qué la mereces.",
  },
  "11": {
    value: 11,
    title: "El que siente de más",
    essence: "Intuyes antes de poder explicarlo.",
    body: "Tienes la sensibilidad del 2 pero subida de volumen. Captás cosas del ambiente y de la gente que después se confirman, y no sabes de dónde salieron. Ese mismo canal que te hace intuitivo te deja expuesto: lo que a otros les roza, a ti te atraviesa.",
    strengths: [
      "Inspiras a la gente casi sin intentarlo.",
      "Captas cambios de ánimo y atmósfera que otros no registran hasta después.",
      "Conectas con personas profundamente porque sientes lo que no dicen.",
    ],
    frictions: [
      "Vives con el sistema nervioso encendido y confundes la ansiedad con intuición.",
      "Absorbes el estado de ánimo ajeno y pierdes la distinción entre lo tuyo y lo de ellos.",
      "Te sobreexpones emocionalmente y luego necesitas desaparecer sin avisar.",
    ],
    underPressure:
      "Te inundas de estímulos y reacciones ajenas; pequeñas cosas se sienten enormes.",
    inRelationships:
      "Eres muy presente cuando conectas, pero quien te quiere no siempre sabe cuándo necesitas espacio o límites.",
    blindSpot:
      "Crees que sentir más te da más información; a veces solo te agota y nubla lo que realmente importa.",
    microPractice:
      "Antes de responder a una situación tensa esta semana, nombra en voz baja (solo para ti) qué es tuyo y qué viene del ambiente. Luego decide si hace falta reaccionar.",
  },
  "22": {
    value: 22,
    title: "El que construye para durar",
    essence: "Piensas en grande y en detalle, a la vez.",
    body: "Tienes la ambición amplia y la disciplina del 4 para bajarla a tierra. Ves estructuras completas antes de que existan y te tomas en serio construirlas. Eso te vuelve valioso y también muy exigente, contigo primero.",
    strengths: [
      "Sostienes proyectos que sobreviven a quien los empezó.",
      "Unes visión grande con pasos concretos que otros ven imposibles de alinear.",
      "Inspiras confianza porque la gente sabe que no abandonas lo que prometes construir.",
    ],
    frictions: [
      "Vives contra un estándar que nadie te pidió y llamas mediocridad al descanso.",
      "Exiges de los demás el mismo nivel de entrega que te exiges a ti, y eso agota al equipo o la familia.",
      "Te cuesta celebrar avances parciales porque siempre ves lo que falta por hacer.",
    ],
    underPressure:
      "Te vuelves más controlador y menos flexible; microgestionas porque el fallo no es opción en tu cabeza.",
    inRelationships:
      "Planeas el futuro de los vínculos como proyectos; quien te quiere a veces necesita presencia hoy, no arquitectura de mañana.",
    blindSpot:
      "Crees que tu exigencia es amor por el resultado; para otros puede sentirse como que nunca alcanzan.",
    microPractice:
      "Esta semana, reconoce en voz alta un avance pequeño de alguien cercano — en trabajo, hogar o estudio — sin añadir lo que falta por mejorar.",
  },
  "33": {
    value: 33,
    title: "El que enseña cuidando",
    essence: "Te vuelves refugio de gente que no lo pidió.",
    body: "El cuidado del 6 llevado más allá de tu círculo. Acompañas, explicas, contienes, y la gente sale de una conversación contigo sintiéndose mejor. El riesgo es obvio: cargas con el peso emocional de muchos y no tienes dónde descargarlo.",
    strengths: [
      "Haces que la gente se sienta entendida sin tener que explicarse.",
      "Explicas con paciencia lo que otros no se atreven a preguntar dos veces.",
      "Sostienes emocionalmente a varios a la vez sin que se note el esfuerzo — hasta que te desplomas.",
    ],
    frictions: [
      "Confundes ser necesitado con ser querido, y te vacías sosteniendo.",
      "Das tanto consejo y contención que otros dejan de intentar resolver solos.",
      "No pides ayuda porque sientes que tu rol es dar, no recibir.",
    ],
    underPressure:
      "Sigues cuidando aunque estés al límite; te enfermas o explotas antes de decir basta.",
    inRelationships:
      "Eres refugio para muchos; quienes más te quieren a veces compiten por un espacio que sienten ocupado por todos los demás.",
    blindSpot:
      "Crees que estar disponible siempre es generosidad; a veces enseña a otros que tu tiempo no tiene límites.",
    microPractice:
      "Esta semana, cuando alguien te pida consejo, responde con una pregunta — «¿qué ya probaste?» — antes de ofrecer tu opinión. Deja que llegue a su propia respuesta.",
  },
};
