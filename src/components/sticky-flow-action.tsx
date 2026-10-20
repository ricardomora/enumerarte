"use client";

interface StickyFlowActionProps {
  label: string;
  hint?: string;
  tone?: "accent" | "gold";
  onClick: () => void;
}

export function StickyFlowAction({ label, hint, tone = "accent", onClick }: StickyFlowActionProps) {
  const buttonClass =
    tone === "gold"
      ? "bg-[#f5a524] text-[#1a1206] shadow-[0_8px_32px_rgba(245,165,36,0.45)] hover:bg-[#f8d48a]"
      : "bg-accent-500 text-white shadow-[0_8px_32px_rgba(124,92,255,0.35)] hover:bg-accent-400";

  return (
    <div className="sticky bottom-0 -mx-5 border-t border-ink-700/80 bg-ink-950/90 px-5 py-4 backdrop-blur-md sm:-mx-7">
      {hint ? <p className="mb-2 text-center text-xs text-mist-500">{hint}</p> : null}
      <button
        type="button"
        onClick={onClick}
        className={`w-full rounded-xl px-5 py-3.5 text-sm font-medium transition active:scale-[0.99] ${buttonClass}`}
      >
        {label}
      </button>
    </div>
  );
}
