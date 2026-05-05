import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Zap, ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const STARTER_SPOTLIGHT = [
  { slug: "charizard",   id: 6,   name: "Charizard",   types: ["fire", "flying"]   as const },
  { slug: "blastoise",   id: 9,   name: "Blastoise",   types: ["water"]            as const },
  { slug: "venusaur",    id: 3,   name: "Venusaur",    types: ["grass", "poison"]  as const },
  { slug: "greninja",    id: 658, name: "Greninja",    types: ["water", "dark"]    as const },
  { slug: "incineroar",  id: 727, name: "Incineroar",  types: ["fire", "dark"]     as const },
  { slug: "cinderace",   id: 815, name: "Cinderace",   types: ["fire"]             as const },
  { slug: "meowscarada", id: 908, name: "Meowscarada", types: ["grass", "dark"]    as const },
  { slug: "skeledirge",  id: 910, name: "Skeledirge",  types: ["fire", "ghost"]    as const },
  { slug: "blaziken",    id: 257, name: "Blaziken",    types: ["fire", "fighting"] as const },
  { slug: "empoleon",    id: 395, name: "Empoleon",    types: ["water", "steel"]   as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Starter Pokemon Generator | Random Starter Picker All Generations",
  description: "Generate random Starter Pokemon from all 9 generations. All 27 starter lines from Bulbasaur to Sprigatito. Perfect for Nuzlockes and challenge runs. Updated 2026.",
  keywords: ["starter pokemon generator", "random starter pokemon", "starter pokemon randomizer", "pokemon starter picker", "random starter picker all generations", "starter pokemon all gens"],
  alternates: { canonical: `${siteUrl}/starter-pokemon-generator` },
  openGraph: { title: "Starter Pokemon Generator | Random Starter Picker All Gens", description: "Generate random Starter Pokemon from all 9 generations!", url: `${siteUrl}/starter-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Starter Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Starter Pokemon Generator | Random Starter Picker", description: "Generate random Starter Pokemon from all 9 generations!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Starter Pokemon Generator",
  description: "Generate random Starter Pokemon from all 9 generations. All 27 starter lines.",
  url: `${siteUrl}/starter-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many starter Pokemon are there?", acceptedAnswer: { "@type": "Answer", text: "There are 27 starter Pokemon (9 trios) across 9 generations, from Bulbasaur/Charmander/Squirtle to Sprigatito/Fuecoco/Quaxly. Pikachu and Eevee are also starters in Pokemon Yellow and Let's Go respectively." } },
    { "@type": "Question", name: "What is the best starter Pokemon of all time?", acceptedAnswer: { "@type": "Answer", text: "Competitively: Greninja (Protean/Battle Bond, 122 Speed) and Blaziken (Speed Boost, banned to Ubers) are the strongest. For playthroughs: Mudkip (only 1 weakness), Totodile, and Froakie are consistently top-ranked." } },
    { "@type": "Question", name: "Which starter type is best — Fire, Water, or Grass?", acceptedAnswer: { "@type": "Answer", text: "Water starters statistically win most playthroughs — good STAB, wide coverage, and solid bulk. Fire starters often have the highest offensive stats. Grass starters face the hardest early gyms and are considered the highest difficulty run." } },
    { "@type": "Question", name: "What is the strongest starter final evolution?", acceptedAnswer: { "@type": "Answer", text: "Meowscarada has 123 Speed (fastest starter ever). Greninja has 122. Blaziken with Speed Boost is banned to Ubers. Empoleon (Water/Steel) has the most type resistances. Swampert (Water/Ground) has only 1 weakness." } },
    { "@type": "Question", name: "Which starter has the highest base stat total?", acceptedAnswer: { "@type": "Answer", text: "All final starter evolutions share 530 BST. The difference is in stat distribution: Blaziken and Infernape prioritize Speed and Attack, while Empoleon and Feraligatr prioritize Defense and HP." } },
    { "@type": "Question", name: "Who is the most popular starter Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Greninja won The Pokemon Company's 2016 Global Popularity Poll. Charmander/Charizard is consistently the most popular starter in fan polls. Incineroar dominated VGC competitive play for multiple consecutive seasons as the most-used Pokemon." } },
    { "@type": "Question", name: "What are the best starters for a Nuzlocke?", acceptedAnswer: { "@type": "Answer", text: "Best Nuzlocke starters: Mudkip/Swampert (Water/Ground, only 1 weakness), Piplup/Empoleon (Water/Steel, many resistances), Fuecoco/Skeledirge (Fire/Ghost, most defensive starter), Fennekin/Delphox (strong Psychic coverage). Avoid Chikorita and Snivy early." } },
    { "@type": "Question", name: "What starter has the most unique final evolution type?", acceptedAnswer: { "@type": "Answer", text: "Most unique type combinations: Greninja (Water/Dark), Incineroar (Fire/Dark), Decidueye (Grass/Ghost in S/V), Empoleon (Water/Steel), Sceptile-Mega (Grass/Dragon), Charizard-Mega X (Fire/Dragon), Meowscarada (Grass/Dark)." } },
    { "@type": "Question", name: "Which starters have the best Hidden Abilities?", acceptedAnswer: { "@type": "Answer", text: "Best HA starters: Serperior (Contrary — Leaf Storm raises Sp. Atk instead of lowering it), Blaziken (Speed Boost — banned Ubers), Greninja (Protean — free STAB on every move), Rillaboom (Grassy Surge — priority Grassy Glide), Cinderace (Libero — same as Protean)." } },
    { "@type": "Question", name: "What happens if you want to get all three starters?", acceptedAnswer: { "@type": "Answer", text: "Normally you receive one starter per save. To get all three: use multiple save files, trade with other players or game versions, transfer via Pokemon HOME, receive from events, or breed with a Ditto of a different language for Masuda Method eggs." } },
    { "@type": "Question", name: "What does this Starter Pokemon Generator do?", acceptedAnswer: { "@type": "Answer", text: "This free generator randomly picks starter Pokemon from all 9 generations. Filter by generation or type (Fire/Water/Grass), or get a complete random starter trio. Perfect for challenge runs, Nuzlockes, fan-made leagues, and anyone who wants a fresh starter challenge." } },
  ],
};

