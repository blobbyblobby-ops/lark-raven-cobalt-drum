import { EmailForm } from "@/components/landing/email-form";

export function Join() {
  return (
    <section id="join" aria-labelledby="join-heading" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-elevated px-6 py-14 ring-1 ring-border sm:px-12 sm:py-20">
        <p className="text-sm font-medium text-muted">Early access</p>
        <h2 id="join-heading" className="mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl lg:text-6xl">
          List tonight’s haul before you go to bed.
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          One video of mixed inventory — barcodes and unlabeled pieces — becomes
          priced drafts on the shops you already use. Founder seats are limited.
        </p>
        <div className="mt-8">
          <EmailForm source="join" />
        </div>
      </div>
    </section>
  );
}
