import type { Metadata } from "next";
import { BackHome } from "@/components/back-home";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { Starfield } from "@/components/starfield";

export const metadata: Metadata = {
  title: "Escríbenos",
  description:
    "Escríbenos por correo o WhatsApp, deja un comentario o suscríbete para promociones y ofertas.",
};

export default function ContactPage() {
  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <Starfield />
      <BackHome />
      <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
        Enumerarte
      </p>
      <ContactSection />
      <SiteFooter className="mt-12" />
    </main>
  );
}