// All starter data by generation
const STARTERS_BY_GEN = [
  { gen: "GEN 1 — KANTO", games: "Red / Blue / Yellow", starters: ["Bulbasaur (Grass/Poison)", "Charmander (Fire)", "Squirtle (Water)"] },
  { gen: "GEN 2 — JOHTO", games: "Gold / Silver / Crystal", starters: ["Chikorita (Grass)", "Cyndaquil (Fire)", "Totodile (Water)"] },
  { gen: "GEN 3 — HOENN", games: "Ruby / Sapphire / Emerald", starters: ["Treecko (Grass)", "Torchic (Fire/Fighting)", "Mudkip (Water/Ground)"] },
  { gen: "GEN 4 — SINNOH", games: "Diamond / Pearl / Platinum", starters: ["Turtwig (Grass)", "Chimchar (Fire/Fighting)", "Piplup (Water/Steel)"] },
  { gen: "GEN 5 — UNOVA", games: "Black / White", starters: ["Snivy (Grass)", "Tepig (Fire/Fighting)", "Oshawott (Water)"] },
  { gen: "GEN 6 — KALOS", games: "Pokemon X / Y", starters: ["Chespin (Grass/Fighting)", "Fennekin (Fire/Psychic)", "Froakie (Water/Dark)"] },
  { gen: "GEN 7 — ALOLA", games: "Sun / Moon / USUM", starters: ["Rowlet (Grass/Ghost)", "Litten (Fire/Dark)", "Popplio (Water/Fairy)"] },
  { gen: "GEN 8 — GALAR", games: "Sword / Shield", starters: ["Grookey (Grass)", "Scorbunny (Fire)", "Sobble (Water)"] },
  { gen: "GEN 9 — PALDEA", games: "Scarlet / Violet", starters: ["Sprigatito (Grass/Dark)", "Fuecoco (Fire/Ghost)", "Quaxly (Water/Fighting)"] },
];

