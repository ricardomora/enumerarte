import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { allPairKeys, pairKey, parsePairKey, TOTAL_PAIR_KEYS } from "./pairs.js";
import { ALL_VALUES, reduce } from "./reduce.js";

describe("pairKey", () => {
  test("es simétrico: el orden de los dos números no importa", () => {
    assert.equal(pairKey(6, 5), pairKey(5, 6));
    assert.equal(pairKey(11, 3), pairKey(3, 11));
    assert.equal(pairKey(33, 1), pairKey(1, 33));
  });

  test("ordena numéricamente, no lexicográficamente", () => {
    assert.equal(pairKey(9, 11), "9x11");
    assert.equal(pairKey(11, 22), "11x22");
  });

  test("admite pares del mismo número", () => {
    assert.equal(pairKey(7, 7), "7x7");
  });
});

describe("parsePairKey", () => {
  test("lee una clave canónica", () => {
    assert.deepEqual(parsePairKey("8x11"), { a: 8, b: 11, canonical: "8x11" });
  });

  test("acepta el orden invertido y delata la forma canónica", () => {
    const parsed = parsePairKey("11x8");
    assert.deepEqual(parsed, { a: 11, b: 8, canonical: "8x11" });
    assert.notEqual(parsed?.canonical, "11x8");
  });

  test("rechaza números que el sistema no produce", () => {
    for (const raw of ["10x5", "0x5", "5x44", "12x12", "99x1"]) {
      assert.equal(parsePairKey(raw), null, `debería rechazar ${raw}`);
    }
  });

  test("rechaza cualquier cosa que no tenga la forma exacta", () => {
    for (const raw of ["", "8", "8x", "x11", "8x11x2", "8X11", "8-11", "../8x11", "8x11?a=b"]) {
      assert.equal(parsePairKey(raw), null, `debería rechazar "${raw}"`);
    }
  });

  test("toda clave generada se puede volver a leer", () => {
    for (const key of allPairKeys()) {
      assert.equal(parsePairKey(key)?.canonical, key);
    }
  });
});

describe("allPairKeys", () => {
  test("genera exactamente 78 pares (12 valores, combinaciones con repetición)", () => {
    const keys = allPairKeys();
    assert.equal(keys.length, 78);
    assert.equal(keys.length, TOTAL_PAIR_KEYS);
    assert.equal(TOTAL_PAIR_KEYS, (ALL_VALUES.length * (ALL_VALUES.length + 1)) / 2);
  });

  test("no hay claves duplicadas", () => {
    const keys = allPairKeys();
    assert.equal(new Set(keys).size, keys.length);
  });

  test("cubre todo par alcanzable por el motor", () => {
    const known = new Set(allPairKeys());
    for (let a = 1; a <= 400; a += 1) {
      for (let b = 1; b <= 400; b += 7) {
        const key = pairKey(reduce(a), reduce(b));
        assert.ok(known.has(key), `par no cubierto: ${key}`);
      }
    }
  });
});
