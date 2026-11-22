import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tool } from "@/db/schema";

export function ToolCard({ tool }: { tool: Tool }) {
  const isNew = tool.badge.toLowerCase().includes("new");
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-white/10 bg-ink-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-ink-700/60">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: isNew ? "rgba(255,178,63,0.35)" : "rgba(47,107,255,0.3)" }}
      />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/10 bg-ink-900 text-[20px]">
          {tool.icon}
        </span>
        <span
          className={`eyebrow rounded-full px-3 py-1 text-[9px] ${
            isNew ? "bg-amber-400 text-ink-900" : "border border-white/15 text-mist"
          }`}
        >
          {tool.badge}
        </span>
      </div>

      <h3 className="font-display mt-5 text-[19px] font-bold leading-snug text-paper">{tool.title}</h3>
      {tool.titleBn ? (
        <p className="mt-1 text-[14px] font-medium text-amber-400/90">{tool.titleBn}</p>
      ) : null}
      <p className="mt-3 text-[14px] leading-7 text-mist">{tool.description}</p>

      <Link
        href={tool.href}
        className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-paper transition-colors hover:text-amber-400"
      >
        Start Practice
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
