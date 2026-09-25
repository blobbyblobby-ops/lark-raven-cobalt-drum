export const LOT_SIZE = 40;
export const WAGE = 25;

export type Mark = "Yes" | "Partial" | "No";

export type Tool = {
  id: string;
  name: string;
  price: number;
  plan: string;
  minutes: number;
  lotlens?: boolean;
};

/** Entry list prices, Aug–Sep 2026. Minutes: 40 mixed items, 3 marketplaces. */
export const TOOLS: Tool[] = [
  { id: "manual", name: "By hand", price: 0, plan: "Your time only", minutes: 12 },
  { id: "ebay", name: "eBay Seller Hub", price: 0, plan: "Free hub", minutes: 8 },
  { id: "flyp", name: "Flyp", price: 9, plan: "Flat", minutes: 7.5 },
  { id: "vendoo", name: "Vendoo", price: 14.99, plan: "Starter", minutes: 6.5 },
  { id: "lp", name: "List Perfectly", price: 29, plan: "Simple", minutes: 6.2 },
  { id: "crosslist", name: "Crosslist", price: 29.99, plan: "Bronze", minutes: 6 },
  { id: "nifty", name: "Nifty", price: 39.99, plan: "Crosslisting Plus", minutes: 5.5 },
  { id: "prime", name: "PrimeLister", price: 49.99, plan: "Entry", minutes: 6.4 },
  { id: "scout", name: "LotLens Scout", price: 39, plan: "1 marketplace", minutes: 4.5, lotlens: true },
  { id: "dealer", name: "LotLens Dealer", price: 89, plan: "5 marketplaces", minutes: 1, lotlens: true },
  { id: "floor", name: "LotLens Floor", price: 219, plan: "Team", minutes: 0.8, lotlens: true },
];

export const MANUAL = TOOLS[0];

const maxSaved = Math.max(...TOOLS.map((tool) => MANUAL.minutes - tool.minutes));

export function timeIndex(tool: Tool) {
  return Math.round((100 * (MANUAL.minutes - tool.minutes)) / maxSaved);
}

export function monthStats(tool: Tool, lots: number) {
  const hours = (tool.minutes * LOT_SIZE * lots) / 60;
  const manualHours = (MANUAL.minutes * LOT_SIZE * lots) / 60;
  const saved = manualHours - hours;
  const labor = saved * WAGE;
  const net = labor - tool.price;
  const perDollar = tool.price > 0 ? labor / tool.price : null;
  return { hours, saved, labor, net, perDollar };
}

export function money(value: number, digits = 0) {
  const abs = Math.abs(value);
  const body = abs.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return `${value < 0 ? "−" : ""}$${body}`;
}

