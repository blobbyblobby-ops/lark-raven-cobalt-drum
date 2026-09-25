import { DECKS, type Deck } from "@/lib/decks";
import { JoinLine } from "@/components/studio/join-line";

function Prices({
  deck,
  className,
  nameClass,
  priceClass,
  noteClass,
}: {
  deck: Deck;
  className: string;
  nameClass: string;
  priceClass: string;
  noteClass: string;
}) {
  return (
    <ul className={className}>
      {deck.prices.map((tier) => (
        <li key={tier.name}>
          <p className={nameClass}>{tier.name}</p>
          <p className={priceClass}>{tier.price}</p>
          <p className={noteClass}>{tier.note}</p>
        </li>
      ))}
    </ul>
  );
}

export function Broadsheet({ deck }: { deck: Deck }) {
  return (
    <article className="min-h-dvh bg-paper pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-ink">
      <header className="border-b border-ink">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <p className="font-display text-3xl tracking-tight">{deck.brand}</p>
          <p className="hidden text-xs uppercase tracking-[0.18em] text-ink-soft sm:block">{deck.eyebrow}</p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20">
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl lg:col-span-8">
          {deck.headline}
        </h1>
        <div className="lg:col-span-4 lg:border-l lg:border-ink lg:pl-8">
          <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">{deck.eyebrow}</p>
          <p className="mt-4 text-lg leading-relaxed">{deck.sub}</p>
          <div className="mt-8">
            <JoinLine
              source="broadsheet"
              cta={deck.cta}
              inputClass="border border-ink bg-paper text-ink placeholder:text-ink-soft"
              buttonClass="bg-ink text-paper"
            />
          </div>
        </div>
      </section>
      <section className="border-y border-ink">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {deck.features.map((feature, i) => (
            <div key={feature.title} className={i ? "border-t border-ink px-5 py-8 sm:border-t-0 sm:border-l sm:px-8" : "px-5 py-8 sm:px-8"}>
              <p className="font-mono text-xs text-ink-soft">0{i + 1}</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-6xl tracking-tight">{deck.statValue}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{deck.statLabel}</p>
        </div>
        <Prices
          deck={deck}
          className="divide-y divide-rule border-y border-ink lg:col-span-8"
          nameClass="pt-4 text-xs uppercase tracking-[0.16em] text-ink-soft"
          priceClass="mt-1 font-display text-4xl"
          noteClass="pb-4 text-sm text-ink-soft"
        />
      </section>
      <footer className="border-t border-ink">
        <blockquote className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">“{deck.quote}”</p>
          <footer className="mt-4 text-sm text-ink-soft">{deck.by}</footer>
        </blockquote>
      </footer>
    </article>
  );
}

export function Signal({ deck }: { deck: Deck }) {
  return (
    <article className="flex min-h-dvh flex-col bg-void pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-acid">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <p className="font-mono text-sm tracking-widest">{deck.brand.toUpperCase()}</p>
        <p className="font-mono text-xs text-mist">{deck.eyebrow}</p>
      </header>
      <section className="order-1 mx-auto max-w-6xl px-5 pb-8 sm:px-8 lg:order-none lg:pb-12">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
          <h1 className="max-w-3xl font-sans text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl">
            {deck.headline}
          </h1>
          <p className="mt-8 font-mono text-5xl leading-none whitespace-nowrap text-fg lg:mt-0">{deck.statValue}</p>
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">{deck.statLabel}</p>
      </section>
      <section className="order-3 border-y border-void-2 bg-void-2 lg:order-none">
        <div className="mx-auto grid max-w-6xl gap-px bg-void sm:grid-cols-3">
          {deck.features.map((feature) => (
            <div key={feature.title} className="bg-void-2 px-5 py-8 sm:px-8">
              <h2 className="text-lg font-medium text-fg">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="order-2 mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:order-none lg:py-14">
        <p className="max-w-xl text-lg leading-relaxed text-mist">{deck.sub}</p>
        <div className="mt-8 max-w-xl">
          <JoinLine
            source="signal"
            cta={deck.cta}
            inputClass="bg-void-2 text-fg placeholder:text-mist"
            buttonClass="bg-acid text-acid-fg"
          />
        </div>
        <Prices
          deck={deck}
          className="mt-14 grid gap-4 sm:grid-cols-3"
          nameClass="font-mono text-xs text-mist"
          priceClass="mt-2 font-mono text-4xl text-fg"
          noteClass="mt-2 text-sm text-mist"
        />
      </section>
      <footer className="order-4 border-t border-void-2 lg:order-none">
        <blockquote className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="max-w-3xl text-2xl leading-snug text-fg">“{deck.quote}”</p>
          <footer className="mt-4 font-mono text-xs text-mist">{deck.by}</footer>
        </blockquote>
      </footer>
    </article>
  );
}

export function Showroom({ deck }: { deck: Deck }) {
  return (
    <article className="min-h-dvh bg-stone pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-band-fg">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <p className="font-display text-3xl">{deck.brand}</p>
        <p className="text-sm text-clay">{deck.eyebrow}</p>
      </header>
      <section className="px-5 sm:px-8">
        <div className="relative mx-auto flex max-w-6xl flex-col-reverse sm:block">
          <img
            src="/images/hero-table.jpg"
            alt=""
            className="aspect-[3/2] w-full object-cover sm:aspect-[16/8]"
          />
          <div className="bg-stone-2 px-5 py-8 sm:absolute sm:bottom-8 sm:left-8 sm:max-w-md sm:px-8">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl">{deck.headline}</h1>
            <p className="mt-4 text-base leading-relaxed text-clay">{deck.sub}</p>
            <div className="mt-6 sm:hidden">
              <JoinLine
                source="showroom-top"
                cta={deck.cta}
                inputClass="bg-stone text-band-fg placeholder:text-clay"
                buttonClass="bg-oxide text-oxide-fg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3">
        {deck.features.map((feature) => (
          <div key={feature.title}>
            <h2 className="font-display text-3xl tracking-tight">{feature.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-clay">{feature.body}</p>
          </div>
        ))}
      </section>
      <section className="bg-oxide text-oxide-fg">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-display text-6xl">{deck.statValue}</p>
            <p className="mt-3 text-sm leading-relaxed text-oxide-fg/80">{deck.statLabel}</p>
          </div>
          <blockquote>
            <p className="font-display text-3xl leading-snug">“{deck.quote}”</p>
            <footer className="mt-4 text-sm text-oxide-fg/80">{deck.by}</footer>
          </blockquote>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Prices
          deck={deck}
          className="grid gap-8 sm:grid-cols-3"
          nameClass="text-sm text-clay"
          priceClass="mt-2 font-display text-5xl"
          noteClass="mt-2 text-sm text-clay"
        />
        <div className="mt-10 hidden max-w-md sm:block">
          <JoinLine
            source="showroom"
            cta={deck.cta}
            inputClass="bg-stone-2 text-band-fg placeholder:text-clay"
            buttonClass="bg-oxide text-oxide-fg"
          />
        </div>
      </section>
    </article>
  );
}

export function TerminalPage({ deck }: { deck: Deck }) {
  return (
    <article className="flex min-h-dvh flex-col bg-spec pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-spec-ink lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="order-2 border-b border-spec-line px-5 py-6 lg:order-none lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
        <p className="font-mono text-xs tracking-widest text-spec-dim">{deck.brand.toUpperCase()}</p>
        <p className="mt-6 font-mono text-xs text-spec-dim">{deck.eyebrow}</p>
        <p className="mt-8 font-mono text-5xl leading-none">{deck.statValue}</p>
        <p className="mt-3 text-sm leading-relaxed text-spec-dim">{deck.statLabel}</p>
      </aside>
      <div className="order-1 lg:order-none">
        <header className="border-b border-spec-line px-5 py-10 sm:px-10">
          <h1 className="max-w-3xl font-sans text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl">
            {deck.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-spec-dim">{deck.sub}</p>
          <div className="mt-8 max-w-lg">
            <JoinLine
              source="terminal"
              cta={deck.cta}
              inputClass="border border-spec-line bg-spec-2 text-spec-ink placeholder:text-spec-dim"
              buttonClass="bg-spec-ink text-spec-2"
            />
          </div>
        </header>
        <section>
          {deck.features.map((feature, i) => (
            <div key={feature.title} className="grid gap-2 border-b border-spec-line px-5 py-6 sm:grid-cols-[4rem_1fr] sm:px-10">
              <p className="font-mono text-xs text-spec-dim">0{i + 1}</p>
              <div>
                <h2 className="text-lg font-medium">{feature.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-spec-dim">{feature.body}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="px-5 py-8 sm:px-10">
          <Prices
            deck={deck}
            className="grid gap-6 sm:grid-cols-3"
            nameClass="font-mono text-xs text-spec-dim"
            priceClass="mt-2 font-mono text-3xl"
            noteClass="mt-2 text-sm text-spec-dim"
          />
          <blockquote className="mt-10 border-t border-spec-line pt-8">
            <p className="max-w-2xl text-xl leading-snug">“{deck.quote}”</p>
            <footer className="mt-3 font-mono text-xs text-spec-dim">{deck.by}</footer>
          </blockquote>
        </section>
      </div>
    </article>
  );
}

export function Poster({ deck }: { deck: Deck }) {
  return (
    <article className="bg-poster pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-poster-fg">
      <section className="flex flex-col gap-8 px-5 pb-[calc(8.75rem+env(safe-area-inset-bottom))] pt-8 sm:min-h-dvh sm:justify-between sm:px-10">
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl">{deck.brand}</p>
          <p className="text-sm text-poster-dim">{deck.eyebrow}</p>
        </div>
        <h1 className="max-w-5xl font-display text-5xl leading-[0.92] tracking-tight text-balance sm:text-8xl">
          {deck.headline}
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-poster-dim">{deck.sub}</p>
        <div className="mt-6 max-w-md sm:hidden">
          <JoinLine
            source="poster-top"
            cta={deck.cta}
            inputClass="border border-poster-dim/40 bg-transparent text-poster-fg placeholder:text-poster-dim"
            buttonClass="bg-band text-band-fg"
          />
        </div>
      </section>
      {deck.features.map((feature, i) => (
        <section
          key={feature.title}
          className={i % 2 ? "bg-poster px-5 py-20 text-poster-fg sm:px-10" : "bg-band px-5 py-20 text-band-fg sm:px-10"}
        >
          <p className="font-mono text-xs opacity-60">0{i + 1}</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">{feature.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed opacity-80">{feature.body}</p>
        </section>
      ))}
      <section className="bg-poster px-5 py-20 sm:px-10">
        <p className="font-display text-7xl leading-none sm:text-8xl">{deck.statValue}</p>
        <p className="mt-4 max-w-sm text-poster-dim">{deck.statLabel}</p>
        <Prices
          deck={deck}
          className="mt-16 grid gap-8 border-t border-poster-dim/30 pt-10 sm:grid-cols-3"
          nameClass="text-sm text-poster-dim"
          priceClass="mt-2 font-display text-5xl"
          noteClass="mt-2 text-sm text-poster-dim"
        />
        <div className="mt-12 hidden max-w-md sm:block">
          <JoinLine
            source="poster"
            cta={deck.cta}
            inputClass="border border-poster-dim/40 bg-transparent text-poster-fg placeholder:text-poster-dim"
            buttonClass="bg-band text-band-fg"
          />
        </div>
        <blockquote className="mt-16 max-w-3xl">
          <p className="font-display text-4xl leading-snug">“{deck.quote}”</p>
          <footer className="mt-4 text-sm text-poster-dim">{deck.by}</footer>
        </blockquote>
      </section>
    </article>
  );
}

const PAGES = [Broadsheet, Signal, Showroom, TerminalPage, Poster] as const;

export function DesignPage({ index }: { index: number }) {
  const Page = PAGES[index] ?? Broadsheet;
  const deck = DECKS[index] ?? DECKS[0];
  return <Page deck={deck} />;
}
