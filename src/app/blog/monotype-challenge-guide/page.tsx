import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokémon Monotype Challenge Guide — All 18 Types Ranked",
  description: "Running a monotype Pokémon challenge? This guide ranks all 18 types by difficulty, lists the best picks for each, and explains how to handle rough gym matchups.",
  keywords: ["pokemon monotype challenge", "monotype run guide", "hardest monotype run pokemon", "monotype challenge type ranking", "monotype nuzlocke guide"],
  openGraph: { title: "Pokémon Monotype Challenge Guide - Every Type Ranked", description: "All 18 monotype challenges ranked by difficulty with best picks for each type.", type: "article", url: "https://www.randompokemon.co/blog/monotype-challenge-guide", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Monotype Challenge Guide" }] },
  twitter: { card: "summary_large_image", title: "Pokémon Monotype Challenge Guide - Every Type Ranked", description: "All 18 monotype challenges ranked by difficulty with best picks for each type.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog/monotype-challenge-guide" },
};

const TYPE_RANKINGS = [
  { tier: "Easy", color: "#15803d", types: ["Water", "Psychic", "Ground"], why: "Water has the widest available Pokémon pool across all games and strong options available early. Psychic has overwhelming power in Gen 1–3. Ground handles most of the gym lineup in any game." },
  { tier: "Medium", color: "#d97706", types: ["Fire", "Dragon", "Steel", "Ghost"], why: "Fire mono is rough early (limited availability in many games) but powerful mid-game. Dragon and Steel lack options in the first third of most runs but dominate once you evolve." },
  { tier: "Hard", color: "#dc2626", types: ["Bug", "Ice", "Rock", "Poison", "Fighting"], why: "Bug is extremely available but weak late-game. Ice has almost no defensive value — 4 weaknesses with minimal resists. Rock struggles against early Water and Grass gyms. Fighting has huge gaps vs. Flying and Psychic." },
  { tier: "Very Hard", color: "#7c3aed", types: ["Normal", "Flying", "Electric", "Grass", "Dark", "Fairy"], why: "Normal has no type advantages whatsoever — every fight is neutral. Flying has no dual-type options for offensive coverage. Grass is shredded by Fire, Ice, Bug, Flying, and Poison." },
];

