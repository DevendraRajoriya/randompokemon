import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Shield, Target, TrendingUp, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Random Pokemon Nuzlocke Generator | Free Challenge Tool All 9 Generations",
  description: "The ultimate Pokemon Nuzlocke generator with advanced filters for all 9 generations. Generate starter trios, simulate encounters, and build challenge teams. Free forever!",
  keywords: ["pokemon nuzlocke generator", "nuzlocke team generator", "pokemon nuzlocke tool", "nuzlocke challenge generator", "pokemon nuzlocke randomizer", "best nuzlocke generator"],
  alternates: { canonical: `${siteUrl}/nuzlocke-generator` },
  openGraph: { title: "Pokemon Nuzlocke Generator | Free Challenge Tool", description: "The ultimate Nuzlocke generator for all 9 generations. Free!", url: `${siteUrl}/nuzlocke-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Nuzlocke Generator" }] },
  twitter: { card: "summary_large_image", title: "Pokemon Nuzlocke Generator | Free Challenge Tool", description: "Generate Nuzlocke teams for all 9 generations!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Pokemon Nuzlocke Generator",
  description: "Generate Nuzlocke challenge teams for all 9 Pokemon generations.",
  url: `${siteUrl}/nuzlocke-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a Nuzlocke challenge?", acceptedAnswer: { "@type": "Answer", text: "A Nuzlocke has two core rules: any Pokemon that faints must be released (permadeath), and you can only catch the first Pokemon encountered on each route." } },
    { "@type": "Question", name: "What is a Hardcore Nuzlocke?", acceptedAnswer: { "@type": "Answer", text: "Hardcore Nuzlocke adds: no items in battle, no overleveling (level caps per gym), and set mode. The most difficult self-imposed challenge." } },
    { "@type": "Question", name: "Which Pokemon game is best for Nuzlocke?", acceptedAnswer: { "@type": "Answer", text: "Pokemon Emerald and Platinum are fan favorites. Black/White 2 is considered the hardest official game. FireRed is popular for beginners." } },
  ],
};

