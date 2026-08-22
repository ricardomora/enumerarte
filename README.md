# Enumerarte

Herramienta de comprensión relacional con base numerológica. No es una app de
adivinación, y esa distinción determina cómo está construido el proyecto.

La tesis del negocio no es el cálculo, que es aritmética trivial y ya la ofrecen
decenas de apps. Es el **grafo de relaciones**: entender a tu pareja, tu madre o
tu jefe. Todo lo que está construido apunta a validar esa tesis.

## Estado actual: Fase 0

El objetivo de esta fase es responder una única pregunta con datos:

> ¿Qué porcentaje de la gente que calcula su propio número añade a una segunda
> persona?

Esa razón (`second_person_added` sobre `self_computed`) valida o refuta la tesis
relacional completa. Si la gente calcula lo suyo y se va, no hay producto, y es
mejor saberlo en dos semanas que en seis meses.

## Puesta en marcha

```bash
pnpm install
pnpm dev
```

Variables de entorno, todas opcionales en desarrollo:

| Variable        | Para qué sirve                                                         |
| --------------- | ---------------------------------------------------------------------- |
| `POSTHOG_KEY`   | Sin ella los eventos solo se escriben en el log del servidor           |
| `POSTHOG_HOST`  | Por defecto `https://us.i.posthog.com`                                 |

## Comandos

| Comando               | Qué hace                                                     |
| --------------------- | ------------------------------------------------------------ |
| `pnpm dev`            | Servidor de desarrollo                                       |
| `pnpm test`           | Tests del motor y del contenido                              |
| `pnpm content:check`  | Puerta de cobertura de contenido                             |
| `pnpm typecheck`      | `tsc --noEmit`                                               |
| `pnpm lint`           | Biome                                                        |
| `pnpm format`         | Biome con correcciones                                       |

## Arquitectura

### `src/lib/numerology` — el motor

Módulo puro y sin dependencias, para que el mismo cálculo corra en el navegador,
en un route handler, en Convex o en un script de generación de contenido.

Decisiones que conviene no revertir sin pensarlo:

- **Las fechas son `{ day, month, year }`, nunca `Date`.** Una fecha de
  nacimiento no tiene huso horario. Usar `Date` produce errores de un día según
  el servidor, que para una audiencia latinoamericana significaría un número
  equivocado para todos los nacidos el día 1.
- **`reduce` preserva los maestros, `reduceToDigit` no.** Los pináculos y
  desafíos se calculan sobre componentes de un solo dígito; el resultado sí
  admite 11, 22 y 33.
- **Convenciones de nombre documentadas en el código.** Tildes ignoradas, Ñ como
  N, Y contextual. La literatura no es unánime, así que la elección está escrita
  y es configurable en lugar de implícita.
- **`explain.ts` es una función de producto, no de depuración.** Mostrar la
  aritmética completa es la posición de honestidad del proyecto.

### `src/content` — el activo real

Contenido como datos versionados, nunca como texto dentro de TSX. Indexado por
clave semántica: `missions["11"]`, `pairs["8x11"]`.

**Regla de integridad:** el número es solo la clave de enrutamiento. El campo
`practice` de cada par debe ser consejo accionable de comunicación o manejo de
conflicto, válido aunque el usuario ignore por completo la numerología. Hay un
test que falla si dos pares comparten la misma práctica, precisamente para
impedir que el contenido degenere en plantilla.

Cobertura actual: español completo (12 misiones, 78 pares). Inglés tiene las
misiones y le faltan los pares, y la búsqueda cae a español mientras no existan.

### Por qué 78 pares

Doce valores posibles (1-9 más 11, 22 y 33) dan 12 × 13 / 2 = 78 pares no
dirigidos. Los pares tipados por relación (pareja, familia, trabajo, amistad)
multiplican por cuatro y quedan para la Fase 1.

## Posición sobre la validez

La numerología no tiene validez predictiva demostrada y el producto lo dice en
su propia página. Debajo hay aritmética modular: reducir un número sumando sus
dígitos equivale a `1 + ((n - 1) mod 9)`, y la tabla pitagórica de letras es la
misma función aplicada a la posición alfabética. Toda la población cae en nueve
clases más tres casos especiales.

Eso no invalida el producto, lo define. El precedente son el MBTI y el eneagrama:
lo que venden no es capacidad predictiva sino un vocabulario compartido para
hablar de uno mismo y de los demás. La diferencia de Enumerarte es no mentir al
respecto, y por eso el valor entregado tiene que estar en el consejo.

**Restricción innegociable:** no afirmar validez científica en ningún material.
Hacerlo abre exposición por publicidad engañosa y complica la revisión en las
tiendas de aplicaciones.

## Pendiente

- Modelo de grafo con aristas tipadas y perfiles fantasma reclamables
- Los 78 pares en inglés
- Persistencia en Convex, hoy los leads viven en el proveedor de analítica
- Imagen OG generada por lectura, para el bucle de compartir
