import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FEATURES,
  LOT_SIZE,
  MATRIX_IDS,
  MATRIX_LABELS,
  TOOLS,
  WAGE,
  money,
  monthStats,
  priceLabel,
  timeIndex,
  type Mark,
} from "@/lib/market";

const LOTS = [1, 4, 12] as const;

function MarkCell({ mark, emphasize }: { mark: Mark; emphasize?: boolean }) {
  return (
    <span
      className={cn(
        "text-xs font-medium",
        mark === "Yes" && (emphasize ? "text-fg" : "text-accent"),
        mark === "Partial" && "text-muted",
        mark === "No" && "text-subtle",
      )}
    >
      {mark}
    </span>
  );
}

export function Compare() {
  const [lots, setLots] = useState<(typeof LOTS)[number]>(4);
  const slowest = TOOLS[0].minutes;

  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted">Compare</p>
            <h2
              id="compare-heading"
              className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl"
            >
              Crosslisting is the last mile.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Identification is the day. Features, public prices, and a time-saved index against the tools resellers already use.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-subtle">Lots per month</p>
            <div className="mt-2 inline-flex rounded-md bg-surface p-1 ring-1 ring-border" role="group" aria-label="Lots per month">
              {LOTS.map((count) => (
                <button
                  key={count}
                  type="button"
                  aria-pressed={lots === count}
                  onClick={() => setLots(count)}
                  className={cn(
                    "h-10 min-w-14 rounded-sm px-3 text-sm font-medium tabular-nums transition-colors duration-150",
                    lots === count ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {count}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-subtle">
              {lots * LOT_SIZE} items · {WAGE}/hr labor
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-sm font-medium text-fg">Minutes per item</h3>
            <p className="text-xs text-subtle">Shorter is faster. Index 100 saves the most time.</p>
          </div>
          <ul className="mt-5 space-y-4">
            {TOOLS.map((tool) => {
              const index = timeIndex(tool);
              const width = Math.max(4, (tool.minutes / slowest) * 100);
              return (
                <li key={tool.id}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className={cn("text-sm", tool.lotlens ? "font-medium text-fg" : "text-muted")}>
                      {tool.name}
                    </span>
                    <span className="shrink-0 text-xs tabular-nums text-muted">
                      {tool.minutes} min
                      <span className="ml-2 text-fg">{index}</span>
                    </span>
                  </div>
                  <span className="mt-1.5 block h-1.5 rounded-full bg-surface">
                    <span
                      className={cn("block h-full rounded-full", tool.lotlens ? "bg-fg" : "bg-accent/80")}
                      style={{ width: `${width}%` }}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-medium text-fg">What each one actually does</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Marks are the entry plan, not the top tier. LotLens is Dealer. Scout identifies the same way, then you publish to one marketplace — that is why it is slower below.
          </p>
          <p className="mt-3 text-xs text-subtle sm:hidden">Swipe sideways. The first column stays put.</p>
          <div className="relative mt-3 sm:mt-5">
            <div className="overflow-x-auto rounded-xl ring-1 ring-border">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="sticky left-0 z-10 bg-surface px-4 py-3 text-xs font-medium text-subtle">Capability</th>
                  {MATRIX_IDS.map((id) => (
                    <th
                      key={id}
                      className={cn(
                        "px-3 py-3 text-xs font-medium",
                        id === "lotlens" ? "text-fg" : "text-subtle",
                      )}
                    >
                      {MATRIX_LABELS[id]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature) => (
                  <tr key={feature.label} className="border-b border-border last:border-0">
                    <th className="sticky left-0 z-10 bg-bg px-4 py-3 text-sm font-normal text-muted">{feature.label}</th>
                    {MATRIX_IDS.map((id) => (
                      <td key={id} className={cn("px-3 py-3", id === "lotlens" && "bg-elevated/60")}>
                        <MarkCell mark={feature.marks[id]} emphasize={id === "lotlens"} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg sm:hidden" />
        </div>
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-medium text-fg">Price against time saved</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Time index is minutes returned versus doing this lot by hand. Net is labor saved minus the monthly plan, at ${WAGE}/hr and {lots} lot{lots === 1 ? "" : "s"}. Return per $1 can favor a cheap tool that still leaves the afternoon on the table.
          </p>
          <p className="mt-3 text-xs text-subtle sm:hidden">Swipe sideways. The first column stays put.</p>
          <div className="relative mt-3 sm:mt-5">
            <div className="overflow-x-auto rounded-xl ring-1 ring-border">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-surface text-xs font-medium text-subtle">
                  <th className="sticky left-0 z-10 bg-surface px-4 py-3">Tool</th>
                  <th className="px-3 py-3">Plan</th>
                  <th className="px-3 py-3 text-right">Price</th>
                  <th className="px-3 py-3 text-right">Hrs / lot</th>
                  <th className="px-3 py-3 text-right">Time index</th>
                  <th className="px-3 py-3 text-right">Labor saved</th>
                  <th className="px-3 py-3 text-right">Net / mo</th>
                  <th className="px-3 py-3 text-right">Per $1</th>
                </tr>
              </thead>
              <tbody>
                {TOOLS.map((tool) => {
                  const stats = monthStats(tool, lots);
                  const lotHours = (tool.minutes * LOT_SIZE) / 60;
                  return (
                    <tr key={tool.id} className="border-b border-border last:border-0">
                      <th
                        className={cn(
                          "sticky left-0 z-10 bg-bg px-4 py-3 text-sm font-medium",
                          tool.lotlens ? "text-fg" : "text-muted",
                        )}
                      >
                        {tool.name}
                      </th>
                      <td className="px-3 py-3 text-sm text-subtle">{tool.plan}</td>
                      <td className="px-3 py-3 text-right text-sm tabular-nums text-muted">{priceLabel(tool.price)}</td>
                      <td className="px-3 py-3 text-right text-sm tabular-nums text-muted">{lotHours.toFixed(1)}</td>
                      <td className={cn("px-3 py-3 text-right text-sm tabular-nums", tool.lotlens ? "text-fg" : "text-muted")}>
                        {timeIndex(tool)}
                      </td>
                      <td className="px-3 py-3 text-right text-sm tabular-nums text-muted">{money(stats.labor)}</td>
                      <td className={cn("px-3 py-3 text-right text-sm tabular-nums", tool.lotlens ? "font-medium text-fg" : "text-muted")}>
                        {money(stats.net)}
                      </td>
                      <td className="px-3 py-3 text-right text-sm tabular-nums text-subtle">
                        {stats.perDollar == null ? "—" : `${stats.perDollar.toFixed(1)}×`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg sm:hidden" />
        </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-subtle">
            Planning estimates, not a lab test. Entry prices checked against public pages in August–September 2026 (Vendoo Starter $14.99, List Perfectly Simple $29, Crosslist Bronze $29.99, Nifty Crosslisting Plus $39.99, PrimeLister $49.99, Flyp $9). Auto-delist on List Perfectly and Crosslist sits on higher tiers, so the entry row says no. LotLens does not auto-delist. Confirm current prices before you buy.
          </p>
        </div>
      </div>
    </section>
  );
}
