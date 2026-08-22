import type { PairContent } from "../types";

/**
 * Los 78 pares posibles. La clave es canónica y sin dirección: la dinámica
 * entre un 6 y un 5 es la misma se mire desde donde se mire.
 *
 * El campo `practice` es la carga útil real y sigue la regla de integridad del
 * proyecto: tiene que ser consejo accionable de comunicación o manejo de
 * conflicto, válido aunque el usuario ignore por completo la numerología.
 */
export const pairs: Record<string, PairContent> = {
  "1x1": {
    key: "1x1",
    headline: "Dos motores, un solo volante",
    body: "Ambos arrancan sin pedir permiso, así que el choque no es por falta de ganas sino por exceso de dirección. Cuando están alineados avanzan el doble; cuando no, compiten por decidir lo mismo.",
    practice:
      "Repartan territorios explícitos en vez de decisiones. Cada uno manda sin consultar en su área y avisa, no pide permiso, en la del otro.",
  },
  "1x2": {
    headline: "El que empuja y el que amortigua",
    key: "1x2",
    body: "Uno decide rápido y el otro percibe el costo humano de esa decisión. Es una combinación muy funcional hasta que el primero lee la cautela como freno y el segundo lee la prisa como atropello.",
    practice:
      "Antes de cerrar una decisión, el que empuja pregunta explícitamente 'a quién le cae mal esto', y espera la respuesta completa sin interrumpir.",
  },
  "1x3": {
    key: "1x3",
    headline: "Acción y relato",
    body: "Uno hace y el otro lo cuenta, y eso los vuelve muy visibles juntos. La tensión aparece cuando el que actúa siente que hablar no es trabajo, y el que habla siente que no lo escuchan.",
    practice:
      "Cinco minutos al final del día donde el que actúa solo escucha, sin resolver ni sugerir nada. Pensar en voz alta es la forma en que el otro procesa.",
  },
  "1x4": {
    key: "1x4",
    headline: "Arrancar sin plano contra planificar sin arrancar",
    body: "El primero quiere empezar hoy, el segundo quiere saber cómo termina. Suelen tener razón los dos, y suelen discutirlo en el peor momento: cuando ya hay que decidir.",
    practice:
      "Acuerden un límite de tiempo para planificar antes de empezar. Puesto por escrito y antes de que exista el conflicto, deja de ser una pelea de carácter.",
  },
  "1x5": {
    key: "1x5",
    headline: "Mucha energía, poco ancla",
    body: "Se entienden de inmediato porque ninguno soporta la lentitud. El problema no es el conflicto sino la dispersión: entre los dos empiezan cinco cosas y no terminan ninguna.",
    practice:
      "Regla de una sola cosa nueva: no se abre nada más hasta que lo anterior tenga un resultado visible. Escríbanlo donde ambos lo vean.",
  },
  "1x6": {
    key: "1x6",
    headline: "Autonomía frente a cuidado",
    body: "Uno quiere resolverlo solo, el otro demuestra afecto ocupándose. Cada gesto de ayuda se puede leer como desconfianza, y cada rechazo de ayuda como desprecio.",
    practice:
      "El que cuida pregunta '¿quieres ayuda o quieres desahogarte?' y respeta la respuesta. El que rechaza dice gracias antes de decir no.",
  },
  "1x7": {
    key: "1x7",
    headline: "Decidir ya contra entender primero",
    body: "El primero considera que analizar demasiado es no hacer nada; el segundo considera que decidir sin entender es apostar. Ambos se sienten poco respetados en su forma de pensar.",
    practice:
      "Separen en dos momentos distintos la conversación de entender y la de decidir. Mezclarlas garantiza que ninguno de los dos quede conforme.",
  },
  "1x8": {
    key: "1x8",
    headline: "Dos formas de mandar",
    body: "Uno lidera por iniciativa y el otro por control de recursos. Es una alianza potente y una lucha de poder silenciosa, porque los dos asumen naturalmente que van al volante.",
    practice:
      "Nombren quién decide qué antes de necesitarlo. Las luchas de poder se evitan con acuerdos previos, no con buena voluntad en el momento.",
  },
  "1x9": {
    key: "1x9",
    headline: "Lo mío ahora contra lo de todos",
    body: "Uno persigue su objetivo concreto, el otro mira el impacto amplio. El primero puede parecer egoísta y el segundo puede parecer difuso, y ninguna de las dos lecturas es justa.",
    practice:
      "Al plantear un plan, digan en voz alta a quién beneficia y a quién le cuesta. Hacerlo explícito convierte un choque de valores en un dato compartido.",
  },
  "1x11": {
    key: "1x11",
    headline: "Empuje contra antena",
    body: "El primero avanza y el segundo siente todo lo que el avance remueve. Cuando el 11 dice 'algo no está bien aquí' y no puede explicar por qué, el 1 lo descarta y suele arrepentirse.",
    practice:
      "Trata la corazonada sin argumentos como una hipótesis a verificar, no como un veto ni como un capricho. Pregunta qué dato lo confirmaría.",
  },
  "1x22": {
    key: "1x22",
    headline: "Velocidad contra escala",
    body: "Uno quiere el resultado esta semana, el otro está construyendo algo de años. La discusión parece ser sobre plazos y en realidad es sobre qué cuenta como logro.",
    practice:
      "Definan juntos un hito intermedio real. Le da al impaciente algo que celebrar y al constructor algo que no compromete el diseño largo.",
  },
  "1x33": {
    key: "1x33",
    headline: "El que va solo y el que sostiene a todos",
    body: "El primero avanza sin mirar atrás, el segundo se queda cargando el peso emocional del grupo. Es fácil que uno se sienta abandonado y el otro se sienta frenado.",
    practice:
      "El que sostiene tiene que pedir en voz alta y con algo concreto. El que avanza tiene que preguntar cómo está el otro antes de contar cómo va lo suyo.",
  },
  "2x2": {
    key: "2x2",
    headline: "Nadie quiere incomodar",
    body: "La convivencia es suave porque ambos ceden. El costo es que las cosas importantes no se dicen: se acumulan bajo un acuerdo aparente y estallan tarde y desproporcionadas.",
    practice:
      "Una pregunta directa por semana: '¿qué no me has dicho?'. Sin defenderse ni justificarse, solo escuchando la respuesta hasta el final.",
  },
  "2x3": {
    key: "2x3",
    headline: "El que percibe y el que expresa",
    body: "Uno siente el clima y el otro lo pone en palabras, así que juntos pueden nombrar lo que a otros se les escapa. El roce llega cuando el expresivo cuenta afuera algo que el otro consideraba privado.",
    practice:
      "Acuerden explícitamente qué es contable y qué no. Lo que para uno es anécdota, para el otro puede ser exposición.",
  },
  "2x4": {
    key: "2x4",
    headline: "Sensibilidad y procedimiento",
    body: "Uno atiende a cómo se siente la gente y el otro a que las cosas funcionen. Se complementan bien, pero el 4 puede sonar seco cuando en realidad está siendo eficiente.",
    practice:
      "El estructurado empieza las correcciones diciendo qué sí funcionó. No es adorno: cambia por completo cómo se recibe el resto.",
  },
  "2x5": {
    key: "2x5",
    headline: "Necesitar cercanía, necesitar aire",
    body: "El primero se tranquiliza con la presencia constante; el segundo se ahoga con ella. La distancia del 5 no suele significar desinterés, pero se siente igual que si lo fuera.",
    practice:
      "El que necesita aire avisa cuándo vuelve, no solo que se va. Una hora concreta desactiva casi toda la ansiedad del otro.",
  },
  "2x6": {
    key: "2x6",
    headline: "Dos que se ocupan del otro primero",
    body: "Se cuidan mucho y se piden poco, así que la relación es cálida y desequilibrada hacia el agotamiento mutuo. Ninguno de los dos sabe recibir sin sentirse en deuda.",
    practice:
      "Practiquen pedir sin justificar. Una petición al día, en una frase, sin explicar por qué se la merecen.",
  },
  "2x7": {
    key: "2x7",
    headline: "Necesitar hablarlo, necesitar procesarlo solo",
    body: "El primero calma la angustia conversando; el segundo la calma retirándose. Cada uno hace exactamente lo que al otro le duele, y con la mejor intención.",
    practice:
      "Pacten una pausa con hora de regreso. 'Necesito dos horas y volvemos a esto a las ocho' resuelve el noventa por ciento del problema.",
  },
  "2x8": {
    key: "2x8",
    headline: "El tono y el resultado",
    body: "Uno mide la relación por cómo se siente y el otro por lo que se logra. El 8 puede resolverle la vida al 2 en lo material y aun así dejarlo sintiéndose solo.",
    practice:
      "El orientado a resultado dedica una conversación semanal sin agenda ni solución. Solo preguntar cómo va y no proponer nada.",
  },
  "2x9": {
    key: "2x9",
    headline: "Sensibilidad cercana y sensibilidad amplia",
    body: "Los dos sienten mucho, pero uno hacia las personas concretas que tiene al lado y el otro hacia el cuadro general. El 2 puede sentir que compite con el mundo entero por atención.",
    practice:
      "Reserven tiempo protegido para lo pequeño y cotidiano. Lo importante no siempre gana solo: hay que agendarlo.",
  },
  "2x11": {
    key: "2x11",
    headline: "Dos antenas encendidas",
    body: "Ambos captan lo no dicho, así que se entienden sin explicaciones. El problema es que también se contagian el estado de ánimo, y una mala tarde de uno se vuelve la de los dos.",
    practice:
      "Digan en voz alta de quién es la emoción antes de reaccionar. 'Esto que traigo es mío, no es por ti' evita espirales enteras.",
  },
  "2x22": {
    key: "2x22",
    headline: "El clima humano y la obra grande",
    body: "El constructor mira años hacia adelante y el otro mira a la persona que tiene enfrente hoy. El 2 puede sentirse un detalle logístico dentro de un proyecto más importante que él.",
    practice:
      "El que construye explica el para qué, no solo la tarea. Sentirse parte del plan es distinto de recibir instrucciones dentro del plan.",
  },
  "2x33": {
    key: "2x33",
    headline: "Dos que sostienen y ninguno pide",
    body: "Es uno de los vínculos más cálidos y más agotadores. Ambos dan sin registrar el costo, y el resentimiento aparece por vías indirectas porque ninguno se permite reclamar.",
    practice:
      "Instalen un turno formal de recibir. Un día a la semana uno cuida y el otro solo se deja cuidar, sin reciprocidad inmediata.",
  },
  "3x3": {
    key: "3x3",
    headline: "Dos hablando, ninguno escuchando",
    body: "Nunca hay silencios incómodos y casi nunca hay conclusiones. Se divierten mucho y esquivan lo difícil con la misma herramienta: la conversación ligera.",
    practice:
      "Cuando aparece un tema serio, uno de los dos lo nombra y ambos bajan el humor a cero por diez minutos. Sin chistes, aunque duela.",
  },
  "3x4": {
    key: "3x4",
    headline: "Improvisar y ordenar",
    body: "Uno abre posibilidades y el otro las aterriza, lo cual funciona muy bien y desgasta bastante. El 4 siente que limpia desórdenes y el 3 siente que le cortan las alas.",
    practice:
      "Separen la sesión de ideas de la de compromisos. Nada de lo que se dice en la primera cuenta como promesa, y eso se dice antes de empezar.",
  },
  "3x5": {
    key: "3x5",
    headline: "Puro movimiento",
    body: "Se estimulan mutuamente y se aburren juntos de lo mismo. La relación es divertida y frágil en lo cotidiano: nadie quiere hacerse cargo de lo repetitivo.",
    practice:
      "Repartan lo aburrido por escrito y con nombre. Sin asignación explícita, lo tedioso simplemente no se hace y luego se cobra.",
  },
  "3x6": {
    key: "3x6",
    headline: "El que aligera y el que se hace cargo",
    body: "Uno pone el buen ánimo y el otro pone la responsabilidad, y esa división se vuelve injusta rápido. El 6 empieza a sentirse el adulto de la relación.",
    practice:
      "Revisen cada tanto quién está cargando lo invisible: recordar, coordinar, preocuparse. Esa lista rara vez está donde ambos creen.",
  },
  "3x7": {
    key: "3x7",
    headline: "Pensar hablando contra pensar callando",
    body: "El primero necesita decirlo para entenderlo; el segundo necesita silencio para lo mismo. Cada uno interpreta el método del otro como falta de profundidad o falta de interés.",
    practice:
      "El expresivo avisa cuándo está pensando en voz alta y no pidiendo respuesta. Eso libera al otro de tener que reaccionar.",
  },
  "3x8": {
    key: "3x8",
    headline: "Carisma y ejecución",
    body: "Juntos convencen y entregan, que es una combinación comercialmente muy fuerte. La fricción es de criterio: uno mide por la reacción de la gente y el otro por el número final.",
    practice:
      "Definan de antemano cuál es la métrica de éxito de cada cosa. La mitad de estas discusiones son sobre qué se estaba midiendo.",
  },
  "3x9": {
    key: "3x9",
    headline: "Ligereza y peso",
    body: "Uno tiende a aligerar y el otro carga con lo grande. El 9 puede sentir que sus temas se banalizan y el 3 puede sentirse culpado por querer pasarlo bien.",
    practice:
      "Nombren el registro antes de la conversación: 'esto lo quiero hablar en serio' o 'esto es para reírnos'. Casi todo el malentendido está ahí.",
  },
  "3x11": {
    key: "3x11",
    headline: "Poner en palabras lo que el otro intuye",
    body: "El 11 percibe cosas que no sabe explicar y el 3 tiene el lenguaje exacto para nombrarlas. Es un vínculo muy creativo y muy expuesto: el 3 puede exponer material sensible sin medirlo.",
    practice:
      "Confirmen antes de compartir hacia afuera. Lo que uno vive como intuición íntima, el otro puede contarlo como anécdota brillante.",
  },
  "3x22": {
    key: "3x22",
    headline: "El relato y la obra",
    body: "Uno comunica y el otro construye, así que se necesitan mutuamente más de lo que reconocen. El 22 puede considerar la comunicación un adorno, y el 3 puede prometer antes de que exista.",
    practice:
      "Acuerden qué se puede anunciar y en qué estado está realmente. Anunciar de más quema más credibilidad que anunciar de menos.",
  },
  "3x33": {
    key: "3x33",
    headline: "Alivianar y contener",
    body: "Los dos hacen que la gente se sienta mejor, uno con humor y el otro con presencia. Entre ellos, el 33 acaba siendo quien escucha y el 3 quien es escuchado.",
    practice:
      "El que suele contener pide su turno explícitamente. El que suele hablar pregunta primero y espera la respuesta larga.",
  },
  "4x4": {
    key: "4x4",
    headline: "Dos sistemas incompatibles",
    body: "Los dos quieren orden y cada uno tiene el suyo, así que discuten el método mucho más que el objetivo. Cuando coinciden son extremadamente sólidos.",
    practice:
      "Elijan un solo sistema por área, aunque sea el peor de los dos. Dos sistemas buenos compitiendo rinden menos que uno mediocre acordado.",
  },
  "4x5": {
    key: "4x5",
    headline: "Estabilidad contra movimiento",
    body: "Es uno de los contrastes más duros. Uno necesita saber qué va a pasar y el otro necesita que no esté todo decidido, y ambas necesidades son reales.",
    practice:
      "Definan un núcleo fijo pequeño y dejen el resto abierto. Negociar sobre 'todo' garantiza que ninguno de los dos ceda.",
  },
  "4x6": {
    key: "4x6",
    headline: "Deber y deber",
    body: "Los dos son responsables y cargan mucho, uno con la estructura y el otro con las personas. Funcionan muy bien y descansan muy poco.",
    practice:
      "Agenden el descanso con la misma seriedad que una obligación. Para este par, lo que no está en el calendario no ocurre.",
  },
  "4x7": {
    key: "4x7",
    headline: "Método y profundidad",
    body: "Ambos son analíticos, pero uno quiere el procedimiento que funciona y el otro quiere entender por qué funciona. Se respetan intelectualmente y se impacientan en los plazos.",
    practice:
      "Pongan límite de tiempo a la fase de entender. El 7 casi siempre pide más y el 4 casi siempre corta antes: el punto medio hay que fijarlo por escrito.",
  },
  "4x8": {
    key: "4x8",
    headline: "Ejecución seria",
    body: "Probablemente la combinación más eficaz de la lista para llevar cosas a término. El riesgo no es el conflicto entre ellos, es que juntos convierten todo en trabajo.",
    practice:
      "Prohíban explícitamente un tema durante ciertos ratos. Sin regla, este par habla de pendientes incluso en vacaciones.",
  },
  "4x9": {
    key: "4x9",
    headline: "El procedimiento y el sentido",
    body: "Uno pregunta cómo se hace y el otro para qué se hace. El 4 puede parecer burocrático y el 9 puede parecer que desprecia lo práctico.",
    practice:
      "Empiecen por el propósito y bajen al plan en la misma conversación. Invertir el orden hace que el 9 se desconecte y el 4 se frustre.",
  },
  "4x11": {
    key: "4x11",
    headline: "Lo verificable contra lo percibido",
    body: "El 4 quiere evidencia y el 11 trae señales que no puede sostener con datos. Es un choque epistemológico, no de cariño, pero se vive como desconfianza.",
    practice:
      "Conviertan la intuición en algo comprobable: '¿qué veríamos si esto que sientes fuera cierto?'. Da lugar al 11 sin pedirle al 4 un acto de fe.",
  },
  "4x22": {
    key: "4x22",
    headline: "Mismo material, distinta escala",
    body: "Comparten la disciplina, pero el 22 diseña algo más grande de lo que el 4 considera prudente. La discusión es sobre riesgo asumible, no sobre rigor.",
    practice:
      "Cuantifiquen el peor escenario antes de decidir. El desacuerdo se disuelve cuando el riesgo deja de ser una sensación y pasa a ser un número.",
  },
  "4x33": {
    key: "4x33",
    headline: "Orden y cuidado",
    body: "Uno sostiene la estructura y el otro sostiene a las personas dentro de ella. Se necesitan, y el 33 puede sentir que las excepciones humanas no caben en el sistema del 4.",
    practice:
      "Definan de antemano dónde el sistema admite excepciones. Decidirlo caso por caso desgasta a los dos y suele terminar mal.",
  },
  "5x5": {
    key: "5x5",
    headline: "Nadie sostiene la base",
    body: "La afinidad es inmediata porque ninguno pone límites al otro. Lo que falta es continuidad: los planes cambian tan rápido que nada llega a consolidarse.",
    practice:
      "Elijan tres compromisos fijos y no negociables, y dejen todo lo demás flexible. Sin anclas mínimas este vínculo se disuelve por dispersión, no por conflicto.",
  },
  "5x6": {
    key: "5x6",
    headline: "El que se va y el que espera",
    body: "Uno necesita movimiento y el otro necesita saber que la gente está bien y presente. El 6 lee la independencia como abandono y el 5 lee el cuidado como vigilancia.",
    practice:
      "El que se mueve informa antes, no después. El que espera pregunta qué necesita el otro en vez de asumir que necesita quedarse.",
  },
  "5x7": {
    key: "5x7",
    headline: "Dos formas de irse",
    body: "Ambos necesitan espacio, uno hacia afuera y el otro hacia adentro, así que se dan mucha libertad. El riesgo es la desconexión lenta: nadie reclama y la distancia crece sin discutirse.",
    practice:
      "Fijen un punto de contacto obligatorio, aunque no haya nada urgente. Este par no se rompe peleando, se rompe por olvido.",
  },
  "5x8": {
    key: "5x8",
    headline: "Riesgo y control",
    body: "Al 8 le atrae la audacia del 5 hasta que toca los recursos. El primero apuesta por instinto y el segundo quiere el cálculo hecho antes de mover una ficha.",
    practice:
      "Definan un monto o un margen que el impulsivo puede mover sin consultar. Un límite claro es más eficaz que pedir prudencia general.",
  },
  "5x9": {
    key: "5x9",
    headline: "Soltar por gusto y soltar por proceso",
    body: "Los dos dejan cosas atrás con facilidad, uno buscando lo nuevo y el otro cerrando etapas. Se entienden sin drama, pero pueden abandonar juntos algo que valía la pena sostener.",
    practice:
      "Antes de dejar algo, esperen una semana y vuelvan a hablarlo. Para este par la decisión de soltar casi nunca necesita ser inmediata.",
  },
  "5x11": {
    key: "5x11",
    headline: "Estímulo constante y sistema nervioso sensible",
    body: "El ritmo del 5 es exactamente lo que sobrecarga al 11. Lo que uno vive como energía, el otro lo vive como saturación, y ninguno lo dice a tiempo.",
    practice:
      "El sensible avisa cuando llegó a su límite, con una señal corta acordada de antemano. Esperar a explicarlo bien es esperar demasiado.",
  },
  "5x22": {
    key: "5x22",
    headline: "Improvisar sobre una obra grande",
    body: "El 22 construye algo que requiere constancia y el 5 aporta soluciones laterales que a veces salvan el proyecto y a veces lo desordenan.",
    practice:
      "Canalicen la improvisación hacia un espacio definido. El 5 rinde muchísimo cuando tiene un problema concreto y libertad total dentro de él.",
  },
  "5x33": {
    key: "5x33",
    headline: "Libertad frente a contención",
    body: "El 33 sostiene y el 5 se mueve, así que el peso queda desigual sin que nadie lo decida. El que contiene se agota y el que se mueve no lo nota.",
    practice:
      "Hagan visible el trabajo invisible una vez al mes. El 5 rara vez se niega a ayudar: simplemente no ve lo que el otro está cargando.",
  },
  "6x6": {
    key: "6x6",
    headline: "Dos que cuidan y compiten cuidando",
    body: "El vínculo es muy protector y también algo asfixiante. Ambos saben lo que le conviene al otro, y ahí empieza el problema.",
    practice:
      "Pidan permiso antes de aconsejar. 'Te puedo decir lo que pienso?' cambia por completo cómo cae exactamente el mismo consejo.",
  },
  "6x7": {
    key: "6x7",
    headline: "Acercarse y retirarse",
    body: "Uno se aproxima cuando algo va mal y el otro se encierra. El 6 lee el silencio como rechazo y el 7 lee la insistencia como invasión.",
    practice:
      "El que se retira dice cuánto tiempo necesita y lo cumple. Cumplir el plazo prometido es lo que construye la confianza, más que la conversación.",
  },
  "6x8": {
    key: "6x8",
    headline: "Cuidar personas y cuidar resultados",
    body: "Los dos protegen a los suyos, uno emocionalmente y el otro materialmente. Suelen menospreciar la forma de cuidar del otro sin darse cuenta.",
    practice:
      "Reconozcan en voz alta el aporte del otro en sus propios términos. Nombrar lo que el otro hace bien desactiva casi todo el resentimiento acumulado.",
  },
  "6x9": {
    key: "6x9",
    headline: "El círculo cercano y el mundo",
    body: "Ambos dan mucho, pero uno se enfoca en los suyos y el otro en cualquiera que lo necesite. El 6 puede sentir que su gente queda al final de la fila.",
    practice:
      "Definan qué es prioridad no negociable. Este par no discute por egoísmo, discute por tener listas de prioridades distintas.",
  },
  "6x11": {
    key: "6x11",
    headline: "El que sostiene y el que absorbe todo",
    body: "El 11 recoge las tensiones del ambiente y el 6 intenta arreglarlas. Es un ciclo de mucho cariño donde ninguno de los dos se recarga.",
    practice:
      "Distingan escuchar de resolver. A veces la ayuda es acompañar sin intervenir, y hay que preguntarlo en vez de suponerlo.",
  },
  "6x22": {
    key: "6x22",
    headline: "El bienestar de hoy y la obra de mañana",
    body: "El 22 sacrifica el presente por lo que está construyendo y el 6 no acepta que el costo lo paguen las personas cercanas.",
    practice:
      "Pongan un techo explícito al sacrificio: hasta dónde sí y desde dónde no. Sin ese límite, el proyecto siempre se come lo cotidiano.",
  },
  "6x33": {
    key: "6x33",
    headline: "Vocación de sostener, elevada al cuadrado",
    body: "Los dos son refugio de mucha gente y ninguno tiene refugio propio. La relación es profundamente cuidadosa y estructuralmente insostenible.",
    practice:
      "Establezcan un espacio donde ninguno de los dos ayuda a nadie. Para este par, el descanso hay que proteger activamente o no existe.",
  },
  "7x7": {
    key: "7x7",
    headline: "Dos retiros simultáneos",
    body: "Se respetan el espacio como nadie, y precisamente por eso pueden pasar semanas sin decirse nada real. La distancia no se discute, se instala.",
    practice:
      "Agenden una conversación de fondo periódica, con fecha. Este par no necesita más espacio, necesita una cita obligatoria.",
  },
  "7x8": {
    key: "7x8",
    headline: "Comprender antes contra actuar ya",
    body: "El 8 quiere mover y el 7 quiere entender el riesgo real. Cuando se escuchan, las decisiones salen muy bien; cuando no, uno paraliza y el otro atropella.",
    practice:
      "Acuerden un plazo de análisis y una fecha de decisión, ambos por escrito. Este par funciona muy bien con reglas y muy mal con improvisación.",
  },
  "7x9": {
    key: "7x9",
    headline: "Profundidad y amplitud",
    body: "Los dos buscan sentido, uno hacia dentro y el otro hacia todos. Conversan muy bien y pueden desconectarse igual de bien de lo concreto.",
    practice:
      "Cierren cada conversación importante con una acción concreta y una fecha. Sin eso, este par entiende mucho y cambia poco.",
  },
  "7x11": {
    key: "7x11",
    headline: "Análisis y percepción",
    body: "Uno llega por razonamiento y el otro por intuición, y suelen llegar al mismo lugar. La fricción es que el 7 exige justificar lo que el 11 solo sabe.",
    practice:
      "Acepten la conclusión primero y busquen la explicación después. Exigir el razonamiento antes de escuchar la conclusión bloquea al otro.",
  },
  "7x22": {
    key: "7x22",
    headline: "Entender el sistema y construirlo",
    body: "Comparten el gusto por lo profundo, pero el 22 necesita cerrar el diseño y el 7 siempre encuentra otra pregunta pendiente.",
    practice:
      "Declaren el diseño congelado en una fecha. Lo que aparezca después va a una lista de la siguiente versión, no al debate actual.",
  },
  "7x33": {
    key: "7x33",
    headline: "El que se aísla y el que acompaña",
    body: "El 33 quiere estar presente y el 7 necesita ausentarse para procesar. El que acompaña siente rechazo justo cuando más está ofreciendo.",
    practice:
      "El que se retira lo explica antes de hacerlo, no después. Una frase de aviso evita que el otro llene el silencio con la peor interpretación.",
  },
  "8x8": {
    key: "8x8",
    headline: "Dos autoridades en la misma mesa",
    body: "Se entienden en criterio y compiten en control. Cuando reparten poder son imparables; cuando no, la relación se vuelve una negociación permanente.",
    practice:
      "Escriban quién tiene la última palabra en cada área. Sin eso, cada decisión se convierte en un pulso y se decide por desgaste.",
  },
  "8x9": {
    key: "8x9",
    headline: "Resultado y propósito",
    body: "El 8 mide en cifras y el 9 en impacto humano. Cada uno considera ingenuo o insensible al otro, y las dos acusaciones tienen algo de cierto.",
    practice:
      "Elijan juntos dos indicadores: uno duro y uno humano. Medir solo lo primero o solo lo segundo garantiza que el otro se sienta ignorado.",
  },
  "8x11": {
    key: "8x11",
    headline: "Presión y sensibilidad",
    body: "El ritmo y la exigencia del 8 es precisamente lo que desregula al 11. Uno cree estar siendo directo y el otro lo recibe como una embestida.",
    practice:
      "Bajen la intensidad antes del contenido. Para el 11, cómo se dice determina si puede escuchar lo que se dice.",
  },
  "8x22": {
    key: "8x22",
    headline: "Poder y arquitectura",
    body: "Los dos piensan en grande y en términos materiales, así que la alianza es formidable. La disputa es sobre horizonte: rentabilidad ahora o estructura que dure.",
    practice:
      "Separen el presupuesto de corto plazo del de largo plazo. Cuando compiten por el mismo fondo, siempre gana lo urgente.",
  },
  "8x33": {
    key: "8x33",
    headline: "Eficiencia y compasión",
    body: "El 8 optimiza y el 33 protege a quien queda fuera de la optimización. Es una tensión útil si se habla y corrosiva si se evita.",
    practice:
      "Incluyan el costo humano como un punto explícito de cada decisión. No para vetarla, sino para que quede registrado y no se discuta después.",
  },
  "9x9": {
    key: "9x9",
    headline: "Dos que cargan el mundo",
    body: "Se comprenden en lo grande y pueden descuidar lo propio con la misma facilidad. La relación es generosa y algo desatendida en lo cotidiano.",
    practice:
      "Dediquen tiempo explícito a lo pequeño de ustedes dos. Para este par lo íntimo pierde siempre contra lo importante si no se protege.",
  },
  "9x11": {
    key: "9x11",
    headline: "Compasión amplia y percepción fina",
    body: "Ambos absorben mucho de lo que les rodea, uno como causa y el otro como sensación física. Juntos pueden saturarse sin darse cuenta de que no es propio.",
    practice:
      "Revisen periódicamente qué peso están cargando que no les corresponde. Nombrarlo es lo que permite dejarlo.",
  },
  "9x22": {
    key: "9x22",
    headline: "Ideal y ejecución",
    body: "El 9 aporta el para qué y el 22 lo convierte en algo que existe. Es una combinación muy potente, con el riesgo de que el ideal se vuelva exigencia imposible.",
    practice:
      "Definan qué versión reducida ya cuenta como éxito. Sin ese piso, este par descarta logros reales por no ser el logro completo.",
  },
  "9x33": {
    key: "9x33",
    headline: "Servir y sostener",
    body: "Los dos están orientados a los demás y ninguno pone el límite. Es un vínculo con mucho sentido compartido y muy poca autoprotección.",
    practice:
      "Acuerden un límite que ambos van a respetar aunque duela decir no. Escríbanlo cuando están tranquilos, porque en el momento no van a poder.",
  },
  "11x11": {
    key: "11x11",
    headline: "Dos antenas sin filtro",
    body: "La comprensión mutua es casi inmediata y también lo es el contagio emocional. Lo que le pasa a uno se instala en el otro en minutos.",
    practice:
      "Antes de entrar en la emoción del otro, pregunten si quiere compañía o quiere calma. Acompañar no siempre es acompañar sintiendo lo mismo.",
  },
  "11x22": {
    key: "11x22",
    headline: "La visión y la obra",
    body: "El 11 percibe hacia dónde hay que ir y el 22 sabe cómo levantarlo. Es una de las combinaciones más productivas y una de las más desgastantes, porque ninguno se detiene.",
    practice:
      "Definan señales de parada por adelantado. Este par no reconoce el agotamiento hasta que ya es un problema, así que hay que fijar el umbral antes.",
  },
  "11x33": {
    key: "11x33",
    headline: "Sensibilidad extrema y entrega extrema",
    body: "Ambos sienten mucho y ambos dan mucho, así que el vínculo es intenso y profundamente comprensivo. También es el más propenso al desgaste silencioso de la lista.",
    practice:
      "Chequeen la carga con una pregunta concreta y numérica, del uno al diez. Con este par las respuestas cualitativas siempre minimizan.",
  },
  "22x22": {
    key: "22x22",
    headline: "Dos constructores, un solo plano",
    body: "Comparten ambición y método, así que pueden levantar algo enorme. El conflicto no es de valores sino de autoría: los dos tienen un diseño completo en la cabeza.",
    practice:
      "Dividan por módulos con interfaces claras entre ellos. Este par colabora mucho mejor con fronteras definidas que con consenso continuo.",
  },
  "22x33": {
    key: "22x33",
    headline: "La estructura y la gente que la habita",
    body: "Uno construye el sistema y el otro cuida a quienes viven dentro. Se complementan de forma casi perfecta y chocan cuando el plan pide un costo humano.",
    practice:
      "Revisen el plan preguntando a quién deja fuera. Hacerlo temprano es diseño; hacerlo tarde es reparación de daños.",
  },
  "33x33": {
    key: "33x33",
    headline: "Dos refugios sin refugio",
    body: "La comprensión es enorme porque ambos saben lo que cuesta sostener a otros. El riesgo es igual de grande: nadie en la relación está pidiendo, y ambos lo necesitan.",
    practice:
      "Turnos estrictos y explícitos para recibir. Este par solo descansa si el descanso está asignado como una tarea más.",
  },
};