const TIPS = [
  ["Check gym leader types before you commit", "Some game + type combinations are nearly impossible. Poison mono vs. HeartGold (the Ghost gym) or Normal mono vs. anything requires careful planning. Scout your matchups before the run, not during."],
  ["Allow dual-types that include your mono-type", "The standard rule is: your Pokémon must have your chosen type. Charizard (Fire/Flying) counts for a Fire mono. This flexibility dramatically improves team building options."],
  ["Plan your HM slaves carefully", "In Gen 1–5, you need HMs that might not exist in your type. Most players allow 1–2 HM slaves from outside the mono type — agree with yourself on this rule before you start."],
  ["Use our generator for type-filtered picks", "The Random Pokémon Generator and Pokédex can filter by type so you can see every available Pokémon for your chosen mono before the run begins."],
  ["Know your immunity and weakness ceiling", "Before the first gym, know what types hit you for 4× damage and plan routes to avoid those wild encounters or have a coverage solution ready."],
];

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
            Pokémon Monotype Challenge Guide — Every Type Ranked
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">13 min read · Updated May 2025</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            A monotype challenge restricts your team to a single Pokémon type for the entire game. Some types breeze through entire games while others make specific gyms nearly impossible. This guide ranks all 18 types by difficulty, lists the best monotype picks for each, and explains how to handle the hardest gym matchups.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">What Is the Monotype Challenge?</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The monotype challenge is one of the oldest self-imposed Pokémon restrictions. You choose one type before the game begins — Fire, Water, Psychic, whatever you like — and every Pokémon on your team must be that type (or dual-type including that type). HM usage rules vary, but most players allow 1 HM slave from outside the type.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The challenge ranges from trivially easy (Water mono in Hoenn, where Surf trivialises half the gyms) to nearly impossible (Normal mono in Gen 1, where no Pokémon has a type advantage over anything). The difficulty depends heavily on both your chosen type and your chosen game.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            Use the <Link href="/pokedex?type=fire" className="underline font-bold text-black hover:text-charcoal">Pokédex type filter</Link> to see every available Pokémon for your chosen mono type before the run begins.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">All 18 Types Ranked by Challenge Difficulty</h2>
          <div className="space-y-5">
            {TYPE_RANKINGS.map((r) => (
              <div key={r.tier} className="bg-white border-2 border-black slasher p-5 md:p-6">
                <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: r.color }}>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">{r.tier}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {r.types.map(t => (
                    <span key={t} className="font-mono text-xs font-bold border-2 border-black px-2 py-0.5 bg-cream">{t}</span>
                  ))}
                </div>
                <p className="font-mono text-sm text-charcoal leading-relaxed">{r.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Best Picks for Each Difficult Type</h2>
          <div className="space-y-3">
            {[
              ["Bug mono", "Scizor (if available), Heracross, Yanmega. Steel/Bug Scizor removes most weaknesses. Heracross hits hard despite fragility."],
              ["Ice mono", "Lapras, Walrein, Froslass. Lapras is the single best Ice mono anchor — high HP + Water/Ice dual STAB covers most threats."],
              ["Normal mono", "Snorlax, Porygon-Z, Clefable (if Fairy doesn't disqualify). Snorlax provides bulk that Normal desperately needs."],
              ["Flying mono", "Gliscor, Skarmory, Landorus-Therian. Ground/Flying removes Electric weakness — critical for Flying mono survival."],
              ["Grass mono", "Ferrothorn, Venusaur, Amoonguss. Ferrothorn's Steel/Grass typing neutralises most Grass weaknesses. Essential pick."],
              ["Poison mono", "Toxapex, Gengar, Scolipede. Toxapex's regenerator bulk is the closest thing Poison mono has to a reliable defensive anchor."],
            ].map(([type, picks]) => (
              <div key={type as string} className="flex gap-4 border-2 border-black/10 p-4 bg-white">
                <div className="w-1.5 bg-black flex-shrink-0 self-stretch" />
                <div>
                  <p className="font-mono font-bold text-xs text-black uppercase mb-1">{type}</p>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{picks}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">5 Tips for Any Monotype Run</h2>
          <div className="space-y-3">
            {TIPS.map(([title, body]) => (
              <div key={title as string} className="border-2 border-black/10 bg-cream/40 p-4">
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">{title}</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Hardest Gym Matchups by Type</h2>
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
                {[
                  ["Bug", "Flannery (Fire)", "Levitate users immune to Earthquake chip; switch into Water routes first"],
                  ["Grass", "Flannery (Fire)", "Ferrothorn or any Grass/Rock type tanks Fire hits better"],
                  ["Normal", "Every gym", "Rely on sheer power difference and held item advantage"],
                  ["Ice", "Lt. Surge / Wattson", "Lapras can tank Electric with high HP; bring Lum Berries"],
                  ["Poison", "Koga / Janine (own type)", "Neutral matchup; use stat advantage and PP stall"],
                  ["Psychic", "Ghost gyms (Gen 3+)", "Ghost is neutral vs. Psychic; use Dark coverage moves from dual-types"],
                ].map(([type, gym, fix]) => (
                  <tr key={type as string} className="hover:bg-white/50">
                    <td className="py-2 pr-6 font-bold text-black">{type}</td>
                    <td className="py-2 pr-6 text-red-700">{gym}</td>
                    <td className="py-2 text-charcoal">{fix}</td>
                  </tr>
                ))}
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
            <Link href="/blog/monotype-challenge-guide" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Challenge Runs</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Pokémon Monotype Challenge Guide — Every Type Ranked</p>
            </Link>
            <Link href="/blog/how-to-build-draft-league-pokemon-team" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Competitive</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">How to Build a Draft League Pokémon Team</p>
            </Link>
            <Link href="/blog/pokemon-randomizer-tips-beginners" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Randomizer</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Pokémon Randomizer Tips &amp; Tricks for Beginners</p>
            </Link>
          </div>
        </section>
        <section className="bg-black slasher p-8 text-center">
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Find Your Monotype Team</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Filter the Pokédex by type to see every available Pokémon for your chosen mono before the run starts.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/pokedex" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">BROWSE POKÉDEX →</Link>
            <Link href="/" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">RANDOM GENERATOR</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
