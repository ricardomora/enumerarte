import type { PairContent } from "../types";

/**
 * Pendiente: los 78 pares en inglés.
 *
 * Se deja deliberadamente vacío en lugar de traducir a máquina. El contenido es
 * el activo principal del negocio y una traducción literal del español pierde
 * el registro, que es justamente lo que hace que el texto no suene a plantilla.
 *
 * `pnpm content:check` reporta este hueco como pendiente, y la búsqueda de
 * contenido cae a español mientras no exista, de modo que la aplicación nunca
 * se rompe por una clave faltante.
 */
export const pairs: Record<string, PairContent> = {};
