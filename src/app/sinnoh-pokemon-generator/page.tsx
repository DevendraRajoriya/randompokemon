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
  title: "Gen 4 Random Team Generator | Sinnoh Pokemon Diamond Pearl Platinum",
  description:
    "Generate random Sinnoh Pokemon teams from Gen 4 (Pokemon #387-493)! Diamond, Pearl & Platinum with Creation Trio and Physical/Special split. Updated January 2026.",
  keywords: [
    "gen 4 random team generator",
    "sinnoh pokemon team builder",
    "gen 4 pokemon randomizer",
    "diamond pearl team generator",
    "sinnoh randomizer online",
    "creation trio generator",
    "gen 4 nuzlocke generator",
    "platinum team builder free",
    "sinnoh pokemon with filters",
  ],
  alternates: {
    canonical: `${siteUrl}/sinnoh-pokemon-generator`,
  },
  openGraph: {
    title: "Random Sinnoh Pokemon Generator | Gen 4 Diamond & Pearl",
    description:
      "Generate random Sinnoh Pokemon from Gen 4! Diamond & Pearl Pokemon with Creation Trio.",
    url: `${siteUrl}/sinnoh-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sinnoh Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Sinnoh Pokemon Generator | Gen 4 Diamond & Pearl",
    description:
      "Generate random Sinnoh Pokemon from Gen 4! Creation Trio included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const sinnohJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 4 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Sinnoh region (Gen 4 - Diamond, Pearl & Platinum), including the Creation Trio and Physical/Special split mechanics. Pokemon #387-493.",
  url: `${siteUrl}/sinnoh-pokemon-generator`,
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

export default function SinnohPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sinnohJsonLd) }}
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
              Sinnoh Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 4 • DIAMOND & PEARL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 4 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Sinnoh Pokemon teams</strong> from Generation 4 (Pokemon #387-493)!
            Perfect for Diamond, Pearl & Platinum Nuzlockes, Creation Trio teams, and Physical/Special split strategies.
            Experience the game-changing battle mechanics revolution.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Physical/Special split guides"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">107 New Pokemon</h3>
              <p className="text-sm text-white/90">
                Most evolutions ever
              </p>
            </div>
            <div className="bg-purple-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">⚔️</span>
              <h3 className="font-bold mb-1">Physical/Special Split</h3>
              <p className="text-sm text-white/90">
                Revolutionary mechanic
              </p>
            </div>
            <div className="bg-gray-700 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🌌</span>
              <h3 className="font-bold mb-1">Creation Trio</h3>
              <p className="text-sm text-white/90">
                Time, Space & Antimatter
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
              About the Sinnoh Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Sinnoh</strong> is the fourth region in the Pokemon series,
              featured in Pokemon Diamond, Pearl & Platinum (2006-2008, remakes BDSP 2021).
              Based on Hokkaido, Japan, Sinnoh is known for Mt. Coronet,
              Pokemon mythology, and the revolutionary Physical/Special split.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Sinnoh include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>107 New Pokemon:</strong> #387 Turtwig to #493 Arceus
              </li>
              <li>
                <strong>Physical/Special Split:</strong> Moves now Physical/Special individually, not by type
              </li>
              <li>
                <strong>Most Evolutions:</strong> Added evolutions to 29 older Pokemon (Eevee, Magmar, Electabuzz, etc.)
              </li>
              <li>
                <strong>Underground:</strong> Multiplayer mining and secret bases
              </li>
              <li>
                <strong>Creation Trio:</strong> Dialga, Palkia, Giratina control time, space, antimatter
              </li>
              <li>
                <strong>Day/Night Cycle:</strong> Expanded with real-time clock features
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Creation Trio & Legendary Pokemon
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2 text-xl">🌌 Creation Trio (Box Legendaries)</h3>
                <div className="text-sm text-brown/80 space-y-2">
                  <p>
                    <strong>Dialga</strong> (#483) - Steel/Dragon - Temporal Pokemon - Controls time<br />
                    Signature: <strong>Roar of Time</strong> (150 power) - Origin Form in PLA
                  </p>
                  <p>
                    <strong>Palkia</strong> (#484) - Water/Dragon - Spatial Pokemon - Controls space<br />
                    Signature: <strong>Spacial Rend</strong> (100 power, high crit) - Origin Form in PLA
                  </p>
                  <p>
                    <strong>Giratina</strong> (#487) - Ghost/Dragon - Renegade Pokemon - Controls antimatter<br />
                    Signature: <strong>Shadow Force</strong> (120 power, vanishes)<br />
                    <strong>Altered Forme:</strong> Balanced stats (Outside Distortion World)<br />
                    <strong>Origin Forme:</strong> Offensive (Griseous Orb/Distortion World)
                  </p>
                </div>
              </div>

              <div className="border-2 border-purple-600 bg-purple-600/10 p-4">
                <h3 className="font-bold text-purple-600 mb-2 text-xl">🧠 Lake Guardians (Pixie Trio)</h3>
                <div className="text-sm text-brown/80">
                  <strong>Uxie</strong> (#480) - Psychic - Knowledge Pokemon - Lake Acuity<br />
                  <strong>Mesprit</strong> (#481) - Psychic - Emotion Pokemon - Lake Verity (Roaming)<br />
                  <strong>Azelf</strong> (#482) - Psychic - Willpower Pokemon - Lake Valor
                </div>
              </div>

              <div className="border-2 border-red bg-red/10 p-4">
                <h3 className="font-bold text-brown mb-2">🔥 Heatran & Regigigas</h3>
                <p className="text-sm text-brown/70">
                  <strong>Heatran</strong> (#485) - Fire/Steel - Unique typing, Flash Fire<br />
                  <strong>Regigigas</strong> (#486) - Normal - Awakens Regi trio, Slow Start ability (BST 670)
                </p>
              </div>

              <div className="border-2 border-pink-500 bg-pink-500/10 p-4">
                <h3 className="font-bold text-brown mb-2">💖 Cresselia (Lunar Pokemon)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Cresselia</strong> (#488) - Psychic - Roaming legendary, counterpart to Darkrai<br />
                  Fullmoon Island event
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Phione/Manaphy</strong> (#489-490) - Water - Breed Manaphy with Ditto</div>
                  <div><strong>Darkrai</strong> (#491) - Dark - Newmoon Island, Bad Dreams ability</div>
                  <div><strong>Shaymin</strong> (#492) - Grass → Grass/Flying (Sky Forme) - Gracidea Flower</div>
                  <div><strong>Arceus</strong> (#493) - Normal (multi-type) - "Pokemon God", 720 BST</div>
                </div>
              </div>

              <div className="border-2 border-gray-700 bg-gray-700/10 p-4">
                <h3 className="font-bold text-brown mb-2">⚡ Arceus - The Original One</h3>
                <p className="text-sm text-brown/70">
                  <strong>Arceus</strong> is the creator deity of the Pokemon universe. Created Dialga, Palkia, Giratina from itself. Changes type with Plates (17 types). Signature move: <strong>Judgment</strong>. Highest base stat total in Gen 4 (720).
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Sinnoh Starters & Popular Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Sinnoh Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Turtwig → Grotle → Torterra</strong> (Grass/Ground) - Continent turtle<br />
                  <strong>Chimchar → Monferno → Infernape</strong> (Fire/Fighting) - Wukong inspiration<br />
                  <strong>Piplup → Prinplup → Empoleon</strong> (Water/Steel) - Emperor penguin
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Gible → Gabite → Garchomp</strong> (Dragon/Ground)<br />
                  600 BST, Cynthia's ace, OU tier dominant, Mega Evolution in Gen 6
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🔮 New Evolutions of Old Pokemon</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Glaceon/Leafeon</strong> - Eevee evolutions (Ice/Grass)</div>
                  <div><strong>Magnezone</strong> - Magneton evolution (Electric/Steel)</div>
                  <div><strong>Electivire</strong> - Electabuzz evolution with Electirizer</div>
                  <div><strong>Magmortar</strong> - Magmar evolution with Magmarizer</div>
                  <div><strong>Rhyperior</strong> - Rhydon evolution with Protector</div>
                  <div><strong>Togekiss</strong> - Togetic evolution (Fairy/Flying in later gens)</div>
                  <div><strong>Yanmega</strong> - Yanma evolution (Bug/Flying)</div>
                  <div><strong>Mamoswine</strong> - Piloswine evolution (Ice/Ground)</div>
                  <div><strong>Weavile</strong> - Sneasel evolution (Dark/Ice)</div>
                  <div><strong>Porygon-Z</strong> - Porygon2 evolution (Normal)</div>
                  <div><strong>Gallade</strong> - Male Kirlia evolution (Psychic/Fighting)</div>
                  <div><strong>Dusknoir</strong> - Dusclops evolution (Ghost)</div>
                  <div><strong>Froslass</strong> - Female Snorunt evolution (Ice/Ghost)</div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Popular Sinnoh Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Lucario</strong> (Fighting/Steel) - Aura Pokemon, Mega Evolution<br />
                  <strong>Garchomp</strong> (Dragon/Ground) - Cynthia's ace, pseudo-legendary<br />
                  <strong>Rotom</strong> (Electric/Ghost + forms) - Appliance forms (Mow, Frost, Heat, Wash, Fan)<br />
                  <strong>Spiritomb</strong> (Ghost/Dark) - No weaknesses until Gen 6<br />
                  <strong>Toxicroak</strong> (Poison/Fighting) - Dry Skin ability<br />
                  <strong>Staraptor</strong> (Normal/Flying) - Intimidate, Close Combat<br />
                  <strong>Luxray</strong> (Electric) - X-ray vision lore<br />
                  <strong>Floatzel</strong> (Water) - Swift Swim sweeper
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Sinnoh Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Arceus</strong> (any form),{" "}
                  <strong>Dialga</strong>,{" "}
                  <strong>Palkia</strong>,{" "}
                  <strong>Giratina-Origin</strong>,{" "}
                  <strong>Darkrai</strong> (Dark Void banned)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Garchomp</strong> (Sand Veil banned in some formats),{" "}
                  <strong>Infernape</strong> (mixed attacker),{" "}
                  <strong>Rotom-Wash</strong> (only one weakness),{" "}
                  <strong>Heatran</strong> (4x resist Fairy),{" "}
                  <strong>Azelf</strong> (lead suicide)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun VGC Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Cresselia</strong> (best support legendary),{" "}
                  <strong>Heatran</strong> (Eruption user),{" "}
                  <strong>Togekiss</strong> (Serene Grace flinch)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Sinnoh Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">⚔️ Physical/Special Split</h3>
                <p className="text-sm text-brown/70">
                  Gen 4 introduced the <strong>Physical/Special split</strong>. Before, types determined if moves were Physical or Special (Fire was always Special). Now each move is individually classified. This made Pokemon like Gyarados, Weavile, and Flareon viable.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🌋 Mt. Coronet - Center of Sinnoh</h3>
                <p className="text-sm text-brown/70">
                  <strong>Mt. Coronet</strong> is the largest mountain in Pokemon, splitting Sinnoh in half. The Spear Pillar at its summit is where Dialga/Palkia are summoned by Team Galactic. In Platinum, the Distortion World is accessed here.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-gray-700/10">
                <h3 className="font-bold text-brown mb-2">👻 Distortion World (Platinum Exclusive)</h3>
                <p className="text-sm text-brown/70">
                  Pokemon Platinum added the <strong>Distortion World</strong>, Giratina's home dimension with broken physics and upside-down gravity. One of the most memorable areas in Pokemon history.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">⛏️ The Underground</h3>
                <p className="text-sm text-brown/70">
                  Sinnoh's <strong>Underground</strong> system allowed multiplayer mining for fossils, evolution stones, and decorations for secret bases. Used DS wireless communication for local multiplayer.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">👸 Champion Cynthia</h3>
                <p className="text-sm text-brown/70">
                  <strong>Cynthia</strong> is considered one of the hardest Pokemon Champions ever. Her team includes Garchomp (Dragon/Ground), Spiritomb (no weaknesses in Gen 4), Milotic, Lucario, Togekiss, and Roserade. Her Garchomp is level 66 in Platinum!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🎭 Rotom Forms</h3>
                <p className="text-sm text-brown/70">
                  <strong>Rotom</strong> can possess appliances in Platinum to gain new forms and types: <strong>Rotom-Heat</strong> (Oven), <strong>Rotom-Wash</strong> (Washing Machine), <strong>Rotom-Frost</strong> (Refrigerator), <strong>Rotom-Fan</strong> (Fan), <strong>Rotom-Mow</strong> (Lawnmower).
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
                href="/hoenn-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🌊 Hoenn Pokemon (Gen 3)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Ruby & Sapphire - Weather Trio
                </p>
              </Link>
              <Link
                href="/unova-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🗽 Unova Pokemon (Gen 5)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Black & White with Tao Trio
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
              Sinnoh Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Sinnoh?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Sinnoh introduced <strong>107 new Pokemon</strong> (#387-493), including 29 new evolutions of older Pokemon. The Sinnoh Pokedex contains 210 Pokemon in Platinum.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What is the Physical/Special split?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Before Gen 4, moves were Physical or Special based on their <strong>type</strong> (Fire was always Special). Gen 4 made each move <strong>individually Physical or Special</strong>, which revolutionized competitive play and made many Pokemon viable (e.g., Gyarados can finally use STAB Waterfall).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Sinnoh starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Infernape</strong> is the most popular with excellent mixed attacking stats. <strong>Empoleon</strong> has a unique Water/Steel typing with only one weakness (Ground). <strong>Torterra</strong> struggles late-game due to Grass/Ground typing's many weaknesses.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Should I play Diamond/Pearl or Platinum?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Platinum</strong> is superior: faster battles, expanded Pokedex (210 vs 151), Battle Frontier, Distortion World, Giratina Origin Forme, and better Team Galactic storyline. The 2021 <strong>BDSP remakes</strong> are closer to Diamond/Pearl (no Distortion World).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Is Arceus the strongest Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Arceus</strong> has 720 base stat total (highest in Gen 4) and can change to any type with Plates. In lore, it's the Pokemon god who created the universe. Competitively, it's Ubers tier and banned from most formats. Later generations introduced stronger Pokemon (Ultra Necrozma has 754 BST).
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
