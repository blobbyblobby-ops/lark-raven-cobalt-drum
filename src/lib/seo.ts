export const APP_NAME = "LotLens";

export const APP_TITLE = "LotLens — Video to priced marketplace listings";

export const APP_DESCRIPTION =
  "Turn one video of mixed inventory into priced listings. LotLens reads barcodes, IDs unlabeled goods, and drafts eBay, Mercari, and Shopify posts from sold comps.";

export const APP_KEYWORDS =
  "video listing software, resale inventory, barcode scanner, visual product identification, eBay listing tool, sold comps, estate liquidation";

export const COPYRIGHT_OWNER = "Joshua Brent Moyer";
export const COPYRIGHT_YEAR = 2026;
export const COPYRIGHT_LINE = `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved.`;

export const LEGAL_HEADLINE = "Intellectual property notice";

export const LEGAL_PARAGRAPHS = [
  `© ${COPYRIGHT_YEAR} ${COPYRIGHT_OWNER}. All rights reserved. U.S. and international patents, trademarks, service marks, trade dress and designs, copyrights, and other intellectual property in this product, service, system, and its descriptions, designs, packaging, graphics, illustrations, mockups, copy, software, and hardware are exclusively reserved and may be pending or active.`,
  "Nothing in LotLens — name, interface, copy, imagery, video, software, or the method of identifying, pricing, and listing inventory from video — may be copied, reproduced, distributed, reverse engineered, or made into a derivative work without prior written permission, except where law allows.",
  "Third-party marketplace names and logos belong to their owners. Mention is not an endorsement.",
] as const;

export const FAQS = [
  {
    q: "Does it work on items without barcodes?",
    a: "Yes. Barcodes are used when they are in the frame. Unlabeled goods are identified visually — vintage, estate, unpackaged, and anything whose UPC is missing, damaged, or never existed.",
  },
  {
    q: "How many products can one video hold?",
    a: "A typical table sweep is 20 to 80 pieces. Keep items from fully stacking, move slowly enough that each piece is in frame, and LotLens will draft a listing per distinct item.",
  },
  {
    q: "Which marketplaces can I post to?",
    a: "eBay, Mercari, Poshmark, Facebook Marketplace, Whatnot, and Shopify at launch. Every plan can export CSV if you list somewhere else.",
  },
  {
    q: "Will it post without me looking?",
    a: "Not by default. Every clip becomes drafts you review. Dealer and Floor can turn on auto-list per channel once you trust the match rate.",
  },
  {
    q: "How accurate is visual ID?",
    a: "Strong on current and recent consumer goods, branded apparel, and common housewares. Weaker on one-off art and heavily damaged pieces — those stay as 'needs review' instead of a forced match.",
  },
  {
    q: "What kind of video do you need?",
    a: "Phone video is enough. Daylight or a shop lamp, a slow pass, and both the barcode face and a 3/4 view of unlabeled pieces. 1080p or better. No tripod required.",
  },
  {
    q: "Where do the comparison numbers come from?",
    a: "Entry prices are public list prices gathered in August–September 2026 and can change. Minutes are planning estimates for a 40-item mixed lot posted to three marketplaces, not a stopwatch study. The time index is share of minutes saved versus doing that lot by hand.",
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "I used to spend Sunday photographing an estate table one piece at a time. Now I walk the camera down the line, make coffee, and review eighty drafts.",
    name: "Mara Ellison",
    role: "Estate liquidator, Austin",
    image: "/images/portrait-mara.jpg",
  },
  {
    quote:
      "Half my inventory has a UPC. The other half is unlabeled vintage. LotLens is the first tool that doesn't stall when the barcode is missing.",
    name: "Devon Park",
    role: "eBay Top Rated, Chicago",
    image: "/images/portrait-devon.jpg",
  },
  {
    quote:
      "Pallet intakes used to sit for a week while we IDed. Visual match plus comps means we know what to keep, bulk, and bin the same afternoon.",
    name: "Priya Nandakumar",
    role: "Pallet reseller, New Jersey",
    image: "/images/portrait-priya.jpg",
  },
] as const;

export const OFFERS = [
  { name: "Scout", price: "39" },
  { name: "Dealer", price: "89" },
  { name: "Floor", price: "219" },
] as const;

export function originFromRequest(request: Request) {
  const url = new URL(request.url);
  const host =
    request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    request.headers.get("host") ||
    url.host;
  const proto =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    url.protocol.replace(":", "");
  return `${proto}://${host}`;
}

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "#rights-holder",
        name: COPYRIGHT_OWNER,
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
        copyrightNotice: LEGAL_PARAGRAPHS[0],
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
            availability: "https://schema.org/PreOrder",
          })),
        },
        review: REVIEWS.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewBody: review.quote,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": "#faq",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "WebSite",
        "@id": "#website",
        name: APP_NAME,
        description: APP_DESCRIPTION,
        publisher: { "@id": "#organization" },
        copyrightHolder: { "@id": "#rights-holder" },
        copyrightYear: COPYRIGHT_YEAR,
      },
    ],
  };
}
