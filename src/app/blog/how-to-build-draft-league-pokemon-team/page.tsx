import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build a Draft League Pokémon Team | Strategy Guide",
  description: "Draft order strategy, tier valuation, role coverage, win conditions, and counter-drafting — a full system for dominating your Pokémon Draft League season.",
  keywords: ["how to build draft league pokemon team", "pokemon draft league strategy", "pokemon draft league tips", "draft league tier list", "how to win draft league pokemon"],
  openGraph: { title: "How to Build a Draft League Pokémon Team", description: "Complete draft order strategy, tier valuation, and team building system for Pokémon Draft Leagues.", type: "article", url: "https://www.randompokemon.co/blog/how-to-build-draft-league-pokemon-team", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Build a Draft League Pokemon Team" }] },
  twitter: { card: "summary_large_image", title: "How to Build a Draft League Pokémon Team", description: "Complete draft order strategy, tier valuation, and team building system for Pokémon Draft Leagues.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog/how-to-build-draft-league-pokemon-team" },
};

export default function DraftLeagueGuide() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="text-black/30">/</li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Draft League Guide</li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="inline-block bg-blue-600 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">DRAFT LEAGUE</span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight mb-4">
            How to Build a Draft League Pokémon Team
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">14 min read · Updated May 2026</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            Pokémon Draft League is half team-building, half psychology. You&apos;re not just picking the strongest Pokémon — you&apos;re building a coherent system, reading your opponents&apos; needs, and making value decisions under pressure. This guide covers role prioritisation, draft order strategy, counter-drafting, and how to identify your team&apos;s win condition before the first game.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">What Is a Pokémon Draft League?</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            In a Draft League, each player selects a roster of Pokémon from a shared pool using a snake draft format. Once the draft is complete, players compete in a regular season using only their drafted team — typically picking 6 from their full roster for each match.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The format varies by league (point-based, Swiss, round-robin), but the drafting principles are consistent. Unlike standard singles or VGC, you can&apos;t just run the current meta team — you need to build a functional, internally consistent system from whatever you draft. This is what makes Draft League uniquely strategic — the team-building challenge starts before the first battle.
          </p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            Use our <Link href="/draft-league-generator" className="underline text-black font-bold hover:text-charcoal">Draft League Generator</Link> to randomise picks and simulate draft scenarios before your real draft day. Planning your draft order in advance — knowing which roles you need and which rounds to fill them — is the single biggest predictor of Draft League success.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">The 7 Team Roles You Need to Cover</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">Before you draft a single Pokémon, internalise these roles. A complete team covers at least 5 of these 7 functions — the other 2 can be handled by overlap.</p>
          <div className="space-y-4">
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Physical Sweeper</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">High Attack + Speed. Aims to set up (Swords Dance, Dragon Dance) and sweep through weakened teams. Examples: Garchomp, Weavile, Dragonite.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Pick 1–2. Over-drafting sweepers creates a team with no defensive backbone.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Special Sweeper</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">High Sp. Atk. Often paired with Choice Specs or Nasty Plot. Examples: Gholdengo, Volcarona, Iron Moth.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Pick 1. One per team is standard. Two special sweepers means your offense is too concentrated.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Hazard Setter</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">Sets Stealth Rock, Spikes. This is the highest-value non-attacking role in draft leagues. Examples: Glimmora, Great Tusk, Hippowdon.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Draft early if no one takes it. Hazard control dictates pace of entire series.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Speed Control</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">Tailwind setters, Trick Room setters, and paralysis spreaders. Controls which team gets priority in late-game cleaning.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Pick 1. Often overlooked in early drafts — you can steal strong value in mid-rounds.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Cleric / Hazard Control</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">Aromatherapy or Heal Bell user + Rapid Spin or Defog. Removes status and entry hazards. Examples: Blissey, Corviknight, Mandibuzz.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Need at least 1 Defog/Spin user. Hazard control is as important as hazard setting.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Physical Wall</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">High Defense + HP. Stops opposing physical sweepers cold. Examples: Garganacl, Corviknight, Hippowdon.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Draft 1 solid physical wall. Two is redundant unless your meta is heavily physical.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Special Wall</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed mb-2">High Sp. Def. Handles opposing special attackers. Examples: Blissey, Clodsire, Goodra-Hisui.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-1.5">
                <p className="font-mono text-xs text-blue-800"><strong>Draft value:</strong> Draft 1. Blissey is often available mid-draft and anchors many passive team styles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Draft Order Strategy</h2>
          <div className="space-y-3">
            <div className="flex gap-4 border-2 border-black p-4">
              <div className="w-1.5 bg-blue-600 flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Rounds 1–2: Anchor picks</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Draft your highest-value wallbreaker or sweeper first, then immediately draft your hazard setter or physical wall. These two picks define your team&apos;s identity for the whole season. Don&apos;t panic-draft coverage here — secure your top-tier anchor and let the rest of the draft build around it.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black p-4">
              <div className="w-1.5 bg-blue-600 flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Rounds 3–4: Coverage and depth</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Now fill the roles your first two picks don&apos;t cover. If you went offensive in rounds 1–2, round 3 is your physical wall or cleric. If defensive, round 3 is your wallbreaker. By the end of round 4, you should have a viable core that can theoretically complete a match, even if it&apos;s not optimised yet.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black p-4">
              <div className="w-1.5 bg-blue-600 flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Rounds 5–6: Speed and glue</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Speed control, a Rapid Spinner, a Pivot (U-turn/Volt Switch), or a revenge killer. These picks make the difference between a team that functions and one that just has 6 strong Pokémon. A pivot in particular is undervalued — the ability to maintain momentum freely is worth more than a 6th attacker in most match-ups.</p>
              </div>
            </div>
            <div className="flex gap-4 border-2 border-black p-4">
              <div className="w-1.5 bg-blue-600 flex-shrink-0 self-stretch" />
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Rounds 7+: Niche counters</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Now you know your opponents&apos; rosters are taking shape. Pick specifically to punish what they&apos;ve drafted. An answer to their primary win condition is worth more than your 7th attacker. In small leagues where you play the same opponents multiple times, targeted counter-picks in late rounds can win entire series before a single battle is played.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">5 Common Draft League Mistakes</h2>
          <div className="space-y-3">
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <p className="font-mono font-bold text-xs text-red-800 uppercase mb-1">✗ Drafting 6 attackers</p>
              <p className="font-mono text-xs text-red-700 leading-relaxed">Without a wall, cleric, or hazard setter, you&apos;ll get chipped to death by priority moves and entry hazards in every series. Offensive teams need defensive support to function — without it, every opposing hazard setter will control your entire game plan from turn one.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <p className="font-mono font-bold text-xs text-red-800 uppercase mb-1">✗ Not counter-drafting</p>
              <p className="font-mono text-xs text-red-700 leading-relaxed">If your opponent picks a weather setter in round 2, draft the weather immunity answer in round 3. Reactive drafting beats predictive drafting in small leagues. Knowing your opponents&apos; preferred strategies before the draft begins is one of the most underrated preparation steps in any Draft League format.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <p className="font-mono font-bold text-xs text-red-800 uppercase mb-1">✗ Ignoring speed tiers</p>
              <p className="font-mono text-xs text-red-700 leading-relaxed">If your fastest Pokémon is 95 Speed and the meta has multiple 100+ Speed threats, you lose the speed war every game. Know the Speed tiers in your draft pool and ensure you have at least one Pokémon that can outspeed the fastest threats your opponents are likely to draft.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <p className="font-mono font-bold text-xs text-red-800 uppercase mb-1">✗ Over-valuing BST</p>
              <p className="font-mono text-xs text-red-700 leading-relaxed">A 650 BST Pokémon with 4 weaknesses and no recovery is often worse than a 500 BST mon with recovery, hazard control, and one weakness. BST doesn&apos;t win draft leagues — role coverage, type synergy, and reliable recovery do. Blissey (BST 540) beats many 600+ BST Pokémon as a team anchor because of what it does for the team as a whole.</p>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <p className="font-mono font-bold text-xs text-red-800 uppercase mb-1">✗ Forgetting win conditions</p>
              <p className="font-mono text-xs text-red-700 leading-relaxed">Every team needs a way to actually win the game — not just survive. A team with 6 walls and 1 attacker has no win condition against stall. Before the draft ends, ask yourself: how does this team close out a 50-50 game? If you can&apos;t answer that question clearly, you need to rethink your last few picks.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Win Conditions: What&apos;s Your Plan to Actually Win?</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">
            The most important question in draft league is: how does my team win? Not &quot;how does it not lose&quot; — but how does it actively close out a series? Every strong draft league team has one primary win condition and one secondary:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-2">Setup Sweep</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">One Pokémon sets up (Dragon Dance, Swords Dance), cleans up weakened threats. Needs hazards and chip damage support. The most common win condition in Draft League because it&apos;s reliable when the opponent has already used their check to that Pokémon.</p>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-2">Hazard Stack + Wallbreaker</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Rapidly stack hazards, then send in a wallbreaker that forces switches every turn, wearing the opponent down. This win condition is slower but extremely reliable against defensive teams that have no way to remove hazards.</p>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-2">Weather Win</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Set sun, rain, sand, or snow. Your whole team synergises with one weather condition. Works if you draft well around the setter — three or more Pokémon that benefit from the weather makes this win condition self-consistent and difficult to disrupt.</p>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <p className="font-mono font-bold text-xs text-black uppercase mb-2">Trick Room</p>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Slow, high-power Pokémon attack first under Trick Room. Counters many speed-based strategies when executed cleanly. Requires at least two Trick Room setters to prevent the strategy from collapsing if the primary setter is removed early.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">FAQ</h2>
          <div className="space-y-3">
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">What is the best Pokémon to draft first overall?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">In most draft pools, the best first-overall pick is either a high-BST wallbreaker (Garchomp, Dragapult, Iron Valiant) or a hazard setter that doubles as an offensive threat (Great Tusk, Glimmora). The key is picking a Pokémon that defines your team identity and forces opponents to react to you, rather than the reverse.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">How many Pokémon are drafted per team?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Most leagues draft 10–12 Pokémon per team, with players selecting 6 for each individual match. The larger roster allows you to prepare different team compositions for specific opponents throughout the season, which is one of the most important strategic layers of Draft League that beginners often overlook.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">What is counter-drafting in Pokémon Draft League?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Counter-drafting means using your draft picks to specifically answer threats your opponents have already taken. If someone takes a rain setter in round 2, you pick a Pokémon with Drought or a strong Water resist in round 3 to negate their primary win condition. In small leagues where you know your opponents&apos; preferences, counter-drafting can win entire series before the first battle.</p>
            </div>
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
            <Link href="/blog/pokemon-randomizer-tips-beginners" className="block border-2 border-black/20 p-4 hover:bg-marigold hover:border-black transition-all group">
              <span className="font-mono text-[10px] text-charcoal/60 uppercase tracking-widest block mb-1 group-hover:text-black/60">Randomizer</span>
              <p className="font-mono font-bold text-sm text-black leading-snug group-hover:text-black">Pokémon Randomizer Tips &amp; Tricks for Beginners</p>
            </Link>
          </div>
        </section>
        <section className="bg-black slasher p-8 text-center">
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Simulate Your Draft</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Use the Draft League Generator to randomise picks and test team composition before your real draft day.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/draft-league-generator" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">DRAFT LEAGUE GENERATOR →</Link>
            <Link href="/blog" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">MORE GUIDES</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
