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
  title: "Gen 8 Random Team Generator | Galar Pokemon Sword Shield",
  description:
    "Generate random Galar Pokemon teams from Gen 8 (Pokemon #810-905)! Sword & Shield with Dynamax, Gigantamax forms & Galarian variants. Updated January 2026.",
  keywords: [
    "gen 8 random team generator",
    "galar pokemon team builder",
    "sword shield team generator",
    "gen 8 pokemon randomizer",
    "galar randomizer free",
    "dynamax team generator",
    "gen 8 nuzlocke generator",
    "gigantamax pokemon picker",
    "galarian forms generator",
  ],
  alternates: {
    canonical: `${siteUrl}/galar-pokemon-generator`,
  },
  openGraph: {
    title: "Random Galar Pokemon Generator | Gen 8 Sword & Shield",
    description:
      "Generate random Galar Pokemon from Gen 8! Sword & Shield Pokemon with Dynamax & Gigantamax forms.",
    url: `${siteUrl}/galar-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galar Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Galar Pokemon Generator | Gen 8 Sword & Shield",
    description:
      "Generate random Galar Pokemon from Gen 8! Dynamax battles included.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const galarJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 8 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Galar region (Gen 8 - Sword & Shield), including Dynamax and Galarian forms. Pokemon #810-905.",
  url: `${siteUrl}/galar-pokemon-generator`,
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

export default function GalarPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galarJsonLd) }}
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
              Galar Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 8 • SWORD & SHIELD</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 8 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Galar Pokemon teams</strong> from Generation 8 (Pokemon #810-905)!
            Perfect for Sword & Shield Nuzlockes, Dynamax battles, Gigantamax showcases, and competitive teams.
            Includes Galarian forms and the legendary Hero Duo Zacian & Zamazenta.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Dynamax raid strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-purple-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">80+ New Pokemon</h3>
              <p className="text-sm text-white/90">
                Gen 8 exclusives + DLC
              </p>
            </div>
            <div className="bg-red-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">⚔️</span>
              <h3 className="font-bold mb-1">Dynamax & Gigantamax</h3>
              <p className="text-sm text-white/90">
                Kaiju-sized battles
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">🏰</span>
              <h3 className="font-bold mb-1">UK-Inspired Region</h3>
              <p className="text-sm text-white/90">
                Based on Great Britain
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
              About the Galar Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Galar</strong> is the eighth region in the Pokemon series,
              featured in Pokemon Sword and Shield (2019) with DLC expansions The
              Isle of Armor and The Crown Tundra (2020). Based on Great Britain,
              Galar is known for its Dynamax phenomenon and stadium-based Gym
              Challenge.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Galar include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>Dynamax Mechanic:</strong> Pokemon grow to enormous sizes with boosted HP
              </li>
              <li>
                <strong>Gigantamax Forms:</strong> Special Pokemon with unique forms and G-Max moves
              </li>
              <li>
                <strong>Galarian Forms:</strong> Regional variants (Zigzagoon, Corsola, Ponyta, etc.)
              </li>
              <li>
                <strong>Wild Area:</strong> Open-world zone with dynamic weather and Pokemon
              </li>
              <li>
                <strong>Max Raid Battles:</strong> 4-player co-op against giant Pokemon
              </li>
              <li>
                <strong>Pokemon Jobs:</strong> Send Pokemon on missions for items and EXP
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Galar Legendary Pokemon
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-purple-600 bg-purple-600/10 p-4">
                <h3 className="font-bold text-purple-600 mb-2 text-xl">⚔️ Hero Duo (Box Legendaries)</h3>
                <div className="space-y-2 text-sm text-brown/80">
                  <div>
                    <strong>Zacian</strong> (#888) - Fairy/Steel (Crowned Sword form)<br />
                    <span className="text-xs">Sword exclusive - Holds Rusted Sword to transform</span>
                  </div>
                  <div>
                    <strong>Zamazenta</strong> (#889) - Fighting/Steel (Crowned Shield form)<br />
                    <span className="text-xs">Shield exclusive - Holds Rusted Shield to transform</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐲 Eternatus</h3>
                <p className="text-sm text-brown/70">
                  <strong>Eternatus</strong> (#890) - Poison/Dragon<br />
                  Source of Dynamax energy, has Eternamax form (highest base stat total ever at 1125, but unusable in battle)
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">👑 Calyrex & Steeds (Crown Tundra DLC)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Calyrex</strong> (#898) - Psychic/Grass (base form)<br />
                  <strong>Calyrex-Ice Rider</strong> - Psychic/Ice (fuses with Glastrier)<br />
                  <strong>Calyrex-Shadow Rider</strong> - Psychic/Ghost (fuses with Spectrier)<br />
                  Shadow Rider is Ubers tier - extremely powerful
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Legendary Giants (Crown Tundra)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Regieleki</strong> (#894) - Electric - Fastest Regi<br />
                  <strong>Regidrago</strong> (#895) - Dragon - Highest Dragon-type attack stat<br />
                  New members of the Regi family
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐦 Galarian Legendary Birds</h3>
                <p className="text-sm text-brown/70">
                  <strong>Galarian Articuno</strong> (#144) - Psychic/Flying<br />
                  <strong>Galarian Zapdos</strong> (#145) - Fighting/Flying<br />
                  <strong>Galarian Moltres</strong> (#146) - Dark/Flying<br />
                  Roaming legendaries in Crown Tundra
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Zarude</strong> (#893) - Dark/Grass - Event-exclusive<br />
                  <strong>Zarude (Dada Form)</strong> - Movie promotion variant
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Popular Galar Pokemon & Galarian Forms
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Galar Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Grookey → Thwackey → Rillaboom</strong> (Grass) - Grassy Surge hidden ability<br />
                  <strong>Scorbunny → Raboot → Cinderace</strong> (Fire) - Libero hidden ability (banned to Ubers)<br />
                  <strong>Sobble → Drizzile → Inteleon</strong> (Water) - Sniper ability
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">💪 New Powerhouses</h3>
                <p className="text-sm text-brown/70">
                  <strong>Dragapult</strong> (#887) - Dragon/Ghost pseudo-legendary (600 BST)<br />
                  <strong>Duraludon</strong> (#884) - Steel/Dragon - Skyscraper Pokemon<br />
                  <strong>Corviknight</strong> (#823) - Flying/Steel - Mirror Armor ability
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🎭 Galarian Regional Forms</h3>
                <p className="text-sm text-brown/70">
                  <strong>Galarian Weezing</strong> (Poison/Fairy) - Top hat design<br />
                  <strong>Galarian Corsola → Cursola</strong> (Ghost) - Bleached coral<br />
                  <strong>Galarian Ponyta → Rapidash</strong> (Psychic/Fairy) - Shield exclusive<br />
                  <strong>Galarian Darumaka → Darmanitan</strong> (Ice/Fire) - Zen Mode is Fire<br />
                  <strong>Galarian Zigzagoon → Linoone → Obstagoon</strong> (Dark/Normal) - New evolution!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🔨 Gigantamax Pokemon (Popular)</h3>
                <p className="text-sm text-brown/70">
                  G-Max Charizard, G-Max Pikachu, G-Max Meowth (Kantonian & Galarian),{" "}
                  G-Max Butterfree, G-Max Corviknight, G-Max Drednaw, G-Max Alcremie,{" "}
                  G-Max Toxtricity, G-Max Urshifu (Isle of Armor)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Galar Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Zacian-Crowned</strong> (most broken Pokemon in VGC history),{" "}
                  <strong>Calyrex-Shadow Rider</strong>, <strong>Eternatus</strong>,{" "}
                  <strong>Cinderace</strong> (with Libero)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Dragapult</strong>, <strong>Rillaboom</strong>,{" "}
                  <strong>Corviknight</strong>, <strong>Toxapex</strong> (from Gen 7),{" "}
                  <strong>Urshifu</strong> (both forms)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun Competitive Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Dracovish</strong> (Strong Jaw + Fishious Rend combo),{" "}
                  <strong>Grimmsnarl</strong> (Prankster support),{" "}
                  <strong>Falinks</strong> (No Retreat gimmick)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Galar Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">🏟️ Stadium Gym Battles</h3>
                <p className="text-sm text-brown/70">
                  Galar's Gym Challenge takes place in massive stadiums with thousands of spectators, treating battles like sports events. Gym Leaders have jersey numbers and sponsor endorsements!
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">📉 National Dex Cut (Dexit)</h3>
                <p className="text-sm text-brown/70">
                  Sword & Shield controversially cut ~400 Pokemon from being transferable at launch. The "Dexit" controversy led to online protests, though DLC and updates added more Pokemon back.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-blue/10">
                <h3 className="font-bold text-brown mb-2">⚔️ Dynamax vs Gigantamax</h3>
                <p className="text-sm text-brown/70">
                  <strong>Dynamax</strong> makes any Pokemon giant with Max Moves for 3 turns. <strong>Gigantamax</strong> is exclusive to specific Pokemon with unique forms and G-Max moves (e.g., G-Max Wildfire for Charizard).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🎮 First HD Pokemon Game</h3>
                <p className="text-sm text-brown/70">
                  Sword & Shield are the first mainline Pokemon games in full HD (1080p) on Nintendo Switch. The Wild Area was the series' first open-world zone with free camera control.
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
                href="/alola-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🌴 Alola Pokemon (Gen 7)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Sun & Moon tropical region
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
                href="/kanto-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🔴 Kanto Pokemon (Gen 1)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Original 151 classics
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
              Galar Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Galar?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Galar introduced <strong>81 new Pokemon</strong> (#810-890) in the base game, plus 8 more in DLC (#891-898). The Galar Pokedex contains 400 Pokemon total with DLC.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What is Dynamax and how does it work?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Dynamax</strong> makes Pokemon grow giant-sized for 3 turns with increased HP and Max Moves. Only works in specific locations (stadiums, Max Raid dens). Unlike Mega Evolution, any Pokemon can Dynamax.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Galar starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Cinderace</strong> is competitively strongest (Libero ability), but it's banned to Ubers. <strong>Rillaboom</strong> with Grassy Surge is OU tier and very versatile. For casual play, all three are balanced.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What are the differences between Sword and Shield?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Sword</strong> has Zacian, Kommo-o line, Galarian Farfetch'd line. <strong>Shield</strong> has Zamazenta, Goodra line, Galarian Ponyta line. Gym Leaders Bea (Fighting) vs Allister (Ghost) and Gordie (Rock) vs Melony (Ice) also differ.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Is the DLC worth it?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Yes! The <strong>Isle of Armor</strong> adds Kubfu/Urshifu, and <strong>Crown Tundra</strong> has Calyrex, Galarian legendary birds, Regieleki/Regidrago, and Dynamax Adventures (shiny hunting paradise). Adds 200+ Pokemon back to the game.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
