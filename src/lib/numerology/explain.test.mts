import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { explainMision, explainReduction } from "./explain.js";
import { computeMision } from "./profile.js";
import { reduce } from "./reduce.js";

const LABELS = { day: "Día", month: "Mes", year: "Año" };

describe("explainReduction", () => {
  test("no produce pasos si la entrada ya es un dígito", () => {
    assert.deepEqual(explainReduction(7), []);
  });

  test("no produce pasos si la entrada ya es un maestro", () => {
    assert.deepEqual(explainReduction(11), []);
    assert.deepEqual(explainReduction(22), []);
  });

  test("se detiene en el maestro sin repetirlo como paso extra", () => {
    const steps = explainReduction(29);
    assert.equal(steps.length, 1);
    assert.deepEqual(steps[0], { expression: "2 + 9", result: 11, stoppedAtMaster: true });
  });

  test("encadena los pasos cuando el intermedio no es maestro", () => {
    assert.deepEqual(explainReduction(48), [
      { expression: "4 + 8", result: 12, stoppedAtMaster: false },
      { expression: "1 + 2", result: 3, stoppedAtMaster: false },
    ]);
  });

  test("las expresiones nunca se repiten, así que sirven como clave de render", () => {
    for (let n = 1; n <= 2000; n += 1) {
      const expressions = explainReduction(n).map((step) => step.expression);
      assert.equal(new Set(expressions).size, expressions.length, `claves repetidas en n=${n}`);
    }
  });

  test("el último paso coincide con lo que devuelve reduce", () => {
    for (let n = 10; n <= 2000; n += 1) {
      const steps = explainReduction(n);
      const last = steps.at(-1);
      assert.equal(last ? last.result : n, reduce(n), `divergió en n=${n}`);
    }
  });
});

describe("explainMision", () => {
  test("desglosa los tres componentes de la fecha", () => {
    const explanation = explainMision({ day: 15, month: 4, year: 1990 }, LABELS);
    assert.deepEqual(
      explanation.parts.map((part) => [part.source, part.total]),
      [
        [15, 6],
        [4, 4],
        [1990, 19],
      ],
    );
    assert.equal(explanation.initialTotal, 29);
    assert.equal(explanation.result, 11);
  });

  test("el resultado explicado siempre coincide con computeMision", () => {
    const dates = [
      { day: 1, month: 1, year: 2000 },
      { day: 9, month: 9, year: 2002 },
      { day: 29, month: 2, year: 2000 },
      { day: 31, month: 12, year: 1987 },
      { day: 7, month: 7, year: 1977 },
    ];
    for (const date of dates) {
      assert.equal(
        explainMision(date, LABELS).result,
        computeMision(date),
        `divergió en ${date.day}/${date.month}/${date.year}`,
      );
    }
  });

  test("una fecha que ya suma un maestro no genera pasos de reducción", () => {
    const explanation = explainMision({ day: 9, month: 9, year: 2002 }, LABELS);
    assert.equal(explanation.initialTotal, 22);
    assert.deepEqual(explanation.steps, []);
    assert.equal(explanation.result, 22);
  });
});
