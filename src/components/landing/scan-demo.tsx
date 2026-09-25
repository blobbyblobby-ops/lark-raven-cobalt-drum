import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Method = "barcode" | "visual";

type ScanItem = {
  id: string;
  name: string;
  method: Method;
  price: number;
  sold: number;
  at: number;
  box: { t: string; l: string; w: string; h: string };
  label: "top" | "bottom";
  thumb: string;
};

const ITEMS: ScanItem[] = [
  {
    id: "cooker",
    name: "7-in-1 electric pressure cooker",
    method: "barcode",
    price: 54,
    sold: 86,
    at: 0.08,
    box: { t: "16%", l: "5%", w: "17%", h: "34%" },
    label: "top",
    thumb: "/images/cooker.jpg",
  },
  {
    id: "headphones",
    name: "Wireless over-ear headphones",
    method: "barcode",
    price: 198,
    sold: 41,
    at: 0.18,
    box: { t: "54%", l: "3%", w: "18%", h: "28%" },
    label: "bottom",
    thumb: "/images/headphones.jpg",
  },
  {
    id: "sneakers",
    name: "Low-top basketball sneakers",
    method: "barcode",
    price: 112,
    sold: 63,
    at: 0.28,
    box: { t: "72%", l: "22%", w: "16%", h: "20%" },
    label: "bottom",
    thumb: "/images/sneakers.jpg",
  },
  {
    id: "bowl",
    name: "Vintage banded mixing bowl",
    method: "visual",
    price: 34,
    sold: 19,
    at: 0.4,
    box: { t: "50%", l: "33%", w: "12%", h: "20%" },
    label: "top",
    thumb: "/images/bowl.jpg",
  },
  {
    id: "lamp",
    name: "Brass cone desk lamp",
    method: "visual",
    price: 78,
    sold: 11,
    at: 0.5,
    box: { t: "6%", l: "39%", w: "11%", h: "40%" },
    label: "top",
    thumb: "/images/lamp.jpg",
  },
  {
    id: "dutch",
    name: "Enameled cast-iron dutch oven",
    method: "visual",
    price: 186,
    sold: 27,
    at: 0.62,
    box: { t: "34%", l: "51%", w: "15%", h: "28%" },
    label: "top",
    thumb: "/images/dutch-oven.jpg",
  },
  {
    id: "console",
    name: "Handheld game console",
    method: "barcode",
    price: 241,
    sold: 54,
    at: 0.74,
    box: { t: "58%", l: "63%", w: "13%", h: "18%" },
    label: "bottom",
    thumb: "/images/console.jpg",
  },
  {
    id: "tote",
    name: "Cognac leather tote",
    method: "visual",
    price: 129,
    sold: 16,
    at: 0.86,
    box: { t: "18%", l: "76%", w: "16%", h: "46%" },
    label: "top",
    thumb: "/images/tote.jpg",
  },
];

