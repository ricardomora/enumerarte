import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { ALL_VALUES, allPairKeys, computeMision, pairKey } from "../lib/numerology/index.js";
import { getMission, getPair } from "./index.js";
import { LOCALES } from "./types.js";

describe("registro de contenido", () => {
  test("toda misión alcanzable resuelve en todos los idiomas", () => {
    for (const locale of LOCALES) {
      for (const value of ALL_VALUES) {
        const mission = getMission(value, locale);
        assert.equal(mission.value, value, `misión ${value} en ${locale}`);
      }
    }
  });

  test("todo par alcanzable resuelve en todos los idiomas", () => {
    for (const locale of LOCALES) {
      for (const value of ALL_VALUES) {
        for (const other of ALL_VALUES) {
          const pair = getPair(value, other, locale);
          assert.equal(pair.key, pairKey(value, other), `par ${value}x${other} en ${locale}`);
        }
      }
    }
  });

  test("el respaldo cubre los pares que faltan en inglés", () => {
    // Sin el respaldo, esto lanzaría: el inglés todavía no tiene pares escritos.
    const pair = getPair(11, 8, "en");
    assert.equal(pair.key, "8x11");
  });

  test("la búsqueda es simétrica: el orden de las personas no cambia la lectura", () => {
    for (const key of allPairKeys()) {
      const [a, b] = key.split("x").map(Number);
      assert.deepEqual(getPair(a as never, b as never), getPair(b as never, a as never));
    }
  });

  test("ninguna práctica se repite entre pares distintos", () => {
    // Textos duplicados delatan contenido generado con plantilla, que es
    // exactamente lo que el producto no puede permitirse.
    const seen = new Map<string, string>();
    for (const key of allPairKeys()) {
      const [a, b] = key.split("x").map(Number);
      const { practice } = getPair(a as never, b as never);
      const previous = seen.get(practice);
      assert.equal(previous, undefined, `práctica repetida en ${key} y ${previous}`);
      seen.set(practice, key);
    }
  });

  test("el recorrido de demostración da los textos esperados", () => {
    const ricardo = computeMision({ day: 15, month: 4, year: 1990 });
    const ana = computeMision({ day: 20, month: 7, year: 1988 });

    assert.equal(ricardo, 2);
    assert.equal(ana, 8);
    assert.equal(getMission(ricardo).title, "El que sostiene el vínculo");
    assert.equal(getMission(ana).title, "El que administra la realidad");
    assert.equal(getPair(ricardo, ana).headline, "El tono y el resultado");
  });
});
