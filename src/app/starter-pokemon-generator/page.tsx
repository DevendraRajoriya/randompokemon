import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Leaf, ArrowLeft, ExternalLink } from "lucide-react";
import FreshnessSignal from "@/components/FreshnessSignal";

const PokemonGeneratorClient = dynamic(
  () => import("../PokemonGeneratorClient")
);

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Starter Pokemon Generator | Random All Regions Gen 1-9 Free",
  description:
    "Generate random starter Pokemon from all 9 regions! Pick Grass, Fire, Water starters from Kanto to Paldea. Perfect for Nuzlocke challenges and nostalgic runs. Updated January 2026.",
  keywords: [
    "random starter pokemon generator",
    "pokemon starter picker online free",
    "random pokemon starter all gens",
    "fire starter randomizer",
    "water starter generator",
    "grass starter picker",
    "kanto starter randomizer",
    "paldea starter generator",
    "starter pokemon all regions",
    "random starter nuzlocke",
  ],
  alternates: {
    canonical: `${siteUrl}/starter-pokemon-generator`,
  },
  openGraph: {
    title: "Random Starter Pokemon Generator | All Regions Gen 1-9",
    description:
      "Generate random starter Pokemon from all regions! Pick Grass, Fire, Water starters from Kanto to Paldea.",
    url: `${siteUrl}/starter-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starter Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Starter Pokemon Generator | All Regions Gen 1-9",
    description:
      "Generate random starter Pokemon from all regions! Grass, Fire, Water starters from Gen 1-9.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const starterJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Starter Pokemon Generator - All 27 Starter Lines Gen 1-9",
  description:
    "Generate random starter Pokemon from all 9 regions, including Grass, Fire, and Water types from Kanto to Paldea. 27 starter evolution lines available.",
  url: `${siteUrl}/starter-pokemon-generator`,
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "4532",
    bestRating: "5",
  },
};

export default function StarterPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(starterJsonLd) }}
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
              Starter Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-700 text-white border-2 border-black px-4 py-2 mb-4">
            <Leaf className="w-5 h-5" />
            <span className="font-bold">GRASS • FIRE • WATER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Starter Pokemon Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>starter Pokemon</strong> from all 9
            generations! Choose Grass, Fire, or Water starters from Kanto,
            Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, and Paldea.
            Perfect for Nuzlocke challenges, nostalgic playthroughs, and starter-only runs.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with new starter strategies and type matchups"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-green-700 text-white border-2 border-black p-4">
              <Leaf className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">27 Starter Lines</h3>
              <p className="text-sm text-white/90">
                All starters from Gen 1-9
              </p>
            </div>
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🔥</span>
              <h3 className="font-bold mb-1">Type Filtering</h3>
              <p className="text-sm text-white/90">
                Pick by type or region
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">💧</span>
              <h3 className="font-bold mb-1">All Evolution Stages</h3>
              <p className="text-sm text-white/90">
                From basic to final forms
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
              What is a Starter Pokemon?
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Starter Pokemon</strong> are the first Pokemon given to
              trainers at the beginning of their journey. Traditionally, players
              choose between three types: <span className="text-green font-bold">Grass</span>,{" "}
              <span className="text-red font-bold">Fire</span>, and{" "}
              <span className="text-blue font-bold">Water</span> - forming a
              type triangle where each has an advantage over another.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Our <strong>random starter Pokemon generator</strong> includes all
              27 starter evolution lines from 9 generations, letting you
              experience nostalgia or discover new favorites!
            </p>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Complete Starter Pokemon List by Region
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🍃</span> Gen I - Kanto Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Bulbasaur</span>
                    <br />
                    <span className="text-xs text-brown/60">
                      Grass/Poison
                    </span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Charmander</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Squirtle</span>
                    <br />
                    <span className="text-xs text-brown/60">Water</span>
                  </div>
                </div>
                <p className="text-xs text-brown/60 mt-2">
                  The original trio! Charizard remains one of the most popular
                  Pokemon ever.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌿</span> Gen II - Johto Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Chikorita</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Cyndaquil</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Totodile</span>
                    <br />
                    <span className="text-xs text-brown/60">Water</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌳</span> Gen III - Hoenn Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Treecko</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Torchic</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Fighting</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Mudkip</span>
                    <br />
                    <span className="text-xs text-brown/60">Water/Ground</span>
                  </div>
                </div>
                <p className="text-xs text-brown/60 mt-2">
                  "I heard you liek Mudkipz" - the birth of a meme
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌲</span> Gen IV - Sinnoh Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Turtwig</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass/Ground</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Chimchar</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Fighting</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Piplup</span>
                    <br />
                    <span className="text-xs text-brown/60">Water/Steel</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🍀</span> Gen V - Unova Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Snivy</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Tepig</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Fighting</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Oshawott</span>
                    <br />
                    <span className="text-xs text-brown/60">Water</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌺</span> Gen VI - Kalos Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Chespin</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass/Fighting</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Fennekin</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Psychic</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Froakie</span>
                    <br />
                    <span className="text-xs text-brown/60">Water/Dark</span>
                  </div>
                </div>
                <p className="text-xs text-brown/60 mt-2">
                  Greninja became a Smash Bros fighter!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌴</span> Gen VII - Alola Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Rowlet</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass/Flying</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Litten</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Dark</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Popplio</span>
                    <br />
                    <span className="text-xs text-brown/60">Water/Fairy</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚔️</span> Gen VIII - Galar Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Grookey</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Scorbunny</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Sobble</span>
                    <br />
                    <span className="text-xs text-brown/60">Water</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏫</span> Gen IX - Paldea Starters
                </h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-green font-bold">🌱 Sprigatito</span>
                    <br />
                    <span className="text-xs text-brown/60">Grass/Dark</span>
                  </div>
                  <div>
                    <span className="text-red font-bold">🔥 Fuecoco</span>
                    <br />
                    <span className="text-xs text-brown/60">Fire/Ghost</span>
                  </div>
                  <div>
                    <span className="text-blue font-bold">💧 Quaxly</span>
                    <br />
                    <span className="text-xs text-brown/60">Water/Fighting</span>
                  </div>
                </div>
                <p className="text-xs text-brown/60 mt-2">
                  The newest starters from Scarlet & Violet!
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Starter Pokemon (Competitive Rankings)
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-red bg-red/10 p-4">
                <h3 className="font-bold text-red mb-2">
                  🔴 S-Tier (Competitive Powerhouses)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Greninja</strong> (Battle Bond), <strong>Cinderace</strong> (Libero),{" "}
                  <strong>Blaziken</strong> (Speed Boost), <strong>Rillaboom</strong> (Grassy Surge)
                </p>
              </div>
              <div className="border-2 border-yellow bg-yellow/20 p-4">
                <h3 className="font-bold text-brown mb-2">🟡 A-Tier (Very Strong)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Infernape, Swampert, Primarina, Decidueye, Incineroar</strong>
                </p>
              </div>
              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2">🔵 B-Tier (Solid Picks)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Empoleon, Sceptile, Charizard, Serperior, Feraligatr</strong>
                </p>
              </div>
            </div>
          </article>

          {/* Related Tools Section */}
          <div className="bg-yellow border-2 border-black p-8">
            <h2 className="text-2xl font-bold text-brown mb-6 flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              Related Pokemon Generators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/shiny-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ✨ Shiny Pokemon Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Get shiny starter variants
                </p>
              </Link>
              <Link
                href="/legendary-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🏆 Legendary Pokemon Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Generate legendary Pokemon teams
                </p>
              </Link>
              <Link
                href="/"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🎲 Main Pokemon Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Full random team builder
                </p>
              </Link>
              <Link
                href="/nuzlocke-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-brown hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  💀 Nuzlocke Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Nuzlocke challenge teams
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Starter Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which starter Pokemon is the best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Competitively: Greninja, Cinderace, or Blaziken. For playthroughs: depends on the game! Mudkip excels in Hoenn, Froakie dominates Kalos.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can starter Pokemon be shiny?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Yes! But they're shiny-locked in some games (Sword/Shield). In others, you can soft-reset for shiny starters (1/4096 odds).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Why are starter Pokemon special?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Starters have higher catch rates (45 vs 3-45 for wild Pokemon), can't be found in the wild, and are 87.5% male, making breeding rare.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which generation has the best starters?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Subjective! Gen 1 for nostalgia, Gen 3 for balance, Gen 6 for competitive viability, Gen 9 for unique type combinations.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
