import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/content/contact";

/** Abre el correo de la persona con el asunto y, si hay, el mensaje ya escrito. */
export function mailTo(subject: string, body = ""): string {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body.trim()) params.set("body", body.trim());
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

/** Chat de WhatsApp. El texto inicial es opcional. */
export function whatsAppLink(text = ""): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text.trim()) return base;
  return `${base}?text=${encodeURIComponent(text.trim())}`;
}
