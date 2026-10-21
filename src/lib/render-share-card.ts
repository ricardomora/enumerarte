import type { ShareCardData } from "@/lib/share";

const WIDTH = 1080;
const HEIGHT = 1920;

const STARS = [
  [80, 120, 2],
  [180, 260, 1.4],
  [320, 90, 1.8],
  [470, 210, 1.2],
  [640, 70, 2],
  [820, 180, 1.5],
  [960, 110, 1.8],
  [120, 480, 1.3],
  [900, 420, 1.6],
  [70, 900, 1.5],
  [1000, 860, 1.4],
  [200, 1400, 1.3],
  [860, 1500, 1.6],
  [140, 1700, 1.8],
  [940, 1740, 1.4],
  [540, 460, 1.2],
] as const;

/**
 * Tarjeta vertical para historias y chats. Se dibuja en el dispositivo:
 * los nombres no salen hacia un servidor ni quedan cacheados en una CDN.
 */
export async function renderShareCard(card: ShareCardData): Promise<Blob> {
  await document.fonts.ready;

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No se pudo preparar la imagen.");

  ctx.fillStyle = "#07060f";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (const [x, y, radius] of STARS) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(244,242,255,0.75)";
    ctx.fill();
  }

  const glow = ctx.createRadialGradient(WIDTH / 2, 860, 40, WIDTH / 2, 860, 520);
  glow.addColorStop(0, "rgba(245,165,36,0.16)");
  glow.addColorStop(1, "rgba(245,165,36,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.textAlign = "center";
  ctx.fillStyle = "#c4b5fd";
  ctx.font = "500 28px Geist, ui-sans-serif, system-ui";
  ctx.letterSpacing = "10px";
  ctx.fillText("ENUMERARTE", WIDTH / 2, 220);
  ctx.letterSpacing = "0px";

  const footer = HEIGHT - 180;
  let y = 320;
  y = drawFitted(ctx, card.kicker, y, y + 170, {
    size: 40,
    min: 32,
    weight: "400",
    color: "#e7e4f4",
    maxWidth: 860,
  });

  if (card.map) {
    y += 28;
    y = drawShareMap(ctx, card.map, y);
  } else {
    const centerY = y + 190;
    if (card.right) {
      drawGlyph(ctx, WIDTH / 2 - 220, centerY, card.left);
      drawGlyph(ctx, WIDTH / 2 + 220, centerY, card.right);
      ctx.fillStyle = "rgba(244,242,255,0.45)";
      ctx.font = "300 64px Geist, ui-sans-serif, system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("·", WIDTH / 2, centerY);
    } else {
      drawGlyph(ctx, WIDTH / 2, centerY, card.left);
    }
    y = centerY + 230;
  }

  y += 36;
  y = drawFitted(ctx, card.message, y, Math.min(footer, y + 56 * 1.4 * 3), {
    size: card.map ? 48 : 56,
    min: 36,
    weight: "500",
    color: "#f4f2ff",
    maxWidth: 880,
  });

  if (card.detail) {
    y += 28;
    drawFitted(ctx, card.detail, y, footer, {
      size: 32,
      min: 24,
      weight: "400",
      color: "#b7b3c9",
      maxWidth: 880,
    });
  }

  ctx.fillStyle = "#8d89a3";
  ctx.font = "400 30px Geist, ui-sans-serif, system-ui";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("enumerarte.com", WIDTH / 2, HEIGHT - 140);

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/png");
  });
  if (!blob) throw new Error("No se pudo preparar la imagen.");
  return blob;
}

function drawGlyph(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  glyph: ShareCardData["left"],
) {
  const master = glyph.value > 9;
  const ring = master ? "#f5a524" : "#c084fc";
  const ink = master ? "#f8d48a" : "#f3e8ff";

  ctx.beginPath();
  ctx.arc(cx, cy, 118, 0, Math.PI * 2);
  ctx.fillStyle = master ? "rgba(245,165,36,0.14)" : "rgba(168,85,247,0.16)";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = ring;
  ctx.stroke();

  ctx.fillStyle = ink;
  ctx.font = "300 96px 'Geist Mono', ui-monospace, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(glyph.value), cx, cy + 4);

  ctx.fillStyle = ring;
  ctx.font = "500 30px Geist, ui-sans-serif, system-ui";
  ctx.textBaseline = "top";
  ctx.fillText(glyph.label, cx, cy + 146);
}

function drawShareMap(
  ctx: CanvasRenderingContext2D,
  map: NonNullable<ShareCardData["map"]>,
  top: number,
): number {
  const topCy = top + 210;
  const bottomCy = topCy + 340;
  const xs = branchXs(map.bottom.length);

  map.bottom.forEach((node, index) => {
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, topCy);
    ctx.lineTo(xs[index] ?? WIDTH / 2, bottomCy);
    ctx.strokeStyle = node.color;
    ctx.globalAlpha = 0.85;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.globalAlpha = 1;
  });

  drawMapNode(ctx, WIDTH / 2, topCy, map.top, 92, "above");
  map.bottom.forEach((node, index) => {
    drawMapNode(ctx, xs[index] ?? WIDTH / 2, bottomCy, node, 74, "below");
  });

  return bottomCy + 74 + 150;
}

