import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";

const PokemonGeneratorClient = dynamic(
  () => import("../PokemonGeneratorClient")
);

const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Hoenn Pokemon Generator | Gen 3 Random Team Builder (Ruby/Sapphire/Emerald)",
  description:
    "Generate random Hoenn Pokemon teams from Generation 3 (#252-386). Ruby, Sapphire, Emerald & ORAS. 135 species including the Weather Trio, Mega Evolutions and the Regi trio. Updated 2026.",
  keywords: [
    "hoenn pokemon generator",
    "gen 3 random team generator",
    "hoenn pokemon team builder",
    "ruby sapphire team generator",
    "hoenn randomizer",
    "weather trio generator",
    "gen 3 nuzlocke generator",
    "emerald team builder",
    "hoenn pokemon picker",
  ],
  alternates: {
    canonical: `${siteUrl}/hoenn-pokemon-generator`,
  },
  openGraph: {
    title: "Hoenn Pokemon Generator | Gen 3 Random Team Builder",
    description:
      "Generate random Hoenn Pokemon from Gen 3! Ruby, Sapphire & Emerald including the Weather Trio.",
    url: `${siteUrl}/hoenn-pokemon-generator`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hoenn Pokemon Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoenn Pokemon Generator | Gen 3 Random Team Builder",
    description: "Generate random Hoenn Pokemon from Gen 3! Weather Trio included.",
    images: ["/og-image.png"],
  },
};

const hoennJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hoenn Pokemon Generator",
  description: "Random Hoenn Pokemon generator — 135 species from Ruby, Sapphire & Emerald. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/hoenn-pokemon-generator`,
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  datePublished: "2024-11-15",
  dateModified: "2026-01-13",
  isPartOf: { "@type": "WebApplication", name: "Random Pokemon Generator", url: siteUrl },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const hoennFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Hoenn?", acceptedAnswer: { "@type": "Answer", text: "Hoenn introduced 135 new Pokemon (#252-386), bringing the total to 386. The regional Hoenn Pokedex in RSE contains 202 Pokemon, while ORAS expanded it significantly with a national dex approach." } },
    { "@type": "Question", name: "Which Hoenn starter is the best?", acceptedAnswer: { "@type": "Answer", text: "Mudkip/Swampert is easiest for playthroughs — it has only one weakness (Grass). Competitively, Blaziken with Speed Boost is banned to Ubers. Mega Sceptile becomes Grass/Dragon, giving it a unique typing." } },
    { "@type": "Question", name: "What is the Weather Trio?", acceptedAnswer: { "@type": "Answer", text: "Kyogre (Water, Drizzle — makes it rain permanently), Groudon (Ground, Drought — summons harsh sunlight), and Rayquaza (Dragon/Flying, Air Lock — negates weather). They have Primal Reversion forms in ORAS with 770 BST each for Kyogre and Groudon." } },
    { "@type": "Question", name: "What's the difference between Ruby/Sapphire and Emerald?", acceptedAnswer: { "@type": "Answer", text: "Emerald has both Team Aqua and Magma as antagonists, access to both Kyogre and Groudon post-game, the Battle Frontier (the best post-game challenge facility), animated battle sprites, and a rematch feature for all trainers." } },
    { "@type": "Question", name: "How do you catch Rayquaza in Gen 3?", acceptedAnswer: { "@type": "Answer", text: "In RSE, Rayquaza is at level 70 at the top of Sky Pillar. In Emerald, you catch it during the story to stop Kyogre and Groudon. In ORAS, catching Rayquaza is required by the story and it is shiny-locked." } },
    { "@type": "Question", name: "What are the best Hoenn Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Hoenn picks: Mega Rayquaza (banned, 780 BST), Primal Kyogre/Groudon (Ubers), Salamence (OU Dragon), Metagross (OU Steel/Psychic), Blaziken (Speed Boost, Ubers), Latios/Latias (Dragon/Psychic), and Breloom (Spore + Mach Punch combo)." } },
    { "@type": "Question", name: "What new features did Gen 3 introduce?", acceptedAnswer: { "@type": "Answer", text: "Gen 3 introduced: the Ability system (two abilities per species), Nature system (affects stat growth), Pokemon Contests, Secret Bases, the Physical/Special distinction (not yet split by move, but by type), double battles, and running shoes." } },
    { "@type": "Question", name: "What are Secret Bases in Hoenn?", acceptedAnswer: { "@type": "Answer", text: "Secret Bases are customizable hideouts created using Secret Power on trees, indentations, or shrubs. Players can decorate them with furniture and dolls. ORAS expanded Secret Bases with online sharing and the ability to battle other players' bases." } },
    { "@type": "Question", name: "What are the games set in the Hoenn region?", acceptedAnswer: { "@type": "Answer", text: "Hoenn games: Pokemon Ruby, Sapphire (2002, GBA), Pokemon Emerald (2004, GBA), and remakes Omega Ruby & Alpha Sapphire (2014, 3DS). ORAS added the Delta Episode post-game, Mega Evolutions for all starters, soaring mechanics, and Battle Maison." } },
    { "@type": "Question", name: "What is the Hoenn Pokemon Generator best used for?", acceptedAnswer: { "@type": "Answer", text: "This free generator picks random Hoenn Pokemon (#252-386) for team building, Nuzlocke challenge planning, randomizer ROM preparation, draft leagues, and competitive team discovery. Filter by type, evolution stage, or exclude legendaries to customize your results." } },
    { "@type": "Question", name: "Who are the Hoenn Elite Four?", acceptedAnswer: { "@type": "Answer", text: "Hoenn Elite Four: Sidney (Dark), Phoebe (Ghost), Glacia (Ice), Drake (Dragon). Champion Steven Stone uses Mega Metagross in ORAS with a full Steel-type team. In Emerald, Wallace becomes Champion and Steven is a post-game optional battle." } },
  ],
};

