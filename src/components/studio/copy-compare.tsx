import { DECKS } from "@/lib/decks";

export function CopyCompare() {
  return (
    <article className="min-h-dvh bg-bg pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-fg">
      <header className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
        <p className="text-sm font-medium text-muted">Copy, with the layout taken off</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-6xl">
          Five ways to sell the same product.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Same prices, same mechanism — one video in, priced drafts out. The words change who it is for and what it refuses to promise.
        </p>
      </header>
      <div className="mx-auto max-w-6xl overflow-x-auto px-5 sm:px-8">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border text-xs font-medium text-subtle">
              <th className="py-3 pr-4">#</th>
              <th className="py-3 pr-4">Angle</th>
              <th className="py-3 pr-4">Audience</th>
              <th className="py-3 pr-4">Promise</th>
              <th className="py-3 pr-4">Tone</th>
              <th className="py-3">Weak if</th>
            </tr>
          </thead>
          <tbody>
            {DECKS.map((deck) => (
              <tr key={deck.id} className="border-b border-border align-top">
                <td className="py-4 pr-4 font-mono text-sm text-subtle">0{deck.id}</td>
                <td className="py-4 pr-4 text-sm font-medium">{deck.angle}</td>
                <td className="py-4 pr-4 text-sm text-muted">{deck.audience}</td>
                <td className="py-4 pr-4 text-sm text-muted">{deck.promise}</td>
                <td className="py-4 pr-4 text-sm text-muted">{deck.tone}</td>
                <td className="py-4 text-sm text-muted">{deck.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8">
        {DECKS.map((deck) => (
          <section key={deck.id} id={`copy-${deck.id}`} className="border-t border-border pt-10">
            <p className="font-mono text-xs text-subtle">0{deck.id} · {deck.angle}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-5xl">
              {deck.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{deck.sub}</p>
            <p className="mt-6 text-sm text-fg">
              Button: {deck.cta}
              <span className="text-subtle"> · </span>
              <span className="text-muted">{deck.secondary}</span>
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {deck.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="text-base font-medium">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              <span className="text-fg">{deck.statValue}.</span> {deck.statLabel}
            </p>
            <blockquote className="mt-6 max-w-2xl border-l border-border-strong pl-4">
              <p className="text-base leading-relaxed">“{deck.quote}”</p>
              <footer className="mt-2 text-sm text-subtle">{deck.by}</footer>
            </blockquote>
          </section>
        ))}
      </div>
    </article>
  );
}
