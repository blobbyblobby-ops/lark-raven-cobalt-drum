import { useEffect, useRef, useState } from "react";
import { SwitchCamera, Zap, ZapOff } from "lucide-react";
import { TabBar } from "@/components/lens/chrome";
import { useLens } from "@/lib/lens/store";
import { cn } from "@/lib/utils";

export function Capture() {
  const live = useLens((s) => s.live);
  const facing = useLens((s) => s.facing);
  const torch = useLens((s) => s.torch);
  const mode = useLens((s) => s.mode);
  const setLive = useLens((s) => s.setLive);
  const flip = useLens((s) => s.flip);
  const setTorch = useLens((s) => s.setTorch);
  const setMode = useLens((s) => s.setMode);
  const go = useLens((s) => s.go);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraError, setCameraError] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let stream: MediaStream | null = null;
    let cancelled = false;

    async function start() {
      if (!video) return;
      if (live) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: facing },
            audio: false,
          });
          if (cancelled) {
            stream.getTracks().forEach((track) => track.stop());
            return;
          }
          video.srcObject = stream;
          await video.play();
          setCameraError("");
          const track = stream.getVideoTracks()[0];
          if (torch && track) {
            try {
              await track.applyConstraints({
                advanced: [{ torch: true } as MediaTrackConstraintSet],
              });
            } catch {
              setTorch(false);
            }
          }
        } catch {
          setCameraError("Camera is blocked. The sample lot still runs.");
          setLive(false);
        }
        return;
      }
      video.srcObject = null;
      video.src = "/media/hero.mp4";
      video.loop = true;
      try {
        await video.play();
      } catch {
        /* autoplay can wait for a tap */
      }
    }

    void start();
    return () => {
      cancelled = true;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, [live, facing, torch, setLive, setTorch]);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-poster">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        playsInline
        muted
        autoPlay
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <header className="relative z-10 flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <p className="font-display text-2xl text-poster-fg">LotLens</p>
        <button
          type="button"
          onClick={() => setTorch(!torch)}
          className="grid size-11 place-items-center text-poster-fg"
          aria-label={torch ? "Torch off" : "Torch on"}
        >
          {torch ? <Zap className="size-5" /> : <ZapOff className="size-5" />}
        </button>
      </header>

      <p className="relative z-10 px-6 pt-3 text-center text-sm text-poster-fg">
        {mode === "video"
          ? "Film the lot. Sharp frames are pulled for you."
          : mode === "barcode"
            ? "Hold a barcode steady in the frame."
            : "Hold a QR code steady in the frame."}
      </p>

      <div className="relative z-10 mx-8 mt-4 min-h-48 flex-1">
        <span className="absolute left-0 top-0 size-8 border-l-2 border-t-2 border-poster-fg" />
        <span className="absolute right-0 top-0 size-8 border-r-2 border-t-2 border-poster-fg" />
        <span className="absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-poster-fg" />
        <span className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-poster-fg" />
      </div>

      {cameraError ? (
        <p className="relative z-10 mx-6 mt-3 text-center text-xs text-poster-fg">{cameraError}</p>
      ) : null}

      <div className="relative z-10 mt-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto mb-4 grid w-fit grid-cols-3 rounded-full bg-black/50 p-1" role="group" aria-label="Scan mode">
          {(
            [
              ["video", "Video"],
              ["barcode", "Barcode"],
              ["qr", "QR"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id)}
              className={cn(
                "h-9 rounded-full px-4 text-sm",
                mode === id ? "bg-poster-fg text-poster" : "text-poster-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 items-center">
          <button
            type="button"
            onClick={() => setLive(!live)}
            className="h-11 justify-self-start px-2 text-left text-xs text-poster-fg"
          >
            {live ? "Sample lot" : "Live camera"}
          </button>
          <button
            type="button"
            onClick={() => go("sweep")}
            className="grid size-20 place-items-center justify-self-center rounded-full bg-poster-fg/20 ring-4 ring-poster-fg"
            aria-label="Start the take"
          >
            <span className="size-14 rounded-full bg-poster-fg" />
          </button>
          <button
            type="button"
            onClick={flip}
            className="grid size-11 place-items-center justify-self-end text-poster-fg"
            aria-label="Flip camera"
          >
            <SwitchCamera className="size-5" />
          </button>
        </div>
        <p className="mt-2 mb-1 text-center text-xs text-poster-dim">
          {live ? "Live preview. The shutter runs the sample table." : "Pointed at the sample table."}
        </p>
      </div>
      <TabBar />
    </div>
  );
}
