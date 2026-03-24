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
  title: "Gen 2 Random Team Generator | Johto Pokemon Gold Silver Crystal",
  description:
    "Generate random Johto Pokemon teams from Gen 2 (Pokemon #152-251)! Includes Gold, Silver & Crystal with Legendary Beasts, Ho-Oh & Lugia. Updated January 2026.",
  keywords: [
    "gen 2 random team generator",
    "johto pokemon team builder",
    "gen 2 pokemon randomizer",
    "gold silver team generator",
    "johto randomizer free",
    "legendary beasts generator",
    "gen 2 nuzlocke generator",
    "crystal pokemon team builder",
    "johto pokemon with filters",
  ],
  alternates: {
    canonical: `${siteUrl}/johto-pokemon-generator`,
  },
  openGraph: {
    title: "Random Johto Pokemon Generator | Gen 2 Gold & Silver",
    description:
      "Generate random Johto Pokemon from Gen 2! Gold & Silver Pokemon with Legendary Beasts.",
    url: `${siteUrl}/johto-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Johto Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Johto Pokemon Generator | Gen 2 Gold & Silver",
    description:
      "Generate random Johto Pokemon from Gen 2! Legendary Beasts included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const johtoJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 2 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Johto region (Gen 2 - Gold, Silver & Crystal), including the Legendary Beasts, Ho-Oh, and Lugia. Pokemon #152-251.",
  url: `${siteUrl}/johto-pokemon-generator`,
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

export default function JohtoPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(johtoJsonLd) }}
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
              Johto Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 2 • GOLD & SILVER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 2 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Johto Pokemon teams</strong> from Generation 2 (Pokemon #152-251)!
            Perfect for Gold, Silver & Crystal Nuzlockes, Legendary Beast hunts, and dual-region challenges.
            Includes Ho-Oh, Lugia, and the ability to visit Kanto.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Legendary Beast strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-yellow-400 border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-900" />
              <h3 className="font-bold mb-1 text-gray-900">100 New Pokemon</h3>
              <p className="text-sm text-gray-800">
                Plus 251 total Pokedex
              </p>
            </div>
            <div className="bg-red-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">🦁</span>
              <h3 className="font-bold mb-1">Legendary Beasts</h3>
              <p className="text-sm text-white/90">
                Raikou, Entei, Suicune
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🔔</span>
              <h3 className="font-bold mb-1">Two Regions</h3>
              <p className="text-sm text-white/90">
                Johto + Kanto post-game
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
              About the Johto Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Johto</strong> is the second region in the Pokemon series,
              featured in Pokemon Gold, Silver & Crystal (1999-2000, remakes HGSS 2009).
              Based on Kansai, Japan, Johto introduced 100 new Pokemon,
              Pokemon breeding, held items, and a return to Kanto post-game.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Johto include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>100 New Pokemon:</strong> #152 Chikorita to #251 Celebi
              </li>
              <li>
                <strong>Two Regions:</strong> Complete Johto, then visit Kanto (16 Gym Badges!)
              </li>
              <li>
                <strong>Pokemon Breeding:</strong> Day Care Center, eggs, baby Pokemon
              </li>
              <li>
                <strong>Held Items:</strong> Pokemon can hold items for various effects
              </li>
              <li>
                <strong>Dark & Steel Types:</strong> Two new types introduced
              </li>
              <li>
                <strong>Day/Night Cycle:</strong> Time-based events and evolutions
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Legendary Beasts & Tower Duo
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-red bg-red/10 p-4">
                <h3 className="font-bold text-brown mb-2 text-xl">🦁 Legendary Beasts (Roaming Trio)</h3>
                <div className="text-sm text-brown/80 space-y-2">
                  <p>
                    <strong>Raikou</strong> (#243) - Electric - Thunder Pokemon - Roams Johto<br />
                    Based on raiju (thunder beast), saber-toothed tiger appearance
                  </p>
                  <p>
                    <strong>Entei</strong> (#244) - Fire - Volcano Pokemon - Roams Johto<br />
                    Based on lion/Chinese guardian lion, born from volcano eruption
                  </p>
                  <p>
                    <strong>Suicune</strong> (#245) - Water - Aurora Pokemon - Roams Johto (featured in Crystal)<br />
                    Based on qilin/leopard, purifies polluted water, Crystal mascot
                  </p>
                  <p className="mt-2 text-brown/60 italic">
                    All three died in Burned Tower fire, resurrected by Ho-Oh with new forms
                  </p>
                </div>
              </div>

              <div className="border-2 border-yellow bg-yellow/10 p-4">
                <h3 className="font-bold text-brown mb-2 text-xl">🔔 Tower Duo (Box Legendaries)</h3>
                <div className="text-sm text-brown/80">
                  <strong>Ho-Oh</strong> (#250) - Fire/Flying - Rainbow Pokemon - Gold version mascot<br />
                  Sacred Fire signature move, Tin Tower (Bell Tower), resurrected the legendary beasts<br />
                  <strong>Lugia</strong> (#249) - Psychic/Flying - Diving Pokemon - Silver version mascot<br />
                  Aeroblast signature move, Whirl Islands, controls the legendary birds (Articuno/Zapdos/Moltres)
                </div>
              </div>

              <div className="border-2 border-green bg-green/10 p-4">
                <h3 className="font-bold text-brown mb-2">🍀 Celebi (Time Travel Pokemon)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Celebi</strong> (#251) - Psychic/Grass - Mythical Pokemon, event-exclusive<br />
                  Time travel ability, Ilex Forest shrine, GS Ball in Crystal (Japan-only event)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Johto Starters & Popular Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Johto Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Chikorita → Bayleef → Meganium</strong> (Grass) - Sauropod dinosaur<br />
                  <strong>Cyndaquil → Quilava → Typhlosion</strong> (Fire) - Volcano-backed badger/weasel<br />
                  <strong>Totodile → Croconaw → Feraligatr</strong> (Water) - Alligator/crocodile
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Larvitar → Pupitar → Tyranitar</strong> (Rock/Dark)<br />
                  600 BST, Sand Stream ability, Godzilla inspiration, only available in Mt. Silver
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">👶 Baby Pokemon & Pre-Evolutions</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Pichu</strong> (Pikachu baby) - Evolves with friendship</div>
                  <div><strong>Cleffa, Igglybuff</strong> - Clefairy/Jigglypuff babies</div>
                  <div><strong>Togepi → Togetic</strong> - First egg Pokemon</div>
                  <div><strong>Tyrogue</strong> - Baby evolving to Hitmonlee/Hitmonchan/Hitmontop based on stats</div>
                  <div><strong>Smoochum, Elekid, Magby</strong> - Jynx/Electabuzz/Magmar babies</div>
                  <div><strong>Azurill</strong> (Gen 3) - Marill baby, but Wooper → Quagsire in Gen 2</div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Popular Johto Pokemon</h3>
                <div className="text-sm text-brown/70 space-y-1">
                  <div><strong>Umbreon/Espeon</strong> - Dark/Psychic Eevee evolutions (friendship based)</div>
                  <div><strong>Kingdra</strong> - Water/Dragon (Seadra with Dragon Scale)</div>
                  <div><strong>Scizor</strong> - Bug/Steel (Scyther with Metal Coat)</div>
                  <div><strong>Heracross</strong> - Bug/Fighting, Megahorn + Guts ability</div>
                  <div><strong>Houndoom</strong> - Dark/Fire, Flash Fire ability</div>
                  <div><strong>Steelix</strong> - Steel/Ground (Onix with Metal Coat)</div>
                  <div><strong>Blissey</strong> - Normal, highest HP stat in the game</div>
                  <div><strong>Ampharos</strong> - Electric, Mareep evolution line</div>
                  <div><strong>Crobat</strong> - Poison/Flying (Golbat with high friendship)</div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🥚 First Egg Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Togepi</strong> was the first egg Pokemon players received (from Professor Elm's assistant). Hatch it, raise its happiness, and evolve it to Togetic!
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Johto Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Ho-Oh</strong> (Regenerator + Sacred Fire),{" "}
                  <strong>Lugia</strong> (Multiscale wall),{" "}
                  <strong>Celebi</strong> (versatile movepool)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Tyranitar</strong> (Sand Stream + Pursuit),{" "}
                  <strong>Scizor</strong> (Technician Bullet Punch),{" "}
                  <strong>Blissey</strong> (special wall),{" "}
                  <strong>Kingdra</strong> (Rain Dance Swift Swim)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun UU/RU Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Suicune</strong> (Calm Mind sweeper),{" "}
                  <strong>Heracross</strong> (Megahorn + Guts),{" "}
                  <strong>Umbreon</strong> (physical wall)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Johto Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">🗺️ Two Regions in One Game!</h3>
                <p className="text-sm text-brown/70">
                  Gold/Silver/Crystal let you visit <strong>both Johto and Kanto</strong>! After beating the Elite Four and Champion Lance, take a ship to Kanto and battle all 8 original Gym Leaders. Then climb Mt. Silver to face <strong>Red</strong> (the player character from Gen 1) at level 81 Pokemon!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🥚 Breeding Introduced</h3>
                <p className="text-sm text-brown/70">
                  Gen 2 introduced <strong>Pokemon breeding</strong> at the Day Care Center. Leave two compatible Pokemon, get an egg, hatch baby Pokemon! This mechanic allowed IV breeding, egg moves, and introduced baby Pokemon (Pichu, Cleffa, Togepi, etc.).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-gray-700/10">
                <h3 className="font-bold text-brown mb-2">🌙 Day/Night Cycle</h3>
                <p className="text-sm text-brown/70">
                  Johto introduced a <strong>real-time day/night cycle</strong> based on the Game Boy Color's clock. Some Pokemon only appear at certain times (Hoothoot at night, Ledyba in morning). Evolutions like Umbreon (night) and Espeon (day) depend on time of day.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">⚔️ Dark & Steel Types</h3>
                <p className="text-sm text-brown/70">
                  Gen 2 introduced two new types: <strong>Dark</strong> and <strong>Steel</strong>. Dark was super effective against Psychic types (which dominated Gen 1). Many Pokemon were retroactively retyped (Magnemite became Electric/Steel).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">💎 Crystal Version Features</h3>
                <p className="text-sm text-brown/70">
                  Pokemon Crystal (2000) was the enhanced third version with: <strong>animated Pokemon sprites</strong>, ability to play as a girl, Suicune featured in storyline, Battle Tower, and expanded Pokemon movesets. First Pokemon game with color on Game Boy Color!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🎒 Held Items</h3>
                <p className="text-sm text-brown/70">
                  Gen 2 introduced <strong>held items</strong>. Pokemon can hold items like Leftovers (HP restoration), Choice Band (locked move + 50% attack), Focus Sash (survive one-hit KO), evolution items (Metal Coat, King's Rock), and berries!
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
                  🎮 Kanto Pokemon (Gen 1)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Original 151 Pokemon
                </p>
              </Link>
              <Link
                href="/hoenn-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🌊 Hoenn Pokemon (Gen 3)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Ruby & Sapphire - Weather Trio
                </p>
              </Link>
              <Link
                href="/sinnoh-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-purple-600 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⏰ Sinnoh Pokemon (Gen 4)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Diamond & Pearl - Creation Trio
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
              Johto Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Johto?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Johto introduced <strong>100 new Pokemon</strong> (#152-251), bringing the total to 251 Pokemon across both Johto and Kanto. The Johto Pokedex in HGSS contains 256 Pokemon.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can I catch the Legendary Beasts?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Yes! <strong>Raikou</strong>, <strong>Entei</strong>, and <strong>Suicune</strong> are roaming Pokemon that flee when encountered. Use Mean Look or a Master Ball to catch them. In Crystal, Suicune has a dedicated storyline with fixed encounters.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Johto starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Typhlosion</strong> is fastest with good Special Attack. <strong>Feraligatr</strong> has high Attack and learns Ice Fang. <strong>Meganium</strong> struggles because most Johto Gyms resist Grass type. Typhlosion or Feraligatr recommended.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Should I play original GS or HeartGold/SoulSilver?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>HeartGold/SoulSilver</strong> (DS, 2009) are enhanced remakes with: Pokemon walk behind you, updated graphics, expanded post-game, Battle Frontier, Safari Zone, and Physical/Special split. HGSS are considered some of the best Pokemon games ever.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How do I fight Red in Mt. Silver?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  After beating the Kanto Gym Leaders and obtaining all 16 badges, surf from Route 27 to Mt. Silver. Inside the cave, climb to the summit to face <strong>Red</strong>, the silent protagonist from Gen 1. His team includes level 81 Pikachu, Charizard, Blastoise, Venusaur, Snorlax, and Espeon/Lapras. Hardest trainer battle in Pokemon history!
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
