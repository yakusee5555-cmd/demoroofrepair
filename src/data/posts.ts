export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "signs-roof-needs-repair-before-winter",
    title: "5 Signs Your Roof Needs Repair Before Winter",
    excerpt:
      "Winter is the worst time to discover a roof problem. Here's what to look for while the weather's still on your side.",
    date: "September 20, 2026",
    readTime: "4 min read",
    img: "/img/roof-detail.webp",
    body: [
      "Winter is brutal on roofs — freeze-thaw cycles pry at every weak shingle, ice dams back water up under the eaves, and a small fall leak becomes a spring ceiling collapse. The good news: almost every winter roof failure shows warning signs in September and October. Here's what we look for on every fall inspection.",
      "1. Missing or lifted shingles. After summer storms, shingles lift at the edges and don't always lay flat again. Each lifted shingle is a channel for wind-driven rain — and once freeze-thaw gets under it, the adhesive seal is done.",
      "2. Granules in the gutters. Some granule loss is normal aging, but piles of granules in your gutters or at the downspouts mean your shingles are losing their armor. Bare spots absorb water instead of shedding it.",
      "3. Flashing that's pulling away. Check around chimneys, skylights, and where walls meet the roof. Gaps in the flashing are the number one source of leaks we fix — and they're cheap to reseal before winter, expensive after a leak.",
      "4. Soft spots when you walk the roof. If the decking feels spongy underfoot, there's moisture damage underneath. That only gets worse under snow load.",
      "5. Stains on the underside of the roof deck. Pop into the attic on a sunny day — if you see daylight through the boards, or dark water stains on the rafters, water is already getting in.",
      "If you spot any of these, get an inspection before the first freeze. Fall repairs are faster, cheaper, and a lot less stressful than emergency calls in January.",
    ],
  },
  {
    slug: "repair-vs-replace-how-to-decide",
    title: "Repair vs. Replace: How to Actually Decide",
    excerpt:
      "Roofers love selling replacements. Here's the honest framework we use to tell customers which one they need.",
    date: "September 5, 2026",
    readTime: "5 min read",
    img: "/img/roof-replace.jpg",
    body: [
      "It's the question every homeowner with a leak asks: fix it, or start over? And it's the question most likely to get you a biased answer, because replacements pay better than repairs. So here's the framework we actually use on the job — the same one we'd use on our own houses.",
      "Start with age. An architectural shingle roof is designed for 25–30 years. If yours is under 15 and the problem is localized — a valley, a flashing, a patch of wind damage — repair is almost always the right call. If it's over 20 and you're calling about the third leak in two years, you're throwing good money after bad.",
      "Next, look at the pattern. One leak at one chimney? That's a repair. Leaks in three different spots, curling shingles across whole slopes, granule loss everywhere? That's a roof telling you it's done.",
      "Then do the math. A good rule of thumb: if a repair costs more than 25–30% of a replacement, and the roof is past two-thirds of its expected life, replace it. You get a warranty, lower insurance risk, and you stop paying for the same roof twice.",
      "Finally, consider your timeline. Selling in two years? A clean repair with documentation is often the smarter move. Staying for twenty? A replacement pays for itself in peace of mind.",
      "We'll give you both numbers and our honest recommendation — and if a repair is the right call, we'll say so, even though the replacement pays us more.",
    ],
  },
  {
    slug: "what-hail-damage-looks-like",
    title: "What Hail Damage Actually Looks Like",
    excerpt:
      "Hail damage is nearly invisible from the ground. Here's how to spot it — and what to do before your insurance window closes.",
    date: "August 22, 2026",
    readTime: "4 min read",
    img: "/img/roof-storm2.jpg",
    body: [
      "After every hailstorm we get the same calls: 'My neighbor's roof looks fine, is mine okay?' The uncomfortable truth is that hail damage is almost impossible to see from the ground — and by the time it shows up as a leak, the insurance window may have closed.",
      "Here's what hail actually does to a shingle. Each impact bruises the mat underneath and knocks off the protective granules in a round, coin-sized spot. From the ground it looks like nothing. Up close, you see dark spots where the asphalt is exposed, and if you press gently, a soft spot where the mat is fractured.",
      "The danger isn't cosmetic. Those exposed spots are where UV breaks down the asphalt, and the fractured mat is where the shingle eventually cracks through. A hail-damaged roof can look fine for a year or two, then start leaking everywhere at once.",
      "Check the soft metals first — gutters, downspouts, vent caps, and flashing dents easily and confirm hail size. If your downspouts are dented, your shingles took hits too. Collateral damage on cars, fences, and siding tells the same story.",
      "The important part: most insurance policies give you a limited window — often one to two years — to file a hail claim. Wait until it leaks and the insurer can argue the damage is just age. Get a free storm inspection right after the hail, with photos, while the evidence is fresh.",
    ],
  },
];
