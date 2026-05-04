import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const KANTO_SPOTLIGHT = [
  { slug: "charizard",  id: 6,   name: "Charizard",  types: ["fire", "flying"]  as const },
  { slug: "pikachu",   id: 25,  name: "Pikachu",    types: ["electric"]         as const },
  { slug: "mewtwo",    id: 150, name: "Mewtwo",     types: ["psychic"]          as const },
  { slug: "gengar",    id: 94,  name: "Gengar",     types: ["ghost", "poison"]  as const },
  { slug: "eevee",     id: 133, name: "Eevee",      types: ["normal"]           as const },
  { slug: "snorlax",   id: 143, name: "Snorlax",    types: ["normal"]           as const },
  { slug: "dragonite", id: 149, name: "Dragonite",  types: ["dragon", "flying"] as const },
  { slug: "blastoise", id: 9,   name: "Blastoise",  types: ["water"]            as const },
  { slug: "venusaur",  id: 3,   name: "Venusaur",   types: ["grass", "poison"]  as const },
  { slug: "alakazam",  id: 65,  name: "Alakazam",   types: ["psychic"]          as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Kanto Pokemon Generator | Gen 1 Random Team Builder (Red/Blue/Yellow)",
  description: "Generate random Kanto Pokemon teams from Generation 1 (#1-151). The original 151 from Red, Blue, Yellow, FireRed & LeafGreen. Free online team builder. Updated 2026.",
  keywords: ["kanto pokemon generator", "gen 1 random team generator", "original 151 team generator", "kanto pokemon team builder", "red blue yellow team builder", "gen 1 nuzlocke generator", "kanto randomizer", "random kanto pokemon picker"],
  alternates: { canonical: `${siteUrl}/kanto-pokemon-generator` },
  openGraph: { title: "Kanto Pokemon Generator | Gen 1 Random Team Builder", description: "Generate random Kanto Pokemon from Gen 1! The original 151 Pokemon.", url: `${siteUrl}/kanto-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kanto Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Kanto Pokemon Generator | Gen 1 Random Team Builder", description: "Generate random Kanto Pokemon from Gen 1!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Kanto Pokemon Generator",
  description: "Random Kanto Pokemon generator — 151 species from Red, Blue & FireRed/LeafGreen. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/kanto-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Kanto?", acceptedAnswer: { "@type": "Answer", text: "Kanto has the original 151 Pokemon (#1-151), from Bulbasaur to Mew. The Kanto Pokedex was later expanded in FireRed & LeafGreen to include all 386 Pokemon from Gens 1-3." } },
    { "@type": "Question", name: "Which Kanto starter is the best?", acceptedAnswer: { "@type": "Answer", text: "Squirtle/Blastoise is easiest for playthroughs due to type advantages. Charizard is most popular and has two Mega Evolutions (X: Fire/Dragon, Y: Fire/Flying). Venusaur is strongest competitively in modern formats with Thick Fat." } },
    { "@type": "Question", name: "How do you get Mew in Gen 1?", acceptedAnswer: { "@type": "Answer", text: "Mew was event-exclusive in Gen 1, but a famous glitch allows catching it in Red/Blue using the Trainer-Fly method near Nugget Bridge in Cerulean City. In modern games, Mew is available through Pokemon HOME and special events." } },
    { "@type": "Question", name: "What is the strongest Kanto Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Mewtwo is the strongest with 680 BST. With Mega Evolution, Mega Mewtwo Y reaches 780 BST (tied with Mega Rayquaza), making it one of the highest BST Pokemon ever. Mewtwo has 154 Special Attack in Mega Y form." } },
    { "@type": "Question", name: "What are the Kanto legendary Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Kanto legendaries include the Legendary Birds (Articuno, Zapdos, Moltres), Mewtwo, and Mew. In FireRed/LeafGreen, all 386 Pokemon become accessible post-game. The birds are found at Seafoam Islands, Power Plant, and Victory Road." } },
    { "@type": "Question", name: "What are the best Kanto Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Kanto picks include Mega Charizard X/Y (OU/Ubers), Alakazam (fast Special Attacker), Starmie (Water/Psychic coverage), Gengar (Ghost/Poison), Dragonite (pseudo-legendary), and Snorlax (mixed wall). Mewtwo is banned to Ubers." } },
    { "@type": "Question", name: "How do you use the Kanto Pokemon Generator?", acceptedAnswer: { "@type": "Answer", text: "Select the Kanto region filter on the generator, choose your team size (1-6 Pokemon), optionally filter by type or evolution stage, then click Generate. You can lock Pokemon you want to keep and regenerate the rest." } },
    { "@type": "Question", name: "What games are set in the Kanto region?", acceptedAnswer: { "@type": "Answer", text: "Kanto games include Pokemon Red, Blue, Yellow (1996-1998), FireRed & LeafGreen (2004 remakes), HeartGold & SoulSilver post-game, and Pokemon Let's Go Pikachu & Eevee (2018 Switch remakes with GO mechanics)." } },
    { "@type": "Question", name: "What makes the Kanto region special?", acceptedAnswer: { "@type": "Answer", text: "Kanto is the birthplace of Pokemon, based on Japan's real Kanto region. It established all core game mechanics: 8 Gyms, Elite Four, rival battles, version exclusives, and the fundamental Fire/Water/Grass starter triangle. Every subsequent region is built on these foundations." } },
    { "@type": "Question", name: "What is a good Kanto team for a Nuzlocke?", acceptedAnswer: { "@type": "Answer", text: "For a Kanto Nuzlocke, prioritize Lapras (Water/Ice, strong in late game), Nidoking (Ground/Poison, learns many TMs), Gengar (Ghost, immune to Normal/Fighting), Jolteon (fast Electric attacker), and Cloyster (Ice/Water wall). Avoid Raticate and Butterfree in late game." } },
    { "@type": "Question", name: "What is the Kanto Pokedex completion reward?", acceptedAnswer: { "@type": "Answer", text: "In the original Red/Blue, completing the Pokedex earns you a diploma and Shiny Charm in remakes. In FireRed/LeafGreen, completing the National Dex unlocks the Shiny Charm. In Let's Go, a full Pokedex earns a shiny charm and special certificate." } },
  ],
};

export default function KantoPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Kanto Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">KANTO POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Kanto Pokemon teams</strong> from Generation 1 (#1-151). The original 151 from Red, Blue, Yellow, FireRed &amp; LeafGreen. Use filters for type, rarity, and evolution stage.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Kanto" />

        <CardShowcase />

        <PokemonSpotlight
          pokemon={KANTO_SPOTLIGHT}
          heading="Iconic Kanto Pokémon"
          badge="GEN I"
        />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE KANTO REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Kanto</strong> is where it all began — the first region in the Pokemon series, featured in Pokemon Red, Blue, and Yellow (1996-1998). Based on the real Kanto region of Japan, it introduced 151 original Pokemon and set the foundation for every game that followed. The region spans from Pallet Town in the south to Viridian City and the Indigo Plateau in the north, with iconic locations like Mt. Moon, Lavender Town, and Cerulean Cave.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              Kanto was revisited in <strong>FireRed &amp; LeafGreen</strong> (2004) with expanded post-game content and in <strong>Let&apos;s Go Pikachu &amp; Eevee</strong> (2018) with GO-style catching mechanics for the Nintendo Switch.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "151 ORIGINAL POKEMON", desc: "#1 Bulbasaur to #151 Mew" }, { label: "ICONIC STARTERS", desc: "Bulbasaur, Charmander, Squirtle" }, { label: "LEGENDARY BIRDS", desc: "Articuno, Zapdos, Moltres" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">KANTO LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">LEGENDARY BIRDS</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Articuno</strong> (#144) — Ice/Flying. Found in Seafoam Islands. Shiny available in Let&apos;s Go.</p>
                  <p><strong>Zapdos</strong> (#145) — Electric/Flying. Found in Power Plant. High Special Attack.</p>
                  <p><strong>Moltres</strong> (#146) — Fire/Flying. Found in Victory Road. Strong Fire STAB.</p>
                </div>
              </div>
              {[{ title: "MEWTWO", content: "Mewtwo (#150) — Psychic, 680 BST. The strongest Gen 1 Pokemon. Found in Cerulean Cave post-game. Has two Mega Evolutions: Mega Mewtwo X (Psychic/Fighting, 780 BST) and Mega Mewtwo Y (Psychic, 780 BST, highest Sp. Atk in the game at 194)." },
              { title: "MEW", content: "Mew (#151) — Psychic, 600 BST. The mythical ancestor of all Pokemon. Can learn every TM/HM. Originally event-only, catchable via the Trainer-Fly glitch in Red/Blue. Available through Pokemon HOME in modern games." }
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST KANTO POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">S-TIER / UBERS</h3><p className="font-mono text-xs text-charcoal">Mewtwo (Mega X &amp; Y), Mega Gengar, Mega Kangaskhan, Mega Blaziken (Torchic from Kanto events)</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">A-TIER / OU</h3><p className="font-mono text-xs text-charcoal">Mega Charizard X/Y, Alakazam, Starmie, Gengar, Dragonite, Snorlax, Tauros</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">B-TIER / UU/RU</h3><p className="font-mono text-xs text-charcoal">Blastoise, Venusaur, Jolteon, Machamp, Nidoking, Clefable, Lapras, Gyarados</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/johto-pokemon-generator", label: "JOHTO (GEN 2)", desc: "Gold & Silver" }, { href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/sinnoh-pokemon-generator", label: "SINNOH (GEN 4)", desc: "Diamond & Pearl" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">KANTO POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Kanto?", a: "Kanto has the original 151 Pokemon (#1-151), from Bulbasaur to Mew. The Kanto Pokedex was later expanded in FRLG to include all 386 Pokemon from Gens 1-3." },
                { q: "Which Kanto starter is the best?", a: "Squirtle/Blastoise is easiest for playthroughs. Charizard is most popular with two Mega Evolutions (X: Fire/Dragon, Y: pure Fire). Venusaur is strongest competitively in modern formats thanks to Thick Fat reducing Ice/Fire weaknesses." },
                { q: "How do you get Mew?", a: "Mew was event-exclusive, but a famous glitch allows catching it in Red/Blue using the Trainer-Fly method near Nugget Bridge. In modern games, Mew is available through Pokemon HOME from a Poke Ball Plus or special events." },
                { q: "What's the strongest Kanto Pokemon?", a: "Mewtwo is the strongest with 680 BST. With Mega Evolution, Mega Mewtwo Y reaches 780 BST with 194 Special Attack — one of the highest of any Pokemon." },
                { q: "What games are set in Kanto?", a: "Pokemon Red, Blue, Yellow (1996-1998), FireRed & LeafGreen (2004 GBA remakes), HeartGold/SoulSilver post-game, and Pokemon Let's Go Pikachu & Eevee (2018 Nintendo Switch remakes with GO mechanics)." },
                { q: "What is the best Kanto team for a playthrough?", a: "A balanced team might include Charizard (Fire), Lapras (Water/Ice), Raichu (Electric), Alakazam (Psychic), Nidoking (Poison/Ground), and Gengar (Ghost/Poison). This covers most Gym Leader weaknesses." },
                { q: "What is the hardest Gym in Kanto?", a: "Sabrina (Psychic) and Giovanni (Ground) are considered the hardest, especially in Red/Blue where Ghost moves had no effect on Psychic types due to a bug. Erika and Koga are easier mid-game." },
                { q: "Are there any Kanto exclusive Pokemon?", a: "Several Pokemon are version-exclusive: Ekans/Arbok (Red), Sandshrew/Sandslash (Blue), Oddish/Vileplume (Red), Bellsprout/Weepinbell (Blue), Growlithe/Arcanine (Red), and Vulpix/Ninetales (Blue)." },
                { q: "What is the Kanto Safari Zone?", a: "The Safari Zone is a special area near Fuchsia City where you can catch rare Pokemon like Tauros, Kangaskhan, Scyther (Red), Pinsir (Blue), Dratini, and Chansey using Safari Balls. Steps are limited per visit." },
                { q: "What does this Kanto Pokemon Generator do?", a: "This free tool generates random Kanto Pokemon teams from the original 151 (#1-151). You can set team size, filter by type or rarity, exclude legendaries, and lock specific picks. Perfect for Nuzlocke planning, randomizer runs, and team building challenges." },
                { q: "Is the Kanto Pokedex the same in all games?", a: "No — the original Red/Blue Pokedex had 151 Pokemon but some (like Mr. Mime, Jynx) needed to be traded. FireRed/LeafGreen expanded availability. Let's Go uses a modified Kanto Dex of 153 including Alolan forms of some Pokemon." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

