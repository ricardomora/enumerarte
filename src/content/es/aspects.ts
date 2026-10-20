import type { DestinyContent, ShieldContent, SoulContent } from "../types";

export const souls: Record<string, SoulContent> = {
  "1": {
    value: 1,
    title: "La sed de decidir solo",
    essence: "Por dentro quieres que la elección sea tuya, aunque nadie lo vea.",
    body: "Cuando estás a solas, lo que más te pesa no es el cansancio sino la sensación de haber cedido el volante. Tu hambre emocional no es mandar por mandar: es sentir que tu vida responde a una dirección que elegiste tú. Eso explica por qué te irrita tanto quedarte esperando permiso.",
    strengths: [
      "En privado te das permiso para probar lo que en público pospones por no incomodar.",
      "Cuando algo te importa de verdad, encuentras energía aunque el día ya esté lleno.",
      "Sabes reconocer el momento exacto en que un proyecto dejó de ser tuyo y empezó a ser obligación.",
    ],
    frictions: [
      "Te dices que no te importa la opinión ajena y luego repasas mentalmente quién te apoyó.",
      "Confundes descanso con rendirse, y te levantas antes de estar listo.",
      "Guardas en silencio lo que querías pedir, y después lo vives como una traición propia.",
    ],
    underPressure:
      "Por dentro te cierras en modo combate: decides más rápido, escuchas menos y llamas debilidad a cualquier duda. Lo que buscas no es ganar la discusión sino recuperar la sensación de control.",
    inRelationships:
      "Necesitas que tu pareja o familia sepan cuándo quieres compañía y cuándo quieres resolver solo. Si no lo nombras, ellos leen distancia donde hay concentración, y tú lees invasión donde hay cariño.",
    blindSpot:
      "Crees que pedir ayuda te quita autoridad, pero a veces lo que te la quita es cargar solo hasta explotar y tomar decisiones a la defensiva.",
    microPractice:
      "Esta semana elige una decisión pequeña y dile a una persona de confianza: 'Quiero hacerlo así, ¿ves algo que no estoy viendo?' Escucha completo antes de responder.",
  },
  "2": {
    value: 2,
    title: "El hambre de encaje",
    essence: "Por dentro lo que más quieres es sentir que tu lugar no está en juego.",
    body: "A solas no piensas tanto en metas como en pertenencia: quién te extraña, quién se alejó, si dijiste algo que cambió el clima. Tu deseo profundo no es complacer a todos, es dejar de vivir con la sensación de que un mal paso te deja afuera. Por eso memorizas tonos, silencios y cambios mínimos.",
    strengths: [
      "Recuerdas detalles emocionales de conversaciones que otros ya olvidaron.",
      "Intuyes cuándo alguien necesita que le preguntes cómo está de verdad, no por cortesía.",
      "Sabes crear momentos de calma que hacen posible hablar de lo difícil.",
    ],
    frictions: [
      "Te adaptas tanto al humor del otro que después no sabes qué querías tú.",
      "Evitas decir 'no' porque temes que el vínculo se enfríe, y acumulas resentimiento.",
      "Interpretas un mensaje tardío como rechazo antes de considerar otras explicaciones.",
    ],
    underPressure:
      "Te encoges o te sobreacomodas: o te callas para no empeorar las cosas, o cedes en todo para recuperar paz rápido. Por dentro lo que te asusta no es el conflicto sino quedarte solo del otro lado.",
    inRelationships:
      "Necesitas oír explícitamente que siguen ahí, incluso cuando hay tensión. Un 'estamos bien' dicho a tiempo vale más que diez gestos grandes después de un silencio largo.",
    blindSpot:
      "Crees que anticipar lo que el otro necesita te hace indispensable, pero a veces solo te impide descubrir si te eligen por ti o por lo cómodo que lo pones.",
    microPractice:
      "En una conversación esta semana, cuando quieras ceder para evitar roce, di primero: 'Yo preferiría esto.' Espera cinco segundos antes de cambiar de opinión.",
  },
  "3": {
    value: 3,
    title: "La necesidad de salir por la boca",
    essence: "Por dentro necesitas decirlo para saber qué sientes.",
    body: "A solas igual piensas en voz alta: escribes, grabas notas, te cuentas el día aunque no haya nadie. Tu hambre emocional es ser escuchado de verdad, no aplaudido. Cuando te quedas mucho tiempo sin expresarte, no te aburres: te apagas por dentro.",
    strengths: [
      "Encuentras la palabra exacta para algo que otros solo sienten como incomodidad.",
      "Usas humor o historia para abrir conversaciones que nadie se atrevía a iniciar.",
      "Procesas más rápido cuando puedes contárselo a alguien sin que lo arregle.",
    ],
    frictions: [
      "Llenas el silencio con chiste o anécdota y evitas la pregunta que sí importaba.",
      "Te duele más ser ignorado que contradicho, y eso te empuja a exagerar.",
      "Confundes ser el alma de la fiesta con haber sido visto emocionalmente.",
    ],
    underPressure:
      "Hablas más, más rápido y con más teatro. Por dentro buscas que alguien te detenga y te diga 'te escucho', pero por fuera parece que solo quieres animar el ambiente.",
    inRelationships:
      "Necesitas tiempo donde puedas hablar sin que te interrumpan para resolver. Si tu pareja o amigos solo escuchan para dar consejo, te sientes solo en medio de la conversación.",
    blindSpot:
      "Crees que si haces reír a todos ya estás bien, pero a veces el escenario te protege de decir 'hoy no tuve ganas de estar ahí'.",
    microPractice:
      "Esta semana ten una conversación de diez minutos donde tu única tarea sea describir cómo te sientes, sin chiste ni moraleja. Si te interrumpen, di: 'Todavía no terminé.'",
  },
  "4": {
    value: 4,
    title: "El deseo de que nada se caiga",
    essence: "Por dentro lo que más quieres es poder confiar en que las cosas están bien hechas.",
    body: "A solas repasas listas, plazos y lo que podría fallar. No es obsesión vacía: es la forma en que tu sistema emocional respira. Cuando el entorno es caótico, no te molesta solo la eficiencia; te falta la sensación de suelo firme bajo los pies.",
    strengths: [
      "Detectas el detalle práctico que evitará un problema dentro de tres semanas.",
      "Te tranquilizas cuando conviertes una preocupación en pasos concretos.",
      "Sostienes rutinas que otros abandonan justo cuando más las necesitan.",
    ],
    frictions: [
      "Te cuesta disfrutar un logro porque ya estás pensando en lo que falta revisar.",
      "Lees un cambio de plan como desprecio al esfuerzo previo.",
      "Te exiges ser la persona confiable y no pides ayuda hasta estar saturado.",
    ],
    underPressure:
      "Te vuelves rígido y literal: más reglas, menos improvisación, tono más seco. Por dentro lo que buscas no es tener razón sino sentir que algo sigue bajo control.",
    inRelationships:
      "Necesitas acuerdos claros sobre quién hace qué y cuándo. La ambigüedad prolongada te hace duro, aunque por fuera sigas cumpliendo.",
    blindSpot:
      "Crees que tu calma depende de que todo esté ordenado, pero a veces lo que te desordena por dentro es no decir 'esto ya no me sirve'.",
    microPractice:
      "Esta semana deja una tarea doméstica o laboral a medias a propósito durante una hora. Observa si la ansiedad es señal de cuidado o de miedo a soltar control.",
  },
  "5": {
    value: 5,
    title: "La ansia de aire nuevo",
    essence: "Por dentro lo que más quieres es sentir que la puerta sigue abierta.",
    body: "A solas fantaseas con cambios: otro ritmo, otro lugar, otra versión de ti. No es huir de todo; es miedo a quedarte atrapado en una vida que se repite sin elegirla. Tu hambre emocional es movimiento con sentido, no caos por aburrimiento.",
    strengths: [
      "Recuperas ánimo rápido cuando pruebas algo distinto, aunque sea pequeño.",
      "Aprendes en caliente y conectas ideas que otros ven separadas.",
      "Detectas cuándo una rutina dejó de nutrirte antes de que explote.",
    ],
    frictions: [
      "Abandonas proyectos cuando la novedad baja, aunque estuvieran cerca de dar fruto.",
      "Confundes inquietud con señal de que algo va mal en la relación.",
      "Prometes disponibilidad total y luego necesitas desaparecer sin avisar.",
    ],
    underPressure:
      "Quieres moverte ya: cambiar tema, cambiar plan, cambiar escenario. Por dentro te asfixia la sensación de estar encerrado; por fuera puede leerse como irresponsabilidad.",
    inRelationships:
      "Necesitas acuerdos sobre espacio y variedad, no solo sobre fidelidad o compromiso. Si todo se vuelve previsible, te distancias emocionalmente aunque sigas presente.",
    blindSpot:
      "Crees que buscas libertad, pero a veces lo que evitas es la conversación incómoda de decir 'aquí sí quiero quedarme'.",
    microPractice:
      "Elige algo que empezaste y no terminaste. Esta semana dedícale dos horas sin abrir nada nuevo. Al terminar, anota qué parte te aburría y qué parte sí te importaba.",
  },
  "6": {
    value: 6,
    title: "El impulso de cuidar primero",
    essence: "Por dentro te sientes bien cuando los tuyos están bien.",
    body: "A solas piensas en quién necesita algo: un mensaje, una comida, una llamada. Tu deseo profundo no es ser héroe; es sentir que tu amor es útil y no solo declarado. Cuando alguien cercano sufre, te cuesta separar su dolor del tuyo.",
    strengths: [
      "Notas señales tempranas de agotamiento en personas que dicen estar bien.",
      "Creás espacios donde otros se atreven a pedir ayuda sin sentirse débiles.",
      "Recuerdas lo que a cada uno le importa cuando planificas algo compartido.",
    ],
    frictions: [
      "Te adelantas a resolver sin preguntar si quieren ser escuchados o acompañados.",
      "Te resentís cuando tu esfuerzo no se menciona, aunque nunca lo hayas pedido.",
      "Postergas tus necesidades hasta que el malestar sale como irritación pequeña.",
    ],
    underPressure:
      "Te multiplicas: más disponibilidad, más soluciones, más culpa si algo falla. Por dentro temes que si aflojas, todo se desmorone sobre alguien que amas.",
    inRelationships:
      "Necesitas permiso explícito para no ser el refugio permanente. Un 'gracias, hoy no necesito arreglo' dicho con cariño te devuelve al vínculo sin convertirte en herramienta.",
    blindSpot:
      "Crees que cuidar es amar, pero a veces te cuidas a ti evitando decir 'también necesito algo'.",
    microPractice:
      "Esta semana pide una cosa concreta a alguien cercano: tiempo, un favor, compañía. Si te da vergüenza, dilo tal cual antes de justificarte.",
  },
  "7": {
    value: 7,
    title: "La sed de entender antes de sentir",
    essence: "Por dentro necesitas que las cosas tengan sentido para poder soltarlas.",
    body: "A solas analizas conversaciones, repasas señales, buscas el patrón. No es frialdad: es tu forma de sentir seguro en un mundo ruidoso. Tu hambre emocional es verdad clara, no certeza fingida. Hasta el cariño te cuesta cuando no entiendes qué está pasando.",
    strengths: [
      "Detectas incoherencias en una historia antes de que otros las nombren.",
      "Te calmas cuando puedes poner nombre a lo que te perturbó.",
      "Ofreces perspectiva sin dramatizar cuando alguien está confundido.",
    ],
    frictions: [
      "Te retiras a pensar justo cuando el otro necesita presencia, no análisis.",
      "Confundes silencio con madurez y evitas decir 'no sé'.",
      "Desconfías de emociones intensas hasta poder racionalizarlas.",
    ],
    underPressure:
      "Te cierras más: menos mensajes, más distancia, respuestas cortas. Por dentro necesitas espacio para pensar; por fuera parece castigo.",
    inRelationships:
      "Necesitas tiempo para procesar antes de responder en caliente. Si te presionan a reaccionar al instante, dices cosas que no sientes del todo o te callas del todo.",
    blindSpot:
      "Crees que entender te protege, pero a veces usas el análisis para no admitir 'me dolió' o 'te extraño'.",
    microPractice:
      "Cuando algo te moleste esta semana, escribe primero una frase emocional ('me sentí...') y recién después tres razones. Comparte la frase emocional con alguien de confianza.",
  },
  "8": {
    value: 8,
    title: "El hambre de peso propio",
    essence: "Por dentro quieres sentir que lo que haces deja marca medible.",
    body: "A solas evalúas si avanzaste, si valió la pena, si alguien notó tu esfuerzo. Tu deseo no es vanidad: es necesidad de existir con impacto. Te cuesta descansar cuando sientes que el tiempo no se convirtió en resultado.",
    strengths: [
      "Transformas intención vaga en plan con plazos y responsables.",
      "Defiendes recursos, tiempo y límites cuando otros evitan la conversación difícil.",
      "Recuperas confianza cuando ves progreso concreto, aunque sea pequeño.",
    ],
    frictions: [
      "Te juzgas duro cuando un día no produce nada visible.",
      "Mides cariño por gestos útiles y te frustras con afecto solo verbal.",
      "Te cuesta delegar porque nadie lo hará 'como debe ser'.",
    ],
    underPressure:
      "Te vuelves más exigente, más directo y menos paciente. Por dentro temes perder terreno; por fuera puedes sonar frío o controlador.",
    inRelationships:
      "Necesitas que reconozcan tu esfuerzo con hechos y palabras. Si solo te piden más sin ver lo que ya diste, te alejas emocionalmente aunque sigas cumpliendo.",
    blindSpot:
      "Crees que valer es producir, pero a veces tu cansancio viene de no permitirte vínculos donde no tienes que demostrar nada.",
    microPractice:
      "Esta semana agenda una actividad placentera sin meta productiva: caminar, comer, escuchar música. Si aparece culpa, nómbrala en voz alta y quédate quince minutos igual.",
  },
  "9": {
    value: 9,
    title: "El deseo de soltar lo que pesa",
    essence: "Por dentro quieres cerrar ciclos y sentir que algo quedó bien terminado.",
    body: "A solas cargas historias ajenas, recuerdos viejos y causas que no empezaste tú. Tu hambre emocional es sentido amplio, no martyrio. Te mueve la idea de que tu vida sirva para algo más grande que tu comodidad inmediata.",
    strengths: [
      "Perdonas o sueltas más rápido cuando entiendes el contexto completo de alguien.",
      "Conectas con personas muy distintas sin necesidad de que piensen igual.",
      "Sabes cuándo una etapa terminó aunque duela admitirlo.",
    ],
    frictions: [
      "Te involucras en problemas que no te tocan para no mirar los tuyos.",
      "Idealizas a quien ayudas y te frustras cuando no cambian.",
      "Te cuesta pedir ayuda porque sientes que otros ya tienen bastante.",
    ],
    underPressure:
      "Te desbordas en generosidad o te retiras con melancolía. Por dentro quieres que algo tenga sentido; por fuera puedes parecer distante o demasiado entregado.",
    inRelationships:
      "Necesitas espacios donde no tengas que ser el adulto emocional del grupo. Si siempre escuchas y rara vez te escuchan, el vínculo se vuelve unilateral.",
    blindSpot:
      "Crees que dar sin límite te hace buena persona, pero a veces evitas poner un límite porque tendrías que sentir tu propio dolor.",
    microPractice:
      "Esta semana declina un favor que no te toca o posponlo. Di: 'Hoy no puedo con eso.' Observa si la culpa es información o un hábito automático.",
  },
  "11": {
    value: 11,
    title: "La sensibilidad sin atenuador",
    essence: "Por dentro sientes todo antes de poder explicarlo.",
    body: "A solas procesas señales que otros aún no nombraron: un tono, una pausa, una energía rara en la casa. Tu deseo profundo es vivir con intensidad sin que te llamen exagerado. Necesitas espacios donde tu intuición no tenga que justificarse con lógica.",
    strengths: [
      "Captas cambios emocionales en alguien antes de que lo admita.",
      "Inspiras confianza porque la gente siente que los lees de verdad.",
      "Conectas ideas creativas cuando el ambiente es seguro y silencioso.",
    ],
    frictions: [
      "Absorbes el estado de ánimo ajeno y lo confundes con el tuyo.",
      "Te sobreestimulas con estímulos y luego no sabes qué te agotó.",
      "Postergas decisiones prácticas porque esperas una señal interna clara.",
    ],
    underPressure:
      "Tu cuerpo reacciona primero: tensión, insomnio, urgencia por retirarte. Por dentro buscas calma; por fuera pueden leerte como dramático o distante.",
    inRelationships:
      "Necesitas que crean en tu percepción aunque no tengas pruebas todavía. Invalidar con 'te lo inventas' cierra el canal por el que más te conectas.",
    blindSpot:
      "Crees que sentir de más te da ventaja, pero a veces no descansas porque confundes alerta interna con verdad externa.",
    microPractice:
      "Dos veces esta semana, antes de reaccionar a una corazonada, pregúntate: '¿Esto es mío, ajeno o mezclado?' Anótalo. Actúa después, no antes.",
  },
  "22": {
    value: 22,
    title: "La ambición que no se cuenta",
    essence: "Por dentro sueñas en grande y te exiges en silencio.",
    body: "A solas ves estructuras completas: lo que podría existir si alguien lo sostuviera con disciplina. Tu hambre emocional no es fama; es construir algo que dure más que un impulso. Te frustras cuando otros no ven la escala de lo que imaginas.",
    strengths: [
      "Sostienes proyectos largos cuando otros ya perdieron interés.",
      "Traduce visión abstracta en pasos que otros pueden ejecutar.",
      "Mantienes estándares altos sin necesidad de aplauso constante.",
    ],
    frictions: [
      "Te castigas por descansar porque sientes que pierdes terreno.",
      "Te cuesta celebrar avances parciales si no se parecen al resultado final.",
      "Esperas que los demás lean tu mente sobre lo que necesitas.",
    ],
    underPressure:
      "Te vuelves perfeccionista y menos tolerante al error ajeno. Por dentro temes que un fallo pequeño invalide años de esfuerzo.",
    inRelationships:
      "Necesitas que respeten tu ritmo de construcción. Las bromas sobre 'trabajar demasiado' pueden sonar ligeras y para ti suenan a desprecio del sueño.",
    blindSpot:
      "Crees que aguantar solo demuestra fuerza, pero a veces evitas pedir apoyo porque nadie lo hará a tu altura ideal.",
    microPractice:
      "Comparte esta semana un avance pequeño de un proyecto grande con alguien cercano. Pide una sola observación concreta, no permiso para seguir.",
  },
  "33": {
    value: 33,
    title: "El impulso de contener sin pedir",
    essence: "Por dentro quieres que los demás respiren mejor después de estar contigo.",
    body: "A solas repasas conversaciones donde alguien quedó mal y te preguntas cómo sostenerlo mejor. Tu deseo no es salvar a todos; es sentir que tu presencia alivia. Te cuesta admitir cuánto te cuesta, porque confundes necesidad propia con egoísmo.",
    strengths: [
      "Explicas emociones difíciles con palabras que no humillan.",
      "Detectas cuándo alguien necesita contención y cuándo necesita verdad directa.",
      "Creás confianza porque no usas lo que te cuentan como arma.",
    ],
    frictions: [
      "Te haces indispensable y luego te duele que te busquen solo cuando hay crisis.",
      "Confundes amor con disponibilidad permanente.",
      "Te vacías escuchando y llamas fortaleza a no pedir reciprocidad.",
    ],
    underPressure:
      "Sigues apareciendo para otros aunque por dentro estés en rojo. El agotamiento llega de golpe, no gradual.",
    inRelationships:
      "Necesitas relaciones donde también te pregunten '¿y tú?' sin que tengas que iniciarlo siempre. El cuidado mutuo no es negociable para ti, aunque cueste pedirlo.",
    blindSpot:
      "Crees que sostener a todos prueba amor, pero a veces evitas decir 'hoy no puedo' porque temes dejar de ser valioso.",
    microPractice:
      "Esta semana, cuando alguien se desahogue contigo, escucha completo y luego di: '¿Quieres consejo o solo compañía?' Reserva energía para ti después.",
  },
};

