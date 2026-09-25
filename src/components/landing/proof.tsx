const STATS = [
  { value: "1 take", label: "Dozens of SKUs" },
  { value: "UPC + vision", label: "Barcodes optional" },
  { value: "Sold comps", label: "Not asking prices" },
  { value: "You approve", label: "Nothing auto-posts" },
];

const CHANNELS = [
  "eBay",
  "Mercari",
  "Poshmark",
  "Facebook Marketplace",
  "Whatnot",
  "Shopify",
];

export function Proof() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.value} className="bg-surface px-5 py-6 sm:px-8 sm:py-7">
            <p className="font-display text-2xl tracking-tight text-fg sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Drafts and posts to the channels resellers already live on.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {CHANNELS.map((name) => (
              <li key={name} className="text-muted">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
