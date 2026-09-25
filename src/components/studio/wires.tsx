import type { ReactNode } from "react";

function Frame({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={className} aria-hidden="true">
      {children}
    </div>
  );
}

export function WirePaper() {
  return (
    <Frame className="min-h-dvh bg-paper pb-[calc(8.75rem+env(safe-area-inset-bottom))]">
      <div className="h-16 border-b border-ink" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="h-48 bg-rule lg:col-span-8" />
        <div className="h-48 border border-ink lg:col-span-4" />
      </div>
      <div className="grid border-y border-ink sm:grid-cols-3">
        <div className="h-40 border-ink sm:border-r" />
        <div className="h-40 border-t border-ink sm:border-t-0 sm:border-r" />
        <div className="h-40 border-t border-ink sm:border-t-0" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="h-28 bg-ink lg:col-span-4" />
        <div className="h-28 border border-ink lg:col-span-8" />
      </div>
    </Frame>
  );
}

export function WireSignal() {
  return (
    <Frame className="min-h-dvh bg-void pb-[calc(8.75rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="h-40 bg-acid" />
        <div className="h-28 border border-acid" />
      </div>
      <div className="grid sm:grid-cols-3">
        <div className="h-36 bg-void-2" />
        <div className="h-36 bg-void" />
        <div className="h-36 bg-void-2" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-3 sm:px-8">
        <div className="h-24 border border-mist" />
        <div className="h-24 bg-acid" />
        <div className="h-24 border border-mist" />
      </div>
    </Frame>
  );
}

export function WireShowroom() {
  return (
    <Frame className="min-h-dvh bg-stone pb-[calc(8.75rem+env(safe-area-inset-bottom))]">
      <div className="h-16" />
      <div className="px-5 sm:px-8">
        <div className="relative mx-auto max-w-6xl">
          <img src="/images/hero-table.jpg" alt="" className="aspect-[16/9] w-full object-cover" />
          <div className="h-36 bg-stone-2 sm:absolute sm:bottom-6 sm:left-6 sm:w-80" />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <div className="h-28 bg-clay/30" />
        <div className="h-28 bg-clay/30" />
        <div className="h-28 bg-clay/30" />
      </div>
      <div className="h-48 bg-oxide" />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3 sm:px-8">
        <div className="h-20 bg-band-fg/10" />
        <div className="h-20 bg-band-fg/10" />
        <div className="h-20 bg-band-fg/10" />
      </div>
    </Frame>
  );
}

export function WireSpec() {
  return (
    <Frame className="min-h-dvh bg-spec pb-[calc(8.75rem+env(safe-area-inset-bottom))] lg:grid lg:grid-cols-[16rem_1fr]">
      <div className="border-b border-spec-line bg-spec-2 lg:border-b-0 lg:border-r">
        <div className="m-6 h-10 w-24 bg-spec-ink" />
        <div className="m-6 h-24 bg-spec-line" />
      </div>
      <div>
        <div className="border-b border-spec-line px-6 py-10">
          <div className="h-24 max-w-xl bg-spec-ink" />
          <div className="mt-6 h-12 max-w-sm bg-spec-line" />
        </div>
        <div className="h-20 border-b border-spec-line" />
        <div className="h-20 border-b border-spec-line" />
        <div className="h-20 border-b border-spec-line" />
        <div className="grid gap-4 px-6 py-8 sm:grid-cols-3">
          <div className="h-16 bg-spec-line" />
          <div className="h-16 bg-spec-line" />
          <div className="h-16 bg-spec-line" />
        </div>
      </div>
    </Frame>
  );
}

export function WirePoster() {
  return (
    <Frame className="bg-poster pb-[calc(8.75rem+env(safe-area-inset-bottom))]">
      <div className="flex min-h-dvh flex-col justify-between px-5 py-8 sm:px-10">
        <div className="h-6 w-24 bg-poster-fg" />
        <div className="h-40 max-w-3xl bg-poster-fg sm:h-56" />
        <div className="h-16 max-w-xs bg-poster-dim" />
      </div>
      <div className="h-72 bg-band" />
      <div className="h-72 bg-poster" />
      <div className="h-72 bg-band" />
      <div className="grid gap-4 px-5 py-16 sm:grid-cols-3 sm:px-10">
        <div className="h-16 border border-poster-dim" />
        <div className="h-16 border border-poster-dim" />
        <div className="h-16 bg-band" />
      </div>
    </Frame>
  );
}

const WIRES = [WirePaper, WireSignal, WireShowroom, WireSpec, WirePoster] as const;

export function Wireframe({ index }: { index: number }) {
  const Wire = WIRES[index] ?? WirePaper;
  return <Wire />;
}
