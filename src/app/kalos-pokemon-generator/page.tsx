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
  title: "Gen 6 Random Team Generator | Kalos Pokemon X Y ORAS",
  description:
    "Generate random Kalos Pokemon teams from Gen 6 (Pokemon #650-721)! Includes Mega Evolutions, Fairy type, and Xerneas/Yveltal. Updated January 2026 with all Mega forms.",
  keywords: [
    "gen 6 random team generator",
    "kalos pokemon team builder",
    "gen 6 pokemon randomizer",
    "mega evolution team generator",
    "kalos randomizer free",
    "x y team builder online",
    "gen 6 nuzlocke generator",
    "kalos pokemon with filters",
    "fairy type team generator",
  ],
  alternates: {
    canonical: `${siteUrl}/kalos-pokemon-generator`,
  },
  openGraph: {
    title: "Gen 6 Random Team Generator | Kalos Pokemon X Y ORAS",
    description:
      "Generate random Kalos Pokemon teams from Gen 6 (Pokemon #650-721)! Mega Evolutions and Fairy type included. Updated January 2026.",
    url: `${siteUrl}/kalos-pokemon-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kalos Pokemon Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen 6 Random Team Generator | Kalos Pokemon X Y ORAS",
    description:
      "Generate random Kalos Pokemon teams from Gen 6! Mega Evolutions included. Updated January 2026.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const kalosJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gen 6 Random Team Generator",
  description:
    "Generate random Pokemon teams from the Kalos region (Gen 6 - X & Y), including Mega Evolutions and Fairy type Pokemon. Pokemon #650-721.",
  url: `${siteUrl}/kalos-pokemon-generator`,
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

export default function KalosPokemonGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kalosJsonLd) }}
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
              Kalos Pokemon Generator
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white border-2 border-black px-4 py-2 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">GEN 6 • X & Y</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown mb-4 font-space-grotesk">
            Gen 6 Random Team Generator
          </h1>
          <p className="text-lg sm:text-xl text-brown/80 max-w-3xl mx-auto mb-6">
            Generate random <strong>Kalos Pokemon teams</strong> from Generation 6 (Pokemon #650-721)!
            Perfect for X & Y Nuzlockes, Mega Evolution teams, and Fairy type showcases.
            Includes all 28 Mega Evolutions and France-inspired Pokemon.
          </p>
          
          <FreshnessSignal 
            lastUpdated="January 13, 2026" 
            updateFrequency="Updated monthly with Mega Evolution strategies"
          />

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-pink-500 text-white border-2 border-black p-4">
              <span className="text-3xl mb-2 block">✨</span>
              <h3 className="font-bold mb-1">Fairy Type</h3>
              <p className="text-sm text-white/90">
                New type introduction
              </p>
            </div>
            <div className="bg-purple-600 border-2 border-black p-4 text-white">
              <span className="text-3xl mb-2 block">💎</span>
              <h3 className="font-bold mb-1">Mega Evolution</h3>
              <p className="text-sm text-white/90">
                28 Mega forms at launch
              </p>
            </div>
            <div className="bg-blue-600 text-white border-2 border-black p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">72 New Pokemon</h3>
              <p className="text-sm text-white/90">
                France-inspired region
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
              About the Kalos Region
            </h2>
            <p className="text-brown/80 leading-relaxed">
              <strong>Kalos</strong> is the sixth region in the Pokemon series,
              featured in Pokemon X and Y (2013). Based on France, Kalos
              introduced revolutionary changes: full 3D graphics, Mega
              Evolution, the Fairy type, and Pokemon-Amie for bonding with your
              Pokemon.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Key features of Kalos include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-brown/80 ml-4">
              <li>
                <strong>72 New Pokemon:</strong> #650 Chespin to #721 Volcanion
              </li>
              <li>
                <strong>Mega Evolution:</strong> 28 Mega forms at launch (48 total with ORAS)
              </li>
              <li>
                <strong>Fairy Type:</strong> New type strong against Dragon, Dark, Fighting
              </li>
              <li>
                <strong>3D Graphics:</strong> First mainline Pokemon game with full 3D
              </li>
              <li>
                <strong>Pokemon-Amie:</strong> Pet and feed Pokemon for affection bonuses
              </li>
              <li>
                <strong>Customization:</strong> Change character's appearance, clothing
              </li>
            </ul>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Legendary Pokemon & Mega Evolutions
            </h2>
            
            <div className="space-y-4">
              <div className="border-2 border-blue bg-blue/10 p-4">
                <h3 className="font-bold text-blue mb-2 text-xl">🦌 Aura Trio (Box Legendaries)</h3>
                <div className="text-sm text-brown/80">
                  <strong>Xerneas</strong> (#716) - Fairy - Life Pokemon - Signature: Geomancy<br />
                  <strong>Yveltal</strong> (#717) - Dark/Flying - Destruction Pokemon - Signature: Oblivion Wing<br />
                  <strong>Zygarde</strong> (#718) - Dragon/Ground - Order Pokemon - Multiple forms (10%, 50%, Complete)
                </div>
              </div>

              <div className="border-2 border-purple-600 bg-purple-600/10 p-4">
                <h3 className="font-bold text-purple-600 mb-2 text-xl">💎 Mega Evolution Mechanics</h3>
                <p className="text-sm text-brown/80 mb-2">
                  Mega Evolution is temporary in-battle transformation. Requires Mega Stone + Mega Ring. One Mega per battle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brown/80">
                  <div><strong>Mega Charizard X</strong> - Fire/Dragon</div>
                  <div><strong>Mega Charizard Y</strong> - Fire/Flying</div>
                  <div><strong>Mega Blastoise</strong> - Water</div>
                  <div><strong>Mega Venusaur</strong> - Grass/Poison</div>
                  <div><strong>Mega Lucario</strong> - Fighting/Steel</div>
                  <div><strong>Mega Garchomp</strong> - Dragon/Ground</div>
                  <div><strong>Mega Mewtwo X</strong> - Psychic/Fighting</div>
                  <div><strong>Mega Mewtwo Y</strong> - Psychic</div>
                  <div><strong>Mega Blaziken</strong> - Fire/Fighting</div>
                  <div><strong>Mega Gengar</strong> - Ghost/Poison</div>
                  <div><strong>Mega Kangaskhan</strong> - Normal (Parental Bond)</div>
                  <div><strong>Mega Mawile</strong> - Steel/Fairy (Huge Power)</div>
                </div>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ Mythical Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Diancie</strong> (#719) - Rock/Fairy - Mega Diancie available<br />
                  <strong>Hoopa</strong> (#720) - Psychic/Ghost (Confined) / Psychic/Dark (Unbound)<br />
                  <strong>Volcanion</strong> (#721) - Fire/Water - Unique typing
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Kalos Starters & Popular Pokemon
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🌱 Kalos Starters</h3>
                <p className="text-sm text-brown/70">
                  <strong>Chespin → Quilladin → Chesnaught</strong> (Grass/Fighting) - Knight hedgehog<br />
                  <strong>Fennekin → Braixen → Delphox</strong> (Fire/Psychic) - Mage fox<br />
                  <strong>Froakie → Frogadier → Greninja</strong> (Water/Dark) - Ninja frog with Protean
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">🐉 Pseudo-Legendary</h3>
                <p className="text-sm text-brown/70">
                  <strong>Goomy → Sliggoo → Goodra</strong> (Dragon)<br />
                  600 BST, pure Dragon type, lovable slimy dragon
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">✨ New Fairy Type Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Sylveon</strong> - Eevee's Fairy evolution<br />
                  <strong>Klefki</strong> - Steel/Fairy - Key ring with Prankster<br />
                  <strong>Dedenne</strong> - Electric/Fairy - Pikachu clone<br />
                  <strong>Florges</strong> - Fairy - Flabébé evolution<br />
                  <strong>Xerneas</strong> - Pure Fairy legendary
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-cream">
                <h3 className="font-bold text-brown mb-2">⚡ Popular Kalos Pokemon</h3>
                <p className="text-sm text-brown/70">
                  <strong>Greninja</strong> (Water/Dark) - Protean ability, Ash-Greninja form later<br />
                  <strong>Talonflame</strong> (Fire/Flying) - Gale Wings, OU tier<br />
                  <strong>Aegislash</strong> (Steel/Ghost) - Stance Change, unique gameplay<br />
                  <strong>Hawlucha</strong> (Fighting/Flying) - Lucha libre wrestler<br />
                  <strong>Tyrantrum</strong> (Rock/Dragon) - T-Rex fossil Pokemon<br />
                  <strong>Aurorus</strong> (Rock/Ice) - Sauropod fossil Pokemon<br />
                  <strong>Noivern</strong> (Flying/Dragon) - Sound-based attacks
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Best Kalos Pokemon (Competitive Tier List)
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🔴 Ubers Tier (Restricted)
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Xerneas</strong> (Geomancy sweeper),{" "}
                  <strong>Yveltal</strong> (Dark Aura),{" "}
                  <strong>Mega Kangaskhan</strong> (Parental Bond broken),{" "}
                  <strong>Mega Gengar</strong> (Shadow Tag trap)
                </p>
              </div>
              <div className="border-l-4 border-yellow pl-4">
                <h3 className="font-bold text-brown mb-1">🟡 OU Tier (Overused)</h3>
                <p className="text-sm text-brown/70">
                  <strong>Greninja</strong> (Protean),{" "}
                  <strong>Talonflame</strong> (Gale Wings priority),{" "}
                  <strong>Aegislash</strong> (Stance Change),{" "}
                  <strong>Klefki</strong> (Prankster support)
                </p>
              </div>
              <div className="border-l-4 border-green pl-4">
                <h3 className="font-bold text-brown mb-1">
                  🟢 Fun VGC Picks
                </h3>
                <p className="text-sm text-brown/70">
                  <strong>Sylveon</strong> (Hyper Voice Pixilate),{" "}
                  <strong>Hawlucha</strong> (Unburden sweeper),{" "}
                  <strong>Goodra</strong> (special tank)
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white border-2 border-black p-8 space-y-6">
            <h2 className="text-3xl font-bold text-brown border-b-2 border-black pb-3">
              Kalos Region Trivia & Fun Facts
            </h2>
            <div className="space-y-4">
              <div className="border-2 border-black p-4 bg-blue/20">
                <h3 className="font-bold text-brown mb-2">🎨 First 3D Pokemon Game</h3>
                <p className="text-sm text-brown/70">
                  X & Y were the first mainline Pokemon games with full <strong>3D graphics</strong>. Players could customize their character's appearance, hair color, and clothing for the first time.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-pink-500/20">
                <h3 className="font-bold text-brown mb-2">✨ Fairy Type Introduction</h3>
                <p className="text-sm text-brown/70">
                  Gen 6 introduced the <strong>Fairy type</strong> to balance the overpowered Dragon type. Many older Pokemon were retroactively changed (Clefairy, Jigglypuff, Gardevoir, Azumarill became Fairy).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-purple-600/10">
                <h3 className="font-bold text-brown mb-2">💎 Mega Evolution Lore</h3>
                <p className="text-sm text-brown/70">
                  Mega Evolution requires a <strong>strong bond</strong> between trainer and Pokemon. The mysterious Mega Stones were created by the ultimate weapon in Kalos's ancient war. Some Pokemon (Charizard, Mewtwo) have two Mega forms.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-yellow/20">
                <h3 className="font-bold text-brown mb-2">🗼 Based on France</h3>
                <p className="text-sm text-brown/70">
                  Kalos is based on metropolitan France. <strong>Lumiose City</strong> resembles Paris with its Eiffel Tower-inspired Prism Tower. The region is star-shaped when viewed from above.
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-red/10">
                <h3 className="font-bold text-brown mb-2">🎮 Pokemon-Amie</h3>
                <p className="text-sm text-brown/70">
                  <strong>Pokemon-Amie</strong> let you pet, feed, and play with Pokemon using the touchscreen. High affection gave battle bonuses (surviving lethal hits, landing more crits, shaking off status).
                </p>
              </div>

              <div className="border-2 border-black p-4 bg-green/10">
                <h3 className="font-bold text-brown mb-2">🦖 Fossil Pokemon</h3>
                <p className="text-sm text-brown/70">
                  Kalos featured <strong>Tyrunt/Tyrantrum</strong> (Jaw Fossil) and <strong>Amaura/Aurorus</strong> (Sail Fossil), based on Tyrannosaurus Rex and Amargasaurus dinosaurs respectively.
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
                className="block bg-white border-2 border-black p-4 hover:bg-yellow hover:text-gray-900 transition-colors group"
              >
                <h3 className="font-bold mb-1">
                  🏝️ Alola Pokemon (Gen 7)
                </h3>
                <p className="text-sm text-brown/70">
                  Sun & Moon with Ultra Beasts
                </p>
              </Link>
              <Link
                href="/sinnoh-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⏰ Sinnoh Pokemon (Gen 4)
                </h3>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Diamond & Pearl with Creation Trio
                </p>
              </Link>
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
              Kalos Pokemon FAQs
            </h2>
            <div className="space-y-4">
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  How many Pokemon are in Kalos?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Kalos introduced <strong>72 new Pokemon</strong> (#650-721), the fewest of any generation. The Central Kalos Pokedex contains 457 Pokemon total (including older generations).
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  What is Mega Evolution?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Mega Evolution</strong> is temporary in-battle transformation. Requires holding a Mega Stone (e.g., Charizardite X) + trainer with Mega Ring. Only one Mega per battle. Boosts stats and sometimes changes typing/ability.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Which Kalos starter is best?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Greninja</strong> is the most popular with Protean ability (changes type to match moves). Became so popular that Ash's Greninja got a special form in the anime. Competitively banned to Ubers in some formats.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Why was the Fairy type added?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  <strong>Fairy type</strong> was added to nerf Dragon-types (which dominated Gen 5 competitively). Fairy is immune to Dragon moves and super effective against Dragon, Dark, and Fighting types.
                </p>
              </details>
              <details className="border-2 border-black p-4 bg-cream">
                <summary className="font-bold text-brown cursor-pointer">
                  Can I get Mega Evolutions in X & Y?
                </summary>
                <p className="mt-2 text-brown/70 text-sm">
                  Yes! X & Y have <strong>28 Mega Evolutions</strong> available. You receive the Mega Ring from Professor Sycamore. Mega Stones are found throughout Kalos, with some exclusive to X or Y version.
                </p>
              </details>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