export default function StarterPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Starter Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">STARTER POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Starter Pokemon</strong> from all 9 generations. All 27 starter lines from Bulbasaur to Sprigatito. Perfect for randomized Nuzlockes and challenge runs.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient
          hideHero={true}
          hideGenericContent={true}
          defaultIds={[
            1, 4, 7,       // Gen 1: Bulbasaur, Charmander, Squirtle
            152, 155, 158, // Gen 2: Chikorita, Cyndaquil, Totodile
            252, 255, 258, // Gen 3: Treecko, Torchic, Mudkip
            387, 390, 393, // Gen 4: Turtwig, Chimchar, Piplup
            495, 498, 501, // Gen 5: Snivy, Tepig, Oshawott
            650, 653, 656, // Gen 6: Chespin, Fennekin, Froakie
            722, 725, 728, // Gen 7: Rowlet, Litten, Popplio
            810, 813, 816, // Gen 8: Grookey, Scorbunny, Sobble
            906, 909, 912, // Gen 9: Sprigatito, Fuecoco, Quaxly
          ]}
        />
        <PokemonSpotlight
          pokemon={STARTER_SPOTLIGHT}
          heading="Top Starter Final Evolutions"
          badge="STARTERS"
        />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          {/* All Starters Reference */}
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">ALL STARTERS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">EVERY STARTER BY GENERATION</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {STARTERS_BY_GEN.map(gen => (
                <div key={gen.gen} className="bg-white border-2 border-black p-4 slasher">
                  <h3 className="font-mono font-bold text-xs text-black uppercase mb-1">{gen.gen}</h3>
                  <p className="font-mono text-[10px] text-charcoal/60 mb-2">{gen.games}</p>
                  <ul className="space-y-1">
                    {gen.starters.map(s => <li key={s} className="font-mono text-xs text-charcoal">• {s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BEST STARTERS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">TOP STARTER POKEMON RANKED</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">🏆 COMPETITIVE TIER</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Greninja</strong> (Gen 6) — 122 Spe, Protean/Battle Bond. Banned in VGC.</p>
                  <p><strong>Blaziken</strong> (Gen 3) — Speed Boost. Banned to Ubers.</p>
                  <p><strong>Cinderace</strong> (Gen 8) — Libero + Court Change combo.</p>
                </div>
              </div>
              {[
                { title: "🎮 BEST FOR PLAYTHROUGHS", content: "Mudkip (1 weakness only), Totodile (powerful Water STAB early), Froakie (fast + great coverage), Piplup (Water/Steel final type)." },
                { title: "🌱 GRASS STARTERS RANKED", content: "Sceptile (fastest), Meganium (defensive), Decidueye (Grass/Ghost unique), Rillaboom (Grassy Surge), Sprigatito → Meowscarada (Grass/Dark, 123 Spe)." },
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal leading-relaxed">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }, { href: "/shiny-pokemon-generator", label: "SHINY POKEMON", desc: "Ultra rare variants" }, { href: "/kanto-pokemon-generator", label: "KANTO (GEN 1)", desc: "Original 151" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">STARTER POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many starter Pokemon are there?", a: "There are 27 starter Pokemon (9 trios) across 9 generations, from Bulbasaur/Charmander/Squirtle to Sprigatito/Fuecoco/Quaxly. Pikachu and Eevee are also starters in Pokemon Yellow and Let's Go." },
                { q: "What is the best starter Pokemon of all time?", a: "Competitively: Greninja (Protean/Battle Bond, 122 Speed) and Blaziken (Speed Boost, banned to Ubers). For playthroughs: Mudkip (1 weakness), Totodile, and Froakie are consistently top-rated." },
                { q: "Which starter type is best?", a: "Water starters statistically win most playthroughs — reliable STAB, wide coverage, and good bulk. Fire starters have the highest offense. Grass starters face the hardest early gyms and are considered the highest difficulty." },
                { q: "What is the strongest starter final evolution?", a: "Meowscarada has 123 Speed (fastest starter ever). Greninja has 122. Blaziken with Speed Boost is banned to Ubers. Empoleon (Water/Steel) has the most type resistances. Swampert has only 1 weakness." },
                { q: "Which starter has the highest BST?", a: "All final starter evolutions share 530 BST. The difference is in stat distribution: Blaziken and Infernape prioritize Speed/Attack; Empoleon and Feraligatr prioritize Defense/HP." },
                { q: "Who is the most popular starter Pokemon?", a: "Greninja won The Pokemon Company's 2016 Global Popularity Poll. Charmander/Charizard is most popular in fan polls. Incineroar dominated VGC competitive play for multiple consecutive seasons as the most-used Pokemon worldwide." },
                { q: "What are the best starters for a Nuzlocke?", a: "Best picks: Mudkip/Swampert (1 weakness), Piplup/Empoleon (many resistances), Fuecoco/Skeledirge (most defensive), Fennekin/Delphox (strong Psychic coverage). Avoid Chikorita and Snivy for early-game type disadvantages." },
                { q: "What starter has the most unique final type combo?", a: "Most unique types: Greninja (Water/Dark), Incineroar (Fire/Dark), Decidueye (Grass/Ghost), Empoleon (Water/Steel), Sceptile-Mega (Grass/Dragon), Charizard-Mega X (Fire/Dragon), Meowscarada (Grass/Dark)." },
                { q: "Which starters have the best Hidden Abilities?", a: "Best HA: Serperior (Contrary — Leaf Storm raises Sp. Atk), Blaziken (Speed Boost — banned Ubers), Greninja (Protean — free STAB), Rillaboom (Grassy Surge — priority Grassy Glide), Cinderace (Libero — same as Protean)." },
                { q: "How do I get all three starters?", a: "Normally one starter per save. To get all three: use multiple save files, trade with other players, transfer via Pokemon HOME, receive from events, or breed with a Ditto of a different language (Masuda Method)." },
                { q: "What does this Starter Pokemon Generator do?", a: "This free generator randomly picks starter Pokemon from all 9 generations. Filter by generation or type (Fire/Water/Grass), or get a complete random starter trio. Perfect for challenge runs, Nuzlockes, fan leagues, and anyone wanting a fresh starter challenge." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}

            </div>
          </section>
        </div>
      </main>
    </>
  );
}
