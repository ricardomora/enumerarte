import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  ALL_VALUES,
  digitalRoot,
  digitSum,
  isMasterNumber,
  reduce,
  reduceToDigit,
} from "./reduce.js";

describe("digitSum", () => {
  test("suma los dígitos decimales", () => {
    assert.equal(digitSum(0), 0);
    assert.equal(digitSum(7), 7);
    assert.equal(digitSum(15), 6);
    assert.equal(digitSum(1990), 19);
    assert.equal(digitSum(2026), 10);
  });

  test("rechaza entradas no válidas", () => {
    assert.throws(() => digitSum(-1), RangeError);
    assert.throws(() => digitSum(1.5), RangeError);
  });
});

describe("digitalRoot", () => {
  test("equivale a la forma cerrada 1 + ((n-1) mod 9)", () => {
    assert.equal(digitalRoot(0), 0);
    assert.equal(digitalRoot(9), 9);
    assert.equal(digitalRoot(18), 9);
    assert.equal(digitalRoot(19), 1);
    assert.equal(digitalRoot(29), 2);
  });

  test("coincide con la suma iterada de dígitos para un rango amplio", () => {
    for (let n = 1; n <= 5000; n += 1) {
      let iterated = n;
      while (iterated > 9) iterated = digitSum(iterated);
      assert.equal(digitalRoot(n), iterated, `falló en n=${n}`);
    }
  });

  test("los múltiplos de 9 caen en 9, nunca en 0", () => {
    for (const n of [9, 99, 999, 1998, 123_456_789]) {
      assert.equal(digitalRoot(n), 9);
    }
  });
});

describe("reduce", () => {
  test("preserva los números maestros que aparecen en pasos intermedios", () => {
    assert.equal(reduce(29), 11);
    assert.equal(reduce(38), 11);
    assert.equal(reduce(11), 11);
    assert.equal(reduce(22), 22);
    assert.equal(reduce(33), 33);
  });

  test("sigue reduciendo cuando el paso intermedio no es maestro", () => {
    assert.equal(reduce(48), 3);
    assert.equal(reduce(19), 1);
    assert.equal(reduce(1990), 1);
  });

  test("el 44 no es maestro en este sistema y se reduce", () => {
    assert.equal(reduce(44), 8);
  });

  test("los dígitos simples pasan sin cambio", () => {
    for (let n = 1; n <= 9; n += 1) {
      assert.equal(reduce(n), n);
    }
  });

  test("siempre devuelve un valor del conjunto permitido", () => {
    for (let n = 1; n <= 3000; n += 1) {
      assert.ok(ALL_VALUES.includes(reduce(n)), `reduce(${n}) salió del conjunto`);
    }
  });
});

describe("reduceToDigit", () => {
  test("ignora los maestros y baja siempre a un dígito", () => {
    assert.equal(reduceToDigit(29), 2);
    assert.equal(reduceToDigit(11), 2);
    assert.equal(reduceToDigit(22), 4);
    assert.equal(reduceToDigit(33), 6);
  });
});

describe("isMasterNumber", () => {
  test("reconoce exactamente 11, 22 y 33", () => {
    assert.ok(isMasterNumber(11));
    assert.ok(isMasterNumber(22));
    assert.ok(isMasterNumber(33));
    assert.ok(!isMasterNumber(44));
    assert.ok(!isMasterNumber(9));
  });
});
