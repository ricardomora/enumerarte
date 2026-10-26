import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  ALL_VALUES,
  allPairKeys,
  computeMision,
  pairKey,
  RELATIONSHIP_TYPES,
} from "../lib/numerology/index.js";
import { getMission, getPair, getSoul } from "./index.js";
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

  test("el inglés tiene lectura propia y cae al español solo si falta", () => {
    const english = getPair(2, 8, "en");
    assert.equal(english.key, "2x8");
    assert.notEqual(english.headline, getPair(2, 8).headline);
    assert.notEqual(english.bonds.pareja, getPair(2, 8).bonds.pareja);
    assert.equal(getSoul(1, "en").title, "The hunger to decide alone");
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
    for (const locale of LOCALES) {
      const seen = new Map<string, string>();
      for (const key of allPairKeys()) {
        const [a, b] = key.split("x").map(Number);
        const { practice } = getPair(a as never, b as never, locale);
        const previous = seen.get(practice);
        assert.equal(previous, undefined, `práctica repetida en ${locale} ${key} y ${previous}`);
        seen.set(practice, key);
      }
    }
  });

  test("ninguna nota de vínculo se repite", () => {
    for (const locale of LOCALES) {
      const seen = new Map<string, string>();
      for (const key of allPairKeys()) {
        const [a, b] = key.split("x").map(Number);
        const { bonds } = getPair(a as never, b as never, locale);
        for (const relationship of RELATIONSHIP_TYPES) {
          const text = bonds[relationship];
          assert.ok(text.length > 40, `${locale} ${key} ${relationship} es demasiado corta`);
          assert.equal(text.includes("%"), false, `${key} ${relationship} parece un puntaje`);
          const id = `${key}:${relationship}`;
          const previous = seen.get(text);
          assert.equal(
            previous,
            undefined,
            `nota de vínculo repetida en ${locale} ${id} y ${previous}`,
          );
          seen.set(text, id);
        }
      }
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
