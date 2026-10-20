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

  let y = 320;
  y = drawLines(ctx, card.kicker, y, {
    font: "400 40px Geist, ui-sans-serif, system-ui",
    color: "#e7e4f4",
    maxWidth: 860,
    lineHeight: 54,
    maxLines: 3,
  });

  const centerY = y + 210;
  if (card.right) {
    drawGlyph(ctx, WIDTH / 2 - 220, centerY, card.left);
    drawGlyph(ctx, WIDTH / 2 + 220, centerY, card.right);
    ctx.fillStyle = "rgba(244,242,255,0.45)";
    ctx.font = "300 64px Geist, ui-sans-serif, system-ui";
    ctx.textBaseline = "middle";
    ctx.fillText("·", WIDTH / 2, centerY);
  } else {
    drawGlyph(ctx, WIDTH / 2, centerY, card.left);
  }

  y = centerY + 250;
  y = drawLines(ctx, card.message, y, {
    font: "500 64px Geist, ui-sans-serif, system-ui",
    color: "#f4f2ff",
    maxWidth: 880,
    lineHeight: 80,
    maxLines: 4,
  });

  if (card.detail) {
    y += 24;
    drawLines(ctx, card.detail, y, {
      font: "400 34px Geist, ui-sans-serif, system-ui",
      color: "#b7b3c9",
      maxWidth: 860,
      lineHeight: 48,
      maxLines: 4,
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

function drawLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  top: number,
  options: {
    font: string;
    color: string;
    maxWidth: number;
    lineHeight: number;
    maxLines: number;
  },
): number {
  ctx.font = options.font;
  ctx.fillStyle = options.color;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  let fit = 0;

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= options.maxWidth) {
      current = next;
      fit += 1;
      continue;
    }
    if (lines.length === options.maxLines - 1) {
      current = current ? `${current}…` : `${word}…`;
      fit = words.length;
      break;
    }
    if (current) lines.push(current);
    current = word;
    fit += 1;
  }

  if (current && lines.length < options.maxLines) lines.push(current);
  if (fit < words.length && lines.length > 0) {
    const last = lines[lines.length - 1] ?? "";
    lines[lines.length - 1] = last.endsWith("…") ? last : `${last}…`;
  }

  lines.forEach((line, index) => {
    ctx.fillText(line, WIDTH / 2, top + index * options.lineHeight);
  });

  return top + lines.length * options.lineHeight;
}
