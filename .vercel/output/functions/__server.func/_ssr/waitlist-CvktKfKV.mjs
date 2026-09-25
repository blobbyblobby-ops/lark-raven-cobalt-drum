import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/waitlist-CvktKfKV.js
var STORAGE_KEY = "lotlens-waitlist";
var useWaitlist = create((set) => ({
	email: null,
	ready: false,
	hydrate: () => {
		try {
			set({
				email: localStorage.getItem(STORAGE_KEY),
				ready: true
			});
		} catch {
			set({ ready: true });
		}
	},
	join: (email) => {
		try {
			localStorage.setItem(STORAGE_KEY, email);
		} catch {}
		set({ email });
	}
}));
function isValidEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
//#endregion
export { useWaitlist as n, isValidEmail as t };
