import { REVIEWS } from "@/lib/seo";

export function Testimonials() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-muted">From the floor</p>
          <h2
            id="stories-heading"
            className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl"
          >
            Built with people who buy by the bin.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {REVIEWS.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-xl bg-bg p-6 ring-1 ring-border"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-fg">
                <p>{story.quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <img
                  src={story.image}
                  alt={`${story.name}, ${story.role}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="size-12 rounded-full object-cover ring-1 ring-border"
                />
                <div>
                  <p className="text-sm font-medium text-fg">{story.name}</p>
                  <p className="text-sm text-muted">{story.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
