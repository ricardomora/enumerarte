import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { allPairKeys, pairKey, TOTAL_PAIR_KEYS } from "./pairs.js";
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
