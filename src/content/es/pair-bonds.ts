import type { RelationshipType } from "@/lib/numerology";
import type { BondFrame, PairBonds } from "../types";

/**
 * Una nota corta por parentesco. No dice qué tan compatibles son: dice cómo
 * se vive esa dinámica en el amor, la familia, la amistad o el trabajo.
 */
export const BOND_FRAME: Record<RelationshipType, BondFrame> = {
  pareja: {
    title: "En el amor",
    lead: "Cómo se quieren, cómo se extrañan y cómo se arreglan.",
  },
  familia: {
    title: "En la familia",
    lead: "Cómo se tratan cuando el vínculo viene de antes y no se elige cada día.",
  },
  amistad: {
    title: "Entre amigos",
    lead: "Cómo se buscan, cómo se distancian y cómo vuelven.",
  },
  trabajo: {
    title: "En el trabajo",
    lead: "Cómo deciden, cómo se reparten el crédito y cómo se exigen.",
  },
};

export const pairBonds: Record<string, PairBonds> = {
  "1x1": {
    pareja:
      "En la pareja los dos quieren llevar el ritmo del deseo y de los planes. Se quieren mucho cuando cada uno tiene un terreno propio y avisa, en vez de competir por la misma decisión en la cama o en la casa.",
    familia:
      "En la familia nadie cede el mando de la reunión, la plata o los hijos. Funcionan si cada adulto tiene un área clara y no corrige al otro delante del resto.",
    amistad:
      "La amistad es intensa y competitiva. Se divierten proponiendo planes, y se enfrían cuando los dos necesitan ganar la misma conversación.",
    trabajo:
      "Juntos arrancan rápido y chocan por el volante. El equipo avanza si el territorio de cada uno está escrito antes de la primera decisión.",
  },
  "1x2": {
    pareja:
      "Uno enciende el deseo de moverse y el otro siente a quién lastima esa prisa. El amor se cuida si el que empuja pregunta a quién le cae mal, y espera la respuesta sin tomarla como un freno.",
    familia:
      "En casa, uno decide y el otro absorbe el clima que esa decisión deja. La familia se calma cuando la cautela se escucha antes de cerrar, no después del portazo.",
    amistad:
      "El amigo que empuja puede leer la pausa como falta de ganas. La amistad dura si la cautela se pide en voz alta y no se castiga.",
    trabajo:
      "Uno cierra y el otro ve el costo humano del cierre. La decisión sale mejor si esa lectura entra antes de mandar el mensaje.",
  },
  "1x3": {
    pareja:
      "Uno hace y el otro necesita contarlo para sentirse cerca. En el amor, el relato no es vanidad: es la forma de estar juntos. El roce llega si uno trata el hablar como si no fuera parte de la pareja.",
    familia:
      "En la familia, uno resuelve y el otro narra lo que pasó. Se lastiman si lo privado de la casa se vuelve anécdota para afuera.",
    amistad:
      "Se buscan porque juntos pasan cosas y después las cuentan. La amistad se tensa cuando el que actúa siente que solo el otro brilla.",
    trabajo:
      "Uno ejecuta y el otro pone el relato. El trabajo rinde si hablar el avance cuenta como parte de la entrega, no como adorno.",
  },
  "1x4": {
    pareja:
      "Uno quiere empezar la vida juntos hoy y el otro quiere saber cómo termina. En el amor, un plazo para planear —mudanza, plata, hijos— evita que el carácter se discuta a las once de la noche.",
    familia:
      "En la familia, uno improvisa el domingo y el otro necesita el plano. Se pelean menos si el tiempo de organizar está acordado antes de que haya que salir.",
    amistad:
      "Uno propone ya y el otro quiere el cómo. La amistad aguanta si el plan tiene un límite de preparación y después se sale igual.",
    trabajo:
      "Uno arranca y el otro no suelta el plano. Un plazo escrito para planear, y otro para empezar, les ahorra la pelea de siempre.",
  },
  "1x5": {
    pareja:
      "Se encienden fácil y se dispersan igual. En el amor, la compatibilidad se nota en si pueden terminar una cosa juntos —un viaje, una conversación, una casa— antes de abrir la siguiente.",
    familia:
      "En la familia empiezan planes y no los cierran. Los demás pagan la dispersión. Una sola cosa nueva hasta ver un resultado les devuelve piso.",
    amistad:
      "Son el plan espontáneo del otro. La amistad se diluye si nunca hay una cita que sí se cumple.",
    trabajo:
      "Entre los dos abren frentes y no cierran. Una regla de una sola cosa nueva mantiene el impulso sin dejar el trabajo a medias.",
  },
  "1x6": {
    pareja:
      "Uno quiere resolver el amor solo y el otro lo demuestra ocupándose. En la pareja, la ayuda sin pregunta se siente como desconfianza, y el rechazo seco se siente como desprecio. Preguntar y agradecer cambia el tono.",
    familia:
      "En la familia, cuidar sin que lo pidan y rechazar el cuidado sin una palabra amable es la pelea de todos los domingos. El que cuida pregunta; el que no quiere ayuda dice gracias antes del no.",
    amistad:
      "Uno aparece resolviendo y el otro quiere su autonomía. La amistad se cuida si la ayuda se ofrece y se puede rechazar sin drama.",
    trabajo:
      "Uno avanza solo y el otro se mete a ayudar. En el equipo, la ayuda no pedida se lee como control. Hay que preguntar antes de tomar la tarea.",
  },
  "1x7": {
    pareja:
      "Uno quiere decidir la relación ya y el otro necesita entenderla antes. En el amor, mezclar la charla de comprender con la de decidir deja a los dos sin deseo y sin respuesta. Sepárenlas.",
    familia:
      "En la familia, uno corta la conversación y el otro se va a pensar. Se sienten poco respetados. Un momento para entender y otro para decidir baja el tono.",
    amistad:
      "Uno empuja el plan y el otro todavía lo está examinando. La amistad respira si no se exige una respuesta en la misma llamada.",
    trabajo:
      "Uno decide y el otro analiza. El trabajo sale si la reunión de entender no es la misma que la de cerrar.",
  },
  "1x8": {
    pareja:
      "Los dos quieren el volante de la vida en común: uno por ganas, el otro por control. En el amor se quieren mejor cuando está dicho quién decide el dinero, la casa y el tiempo libre.",
    familia:
      "En la familia hay dos autoridades. Las fiestas, la plata y los hijos se pelean menos si el mando de cada tema tiene nombre.",
    amistad:
      "Se respetan y compiten. La amistad se mantiene si no convierten cada plan en una pulseada por quién organiza.",
    trabajo:
      "Dos formas de mandar en el mismo proyecto. Nombrar quién decide qué, antes de necesitarlo, evita la lucha silenciosa.",
  },
  "1x9": {
    pareja:
      "Uno persigue lo de la pareja ahora y el otro mira a quién más afecta. En el amor, decir en voz alta a quién beneficia un plan y a quién le cuesta evita que uno parezca egoísta y el otro ausente.",
    familia:
      "En la familia, uno cuida el objetivo concreto y el otro el impacto en todos. La mesa se calma si ese costo se nombra antes de decidir.",
    amistad:
      "Uno quiere el plan de ustedes dos y el otro trae al mundo entero. La amistad pide un rato que sea solo de los dos.",
    trabajo:
      "Uno empuja el resultado y el otro el efecto amplio. Poner por escrito a quién le cuesta la decisión convierte el choque en un dato.",
  },
  "1x11": {
    pareja:
      "Uno avanza y el otro siente lo que ese avance remueve en la pareja. En el amor, una corazonada sin argumentos no es un veto ni un capricho: es una hipótesis. Pregunten qué la confirmaría.",
    familia:
      "En la familia, el que siente el clima suele ser descartado por el que ya decidió. Tratar esa señal como algo a verificar evita arrepentimientos.",
    amistad:
      "Uno propone y el otro dice que algo no cierra, sin poder explicarlo. La amistad gana si esa frase se escucha antes de burlarse.",
    trabajo:
      "Uno empuja el plazo y el otro trae una alarma difícil de medir. Conviértanla en un dato a chequear, no en un freno ni en una orden.",
  },
  "1x22": {
    pareja:
      "Uno quiere el resultado esta semana y el otro está armando una vida de años. En el amor, un hito intermedio —una mudanza parcial, un ahorro visible— le da al impaciente algo que celebrar sin romper el plan largo.",
    familia:
      "En la familia, uno vive el domingo y el otro la obra de años. Un logro chico y real en el medio evita que el presente se sienta postergado.",
    amistad:
      "Uno quiere verse ya y el otro está metido en algo enorme. La amistad se sostiene con un encuentro que no exija resolver la obra completa.",
    trabajo:
      "Velocidad contra escala. Un hito intermedio acordado le sirve al que apura y no compromete el diseño largo.",
  },
  "1x33": {
    pareja:
      "Uno avanza y el otro se queda con el peso emocional de la pareja y de todos. En el amor, el que sostiene tiene que pedir algo concreto, y el que avanza tiene que preguntar cómo está el otro antes de contar lo suyo.",
    familia:
      "En la familia, uno se va hacia adelante y el otro carga a los demás. Se sienten abandonado y frenado. Pedir en voz alta y preguntar primero cambia el reparto.",
    amistad:
      "Uno sigue su plan y el otro contiene. La amistad se cansa si el que avanza nunca pregunta cómo llega el otro.",
    trabajo:
      "Uno empuja solo y el otro sostiene al grupo. El que carga tiene que pedir una tarea concreta; el que avanza tiene que mirar atrás antes de celebrar.",
  },
  "2x2": {
    pareja:
      "El amor se siente suave porque los dos ceden. Lo importante no se dice y estalla tarde. Una pregunta por semana, «¿qué no me has dicho?», sin defenderse, es la compatibilidad real de esta pareja.",
    familia:
      "En la familia nadie quiere incomodar, así que el enojo se guarda. Esa pregunta directa, una vez por semana, evita la explosión en la cena.",
    amistad:
      "Son fáciles de querer y difíciles de leer. La amistad se aclara si uno se anima a decir lo incómodo antes de que se acumule.",
    trabajo:
      "En el trabajo acuerdan en la reunión y discrepan después. Hace falta un momento para decir el desacuerdo sin que suene a ataque.",
  },
  "2x3": {
    pareja:
      "Uno siente el clima de la pareja y el otro lo pone en palabras. En el amor se entienden mucho, y se lastiman si lo íntimo se cuenta afuera como anécdota. Hay que acordar qué es contable.",
    familia:
      "En la familia, el que expresa puede narrar lo que el otro vivía como privado. Un acuerdo de qué sale de la casa evita la traición sin mala intención.",
    amistad:
      "Se completan: uno percibe y el otro dice. La amistad pide permiso antes de repetir lo que el otro contó en confianza.",
    trabajo:
      "Uno lee al equipo y el otro lo formula. Funcionan si lo sensible no se usa como ejemplo en una reunión abierta.",
  },
  "2x4": {
    pareja:
      "Uno cuida cómo se siente la pareja y el otro quiere que la vida funcione. En el amor, el seco no es frío si empieza diciendo qué sí está bien antes de corregir.",
    familia:
      "En la familia, la eficiencia sin una frase de reconocimiento se vive como dureza. Empezar por lo que funcionó cambia la corrección.",
    amistad:
      "Uno acompaña el ánimo y el otro el método. La amistad se enfría si el consejo llega sin reconocer primero lo que el otro ya hizo.",
    trabajo:
      "Uno mira a la gente y el otro el procedimiento. La corrección se recibe si abre con lo que sí funcionó.",
  },
  "2x5": {
    pareja:
      "Uno se tranquiliza con la presencia y el otro necesita aire. En el amor, la distancia no siempre es desinterés, pero se siente igual. Avisar a qué hora se vuelve desactiva casi toda la angustia.",
    familia:
      "En la familia, uno se va y el otro se queda esperando sin hora. Un regreso concreto evita que la ausencia se lea como abandono.",
    amistad:
      "Uno quiere verse seguido y el otro desaparece. La amistad aguanta si el que se va dice cuándo vuelve, no solo que está ocupado.",
    trabajo:
      "Uno necesita cercanía de equipo y el otro margen. Avisar la ausencia y la vuelta mantiene la confianza sin vigilar.",
  },
  "2x6": {
    pareja:
      "Los dos se ocupan del otro y se piden poco. El amor es cálido y se agota. Pedir sin justificar, una frase, sin explicar por qué se lo merecen, es lo que los vuelve pareja y no dos enfermeros.",
    familia:
      "En la familia todos cuidan y nadie recibe. Un pedido corto, sin discurso, les enseña a dejarse cuidar.",
    amistad:
      "Se acompañan mucho y se deben en silencio. La amistad se aliviana si uno pide algo chico y el otro puede decir que sí sin rescate.",
    trabajo:
      "Los dos cargan al resto y no piden ayuda. Una petición concreta al día reparte el peso antes del resentimiento.",
  },
  "2x7": {
    pareja:
      "Uno calma la angustia hablando y el otro retirándose. En el amor, cada uno hace lo que al otro le duele. Una pausa con hora de regreso —«volvemos a las ocho»— es el arreglo.",
    familia:
      "En la familia, perseguir al que se encierra y encerrarse del que persigue es el ciclo. Un plazo de vuelta lo corta.",
    amistad:
      "Uno escribe de inmediato y el otro desaparece a pensar. La amistad se salva si el silencio trae hora de regreso.",
    trabajo:
      "Uno quiere procesarlo en la reunión y el otro a solas. Pacten la pausa y la hora en que se retoma.",
  },
  "2x8": {
    pareja:
      "Uno mide el amor por cómo se siente y el otro por lo que logra para los dos. Se puede tener la vida resuelta y sentirse solo. Una conversación sin agenda ni solución es el cuidado que falta.",
    familia:
      "En la familia, resolver plata y trámites no reemplaza preguntar cómo está la persona. Esa conversación sin propuesta tiene que existir.",
    amistad:
      "Uno quiere saber cómo va el otro y el otro aparece con una solución. La amistad pide un rato en que no se arregle nada.",
    trabajo:
      "Uno mira el clima del equipo y el otro el resultado. El resultado no alcanza si nunca hay una conversación que no sea de pendientes.",
  },
  "2x9": {
    pareja:
      "Los dos sienten, uno a la persona que tiene al lado y el otro al cuadro grande. En el amor, el de cerca puede creer que compite con el mundo. Un tiempo protegido para lo cotidiano los deja en la misma pieza.",
    familia:
      "En la familia, la causa grande se come la mesa chica. Hay que agendar lo pequeño o no ocurre.",
    amistad:
      "Uno quiere la amistad concreta y el otro está con todo el mundo. Un rato solo de ustedes dos evita la sensación de fila.",
    trabajo:
      "Uno cuida al equipo cercano y el otro el impacto amplio. Lo cotidiano del equipo hay que ponerlo en la agenda, no dejarlo a que sobre tiempo.",
  },
  "2x11": {
    pareja:
      "Se entienden sin explicar y se contagian el día. En el amor, decir «esto que traigo es mío, no es por ti» evita que una mala tarde se vuelva pelea de pareja.",
    familia:
      "En la familia el ánimo de uno se instala en el otro. Nombrar de quién es la emoción corta la espiral.",
    amistad:
      "Se leen al instante y se arrastran el bajón. Una frase que separe de quién es el peso les devuelve la amistad.",
    trabajo:
      "Los dos captan el clima y se lo pasan. Antes de reaccionar en la reunión, conviene decir si eso que se siente es propio o del otro.",
  },
  "2x22": {
    pareja:
      "Uno mira a la persona de hoy y el otro la obra de años. En el amor, el de cerca puede sentirse un trámite del plan. Explicar el para qué, no solo la tarea, lo devuelve a la pareja.",
    familia:
      "En la familia, el proyecto grande deja a alguien como detalle logístico. Contar el para qué hace que la tarea se sienta parte de la casa, no una orden.",
    amistad:
      "Uno quiere saber de la persona y el otro habla de la obra. La amistad pide que el plan incluya al amigo, no solo le encargue cosas.",
    trabajo:
      "Uno sostiene el clima y el otro la obra. Explicar el para qué de la tarea cambia cómo se recibe.",
  },
  "2x33": {
    pareja:
      "Es un amor cálido y agotador: los dos dan y ninguno pide. Un día a la semana en que uno solo recibe, sin devolver en el momento, les enseña a dejarse querer.",
    familia:
      "En la familia los dos sostienen y el reclamo sale torcido. Un turno formal de recibir evita el resentimiento indirecto.",
    amistad:
      "Se cuidan tanto que no hay espacio para estar mal. La amistad necesita un turno en que uno no retribuya.",
    trabajo:
      "Los dos cargan al equipo y no registran el costo. Un turno de no ayudar deja ver quién está al límite.",
  },
  "3x3": {
    pareja:
      "Nunca hay silencio y casi nunca hay cierre. En el amor se divierten y esquivan lo difícil con humor. Diez minutos sin chiste, cuando el tema es serio, es lo que los vuelve pareja y no público.",
    familia:
      "En la familia todo se aliviana y lo importante no se termina. Bajar el humor a cero por un rato corto permite decir lo que duele.",
    amistad:
      "Son la salida, la anécdota y la risa. La amistad se queda corta si nunca hay una conversación sin show.",
    trabajo:
      "Hablan mucho y cierran poco. Cuando el tema es serio, uno lo nombra y los dos sostienen diez minutos sin desviar.",
  },
  "3x4": {
    pareja:
      "Uno abre planes de vida y el otro los ordena. En el amor, mezclar la ilusión con el compromiso hace que uno se sienta cortado y el otro desordenado. Primero las ideas, después lo que sí se promete.",
    familia:
      "En la familia, improvisar y ordenar se pisan. Lo que se dice soñando no puede contar como promesa de la casa.",
    amistad:
      "Uno propone locuras y el otro las baja a tierra. La amistad se cuida si la lluvia de ideas no se cobra después como compromiso.",
    trabajo: "Sesión de ideas y sesión de compromisos, separadas. Nada de la primera es promesa.",
  },
  "3x5": {
    pareja:
      "Se estimulan y se aburren de lo doméstico. En el amor, lo repetitivo —cuentas, turnos, la semana— no se hace solo. Si no tiene nombre, se cobra en reproche.",
    familia:
      "En la familia nadie quiere lo tedioso. Repartirlo por escrito evita que el encanto se vuelva deuda.",
    amistad:
      "Son el plan divertido y ninguno sostiene lo ordinario. La amistad dura más si lo aburrido también está repartido.",
    trabajo: "Puro movimiento y poca base. Lo repetitivo del trabajo necesita dueño, o no se hace.",
  },
  "3x6": {
    pareja:
      "Uno pone el ánimo y el otro la responsabilidad, hasta que uno se siente el adulto de la pareja. En el amor hay que mirar quién recuerda, coordina y se preocupa: esa lista casi nunca está donde creen.",
    familia:
      "En la familia, el humor y el cargo se parten mal. Revisar lo invisible —turnos, culpas, listas— evita que uno sea el padre del otro.",
    amistad:
      "Uno aligera y el otro se hace cargo de la amistad. Se equilibra si el que anima también sostiene algo concreto.",
    trabajo:
      "Uno comunica y el otro carga la operación. Revisen quién coordina de verdad, no solo quién se ve.",
  },
  "3x7": {
    pareja:
      "Uno entiende el amor hablándolo y el otro en silencio. En la pareja, avisar «estoy pensando en voz alta, no te pido respuesta» libera al que necesita callar para quedarse cerca.",
    familia:
      "En la familia, hablar todo y retirarse a pensar se leen como superficialidad o rechazo. Avisar el método evita el malentendido.",
    amistad:
      "Uno cuenta para entender y el otro se queda callado. La amistad no exige que el silencio sea desinterés ni que la charla sea profundidad.",
    trabajo:
      "Uno piensa en la reunión y el otro después. Avisar cuándo es borrador hablado evita que el otro tenga que reaccionar.",
  },
  "3x8": {
    pareja:
      "Juntos convencen y resuelven. En el amor, uno mide por cómo se sintieron y el otro por lo que quedó hecho. Si no dicen qué cuenta como una buena semana, discuten el cariño con reglas distintas.",
    familia:
      "En la familia, el relato y el resultado compiten. Definir qué es un buen domingo —la gente contenta, o la logística cerrada— baja la pelea.",
    amistad:
      "Uno busca la reacción y el otro el logro. La amistad se entiende mejor si dicen qué esperaban de ese plan.",
    trabajo:
      "Carisma y ejecución. La métrica de éxito, dicha antes, evita la mitad de las discusiones.",
  },
  "3x9": {
    pareja:
      "Uno aliviana y el otro trae peso. En el amor, reírse no es burlarse si está dicho el registro: «esto es en serio» o «esto es para pasarlo bien».",
    familia:
      "En la familia, el humor puede banalizar un duelo y la gravedad puede culpabilizar una risa. Nombrar el tono antes evita las dos heridas.",
    amistad:
      "Uno quiere ligereza y el otro habla de lo grande. La amistad pide permiso para el registro, no adivinarlo.",
    trabajo:
      "Ligereza y peso en la misma sala. Digan si la conversación es para resolver en serio o para soltar.",
  },
  "3x11": {
    pareja:
      "Uno pone palabras a lo que el otro solo intuye del amor. Es íntimo y expuesto: lo que uno vive como sensación privada, el otro puede contarlo brillante. Confirmen antes de sacarlo de la pareja.",
    familia:
      "En la familia, nombrar la intuición de otro puede exponerlo. Lo que se dice en casa no sale sin un sí.",
    amistad: "Son un dúo creativo. La amistad se rompe si la anécdota brillante era un secreto.",
    trabajo:
      "Uno intuye y el otro lo formula hacia afuera. Anunciar esa lectura sin confirmarla quema confianza.",
  },
  "3x22": {
    pareja:
      "Uno cuenta la vida que quieren y el otro la está construyendo. En el amor, prometer de más —un viaje, una casa, un hijo en tal fecha— quema más que anunciar menos. Digan en qué estado está de verdad.",
    familia:
      "En la familia, el relato se adelanta a la obra. Acordar qué ya se puede contar evita expectativas que el otro no puede sostener.",
    amistad:
      "Uno narra y el otro construye. La amistad se cuida si no se anuncia un plan que todavía no existe.",
    trabajo:
      "El relato y la obra. Lo que se puede anunciar depende del estado real, no del entusiasmo.",
  },
  "3x33": {
    pareja:
      "Uno aliviana y el otro contiene, hasta que en la pareja solo uno escucha. En el amor, el que suele hablar pregunta primero y espera la respuesta larga.",
    familia:
      "En la familia, el humor se apoya en quien siempre contiene. El que contiene tiene que pedir su turno, no esperar a que sobre.",
    amistad:
      "Los dos hacen sentir mejor a otros, y entre ellos el reparto se tuerce. Turnarse quién habla y quién escucha mantiene la amistad.",
    trabajo:
      "Uno distiende al equipo y el otro lo sostiene. El que contiene pide espacio; el que habla pregunta antes.",
  },
  "4x4": {
    pareja:
      "Los dos quieren una casa ordenada y cada uno trae su sistema. En el amor discuten el método más que el deseo. Un solo sistema por área, aunque no sea el favorito, rinde más que dos buenos en guerra.",
    familia:
      "En la familia hay dos reglamentos. Elegir uno por tema —comidas, plata, tareas— baja la pelea de carácter.",
    amistad:
      "Se entienden en la seriedad y chocan en el cómo. La amistad no necesita el sistema perfecto, necesita uno compartido.",
    trabajo:
      "Dos sistemas incompatibles. Uno solo por área, acordado, gana a dos mejores compitiendo.",
  },
  "4x5": {
    pareja:
      "Uno necesita saber qué va a pasar con la pareja y el otro necesita que no esté todo cerrado. En el amor, un núcleo fijo chico —una cita, una casa, una palabra de vuelta— y el resto abierto les alcanza a los dos.",
    familia:
      "En la familia, estabilidad y movimiento se viven como amenaza. Un núcleo que no se negocia y libertad alrededor evita pelear por todo.",
    amistad:
      "Uno quiere el plan fijo y el otro cambiarlo. La amistad dura con pocas anclas y el resto suelto.",
    trabajo:
      "Uno necesita el calendario y el otro margen. Un núcleo fijo pequeño deja de convertir cada cambio en crisis.",
  },
  "4x6": {
    pareja:
      "Los dos cumplen y descansan poco. En el amor, el descanso tiene que estar en el calendario con la misma seriedad que una obligación, o la pareja se vuelve otra tarea.",
    familia:
      "En la familia, deber y cuidado no paran. Si el descanso no está agendado, no ocurre y se cobra en mal humor.",
    amistad:
      "Son los responsables del grupo. La amistad también necesita un rato sin encargos, puesto en la agenda.",
    trabajo:
      "Ejecución y cuidado, sin pausa. Agenden el descanso como una entrega, o este par trabaja hasta en vacaciones.",
  },
  "4x7": {
    pareja:
      "Los dos piensan la relación, uno por el método y el otro por el porqué. En el amor, la fase de entender no puede ser infinita ni cortarse al primer minuto. El punto medio se escribe.",
    familia:
      "En la familia, uno quiere el procedimiento y el otro seguir preguntando. Un límite de tiempo para entender evita la impaciencia y la parálisis.",
    amistad:
      "Conversan hondo y se traban en el plazo. La amistad gana con una hora para pensar y una hora para cerrar.",
    trabajo: "Método y profundidad. El tiempo de análisis y la fecha de corte van por escrito.",
  },
  "4x8": {
    pareja:
      "Llevan la vida a término y convierten la pareja en gestión. En el amor, prohibir un tema —trabajo, plata, pendientes— en ciertos ratos es lo que deja espacio al deseo.",
    familia:
      "En la familia todo se vuelve logística. Un rato sin pendientes, con regla explícita, les devuelve la casa.",
    amistad:
      "Son eficaces juntos y hablan de tareas. La amistad pide un tema prohibido para que exista otra conversación.",
    trabajo:
      "Muy eficaces. Sin una regla, hablan de pendientes incluso fuera del trabajo. Prohíban un tema en ciertos ratos.",
  },
  "4x9": {
    pareja:
      "Uno pregunta cómo se vive juntos y el otro para qué. En el amor, empezar por el propósito y bajar al plan en la misma charla evita que uno se sienta burocrático y el otro poco práctico.",
    familia:
      "En la familia, el procedimiento sin sentido y el sentido sin plan se insultan. Propósito primero, pasos después, en la misma conversación.",
    amistad:
      "Uno ordena el encuentro y el otro pregunta si vale la pena. La amistad se entiende si el para qué se dice antes del cómo.",
    trabajo: "El procedimiento y el sentido. Invertir el orden desconecta a uno y frustra al otro.",
  },
  "4x11": {
    pareja:
      "Uno quiere evidencia del amor y el otro trae una sensación que no puede probar. En la pareja eso se vive como desconfianza. «¿Qué veríamos si esto que sientes fuera cierto?» le hace lugar a los dos.",
    familia:
      "En la familia, lo verificable y lo percibido chocan en la mesa. Convertir la corazonada en algo comprobable no le pide al otro un acto de fe.",
    amistad:
      "Uno pide datos y el otro una señal. La amistad no tiene que elegir: puede preguntar qué se vería si la intuición fuera cierta.",
    trabajo:
      "Evidencia contra percepción. La pregunta que vuelve comprobable la intuición evita tratarla como veto o como ruido.",
  },
  "4x22": {
    pareja:
      "Comparten la seriedad y discuten el tamaño del riesgo: una casa, un hijo, un cambio de ciudad. En el amor, escribir el peor escenario antes de decidir baja la pelea de prudencia contra ambición.",
    familia:
      "En la familia, uno quiere lo prudente y el otro algo más grande de lo cómodo. Cuantificar el peor caso vuelve el miedo discutible.",
    amistad:
      "Uno cuida el límite y el otro la escala. La amistad decide mejor con el peor escenario dicho, no insinuado.",
    trabajo:
      "Misma disciplina, distinta escala. El peor escenario en números disuelve el desacuerdo de riesgo.",
  },
  "4x33": {
    pareja:
      "Uno sostiene el orden de la vida y el otro a la persona que no cabe en la regla. En el amor, las excepciones —una noche, una ayuda, un perdón— hay que definirlas antes, no en el momento de la culpa.",
    familia:
      "En la familia, el sistema y el cuidado chocan en cada excepción. Decidir de antemano dónde la regla se afloja evita el desgaste caso por caso.",
    amistad:
      "Uno quiere el acuerdo claro y el otro la excepción humana. La amistad se cuida si esas excepciones están dichas, no improvisadas en la crisis.",
    trabajo:
      "Orden y cuidado. Dónde el sistema admite excepciones se define antes, no cuando alguien ya está afuera.",
  },
  "5x5": {
    pareja:
      "Se dan libertad total y les cuesta la continuidad. En el amor, tres compromisos fijos —una noche, una palabra, un regreso— y el resto flexible evitan que la pareja se disuelva por dispersión.",
    familia:
      "En la familia nadie sostiene la base. Tres cosas no negociables mantienen la casa; lo demás puede cambiar.",
    amistad:
      "Se entienden porque ninguno ata al otro. La amistad se esfuma si no hay ni una cita que se cumpla.",
    trabajo:
      "Nadie sostiene la base. Tres compromisos fijos y el resto abierto evitan que el trabajo se disuelva.",
  },
  "5x6": {
    pareja:
      "Uno necesita irse y el otro necesita saber que vuelven. En el amor, la independencia se lee como abandono y el cuidado como vigilancia. Avisar antes, y preguntar qué necesita el otro, los deja quererse sin vigilarse.",
    familia:
      "En la familia, el que se mueve informa antes y el que espera no supone que la solución es quedarse. Esa pareja de gestos baja el drama.",
    amistad:
      "Uno desaparece y el otro espera. La amistad se repara si la ida se avisa y la espera no se vuelve reclamo automático.",
    trabajo:
      "Movimiento y presencia. Informar antes de ausentarse, y no asumir que el otro quiere quedarse, ordena al equipo.",
  },
  "5x7": {
    pareja:
      "Los dos se van, uno hacia afuera y el otro hacia adentro. En el amor no se rompen a los gritos: se olvidan. Un punto de contacto obligatorio, aunque no haya crisis, es lo que los mantiene pareja.",
    familia:
      "En la familia, la libertad de los dos se vuelve desconexión. Una llamada fija, sin urgencia, evita que la distancia se instale.",
    amistad:
      "Se dan espacio y pueden pasar meses. La amistad de este par necesita una cita, no más libertad.",
    trabajo:
      "Dos formas de irse del equipo. Un punto de contacto obligatorio evita que el trabajo se enfríe sin pelea.",
  },
  "5x8": {
    pareja:
      "A uno le atrae la audacia y al otro le asusta cuando toca la plata o la estabilidad. En el amor, un margen que se puede mover sin consultar —un gasto, un plan— es más cariñoso que pedir prudencia general.",
    familia:
      "En la familia, el riesgo y el control pelean por la misma caja. Un monto libre y el resto consultado les da aire y piso.",
    amistad:
      "Uno apuesta y el otro calcula. La amistad no tiene que compartir todas las apuestas: sí un límite claro.",
    trabajo: "Riesgo y control. Un margen que se mueve sin consultar evita pedir prudencia vaga.",
  },
  "5x9": {
    pareja:
      "Los dos sueltan fácil, uno por ganas de lo nuevo y el otro por cierre. En el amor pueden dejar una relación, una casa o una conversación que valía la pena. Esperar una semana antes de soltar les devuelve criterio.",
    familia:
      "En la familia, irse de un conflicto demasiado pronto deja heridas abiertas. Una semana y una segunda charla evitan el abandono impulsivo.",
    amistad:
      "Se entienden en el cambio y pueden dejar la amistad sin hablarla. Volver al tema una semana después distingue el cierre del capricho.",
    trabajo:
      "Soltar por gusto y soltar por proceso. Antes de cerrar un proyecto, esperen una semana y vuelvan a mirarlo.",
  },
  "5x11": {
    pareja:
      "El ritmo de uno es la saturación del otro. En el amor, lo que se vive como pasión se puede vivir como ruido. Una señal corta, acordada, para decir «llegué al límite» llega antes que la explicación perfecta.",
    familia:
      "En la familia, el estímulo constante sobrecarga al que siente todo. Una palabra corta de alto, pactada, evita el estallido.",
    amistad:
      "Uno trae planes y el otro se satura. La amistad pide una señal breve de basta, no un discurso.",
    trabajo:
      "Estímulo y sistema nervioso sensible. La señal de límite tiene que ser corta y estar acordada, o llega tarde.",
  },
  "5x22": {
    pareja:
      "Uno improvisa la vida y el otro construye algo que pide constancia. En el amor, la improvisación salva o desordena según tenga un lugar: un problema concreto y libertad dentro de él, no sobre toda la obra.",
    familia:
      "En la familia, el plan largo y el cambio de último momento chocan. Un espacio donde improvisar, y el resto del plano quieto, los deja convivir.",
    amistad:
      "Uno cambia el plan y el otro lo tiene armado en grande. La amistad rinde si la espontaneidad tiene un cajón, no el plano entero.",
    trabajo:
      "Improvisar sobre una obra grande. La libertad va a un problema concreto, no a todo el diseño.",
  },
  "5x33": {
    pareja:
      "Uno se mueve y el otro contiene, y el peso queda desigual. En el amor, el que se va no suele negarse a ayudar: no ve la carga. Una vez al mes, mostrar el trabajo invisible lo reparte.",
    familia:
      "En la familia, la libertad de uno se apoya en la contención del otro. Hacer visible esa carga una vez al mes evita el agotamiento callado.",
    amistad:
      "Uno aparece cuando quiere y el otro sostiene el vínculo. La amistad se equilibra si esa tarea se nombra.",
    trabajo:
      "Libertad frente a contención. El trabajo invisible, dicho una vez al mes, se puede repartir.",
  },
  "6x6": {
    pareja:
      "Se protegen y se asfixian: los dos saben lo que le conviene al otro. En el amor, «¿te puedo decir lo que pienso?» antes del consejo cambia cómo cae exactamente la misma frase.",
    familia:
      "En la familia, cuidar se vuelve competir por quién sabe más. Pedir permiso antes de aconsejar baja la sofocación.",
    amistad: "Son dos que se hacen cargo del otro. La amistad respira si el consejo espera un sí.",
    trabajo:
      "Dos que cuidan y se pisan. El permiso antes de aconsejar evita que la ayuda se viva como control.",
  },
  "6x7": {
    pareja:
      "Uno se acerca cuando algo va mal y el otro se encierra. En el amor, el silencio se lee como rechazo y la insistencia como invasión. Decir cuánto tiempo se necesita, y cumplirlo, construye más que la charla larga.",
    familia:
      "En la familia, perseguir y retirarse es el ciclo. El plazo dicho y cumplido es la confianza.",
    amistad:
      "Uno escribe cuando el otro desaparece. La amistad se repara con una hora de vuelta, no con más mensajes.",
    trabajo:
      "Acercarse y retirarse ante el problema. El que se retira anuncia el plazo y lo cumple.",
  },
  "6x8": {
    pareja:
      "Uno cuida cómo se siente el amor y el otro que la vida juntos funcione. Se sienten queridos cuando el otro nombra ese cuidado en sus palabras: presencia, o resultado. Menospreciar la forma del otro es la pelea.",
    familia:
      "En la familia, uno protege a las personas y el otro el resultado de la casa. Reconocer en voz alta el aporte del otro, en sus términos, desarma el resentimiento.",
    amistad:
      "Uno aparece para escuchar y el otro para resolver. La amistad se siente justa si cada forma de cuidar se dice en voz alta.",
    trabajo:
      "Cuidar personas y cuidar resultados. Nombrar el aporte del otro en su propio idioma baja la rivalidad.",
  },
  "6x9": {
    pareja:
      "Uno se entrega a la pareja y el otro a cualquiera que lo necesite. En el amor, el de cerca puede sentir que queda al final de la fila. Una prioridad que no se negocia —una noche, una crisis— los ordena.",
    familia:
      "En la familia, el círculo propio y el mundo compiten. Definir qué no se posterga evita que los de casa se sientan últimos.",
    amistad:
      "Uno quiere a ese amigo y el otro está con todos. La amistad pide una prioridad que no se mueva.",
    trabajo:
      "El equipo cercano y la causa amplia. Una prioridad no negociable evita discutir por listas distintas.",
  },
  "6x11": {
    pareja:
      "Uno intenta arreglar lo que el otro absorbe del ambiente. En el amor hay mucho cariño y poca recarga. A veces la ayuda es quedarse sin intervenir: hay que preguntarlo.",
    familia:
      "En la familia, sostener y absorber se alimentan. Distinguir escuchar de resolver evita el ciclo en que ninguno descansa.",
    amistad:
      "Uno recoge la tensión y el otro la quiere componer. La amistad pregunta si toca compañía o arreglo.",
    trabajo:
      "El que sostiene y el que absorbe el clima. Preguntar si hay que resolver o acompañar cambia la ayuda.",
  },
  "6x22": {
    pareja:
      "Uno no acepta que la obra se coma el presente de la pareja, y el otro vive para lo que está construyendo. En el amor, un techo al sacrificio —hasta aquí sí, desde aquí no— protege lo cotidiano.",
    familia:
      "En la familia, el proyecto de mañana le cobra a la gente de hoy. Sin un límite escrito, la obra siempre gana.",
    amistad:
      "Uno quiere el bienestar de ahora y el otro la obra. La amistad necesita un techo: qué no se sacrifica.",
    trabajo:
      "El bienestar de hoy y la obra de mañana. El sacrificio tiene un límite explícito o se come el equipo.",
  },
  "6x33": {
    pareja:
      "Los dos son refugio de otros y ninguno lo es del otro. En el amor, un espacio donde ninguno ayuda a nadie —ni a la familia, ni a los amigos— es el único descanso que de verdad existe.",
    familia:
      "En la familia, todos acuden a ustedes y ustedes no acuden a nadie. Ese rato protegido hay que defenderlo o no ocurre.",
    amistad:
      "Se sostienen mutuamente y a todo el mundo. La amistad pide un hueco en que ninguno esté de turno.",
    trabajo:
      "Dos que sostienen al resto. Un espacio donde ninguno ayuda deja ver si el equipo es sostenible.",
  },
  "7x7": {
    pareja:
      "Se respetan el silencio y pueden pasar semanas sin decirse nada real. En el amor, esta pareja no necesita más espacio: necesita una cita para hablar de fondo, con fecha.",
    familia:
      "En la familia, dos retiros a la vez dejan la casa muda. Una conversación periódica, agendada, es el cuidado.",
    amistad:
      "Se entienden en la distancia y se pierden en ella. La amistad de este par es una cita, no una espera.",
    trabajo:
      "Dos retiros simultáneos. Una conversación de fondo con fecha evita que el trabajo se instale en el silencio.",
  },
  "7x8": {
    pareja:
      "Uno quiere entender el riesgo de la vida juntos y el otro ya quiere moverla. En el amor, un plazo para analizar y una fecha para decidir —escritos— les dejan deseo y criterio, no parálisis ni atropello.",
    familia:
      "En la familia, comprender y actuar ya se pisan. Plazo de análisis y fecha de decisión, los dos visibles.",
    amistad:
      "Uno estudia el plan y el otro lo quiere cerrado. La amistad decide mejor con una fecha, no con presión suelta.",
    trabajo: "Comprender antes contra actuar ya. Análisis con plazo y decisión con fecha.",
  },
  "7x9": {
    pareja:
      "Hablan de sentido, uno hacia dentro y el otro hacia todos, y pueden no cambiar nada concreto de la pareja. En el amor, cada conversación importante cierra con un gesto y una fecha.",
    familia:
      "En la familia, la profundidad no alcanza si no baja a un acto. Una acción y una fecha al final de la charla.",
    amistad:
      "Conversan muy bien y se quedan en la idea. La amistad se vuelve real con un próximo paso fechado.",
    trabajo: "Profundidad y amplitud. Sin una acción y una fecha, entienden mucho y entregan poco.",
  },
  "7x11": {
    pareja:
      "Uno llega al amor razonando y el otro sintiéndolo, a menudo al mismo lugar. En la pareja, exigir la explicación antes de escuchar la conclusión cierra al que solo sabe. Acepten el sentir y busquen el porqué después.",
    familia:
      "En la familia, análisis y percepción se descalifican. Primero la conclusión, después la explicación.",
    amistad:
      "Uno pide razones y el otro trae una certeza. La amistad escucha el destino de la frase antes de pedir el camino.",
    trabajo:
      "Análisis y percepción. Aceptar la conclusión y explicar después evita bloquear al que no razona en voz alta.",
  },
  "7x22": {
    pareja:
      "Uno siempre tiene otra pregunta sobre la vida en común y el otro necesita cerrar el diseño. En el amor, congelar una decisión en una fecha —y mandar lo nuevo a la siguiente vuelta— les deja construir.",
    familia:
      "En la familia, entender el sistema y tener que habitarlo chocan. Lo que aparece después de la fecha va a una lista, no reabre la pelea.",
    amistad:
      "Uno sigue preguntando y el otro ya armó el plan. La amistad declara el plan cerrado y anota el resto para después.",
    trabajo:
      "Entender el sistema y construirlo. El diseño se congela; lo demás es la siguiente versión.",
  },
  "7x33": {
    pareja:
      "Uno necesita ausentarse para querer bien y el otro quiere estar presente justo entonces. En el amor, avisar antes de irse —no después— evita que el silencio se llene con la peor historia.",
    familia:
      "En la familia, el que se aísla y el que acompaña se malentienden. Una frase de aviso, antes del retiro, alcanza.",
    amistad:
      "Uno se va a procesar y el otro se ofrece de más. Avisar la ausencia antes la vuelve cuidado, no rechazo.",
    trabajo:
      "El que se aísla y el que acompaña. El aviso va antes de desaparecer de la conversación.",
  },
  "8x8": {
    pareja:
      "Se entienden en ambición y compiten por el control de la pareja, la plata y la casa. En el amor, escribir quién tiene la última palabra en cada área evita que cada decisión sea un pulso.",
    familia:
      "En la familia hay dos autoridades en la misma mesa. El mapa de quién decide qué se escribe, o se gana por desgaste.",
    amistad:
      "Se respetan y negocian todo. La amistad se aliviana si no todo es una última palabra por ganar.",
    trabajo: "Dos autoridades. Quién cierra cada área, por escrito, evita el pulso permanente.",
  },
  "8x9": {
    pareja:
      "Uno mide la vida juntos en lo que se logra y el otro en a quién afecta. En el amor, los dos indicadores tienen que existir: uno concreto y uno humano. Medir solo uno deja al otro sintiéndose ingenuo o frío.",
    familia:
      "En la familia, resultado y propósito se acusan. Dos indicadores —uno duro, uno humano— hacen que nadie quede fuera de la cuenta.",
    amistad:
      "Uno mira lo logrado y el otro lo justo. La amistad sostiene las dos medidas, no elige una para ganar la discusión.",
    trabajo: "Resultado y propósito. Un indicador duro y uno humano, elegidos juntos.",
  },
  "8x11": {
    pareja:
      "La exigencia de uno es lo que desregula al otro. En el amor, ser directo no garantiza ser oído: cómo se dice determina si el otro puede quedarse en la conversación. Bajar la intensidad antes del contenido.",
    familia:
      "En la familia, la presión y la sensibilidad chocan en el tono, no solo en el tema. Primero el volumen, después el asunto.",
    amistad:
      "Uno empuja y el otro se desborda. La amistad escucha mejor si la intensidad baja antes de la frase difícil.",
    trabajo: "Presión y sensibilidad. El cómo abre o cierra la posibilidad de oír el qué.",
  },
  "8x22": {
    pareja:
      "Los dos piensan en grande y pelean el horizonte: disfrutar ahora o construir algo que dure. En el amor, separar la plata y el tiempo de corto plazo de los de largo plazo evita que lo urgente se coma la pareja.",
    familia:
      "En la familia, rentabilidad de hoy y estructura de años compiten por el mismo esfuerzo. Dos presupuestos, no uno solo.",
    amistad:
      "Uno quiere el resultado ya y el otro la obra. La amistad no pone todo en el mismo plazo.",
    trabajo:
      "Poder y arquitectura. El presupuesto corto y el largo no deben pelear por el mismo fondo.",
  },
  "8x33": {
    pareja:
      "Uno optimiza la vida y el otro protege a quien ese plan deja afuera, a veces el propio amor. En la pareja, el costo humano entra en la decisión mientras se toma, no como reclamo de después.",
    familia:
      "En la familia, la eficiencia y la compasión se evitan o se hablan. Poner el costo humano en la lista de la decisión lo vuelve diseño, no pelea tardía.",
    amistad:
      "Uno resuelve y el otro mira a quién dejó fuera. La amistad nombra ese costo en el momento, no semanas después.",
    trabajo:
      "Eficiencia y compasión. El costo humano es un punto de la decisión, no un veto escondido ni un reproche posterior.",
  },
  "9x9": {
    pareja:
      "Se entienden en lo grande y descuidan lo de ustedes dos. En el amor, lo íntimo pierde contra lo importante si no tiene hora. Un tiempo solo para lo pequeño de la pareja es el cuidado.",
    familia:
      "En la familia, los dos cargan el mundo y la casa queda desatendida. Lo cotidiano hay que protegerlo con tiempo explícito.",
    amistad:
      "Hablan de causas y se olvidan del amigo. La amistad pide un rato que no sea útil para nadie más.",
    trabajo:
      "Dos que cargan el propósito y sueltan lo operativo. Lo pequeño del equipo también se agenda.",
  },
  "9x11": {
    pareja:
      "Los dos absorben lo de afuera, uno como causa y el otro como cuerpo. En el amor se saturan con peso que no es de la pareja. Revisar qué están cargando que no les toca les devuelve el deseo.",
    familia:
      "En la familia, la compasión amplia y la percepción fina se llenan de lo ajeno. Nombrar qué peso no es de la casa permite dejarlo.",
    amistad:
      "Se acompañan en lo que sienten del mundo y se agotan. La amistad pregunta qué de eso no es de ustedes.",
    trabajo:
      "Causa y sensibilidad. Revisar qué carga no corresponde al rol evita el desgaste silencioso.",
  },
  "9x22": {
    pareja:
      "Uno trae el para qué de la vida juntos y el otro lo vuelve casa, plata o plan. En el amor, sin una versión reducida que ya cuente como bastante, descartan logros reales por no ser el sueño completo.",
    familia:
      "En la familia, el ideal se vuelve exigencia. Definir qué versión más chica ya es un buen logro baja la decepción.",
    amistad:
      "Uno sueña el sentido y el otro lo ejecuta. La amistad celebra el piso, no solo la obra terminada.",
    trabajo:
      "Ideal y ejecución. Una versión reducida que ya cuenta como éxito evita tirar lo que sí se hizo.",
  },
  "9x33": {
    pareja:
      "Los dos viven para los demás y en la pareja no hay límite. En el amor, un no acordado en calma —aunque duela decirlo— es lo que los deja tener una relación y no solo una misión.",
    familia:
      "En la familia, servir y sostener no paran. El límite se escribe cuando están tranquilos, porque en el pedido no van a poder.",
    amistad:
      "Se entregan a todos, incluida la amistad, hasta vaciarse. Un límite compartido les permite seguir queriéndose.",
    trabajo: "Servir y sostener. El no se acuerda antes, o en el momento no existe.",
  },
  "11x11": {
    pareja:
      "Se comprenden al instante y se contagian en minutos. En el amor, antes de meterse en la emoción del otro, pregunten si quiere compañía o calma. Acompañar no es sentir lo mismo por obligación.",
    familia:
      "En la familia, dos antenas sin filtro se pasan el día entero. Preguntar si toca compañía o quietud corta el contagio.",
    amistad:
      "Se leen y se arrastran. La amistad pregunta si el otro quiere que sientas con él o que le bajes el volumen.",
    trabajo:
      "Dos antenas en la misma sala. Antes de entrar en la emoción, pregunten qué tipo de compañía hace falta.",
  },
  "11x22": {
    pareja:
      "Uno siente hacia dónde va la vida y el otro sabe cómo levantarla. En el amor es potente y no para. Las señales de cansancio hay que fijarlas antes —una hora, un día sin obra— porque ninguno las ve llegar.",
    familia:
      "En la familia, la visión y la obra no tienen freno. Un umbral de parada, escrito en calma, protege a la casa.",
    amistad:
      "Se empujan a no parar. La amistad necesita una señal de basta acordada, no improvisada en el agotamiento.",
    trabajo:
      "La visión y la obra. Las señales de parada se definen antes de que el cansancio sea el problema.",
  },
  "11x33": {
    pareja:
      "Sienten mucho y dan mucho. En el amor el desgaste es silencioso porque los dos minimizan. Preguntar la carga del uno al diez, no «¿estás bien?», muestra cómo está de verdad la pareja.",
    familia:
      "En la familia, la sensibilidad y la entrega no se quejan a tiempo. Una nota numérica de la carga evita la respuesta que siempre dice que aguanta.",
    amistad:
      "Se comprenden y se vacían. La amistad chequea el peso con un número, no con una frase amable.",
    trabajo:
      "Sensibilidad y entrega. La carga se pregunta del uno al diez: lo cualitativo, en este par, siempre minimiza.",
  },
  "22x22": {
    pareja:
      "Los dos tienen un diseño completo de la vida y pelean la autoría. En el amor colaboran mejor con módulos —la casa, la plata, la familia de cada uno— que con consenso sobre todo.",
    familia:
      "En la familia hay dos planos maestros. Dividir por áreas con bordes claros evita que cada detalle sea una firma por ganar.",
    amistad:
      "Construyen cosas grandes y chocan por quién las diseñó. La amistad rinde con fronteras, no con acuerdo continuo.",
    trabajo:
      "Dos constructores, un solo plano. Módulos con interfaces claras superan al consenso permanente.",
  },
  "22x33": {
    pareja:
      "Uno arma la estructura de la vida y el otro cuida a quien la habita, a veces la propia pareja. En el amor, preguntar a quién deja fuera el plan, temprano, es diseño. Preguntarlo tarde es reparar el daño.",
    familia:
      "En la familia, la estructura y la gente que la vive chocan cuando el plan cobra un costo humano. Esa pregunta va al principio.",
    amistad:
      "Uno diseña y el otro mira quién no entra. La amistad revisa el plan antes de enamorarse de él.",
    trabajo:
      "La estructura y la gente que la habita. Preguntar a quién deja fuera, temprano, evita la reparación.",
  },
  "33x33": {
    pareja:
      "Se comprenden porque los dos saben lo que cuesta sostener a otros, y ninguno pide. En el amor, turnos estrictos para recibir —como una tarea, no como un premio— son el único modo de que exista la pareja.",
    familia:
      "En la familia son dos refugios sin refugio. El turno de recibir se asigna, o los dos siguen dando hasta vaciarse.",
    amistad:
      "Se sostienen y no se piden nada. La amistad necesita un turno en que uno solo reciba.",
    trabajo: "Dos refugios del equipo y ninguno del otro. Recibir también se asigna, o no pasa.",
  },
};
