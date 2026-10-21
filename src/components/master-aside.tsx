import { masterAside } from "@/content/master-note";
import type { MasterNumber } from "@/lib/numerology";

export function MasterAside({ master, root }: { master: MasterNumber; root: number }) {
  const note = masterAside(master, root);

  return (
    <aside className="rounded-xl border border-ink-700 bg-ink-900/50 px-4 py-3">
      <p className="text-sm font-medium text-[#f8d48a]">{note.kicker}</p>
      <p className="mt-1 text-sm leading-relaxed text-mist-400">{note.lead}</p>
      <p className="mt-2 text-sm leading-relaxed text-mist-200">
        {note.title}. {note.essence}
      </p>
    </aside>
  );
}
