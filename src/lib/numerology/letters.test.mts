import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { breakdownName, computeNameNumbers, letterValue, normalizeName } from "./letters.js";

describe("letterValue", () => {
  test("reproduce la tabla pitagórica completa", () => {
    const expected: Record<string, number> = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      O: 6,
      P: 7,
      Q: 8,
      R: 9,
      S: 1,
      T: 2,
      U: 3,
      V: 4,
      W: 5,
      X: 6,
      Y: 7,
      Z: 8,
    };
    for (const [letter, value] of Object.entries(expected)) {
      assert.equal(letterValue(letter), value, `falló en ${letter}`);
    }
  });

  test("A, J y S valen 1 porque son las posiciones 1, 10 y 19", () => {
    assert.equal(letterValue("A"), letterValue("J"));
    assert.equal(letterValue("J"), letterValue("S"));
  });

  test("rechaza lo que no sea una letra A-Z normalizada", () => {
    assert.throws(() => letterValue("ñ"), RangeError);
    assert.throws(() => letterValue("1"), RangeError);
  });
});

describe("normalizeName", () => {
  test("elimina tildes manteniendo la letra base", () => {
    assert.equal(normalizeName("José"), "JOSE");
    assert.equal(normalizeName("Andrés Íñigo"), "ANDRES INIGO");
    assert.equal(normalizeName("Begoña"), "BEGONA");
    assert.equal(normalizeName("Agüero"), "AGUERO");
  });

  test("colapsa cualquier separador en un solo espacio", () => {
    assert.equal(normalizeName("  María   del-Carmen  "), "MARIA DEL CARMEN");
    assert.equal(normalizeName("O'Brien"), "O BRIEN");
  });

  test("devuelve cadena vacía si no hay letras utilizables", () => {
    assert.equal(normalizeName("123 !!"), "");
    assert.equal(normalizeName(""), "");
  });
});

describe("clasificación de la Y", () => {
  const vowelsOf = (name: string, policy?: "contextual" | "vowel" | "consonant") =>
    breakdownName(name, policy)
      .filter((entry) => entry.isVowel)
      .map((entry) => entry.letter)
      .join("");

  test("contextual: la Y es vocal solo si no toca otra vocal", () => {
    assert.equal(vowelsOf("MYRNA"), "YA");
    assert.equal(vowelsOf("YOLANDA"), "OAA");
    assert.equal(vowelsOf("LARRY"), "AY");
  });

  test("las políticas explícitas fuerzan el resultado", () => {
    assert.equal(vowelsOf("YOLANDA", "vowel"), "YOAA");
    assert.equal(vowelsOf("MYRNA", "consonant"), "A");
  });

  test("la Y aislada cuenta como vocal en modo contextual", () => {
    assert.equal(vowelsOf("Y"), "Y");
  });
});

describe("computeNameNumbers", () => {
  test("RICARDO: destino 5, alma 7, escudo 7", () => {
    const numbers = computeNameNumbers("Ricardo");
    assert.equal(numbers.destino, 5);
    assert.equal(numbers.alma, 7);
    assert.equal(numbers.escudo, 7);
  });

  test("las tildes no alteran el resultado", () => {
    assert.deepEqual(
      computeNameNumbers("José Muñoz").destino,
      computeNameNumbers("Jose Munoz").destino,
    );
  });

  test("el desglose expone letra por letra para poder mostrar el cálculo", () => {
    const { breakdown } = computeNameNumbers("Ana");
    assert.deepEqual(
      breakdown.map((entry) => [entry.letter, entry.value, entry.isVowel]),
      [
        ["A", 1, true],
        ["N", 5, false],
        ["A", 1, true],
      ],
    );
  });

  test("rechaza nombres sin letras", () => {
    assert.throws(() => computeNameNumbers("---"), /no contiene ninguna letra/);
  });
});
