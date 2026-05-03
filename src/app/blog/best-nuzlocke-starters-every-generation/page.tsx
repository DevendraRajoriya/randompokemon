import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Nuzlocke Starters Every Generation (Gen 1–9) | randompokemon.co",
  description: "Ranked Nuzlocke starter picks for Gen 1 through Gen 9 — gym matchup analysis, which starters keep you alive, and what to avoid.",
  keywords: ["best nuzlocke starter", "nuzlocke starter gen 4", "safest nuzlocke starter", "nuzlocke starter tier list"],
  openGraph: { title: "Best Nuzlocke Starters Every Generation", description: "Ranked starter picks across Gen 1–9 with gym matchup analysis.", type: "article" },
  alternates: { canonical: "https://www.randompokemon.co/blog/best-nuzlocke-starters-every-generation" },
};

const GEN_PICKS = [
  { gen: "Gen 1", game: "FireRed / LeafGreen", best: "Bulbasaur", pick: "green", reason: "Wins Brock and Misty outright. Leech Seed + Vine Whip gives safe, passive chip damage that prevents early-game surprises. Evolves into Venusaur before Surge, which is neutral vs. Electric.", avoid: "Charmander — no coverage for Brock or Misty. You'll burn two early-game catches just to compensate." },
  { gen: "Gen 2", game: "HeartGold / SoulSilver", best: "Cyndaquil", pick: "orange", reason: "Typhlosion's Speed stat outruns the Gen 2 curve. Flame Wheel arrives before Morty. Whitney's Miltank still hurts, but so does everything else — Cyndaquil wins more total gym matchups than either rival.", avoid: "Chikorita — Johto's gym lineup (Bug, Ghost, Ice, Dragon) punishes Grass typing relentlessly." },
  { gen: "Gen 3", game: "Emerald", best: "Mudkip", pick: "blue", reason: "Water/Ground typing covers Electric (Wattson) completely and beats Roxanne, Tate & Liza, and Wallace. Surf + Earthquake = neutral vs. 90% of Hoenn. The safest carry in Gen 3.", avoid: "Treecko — Flannery and Winona both threaten hard." },
  { gen: "Gen 4", game: "Platinum", best: "Chimchar", pick: "red", reason: "Infernape's Fire/Fighting STAB is the strongest offensive combo in Gen 4. Beats Roark (post-evolution), Maylene, Candice, and threatens Cynthia's Garchomp with Close Combat. Mach Punch patches the Speed gap vs. Crasher Wake.", avoid: "Turtwig — Steel Wing users and Flint's Fire team punish Grass/Ground typing." },
  { gen: "Gen 5", game: "Black 2 / White 2", best: "Tepig", pick: "orange", reason: "Emboar's Fire/Fighting coverage handles Skyla, Iris, and the rival's Serperior. Bulldoze punishes Elesa. Thick Fat on final evolution reduces Ice and Fire damage — invaluable in Winter Unova.", avoid: "Snivy — Grass STAB gaps against Burgh, Skyla, and Drayden are nearly unworkable in Challenge Mode." },
  { gen: "Gen 6", game: "X / Y", best: "Froakie", pick: "blue", reason: "Greninja's Protean gives STAB to every move. 122 Speed lets it outpace almost everything Gen 6 throws at you. Smash pass synergy with the rest of the team is a bonus.", avoid: "Chespin — 4x Bug weakness after evolution creates a dangerous blind spot." },
  { gen: "Gen 7", game: "Sun / Moon", best: "Litten", pick: "red", reason: "Incineroar's Intimidate after evolution is the best defensive passive in any Nuzlocke. Reduces all physical incoming damage by one stage. Darkest Lariat ignores totem boss stat boosts.", avoid: "Rowlet — 4x Ice weakness is punished in Vast Poni Canyon's late encounters." },
  { gen: "Gen 8", game: "Sword / Shield", best: "Grookey", pick: "green", reason: "Rillaboom's Grassy Surge terrain halves Earthquake damage (common from Dynamax bosses). Drum Beating's mandatory Speed drop is free speed control. Sweeps Nessa and Melony.", avoid: "Sobble — Inteleon lacks the bulk to survive crits and Dynamax scaling." },
  { gen: "Gen 9", game: "Scarlet / Violet", best: "Sprigatito", pick: "green", reason: "Meowscarada's 123 Speed makes it the fastest Gen 9 starter final-form. Flower Trick always crits, bypassing defensive stat changes from boss Pokémon. Covers early Water gyms cleanly.", avoid: "Fuecoco — Skeledirge is strong lategame but the Saguaro gym and early learnset drag the early run." },
];

