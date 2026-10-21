import assert from "node:assert/strict";
import { test } from "node:test";
import { createRateLimiter, redactProperties } from "./request-guard.js";

test("el límite deja pasar hasta el cupo y después cierra la ventana", () => {
  let now = 1_000;
  const allow = createRateLimiter(() => now);

  assert.equal(allow("1.1.1.1", 2, 1_000), true);
  assert.equal(allow("1.1.1.1", 2, 1_000), true);
  assert.equal(allow("1.1.1.1", 2, 1_000), false);
  assert.equal(allow("8.8.8.8", 2, 1_000), true);

  now = 2_100;
  assert.equal(allow("1.1.1.1", 2, 1_000), true);
});

test("los eventos no conservan correo, nombre ni fecha", () => {
  const clean = redactProperties({
    path: "/ejemplo",
    mision: 6,
    hasName: true,
    email: "persona@ejemplo.com",
    name: "Elena",
    birthDate: "1990-04-15",
    note: "escribe a persona@ejemplo.com",
  });

  assert.deepEqual(clean, { path: "/ejemplo", mision: 6, hasName: true });
});
