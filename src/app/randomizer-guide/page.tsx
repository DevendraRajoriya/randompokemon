import type { Metadata } from "next";
import Link from "next/link";
import { Dice1, Sparkles, Gamepad2, Zap, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokemon Randomizer Guide | Challenge Runs & Team Planning (2025)",
  description: "Complete guide to Pokemon randomizers and challenge runs. Generate teams for ROM hack randomizers, plan challenge modes, and discover the best randomizer settings.",
  keywords: ["pokemon randomizer", "randomizer guide", "pokemon rom hack", "challenge runs", "randomizer settings", "pokemon randomizer tool"],
  alternates: { canonical: "/randomizer-guide" },
  openGraph: { title: "Pokemon Randomizer Guide | Challenge Runs & Team Planning", description: "Complete guide to Pokemon randomizers and challenge runs.", url: `${siteUrl}/randomizer-guide`, type: "website" },
};

export default function RandomizerGuidePage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">Randomizer Guide</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHALLENGE RUN GUIDE</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
            POKEMON RANDOMIZER<br />CHALLENGE GUIDE
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Master Pokemon randomizers and challenge runs. Learn the best settings, plan your teams, and discover how to use our generator for randomizer playthroughs.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-black hover:bg-charcoal text-white font-grotesk font-bold text-base px-10 py-4 border-4 border-black slasher transition-smooth flex items-center gap-3">
              <Dice1 size={20} />
              GENERATE RANDOMIZER TEAMS
            </div>
          </Link>
        </div>

        {/* What is a randomizer */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BASICS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT IS A POKEMON RANDOMIZER?</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6">A <strong className="text-black">Pokemon Randomizer</strong> is a ROM hack tool that randomizes various aspects of Pokemon games, creating unpredictable and exciting new playthroughs. Every encounter, trainer battle, and evolution can be completely different.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-3">WHAT GETS RANDOMIZED:</h3>
              <div className="space-y-2">
                {[
                  { icon: "🎲", label: "WILD ENCOUNTERS", desc: "Any Pokemon can appear on any route. Find Legendary Pokemon in tall grass!" },
                  { icon: "🎲", label: "STARTER POKEMON", desc: "Your starter could be anything from Magikarp to Mewtwo." },
                  { icon: "🎲", label: "TRAINER TEAMS", desc: "Gym leaders and rivals have completely random Pokemon." },
                  { icon: "🎲", label: "EVOLUTION METHODS", desc: "Pokemon might evolve at different levels or via different stones." },
                  { icon: "🎲", label: "MOVE SETS", desc: "Pokemon learn random moves as they level up." },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span>{item.icon}</span>
                    <span><strong className="text-black">{item.label}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How our generator helps */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">HOW TO USE</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOW TO USE OUR GENERATOR FOR RANDOMIZERS</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: Sparkles, label: "PRE-RUN PLANNING", desc: "Before starting your randomizer, preview potential team compositions. Get a feel for what Pokemon you might encounter." },
              { icon: Gamepad2, label: "BACKUP TEAM IDEAS", desc: "When you encounter unusable Pokemon, generate alternatives to see what's theoretically available in your seed." },
              { icon: Zap, label: "CHALLENGE MODE SETUP", desc: "Combine randomizers with Nuzlocke rules. Use our generator to simulate route encounters and plan for permadeath." },
              { icon: Dice1, label: "TYPE COVERAGE ANALYSIS", desc: "Generate teams filtered by generation to match your ROM base game. Understand which types you need." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <div className="flex items-center gap-2 mb-2"><item.icon size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">{item.label}</h3></div>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best settings */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SETTINGS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST RANDOMIZER SETTINGS (2025)</h2>
          <div className="space-y-3">
            {[
              { label: "BEGINNER SETTINGS", items: ["Wild Pokemon: Type-Themed Areas (keeps some logic)", "Starters: Random from any Pokemon", "Trainers: Random, similar strength", "Evolution: Unchanged", "Move Sets: Unchanged (least chaos)"] },
              { label: "INTERMEDIATE SETTINGS", items: ["Wild Pokemon: Completely Random", "Starters: Random, no legendaries", "Trainers: Random, buffed difficulty", "Evolution: Random (keeps 3-stage chains)", "Move Sets: Random, prefer same type"] },
              { label: "CHAOS MODE (ADVANCED)", items: ["Wild Pokemon: Completely Random, allow legendaries", "Starters: Any Pokemon (yes, even legendaries)", "Trainers: Random, maximum difficulty", "Evolution: Completely Random (Magikarp → Groudon)", "Move Sets: Total Chaos (Fire types with Surf)"] },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.label}</h3>
                <ul className="font-mono text-xs text-charcoal space-y-1">
                  {item.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge modes */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHALLENGE MODES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">POPULAR RANDOMIZER CHALLENGES</h2>
          <div className="space-y-3">
            {[
              { icon: "🎯", label: "RANDOMIZER NUZLOCKE", desc: "Combine randomizer chaos with Nuzlocke permadeath rules. The ultimate Pokemon challenge. Use our generator to simulate possible encounters." },
              { icon: "💎", label: "WONDERLOCKE", desc: "Release your starter, catch 6 Pokemon, Wonder Trade them all. Use whatever you receive. Pure RNG goodness." },
              { icon: "🔥", label: "MONOTYPE RANDOMIZER", desc: "Only use Pokemon of one type, even in a randomizer. Use our type filters to see what's theoretically available." },
              { icon: "⚡", label: "SPEEDRUN RANDOMIZER", desc: "Beat the game as fast as possible with random Pokemon. Requires quick decision-making and adaptation." },
              { icon: "🎲", label: "EGGLOCKE", desc: "Replace caught Pokemon with random eggs from your PC or received via trade. Hatch and use what you get." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                <span className="font-mono font-bold text-lg">{item.icon}</span>
                <div><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Best games */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">RECOMMENDED GAMES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST GAMES FOR RANDOMIZERS</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { label: "POKEMON EMERALD", rating: "⭐⭐⭐⭐⭐", desc: "Best overall. Battle Frontier, great Pokemon pool, easy to randomize." },
              { label: "POKEMON PLATINUM", rating: "⭐⭐⭐⭐⭐", desc: "Excellent difficulty curve, great region, Gen 4 mechanics." },
              { label: "BLACK 2 / WHITE 2", rating: "⭐⭐⭐⭐", desc: "Most features, highest difficulty, huge Pokemon variety." },
              { label: "HEARTGOLD / SOULSILVER", rating: "⭐⭐⭐⭐", desc: "Two regions, 16 gyms, Pokemon follow you. Long playthrough." },
              { label: "FIRERED / LEAFGREEN", rating: "⭐⭐⭐⭐", desc: "Classic Kanto experience, easy for beginners, great nostalgia." },
              { label: "ULTRA SUN / MOON", rating: "⭐⭐⭐", desc: "All 1000+ Pokemon available, modern features, beautiful region." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.label}</h3>
                <div className="font-mono text-xs mb-1">{item.rating}</div>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pro tips */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">PRO TIPS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">PRO TIPS FOR RANDOMIZER RUNS</h2>
          <div className="space-y-2 font-mono text-xs md:text-sm text-charcoal">
            {[
              { type: "do", text: "Save often: Randomizers can crash or produce unwinnable seeds. Save before major battles." },
              { type: "do", text: "Check evolution methods: If evolutions are randomized, write down how your Pokemon evolve." },
              { type: "do", text: "Keep TMs: With random move sets, TMs become crucial for fixing bad movesets." },
              { type: "do", text: "Don't overlook \"weak\" Pokemon: In randomizers, every Pokemon can be viable with the right moves." },
              { type: "do", text: "Use our generator for planning: Preview team compositions before committing to catches." },
              { type: "dont", text: "Avoid over-leveling. Randomizers are most fun when you're slightly under-leveled." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border-2 border-black p-3 slasher">
                <span className={`font-bold ${item.type === "do" ? "text-black" : "text-black"}`}>{item.type === "do" ? "✓" : "✗"}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">RELATED GUIDES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">RELATED CHALLENGE GUIDES</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/nuzlocke-generator" className="group block bg-white border-2 border-black p-4 slasher hover:bg-marigold transition-all">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1 group-hover:text-black">⚔️ NUZLOCKE GENERATOR</h3>
              <p className="font-mono text-xs text-charcoal group-hover:text-black">Ultimate guide to Nuzlocke challenges. Generate starters and plan your permadeath runs.</p>
            </Link>
            <Link href="/draft-league-generator" className="group block bg-white border-2 border-black p-4 slasher hover:bg-marigold transition-all">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1 group-hover:text-black">🏆 DRAFT LEAGUE GENERATOR</h3>
              <p className="font-mono text-xs text-charcoal group-hover:text-black">Create balanced draft pools for competitive Pokemon leagues. Perfect for tournament organizers.</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">
            READY TO PLAN YOUR<br />RANDOMIZER RUN?
          </h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Use our generator to preview teams and plan your challenge. Completely free.</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
              GENERATE TEAMS NOW →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
