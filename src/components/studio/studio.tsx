import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CopyCompare } from "@/components/studio/copy-compare";
import { DesignPage } from "@/components/studio/pages";
import { Wireframe } from "@/components/studio/wires";
import { cn } from "@/lib/utils";

const MODES = [
  { id: "page", label: "Page" },
  { id: "wire", label: "Frame" },
  { id: "copy", label: "Copy" },
] as const;

type Mode = (typeof MODES)[number]["id"];

export function Studio() {
  const [mode, setMode] = useState<Mode>("page");
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-dvh bg-bg">
      {mode === "page" ? <DesignPage index={index} /> : null}
      {mode === "wire" ? <Wireframe index={index} /> : null}
      {mode === "copy" ? <CopyCompare /> : null}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent bg-primary-fg pb-[env(safe-area-inset-bottom)] text-fg">
        <div className="mx-auto max-w-6xl px-2 pt-2">
          <div className="grid grid-cols-4 gap-1" role="group" aria-label="What to view">
            {MODES.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={mode === item.id}
                onClick={() => setMode(item.id)}
                className={cn(
                  "h-11 text-sm",
                  mode === item.id ? "bg-fg text-primary-fg" : "text-muted",
                )}
              >
                {item.label}
              </button>
            ))}
            <Link to="/live" className="inline-flex h-11 items-center justify-center text-sm text-muted">
              Site
            </Link>
          </div>
          <div className="mt-1 grid grid-cols-5 gap-1 pb-2" role="group" aria-label="Version">
            {[0, 1, 2, 3, 4].map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={index === n}
                onClick={() => {
                  setIndex(n);
                  if (mode === "copy") {
                    document.getElementById(`copy-${n + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "h-11 font-mono text-sm",
                  index === n && mode !== "copy" ? "bg-acid text-acid-fg" : "text-fg",
                )}
              >
                {n + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
