import { create } from "zustand";

const STORAGE_KEY = "lotlens-waitlist";

type WaitlistState = {
  email: string | null;
  ready: boolean;
  hydrate: () => void;
  join: (email: string) => void;
};

export const useWaitlist = create<WaitlistState>((set) => ({
  email: null,
  ready: false,
  hydrate: () => {
    try {
      set({ email: localStorage.getItem(STORAGE_KEY), ready: true });
    } catch {
      set({ ready: true });
    }
  },
  join: (email) => {
    try {
      localStorage.setItem(STORAGE_KEY, email);
    } catch {
      /* private mode */
    }
    set({ email });
  },
}));

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