export default function HoennPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hoennJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hoennFaqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Hoenn Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">
            HOENN RANDOM TEAM GENERATOR
          </h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Hoenn Pokemon teams</strong> from Generation 3 (#252-386).
            Ruby, Sapphire, Emerald &amp; ORAS. 135 species including the legendary Weather Trio and pseudo-legendaries Salamence &amp; Metagross.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Hoenn" />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE HOENN REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Hoenn</strong> is the third region in the Pokemon series, featured in Pokemon Ruby, Sapphire, and Emerald (2002-2004) and their 3DS remakes Omega Ruby and Alpha Sapphire (2014). Based on Kyushu, Japan, Hoenn is known for its tropical climate, abundant water routes, and the legendary Weather Trio.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              The ORAS remakes added Mega Evolutions for all three starters, soaring mechanics (fly freely over Hoenn on Mega Latios/Latias), the Delta Episode post-game featuring Rayquaza and Deoxys, and brought back the beloved Secret Base system with online sharing.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { label: "135 NEW POKEMON", desc: "#252 Treecko to #386 Deoxys" },
                { label: "ABILITIES SYSTEM", desc: "First gen to introduce abilities" },
                { label: "DOUBLE BATTLES", desc: "Introduced as a standard format" },
              ].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3>
                  <p className="font-mono text-xs text-charcoal">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOENN LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">?? WEATHER TRIO (BOX LEGENDARIES)</h3>
                <div className="space-y-1 font-mono text-xs text-charcoal">
                  <p><strong>Kyogre</strong> (#382) — Water, Drizzle. Primal form in ORAS (770 BST, Primordial Sea).</p>
                  <p><strong>Groudon</strong> (#383) — Ground, Drought. Primal form: Ground/Fire (770 BST, Desolate Land).</p>
                  <p><strong>Rayquaza</strong> (#384) — Dragon/Flying, Air Lock. Mega: highest BST (780). No Mega Stone needed — eats meteorites.</p>
                </div>
              </div>
              {[
                { title: "REGI TRIO", content: "Regirock (#377), Regice (#378), Registeel (#379). Catchable via Braille puzzle. Regieleki & Regidrago added in Crown Tundra DLC." },
                { title: "EON DUO (LATIAS/LATIOS)", content: "Latias (#380) & Latios (#381) — Dragon/Psychic. Both get Mega Evolutions in ORAS. One roams Hoenn post-game." },
                { title: "MYTHICALS", content: "Jirachi (#385) — Steel/Psychic, 600 BST. Deoxys (#386) — Psychic, has 4 forms (Normal/Attack/Defense/Speed). Attack Forme has 150 Atk and 150 Sp. Atk." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3>
                  <p className="font-mono text-xs text-charcoal">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAN FAVORITES</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">POPULAR HOENN POKEMON</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "HOENN STARTERS", desc: "Treecko?Sceptile (Grass, Mega: Grass/Dragon), Torchic?Blaziken (Fire/Fighting, Speed Boost — banned Ubers), Mudkip?Swampert (Water/Ground, only 1 weakness)." },
                { title: "PSEUDO-LEGENDARIES", desc: "Salamence (Dragon/Flying, 600 BST, Mega in ORAS) and Metagross (Steel/Psychic, 600 BST, Mega in ORAS). Both are top competitive picks." },
                { title: "WATER TYPES", desc: "Wailord (largest Pokemon by size), Sharpedo (Mega in ORAS), Milotic (hardest to evolve in Gen 3 from Feebas via max Beauty stat), Gyarados (Water/Flying)." },
                { title: "GHOST & DARK", desc: "Sableye (no weaknesses before Fairy type), Absol (Mega in ORAS, 130 Atk), Banette (Mega in ORAS, 165 Atk — highest Mega Attack stat at release)." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.title}</h3>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST HOENN POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">S-TIER / UBERS (TOO STRONG)</h3>
                <p className="font-mono text-xs text-charcoal">Mega Rayquaza (780 BST), Kyogre, Groudon (especially Primal forms), Deoxys-Attack, Blaziken (Speed Boost)</p>
              </div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">A-TIER / OU (OVERUSED)</h3>
                <p className="font-mono text-xs text-charcoal">Salamence, Metagross, Latios, Latias, Breloom (Spore + Mach Punch), Skarmory</p>
              </div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">B-TIER / UU/RU (UNDERUSED)</h3>
                <p className="font-mono text-xs text-charcoal">Swampert, Gardevoir, Flygon, Aggron, Absol, Milotic, Claydol</p>
              </div>
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">TRIVIA</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOENN REGION FUN FACTS</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "GAME FEATURES", desc: "Introduced Abilities, Double Battles, Natures, Weather Effects, Pokemon Contests, and the EV/IV system in a visible form for the first time." },
                { title: "MEGA EVOLUTIONS", desc: "ORAS introduced 20+ Megas including all 3 starters. Mega Rayquaza doesn't need a Mega Stone — it Mega Evolves by knowing Dragon Ascent." },
                { title: "TOO MUCH WATER?", desc: "IGN's infamous 7.8/10 review of ORAS criticized it for 'too much water', becoming a lasting community meme and inside joke among Pokemon fans." },
                { title: "LEGENDARY TRUMPETS", desc: "The Hoenn soundtrack's liberal use of trumpets became iconic. 'Too many trumpets' is a fan-favorite joke alongside 'too much water'." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.title}</h3>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">
              EXPLORE MORE <span className="text-marigold">GENERATORS</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: "/kanto-pokemon-generator", label: "KANTO (GEN 1)", desc: "Original 151" },
                { href: "/johto-pokemon-generator", label: "JOHTO (GEN 2)", desc: "Gold & Silver" },
                { href: "/sinnoh-pokemon-generator", label: "SINNOH (GEN 4)", desc: "Diamond & Pearl" },
                { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" },
              ].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group">
                  <h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3>
                  <p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOENN POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Hoenn?", a: "Hoenn introduced 135 new Pokemon (#252-386), bringing the total to 386. The regional Pokedex in RSE contains 202 Pokemon, while ORAS expanded availability significantly with a national dex approach." },
                { q: "Which Hoenn starter is the best?", a: "Mudkip/Swampert is easiest for playthroughs (only one weakness: Grass). Competitively, Blaziken with Speed Boost is banned to Ubers. Mega Sceptile is Grass/Dragon — a unique offensive typing." },
                { q: "What's the difference between Ruby/Sapphire and Emerald?", a: "Emerald has both Team Aqua and Magma, access to both Kyogre and Groudon post-game, the Battle Frontier, and animated Pokemon sprites. It's considered the definitive Hoenn experience." },
                { q: "How do you catch Rayquaza?", a: "In RSE, Rayquaza is at Sky Pillar. In Emerald, you catch it during the story to stop Kyogre and Groudon. In ORAS, it's story-required, shiny-locked, and Mega Evolves via Dragon Ascent." },
                { q: "What are Secret Bases?", a: "Customizable hideouts created using Secret Power on trees, bushes, or indentations. ORAS expanded this with online sharing, allowing players to visit and battle other players' bases around the world." },
                { q: "What are the best Hoenn Pokemon for a Nuzlocke?", a: "Strong Nuzlocke picks: Swampert (reliable Water/Ground), Breloom (Spore for catching), Flygon (Dragon/Ground, immune to Electric), Gardevoir (powerful Psychic/Fairy), Tentacruel (Water/Poison wall), Pelliper (Water/Flying)." },
                { q: "What new mechanics did Gen 3 introduce?", a: "Gen 3 introduced: the Ability system (each species gets 1-2 abilities like Intimidate, Levitate), Nature system (25 natures each boosting one stat and lowering another by 10%), Pokemon Contests, Secret Bases, and the first proper Pokemon Box system for storage." },
                { q: "How does Mega Rayquaza compare to other legendaries?", a: "Mega Rayquaza has 780 BST — tied with Mega Mewtwo X and Y for the highest non-Eternamax BST. Its Dragon Ascent signature move and ability Delta Stream protect its Flying type from weaknesses, making it the strongest Mega Evolution ever printed." },
                { q: "Who is the Hoenn Champion?", a: "Steven Stone is the Champion in Ruby/Sapphire and uses a Mega Metagross in ORAS. In Pokemon Emerald, Wallace (formerly Sootopolis Gym Leader) becomes Champion, and Steven is an optional post-game battle at Meteor Falls." },
                { q: "What is the Hoenn Pokemon Generator best used for?", a: "This free online tool generates random Hoenn Pokemon (#252-386) for team building, Nuzlocke challenge planning, randomizer ROM preparation, draft league pool creation, and competitive team discovery. Filter by type, exclude legendaries, or set evolution stage restrictions." },
                { q: "What is Feebas and why is it hard to find?", a: "Feebas (#349) is a Water-type Pokemon that only appears on a handful of specific tiles on Route 119 in RSE. It evolves into Milotic (one of the most beautiful Pokemon) by maximizing its Beauty condition via Pokeblocks in Gen 3, or by leveling up with a Prism Scale in modern games." },
              ].map(faq => (
                <details key={faq.q} className="bg-white border-2 border-black p-4 slasher group">
                  <summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary>
                  <p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

