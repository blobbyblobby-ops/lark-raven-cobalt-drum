import { useEffect, useState } from "react";
import { LOT, SWEEP_STEPS } from "@/lib/lens/catalog";
import { useLens } from "@/lib/lens/store";
import { cn } from "@/lib/utils";

const DURATION = 9000;

export function Sweep() {
  const go = useLens((s) => s.go);
  const mode = useLens((s) => s.mode);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    let frame = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const next = Math.min(1, (now - start) / DURATION);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const step = Math.min(SWEEP_STEPS.length - 1, Math.floor(progress * SWEEP_STEPS.length));
  const visible = LOT.filter((item) => {
    if (mode === "barcode") return item.method === "barcode" && progress >= item.at;
    if (mode === "qr") return item.method === "qr" && progress >= item.at;
    return progress >= item.at;
  });

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-poster">
      <div className="relative h-[38dvh] shrink-0">
        <video
          src="/media/hero.mp4"
          className="size-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        />
        {visible.map((item) => (
          <span
            key={item.id}
            className="absolute border border-acid"
            style={{
              top: `${12 + (item.at * 40)}%`,
              left: `${8 + item.at * 70}%`,
              width: "18%",
              height: "22%",
            }}
          />
        ))}
      </div>
      <section className="flex min-h-0 flex-1 flex-col rounded-t-2xl bg-paper text-ink">
        <div className="px-5 pt-4">
          <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">{SWEEP_STEPS[step]}</p>
          <div className="mt-3 h-1 bg-rule">
            <div className="h-full bg-ink" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
        <ul className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {visible.map((item) => (
            <li key={item.id} className="flex items-center gap-3 border-b border-rule py-3">
              <img src={item.angles[0].src} alt="" className="size-12 bg-stone object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="text-xs text-ink-soft">
                  {item.method === "visual" ? "Visual" : item.method === "qr" ? "QR" : "Barcode"}
                  {" · "}
                  {item.confidence}%
                  {item.uncertain ? " · cross-check" : ""}
                </p>
              </div>
              <p className="text-sm tabular-nums">${item.ask}</p>
            </li>
          ))}
          {visible.length === 0 ? (
            <li className="py-8 text-sm text-ink-soft">Looking for the first object.</li>
          ) : null}
        </ul>
        <div className="grid grid-cols-2 gap-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <button type="button" onClick={() => go("lens")} className="h-12 text-sm text-ink-soft">
            Stop
          </button>
          <button
            type="button"
            onClick={() => go("lot")}
            className={cn("h-12 bg-ink text-sm text-paper", progress < 1 && "opacity-70")}
          >
            {progress < 1 ? "Review early" : "Review the lot"}
          </button>
        </div>
      </section>
    </div>
  );
}
