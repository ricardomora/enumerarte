"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * Registra la llegada desde un enlace compartido.
 *
 * Junto con `share_clicked` cierra la medición del bucle viral: cuántas lecturas
 * se comparten y cuántas visitas genera cada una. Ese cociente es el factor de
 * propagación, y sin él no se puede saber si el crecimiento orgánico existe.
 */
export function ShareArrival({ pair }: { pair: string }) {
  useEffect(() => {
    track("share_opened", { pair });
  }, [pair]);

  return null;
}