const pickColor: Record<string, string> = { green: "#15803d", blue: "#1d4ed8", orange: "#c2410c", red: "#dc2626" };

export default function BestNuzlockeStartersGuide() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="text-black/30">/</li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Best Nuzlocke Starters</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-red-600 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">NUZLOCKE</span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight mb-4">
            Best Nuzlocke Starters for Every Generation (Gen 1–9)
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">12 min read · Updated May 2025</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            In a Nuzlocke, your starter is the only Pokémon you&apos;re guaranteed to have through the whole early game — before box depth, before coverage catches. Picking wrong costs lives. This guide ranks the safest starter for every generation with full gym matchup analysis.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Why the Starter Choice Matters More Here</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            Nuzlocke starter criteria differ from standard tier lists. Power matters less than survivability across the full gym lineup. A starter that beats three gyms at neutral is worth more than one that sweeps two at 4× super-effective. The metric is: how many gyms can you walk into without holding your breath?
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            We also weight bulk (surviving a crit), access to moves that chip safely (Leech Seed, Will-O-Wisp), and whether the final evolution picks up dangerous new weaknesses. A starter that evolves into a 4× weakness to a common late-game type can end a great run in seconds.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">Best Starter by Generation</h2>
          <div className="space-y-5">
            {GEN_PICKS.map((g) => (
              <div key={g.gen} className="bg-white border-2 border-black slasher p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-black px-2 py-0.5 flex-shrink-0">
                    <span className="font-mono text-[10px] font-bold text-white uppercase">{g.gen}</span>
                  </div>
                  <span className="font-mono text-xs text-charcoal">{g.game}</span>
                </div>
                <h3 className="font-grotesk font-bold text-lg text-black mb-2">
                  Best Pick:{" "}
                  <span style={{ color: pickColor[g.pick] }}>{g.best}</span>
                </h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">{g.reason}</p>
                <div className="bg-red-50 border-l-4 border-red-400 px-4 py-2">
                  <p className="font-mono text-xs text-red-800"><strong>Avoid:</strong> {g.avoid}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">General Nuzlocke Starter Strategy</h2>
          <div className="space-y-3">
            {[
              ["Cover early gyms first", "Your starter determines whether gym 1–3 is a breeze or a death spiral. Prioritize matchups over final-form power."],
              ["Know your rival's counter", "Most rivals use the starter that counters yours. Knowing that early lets you plan your first few catches around that threat."],
              ["Don't rely on one mon", "The starter's job is to survive long enough for you to build a team. Once you have 4+ viable Pokémon, the starter becomes an anchor, not the whole strategy."],
              ["Use the Nuzlocke Generator", "Pre-plan your route catches before the run starts. Knowing your coverage gaps ahead of each gym prevents avoidable losses."],
            ].map(([title, body]) => (
              <div key={title as string} className="flex gap-4 border-2 border-black/10 p-4 bg-cream/40">
                <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
                <div>
                  <p className="font-mono text-xs font-bold text-black mb-1 uppercase">{title}</p>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              ["What is the best starter for a Nuzlocke beginner?", "Mudkip (Emerald) or Chimchar (Platinum). Both have wide gym coverage, strong final evolutions, and no punishing new weaknesses after evolving."],
              ["What is the best nuzlocke starter gen 4?", "Chimchar. Infernape's Fire/Fighting STAB handles the Platinum gym lineup better than any other Gen 4 starter — covering Roark (post-evo), Gardenia, Maylene, and Cynthia's Garchomp."],
              ["Does the starter matter in a randomizer Nuzlocke?", "Much less — your starter is random. Use the Random Pokémon Generator to explore possible picks and build mental coverage maps before you start."],
              ["Can you Nuzlocke with any starter?", "Yes. Every starter is viable with careful play. These picks just minimise the difficulty floor and early-game deaths."],
            ].map(([q, a]) => (
              <div key={q as string} className="border-2 border-black p-4">
                <h3 className="font-mono font-bold text-sm text-black mb-2">{q}</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black slasher p-8 text-center">
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Plan Your Nuzlocke Team</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Use the Nuzlocke Generator to map route catches before your run starts.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nuzlocke-generator" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">
              NUZLOCKE GENERATOR →
            </Link>
            <Link href="/blog" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">
              MORE GUIDES
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
