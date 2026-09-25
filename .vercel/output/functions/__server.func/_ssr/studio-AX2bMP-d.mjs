import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useWaitlist, t as isValidEmail } from "./waitlist-CvktKfKV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-AX2bMP-d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DECKS = [
	{
		id: 1,
		angle: "Speed",
		audience: "Sellers who already know the goods and lose the morning to photography.",
		promise: "The lot is drafted before the coffee cools.",
		tone: "Concrete, domestic, a little impatient. Time is the only metric.",
		risk: "Sounds small if the reader sells pallets, not a kitchen table. It undersells unlabeled ID.",
		brand: "LotLens",
		eyebrow: "The morning list",
		headline: "List the table before the coffee cools.",
		sub: "Walk the phone once across the lot. Sit down to priced drafts instead of a camera roll and a stack of tabs.",
		cta: "Get the morning back",
		secondary: "Watch a 40-item pass",
		features: [
			{
				title: "One walk, not forty setups",
				body: "A slow pass replaces the photo pile. Boxed SKUs and loose goods stay in the same take."
			},
			{
				title: "Titles while you pour",
				body: "Barcodes fill themselves in. Pieces without a code get a visual match before you sit."
			},
			{
				title: "Post when you nod",
				body: "Drafts wait in a queue. Nothing goes to eBay, Mercari, or Shopify until you say so."
			}
		],
		statValue: "1 min",
		statLabel: "of review per piece after the walk",
		prices: [
			{
				name: "Scout",
				price: "$39",
				note: "Side tables and weekend bins"
			},
			{
				name: "Dealer",
				price: "$89",
				note: "A list every week"
			},
			{
				name: "Floor",
				price: "$219",
				note: "Estates and shared benches"
			}
		],
		quote: "I used to lose the morning to the camera. Now the morning is a read-through, not a photo shoot.",
		by: "Helen Cho, weekend reseller"
	},
	{
		id: 2,
		angle: "Unlabeled",
		audience: "Estate, vintage, and mixed-lot sellers whose inventory never had a UPC.",
		promise: "Missing barcodes do not stall the catalog.",
		tone: "Plain-spoken and specific. It names the failure of barcode-only tools.",
		risk: "Buyers with clean retail SKUs may think it is not for them. Accuracy limits need to stay visible.",
		brand: "LotLens",
		eyebrow: "No UPC required",
		headline: "Half the lot never had a barcode.",
		sub: "Vintage, estate, and unpackaged goods stay in the catalog. LotLens reads the code when it is in frame and the object when it is not.",
		cta: "Run it on unlabeled goods",
		secondary: "What it will not guess",
		features: [
			{
				title: "Code, if it is in frame",
				body: "UPC, EAN, and shelf labels are read as the camera passes. No separate scan gun."
			},
			{
				title: "Object, if it is not",
				body: "Shape, brand, and form cover housewares, apparel, and the usual estate mix."
			},
			{
				title: "A shrug when it is unsure",
				body: "One-off art and wrecked pieces stay in review instead of receiving a forced title."
			}
		],
		statValue: "Optional",
		statLabel: "barcode. The object is enough to start a draft.",
		prices: [
			{
				name: "Scout",
				price: "$39",
				note: "Try it on one unlabeled table"
			},
			{
				name: "Dealer",
				price: "$89",
				note: "Mixed vintage, every week"
			},
			{
				name: "Floor",
				price: "$219",
				note: "Estate crews and warehouses"
			}
		],
		quote: "Other tools stop when the tag is gone. This one keeps walking.",
		by: "Andre Willis, vintage furniture"
	},
	{
		id: 3,
		angle: "Margin",
		audience: "Resellers who write titles for pieces that were never worth the postage.",
		promise: "You see a sold price before you spend time naming the item.",
		tone: "Commercial and cool. Money first, romance second.",
		risk: "Feels like a comps tool, not a capture tool, if the video is buried. Comps can be thin on odd goods.",
		brand: "LotLens",
		eyebrow: "Price first",
		headline: "See what it sold for before you name it.",
		sub: "Every draft carries sold comps and a suggested price, so you stop describing pieces that should have been binned.",
		cta: "Price a lot",
		secondary: "How a comp is chosen",
		features: [
			{
				title: "Keep, bulk, or bin",
				body: "The number shows up with the name. Low comps are obvious before you write a paragraph."
			},
			{
				title: "Unsold prices move",
				body: "A draft does not freeze on the day you filmed. Refresh the ask on what is still sitting."
			},
			{
				title: "You still set the price",
				body: "The suggestion is a starting point from sold listings, not a price that posts itself."
			}
		],
		statValue: "Sold",
		statLabel: "comps on the draft, not after you have written the title",
		prices: [
			{
				name: "Scout",
				price: "$39",
				note: "Comps on 150 pieces"
			},
			{
				name: "Dealer",
				price: "$89",
				note: "Refresh unsold SKUs"
			},
			{
				name: "Floor",
				price: "$219",
				note: "Crew-wide price rules"
			}
		],
		quote: "We used to title first and discover the margin later. The order is flipped now.",
		by: "Ruth Adeyemi, pallet buyer"
	},
	{
		id: 4,
		angle: "Volume",
		audience: "Dealers who already know how to sell and are tired of touching every SKU twice.",
		promise: "Intake is one pass, then the posts fan out.",
		tone: "Operational. Counts, channels, and throughput. Almost no metaphor.",
		risk: "Cold if someone is new to resale. It assumes the reader already lists at volume.",
		brand: "LotLens",
		eyebrow: "Intake",
		headline: "Forty pieces. One pass. Three marketplaces.",
		sub: "For the dealer who already knows the shops and wants the touching to stop. Film the lot. Approve the batch. Send it.",
		cta: "Run intake on video",
		secondary: "Minutes versus crosslisting",
		features: [
			{
				title: "Sweep, don’t stage",
				body: "A toaster does not get a studio. The table is the set. Keep pieces from stacking and keep moving."
			},
			{
				title: "Duplicates collapse",
				body: "Repeats and lots group together instead of becoming forty twin drafts you have to merge by hand."
			},
			{
				title: "Then it fans out",
				body: "Dealer sends an approved draft to the marketplaces you already sell on. Scout stays on one."
			}
		],
		statValue: "40",
		statLabel: "pieces in a typical table sweep",
		prices: [
			{
				name: "Scout",
				price: "$39",
				note: "150 IDs, one shop"
			},
			{
				name: "Dealer",
				price: "$89",
				note: "750 IDs, five shops"
			},
			{
				name: "Floor",
				price: "$219",
				note: "Unlimited, seats, API"
			}
		],
		quote: "Pallet morning used to be a week of photos. The week is gone.",
		by: "Chris Pell, multi-channel dealer"
	},
	{
		id: 5,
		angle: "Control",
		audience: "Sellers who do not want software holding the keys to their accounts.",
		promise: "Drafts can be fast. Publishing stays yours.",
		tone: "Calm and firm. It argues against autopilot instead of against effort.",
		risk: "Sounds slower than tools that promise to post for you. Power users may want the switch on immediately.",
		brand: "LotLens",
		eyebrow: "You publish",
		headline: "Nothing goes live without you.",
		sub: "LotLens can draft faster than you can type. It will not post until the draft looks like something you would sign.",
		cta: "Review the drafts",
		secondary: "What stays manual",
		features: [
			{
				title: "A queue, not a firehose",
				body: "Each piece is a draft with a still pulled from the clip. You edit the ones that look wrong."
			},
			{
				title: "Condition in your words",
				body: "Notes from the video sit beside the title. Scuffs and missing parts stay yours to describe."
			},
			{
				title: "Auto-post is a switch",
				body: "Off until you trust the match. On, per channel, only after that. Scout never posts for you."
			}
		],
		statValue: "0",
		statLabel: "listings posted before you approve them",
		prices: [
			{
				name: "Scout",
				price: "$39",
				note: "Drafts only. You post."
			},
			{
				name: "Dealer",
				price: "$89",
				note: "Auto-post when you enable it"
			},
			{
				name: "Floor",
				price: "$219",
				note: "Seats, with the same gate"
			}
		],
		quote: "I don’t want a stranger on my seller account. I want the typing done.",
		by: "Naomi Berg, eBay clothing"
	}
];
function CopyCompare() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "min-h-dvh bg-bg pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-muted",
						children: "Copy, with the layout taken off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-6xl",
						children: "Five ways to sell the same product."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
						children: "Same prices, same mechanism — one video in, priced drafts out. The words change who it is for and what it refuses to promise."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl overflow-x-auto px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[760px] border-collapse text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-xs font-medium text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-4",
								children: "#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-4",
								children: "Angle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-4",
								children: "Audience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-4",
								children: "Promise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3 pr-4",
								children: "Tone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-3",
								children: "Weak if"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: DECKS.map((deck) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "py-4 pr-4 font-mono text-sm text-subtle",
								children: ["0", deck.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 pr-4 text-sm font-medium",
								children: deck.angle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 pr-4 text-sm text-muted",
								children: deck.audience
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 pr-4 text-sm text-muted",
								children: deck.promise
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 pr-4 text-sm text-muted",
								children: deck.tone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-4 text-sm text-muted",
								children: deck.risk
							})
						]
					}, deck.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8",
				children: DECKS.map((deck) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `copy-${deck.id}`,
					className: "border-t border-border pt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-subtle",
							children: [
								"0",
								deck.id,
								" · ",
								deck.angle
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-5xl",
							children: deck.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
							children: deck.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-fg",
							children: [
								"Button: ",
								deck.cta,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: " · "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: deck.secondary
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-6 sm:grid-cols-3",
							children: deck.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-medium",
								children: feature.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: feature.body
							})] }, feature.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-fg",
									children: [deck.statValue, "."]
								}),
								" ",
								deck.statLabel
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 max-w-2xl border-l border-border-strong pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base leading-relaxed",
								children: [
									"“",
									deck.quote,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-2 text-sm text-subtle",
								children: deck.by
							})]
						})
					]
				}, deck.id))
			})
		]
	});
}
function JoinLine({ source, cta, inputClass, buttonClass }) {
	const joined = useWaitlist((s) => s.email);
	const ready = useWaitlist((s) => s.ready);
	const join = useWaitlist((s) => s.join);
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
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
		join(trimmed);
		toast.success("You're on the LotLens list.");
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-12", inputClass) });
	if (joined) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm",
		children: [
			"You’re on the list as ",
			joined,
			"."
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		"data-source": source,
		className: "flex flex-col gap-2 sm:flex-row sm:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: `email-${source}`,
					children: "Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `email-${source}`,
					type: "email",
					inputMode: "email",
					autoComplete: "email",
					autoCapitalize: "none",
					autoCorrect: "off",
					enterKeyHint: "go",
					placeholder: "Email",
					value: email,
					onChange: (event) => setEmail(event.target.value),
					className: cn("h-12 w-full px-3 text-base outline-none", inputClass)
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs",
					children: error
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			className: cn("h-12 w-full shrink-0 px-5 text-sm font-medium sm:w-auto", buttonClass),
			children: cta
		})]
	});
}
function Prices({ deck, className, nameClass, priceClass, noteClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className,
		children: deck.prices.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: nameClass,
				children: tier.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: priceClass,
				children: tier.price
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: noteClass,
				children: tier.note
			})
		] }, tier.name))
	});
}
function Broadsheet({ deck }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "min-h-dvh bg-paper pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tracking-tight",
						children: deck.brand
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs uppercase tracking-[0.18em] text-ink-soft sm:block",
						children: deck.eyebrow
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl lg:col-span-8",
					children: deck.headline
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4 lg:border-l lg:border-ink lg:pl-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-ink-soft",
							children: deck.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg leading-relaxed",
							children: deck.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
								source: "broadsheet",
								cta: deck.cta,
								inputClass: "border border-ink bg-paper text-ink placeholder:text-ink-soft",
								buttonClass: "bg-ink text-paper"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl sm:grid-cols-3",
					children: deck.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: i ? "border-t border-ink px-5 py-8 sm:border-t-0 sm:border-l sm:px-8" : "px-5 py-8 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-ink-soft",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl tracking-tight",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-soft",
								children: feature.body
							})
						]
					}, feature.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-6xl tracking-tight",
						children: deck.statValue
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink-soft",
						children: deck.statLabel
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, {
					deck,
					className: "divide-y divide-rule border-y border-ink lg:col-span-8",
					nameClass: "pt-4 text-xs uppercase tracking-[0.16em] text-ink-soft",
					priceClass: "mt-1 font-display text-4xl",
					noteClass: "pb-4 text-sm text-ink-soft"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mx-auto max-w-6xl px-5 py-12 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl leading-snug tracking-tight sm:text-4xl",
						children: [
							"“",
							deck.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-4 text-sm text-ink-soft",
						children: deck.by
					})]
				})
			})
		]
	});
}
function Signal({ deck }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-dvh flex-col bg-void pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-acid",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm tracking-widest",
					children: deck.brand.toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-mist",
					children: deck.eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "order-1 mx-auto max-w-6xl px-5 pb-8 sm:px-8 lg:order-none lg:pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:flex lg:items-end lg:justify-between lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-sans text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl",
						children: deck.headline
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-mono text-5xl leading-none whitespace-nowrap text-fg lg:mt-0",
						children: deck.statValue
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-sm leading-relaxed text-mist",
					children: deck.statLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "order-3 border-y border-void-2 bg-void-2 lg:order-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-px bg-void sm:grid-cols-3",
					children: deck.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-void-2 px-5 py-8 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-medium text-fg",
							children: feature.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-mist",
							children: feature.body
						})]
					}, feature.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "order-2 mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:order-none lg:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-lg leading-relaxed text-mist",
						children: deck.sub
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
							source: "signal",
							cta: deck.cta,
							inputClass: "bg-void-2 text-fg placeholder:text-mist",
							buttonClass: "bg-acid text-acid-fg"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, {
						deck,
						className: "mt-14 grid gap-4 sm:grid-cols-3",
						nameClass: "font-mono text-xs text-mist",
						priceClass: "mt-2 font-mono text-4xl text-fg",
						noteClass: "mt-2 text-sm text-mist"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "order-4 border-t border-void-2 lg:order-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mx-auto max-w-6xl px-5 py-12 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-3xl text-2xl leading-snug text-fg",
						children: [
							"“",
							deck.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-4 font-mono text-xs text-mist",
						children: deck.by
					})]
				})
			})
		]
	});
}
function Showroom({ deck }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "min-h-dvh bg-stone pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-band-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: deck.brand
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-clay",
					children: deck.eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-6xl flex-col-reverse sm:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-table.jpg",
						alt: "",
						className: "aspect-[3/2] w-full object-cover sm:aspect-[16/8]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-stone-2 px-5 py-8 sm:absolute sm:bottom-8 sm:left-8 sm:max-w-md sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl",
								children: deck.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-clay",
								children: deck.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 sm:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
									source: "showroom-top",
									cta: deck.cta,
									inputClass: "bg-stone text-band-fg placeholder:text-clay",
									buttonClass: "bg-oxide text-oxide-fg"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3",
				children: deck.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl tracking-tight",
					children: feature.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-clay",
					children: feature.body
				})] }, feature.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-oxide text-oxide-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-6xl",
						children: deck.statValue
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-oxide-fg/80",
						children: deck.statLabel
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl leading-snug",
						children: [
							"“",
							deck.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-4 text-sm text-oxide-fg/80",
						children: deck.by
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, {
					deck,
					className: "grid gap-8 sm:grid-cols-3",
					nameClass: "text-sm text-clay",
					priceClass: "mt-2 font-display text-5xl",
					noteClass: "mt-2 text-sm text-clay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 hidden max-w-md sm:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
						source: "showroom",
						cta: deck.cta,
						inputClass: "bg-stone-2 text-band-fg placeholder:text-clay",
						buttonClass: "bg-oxide text-oxide-fg"
					})
				})]
			})
		]
	});
}
function TerminalPage({ deck }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-dvh flex-col bg-spec pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-spec-ink lg:grid lg:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "order-2 border-b border-spec-line px-5 py-6 lg:order-none lg:border-b-0 lg:border-r lg:px-6 lg:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-spec-dim",
					children: deck.brand.toUpperCase()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-mono text-xs text-spec-dim",
					children: deck.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-mono text-5xl leading-none",
					children: deck.statValue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-spec-dim",
					children: deck.statLabel
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "order-1 lg:order-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-spec-line px-5 py-10 sm:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-3xl font-sans text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-6xl",
							children: deck.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-spec-dim",
							children: deck.sub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 max-w-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
								source: "terminal",
								cta: deck.cta,
								inputClass: "border border-spec-line bg-spec-2 text-spec-ink placeholder:text-spec-dim",
								buttonClass: "bg-spec-ink text-spec-2"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: deck.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 border-b border-spec-line px-5 py-6 sm:grid-cols-[4rem_1fr] sm:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-spec-dim",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-medium",
						children: feature.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-spec-dim",
						children: feature.body
					})] })]
				}, feature.title)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-5 py-8 sm:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, {
						deck,
						className: "grid gap-6 sm:grid-cols-3",
						nameClass: "font-mono text-xs text-spec-dim",
						priceClass: "mt-2 font-mono text-3xl",
						noteClass: "mt-2 text-sm text-spec-dim"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-10 border-t border-spec-line pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-2xl text-xl leading-snug",
							children: [
								"“",
								deck.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-3 font-mono text-xs text-spec-dim",
							children: deck.by
						})]
					})]
				})
			]
		})]
	});
}
function Poster({ deck }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-poster pb-[calc(8.75rem+env(safe-area-inset-bottom))] text-poster-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-8 px-5 pb-[calc(8.75rem+env(safe-area-inset-bottom))] pt-8 sm:min-h-dvh sm:justify-between sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: deck.brand
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-poster-dim",
							children: deck.eyebrow
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-5xl font-display text-5xl leading-[0.92] tracking-tight text-balance sm:text-8xl",
						children: deck.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-lg leading-relaxed text-poster-dim",
						children: deck.sub
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 max-w-md sm:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
							source: "poster-top",
							cta: deck.cta,
							inputClass: "border border-poster-dim/40 bg-transparent text-poster-fg placeholder:text-poster-dim",
							buttonClass: "bg-band text-band-fg"
						})
					})
				]
			}),
			deck.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: i % 2 ? "bg-poster px-5 py-20 text-poster-fg sm:px-10" : "bg-band px-5 py-20 text-band-fg sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs opacity-60",
						children: ["0", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl",
						children: feature.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base leading-relaxed opacity-80",
						children: feature.body
					})
				]
			}, feature.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-poster px-5 py-20 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-7xl leading-none sm:text-8xl",
						children: deck.statValue
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-poster-dim",
						children: deck.statLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prices, {
						deck,
						className: "mt-16 grid gap-8 border-t border-poster-dim/30 pt-10 sm:grid-cols-3",
						nameClass: "text-sm text-poster-dim",
						priceClass: "mt-2 font-display text-5xl",
						noteClass: "mt-2 text-sm text-poster-dim"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 hidden max-w-md sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinLine, {
							source: "poster",
							cta: deck.cta,
							inputClass: "border border-poster-dim/40 bg-transparent text-poster-fg placeholder:text-poster-dim",
							buttonClass: "bg-band text-band-fg"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-16 max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl leading-snug",
							children: [
								"“",
								deck.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-4 text-sm text-poster-dim",
							children: deck.by
						})]
					})
				]
			})
		]
	});
}
var PAGES = [
	Broadsheet,
	Signal,
	Showroom,
	TerminalPage,
	Poster
];
function DesignPage({ index }) {
	const Page = PAGES[index] ?? Broadsheet;
	const deck = DECKS[index] ?? DECKS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { deck });
}
function Frame({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		"aria-hidden": "true",
		children
	});
}
function WirePaper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		className: "min-h-dvh bg-paper pb-[calc(8.75rem+env(safe-area-inset-bottom))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 border-b border-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 bg-rule lg:col-span-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 border border-ink lg:col-span-4" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid border-y border-ink sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 border-ink sm:border-r" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 border-t border-ink sm:border-t-0 sm:border-r" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 border-t border-ink sm:border-t-0" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-ink lg:col-span-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 border border-ink lg:col-span-8" })]
			})
		]
	});
}
function WireSignal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		className: "min-h-dvh bg-void pb-[calc(8.75rem+env(safe-area-inset-bottom))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-end gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_0.6fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 bg-acid" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 border border-acid" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 bg-void-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 bg-void" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 bg-void-2" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-3 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 border border-mist" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 bg-acid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 border border-mist" })
				]
			})
		]
	});
}
function WireShowroom() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		className: "min-h-dvh bg-stone pb-[calc(8.75rem+env(safe-area-inset-bottom))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-table.jpg",
						alt: "",
						className: "aspect-[16/9] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 bg-stone-2 sm:absolute sm:bottom-6 sm:left-6 sm:w-80" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-clay/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-clay/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 bg-clay/30" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 bg-oxide" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 bg-band-fg/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 bg-band-fg/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 bg-band-fg/10" })
				]
			})
		]
	});
}
function WireSpec() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		className: "min-h-dvh bg-spec pb-[calc(8.75rem+env(safe-area-inset-bottom))] lg:grid lg:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-spec-line bg-spec-2 lg:border-b-0 lg:border-r",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-6 h-10 w-24 bg-spec-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-6 h-24 bg-spec-line" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-spec-line px-6 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 max-w-xl bg-spec-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-12 max-w-sm bg-spec-line" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 border-b border-spec-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 border-b border-spec-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 border-b border-spec-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 px-6 py-8 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 bg-spec-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 bg-spec-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 bg-spec-line" })
				]
			})
		] })]
	});
}
function WirePoster() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		className: "bg-poster pb-[calc(8.75rem+env(safe-area-inset-bottom))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-dvh flex-col justify-between px-5 py-8 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-24 bg-poster-fg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 max-w-3xl bg-poster-fg sm:h-56" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 max-w-xs bg-poster-dim" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-band" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-poster" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 bg-band" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 px-5 py-16 sm:grid-cols-3 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 border border-poster-dim" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 border border-poster-dim" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 bg-band" })
				]
			})
		]
	});
}
var WIRES = [
	WirePaper,
	WireSignal,
	WireShowroom,
	WireSpec,
	WirePoster
];
function Wireframe({ index }) {
	const Wire = WIRES[index] ?? WirePaper;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wire, {});
}
var MODES = [
	{
		id: "page",
		label: "Page"
	},
	{
		id: "wire",
		label: "Frame"
	},
	{
		id: "copy",
		label: "Copy"
	}
];
function Studio() {
	const [mode, setMode] = (0, import_react.useState)("page");
	const [index, setIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [
			mode === "page" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesignPage, { index }) : null,
			mode === "wire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wireframe, { index }) : null,
			mode === "copy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCompare, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-50 border-t border-accent bg-primary-fg pb-[env(safe-area-inset-bottom)] text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-1",
						role: "group",
						"aria-label": "What to view",
						children: [MODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": mode === item.id,
							onClick: () => setMode(item.id),
							className: cn("h-11 text-sm", mode === item.id ? "bg-fg text-primary-fg" : "text-muted"),
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/live",
							className: "inline-flex h-11 items-center justify-center text-sm text-muted",
							children: "Site"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 grid grid-cols-5 gap-1 pb-2",
						role: "group",
						"aria-label": "Version",
						children: [
							0,
							1,
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": index === n,
							onClick: () => {
								setIndex(n);
								if (mode === "copy") document.getElementById(`copy-${n + 1}`)?.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
								else window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: cn("h-11 font-mono text-sm", index === n && mode !== "copy" ? "bg-acid text-acid-fg" : "text-fg"),
							children: n + 1
						}, n))
					})]
				})
			})
		]
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
