"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useUi } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const ui = useUi();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-16">
      <h1 className="text-2xl font-medium text-mist-100">{ui.errorTitle}</h1>
      <p className="mt-3 text-sm leading-relaxed text-mist-300">{ui.errorBody}</p>
      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-medium text-white"
        >
          {ui.retry}
        </button>
        <Link
          href="/"
          className="text-sm text-mist-100 underline decoration-ink-600 underline-offset-4"
        >
          {ui.backHome}
        </Link>
      </div>
      <SiteFooter className="mt-12" />
    </main>
  );
}
