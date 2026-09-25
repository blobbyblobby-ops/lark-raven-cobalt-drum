import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Logo, t as Footer } from "./footer-CL3b8EC5.mjs";
import { c as monthStats, l as priceLabel, o as TOOLS, r as LEGAL_VARIANTS, s as money, t as COPY_VARIANTS, u as timeIndex } from "./market-BqvJtXVv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/directions-DFu1aQ6m.js
var import_jsx_runtime = require_jsx_runtime();
var SAMPLE = TOOLS.filter((tool) => [
	"manual",
	"vendoo",
	"nifty",
	"scout",
	"dealer"
].includes(tool.id));
function DirectionsPage() {
	const dealer = TOOLS.find((tool) => tool.id === "dealer");
	const manual = TOOLS[0];
	const dealerLot = dealer.minutes * 40 / 60;
	const manualLot = manual.minutes * 40 / 60;
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted",
							children: "Studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
							children: "Five notices, five lines, five layouts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
							children: "Version A of the notice and version 4 of the headline are live. The other four of each, and the other layouts, are here to choose from."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-16",
							"aria-labelledby": "legal-variants",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "legal-variants",
								className: "font-display text-3xl tracking-[-0.03em] text-fg",
								children: "Notice, shortened five ways"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 lg:grid-cols-2",
								children: LEGAL_VARIANTS.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-xl bg-surface p-6 ring-1 ring-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-subtle",
											children: variant.id
										}), variant.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg",
											children: "Live"
										}) : null]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted",
										children: variant.text
									})]
								}, variant.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-20",
							"aria-labelledby": "copy-variants",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "copy-variants",
								className: "font-display text-3xl tracking-[-0.03em] text-fg",
								children: "Five ways to say the comparison"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 lg:grid-cols-2",
								children: COPY_VARIANTS.map((variant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: cn("rounded-xl p-6 ring-1", variant.live ? "bg-elevated ring-border-strong" : "bg-surface ring-border"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs text-subtle",
												children: variant.id
											}), variant.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg",
												children: "Live"
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 font-display text-2xl tracking-[-0.03em] text-fg",
											children: variant.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted",
											children: variant.body
										})
									]
								}, variant.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mt-20",
							"aria-labelledby": "design-variants",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "design-variants",
									className: "font-display text-3xl tracking-[-0.03em] text-fg",
									children: "Five layouts for the same numbers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
									children: "Rails is the one on the homepage. The others are alternates."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specimen, {
											name: "Ledger",
											blurb: "Hairline rows. Numbers first, no bars.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "divide-y divide-border font-mono text-xs sm:text-sm",
												children: SAMPLE.map((tool) => {
													const stats = monthStats(tool, 4);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "grid grid-cols-4 gap-3 py-3 text-muted",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: tool.lotlens ? "text-fg" : "",
																children: tool.name
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-right tabular-nums",
																children: [tool.minutes, "m"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-right tabular-nums",
																children: timeIndex(tool)
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-right tabular-nums",
																children: money(stats.net)
															})
														]
													}, tool.id);
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specimen, {
											name: "Split",
											blurb: "One contrast: the hand-listed lot against Dealer.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-lg bg-bg p-5 ring-1 ring-border",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-subtle",
															children: "By hand"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 font-display text-5xl tabular-nums text-muted",
															children: manualLot.toFixed(1)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-subtle",
															children: "hours / 40 items"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-lg bg-bg p-5 ring-1 ring-border-strong",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-fg",
															children: "LotLens Dealer"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-2 font-display text-5xl tabular-nums text-fg",
															children: dealerLot.toFixed(1)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-xs text-subtle",
															children: ["hours / 40 items · index ", timeIndex(dealer)]
														})
													]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specimen, {
											name: "Rails",
											live: true,
											blurb: "Homepage. Every tool, slowest to fastest, index at the right.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-2.5",
												children: SAMPLE.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: cn("truncate text-xs", tool.lotlens ? "text-fg" : "text-muted"),
															children: tool.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "relative h-1.5 rounded-full bg-bg",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: cn("absolute inset-y-0 left-0 rounded-full", tool.lotlens ? "bg-fg" : "bg-accent"),
																style: { width: `${tool.minutes / manual.minutes * 100}%` }
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-right text-xs tabular-nums text-fg",
															children: timeIndex(tool)
														})
													]
												}, tool.id))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specimen, {
											name: "Tiles",
											blurb: "Four scores, nothing else. For a section that should be scanned in a second.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-3",
												children: [
													["By hand", `${manualLot.toFixed(1)}h`],
													["Vendoo", `${(260 / 60).toFixed(1)}h`],
													["Nifty", `${(220 / 60).toFixed(1)}h`],
													["Dealer", `${dealerLot.toFixed(1)}h`]
												].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-lg bg-bg p-4 ring-1 ring-border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-subtle",
														children: label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: cn("mt-2 font-display text-4xl tabular-nums", label === "Dealer" ? "text-fg" : "text-muted"),
														children: value
													})]
												}, label))
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Specimen, {
											name: "Rank",
											blurb: "Ordered by time index. Price sits in the margin so it cannot masquerade as speed.",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
												className: "space-y-3",
												children: [...SAMPLE].sort((a, b) => timeIndex(b) - timeIndex(a)).map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-baseline justify-between gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-sm text-muted",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "mr-3 font-mono text-xs text-subtle",
															children: ["0", i + 1]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: tool.lotlens ? "text-fg" : "",
															children: tool.name
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-sm tabular-nums text-fg",
														children: [timeIndex(tool), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-3 text-xs text-subtle",
															children: priceLabel(tool.price)
														})]
													})]
												}, tool.id))
											})
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { compact: true })
		]
	});
}
function Specimen({ name, blurb, live, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface p-5 ring-1 ring-border sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium text-fg",
					children: name
				}), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg",
					children: "Live"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-subtle",
				children: blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children
			})
		]
	});
}
//#endregion
export { DirectionsPage as component };
