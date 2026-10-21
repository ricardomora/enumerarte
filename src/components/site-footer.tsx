import Link from "next/link";
import { footerLinks, siteDisclaimer } from "@/content/legal";

export function SiteFooter({ note, className = "mt-8" }: { note: string; className?: string }) {
  return (
    <footer
      className={`${className} space-y-3 pb-6 text-center text-xs leading-relaxed text-mist-500`}
    >
      <p>{note}</p>
      <p>{siteDisclaimer}</p>
      <nav aria-label="Pie" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {footerLinks.map((link) => (
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
