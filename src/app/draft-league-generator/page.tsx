import type { Metadata } from "next";
import Link from "next/link";
import { Users, Trophy, Shuffle, Settings } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokemon Draft League Generator | Random Draft Tool (2025)",
  description:
    "Create balanced Pokemon draft pools for leagues and tournaments. Generate random draft picks with type restrictions, tier lists, and fairness settings. Free draft tool!",
  keywords: [
    "pokemon draft league",
    "draft league generator",
    "pokemon draft tool",
    "random pokemon draft",
    "pokemon tournament draft",
    "draft league randomizer",
  ],
  alternates: {
    canonical: "/draft-league-generator",
  },
  openGraph: {
    title: "Pokemon Draft League Generator | Random Draft Tool",
    description:
      "Create balanced Pokemon draft pools for leagues and tournaments. Generate random draft picks with type restrictions and fairness settings.",
    url: `${siteUrl}/draft-league-generator`,
    type: "website",
  },
};

export default function DraftLeagueGeneratorPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <div className="bg-black px-4 py-2 slasher border-2 border-black hover:bg-charcoal transition-smooth">
              <span className="font-mono text-sm text-white font-semibold">← BACK TO GENERATOR</span>
            </div>
          </Link>
          
          {/* Breadcrumbs */}
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[
              { label: 'Draft League Generator' }
            ]} />
          </div>

          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight">
            POKEMON DRAFT LEAGUE<br />GENERATOR
          </h1>
          <p className="font-mono text-lg md:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            The ultimate tool for creating fair, balanced draft pools for Pokemon competitive leagues and tournaments. Generate randomized draft picks with advanced filters.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link href="/" className="btn-hover-lift">
            <div className="bg-purple-500 hover:bg-purple-600 text-white font-grotesk font-bold text-xl px-12 py-5 border-4 border-black slasher transition-smooth flex items-center gap-3">
              <Shuffle size={24} />
              CREATE DRAFT POOL NOW
            </div>
          </Link>
        </div>

        {/* What is Draft League Section */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            What is a Pokemon Draft League?
          </h2>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p>
              A <strong>Pokemon Draft League</strong> is a competitive format where players draft Pokemon from a shared pool, then battle each other throughout a season. Each Pokemon can only be drafted by one player, creating unique team compositions and strategic depth.
            </p>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-black p-6 mt-6">
              <h3 className="font-sans font-bold text-xl text-black mb-4">How Draft Leagues Work:</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">1.</span>
                  <span><strong>Draft Phase:</strong> Players take turns picking Pokemon from a pre-generated pool (typically 100-200 Pokemon).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">2.</span>
                  <span><strong>Team Building:</strong> Each player drafts 10-15 Pokemon, creating their exclusive roster for the season.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">3.</span>
                  <span><strong>Season Battles:</strong> Players compete in weekly matches using only their drafted Pokemon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">4.</span>
                  <span><strong>No Duplicates:</strong> Once a Pokemon is drafted, no other player can use it.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Draft League Generator Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-600 text-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-white" size={32} />
                <h3 className="font-sans font-bold text-xl text-white">Fair Pool Generation</h3>
              </div>
              <p className="font-mono text-sm text-white/90">
                Generate balanced draft pools with equal type distribution. Avoid pools dominated by Fire or Water types, ensuring competitive variety.
              </p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="text-gray-900" size={32} />
                <h3 className="font-sans font-bold text-xl text-gray-900">Tier Restrictions</h3>
              </div>
              <p className="font-mono text-sm text-gray-800">
                Exclude overpowered legendaries and mythicals. Set evolution stage limits to keep drafts balanced and fun for all skill levels.
              </p>
            </div>
            <div className="bg-gray-700 text-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="text-white" size={32} />
                <h3 className="font-sans font-bold text-xl text-white">Custom Pool Sizes</h3>
              </div>
              <p className="font-mono text-sm text-white/90">
                Generate pools of any size: 50 for small leagues, 200+ for large tournaments. Adjustable for 4-20 player drafts.
              </p>
            </div>
            <div className="bg-green-700 text-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shuffle className="text-white" size={32} />
                <h3 className="font-sans font-bold text-xl text-white">Region Filtering</h3>
              </div>
              <p className="font-mono text-sm text-white/90">
                Create generation-specific drafts. Gen 1-only Kanto drafts, Gen 5 Unova leagues, or all 1025 Pokemon for ultimate variety.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            How to Create a Draft League Pool
          </h2>
          <div className="space-y-6 font-mono text-gray-900">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">Step 1: Determine Pool Size</h3>
              <p className="text-base">
                <strong>Formula:</strong> (Number of Players × Pokemon per Team) + 20-30 extra<br />
                Example: 8 players × 12 Pokemon each = 96 base + 30 extra = 126 Pokemon pool
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">Step 2: Set Rarity Rules</h3>
              <p className="text-base">
                Most leagues exclude Legendaries, Mythicals, and Ultra Beasts for balance. Use our Rarity filter to automatically remove overpowered Pokemon from the pool.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">Step 3: Choose Generation</h3>
              <p className="text-base">
                Select which generations to include. Popular options: All gens (1-9), Gens 1-4 (classic), or single-gen leagues (Kanto-only, Galar-only, etc.).
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">Step 4: Generate Multiple Times</h3>
              <p className="text-base">
                Generate 3-5 different pools, then vote with your league on the most balanced option. Look for good type distribution and interesting picks.
              </p>
            </div>
          </div>
        </section>

        {/* Draft League Tips */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Draft League Strategy Tips
          </h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">🎯 Draft Early Priorities</h3>
              <p className="text-base text-white">Secure Pokemon with good type coverage and minimal weaknesses. Steel, Water, and Dragon types are typically high-value picks.</p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3">⚡ Speed Control</h3>
              <p className="text-base text-gray-900">Draft at least 2-3 fast Pokemon (base speed 100+). Speed control wins games in competitive formats.</p>
            </div>
            <div className="bg-green-700 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">🛡️ Defensive Cores</h3>
              <p className="text-base text-white">Build defensive synergy: a Water/Steel/Grass core covers each other&apos;s weaknesses effectively.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">🔥 Don&apos;t Sleep on Mid-Tiers</h3>
              <p className="text-base text-white">Pokemon like Gyarados, Togekiss, and Ferrothorn are often undervalued but tournament-proven.</p>
            </div>
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">📊 Balance Offense and Defense</h3>
              <p className="text-base text-white">Draft 6-7 offensive threats and 4-5 defensive walls/pivots. Pure offense teams lose to smart counterplay.</p>
            </div>
          </div>
        </section>

        {/* Popular Draft Formats */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Popular Draft League Formats
          </h2>
          <div className="grid md:grid-cols-2 gap-4 font-mono text-base">
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Swiss Draft</h3>
              <p className="text-base text-white">8-16 players, 10-12 rounds, no elimination. Best for large community leagues.</p>
            </div>
            <div className="bg-green-700 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Round Robin</h3>
              <p className="text-base text-white">Everyone plays everyone once. Ideal for 6-10 player leagues, guarantees balanced competition.</p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3">Tier-Based Draft</h3>
              <p className="text-base text-gray-900">Pokemon divided into S/A/B/C tiers. Players draft equal numbers from each tier.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Snake Draft</h3>
              <p className="text-base text-white">Order reverses each round (1-8, then 8-1). Most common and fairest format.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">Related Challenge Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/nuzlocke-generator" className="block bg-white border-2 border-black p-6 hover:bg-red-600 hover:text-white transition-all">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">⚔️ Nuzlocke Generator</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Ultimate guide to Nuzlocke challenges. Generate starters and plan your permadeath runs.</p>
            </Link>
            <Link href="/randomizer-guide" className="block bg-white border-2 border-black p-6 hover:bg-blue-600 hover:text-white transition-all">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">🎲 Randomizer Guide</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Master ROM randomizers and challenge modes. Learn optimal settings and strategies.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4 uppercase">
            Ready to Start<br />Your Draft League?
          </h2>
          <p className="font-mono text-marigold text-lg mb-8 max-w-2xl mx-auto">
            Generate balanced draft pools in seconds. No signup, 100% free.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-purple-500 hover:bg-purple-600 text-white font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
              CREATE DRAFT POOL →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
