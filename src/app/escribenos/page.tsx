import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { Starfield } from "@/components/starfield";

export const metadata: Metadata = {
  title: "Escríbenos · Enumerarte",
  description:
    "Escríbenos por correo o WhatsApp, deja un comentario o suscríbete para promociones y ofertas.",
};

export default function ContactPage() {
  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <Starfield />
      <Link
        href="/"
        className="mb-6 inline-flex w-fit items-center gap-1.5 text-sm text-mist-300 transition hover:text-mist-100"
      >
        <ArrowLeft />
        Volver al inicio
      </Link>
      <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
        Enumerarte
      </p>
      <ContactSection />
    </main>
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none">
      <title>Volver</title>
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
