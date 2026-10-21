import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { allPairKeys, parsePairKey } from "./numerology/index.js";
import {
  buildPairPath,
  clipShareLine,
  publicShareUrl,
  sanitizeShareName,
  shareCaption,
  shareMessage,
  shareTargets,
} from "./share.js";

describe("sanitizeShareName", () => {
  test("conserva letras acentuadas y la ñ", () => {
    assert.equal(sanitizeShareName("José"), "José");
    assert.equal(sanitizeShareName("Begoña"), "Begoña");
  });

  test("quita todo lo que no sea letra, espacio, guion o apóstrofo", () => {
    assert.equal(sanitizeShareName("Ana <script>"), "Ana script");
    assert.equal(sanitizeShareName("Ana123"), "Ana");
    assert.equal(sanitizeShareName("Ana&b=Otro"), "AnabOtro");
  });

  test("colapsa espacios y recorta", () => {
    assert.equal(sanitizeShareName("  María   José  "), "María José");
  });

  test("acota la longitud para no romper el diseño ni el enlace", () => {
    assert.equal(sanitizeShareName("A".repeat(200)).length, 24);
  });
});

describe("buildPairPath", () => {
  test("usa la clave canónica", () => {
    assert.equal(buildPairPath(11, 8), "/par/8x11");
    assert.equal(buildPairPath(8, 11), "/par/8x11");
  });

  test("asocia los nombres al orden canónico, no al de entrada", () => {
    // Ricardo es 11 y Ana es 8. La clave canónica pone el 8 primero, así que
    // Ana tiene que quedar en el parámetro `a` en ambos casos.
    const desdeRicardo = buildPairPath(11, 8, { a: "Ricardo", b: "Ana" });
    const desdeAna = buildPairPath(8, 11, { a: "Ana", b: "Ricardo" });
    assert.equal(desdeRicardo, desdeAna);
    assert.equal(desdeRicardo, "/par/8x11?a=Ana&b=Ricardo");
  });

  test("omite los nombres vacíos en lugar de dejar parámetros sueltos", () => {
    assert.equal(buildPairPath(5, 5, { a: "", b: "" }), "/par/5x5");
    assert.equal(buildPairPath(5, 6, { a: "Ana" }), "/par/5x6?a=Ana");
  });

  test("nunca deja pasar una fecha de nacimiento a la URL", () => {
    const path = buildPairPath(11, 8, { a: "Ricardo 1990-04-15", b: "Ana" });
    assert.ok(!/\d/.test(path.split("?")[1] ?? ""), `la URL contiene dígitos: ${path}`);
  });

  test("toda ruta generada es una que la página sabe servir", () => {
    const known = new Set(allPairKeys().map((key) => `/par/${key}`));
    for (const key of allPairKeys()) {
      const [a, b] = key.split("x").map(Number);
      const path = buildPairPath(a as never, b as never);
      assert.ok(known.has(path), `ruta desconocida: ${path}`);
      assert.equal(parsePairKey(path.replace("/par/", ""))?.canonical, key);
    }
  });
});

describe("shareTargets", () => {
  const url = "https://enumerarte.com/par/8x11?a=Ana&b=Ricardo";
  const text = "Mira lo que dice de Ricardo y Ana.";

  test("incluye WhatsApp con el texto y el enlace juntos", () => {
    const whatsapp = shareTargets(url, text).find((target) => target.id === "whatsapp");
    assert.ok(whatsapp);
    assert.ok(whatsapp.href.startsWith("https://wa.me/?text="));
    assert.ok(whatsapp.href.includes(encodeURIComponent(url)));
  });

  test("todos los destinos producen URLs absolutas y válidas", () => {
    for (const target of shareTargets(url, text)) {
      assert.doesNotThrow(() => new URL(target.href), `URL inválida en ${target.id}`);
    }
  });

  test("el enlace compartido va codificado, así que sus parámetros no se filtran", () => {
    for (const target of shareTargets(url, text)) {
      if (target.id === "email") continue;
      assert.ok(!target.href.includes("?a=Ana"), `${target.id} no codificó la URL`);
    }
  });
});

describe("shareMessage", () => {
  test("usa los nombres cuando existen", () => {
    assert.equal(shareMessage("Ricardo", "Ana"), "Mira lo que dice de Ricardo y Ana.");
  });

  test("cae a una versión sin nombres, no a un texto roto", () => {
    assert.equal(shareMessage("", ""), "Mira lo que dice de nosotros dos.");
    assert.equal(shareMessage("Ricardo", ""), "Mira lo que dice de nosotros dos.");
  });

  test("nunca dice 'únete', porque la invitación es contenido y no registro", () => {
    assert.ok(!shareMessage("Ricardo", "Ana").toLowerCase().includes("únete"));
  });
});

describe("clipShareLine", () => {
  test("se queda con la primera frase", () => {
    assert.equal(clipShareLine("Sienten mucho. Después se agotan."), "Sienten mucho.");
  });

  test("acota una frase larga sin cortar a mitad de palabra", () => {
    const line = clipShareLine("palabra ".repeat(40), 40);
    assert.ok(line.length <= 40);
    assert.ok(line.endsWith("…"));
  });
});

describe("shareCaption", () => {
  const card = {
    kicker: "Ana te comparte su conexión con Ricardo",
    message: "Sensibilidad extrema",
    left: { value: 11 as const, label: "Ana" },
    right: { value: 33 as const, label: "Ricardo" },
  };

  test("en local no pega el enlace, porque no se puede abrir desde otro teléfono", () => {
    assert.equal(
      shareCaption(card, "http://localhost:3000/par/11x33?a=Ana&b=Ricardo"),
      "Ana te comparte su conexión con Ricardo\nSensibilidad extrema",
    );
    assert.equal(publicShareUrl("http://127.0.0.1:3000/par/11x33"), "");
  });

  test("con dominio público suma el enlace para que puedan abrirlo", () => {
    const caption = shareCaption(card, "https://enumerarte.com/par/11x33?a=Ana&b=Ricardo");
    assert.ok(caption.endsWith("https://enumerarte.com/par/11x33?a=Ana&b=Ricardo"));
  });

  test("incluye el texto completo de la sección", () => {
    const caption = shareCaption(
      { ...card, detail: "Primera frase. Segunda frase." },
      "http://localhost:3000/par/11x33",
    );
    assert.equal(
      caption,
      "Ana te comparte su conexión con Ricardo\nSensibilidad extrema\nPrimera frase. Segunda frase.",
    );
  });
});
