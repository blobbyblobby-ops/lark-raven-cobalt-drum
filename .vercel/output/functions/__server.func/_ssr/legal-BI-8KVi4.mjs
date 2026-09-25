import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as LEGAL_HEADLINE, n as COPYRIGHT_OWNER, o as LEGAL_PARAGRAPHS, r as COPYRIGHT_YEAR } from "./router-Cgd2yOqy.mjs";
import { n as Logo, t as Footer } from "./footer-CL3b8EC5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-BI-8KVi4.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage() {
	const [notice, ...rest] = LEGAL_PARAGRAPHS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back to LotLens"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "px-5 py-16 sm:px-8 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted",
							children: "Legal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
							children: LEGAL_HEADLINE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 rounded-xl bg-elevated px-5 py-6 text-base leading-relaxed text-fg ring-1 ring-border sm:px-8 sm:py-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: notice })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-5 text-base leading-relaxed text-muted",
							children: rest.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 40)))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-10 text-sm text-subtle",
							children: [
								"Rights holder: ",
								COPYRIGHT_OWNER,
								". Effective ",
								COPYRIGHT_YEAR,
								"."
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { compact: true })
		]
	});
}
//#endregion
export { LegalPage as component };
