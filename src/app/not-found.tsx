"use client";

import Link from "next/link";
import { useUi } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  const ui = useUi();

  return (
    <main className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-16">
      <h1 className="text-2xl font-medium text-mist-100">{ui.notFoundTitle}</h1>
      <p className="mt-3 text-sm leading-relaxed text-mist-300">{ui.notFoundBody}</p>
      <Link
        href="/"
        className="mt-6 inline-flex w-fit text-sm text-mist-100 underline decoration-ink-600 underline-offset-4"
      >
        {ui.backHome}
      </Link>
      <SiteFooter className="mt-12" />
    </main>
  );
}
