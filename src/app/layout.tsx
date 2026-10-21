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
  applicationName: "Enumerarte",
  title: {
    default: "Enumerarte · Tu mapa y tus vínculos",
    template: "%s · Enumerarte",
  },
  description:
    "Descubre tu Camino de Vida, tu Personalidad, tu Alma y tu Expresión. Entiende la conexión con tu pareja, familia y amigos.",
  openGraph: {
    title: "Enumerarte",
    description: "Tu mapa. Tus vínculos. Tus señales.",
    locale: "es_ES",
    type: "website",
    siteName: "Enumerarte",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enumerarte",
    description: "Tu mapa. Tus vínculos. Tus señales.",
  },
  robots: {
    index: true,
    follow: true,
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
