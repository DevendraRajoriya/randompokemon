import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokémon Guides & Strategy Blog | Random Pokémon Generator",
  description: "In-depth Pokémon guides covering Nuzlocke challenges, draft league strategy, randomizer tips, competitive team building, and more. Expert advice for every trainer.",
  keywords: ["pokemon nuzlocke guide", "draft league pokemon", "pokemon randomizer tips", "competitive pokemon team building", "pokemon challenge run guide", "best nuzlocke starters", "hardest nuzlocke challenges"],
  openGraph: { title: "Pokemon Guides & Strategy Blog", description: "Expert Pokemon guides for Nuzlocke runs, draft leagues, randomizers, and competitive play.", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Guides & Strategy Blog" }] },
  twitter: { card: "summary_large_image", title: "Pokemon Guides & Strategy Blog", description: "Expert Pokemon guides for Nuzlocke runs, draft leagues, randomizers, and competitive play.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">

        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Guides &amp; Blog</li>
          </ol>
        </nav>

        <header className="bg-black slasher p-8 md:p-12 mb-10">
          <div className="inline-block bg-marigold px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">Strategy Hub</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-3">
            Pokémon Guides<br />&amp; Strategy Blog
          </h1>
          <p className="font-mono text-sm text-white/70 max-w-2xl">
            In-depth guides for Nuzlocke runs, draft leagues, randomizers, and competitive team building. Written for trainers who want to play smarter, prepare better, and get further in every challenge run they attempt.
          </p>
        </header>

        <section className="mb-10 bg-white border-2 border-black slasher p-6">
          <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-3">About This Guide Library</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">
            Every guide in this library is written specifically for trainers doing challenge runs — Nuzlockes, monotype runs, draft leagues, and randomizer playthroughs. The focus is always on practical, actionable strategy rather than general tips you can find anywhere. Each article is based on community-verified data from thousands of documented runs.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            Whether you&apos;re planning your first Nuzlocke and need to know which starter to pick, or you&apos;re a veteran Draft League player looking to refine your draft order strategy, these guides are built to give you concrete answers — not just &quot;it depends.&quot;
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          <Link href="/blog/best-nuzlocke-starters-every-generation" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#dc2626" }}>NUZLOCKE</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">12 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              Best Nuzlocke Starters for Every Generation (Gen 1–9)
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              Ranked picks for the safest and strongest Nuzlocke starters across all 9 generations. Includes analysis of gym matchups, early-game coverage, and common death traps.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

          <Link href="/blog/hardest-nuzlocke-challenges-ranked" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#dc2626" }}>NUZLOCKE</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">15 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              Hardest Nuzlocke Challenges Ranked (2026 Edition)
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              From Pokémon Black 2 Challenge Mode to Emerald Kaizo — every major Nuzlocke difficulty ranked by game mechanics, level curves, and unfair moments.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

          <Link href="/blog/nuzlocke-rules-complete-guide" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#dc2626" }}>NUZLOCKE</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">10 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              Nuzlocke Rules Explained: Complete Guide for Beginners
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              Everything you need to know about Nuzlocke rules — the core ruleset, popular amendments (Dupes Clause, Species Clause), and how to set up your first run.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

          <Link href="/blog/how-to-build-draft-league-pokemon-team" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#2563eb" }}>DRAFT LEAGUE</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">14 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              How to Build a Draft League Pokémon Team (Strategy Guide)
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              Draft order strategy, tier valuation, team role coverage, and win conditions — a complete system for dominating your next Pokémon Draft League season.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

          <Link href="/blog/pokemon-randomizer-tips-beginners" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#d97706" }}>RANDOMIZER</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">11 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              Pokémon Randomizer Tips &amp; Tricks for Beginners
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              How to set up a Pokémon randomizer, the best randomizer settings to try, and which games make the most fun randomizer experiences.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

          <Link href="/blog/monotype-challenge-guide" className="bg-white border-2 border-black slasher p-6 hover:bg-cream transition-all group card-hover block">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest text-white" style={{ backgroundColor: "#059669" }}>CHALLENGE RUNS</span>
              <span className="font-mono text-[10px] text-charcoal/60 flex-shrink-0">13 min read</span>
            </div>
            <h2 className="font-grotesk font-bold text-lg sm:text-xl text-black mb-2 group-hover:underline leading-snug">
              Pokémon Monotype Challenge Guide — Every Type Ranked
            </h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-4">
              Running a monotype challenge? This guide ranks every type by difficulty, lists the best picks for each type, and explains how to handle rough gym matchups.
            </p>
            <span className="font-mono text-xs font-bold text-black uppercase tracking-wide">Read Guide →</span>
          </Link>

        </div>

        <section className="mt-12 bg-white border-2 border-black slasher p-8">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">How to Choose Your Next Challenge Run</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">
            Not sure which guide to read first? Use this quick-reference based on your experience level. New to challenge runs — start with the Nuzlocke rules guide, pick a beginner-friendly game (Emerald or Sun/Moon), and use the starter guide to choose your first Pokémon. Complete one run before worrying about difficulty ranking or advanced rules.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">
            If you&apos;ve completed 2–3 Nuzlockes and want a more structured competitive experience, Draft League is the next logical step. The team-building challenge is fundamentally different from Nuzlocke — you&apos;re optimising across a full season against multiple opponents rather than surviving a linear gym progression. The draft league guide will walk you through the role-coverage framework that separates winning teams from losing ones.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            For experienced players who want the deepest mechanical challenge, Emerald Kaizo or Radical Red Hardcore Mode represent the ceiling of what mainline-adjacent games can offer. The difficulty ranking guide explains exactly what makes each tier hard and gives a suggested progression path for players who want to work up to those challenges safely.
          </p>
        </section>

        <section className="mt-8 bg-white border-2 border-black slasher p-8 text-center">
          <p className="font-mono text-xs text-charcoal uppercase tracking-widest mb-3">Ready to play?</p>
          <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-black uppercase mb-6">Use the Generator for Your Next Run</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nuzlocke-generator" className="bg-black text-white font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-charcoal transition-colors slasher">NUZLOCKE GENERATOR</Link>
            <Link href="/draft-league-generator" className="bg-cream text-black font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-marigold transition-colors slasher">DRAFT LEAGUE GENERATOR</Link>
            <Link href="/" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-black hover:bg-yellow-400 transition-colors slasher">RANDOM GENERATOR</Link>
          </div>
        </section>

      </div>
    </main>
  );
}
