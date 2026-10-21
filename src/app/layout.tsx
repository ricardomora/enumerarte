import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";
import { LanguageToggle } from "@/components/language-toggle";
import { LocaleProvider } from "@/components/locale-provider";
import { LOCALE_COOKIE, localeTag, parseLocale } from "@/lib/locale";
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
  other: {
    "google-adsense-account": "ca-pub-2441767122964967",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a14",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const jar = await cookies();
  const locale = parseLocale(jar.get(LOCALE_COOKIE)?.value);

  return (
    <html
      lang={localeTag(locale)}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2441767122964967"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <LocaleProvider initialLocale={locale}>
          <div className="sticky top-0 z-40 bg-ink-950/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-2xl justify-end px-5 py-3">
              <LanguageToggle />
            </div>
          </div>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