export const shields: Record<string, ShieldContent> = {
  "1": {
    value: 1,
    title: "La cara de quien no duda",
    essence: "A simple vista pareces seguro antes de que pregunten.",
    body: "Llegas con postura de quien ya decidió, aunque por dentro todavía estés probando. La gente te lee como líder natural y a veces te asigna responsabilidades que no pediste. Tu personalidad protege la vulnerabilidad de no saber; también te aísla cuando necesitarías decir 'todavía no'.",
    strengths: [
      "En una reunión nueva tomas la palabra cuando el silencio se alarga.",
      "Proyectas dirección clara aunque el plan todavía esté en borrador.",
      "La gente te busca para desbloquear decisiones pequeñas del día a día.",
    ],
    frictions: [
      "Te cierras demasiado rápido en una opción para no parecer indeciso.",
      "Otros evitan contradecirte porque asumen que ya lo pensaste todo.",
      "Confundes firmeza pública con no tener derecho a cambiar de idea.",
    ],
    underPressure:
      "Tu tono se vuelve más cortante y tu cuerpo ocupa más espacio. La personalidad dice 'yo me encargo'; por dentro puede haber cansancio de ser el que siempre empuja.",
    inRelationships:
      "Pareces independiente hasta el punto de que pocos ofrecen ayuda. Si quieres cercanía, tienes que decirlo explícitamente, con frases como 'hoy no tengo claro qué hacer'.",
    blindSpot:
      "Crees que mostrar duda te resta respeto, pero a veces la gente se acerca más cuando admites que también te cuesta.",
    microPractice:
      "En una conversación social esta semana di en voz alta: 'Todavía lo estoy pensando.' Observa si pierdes respeto o ganas conversación real.",
  },
  "2": {
    value: 2,
    title: "La sonrisa que desarma",
    essence: "A simple vista pareces fácil de tratar y poco conflictivo.",
    body: "Llegas suavizando el ambiente: preguntas, escuchas, adaptas el tono. La gente te percibe como puente y a veces descarga contigo lo que no le diría a otros. Tu personalidad es amable; también puede esconder que ya tienes una opinión firme.",
    strengths: [
      "En grupos nuevos reduces la tensión antes de que alguien la nombre.",
      "Haces sentir cómodo a quien llega tarde o no conoce a nadie.",
      "Detectas micro-roces y los atajas con humor o cambio de tema.",
    ],
    frictions: [
      "Te conviertes en mediador automático aunque nadie te lo haya pedido.",
      "Otros asumen que nunca te molesta nada.",
      "Evitas confrontación visible y acumulas acuerdos que no querías.",
    ],
    underPressure:
      "Sonríes más o te callas del todo. Por fuera pareces imperturbable; por dentro puedes estar contando cada palabra que dolió.",
    inRelationships:
      "Pareces complaciente y eso invita a que planeen sin consultarte. Si no marcas preferencias a tiempo, te frustras en silencio y ellos ni se enteran.",
    blindSpot:
      "Crees que la armonía visible protege el vínculo, pero a veces enseña al otro que tu 'sí' no significa mucho.",
    microPractice:
      "Cuando te inviten a algo esta semana, responde una vez con tu preferencia real antes de preguntar qué quieren los demás.",
  },
  "3": {
    value: 3,
    title: "El brillo que llena la sala",
    essence: "A simple vista pareces liviano y fácil de querer.",
    body: "Entras con energía, chiste o comentario que alivia. La gente te recuerda como 'el divertido' o 'la que anima', y eso abre puertas sociales rápido. Tu personalidad brilla; también puede ocultar que no siempre quieres ser el centro.",
    strengths: [
      "Rompe el hielo en contextos incómodos con una frase bien colocada.",
      "Haces que otros hablen mostrando entusiasmo por lo que cuentan.",
      "Transmites optimismo sin negar del todo lo que pasa.",
    ],
    frictions: [
      "Usas carisma para esquivar preguntas personales incómodas.",
      "Te cuesta ser tomado en serio cuando quieres hablar de algo difícil.",
      "Agotas energía social y luego desapareces sin explicación.",
    ],
    underPressure:
      "Subes el volumen: más risas, más historias, más movimiento. La personalidad evita que vean miedo o tristeza; también retrasa ayuda real.",
    inRelationships:
      "Pareces despreocupado y eso puede hacer que no pregunten cómo estás de verdad. Si quieres profundidad, tendrás que bajar el espectáculo a propósito.",
    blindSpot:
      "Crees que hacer reír es regalar cariño, pero a veces evitas decir 'hoy no estoy bien' porque temes bajar la energía del grupo.",
    microPractice:
      "En un encuentro social, quédate en silencio diez minutos sin rellenar. Si alguien pregunta, responde honesto: 'Estoy escuchando' o 'Hoy ando callado.'",
  },
  "4": {
    value: 4,
    title: "La calma que ordena",
    essence: "A simple vista pareces confiable y difícil de sorprender.",
    body: "Llegas con ropa, horario y actitud de quien tiene las cosas bajo control. La gente te asigna tareas concretas porque proyectas solidez. Tu personalidad transmite orden; también puede hacer que no vean cuando estás abrumado.",
    strengths: [
      "En caos ajeno eres quien pregunta '¿qué sigue?' con tono estable.",
      "Das sensación de que cumplirás aunque nadie te persiga.",
      "Tranquilizas a quienes improvisan demasiado con hechos verificables.",
    ],
    frictions: [
      "Te resistes a cambios públicos aunque por dentro ya los aceptaste.",
      "Otros te ven rígido antes de escuchar tu razón.",
      "Te cuesta pedir flexibilidad porque rompe la imagen de persona confiable.",
    ],
    underPressure:
      "Te vuelves más formal, más breve y más literal. La personalidad dice 'todo bajo control'; por dentro puede haber alarma por lo imprevisto.",
    inRelationships:
      "Pareces predecible y eso tranquiliza, pero también puede aburrir o hacer que asuman que nunca quieres sorpresas. Necesitas señalar cuándo sí las quieres.",
    blindSpot:
      "Crees que ser el adulto estable te hace indispensable, pero a veces te impide decir 'hoy no puedo con esto'.",
    microPractice:
      "Pide una excepción concreta a una rutina compartida esta semana. Di el motivo en una frase, sin disculparte de más.",
  },
  "5": {
    value: 5,
    title: "La chispa que contagia",
    essence: "A simple vista pareces libre y difícil de encasillar.",
    body: "Llegas con historias, planes nuevos o energía de movimiento. La gente te lee como alguien que conoce sitios, personas y posibilidades. Tu personalidad es atractiva; también puede hacer que subestimen tu capacidad de compromiso.",
    strengths: [
      "Abres conversaciones con desconocidos más rápido que la mayoría.",
      "Transmites que hay salida cuando otros solo ven callejón.",
      "Adaptas tu estilo al contexto sin perder autenticidad visible.",
    ],
    frictions: [
      "Prometes planes cambiantes y otros no saben qué contar contigo.",
      "Usas humor o cambio de tema para evitar conversaciones serias.",
      "Te aburres de roles fijos y cambias de registro sin avisar.",
    ],
    underPressure:
      "Te mueves más: mensajes, viajes, ideas, contactos. La personalidad dice 'nada me ata'; por dentro puede haber miedo a quedarte quieto con lo que duele.",
    inRelationships:
      "Pareces independiente y eso atrae, pero también puede generar inseguridad si no explicas cuándo vas a volver o qué significa tu silencio.",
    blindSpot:
      "Crees que proyectar libertad te protege, pero a veces evitas decir 'quiero quedarme' porque suena a encadenarte.",
    microPractice:
      "Confirma un plan ya hecho esta semana sin proponer alternativa nueva. Manda un mensaje: 'Sigo adelante con lo acordado.'",
  },
  "6": {
    value: 6,
    title: "El refugio visible",
    essence: "A simple vista pareces alguien a quien acudir cuando algo falla.",
    body: "Llegas con actitud de cuidado: preguntas, ofreces, recuerdas lo importante. La gente te ve como hogar emocional antes de conocerte del todo. Tu personalidad es generosa; también invita a que te usen sin preguntarte qué necesitas.",
    strengths: [
      "En crisis ajena eres quien aparece con algo concreto, no solo con 'cuenta conmigo'.",
      "Haces sentir bienvenido a quien se siente fuera de lugar.",
      "Recuerdas fechas, gustos y detalles que otros olvidan.",
    ],
    frictions: [
      "Te adelantas a ayudar y luego te resientes si no lo agradecen.",
      "Otros confunden tu calidez con disponibilidad ilimitada.",
      "Te cuesta mostrar enfado porque rompe la imagen de persona buena.",
    ],
    underPressure:
      "Sigues sosteniendo a otros con sonrisa cansada. La personalidad dice 'aquí estoy'; por dentro puede haber saturación.",
    inRelationships:
      "Pareces el adulto emocional del vínculo. Si no pides cuidado también, tu pareja puede creer que no lo necesitas.",
    blindSpot:
      "Crees que ser refugio te hace querido, pero a veces atraes gente que solo llega cuando hay problema.",
    microPractice:
      "Cuando alguien te pida ayuda esta semana, responde primero: '¿Para cuándo lo necesitas?' Negocia tiempo antes de decir que sí.",
  },
  "7": {
    value: 7,
    title: "La distancia elegante",
    essence: "A simple vista pareces selectivo y difícil de leer.",
    body: "Llegas con reserva: mirada atenta, palabras medidas, poco teatro. La gente te percibe como inteligente o misterioso antes de saber si eres cercano. Tu personalidad filtra; también puede hacer que otros no se acerquen por miedo a molestar.",
    strengths: [
      "No llenas el espacio con ruido innecesario en conversaciones densas.",
      "Das sensación de profundidad aunque aún no hayas contado mucho.",
      "Proteges información sensible ajena sin hacer drama.",
    ],
    frictions: [
      "Te cierras en público y otros interpretan desinterés.",
      "Usas ironía o silencio para evitar intimidad prematura.",
      "Te cuesta mostrar entusiasmo porque suena a compromiso.",
    ],
    underPressure:
      "Te retiras más: respuestas cortas, menos contacto visual, más tiempo solo. La personalidad dice 'no necesito a nadie'; por dentro puede haber sobrecarga.",
    inRelationships:
      "Pareces autónomo al extremo. Si quieres cercanía, tendrás que dar señales explícitas de que sí quieres compañía, no solo tolerarla.",
    blindSpot:
      "Crees que la distancia te protege de decepción, pero a veces alejas a quien sí estaba dispuesto a acercarse despacio.",
    microPractice:
      "Inicia tú una conversación personal esta semana con alguien de confianza. Comparte un detalle real antes de que te pregunten.",
  },
  "8": {
    value: 8,
    title: "La presencia que ocupa espacio",
    essence: "A simple vista pareces alguien que sabe lo que quiere.",
    body: "Llegas con energía de resultado: mirada directa, agenda clara, poco tiempo para rodeos. La gente te lee como competente y exigente antes de conocer tu lado blando. Tu personalidad impone respeto; también puede intimidar.",
    strengths: [
      "En negociaciones informales nombras lo importante sin dar vueltas.",
      "Proyectas que cumplirás lo que prometes.",
      "Haces que conversaciones vagas bajen a decisiones concretas.",
    ],
    frictions: [
      "Otros evitan traerte malas noticias por miedo a tu reacción.",
      "Confundes eficiencia con falta de calidez y no corriges la impresión.",
      "Te cuesta mostrar cansancio porque suena a debilidad.",
    ],
    underPressure:
      "Tu voz baja, tu ritmo acelera y tu paciencia cae. La personalidad dice 'sigo al mando'; por dentro puede haber miedo a perder estatus.",
    inRelationships:
      "Pareces fuerte y eso atrae, pero también puede hacer que no ofrezcan apoyo emocional. Si lo necesitas, pídelo con claridad, no con indirecciones.",
    blindSpot:
      "Crees que proyectar control te mantiene seguro, pero a veces impide que vean cuándo necesitas que alguien simplemente se quede.",
    microPractice:
      "Esta semana delega una tarea visible y no la corrijas en silencio. Deja que el resultado sea imperfecto y comenta solo lo esencial.",
  },
  "9": {
    value: 9,
    title: "La mirada compasiva",
    essence: "A simple vista pareces maduro y poco demandante.",
    body: "Llegas con apertura: escuchas, comprendes, no juzgas rápido. La gente te confía cosas pronto porque proyectas amplitud emocional. Tu personalidad es generosa; también puede ocultar que tienes límites propios.",
    strengths: [
      "Haces cómodo a quien habla de temas incómodos sin dramatizar.",
      "Conectas con contextos culturales o familiares distintos al tuyo.",
      "Das sensación de perspectiva cuando otros se encierran en detalle.",
    ],
    frictions: [
      "Absorbes historias ajenas y llegas a casa emocionalmente lleno.",
      "Otros asumen que nunca te ofende nada.",
      "Te cuesta poner límites porque temes parecer menos empático.",
    ],
    underPressure:
      "Te vuelves más filosófico o más distante. La personalidad dice 'ya pasé por peor'; por dentro puede haber saturación no nombrada.",
    inRelationships:
      "Pareces fácil de amar y difícil de conocer en lo tuyo. Si no compartes necesidades concretas, tu pareja puede creer que solo das.",
    blindSpot:
      "Crees que comprender a todos te hace invulnerable, pero a veces evitas decir 'esto no me funciona' para no romper la imagen de persona amplia.",
    microPractice:
      "Cuando alguien te cuente un problema ajeno esta semana, escucha y luego di: '¿Quieres que opine o solo que te escuche?' Protege tu energía.",
  },
  "11": {
    value: 11,
    title: "La intensidad contenida",
    essence: "A simple vista pareces perceptivo y un poco apartado.",
    body: "Llegas con una presencia que nota más de lo que dices. La gente siente que los lees y a veces se incomoda antes de saber por qué. Tu personalidad es fina y alerta; también te deja expuesto a absorbir demasiado del ambiente.",
    strengths: [
      "Captas dinámicas de grupo que nadie ha verbalizado todavía.",
      "Inspiras confianza en temas delicados sin forzar intimidad.",
      "Aportas ideas creativas cuando el entorno es respetuoso.",
    ],
    frictions: [
      "Te retiras cuando hay demasiado estímulo sin avisar.",
      "Otros te piden intuiciones como si fueran certezas.",
      "Confundes cansancio sensorial con falta de interés social.",
    ],
    underPressure:
      "Te vuelves más silencioso o más eléctrico, sin término medio. La personalidad protege tu sistema nervioso; por fuera puede leerse como humor cambiante.",
    inRelationships:
      "Pareces profundo y frágil a la vez. Necesitas explicar cuándo te retiras para recargar, no para castigar.",
    blindSpot:
      "Crees que aguantar la intensidad en silencio te hace fuerte, pero a veces solo te deja agotado antes de pedir un ritmo distinto.",
    microPractice:
      "Antes de un evento social esta semana, acuerda contigo una señal de salida y comunícala: 'Me retiro a las diez, no es personal.'",
  },
  "22": {
    value: 22,
    title: "La solidez que impone respeto",
    essence: "A simple vista pareces hecho para proyectos grandes.",
    body: "Llegas con presencia de quien piensa a largo plazo: estructura, visión, poco drama. La gente te asigna responsabilidad antes de comprobar si la quieres. Tu personalidad es imponente; también puede ocultar dudas legítimas.",
    strengths: [
      "En contextos profesionales transmites que sabes sostener algo complejo.",
      "Haces que ideas ambiciosas suenen posibles, no fantasiosas.",
      "Das seguridad a quienes temen que todo se caiga.",
    ],
    frictions: [
      "Otros evitan decirte malas noticias por miedo a defraudarte.",
      "Te cuesta admitir agotamiento sin justificarlo con resultados.",
      "Proyectas perfección y luego te castigas en privado.",
    ],
    underPressure:
      "Te vuelves más rígido y menos accesible. La personalidad dice 'aguanto todo'; por dentro puede haber miedo al colapso visible.",
    inRelationships:
      "Pareces inquebrantable y eso aleja ofertas de ayuda. Si quieres apoyo, tendrás que mostrar una grieta real, no solo cansancio funcional.",
    blindSpot:
      "Crees que ser roca inspira confianza, pero a veces impide que alguien se acerque por miedo a no estar a tu altura.",
    microPractice:
      "Comparte una duda concreta de un proyecto con alguien cercano esta semana. Pide perspectiva, no solución.",
  },
  "33": {
    value: 33,
    title: "La calidez que acoge",
    essence: "A simple vista pareces luz emocional en cualquier grupo.",
    body: "Llegas con tono cálido, mirada atenta y disposición a escuchar. La gente te busca para desahogarse aunque apenas te conozcan. Tu personalidad es acogedora; también puede invitar a sobrecarga emocional ajena.",
    strengths: [
      "Haces sentir seguro a quien teme ser juzgado.",
      "Explicas sin condescender cuando alguien no entiende.",
      "Elevas el tono de conversaciones que se volvieron duras.",
    ],
    frictions: [
      "Te conviertes en confidente de todos y pierdes espacio propio.",
      "Otros confunden tu calma con capacidad ilimitada.",
      "Te cuesta poner fin a conversaciones que ya te drenaron.",
    ],
    underPressure:
      "Sigues sonriendo y conteniendo aunque estés al límite. La personalidad dice 'puedo con esto'; por dentro puede haber vacío.",
    inRelationships:
      "Pareces el cuidador natural del vínculo. Si no negocias reciprocidad, acabas resentido por dar lo que nadie pidió explícitamente.",
    blindSpot:
      "Crees que acoger a todos demuestra amor, pero a veces enseñas que tu bienestar es secundario.",
    microPractice:
      "Al terminar una conversación emocional esta semana, di: 'Tengo que parar aquí.' Sin excusa larga. Observa si el vínculo aguanta el límite.",
  },
};

