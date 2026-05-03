import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Paldea Pokemon Generator | Gen 9 Random Team Builder (Scarlet/Violet)",
  description: "Generate random Paldea Pokemon teams from Generation 9 (#906-1025). Scarlet & Violet including Koraidon, Miraidon, Paradox Pokemon, Terastallize, and Teal Mask DLC. Updated 2026.",
  keywords: ["paldea pokemon generator", "gen 9 random team generator", "paldea pokemon team builder", "scarlet violet team generator", "paldea randomizer", "gen 9 nuzlocke generator", "paradox pokemon generator", "terastallize team builder"],
  alternates: { canonical: `${siteUrl}/paldea-pokemon-generator` },
  openGraph: { title: "Paldea Pokemon Generator | Gen 9 Random Team Builder", description: "Generate random Paldea Pokemon from Gen 9! Scarlet & Violet.", url: `${siteUrl}/paldea-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Paldea Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Paldea Pokemon Generator | Gen 9 Random Team Builder", description: "Generate random Paldea Pokemon from Gen 9!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Paldea Pokemon Generator",
  description: "Random Paldea Pokemon generator — 120 species from Scarlet & Violet. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/paldea-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Paldea?", acceptedAnswer: { "@type": "Answer", text: "Paldea introduced 120 new Pokemon (#906-1025), including Paradox Pokemon and those added in the Teal Mask and Indigo Disk DLC expansions. The Paldea Pokedex also includes many returning Pokemon from past generations." } },
    { "@type": "Question", name: "What are Paradox Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Paradox Pokemon are ancient or futuristic variants of existing Pokemon. Scarlet has Past forms (Great Tusk = ancient Donphan, Scream Tail = ancient Jigglypuff), Violet has Future forms (Iron Treads = futuristic Donphan, Iron Bundle = futuristic Delibird). They have very high stats." } },
    { "@type": "Question", name: "What is Terastallize?", acceptedAnswer: { "@type": "Answer", text: "Terastallize changes a Pokemon's type to its hidden Tera Type for the rest of the battle, boosting STAB moves. Every Pokemon has a Tera Type — often its original type but sometimes surprising ones (e.g., Tera Flying Garchomp to avoid Ground weakness). This adds massive strategic depth." } },
    { "@type": "Question", name: "Is Scarlet or Violet better?", acceptedAnswer: { "@type": "Answer", text: "Scarlet has ancient Past Paradox Pokemon (Great Tusk, Scream Tail, Brute Bonnet, etc.) and Professor Sada. Violet has future Iron Paradox Pokemon (Iron Treads, Iron Bundle, Iron Hands, etc.) and Professor Turo. The story is nearly identical between versions." } },
    { "@type": "Question", name: "What are the best Paldea Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Paldea picks: Gholdengo (Steel/Ghost, Good as Gold ability blocks status moves), Great Tusk (Ground/Fighting, versatile Paradox), Roaring Moon (Dragon/Dark, Protosynthesis sweeper), Iron Moth (Fire/Poison, Quiver Dance set), Meowscarada (Grass/Dark, 123 Speed), and Skeledirge (Fire/Ghost, tanky singer)." } },
    { "@type": "Question", name: "What are the Paldea DLC expansions?", acceptedAnswer: { "@type": "Answer", text: "The Hidden Treasure of Area Zero: Part 1 is The Teal Mask (set in Kitakami, adds Ogerpon and returning Pokemon) and Part 2 is The Indigo Disk (set in Blueberry Academy, adds Terapagos, Archaludon, and new Paradox forms of Raikou, Cobalion, etc.)." } },
    { "@type": "Question", name: "What is the best Paldea starter?", acceptedAnswer: { "@type": "Answer", text: "Fuecoco/Skeledirge (Fire/Ghost) is the most defensive and popular. Sprigatito/Meowscarada (Grass/Dark) is the fastest starter ever at 123 Speed. Quaxly/Quaquaval (Water/Fighting) is the most offensive. For Nuzlockes, Fuecoco's bulk makes it the easiest pick." } },
    { "@type": "Question", name: "What is the Paldea open world like?", acceptedAnswer: { "@type": "Answer", text: "Scarlet & Violet are the first fully open-world Pokemon games. There are no loading screens between areas, Pokemon roam the overworld, and players can tackle the three story paths (Victory Road, Starfall Street, Path of Legends) in any order they choose." } },
    { "@type": "Question", name: "What is the Ruinous Quartet?", acceptedAnswer: { "@type": "Answer", text: "The Ruinous Quartet are four legendary Pokemon sealed behind Paldean Shrines: Wo-Chien (Dark/Grass, Tablets of Ruin), Chien-Pao (Dark/Ice, Sword of Ruin), Ting-Lu (Dark/Ground, Vessel of Ruin), and Chi-Yu (Dark/Fire, Beads of Ruin). Chi-Yu and Chien-Pao were briefly banned in competitive play." } },
    { "@type": "Question", name: "What new mechanics did Gen 9 introduce?", acceptedAnswer: { "@type": "Answer", text: "Gen 9 introduced: fully open world, Terastallize (any Pokemon can change type once per battle with a Tera Orb), Paradox Pokemon (ancient/future variants), picnics (replaced Pokemon Camp), Let's Go mechanics (send a Pokemon out to auto-battle), and the sandwich-making system for bonuses." } },
    { "@type": "Question", name: "How does the Paldea Pokemon Generator work?", acceptedAnswer: { "@type": "Answer", text: "Select Gen 9/Paldea filter, choose team size (1-6), filter by type or exclude Paradox/legendary Pokemon for Nuzlockes, then generate. Lock your favorite picks and regenerate the rest. Free and instant — perfect for Scarlet & Violet team building, challenge runs, and competitive exploration." } },
  ],
};

export default function PaldeaGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Paldea Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">PALDEA POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Paldea Pokemon teams</strong> from Generation 9 (#906-1025). Scarlet &amp; Violet — the first fully open-world games — with Terastallize, Paradox Pokemon, and two DLC expansions.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Paldea" />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE PALDEA REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Paldea</strong> is the ninth region, based on the Iberian Peninsula (Spain/Portugal). Featured in Scarlet &amp; Violet (2022) — the first fully open-world Pokemon games with no loading screens between areas. Introduced Terastallize, Paradox Pokemon, and 120 new species.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              Two DLC expansions: The Teal Mask (Kitakami region, Ogerpon) and The Indigo Disk (Blueberry Academy, Terapagos, new Paradox forms). Paldea has three concurrent story paths players can tackle in any order.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "120 NEW POKEMON", desc: "#906 Sprigatito to #1025 Pecharunt" }, { label: "OPEN WORLD", desc: "First fully free-roam region" }, { label: "TERASTALLIZE", desc: "Type-changing battle mechanic" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">PALDEA LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">🏍️ RIDE LEGENDS</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Koraidon</strong> (#1007) — Fighting/Dragon, 670 BST. Mascot of Pokemon Scarlet. Ancient era.</p>
                  <p><strong>Miraidon</strong> (#1008) — Electric/Dragon, 670 BST. Mascot of Pokemon Violet. Future era.</p>
                </div>
              </div>
              {[
                { title: "🏺 RUINOUS QUARTET", content: "Wo-Chien (Dark/Grass), Chien-Pao (Dark/Ice), Ting-Lu (Dark/Ground), Chi-Yu (Dark/Fire). Found by collecting Stakes at Shrines. Chi-Yu and Chien-Pao were banned from competitive play." },
                { title: "⚡ PARADOX POKEMON", content: "Ancient forms in Scarlet (Great Tusk, Scream Tail, Brute Bonnet, Flutter Mane, Slither Wing, Sandy Shocks, Roaring Moon) and Future forms in Violet (Iron Treads, Iron Bundle, Iron Hands, Iron Jugulis, Iron Moth, Iron Thorns, Iron Valiant)." },
                { title: "✨ MYTHICAL", content: "Pecharunt (#1025, Poison/Ghost) — introduced in The Indigo Disk DLC. Controls others with its mochi chains. Terapagos (Normal → Terastal form) is the true legendary of the Area Zero story arc." },
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST PALDEA POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔴 UBERS</h3><p className="font-mono text-xs text-charcoal">Koraidon, Miraidon, Iron Bundle (banned), Palafin-Hero, Chi-Yu (banned)</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟡 OU</h3><p className="font-mono text-xs text-charcoal">Gholdengo, Great Tusk, Roaring Moon, Iron Moth, Skeledirge, Meowscarada, Flutter Mane</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟢 UU/RU</h3><p className="font-mono text-xs text-charcoal">Kilowattrel, Armarouge, Ceruledge, Glimmora, Bombirdier, Tinkaton</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/galar-pokemon-generator", label: "GALAR (GEN 8)", desc: "Sword & Shield" }, { href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/shiny-pokemon-generator", label: "SHINY POKEMON", desc: "Ultra rare variants" }, { href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">PALDEA POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Paldea?", a: "Paldea introduced 120 new Pokemon (#906-1025), including those from the Teal Mask and Indigo Disk DLC expansions. The full Paldea Pokedex also includes hundreds of returning Pokemon from previous generations." },
                { q: "What are Paradox Pokemon?", a: "Paradox Pokemon are ancient or futuristic variants of existing Pokemon. Scarlet has Past forms (Great Tusk = ancient Donphan), Violet has Future forms (Iron Treads = futuristic Donphan). Paradox Pokemon have extremely high stats and unique type combinations." },
                { q: "What is Terastallize?", a: "Terastallize changes a Pokemon's type to its hidden Tera Type for the rest of the battle, boosting STAB. Every Pokemon has a Tera Type — often its original type but sometimes surprising ones. This enables creative strategies and type changes not otherwise possible." },
                { q: "Is Scarlet or Violet better?", a: "Scarlet has ancient-themed Paradox Pokemon (Great Tusk, Scream Tail, etc.) and Professor Sada. Violet has future-themed Paradox Pokemon (Iron Treads, Iron Bundle, etc.) and Professor Turo. The story is nearly identical but Paradox preferences drive version choice." },
                { q: "What are the Paldea DLC expansions?", a: "The Teal Mask takes you to Kitakami — a Japanese-inspired area with Ogerpon (Grass, 4 Tera Type forms) and returning Pokemon. The Indigo Disk is set at Blueberry Academy and adds Terapagos, new Paradox Pokemon (Walking Wake, Iron Leaves, etc.), and Archaludon." },
                { q: "What is the best Paldea starter?", a: "Fuecoco/Skeledirge (Fire/Ghost) is the most defensive and popular for playthroughs. Meowscarada (Grass/Dark) at 123 Speed is the fastest starter ever and excellent for competitive. Quaquaval (Water/Fighting) has a unique typing and high offensive power." },
                { q: "What is the Paldea open world like?", a: "Scarlet & Violet are the first fully open-world Pokemon games — no loading zones, Pokemon roam freely, and all three storylines (Victory Road gyms, Starfall Street Team Star, Path of Legends Titan Pokemon) can be done in any order." },
                { q: "What is Gholdengo and why is it so good?", a: "Gholdengo (Steel/Ghost, 600 BST) has the unique ability Good as Gold — it blocks all status moves targeting it (Toxic, Will-O-Wisp, Thunder Wave). Combined with Nasty Plot and 133 Sp. Atk, it was OU's most dominant Pokemon for multiple seasons." },
                { q: "What is the Ruinous Quartet?", a: "Wo-Chien (Dark/Grass), Chien-Pao (Dark/Ice), Ting-Lu (Dark/Ground), and Chi-Yu (Dark/Fire) are sealed behind Shrines across Paldea. Chi-Yu (Beads of Ruin, lowers all foes' Sp. Def by 25%) and Chien-Pao (Sword of Ruin) were competitively banned." },
                { q: "What new mechanics did Gen 9 introduce?", a: "Gen 9 introduced: fully open world, Terastallize (type change once per battle), Paradox Pokemon, picnics (Pokemon bonding), Let's Go auto-battle, and the sandwich-making system for team-building bonuses (Egg Power, Encounter Power, etc.)." },
                { q: "How does the Paldea Pokemon Generator work?", a: "Select Gen 9/Paldea filter, set team size (1-6), filter by type or evolution stage, optionally exclude Paradox/legendary Pokemon for Nuzlockes. Generate, lock favorites, regenerate the rest. Free and instant — perfect for Scarlet & Violet challenge runs." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

