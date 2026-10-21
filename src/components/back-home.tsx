"use client";

import Link from "next/link";
import { useUi } from "@/components/locale-provider";

export function BackHome() {
  const ui = useUi();

  return (
    <Link
      href="/"
      className="mb-6 inline-flex w-fit items-center gap-1.5 text-sm text-mist-300 transition hover:text-mist-100"
    >
      <ArrowLeft title={ui.back} />
      {ui.backHome}
    </Link>
  );
}

function ArrowLeft({ title }: { title: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="none">
      <title>{title}</title>
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
