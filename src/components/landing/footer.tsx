import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/logo";
import { LEGAL_PARAGRAPHS } from "@/lib/seo";

const LINKS = [
  { href: "/live#product", label: "Product" },
  { href: "/live#how", label: "How it works" },
  { href: "/live#compare", label: "Compare" },
  { href: "/live#features", label: "Features" },
  { href: "/live#pricing", label: "Pricing" },
  { href: "/live#stories", label: "Stories" },
  { href: "/live#faq", label: "FAQ" },
  { href: "/live#join", label: "Waitlist" },
] as const;

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-subtle">
            One video. Dozens of priced listings. Barcodes optional.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <Link to="/legal" className="text-sm text-muted transition-colors duration-150 hover:text-fg">
            IP notice
          </Link>
          <Link to="/studio" className="text-sm text-muted transition-colors duration-150 hover:text-fg">
            5 designs
          </Link>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-8">
        {!compact ? (
          <p className="max-w-3xl text-xs leading-relaxed text-subtle">{LEGAL_PARAGRAPHS[0]}</p>
        ) : null}
        <p className={compact ? "text-xs text-subtle" : "mt-3 text-xs text-subtle"}>
          Drafts you approve. Nothing posts without you.{" "}
          <Link to="/legal" className="underline decoration-border-strong underline-offset-4 hover:text-fg">
            Full intellectual property notice
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
