import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardest Nuzlocke Challenges Ranked (2025) | randompokemon.co",
  description: "Every major Nuzlocke game difficulty ranked — from easiest to Emerald Kaizo and Black 2 Challenge Mode. Includes what makes each one brutal and which to attempt first.",
  keywords: ["hardest nuzlocke", "hardest pokemon game nuzlocke", "hardest nuzlocke challenge", "emerald kaizo nuzlocke", "pokemon nuzlocke difficulty ranking"],
  openGraph: { title: "Hardest Nuzlocke Challenges Ranked", description: "Every major Nuzlocke difficulty ranked from Platinum to Emerald Kaizo.", type: "article" },
  alternates: { canonical: "https://www.randompokemon.co/blog/hardest-nuzlocke-challenges-ranked" },
};

const RANKINGS = [
  { rank: "S — Unfair", color: "#7c3aed", games: ["Pokémon Emerald Kaizo", "Radical Red (Hardcore Mode)", "Pokémon Unbound (Insane Mode)"], why: "These are ROM hacks designed to kill you. Gym leaders carry full EV-trained, IV-perfect teams with held items, set mode, and species-perfect movesets. Emerald Kaizo's Brawly alone has caused thousands of run-ending wipes. Not recommended for anyone without 10+ completed standard Nuzlockes." },
  { rank: "A — Very Hard", color: "#dc2626", games: ["Pokémon Black 2 / White 2 (Challenge Mode)", "Pokémon Platinum", "Pokémon HeartGold / SoulSilver"], why: "Black 2 Challenge Mode raises all trainer Pokémon 5 levels above normal, adds held items to all gym leaders, and the post-game Unova Champion has a team that would be respectable in competitive play. HGSS has Whitney's Miltank and a severe level curve gap before Morty." },
  { rank: "B — Hard", color: "#d97706", games: ["Pokémon FireRed / LeafGreen", "Pokémon Diamond / Pearl", "Pokémon Black / White"], why: "FireRed has Misty's Starmie (boosted Sp. Atk in FRLG), Lt. Surge's Raichu, and the mandatory Rock Tunnel darkness. Black/White's level curve is steep between gym 5 and 8, and N's Reshiram/Zekrom fight allows no preparation time." },
  { rank: "C — Moderate", color: "#059669", games: ["Pokémon X / Y", "Pokémon Sword / Shield (No Dynamax)", "Pokémon Scarlet / Violet"], why: "Gen 6–9 games have generally forgiving EXP curves, widely available TMs, and lower overall AI quality. The level curve is smooth enough that careful play almost always gets you through without wipes — unless you're playing Set mode with no items." },
  { rank: "D — Beginner Friendly", color: "#6b7280", games: ["Pokémon Emerald (Standard)", "Pokémon Sun / Moon", "Pokémon Brilliant Diamond / Shining Pearl"], why: "Emerald standard has wide move variety and accessible grinding spots. Sun/Moon's linear pacing makes it easy to track threats. BDSP is widely regarded as the easiest main-series game to complete without losing a single Pokémon, even in Nuzlocke." },
];

const TRAPS = [
  { name: "Whitney's Miltank (HGSS)", detail: "Rollout + Milk Drink + Attract. If you don't have a Rock or Steel type with high Defense, Miltank kills multiple team members in one fight. The single most infamous Nuzlocke death dealer." },
  { name: "Cynthia's Garchomp (Platinum)", detail: "Outrage + Earthquake + Stone Edge, at level 62. In the original Platinum, Garchomp had a Speed stat that outsped nearly the entire late-game team. One wrong read ends a run here." },
  { name: "The Rock Tunnel (FireRed)", detail: "No Flash move and mandatory darkness forces you through a long cave with no reliable escape. Running out of PP mid-tunnel has caused countless resets in classic runs." },
  { name: "Ghetsis' Hydreigon (Black/White)", detail: "Arrives at level 52 when your team is ~48-50. Dragon Rage hits flat 40 HP regardless of level. Many players lose their entire team here with no warning or preparation window." },
  { name: "Brawly (Emerald Kaizo)", detail: "Kaizo Brawly has a full team of Fighting types with perfect IVs, held items, and a Bulk Up sweeper with priority coverage. Responsible for ending more Kaizo runs than any other encounter." },
];

