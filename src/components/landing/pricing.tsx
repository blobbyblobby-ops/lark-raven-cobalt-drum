import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    id: "scout",
    name: "Scout",
    monthly: 39,
    blurb: "For testers and side-hustle tables.",
    features: [
      "150 identifications / month",
      "Barcode + visual ID",
      "Sold comps on every draft",
      "Listing photos from the clip",
      "1 connected marketplace",
      "Drafts only — you post",
    ],
    cta: "Join waitlist",
    featured: false,
  },
  {
    id: "dealer",
    name: "Dealer",
    monthly: 89,
    blurb: "For sellers who list every week.",
    features: [
      "750 identifications / month",
      "Auto-post to 5 marketplaces",
      "Condition notes from video",
      "Duplicate and lot grouping",
      "Price refresh on unsold SKUs",
      "Priority visual matching",
    ],
    cta: "Join waitlist",
    featured: true,
  },
  {
    id: "floor",
    name: "Floor",
    monthly: 219,
    blurb: "For warehouses, estates, and teams.",
    features: [
      "Unlimited identifications",
      "Shared catalogs and seats",
      "API + CSV ingest",
      "White-glove onboarding",
      "Custom marketplace maps",
      "SLA on unlabeled goods",
    ],
    cta: "Talk to us",
    featured: false,
  },
] as const;

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted">Pricing</p>
            <h2 id="pricing-heading" className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
              Pay for identifications, not seats you don't use.
            </h2>
          </div>
          <div
            className="inline-flex rounded-md bg-surface p-1 ring-1 ring-border"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              className={cn(
                "h-10 rounded-sm px-4 text-sm font-medium transition-colors duration-150",
                !yearly ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={cn(
                "h-10 rounded-sm px-4 text-sm font-medium transition-colors duration-150",
                yearly ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
            >
              Yearly
              <span className="ml-2 text-xs text-accent">2 months free</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const price = yearly ? Math.round(tier.monthly * (10 / 12)) : tier.monthly;
            return (
              <article
                key={tier.id}
                className={cn(
                  "flex flex-col rounded-xl p-6 ring-1",
                  tier.featured
                    ? "bg-elevated ring-border-strong"
                    : "bg-surface ring-border",
                )}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium text-fg">{tier.name}</h3>
                  {tier.featured && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg">
                      Most sellers
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{tier.blurb}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl leading-none tracking-tight text-fg tabular-nums">
                    ${price}
                  </span>
                  <span className="pb-1 text-sm text-subtle">/ mo</span>
                </p>
                <p className="mt-1 text-xs text-subtle">
                  {yearly ? "Billed annually" : "Billed monthly"}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={tier.featured ? "primary" : "outline"}
                  onClick={() =>
                    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {tier.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
