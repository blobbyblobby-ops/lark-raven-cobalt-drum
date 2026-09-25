import type { ReactNode } from "react";
import { Aperture, LayoutList, Store } from "lucide-react";
import { useLens, type Screen } from "@/lib/lens/store";
import { cn } from "@/lib/utils";

export function Phone({ children, dock }: { children: ReactNode; dock?: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg md:grid md:place-items-center md:py-6">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-poster md:min-h-[860px] md:rounded-[2rem] md:ring-1 md:ring-border">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        {dock}
      </div>
    </div>
  );
}

const TABS: { id: Screen; label: string; icon: typeof Aperture }[] = [
  { id: "lens", label: "Lens", icon: Aperture },
  { id: "lot", label: "Lot", icon: LayoutList },
  { id: "accounts", label: "Accounts", icon: Store },
];

export function TabBar() {
  const screen = useLens((s) => s.screen);
  const go = useLens((s) => s.go);
  return (
    <nav
      className="grid grid-cols-3 border-t border-white/10 bg-poster pb-[env(safe-area-inset-bottom)]"
      aria-label="App"
    >
      {TABS.map((tab) => {
        const on = screen === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => go(tab.id, tab.id === "lot" ? null : null)}
            className={cn(
              "flex h-14 flex-col items-center justify-center gap-1 text-xs",
              on ? "text-fg" : "text-poster-dim",
            )}
          >
            <Icon className="size-5" strokeWidth={1.75} />
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

export function TopBar({
  title,
  back,
  action,
}: {
  title: string;
  back?: () => void;
  action?: ReactNode;
}) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 px-2 pt-[env(safe-area-inset-top)]">
      {back ? (
        <button type="button" onClick={back} className="h-11 px-3 text-sm">
          Back
        </button>
      ) : (
        <span className="w-11" />
      )}
      <h1 className="min-w-0 flex-1 truncate text-center text-sm font-medium">{title}</h1>
      <div className="flex w-16 justify-end pr-2">{action}</div>
    </header>
  );
}
