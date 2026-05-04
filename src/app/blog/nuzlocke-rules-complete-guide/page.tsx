import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuzlocke Rules Explained: Complete Beginner's Guide | randompokemon.co",
  description: "Everything you need to know about Nuzlocke rules — the core ruleset, popular amendments like Dupes Clause and Species Clause, and how to run your first Nuzlocke.",
  keywords: ["nuzlocke rules", "how to nuzlocke", "nuzlocke for beginners", "nuzlocke explained", "nuzlocke dupes clause", "species clause nuzlocke"],
  openGraph: { title: "Nuzlocke Rules: Complete Beginner Guide", description: "Core rules, popular amendments, and setup tips for your first Nuzlocke run.", type: "article" },
  alternates: { canonical: "https://www.randompokemon.co/blog/nuzlocke-rules-complete-guide" },
};
const CORE_RULES = [
  { rule: "Rule 1: Permadeath", desc: "If a Pokémon faints, it is considered dead. It must be released (or permanently boxed, depending on your preference). No revives, no second chances.", why: "This is the defining rule. It turns every wild battle and trainer fight into a risk calculation. Losing a team member you've trained for 10 hours is genuinely painful." },
  { rule: "Rule 2: First Encounter Only", desc: "On each route or area, you may only catch the first wild Pokémon you encounter. If it faints or flees before you can catch it, you get nothing from that route.", why: "Forces variety. You can't grind a specific Pokémon — you get what you get. This creates attachment to unexpected Pokémon and makes every catch meaningful." },
  { rule: "Rule 3: Nicknames (Strongly Recommended)", desc: "Give every Pokémon a nickname. This is technically optional but universally recommended by the community.", why: "Nicknames create emotional investment. Losing 'Percy the Geodude' hits differently than losing 'Geodude #4'." },
];
const CLAUSES = [
  { name: "Dupes Clause", desc: "If the first encounter on a route would be a species you've already caught or seen, you may skip it and encounter the next different species. Prevents your team from becoming all Zubats and Tentacools.", recommended: true },
  { name: "Species Clause", desc: "You may only catch one of each species throughout the whole run. Even if you encounter a second Rattata, you cannot catch it.", recommended: true },
  { name: "Shiny Clause", desc: "If you encounter a shiny Pokémon, you may catch it regardless of whether it's your first encounter on that route. Almost universally adopted.", recommended: true },
  { name: "Set Mode", desc: "Set the battle mode to 'Set' instead of 'Switch'. This means the AI does not give you a warning before sending out the next Pokémon — removing a free switch between kills.", recommended: true },
  { name: "No Items in Battle", desc: "You cannot use Potions, Revives, or other battle items during a fight. Makes every battle more dangerous and forces PP management.", recommended: false },
  { name: "Level Cap", desc: "Your Pokémon cannot exceed the level of the next gym leader's ace Pokémon. Prevents over-levelling your way past challenges.", recommended: false },
];
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
          <p className="font-mono text-xs text-charcoal mb-6">10 min read · Updated May 2025</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed border-l-4 border-black pl-4">
            The Nuzlocke challenge transforms any Pokémon game into a tense, emotionally charged experience. Two core rules create this shift — but the community has developed dozens of amendments that let you tune the difficulty precisely. This guide explains everything from the base rules to optional clauses, so you can set up your first run correctly.
          </p>
        </header>
        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">The Origin of Nuzlocke</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-4">The Nuzlocke challenge was created in 2010 by a webcomic artist who documented a brutally difficult FireRed playthrough under self-imposed rules. The name comes from the comic&apos;s protagonist. The challenge went viral, spawned thousands of community runs, and is now one of the most popular ways to replay Pokémon games.</p>
          <p className="font-mono text-sm text-charcoal leading-relaxed">The original rules were simple — just permadeath and first-encounter. Everything else in this guide is optional, added by the community over 15 years of iteration.</p>
        </section>
        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-6">The 3 Core Rules</h2>
          <div className="space-y-5">
            {CORE_RULES.map((r) => (
              <div key={r.rule} className="bg-white border-2 border-black slasher p-5 md:p-6">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{r.rule}</h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed mb-3">{r.desc}</p>
                <div className="bg-black/5 border-l-4 border-black px-3 py-2">
                  <p className="font-mono text-xs text-charcoal"><strong>Why it works:</strong> {r.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Popular Amendments & Clauses</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed mb-6">These rules are not part of the original Nuzlocke but are used by the majority of the community. We&apos;ve marked which ones are recommended for a first run.</p>
          <div className="space-y-4">
            {CLAUSES.map((c) => (
              <div key={c.name} className="border-2 border-black p-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-mono font-bold text-sm text-black uppercase">{c.name}</h3>
                  {c.recommended ? (
                    <span className="font-mono text-[9px] bg-green-600 text-white px-2 py-0.5 uppercase tracking-widest">Recommended</span>
                  ) : (
                    <span className="font-mono text-[9px] bg-black/20 text-black px-2 py-0.5 uppercase tracking-widest">Optional</span>
                  )}
                </div>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">Setting Up Your First Nuzlocke</h2>
          <ol className="space-y-3">
            {[
              ["Pick your game", "Start with Emerald, FireRed, or Sun/Moon. These have the best early-game pacing and route variety for a first run."],
              ["Set battle mode to Set", "In Options → Battle Style → Set. This removes free switching between kills. Essential for a proper difficulty experience."],
              ["Enable Dupes Clause and Shiny Clause mentally", "These aren't in-game settings — you enforce them yourself. Decide before you start what your personal ruleset is."],
              ["Nickname everything immediately", "Don't wait. Nickname your first Pokémon before the first random encounter. It builds attachment before the losses start."],
              ["Use the Nuzlocke Generator", "Before each gym, use our generator to see what type coverage you might be missing and plan your next route catch accordingly."],
            ].map(([title, body], i) => (
              <li key={title as string} className="flex gap-4 border-2 border-black/10 bg-white p-4">
                <span className="font-grotesk font-bold text-xl text-black/20 flex-shrink-0 w-6">{i + 1}</span>
                <div>
                  <p className="font-mono font-bold text-xs text-black uppercase mb-1">{title}</p>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="font-grotesk font-bold text-2xl text-black uppercase mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              ["Do you have to release fainted Pokémon?", "Releasing is traditional, but &quot;permadeath&quot; can mean permanently boxed and never used again. Both are valid — the community uses both."],
              ["What happens if your whole team faints?", "That&apos;s a Nuzlocke loss — also called a &quot;wipe.&quot; Most players either restart the game entirely or start a new run from scratch. Some continue with box reserves."],
              ["Can you use the PC box?", "Yes, but Pokémon in the box are still &quot;alive.&quot; You can rotate team members freely between battles — just not mid-battle."],
              ["Is there an official Nuzlocke mode in any game?", "No. The Nuzlocke is a community challenge enforced by the player. Some ROM hacks (like Nuzlocke Plus) build it into the game itself."],
            ].map(([q, a]) => (
              <div key={q as string} className="border-2 border-black p-4">
                <h3 className="font-mono font-bold text-sm text-black mb-2">{q}</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed" dangerouslySetInnerHTML={{ __html: a as string }} />
              </div>
            ))}
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
