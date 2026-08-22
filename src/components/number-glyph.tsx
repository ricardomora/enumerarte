import type { NumerologyValue } from "@/lib/numerology";

const SIZES = {
  lg: "size-24 text-4xl sm:size-28 sm:text-5xl",
  sm: "size-14 text-xl",
} as const;

export function NumberGlyph({
  value,
  size = "lg",
  label,
}: {
  value: NumerologyValue;
  size?: keyof typeof SIZES;
  label?: string;
}) {
  const isMaster = value > 9;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        aria-hidden
        className={`grid place-items-center rounded-full border font-mono font-light tabular-nums ${
          SIZES[size]
        } ${
          isMaster
            ? "border-glow-400/50 bg-glow-400/10 text-glow-300"
            : "border-accent-400/40 bg-accent-500/10 text-accent-400"
        }`}
      >
        {value}
      </div>
      {label ? (
        <span className="max-w-28 truncate text-center text-xs text-mist-500">{label}</span>
      ) : null}
    </div>
  );
}
