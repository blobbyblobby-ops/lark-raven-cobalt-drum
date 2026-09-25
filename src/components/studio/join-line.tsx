import { type FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { isValidEmail, useWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

export function JoinLine({
  source,
  cta,
  inputClass,
  buttonClass,
}: {
  source: string;
  cta: string;
  inputClass: string;
  buttonClass: string;
}) {
  const joined = useWaitlist((s) => s.email);
  const ready = useWaitlist((s) => s.ready);
  const join = useWaitlist((s) => s.join);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
    join(trimmed);
    toast.success("You're on the LotLens list.");
  }

  if (!ready) return <div className={cn("h-12", inputClass)} />;

  if (joined) {
    return <p className="text-sm">You’re on the list as {joined}.</p>;
  }

  return (
    <form onSubmit={onSubmit} data-source={source} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="min-w-0 flex-1">
        <label className="sr-only" htmlFor={`email-${source}`}>
          Email
        </label>
        <input
          id={`email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          enterKeyHint="go"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={cn("h-12 w-full px-3 text-base outline-none", inputClass)}
        />
        {error ? <p className="mt-1 text-xs">{error}</p> : null}
      </div>
      <button type="submit" className={cn("h-12 w-full shrink-0 px-5 text-sm font-medium sm:w-auto", buttonClass)}>
        {cta}
      </button>
    </form>
  );
}
