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
  title: "Alola Pokemon Generator | Gen 7 Random Team Builder (Sun/Moon/USUM)",
  description: "Generate random Alola Pokemon teams from Generation 7 (#722-809). Sun, Moon, Ultra Sun & Ultra Moon including Guardian Deities, Ultra Beasts, and Alolan regional forms. Updated 2026.",
  keywords: ["alola pokemon generator", "gen 7 random team generator", "alola pokemon team builder", "sun moon team generator", "alola randomizer", "gen 7 nuzlocke generator", "ultra beast generator", "alolan forms picker"],
  alternates: { canonical: `${siteUrl}/alola-pokemon-generator` },
  openGraph: { title: "Alola Pokemon Generator | Gen 7 Random Team Builder", description: "Generate random Alola Pokemon from Gen 7! Sun & Moon.", url: `${siteUrl}/alola-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alola Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Alola Pokemon Generator | Gen 7 Random Team Builder", description: "Generate random Alola Pokemon from Gen 7!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Alola Pokemon Generator",
  description: "Generate random Pokemon teams from the Alola region (Gen 7). Pokemon #722-809.",
  url: `${siteUrl}/alola-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Alola?", acceptedAnswer: { "@type": "Answer", text: "Alola introduced 88 new Pokemon (#722-809), plus 18 Alolan regional forms of existing Kanto Pokemon. Ultra Sun & Ultra Moon added additional Ultra Beasts, bringing the total available in Alola to over 400." } },
    { "@type": "Question", name: "What are Alolan forms?", acceptedAnswer: { "@type": "Answer", text: "Alolan forms are regional variants of Kanto Pokemon adapted to Hawaii's environment. Examples: Alolan Vulpix/Ninetales (Ice-type, adapted to mountain snow), Alolan Raichu (Electric/Psychic, surfs on its tail), Alolan Exeggutor (Grass/Dragon, tropical tree variant)." } },
    { "@type": "Question", name: "What are Ultra Beasts?", acceptedAnswer: { "@type": "Answer", text: "Ultra Beasts (UBs) are extradimensional Pokemon from Ultra Space accessed through Ultra Wormholes. They include Nihilego (Rock/Poison), Buzzwole (Bug/Fighting), Pheromosa (Bug/Fighting, banned Ubers), Xurkitree (Electric), Celesteela (Steel/Flying), Kartana (Grass/Steel), and Guzzlord (Dark/Dragon), plus more in USUM." } },
    { "@type": "Question", name: "What is the difference between Sun/Moon and Ultra Sun/Ultra Moon?", acceptedAnswer: { "@type": "Answer", text: "Ultra Sun & Ultra Moon have an expanded story involving the Ultra Recon Squad, new Ultra Beasts (Poipole, Naganadel, Stakataka, Blacephalon), Necrozma's fused forms (Dusk Mane and Dawn Wings), and access to over 400 more Pokemon not found in the original S/M." } },
    { "@type": "Question", name: "What are Z-Moves?", acceptedAnswer: { "@type": "Answer", text: "Z-Moves are Gen 7's powerful one-use super moves. They require a Z-Crystal held by the Pokemon and a Z-Ring worn by the trainer. Typings are matched (e.g., Firinium Z for Fire moves). Signature Z-Moves exist for specific Pokemon like Pikachu (10,000,000 Volt Thunderbolt) and Snorlax (Pulverizing Pancake)." } },
    { "@type": "Question", name: "What are the Alola Guardian Deities?", acceptedAnswer: { "@type": "Answer", text: "The Tapus guard each Alolan island: Tapu Koko (Electric/Fairy, Melemele Island), Tapu Lele (Psychic/Fairy, Akala Island), Tapu Bulu (Grass/Fairy, Ula'ula Island), Tapu Fini (Water/Fairy, Poni Island). They summon their respective terrains upon entering battle (Electric/Psychic/Grassy/Misty Surge)." } },
    { "@type": "Question", name: "What is the best Alola starter?", acceptedAnswer: { "@type": "Answer", text: "Rowlet/Decidueye (Grass/Ghost) is the most popular and unique typing. Litten/Incineroar (Fire/Dark) became a fan favorite and top VGC pick with Intimidate and Fake Out utility. Popplio/Primarina (Water/Fairy) is the strongest competitively with high Sp. Atk." } },
    { "@type": "Question", name: "What are the best Alola Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Alola picks: Toxapex (Water/Poison, Regenerator wall), Tapu Koko (Electric/Fairy, Electric Terrain setter), Tapu Lele (Psychic/Fairy, Psychic Surge for priority immunity), Mimikyu (Fairy/Ghost, Disguise lets it take one hit free), Incineroar (VGC staple, Intimidate + Fake Out + U-turn), and Pheromosa (Ubers)." } },
    { "@type": "Question", name: "What are Island Trials in Alola?", acceptedAnswer: { "@type": "Answer", text: "Alola replaced traditional Gyms with Island Trials — a series of challenges on each of the four islands. Trials involve finding items, battling, or solving puzzles, culminating in a Totem Pokemon battle. Grand Trials against the Kahuna replace the Gym Badge system." } },
    { "@type": "Question", name: "What is Necrozma and its fused forms?", acceptedAnswer: { "@type": "Answer", text: "Necrozma (#800, Psychic, 600 BST) is the main antagonist of USUM. It fuses with Solgaleo to become Dusk Mane Necrozma (Psychic/Steel, 680 BST) or with Lunala to become Dawn Wings Necrozma (Psychic/Ghost, 680 BST). Ultra Necrozma has 754 BST." } },
    { "@type": "Question", name: "How does the Alola Pokemon Generator work?", acceptedAnswer: { "@type": "Answer", text: "This free online tool generates random Alola Pokemon (#722-809) based on your preferences. Set team size, filter by type, exclude Ultra Beasts or legendaries for Nuzlockes, lock Pokemon you want to keep, and regenerate the rest. Perfect for Sun/Moon challenge runs and team exploration." } },
  ],
};

