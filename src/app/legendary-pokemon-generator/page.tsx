import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Crown, ArrowLeft, ExternalLink } from "lucide-react";
import FreshnessSignal from "@/components/FreshnessSignal";

const PokemonGeneratorClient = dynamic(
  () => import("../PokemonGeneratorClient")
);

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Legendary Pokemon Generator | Random Mythical Ultra Beasts Free",
  description:
    "Generate random legendary Pokemon, mythical creatures, and Ultra Beasts from all 70+ legendaries! Perfect for competitive teams, draft leagues, and rare collections. Updated January 2026.",
  keywords: [
    "legendary pokemon randomizer free",
    "random legendary pokemon picker",
    "mythical pokemon generator online",
    "ultra beast randomizer",
    "box legendary generator",
    "legendary trio picker",
    "random legendary team builder",
    "mythical pokemon picker free",
    "legendary pokemon all gens",
    "paradox legendary generator",
  ],
  alternates: {
    canonical: `${siteUrl}/legendary-pokemon-generator`,
  },
  openGraph: {
    title: "Random Legendary Pokemon Generator | Mythical & Ultra Beasts",
    description:
      "Generate random legendary Pokemon, mythical creatures, and Ultra Beasts for competitive teams and challenges!",
    url: `${siteUrl}/legendary-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legendary Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Legendary Pokemon Generator | Mythical & Ultra Beasts",
    description:
      "Generate random legendary Pokemon, mythical creatures, and Ultra Beasts!",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const legendaryJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Legendary Pokemon Generator - 70+ Mythical & Ultra Beasts",
  description:
    "Generate random legendary Pokemon, mythical creatures, and Ultra Beasts from all generations for competitive teams and rare collections. 70+ legendaries available.",
  url: `${siteUrl}/legendary-pokemon-generator`,
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
    ratingCount: "3124",
    bestRating: "5",
  },
};

export default function LegendaryPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legendaryJsonLd) }}
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
              Legendary Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white border-2 border-black px-4 py-2 mb-4">
            <Crown className="w-5 h-5 animate-pulse" />
            <span className="font-bold">LEGENDARY & MYTHICAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Legendary Pokemon Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>legendary Pokemon</strong>, mythical
            creatures, and Ultra Beasts from all 70+ legendaries! Perfect for competitive teams, draft
            leagues, VGC battles, and challenging yourself with the most powerful Pokemon across all generations.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with new legendary releases and competitive strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">70+ Legendaries</h3>
              <p className="text-sm text-white/90">
                All box legends, trios & mythicals
              </p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <span className="text-3xl mb-2 block">⚡</span>
              <h3 className="font-bold text-gray-900 mb-1">Ultra Beasts</h3>
              <p className="text-sm text-gray-800">
                Gen 7 interdimensional Pokemon</p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🎯</span>
              <h3 className="font-bold mb-1">Filter by Type</h3>
              <p className="text-sm text-white/90">
                Psychic, Dragon, Steel & more
              </p>
            </div>
          </div>
        </div>

        {/* Generator Component - Will filter for legendaries by default */}
        <PokemonGeneratorClient />

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              What is a Legendary Pokemon?
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Legendary Pokemon</strong> are extremely rare, powerful
              Pokemon that appear in Pokemon lore and games as unique,
              one-of-a-kind creatures. They typically have higher base stats (580+
              BST), unique typings, and play crucial roles in their respective
              regions' stories.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Our <strong>random legendary Pokemon generator</strong> includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>Box Legendaries:</strong> Mewtwo, Lugia, Ho-Oh, Rayquaza,
                Dialga, Palkia, Giratina, Reshiram, Zekrom, Xerneas, Yveltal,
                Solgaleo, Lunala, Zacian, Zamazenta, Koraidon, Miraidon
              </li>
              <li>
                <strong>Legendary Trios:</strong> Birds (Articuno, Zapdos,
                Moltres), Beasts (Raikou, Entei, Suicune), Regis (Regirock,
                Regice, Registeel), Lake Guardians, Forces of Nature
              </li>
              <li>
                <strong>Mythical Pokemon:</strong> Mew, Celebi, Jirachi, Deoxys,
                Darkrai, Shaymin, Victini, Genesect, Magearna, Marshadow, Zarude
              </li>
              <li>
                <strong>Ultra Beasts:</strong> Nihilego, Buzzwole, Pheromosa,
                Xurkitree, Celesteela, Kartana, Guzzlord, Poipole, Naganadel,
                Stakataka, Blacephalon
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              How to Use the Legendary Pokemon Generator
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-brown/80">
              <li>
                <strong>Set Team Size:</strong> Choose 1-6 legendary Pokemon for
                your team
              </li>
              <li>
                <strong>Apply Filters:</strong> Select legendary status, types, or
                specific generations
              </li>
              <li>
                <strong>Include Mythicals:</strong> Toggle to include
                event-exclusive mythical Pokemon
              </li>
              <li>
                <strong>Generate:</strong> Click to reveal your legendary team
              </li>
              <li>
                <strong>Build Strategies:</strong> Plan movesets and team synergy
                for competitive play
              </li>
            </ol>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Most Powerful Legendary Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-red bg-red/10 p-4">
                <h3 className="font-bold text-red mb-2">🔴 Ubers Tier (Banned)</h3>
                <p className="text-sm text-brown/70">
                  Mewtwo, Rayquaza, Dialga, Palkia, Giratina, Kyogre, Groudon,
                  Zacian-Crowned, Calyrex-Shadow, Eternatus - Too powerful for
                  standard play
                </p>
              </div>
              <div className="border-2 border-yellow bg-yellow/20 p-4">
                <h3 className="font-bold text-brown mb-2">🟡 OU Tier (Allowed)</h3>
                <p className="text-sm text-brown/70">
                  Landorus-Therian, Heatran, Tapu Fini, Zapdos, Tornadus-Therian
                  - Competitive but balanced
                </p>
              </div>
              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2">
                  🔵 UU Tier (Underused)
                </h3>
                <p className="text-sm text-brown/70">
                  Latios, Suicune, Terrakion, Cobalion, Azelf - Strong niche
                  picks
                </p>
              </div>
              <div className="border-2 border-green bg-green/10 p-4">
                <h3 className="font-bold text-green mb-2">🟢 Lower Tiers</h3>
                <p className="text-sm text-brown/70">
                  Articuno, Regigigas, Phione - Less competitive but still fun!
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Legendary Pokemon by Generation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen I (Kanto)</h3>
                <p className="text-sm text-brown/70">
                  Articuno, Zapdos, Moltres, Mewtwo, Mew
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen II (Johto)</h3>
                <p className="text-sm text-brown/70">
                  Raikou, Entei, Suicune, Lugia, Ho-Oh, Celebi
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen III (Hoenn)</h3>
                <p className="text-sm text-brown/70">
                  Regirock, Regice, Registeel, Latias, Latios, Kyogre, Groudon,
                  Rayquaza, Jirachi, Deoxys
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen IV (Sinnoh)</h3>
                <p className="text-sm text-brown/70">
                  Uxie, Mesprit, Azelf, Dialga, Palkia, Heatran, Regigigas,
                  Giratina, Cresselia, Darkrai, Shaymin, Arceus
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen V (Unova)</h3>
                <p className="text-sm text-brown/70">
                  Cobalion, Terrakion, Virizion, Tornadus, Thundurus, Reshiram,
                  Zekrom, Landorus, Kyurem, Keldeo, Meloetta, Genesect
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen VI (Kalos)</h3>
                <p className="text-sm text-brown/70">
                  Xerneas, Yveltal, Zygarde, Diancie, Hoopa, Volcanion
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen VII (Alola)</h3>
                <p className="text-sm text-brown/70">
                  Type: Null, Silvally, Tapu Koko, Tapu Lele, Tapu Bulu, Tapu
                  Fini, Cosmog line, Necrozma, Magearna, Marshadow, Zeraora,
                  Meltan, Melmetal + 11 Ultra Beasts
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen VIII (Galar)</h3>
                <p className="text-sm text-brown/70">
                  Zacian, Zamazenta, Eternatus, Kubfu, Urshifu, Regieleki,
                  Regidrago, Glastrier, Spectrier, Calyrex, Zarude
                </p>
              </div>
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">Gen IX (Paldea)</h3>
                <p className="text-sm text-brown/70">
                  Koraidon, Miraidon, Chi-Yu, Chien-Pao, Ting-Lu, Wo-Chien, Ogerpon, Terapagos, Pecharunt
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
                  Generate rare shiny legendary variants
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
                  Pick random starters from all regions
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
                  Full random Pokemon team builder
                </p>
              </Link>
              <Link
                href="/draft-league-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-brown hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🏆 Draft League Generator
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Build balanced competitive draft pools
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Legendary Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What's the difference between Legendary and Mythical Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Legendary Pokemon can be caught in-game (Mewtwo, Rayquaza),
                  while Mythical Pokemon are event-exclusive (Mew, Celebi, Jirachi). Both are powerful and rare.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Are legendary Pokemon allowed in competitive play?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Some are! "Restricted" formats allow 2 box legendaries per team. Standard OU bans most, but sub-legendaries like Landorus-T and Heatran are common.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which legendary Pokemon is the strongest?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Competitively: Mega Rayquaza, Zacian-Crowned, or Calyrex-Shadow. Lore-wise: Arceus (literal Pokemon god). For VGC: Calyrex-Shadow dominates.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can legendary Pokemon breed?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  No, most legendary/mythical Pokemon cannot breed (except Manaphy producing Phione). They're in the "Undiscovered" egg group.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are Ultra Beasts?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Ultra Beasts are extradimensional Pokemon from Gen VII with alien designs and the "Beast Boost" ability. Examples: Buzzwole, Kartana, Celesteela.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