export function priceLabel(price: number) {
  if (price === 0) return "$0";
  return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`;
}

export const FEATURES: { label: string; marks: Record<string, Mark> }[] = [
  {
    label: "One video for the whole lot",
    marks: {
      manual: "No",
      ebay: "No",
      flyp: "No",
      vendoo: "No",
      lp: "No",
      crosslist: "No",
      nifty: "No",
      prime: "No",
      lotlens: "Yes",
    },
  },
  {
    label: "Barcode read in that pass",
    marks: {
      manual: "No",
      ebay: "Partial",
      flyp: "No",
      vendoo: "No",
      lp: "No",
      crosslist: "No",
      nifty: "No",
      prime: "No",
      lotlens: "Yes",
    },
  },
  {
    label: "Visual ID without a barcode",
    marks: {
      manual: "No",
      ebay: "No",
      flyp: "No",
      vendoo: "No",
      lp: "No",
      crosslist: "No",
      nifty: "No",
      prime: "No",
      lotlens: "Yes",
    },
  },
  {
    label: "Sold-comp price on the draft",
    marks: {
      manual: "No",
      ebay: "Partial",
      flyp: "No",
      vendoo: "No",
      lp: "No",
      crosslist: "Partial",
      nifty: "Partial",
      prime: "No",
      lotlens: "Yes",
    },
  },
  {
    label: "You approve before it posts",
    marks: {
      manual: "Yes",
      ebay: "Yes",
      flyp: "Yes",
      vendoo: "Yes",
      lp: "Yes",
      crosslist: "Yes",
      nifty: "Yes",
      prime: "Yes",
      lotlens: "Yes",
    },
  },
  {
    label: "Cross-post from one draft",
    marks: {
      manual: "No",
      ebay: "No",
      flyp: "Yes",
      vendoo: "Yes",
      lp: "Yes",
      crosslist: "Yes",
      nifty: "Yes",
      prime: "Yes",
      lotlens: "Yes",
    },
  },
  {
    label: "Auto-delist when it sells",
    marks: {
      manual: "No",
      ebay: "No",
      flyp: "No",
      vendoo: "Yes",
      lp: "No",
      crosslist: "No",
      nifty: "Yes",
      prime: "Yes",
      lotlens: "No",
    },
  },
];

export const MATRIX_IDS = [
  "manual",
  "ebay",
  "flyp",
  "vendoo",
  "lp",
  "crosslist",
  "nifty",
  "prime",
  "lotlens",
] as const;

export const MATRIX_LABELS: Record<(typeof MATRIX_IDS)[number], string> = {
  manual: "By hand",
  ebay: "eBay",
  flyp: "Flyp",
  vendoo: "Vendoo",
  lp: "List Perfectly",
  crosslist: "Crosslist",
  nifty: "Nifty",
  prime: "PrimeLister",
  lotlens: "LotLens",
};

export const LEGAL_VARIANTS = [
  {
    id: "A",
    live: true,
    text: "© 2026 Joshua Brent Moyer. All rights reserved. U.S. and international patents, trademarks, service marks, trade dress and designs, copyrights, and other intellectual property in this product, service, system, and its descriptions, designs, packaging, graphics, illustrations, mockups, copy, software, and hardware are exclusively reserved and may be pending or active.",
  },
  {
    id: "B",
    live: false,
    text: "© 2026 Joshua Brent Moyer. All rights reserved. Patents, trademarks, service marks, trade dress, designs, copyrights, and related rights — U.S. and international, pending or active — cover this product, service, system, copy, graphics, and software or hardware.",
  },
  {
    id: "C",
    live: false,
    text: "All rights reserved, © 2026 Joshua Brent Moyer. The product, service, system, methods, interface, designs, copy, and software or hardware are protected by U.S. and international patents, trademarks, service marks, trade dress, and copyrights, pending or active.",
  },
  {
    id: "D",
    live: false,
    text: "© 2026 Joshua Brent Moyer. Exclusive rights reserved in U.S. and international patents, marks, trade dress, designs, and copyrights covering this product, service, system, and associated content, pending or active.",
  },
  {
    id: "E",
    live: false,
    text: "Joshua Brent Moyer, 2026. All rights reserved. No unlicensed use of the patents, trademarks, service marks, trade dress, designs, copyrights, or other intellectual property in this product, service, system, copy, or software.",
  },
] as const;

export const COPY_VARIANTS = [
  {
    id: "1",
    live: false,
    title: "Same lot. A fraction of the listing time.",
    body: "Crosslisters repost a listing you already made. LotLens is the step before that: one video, then priced drafts.",
  },
  {
    id: "2",
    live: false,
    title: "Cheaper tools still start with a photo of every SKU.",
    body: "The bill that matters is the hour, not the subscription. Here is the time, the price, and what is left.",
  },
  {
    id: "3",
    live: false,
    title: "Stop paying twice — once in software, again in minutes.",
    body: "A time-value index for a mixed lot, set against the tools resellers already pay for.",
  },
  {
    id: "4",
    live: true,
    title: "Crosslisting is the last mile.",
    body: "Identification is the day. Features, public prices, and a time-saved index against the tools resellers already use.",
  },
  {
    id: "5",
    live: false,
    title: "Forty items. Three marketplaces. One pass with the camera.",
    body: "Estimated minutes, public prices, and a 0–100 index of time saved versus listing by hand.",
  },
] as const;
