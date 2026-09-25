import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/live"
      className={cn(
        "inline-flex items-center gap-2.5 text-fg no-underline",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-sm bg-elevated ring-1 ring-border"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M6 8.5V6h2.5M15.5 6H18v2.5M18 15.5V18h-2.5M8.5 18H6v-2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
          <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="font-display text-xl leading-none tracking-tight">LotLens</span>
    </a>
  );
}
