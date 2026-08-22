import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: "Enumerarte · Entender a los tuyos, sin adivinación",
  description:
    "Un lenguaje compartido para hablar de por qué chocas con tu pareja, tu familia o tu jefe. Aritmética a la vista, consejo basado en comunicación real y sin necesidad de registro.",
  openGraph: {
    title: "Enumerarte",
    description: "Entender a alguien es más útil que adivinar su futuro.",
    locale: "es_ES",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
