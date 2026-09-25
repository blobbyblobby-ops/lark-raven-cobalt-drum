export type Deck = {
  id: number;
  angle: string;
  audience: string;
  promise: string;
  tone: string;
  risk: string;
  brand: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  secondary: string;
  features: { title: string; body: string }[];
  statValue: string;
  statLabel: string;
  prices: { name: string; price: string; note: string }[];
  quote: string;
  by: string;
};

export const DECKS: Deck[] = [
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
        body: "A slow pass replaces the photo pile. Boxed SKUs and loose goods stay in the same take.",
      },
      {
        title: "Titles while you pour",
        body: "Barcodes fill themselves in. Pieces without a code get a visual match before you sit.",
      },
      {
        title: "Post when you nod",
        body: "Drafts wait in a queue. Nothing goes to eBay, Mercari, or Shopify until you say so.",
      },
    ],
    statValue: "1 min",
    statLabel: "of review per piece after the walk",
    prices: [
      { name: "Scout", price: "$39", note: "Side tables and weekend bins" },
      { name: "Dealer", price: "$89", note: "A list every week" },
      { name: "Floor", price: "$219", note: "Estates and shared benches" },
    ],
    quote: "I used to lose the morning to the camera. Now the morning is a read-through, not a photo shoot.",
    by: "Helen Cho, weekend reseller",
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
        body: "UPC, EAN, and shelf labels are read as the camera passes. No separate scan gun.",
      },
      {
        title: "Object, if it is not",
        body: "Shape, brand, and form cover housewares, apparel, and the usual estate mix.",
      },
      {
        title: "A shrug when it is unsure",
        body: "One-off art and wrecked pieces stay in review instead of receiving a forced title.",
      },
    ],
    statValue: "Optional",
    statLabel: "barcode. The object is enough to start a draft.",
    prices: [
      { name: "Scout", price: "$39", note: "Try it on one unlabeled table" },
      { name: "Dealer", price: "$89", note: "Mixed vintage, every week" },
      { name: "Floor", price: "$219", note: "Estate crews and warehouses" },
    ],
    quote: "Other tools stop when the tag is gone. This one keeps walking.",
    by: "Andre Willis, vintage furniture",
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
        body: "The number shows up with the name. Low comps are obvious before you write a paragraph.",
      },
      {
        title: "Unsold prices move",
        body: "A draft does not freeze on the day you filmed. Refresh the ask on what is still sitting.",
      },
      {
        title: "You still set the price",
        body: "The suggestion is a starting point from sold listings, not a price that posts itself.",
      },
    ],
    statValue: "Sold",
    statLabel: "comps on the draft, not after you have written the title",
    prices: [
      { name: "Scout", price: "$39", note: "Comps on 150 pieces" },
      { name: "Dealer", price: "$89", note: "Refresh unsold SKUs" },
      { name: "Floor", price: "$219", note: "Crew-wide price rules" },
    ],
    quote: "We used to title first and discover the margin later. The order is flipped now.",
    by: "Ruth Adeyemi, pallet buyer",
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
        body: "A toaster does not get a studio. The table is the set. Keep pieces from stacking and keep moving.",
      },
      {
        title: "Duplicates collapse",
        body: "Repeats and lots group together instead of becoming forty twin drafts you have to merge by hand.",
      },
      {
        title: "Then it fans out",
        body: "Dealer sends an approved draft to the marketplaces you already sell on. Scout stays on one.",
      },
    ],
    statValue: "40",
    statLabel: "pieces in a typical table sweep",
    prices: [
      { name: "Scout", price: "$39", note: "150 IDs, one shop" },
      { name: "Dealer", price: "$89", note: "750 IDs, five shops" },
      { name: "Floor", price: "$219", note: "Unlimited, seats, API" },
    ],
    quote: "Pallet morning used to be a week of photos. The week is gone.",
    by: "Chris Pell, multi-channel dealer",
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
        body: "Each piece is a draft with a still pulled from the clip. You edit the ones that look wrong.",
      },
      {
        title: "Condition in your words",
        body: "Notes from the video sit beside the title. Scuffs and missing parts stay yours to describe.",
      },
      {
        title: "Auto-post is a switch",
        body: "Off until you trust the match. On, per channel, only after that. Scout never posts for you.",
      },
    ],
    statValue: "0",
    statLabel: "listings posted before you approve them",
    prices: [
      { name: "Scout", price: "$39", note: "Drafts only. You post." },
      { name: "Dealer", price: "$89", note: "Auto-post when you enable it" },
      { name: "Floor", price: "$219", note: "Seats, with the same gate" },
    ],
    quote: "I don’t want a stranger on my seller account. I want the typing done.",
    by: "Naomi Berg, eBay clothing",
  },
];
