import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as LEGAL_PARAGRAPHS } from "./router-Cgd2yOqy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/footer-CL3b8EC5.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "/live",
		className: cn("inline-flex items-center gap-2.5 text-fg no-underline", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "grid size-8 place-items-center rounded-sm bg-elevated ring-1 ring-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				className: "size-5",
				fill: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 8.5V6h2.5M15.5 6H18v2.5M18 15.5V18h-2.5M8.5 18H6v-2.5",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "square"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "2.4",
					stroke: "currentColor",
					strokeWidth: "1.5"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl leading-none tracking-tight",
			children: "LotLens"
		})]
	});
}
var LINKS = [
	{
		href: "/live#product",
		label: "Product"
	},
	{
		href: "/live#how",
		label: "How it works"
	},
	{
		href: "/live#compare",
		label: "Compare"
	},
	{
		href: "/live#features",
		label: "Features"
	},
	{
		href: "/live#pricing",
		label: "Pricing"
	},
	{
		href: "/live#stories",
		label: "Stories"
	},
	{
		href: "/live#faq",
		label: "FAQ"
	},
	{
		href: "/live#join",
		label: "Waitlist"
	}
];
function Footer({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border px-5 py-10 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm leading-relaxed text-subtle",
				children: "One video. Dozens of priced listings. Barcodes optional."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-6 gap-y-3",
				"aria-label": "Footer",
				children: [
					LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: link.label
					}, link.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/legal",
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: "IP notice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/studio",
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: "5 designs"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-6xl border-t border-border pt-8",
			children: [!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-xs leading-relaxed text-subtle",
				children: LEGAL_PARAGRAPHS[0]
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: compact ? "text-xs text-subtle" : "mt-3 text-xs text-subtle",
				children: [
					"Drafts you approve. Nothing posts without you.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/legal",
						className: "underline decoration-border-strong underline-offset-4 hover:text-fg",
						children: "Full intellectual property notice"
					}),
					"."
				]
			})]
		})]
	});
}
//#endregion
export { Logo as n, Footer as t };
