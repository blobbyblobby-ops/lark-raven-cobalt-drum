export type Angle = {
  label: string;
  src: string;
  position: string;
  focus: number;
  light: string;
};

export type EngineHit = {
  engine: string;
  title: string;
  confidence: number;
  note: string;
};

export type PricePoint = {
  when: string;
  source: string;
  price: number;
};

export type LotItem = {
  id: string;
  name: string;
  brand: string;
  model: string;
  color: string;
  shape: string;
  markings: string;
  method: "barcode" | "qr" | "visual";
  code: string | null;
  confidence: number;
  uncertain: boolean;
  ask: number;
  low: number;
  high: number;
  engines: EngineHit[];
  angles: Angle[];
  timeline: PricePoint[];
  skim: string[];
  description: string;
  features: string[];
  benefits: string[];
  similar: string;
  at: number;
};

function angles(src: string, withCode: boolean): Angle[] {
  const shots: Angle[] = [
    { label: "Front", src, position: "50% 45%", focus: 97, light: "Daylight, even" },
    { label: "Three-quarter", src, position: "28% 50%", focus: 93, light: "Soft side" },
    { label: "Detail", src, position: "62% 28%", focus: 90, light: "Fill, no glare" },
    { label: "Scale", src, position: "50% 78%", focus: 86, light: "Overhead" },
  ];
  if (withCode) {
    shots.push({ label: "Code", src, position: "70% 62%", focus: 95, light: "Flat, in focus" });
  }
  return shots;
}

