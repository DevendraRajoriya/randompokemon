import type { Metadata } from "next";
import Link from "next/link";
import { Users, Trophy, Shuffle, Settings, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokémon Draft League Generator | Random Draft Pool Tool 2026",
  description: "Create balanced Pokemon draft pools for leagues and tournaments. Generate random draft picks with type restrictions, tier lists, and fairness settings. Free draft tool!",
  keywords: ["pokemon draft league", "draft league generator", "pokemon draft tool", "random pokemon draft", "pokemon tournament draft", "draft league randomizer"],
  alternates: { canonical: `${siteUrl}/draft-league-generator` },
  openGraph: { title: "Pokemon Draft League Generator | Random Draft Tool", description: "Create balanced Pokemon draft pools for leagues and tournaments.", url: `${siteUrl}/draft-league-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Draft League Generator" }] },
  twitter: { card: "summary_large_image", title: "Pokemon Draft League Generator", description: "Create balanced Pokemon draft pools!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Pokemon Draft League Generator",
  description: "Create balanced Pokemon draft pools for leagues and tournaments.",
  url: `${siteUrl}/draft-league-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a Pokemon Draft League?", acceptedAnswer: { "@type": "Answer", text: "A Pokemon Draft League is a competitive format where players draft Pokemon from a shared pool, then battle each other throughout a season. Each Pokemon can only be drafted by one player." } },
    { "@type": "Question", name: "How many Pokemon should be in a draft pool?", acceptedAnswer: { "@type": "Answer", text: "Formula: (Players × Pokemon per Team) + 20-30 extra. Example: 8 players × 12 Pokemon = 96 base + 30 extra = 126 Pokemon pool." } },
    { "@type": "Question", name: "What is a Snake Draft?", acceptedAnswer: { "@type": "Answer", text: "In a Snake Draft, the pick order reverses each round (1-8, then 8-1, then 1-8 again). This is the most common and fairest draft format." } },
  ],
};

