import assert from "node:assert/strict";
import { describe, test } from "node:test";
import {
  compareCalendarDates,
  formatDate,
  isFutureDate,
  parseDateInput,
  toDateInputValue,
} from "./date-input.js";

describe("parseDateInput", () => {
  test("lee el formato del input nativo sin pasar por Date", () => {
    assert.deepEqual(parseDateInput("1990-04-15"), { year: 1990, month: 4, day: 15 });
  });

  test("no corre el día hacia atrás como haría new Date en husos al oeste", () => {
    // El bug clásico: new Date("2000-01-01") es medianoche UTC, que en Caracas
    // es el 31 de diciembre.
    assert.deepEqual(parseDateInput("2000-01-01"), { year: 2000, month: 1, day: 1 });
  });

  test("rechaza cualquier cosa que no tenga el formato exacto", () => {
    for (const value of ["", "15/04/1990", "1990-4-15", "1990-04-15T00:00", "abc"]) {
      assert.equal(parseDateInput(value), null, `debería rechazar "${value}"`);
    }
  });
});

describe("toDateInputValue", () => {
  test("rellena mes y día a dos dígitos", () => {
    assert.equal(toDateInputValue({ year: 2001, month: 2, day: 3 }), "2001-02-03");
    assert.equal(toDateInputValue({ year: 1999, month: 12, day: 31 }), "1999-12-31");
  });

  test("es la inversa de parseDateInput", () => {
    const dates = [
      { year: 1990, month: 4, day: 15 },
      { year: 2000, month: 1, day: 1 },
      { year: 2024, month: 2, day: 29 },
    ];
    for (const date of dates) {
      assert.deepEqual(parseDateInput(toDateInputValue(date)), date);
    }
  });
});

describe("compareCalendarDates", () => {
  test("ordena por año, luego mes, luego día", () => {
    const base = { year: 2000, month: 6, day: 15 };
    assert.ok(compareCalendarDates({ year: 1999, month: 12, day: 31 }, base) < 0);
    assert.ok(compareCalendarDates({ year: 2000, month: 5, day: 31 }, base) < 0);
    assert.ok(compareCalendarDates({ year: 2000, month: 6, day: 14 }, base) < 0);
    assert.equal(compareCalendarDates(base, base), 0);
    assert.ok(compareCalendarDates({ year: 2000, month: 6, day: 16 }, base) > 0);
    assert.ok(compareCalendarDates({ year: 2000, month: 7, day: 1 }, base) > 0);
  });
});

describe("formatDate", () => {
  test("agosto no se muestra como julio en husos al oeste de UTC", () => {
    const formatted = formatDate({ year: 1992, month: 8, day: 31 });
    assert.match(formatted, /agosto/i);
    assert.doesNotMatch(formatted, /julio/i);
    assert.equal(formatted, "31 de agosto de 1992");
  });

  test("enero y diciembre en los extremos del calendario", () => {
    assert.equal(formatDate({ year: 2000, month: 1, day: 1 }), "1 de enero de 2000");
    assert.equal(formatDate({ year: 1999, month: 12, day: 31 }), "31 de diciembre de 1999");
  });
});

describe("isFutureDate", () => {
  const today = { year: 2026, month: 8, day: 22 };

  test("hoy no cuenta como futuro", () => {
    assert.equal(isFutureDate(today, today), false);
  });

  test("detecta el futuro por día, mes y año", () => {
    assert.equal(isFutureDate({ year: 2026, month: 8, day: 23 }, today), true);
    assert.equal(isFutureDate({ year: 2026, month: 9, day: 1 }, today), true);
    assert.equal(isFutureDate({ year: 2030, month: 1, day: 1 }, today), true);
  });

  test("el pasado nunca es futuro", () => {
    assert.equal(isFutureDate({ year: 2026, month: 8, day: 21 }, today), false);
    assert.equal(isFutureDate({ year: 1990, month: 4, day: 15 }, today), false);
  });
});
