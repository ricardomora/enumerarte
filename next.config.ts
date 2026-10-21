import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Cabeceras de una revisión de anuncios.
 *
 * El script de AdSense ya está en el layout. script-src, connect-src y
 * frame-src nombran solo los dominios que ese script necesita.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline'",
    isDev ? "'unsafe-eval'" : "",
    "https://pagead2.googlesyndication.com",
    "https://www.googletagservices.com",
    "https://adservice.google.com",
    "https://partner.googleadservices.com",
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://pagead2.googlesyndication.com https://www.google.com",
  "font-src 'self'",
  [
    "connect-src 'self'",
    "https://pagead2.googlesyndication.com",
    "https://googleads.g.doubleclick.net",
    "https://adservice.google.com",
    "https://ep1.adtrafficquality.google",
    isDev ? "ws: wss:" : "",
  ]
    .filter(Boolean)
    .join(" "),
  "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