const DURATION_MS = 8200;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScanDemo() {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const raf = useRef<number | null>(null);
  const started = useRef<number | null>(null);
  const offset = useRef(0);

  const visible = useMemo(
    () => ITEMS.filter((item) => progress >= item.at),
    [progress],
  );
  const current = visible[visible.length - 1] ?? null;
  const total = visible.reduce((sum, item) => sum + item.price, 0);
  const barcodes = visible.filter((i) => i.method === "barcode").length;
  const visuals = visible.filter((i) => i.method === "visual").length;
  const done = progress >= 1;

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  function tick(now: number) {
    if (started.current == null) started.current = now;
    const p = Math.min(1, offset.current + (now - started.current) / DURATION_MS);
    setProgress(p);
    if (p < 1) {
      raf.current = requestAnimationFrame(tick);
    } else {
      setPlaying(false);
      started.current = null;
      offset.current = 1;
    }
  }

  function play() {
    if (prefersReducedMotion()) {
      setProgress(1);
      setHasRun(true);
      setPlaying(false);
      return;
    }
    if (progress >= 1) {
      offset.current = 0;
      setProgress(0);
    }
    setHasRun(true);
    setPlaying(true);
    started.current = null;
    raf.current = requestAnimationFrame(tick);
  }

  function pause() {
    if (raf.current) cancelAnimationFrame(raf.current);
    offset.current = progress;
    started.current = null;
    setPlaying(false);
  }

  function replay() {
    if (raf.current) cancelAnimationFrame(raf.current);
    offset.current = 0;
    started.current = null;
    setProgress(0);
    setPlaying(false);
    play();
  }

  return (
    <section id="product" aria-labelledby="product-heading" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted">Live identify</p>
            <h2 id="product-heading" className="mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl">
              Barcodes when they exist. Vision when they don't.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Play a table sweep. LotLens boxes each piece, tags the method, and
              writes a priced draft before the clip ends.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {!playing && progress === 0 && (
              <Button onClick={play}>
                <Play className="size-4" />
                Play scan
              </Button>
            )}
            {playing && (
              <Button variant="outline" onClick={pause}>
                <Pause className="size-4" />
                Pause
              </Button>
            )}
            {!playing && progress > 0 && progress < 1 && (
              <Button onClick={play}>
                <Play className="size-4" />
                Resume
              </Button>
            )}
            {hasRun && (
              <Button variant="outline" onClick={replay}>
                <RotateCcw className="size-4" />
                Replay
              </Button>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.9fr)]">
          <div className="overflow-hidden rounded-xl bg-surface ring-1 ring-border">
            <div className="relative aspect-video bg-elevated">
              <img
                src="/images/hero-table.jpg"
                alt="Reseller table of mixed inventory used as the scan source"
                className="h-full w-full object-cover"
              />
              {ITEMS.map((item) => {
                const on = progress >= item.at;
                const active = current?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "absolute rounded-sm ring-1 transition-[opacity,transform,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      item.method === "barcode"
                        ? "ring-primary/80"
                        : "ring-accent/90",
                      on ? "opacity-100" : "opacity-0",
                      active ? "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_35%,transparent)]" : "",
                    )}
                    style={{
                      top: item.box.t,
                      left: item.box.l,
                      width: item.box.w,
                      height: item.box.h,
                    }}
                  >
                    {active && (
                      <span
                        className={cn(
                          "absolute left-1 whitespace-nowrap rounded-sm px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide",
                          item.label === "top" ? "top-1" : "bottom-1",
                          item.method === "barcode"
                            ? "bg-primary text-primary-fg"
                            : "bg-accent text-accent-fg",
                        )}
                      >
                        {item.method}
                      </span>
                    )}
                  </div>
                );
              })}
              {playing && (
                <div
                  className="pointer-events-none absolute inset-y-0 w-px bg-primary/70"
                  style={{ left: `${Math.round(progress * 100)}%` }}
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-bg/50">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-muted">
              <p>
                <span className="tabular-nums text-fg">{visible.length}</span>
                <span> / {ITEMS.length} identified</span>
              </p>
              <p className="tabular-nums">
                {barcodes} barcode · {visuals} visual
              </p>
              <p className="tabular-nums text-fg">${total.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex max-h-[32rem] flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="text-sm font-medium text-fg">Draft listings</h3>
              <span className="text-xs text-subtle">Suggested retail</span>
            </div>
            <ul className="flex-1 space-y-1 overflow-auto p-2">
              {visible.length === 0 && (
                <li className="px-3 py-10 text-center text-sm text-subtle">
                  Press play to run the sweep.
                </li>
              )}
              {visible
                .slice()
                .reverse()
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 rounded-md px-2 py-2"
                  >
                    <img
                      src={item.thumb}
                      alt={item.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="size-12 rounded-sm object-cover ring-1 ring-border"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-fg">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs text-subtle">
                        {item.method === "barcode" ? "UPC match" : "Visual match"} ·{" "}
                        {item.sold} sold / 90d
                      </p>
                    </div>
                    <p className="font-mono text-sm tabular-nums text-fg">
                      ${item.price}
                    </p>
                  </li>
                ))}
            </ul>
            {done && (
              <div className="border-t border-border px-4 py-3 text-sm text-muted">
                8 drafts ready. Review, then post to your shops.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
