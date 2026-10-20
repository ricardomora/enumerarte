import Link from "next/link";

export function SiteFooter({ note, className = "mt-8" }: { note: string; className?: string }) {
  return (
    <footer
      className={`${className} space-y-3 pb-6 text-center text-xs leading-relaxed text-mist-500`}
    >
      <p>{note}</p>
      <Link
        href="/escribenos"
        className="inline-block text-sm text-mist-300 underline decoration-ink-600 underline-offset-4 transition hover:text-mist-100"
      >
        Escríbenos
      </Link>
    </footer>
  );
}
