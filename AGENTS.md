<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Convenciones del proyecto

Lee `README.md` antes de tocar el motor o el contenido: documenta decisiones que
parecen arbitrarias y no lo son.

### El motor es puro

`src/lib/numerology` no importa nada de React, Next ni del navegador, y así debe
seguir. Corre igual en el cliente, en un route handler y en scripts. Cualquier
cambio va acompañado de tests: la capa de contenido entera se apoya en que estos
números sean correctos.

### Las fechas nunca son `Date`

Se usa `{ day, month, year }`. Una fecha de nacimiento no tiene huso horario y
`new Date("1990-04-15")` se interpreta como UTC, lo que devuelve el día anterior
en toda América. Ver `src/lib/date-input.ts`.

### El contenido es datos, no código

Los textos viven en `src/content/{es,en}/*.ts` indexados por clave semántica.
Nunca se escriben literales de copy dentro de componentes.

Al añadir contenido: el número solo enruta, y el campo `practice` de cada par
tiene que ser consejo real de comunicación o manejo de conflicto, válido aunque
la numerología no signifique nada. Hay un test que falla si dos pares comparten
la misma práctica, para impedir que el contenido degenere en plantilla.

Después de tocar contenido, corre `pnpm content:check`.

### Nunca afirmar validez científica

Ni en copy, ni en metadatos, ni en material de marketing. Es una restricción
legal y de revisión en tiendas de aplicaciones, no una preferencia de estilo.

### Antes de dar algo por terminado

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm content:check && pnpm build
```
