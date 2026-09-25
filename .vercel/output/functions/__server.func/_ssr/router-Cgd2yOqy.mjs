import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cgd2yOqy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var APP_NAME = "LotLens";
var APP_TITLE = "LotLens — Video to priced marketplace listings";
var APP_DESCRIPTION = "Turn one video of mixed inventory into priced listings. LotLens reads barcodes, IDs unlabeled goods, and drafts eBay, Mercari, and Shopify posts from sold comps.";
var APP_KEYWORDS = "video listing software, resale inventory, barcode scanner, visual product identification, eBay listing tool, sold comps, estate liquidation";
var COPYRIGHT_OWNER = "Joshua Brent Moyer";
var COPYRIGHT_YEAR = 2026;
var COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved.`;
var LEGAL_HEADLINE = "Intellectual property notice";
var LEGAL_PARAGRAPHS = [
	`© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved. U.S. and international patents, trademarks, service marks, trade dress and designs, copyrights, and other intellectual property in this product, service, system, and its descriptions, designs, packaging, graphics, illustrations, mockups, copy, software, and hardware are exclusively reserved and may be pending or active.`,
	"Nothing in LotLens — name, interface, copy, imagery, video, software, or the method of identifying, pricing, and listing inventory from video — may be copied, reproduced, distributed, reverse engineered, or made into a derivative work without prior written permission, except where law allows.",
	"Third-party marketplace names and logos belong to their owners. Mention is not an endorsement."
];
var FAQS = [
	{
		q: "Does it work on items without barcodes?",
		a: "Yes. Barcodes are used when they are in the frame. Unlabeled goods are identified visually — vintage, estate, unpackaged, and anything whose UPC is missing, damaged, or never existed."
	},
	{
		q: "How many products can one video hold?",
		a: "A typical table sweep is 20 to 80 pieces. Keep items from fully stacking, move slowly enough that each piece is in frame, and LotLens will draft a listing per distinct item."
	},
	{
		q: "Which marketplaces can I post to?",
		a: "eBay, Mercari, Poshmark, Facebook Marketplace, Whatnot, and Shopify at launch. Every plan can export CSV if you list somewhere else."
	},
	{
		q: "Will it post without me looking?",
		a: "Not by default. Every clip becomes drafts you review. Dealer and Floor can turn on auto-list per channel once you trust the match rate."
	},
	{
		q: "How accurate is visual ID?",
		a: "Strong on current and recent consumer goods, branded apparel, and common housewares. Weaker on one-off art and heavily damaged pieces — those stay as 'needs review' instead of a forced match."
	},
	{
		q: "What kind of video do you need?",
		a: "Phone video is enough. Daylight or a shop lamp, a slow pass, and both the barcode face and a 3/4 view of unlabeled pieces. 1080p or better. No tripod required."
	},
	{
		q: "Where do the comparison numbers come from?",
		a: "Entry prices are public list prices gathered in August–September 2026 and can change. Minutes are planning estimates for a 40-item mixed lot posted to three marketplaces, not a stopwatch study. The time index is share of minutes saved versus doing that lot by hand."
	}
];
var REVIEWS = [
	{
		quote: "I used to spend Sunday photographing an estate table one piece at a time. Now I walk the camera down the line, make coffee, and review eighty drafts.",
		name: "Mara Ellison",
		role: "Estate liquidator, Austin",
		image: "/images/portrait-mara.jpg"
	},
	{
		quote: "Half my inventory has a UPC. The other half is unlabeled vintage. LotLens is the first tool that doesn't stall when the barcode is missing.",
		name: "Devon Park",
		role: "eBay Top Rated, Chicago",
		image: "/images/portrait-devon.jpg"
	},
	{
		quote: "Pallet intakes used to sit for a week while we IDed. Visual match plus comps means we know what to keep, bulk, and bin the same afternoon.",
		name: "Priya Nandakumar",
		role: "Pallet reseller, New Jersey",
		image: "/images/portrait-priya.jpg"
	}
];
var OFFERS = [
	{
		name: "Scout",
		price: "39"
	},
	{
		name: "Dealer",
		price: "89"
	},
	{
		name: "Floor",
		price: "219"
	}
];
function originFromRequest(request) {
	const url = new URL(request.url);
	const host = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() || request.headers.get("host") || url.host;
	return `${request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() || url.protocol.replace(":", "")}://${host}`;
}
function jsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": "#rights-holder",
				name: COPYRIGHT_OWNER
			},
			{
				"@type": "Organization",
				"@id": "#organization",
				name: APP_NAME,
				description: APP_DESCRIPTION,
				slogan: "Film the lot. List every piece.",
				founder: { "@id": "#rights-holder" },
				copyrightHolder: { "@id": "#rights-holder" },
				copyrightYear: COPYRIGHT_YEAR,
				copyrightNotice: LEGAL_PARAGRAPHS[0]
			},
			{
				"@type": "SoftwareApplication",
				"@id": "#app",
				name: APP_NAME,
				description: APP_DESCRIPTION,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web",
				copyrightHolder: { "@id": "#rights-holder" },
				copyrightYear: COPYRIGHT_YEAR,
				offers: {
					"@type": "AggregateOffer",
					lowPrice: "39",
					highPrice: "219",
					priceCurrency: "USD",
					offerCount: String(OFFERS.length),
					availability: "https://schema.org/PreOrder",
					offers: OFFERS.map((offer) => ({
						"@type": "Offer",
						name: `${offer.name} plan`,
						price: offer.price,
						priceCurrency: "USD",
						availability: "https://schema.org/PreOrder"
					}))
				},
				review: REVIEWS.map((review) => ({
					"@type": "Review",
					author: {
						"@type": "Person",
						name: review.name
					},
					reviewBody: review.quote
				}))
			},
			{
				"@type": "FAQPage",
				"@id": "#faq",
				mainEntity: FAQS.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.a
					}
				}))
			},
			{
				"@type": "WebSite",
				"@id": "#website",
				name: APP_NAME,
				description: APP_DESCRIPTION,
				publisher: { "@id": "#organization" },
				copyrightHolder: { "@id": "#rights-holder" },
				copyrightYear: COPYRIGHT_YEAR
			}
		]
	};
}
var styles_default = "/assets/styles-DEVNN1Hy.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_TITLE },
			{
				name: "description",
				content: APP_DESCRIPTION
			},
			{
				name: "keywords",
				content: APP_KEYWORDS
			},
			{
				name: "author",
				content: COPYRIGHT_OWNER
			},
			{
				name: "copyright",
				content: COPYRIGHT_LINE
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#0e0d0b"
			},
			{
				name: "application-name",
				content: APP_NAME
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700&family=IBM+Plex+Mono:wght@500&family=Instrument+Serif:ital@0;1&display=swap"
			},
			{
				rel: "preload",
				as: "image",
				href: "/images/hero-table.jpg"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(jsonLd())
		}]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "bottom-center",
					toastOptions: { className: "!bg-elevated !text-fg !border-border !font-sans !rounded-md" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-BsjfVKP_.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "LotLens" }, {
			name: "description",
			content: APP_DESCRIPTION
		}],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./directions-DFu1aQ6m.mjs");
