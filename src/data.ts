export const BUSINESS = {
  name: "Ironclad Roofing",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  address: "789 Broad Street, Newark, NJ 07104",
  hours: "Mon–Sat, 7:00 AM – 7:00 PM",
  emergency: "24/7 emergency leak & storm response",
  rating: "4.9",
  reviewCount: "240+",
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Repair.", "Replacement.", "Storm Damage.", "Inspections."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/roof-replace.jpg",
    title: "Full Roof Replacement",
    meta: "Tear-off to ridge vent · Free estimates",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/roof-install.png",
    title: "Roof Repair",
    meta: "Leaks, shingles & flashing fixed",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/roof-storm.jpg",
    title: "Storm & Hail Damage",
    meta: "24/7 response · Insurance help",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/roof-replace.jpg",
    title: "Full Roof Replacement",
    desc: "Tear-offs done right, top to bottom",
  },
  {
    img: "/img/roof-detail.webp",
    title: "Roof Repair",
    desc: "Leaks found and fixed fast",
  },
  {
    img: "/img/roof-storm2.jpg",
    title: "Storm & Hail Damage",
    desc: "Emergency tarps, day or night",
  },
  {
    img: "/img/roof-inspect.jpg",
    title: "Roof Inspections",
    desc: "Honest reports, photo documented",
  },
  {
    img: "/img/roof-crew.jpg",
    title: "Maintenance Plans",
    desc: "Seasonal tune-ups that extend roof life",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-roof inspections, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "24/7 emergency",
    desc: "Active leak? One call, we're rolling.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "4.9 ★★★★★",
    desc: "240+ Google reviews from neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual roofing job photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/roof-replace.jpg", title: "Full tear-off & replacement", location: "Newark, NJ" },
  { img: "/img/roof-finished.jpg", title: "Architectural shingles, finished", location: "Bloomfield, NJ" },
  { img: "/img/roof-install.png", title: "Valley & flashing repair", location: "Montclair, NJ" },
  { img: "/img/roof-crew.jpg", title: "Crew on a two-day replacement", location: "Nutley, NJ" },
  { img: "/img/roof-storm.jpg", title: "Hail damage documented", location: "East Orange, NJ" },
  { img: "/img/roof-inspect.jpg", title: "Pre-sale roof inspection", location: "Belleville, NJ" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/roof-detail.webp",
    title: "Roof Repair",
    desc: "Leak tracing, shingle replacement, flashing and valley fixes — most repairs done in a single visit.",
  },
  {
    img: "/img/roof-replace.jpg",
    title: "Full Roof Replacement",
    desc: "Complete tear-offs with architectural shingles, new underlayment, and ridge ventilation. Built to last 25+ years.",
  },
  {
    img: "/img/roof-storm2.jpg",
    title: "Storm & Hail Damage",
    desc: "Emergency tarping, damage documentation, and insurance claim support after wind and hail.",
  },
  {
    img: "/img/roof-inspect.jpg",
    title: "Roof Inspections",
    desc: "Photo-documented inspections for buyers, sellers, and storm claims — honest findings, no scare tactics.",
  },
  {
    img: "/img/roof-house.webp",
    title: "Skylight & Chimney Flashing",
    desc: "The leak-prone spots, rebuilt properly: step flashing, counter-flashing, and skylight reseals.",
  },
  {
    img: "/img/roof-crew.jpg",
    title: "Maintenance Plans",
    desc: "Seasonal tune-ups — debris clearing, sealant touch-ups, and minor fixes that add years to your roof.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    town: "Newark",
    text: "Water was coming in around our chimney every heavy rain. They found the flashing failure, fixed it the same week, and it's been bone dry through two storms.",
  },
  {
    name: "Priya S.",
    town: "Montclair",
    text: "Full replacement in two days. Crew was tidy, the foreman walked me through every step, and the new roof looks incredible from the street.",
  },
  {
    name: "Dave R.",
    town: "Bloomfield",
    text: "Hail storm tore up our shingles. They handled the whole insurance process and we paid just our deductible. Couldn't have been easier.",
  },
  {
    name: "Angela M.",
    town: "Belleville",
    text: "Got three quotes — Ironclad wasn't the cheapest, but they were the only ones who actually got on the roof before quoting. Worth it.",
  },
];

export const TOWNS = [
  "Newark",
  "East Orange",
  "Irvington",
  "Bloomfield",
  "Belleville",
  "Nutley",
  "Orange",
  "Montclair",
  "Harrison",
  "Kearny",
  "Elizabeth",
  "Union",
];
