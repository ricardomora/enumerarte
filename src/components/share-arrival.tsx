"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackOnce } from "@/lib/track";

/**
 * Registra la llegada desde un enlace compartido.
 *
 * Junto con `share_clicked` cierra la medición del bucle viral: cuántas lecturas
 * se comparten y cuántas visitas genera cada una. Ese cociente es el factor de
 * propagación, y sin él no se puede saber si el crecimiento orgánico existe.
 */
export function ShareArrival({ pair }: { pair: string }) {
  useEffect(() => {
    trackOnce("share_opened", { pair }, `share_opened:${pair}`);
  }, [pair]);

  return null;
}

export function ShareContinueLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href="/" className={className} onClick={() => trackOnce("share_continued")}>
      {children}
    </Link>
  );
}
