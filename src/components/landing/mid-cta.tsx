import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MidCta() {
  return (
    <section className="border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl tracking-[-0.03em] text-fg sm:text-4xl">
            A crowded table is the point.
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
            Film barcodes and unlabeled pieces together. Review priced drafts.
            Post only what you approve.
          </p>
        </div>
        <Button
          size="lg"
          onClick={() =>
            document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Join waitlist
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
