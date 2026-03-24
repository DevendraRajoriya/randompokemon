import type { Metadata } from "next";
import Link from "next/link";
import { Dice1, Sparkles, Gamepad2, Zap } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokemon Randomizer Guide | Challenge Runs & Team Planning (2025)",
  description:
    "Complete guide to Pokemon randomizers and challenge runs. Generate teams for ROM hack randomizers, plan challenge modes, and discover the best randomizer settings.",
  keywords: [
    "pokemon randomizer",
    "randomizer guide",
    "pokemon rom hack",
    "challenge runs",
    "randomizer settings",
    "pokemon randomizer tool",
  ],
  alternates: {
    canonical: "/randomizer-guide",
  },
  openGraph: {
    title: "Pokemon Randomizer Guide | Challenge Runs & Team Planning",
    description:
      "Complete guide to Pokemon randomizers and challenge runs. Generate teams for ROM hack randomizers and plan challenge modes.",
    url: `${siteUrl}/randomizer-guide`,
    type: "website",
  },
};

export default function RandomizerGuidePage() {
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
              { label: 'Randomizer Guide' }
            ]} />
          </div>

          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight">
            POKEMON RANDOMIZER<br />CHALLENGE GUIDE
          </h1>
          <p className="font-mono text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Master Pokemon randomizers and challenge runs. Learn the best settings, plan your teams, and discover how to use our generator for randomizer playthroughs.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Link href="/" className="btn-hover-lift">
            <div className="bg-indigo-500 hover:bg-indigo-600 text-white font-grotesk font-bold text-xl px-12 py-5 border-4 border-black slasher transition-smooth flex items-center gap-3">
              <Dice1 size={24} />
              GENERATE RANDOMIZER TEAMS
            </div>
          </Link>
        </div>

        {/* What is a Randomizer Section */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            What is a Pokemon Randomizer?
          </h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <p>
              A <strong>Pokemon Randomizer</strong> is a ROM hack tool that randomizes various aspects of Pokemon games, creating unpredictable and exciting new playthroughs. Every encounter, trainer battle, and evolution can be completely different.
            </p>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 border-4 border-black p-6 mt-6">
              <h3 className="font-sans font-bold text-xl text-black mb-4">What Gets Randomized:</h3>
              <ul className="space-y-2 list-none text-base">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">🎲</span>
                  <span><strong>Wild Encounters:</strong> Any Pokemon can appear on any route. Find Legendary Pokemon in tall grass!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">🎲</span>
                  <span><strong>Starter Pokemon:</strong> Your starter could be anything from Magikarp to Mewtwo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">🎲</span>
                  <span><strong>Trainer Teams:</strong> Gym leaders and rivals have completely random Pokemon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">🎲</span>
                  <span><strong>Evolution Methods:</strong> Pokemon might evolve at different levels or via different stones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">🎲</span>
                  <span><strong>Move Sets:</strong> Pokemon learn random moves as they level up.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Our Generator Helps */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            How to Use Our Generator for Randomizers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-yellow-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Pre-Run Planning</h3>
              </div>
              <p className="font-mono text-base text-gray-900">
                Before starting your randomizer, use our generator to preview potential team compositions. Get a feel for what Pokemon you might encounter.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="text-blue-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Backup Team Ideas</h3>
              </div>
              <p className="font-mono text-base text-gray-900">
                When you encounter unusable Pokemon (unevolved weak types), generate alternatives to see what&apos;s theoretically available in your randomizer seed.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-purple-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Challenge Mode Setup</h3>
              </div>
              <p className="font-mono text-base text-gray-900">
                Combine randomizers with Nuzlocke rules. Use our generator to simulate route encounters and plan for permadeath scenarios.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <div className="flex items-center gap-3 mb-3">
                <Dice1 className="text-red-600" size={32} />
                <h3 className="font-sans font-bold text-xl text-black">Type Coverage Analysis</h3>
              </div>
              <p className="font-mono text-base text-gray-900">
                Generate teams filtered by generation to match your ROM base game. Understand which types you need for balanced coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Best Randomizer Settings */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Best Pokemon Randomizer Settings (2025)
          </h2>
          <div className="space-y-6 font-mono text-gray-900">
            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Beginner Settings</h3>
              <ul className="text-base space-y-2">
                <li>• Wild Pokemon: Type-Themed Areas (keeps some logic)</li>
                <li>• Starters: Random from any Pokemon</li>
                <li>• Trainers: Random, similar strength</li>
                <li>• Evolution: Unchanged</li>
                <li>• Move Sets: Unchanged (least chaos)</li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Intermediate Settings</h3>
              <ul className="text-base space-y-2">
                <li>• Wild Pokemon: Completely Random</li>
                <li>• Starters: Random, no legendaries</li>
                <li>• Trainers: Random, buffed difficulty</li>
                <li>• Evolution: Random (keeps 3-stage chains)</li>
                <li>• Move Sets: Random, prefer same type</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Chaos Mode (Advanced)</h3>
              <ul className="text-base space-y-2">
                <li>• Wild Pokemon: Completely Random, allow legendaries</li>
                <li>• Starters: Any Pokemon (yes, even legendaries)</li>
                <li>• Trainers: Random, maximum difficulty</li>
                <li>• Evolution: Completely Random (Magikarp → Groudon)</li>
                <li>• Move Sets: Total Chaos (Fire types with Surf)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Popular Randomizer Challenges */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Popular Randomizer Challenge Modes
          </h2>
          <div className="space-y-4 font-mono text-base leading-relaxed">
            <div className="bg-red-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-3">🎯 Randomizer Nuzlocke</h3>
              <p>Combine randomizer chaos with Nuzlocke permadeath rules. The ultimate Pokemon challenge. Use our generator to simulate possible encounters.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-3">💎 Wonderlocke</h3>
              <p>Release your starter, catch 6 Pokemon, Wonder Trade them all. Use whatever you receive. Pure RNG goodness.</p>
            </div>
            <div className="bg-orange-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-3">🔥 Monotype Randomizer</h3>
              <p>Only use Pokemon of one type, even in a randomizer. Use our type filters to see what&apos;s theoretically available.</p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-gray-900 text-lg mb-3">⚡ Speedrun Randomizer</h3>
              <p className="text-gray-900">Beat the game as fast as possible with random Pokemon. Requires quick decision-making and adaptation.</p>
            </div>
            <div className="bg-green-700 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-3">🎲 Egglocke</h3>
              <p>Replace caught Pokemon with random eggs from your PC or received via trade. Hatch and use what you get.</p>
            </div>
          </div>
        </section>

        {/* Best ROMs for Randomizers */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Best Pokemon Games for Randomizers
          </h2>
          <div className="grid md:grid-cols-3 gap-4 font-mono text-base">
            <div className="bg-green-700 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-2">Pokemon Emerald</h3>
              <p className="text-white mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-white">Best overall. Battle Frontier, great Pokemon pool, easy to randomize.</p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-2">Pokemon Platinum</h3>
              <p className="text-white mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-white">Excellent difficulty curve, great region, Gen 4 mechanics.</p>
            </div>
            <div className="bg-gray-800 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-2">Pokemon Black 2/White 2</h3>
              <p className="text-white mb-2">⭐⭐⭐⭐</p>
              <p className="text-white">Most features, highest difficulty, huge Pokemon variety.</p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-5">
              <h3 className="font-sans font-bold text-gray-900 text-lg mb-2">Pokemon HeartGold/SoulSilver</h3>
              <p className="text-gray-900 mb-2">⭐⭐⭐⭐</p>
              <p className="text-gray-900">Two regions, 16 gyms, Pokemon follow you. Long playthrough.</p>
            </div>
            <div className="bg-red-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-2">Pokemon Fire Red/Leaf Green</h3>
              <p className="text-white mb-2">⭐⭐⭐⭐</p>
              <p className="text-white">Classic Kanto experience, easy for beginners, great nostalgia.</p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-5">
              <h3 className="font-sans font-bold text-white text-lg mb-2">Pokemon Ultra Sun/Moon</h3>
              <p className="text-white mb-2">⭐⭐⭐</p>
              <p className="text-white">All 1000+ Pokemon available, modern features, beautiful region.</p>
            </div>
          </div>
        </section>

        {/* Randomizer Tips */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">
            Pro Tips for Randomizer Runs
          </h2>
          <div className="space-y-3 font-mono text-base text-gray-900">
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <p><strong>Save often:</strong> Randomizers can crash or produce unwinnable seeds. Save before major battles.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <p><strong>Check evolution methods:</strong> If evolutions are randomized, write down how your Pokemon evolve.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <p><strong>Keep TMs:</strong> With random move sets, TMs become crucial for fixing bad movesets.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <p><strong>Don&apos;t overlook &quot;weak&quot; Pokemon:</strong> In randomizers, every Pokemon can be viable with the right moves.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <p><strong>Use our generator for planning:</strong> Preview team compositions before committing to catches.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">✗</span>
              <p><strong>Avoid:</strong> Over-leveling. Randomizers are most fun when you&apos;re slightly under-leveled.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12 bg-cream border-2 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-6 uppercase">Related Challenge Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/nuzlocke-generator" className="group block bg-white border-2 border-black p-6 hover:bg-red-600 transition-all">
              <h3 className="font-sans font-bold text-xl text-black mb-2 group-hover:text-white">⚔️ Nuzlocke Generator</h3>
              <p className="font-mono text-base text-gray-900 group-hover:text-white">Ultimate guide to Nuzlocke challenges. Generate starters and plan your permadeath runs.</p>
            </Link>
            <Link href="/draft-league-generator" className="group block bg-white border-2 border-black p-6 hover:bg-purple-600 transition-all">
              <h3 className="font-sans font-bold text-xl text-black mb-2 group-hover:text-white">🏆 Draft League Generator</h3>
              <p className="font-mono text-base text-gray-900 group-hover:text-white">Create balanced draft pools for competitive Pokemon leagues. Perfect for tournament organizers.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4 uppercase">
            Ready to Plan Your<br />Randomizer Run?
          </h2>
          <p className="font-mono text-marigold text-lg mb-8 max-w-2xl mx-auto">
            Use our generator to preview teams and plan your challenge. Completely free.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-indigo-500 hover:bg-indigo-600 text-white font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
              GENERATE TEAMS NOW →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
