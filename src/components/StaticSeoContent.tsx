import Link from 'next/link';

/**
 * StaticSeoContent Component - Server-rendered for SEO
 * 
 * This component contains all critical SEO content that must be
 * crawlable and indexable by search engines without JavaScript execution.
 * 
 * Content includes:
 * - Structured headings (H1, H2, H3)
 * - Descriptive paragraphs about the generator
 * - Internal links to important pages
 * - Key features and benefits
 * - Instructions for users
 * 
 * This is a SERVER COMPONENT (no 'use client') to ensure
 * Google and other search engines can see all content in initial HTML.
 */
export default function StaticSeoContent() {
  return (
    <>
      {/* Hero SEO Text - Crawlable Introduction */}
      <section className="mt-8 mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">ABOUT THIS TOOL</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          RANDOM POKEMON <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">TEAM BUILDER</span>
        </h2>
        <div className="space-y-3 font-mono text-sm md:text-base text-charcoal leading-relaxed">
          <p>
            Generate random Pokemon teams instantly with our free online tool. Access all <strong className="text-black">1,025 Pokemon</strong> from Generations 1-9, including Scarlet & Violet. Perfect for <Link href="/nuzlocke-generator" className="text-black underline font-bold hover:text-charcoal">Nuzlocke challenges</Link>, <Link href="/draft-league-generator" className="text-black underline font-bold hover:text-charcoal">Draft Leagues</Link>, Soul Link runs, and randomizer playthroughs.
          </p>
          <p>
            Our advanced Pokemon team builder features smart filtering by type, region, rarity, evolution stage, and more. Filter out Legendaries, select specific generations (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea), or generate completely random teams. No registration required—start building your dream team now.
          </p>
        </div>
      </section>

      {/* Key Features - Structured for SEO */}
      <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">WHY US</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          WHY USE OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">GENERATOR?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border-2 border-black p-5 slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">🎮 All Generations Supported</h3>
            <p className="font-mono text-xs text-charcoal leading-relaxed">
              From Red/Blue (Gen 1) to Scarlet/Violet (Gen 9), including regional forms, Paradox Pokemon, Mega Evolutions, and Gigantamax forms. Complete Pokedex coverage.
            </p>
          </div>
          <div className="bg-white border-2 border-black p-5 slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">⚡ Instant Generation</h3>
            <p className="font-mono text-xs text-charcoal leading-relaxed">
              Generate random Pokemon teams in under 1 second. No loading times, no ads, no registration. Pure speed and efficiency for trainers on the go.
            </p>
          </div>
          <div className="bg-white border-2 border-black p-5 slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">🔧 Advanced Filters</h3>
            <p className="font-mono text-xs text-charcoal leading-relaxed">
              Filter by type (Fire, Water, Electric, etc.), region (Kanto through Paldea), rarity (exclude Legendaries/Mythicals), evolution stage, and fully evolved status.
            </p>
          </div>
          <div className="bg-white border-2 border-black p-5 slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">🔒 Privacy First</h3>
            <p className="font-mono text-xs text-charcoal leading-relaxed">
              No data collection, no cookies, no tracking. Your team generations stay private. Read our <Link href="/privacy-policy" className="text-black underline font-bold">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases - SEO-optimized for search queries */}
      <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHALLENGE MODE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          PERFECT FOR EVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">CHALLENGE</span>
        </h2>
        <div className="space-y-3">
          <div className="border-2 border-black p-4 bg-white slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-1 uppercase">Nuzlocke Runs</h3>
            <p className="font-mono text-xs text-charcoal">
              Generate starter teams or replacement Pokemon for your hardcore Nuzlocke challenge. Use filters to match your game version and difficulty preferences. <Link href="/nuzlocke-generator" className="text-black underline font-bold">Learn Nuzlocke strategies →</Link>
            </p>
          </div>
          <div className="border-2 border-black p-4 bg-white slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-1 uppercase">Draft League Tournaments</h3>
            <p className="font-mono text-xs text-charcoal">
              Create balanced draft pools for competitive Pokemon leagues. Ensure fair team distribution with rarity filters and generation limits. <Link href="/draft-league-generator" className="text-black underline font-bold">Read draft guide →</Link>
            </p>
          </div>
          <div className="border-2 border-black p-4 bg-white slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-1 uppercase">Randomizer Playthroughs</h3>
            <p className="font-mono text-xs text-charcoal">
              Plan your randomizer run by generating potential encounters. Test team compositions before starting your randomized Pokemon game. <Link href="/randomizer-guide" className="text-black underline font-bold">Randomizer tips →</Link>
            </p>
          </div>
          <div className="border-2 border-black p-4 bg-white slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-1 uppercase">Soul Link & Challenge Modes</h3>
            <p className="font-mono text-xs text-charcoal">
              Generate paired teams for Soul Link runs or themed challenge teams (monotype, no-evolution, etc.). Customize filters to match your specific ruleset.
            </p>
          </div>
          <div className="border-2 border-black p-4 bg-white slasher">
            <h3 className="font-mono font-bold text-sm text-black mb-1 uppercase">Competitive Team Building</h3>
            <p className="font-mono text-xs text-charcoal">
              Discover new team combinations for VGC, Smogon tiers, or casual battles. Use the fully-evolved filter to build battle-ready teams instantly.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Step-by-step guide */}
      <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USER GUIDE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          HOW TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">USE IT</span>
        </h2>
        <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed mb-6">
          Follow these simple steps to generate your perfect Pokemon team. Customize filters for specific challenges or leave them blank for completely random results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white border-2 border-black p-4 slasher text-center">
            <div className="font-grotesk font-bold text-4xl text-black mb-2">01</div>
            <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Choose Team Size</h3>
            <p className="font-mono text-xs text-charcoal">Select 1-12 Pokemon for your team</p>
          </div>
          <div className="bg-white border-2 border-black p-4 slasher text-center">
            <div className="font-grotesk font-bold text-4xl text-black mb-2">02</div>
            <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Apply Filters</h3>
            <p className="font-mono text-xs text-charcoal">Filter by type, region, or rarity</p>
          </div>
          <div className="bg-white border-2 border-black p-4 slasher text-center">
            <div className="font-grotesk font-bold text-4xl text-black mb-2">03</div>
            <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Generate Team</h3>
            <p className="font-mono text-xs text-charcoal">Click to create your random team</p>
          </div>
          <div className="bg-white border-2 border-black p-4 slasher text-center">
            <div className="font-grotesk font-bold text-4xl text-black mb-2">04</div>
            <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Export & Share</h3>
            <p className="font-mono text-xs text-charcoal">Download or share your team</p>
          </div>
        </div>
      </section>

      {/* Internal Navigation - Important for SEO */}
      <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher bg-black text-white">
        <div className="inline-block bg-marigold text-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">MORE TOOLS</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[0.9] mb-4 uppercase">
          EXPLORE MORE <span className="text-marigold">POKEMON TOOLS</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/pokedex" className="bg-white/10 border-2 border-white/30 p-5 hover:bg-marigold hover:text-black hover:border-marigold transition-all block slasher">
            <h3 className="font-mono font-bold text-sm mb-2 uppercase">📚 Full Pokedex</h3>
            <p className="font-mono text-xs text-white/70">Browse all 1,025 Pokemon with complete stats, types, abilities, and evolution chains.</p>
          </Link>
          <Link href="/nuzlocke-generator" className="bg-white/10 border-2 border-white/30 p-5 hover:bg-marigold hover:text-black hover:border-marigold transition-all block slasher">
            <h3 className="font-mono font-bold text-sm mb-2 uppercase">💀 Nuzlocke Guide</h3>
            <p className="font-mono text-xs text-white/70">Master the Nuzlocke challenge with strategies, rules, and team-building tips.</p>
          </Link>
          <Link href="/draft-league-generator" className="bg-white/10 border-2 border-white/30 p-5 hover:bg-marigold hover:text-black hover:border-marigold transition-all block slasher">
            <h3 className="font-mono font-bold text-sm mb-2 uppercase">🏆 Draft League</h3>
            <p className="font-mono text-xs text-white/70">Create fair draft pools and organize competitive Pokemon league tournaments.</p>
          </Link>
        </div>
      </section>

      {/* Technical Details - Additional SEO content */}
      <section className="mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">TECHNICAL</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          DATABASE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">DETAILS</span>
        </h2>
        <div className="space-y-4 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
          <p>
            Our Pokemon database is powered by <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-black underline font-bold">PokeAPI</a>, the largest open-source Pokemon data repository. We maintain real-time synchronization to ensure accuracy across all stats, types, abilities, and movesets.
          </p>
          <p>
            <strong className="text-black">Coverage:</strong> Generation 1 (Kanto) through Generation 9 (Paldea), including Kitakami and Blueberry Academy DLC Pokemon. Regional variants (Alolan, Galarian, Hisuian, Paldean), Paradox Pokemon (Iron/Ancient forms), Mega Evolutions, and Gigantamax forms are all included.
          </p>
          <p>
            <strong className="text-black">Performance:</strong> Client-side generation ensures instant results without server delays. Your browser handles all randomization locally, meaning no data is transmitted or stored on our servers. See our <Link href="/privacy-policy" className="text-black underline font-bold">GDPR-compliant privacy policy</Link>.
          </p>
          <p>
            <strong className="text-black">Updates:</strong> We monitor official Pokemon releases and update our database within 24-48 hours of new game launches. Generation 10 (Pokemon Legends: Z-A) will be supported immediately upon release.
          </p>
        </div>
      </section>
    </>
  );
}
