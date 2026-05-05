import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POKEMON Monotype Challenge Guide — All 18 Types Ranked",
  description: "Running a monotype POKEMON challenge? This guide ranks all 18 types by difficulty, lists the best picks for each, and explains how to handle rough gym matchups.",
  keywords: ["pokemon monotype challenge", "monotype run guide", "hardest monotype run pokemon", "monotype challenge type ranking", "monotype nuzlocke guide"],
  openGraph: { title: "POKEMON Monotype Challenge Guide - Every Type Ranked", description: "All 18 monotype challenges ranked by difficulty with best picks for each type.", type: "article", url: "https://www.randompokemon.co/blog/monotype-challenge-guide", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Monotype Challenge Guide" }] },
  twitter: { card: "summary_large_image", title: "POKEMON Monotype Challenge Guide - Every Type Ranked", description: "All 18 monotype challenges ranked by difficulty with best picks for each type.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog/monotype-challenge-guide" },
};

export default function MonotypeGuide() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="text-black/30">/</li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Monotype Challenge Guide</li>
          </ol>
        </nav>
        <header className="mb-10">
          <div className="inline-block bg-green-700 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHALLENGE RUNS</span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight mb-4">
            POKEMON Monotype Challenge Guide — Every Type Ranked
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">13 min read · Updated May 2026</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            A monotype challenge restricts your team to a single POKEMON type for the entire game. Some types breeze through entire games while others make specific gyms nearly impossible. This guide ranks all 18 types by difficulty, lists the best monotype picks for each, and explains how to handle the hardest gym matchups.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">What Is the Monotype Challenge?</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The monotype challenge is one of the oldest self-imposed POKEMON restrictions. You choose one type before the game begins — Fire, Water, Psychic, whatever you like — and every POKEMON on your team must be that type (or dual-type including that type). HM usage rules vary, but most players allow 1 HM slave from outside the type.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The challenge ranges from trivially easy (Water mono in Hoenn, where Surf trivialises half the gyms) to nearly impossible (Normal mono in Gen 1, where no POKEMON has a type advantage over anything). The difficulty depends heavily on both your chosen type and your chosen game.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            Use the <Link href="/pokedex?type=fire" className="underline font-bold text-black hover:text-charcoal">Pokédex type filter</Link> to see every available POKEMON for your chosen mono type before the run begins. Planning your available pool before the first gym is the single most important preparation step for any monotype challenge.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">All 18 Types Ranked by Challenge Difficulty</h2>
          <div className="space-y-5">

            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#15803d" }}>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Easy</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Water</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Psychic</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Ground</span>
              </div>
              <p className="font-mono text-sm text-charcoal leading-relaxed">Water has the widest available POKEMON pool across all games and strong options available early. Surf gives Water mono consistent coverage from the mid-game onwards. Psychic has overwhelming power in Gen 1–3 where Ghost and Dark types are scarce. Ground handles most of the gym lineup in any game because Electric, Fire, Rock, and Steel types are common across all gym leaders.</p>
            </div>

            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#d97706" }}>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Medium</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Fire</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Dragon</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Steel</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Ghost</span>
              </div>
              <p className="font-mono text-sm text-charcoal leading-relaxed">Fire mono is rough early (limited availability in many games, and the Water gym is usually one of the first) but powerful mid-game once fully evolved starters and caught Fire types come online. Dragon and Steel lack options in the first third of most runs but dominate once you evolve — both types have excellent late-game BST distribution. Ghost is immune to Normal and Fighting but struggles against Dark types, which become more common in the late game.</p>
            </div>

            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#dc2626" }}>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Hard</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Bug</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Ice</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Rock</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Poison</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Fighting</span>
              </div>
              <p className="font-mono text-sm text-charcoal leading-relaxed">Bug is extremely available but weak late-game against Fire, Rock, and Flying types that dominate the final stretch of most games. Ice has almost no defensive value — 4 weaknesses with minimal resists, making every Stealth Rock devastating. Rock struggles against early Water and Grass gyms and is weak to Ground, a type that appears constantly in cave encounters. Fighting has huge gaps vs. Flying and Psychic, which are the most common gym leader specialties in Gen 1–4.</p>
            </div>

            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: "#7c3aed" }}>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Very Hard</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Normal</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Flying</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Electric</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Grass</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Dark</span>
                <span className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">Fairy</span>
              </div>
              <p className="font-mono text-sm text-charcoal leading-relaxed">Normal has no type advantages whatsoever — every fight is neutral, meaning you win or lose purely on BST and move power. Flying has no dual-type options for offensive coverage in many games, and the Ground immunity is negated by Gravity or Smack Down. Grass is shredded by Fire, Ice, Bug, Flying, and Poison — five different weaknesses that appear constantly in the gym leader lineup of every game. Electric has no available answers to Ground types, which are immune.</p>
            </div>

          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Best Picks for Each Difficult Type</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">If you are committed to running a Hard or Very Hard monotype, these picks give you the best chance of completing the run. Each recommendation accounts for availability in GBA and DS games, where most monotype runs take place.</p>
          <div className="space-y-3">
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Bug mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Scizor (if available), Heracross, Yanmega. Steel/Bug Scizor removes most weaknesses and gives you a type that resists a wide range of attacks. Heracross hits hard despite fragility. Yanmega&apos;s Speed Boost ability eventually makes it a consistent Speed winner against most of the late-game roster.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Ice mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Lapras, Walrein, Froslass. Lapras is the single best Ice mono anchor — high HP + Water/Ice dual STAB covers most threats and the Water typing patches the Fire weakness that cripples most pure Ice types. Walrein&apos;s Thick Fat reduces Fire damage significantly, making it far more durable than its base stats suggest.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Normal mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Snorlax, Porygon-Z, Clefable (if Fairy doesn&apos;t disqualify). Snorlax provides the bulk that Normal mono desperately needs — its high HP and Special Defense allow it to survive hits that would one-shot most of the rest of your team. Porygon-Z&apos;s Adaptability boosts Normal moves to 2× STAB, compensating for the type&apos;s lack of SE coverage.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Flying mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Gliscor, Skarmory, Landorus-Therian. Ground/Flying removes the Electric weakness — critical for Flying mono survival because Electric types appear constantly as wild POKEMON and gym leader aces. Skarmory&apos;s Steel typing adds enormous defensive value and makes it one of the sturdiest walls available to any mono type challenge.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Grass mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Ferrothorn, Venusaur, Amoonguss. Ferrothorn&apos;s Steel/Grass typing neutralises most Grass weaknesses to Fire and Ice — it becomes an almost mandatory anchor for Grass mono survival. Venusaur&apos;s Chlorophyll + Sleep Powder combination is the most reliable status tool available for Grass mono teams.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black/10 p-4 bg-white">
              <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Poison mono</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Toxapex, Gengar, Scolipede. Toxapex&apos;s Regenerator bulk is the closest thing Poison mono has to a reliable defensive anchor — recovering a third of its HP each time it switches allows aggressive switch-ins that other Poison types cannot afford. Gengar&apos;s Ghost/Poison typing adds immunities to Normal and Fighting that pure Poison types lack.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">5 Tips for Any Monotype Run</h2>
          <div className="space-y-3">
            <div className="border-2 border-black/10 bg-cream/40 p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-1">Check gym leader types before you commit</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Some game + type combinations are nearly impossible. Poison mono vs. HeartGold (the Ghost gym and the Psychic-resistant Koga) or Normal mono vs. anything requires careful planning. Scout your matchups before the run, not during. Knowing the gym leader lineup in advance is the difference between a prepared strategy and a desperate scramble.</p>
            </div>
            <div className="border-2 border-black/10 bg-cream/40 p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-1">Allow dual-types that include your mono-type</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">The standard rule is: your POKEMON must have your chosen type. Charizard (Fire/Flying) counts for a Fire mono. This flexibility dramatically improves team building options and is the key rule that makes Hard tier types completable at all. Without dual-type flexibility, Bug mono and Ice mono become nearly unwinnable in most games.</p>
            </div>
            <div className="border-2 border-black/10 bg-cream/40 p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-1">Plan your HM slaves carefully</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">In Gen 1–5, you need HMs that might not exist in your type. Most players allow 1–2 HM slaves from outside the mono type — agree with yourself on this rule before you start. Changing this rule mid-run when it becomes inconvenient undermines the challenge and is generally frowned upon by the monotype community.</p>
            </div>
            <div className="border-2 border-black/10 bg-cream/40 p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-1">Use our generator for type-filtered picks</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">The Random POKEMON Generator and Pokédex can filter by type so you can see every available POKEMON for your chosen mono before the run begins. Knowing your full available pool before the first gym is the most underrated preparation step for any monotype challenge.</p>
            </div>
            <div className="border-2 border-black/10 bg-cream/40 p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-1">Know your immunity and weakness ceiling</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Before the first gym, know what types hit you for 4× damage and plan routes to avoid those wild encounters or have a coverage solution ready. For Ice mono, this means knowing every route with Fire-type wild POKEMON. For Grass mono, this means mapping every route with Bug and Flying encounters before you walk in.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Hardest Gym Matchups by Type</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">These are the most commonly reported losing points in each difficult monotype challenge. Knowing these fights in advance is the difference between a prepared workaround and a sudden run-ending loss.</p>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-2 pr-6 font-bold uppercase text-charcoal">Your Type</th>
                  <th className="text-left py-2 pr-6 font-bold uppercase text-charcoal">Hardest Gym</th>
                  <th className="text-left py-2 font-bold uppercase text-charcoal">Workaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Bug</td>
                  <td className="py-2 pr-6 text-red-700">Flannery (Fire)</td>
                  <td className="py-2 text-charcoal">Use Levitate users to negate Earthquake chip; route through Water areas to grind defensively before the gym</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Grass</td>
                  <td className="py-2 pr-6 text-red-700">Flannery (Fire)</td>
                  <td className="py-2 text-charcoal">Ferrothorn or any Grass/Rock type tanks Fire hits better than pure Grass types; use Leech Seed stalling</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Normal</td>
                  <td className="py-2 pr-6 text-red-700">Every gym</td>
                  <td className="py-2 text-charcoal">Rely on sheer power difference, held item advantage, and high-bulk POKEMON like Snorlax and Blissey</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Ice</td>
                  <td className="py-2 pr-6 text-red-700">Lt. Surge / Wattson</td>
                  <td className="py-2 text-charcoal">Lapras tanks Electric with high HP; bring Lum Berries to prevent paralysis from spreading to the rest of the team</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Poison</td>
                  <td className="py-2 pr-6 text-red-700">Koga / Janine (own type)</td>
                  <td className="py-2 text-charcoal">Neutral matchup; use stat advantage and PP stall. Gengar&apos;s immunity to Normal gives it free switch-in opportunities</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Psychic</td>
                  <td className="py-2 pr-6 text-red-700">Ghost gyms (Gen 3+)</td>
                  <td className="py-2 text-charcoal">Ghost is neutral vs. Psychic; use Dark coverage moves from dual-type Psychic/Dark POKEMON where available</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Flying</td>
                  <td className="py-2 pr-6 text-red-700">Wattson / Volkner</td>
                  <td className="py-2 text-charcoal">Ground/Flying dual-types like Gliscor and Landorus are immune to Electric entirely; mandatory anchors for Flying mono</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="py-2 pr-6 font-bold text-black">Electric</td>
                  <td className="py-2 pr-6 text-red-700">Ground gym (Gym 5)</td>
                  <td className="py-2 text-charcoal">Electric has no attacks that hit Ground types — use Psychic or Flying coverage from dual-type Electric POKEMON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 border-2 border-black p-6 slasher bg-white">
          <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/blog/nuzlocke-rules-complete-guide" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Nuzlocke</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Nuzlocke Rules: Complete Beginner Guide</p>
            </Link>
            <Link href="/blog/hardest-nuzlocke-challenges-ranked" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Nuzlocke</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Hardest Nuzlocke Challenges Ranked</p>
            </Link>
            <Link href="/blog/best-nuzlocke-starters-every-generation" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Nuzlocke</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Best Nuzlocke Starters Every Generation</p>
            </Link>
            <Link href="/blog/how-to-build-draft-league-pokemon-team" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Competitive</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">How to Build a Draft League POKEMON Team</p>
            </Link>
            <Link href="/blog/pokemon-randomizer-tips-beginners" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Randomizer</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">POKEMON Randomizer Tips &amp; Tricks for Beginners</p>
            </Link>
          </div>
        </section>
        <section className="bg-black slasher p-8 text-center">
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Find Your Monotype Team</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Filter the Pokédex by type to see every available POKEMON for your chosen mono before the run starts.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/pokedex" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">BROWSE POKÉDEX →</Link>
            <Link href="/" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">RANDOM GENERATOR</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
