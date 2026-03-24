import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MapPin, ArrowLeft, ExternalLink } from "lucide-react";
import FreshnessSignal from "@/components/FreshnessSignal";

const PokemonGeneratorClient = dynamic(
  () => import("../PokemonGeneratorClient")
);

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Gen 3 Random Team Generator | Hoenn Pokemon Ruby Sapphire Emerald",
  description:
    "Generate random Hoenn Pokemon teams from Gen 3 (Pokemon #252-386)! Ruby, Sapphire, Emerald & ORAS with Weather Trio. Updated January 2026 with competitive builds.",
  keywords: [
    "gen 3 random team generator",
    "hoenn pokemon team builder",
    "gen 3 pokemon randomizer",
    "ruby sapphire team generator",
    "hoenn randomizer free",
    "weather trio generator",
    "gen 3 nuzlocke generator",
    "emerald team builder online",
    "hoenn pokemon with filters",
  ],
  alternates: {
    canonical: `${siteUrl}/hoenn-pokemon-generator`,
  },
  openGraph: {
    title: "Random Hoenn Pokemon Generator | Gen 3 Ruby Sapphire Emerald",
    description:
      "Generate random Hoenn Pokemon from Gen 3! Ruby, Sapphire & Emerald Pokemon including Weather Trio.",
    url: `${siteUrl}/hoenn-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hoenn Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Hoenn Pokemon Generator | Gen 3 Ruby Sapphire Emerald",
    description:
      "Generate random Hoenn Pokemon from Gen 3! Weather Trio included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const hoennJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 3 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Hoenn region (Gen 3 - Ruby, Sapphire, Emerald), including the Weather Trio. Pokemon #252-386.",
  url: `${siteUrl}/hoenn-pokemon-generator`,
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  datePublished: "2024-11-15",
  dateModified: "2026-01-13",
  isPartOf: {
    "@type": "WebApplication",
    name: "Random Pokemon Generator",
    url: siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function HoennPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hoennJsonLd) }}
      />
      <main className="min-h-screen bg-cream px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-brown hover:text-red transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
            </li>
            <li className="text-brown/50">/</li>
            <li className="text-brown font-semibold">
              Hoenn Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 3 • RUBY/SAPPHIRE/EMERALD</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 3 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Hoenn Pokemon teams</strong> from Generation 3 (Pokemon #252-386)!
            Perfect for Ruby, Sapphire, Emerald & ORAS Nuzlockes, Weather Trio teams, and competitive builds.
            Includes 135 new species and the legendary Groudon, Kyogre & Rayquaza.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Weather Trio strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">135 New Pokemon</h3>
              <p className="text-sm text-white/90">
                Pokemon #252-386
              </p>
            </div>
            <div className="bg-red-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">🌊</span>
              <h3 className="font-bold mb-1">Weather Trio</h3>
              <p className="text-sm text-white/90">
                Kyogre, Groudon, Rayquaza
              </p>
            </div>
            <div className="bg-green-700 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="font-bold mb-1">Abilities Introduced</h3>
              <p className="text-sm text-white">
                First gen with abilities
              </p>
            </div>
          </div>
        </div>

        {/* Generator Component */}
        <PokemonGeneratorClient />

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              About the Hoenn Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Hoenn</strong> is the third region in the Pokemon series,
              featured in Pokemon Ruby, Sapphire, and Emerald (2002-2004) and
              their 3DS remakes Omega Ruby and Alpha Sapphire (2014). Based on
              Kyushu, Japan, Hoenn is known for its tropical climate, abundant
              water routes, and the legendary Weather Trio.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Hoenn include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>135 New Pokemon:</strong> #252 Treecko to #386 Deoxys
              </li>
              <li>
                <strong>Abilities System:</strong> First generation to introduce Pokemon abilities
              </li>
              <li>
                <strong>Double Battles:</strong> Introduced as a standard battle format
              </li>
              <li>
                <strong>Weather Trio:</strong> Kyogre (Rain), Groudon (Drought), Rayquaza (Air Lock)
              </li>
              <li>
                <strong>Secret Bases:</strong> Customizable player hideouts
              </li>
              <li>
                <strong>Pokemon Contests:</strong> Beauty, Coolness, Cuteness competitions
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Hoenn Legendary Pokemon & Mythicals
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2 text-xl">🌊 Weather Trio (Box Legendaries)</h3>
                <div className="space-y-2 text-sm text-brown/80">
                  <div>
                    <strong>Kyogre</strong> (#382) - Water-type, Drizzle ability<br />
                    <span className="text-xs">Primal Reversion in ORAS: Water + stronger stats</span>
                  </div>
                  <div>
                    <strong>Groudon</strong> (#383) - Ground-type, Drought ability<br />
                    <span className="text-xs">Primal Reversion in ORAS: Ground/Fire + stronger stats</span>
                  </div>
                  <div>
                    <strong>Rayquaza</strong> (#384) - Dragon/Flying, Air Lock ability<br />
                    <span className="text-xs">Mega Evolution in ORAS: Highest BST of any Pokemon (780)</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🗿 Legendary Golems (Regi Trio)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Regirock</strong> (#377) - Rock<br />
                  <strong>Regice</strong> (#378) - Ice<br />
                  <strong>Registeel</strong> (#379) - Steel<br />
                  <em className="text-xs">Catchable via Braille puzzle in Sealed Chamber</em>
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Eon Duo</h3>
                <p className="text-sm text-brown/70">
                  <strong>Latias</strong> (#380) - Dragon/Psychic - Roaming (Ruby/AS)<br />
                  <strong>Latios</strong> (#381) - Dragon/Psychic - Roaming (Sapphire/OR)<br />
                  Both get Mega Evolutions in ORAS
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Jirachi</strong> (#385) - Steel/Psychic - Wish Pokemon, event-exclusive<br />
                  <strong>Deoxys</strong> (#386) - Psychic - Has 4 forms (Normal, Attack, Defense, Speed)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Popular Hoenn Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Hoenn Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Treecko → Grovyle → Sceptile</strong> (Grass) - Mega Sceptile is Grass/Dragon<br />
                  <strong>Torchic → Combusken → Blaziken</strong> (Fire/Fighting) - Mega Blaziken banned from OU<br />
                  <strong>Mudkip → Marshtomp → Swampert</strong> (Water/Ground) - "I heard you liek Mudkipz" meme origin
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">💪 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Bagon → Shelgon → Salamence</strong> (Dragon/Flying)<br />
                  600 BST, Mega Evolution in ORAS makes it even stronger
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚙️ Steel Type Powerhouses</h3>
                <p className="text-sm text-brown/70">
                  <strong>Beldum → Metang → Metagross</strong> (Steel/Psychic) - 600 BST pseudo-legendary<br />
                  <strong>Aron → Lairon → Aggron</strong> (Steel/Rock) - Mega Aggron is pure Steel
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌊 Water Types</h3>
                <p className="text-sm text-brown/70">
                  <strong>Wailmer → Wailord</strong> - Largest Pokemon by size<br />
                  <strong>Carvanha → Sharpedo</strong> - Mega Sharpedo in ORAS<br />
                  <strong>Milotic</strong> - Evolves from Feebas (hardest evolution in Gen 3)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">👻 Ghost & Dark Types</h3>
                <p className="text-sm text-brown/70">
                  <strong>Sableye</strong> (Dark/Ghost) - No weaknesses in Gen 3 (before Fairy type)<br />
                  <strong>Absol</strong> (Dark) - Disaster Pokemon, Mega Evolution in ORAS<br />
                  <strong>Banette</strong> (Ghost) - Mega Banette in ORAS
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Hoenn Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Too Strong)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Mega Rayquaza</strong> (highest BST ever - 780),{" "}
                  <strong>Kyogre</strong>, <strong>Groudon</strong> (especially Primal forms),{" "}
                  <strong>Deoxys-Attack</strong>
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Salamence</strong>, <strong>Metagross</strong>,{" "}
                  <strong>Latios</strong>, <strong>Latias</strong>,{" "}
                  <strong>Blaziken</strong> (was OU, now Ubers with Speed Boost)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 UU/RU Tier (Underused/Rarely Used)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Swampert</strong>, <strong>Gardevoir</strong>,{" "}
                  <strong>Breloom</strong>, <strong>Flygon</strong>,{" "}
                  <strong>Aggron</strong>
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Hoenn Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🎮 Game Features Introduced</h3>
                <ul className="text-sm text-brown/70 space-y-1">
                  <li>• <strong>Pokemon Abilities</strong> - Changed competitive play forever</li>
                  <li>• <strong>Double Battles</strong> - 2v2 format</li>
                  <li>• <strong>Natures</strong> - Stat modifiers (+10% to one stat, -10% to another)</li>
                  <li>• <strong>Weather Effects</strong> - Rain, Sun, Sandstorm, Hail in battle</li>
                  <li>• <strong>Pokemon Contests</strong> - Alternative to battling</li>
                </ul>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">💎 Mega Evolutions (ORAS)</h3>
                <p className="text-sm text-brown/70">
                  Omega Ruby & Alpha Sapphire introduced 20+ Mega Evolutions, including all 3 Hoenn starters. <strong>Mega Rayquaza</strong> doesn't need a held Mega Stone - it just needs to know Dragon Ascent!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🌊 Too Much Water?</h3>
                <p className="text-sm text-brown/70">
                  IGN's infamous review of ORAS criticized it for "7.8/10 - too much water." Hoenn has extensive water routes (Routes 105-109, 118-134), which became a meme in the Pokemon community.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">🎺 Legendary Trumpets</h3>
                <p className="text-sm text-brown/70">
                  The Hoenn soundtrack's liberal use of trumpets became iconic. Fans joke about "too many trumpets" similar to "too much water." The Battle Frontier theme is a fan favorite.
                </p>
              </div>
            </div>
          </article>

          {/* Related Region Generators */}
          <div className="bg-yellow border-2 border-black p-8">
            <h2 className="text-2xl font-bold text-brown mb-6 flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              Other Region Generators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/kanto-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🔴 Kanto Pokemon (Gen 1)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Original 151 Pokemon
                </p>
              </Link>
              <Link
                href="/sinnoh-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⚔️ Sinnoh Pokemon (Gen 4)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Diamond, Pearl & Platinum
                </p>
              </Link>
              <Link
                href="/paldea-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🏫 Paldea Pokemon (Gen 9)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Newest region - Scarlet & Violet
                </p>
              </Link>
              <Link
                href="/"
                className="block bg-white border-2 border-black p-4 hover:bg-purple-700 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🎲 All Regions Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Generate from any generation
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Hoenn Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Hoenn?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Hoenn introduced <strong>135 new Pokemon</strong> (#252-386), bringing the total to 386. The regional Pokedex in Ruby/Sapphire/Emerald contains 202 Pokemon, while ORAS expanded it to include older Pokemon.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Hoenn starter is the best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Mudkip/Swampert</strong> is considered easiest for Hoenn playthroughs (only one weakness). Competitively, <strong>Blaziken</strong> with Speed Boost is banned to Ubers. <strong>Mega Sceptile</strong> is fast and hits hard.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What's the difference between Ruby/Sapphire and Emerald?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Emerald</strong> is the enhanced version with both Team Aqua and Magma, access to both Kyogre and Groudon post-game, Battle Frontier, and animated Pokemon sprites. It's considered the definitive Gen 3 experience.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How do you catch Rayquaza?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  In Ruby/Sapphire, Rayquaza is at Sky Pillar after beating the Elite Four. In Emerald, you must catch it as part of the story to stop Kyogre and Groudon's battle. In ORAS, it's story-required and always shiny-locked.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are Secret Bases?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Secret Bases are customizable hideouts you can create using Secret Power on trees, bushes, or indentations. Decorate them with furniture and share via mixing records. ORAS expanded this feature significantly with online sharing.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
