import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Logo } from "@/components/landing/logo";
import { APP_NAME, COPYRIGHT_OWNER, COPYRIGHT_YEAR, LEGAL_HEADLINE, LEGAL_PARAGRAPHS } from "@/lib/seo";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: `IP notice — ${APP_NAME}` },
      {
        name: "description",
        content: `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved. Intellectual property notice for ${APP_NAME}.`,
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/legal" }],
  }),
  component: LegalPage,
});

function LegalPage() {
  const [notice, ...rest] = LEGAL_PARAGRAPHS;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <Logo />
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            Back to LotLens
          </Link>
        </div>
      </header>
      <main id="main" className="px-5 py-16 sm:px-8 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-muted">Legal</p>
          <h1 className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
            {LEGAL_HEADLINE}
          </h1>
          <div className="mt-10 rounded-xl bg-elevated px-5 py-6 text-base leading-relaxed text-fg ring-1 ring-border sm:px-8 sm:py-8">
            <p>{notice}</p>
          </div>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-subtle">
            Rights holder: {COPYRIGHT_OWNER}. Effective {COPYRIGHT_YEAR}.
          </p>
        </article>
      </main>
      <Footer compact />
    </div>
  );
}
