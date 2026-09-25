const STEPS = [
  {
    n: "01",
    title: "Film one take",
    body: "Sweep a table, bin, pallet, or closet. Ninety seconds of handheld video is enough. No lightbox. No one-item-at-a-time photography.",
  },
  {
    n: "02",
    title: "Identify every piece",
    body: "Barcodes are read when they exist. Unlabeled goods — vintage, estate, unpackaged — are matched visually against a product graph.",
  },
  {
    n: "03",
    title: "Price from sold comps",
    body: "LotLens pulls recent solds, sell-through, and a suggested list price per item. You see the range, not a guess.",
  },
  {
    n: "04",
    title: "Review, then post",
    body: "Titles, photos pulled from the clip, and condition notes land as drafts. Approve one, a batch, or auto-list to connected shops.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-heading" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted">How it works</p>
          <h2 id="how-heading" className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
            From a clip to a catalog in one pass.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="rounded-xl bg-surface p-6 ring-1 ring-border"
            >
              <p className="font-mono text-xs tabular-nums text-subtle">{step.n}</p>
              <h3 className="mt-4 text-lg font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl ring-1 ring-border">
          <img
            src="/images/filming-hands.jpg"
            alt="Filming mixed inventory — a boxed item with a barcode beside unlabeled vintage housewares"
            className="aspect-[16/7] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
