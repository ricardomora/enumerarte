import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  type CalendarDate,
  computeChallenges,
  computeMision,
  computePersonalCycles,
  computePinnacles,
  computeProfile,
  isValidDate,
} from "./profile.js";

const REFERENCE: CalendarDate = { day: 15, month: 4, year: 1990 };

describe("isValidDate", () => {
  test("acepta fechas reales", () => {
    assert.ok(isValidDate({ day: 31, month: 12, year: 1999 }));
    assert.ok(isValidDate({ day: 29, month: 2, year: 2000 }));
    assert.ok(isValidDate({ day: 29, month: 2, year: 2024 }));
  });

  test("rechaza días fuera de rango del mes", () => {
    assert.ok(!isValidDate({ day: 31, month: 4, year: 1990 }));
    assert.ok(!isValidDate({ day: 30, month: 2, year: 2000 }));
    assert.ok(!isValidDate({ day: 29, month: 2, year: 1900 }));
    assert.ok(!isValidDate({ day: 29, month: 2, year: 2023 }));
  });

  test("rechaza meses y valores no enteros", () => {
    assert.ok(!isValidDate({ day: 1, month: 13, year: 2000 }));
    assert.ok(!isValidDate({ day: 1, month: 0, year: 2000 }));
    assert.ok(!isValidDate({ day: 1.5, month: 1, year: 2000 }));
  });

  test("1900 no es bisiesto y 2000 sí, por la regla de los siglos", () => {
    assert.ok(!isValidDate({ day: 29, month: 2, year: 1900 }));
    assert.ok(isValidDate({ day: 29, month: 2, year: 2000 }));
  });
});

describe("computeMision", () => {
  test("15/04/1990 da el maestro 11 (6 + 4 + 19 = 29 -> 11)", () => {
    assert.equal(computeMision(REFERENCE), 11);
  });

  test("09/09/2002 da el maestro 22 (9 + 9 + 4 = 22)", () => {
    assert.equal(computeMision({ day: 9, month: 9, year: 2002 }), 22);
  });

  test("01/01/2000 da 4", () => {
    assert.equal(computeMision({ day: 1, month: 1, year: 2000 }), 4);
  });

  test("29/02/2000 da 6 (11 + 2 + 2 = 15 -> 6)", () => {
    assert.equal(computeMision({ day: 29, month: 2, year: 2000 }), 6);
  });

  test("rechaza fechas inexistentes en lugar de calcular basura", () => {
    assert.throws(() => computeMision({ day: 31, month: 2, year: 1990 }), RangeError);
  });
});

describe("computePinnacles", () => {
  test("15/04/1990 con componentes reducidos 6, 4 y 1", () => {
    assert.deepEqual(computePinnacles(REFERENCE), {
      first: 1,
      second: 7,
      third: 8,
      fourth: 5,
    });
  });

  test("el tercer pináculo siempre es la reducción de los dos primeros", () => {
    const dates: CalendarDate[] = [
      { day: 1, month: 1, year: 1970 },
      { day: 22, month: 7, year: 1985 },
      { day: 30, month: 11, year: 2001 },
    ];
    for (const date of dates) {
      const { first, second, third } = computePinnacles(date);
      let expected = first + second;
      while (expected > 9 && expected !== 11 && expected !== 22 && expected !== 33) {
        expected = String(expected)
          .split("")
          .reduce((sum, digit) => sum + Number(digit), 0);
      }
      assert.equal(third, expected, `falló en ${date.day}/${date.month}/${date.year}`);
    }
  });
});

describe("computeChallenges", () => {
  test("15/04/1990 da 2, 5, 3 y 3", () => {
    assert.deepEqual(computeChallenges(REFERENCE), {
      first: 2,
      second: 5,
      third: 3,
      fourth: 3,
    });
  });

  test("el cero es un desafío válido y no se convierte en nueve", () => {
    // Día y mes reducen al mismo dígito, así que el primer desafío es 0.
    const challenges = computeChallenges({ day: 4, month: 4, year: 1990 });
    assert.equal(challenges.first, 0);
  });

  test("nunca produce valores negativos ni mayores que 8", () => {
    for (let month = 1; month <= 12; month += 1) {
      for (const day of [1, 9, 15, 28]) {
        const challenges = computeChallenges({ day, month, year: 1995 });
        for (const value of Object.values(challenges)) {
          assert.ok(value >= 0 && value <= 8, `valor fuera de rango: ${value}`);
        }
      }
    }
  });
});

describe("computePersonalCycles", () => {
  test("nacido 15/04, referencia 21/08/2026", () => {
    const cycles = computePersonalCycles(REFERENCE, { day: 21, month: 8, year: 2026 });
    assert.equal(cycles.year, 2);
    assert.equal(cycles.month, 1);
    assert.equal(cycles.day, 4);
  });

  test("el año personal no depende del día ni el mes de referencia", () => {
    const a = computePersonalCycles(REFERENCE, { day: 1, month: 1, year: 2026 });
    const b = computePersonalCycles(REFERENCE, { day: 31, month: 12, year: 2026 });
    assert.equal(a.year, b.year);
  });
});

describe("computeProfile", () => {
  test("compone el perfil completo y el nombre es opcional", () => {
    const withName = computeProfile({ birthDate: REFERENCE, fullName: "Ricardo" });
    assert.equal(withName.mision, 11);
    assert.equal(withName.regaloDivino, 6);
    assert.equal(withName.name?.destino, 5);

    const withoutName = computeProfile({ birthDate: REFERENCE });
    assert.equal(withoutName.name, null);
    assert.equal(withoutName.mision, 11);
  });

  test("un nombre en blanco se trata como ausente", () => {
    assert.equal(computeProfile({ birthDate: REFERENCE, fullName: "   " }).name, null);
  });

  test("es determinista: la misma entrada da exactamente la misma salida", () => {
    const input = { birthDate: REFERENCE, fullName: "María José Pérez" };
    assert.deepEqual(computeProfile(input), computeProfile(input));
  });
});
