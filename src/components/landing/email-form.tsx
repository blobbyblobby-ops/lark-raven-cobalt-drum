import { type FormEvent, useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidEmail, useWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

export function EmailForm({
  source,
  size = "lg",
  className,
}: {
  source: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const joined = useWaitlist((s) => s.email);
  const ready = useWaitlist((s) => s.ready);
  const join = useWaitlist((s) => s.join);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    useWaitlist.getState().hydrate();
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!isValidEmail(trimmed)) {
      setError("Enter a working email.");
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      join(trimmed);
      toast.success("You're on the LotLens list.");
      setPending(false);
    }, 380);
  }

  if (!ready) {
    return <div className={cn("h-12 w-full max-w-lg rounded-md bg-elevated", className)} />;
  }

  if (joined) {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-lg bg-elevated px-4 py-3.5 ring-1 ring-border",
          className,
        )}
      >
        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-fg">
          <Check className="size-3.5" strokeWidth={2.4} />
        </span>
        <p className="text-sm leading-relaxed text-muted">
          You're on the list. We'll write{" "}
          <span className="text-fg">{joined}</span> when founder seats open.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("w-full max-w-lg", className)}
      noValidate
      data-source={source}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor={`email-${source}`}>
          Email address
        </label>
        <Input
          id={`email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@shop.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          className={cn(size === "lg" ? "h-12" : "h-11", "sm:flex-1")}
        />
        <Button
          type="submit"
          size={size === "lg" ? "lg" : "md"}
          disabled={pending}
          className="shrink-0 sm:min-w-40"
        >
          {pending ? "Joining…" : "Join waitlist"}
          {!pending && <ArrowRight className="size-4" />}
        </Button>
      </div>
      {error ? (
        <p className="mt-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-sm text-subtle">
          No spam. We only email when access opens.
        </p>
      )}
    </form>
  );
}
