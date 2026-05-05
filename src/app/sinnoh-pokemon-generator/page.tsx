import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const SINNOH_SPOTLIGHT = [
  { slug: "lucario",    id: 448, name: "Lucario",    types: ["fighting", "steel"]  as const },
  { slug: "garchomp",   id: 445, name: "Garchomp",   types: ["dragon", "ground"]   as const },
  { slug: "dialga",     id: 483, name: "Dialga",     types: ["steel", "dragon"]    as const },
  { slug: "palkia",     id: 484, name: "Palkia",     types: ["water", "dragon"]    as const },
  { slug: "giratina",   id: 487, name: "Giratina",   types: ["ghost", "dragon"]    as const },
  { slug: "roserade",   id: 407, name: "Roserade",   types: ["grass", "poison"]    as const },
  { slug: "staraptor",  id: 398, name: "Staraptor",  types: ["normal", "flying"]   as const },
  { slug: "weavile",    id: 461, name: "Weavile",    types: ["dark", "ice"]        as const },
  { slug: "togekiss",   id: 468, name: "Togekiss",   types: ["fairy", "flying"]    as const },
  { slug: "magnezone",  id: 462, name: "Magnezone",  types: ["electric", "steel"]  as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Sinnoh Pokemon Generator | Gen 4 Random Team Builder (Diamond/Pearl/Platinum)",
  description: "Generate random Sinnoh Pokemon teams from Generation 4 (#387-493). Diamond, Pearl & Platinum including Arceus, Dialga, Palkia, Giratina. Updated 2026.",
  keywords: ["sinnoh pokemon generator", "gen 4 random team generator", "sinnoh pokemon team builder", "diamond pearl team generator", "sinnoh randomizer", "gen 4 nuzlocke generator", "bdsp team builder"],
  alternates: { canonical: `${siteUrl}/sinnoh-pokemon-generator` },
  openGraph: { title: "Sinnoh Pokemon Generator | Gen 4 Random Team Builder", description: "Generate random Sinnoh Pokemon from Gen 4! Diamond, Pearl & Platinum.", url: `${siteUrl}/sinnoh-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sinnoh Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Sinnoh Pokemon Generator | Gen 4 Random Team Builder", description: "Generate random Sinnoh Pokemon from Gen 4!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Sinnoh Pokemon Generator",
  description: "Random Sinnoh Pokemon generator — 107 species from Diamond, Pearl & Platinum. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/sinnoh-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Sinnoh?", acceptedAnswer: { "@type": "Answer", text: "Sinnoh introduced 107 new Pokemon (#387-493). The regional Sinnoh Dex had 150 in D/P, expanded to 210 in Platinum. BDSP (2021) added the Grand Underground with Pokemon from all generations." } },
    { "@type": "Question", name: "What is the Creation Trio?", acceptedAnswer: { "@type": "Answer", text: "Dialga (Steel/Dragon, time), Palkia (Water/Dragon, space), and Giratina (Ghost/Dragon, antimatter) form the Creation Trio. All have 680 BST and represent the three fundamental dimensions of the Pokemon universe." } },
    { "@type": "Question", name: "What makes Platinum different from Diamond/Pearl?", acceptedAnswer: { "@type": "Answer", text: "Platinum adds the Distortion World, an expanded Battle Frontier with 5 facilities, more available Pokemon, improved graphics, access to the Origin Forme of Giratina, and a remixed soundtrack. It is the definitive Sinnoh experience." } },
    { "@type": "Question", name: "Why is Garchomp so strong?", acceptedAnswer: { "@type": "Answer", text: "Garchomp (Dragon/Ground) has 600 BST, 130 Attack, and 102 Speed. Dragon + Ground STAB covers most of the metagame, Rough Skin punishes contact moves, and it has very few counters. It was briefly banned to Ubers." } },
    { "@type": "Question", name: "What games are set in Sinnoh?", acceptedAnswer: { "@type": "Answer", text: "Diamond & Pearl (2006), Platinum (2008), remakes Brilliant Diamond & Shining Pearl (2021 Switch), and Pokemon Legends: Arceus (2022 Switch) — an open-world action RPG set in ancient Hisui (proto-Sinnoh)." } },
    { "@type": "Question", name: "What did Gen 4 introduce to competitive Pokemon?", acceptedAnswer: { "@type": "Answer", text: "The Physical/Special split was Gen 4's biggest competitive change — each move now has its own category. This unlocked Physical Gyarados (Waterfall), Special Gengar (Shadow Ball), and revolutionized competitive teambuilding permanently." } },
    { "@type": "Question", name: "Who is Arceus and how strong is it?", acceptedAnswer: { "@type": "Answer", text: "Arceus (#493) is the God Pokemon with 720 BST — 120 in every stat. It can be any type via Plates or Z-Crystals, making it the most versatile legendary ever. It stars in Pokemon Legends: Arceus (2022) and is banned to Ubers in competitive play." } },
    { "@type": "Question", name: "What is the best Sinnoh starter?", acceptedAnswer: { "@type": "Answer", text: "Piplup/Empoleon (Water/Steel) has the most resistances and a unique typing. Chimchar/Infernape (Fire/Fighting) is the fastest and most offensive. Turtwig/Torterra (Grass/Ground) is defensive but has a 4x Ice weakness." } },
    { "@type": "Question", name: "What is Pokemon Legends Arceus?", acceptedAnswer: { "@type": "Answer", text: "Legends: Arceus (2022) is set in ancient Hisui (proto-Sinnoh) and introduced real-time catching, action RPG battles, and open-world exploration. It introduced Hisuian regional forms and the Origin Forms of Dialga and Palkia." } },
    { "@type": "Question", name: "What are the best Sinnoh Pokemon competitively?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Sinnoh picks: Garchomp (Dragon/Ground OU), Lucario (Steel/Fighting, Adaptability), Togekiss (Fairy, Serene Grace paraflinch), Rotom-Wash (Electric/Water defensive pivot), Weavile (Ice/Dark fast attacker), and Infernape (fast Fire/Fighting)." } },
    { "@type": "Question", name: "How does this Sinnoh Pokemon Generator work?", acceptedAnswer: { "@type": "Answer", text: "This free tool randomly generates Sinnoh Pokemon (#387-493) based on your preferences. Set team size (1-6), filter by type or evolution stage, exclude legendaries for Nuzlockes, lock favorite picks, and regenerate the rest. Perfect for team building, challenge runs, and draft leagues." } },
  ],
};

export default function SinnohPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Sinnoh Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">SINNOH POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Sinnoh Pokemon teams</strong> from Generation 4 (#387-493). Diamond, Pearl &amp; Platinum — home of Arceus, the Creation Trio, and the landmark Physical/Special split.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Sinnoh" />

        <CardShowcase />

        <PokemonSpotlight
          pokemon={SINNOH_SPOTLIGHT}
          heading="Iconic Sinnoh POKEMON"
          badge="GEN IV"
        />


        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE SINNOH REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Sinnoh</strong> is the fourth region, featured in Diamond, Pearl &amp; Platinum (2006-2008). Based on Hokkaido, Japan, it introduced 107 new Pokemon, the landmark Physical/Special split, the Underground fossil system, and Arceus — the God Pokemon with 720 BST.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              Sinnoh was revisited in <strong>Brilliant Diamond &amp; Shining Pearl</strong> (2021) and the open-world prequel <strong>Pokemon Legends: Arceus</strong> (2022), set in ancient Hisui — the proto-Sinnoh era.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "107 NEW POKEMON", desc: "#387 Turtwig to #493 Arceus" }, { label: "PHYSICAL/SPECIAL SPLIT", desc: "Moves now based on type category" }, { label: "UNDERGROUND", desc: "Fossil mining & secret bases" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">SINNOH LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">⚡ CREATION TRIO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Dialga</strong> (#483) — Steel/Dragon, Time. Mascot of Pokemon Diamond.</p>
                  <p><strong>Palkia</strong> (#484) — Water/Dragon, Space. Mascot of Pokemon Pearl.</p>
                  <p><strong>Giratina</strong> (#487) — Ghost/Dragon, Antimatter. Has Altered &amp; Origin forms.</p>
                </div>
              </div>
              {[{ title: "🌊 LAKE GUARDIANS", content: "Uxie (Knowledge), Mesprit (Emotion), Azelf (Willpower). Found in the three lakes of Sinnoh. They unlock the Creation Trio storyline." },
              { title: "🌙 LUNAR DUO", content: "Cresselia (#488, Psychic) and Darkrai (#491, Dark). Light and nightmares respectively. Darkrai is Mythical, found on Newmoon Island." },
              { title: "🌸 MYTHICALS", content: "Manaphy & Phione (Water), Shaymin (Grass/Flying Sky Forme), Arceus (#493) — the God Pokemon with 120 in all stats and 18 possible types via Plates." }
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST SINNOH POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔴 UBERS</h3><p className="font-mono text-xs text-charcoal">Arceus (all forms), Dialga, Palkia, Giratina, Darkrai, Shaymin-Sky</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟡 OU</h3><p className="font-mono text-xs text-charcoal">Garchomp, Lucario, Togekiss, Rotom-W, Infernape, Empoleon, Weavile</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟢 UU/RU</h3><p className="font-mono text-xs text-charcoal">Gastrodon, Roserade, Drapion, Ambipom, Mismagius, Floatzel</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/unova-pokemon-generator", label: "UNOVA (GEN 5)", desc: "Black & White" }, { href: "/alola-pokemon-generator", label: "ALOLA (GEN 7)", desc: "Sun & Moon" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">SINNOH POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Sinnoh?", a: "Sinnoh introduced 107 new Pokemon (#387-493). The regional Sinnoh Dex had 150 in DP, expanded to 210 in Platinum. BDSP's Grand Underground adds Pokemon from all generations." },
                { q: "What is the Creation Trio?", a: "Dialga (time), Palkia (space), and Giratina (antimatter). All Dragon-type legendaries with 680 BST, representing the fundamental dimensions of the Pokemon universe created by Arceus." },
                { q: "Why is Garchomp so strong?", a: "Garchomp (Dragon/Ground) has 600 BST, 130 Attack, 102 Speed. Its STAB coverage hits nearly everything neutral or better, Rough Skin punishes contact, and it has few hard counters. Briefly banned to Ubers." },
                { q: "What makes Platinum the best Gen 4 game?", a: "Platinum adds the Distortion World, full Battle Frontier (5 facilities), better Pokemon availability, improved Battle Tower, Origin Forme of Giratina, and a remixed soundtrack. It is the definitive Sinnoh experience." },
                { q: "What are the Sinnoh games?", a: "Diamond & Pearl (2006, DS), Platinum (2008, DS), Brilliant Diamond & Shining Pearl (2021, Switch remakes), and Pokemon Legends: Arceus (2022, Switch) — set in ancient Hisui." },
                { q: "What did Gen 4 introduce to competitive play?", a: "The Physical/Special split — moves are now individually categorized as Physical or Special, not determined by type. This unlocked Physical Gyarados (Waterfall), Special Gengar (Shadow Ball), and revolutionized teambuilding." },
                { q: "Who is Arceus and how strong is it?", a: "Arceus (#493) has 720 BST — 120 in every stat. It can be any type via Plates, making it the most versatile legendary ever. Featured in Pokemon Legends: Arceus (2022) and banned to Ubers competitively." },
                { q: "What is the best Sinnoh starter?", a: "Piplup/Empoleon (Water/Steel) has the most type resistances. Chimchar/Infernape (Fire/Fighting) is fastest and most offensive. Turtwig/Torterra (Grass/Ground) is defensive but has a 4x Ice weakness." },
                { q: "What is Pokemon Legends Arceus?", a: "Legends: Arceus (2022) is set in ancient Hisui (proto-Sinnoh) with real-time catching, action RPG battles, and open-world exploration. Introduced Hisuian forms and Origin Forms of Dialga and Palkia." },
                { q: "What Sinnoh Pokemon are best for competitive play?", a: "Top picks: Garchomp (Dragon/Ground OU), Lucario (Steel/Fighting, Adaptability), Togekiss (Fairy, Serene Grace paraflinch), Rotom-Wash (Electric/Water pivot), Weavile (Ice/Dark attacker), Infernape (Fire/Fighting)." },
                { q: "How does this Sinnoh Pokemon Generator work?", a: "Set team size (1-6), filter by type or evolution stage, optionally exclude legendaries for Nuzlockes, then click Generate. Lock Pokemon you want to keep and regenerate the rest. Free and instant — no signup required." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