var Route$5 = createFileRoute("/directions")({
	head: () => ({
		meta: [
			{ title: `Studies — ${APP_NAME}` },
			{
				name: "description",
				content: "Alternate LotLens copy and comparison layouts."
			},
			{
				name: "robots",
				content: "noindex, follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/directions"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./legal-BI-8KVi4.mjs");
var Route$4 = createFileRoute("/legal")({
	head: () => ({
		meta: [
			{ title: `IP notice — ${APP_NAME}` },
			{
				name: "description",
				content: `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved. Intellectual property notice for ${APP_NAME}.`
			},
			{
				name: "robots",
				content: "index, follow"
			}
		],
		links: [{
			rel: "canonical",
			href: "/legal"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./live-BIYVPnds.mjs");
var Route$3 = createFileRoute("/live")({
	head: () => ({
		meta: [{
			name: "description",
			content: "The current LotLens landing page."
		}, {
			name: "robots",
			content: "noindex, follow"
		}],
		links: [{
			rel: "canonical",
			href: "/live"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$2 = createFileRoute("/robots.txt")({ server: { handlers: { GET: ({ request }) => {
	const body = [
		"User-agent: *",
		"Allow: /",
		"Disallow: /__grok/",
		"",
		`Sitemap: ${originFromRequest(request)}/sitemap.xml`,
		""
	].join("\n");
	return new Response(body, { headers: {
		"Content-Type": "text/plain; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: ({ request }) => {
	const origin = originFromRequest(request);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/legal</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;
	return new Response(body, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./studio-AX2bMP-d.mjs");
var Route = createFileRoute("/studio")({
	head: () => ({ meta: [{ title: "LotLens — five page designs" }, {
		name: "robots",
		content: "noindex, follow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	DirectionsRoute: Route$5.update({
		id: "/directions",
		path: "/directions",
		getParentRoute: () => Route$7
	}),
	LegalRoute: Route$4.update({
		id: "/legal",
		path: "/legal",
		getParentRoute: () => Route$7
	}),
	LiveRoute: Route$3.update({
		id: "/live",
		path: "/live",
		getParentRoute: () => Route$7
	}),
	RobotsDottxtRoute: Route$2.update({
		id: "/robots.txt",
		path: "/robots.txt",
		getParentRoute: () => Route$7
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$7
	}),
	StudioRoute: Route.update({
		id: "/studio",
		path: "/studio",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { LEGAL_HEADLINE as a, FAQS as i, COPYRIGHT_OWNER as n, LEGAL_PARAGRAPHS as o, COPYRIGHT_YEAR as r, REVIEWS as s, router_exports as t };
