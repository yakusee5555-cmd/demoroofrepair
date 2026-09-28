export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    tagline: "Leaks traced, shingles fixed, flashing sealed — usually in one visit.",
    img: "/img/roof-install.png",
    description: [
      "Most roof problems start small — a lifted shingle here, a cracked boot there — and turn into ceiling stains and rotted decking if you wait. Ironclad repairs are about finding the actual source of the water, not just caulking the symptom.",
      "We get on the roof, trace the leak to its entry point, and show you photos before we quote. Repairs are fixed right, with materials that match your existing roof, and every repair is backed by our workmanship warranty.",
    ],
    included: [
      "Leak tracing to the true entry point",
      "Shingle replacement & wind-damage fixes",
      "Flashing repair around chimneys, walls & skylights",
      "Valley, vent & pipe-boot sealing",
      "Rotted decking spot replacement",
      "Photos before & after every repair",
    ],
    steps: [
      {
        title: "Free inspection",
        desc: "We get on the roof, find the leak's real source, and show you photos of what's wrong.",
      },
      {
        title: "Firm quote",
        desc: "One fixed price before we touch a shingle — no hourly billing, no surprise add-ons.",
      },
      {
        title: "Same-week repair",
        desc: "Most repairs are done in a single visit. We match your existing shingles as closely as possible.",
      },
      {
        title: "Verify & warranty",
        desc: "We water-test where we can and back every repair with our workmanship warranty.",
      },
    ],
    pricingHint:
      "Most repairs land between $349 and $1,200 depending on the damage. Minor shingle fixes start at $349; extensive flashing work costs more. Exact price confirmed free on-site.",
    faqs: [
      {
        q: "How much does roof repair cost?",
        a: "Minor repairs start around $349. Typical leak fixes run $500–$1,200 depending on the source and extent. We confirm a firm, free quote on-site before any work begins.",
      },
      {
        q: "Can you fix a leak without replacing the whole roof?",
        a: "Almost always, yes. Most leaks come from flashing, boots, or a small patch of failed shingles — isolated problems with isolated fixes. We'll tell you honestly when a repair won't hold and a replacement is the smarter money.",
      },
      {
        q: "How long does a repair take?",
        a: "Most repairs are completed in one visit, usually a few hours. We schedule within the week, and active leaks get emergency priority.",
      },
      {
        q: "Do you warranty your repairs?",
        a: "Yes — every repair is backed by our workmanship warranty. If the same spot leaks again, we come back and make it right.",
      },
    ],
    meta: "Roof repair in Newark & Essex County NJ — leak tracing, shingle replacement, flashing fixes. Most repairs done in one visit. Free estimates — Ironclad Roofing.",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    tagline: "Complete tear-offs built to last 25+ years.",
    img: "/img/roof-replace.jpg",
    description: [
      "When a roof is at the end of its life — curling shingles, granule loss, repeated leaks — patching it is throwing money at a sinking ship. A full replacement resets the clock: new underlayment, new flashing, new shingles, done to manufacturer spec.",
      "We do complete tear-offs, not layovers. We inspect and replace any rotted decking, install ice-and-water shield in the vulnerable zones, and finish with architectural shingles rated for 25+ years. Most homes are done in one to two days.",
    ],
    included: [
      "Complete tear-off to the decking",
      "Decking inspection & rotted wood replacement",
      "Ice-and-water shield at eaves & valleys",
      "Architectural shingles, 25+ year rating",
      "New flashing, ridge vent & drip edge",
      "Full site cleanup — magnet sweep for nails",
    ],
    steps: [
      {
        title: "Free on-roof estimate",
        desc: "We measure, photograph, and assess your roof in person — then give you a firm written price.",
      },
      {
        title: "Material selection",
        desc: "Pick your shingle style and color. We walk you through the options and the warranties behind them.",
      },
      {
        title: "Tear-off & install",
        desc: "One to two days for most homes. Decking repaired, underlayment down, shingles installed to spec.",
      },
      {
        title: "Final walkthrough",
        desc: "We walk the property with you, magnet-sweep for nails, and hand over your warranty paperwork.",
      },
    ],
    pricingHint:
      "Full replacements typically run $8,999–$18,000 depending on roof size, pitch, and shingle choice. Our Signature Replacement package starts at $8,999 — exact price confirmed free on-site.",
    faqs: [
      {
        q: "How much does a roof replacement cost?",
        a: "Most full replacements run $8,999–$18,000 depending on size, pitch, and materials. We give a firm written quote after a free on-roof inspection — no ballpark games.",
      },
      {
        q: "How long does a replacement take?",
        a: "One to two days for most homes. Larger or more complex roofs can take three. We give you a schedule before we start and stick to it.",
      },
      {
        q: "Do you tear off the old roof?",
        a: "Yes — always. Layovers hide rotted decking and void most manufacturer warranties. A proper tear-off is the only way to do it right.",
      },
      {
        q: "What warranty do I get?",
        a: "Manufacturer shingle warranty plus our workmanship warranty on the installation. You get both in writing at the final walkthrough.",
      },
    ],
    meta: "Roof replacement in Newark & Essex County NJ — full tear-offs, architectural shingles, 25+ year lifespan. From $8,999. Free estimates — Ironclad Roofing.",
  },
  {
    slug: "storm-hail-damage",
    title: "Storm & Hail Damage",
    tagline: "24/7 emergency response. Tarp it, document it, fix it.",
    img: "/img/roof-storm.jpg",
    description: [
      "After a storm, the clock matters. Water getting in does damage by the hour, and insurance companies expect prompt action to protect the property. Our 24/7 storm line gets a crew out fast — first to stop the bleeding, then to fix it right.",
      "We document everything with photos for your insurance claim, help you through the adjuster process, and handle the repair or replacement from start to finish. You pay your deductible; we handle the rest.",
    ],
    included: [
      "24/7 emergency response line",
      "Emergency tarping & board-up",
      "Photo documentation for insurance",
      "Adjuster meeting & claim support",
      "Wind, hail & fallen-debris repairs",
      "Full replacement when damage warrants it",
    ],
    steps: [
      {
        title: "Emergency call",
        desc: "Active leak or visible damage? Call anytime — we dispatch for tarping and stabilization first.",
      },
      {
        title: "Damage assessment",
        desc: "Full roof inspection with photos documenting every shingle, flashing, and soft spot for your claim.",
      },
      {
        title: "Insurance support",
        desc: "We meet your adjuster on-site and make sure nothing gets missed in the scope.",
      },
      {
        title: "Repair or replace",
        desc: "Once approved, we complete the work — repairs in days, replacements on a fixed schedule.",
      },
    ],
    pricingHint:
      "Emergency tarping starts with a service call; most storm repairs are covered by homeowners insurance minus your deductible. We work with your adjuster so you don't overpay.",
    faqs: [
      {
        q: "Do you respond to storm emergencies at night?",
        a: "Yes — our storm line is 24/7. If water is coming in, we dispatch for emergency tarping to stop the damage, then schedule the full repair.",
      },
      {
        q: "Will insurance cover my storm damage?",
        a: "Wind and hail damage is typically covered under homeowners policies, minus your deductible. We document everything and meet your adjuster to make sure the scope is complete.",
      },
      {
        q: "Should I file a claim before calling you?",
        a: "Call us first. We'll assess the damage and tell you honestly whether it's worth a claim or better handled as a repair — filing a claim you don't need can cost you.",
      },
      {
        q: "How fast can you tarp a leaking roof?",
        a: "Same day in almost all cases, including nights and weekends during storm season. Stopping water intrusion is always the first priority.",
      },
    ],
    meta: "24/7 storm & hail damage roof repair in Newark & Essex County NJ — emergency tarping, insurance claim support. Ironclad Roofing.",
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    tagline: "Photo-documented findings. No scare tactics.",
    img: "/img/roof-inspect.jpg",
    description: [
      "Buying a home? Selling one? Just want to know where your roof stands? Our inspections give you the straight answer: what's fine, what needs attention, and what can wait — all backed by photos you can actually see.",
      "We inspect the full system — shingles, flashing, valleys, vents, gutters, and attic ventilation — and deliver a written report with prioritized recommendations. No pressure, no upsell, just facts about your roof.",
    ],
    included: [
      "Full on-roof walkthrough",
      "Photo documentation of every finding",
      "Written report with priorities",
      "Remaining lifespan estimate",
      "Storm & insurance claim inspections",
      "Pre-sale / pre-purchase reports",
    ],
    steps: [
      {
        title: "Schedule",
        desc: "Pick a time — inspections take 45 to 90 minutes depending on roof size and complexity.",
      },
      {
        title: "On-roof inspection",
        desc: "We walk the full roof and photograph everything: shingles, flashing, valleys, penetrations.",
      },
      {
        title: "Written report",
        desc: "You get a clear report with photos, prioritized findings, and honest recommendations.",
      },
      {
        title: "Next steps",
        desc: "Repair what matters now, plan for the rest. No pressure — the report is yours to keep.",
      },
    ],
    pricingHint:
      "Standard inspections are affordable and often credited toward repair work if you hire us. Storm and insurance inspections are handled as part of the claim process.",
    faqs: [
      {
        q: "How much does a roof inspection cost?",
        a: "Standard inspections are a flat, affordable fee — and we credit it toward any repair work you have us do. Storm and insurance inspections are handled through the claim process.",
      },
      {
        q: "How long does an inspection take?",
        a: "Usually 45 to 90 minutes on-site. You'll get the written report with photos within 24 hours.",
      },
      {
        q: "I'm buying a house — can you inspect before closing?",
        a: "Yes, and we recommend it. A pre-purchase inspection can save you thousands in surprise repairs and gives you leverage in negotiations.",
      },
      {
        q: "Will you try to sell me a new roof during the inspection?",
        a: "No. Inspections are diagnostic, not sales calls. If your roof is fine, we'll tell you it's fine — and when to check again.",
      },
    ],
    meta: "Roof inspections in Newark & Essex County NJ — photo-documented reports for buyers, sellers & storm claims. Honest findings, no scare tactics. Ironclad Roofing.",
  },
];
