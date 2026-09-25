import { Plus } from "lucide-react";
import { FAQS } from "@/lib/seo";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="text-sm font-medium text-muted">Questions</p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl"
          >
            Straight answers before you join.
          </h2>
        </div>
        <div>
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group border-b border-border py-5 first:border-t"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-medium text-fg">
                {item.q}
                <Plus
                  className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.75}
                />
              </summary>
              <p className="mt-3 max-w-prose pr-8 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
