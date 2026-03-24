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
  title: "Gen 9 Random Team Generator | Paldea Pokemon Scarlet Violet",
  description:
    "Generate random Paldea Pokemon teams from Gen 9 (Pokemon #906-1025)! Includes Paradox Pokemon, Terapagos, and new evolutions. Updated January 2026 with latest DLC content.",
  keywords: [
    "gen 9 random team generator",
    "paldea pokemon team builder",
    "scarlet violet team generator",
    "paradox pokemon generator",
    "gen 9 pokemon randomizer",
    "paldea randomizer free",
    "scarlet violet nuzlocke generator",
    "gen 9 team builder with filters",
    "random pokemon scarlet violet",
  ],
  alternates: {
    canonical: `${siteUrl}/paldea-pokemon-generator`,
  },
  openGraph: {
    title: "Gen 9 Random Team Generator | Paldea Pokemon Scarlet Violet",
    description:
      "Generate random Paldea Pokemon teams from Gen 9 (Pokemon #906-1025)! Paradox Pokemon and Terapagos included. Updated January 2026.",
    url: `${siteUrl}/paldea-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paldea Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen 9 Random Team Generator | Paldea Pokemon Scarlet Violet",
    description:
      "Generate random Paldea Pokemon teams from Gen 9! Paradox Pokemon included. Updated January 2026.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const paldeaJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 9 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Paldea region (Gen 9 - Scarlet & Violet), including Paradox Pokemon and Terapagos. Pokemon #906-1025.",
  url: `${siteUrl}/paldea-pokemon-generator`,
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

export default function PaldeaPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paldeaJsonLd) }}
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
              Paldea Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 9 • SCARLET & VIOLET</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 9 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Paldea Pokemon teams</strong> from Generation 9 (Pokemon #906-1025)!
            Perfect for Scarlet & Violet Nuzlockes, competitive teams, monotype runs, and Tera Raid builds.
            Includes all Paradox Pokemon, Terapagos, and new evolutions.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with new DLC Pokemon and Tera Raid events"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-red-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">100+ New Pokemon</h3>
              <p className="text-sm text-white/90">
                Gen 9 exclusive species
              </p>
            </div>
            <div className="bg-yellow-400 border-2 border-black p-4">
              <span className="text-3xl mb-2 block">⚡</span>
              <h3 className="font-bold text-gray-900 mb-1">Paradox Pokemon</h3>
              <p className="text-sm text-gray-800">
                Ancient & Future forms
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🎓</span>
              <h3 className="font-bold mb-1">Regional Forms</h3>
              <p className="text-sm text-white/90">
                Paldean Tauros & Wooper
              </p>
            </div>
          </div>
        </div>

        {/* Generator Component - Will filter for Paldea by default */}
        <PokemonGeneratorClient />

        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              About the Paldea Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Paldea</strong> is the region featured in Pokemon Scarlet
              and Pokemon Violet (Generation 9), released in November 2022. Based
              on the Iberian Peninsula (Spain and Portugal), Paldea is the first
              truly open-world region in mainline Pokemon games.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Paldea include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>Open World Exploration:</strong> No linear routes - explore freely from the start
              </li>
              <li>
                <strong>Terastallization:</strong> New battle mechanic changing Pokemon types
              </li>
              <li>
                <strong>Paradox Pokemon:</strong> Ancient (Scarlet) and Future (Violet) exclusive forms
              </li>
              <li>
                <strong>3 Story Paths:</strong> Victory Road, Path of Legends, Starfall Street
              </li>
              <li>
                <strong>100+ New Pokemon:</strong> Including starters Sprigatito, Fuecoco, Quaxly
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Paradox Pokemon (Scarlet & Violet Exclusives)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-red bg-red/10 p-4">
                <h3 className="font-bold text-red mb-3 text-xl">
                  🔴 Pokemon Scarlet (Ancient Forms)
                </h3>
                <ul className="space-y-2 text-sm text-brown/80">
                  <li>
                    <strong>Great Tusk</strong> - Ancient Donphan (Ground/Fighting)
                  </li>
                  <li>
                    <strong>Scream Tail</strong> - Ancient Jigglypuff (Fairy/Psychic)
                  </li>
                  <li>
                    <strong>Brute Bonnet</strong> - Ancient Amoonguss (Grass/Dark)
                  </li>
                  <li>
                    <strong>Flutter Mane</strong> - Ancient Misdreavus (Ghost/Fairy)
                  </li>
                  <li>
                    <strong>Slither Wing</strong> - Ancient Volcarona (Bug/Fighting)
                  </li>
                  <li>
                    <strong>Sandy Shocks</strong> - Ancient Magneton (Electric/Ground)
                  </li>
                  <li>
                    <strong>Roaring Moon</strong> - Ancient Salamence (Dragon/Dark)
                  </li>
                  <li>
                    <strong>Walking Wake</strong> - Ancient Suicune (Water/Dragon)
                  </li>
                </ul>
              </div>

              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-3 text-xl">
                  🔵 Pokemon Violet (Future Forms)
                </h3>
                <ul className="space-y-2 text-sm text-brown/80">
                  <li>
                    <strong>Iron Treads</strong> - Future Donphan (Ground/Steel)
                  </li>
                  <li>
                    <strong>Iron Bundle</strong> - Future Delibird (Ice/Water)
                  </li>
                  <li>
                    <strong>Iron Hands</strong> - Future Hariyama (Fighting/Electric)
                  </li>
                  <li>
                    <strong>Iron Jugulis</strong> - Future Hydreigon (Dark/Flying)
                  </li>
                  <li>
                    <strong>Iron Moth</strong> - Future Volcarona (Fire/Poison)
                  </li>
                  <li>
                    <strong>Iron Thorns</strong> - Future Tyranitar (Rock/Electric)
                  </li>
                  <li>
                    <strong>Iron Valiant</strong> - Future Gallade/Gardevoir (Fairy/Fighting)
                  </li>
                  <li>
                    <strong>Iron Leaves</strong> - Future Virizion (Grass/Psychic)
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              New Pokemon in Paldea (Gen 9 Debuts)
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">
                  🌱 Starter Evolution Lines
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Sprigatito → Floragato → Meowscarada</strong> (Grass/Dark)<br />
                  <strong>Fuecoco → Crocalor → Skeledirge</strong> (Fire/Ghost)<br />
                  <strong>Quaxly → Quaxwell → Quaquaval</strong> (Water/Fighting)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">
                  🏆 Box Legendaries & Mythicals
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Koraidon</strong> (Fighting/Dragon) - Scarlet legendary<br />
                  <strong>Miraidon</strong> (Electric/Dragon) - Violet legendary<br />
                  <strong>Chi-Yu, Chien-Pao, Ting-Lu, Wo-Chien</strong> - Treasures of Ruin<br />
                  <strong>Ogerpon</strong> - Teal Mask DLC<br />
                  <strong>Terapagos</strong> - Indigo Disk DLC<br />
                  <strong>Pecharunt</strong> - Mochi Mayhem DLC
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">
                  ✨ Popular New Pokemon
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Lechonk → Oinkologne</strong> (pig Pokemon)<br />
                  <strong>Fidough → Dachsbun</strong> (bread dog)<br />
                  <strong>Smoliv → Dolliv → Arboliva</strong> (olive tree)<br />
                  <strong>Pawmi → Pawmo → Pawmot</strong> (electric mouse)<br />
                  <strong>Gimmighoul → Gholdengo</strong> (999 coins evolution)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">
                  🔄 New Evolutions of Old Pokemon
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Primeape → Annihilape</strong> (Fighting/Ghost)<br />
                  <strong>Girafarig → Farigiraf</strong> (Normal/Psychic)<br />
                  <strong>Dunsparce → Dudunsparce</strong> (Normal)<br />
                  <strong>Bisharp → Kingambit</strong> (Dark/Steel)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Paldea Pokemon for Competitive Play
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  Koraidon, Miraidon, Flutter Mane, Iron Bundle (banned from OU)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟡 OU Tier (Overused)
                </h3>
                <p className="text-sm text-brown/70">
                  Gholdengo, Kingambit, Great Tusk, Iron Valiant, Baxcalibur
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun Picks for Playthroughs
                </h3>
                <p className="text-sm text-brown/70">
                  Tinkaton, Armarouge/Ceruledge, Pawmot, Lokix, Garganacl
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
                href="/galar-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⚔️ Galar Pokemon (Gen 8)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Sword & Shield region
                </p>
              </Link>
              <Link
                href="/alola-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-yellow hover:text-gray-900 transition-colors group"
              >
                <h3 className="font-bold mb-1">
                  🌴 Alola Pokemon (Gen 7)
                </h3>
                <p className="text-sm text-brown/70">
                  Sun & Moon region
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
                  Generate from any region
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Paldea Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many new Pokemon are in Paldea?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Gen 9 introduced 103 completely new Pokemon species (not
                  counting regional forms or Paradox Pokemon). Including DLC,
                  there are 120+ new additions.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are Paradox Pokemon?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Paradox Pokemon are version-exclusive Pokemon that resemble
                  ancient or future versions of existing species. Scarlet has
                  prehistoric forms, Violet has robotic futuristic forms.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can I catch all Pokemon in Scarlet/Violet?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Scarlet & Violet's Pokedex includes 400 Pokemon in the base
                  game, expanded to 600+ with DLC. Not all 1000+ Pokemon are
                  available - older legendaries require transfers from HOME.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What is Terastallization?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Terastallization is Gen 9's battle gimmick, changing a
                  Pokemon's type to its Tera Type (can be any of the 18 types),
                  boosting STAB moves of that type.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
