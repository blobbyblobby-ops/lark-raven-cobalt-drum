import { EmailForm } from "@/components/landing/email-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_0%,color-mix(in_oklab,var(--color-fg)_6%,transparent),transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="hero-enter max-w-xl">
          <p className="text-sm font-medium tracking-wide text-muted">
            For bin, pallet, and estate sellers
          </p>
          <h1 id="hero-heading" className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.25rem]">
            Film the lot.
            <span className="mt-1 block italic text-muted">List every piece.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            One video of mixed inventory — boxed SKUs with barcodes and unlabeled
            goods without. LotLens finds each item, pulls sold comps, and drafts
            listings ready to post.
          </p>
          <div className="mt-8">
            <EmailForm source="hero" />
          </div>
          <p className="mt-6 text-sm text-subtle">
            <a
              href="#product"
              className="text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-fg"
            >
              Watch a 40-item table become a catalog
            </a>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-surface shadow-soft ring-1 ring-border">
            <div className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="rec-dot size-1.5 rounded-full bg-danger" />
                REC
              </span>
              <span className="font-mono tabular-nums">00:01:14</span>
              <span>Table sweep · 4K</span>
            </div>
            <div className="relative aspect-video overflow-hidden bg-elevated">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-table.jpg"
                title="Table sweep of mixed resale inventory"
                aria-label="A camera sweeping a table of mixed resale inventory"
              >
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                <Chip>8 items found</Chip>
                <Chip>3 barcodes</Chip>
                <Chip>5 visual IDs</Chip>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-subtle sm:text-left">
            A single take. Barcoded boxes and unlabeled pieces, together.
          </p>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-bg/75 px-3 py-1 text-xs font-medium text-fg ring-1 ring-border backdrop-blur-sm">
      {children}
    </span>
  );
}