export const LOT: LotItem[] = [
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
      { engine: "Barcode catalog", title: "Lumen Audio HA-720", confidence: 99, note: "UPC exact" },
      { engine: "eBay sold", title: "Lumen HA-720 wireless", confidence: 96, note: "Same model string" },
      { engine: "Amazon", title: "Lumen Audio HA-720", confidence: 97, note: "Title and image agree" },
    ],
    angles: angles("/images/headphones.jpg", true),
    timeline: [
      { when: "Mar 2024", source: "eBay", price: 169 },
      { when: "Aug 2024", source: "Amazon", price: 159 },
      { when: "Jan 2025", source: "Mercari", price: 142 },
      { when: "Jun 2025", source: "eBay", price: 151 },
      { when: "Nov 2025", source: "Facebook", price: 135 },
      { when: "Apr 2026", source: "eBay", price: 148 },
    ],
    skim: ["HA-720 over-ear", "Bluetooth, folding", "Black, complete"],
    description:
      "Lumen Audio HA-720 wireless over-ear headphones. The same model string, UPC, and earcup shape show up on eBay, Amazon, and Mercari listings. Folding hinges, padded headband, black finish. Sold prices cluster between $119 and $176 depending on pads and whether the cable is included.",
    features: ["Bluetooth over-ear", "Folding yoke", "Model HA-720 printed on the hinge", "UPC 0194827300154"],
    benefits: ["Identified from the barcode, not a guess", "Ask sits inside the two-year sold band"],
    similar: "Same period as the HA-520. The HA-720 is the folding one; the HA-520 does not fold and sells lower.",
    at: 0.12,
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
      { engine: "Barcode catalog", title: "Northwind NW-PC80 8 qt", confidence: 98, note: "UPC exact" },
      { engine: "Amazon", title: "Northwind 7-in-1 8-quart", confidence: 95, note: "Capacity matches the plate" },
      { engine: "Walmart", title: "Northwind PC80", confidence: 93, note: "Same model family" },
    ],
    angles: angles("/images/cooker.jpg", true),
    timeline: [
      { when: "May 2023", source: "Amazon", price: 89 },
      { when: "Dec 2023", source: "eBay", price: 71 },
      { when: "Jul 2024", source: "Facebook", price: 60 },
      { when: "Feb 2025", source: "Mercari", price: 55 },
      { when: "Sep 2025", source: "eBay", price: 49 },
      { when: "Jun 2026", source: "eBay", price: 54 },
    ],
    skim: ["Northwind 8 qt", "7-in-1 pressure", "Model NW-PC80"],
    description:
      "Northwind NW-PC80 7-in-1 electric pressure cooker, 8 quart, stainless lid and black body. Catalogs that carry the UPC describe the same function set: pressure, slow, steam, sauté, rice, yogurt, and keep warm. Used sold prices have settled in the mid-$50s.",
    features: ["8 quart", "7 functions listed on every current retail page", "Model plate NW-PC80", "UPC 0085719200448"],
    benefits: ["Barcode lock, so the title is not a lookalike cooker", "Ask follows the used market, not the original retail"],
    similar: "The 6-quart NW-PC60 is shorter and sells about $15 less. This body matches the 8-quart height.",
    at: 0.26,
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
      { engine: "QR payload", title: "Courtline Low 98", confidence: 97, note: "Code reads CL-98-WHT" },
      { engine: "StockX-style sold", title: "Courtline Low 98 white", confidence: 91, note: "Colorway agrees" },
      { engine: "eBay", title: "Courtline Low '98", confidence: 92, note: "Same silhouette" },
    ],
    angles: angles("/images/sneakers.jpg", true),
    timeline: [
      { when: "Apr 2024", source: "eBay", price: 130 },
      { when: "Oct 2024", source: "Depop", price: 118 },
      { when: "Mar 2025", source: "Mercari", price: 105 },
      { when: "Aug 2025", source: "eBay", price: 99 },
      { when: "Jan 2026", source: "Poshmark", price: 120 },
      { when: "Jul 2026", source: "eBay", price: 112 },
    ],
    skim: ["Courtline Low 98", "White / navy", "QR confirmed"],
    description:
      "Courtline Low 98 low-top basketball sneakers, white leather with navy overlays. The QR on the tongue resolves to CL-98-WHT, and sold listings using that code share the cupsole and the navy heel tab. Prices move with size and sole wear.",
    features: ["Low-top cupsole", "Tongue QR CL-98-WHT", "White and navy", "Lace-up"],
    benefits: ["QR removes the colorway mix-ups common on this silhouette"],
    similar: "The High 98 is the same last with a padded collar and sells higher. This pair is the low.",
    at: 0.4,
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
      { engine: "Visual match", title: "Banded mixing bowl, unmarked", confidence: 74, note: "Shape and bands" },
      { engine: "eBay image", title: "Pyrex-style primary band", confidence: 61, note: "No stamp, so this is weak" },
      { engine: "Amazon", title: "No retail barcode", confidence: 18, note: "Nothing current matches" },
    ],
    angles: angles("/images/bowl.jpg", false),
    timeline: [
      { when: "Jun 2023", source: "Etsy", price: 42 },
      { when: "Jan 2024", source: "eBay", price: 28 },
      { when: "Aug 2024", source: "Etsy", price: 46 },
      { when: "Mar 2025", source: "Facebook", price: 24 },
      { when: "Oct 2025", source: "eBay", price: 31 },
      { when: "May 2026", source: "Etsy", price: 36 },
    ],
    skim: ["Banded mixing bowl", "No maker's mark", "Needs a glance"],
    description:
      "Ivory mixing bowl with colored bands, nesting shape, no readable maker's mark. Sites that show this shape call it a mid-century banded bowl. One image index leans toward a marked glass brand; that claim is rejected because the stamp is not in any sharp frame. Left as unmarked, with the sold range for banded bowls that also lack a mark.",
    features: ["Nested mixing bowl", "Painted bands", "No barcode", "Mark not visible"],
    benefits: ["Cross-check refused a forced brand", "Price uses only unmarked comps"],
    similar: "Marked glass bowls from the same decades sell higher when the stamp is readable. This draft does not claim one.",
    at: 0.55,
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
      { engine: "Visual match", title: "Brass cone task lamp", confidence: 86, note: "Shade, arm, and base agree" },
      { engine: "eBay image", title: "Brass cone desk lamp", confidence: 83, note: "Same joint" },
      { engine: "Etsy", title: "Mid-century brass cone", confidence: 80, note: "Finish agrees, no logo" },
    ],
    angles: angles("/images/lamp.jpg", false),
    timeline: [
      { when: "Feb 2024", source: "Etsy", price: 96 },
      { when: "Sep 2024", source: "eBay", price: 72 },
      { when: "Apr 2025", source: "Chairish-style", price: 110 },
      { when: "Nov 2025", source: "Facebook", price: 60 },
      { when: "Feb 2026", source: "eBay", price: 75 },
      { when: "Aug 2026", source: "Etsy", price: 84 },
    ],
    skim: ["Brass cone lamp", "Swing arm", "No barcode"],
    description:
      "Brass desk lamp with a cone shade and a swing arm. Three image indexes agree on the shape and the finish. None of them finds a model plate, so the draft names the form and the finish and does not invent a designer. Sold comps for this shape run from about $55 to $110.",
    features: ["Cone shade", "Swing arm", "Brass finish", "No barcode or model plate"],
    benefits: ["Title describes what is visible", "Ask is the middle of the sold band"],
    similar: "A labeled architect lamp with a rectangular head is a different object and a different price. This one is the cone.",
    at: 0.7,
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
      { engine: "Visual match", title: "Vale round 5.5 qt", confidence: 93, note: "Knob mark and handle shape" },
      { engine: "eBay", title: "Vale enamel dutch oven 5.5", confidence: 91, note: "Same lid" },
      { engine: "Amazon", title: "Vale 5.5 quart round", confidence: 90, note: "Current colorway cream" },
    ],
    angles: angles("/images/dutch-oven.jpg", false),
    timeline: [
      { when: "Jan 2024", source: "Amazon", price: 198 },
      { when: "Jul 2024", source: "eBay", price: 155 },
      { when: "Dec 2024", source: "Mercari", price: 140 },
      { when: "May 2025", source: "eBay", price: 162 },
      { when: "Dec 2025", source: "Facebook", price: 149 },
      { when: "Jun 2026", source: "eBay", price: 168 },
    ],
    skim: ["Vale 5.5 qt", "Cream enamel", "Lid mark readable"],
    description:
      "Vale enameled cast-iron dutch oven, round, 5.5 quart, cream. The word Vale is readable on the lid in the sharp frame. Retail and sold listings that show that mark and the side handles use the 5.5 quart size. Chips change the price; this draft assumes you will say so if you see them.",
    features: ["5.5 quart round", "Cream enamel", "Side handles", "Lid mark: Vale"],
    benefits: ["Brand comes from a readable mark, not a similar pot", "Ask is inside the sold band for clean examples"],
    similar: "The 7-quart oval is longer and usually $40 more. The handle span here matches the 5.5 round.",
    at: 0.86,
  },
];