export default function HardestNuzlockeGuide() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="text-black/30">/</li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Hardest Nuzlocke Challenges</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-red-600 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">NUZLOCKE</span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight mb-4">
            Hardest Nuzlocke Challenges Ranked (2025)
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">15 min read · Updated May 2025</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            Not all Nuzlockes are created equal. Pokémon Emerald Kaizo and Black 2 Challenge Mode can kill a perfect run in a single turn. Meanwhile, Sun &amp; Moon is genuinely beatable on your first attempt. This guide ranks every major Nuzlocke difficulty — standard games and ROM hacks — so you know what you&apos;re walking into.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">What Makes a Nuzlocke Hard?</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            Difficulty in a Nuzlocke is a combination of five factors: the level curve (how much grinding is required to stay safe), the AI quality of trainers, the availability of healing items, the presence of sudden spikes (one fight that dramatically outpaces the rest), and route variety (whether the game forces you into bad type coverage by accident).
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            ROM hacks like Emerald Kaizo add a sixth factor: deliberate adversarial design. These games are built specifically to kill you, with gym leaders carrying EV-trained, held-item-equipped teams using optimal movesets. Standard games don&apos;t reach that ceiling, but some come close.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">Difficulty Tier Rankings</h2>
          <div className="space-y-6">
            {RANKINGS.map((r) => (
              <div key={r.rank} className="bg-white border-2 border-black slasher p-5 md:p-6">
                <div className="inline-block px-3 py-1 mb-3" style={{ backgroundColor: r.color }}>
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">{r.rank}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {r.games.map(g => (
                    <span key={g} className="font-mono text-xs border-2 border-black px-2 py-0.5 bg-cream font-bold">{g}</span>
                  ))}
                </div>
                <p className="font-mono text-sm text-charcoal leading-relaxed">{r.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">The 5 Most Infamous Death Traps</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">These are the fights responsible for the most Nuzlocke wipes across all generations. Know them before you walk in.</p>
          <div className="space-y-4">
            {TRAPS.map((t, i) => (
              <div key={t.name} className="flex gap-4 border-2 border-black p-4">
                <div className="font-grotesk font-bold text-3xl text-black/10 flex-shrink-0 w-8">{i + 1}</div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-black mb-1">{t.name}</h3>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Recommended Progression Order</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">If you&apos;re new to Nuzlocke or returning after a break, don&apos;t start with Kaizo. Here&apos;s the progression path from first-timer to expert:</p>
          <ol className="space-y-3">
            {[
              ["First Nuzlocke", "Pokémon Emerald or Sun/Moon — forgiving curves, good move availability, wide route variety."],
              ["Second run", "Pokémon Platinum — introduces the real difficulty ceiling of mainline games without being unfair."],
              ["Third run", "HeartGold / SoulSilver — the level curve forces careful team management. Whitney is your first real wall."],
              ["Advanced", "Black 2 / White 2 Challenge Mode — the best adversarial mainline game. No ROM hack needed to feel real pressure."],
              ["Expert", "Radical Red Hardcore or Emerald Kaizo — only attempt after completing multiple Advanced runs cleanly."],
            ].map(([stage, desc], i) => (
              <li key={stage as string} className="flex gap-4 bg-white border-2 border-black/10 p-4">
                <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0">{i + 1}</span>
                <div>
                  <span className="font-mono font-bold text-xs text-black uppercase block mb-1">{stage}</span>
                  <span className="font-mono text-xs text-charcoal">{desc}</span>
                </div>
              </li>
            ))}
          </ol>
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
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Ready for Your Nuzlocke?</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Use the Nuzlocke Generator to pre-plan your team and coverage before your run starts.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nuzlocke-generator" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">NUZLOCKE GENERATOR →</Link>
            <Link href="/blog/best-nuzlocke-starters-every-generation" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">BEST STARTERS GUIDE</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
