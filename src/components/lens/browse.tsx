import { useEffect, useMemo, useState } from "react";
import { LOT, PLATFORMS, type LotItem, type PlatformId } from "@/lib/lens/catalog";
import { useLens } from "@/lib/lens/store";
import { Phone, TabBar, TopBar } from "@/components/lens/chrome";
import { cn } from "@/lib/utils";

function money(value: number) {
  return `$${value}`;
}

export function LotList() {
  const go = useLens((s) => s.go);
  const mode = useLens((s) => s.mode);
  const posted = useLens((s) => s.posted);
  const items = LOT.filter((item) => {
    if (mode === "barcode") return item.method === "barcode";
    if (mode === "qr") return item.method === "qr";
    return true;
  });

  return (
    <>
      <TopBar title={`${items.length} in this take`} action={<span className="text-xs text-poster-dim">Drafts</span>} />
      <ul className="min-h-0 flex-1 overflow-y-auto">
        {items.map((item) => {
          const sent = posted.some((row) => row.itemId === item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => go("item", item.id)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
              >
                <img src={item.angles[0].src} alt="" className="size-16 bg-stone object-contain" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-poster-fg">{item.name}</span>
                  <span className="mt-1 block text-xs text-poster-dim">
                    {item.brand} {item.model}
                  </span>
                  <span className="mt-1 block text-xs text-poster-dim">
                    {item.uncertain ? "Cross-check" : `${item.confidence}% match`}
                    {sent ? " · posted here" : ""}
                  </span>
                </span>
                <span className="text-sm tabular-nums text-poster-fg">{money(item.ask)}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <TabBar />
    </>
  );
}

function Timeline({ item }: { item: LotItem }) {
  const prices = item.timeline.map((point) => point.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const width = 320;
  const height = 96;
  const points = item.timeline
    .map((point, index) => {
      const x = (index / (item.timeline.length - 1)) * width;
      const y = height - 12 - ((point.price - min) / (max - min || 1)) * (height - 24);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-24 w-full text-ink" aria-hidden="true">
        <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} />
      </svg>
      <ul className="mt-2">
        {item.timeline.map((point) => (
          <li key={`${point.when}-${point.source}`} className="flex justify-between gap-3 border-b border-rule py-2 text-sm">
            <span className="text-ink-soft">
              {point.when} · {point.source}
            </span>
            <span className="tabular-nums">{money(point.price)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-soft">
        Sold and listed prices from {item.timeline[0].when} to {item.timeline[item.timeline.length - 1].when}. Ask {money(item.ask)} sits between {money(item.low)} and {money(item.high)}.
      </p>
    </div>
  );
}

const PANES = ["Angles", "Match", "Prices", "Copy"] as const;

export function ItemScreen() {
  const go = useLens((s) => s.go);
  const itemId = useLens((s) => s.itemId);
  const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
  const [pane, setPane] = useState<(typeof PANES)[number]>("Angles");
  const [angle, setAngle] = useState(0);
  const shot = item.angles[angle] ?? item.angles[0];

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-paper text-ink">
      <TopBar title={item.brand} back={() => go("lot")} />
      <div className="min-h-0 flex-1 overflow-y-auto pb-4">
        <div className="relative mx-4 aspect-square overflow-hidden bg-stone">
          <img src={shot.src} alt="" className="size-full object-contain" />
          <p className="absolute bottom-2 left-2 bg-paper px-2 py-1 text-xs">
            {shot.label} · focus {shot.focus}% · {shot.light}
          </p>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto px-4">
          {item.angles.map((frame, index) => (
            <button
              key={frame.label}
              type="button"
              onClick={() => setAngle(index)}
              className={cn("h-11 shrink-0 px-3 text-sm", index === angle ? "bg-ink text-paper" : "text-ink-soft")}
            >
              {frame.label}
            </button>
          ))}
        </div>
        <div className="mx-4 mt-4 grid grid-cols-4 border border-ink" role="tablist">
          {PANES.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={pane === name}
              onClick={() => setPane(name)}
              className={cn("h-11 text-xs", pane === name ? "bg-ink text-paper" : "text-ink")}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="px-4 pt-4" role="tabpanel">
          {pane === "Angles" ? (
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-xs text-ink-soft">Color</dt>
                <dd>{item.color}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-soft">Shape</dt>
                <dd>{item.shape}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-ink-soft">Markings</dt>
                <dd>{item.markings}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-ink-soft">Code</dt>
                <dd className="font-mono text-xs">{item.code ?? "None in the sharp frames"}</dd>
              </div>
            </dl>
          ) : null}
          {pane === "Match" ? (
            <div>
              <p className="text-sm">
                {item.uncertain
                  ? "The engines disagree. The draft keeps the careful name."
                  : "The engines agree. No second pass was required."}
              </p>
              <ul className="mt-3">
                {item.engines.map((hit) => (
                  <li key={hit.engine} className="border-t border-rule py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium">{hit.engine}</p>
                      <p className="text-sm tabular-nums">{hit.confidence}%</p>
                    </div>
                    <p className="mt-1 text-sm">{hit.title}</p>
                    <p className="mt-1 text-xs text-ink-soft">{hit.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {pane === "Prices" ? <Timeline item={item} /> : null}
          {pane === "Copy" ? (
            <div>
              <ul className="space-y-2">
                {item.skim.map((line) => (
                  <li key={line} className="text-base font-semibold">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed">{item.description}</p>
              <h2 className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">Features</h2>
              <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed">
                {item.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <h2 className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">Why this draft</h2>
              <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed">
                {item.benefits.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <h2 className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">Similar pieces</h2>
              <p className="mt-2 text-sm leading-relaxed">{item.similar}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button type="button" onClick={() => go("compose", item.id)} className="h-12 w-full bg-ink text-sm text-paper">
          Build the listing
        </button>
      </div>
    </div>
  );
}

const CHECKS = [
  "Front, three-quarter, detail, and scale frames are in focus",
  "Lighting is even on every selected frame",
  "Barcode or QR is attached, or the item is marked as having none",
  "Skim headlines are short enough to scan",
  "Full description uses only facts that repeated across sources",
  "Ask price sits inside the sold timeline",
  "Preview shows the same photos and the same words",
] as const;

export function Compose() {
  const go = useLens((s) => s.go);
  const itemId = useLens((s) => s.itemId);
  const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
  const connected = useLens((s) => s.connected);
  const selected = useLens((s) => s.selected);
  const toggle = useLens((s) => s.toggleChannel);
  const channels = PLATFORMS.filter((platform) => connected[platform.id]);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-paper text-ink">
      <TopBar title="Listing" back={() => go("item", item.id)} />
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        <article className="border border-ink p-4">
          <div className="flex gap-2 overflow-x-auto">
            {item.angles.map((frame) => (
              <img
                key={frame.label}
                src={frame.src}
                alt=""
                className="h-20 w-20 shrink-0 object-cover"
                style={{ objectPosition: frame.position }}
              />
            ))}
          </div>
          <h2 className="mt-3 text-lg font-semibold">{item.skim[0]}</h2>
          <p className="mt-1 text-sm text-ink-soft">{money(item.ask)} · {item.brand} {item.model}</p>
          <ul className="mt-3 space-y-1">
            {item.skim.map((line) => (
              <li key={line} className="text-sm font-semibold">{line}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
        </article>
        <h2 className="mt-6 text-xs uppercase tracking-[0.14em] text-ink-soft">Post to</h2>
        {channels.length === 0 ? (
          <p className="mt-2 text-sm">
            No shops connected.{" "}
            <button type="button" onClick={() => go("accounts")} className="underline">
              Connect accounts
            </button>
          </p>
        ) : (
          <ul className="mt-2">
            {channels.map((platform) => {
              const on = selected.includes(platform.id);
              return (
                <li key={platform.id}>
                  <button
                    type="button"
                    onClick={() => toggle(platform.id)}
                    className="flex h-12 w-full items-center justify-between text-left text-sm"
                  >
                    <span>
                      {platform.name}
                      <span className="block text-xs text-ink-soft">{connected[platform.id]}</span>
                    </span>
                    <span className={cn("h-6 w-10 rounded-full p-0.5", on ? "bg-ink" : "bg-rule")}>
                      <span className={cn("block size-5 bg-paper", on && "translate-x-4")} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          disabled={selected.length === 0}
          onClick={() => go("check", item.id)}
          className="h-12 w-full bg-ink text-sm text-paper disabled:opacity-40"
        >
          Check the listing
        </button>
      </div>
    </div>
  );
}

export function Check() {
  const go = useLens((s) => s.go);
  const itemId = useLens((s) => s.itemId);
  const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
  const selected = useLens((s) => s.selected);
  const markPosted = useLens((s) => s.markPosted);
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    setPassed(0);
    const timer = window.setInterval(() => {
      setPassed((count) => {
        if (count >= CHECKS.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 280);
    return () => window.clearInterval(timer);
  }, [item.id]);

  const ready = passed >= CHECKS.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-paper text-ink">
      <TopBar title="Before it posts" back={() => go("compose", item.id)} />
      <ul className="min-h-0 flex-1 overflow-y-auto px-4">
        {CHECKS.map((line, index) => (
          <li key={line} className="flex gap-3 border-b border-rule py-3 text-sm">
            <span className={cn("mt-0.5 size-4 shrink-0 border border-ink", index < passed && "bg-ink")} />
            <span className={index < passed ? "" : "text-ink-soft"}>{line}</span>
          </li>
        ))}
      </ul>
      <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          disabled={!ready}
          onClick={() => markPosted(item.id, selected)}
          className="h-12 w-full bg-ink text-sm text-paper disabled:opacity-40"
        >
          {ready ? `Post to ${selected.length} shop${selected.length === 1 ? "" : "s"}` : "Checking"}
        </button>
        <p className="mt-2 text-center text-xs text-ink-soft">
          Stays on this phone. Marketplace sites are not called from the preview.
        </p>
      </div>
    </div>
  );
}

export function Done() {
  const go = useLens((s) => s.go);
  const itemId = useLens((s) => s.itemId);
  const posted = useLens((s) => s.posted);
  const item = LOT.find((row) => row.id === itemId);
  const row = posted.find((entry) => entry.itemId === itemId);
  const names = (row?.channels ?? [])
    .map((id) => PLATFORMS.find((platform) => platform.id === id)?.name)
    .filter(Boolean);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-paper px-5 pt-16 text-ink">
      <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Queued on this phone</p>
      <h2 className="mt-3 font-display text-4xl leading-tight">{item?.skim[0] ?? "Listing"}</h2>
      <ul className="mt-6">
        {names.map((name) => (
          <li key={name} className="border-b border-rule py-3 text-sm">
            {name}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => go("lot")} className="mt-8 h-12 bg-ink text-sm text-paper">
        Back to the lot
      </button>
    </div>
  );
}

export function Accounts() {
  const connected = useLens((s) => s.connected);
  const connect = useLens((s) => s.connect);
  const disconnect = useLens((s) => s.disconnect);
  const [open, setOpen] = useState<PlatformId | null>(null);
  const [shop, setShop] = useState("");
  const count = useMemo(() => Object.keys(connected).length, [connected]);

  return (
    <>
      <TopBar title="Accounts" action={<span className="text-xs text-poster-dim">{count}</span>} />
      <p className="px-4 pb-2 text-xs leading-relaxed text-poster-dim">
        Same shops the cross-listing tools connect. A name is saved on this phone only.
      </p>
      <ul className="min-h-0 flex-1 overflow-y-auto">
        {PLATFORMS.map((platform) => {
          const shopName = connected[platform.id];
          const editing = open === platform.id;
          return (
            <li key={platform.id} className="border-b border-white/10 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-poster-fg">{platform.name}</p>
                  <p className="text-xs text-poster-dim">{shopName ? shopName : platform.detail}</p>
                </div>
                {shopName ? (
                  <button type="button" onClick={() => disconnect(platform.id)} className="h-11 px-2 text-sm text-poster-dim">
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(editing ? null : platform.id);
                      setShop("");
                    }}
                    className="h-11 px-3 text-sm text-poster-fg"
                  >
                    Connect
                  </button>
                )}
              </div>
              {editing ? (
                <form
                  className="mt-2 flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const next = shop.trim();
                    if (!next) return;
                    connect(platform.id, next);
                    setOpen(null);
                    setShop("");
                  }}
                >
                  <label className="sr-only" htmlFor={`shop-${platform.id}`}>
                    Shop name
                  </label>
                  <input
                    id={`shop-${platform.id}`}
                    value={shop}
                    onChange={(event) => setShop(event.target.value)}
                    placeholder="Shop or seller name"
                    className="h-11 min-w-0 flex-1 bg-void px-3 text-base text-poster-fg outline-none"
                  />
                  <button type="submit" className="h-11 bg-poster-fg px-3 text-sm text-poster">
                    Save
                  </button>
                </form>
              ) : null}
            </li>
          );
        })}
      </ul>
      <TabBar />
    </>
  );
}

export function LensShell({ children }: { children: React.ReactNode }) {
  return <Phone>{children}</Phone>;
}
