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
      <section className="mt-8 mb-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-black p-6 md:p-8 slasher">
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-black mb-4 uppercase leading-tight">
            Random Pokemon Generator - Build Teams for Nuzlocke, Draft League & Challenge Runs
          </h1>
          <div className="space-y-3 font-mono text-base md:text-lg text-gray-900 leading-relaxed">
            <p>
              Generate random Pokemon teams instantly with our free online tool. Access all <strong className="text-black">1,025 Pokemon</strong> from Generations 1-9, including Scarlet & Violet. Perfect for <Link href="/nuzlocke-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Nuzlocke challenges</Link>, <Link href="/draft-league-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Draft Leagues</Link>, Soul Link runs, and randomizer playthroughs.
            </p>
            <p>
              Our advanced Pokemon team builder features smart filtering by type, region, rarity, evolution stage, and more. Filter out Legendaries, select specific generations (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea), or generate completely random teams. No registration required—start building your dream team now.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features - Structured for SEO */}
      <section className="mb-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-4 border-black p-6 md:p-10 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">
            Why Use Our Pokemon Team Generator?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3 uppercase">🎮 All Generations Supported</h3>
              <p className="font-mono text-base text-gray-800">
                From Red/Blue (Gen 1) to Scarlet/Violet (Gen 9), including regional forms, Paradox Pokemon, Mega Evolutions, and Gigantamax forms. Complete Pokedex coverage.
              </p>
            </div>
            <div className="bg-yellow-50 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3 uppercase">⚡ Instant Generation</h3>
              <p className="font-mono text-base text-gray-800">
                Generate random Pokemon teams in under 1 second. No loading times, no ads, no registration. Pure speed and efficiency for trainers on the go.
              </p>
            </div>
            <div className="bg-green-50 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3 uppercase">🔧 Advanced Filters</h3>
              <p className="font-mono text-base text-gray-800">
                Filter by type (Fire, Water, Electric, etc.), region (Kanto through Paldea), rarity (exclude Legendaries/Mythicals), evolution stage, and fully evolved status.
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3 uppercase">🔒 Privacy First</h3>
              <p className="font-mono text-base text-gray-800">
                No data collection, no cookies, no tracking. Your team generations stay private. Read our <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline font-bold">privacy policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - SEO-optimized for search queries */}
      <section className="mb-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-4 border-black p-6 md:p-10 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">
            Perfect For Every Pokemon Challenge
          </h2>
          <div className="space-y-4 font-mono text-base md:text-lg text-gray-900">
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-1">Nuzlocke Runs</h3>
              <p>
                Generate starter teams or replacement Pokemon for your hardcore Nuzlocke challenge. Use filters to match your game version and difficulty preferences. <Link href="/nuzlocke-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Learn Nuzlocke strategies →</Link>
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-1">Draft League Tournaments</h3>
              <p>
                Create balanced draft pools for competitive Pokemon leagues. Ensure fair team distribution with rarity filters and generation limits. <Link href="/draft-league-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Read draft guide →</Link>
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-1">Randomizer Playthroughs</h3>
              <p>
                Plan your randomizer run by generating potential encounters. Test team compositions before starting your randomized Pokemon game. <Link href="/randomizer-guide" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Randomizer tips →</Link>
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-1">Soul Link & Challenge Modes</h3>
              <p>
                Generate paired teams for Soul Link runs or themed challenge teams (monotype, no-evolution, etc.). Customize filters to match your specific ruleset.
              </p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-bold text-black mb-1">Competitive Team Building</h3>
              <p>
                Discover new team combinations for VGC, Smogon tiers, or casual battles. Use the fully-evolved filter to build battle-ready teams instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Step-by-step guide */}
      <section className="mb-12 max-w-6xl mx-auto">
        <div className="bg-cream border-2 border-black p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USER GUIDE</span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-black leading-[0.9] mb-4 uppercase">
            HOW TO USE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
              THIS GENERATOR
            </span>
          </h2>
          <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed mb-8">
            Follow these simple steps to generate your perfect Pokemon team. Customize filters for specific challenges or leave them blank for completely random results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="block bg-white border-2 border-black p-4 slasher">
              <span className="text-2xl mb-2 block">🎯</span>
              <h4 className="font-bold text-lg mb-1">Choose Team Size</h4>
              <p className="text-sm text-brown/70">
                Select 1-6 Pokemon for your team
              </p>
            </div>
            <div className="block bg-white border-2 border-black p-4 slasher">
              <span className="text-2xl mb-2 block">🔧</span>
              <h4 className="font-bold text-lg mb-1">Apply Filters</h4>
              <p className="text-sm text-brown/70">
                Filter by type, region, or rarity
              </p>
            </div>
            <div className="block bg-white border-2 border-black p-4 slasher">
              <span className="text-2xl mb-2 block">⚡</span>
              <h4 className="font-bold text-lg mb-1">Generate Team</h4>
              <p className="text-sm text-brown/70">
                Click to create your random team
              </p>
            </div>
            <div className="block bg-white border-2 border-black p-4 slasher">
              <span className="text-2xl mb-2 block">📤</span>
              <h4 className="font-bold text-lg mb-1">Export & Share</h4>
              <p className="text-sm text-brown/70">
                Download or share your team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation - Important for SEO */}
      <section className="mb-12 max-w-6xl mx-auto">
        <div className="bg-marigold border-4 border-black p-6 md:p-8 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-4 uppercase text-center">
            Explore More Pokemon Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pokedex" className="bg-blue-100 border-2 border-black p-5 hover:bg-blue-600 hover:text-white transition-all block">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">📚 Full Pokedex</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Browse all 1,025 Pokemon with complete stats, types, abilities, and evolution chains.</p>
            </Link>
            <Link href="/nuzlocke-generator" className="bg-red-100 border-2 border-black p-5 hover:bg-red-600 hover:text-white transition-all block">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">💀 Nuzlocke Guide</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Master the Nuzlocke challenge with strategies, rules, and team-building tips for hardcore runs.</p>
            </Link>
            <Link href="/draft-league-generator" className="bg-green-100 border-2 border-black p-5 hover:bg-green-600 hover:text-white transition-all block">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">🏆 Draft League</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Create fair draft pools and organize competitive Pokemon league tournaments.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Details - Additional SEO content */}
      <section className="mb-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 border-4 border-black p-6 md:p-10 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">
            Database & Technical Details
          </h2>
          <div className="space-y-4 font-mono text-base md:text-lg text-gray-900">
            <p>
              Our Pokemon database is powered by <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline font-bold">PokeAPI</a>, the largest open-source Pokemon data repository. We maintain real-time synchronization to ensure accuracy across all stats, types, abilities, and movesets.
            </p>
            <p>
              <strong className="text-black">Coverage:</strong> Generation 1 (Kanto) through Generation 9 (Paldea), including Kitakami and Blueberry Academy DLC Pokemon. Regional variants (Alolan, Galarian, Hisuian, Paldean), Paradox Pokemon (Iron/Ancient forms), Mega Evolutions, and Gigantamax forms are all included.
            </p>
            <p>
              <strong className="text-black">Performance:</strong> Client-side generation ensures instant results without server delays. Your browser handles all randomization locally, meaning no data is transmitted or stored on our servers. See our <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline font-bold">GDPR-compliant privacy policy</Link>.
            </p>
            <p>
              <strong className="text-black">Updates:</strong> We monitor official Pokemon releases and update our database within 24-48 hours of new game launches. Generation 10 (Pokemon Legends: Z-A) will be supported immediately upon release.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
