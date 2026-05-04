import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokémon Guides & Strategy Blog | Random Pokémon Generator",
  description: "In-depth Pokémon guides covering Nuzlocke challenges, draft league strategy, randomizer tips, competitive team building, and more. Expert advice for every trainer.",
  keywords: [
    "pokemon nuzlocke guide", "draft league pokemon", "pokemon randomizer tips",
    "competitive pokemon team building", "pokemon challenge run guide",
    "best nuzlocke starters", "hardest nuzlocke challenges",
  ],
  openGraph: {
    title: "Pokemon Guides & Strategy Blog",
    description: "Expert Pokemon guides for Nuzlocke runs, draft leagues, randomizers, and competitive play.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Guides & Strategy Blog" }],
  },
  twitter: { card: "summary_large_image", title: "Pokemon Guides & Strategy Blog", description: "Expert Pokemon guides for Nuzlocke runs, draft leagues, randomizers, and competitive play.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog" },
};

const GUIDES = [
  {
    slug: "best-nuzlocke-starters-every-generation",
    title: "Best Nuzlocke Starters for Every Generation (Gen 1–9)",
    description: "Ranked picks for the safest and strongest Nuzlocke starters across all 9 generations. Includes analysis of gym matchups, early-game coverage, and common death traps.",
    category: "NUZLOCKE",
    readTime: "12 min read",
    keywords: "best nuzlocke starter, nuzlocke starter tier list",
  },
  {
    slug: "hardest-nuzlocke-challenges-ranked",
    title: "Hardest Nuzlocke Challenges Ranked (2025 Edition)",
    description: "From Pokémon Black 2 Challenge Mode to Emerald Kaizo — every major Nuzlocke difficulty ranked by game mechanics, level curves, and unfair moments.",
    category: "NUZLOCKE",
    readTime: "15 min read",
    keywords: "hardest nuzlocke, hardest pokemon game nuzlocke",
  },
  {
    slug: "nuzlocke-rules-complete-guide",
    title: "Nuzlocke Rules Explained: Complete Guide for Beginners",
    description: "Everything you need to know about Nuzlocke rules — the core ruleset, popular amendments (Dupes Clause, Species Clause), and how to set up your first run.",
    category: "NUZLOCKE",
    readTime: "10 min read",
    keywords: "nuzlocke rules, how to nuzlocke, nuzlocke for beginners",
  },
  {
    slug: "how-to-build-draft-league-pokemon-team",
    title: "How to Build a Draft League Pokémon Team (Strategy Guide)",
    description: "Draft order strategy, tier valuation, team role coverage, and win conditions — a complete system for dominating your next Pokémon Draft League season.",
    category: "DRAFT LEAGUE",
    readTime: "14 min read",
    keywords: "how to build draft league pokemon team, pokemon draft league strategy",
  },
  {
    slug: "pokemon-randomizer-tips-beginners",
    title: "Pokémon Randomizer Tips & Tricks for Beginners",
    description: "How to set up a Pokémon randomizer, the best randomizer settings to try, and which games make the most fun randomizer experiences.",
    category: "RANDOMIZER",
    readTime: "11 min read",
    keywords: "pokemon randomizer tips, how to randomize pokemon game",
  },
  {
    slug: "monotype-challenge-guide",
    title: "Pokémon Monotype Challenge Guide — Every Type Ranked",
    description: "Running a monotype challenge? This guide ranks every type by difficulty, lists the best picks for each type, and explains how to handle rough gym matchups.",
    category: "CHALLENGE RUNS",
    readTime: "13 min read",
    keywords: "pokemon monotype challenge, monotype run guide, hardest monotype run",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "NUZLOCKE": "#dc2626",
  "DRAFT LEAGUE": "#2563eb",
  "RANDOMIZER": "#d97706",
  "CHALLENGE RUNS": "#059669",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Guides & Blog</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="bg-black slasher p-8 md:p-12 mb-10">
          <div className="inline-block bg-marigold px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">Strategy Hub</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-3">
            Pokémon Guides<br />& Strategy Blog
          </h1>
          <p className="font-mono text-sm text-white/70 max-w-2xl">
            In-depth guides for Nuzlocke runs, draft leagues, randomizers, and competitive team building.
            Written for trainers who want to play smarter.
          </p>
        </header>

        {/* Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[guide.category] || "#000" }}
                >
                  {guide.category}
                </span>
                <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">{guide.readTime}</span>
              </div>
              <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
                {guide.title}
              </h2>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
                {guide.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">
                  Read Guide →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 bg-white border-2 border-black slasher p-8 text-center">
          <p className="font-mono text-xs text-charcoal uppercase tracking-widest mb-3">Ready to play?</p>
          <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-black uppercase mb-6">
            Use the Generator for Your Next Run
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nuzlocke-generator" className="bg-black text-white font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-charcoal transition-colors slasher">
              NUZLOCKE GENERATOR
            </Link>
            <Link href="/draft-league-generator" className="bg-cream text-black font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-marigold transition-colors slasher">
              DRAFT LEAGUE GENERATOR
            </Link>
            <Link href="/" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-yellow-400 transition-colors slasher">
              RANDOM GENERATOR
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
