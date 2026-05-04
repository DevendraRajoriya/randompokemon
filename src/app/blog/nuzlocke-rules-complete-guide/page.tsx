import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuzlocke Rules Explained: Complete Beginner's Guide | randompokemon.co",
  description: "Everything you need to know about Nuzlocke rules — the core ruleset, popular amendments like Dupes Clause and Species Clause, and how to run your first Nuzlocke.",
  keywords: ["nuzlocke rules", "how to nuzlocke", "nuzlocke for beginners", "nuzlocke explained", "nuzlocke dupes clause", "species clause nuzlocke"],
  openGraph: { title: "Nuzlocke Rules: Complete Beginner Guide", description: "Core rules, popular amendments, and setup tips for your first Nuzlocke run.", type: "article", url: "https://www.randompokemon.co/blog/nuzlocke-rules-complete-guide", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nuzlocke Rules Complete Guide" }] },
  twitter: { card: "summary_large_image", title: "Nuzlocke Rules: Complete Beginner Guide", description: "Core rules, popular amendments, and setup tips for your first Nuzlocke run.", images: ["/og-image.png"] },
  alternates: { canonical: "https://www.randompokemon.co/blog/nuzlocke-rules-complete-guide" },
};

export default function NuzlockeRulesGuide() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="text-black/30">/</li>
            <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            <li className="text-black/30">/</li>
            <li className="text-black font-bold">Nuzlocke Rules Guide</li>
          </ol>
        </nav>
        <header className="mb-10">
          <div className="inline-block bg-red-600 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">NUZLOCKE</span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black uppercase tracking-tight leading-tight mb-4">
            Nuzlocke Rules Explained: Complete Guide for Beginners
          </h1>
          <p className="font-mono text-xs text-charcoal mb-6">10 min read · Updated May 2026</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            The Nuzlocke challenge transforms any Pokémon game into a tense, emotionally charged experience. Two core rules create this shift — but the community has developed dozens of amendments that let you tune the difficulty precisely. This guide explains everything from the base rules to optional clauses, so you can set up your first run correctly.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">The Origin of Nuzlocke</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">The Nuzlocke challenge was created in 2010 by a webcomic artist who documented a brutally difficult FireRed playthrough under self-imposed rules. The name comes from the comic&apos;s protagonist — a Nuzleaf nicknamed &quot;Nuzlocke&quot; that became symbolic of the run&apos;s brutal early-game losses. The challenge went viral, spawned thousands of community runs, and is now one of the most popular ways to replay Pokémon games.</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">The original rules were simple — just permadeath and first-encounter. Everything else in this guide is optional, added by the community over 15 years of iteration. The beauty of the Nuzlocke is that you can tune the difficulty precisely to your skill level by choosing which amendments to include.</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">Today, the Nuzlocke community is one of the largest in competitive gaming culture. Streamers, YouTubers, and casual players run thousands of Nuzlockes per month across every Pokémon game ever released. The format&apos;s emotional stakes make it one of the most entertaining formats to watch and play.</p>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">The 3 Core Nuzlocke Rules</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">These are the original two rules plus one near-universal community addition. Every standard Nuzlocke uses all three of these.</p>
          <div className="space-y-5">
            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Rule 1: Permadeath</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">If a Pokémon faints, it is considered dead. It must be released — or permanently boxed, depending on your preference. No revives, no second chances. A fainted Pokémon never participates in battle again for the rest of the run.</p>
              <div className="bg-black/5 border-l-4 border-black px-3 py-2">
                <p className="font-mono text-xs text-charcoal"><strong>Why it works:</strong> This is the defining rule. It turns every wild battle and trainer fight into a risk calculation. Losing a team member you&apos;ve trained for 10 hours is genuinely painful — and that emotional weight is what makes the Nuzlocke format so compelling.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Rule 2: First Encounter Only</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">On each route or area, you may only catch the first wild Pokémon you encounter. If it faints or flees before you can catch it, you get nothing from that route. This applies to every area — caves, water routes, buildings with wild encounters, and all outdoor routes.</p>
              <div className="bg-black/5 border-l-4 border-black px-3 py-2">
                <p className="font-mono text-xs text-charcoal"><strong>Why it works:</strong> Forces variety. You can&apos;t grind a specific Pokémon — you get what you get. This creates attachment to unexpected Pokémon and makes every catch meaningful. It also prevents the common cheating behaviour of soft-resetting for better first encounters.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black slasher p-5 md:p-6">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">Rule 3: Nicknames (Strongly Recommended)</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">Give every Pokémon a nickname immediately upon catching it. This is technically optional in the original rules but is universally recommended by the community and used by virtually every Nuzlocke player. Nickname before the first battle, not after several.</p>
              <div className="bg-black/5 border-l-4 border-black px-3 py-2">
                <p className="font-mono text-xs text-charcoal"><strong>Why it works:</strong> Nicknames create emotional investment. Losing &quot;Percy the Geodude&quot; hits differently than losing &quot;Geodude #4&quot;. The psychological impact of permadeath is dramatically amplified by nicknames — which is the whole point.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Popular Nuzlocke Amendments &amp; Clauses</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">These rules are not part of the original Nuzlocke but are used by the majority of the community. We&apos;ve marked which ones are recommended for a first run. Many veteran players use all six of these clauses as standard.</p>
          <div className="space-y-4">
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">Dupes Clause</h3>
                <span className="font-mono text-[9px] bg-green-600 text-white px-2 py-0.5 uppercase tracking-widest">Recommended</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">If the first encounter on a route would be a species you&apos;ve already caught or seen, you may skip it and encounter the next different species. Prevents your team from becoming all Zubats in Mt. Moon and all Tentacools in ocean routes. Essential for team variety in cave-heavy games like FireRed and Platinum.</p>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">Species Clause</h3>
                <span className="font-mono text-[9px] bg-green-600 text-white px-2 py-0.5 uppercase tracking-widest">Recommended</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">You may only catch one of each species throughout the whole run. Even if you encounter a second Rattata, you cannot catch it. Ensures you always have maximum team diversity and prevents accidentally building a team of six Zubat evolutions.</p>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">Shiny Clause</h3>
                <span className="font-mono text-[9px] bg-green-600 text-white px-2 py-0.5 uppercase tracking-widest">Recommended</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">If you encounter a shiny Pokémon, you may catch it regardless of whether it&apos;s your first encounter on that route. Almost universally adopted by the community — turning down a shiny in a Nuzlocke because of the first-encounter rule feels unfair to most players.</p>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">Set Mode</h3>
                <span className="font-mono text-[9px] bg-green-600 text-white px-2 py-0.5 uppercase tracking-widest">Recommended</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Set the battle mode to &quot;Set&quot; instead of &quot;Switch&quot; in the Options menu. This means the AI does not give you a warning before sending out the next Pokémon — removing a free switch between kills. Standard Nuzlocke etiquette requires this setting to prevent exploiting the free switch for type advantage on every knock-out.</p>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">No Items in Battle</h3>
                <span className="font-mono text-[9px] bg-black/20 text-black px-2 py-0.5 uppercase tracking-widest">Optional</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">You cannot use Potions, Revives, or other battle items during a fight. Makes every battle more dangerous and forces PP management and careful switching. This is a significant difficulty spike — recommended only for players who have already completed at least one standard Nuzlocke.</p>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-mono font-bold text-sm text-black uppercase">Level Cap</h3>
                <span className="font-mono text-[9px] bg-black/20 text-black px-2 py-0.5 uppercase tracking-widest">Optional</span>
              </div>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Your Pokémon cannot exceed the level of the next gym leader&apos;s ace Pokémon. Prevents over-levelling your way past challenges by grinding endlessly on wild Pokémon. This amendment is popular in the competitive community but adds significant micromanagement to each route.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Setting Up Your First Nuzlocke</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">Follow these steps before you start your first Nuzlocke run to avoid common beginner mistakes that can cause a run to fail before it really begins.</p>
          <ol className="space-y-3">
            <li className="flex gap-4 border-2 border-black/10 bg-white p-4">
              <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">1</span>
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Pick your game</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Start with Emerald, FireRed, or Sun/Moon. These have the best early-game pacing and route variety for a first run. Avoid HeartGold/SoulSilver for your first Nuzlocke — Whitney&apos;s Miltank has ended more first runs than any other single trainer fight.</p>
              </div>
            </li>
            <li className="flex gap-4 border-2 border-black/10 bg-white p-4">
              <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">2</span>
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Set battle mode to Set</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">In Options → Battle Style → Set. This removes the free switching between kills. Essential for a proper difficulty experience. Without this setting, you get a major advantage on every trainer fight that the original rules didn&apos;t account for.</p>
              </div>
            </li>
            <li className="flex gap-4 border-2 border-black/10 bg-white p-4">
              <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">3</span>
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Decide your clauses before you start</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Dupes Clause and Shiny Clause are not in-game settings — you enforce them yourself. Decide before the first route what your personal ruleset is and write it down. Changing the rules mid-run when it becomes convenient is widely considered cheating in the community.</p>
              </div>
            </li>
            <li className="flex gap-4 border-2 border-black/10 bg-white p-4">
              <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">4</span>
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Nickname everything immediately</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Don&apos;t wait. Nickname your first Pokémon before the first random encounter. It builds attachment before the losses start. The emotional weight of permadeath is what makes the format work — nicknames are the key mechanism that creates that weight.</p>
              </div>
            </li>
            <li className="flex gap-4 border-2 border-black/10 bg-white p-4">
              <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">5</span>
              <div>
                <p className="font-mono font-bold text-xs text-black uppercase mb-1">Use the Pokémon Generator to plan coverage</p>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Before each gym, use our generator to see what type coverage you might be missing and plan your next route catch accordingly. Knowing which type you need before entering a route dramatically reduces the chance of getting a useless first encounter.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">Do you have to release fainted Pokémon?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Releasing is traditional, but &quot;permadeath&quot; can mean permanently boxed and never used again. Both are valid — the community uses both interpretations. The key is that fainted Pokémon never return to battle. Many players prefer boxing to releasing because it preserves the memory of fallen teammates.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">What happens if your whole team faints?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">That&apos;s a Nuzlocke loss — also called a &quot;wipe.&quot; Most players either restart the game entirely or start a new run from scratch. Some continue with box reserves, though this is considered a softer version of the rules. The majority of the community treats a full team wipe as a complete run failure.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">Can you use the PC box?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Yes, but Pokémon in the box are still &quot;alive.&quot; You can rotate team members freely between battles — just not mid-battle. Many players use the box strategically to rest injured Pokémon before gym fights and bring in fresh team members for difficult encounters.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">Is there an official Nuzlocke mode in any game?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">No. The Nuzlocke is a community challenge enforced by the player. Some ROM hacks (like Nuzlocke Plus) build it into the game itself with automatic handling of the rules. Mainline Pokémon games have never officially acknowledged the Nuzlocke format despite its enormous popularity.</p>
            </div>
            <div className="border-2 border-black p-4">
              <h3 className="font-mono font-bold text-sm text-black mb-2">What is the easiest Nuzlocke to complete as a beginner?</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Pokémon Sun or Moon with standard rules (permadeath, first encounter, nicknames) and no optional clauses. The EXP Share makes early grinding less punishing, the level curve is gentle, and the totem Pokémon fights give warning before major spikes. Avoid Platinum and HGSS for your first attempt.</p>
            </div>
          </div>
        </section>

        <section className="mb-10 border-2 border-black p-6 slasher bg-white">
          <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
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
          <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">Start Your Nuzlocke</h2>
          <p className="font-mono text-sm text-white/70 mb-6">Use the Nuzlocke Generator to pre-plan your team coverage before your run begins.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nuzlocke-generator" className="bg-marigold text-black font-mono font-bold text-xs px-6 py-3 border-2 border-marigold hover:bg-yellow-400 transition-colors slasher">NUZLOCKE GENERATOR →</Link>
            <Link href="/blog/best-nuzlocke-starters-every-generation" className="bg-transparent text-white font-mono font-bold text-xs px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors slasher">BEST STARTERS GUIDE</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
