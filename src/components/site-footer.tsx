"use client";

import Link from "next/link";
import { useUi } from "@/components/locale-provider";

export function SiteFooter({
  note = "brand",
  className = "mt-8",
}: {
  note?: "home" | "brand" | "pair";
  className?: string;
}) {
  const ui = useUi();
  const text = note === "home" ? ui.homeNote : note === "pair" ? ui.pairNote : ui.brand;

  return (
    <footer
      className={`${className} space-y-3 pb-6 text-center text-xs leading-relaxed text-mist-500`}
    >
      <p>{text}</p>
      <p>{ui.disclaimer}</p>
      <nav
        aria-label={ui.footerLabel}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
      >
        {ui.footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-mist-300 underline decoration-ink-600 underline-offset-4 transition hover:text-mist-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