export default function DraftLeagueGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Draft League Generator</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
              POKEMON DRAFT LEAGUE<br />GENERATOR
            </h1>
            <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed mb-6">
              The ultimate tool for creating fair, balanced draft pools for Pokemon competitive leagues and tournaments. Generate randomized draft picks with advanced filters.
             Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
            <Link href="/" className="inline-block btn-hover-lift">
              <div className="bg-black hover:bg-charcoal text-white font-grotesk font-bold text-base px-10 py-4 border-4 border-black slasher transition-smooth flex items-center gap-3">
                <Shuffle size={20} />
                CREATE DRAFT POOL NOW
              </div>
            </Link>
          </div>

          {/* What is Draft League */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">THE FORMAT</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT IS A POKEMON DRAFT LEAGUE?</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              A <strong>Pokemon Draft League</strong> is a competitive format where players draft Pokemon from a shared pool, then battle each other throughout a season. Each Pokemon can only be drafted by one player, creating unique team compositions and strategic depth.
            </p>
            <div className="space-y-3">
              {[
                { step: "01", title: "DRAFT PHASE", desc: "Players take turns picking Pokemon from a pre-generated pool (typically 100-200 Pokemon)." },
                { step: "02", title: "TEAM BUILDING", desc: "Each player drafts 10-15 Pokemon, creating their exclusive roster for the season." },
                { step: "03", title: "SEASON BATTLES", desc: "Players compete in weekly matches using only their drafted Pokemon." },
                { step: "04", title: "NO DUPLICATES", desc: "Once a Pokemon is drafted, no other player can use it — exclusivity drives strategy." },
              ].map(item => (
                <div key={item.step} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                  <span className="font-mono font-bold text-2xl text-black/20 leading-none">{item.step}</span>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-charcoal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FEATURES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">DRAFT LEAGUE GENERATOR FEATURES</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: Users, label: "FAIR POOL GENERATION", desc: "Generate balanced draft pools with equal type distribution. Avoid pools dominated by Fire or Water types." },
                { icon: Trophy, label: "TIER RESTRICTIONS", desc: "Exclude overpowered legendaries and mythicals. Set evolution stage limits to keep drafts balanced." },
                { icon: Settings, label: "CUSTOM POOL SIZES", desc: "Generate pools of any size: 50 for small leagues, 200+ for large tournaments. Adjustable for 4-20 players." },
                { icon: Shuffle, label: "REGION FILTERING", desc: "Create generation-specific drafts — Gen 1 only, Gen 5 Unova leagues, or all 1025 Pokemon for ultimate variety." },
              ].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={18} className="text-black" />
                    <h3 className="font-mono font-bold text-sm text-black uppercase">{item.label}</h3>
                  </div>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Create Pool */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">GUIDE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOW TO CREATE A DRAFT POOL</h2>
            <div className="space-y-3">
              {[
                { step: "01", title: "DETERMINE POOL SIZE", desc: "Formula: (Players × Pokemon per Team) + 20-30 extra. Example: 8 players × 12 = 96 + 30 extra = 126 Pokemon pool." },
                { step: "02", title: "SET RARITY RULES", desc: "Most leagues exclude Legendaries, Mythicals, and Ultra Beasts for balance. Use Rarity filter to remove overpowered Pokemon." },
                { step: "03", title: "CHOOSE GENERATION", desc: "Select which generations to include. Popular: All gens (1-9), Gens 1-4 (classic), or single-gen leagues (Kanto-only, etc.)." },
                { step: "04", title: "GENERATE MULTIPLE TIMES", desc: "Generate 3-5 different pools, then vote with your league on the most balanced option. Look for good type distribution." },
              ].map(item => (
                <div key={item.step} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                  <span className="font-mono font-bold text-2xl text-black/20 leading-none">{item.step}</span>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-charcoal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Tips */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">STRATEGY</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">DRAFT LEAGUE STRATEGY TIPS</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "🎯 EARLY DRAFT PRIORITIES", desc: "Secure Pokemon with good type coverage and minimal weaknesses. Steel, Water, and Dragon types are typically high-value picks." },
                { title: "⚡ SPEED CONTROL", desc: "Draft at least 2-3 fast Pokemon (base Speed 100+). Speed control wins games in competitive formats." },
                { title: "🛡️ DEFENSIVE CORES", desc: "Build defensive synergy: a Water/Steel/Grass core covers each other's weaknesses effectively." },
                { title: "🔥 MID-TIER VALUE", desc: "Pokemon like Gyarados, Togekiss, and Ferrothorn are often undervalued but tournament-proven." },
                { title: "📊 BALANCE OFFENSE/DEFENSE", desc: "Draft 6-7 offensive threats and 4-5 defensive walls/pivots. Pure offense teams lose to smart counterplay." },
                { title: "🔄 SNAKE DRAFT ORDER", desc: "In snake drafts, picks 1 and last are equally valuable — early you get the best, late you get two consecutive picks." },
              ].map(tip => (
                <div key={tip.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{tip.title}</h3>
                  <p className="font-mono text-xs text-charcoal">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Formats */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FORMATS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">POPULAR DRAFT LEAGUE FORMATS</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "SNAKE DRAFT", desc: "Pick order reverses each round (1-8, then 8-1). Most common and fairest format." },
                { title: "SWISS DRAFT", desc: "8-16 players, 10-12 rounds, no elimination. Best for large community leagues." },
                { title: "ROUND ROBIN", desc: "Everyone plays everyone once. Ideal for 6-10 player leagues, guarantees balanced competition." },
                { title: "TIER-BASED DRAFT", desc: "Pokemon divided into S/A/B/C tiers. Players draft equal numbers from each tier for guaranteed balance." },
              ].map(format => (
                <div key={format.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{format.title}</h3>
                  <p className="font-mono text-xs text-charcoal">{format.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-8 bg-black border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/nuzlocke-generator", label: "NUZLOCKE", desc: "Permadeath challenge" }, { href: "/starter-pokemon-generator", label: "STARTERS", desc: "All 27 starters" }, { href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }, { href: "/", label: "ALL REGIONS", desc: "Full generator" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group">
                  <h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3>
                  <p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">DRAFT LEAGUE FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What is a Pokemon Draft League?", a: "A competitive format where players draft from a shared pool and battle each other over a season. Each Pokemon is exclusive to one player once drafted — no duplicates allowed across the league." },
                { q: "How many Pokemon should be in a draft pool?", a: "Formula: (Players × Pokemon per Team) + 20-30 buffer. For 8 players drafting 12 each: 96 + 30 = 126 Pokemon pool minimum. A 20-30 extra buffer gives late drafters real choices." },
                { q: "What is a Snake Draft?", a: "Pick order reverses each round (1→8, then 8→1). This is the most common and fairest format as every position gets consecutive picks at some point, balancing early vs. late selection advantages." },
                { q: "Should legendaries be allowed in Draft Leagues?", a: "Most leagues ban Uber-tier legendaries (Arceus, Kyogre, Zacian, etc.) but allow Sub-Legendaries (Landorus, Heatran, Tapus) for competitive variety. Some leagues use a tiered system where each player must draft equal picks from each tier." },
                { q: "How many players is best for a Draft League?", a: "6-10 players is ideal. 6 players: Round Robin is possible (everyone plays everyone). 8 players: most common, allows Swiss format. 10-12 players: Snake Draft + Swiss works well. Under 4 players reduces strategic depth significantly." },
                { q: "How long does a Pokemon Draft League season last?", a: "A typical season is 8-12 weeks with one match per week. A finals week can be added. Swiss format (8 players, 10 rounds) takes about 10-12 weeks. Most leagues use best-of-3 matches per round." },
                { q: "What are the different Draft League formats?", a: "Snake Draft (most common, pick order reverses), Swiss Draft (8-16 players, no elimination), Round Robin (everyone vs everyone), Tier-Based Draft (pick equal counts from S/A/B/C tiers for guaranteed balance), and Auction Draft (each player has a budget to bid on Pokemon)." },
                { q: "What are the best early Draft League picks?", a: "Early picks should be defensive anchors with type flexibility: Steel types (Heatran, Ferrothorn), Water/Ground coverage (Swampert, Gastrodon), and pivots (Landorus-T, Corviknight). Speed control Pokemon (base 100+ Speed) are high priority after round 1." },
                { q: "How does the scoring work in a Draft League?", a: "Most leagues use a Win/Loss record like regular sports leagues. Points are typically: Win = 2 points, Tie = 1 point, Loss = 0. Some leagues track individual match game wins (best-of-3) for tiebreaker purposes." },
                { q: "Can I have rematches in a Pokemon Draft League?", a: "Most leagues avoid rematches in regular season to maximize variety. Playoffs may create rematches in elimination brackets. Round Robin formats naturally have no rematches since everyone faces each other exactly once." },
                { q: "What does this Draft League Generator do?", a: "This free tool generates random, balanced Pokemon pools for Draft Leagues. Filter by generation, exclude legendaries, set pool size, and generate multiple options to vote on with your league. Works for 4-20 player leagues of any format." },
              ].map(faq => (
                <details key={faq.q} className="bg-white border-2 border-black p-4 slasher group">
                  <summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary>
                  <p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p>
                </details>
              ))}

            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">READY TO START<br />YOUR DRAFT LEAGUE?</h2>
            <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Generate balanced draft pools in seconds. No signup, 100% free.</p>
            <Link href="/" className="inline-block btn-hover-lift">
              <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
                CREATE DRAFT POOL →
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
