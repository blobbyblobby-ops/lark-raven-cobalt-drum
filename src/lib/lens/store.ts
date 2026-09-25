import { create } from "zustand";
import { LOT, type PlatformId } from "@/lib/lens/catalog";

const KEY = "lotlens-app";

export type Screen = "lens" | "sweep" | "lot" | "item" | "compose" | "check" | "done" | "accounts";

type Saved = {
  connected: Partial<Record<PlatformId, string>>;
  posted: { itemId: string; channels: PlatformId[]; at: string }[];
};

type LensState = Saved & {
  ready: boolean;
  screen: Screen;
  itemId: string | null;
  live: boolean;
  facing: "environment" | "user";
  torch: boolean;
  mode: "video" | "barcode" | "qr";
  selected: PlatformId[];
  hydrate: () => void;
  go: (screen: Screen, itemId?: string | null) => void;
  setLive: (live: boolean) => void;
  flip: () => void;
  setTorch: (torch: boolean) => void;
  setMode: (mode: LensState["mode"]) => void;
  connect: (id: PlatformId, shop: string) => void;
  disconnect: (id: PlatformId) => void;
  toggleChannel: (id: PlatformId) => void;
  markPosted: (itemId: string, channels: PlatformId[]) => void;
};

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { connected: {}, posted: [] };
    const parsed = JSON.parse(raw) as Saved;
    return {
      connected: parsed.connected ?? {},
      posted: parsed.posted ?? [],
    };
  } catch {
    return { connected: {}, posted: [] };
  }
}

function save(state: LensState) {
  const data: Saved = { connected: state.connected, posted: state.posted };
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* private mode */
  }
}

export const useLens = create<LensState>((set, get) => ({
  ready: false,
  screen: "lens",
  itemId: null,
  live: false,
  facing: "environment",
  torch: false,
  mode: "video",
  selected: [],
  connected: {},
  posted: [],
  hydrate: () => {
    if (get().ready) return;
    set({ ...load(), ready: true });
  },
  go: (screen, itemId) => {
    const next = itemId === undefined ? get().itemId : itemId;
    const selected =
      screen === "compose" && next
        ? (Object.keys(get().connected) as PlatformId[])
        : get().selected;
    set({ screen, itemId: next, selected: screen === "compose" ? selected : get().selected });
  },
  setLive: (live) => set({ live }),
  flip: () => set({ facing: get().facing === "environment" ? "user" : "environment" }),
  setTorch: (torch) => set({ torch }),
  setMode: (mode) => set({ mode }),
  connect: (id, shop) => {
    const connected = { ...get().connected, [id]: shop };
    set({ connected });
    save(get());
  },
  disconnect: (id) => {
    const connected = { ...get().connected };
    delete connected[id];
    set({
      connected,
      selected: get().selected.filter((item) => item !== id),
    });
    save(get());
  },
  toggleChannel: (id) => {
    if (!get().connected[id]) return;
    const selected = get().selected.includes(id)
      ? get().selected.filter((item) => item !== id)
      : [...get().selected, id];
    set({ selected });
  },
  markPosted: (itemId, channels) => {
    const posted = [
      { itemId, channels, at: new Date().toISOString() },
      ...get().posted.filter((row) => row.itemId !== itemId),
    ];
    set({ posted, screen: "done" });
    save(get());
  },
}));

export function currentItem() {
  const id = useLens.getState().itemId;
  return LOT.find((item) => item.id === id) ?? null;
}