export const PLATFORMS = [
  { id: "ebay", name: "eBay", detail: "Auction or buy it now" },
  { id: "amazon", name: "Amazon", detail: "Seller Central" },
  { id: "etsy", name: "Etsy", detail: "Vintage and handmade" },
  { id: "facebook", name: "Facebook Marketplace", detail: "Local and shipping" },
  { id: "mercari", name: "Mercari", detail: "Fixed price" },
  { id: "poshmark", name: "Poshmark", detail: "Apparel and home" },
  { id: "depop", name: "Depop", detail: "Apparel" },
  { id: "craigslist", name: "Craigslist", detail: "Local" },
  { id: "offerup", name: "OfferUp", detail: "Local" },
  { id: "shopify", name: "Shopify", detail: "Your shop" },
  { id: "whatnot", name: "Whatnot", detail: "Live selling" },
] as const;

export type PlatformId = (typeof PLATFORMS)[number]["id"];

export const SWEEP_STEPS = [
  "Playing the take",
  "Keeping the sharpest frame of each object",
  "Reading barcodes and QR codes",
  "Reading brands, model plates, color, and shape",
  "Searching catalogs",
  "Cross-checking where the engines disagree",
  "Writing the skim and the full description from facts that repeat",
  "Building the sold-price timeline",
] as const;
