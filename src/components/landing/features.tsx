import {
  Aperture,
  Barcode,
  Clapperboard,
  Layers3,
  LineChart,
  ScanSearch,
  Send,
  Tags,
} from "lucide-react";

const FEATURES = [
  {
    icon: Barcode,
    title: "Read the code, if there is one",
    body: "UPC, EAN, and QR on boxes, hangtags, and polybags. LotLens locks the SKU the same way a gun scanner would — from video.",
  },
  {
    icon: ScanSearch,
    title: "Visual ID for everything else",
    body: "Estate ceramics, vintage lamps, loose sneakers, unlabeled cookware. Shape, markings, and materials stand in for a missing barcode.",
  },
  {
    icon: LineChart,
    title: "Sold comps, not asking prices",
    body: "Suggested list price from recent solds and sell-through. See the range before you commit a BIN or an auction.",
  },
  {
    icon: Aperture,
    title: "Stills pulled from the clip",
    body: "Each draft ships with crop-ready frames of that item. No second photo pass unless you want one.",
  },
  {
    icon: Tags,
    title: "Titles and condition from the tape",
    body: "Listing copy, attributes, and visible wear notes — scuffs, missing lids, factory seal — written as drafts you can edit.",
  },
  {
    icon: Send,
    title: "Post where you already sell",
    body: "Push approved drafts to eBay, Mercari, Poshmark, Facebook Marketplace, Whatnot, or Shopify. Or export CSV.",
  },
  {
    icon: Layers3,
    title: "Dozens per take",
    body: "A crowded table is the point. LotLens is built for 20, 40, 80 pieces in one continuous sweep — not a studio SKU shoot.",
  },
  {
    icon: Clapperboard,
    title: "Review before it goes live",
    body: "Nothing posts without you unless you turn auto-list on. Reject a miss, merge duplicates, or hold a lot as a bundle.",
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted">Why sellers switch</p>
          <h2 id="features-heading" className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
            Built for mixed lots, not perfect SKUs.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-xl bg-surface p-6 ring-1 ring-border"
              >
                <Icon className="size-5 text-fg" strokeWidth={1.6} />
                <h3 className="mt-5 text-base font-medium text-fg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
