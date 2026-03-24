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
  title: "Gen 5 Random Team Generator | Unova Pokemon Black White B2W2",
  description:
    "Generate random Unova Pokemon teams from Gen 5 (Pokemon #494-649). Free tool for Black, White, Black 2 & White 2 with filters for Tao Trio, Hidden Abilities, Nuzlocke runs. Updated January 2026.",
  keywords: [
    "gen 5 random team generator",
    "unova pokemon generator",
    "random unova pokemon picker",
    "black white team builder",
    "gen 5 pokemon randomizer",
    "unova region randomizer",
    "black 2 white 2 team generator",
    "reshiram zekrom generator",
    "kyurem generator",
    "gen 5 nuzlocke generator",
    "unova pokemon with filters",
    "hidden ability pokemon generator",
  ],
  alternates: {
    canonical: `${siteUrl}/unova-pokemon-generator`,
  },
  openGraph: {
    title: "Gen 5 Random Team Generator | Unova Pokemon Black White",
    description:
      "Generate random Unova Pokemon teams from Gen 5 (Pokemon #494-649). Free tool with filters.",
    url: `${siteUrl}/unova-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gen 5 Unova Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Unova Pokemon Generator | Gen 5 Black & White",
    description:
      "Generate random Unova Pokemon from Gen 5! Tao Trio included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const unovaJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 5 Random Team Generator",
  alternateName: "Unova Pokemon Generator",
  description:
    "Generate random Pokemon teams from the Unova region (Gen 5 - Pokemon #494-649). Free tool for Black, White, Black 2, White 2 with filters for Nuzlocke, monotype challenges. Includes Tao Trio, Hidden Abilities.",
  url: `${siteUrl}/unova-pokemon-generator`,
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

export default function UnovaPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unovaJsonLd) }}
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
              Unova Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 5 • BLACK & WHITE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 5 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Unova Pokemon teams</strong> from Generation 5 (Pokemon #494-649)!
            Free tool for Black, White, Black 2 & White 2 with advanced filters for Nuzlocke runs, monotype challenges, and competitive team building.
          </p>

          {/* Freshness Signal */}
          <div className="max-w-4xl mx-auto mb-8">
            <FreshnessSignal 
              lastUpdated="January 13, 2026" 
              updateFrequency="Updated monthly with event Pokemon"
            />
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-gray-800 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">156 New Pokemon</h3>
              <p className="text-sm text-white/90">
                Most new Pokemon ever
              </p>
            </div>
            <div className="bg-blue-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">🔥</span>
              <h3 className="font-bold mb-1">Tao Trio</h3>
              <p className="text-sm text-white/90">
                Yin, Yang & Wuji dragons
              </p>
            </div>
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">✨</span>
              <h3 className="font-bold mb-1">Hidden Abilities</h3>
              <p className="text-sm text-white/90">
                Dream World introductions
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
              About the Unova Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Unova</strong> is the fifth region in the Pokemon series,
              featured in Pokemon Black, White, Black 2 & White 2 (2010-2012).
              Based on New York City, Unova introduced 156 brand new Pokemon
              with NO old Pokemon until post-game, plus sequels instead of a
              third version.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Unova include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>156 New Pokemon:</strong> #494 Victini to #649 Genesect (most new Pokemon in any generation)
              </li>
              <li>
                <strong>No Old Pokemon:</strong> Black & White featured ONLY new Pokemon until post-game
              </li>
              <li>
                <strong>Hidden Abilities:</strong> Third ability slot introduced via Dream World
              </li>
              <li>
                <strong>Seasons:</strong> Four seasons that change monthly and affect areas/Pokemon
              </li>
              <li>
                <strong>Sequels:</strong> Black 2 & White 2 were direct sequels (not remakes)
              </li>
              <li>
                <strong>Triple & Rotation Battles:</strong> New battle formats
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Tao Trio & Legendary Pokemon
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-gray-800 bg-gray-800/10 p-4">
                <h3 className="font-bold text-gray-800 mb-2 text-xl">🐉 Tao Trio (Box Legendaries)</h3>
                <div className="text-sm text-brown/80 space-y-2">
                  <p>
                    <strong>Reshiram</strong> (#643) - Dragon/Fire - Vast White Pokemon - Yang<br />
                    Signature: <strong>Blue Flare</strong> (130 power) - Turboblaze ability
                  </p>
                  <p>
                    <strong>Zekrom</strong> (#644) - Dragon/Electric - Deep Black Pokemon - Yin<br />
                    Signature: <strong>Bolt Strike</strong> (130 power) - Teravolt ability
                  </p>
                  <p>
                    <strong>Kyurem</strong> (#646) - Dragon/Ice - Boundary Pokemon - Wuji<br />
                    Signature: <strong>Glaciate</strong> (65 power, lowers Speed)<br />
                    <strong>White Kyurem:</strong> Fuses with Reshiram (700 BST)<br />
                    <strong>Black Kyurem:</strong> Fuses with Zekrom (700 BST)
                  </p>
                </div>
              </div>

              <div className="border-2 border-green bg-green/10 p-4">
                <h3 className="font-bold text-brown mb-2 text-xl">🗡️ Swords of Justice</h3>
                <div className="text-sm text-brown/80">
                  <strong>Cobalion</strong> (#638) - Steel/Fighting - Iron Will Pokemon<br />
                  <strong>Terrakion</strong> (#639) - Rock/Fighting - Cavern Pokemon<br />
                  <strong>Virizion</strong> (#640) - Grass/Fighting - Grassland Pokemon<br />
                  <strong>Keldeo</strong> (#647) - Water/Fighting - Mythical member - Secret Sword move
                </div>
              </div>

              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-brown mb-2">🌩️ Forces of Nature (Kami Trio)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Tornadus</strong> (#641) - Flying - Only pure Flying type<br />
                  <strong>Thundurus</strong> (#642) - Electric/Flying - Prankster ability<br />
                  <strong>Landorus</strong> (#645) - Ground/Flying - Intimidate (Incarnate), Sheer Force (Therian)<br />
                  All have <strong>Therian Formes</strong> (Reveal Glass item)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Victini</strong> (#494) - Psychic/Fire - Victory Star ability, event-exclusive</div>
                  <div><strong>Keldeo</strong> (#647) - Water/Fighting - Fourth Musketeer, Secret Sword</div>
                  <div><strong>Meloetta</strong> (#648) - Normal/Psychic (Aria) / Normal/Fighting (Pirouette)</div>
                  <div><strong>Genesect</strong> (#649) - Bug/Steel - Download ability, Techno Blast</div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Unova Starters & Popular Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Unova Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Snivy → Servine → Serperior</strong> (Grass) - Royal snake, Contrary ability<br />
                  <strong>Tepig → Pignite → Emboar</strong> (Fire/Fighting) - Third Fire/Fighting starter<br />
                  <strong>Oshawott → Dewott → Samurott</strong> (Water) - Samurai otter
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Deino → Zweilous → Hydreigon</strong> (Dark/Dragon)<br />
                  600 BST, evolves late (level 64), three-headed dragon
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🔥 Popular Unova Pokemon</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Excadrill</strong> (Ground/Steel) - Sand Rush + Sandstorm = OU tier</div>
                  <div><strong>Volcarona</strong> (Bug/Fire) - Quiver Dance sweeper, 550 BST</div>
                  <div><strong>Chandelure</strong> (Ghost/Fire) - Highest Sp. Atk of all non-legendary Pokemon</div>
                  <div><strong>Haxorus</strong> (Dragon) - Mold Breaker, 147 base Attack</div>
                  <div><strong>Braviary</strong> (Normal/Flying) - Defiant ability, exclusive to Black/White</div>
                  <div><strong>Mandibuzz</strong> (Dark/Flying) - Overcoat ability, exclusive to Black/White</div>
                  <div><strong>Bisharp</strong> (Dark/Steel) - Defiant ability</div>
                  <div><strong>Zoroark</strong> (Dark) - Illusion ability, event distribution</div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">💎 Hidden Ability Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Serperior</strong> (Contrary) - Leaf Storm boosts Sp. Atk instead of lowering<br />
                  <strong>Politoed</strong> (Drizzle) - Auto-rain, dominated Gen 5 meta<br />
                  <strong>Ninetales</strong> (Drought) - Auto-sun weather setter<br />
                  <strong>Blaziken</strong> (Speed Boost) - Banned to Ubers
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Unova Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Reshiram</strong>,{" "}
                  <strong>Zekrom</strong>,{" "}
                  <strong>Kyurem-White</strong>,{" "}
                  <strong>Kyurem-Black</strong>,{" "}
                  <strong>Blaziken</strong> (Speed Boost HA)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Landorus-Therian</strong> (most-used OU Pokemon),{" "}
                  <strong>Excadrill</strong> (Sand Rush),{" "}
                  <strong>Volcarona</strong> (Quiver Dance),{" "}
                  <strong>Politoed</strong> (Drizzle rain setter),{" "}
                  <strong>Thundurus</strong> (Prankster)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun VGC Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Amoonguss</strong> (Spore + Regenerator),{" "}
                  <strong>Terrakion</strong> (Rock Slide spam),{" "}
                  <strong>Chandelure</strong> (Heat Wave)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Unova Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-gray-800/10">
                <h3 className="font-bold text-brown mb-2">🗽 Based on New York City</h3>
                <p className="text-sm text-brown/70">
                  Unova is based on the <strong>New York City metropolitan area</strong>. Castelia City resembles Manhattan, Skyarrow Bridge is the Brooklyn Bridge, and Liberty Garden (Victini's location) is Liberty Island with the Statue of Liberty.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🆕 Only New Pokemon (BW1)</h3>
                <p className="text-sm text-brown/70">
                  Black & White featured <strong>ONLY Gen 5 Pokemon</strong> until you beat the Elite Four. This was the first time since Gen 1 where no old Pokemon were available during the main story. A soft reboot to attract new players.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">✨ Hidden Abilities via Dream World</h3>
                <p className="text-sm text-brown/70">
                  Gen 5 introduced <strong>Hidden Abilities</strong> (third ability slot). Originally obtained via Pokemon Dream World website. Some Hidden Abilities broke the meta (Drought Ninetales, Drizzle Politoed, Speed Boost Blaziken).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">📅 Seasonal Cycles</h3>
                <p className="text-sm text-brown/70">
                  Unova introduced <strong>seasons</strong> that change every month in real-time. Different Pokemon appear, areas change appearance, and Deerling/Sawsbuck change forms based on the season.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">2️⃣ First True Sequels</h3>
                <p className="text-sm text-brown/70">
                  <strong>Black 2 & White 2</strong> were the first direct sequels (not third version or remake). Set 2 years after BW1, with new areas, different protagonist, and new story featuring Team Plasma split.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">⚡ Most Legendary Pokemon</h3>
                <p className="text-sm text-brown/70">
                  Gen 5 introduced <strong>13 new legendary Pokemon</strong> (excluding mythicals): Tao Trio (3), Swords of Justice (3), Forces of Nature (3), plus Cobalion, Terrakion, Virizion, and Kyurem forms. Most legendaries in a single generation!
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
                href="/sinnoh-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⏰ Sinnoh Pokemon (Gen 4)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Diamond & Pearl - Creation Trio
                </p>
              </Link>
              <Link
                href="/kalos-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-purple-600 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🗼 Kalos Pokemon (Gen 6)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  X & Y with Mega Evolution
                </p>
              </Link>
              <Link
                href="/johto-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🔔 Johto Pokemon (Gen 2)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Gold & Silver with legendary beasts
                </p>
              </Link>
              <Link
                href="/"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group"
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
              Unova Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Unova?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Unova introduced <strong>156 new Pokemon</strong> (#494-649), the MOST of any generation. The Unova Pokedex in Black 2/White 2 contains 300 Pokemon.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are Hidden Abilities?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Hidden Abilities</strong> are a third ability slot introduced in Gen 5. Originally obtained via Pokemon Dream World website. Some are extremely powerful (Serperior's Contrary, Blaziken's Speed Boost, Politoed's Drizzle).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Unova starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Serperior</strong> with Contrary Hidden Ability is OU tier (Leaf Storm boosts instead of lowering). <strong>Emboar</strong> is decent but it's the third Fire/Fighting starter in a row. <strong>Samurott</strong> struggles with mixed stat distribution.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Should I play Black/White or Black 2/White 2?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Both! <strong>Black & White</strong> have the original story with N and Team Plasma. <strong>Black 2 & White 2</strong> are direct sequels set 2 years later with more content, Pokemon World Tournament, and access to old Pokemon earlier. Play BW1 first for story continuity.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How do Kyurem's fusion forms work?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  In Black 2/White 2, <strong>Kyurem</strong> can fuse with Reshiram (White Kyurem) or Zekrom (Black Kyurem) using the DNA Splicers item. Both forms have 700 base stat total and are Ubers tier. You can separate them anytime.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
