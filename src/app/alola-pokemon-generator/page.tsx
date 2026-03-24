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
  title: "Gen 7 Random Team Generator | Alola Pokemon Sun Moon Ultra",
  description:
    "Generate random Alola Pokemon teams from Gen 7 (Pokemon #722-809)! Sun, Moon & Ultra versions with Ultra Beasts, Alolan forms & Z-Moves. Updated January 2026.",
  keywords: [
    "gen 7 random team generator",
    "alola pokemon team builder",
    "sun moon team generator",
    "gen 7 pokemon randomizer",
    "alola randomizer free",
    "ultra beast team generator",
    "gen 7 nuzlocke generator",
    "alolan forms generator",
    "z-moves team builder",
  ],
  alternates: {
    canonical: `${siteUrl}/alola-pokemon-generator`,
  },
  openGraph: {
    title: "Random Alola Pokemon Generator | Gen 7 Sun & Moon",
    description:
      "Generate random Alola Pokemon from Gen 7! Sun & Moon Pokemon with Ultra Beasts and Alolan forms.",
    url: `${siteUrl}/alola-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alola Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Alola Pokemon Generator | Gen 7 Sun & Moon",
    description:
      "Generate random Alola Pokemon from Gen 7! Ultra Beasts included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const alolaJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 7 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Alola region (Gen 7 - Sun & Moon), including Ultra Beasts and Alolan forms. Pokemon #722-809.",
  url: `${siteUrl}/alola-pokemon-generator`,
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

export default function AlolaPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(alolaJsonLd) }}
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
              Alola Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 7 • SUN & MOON</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 7 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Alola Pokemon teams</strong> from Generation 7 (Pokemon #722-809)!
            Perfect for Sun, Moon, Ultra Sun & Ultra Moon Nuzlockes, Ultra Beast teams, and Z-Move showcases.
            Includes Alolan forms and Island Guardians.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Ultra Beast and Z-Move strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-yellow-400 border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-900" />
              <h3 className="font-bold mb-1 text-gray-900">80+ New Pokemon</h3>
              <p className="text-sm text-gray-800">
                Tropical island paradise
              </p>
            </div>
            <div className="bg-purple-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">👾</span>
              <h3 className="font-bold mb-1">11 Ultra Beasts</h3>
              <p className="text-sm text-white/90">
                Extradimensional Pokemon
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">💎</span>
              <h3 className="font-bold mb-1">Z-Moves</h3>
              <p className="text-sm text-white/90">
                Devastating special attacks
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
              About the Alola Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Alola</strong> is the seventh region in the Pokemon series,
              featured in Pokemon Sun, Moon, Ultra Sun, and Ultra Moon (2016-2017).
              Based on Hawaii, Alola is an archipelago of four islands with a
              tropical theme, Island Trials instead of Gyms, and mysterious Ultra
              Wormholes bringing Ultra Beasts.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Alola include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>81 New Pokemon:</strong> #722 Rowlet to #802 Marshadow
              </li>
              <li>
                <strong>Island Trials:</strong> Replace traditional Gym system with Kahunas
              </li>
              <li>
                <strong>Z-Moves:</strong> One-time ultimate attacks using Z-Crystals
              </li>
              <li>
                <strong>Ultra Beasts:</strong> 11 alien Pokemon from Ultra Space
              </li>
              <li>
                <strong>Alolan Forms:</strong> Regional variants of Kanto Pokemon
              </li>
              <li>
                <strong>No HMs:</strong> Replaced with Ride Pokemon (Tauros, Charizard, etc.)
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Ultra Beasts & Legendary Pokemon
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-purple-600 bg-purple-600/10 p-4">
                <h3 className="font-bold text-purple-600 mb-2 text-xl">👾 Ultra Beasts (UBs)</h3>
                <div className="space-y-2 text-sm text-brown/80">
                  <p className="mb-2">Extradimensional Pokemon with the "Beast Boost" ability:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div><strong>UB-01 Nihilego</strong> - Rock/Poison (Jellyfish)</div>
                    <div><strong>UB-02 Absorption Buzzwole</strong> - Bug/Fighting (Mosquito)</div>
                    <div><strong>UB-02 Beauty Pheromosa</strong> - Bug/Fighting (Cockroach)</div>
                    <div><strong>UB-03 Lightning Xurkitree</strong> - Electric (Christmas tree)</div>
                    <div><strong>UB-04 Blaster Celesteela</strong> - Steel/Flying (Rocket)</div>
                    <div><strong>UB-04 Blade Kartana</strong> - Grass/Steel (Origami)</div>
                    <div><strong>UB-05 Glutton Guzzlord</strong> - Dark/Dragon (Black hole)</div>
                    <div><strong>UB Burst Blacephalon</strong> (USUM) - Fire/Ghost</div>
                    <div><strong>UB Assembly Stakataka</strong> (USUM) - Rock/Steel</div>
                    <div><strong>Poipole → Naganadel</strong> (USUM) - Poison/Dragon</div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-yellow bg-yellow/20 p-4">
                <h3 className="font-bold text-brown mb-2 text-xl">🌴 Island Guardians (Tapu)</h3>
                <div className="space-y-1 text-sm text-brown/80">
                  <div><strong>Tapu Koko</strong> (#785) - Electric/Fairy - Melemele Island - Electric Surge</div>
                  <div><strong>Tapu Lele</strong> (#786) - Psychic/Fairy - Akala Island - Psychic Surge</div>
                  <div><strong>Tapu Bulu</strong> (#787) - Grass/Fairy - Ula'ula Island - Grassy Surge</div>
                  <div><strong>Tapu Fini</strong> (#788) - Water/Fairy - Poni Island - Misty Surge</div>
                </div>
              </div>

              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2 text-xl">🌙 Cosmog Evolution Line (Box Legendaries)</h3>
                <div className="text-sm text-brown/80">
                  <strong>Cosmog → Cosmoem → Solgaleo/Lunala</strong><br />
                  <strong>Solgaleo</strong> (#791) - Psychic/Steel - Sun legendary<br />
                  <strong>Lunala</strong> (#792) - Psychic/Ghost - Moon legendary<br />
                  Both fuse with Necrozma for Ultra forms in USUM
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🔱 Necrozma Forms</h3>
                <p className="text-sm text-brown/70">
                  <strong>Necrozma</strong> (#800) - Psychic<br />
                  <strong>Dusk Mane Necrozma</strong> - Psychic/Steel (fuses with Solgaleo)<br />
                  <strong>Dawn Wings Necrozma</strong> - Psychic/Ghost (fuses with Lunala)<br />
                  <strong>Ultra Necrozma</strong> - Psychic/Dragon (highest BST: 754)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Magearna</strong> (#801) - Steel/Fairy - QR code event<br />
                  <strong>Marshadow</strong> (#802) - Fighting/Ghost - Movie distribution<br />
                  <strong>Zeraora</strong> (#807) - Electric - Event-exclusive<br />
                  <strong>Meltan → Melmetal</strong> (#808-809) - Steel - Pokemon GO exclusive
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Alolan Forms & Popular Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Alola Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Rowlet → Dartrix → Decidueye</strong> (Grass/Ghost) - Archer owl<br />
                  <strong>Litten → Torracat → Incineroar</strong> (Fire/Dark) - Wrestler cat<br />
                  <strong>Popplio → Brionne → Primarina</strong> (Water/Fairy) - Siren seal
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Jangmo-o → Hakamo-o → Kommo-o</strong> (Dragon/Fighting)<br />
                  600 BST, exclusive Z-Move: Clangorous Soulblaze
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🏝️ Alolan Regional Forms</h3>
                <p className="text-sm text-brown/70">
                  <strong>Alolan Raichu</strong> (Electric/Psychic) - Surfs on tail<br />
                  <strong>Alolan Exeggutor</strong> (Grass/Dragon) - "Long boi" meme<br />
                  <strong>Alolan Vulpix → Ninetales</strong> (Ice/Fairy) - Snowy variant<br />
                  <strong>Alolan Sandshrew → Sandslash</strong> (Ice/Steel) - Ice type<br />
                  <strong>Alolan Marowak</strong> (Fire/Ghost) - Spirit dancer<br />
                  <strong>Alolan Diglett/Dugtrio</strong> (Ground/Steel) - Fabulous hair<br />
                  <strong>Alolan Meowth → Persian</strong> (Dark) - Round face
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Popular Alola Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Mimikyu</strong> (Ghost/Fairy) - Disguise ability, extremely popular<br />
                  <strong>Lycanroc</strong> (Rock) - 3 forms: Midday, Midnight, Dusk<br />
                  <strong>Toxapex</strong> (Poison/Water) - Regenerator, OU tier wall<br />
                  <strong>Golisopod</strong> (Bug/Water) - Emergency Exit, samurai design<br />
                  <strong>Salazzle</strong> (Poison/Fire) - Female-only evolution
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Alola Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Ultra Necrozma</strong>, <strong>Dusk Mane Necrozma</strong>,{" "}
                  <strong>Dawn Wings Necrozma</strong>, <strong>Solgaleo</strong>,{" "}
                  <strong>Lunala</strong>, <strong>Naganadel</strong>
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Toxapex</strong> (best wall in Gen 7),{" "}
                  <strong>Kartana</strong> (Ultra Beast),{" "}
                  <strong>Tapu Koko</strong>, <strong>Tapu Lele</strong>,{" "}
                  <strong>Mimikyu</strong> (Disguise ability)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun VGC Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Incineroar</strong> (Intimidate support - most used Pokemon in VGC),{" "}
                  <strong>Tapu Fini</strong> (Misty Surge),{" "}
                  <strong>Kommo-o</strong> (Clangorous Soulblaze)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Alola Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">🏝️ No Traditional Gyms</h3>
                <p className="text-sm text-brown/70">
                  Alola replaced Gym Leaders with <strong>Island Trials</strong>. Complete trials, battle Totem Pokemon (powered-up versions), then face Island Kahunas (Hala, Olivia, Nanu, Hapu) for Grand Trials.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">💎 Z-Moves System</h3>
                <p className="text-sm text-brown/70">
                  Z-Moves are one-time ultimate attacks requiring Z-Crystals and Z-Ring. Each type has a generic Z-Move, plus 30+ exclusive ones (e.g., <strong>Pikachu's Catastropika</strong>, <strong>Eevee's Extreme Evoboost</strong>).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🌊 SOS Battles</h3>
                <p className="text-sm text-brown/70">
                  Wild Pokemon can call for help, creating SOS battles. Chaining SOS calls increases shiny odds, IVs, and can reveal hidden abilities or rare Pokemon. Popular shiny hunting method!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">👾 Ultra Space Wilds (USUM)</h3>
                <p className="text-sm text-brown/70">
                  Ultra Sun/Ultra Moon added <strong>Ultra Warp Ride</strong> minigame to catch legendaries from past generations (Mewtwo, Rayquaza, Giratina, etc.) and Ultra Beasts in their home dimensions.
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
                href="/galar-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-purple-600 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⚔️ Galar Pokemon (Gen 8)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Sword & Shield with Dynamax
                </p>
              </Link>
              <Link
                href="/kalos-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🗼 Kalos Pokemon (Gen 6)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  X & Y with Mega Evolution
                </p>
              </Link>
              <Link
                href="/paldea-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
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
              Alola Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Alola?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Alola introduced <strong>81 new Pokemon</strong> (#722-802), plus 18 Alolan forms of Kanto Pokemon. The Alola Pokedex contains 403 Pokemon in Ultra Sun/Ultra Moon.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are Ultra Beasts?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Ultra Beasts</strong> are 11 Pokemon from alternate dimensions (Ultra Space) with alien designs and the "Beast Boost" ability. They're catchable in special Beast Balls and are neither legendary nor mythical - a unique category.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Alola starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Primarina</strong> handles more trials effectively (Fairy type vs Dragon Kahuna). <strong>Decidueye</strong> is popular for Ghost typing. <strong>Incineroar</strong> became the most-used Pokemon in VGC with Intimidate ability.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Should I play Sun/Moon or Ultra Sun/Ultra Moon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Ultra Sun/Ultra Moon</strong> are enhanced versions with more content: additional Ultra Beasts, Necrozma forms, Ultra Warp Ride to catch past legendaries, expanded story, and Battle Agency. USUM is generally recommended.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How do Z-Moves work?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Hold a Z-Crystal matching a move's type (e.g., Firium Z for Fire moves), press Z during battle to activate. Each Pokemon can only use one Z-Move per battle. Some Pokemon have exclusive Z-Moves (Pikachu, Decidueye, Primarina, Incineroar, etc.).
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