export const destinies: Record<string, DestinyContent> = {
  "1": {
    value: 1,
    title: "Dejar huella propia",
    essence: "Tu destino apunta a construir algo que lleve tu nombre, aunque sea pequeño.",
    body: "Lo que estás desarrollando no es solo independencia: es la capacidad de iniciar y sostener dirección propia. Tu legado no tiene que ser famoso; tiene que ser reconocible como tuyo. La tensión aparece cuando confundes liderar con hacerlo todo solo.",
    strengths: [
      "Emprendes caminos que otros posponen por miedo al error.",
      "Defiendes decisiones impopulares cuando crees que son correctas.",
      "Inspiras acción porque modelas que se puede empezar sin permiso.",
    ],
    frictions: [
      "Te resistes a compartir crédito y eso limita proyectos grandes.",
      "Abandonas colaboraciones cuando sientes que pierdes autonomía.",
      "Confundes obstinación con visión y te cuesta pivotar a tiempo.",
    ],
    underPressure:
      "Te vuelves más autoritario y menos abierto al feedback. Bajo presión tu destino se encoge a 'yo mando' en lugar de 'yo abro'.",
    inRelationships:
      "Tu expresión plena incluye aprender a liderar sin convertir a tu pareja o familia en ejecutores. Preguntar '¿cómo lo ves?' no te quita liderazgo; lo madura.",
    blindSpot:
      "Crees que tu destino es hacerlo solo, pero a veces la huella más grande sale de construir con otros sin perder tu voz.",
    microPractice:
      "Identifica un proyecto compartido esta semana y propón una división clara: tú decides X, el otro decide Y. Cumple tu parte sin corregir la ajena.",
  },
  "2": {
    value: 2,
    title: "Tejer vínculos que duren",
    essence: "Tu destino apunta a crear pertenencia real, no solo armonía momentánea.",
    body: "Lo que estás desarrollando es la habilidad de conectar personas y sostenerlas en el tiempo. Tu legado puede ser invisible: redes, puentes, acuerdos que nadie aplaude pero que evitan rupturas. La trampa es creer que tu valor es desaparecer para que otros brillem.",
    strengths: [
      "Facilitas acuerdos donde ambas partes sienten que ganaron algo.",
      "Recuerdas historias compartidas que reconstruyen confianza.",
      "Detectas cuándo alguien necesita ser incluido antes de que lo pida.",
    ],
    frictions: [
      "Evitas conflictos necesarios y dejas problemas crecer bajo la alfombra.",
      "Te defines por los vínculos y te cuesta saber quién eres sin ellos.",
      "Confundes paz aparente con relación sana.",
    ],
    underPressure:
      "Te sobreacomodas o te victimizas en silencio. Bajo presión tu destino se tuerce hacia complacer en lugar de conectar con verdad.",
    inRelationships:
      "Tu expresión plena incluye decir lo incómodo sin romper el lazo. Un vínculo durable necesita tu voz, no solo tu capacidad de absorber.",
    blindSpot:
      "Crees que tu destino es mantener la paz, pero a veces tu legado es enseñar a otros a sostener la verdad contigo.",
    microPractice:
      "Inicia una conversación pendiente esta semana con una frase clara: 'Hay algo que necesito decir para que esto funcione.' Sin rodeos ni disculpa previa.",
  },
  "3": {
    value: 3,
    title: "Dar forma a lo vivido",
    essence: "Tu destino apunta a traducir experiencia en algo que otros puedan usar.",
    body: "Lo que estás desarrollando es la capacidad de nombrar, contar y compartir lo humano. Tu legado puede ser palabras, arte, enseñanza o simplemente conversaciones que cambian cómo alguien se ve. La trampa es quedarte en performance sin profundidad.",
    strengths: [
      "Conviertes caos emocional en relatos que otros entienden.",
      "Animas espacios creativos donde la gente se atreve a expresarse.",
      "Usas humor o belleza para abrir temas que otros evitan.",
    ],
    frictions: [
      "Te dispersas en muchos formatos y no terminas ninguno.",
      "Confundes aplauso con impacto real.",
      "Evitas el silencio necesario para pulir algo bueno.",
    ],
    underPressure:
      "Hablas más y escuchas menos. Bajo presión tu destino se vuelve ruido en lugar de claridad.",
    inRelationships:
      "Tu expresión plena incluye escuchar tanto como contar. Las personas cercanas necesitan sentirse protagonistas, no audiencia.",
    blindSpot:
      "Crees que tu destino es ser escuchado, pero a veces tu legado está en escuchar y devolver algo preciso.",
    microPractice:
      "Escribe esta semana un párrafo corto sobre algo que te importa. Léelo a una persona y pregunta: '¿Qué te quedó?' Ajusta según la respuesta, no según tu intención.",
  },
  "4": {
    value: 4,
    title: "Edificar lo que perdura",
    essence: "Tu destino apunta a construir bases que otros puedan usar después.",
    body: "Lo que estás desarrollando es la paciencia de hacer las cosas bien y dejarlas listas para el siguiente. Tu legado puede ser un hogar, un sistema, una rutina o una institución pequeña. La trampa es confundir rigidez con solidez.",
    strengths: [
      "Transformas ideas flojas en procesos repetibles.",
      "Mantienes estándares cuando todos quieren shortcuts.",
      "Creás seguridad material o emocional para quienes dependen de ti.",
    ],
    frictions: [
      "Te resistes a cambios necesarios por apego al plan original.",
      "Criticas sin proponer y te ganas fama de obstáculo.",
      "Postergas descanso hasta que el cuerpo te obliga.",
    ],
    underPressure:
      "Te vuelves inflexible y moralista con las reglas. Bajo presión tu destino se reduce a control en lugar de construcción.",
    inRelationships:
      "Tu expresión plena incluye flexibilidad negociada. Una base sólida no es inmovible; es confiable y revisable.",
    blindSpot:
      "Crees que tu destino es no fallar nunca, pero a veces tu legado es enseñar que se puede reparar sin derrumbar todo.",
    microPractice:
      "Revisa un acuerdo o rutina compartida esta semana y propón un ajuste concreto. Explica qué problema resuelve, no solo qué cambia.",
  },
  "5": {
    value: 5,
    title: "Abrir puertas nuevas",
    essence: "Tu destino apunta a expandir lo posible para ti y para otros.",
    body: "Lo que estás desarrollando es la capacidad de moverte, conectar mundos y probar caminos distintos. Tu legado puede ser libertad modelada: enseñar que cambiar no es traicionar. La trampa es confundir movimiento con evasión.",
    strengths: [
      "Traes opciones cuando otros solo ven una salida.",
      "Recuperas grupos estancados con energía y perspectiva nueva.",
      "Aprendes rápido y compartes lo aprendido sin guardar secretos.",
    ],
    frictions: [
      "Abandonas antes de consolidar y tu historial parece disperso.",
      "Prometes más variedad de la que sostienes.",
      "Usas novedad para no enfrentar compromisos incómodos.",
    ],
    underPressure:
      "Quieres escapar del contexto entero. Bajo presión tu destino se vuelve huida en lugar de exploración.",
    inRelationships:
      "Tu expresión plena incluye negociar libertad y presencia. Abrir puertas no significa dejar las anteriores sin cerrar con respeto.",
    blindSpot:
      "Crees que tu destino es no detenerte, pero a veces tu legado está en quedarte lo suficiente para que algo madure.",
    microPractice:
      "Termina una tarea o conversación pendiente antes de iniciar otra nueva esta semana. Al cerrarla, anota qué aprendiste al sostenerla.",
  },
  "6": {
    value: 6,
    title: "Crear refugio para otros",
    essence: "Tu destino apunta a construir espacios donde la gente se sienta cuidada.",
    body: "Lo que estás desarrollando es responsabilidad afectiva con límites sanos. Tu legado puede ser familia, comunidad, equipo o simplemente la reputación de quien aparece. La trampa es creer que amar es cargar sin descanso.",
    strengths: [
      "Sostienes personas en crisis sin hacerlas sentir deudoras.",
      "Creás tradiciones y rituales que dan continuidad emocional.",
      "Modelas cuidado concreto, no solo palabras bonitas.",
    ],
    frictions: [
      "Te sacrificas y luego exiges gratitud en silencio.",
      "Controlas por amor y llamas preocupación a la interferencia.",
      "Te cuesta recibir cuidado porque contradice tu rol.",
    ],
    underPressure:
      "Te multiplicas hasta el resentimiento. Bajo presión tu destino se tuerce hacia martirio en lugar de refugio.",
    inRelationships:
      "Tu expresión plena incluye pedir cuidado y aceptarlo. Un refugio real no se construye sobre una sola persona agotada.",
    blindSpot:
      "Crees que tu destino es dar sin límite, pero a veces tu legado es enseñar a otros a cuidar también.",
    microPractice:
      "Delega un gesto de cuidado que harías tú solo: una comida, una llamada, un arreglo. Deja que salga distinto sin corregir.",
  },
  "7": {
    value: 7,
    title: "Iluminar lo oculto",
    essence: "Tu destino apunta a buscar verdad y compartirla con cuidado.",
    body: "Lo que estás desarrollando es profundidad: ver patrones, cuestionar lo obvio, enseñar lo que otros no miran. Tu legado puede ser conocimiento, guía o simplemente preguntas que cambian conversaciones. La trampa es aislarte del mundo que quieres entender.",
    strengths: [
      "Detectas incoherencias antes de que cuesten caro.",
      "Ofreces perspectiva sin humillar al que no sabía.",
      "Proteges tiempo de reflexión que otros subestiman.",
    ],
    frictions: [
      "Te retiras tanto que tu insight no llega a nadie.",
      "Usas certeza intelectual para evitar vulnerabilidad.",
      "Desconfías de lo emocional y pierdes mitad del cuadro.",
    ],
    underPressure:
      "Te vuelves cortante o silencioso por completo. Bajo presión tu destino se encierra en torre en lugar de linterna.",
    inRelationships:
      "Tu expresión plena incluye traducir lo que sabes en presencia, no solo en análisis. La verdad compartida conecta más que la verdad guardada.",
    blindSpot:
      "Crees que tu destino es entender solo, pero a veces tu legado es decir 'no lo sé' y explorar con alguien más.",
    microPractice:
      "Comparte una idea o duda intelectual con alguien no experto esta semana. Pregunta qué parte resonó y cuál no, sin defender tu versión.",
  },
  "8": {
    value: 8,
    title: "Mover montañas",
    essence: "Tu destino apunta a convertir esfuerzo en resultado que otros puedan ver.",
    body: "Lo que estás desarrollando es capacidad de ejecutar, negociar y sostener poder con responsabilidad. Tu legado puede ser estabilidad material, liderazgo o simplemente prueba de que se puede. La trampa es medir tu humanidad por producción.",
    strengths: [
      "Transformas recursos limitados en avances concretos.",
      "Defiendes límites y plazos cuando otros evitan la conversación.",
      "Modelas disciplina sin pedir condiciones especiales.",
    ],
    frictions: [
      "Priorizas resultado sobre proceso y quemas relaciones.",
      "Te cuesta celebrar porque ya miras la siguiente meta.",
      "Confundes respeto con miedo.",
    ],
    underPressure:
      "Te vuelves más duro y menos empático. Bajo presión tu destino se reduce a ganar en lugar de construir.",
    inRelationships:
      "Tu expresión plena incluye mostrar ternura sin perder autoridad. Mover montañas no significa aplastar a quien camina contigo.",
    blindSpot:
      "Crees que tu destino es no mostrar debilidad, pero a veces tu legado es enseñar que el poder incluye pedir ayuda.",
    microPractice:
      "Reconoce en voz alta el aporte de alguien en un proyecto compartido esta semana. Sé específico sobre qué hizo y por qué importó.",
  },
  "9": {
    value: 9,
    title: "Completar lo empezado",
    essence: "Tu destino apunta a cerrar ciclos con sentido y soltar con dignidad.",
    body: "Lo que estás desarrollando es amplitud: ver más allá de lo inmediato y ayudar a que las cosas terminen bien. Tu legado puede ser perdón, servicio o simplemente ejemplo de cómo soltar. La trampa es cargar con lo que no te toca.",
    strengths: [
      "Ayudas a otros a cerrar etapas sin humillarlos.",
      "Conectas causas y personas que no se hubieran encontrado.",
      "Modelas generosidad sin contabilidad obsesiva.",
    ],
    frictions: [
      "Te quedas en relaciones o proyectos ya terminados por lealtad mal entendida.",
      "Idealizas el sacrificio y descuidas lo tuyo.",
      "Evitas conflictos personales refugiándote en lo colectivo.",
    ],
    underPressure:
      "Te desbordas o te apagas. Bajo presión tu destino se vuelve escape en lugar de cierre.",
    inRelationships:
      "Tu expresión plena incluye poner límites a lo que das. Completar lo empezado también significa terminar lo que ya no te corresponde.",
    blindSpot:
      "Crees que tu destino es cargar por todos, pero a veces tu legado es enseñar a soltar lo que ya cumplió su ciclo.",
    microPractice:
      "Identifica una responsabilidad que ya no te toca y comunícala esta semana: 'A partir de ahora esto lo lleva X.' Sin discurso de culpa.",
  },
  "11": {
    value: 11,
    title: "Encender a otros",
    essence: "Tu destino apunta a inspirar sin quemarte en el proceso.",
    body: "Lo que estás desarrollando es sensibilidad canalizada: intuición, creatividad y presencia que eleva. Tu legado puede ser una chispa en alguien que dudaba de sí mismo. La trampa es vivir siempre en voltaje alto.",
    strengths: [
      "Nombras lo que otros sienten y aún no dicen.",
      "Aportas visión creativa en momentos de estancamiento.",
      "Conectas lo espiritual o emocional con lo práctico.",
    ],
    frictions: [
      "Te agotas por no filtrar estímulos y compromisos.",
      "Confundes inspiración con obligación de salvar.",
      "Postergas lo mundano hasta que te pasa factura.",
    ],
    underPressure:
      "Oscilas entre sobreentrega y retiro total. Bajo presión tu destino se vuelve faro intermitente.",
    inRelationships:
      "Tu expresión plena incluye decir cuándo necesitas apagar la luz. Encender a otros no requiere estar siempre encendido.",
    blindSpot:
      "Crees que tu destino es sentir por todos, pero a veces tu legado es enseñar a otros a sostener su propia luz.",
    microPractice:
      "Antes de dar un consejo inspirador esta semana, pregunta: '¿Quieres perspectiva o solo que te escuche?' Responde solo lo pedido.",
  },
  "22": {
    value: 22,
    title: "Levantar lo imposible",
    essence: "Tu destino apunta a materializar visiones que otros dejan en papel.",
    body: "Lo que estás desarrollando es arquitectura humana: planes grandes con ejecución real. Tu legado puede ser infraestructura, empresa, familia extendida o cualquier cosa que sobreviva tu impulso inicial. La trampa es exigirte como si descansar fuera traición.",
    strengths: [
      "Sostienes plazos largos cuando otros pierden foco.",
      "Traduce ambición en roles claros para un equipo.",
      "Mantienes calidad sin perder de vista la escala.",
    ],
    frictions: [
      "Te aíslas bajo presión y el equipo pierde dirección humana.",
      "Rechazas ayuda imperfecta y terminas más lento.",
      "Confundes valor personal con tamaño del logro.",
    ],
    underPressure:
      "Te vuelves tiránico contigo y exigente con otros. Bajo presión tu destino se reduce a obra en lugar de vida.",
    inRelationships:
      "Tu expresión plena incluye compartir el peso emocional de construir. Levantar lo imposible no significa no necesitar manos ni corazones cercanos.",
    blindSpot:
      "Crees que tu destino es soportarlo todo, pero a veces tu legado es construir con otros desde el principio, no solo al final.",
    microPractice:
      "Invita a alguien a co-crear una parte pequeña de un proyecto grande esta semana. Define entregable, plazo y deja espacio para su criterio.",
  },
  "33": {
    value: 33,
    title: "Sanar en cadena",
    essence: "Tu destino apunta a que tu cuidado se multiplique sin vaciarte.",
    body: "Lo que estás desarrollando es enseñanza compasiva: acompañar, explicar y elevar sin convertirte en único sostén. Tu legado puede ser personas que aprendieron a cuidar mejor porque tú modelaste límites. La trampa es confundir amor con autosacrificio.",
    strengths: [
      "Ayudas a otros a nombrar lo que sienten sin vergüenza.",
      "Creás espacios seguros para conversaciones difíciles.",
      "Elevas el tono de un grupo sin minimizar el dolor.",
    ],
    frictions: [
      "Te conviertes en terapeuta informal de todos.",
      "Confundes necesidad ajena con llamado personal.",
      "Te vacías y luego culpas a quien 'no hizo lo suficiente'.",
    ],
    underPressure:
      "Sigues dando hasta romper. Bajo presión tu destino se vuelve rescate en lugar de sanación.",
    inRelationships:
      "Tu expresión plena incluye recibir cuidado y enseñar reciprocidad. Sanar en cadena empieza por no agotar el primer eslabón.",
    blindSpot:
      "Crees que tu destino es estar disponible siempre, pero a veces tu legado es mostrar que el cuidado tiene horario y límites.",
    microPractice:
      "Después de acompañar a alguien esta semana, haz algo solo para ti durante veinte minutos sin teléfono. Trátalo como parte del trabajo, no como lujo.",
  },
};
