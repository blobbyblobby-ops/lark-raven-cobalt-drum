import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Aperture, h as LayoutList, n as ZapOff, o as SwitchCamera, s as Store, t as Zap } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsjfVKP_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function angles(src, withCode) {
	const shots = [
		{
			label: "Front",
			src,
			position: "50% 45%",
			focus: 97,
			light: "Daylight, even"
		},
		{
			label: "Three-quarter",
			src,
			position: "28% 50%",
			focus: 93,
			light: "Soft side"
		},
		{
			label: "Detail",
			src,
			position: "62% 28%",
			focus: 90,
			light: "Fill, no glare"
		},
		{
			label: "Scale",
			src,
			position: "50% 78%",
			focus: 86,
			light: "Overhead"
		}
	];
	if (withCode) shots.push({
		label: "Code",
		src,
		position: "70% 62%",
		focus: 95,
		light: "Flat, in focus"
	});
	return shots;
}
var LOT = [
	{
		id: "headphones",
		name: "Wireless over-ear headphones",
		brand: "Lumen Audio",
		model: "HA-720",
		color: "Black",
		shape: "Over-ear, folding hinge",
		markings: "HA-720 on the yoke",
		method: "barcode",
		code: "0194827300154",
		confidence: 98,
		uncertain: false,
		ask: 148,
		low: 119,
		high: 176,
		engines: [
			{
				engine: "Barcode catalog",
				title: "Lumen Audio HA-720",
				confidence: 99,
				note: "UPC exact"
			},
			{
				engine: "eBay sold",
				title: "Lumen HA-720 wireless",
				confidence: 96,
				note: "Same model string"
			},
			{
				engine: "Amazon",
				title: "Lumen Audio HA-720",
				confidence: 97,
				note: "Title and image agree"
			}
		],
		angles: angles("/images/headphones.jpg", true),
		timeline: [
			{
				when: "Mar 2024",
				source: "eBay",
				price: 169
			},
			{
				when: "Aug 2024",
				source: "Amazon",
				price: 159
			},
			{
				when: "Jan 2025",
				source: "Mercari",
				price: 142
			},
			{
				when: "Jun 2025",
				source: "eBay",
				price: 151
			},
			{
				when: "Nov 2025",
				source: "Facebook",
				price: 135
			},
			{
				when: "Apr 2026",
				source: "eBay",
				price: 148
			}
		],
		skim: [
			"HA-720 over-ear",
			"Bluetooth, folding",
			"Black, complete"
		],
		description: "Lumen Audio HA-720 wireless over-ear headphones. The same model string, UPC, and earcup shape show up on eBay, Amazon, and Mercari listings. Folding hinges, padded headband, black finish. Sold prices cluster between $119 and $176 depending on pads and whether the cable is included.",
		features: [
			"Bluetooth over-ear",
			"Folding yoke",
			"Model HA-720 printed on the hinge",
			"UPC 0194827300154"
		],
		benefits: ["Identified from the barcode, not a guess", "Ask sits inside the two-year sold band"],
		similar: "Same period as the HA-520. The HA-720 is the folding one; the HA-520 does not fold and sells lower.",
		at: .12
	},
	{
		id: "cooker",
		name: "7-in-1 electric pressure cooker",
		brand: "Northwind",
		model: "NW-PC80",
		color: "Stainless and black",
		shape: "Oval countertop cooker",
		markings: "NW-PC80 on the base plate",
		method: "barcode",
		code: "0085719200448",
		confidence: 96,
		uncertain: false,
		ask: 54,
		low: 42,
		high: 79,
		engines: [
			{
				engine: "Barcode catalog",
				title: "Northwind NW-PC80 8 qt",
				confidence: 98,
				note: "UPC exact"
			},
			{
				engine: "Amazon",
				title: "Northwind 7-in-1 8-quart",
				confidence: 95,
				note: "Capacity matches the plate"
			},
			{
				engine: "Walmart",
				title: "Northwind PC80",
				confidence: 93,
				note: "Same model family"
			}
		],
		angles: angles("/images/cooker.jpg", true),
		timeline: [
			{
				when: "May 2023",
				source: "Amazon",
				price: 89
			},
			{
				when: "Dec 2023",
				source: "eBay",
				price: 71
			},
			{
				when: "Jul 2024",
				source: "Facebook",
				price: 60
			},
			{
				when: "Feb 2025",
				source: "Mercari",
				price: 55
			},
			{
				when: "Sep 2025",
				source: "eBay",
				price: 49
			},
			{
				when: "Jun 2026",
				source: "eBay",
				price: 54
			}
		],
		skim: [
			"Northwind 8 qt",
			"7-in-1 pressure",
			"Model NW-PC80"
		],
		description: "Northwind NW-PC80 7-in-1 electric pressure cooker, 8 quart, stainless lid and black body. Catalogs that carry the UPC describe the same function set: pressure, slow, steam, sauté, rice, yogurt, and keep warm. Used sold prices have settled in the mid-$50s.",
		features: [
			"8 quart",
			"7 functions listed on every current retail page",
			"Model plate NW-PC80",
			"UPC 0085719200448"
		],
		benefits: ["Barcode lock, so the title is not a lookalike cooker", "Ask follows the used market, not the original retail"],
		similar: "The 6-quart NW-PC60 is shorter and sells about $15 less. This body matches the 8-quart height.",
		at: .26
	},
	{
		id: "sneakers",
		name: "Low-top basketball sneakers",
		brand: "Courtline",
		model: "Low 98",
		color: "White and navy",
		shape: "Low-top, cupsole",
		markings: "Size tag and tongue label",
		method: "qr",
		code: "QR CL-98-WHT",
		confidence: 94,
		uncertain: false,
		ask: 112,
		low: 88,
		high: 140,
		engines: [
			{
				engine: "QR payload",
				title: "Courtline Low 98",
				confidence: 97,
				note: "Code reads CL-98-WHT"
			},
			{
				engine: "StockX-style sold",
				title: "Courtline Low 98 white",
				confidence: 91,
				note: "Colorway agrees"
			},
			{
				engine: "eBay",
				title: "Courtline Low '98",
				confidence: 92,
				note: "Same silhouette"
			}
		],
		angles: angles("/images/sneakers.jpg", true),
		timeline: [
			{
				when: "Apr 2024",
				source: "eBay",
				price: 130
			},
			{
				when: "Oct 2024",
				source: "Depop",
				price: 118
			},
			{
				when: "Mar 2025",
				source: "Mercari",
				price: 105
			},
			{
				when: "Aug 2025",
				source: "eBay",
				price: 99
			},
			{
				when: "Jan 2026",
				source: "Poshmark",
				price: 120
			},
			{
				when: "Jul 2026",
				source: "eBay",
				price: 112
			}
		],
		skim: [
			"Courtline Low 98",
			"White / navy",
			"QR confirmed"
		],
		description: "Courtline Low 98 low-top basketball sneakers, white leather with navy overlays. The QR on the tongue resolves to CL-98-WHT, and sold listings using that code share the cupsole and the navy heel tab. Prices move with size and sole wear.",
		features: [
			"Low-top cupsole",
			"Tongue QR CL-98-WHT",
			"White and navy",
			"Lace-up"
		],
		benefits: ["QR removes the colorway mix-ups common on this silhouette"],
		similar: "The High 98 is the same last with a padded collar and sells higher. This pair is the low.",
		at: .4
	},
	{
		id: "bowl",
		name: "Vintage banded mixing bowl",
		brand: "Unmarked",
		model: "Banded nest, circa 1950s",
		color: "Ivory with colored bands",
		shape: "Nested mixing bowl",
		markings: "No maker's mark in frame",
		method: "visual",
		code: null,
		confidence: 71,
		uncertain: true,
		ask: 34,
		low: 22,
		high: 48,
		engines: [
			{
				engine: "Visual match",
				title: "Banded mixing bowl, unmarked",
				confidence: 74,
				note: "Shape and bands"
			},
			{
				engine: "eBay image",
				title: "Pyrex-style primary band",
				confidence: 61,
				note: "No stamp, so this is weak"
			},
			{
				engine: "Amazon",
				title: "No retail barcode",
				confidence: 18,
				note: "Nothing current matches"
			}
		],
		angles: angles("/images/bowl.jpg", false),
		timeline: [
			{
				when: "Jun 2023",
				source: "Etsy",
				price: 42
			},
			{
				when: "Jan 2024",
				source: "eBay",
				price: 28
			},
			{
				when: "Aug 2024",
				source: "Etsy",
				price: 46
			},
			{
				when: "Mar 2025",
				source: "Facebook",
				price: 24
			},
			{
				when: "Oct 2025",
				source: "eBay",
				price: 31
			},
			{
				when: "May 2026",
				source: "Etsy",
				price: 36
			}
		],
		skim: [
			"Banded mixing bowl",
			"No maker's mark",
			"Needs a glance"
		],
		description: "Ivory mixing bowl with colored bands, nesting shape, no readable maker's mark. Sites that show this shape call it a mid-century banded bowl. One image index leans toward a marked glass brand; that claim is rejected because the stamp is not in any sharp frame. Left as unmarked, with the sold range for banded bowls that also lack a mark.",
		features: [
			"Nested mixing bowl",
			"Painted bands",
			"No barcode",
			"Mark not visible"
		],
		benefits: ["Cross-check refused a forced brand", "Price uses only unmarked comps"],
		similar: "Marked glass bowls from the same decades sell higher when the stamp is readable. This draft does not claim one.",
		at: .55
	},
	{
		id: "lamp",
		name: "Brass cone desk lamp",
		brand: "Hale",
		model: "Cone task, unmarked base",
		color: "Brass",
		shape: "Cone shade, swing arm",
		markings: "No model plate. Brass finish and joint hardware.",
		method: "visual",
		code: null,
		confidence: 84,
		uncertain: false,
		ask: 78,
		low: 55,
		high: 110,
		engines: [
			{
				engine: "Visual match",
				title: "Brass cone task lamp",
				confidence: 86,
				note: "Shade, arm, and base agree"
			},
			{
				engine: "eBay image",
				title: "Brass cone desk lamp",
				confidence: 83,
				note: "Same joint"
			},
			{
				engine: "Etsy",
				title: "Mid-century brass cone",
				confidence: 80,
				note: "Finish agrees, no logo"
			}
		],
		angles: angles("/images/lamp.jpg", false),
		timeline: [
			{
				when: "Feb 2024",
				source: "Etsy",
				price: 96
			},
			{
				when: "Sep 2024",
				source: "eBay",
				price: 72
			},
			{
				when: "Apr 2025",
				source: "Chairish-style",
				price: 110
			},
			{
				when: "Nov 2025",
				source: "Facebook",
				price: 60
			},
			{
				when: "Feb 2026",
				source: "eBay",
				price: 75
			},
			{
				when: "Aug 2026",
				source: "Etsy",
				price: 84
			}
		],
		skim: [
			"Brass cone lamp",
			"Swing arm",
			"No barcode"
		],
		description: "Brass desk lamp with a cone shade and a swing arm. Three image indexes agree on the shape and the finish. None of them finds a model plate, so the draft names the form and the finish and does not invent a designer. Sold comps for this shape run from about $55 to $110.",
		features: [
			"Cone shade",
			"Swing arm",
			"Brass finish",
			"No barcode or model plate"
		],
		benefits: ["Title describes what is visible", "Ask is the middle of the sold band"],
		similar: "A labeled architect lamp with a rectangular head is a different object and a different price. This one is the cone.",
		at: .7
	},
	{
		id: "dutch",
		name: "Enameled cast-iron dutch oven",
		brand: "Vale",
		model: "Round 5.5 qt",
		color: "Cream enamel",
		shape: "Round dutch oven with side handles",
		markings: "Vale on the lid knob",
		method: "visual",
		code: null,
		confidence: 92,
		uncertain: false,
		ask: 168,
		low: 130,
		high: 210,
		engines: [
			{
				engine: "Visual match",
				title: "Vale round 5.5 qt",
				confidence: 93,
				note: "Knob mark and handle shape"
			},
			{
				engine: "eBay",
				title: "Vale enamel dutch oven 5.5",
				confidence: 91,
				note: "Same lid"
			},
			{
				engine: "Amazon",
				title: "Vale 5.5 quart round",
				confidence: 90,
				note: "Current colorway cream"
			}
		],
		angles: angles("/images/dutch-oven.jpg", false),
		timeline: [
			{
				when: "Jan 2024",
				source: "Amazon",
				price: 198
			},
			{
				when: "Jul 2024",
				source: "eBay",
				price: 155
			},
			{
				when: "Dec 2024",
				source: "Mercari",
				price: 140
			},
			{
				when: "May 2025",
				source: "eBay",
				price: 162
			},
			{
				when: "Dec 2025",
				source: "Facebook",
				price: 149
			},
			{
				when: "Jun 2026",
				source: "eBay",
				price: 168
			}
		],
		skim: [
			"Vale 5.5 qt",
			"Cream enamel",
			"Lid mark readable"
		],
		description: "Vale enameled cast-iron dutch oven, round, 5.5 quart, cream. The word Vale is readable on the lid in the sharp frame. Retail and sold listings that show that mark and the side handles use the 5.5 quart size. Chips change the price; this draft assumes you will say so if you see them.",
		features: [
			"5.5 quart round",
			"Cream enamel",
			"Side handles",
			"Lid mark: Vale"
		],
		benefits: ["Brand comes from a readable mark, not a similar pot", "Ask is inside the sold band for clean examples"],
		similar: "The 7-quart oval is longer and usually $40 more. The handle span here matches the 5.5 round.",
		at: .86
	}
];
var PLATFORMS = [
	{
		id: "ebay",
		name: "eBay",
		detail: "Auction or buy it now"
	},
	{
		id: "amazon",
		name: "Amazon",
		detail: "Seller Central"
	},
	{
		id: "etsy",
		name: "Etsy",
		detail: "Vintage and handmade"
	},
	{
		id: "facebook",
		name: "Facebook Marketplace",
		detail: "Local and shipping"
	},
	{
		id: "mercari",
		name: "Mercari",
		detail: "Fixed price"
	},
	{
		id: "poshmark",
		name: "Poshmark",
		detail: "Apparel and home"
	},
	{
		id: "depop",
		name: "Depop",
		detail: "Apparel"
	},
	{
		id: "craigslist",
		name: "Craigslist",
		detail: "Local"
	},
	{
		id: "offerup",
		name: "OfferUp",
		detail: "Local"
	},
	{
		id: "shopify",
		name: "Shopify",
		detail: "Your shop"
	},
	{
		id: "whatnot",
		name: "Whatnot",
		detail: "Live selling"
	}
];
var SWEEP_STEPS = [
	"Playing the take",
	"Keeping the sharpest frame of each object",
	"Reading barcodes and QR codes",
	"Reading brands, model plates, color, and shape",
	"Searching catalogs",
	"Cross-checking where the engines disagree",
	"Writing the skim and the full description from facts that repeat",
	"Building the sold-price timeline"
];
var KEY = "lotlens-app";
function load() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {
			connected: {},
			posted: []
		};
		const parsed = JSON.parse(raw);
		return {
			connected: parsed.connected ?? {},
			posted: parsed.posted ?? []
		};
	} catch {
		return {
			connected: {},
			posted: []
		};
	}
}
function save(state) {
	const data = {
		connected: state.connected,
		posted: state.posted
	};
	try {
		localStorage.setItem(KEY, JSON.stringify(data));
	} catch {}
}
var useLens = create((set, get) => ({
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
		set({
			...load(),
			ready: true
		});
	},
	go: (screen, itemId) => {
		const next = itemId === void 0 ? get().itemId : itemId;
		const selected = screen === "compose" && next ? Object.keys(get().connected) : get().selected;
		set({
			screen,
			itemId: next,
			selected: screen === "compose" ? selected : get().selected
		});
	},
	setLive: (live) => set({ live }),
	flip: () => set({ facing: get().facing === "environment" ? "user" : "environment" }),
	setTorch: (torch) => set({ torch }),
	setMode: (mode) => set({ mode }),
	connect: (id, shop) => {
		set({ connected: {
			...get().connected,
			[id]: shop
		} });
		save(get());
	},
	disconnect: (id) => {
		const connected = { ...get().connected };
		delete connected[id];
		set({
			connected,
			selected: get().selected.filter((item) => item !== id)
		});
		save(get());
	},
	toggleChannel: (id) => {
		if (!get().connected[id]) return;
		set({ selected: get().selected.includes(id) ? get().selected.filter((item) => item !== id) : [...get().selected, id] });
	},
	markPosted: (itemId, channels) => {
		set({
			posted: [{
				itemId,
				channels,
				at: (/* @__PURE__ */ new Date()).toISOString()
			}, ...get().posted.filter((row) => row.itemId !== itemId)],
			screen: "done"
		});
		save(get());
	}
}));
function Phone({ children, dock }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg md:grid md:place-items-center md:py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-poster md:min-h-[860px] md:rounded-[2rem] md:ring-1 md:ring-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children
			}), dock]
		})
	});
}
var TABS = [
	{
		id: "lens",
		label: "Lens",
		icon: Aperture
	},
	{
		id: "lot",
		label: "Lot",
		icon: LayoutList
	},
	{
		id: "accounts",
		label: "Accounts",
		icon: Store
	}
];
function TabBar() {
	const screen = useLens((s) => s.screen);
	const go = useLens((s) => s.go);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "grid grid-cols-3 border-t border-white/10 bg-poster pb-[env(safe-area-inset-bottom)]",
		"aria-label": "App",
		children: TABS.map((tab) => {
			const on = screen === tab.id;
			const Icon = tab.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(tab.id, tab.id === "lot" ? null : null),
				className: cn("flex h-14 flex-col items-center justify-center gap-1 text-xs", on ? "text-fg" : "text-poster-dim"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: 1.75
				}), tab.label]
			}, tab.id);
		})
	});
}
function TopBar({ title, back, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-14 shrink-0 items-center gap-2 px-2 pt-[env(safe-area-inset-top)]",
		children: [
			back ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: back,
				className: "h-11 px-3 text-sm",
				children: "Back"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-11" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "min-w-0 flex-1 truncate text-center text-sm font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-16 justify-end pr-2",
				children: action
			})
		]
	});
}
function money(value) {
	return `$${value}`;
}
function LotList() {
	const go = useLens((s) => s.go);
	const mode = useLens((s) => s.mode);
	const posted = useLens((s) => s.posted);
	const items = LOT.filter((item) => {
		if (mode === "barcode") return item.method === "barcode";
		if (mode === "qr") return item.method === "qr";
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: `${items.length} in this take`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-poster-dim",
				children: "Drafts"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: items.map((item) => {
				const sent = posted.some((row) => row.itemId === item.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go("item", item.id),
					className: "flex w-full items-center gap-3 px-4 py-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.angles[0].src,
							alt: "",
							className: "size-16 bg-stone object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium text-poster-fg",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-xs text-poster-dim",
									children: [
										item.brand,
										" ",
										item.model
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-xs text-poster-dim",
									children: [item.uncertain ? "Cross-check" : `${item.confidence}% match`, sent ? " · posted here" : ""]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm tabular-nums text-poster-fg",
							children: money(item.ask)
						})
					]
				}) }, item.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, {})
	] });
}
function Timeline({ item }) {
	const prices = item.timeline.map((point) => point.price);
	const min = Math.min(...prices);
	const max = Math.max(...prices);
	const width = 320;
	const height = 96;
	const points = item.timeline.map((point, index) => {
		return `${index / (item.timeline.length - 1) * width},${84 - (point.price - min) / (max - min || 1) * 72}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "h-24 w-full text-ink",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				points
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2",
			children: item.timeline.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex justify-between gap-3 border-b border-rule py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-ink-soft",
					children: [
						point.when,
						" · ",
						point.source
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: money(point.price)
				})]
			}, `${point.when}-${point.source}`))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xs text-ink-soft",
			children: [
				"Sold and listed prices from ",
				item.timeline[0].when,
				" to ",
				item.timeline[item.timeline.length - 1].when,
				". Ask ",
				money(item.ask),
				" sits between ",
				money(item.low),
				" and ",
				money(item.high),
				"."
			]
		})
	] });
}
var PANES = [
	"Angles",
	"Match",
	"Prices",
	"Copy"
];
function ItemScreen() {
	const go = useLens((s) => s.go);
	const itemId = useLens((s) => s.itemId);
	const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
	const [pane, setPane] = (0, import_react.useState)("Angles");
	const [angle, setAngle] = (0, import_react.useState)(0);
	const shot = item.angles[angle] ?? item.angles[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				title: item.brand,
				back: () => go("lot")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-4 aspect-square overflow-hidden bg-stone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shot.src,
							alt: "",
							className: "size-full object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "absolute bottom-2 left-2 bg-paper px-2 py-1 text-xs",
							children: [
								shot.label,
								" · focus ",
								shot.focus,
								"% · ",
								shot.light
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2 overflow-x-auto px-4",
						children: item.angles.map((frame, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAngle(index),
							className: cn("h-11 shrink-0 px-3 text-sm", index === angle ? "bg-ink text-paper" : "text-ink-soft"),
							children: frame.label
						}, frame.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-4 mt-4 grid grid-cols-4 border border-ink",
						role: "tablist",
						children: PANES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": pane === name,
							onClick: () => setPane(name),
							className: cn("h-11 text-xs", pane === name ? "bg-ink text-paper" : "text-ink"),
							children: name
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 pt-4",
						role: "tabpanel",
						children: [
							pane === "Angles" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid grid-cols-2 gap-x-4 gap-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-ink-soft",
										children: "Color"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: item.color })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-ink-soft",
										children: "Shape"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: item.shape })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs text-ink-soft",
											children: "Markings"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: item.markings })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-xs text-ink-soft",
											children: "Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-mono text-xs",
											children: item.code ?? "None in the sharp frames"
										})]
									})
								]
							}) : null,
							pane === "Match" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: item.uncertain ? "The engines disagree. The draft keeps the careful name." : "The engines agree. No second pass was required."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3",
								children: item.engines.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t border-rule py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: hit.engine
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm tabular-nums",
												children: [hit.confidence, "%"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm",
											children: hit.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-ink-soft",
											children: hit.note
										})
									]
								}, hit.engine))
							})] }) : null,
							pane === "Prices" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { item }) : null,
							pane === "Copy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2",
									children: item.skim.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-base font-semibold",
										children: line
									}, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed",
									children: item.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 list-disc pl-4 text-sm leading-relaxed",
									children: item.features.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft",
									children: "Why this draft"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 list-disc pl-4 text-sm leading-relaxed",
									children: item.benefits.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft",
									children: "Similar pieces"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed",
									children: item.similar
								})
							] }) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go("compose", item.id),
					className: "h-12 w-full bg-ink text-sm text-paper",
					children: "Build the listing"
				})
			})
		]
	});
}
var CHECKS = [
	"Front, three-quarter, detail, and scale frames are in focus",
	"Lighting is even on every selected frame",
	"Barcode or QR is attached, or the item is marked as having none",
	"Skim headlines are short enough to scan",
	"Full description uses only facts that repeated across sources",
	"Ask price sits inside the sold timeline",
	"Preview shows the same photos and the same words"
];
function Compose() {
	const go = useLens((s) => s.go);
	const itemId = useLens((s) => s.itemId);
	const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
	const connected = useLens((s) => s.connected);
	const selected = useLens((s) => s.selected);
	const toggle = useLens((s) => s.toggleChannel);
	const channels = PLATFORMS.filter((platform) => connected[platform.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				title: "Listing",
				back: () => go("item", item.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-ink p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 overflow-x-auto",
								children: item.angles.map((frame) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: frame.src,
									alt: "",
									className: "h-20 w-20 shrink-0 object-cover",
									style: { objectPosition: frame.position }
								}, frame.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-lg font-semibold",
								children: item.skim[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: [
									money(item.ask),
									" · ",
									item.brand,
									" ",
									item.model
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1",
								children: item.skim.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm font-semibold",
									children: line
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								children: item.description
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-xs uppercase tracking-[0.14em] text-ink-soft",
						children: "Post to"
					}),
					channels.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [
							"No shops connected.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go("accounts"),
								className: "underline",
								children: "Connect accounts"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2",
						children: channels.map((platform) => {
							const on = selected.includes(platform.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggle(platform.id),
								className: "flex h-12 w-full items-center justify-between text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [platform.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-ink-soft",
									children: connected[platform.id]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("h-6 w-10 rounded-full p-0.5", on ? "bg-ink" : "bg-rule"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-5 bg-paper", on && "translate-x-4") })
								})]
							}) }, platform.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: selected.length === 0,
					onClick: () => go("check", item.id),
					className: "h-12 w-full bg-ink text-sm text-paper disabled:opacity-40",
					children: "Check the listing"
				})
			})
		]
	});
}
function Check$1() {
	const go = useLens((s) => s.go);
	const itemId = useLens((s) => s.itemId);
	const item = LOT.find((row) => row.id === itemId) ?? LOT[0];
	const selected = useLens((s) => s.selected);
	const markPosted = useLens((s) => s.markPosted);
	const [passed, setPassed] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				title: "Before it posts",
				back: () => go("compose", item.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-h-0 flex-1 overflow-y-auto px-4",
				children: CHECKS.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 border-b border-rule py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-0.5 size-4 shrink-0 border border-ink", index < passed && "bg-ink") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: index < passed ? "" : "text-ink-soft",
						children: line
					})]
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !ready,
					onClick: () => markPosted(item.id, selected),
					className: "h-12 w-full bg-ink text-sm text-paper disabled:opacity-40",
					children: ready ? `Post to ${selected.length} shop${selected.length === 1 ? "" : "s"}` : "Checking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-xs text-ink-soft",
					children: "Stays on this phone. Marketplace sites are not called from the preview."
				})]
			})
		]
	});
}
function Done() {
	const go = useLens((s) => s.go);
	const itemId = useLens((s) => s.itemId);
	const posted = useLens((s) => s.posted);
	const item = LOT.find((row) => row.id === itemId);
	const names = (posted.find((entry) => entry.itemId === itemId)?.channels ?? []).map((id) => PLATFORMS.find((platform) => platform.id === id)?.name).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-paper px-5 pt-16 text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.14em] text-ink-soft",
				children: "Queued on this phone"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl leading-tight",
				children: item?.skim[0] ?? "Listing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6",
				children: names.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-rule py-3 text-sm",
					children: name
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => go("lot"),
				className: "mt-8 h-12 bg-ink text-sm text-paper",
				children: "Back to the lot"
			})
		]
	});
}
function Accounts() {
	const connected = useLens((s) => s.connected);
	const connect = useLens((s) => s.connect);
	const disconnect = useLens((s) => s.disconnect);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [shop, setShop] = (0, import_react.useState)("");
	const count = (0, import_react.useMemo)(() => Object.keys(connected).length, [connected]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			title: "Accounts",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-poster-dim",
				children: count
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 pb-2 text-xs leading-relaxed text-poster-dim",
			children: "Same shops the cross-listing tools connect. A name is saved on this phone only."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "min-h-0 flex-1 overflow-y-auto",
			children: PLATFORMS.map((platform) => {
				const shopName = connected[platform.id];
				const editing = open === platform.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-b border-white/10 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-poster-fg",
							children: platform.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-poster-dim",
							children: shopName ? shopName : platform.detail
						})] }), shopName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => disconnect(platform.id),
							className: "h-11 px-2 text-sm text-poster-dim",
							children: "Remove"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setOpen(editing ? null : platform.id);
								setShop("");
							},
							className: "h-11 px-3 text-sm text-poster-fg",
							children: "Connect"
						})]
					}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-2 flex gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							const next = shop.trim();
							if (!next) return;
							connect(platform.id, next);
							setOpen(null);
							setShop("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: `shop-${platform.id}`,
								children: "Shop name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: `shop-${platform.id}`,
								value: shop,
								onChange: (event) => setShop(event.target.value),
								placeholder: "Shop or seller name",
								className: "h-11 min-w-0 flex-1 bg-void px-3 text-base text-poster-fg outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "h-11 bg-poster-fg px-3 text-sm text-poster",
								children: "Save"
							})
						]
					}) : null]
				}, platform.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, {})
	] });
}
function Capture() {
	const live = useLens((s) => s.live);
	const facing = useLens((s) => s.facing);
	const torch = useLens((s) => s.torch);
	const mode = useLens((s) => s.mode);
	const setLive = useLens((s) => s.setLive);
	const flip = useLens((s) => s.flip);
	const setTorch = useLens((s) => s.setTorch);
	const setMode = useLens((s) => s.setMode);
	const go = useLens((s) => s.go);
	const videoRef = (0, import_react.useRef)(null);
	const [cameraError, setCameraError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		let stream = null;
		let cancelled = false;
		async function start() {
			if (!video) return;
			if (live) {
				try {
					stream = await navigator.mediaDevices.getUserMedia({
						video: { facingMode: facing },
						audio: false
					});
					if (cancelled) {
						stream.getTracks().forEach((track) => track.stop());
						return;
					}
					video.srcObject = stream;
					await video.play();
					setCameraError("");
					const track = stream.getVideoTracks()[0];
					if (torch && track) try {
						await track.applyConstraints({ advanced: [{ torch: true }] });
					} catch {
						setTorch(false);
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
			} catch {}
		}
		start();
		return () => {
			cancelled = true;
			stream?.getTracks().forEach((track) => track.stop());
		};
	}, [
		live,
		facing,
		torch,
		setLive,
		setTorch
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col bg-poster",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "absolute inset-0 size-full object-cover",
				playsInline: true,
				muted: true,
				autoPlay: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-poster-fg",
					children: "LotLens"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTorch(!torch),
					className: "grid size-11 place-items-center text-poster-fg",
					"aria-label": torch ? "Torch off" : "Torch on",
					children: torch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZapOff, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative z-10 px-6 pt-3 text-center text-sm text-poster-fg",
				children: mode === "video" ? "Film the lot. Sharp frames are pulled for you." : mode === "barcode" ? "Hold a barcode steady in the frame." : "Hold a QR code steady in the frame."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-8 mt-4 min-h-48 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 size-8 border-l-2 border-t-2 border-poster-fg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 top-0 size-8 border-r-2 border-t-2 border-poster-fg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-poster-fg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-poster-fg" })
				]
			}),
			cameraError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative z-10 mx-6 mt-3 text-center text-xs text-poster-fg",
				children: cameraError
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 grid w-fit grid-cols-3 rounded-full bg-black/50 p-1",
						role: "group",
						"aria-label": "Scan mode",
						children: [
							["video", "Video"],
							["barcode", "Barcode"],
							["qr", "QR"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": mode === id,
							onClick: () => setMode(id),
							className: cn("h-9 rounded-full px-4 text-sm", mode === id ? "bg-poster-fg text-poster" : "text-poster-fg"),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLive(!live),
								className: "h-11 justify-self-start px-2 text-left text-xs text-poster-fg",
								children: live ? "Sample lot" : "Live camera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go("sweep"),
								className: "grid size-20 place-items-center justify-self-center rounded-full bg-poster-fg/20 ring-4 ring-poster-fg",
								"aria-label": "Start the take",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-14 rounded-full bg-poster-fg" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: flip,
								className: "grid size-11 place-items-center justify-self-end text-poster-fg",
								"aria-label": "Flip camera",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchCamera, { className: "size-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-1 text-center text-xs text-poster-dim",
						children: live ? "Live preview. The shutter runs the sample table." : "Pointed at the sample table."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, {})
		]
	});
}
var DURATION = 9e3;
function Sweep() {
	const go = useLens((s) => s.go);
	const mode = useLens((s) => s.mode);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let start = 0;
		let frame = 0;
		const tick = (now) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-poster",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[38dvh] shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: "/media/hero.mp4",
				className: "size-full object-cover",
				autoPlay: true,
				muted: true,
				playsInline: true,
				loop: true
			}), visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute border border-acid",
				style: {
					top: `${12 + item.at * 40}%`,
					left: `${8 + item.at * 70}%`,
					width: "18%",
					height: "22%"
				}
			}, item.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-0 flex-1 flex-col rounded-t-2xl bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.14em] text-ink-soft",
						children: SWEEP_STEPS[step]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1 bg-rule",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-ink",
							style: { width: `${progress * 100}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "min-h-0 flex-1 overflow-y-auto px-5 py-4",
					children: [visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 border-b border-rule py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.angles[0].src,
								alt: "",
								className: "size-12 bg-stone object-contain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-ink-soft",
									children: [
										item.method === "visual" ? "Visual" : item.method === "qr" ? "QR" : "Barcode",
										" · ",
										item.confidence,
										"%",
										item.uncertain ? " · cross-check" : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums",
								children: ["$", item.ask]
							})
						]
					}, item.id)), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-8 text-sm text-ink-soft",
						children: "Looking for the first object."
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go("lens"),
						className: "h-12 text-sm text-ink-soft",
						children: "Stop"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go("lot"),
						className: cn("h-12 bg-ink text-sm text-paper", progress < 1 && "opacity-70"),
						children: progress < 1 ? "Review early" : "Review the lot"
					})]
				})
			]
		})]
	});
}
function LensApp() {
	const screen = useLens((s) => s.screen);
	const hydrate = useLens((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Phone, { children: [
		screen === "lens" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capture, {}) : null,
		screen === "sweep" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sweep, {}) : null,
		screen === "lot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotList, {}) : null,
		screen === "item" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemScreen, {}) : null,
		screen === "compose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compose, {}) : null,
		screen === "check" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {}) : null,
		screen === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Done, {}) : null,
		screen === "accounts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accounts, {}) : null
	] });
}
var SplitComponent = LensApp;
//#endregion
export { SplitComponent as component };
