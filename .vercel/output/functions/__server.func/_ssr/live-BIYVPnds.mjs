import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Aperture, _ as Clapperboard, a as Tags, b as Barcode, c as Send, d as Plus, f as Play, g as Layers, l as ScanSearch, m as Menu, p as Pause, r as X, u as RotateCcw, v as Check, x as ArrowRight, y as ChartLine } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as FAQS, s as REVIEWS } from "./router-Cgd2yOqy.mjs";
import { n as Logo, t as Footer } from "./footer-CL3b8EC5.mjs";
import { a as MATRIX_LABELS, c as monthStats, i as MATRIX_IDS, l as priceLabel, n as FEATURES$1, o as TOOLS, s as money, u as timeIndex } from "./market-BqvJtXVv.mjs";
import { n as useWaitlist, t as isValidEmail } from "./waitlist-CvktKfKV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-BIYVPnds.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOTS = [
	1,
	4,
	12
];
function MarkCell({ mark, emphasize }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("text-xs font-medium", mark === "Yes" && (emphasize ? "text-fg" : "text-accent"), mark === "Partial" && "text-muted", mark === "No" && "text-subtle"),
		children: mark
	});
}
function Compare() {
	const [lots, setLots] = (0, import_react.useState)(4);
	const slowest = TOOLS[0].minutes;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "compare",
		"aria-labelledby": "compare-heading",
		className: "scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-muted",
								children: "Compare"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "compare-heading",
								className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
								children: "Crosslisting is the last mile."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "Identification is the day. Features, public prices, and a time-saved index against the tools resellers already use."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-subtle",
							children: "Lots per month"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 inline-flex rounded-md bg-surface p-1 ring-1 ring-border",
							role: "group",
							"aria-label": "Lots per month",
							children: LOTS.map((count) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": lots === count,
								onClick: () => setLots(count),
								className: cn("h-10 min-w-14 rounded-sm px-3 text-sm font-medium tabular-nums transition-colors duration-150", lots === count ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
								children: count
							}, count))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-subtle",
							children: [
								lots * 40,
								" items · ",
								25,
								"/hr labor"
							]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-fg",
							children: "Minutes per item"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Shorter is faster. Index 100 saves the most time."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-4",
						children: TOOLS.map((tool) => {
							const index = timeIndex(tool);
							const width = Math.max(4, tool.minutes / slowest * 100);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-sm", tool.lotlens ? "font-medium text-fg" : "text-muted"),
									children: tool.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 text-xs tabular-nums text-muted",
									children: [
										tool.minutes,
										" min",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-fg",
											children: index
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 block h-1.5 rounded-full bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("block h-full rounded-full", tool.lotlens ? "bg-fg" : "bg-accent/80"),
									style: { width: `${width}%` }
								})
							})] }, tool.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-fg",
							children: "What each one actually does"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: "Marks are the entry plan, not the top tier. LotLens is Dealer. Scout identifies the same way, then you publish to one marketplace — that is why it is slower below."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-subtle sm:hidden",
							children: "Swipe sideways. The first column stays put."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-3 sm:mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-xl ring-1 ring-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[920px] border-collapse text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "sticky left-0 z-10 bg-surface px-4 py-3 text-xs font-medium text-subtle",
											children: "Capability"
										}), MATRIX_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: cn("px-3 py-3 text-xs font-medium", id === "lotlens" ? "text-fg" : "text-subtle"),
											children: MATRIX_LABELS[id]
										}, id))]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: FEATURES$1.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "sticky left-0 z-10 bg-bg px-4 py-3 text-sm font-normal text-muted",
											children: feature.label
										}), MATRIX_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: cn("px-3 py-3", id === "lotlens" && "bg-elevated/60"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkCell, {
												mark: feature.marks[id],
												emphasize: id === "lotlens"
											})
										}, id))]
									}, feature.label)) })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg sm:hidden" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-fg",
							children: "Price against time saved"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: [
								"Time index is minutes returned versus doing this lot by hand. Net is labor saved minus the monthly plan, at $",
								25,
								"/hr and ",
								lots,
								" lot",
								lots === 1 ? "" : "s",
								". Return per $1 can favor a cheap tool that still leaves the afternoon on the table."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-subtle sm:hidden",
							children: "Swipe sideways. The first column stays put."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-3 sm:mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-xl ring-1 ring-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[860px] border-collapse text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border bg-surface text-xs font-medium text-subtle",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "sticky left-0 z-10 bg-surface px-4 py-3",
												children: "Tool"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3",
												children: "Plan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Price"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Hrs / lot"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Time index"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Labor saved"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Net / mo"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-3 py-3 text-right",
												children: "Per $1"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TOOLS.map((tool) => {
										const stats = monthStats(tool, lots);
										const lotHours = tool.minutes * 40 / 60;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border last:border-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: cn("sticky left-0 z-10 bg-bg px-4 py-3 text-sm font-medium", tool.lotlens ? "text-fg" : "text-muted"),
													children: tool.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3 text-sm text-subtle",
													children: tool.plan
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3 text-right text-sm tabular-nums text-muted",
													children: priceLabel(tool.price)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3 text-right text-sm tabular-nums text-muted",
													children: lotHours.toFixed(1)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: cn("px-3 py-3 text-right text-sm tabular-nums", tool.lotlens ? "text-fg" : "text-muted"),
													children: timeIndex(tool)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3 text-right text-sm tabular-nums text-muted",
													children: money(stats.labor)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: cn("px-3 py-3 text-right text-sm tabular-nums", tool.lotlens ? "font-medium text-fg" : "text-muted"),
													children: money(stats.net)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-3 py-3 text-right text-sm tabular-nums text-subtle",
													children: stats.perDollar == null ? "—" : `${stats.perDollar.toFixed(1)}×`
												})
											]
										}, tool.id);
									}) })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg sm:hidden" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-xs leading-relaxed text-subtle",
							children: "Planning estimates, not a lab test. Entry prices checked against public pages in August–September 2026 (Vendoo Starter $14.99, List Perfectly Simple $29, Crosslist Bronze $29.99, Nifty Crosslisting Plus $39.99, PrimeLister $49.99, Flyp $9). Auto-delist on List Perfectly and Crosslist sits on higher tiers, so the entry row says no. LotLens does not auto-delist. Confirm current prices before you buy."
						})
					]
				})
			]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"aria-labelledby": "faq-heading",
		className: "scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-muted",
				children: "Questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "faq-heading",
				className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
				children: "Straight answers before you join."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group border-b border-border py-5 first:border-t",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex cursor-pointer items-center justify-between gap-4 text-left text-base font-medium text-fg",
					children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45",
						strokeWidth: 1.75
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose pr-8 text-sm leading-relaxed text-muted",
					children: item.a
				})]
			}, item.q)) })]
		})
	});
}
var FEATURES = [
	{
		icon: Barcode,
		title: "Read the code, if there is one",
		body: "UPC, EAN, and QR on boxes, hangtags, and polybags. LotLens locks the SKU the same way a gun scanner would — from video."
	},
	{
		icon: ScanSearch,
		title: "Visual ID for everything else",
		body: "Estate ceramics, vintage lamps, loose sneakers, unlabeled cookware. Shape, markings, and materials stand in for a missing barcode."
	},
	{
		icon: ChartLine,
		title: "Sold comps, not asking prices",
		body: "Suggested list price from recent solds and sell-through. See the range before you commit a BIN or an auction."
	},
	{
		icon: Aperture,
		title: "Stills pulled from the clip",
		body: "Each draft ships with crop-ready frames of that item. No second photo pass unless you want one."
	},
	{
		icon: Tags,
		title: "Titles and condition from the tape",
		body: "Listing copy, attributes, and visible wear notes — scuffs, missing lids, factory seal — written as drafts you can edit."
	},
	{
		icon: Send,
		title: "Post where you already sell",
		body: "Push approved drafts to eBay, Mercari, Poshmark, Facebook Marketplace, Whatnot, or Shopify. Or export CSV."
	},
	{
		icon: Layers,
		title: "Dozens per take",
		body: "A crowded table is the point. LotLens is built for 20, 40, 80 pieces in one continuous sweep — not a studio SKU shoot."
	},
	{
		icon: Clapperboard,
		title: "Review before it goes live",
		body: "Nothing posts without you unless you turn auto-list on. Reject a miss, merge duplicates, or hold a lot as a bundle."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		"aria-labelledby": "features-heading",
		className: "scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-muted",
					children: "Why sellers switch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "features-heading",
					className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
					children: "Built for mixed lots, not perfect SKUs."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: FEATURES.map((feature) => {
					const Icon = feature.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 ring-1 ring-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5 text-fg",
								strokeWidth: 1.6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-base font-medium text-fg",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: feature.body
							})
						]
					}, feature.title);
				})
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,opacity,transform,box-shadow] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg hover:bg-primary/90 shadow-[0_1px_0_color-mix(in_oklab,var(--color-fg)_18%,transparent)]",
			outline: "bg-transparent text-fg ring-1 ring-border-strong hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated"
		},
		size: {
			sm: "h-10 rounded-sm px-3.5 text-sm",
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-md px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(function Button({ className, variant, size, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
var Input = (0, import_react.forwardRef)(function Input({ className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref,
		className: cn("h-12 w-full rounded-md bg-elevated px-4 text-base text-fg ring-1 ring-border placeholder:text-subtle transition-[box-shadow,background-color] duration-150", "hover:ring-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className),
		...props
	});
});
function EmailForm({ source, size = "lg", className }) {
	const joined = useWaitlist((s) => s.email);
	const ready = useWaitlist((s) => s.ready);
	const join = useWaitlist((s) => s.join);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useWaitlist.getState().hydrate();
	}, []);
	function onSubmit(event) {
		event.preventDefault();
		const trimmed = email.trim().toLowerCase();
		if (!isValidEmail(trimmed)) {
			setError("Enter a working email.");
			return;
		}
		setError("");
		setPending(true);
		window.setTimeout(() => {
			join(trimmed);
			toast.success("You're on the LotLens list.");
			setPending(false);
		}, 380);
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-12 w-full max-w-lg rounded-md bg-elevated", className) });
	if (joined) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-3 rounded-lg bg-elevated px-4 py-3.5 ring-1 ring-border", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3.5",
				strokeWidth: 2.4
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm leading-relaxed text-muted",
			children: [
				"You're on the list. We'll write",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: joined
				}),
				" when founder seats open."
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("w-full max-w-lg", className),
		noValidate: true,
		"data-source": source,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2 sm:flex-row sm:items-stretch",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: `email-${source}`,
					children: "Email address"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `email-${source}`,
					type: "email",
					inputMode: "email",
					autoComplete: "email",
					placeholder: "you@shop.com",
					value: email,
					onChange: (e) => {
						setEmail(e.target.value);
						if (error) setError("");
					},
					"aria-invalid": Boolean(error),
					className: cn(size === "lg" ? "h-12" : "h-11", "sm:flex-1")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: size === "lg" ? "lg" : "md",
					disabled: pending,
					className: "shrink-0 sm:min-w-40",
					children: [pending ? "Joining…" : "Join waitlist", !pending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-danger",
			role: "alert",
			children: error
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-subtle",
			children: "No spam. We only email when access opens."
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36",
		"aria-labelledby": "hero-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_0%,color-mix(in_oklab,var(--color-fg)_6%,transparent),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-enter max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-wide text-muted",
						children: "For bin, pallet, and estate sellers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						id: "hero-heading",
						className: "mt-4 font-display text-5xl leading-[1.05] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.25rem]",
						children: ["Film the lot.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block italic text-muted",
							children: "List every piece."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg leading-relaxed text-muted",
						children: "One video of mixed inventory — boxed SKUs with barcodes and unlabeled goods without. LotLens finds each item, pulls sold comps, and drafts listings ready to post."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailForm, { source: "hero" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#product",
							className: "text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-fg",
							children: "Watch a 40-item table become a catalog"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl bg-surface shadow-soft ring-1 ring-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-4 py-2.5 text-xs font-medium text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rec-dot size-1.5 rounded-full bg-danger" }), "REC"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono tabular-nums",
								children: "00:01:14"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Table sweep · 4K" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video overflow-hidden bg-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								className: "h-full w-full object-cover",
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true,
								preload: "metadata",
								poster: "/images/hero-table.jpg",
								title: "Table sweep of mixed resale inventory",
								"aria-label": "A camera sweeping a table of mixed resale inventory",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: "/media/hero.mp4",
									type: "video/mp4"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-3 left-3 right-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: "8 items found" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: "3 barcodes" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: "5 visual IDs" })
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-xs text-subtle sm:text-left",
					children: "A single take. Barcoded boxes and unlabeled pieces, together."
				})]
			})]
		})]
	});
}
function Chip({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-bg/75 px-3 py-1 text-xs font-medium text-fg ring-1 ring-border backdrop-blur-sm",
		children
	});
}
var STEPS = [
	{
		n: "01",
		title: "Film one take",
		body: "Sweep a table, bin, pallet, or closet. Ninety seconds of handheld video is enough. No lightbox. No one-item-at-a-time photography."
	},
	{
		n: "02",
		title: "Identify every piece",
		body: "Barcodes are read when they exist. Unlabeled goods — vintage, estate, unpackaged — are matched visually against a product graph."
	},
	{
		n: "03",
		title: "Price from sold comps",
		body: "LotLens pulls recent solds, sell-through, and a suggested list price per item. You see the range, not a guess."
	},
	{
		n: "04",
		title: "Review, then post",
		body: "Titles, photos pulled from the clip, and condition notes land as drafts. Approve one, a batch, or auto-list to connected shops."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		"aria-labelledby": "how-heading",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "How it works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "how-heading",
						className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
						children: "From a clip to a catalog in one pass."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 ring-1 ring-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tabular-nums text-subtle",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-medium text-fg",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: step.body
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-xl ring-1 ring-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/filming-hands.jpg",
						alt: "Filming mixed inventory — a boxed item with a barcode beside unlabeled vintage housewares",
						className: "aspect-[16/7] w-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				})
			]
		})
	});
}
function Join() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "join",
		"aria-labelledby": "join-heading",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-2xl bg-elevated px-6 py-14 ring-1 ring-border sm:px-12 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-muted",
					children: "Early access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "join-heading",
					className: "mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl lg:text-6xl",
					children: "List tonight’s haul before you go to bed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg",
					children: "One video of mixed inventory — barcodes and unlabeled pieces — becomes priced drafts on the shops you already use. Founder seats are limited."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmailForm, { source: "join" })
				})
			]
		})
	});
}
function MidCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border px-5 py-16 sm:px-8 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-[-0.03em] text-fg sm:text-4xl",
					children: "A crowded table is the point."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-base leading-relaxed text-muted",
					children: "Film barcodes and unlabeled pieces together. Review priced drafts. Post only what you approve."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				onClick: () => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" }),
				children: ["Join waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	});
}
var LINKS = [
	{
		href: "#product",
		label: "Product"
	},
	{
		href: "#how",
		label: "How it works"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#compare",
		label: "Compare"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#stories",
		label: "Stories"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const nodes = [
			"product",
			"how",
			"features",
			"compare",
			"pricing",
			"stories",
			"join"
		].map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((n) => observer.observe(n));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	function goJoin() {
		setOpen(false);
		document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200", scrolled || open ? "border-b border-border bg-bg/92 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: cn("rounded-sm px-3 py-2 text-sm transition-colors duration-150", active === link.href ? "text-fg" : "text-muted hover:text-fg"),
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: goJoin,
						children: "Join waitlist"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-sm text-fg lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden", open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 px-5 py-4",
				"aria-label": "Mobile",
				children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "rounded-md px-3 py-3 text-base text-fg",
					onClick: () => setOpen(false),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-2 w-full",
					onClick: goJoin,
					children: "Join waitlist"
				})]
			})
		})]
	});
}
var TIERS = [
	{
		id: "scout",
		name: "Scout",
		monthly: 39,
		blurb: "For testers and side-hustle tables.",
		features: [
			"150 identifications / month",
			"Barcode + visual ID",
			"Sold comps on every draft",
			"Listing photos from the clip",
			"1 connected marketplace",
			"Drafts only — you post"
		],
		cta: "Join waitlist",
		featured: false
	},
	{
		id: "dealer",
		name: "Dealer",
		monthly: 89,
		blurb: "For sellers who list every week.",
		features: [
			"750 identifications / month",
			"Auto-post to 5 marketplaces",
			"Condition notes from video",
			"Duplicate and lot grouping",
			"Price refresh on unsold SKUs",
			"Priority visual matching"
		],
		cta: "Join waitlist",
		featured: true
	},
	{
		id: "floor",
		name: "Floor",
		monthly: 219,
		blurb: "For warehouses, estates, and teams.",
		features: [
			"Unlimited identifications",
			"Shared catalogs and seats",
			"API + CSV ingest",
			"White-glove onboarding",
			"Custom marketplace maps",
			"SLA on unlabeled goods"
		],
		cta: "Talk to us",
		featured: false
	}
];
function Pricing() {
	const [yearly, setYearly] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		"aria-labelledby": "pricing-heading",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "Pricing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "pricing-heading",
						className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
						children: "Pay for identifications, not seats you don't use."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex rounded-md bg-surface p-1 ring-1 ring-border",
					role: "group",
					"aria-label": "Billing period",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("h-10 rounded-sm px-4 text-sm font-medium transition-colors duration-150", !yearly ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						"aria-pressed": !yearly,
						onClick: () => setYearly(false),
						children: "Monthly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("h-10 rounded-sm px-4 text-sm font-medium transition-colors duration-150", yearly ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						"aria-pressed": yearly,
						onClick: () => setYearly(true),
						children: ["Yearly", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs text-accent",
							children: "2 months free"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 lg:grid-cols-3",
				children: TIERS.map((tier) => {
					const price = yearly ? Math.round(tier.monthly * (10 / 12)) : tier.monthly;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-xl p-6 ring-1", tier.featured ? "bg-elevated ring-border-strong" : "bg-surface ring-border"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium text-fg",
									children: tier.name
								}), tier.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-fg",
									children: "Most sellers"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: tier.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-5xl leading-none tracking-tight text-fg tabular-nums",
									children: ["$", price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pb-1 text-sm text-subtle",
									children: "/ mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-subtle",
								children: yearly ? "Billed annually" : "Billed monthly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex-1 space-y-2.5",
								children: tier.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2.5 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-4 shrink-0 text-accent",
										strokeWidth: 2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
								}, feature))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-8 w-full",
								variant: tier.featured ? "primary" : "outline",
								onClick: () => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" }),
								children: tier.cta
							})
						]
					}, tier.id);
				})
			})]
		})
	});
}
var STATS = [
	{
		value: "1 take",
		label: "Dozens of SKUs"
	},
	{
		value: "UPC + vision",
		label: "Barcodes optional"
	},
	{
		value: "Sold comps",
		label: "Not asking prices"
	},
	{
		value: "You approve",
		label: "Nothing auto-posts"
	}
];
var CHANNELS = [
	"eBay",
	"Mercari",
	"Poshmark",
	"Facebook Marketplace",
	"Whatnot",
	"Shopify"
];
function Proof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-y border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4",
			children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface px-5 py-6 sm:px-8 sm:py-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-tight text-fg sm:text-3xl",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: stat.label
				})]
			}, stat.value))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border px-5 py-8 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted",
					children: "Drafts and posts to the channels resellers already live on."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium",
					children: CHANNELS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-muted",
						children: name
					}, name))
				})]
			})
		})]
	});
}
var ITEMS = [
	{
		id: "cooker",
		name: "7-in-1 electric pressure cooker",
		method: "barcode",
		price: 54,
		sold: 86,
		at: .08,
		box: {
			t: "16%",
			l: "5%",
			w: "17%",
			h: "34%"
		},
		label: "top",
		thumb: "/images/cooker.jpg"
	},
	{
		id: "headphones",
		name: "Wireless over-ear headphones",
		method: "barcode",
		price: 198,
		sold: 41,
		at: .18,
		box: {
			t: "54%",
			l: "3%",
			w: "18%",
			h: "28%"
		},
		label: "bottom",
		thumb: "/images/headphones.jpg"
	},
	{
		id: "sneakers",
		name: "Low-top basketball sneakers",
		method: "barcode",
		price: 112,
		sold: 63,
		at: .28,
		box: {
			t: "72%",
			l: "22%",
			w: "16%",
			h: "20%"
		},
		label: "bottom",
		thumb: "/images/sneakers.jpg"
	},
	{
		id: "bowl",
		name: "Vintage banded mixing bowl",
		method: "visual",
		price: 34,
		sold: 19,
		at: .4,
		box: {
			t: "50%",
			l: "33%",
			w: "12%",
			h: "20%"
		},
		label: "top",
		thumb: "/images/bowl.jpg"
	},
	{
		id: "lamp",
		name: "Brass cone desk lamp",
		method: "visual",
		price: 78,
		sold: 11,
		at: .5,
		box: {
			t: "6%",
			l: "39%",
			w: "11%",
			h: "40%"
		},
		label: "top",
		thumb: "/images/lamp.jpg"
	},
	{
		id: "dutch",
		name: "Enameled cast-iron dutch oven",
		method: "visual",
		price: 186,
		sold: 27,
		at: .62,
		box: {
			t: "34%",
			l: "51%",
			w: "15%",
			h: "28%"
		},
		label: "top",
		thumb: "/images/dutch-oven.jpg"
	},
	{
		id: "console",
		name: "Handheld game console",
		method: "barcode",
		price: 241,
		sold: 54,
		at: .74,
		box: {
			t: "58%",
			l: "63%",
			w: "13%",
			h: "18%"
		},
		label: "bottom",
		thumb: "/images/console.jpg"
	},
	{
		id: "tote",
		name: "Cognac leather tote",
		method: "visual",
		price: 129,
		sold: 16,
		at: .86,
		box: {
			t: "18%",
			l: "76%",
			w: "16%",
			h: "46%"
		},
		label: "top",
		thumb: "/images/tote.jpg"
	}
];
var DURATION_MS = 8200;
function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ScanDemo() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [hasRun, setHasRun] = (0, import_react.useState)(false);
	const raf = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(null);
	const offset = (0, import_react.useRef)(0);
	const visible = (0, import_react.useMemo)(() => ITEMS.filter((item) => progress >= item.at), [progress]);
	const current = visible[visible.length - 1] ?? null;
	const total = visible.reduce((sum, item) => sum + item.price, 0);
	const barcodes = visible.filter((i) => i.method === "barcode").length;
	const visuals = visible.filter((i) => i.method === "visual").length;
	const done = progress >= 1;
	(0, import_react.useEffect)(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);
	function tick(now) {
		if (started.current == null) started.current = now;
		const p = Math.min(1, offset.current + (now - started.current) / DURATION_MS);
		setProgress(p);
		if (p < 1) raf.current = requestAnimationFrame(tick);
		else {
			setPlaying(false);
			started.current = null;
			offset.current = 1;
		}
	}
	function play() {
		if (prefersReducedMotion()) {
			setProgress(1);
			setHasRun(true);
			setPlaying(false);
			return;
		}
		if (progress >= 1) {
			offset.current = 0;
			setProgress(0);
		}
		setHasRun(true);
		setPlaying(true);
		started.current = null;
		raf.current = requestAnimationFrame(tick);
	}
	function pause() {
		if (raf.current) cancelAnimationFrame(raf.current);
		offset.current = progress;
		started.current = null;
		setPlaying(false);
	}
	function replay() {
		if (raf.current) cancelAnimationFrame(raf.current);
		offset.current = 0;
		started.current = null;
		setProgress(0);
		setPlaying(false);
		play();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "product",
		"aria-labelledby": "product-heading",
		className: "scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted",
							children: "Live identify"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "product-heading",
							className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
							children: "Barcodes when they exist. Vision when they don't."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-base leading-relaxed text-muted",
							children: "Play a table sweep. LotLens boxes each piece, tags the method, and writes a priced draft before the clip ends."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						!playing && progress === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: play,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Play scan"]
						}),
						playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: pause,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }), "Pause"]
						}),
						!playing && progress > 0 && progress < 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: play,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Resume"]
						}),
						hasRun && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: replay,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Replay"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.9fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl bg-surface ring-1 ring-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video bg-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero-table.jpg",
								alt: "Reseller table of mixed inventory used as the scan source",
								className: "h-full w-full object-cover"
							}),
							ITEMS.map((item) => {
								const on = progress >= item.at;
								const active = current?.id === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("absolute rounded-sm ring-1 transition-[opacity,transform,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]", item.method === "barcode" ? "ring-primary/80" : "ring-accent/90", on ? "opacity-100" : "opacity-0", active ? "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_35%,transparent)]" : ""),
									style: {
										top: item.box.t,
										left: item.box.l,
										width: item.box.w,
										height: item.box.h
									},
									children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("absolute left-1 whitespace-nowrap rounded-sm px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide", item.label === "top" ? "top-1" : "bottom-1", item.method === "barcode" ? "bg-primary text-primary-fg" : "bg-accent text-accent-fg"),
										children: item.method
									})
								}, item.id);
							}),
							playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-y-0 w-px bg-primary/70",
								style: { left: `${Math.round(progress * 100)}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 h-1 bg-bg/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-primary",
									style: { width: `${Math.round(progress * 100)}%` }
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-fg",
								children: visible.length
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								" / ",
								ITEMS.length,
								" identified"
							] })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "tabular-nums",
								children: [
									barcodes,
									" barcode · ",
									visuals,
									" visual"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "tabular-nums text-fg",
								children: ["$", total.toLocaleString()]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex max-h-[32rem] flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium text-fg",
								children: "Draft listings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle",
								children: "Suggested retail"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex-1 space-y-1 overflow-auto p-2",
							children: [visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "px-3 py-10 text-center text-sm text-subtle",
								children: "Press play to run the sweep."
							}), visible.slice().reverse().map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-md px-2 py-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.thumb,
										alt: item.name,
										width: 48,
										height: 48,
										loading: "lazy",
										decoding: "async",
										className: "size-12 rounded-sm object-cover ring-1 ring-border"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium text-fg",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 text-xs text-subtle",
											children: [
												item.method === "barcode" ? "UPC match" : "Visual match",
												" ·",
												" ",
												item.sold,
												" sold / 90d"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-sm tabular-nums text-fg",
										children: ["$", item.price]
									})
								]
							}, item.id))]
						}),
						done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border px-4 py-3 text-sm text-muted",
							children: "8 drafts ready. Review, then post to your shops."
						})
					]
				})]
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		"aria-labelledby": "stories-heading",
		className: "scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-muted",
					children: "From the floor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "stories-heading",
					className: "mt-3 font-display text-4xl tracking-[-0.03em] text-fg sm:text-5xl",
					children: "Built with people who buy by the bin."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 lg:grid-cols-3",
				children: REVIEWS.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex flex-col rounded-xl bg-bg p-6 ring-1 ring-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "flex-1 text-base leading-relaxed text-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: story.quote })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-8 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story.image,
							alt: `${story.name}, ${story.role}`,
							width: 48,
							height: 48,
							loading: "lazy",
							decoding: "async",
							className: "size-12 rounded-full object-cover ring-1 ring-border"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: story.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: story.role
						})] })]
					})]
				}, story.name))
			})]
		})
	});
}
function MobileCta() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const pastHero = window.scrollY > 520;
			const distanceToEnd = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
			setShow(pastHero && distanceToEnd > 520);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: show ? "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden" : "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#join",
			className: "flex h-12 items-center justify-center bg-primary text-sm font-medium text-primary-fg",
			children: "Join waitlist"
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proof, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanDemo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MidCta, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
var SplitComponent = Home;
//#endregion
export { SplitComponent as component };
