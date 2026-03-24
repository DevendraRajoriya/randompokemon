import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Target, TrendingUp } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Best Pokemon Nuzlocke Generator (2025) | Free Challenge Tool",
  description:
    "The ultimate Pokemon Nuzlocke generator with advanced filters for all 9 generations. Generate starter trios, simulate encounters, and build challenge teams. Free forever!",
  keywords: [
    "pokemon nuzlocke generator",
    "nuzlocke team generator",
    "pokemon nuzlocke tool",
    "nuzlocke challenge generator",
    "pokemon nuzlocke randomizer",
    "best nuzlocke generator",
  ],
  alternates: {
    canonical: "/nuzlocke-generator",
  },
  openGraph: {
    title: "Best Pokemon Nuzlocke Generator (2025) | Free Challenge Tool",
    description:
      "The ultimate Pokemon Nuzlocke generator with advanced filters for all 9 generations. Generate starter trios, simulate encounters, and build challenge teams.",
    url: `${siteUrl}/nuzlocke-generator`,
    type: "website",
  },
};

export default function NuzlockeGeneratorPage() {
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
              { label: 'Nuzlocke Generator' }
            ]} />
          </div>

          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight">
            THE BEST POKEMON<br />NUZLOCKE GENERATOR
          </h1>
          <p className="font-mono text-lg md:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            Built specifically for Nuzlocke challenge runs. Generate starter trios, simulate route encounters, and create backup teams for fallen Pokemon across all 9 generations.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link href="/" className="btn-hover-lift">
            <div className="bg-green-500 hover:bg-green-600 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-black slasher transition-smooth flex items-center gap-3">
              <Zap size={24} className="fill-yellow-400 text-yellow-400" />
              START GENERATING TEAMS
            </div>
          </Link>
        </div>

        {/* What is Nuzlocke Section */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            What is a Nuzlocke Challenge?
          </h2>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p>
              A <strong>Nuzlocke</strong> is a set of self-imposed hardcore rules that transforms any Pokemon game into an intense survival challenge. Named after a webcomic, these rules have become the most popular Pokemon challenge format worldwide.
            </p>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-black p-6 mt-6">
              <h3 className="font-sans font-bold text-xl text-black mb-4">Core Nuzlocke Rules:</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">❌</span>
                  <span><strong>Permadeath:</strong> If a Pokemon faints, it&apos;s considered &quot;dead&quot; and must be released or permanently boxed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>First Encounter Only:</strong> You may only catch the first Pokemon encountered on each route/area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Nickname Rule:</strong> All caught Pokemon must be nicknamed to create emotional bonds.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Use Our Generator */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Why Use Our Nuzlocke Generator?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-blue-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Starter Trio Simulation</h3>
              </div>
              <p className="font-mono text-sm text-charcoal">
                Generate random starter Pokemon trios for ROM hacks, fan games, or theoretical Nuzlocke planning. Filter by generation, type, and evolution stage.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="text-red-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Route Encounter Tables</h3>
              </div>
              <p className="font-mono text-sm text-charcoal">
                Simulate route encounters by region. Perfect for planning Nuzlocke runs or creating custom encounter lists for randomizer playthroughs.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="text-green-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Replacement Generator</h3>
              </div>
              <p className="font-mono text-sm text-charcoal">
                When Pokemon faint, quickly generate replacement options that match your challenge rules (no legendaries, specific region, type restrictions).
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-yellow-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">All 1025 Pokemon</h3>
              </div>
              <p className="font-mono text-sm text-charcoal">
                Complete database through Gen 9 including Scarlet/Violet DLC. Filter by region, type, rarity, evolution stage, and more.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use for Nuzlocke */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            How to Use for Nuzlocke Challenges
          </h2>
          <div className="space-y-6 font-mono text-charcoal">
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">1. Generate Starter Options</h3>
              <p className="text-sm">Set team size to 3, select &quot;Unevolved&quot; in evolution filters, exclude legendaries. This simulates a starter trio for your Nuzlocke.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">2. Simulate Route Encounters</h3>
              <p className="text-base">Select your game's region (e.g., Kanto for FireRed, Paldea for Scarlet/Violet), set team size to 1, and generate to simulate the first encounter on each route.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">3. Plan Monotype Runs</h3>
              <p className="text-base">Select a single type (Fire, Water, Dragon, etc.) to generate themed Nuzlocke teams. Perfect for monotype challenge variations.</p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-2">4. Hardcore Mode Settings</h3>
              <p className="text-base">Exclude all legendary, mythical, and paradox Pokemon for pure hardcore Nuzlocke runs with only standard Pokemon.</p>
            </div>
          </div>
        </section>

        {/* Popular Nuzlocke Variants */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Popular Nuzlocke Challenge Variants
          </h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Hardcore Nuzlocke</h3>
              <p className="text-white">Standard rules + no items in battle + level caps per gym. The ultimate difficulty test.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Soul Link</h3>
              <p className="text-white">Two players with linked Pokemon pairs. If one player's Pokemon dies, both must release their pair.</p>
            </div>
            <div className="bg-pink-500 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Wedlocke</h3>
              <p className="text-white">Pokemon are paired as "couples" and can only switch with their partner. Adds strategic depth.</p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Randomizer Nuzlocke</h3>
              <p className="text-white">Use our generator to pre-plan teams before starting a randomizer ROM. Adapt on the fly.</p>
            </div>
          </div>
        </section>

        {/* Best Pokemon for Nuzlocke */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Best Pokemon for Nuzlocke Runs
          </h2>
          <p className="font-mono text-gray-900 text-base mb-6">
            Not all Pokemon are created equal in Nuzlocke challenges. Here are the most valuable types and traits:
          </p>
          <div className="grid md:grid-cols-3 gap-4 font-mono text-base">
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">High HP Pokemon</h3>
              <p className="text-white">Chansey, Snorlax, Blissey - tank hits and survive close calls.</p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-gray-900 mb-3">Fast Sweepers</h3>
              <p className="text-gray-900">Gengar, Starmie, Alakazam - strike first to prevent deaths.</p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Flying Types</h3>
              <p className="text-white">Crobat, Staraptor - immune to Ground, great coverage.</p>
            </div>
            <div className="bg-cyan-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Water Types</h3>
              <p className="text-white">Gyarados, Swampert - versatile, few weaknesses, good stats.</p>
            </div>
            <div className="bg-gray-700 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Steel Types</h3>
              <p className="text-white">Magnezone, Metagross - resist 10+ types, defensive walls.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <h3 className="font-sans font-bold text-xl text-white mb-3">Dual Types</h3>
              <p className="text-white">Garchomp, Lucario - offensive coverage and STAB variety.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12 bg-cream border-2 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">Related Challenge Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/draft-league-generator" className="block bg-white border-2 border-black p-6 hover:bg-purple-600 hover:text-white transition-all">
              <h3 className="font-sans font-bold text-xl text-black mb-2 hover:text-white">🏆 Draft League Generator</h3>
              <p className="font-mono text-base text-gray-900 hover:text-white">Create balanced draft pools for competitive Pokemon leagues. Perfect for tournament organizers.</p>
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
            Ready to Start Your<br />Nuzlocke Challenge?
          </h2>
          <p className="font-mono text-marigold text-lg mb-8 max-w-2xl mx-auto">
            Generate your team now. Free forever. No signup required.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-500 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
              LAUNCH GENERATOR →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
