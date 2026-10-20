"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  depth: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

/** Cielo de fondo. El puntero lo desplaza y un clic suelta chispas, sin tapar la página. */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const surface: HTMLCanvasElement = canvas;
    const pen: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.5, y: 0.5 };
    let stars: Star[] = [];
    let sparks: Spark[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      surface.width = Math.floor(width * ratio);
      surface.height = Math.floor(height * ratio);
      pen.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(180, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.012 + 0.004,
        depth: Math.random() * 0.85 + 0.15,
      }));
    }

    function paint() {
      pen.clearRect(0, 0, width, height);
      const shiftX = (pointer.x - 0.5) * 28;
      const shiftY = (pointer.y - 0.5) * 18;

      for (const star of stars) {
        if (!reduce) {
          star.alpha += star.speed;
          if (star.alpha > 1 || star.alpha < 0.15) star.speed = -star.speed;
        }
        pen.fillStyle = `rgba(244, 242, 255, ${Math.abs(star.alpha)})`;
        pen.beginPath();
        pen.arc(
          star.x + shiftX * star.depth,
          star.y + shiftY * star.depth,
          star.size,
          0,
          Math.PI * 2,
        );
        pen.fill();
      }

      sparks = sparks.filter((spark) => spark.alpha > 0);
      for (const spark of sparks) {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.alpha -= 0.02;
        pen.globalAlpha = Math.max(spark.alpha, 0);
        pen.fillStyle = "#f5a524";
        pen.beginPath();
        pen.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        pen.fill();
        pen.globalAlpha = 1;
      }

      if (!reduce) frame = requestAnimationFrame(paint);
    }

    function onMove(event: PointerEvent) {
      pointer.x = event.clientX / window.innerWidth;
      pointer.y = event.clientY / window.innerHeight;
    }

    function onDown(event: PointerEvent) {
      if (reduce) return;
      for (let index = 0; index < 8; index += 1) {
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          vx: (Math.random() - 0.5) * 3.2,
          vy: (Math.random() - 0.5) * 3.2,
          size: Math.random() * 1.8 + 0.6,
          alpha: 1,
        });
      }
    }

    resize();
    paint();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[#07060f]">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
