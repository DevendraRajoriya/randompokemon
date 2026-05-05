import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const JOHTO_SPOTLIGHT = [
  { slug: "lugia",       id: 249, name: "Lugia",       types: ["psychic", "flying"] as const },
  { slug: "ho-oh",       id: 250, name: "Ho-Oh",       types: ["fire", "flying"]    as const },
  { slug: "tyranitar",   id: 248, name: "Tyranitar",   types: ["rock", "dark"]      as const },
  { slug: "espeon",      id: 196, name: "Espeon",      types: ["psychic"]           as const },
  { slug: "umbreon",     id: 197, name: "Umbreon",     types: ["dark"]              as const },
  { slug: "scizor",      id: 212, name: "Scizor",      types: ["bug", "steel"]      as const },
  { slug: "heracross",   id: 214, name: "Heracross",   types: ["bug", "fighting"]   as const },
  { slug: "ampharos",    id: 181, name: "Ampharos",    types: ["electric"]          as const },
  { slug: "feraligatr",  id: 160, name: "Feraligatr",  types: ["water"]             as const },
  { slug: "togekiss",    id: 468, name: "Togekiss",    types: ["fairy", "flying"]   as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Johto Pokemon Generator | Gen 2 Random Team Builder",
  description: "Generate random Johto Pokemon teams from Gen 2 (#152-251). Gold, Silver & Crystal — featuring Lugia, Ho-Oh, the Legendary Beasts & 100 new species. Free team builder.",
  keywords: ["johto pokemon generator", "gen 2 random team generator", "johto pokemon team builder", "gold silver team generator", "johto randomizer", "gen 2 nuzlocke generator", "heartgold soulsilver team builder", "johto pokemon picker"],
  alternates: { canonical: `${siteUrl}/johto-pokemon-generator` },
  openGraph: { title: "Johto Pokemon Generator | Gen 2 Random Team Builder", description: "Generate random Johto Pokemon from Gen 2! Gold, Silver & Crystal.", url: `${siteUrl}/johto-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Johto Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Johto Pokemon Generator | Gen 2 Random Team Builder", description: "Generate random Johto Pokemon from Gen 2!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Johto Pokemon Generator",
  description: "Random Johto Pokemon generator — 100 species from Gold, Silver & HeartGold/SoulSilver. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/johto-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Johto?", acceptedAnswer: { "@type": "Answer", text: "Johto introduced 100 new Pokemon (#152-251), from Chikorita to Celebi, bringing the total Pokedex to 251. The HeartGold & SoulSilver remakes expanded the available Pokemon to include the full National Dex." } },
    { "@type": "Question", name: "Which Johto starter is the best?", acceptedAnswer: { "@type": "Answer", text: "Totodile/Feraligatr is considered the strongest for playthroughs with excellent Water STAB and bulk. Typhlosion is a powerful Fire special attacker. Meganium is the most defensive but faces the hardest early gyms." } },
    { "@type": "Question", name: "What is the Tower Duo?", acceptedAnswer: { "@type": "Answer", text: "Lugia (#249, Psychic/Flying, 680 BST) and Ho-Oh (#250, Fire/Flying, 680 BST) are the mascot legendaries of Silver and Gold respectively. Lugia is found at the Whirl Islands; Ho-Oh is found at the Bell Tower." } },
    { "@type": "Question", name: "Why is HGSS considered the best Pokemon game?", acceptedAnswer: { "@type": "Answer", text: "HeartGold & SoulSilver are praised for their following Pokemon overworld feature (any Pokemon follows you), two full regions (Johto + Kanto), the Pokeathlon mini-game, the Pokegear, and the largest post-game content of any main series game." } },
    { "@type": "Question", name: "What are the Legendary Beasts in Johto?", acceptedAnswer: { "@type": "Answer", text: "Raikou (Electric), Entei (Fire), and Suicune (Water) are the roaming legendaries created by Ho-Oh to resurrect the Pokemon that died in the Burned Tower. They roam across Johto and flee on contact, requiring specific strategies to catch." } },
    { "@type": "Question", name: "What games are set in the Johto region?", acceptedAnswer: { "@type": "Answer", text: "Johto games: Pokemon Gold, Silver, Crystal (1999-2001) and remakes HeartGold & SoulSilver (2009). These are the only main series games that include two full regions — Johto and Kanto — in one game." } },
    { "@type": "Question", name: "What new features did Gen 2 introduce?", acceptedAnswer: { "@type": "Answer", text: "Gen 2 introduced: Pokemon breeding (Day Care), held items, the day/night cycle (time-based encounters), gender differences, Special stat split into Sp. Atk/Sp. Def, Shiny Pokemon, the Steel and Dark types, and two new ball types (Apricorn Balls)." } },
    { "@type": "Question", name: "What is the best team for HeartGold and SoulSilver?", acceptedAnswer: { "@type": "Answer", text: "A strong HGSS team: Feraligatr (Water), Ampharos (Electric), Gengar (Ghost/Poison), Heracross (Bug/Fighting), Espeon or Umbreon (Psychic/Dark), and Gyarados (Water/Flying). This gives excellent type coverage for both Johto and Kanto Leaders." } },
    { "@type": "Question", name: "How do you catch the Legendary Beasts in HGSS?", acceptedAnswer: { "@type": "Answer", text: "Use the Poke Radar (Pokewalker) or wait for random encounters. Using a Master Ball is recommended. Alternatively, use Mean Look or Block to prevent escape, then use Arena Trap or Shadow Tag Pokemon. Suicune appears in a fixed battle at the Burned Tower in Crystal/HGSS." } },
    { "@type": "Question", name: "What is Celebi and how do you get it?", acceptedAnswer: { "@type": "Answer", text: "Celebi (#251) is a Psychic/Grass mythical Pokemon known as the Time Travel Pokemon. In original Gold/Silver, it was event-only. In HGSS, a special Celebi unlocks a Giovanni event. It is available in Pokemon HOME through events and Pokemon Bank transfers." } },
    { "@type": "Question", name: "How does this Johto Pokemon Generator work?", acceptedAnswer: { "@type": "Answer", text: "Select the Johto or Gen 2 filter, choose your team size (1-6), optionally filter by type or evolution stage, and click Generate. You can lock Pokemon you want to keep and regenerate the others. Perfect for Nuzlocke runs, randomizer planning, and fun team challenges." } },
  ],
};

export default function JohtoPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Johto Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">JOHTO POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Johto Pokemon teams</strong> from Generation 2 (#152-251). Gold, Silver &amp; Crystal — with breeding, held items, and the legendary Tower Duo.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Johto" />

        <CardShowcase />

        <PokemonSpotlight
          pokemon={JOHTO_SPOTLIGHT}
          heading="Iconic Johto POKEMON"
          badge="GEN II"
        />


        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE JOHTO REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Johto</strong> is the second Pokemon region, featured in Gold, Silver &amp; Crystal (1999-2000) and remakes HeartGold &amp; SoulSilver (2009). Based on the Kansai region of Japan (Osaka, Kyoto, Nara), it introduced breeding, held items, the day/night cycle, the Steel &amp; Dark types, and 100 new Pokemon.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              HeartGold &amp; SoulSilver are widely considered the best Pokemon games ever made, featuring two full regions, 16 Gym Badges, and a Pokemon that follows you overworld — a feature fans have requested back ever since.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "100 NEW POKEMON", desc: "#152 Chikorita to #251 Celebi" }, { label: "BREEDING SYSTEM", desc: "First gen with Pokemon breeding" }, { label: "DAY/NIGHT CYCLE", desc: "Time-based wild encounters" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">JOHTO LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">?? TOWER DUO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Lugia</strong> (#249) — Psychic/Flying, 680 BST. Mascot of Pokemon Silver. Found in Whirl Islands.</p>
                  <p><strong>Ho-Oh</strong> (#250) — Fire/Flying, 680 BST. Mascot of Pokemon Gold. Found at Bell Tower.</p>
                </div>
              </div>
              {[{ title: "LEGENDARY BEASTS", content: "Raikou (Electric), Entei (Fire), Suicune (Water). Roaming legendaries created by Ho-Oh to resurrect the Pokemon that perished in the Burned Tower disaster. Suicune has a fixed encounter in Crystal/HGSS." },
              { title: "CELEBI", content: "Celebi (#251) — Psychic/Grass, 600 BST. The mythical time-traveler. Originally event-exclusive; in HGSS a special Celebi unlocks a Giovanni flashback event. Now available via Pokemon HOME." }
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST JOHTO POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">S-TIER / UBERS</h3><p className="font-mono text-xs text-charcoal">Lugia, Ho-Oh, Mega Heracross, Mega Scizor</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">A-TIER / OU</h3><p className="font-mono text-xs text-charcoal">Scizor, Heracross, Umbreon, Espeon, Steelix, Feraligatr, Tyranitar</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">B-TIER / UU/RU</h3><p className="font-mono text-xs text-charcoal">Ampharos, Houndoom, Misdreavus, Quagsire, Lanturn, Skarmory</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/kanto-pokemon-generator", label: "KANTO (GEN 1)", desc: "Original 151" }, { href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/sinnoh-pokemon-generator", label: "SINNOH (GEN 4)", desc: "Diamond & Pearl" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">JOHTO POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Johto?", a: "Johto introduced 100 new Pokemon (#152-251), from Chikorita to Celebi, bringing the total to 251. The HGSS remakes expanded to include the full National Dex of 493 Pokemon." },
                { q: "Which Johto starter is the best?", a: "Totodile/Feraligatr is strongest for playthroughs with great coverage (Ice Punch, Waterfall, Earthquake). Typhlosion is powerful offensively with Flamethrower/Fire Blast. Meganium is the most defensive and hardest to use." },
                { q: "What is the Tower Duo?", a: "Lugia (#249) and Ho-Oh (#250) are the mascot legendaries. Both have 680 BST. Lugia is at the Whirl Islands and Ho-Oh is at the Bell Tower. In Crystal, you can catch both in one game." },
                { q: "Why is HGSS considered the best Pokemon game?", a: "HeartGold & SoulSilver feature walking Pokemon (any of your 493 Pokemon follows you), two full regions (Johto + Kanto), 16 Gym Badges, the Pokeathlon, VS Seeker, and the richest post-game content in any main series game." },
                { q: "What are the Legendary Beasts?", a: "Raikou (Electric), Entei (Fire), and Suicune (Water) roam Johto after you visit the Burned Tower in Ecruteak City. They flee on contact, requiring Mean Look or a Master Ball. Suicune has a fixed encounter at Cerulean Cape in Crystal/HGSS." },
                { q: "What new features did Gen 2 introduce?", a: "Gen 2 introduced: Pokemon breeding (Day-Care), held items, day/night cycles, gender differences, the Physical/Special split (Sp. Atk and Sp. Def), Shiny Pokemon (1/8192 base rate), the Steel and Dark types, and the Apricorn Ball crafting system." },
                { q: "What are Apricorn Balls?", a: "Apricorns are fruit trees found in Johto. Kurt in Azalea Town crafts them into special Poke Balls overnight: Lure Ball (excellent for fishing Pokemon), Friend Ball (raises caught Pokemon friendship), Heavy Ball (better for heavy Pokemon), Love Ball (same species, opposite gender), and more." },
                { q: "What are version exclusives in Gold and Silver?", a: "Gold exclusives: Spinarak/Ariados, Gligar, Teddiursa/Ursaring, Mantine, Skarmory, Wobbuffet. Silver exclusives: Ledyba/Ledian, Delibird, Phanpy/Donphan, Heracross, Sneasel, Smoochum. Both versions share most of the 100 new Pokemon." },
                { q: "Who is the Johto Elite Four?", a: "The Johto Elite Four: Will (Psychic), Koga (Poison, formerly Fuchsia Gym Leader), Bruno (Fighting, from Gen 1 Elite Four), Karen (Dark). Champion Lance uses a team of three Dragonites plus Charizard, Aerodactyl, and Gyarados." },
                { q: "What is the best Johto team for a Nuzlocke?", a: "For a Johto Nuzlocke: Feraligatr (Water powerhouse), Ampharos (Electric, reliable attacker), Heracross (Bug/Fighting, high Attack), Gengar (Ghost/Poison, covers Normal immunity), Skarmory or Forretress (Steel wall), and Tyranitar (Rock/Dark, pseudo-legendary)." },
                { q: "How does the Johto Pokemon Generator help with team building?", a: "This free generator randomly picks Johto Pokemon (#152-251) based on your filters — team size, type, rarity, evolution stage, or Nuzlocke-style restrictions. Lock Pokemon you want to keep and regenerate the rest. Great for randomizer ROMs, challenge runs, and draft leagues." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

