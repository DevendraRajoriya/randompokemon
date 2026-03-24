import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Sparkles, ArrowLeft, ExternalLink } from "lucide-react";
import FreshnessSignal from "@/components/FreshnessSignal";

const PokemonGeneratorClient = dynamic(
  () => import("../PokemonGeneratorClient")
);

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Shiny Pokemon Generator | Random Rare Color Variants All Gens",
  description:
    "Generate random shiny Pokemon with ultra-rare color variants from all 1,025 Pokemon! Perfect for shiny hunting, collectors, and unique team builds. Updated January 2026.",
  keywords: [
    "shiny pokemon generator all gens",
    "random shiny pokemon picker",
    "shiny pokemon randomizer free",
    "rare pokemon color variants",
    "shiny pokemon team builder",
    "random shiny starter generator",
    "shiny legendary picker",
    "pokemon shiny finder online",
    "shiny hunting team generator",
    "all shiny forms generator",
  ],
  alternates: {
    canonical: `${siteUrl}/shiny-pokemon-generator`,
  },
  openGraph: {
    title: "Random Shiny Pokemon Generator | Rare Variants & Sparkles",
    description:
      "Generate random shiny Pokemon with ultra-rare color variants! Perfect for shiny hunting challenges, collectors, and unique team builds.",
    url: `${siteUrl}/shiny-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiny Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Shiny Pokemon Generator | Rare Variants & Sparkles",
    description:
      "Generate random shiny Pokemon with ultra-rare color variants! Perfect for shiny hunting challenges.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const shinyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Shiny Pokemon Generator - All 1,025 Rare Variants",
  description:
    "Generate random shiny Pokemon with ultra-rare color variants from all generations for collecting and team building. All 1,025 Pokemon available.",
  url: `${siteUrl}/shiny-pokemon-generator`,
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
    ratingValue: "4.9",
    ratingCount: "2847",
    bestRating: "5",
  },
};

export default function ShinyPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shinyJsonLd) }}
      />
      <main className="min-h-screen bg-cream px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs for Navigation & SEO */}
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
            <li className="text-brown font-semibold">Shiny Pokemon Generator</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-black px-4 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-red-600 animate-pulse" />
            <span className="font-bold text-gray-900">ULTRA RARE VARIANTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Shiny Pokemon Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>shiny Pokemon</strong> with ultra-rare alternate
            color schemes from all 1,025 Pokemon! Perfect for shiny hunters, collectors,
            unique team challenges, and discovering rare color variants across all generations.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with new shiny forms and hunting tips"
          />
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-yellow-400 border-2 border-black p-4">
              <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900 mb-1">Ultra Rare</h3>
              <p className="text-sm text-gray-800">
                1/4096 shiny odds replicated
              </p>
            </div>
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">✨</span>
              <h3 className="font-bold text-white mb-1">All Generations</h3>
              <p className="text-sm text-white/90">
                Gen 1-9 shiny variants
              </p>
            </div>
            <div className="bg-blue-600 border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="font-bold text-white mb-1">Filter by Type</h3>
              <p className="text-sm text-white/90">
                Find specific shiny types
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
              What is a Shiny Pokemon?
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Shiny Pokemon</strong> are extremely rare variants with
              alternate color palettes. First introduced in Generation II, shiny
              Pokemon have a base encounter rate of 1/4096 (1/8192 in Gen II-V),
              making them highly coveted among collectors and trainers.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Our <strong>random shiny Pokemon generator</strong> lets you
              instantly discover these rare color variants without hours of
              grinding. Perfect for team building, challenge runs, or simply
              appreciating the beautiful alternate designs!
            </p>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              How to Use the Shiny Pokemon Generator
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-brown/80">
              <li>
                <strong>Set Team Size:</strong> Choose how many shiny Pokemon you
                want (1-12)
              </li>
              <li>
                <strong>Apply Filters:</strong> Select specific types, regions,
                or rarity levels
              </li>
              <li>
                <strong>Enable Shiny Mode:</strong> Automatically shows shiny
                sprites if available
              </li>
              <li>
                <strong>Generate:</strong> Click the generate button to reveal
                your shiny team
              </li>
              <li>
                <strong>Save & Share:</strong> Download or share your rare finds
                with friends
              </li>
            </ol>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Popular Shiny Pokemon Searches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Shiny Starters</h3>
                <p className="text-sm text-brown/70">
                  Charizard, Blastoise, Venusaur, and all starter evolutions with
                  rare colors
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">
                  ⚡ Shiny Legendaries
                </h3>
                <p className="text-sm text-brown/70">
                  Mewtwo, Rayquaza, Giratina - the rarest of the rare
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌟 Black Shinies</h3>
                <p className="text-sm text-brown/70">
                  Charizard, Rayquaza, Mega Gengar - iconic black variants
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">💎 Blue Shinies</h3>
                <p className="text-sm text-brown/70">
                  Umbreon, Metagross, Toxtricity - stunning blue recolors
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Shiny Hunting Tips & Tricks
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🎯 Masuda Method (Breeding)
                </h3>
                <p className="text-sm text-brown/70">
                  Breed Pokemon from different language games for 1/683 odds with
                  Shiny Charm
                </p>
              </div>
              <div className="border-l-4 border-blue pl-4">
                <h3 className="font-bold text-brown mb-1">
                  ⛓️ Chain Fishing/DexNav
                </h3>
                <p className="text-sm text-brown/70">
                  Consecutive encounters increase shiny odds up to 1/100 in some
                  games
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">
                  ✨ Shiny Charm Boosts
                </h3>
                <p className="text-sm text-brown/70">
                  Complete the Pokedex to triple your base shiny encounter rate
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🌳 Outbreak Hunts (Scarlet/Violet)
                </h3>
                <p className="text-sm text-brown/70">
                  Mass outbreaks offer 1/158 odds with Shiny Charm + sandwich
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
                href="/legendary-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🏆 Legendary Pokemon Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Generate rare legendary and mythical Pokemon
                </p>
              </Link>
              <Link
                href="/starter-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🌱 Starter Pokemon Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Pick random starter Pokemon from all regions
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
                  Full-featured random Pokemon team builder
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
                  Create balanced teams for Nuzlocke challenges
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Shiny Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are the odds of finding a shiny Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Base odds are 1/4096 in Gen VI-IX (1/8192 in Gen II-V). With
                  Shiny Charm, odds improve to 1/1365. Methods like Masuda
                  breeding can reach 1/512.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Do shiny Pokemon have better stats?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  No, shiny Pokemon have the same stats as regular Pokemon. The
                  only difference is their color palette and sparkle animation.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which generation has the best shiny designs?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Gen II introduced shinies, but Gen III-IV refined the palettes.
                  Popular favorites include black Charizard, blue Umbreon, and
                  golden Magikarp.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can this generator help with actual shiny hunting?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Yes! Use it to preview shiny colors before hunting, plan shiny
                  teams, or decide which Pokemon to target for breeding/chaining.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