export default function AlolaGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Alola Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">ALOLA POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Alola Pokemon teams</strong> from Generation 7 (#722-809). Sun, Moon, Ultra Sun &amp; Ultra Moon — featuring Z-Moves, Alolan regional forms, Island Trials, and Ultra Beasts.
          </p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Alola" />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE ALOLA REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Alola</strong> is the seventh region, based on Hawaii. Featured in Sun &amp; Moon (2016) and Ultra Sun &amp; Ultra Moon (2017). Replaced Gyms with Island Trials, introduced Z-Moves, Alolan regional forms, and Ultra Beasts from alternate dimensions.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              USUM expanded the story with the Ultra Recon Squad, new Ultra Beasts, Necrozma&apos;s fused forms, and over 400 additional Pokemon. Alola is the only region with a fully tropical setting and four distinct islands instead of a connected landmass.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "88 NEW POKEMON", desc: "#722 Rowlet to #809 Melmetal" }, { label: "Z-MOVES", desc: "Powerful one-use super moves" }, { label: "ISLAND TRIALS", desc: "Replaced traditional Gym system" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ALOLA LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">☀️🌙 LIGHT TRIO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Solgaleo</strong> (#791) — Psychic/Steel, 680 BST. Mascot of Pokemon Sun.</p>
                  <p><strong>Lunala</strong> (#792) — Psychic/Ghost, 680 BST. Mascot of Pokemon Moon.</p>
                  <p><strong>Necrozma</strong> (#800) — Psychic, 600 BST. Ultra Necrozma: 754 BST. Can fuse with Solgaleo or Lunala.</p>
                </div>
              </div>
              {[
                { title: "🌺 GUARDIAN DEITIES (TAPUS)", content: "Tapu Koko (Electric/Fairy, Electric Terrain), Tapu Lele (Psychic/Fairy, Psychic Terrain), Tapu Bulu (Grass/Fairy, Grassy Terrain), Tapu Fini (Water/Fairy, Misty Terrain). Each guards one island." },
                { title: "👾 ULTRA BEASTS", content: "Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, Guzzlord (base game). USUM adds Poipole/Naganadel, Stakataka, Blacephalon. All have extremely high stats in one or two areas." },
                { title: "✨ MYTHICALS", content: "Magearna (Steel/Fairy), Marshadow (Fighting/Ghost, Spectral Thief), Zeraora (Electric, 600 BST), Meltan & Melmetal (Steel, obtained through Pokemon GO)." },
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST ALOLA POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔴 UBERS</h3><p className="font-mono text-xs text-charcoal">Necrozma-DM/DW, Solgaleo, Lunala, Marshadow, Pheromosa (banned)</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟡 OU</h3><p className="font-mono text-xs text-charcoal">Toxapex, Tapu Koko, Tapu Lele, Mimikyu, Incineroar, Primarina, Kartana</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟢 UU/RU</h3><p className="font-mono text-xs text-charcoal">Decidueye, Ribombee, Kommo-o, Alolan Ninetales, Mudsdale, Salazzle</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/kalos-pokemon-generator", label: "KALOS (GEN 6)", desc: "X & Y" }, { href: "/galar-pokemon-generator", label: "GALAR (GEN 8)", desc: "Sword & Shield" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }, { href: "/shiny-pokemon-generator", label: "SHINY POKEMON", desc: "Ultra rare variants" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ALOLA POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Alola?", a: "Alola introduced 88 new Pokemon (#722-809), plus 18 Alolan regional variants of existing Kanto Pokemon. USUM expanded available Pokemon to over 400 with the addition of more Ultra Beasts." },
                { q: "What are Alolan forms?", a: "Alolan forms are regional variants adapted to Hawaii's climate. Alolan Vulpix/Ninetales is Ice-type (mountain snow), Alolan Raichu is Electric/Psychic (surfs on its tail), Alolan Exeggutor is Grass/Dragon (tropical giant tree)." },
                { q: "What are Ultra Beasts?", a: "Ultra Beasts (UBs) are alien Pokemon from Ultra Space — alternate dimensions accessed through Ultra Wormholes. They have Beast Boost ability (raises highest stat when knocking out a foe) and extremely skewed stats." },
                { q: "What is the difference between Sun/Moon and Ultra Sun/Moon?", a: "Ultra Sun & Moon add the Ultra Recon Squad storyline, new Ultra Beasts (Poipole, Naganadel, Stakataka, Blacephalon), Necrozma's fused forms, Rainbow Rocket post-game, and access to over 400 more Pokemon." },
                { q: "What are Z-Moves?", a: "Z-Moves are powerful one-use attacks requiring a Z-Crystal and Z-Ring. Type-specific Z-Moves boost any move of that type massively. Signature Z-Moves exist for specific Pokemon (Snorlax, Pikachu, Eevee, Kommo-o, Mimikyu)." },
                { q: "What are the Guardian Deities?", a: "Tapu Koko (Electric/Fairy), Tapu Lele (Psychic/Fairy), Tapu Bulu (Grass/Fairy), and Tapu Fini (Water/Fairy) each protect one Alolan island. Their abilities summon terrain (Electric/Psychic/Grassy/Misty Surge) automatically when entering battle." },
                { q: "What is the best Alola starter?", a: "Litten/Incineroar (Fire/Dark) became a top VGC pick for years due to Intimidate + Fake Out utility. Popplio/Primarina (Water/Fairy) is strongest competitively with Liquid Voice. Rowlet/Decidueye (Grass/Ghost) is the fan favorite for its unique typing." },
                { q: "What Alola Pokemon are best competitively?", a: "Toxapex (Regenerator defensive wall), Tapu Koko (Electric Terrain setter), Tapu Lele (Psychic Surge, blocks priority moves), Mimikyu (Disguise + Play Rough), Incineroar (VGC staple for years), Kartana (Grass/Steel with insane 181 Attack)." },
                { q: "What are Island Trials?", a: "Island Trials replaced traditional Gyms. Each trial involves a series of tasks on an island, ending with a Totem Pokemon battle (a powered-up wild Pokemon that calls allies). Grand Trials against island Kahunas grant Z-Crystals instead of Gym Badges." },
                { q: "What is the Alola version of the Elite Four?", a: "Alola has the Elite Four: Molayne (Steel), Olivia (Rock), Acerola (Ghost), and Kahili (Flying). Champion Kukui uses a full team including a surprise Incineroar in Sun/Moon. In USUM, Hau becomes Champion." },
                { q: "How does the Alola Pokemon Generator work?", a: "Select Gen 7/Alola in the filter, set team size (1-6), optionally filter by type or exclude Ultra Beasts/legendaries for Nuzlockes. Generate, lock Pokemon you like, and regenerate the rest. Free and instant with no account required." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
