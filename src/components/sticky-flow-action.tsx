"use client";

interface StickyFlowActionProps {
  label: string;
  hint?: string;
  onClick: () => void;
}

export function StickyFlowAction({ label, hint, onClick }: StickyFlowActionProps) {
  return (
    <div className="sticky bottom-0 -mx-5 border-t border-ink-700/80 bg-ink-950/90 px-5 py-4 backdrop-blur-md sm:-mx-7">
      {hint ? <p className="mb-2 text-center text-xs text-mist-500">{hint}</p> : null}
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-xl bg-accent-500 px-5 py-3.5 font-medium text-white shadow-[0_8px_32px_rgba(124,92,255,0.35)] transition hover:bg-accent-400 active:scale-[0.99]"
      >
        {label}
      </button>
    </div>
  );
}
