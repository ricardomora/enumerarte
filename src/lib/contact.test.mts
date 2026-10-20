import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "../content/contact.js";
import { mailTo, whatsAppLink } from "./contact.js";

describe("mailTo", () => {
  test("escribe a la bandeja de la app", () => {
    assert.ok(mailTo("Hola").startsWith(`mailto:${CONTACT_EMAIL}?`));
  });

  test("lleva el asunto y el comentario", () => {
    const href = mailTo("Comentario sobre Enumerarte", "Me gustó el mapa");
    const url = new URL(href);
    assert.equal(url.searchParams.get("subject"), "Comentario sobre Enumerarte");
    assert.equal(url.searchParams.get("body"), "Me gustó el mapa");
  });

  test("omite el cuerpo cuando no hay mensaje", () => {
    assert.equal(new URL(mailTo("Novedades")).searchParams.get("body"), null);
  });
});

describe("whatsAppLink", () => {
  test("abre el número de la app", () => {
    assert.equal(whatsAppLink(), `https://wa.me/${WHATSAPP_NUMBER}`);
  });

  test("puede llevar un mensaje inicial", () => {
    const href = whatsAppLink("Hola");
    assert.ok(href.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`));
    assert.equal(new URL(href).searchParams.get("text"), "Hola");
  });
});