/** Reparte las ramas en el ancho de la tarjeta. Tres nodos quedan en 200, 540 y 880. */
function branchXs(count: number): number[] {
  if (count <= 1) return [WIDTH / 2];
  const left = 200;
  const right = 880;
  return Array.from({ length: count }, (_, index) =>
    Math.round(left + ((right - left) * index) / (count - 1)),
  );
}

function drawMapNode(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  node: NonNullable<ShareCardData["map"]>["top"],
  radius: number,
  labelSide: "above" | "below",
) {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = hexAlpha(node.color, 0.16);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = node.color;
  ctx.stroke();

  ctx.fillStyle = "#f4f2ff";
  ctx.font = `300 ${Math.round(radius * 0.72)}px 'Geist Mono', ui-monospace, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, cx, cy + 2);

  ctx.font = "500 26px Geist, ui-sans-serif, system-ui";
  const title = wrapParagraphs(ctx, node.label, 230, 2).lines;
  ctx.font = "400 20px Geist, ui-sans-serif, system-ui";
  const subtitle = wrapParagraphs(ctx, node.subtitle, 230, 2).lines;

  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  if (labelSide === "above") {
    let labelY = cy - radius - 18 - title.length * 32 - subtitle.length * 26;
    ctx.fillStyle = node.color;
    ctx.font = "500 26px Geist, ui-sans-serif, system-ui";
    for (const line of title) {
      ctx.fillText(line, cx, labelY);
      labelY += 32;
    }
    ctx.fillStyle = "#b7b3c9";
    ctx.font = "400 20px Geist, ui-sans-serif, system-ui";
    for (const line of subtitle) {
      ctx.fillText(line, cx, labelY);
      labelY += 26;
    }
    return;
  }

  let labelY = cy + radius + 16;
  ctx.fillStyle = node.color;
  ctx.font = "500 26px Geist, ui-sans-serif, system-ui";
  for (const line of title) {
    ctx.fillText(line, cx, labelY);
    labelY += 32;
  }
  ctx.fillStyle = "#b7b3c9";
  ctx.font = "400 20px Geist, ui-sans-serif, system-ui";
  for (const line of subtitle) {
    ctx.fillText(line, cx, labelY);
    labelY += 26;
  }
}

function drawFitted(
  ctx: CanvasRenderingContext2D,
  text: string,
  top: number,
  bottom: number,
  options: {
    size: number;
    min: number;
    weight: string;
    color: string;
    maxWidth: number;
  },
): number {
  let size = options.size;
  while (size >= options.min) {
    const lineHeight = Math.round(size * 1.4);
    const maxLines = Math.max(1, Math.floor((bottom - top) / lineHeight));
    ctx.font = `${options.weight} ${size}px Geist, ui-sans-serif, system-ui`;
    const wrapped = wrapParagraphs(ctx, text, options.maxWidth, maxLines);
    if (wrapped.complete || size <= options.min) {
      if (!wrapped.complete && wrapped.lines.length > 0) {
        const last = wrapped.lines.length - 1;
        const line = wrapped.lines[last] ?? "";
        if (line.length > 0 && !line.endsWith("…")) wrapped.lines[last] = `${line}…`;
      }
      ctx.font = `${options.weight} ${size}px Geist, ui-sans-serif, system-ui`;
      ctx.fillStyle = options.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      wrapped.lines.forEach((line, index) => {
        if (line.length > 0) ctx.fillText(line, WIDTH / 2, top + index * lineHeight);
      });
      return top + wrapped.lines.length * lineHeight;
    }
    size -= 2;
  }
  return top;
}

function wrapParagraphs(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number,
): { lines: string[]; complete: boolean } {
  const paragraphs = text.split("\n");
  const lines: string[] = [];

  const push = (line: string) => {
    if (lines.length >= maxLines) return false;
    lines.push(line);
    return true;
  };

  for (let index = 0; index < paragraphs.length; index += 1) {
    const words = paragraphs[index]?.trim().split(/\s+/).filter(Boolean) ?? [];
    if (words.length === 0) {
      if (index > 0 && index < paragraphs.length - 1 && !push("")) {
        return { lines, complete: false };
      }
      continue;
    }

    let current = "";
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (ctx.measureText(next).width <= maxWidth || current.length === 0) {
        current = next;
        continue;
      }
      if (!push(current)) return { lines, complete: false };
      current = word;
    }
    if (current && !push(current)) return { lines, complete: false };
  }

  return { lines, complete: true };
}

function hexAlpha(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${red},${green},${blue},${alpha})`;
}
