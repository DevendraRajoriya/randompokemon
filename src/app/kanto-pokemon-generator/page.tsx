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
  title: "Gen 1 Random Team Generator | Kanto Pokemon Red Blue Yellow",
  description:
    "Generate random Kanto Pokemon teams from Gen 1 (Pokemon #1-151)! The original 151 from Red, Blue, Yellow, FireRed & LeafGreen. Updated January 2026 with classic strategies.",
  keywords: [
    "gen 1 random team generator",
    "kanto pokemon team builder",
    "original 151 team generator",
    "gen 1 pokemon randomizer",
    "red blue yellow team builder",
    "kanto randomizer free",
    "gen 1 nuzlocke generator",
    "classic pokemon team builder",
    "kanto pokemon with filters",
  ],
  alternates: {
    canonical: `${siteUrl}/kanto-pokemon-generator`,
  },
  openGraph: {
    title: "Gen 1 Random Team Generator | Kanto Pokemon Red Blue Yellow",
    description:
      "Generate random Kanto Pokemon teams from Gen 1 (Pokemon #1-151)! Original 151 included. Updated January 2026.",
    url: `${siteUrl}/kanto-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kanto Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen 1 Random Team Generator | Kanto Pokemon Red Blue Yellow",
    description:
      "Generate random Kanto Pokemon teams from Gen 1! Original 151 included. Updated January 2026.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const kantoJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 1 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Kanto region (Gen 1), featuring the original 151 Pokemon from Red, Blue, Yellow, FireRed & LeafGreen. Pokemon #1-151.",
  url: `${siteUrl}/kanto-pokemon-generator`,
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

export default function KantoPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kantoJsonLd) }}
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
              Kanto Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 1 • ORIGINAL 151</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 1 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Kanto Pokemon teams</strong> from Generation 1 (Pokemon #1-151)!
            Perfect for Red, Blue, Yellow, FireRed & LeafGreen Nuzlockes, classic challenges, and nostalgic playthroughs.
            Experience the original 151 Pokemon that started it all.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with classic strategies and tips"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">Original 151</h3>
              <p className="text-sm text-white/90">
                The Pokemon that started it all
              </p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🎮</span>
              <h3 className="font-bold text-gray-900 mb-1">Classic Experience</h3>
              <p className="text-sm text-gray-800">
                Red, Blue, Yellow nostalgia
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🏆</span>
              <h3 className="font-bold mb-1">Iconic Pokemon</h3>
              <p className="text-sm text-white/90">
                Charizard, Mewtwo, Pikachu
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
              About the Kanto Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Kanto</strong> is the first region introduced in the
              Pokemon series, featured in Pokemon Red, Blue, Yellow (1996-1998)
              and their remakes FireRed and LeafGreen (2004). Based on the Kanto
              region of Japan, it's where the Pokemon phenomenon began with the
              original 151 species.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Kanto include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>The Original 151:</strong> Bulbasaur (#001) to Mew (#151)
              </li>
              <li>
                <strong>8 Gyms:</strong> Boulder, Cascade, Thunder, Rainbow, Soul, Marsh, Volcano, Earth Badges
              </li>
              <li>
                <strong>Legendary Birds:</strong> Articuno, Zapdos, Moltres
              </li>
              <li>
                <strong>Mewtwo:</strong> The most powerful Pokemon in Gen 1
              </li>
              <li>
                <strong>Victory Road:</strong> Path to the Pokemon League and Elite Four
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Complete Kanto Pokemon List (Original 151)
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Starter Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Bulbasaur → Ivysaur → Venusaur</strong> (Grass/Poison)<br />
                  <strong>Charmander → Charmeleon → Charizard</strong> (Fire/Flying)<br />
                  <strong>Squirtle → Wartortle → Blastoise</strong> (Water)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Pikachu Line</h3>
                <p className="text-sm text-brown/70">
                  <strong>Pichu → Pikachu → Raichu</strong> (Electric) - The franchise mascot! Note: Pichu is Gen 2, but Pikachu line started in Gen 1.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🦅 Legendary Birds</h3>
                <p className="text-sm text-brown/70">
                  <strong>Articuno</strong> (#144) - Ice/Flying - Seafoam Islands<br />
                  <strong>Zapdos</strong> (#145) - Electric/Flying - Power Plant<br />
                  <strong>Moltres</strong> (#146) - Fire/Flying - Victory Road
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🧬 Legendary Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Mewtwo</strong> (#150) - Psychic - Created from Mew's DNA, catchable in Cerulean Cave<br />
                  <strong>Mew</strong> (#151) - Psychic - Mythical Pokemon, event-exclusive
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Dragon Types</h3>
                <p className="text-sm text-brown/70">
                  <strong>Dratini → Dragonair → Dragonite</strong> - The only Dragon line in Gen 1<br />
                  Lance's signature Pokemon family
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">👻 Ghost Types</h3>
                <p className="text-sm text-brown/70">
                  <strong>Gastly → Haunter → Gengar</strong> (Ghost/Poison)<br />
                  The only Ghost-type evolutionary line in Gen 1
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">💪 Popular Kanto Pokemon</h3>
                <p className="text-sm text-brown/70">
                  Alakazam, Machamp, Golem, Lapras, Snorlax, Gyarados, Eevee (+ evolutions), Dragonite, Arcanine, Gengar, Starmie, Exeggutor
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🔄 Eevee Evolutions (Gen 1)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Vaporeon</strong> (Water) - Water Stone<br />
                  <strong>Jolteon</strong> (Electric) - Thunder Stone<br />
                  <strong>Flareon</strong> (Fire) - Fire Stone<br />
                  <em className="text-xs">Note: 5 more Eeveelutions added in later generations</em>
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Kanto Pokemon (Competitive & Nostalgia)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 S-Tier (Competitive Powerhouses)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Mewtwo</strong> (uber tier - banned from standard play),{" "}
                  <strong>Mew</strong> (mythical), <strong>Dragonite</strong>,{" "}
                  <strong>Alakazam</strong>, <strong>Gengar</strong>
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 A-Tier (Very Strong)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Charizard</strong> (2 Mega Evolutions in later gens),{" "}
                  <strong>Snorlax</strong>, <strong>Lapras</strong>,{" "}
                  <strong>Starmie</strong>, <strong>Exeggutor</strong>
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fan Favorites (Nostalgia Picks)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Pikachu</strong>, <strong>Blastoise</strong>,{" "}
                  <strong>Arcanine</strong>, <strong>Gyarados</strong>,{" "}
                  <strong>Articuno</strong>, <strong>Raichu</strong>
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Kanto Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">📊 Gen 1 Statistics</h3>
                <ul className="text-sm text-brown/70 space-y-1">
                  <li>• <strong>151 Pokemon total</strong> (Bulbasaur to Mew)</li>
                  <li>• <strong>15 Pokemon types</strong> (Dark & Steel added in Gen 2, Fairy in Gen 6)</li>
                  <li>• <strong>50 fully evolved Pokemon</strong></li>
                  <li>• <strong>4 legendary Pokemon</strong> (Articuno, Zapdos, Moltres, Mewtwo)</li>
                  <li>• <strong>1 mythical Pokemon</strong> (Mew)</li>
                </ul>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">🎮 Game Mechanics</h3>
                <p className="text-sm text-brown/70">
                  Gen 1 had several quirks: Psychic types had no weakness (Ghost moves didn't work due to a bug), critical hits were based on Speed stat, Focus Energy actually lowered crit rate, and Wrap/Bind were overpowered.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">🐛 MissingNo. & Glitches</h3>
                <p className="text-sm text-brown/70">
                  Kanto is famous for MissingNo., a glitch Pokemon accessible via the "Old Man glitch" on Cinnabar Island. While not an official Pokemon, it's a beloved part of Gen 1 history.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🌟 Most Popular Kanto Pokemon</h3>
                <p className="text-sm text-brown/70">
                  According to official polls: <strong>#1 Charizard</strong>, #2 Mewtwo, #3 Pikachu, #4 Dragonite, #5 Gengar. Charizard consistently ranks as one of the most beloved Pokemon globally.
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
                href="/johto-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  💛 Johto Pokemon (Gen 2)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Gold, Silver & Crystal region
                </p>
              </Link>
              <Link
                href="/hoenn-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🌊 Hoenn Pokemon (Gen 3)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Ruby, Sapphire & Emerald
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
              Kanto Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Kanto?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  The original Kanto Pokedex has 151 Pokemon (Bulbasaur #001 to Mew #151). This includes all starters, evolutions, legendaries, and the mythical Mew.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What's the strongest Kanto Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Mewtwo</strong> has the highest base stat total (680) in Gen 1, making it the strongest. It's banned from standard competitive play. For non-legendaries, <strong>Dragonite</strong> (600 BST) is the strongest.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Kanto starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Depends on your goal! <strong>Bulbasaur</strong> makes early gyms easier (Brock, Misty). <strong>Charmander</strong> is harder early but Charizard is powerful late-game. <strong>Squirtle</strong> is balanced throughout. Competitive: Charizard (with Mega Evolutions).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can you catch all 151 in Red/Blue?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  No, you need to trade between Red/Blue/Yellow to complete the Pokedex. Version exclusives exist (e.g., Sandshrew in Red, Ekans in Blue). Mew requires event distribution or glitches.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are the rarest Kanto Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Mew</strong> (mythical event-only), <strong>Articuno/Zapdos/Moltres</strong> (one per game), <strong>Mewtwo</strong> (one per game), <strong>fossil Pokemon</strong> (Kabuto/Omanyte - choose one), and <strong>Eevee</strong> (only one in Celadon, but can evolve into 3 forms).
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
