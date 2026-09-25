import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "@/components/landing/footer";
import { Logo } from "@/components/landing/logo";
import {
  COPY_VARIANTS,
  LEGAL_VARIANTS,
  LOT_SIZE,
  TOOLS,
  money,
  monthStats,
  priceLabel,
  timeIndex,
} from "@/lib/market";
import { APP_NAME } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/directions")({
  head: () => ({
    meta: [
      { title: `Studies — ${APP_NAME}` },
      { name: "description", content: "Alternate LotLens copy and comparison layouts." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/directions" }],
  }),
  component: DirectionsPage,
});

const SAMPLE = TOOLS.filter((tool) =>
  ["manual", "vendoo", "nifty", "scout", "dealer"].includes(tool.id),
);

function DirectionsPage() {
  const dealer = TOOLS.find((tool) => tool.id === "dealer")!;
  const manual = TOOLS[0];
  const dealerLot = (dealer.minutes * LOT_SIZE) / 60;
  const manualLot = (manual.minutes * LOT_SIZE) / 60;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <Logo />
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Back to LotLens
          </Link>
        </div>
      </header>
      <main id="main" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-muted">Studies</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
            Five notices, five lines, five layouts.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Version A of the notice and version 4 of the headline are live. The other four of each, and the other layouts, are here to choose from.
          </p>

          <section className="mt-16" aria-labelledby="legal-variants">
            <h2 id="legal-variants" className="font-display text-3xl tracking-[-0.03em] text-fg">
              Notice, shortened five ways
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {LEGAL_VARIANTS.map((variant) => (
                <article key={variant.id} className="rounded-xl bg-surface p-6 ring-1 ring-border">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs text-subtle">{variant.id}</p>
                    {variant.live ? (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg">
                        Live
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{variant.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="copy-variants">
            <h2 id="copy-variants" className="font-display text-3xl tracking-[-0.03em] text-fg">
              Five ways to say the comparison
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {COPY_VARIANTS.map((variant) => (
                <article
                  key={variant.id}
                  className={cn("rounded-xl p-6 ring-1", variant.live ? "bg-elevated ring-border-strong" : "bg-surface ring-border")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs text-subtle">{variant.id}</p>
                    {variant.live ? (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg">
                        Live
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-fg">{variant.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{variant.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="design-variants">
            <h2 id="design-variants" className="font-display text-3xl tracking-[-0.03em] text-fg">
              Five layouts for the same numbers
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Rails is the one on the homepage. The others are alternates.
            </p>
            <div className="mt-8 space-y-6">
              <Specimen name="Ledger" blurb="Hairline rows. Numbers first, no bars.">
                <ul className="divide-y divide-border font-mono text-xs sm:text-sm">
                  {SAMPLE.map((tool) => {
                    const stats = monthStats(tool, 4);
                    return (
                      <li key={tool.id} className="grid grid-cols-4 gap-3 py-3 text-muted">
                        <span className={tool.lotlens ? "text-fg" : ""}>{tool.name}</span>
                        <span className="text-right tabular-nums">{tool.minutes}m</span>
                        <span className="text-right tabular-nums">{timeIndex(tool)}</span>
                        <span className="text-right tabular-nums">{money(stats.net)}</span>
                      </li>
                    );
                  })}
                </ul>
              </Specimen>

              <Specimen name="Split" blurb="One contrast: the hand-listed lot against Dealer.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-bg p-5 ring-1 ring-border">
                    <p className="text-xs text-subtle">By hand</p>
                    <p className="mt-2 font-display text-5xl tabular-nums text-muted">{manualLot.toFixed(1)}</p>
                    <p className="mt-1 text-xs text-subtle">hours / 40 items</p>
                  </div>
                  <div className="rounded-lg bg-bg p-5 ring-1 ring-border-strong">
                    <p className="text-xs text-fg">LotLens Dealer</p>
                    <p className="mt-2 font-display text-5xl tabular-nums text-fg">{dealerLot.toFixed(1)}</p>
                    <p className="mt-1 text-xs text-subtle">hours / 40 items · index {timeIndex(dealer)}</p>
                  </div>
                </div>
              </Specimen>

              <Specimen name="Rails" live blurb="Homepage. Every tool, slowest to fastest, index at the right.">
                <ul className="space-y-2.5">
                  {SAMPLE.map((tool) => (
                    <li key={tool.id} className="grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-3">
                      <span className={cn("truncate text-xs", tool.lotlens ? "text-fg" : "text-muted")}>{tool.name}</span>
                      <span className="relative h-1.5 rounded-full bg-bg">
                        <span
                          className={cn("absolute inset-y-0 left-0 rounded-full", tool.lotlens ? "bg-fg" : "bg-accent")}
                          style={{ width: `${(tool.minutes / manual.minutes) * 100}%` }}
                        />
                      </span>
                      <span className="text-right text-xs tabular-nums text-fg">{timeIndex(tool)}</span>
                    </li>
                  ))}
                </ul>
              </Specimen>

              <Specimen name="Tiles" blurb="Four scores, nothing else. For a section that should be scanned in a second.">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["By hand", `${manualLot.toFixed(1)}h`],
                    ["Vendoo", `${((6.5 * LOT_SIZE) / 60).toFixed(1)}h`],
                    ["Nifty", `${((5.5 * LOT_SIZE) / 60).toFixed(1)}h`],
                    ["Dealer", `${dealerLot.toFixed(1)}h`],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-bg p-4 ring-1 ring-border">
                      <p className="text-xs text-subtle">{label}</p>
                      <p className={cn("mt-2 font-display text-4xl tabular-nums", label === "Dealer" ? "text-fg" : "text-muted")}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </Specimen>

              <Specimen name="Rank" blurb="Ordered by time index. Price sits in the margin so it cannot masquerade as speed.">
                <ol className="space-y-3">
                  {[...SAMPLE]
                    .sort((a, b) => timeIndex(b) - timeIndex(a))
                    .map((tool, i) => (
                      <li key={tool.id} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-muted">
                          <span className="mr-3 font-mono text-xs text-subtle">0{i + 1}</span>
                          <span className={tool.lotlens ? "text-fg" : ""}>{tool.name}</span>
                        </span>
                        <span className="text-sm tabular-nums text-fg">
                          {timeIndex(tool)}
                          <span className="ml-3 text-xs text-subtle">{priceLabel(tool.price)}</span>
                        </span>
                      </li>
                    ))}
                </ol>
              </Specimen>
            </div>
          </section>
        </div>
      </main>
      <Footer compact />
    </div>
  );
}

function Specimen({
  name,
  blurb,
  live,
  children,
}: {
  name: string;
  blurb: string;
  live?: boolean;
  children: ReactNode;
}) {
  return (
    <article className="rounded-xl bg-surface p-5 ring-1 ring-border sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-medium text-fg">{name}</h3>
        {live ? (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg">Live</span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-subtle">{blurb}</p>
      <div className="mt-5">{children}</div>
    </article>
  );
}
