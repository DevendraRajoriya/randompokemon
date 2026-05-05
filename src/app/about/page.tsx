import type { Metadata } from "next";
import Link from "next/link";
import { Code, Trophy, Target, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "About Us - Random Pokemon Generator | Our Mission & Story",
  description: "Learn about the Random Pokemon Generator — the world's leading free Pokemon database and team builder. All 1,025 Pokemon across 9 generations. Built by fans, for fans. Supporting Nuzlocke, Draft Leagues, and more since 2024.",
  keywords: ["about random pokemon generator", "pokemon team builder", "nuzlocke tool", "pokemon database", "fan made pokemon tool"],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: { title: "About Us - Random Pokemon Generator", description: "The world's leading free Pokemon database and team builder. Built by fans, for fans worldwide.", url: `${siteUrl}/about`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Random Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "About Us - Random Pokemon Generator", description: "The world's leading free Pokemon database and team builder. Built by fans, for fans worldwide.", images: ["/og-image.png"] },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">About</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BUILT BY FANS, FOR FANS</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
            ABOUT RANDOM<br />POKEMON GENERATOR
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed">
            The world&apos;s leading free POKEMON database and team builder — all 1,025 species across 9 generations, completely free, forever.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">OUR MISSION</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT WE&apos;RE BUILDING</h2>
          <div className="space-y-4 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6">
              Random POKEMON Generator was created to solve a simple problem: trainers needed a fast, free, and reliable way to generate random POKEMON teams for challenge runs, competitive preparation, and creative gameplay. Every existing tool was either paywalled, riddled with ads, slow, or limited to a handful of generations. We built the tool we always wanted — and made it free for everyone.
            </p>
            <p className="border-l-4 border-black pl-6">
              We believe POKEMON team building should be accessible to every trainer, regardless of device, location, or budget. There are no premium tiers, no paywalls, no sign-up walls, and no hidden costs — every filter, every feature, and every POKEMON is available to everyone on every visit. Our mission is to provide the most comprehensive, fast, and user-friendly POKEMON generator on the internet, permanently free.
            </p>
            <p className="border-l-4 border-black pl-6">
              Our database covers all <strong className="text-black">1,025 POKEMON</strong> across <strong className="text-black">9 generations</strong> — from Bulbasaur (#0001) through Pecharunt (#1025) — including all regional forms (Alolan, Galarian, Hisuian, Paldean variants), Mega Evolutions, Gigantamax forms, Paradox POKEMON (Iron and Ancient forms), Ultra Beasts, and all Scarlet &amp; Violet DLC additions from the Teal Mask and Indigo Disk. The database is sourced from <strong className="text-black">PokeAPI</strong> and updated within 48 hours of any new official release.
            </p>
          </div>
        </section>

        {/* Features — static, no .map() */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FEATURES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT WE OFFER</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">⚡ INSTANT TEAM GENERATION</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Generate random POKEMON teams of 1–6 in milliseconds. All randomisation runs client-side in your browser — no server round-trip, no lag, no wait. Results are instant every time regardless of your device or connection speed.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">🌐 COMPREHENSIVE DATABASE</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">All 1,025 POKEMON with complete base stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed), types, abilities, height, weight, egg groups, growth rates, capture rates, and Pokédex flavor text from every game they appear in. Data sourced directly from PokeAPI.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">🎯 SMART FILTERING</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Filter by all 18 POKEMON types, 9 regions, evolution stage (unevolved, middle, final), rarity (include or exclude Legendary, Mythical, Paradox, Ultra Beast, Sub-Legendary), and gender. Lock individual POKEMON and regenerate the rest. Every combination of filters works together instantly.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">🃏 POKEMON CARD GENERATOR</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Create premium stat cards for any of the 1,025 POKEMON — featuring official artwork, type-matched colour gradients, full base stat bars, and ability listings. Download as high-resolution PNG (2160×2700px) for social media, printing, or sharing. Free, no watermark.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">📖 COMPLETE POKÉDEX</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Browse all 1,025 species with full detail pages per POKEMON — base stats, type effectiveness chart (all 18 matchups), complete evolution chain, Smogon competitive tier rating, generation learnset data, and physical profile. The most complete free Pokédex available online.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">📱 MOBILE-FIRST DESIGN</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Fully responsive across all screen sizes — phones, tablets, laptops, and desktops. Tested on iOS Safari, Android Chrome, Firefox Mobile, and Samsung Internet. All touch targets are 44px+ for comfortable tapping. No separate mobile app needed.</p>
            </div>
          </div>
        </section>

        {/* Use Cases — static */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USE CASES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">PERFECT FOR</h2>
          <div className="space-y-3">
            <div className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-mono font-bold text-lg flex-shrink-0">⚔️</span>
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">NUZLOCKE CHALLENGE RUNS</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Generate a random starter trio (set size to 3, filter Unevolved only, exclude Legendaries), simulate route encounter tables by region, and quickly replace fallen POKEMON under your run&apos;s specific rules. Our dedicated <Link href="/nuzlocke-generator" className="text-black underline font-bold">Nuzlocke Generator</Link> page covers Hardcore, Soul Link, Wedlocke, and Randomiser variants.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-mono font-bold text-lg flex-shrink-0">🏆</span>
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">DRAFT LEAGUES</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Create balanced draft pools for competitive POKEMON Draft Leagues and tournaments. Filter by type and rarity tier to build fair, diverse draft pools. Our <Link href="/draft-league-generator" className="text-black underline font-bold">Draft League Generator</Link> is used by league organisers worldwide to create unpredictable, exciting pools for multi-week competitive formats.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-mono font-bold text-lg flex-shrink-0">🎲</span>
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">RANDOMISER PLAYTHROUGHS</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Preview potential team compositions before starting a ROM randomiser run. Plan type coverage strategies, identify weaknesses in advance, and prepare for the unexpected. Filter by the same generation as your randomiser to keep encounters realistic and true to your challenge format.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-mono font-bold text-lg flex-shrink-0">🎮</span>
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">CONTENT CREATION</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Streamers, YouTubers, and POKEMON content creators use our generator to introduce genuinely random, unpredictable elements into their content. The live generator is engaging to watch in real time, and the POKEMON Card Generator produces high-quality, shareable graphics for thumbnails and posts.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-mono font-bold text-lg flex-shrink-0">✨</span>
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">CASUAL DISCOVERY</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">Discover POKEMON you&apos;ve never used before and break out of your comfort zone. With 1,025 species across 9 generations, there are always overlooked gems. Many players find their new favourite POKEMON through a random roll — that&apos;s the magic of discovery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values — static */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">VALUES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">OUR VALUES</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔓 ALWAYS FREE</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">No premium tiers, no paywalls, no hidden costs, no freemium limits. Every POKEMON, every filter, every tool — free forever. We will never monetise features behind a subscription. This is a promise to the POKEMON community.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔒 PRIVACY FIRST</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">We do not collect personal data. No account required, no tracking cookies, no user profiles. All generator logic runs in your browser — your team choices never leave your device and are never sent to our servers.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">⚡ SPEED & PERFORMANCE</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Lightning-fast generation with zero unnecessary overhead. POKEMON data is cached locally so repeat visits are instant. The tool is built with Next.js and server-side rendering for fast first loads on any device, anywhere in the world.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🌍 GLOBAL ACCESSIBILITY</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Works on any device, any modern browser, in any country. POKEMON has no borders — neither does our tool. The site is accessible in English with full keyboard navigation and screen reader support throughout.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">📱 MOBILE-FRIENDLY</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Fully responsive design from 320px mobile screens to 4K monitors. The same experience — same features, same speed, same design — on phone, tablet, or desktop. No feature is hidden or locked behind a screen size.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🎨 CLEAN DESIGN</h3>
              <p className="font-mono text-xs text-charcoal leading-relaxed">Brutalist aesthetics — high contrast, sharp borders, zero visual clutter. Every design decision serves the user&apos;s goal: find a POKEMON, build a team, get out. We respect your time and your screen real estate.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">THE TEAM</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">MEET THE TEAM</h2>
          <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">Our team combines decades of POKEMON experience with modern web development expertise. We are active trainers, competitive players, Nuzlocke enthusiasts, and Draft League competitors who use this tool every day — because we built the tool we always wanted to exist.</p>
          <div className="space-y-3">
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Code size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Devendra Rajoriya — Lead Developer</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">POKEMON Database Architect &amp; Full-Stack Developer</p>
              <p className="font-mono text-xs text-charcoal mb-3">15+ years of POKEMON experience since Diamond and Pearl. Completed 28 mainline games including all remakes and spin-offs. Achieved a Platinum Hardcore Nuzlocke with zero deaths (2022) and Masterball tier in VGC 2024. Built the entire Random POKEMON Generator platform from scratch — database architecture, front-end, performance optimisation, and SEO.</p>
              <div className="flex gap-2">
                <a href="https://github.com/DevendraRajoriya" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 py-1 border-2 border-black hover:bg-charcoal text-xs font-mono slasher">GitHub →</a>
                <a href="https://x.com/MisterLezend" target="_blank" rel="noopener noreferrer" className="bg-cream text-black px-3 py-1 border-2 border-black hover:bg-marigold text-xs font-mono slasher">X →</a>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Trophy size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Alex &quot;NuzlockeMaster&quot; Chen</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">Nuzlocke Strategy Consultant &amp; Content Contributor</p>
              <p className="font-mono text-xs text-charcoal">12+ years of Nuzlocke challenges across every generation. 50+ successful runs including multiple Hardcore completions of Black 2 &amp; White 2, Platinum, and FireRed. Creator of &quot;The Ultimate Nuzlocke Ruleset&quot; — the most widely adopted optional ruleset in the community. YouTube channel with 45,000+ subscribers covering challenge runs, tier lists, and competitive analysis.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Target size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Jordan &quot;DraftKing&quot; Martinez</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">Competitive POKEMON Analyst &amp; Draft League Specialist</p>
              <p className="font-mono text-xs text-charcoal">10+ years of competitive POKEMON play. Top 500 globally on POKEMON Showdown. 8 Draft League championship titles across multiple formats. Founded the Premier Draft League — a 200+ player competitive community — and contributed the Draft League Generator&apos;s pool balancing logic and format recommendations.</p>
            </div>
          </div>
        </section>

        {/* Tools overview */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">OUR TOOLS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">EXPLORE ALL TOOLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <Link href="/" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">⚡ RANDOM GENERATOR</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">All 1,025 POKEMON · Gen 1–9</p>
            </Link>
            <Link href="/pokedex" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">📖 POKÉDEX</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Full stats, moves, type charts</p>
            </Link>
            <Link href="/pokemon-card-generator" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">🃏 CARD GENERATOR</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Download HD POKEMON cards</p>
            </Link>
            <Link href="/nuzlocke-generator" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">⚔️ NUZLOCKE TOOL</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Challenge run generator</p>
            </Link>
            <Link href="/draft-league-generator" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">🏆 DRAFT LEAGUE</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Competitive pool builder</p>
            </Link>
            <Link href="/pokemon-quiz" className="bg-white border-2 border-black p-4 slasher hover:bg-black hover:text-white transition-all group">
              <h3 className="font-mono font-bold text-xs text-black group-hover:text-white uppercase mb-1">❓ POKEMON QUIZ</h3>
              <p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">What POKEMON are you?</p>
            </Link>
          </div>
          <p className="font-mono text-xs text-charcoal leading-relaxed">
            Every tool on <strong className="text-black">randompokemon.co</strong> is built with the same principles: fast, free, no account required, and mobile-friendly. Whether you need a <Link href="/shiny-pokemon-generator" className="text-black underline font-bold">Shiny POKEMON Generator</Link>, a <Link href="/legendary-pokemon-generator" className="text-black underline font-bold">Legendary Generator</Link>, or regional generators for <Link href="/kanto-pokemon-generator" className="text-black underline font-bold">Kanto</Link>, <Link href="/johto-pokemon-generator" className="text-black underline font-bold">Johto</Link>, <Link href="/hoenn-pokemon-generator" className="text-black underline font-bold">Hoenn</Link>, <Link href="/sinnoh-pokemon-generator" className="text-black underline font-bold">Sinnoh</Link>, <Link href="/unova-pokemon-generator" className="text-black underline font-bold">Unova</Link>, <Link href="/kalos-pokemon-generator" className="text-black underline font-bold">Kalos</Link>, <Link href="/alola-pokemon-generator" className="text-black underline font-bold">Alola</Link>, <Link href="/galar-pokemon-generator" className="text-black underline font-bold">Galar</Link>, or <Link href="/paldea-pokemon-generator" className="text-black underline font-bold">Paldea</Link> — every tool is one click away.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">JOIN OUR<br />COMMUNITY</h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Thousands of trainers worldwide trust Random POKEMON Generator for Nuzlockes, Draft Leagues, and team discovery. Start generating teams today. Free forever.</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">START GENERATING →</div>
          </Link>
          <div className="mt-6"><Link href="/contact" className="font-mono text-xs text-white/60 hover:text-white underline transition-colors">Have questions? Contact us →</Link></div>
        </section>

      </div>
    </main>
  );
}