export default function NuzlockeGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Nuzlocke Generator</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
              RANDOM POKEMON NUZLOCKE<br />GENERATOR
            </h1>
            <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed mb-6">
              Built specifically for Nuzlocke challenge runs. Generate starter trios, simulate route encounters, and create backup teams for fallen Pokemon across all 9 generations.
             Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
            <Link href="/" className="inline-block btn-hover-lift">
              <div className="bg-black hover:bg-charcoal text-white font-grotesk font-bold text-base px-10 py-4 border-4 border-black slasher transition-smooth flex items-center gap-3">
                <Zap size={20} />
                START GENERATING TEAMS
              </div>
            </Link>
          </div>

          {/* What is Nuzlocke */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">THE CHALLENGE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT IS A NUZLOCKE?</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              A <strong>Nuzlocke</strong> is a set of self-imposed rules that transforms any Pokemon game into an intense survival challenge. Named after a webcomic, these rules are the most popular Pokemon challenge format worldwide.
            </p>
            <div className="space-y-3">
              {[
                { icon: "❌", label: "PERMADEATH", desc: "If a Pokemon faints, it's considered dead and must be released or permanently boxed." },
                { icon: "✓", label: "FIRST ENCOUNTER ONLY", desc: "You may only catch the first Pokemon encountered on each route or area." },
                { icon: "✓", label: "NICKNAME RULE", desc: "All caught Pokemon must be nicknamed to build emotional attachment." },
              ].map(rule => (
                <div key={rule.label} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                  <span className="font-mono font-bold text-lg">{rule.icon}</span>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{rule.label}</h3>
                    <p className="font-mono text-xs text-charcoal">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Use */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FEATURES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHY USE OUR NUZLOCKE GENERATOR</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: Shield, label: "STARTER TRIO SIMULATION", desc: "Generate random starter trios for ROM hacks, fan games, or theoretical Nuzlocke planning. Filter by gen, type, and evolution stage." },
                { icon: Target, label: "ROUTE ENCOUNTER TABLES", desc: "Simulate route encounters by region. Perfect for planning runs or creating custom encounter lists for randomizer playthroughs." },
                { icon: TrendingUp, label: "REPLACEMENT GENERATOR", desc: "When Pokemon faint, quickly generate replacements matching your challenge rules: no legendaries, specific region, type restrictions." },
                { icon: Zap, label: "ALL 1025 POKEMON", desc: "Complete database through Gen 9 including Scarlet/Violet DLC. Filter by region, type, rarity, evolution stage, and more." },
              ].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={18} className="text-black" />
                    <h3 className="font-mono font-bold text-sm text-black uppercase">{item.label}</h3>
                  </div>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">HOW TO USE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOW TO USE FOR NUZLOCKE RUNS</h2>
            <div className="space-y-3">
              {[
                { step: "01", title: "GENERATE STARTER OPTIONS", desc: "Set team size to 3, select \"Unevolved\" in evolution filters, exclude legendaries. Simulates a starter trio for your Nuzlocke." },
                { step: "02", title: "SIMULATE ROUTE ENCOUNTERS", desc: "Select your game's region (Kanto for FireRed, Paldea for Scarlet/Violet), set team size to 1, and generate per route." },
                { step: "03", title: "PLAN MONOTYPE RUNS", desc: "Select a single type (Fire, Water, Dragon) to generate themed Nuzlocke teams. Perfect for monotype challenge variations." },
                { step: "04", title: "HARDCORE MODE", desc: "Exclude all legendary, mythical, and paradox Pokemon for pure hardcore Nuzlocke runs with only standard Pokemon." },
              ].map(step => (
                <div key={step.step} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                  <span className="font-mono font-bold text-2xl text-black/20 leading-none">{step.step}</span>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{step.title}</h3>
                    <p className="font-mono text-xs text-charcoal">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nuzlocke Variants */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">VARIANTS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">POPULAR NUZLOCKE VARIANTS</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "HARDCORE NUZLOCKE", desc: "Standard rules + no items in battle + level caps per gym. The ultimate difficulty test." },
                { title: "SOUL LINK", desc: "Two players with linked Pokemon pairs. If one player's Pokemon dies, both must release their pair." },
                { title: "WEDLOCKE", desc: "Pokemon are paired as 'couples' and can only switch with their partner. Adds strategic depth." },
                { title: "RANDOMIZER NUZLOCKE", desc: "Use our generator to pre-plan teams before starting a randomizer ROM. Adapt on the fly." },
              ].map(variant => (
                <div key={variant.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{variant.title}</h3>
                  <p className="font-mono text-xs text-charcoal">{variant.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Pokemon */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">STRATEGY</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST POKEMON FOR NUZLOCKE</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "HIGH HP TANKS", desc: "Chansey, Snorlax, Blissey — tank hits and survive close calls." },
                { title: "FAST SWEEPERS", desc: "Gengar, Starmie, Alakazam — strike first to prevent deaths." },
                { title: "FLYING TYPES", desc: "Crobat, Staraptor — immune to Ground, great type coverage." },
                { title: "WATER TYPES", desc: "Gyarados, Swampert — versatile, few weaknesses, great stats." },
                { title: "STEEL TYPES", desc: "Magnezone, Metagross — resist 10+ types, defensive walls." },
                { title: "DUAL STAB", desc: "Garchomp, Lucario — offensive coverage with dual STAB variety." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3>
                  <p className="font-mono text-xs text-charcoal">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-8 bg-black border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/draft-league-generator", label: "DRAFT LEAGUE", desc: "Competitive draft tool" }, { href: "/starter-pokemon-generator", label: "STARTER PICKER", desc: "All 27 starters" }, { href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }, { href: "/", label: "ALL REGIONS", desc: "Full generator" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group">
                  <h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3>
                  <p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">NUZLOCKE FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What is a Nuzlocke challenge?", a: "Core Nuzlocke rules: permadeath (release or box Pokemon when they faint) and first-encounter-only (catch only the first Pokemon per route). Nicknaming Pokemon is strongly encouraged to build emotional attachment." },
                { q: "What is a Hardcore Nuzlocke?", a: "Hardcore adds three extra rules: no items in battle, Set mode only (no switching before opponent sends next Pokemon), and level caps equal to each Gym Leader's ace Pokemon. It is the hardest standard format." },
                { q: "Which game is best for a first Nuzlocke?", a: "Pokemon FireRed, Emerald, or HeartGold & SoulSilver are the most popular beginner picks. They have excellent encounter variety, manageable difficulty curves, and aren't as punishing as Black 2/White 2 or Platinum." },
                { q: "Can I use legendaries in a Nuzlocke?", a: "By standard rules yes — if the legendary is your first encounter on a route, you can catch it. Most players self-impose a 'no legendary' clause for fairness and extra challenge. Some runs specifically ban all legendaries and mythicals." },
                { q: "What are common Nuzlocke rules variations?", a: "Popular optional rules: Species Clause (no duplicates), Shiny Clause (always catch shinies regardless of encounter rule), Dupes Clause (ignore duplicate species on routes), Gifted Pokemon Clause (decide before run if gifts like Eevee count), and Gift Ball Clause (gifted Pokemon always kept)." },
                { q: "What are the hardest Nuzlocke games?", a: "Hardest Nuzlocke games: Black 2 & White 2 (massive trainer variety, strong opponents), Platinum (Cynthia's Garchomp is infamous), FireRed (tight encounter pool), Violet/Scarlet (open world breaks level scaling), and any randomizer ROM." },
                { q: "What is the Nuzlocke Generator for?", a: "This generator helps Nuzlocke players by randomly assigning their encounter slots, deciding random starters, generating team compositions for draft formats, or simulating what a randomizer might give them." },
                { q: "How do I handle PC boxes in a Nuzlocke?", a: "Pokemon in the PC are considered 'alive' and can be used anytime. Many players keep a rotating bench of 6 active Pokemon. Some rulesets say 'the PC is the graveyard' and ban boxing fainted Pokemon — depositing them means they are dead." },
                { q: "What is a Wedlocke?", a: "A Wedlocke is a Nuzlocke variant created by content creator marriland where Pokemon are paired into couples (male + female). Couples can only switch with each other, and when one dies, the partner must fight solo until its mate is replaced." },
                { q: "What is the best starter for a Nuzlocke?", a: "Best Nuzlocke starters: Mudkip/Swampert (Water/Ground, only 1 weakness), Piplup/Empoleon (Water/Steel, many resistances), Fuecoco/Skeledirge (Fire/Ghost, most defensive), Cyndaquil/Typhlosion (fast and strong throughout). Avoid Chikorita and Snivy early on." },
                { q: "Are there Nuzlocke rules for newer games like Scarlet/Violet?", a: "Yes, but open-world games require custom rule adaptations. A common approach for S/V: set the Nuzlocke order by Gym Badge level order, enforce level caps at each badge, and treat each distinct area (city, route, town) as one encounter zone." },
              ].map(faq => (
                <details key={faq.q} className="bg-white border-2 border-black p-4 slasher group">
                  <summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary>
                  <p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p>
                </details>
              ))}

            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
            <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">
              READY TO START YOUR<br />NUZLOCKE CHALLENGE?
            </h2>
            <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Generate your team now. Free forever. No signup required.</p>
            <Link href="/" className="inline-block btn-hover-lift">
              <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
                LAUNCH GENERATOR →
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
