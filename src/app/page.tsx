import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import StaticSeoContent from "@/components/StaticSeoContent";
import FAQ from "@/components/FAQ";

// Client-side interactive generator (lazy loaded)
const HomeClient = dynamic(() => import("@/components/HomeClient"), {
  loading: () => (
    <div className="min-h-[600px] animate-pulse bg-white border-4 border-black slasher" />
  ),
});

// Dynamic imports for below-the-fold content
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => (
    <div className="min-h-[400px] animate-pulse bg-white border-4 border-black slasher" />
  ),
});
const SeoContent = dynamic(() => import("@/components/SeoContent"), {
  loading: () => (
    <div className="min-h-[200px] animate-pulse bg-white border-4 border-black slasher" />
  ),
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Random Pokemon Generator | Team Builder for Nuzlocke & Draft League (Gen 1-9)",
  description:
    "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon from Gen 1-9. Free tool!",
  keywords: [
    "random pokemon",
    "random pokemon generator",
    "pokemon nuzlocke generator",
    "nuzlocke team generator",
    "pokemon team builder",
    "nuzlocke generator",
    "pokemon randomizer",
    "random pokemon team",
    "pokemon team generator",
    "scarlet violet team builder",
    "pokemon picker",
    "random starter pokemon",
    "pokemon draft league",
    "soullink generator",
    "pokemon nuzlocke",
    "nuzlocke challenge",
    "pokemon challenge runs",
  ],
  authors: [{ name: "Random Pokemon Generator" }],
  creator: "Random Pokemon Generator",
  publisher: "Random Pokemon Generator",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Random Pokemon Generator",
    title: "Random Pokemon Generator | Team Builder for Nuzlocke & Draft League",
    description:
      "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Random Pokemon Generator - Build Your Dream Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Pokemon Generator | Team Builder for Nuzlocke & Draft League",
    description:
      "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. All 1025 Pokemon. Free tool!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for the homepage
const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Random Pokemon Generator",
    description:
      "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool.",
    url: siteUrl,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    datePublished: "2024-11-15",
    dateModified: "2026-02-18",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Random Pokemon Team",
    description:
      "Generate random Pokemon teams for Nuzlocke runs, Draft Leagues, and challenge modes using our free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose Team Size",
        text: "Select how many Pokemon you want in your team (1-6 Pokemon).",
      },
      {
        "@type": "HowToStep",
        name: "Apply Filters",
        text: "Optionally filter by type (18 types), region (Kanto-Paldea), rarity, evolution stage, and more.",
      },
      {
        "@type": "HowToStep",
        name: "Generate Team",
        text: "Click the GENERATE TEAM button to instantly create your random Pokemon team.",
      },
      {
        "@type": "HowToStep",
        name: "Export & Share",
        text: "Save your team locally, share it with friends, or regenerate as needed.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does this include Gen 9 Pokemon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our generator includes all 1025 Pokemon through Generation 9, including Pokemon Scarlet and Violet base game, The Teal Mask DLC, and The Indigo Disk DLC.",
        },
      },
      {
        "@type": "Question",
        name: "How many Pokemon are in the database?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1025 Pokemon from all 9 generations (Kanto through Paldea). This includes all regional forms, Mega Evolutions, Gigantamax forms, Paradox Pokemon, and Ultra Beasts.",
        },
      },
      {
        "@type": "Question",
        name: "How do I generate a random Pokemon team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click the GENERATE TEAM button on the homepage. You can customize your team by adjusting filters for team size, region, type, rarity, evolution stage, gender, nature, and more.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Nuzlocke challenge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Nuzlocke is a set of self-imposed hardcore Pokemon rules: If a Pokemon faints it must be released, you can only catch the first Pokemon on each route, and you must nickname all Pokemon.",
        },
      },
      {
        "@type": "Question",
        name: "Can I exclude Legendary Pokemon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Use the Rarity filter to exclude Legendary, Mythical, Ultra Beast, Paradox, and Sub-Legendary Pokemon for balanced Nuzlocke and challenge runs.",
        },
      },
      {
        "@type": "Question",
        name: "Is this tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% free with no ads, no signup required, and no hidden costs. This tool will always remain free.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Random Pokemon Generator is fully responsive and optimized for phones, tablets, and desktop computers with mobile-optimized touch targets.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      {/* Structured Data - server-rendered in HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Server-Rendered H1 for SEO - visible to Google crawlers */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2">
            RANDOM POKEMON GENERATOR
          </h1>
          <p className="font-mono text-sm md:text-base text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Generate random Pokemon teams instantly for <strong>Nuzlocke runs</strong>, <strong>Draft Leagues</strong> & challenge modes.
            Filter by type, region & rarity. All <strong>1,025 Pokemon</strong> from Gen 1-9. 100% free.
          </p>
        </div>

        {/* Interactive Client Generator - loads after initial render */}
        <HomeClient />

        {/* Topical Authority Hub - Server-rendered for SEO */}
        <section className="mt-12 md:mt-16 mb-8 border-2 border-black p-4 sm:p-6 md:p-12 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SPECIALIZED TOOLS</span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[0.9] mb-4 uppercase">
            EXPLORE MORE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
              GENERATORS
            </span>
          </h2>
          <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed mb-8">
            Discover our specialized Pokemon generators for specific types, regions, and challenges. Each tool is optimized for different playstyles and team building strategies.
          </p>

          {/* Type-Based Generators */}
          <div className="mb-8">
            <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-black mb-4 uppercase border-b-2 border-black pb-2">
              By Pokemon Type
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Link
                href="/shiny-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">✨</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Shiny Pokemon Generator</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Generate ultra-rare shiny variants with alternate color palettes
                </p>
              </Link>
              <Link
                href="/legendary-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">👑</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Legendary Pokemon Generator</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Get powerful legendary, mythical Pokemon & Ultra Beasts
                </p>
              </Link>
              <Link
                href="/starter-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🌱</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Starter Pokemon Generator</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Pick random starters from all 9 generations (Grass/Fire/Water)
                </p>
              </Link>
              <Link
                href="/pokemon-card-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-purple hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🎴</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Pokemon Card Generator</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Create & download premium trading cards for any Pokemon
                </p>
              </Link>
            </div>
          </div>

          {/* Region-Based Generators */}
          <div>
            <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-black mb-4 uppercase border-b-2 border-black pb-2">
              By Region
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Link
                href="/paldea-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-red hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🏫</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Paldea Pokemon (Gen 9)</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Scarlet & Violet Pokemon + Paradox forms
                </p>
              </Link>
              <Link
                href="/galar-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-blue hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">⚔️</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Galar Pokemon (Gen 8)</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Sword & Shield region with Dynamax Pokemon
                </p>
              </Link>
              <Link
                href="/alola-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-amber-200 hover:text-gray-900 transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🌴</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-gray-900">Alola Pokemon (Gen 7)</h4>
                <p className="text-sm text-brown/70 group-hover:text-gray-800">
                  Sun & Moon region + Alolan forms & Ultra Beasts
                </p>
              </Link>
              <Link
                href="/kalos-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-purple-700 hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🗼</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Kalos Pokemon (Gen 6)</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  X & Y region with Mega Evolutions & Fairy types
                </p>
              </Link>
              <Link
                href="/kanto-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-indigo-700 hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🔴</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Kanto Pokemon (Gen 1)</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Original 151 Pokemon from Red, Blue & Yellow
                </p>
              </Link>
              <Link
                href="/hoenn-pokemon-generator"
                className="block bg-white border-2 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group slasher"
              >
                <span className="text-2xl mb-2 block">🌊</span>
                <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white">Hoenn Pokemon (Gen 3)</h4>
                <p className="text-sm text-brown/70 group-hover:text-white/90">
                  Ruby, Sapphire & Emerald region Pokemon
                </p>
              </Link>
            </div>
          </div>

          {/* Challenge-Based Generators Link */}
          <div className="mt-8 bg-black text-white p-4 sm:p-6 slasher">
            <h3 className="font-grotesk font-bold text-lg sm:text-xl mb-3 uppercase">💀 Challenge Mode Generators</h3>
            <p className="font-mono text-sm mb-4 text-white/80">
              Specialized generators for hardcore challenge runs:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nuzlocke-generator"
                className="bg-red text-white px-4 py-2 border-2 border-white hover:bg-white hover:text-red transition-colors font-bold text-sm min-h-[44px] flex items-center"
              >
                Nuzlocke Generator →
              </Link>
              <Link
                href="/draft-league-generator"
                className="bg-blue text-white px-4 py-2 border-2 border-white hover:bg-white hover:text-blue transition-colors font-bold text-sm min-h-[44px] flex items-center"
              >
                Draft League Generator →
              </Link>
            </div>
          </div>
        </section>

        {/* Static SEO Content - Server-rendered for crawlers */}
        <StaticSeoContent />

        {/* Card Showcase Section */}
        <CardShowcase />

        {/* SEO Content Section */}
        <SeoContent />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </main>
  );
}
