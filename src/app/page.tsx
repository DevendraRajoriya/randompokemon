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

      <div className="max-w-6xl mx-auto relative">
        {/* Server-Rendered H1 for SEO */}
        <div className="mb-8 md:mb-12 text-center">

          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">
            RANDOM POKEMON GENERATOR
          </h1>
          <p className="font-mono text-sm md:text-base text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Generate random Pokemon teams instantly for <strong>Nuzlocke runs</strong>, <strong>Draft Leagues</strong> & challenge modes.
            Filter by type, region & rarity. All <strong>1,025 Pokemon</strong> from Gen 1-9. 100% free.
          </p>
        </div>

        {/* Interactive Client Generator */}
        <HomeClient />

        {/* Card Showcase Section - shown right after generated team */}
        <CardShowcase />

        {/* Explore Generators */}
        <section className="mt-12 md:mt-16 mb-8 border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SPECIALIZED TOOLS</span>
          </div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-4 uppercase">
            EXPLORE MORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">GENERATORS</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed mb-8">
            Discover our specialized Pokemon generators for specific types, regions, and challenges.
          </p>

          {/* Type-Based */}
          <div className="mb-8">
            <h3 className="font-mono font-bold text-sm text-black mb-4 uppercase border-b-2 border-black pb-2 tracking-wider">By Pokemon Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/shiny-pokemon-generator" className="block bg-white border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group slasher">
                <span className="text-2xl mb-2 block">✨</span>
                <h4 className="font-mono font-bold text-sm mb-1 group-hover:text-white uppercase">Shiny Pokemon</h4>
                <p className="font-mono text-xs text-charcoal group-hover:text-white/70">Ultra-rare shiny color variants</p>
              </Link>
              <Link href="/legendary-pokemon-generator" className="block bg-white border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group slasher">
                <span className="text-2xl mb-2 block">👑</span>
                <h4 className="font-mono font-bold text-sm mb-1 group-hover:text-white uppercase">Legendary Pokemon</h4>
                <p className="font-mono text-xs text-charcoal group-hover:text-white/70">Legendary, mythical & Ultra Beasts</p>
              </Link>
              <Link href="/starter-pokemon-generator" className="block bg-white border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group slasher">
                <span className="text-2xl mb-2 block">🌱</span>
                <h4 className="font-mono font-bold text-sm mb-1 group-hover:text-white uppercase">Starter Pokemon</h4>
                <p className="font-mono text-xs text-charcoal group-hover:text-white/70">All 9 generations of starters</p>
              </Link>
              <Link href="/pokemon-card-generator" className="block bg-white border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group slasher">
                <span className="text-2xl mb-2 block">🎴</span>
                <h4 className="font-mono font-bold text-sm mb-1 group-hover:text-white uppercase">Card Generator</h4>
                <p className="font-mono text-xs text-charcoal group-hover:text-white/70">Create & download trading cards</p>
              </Link>
            </div>
          </div>

          {/* By Region */}
          <div className="mb-8">
            <h3 className="font-mono font-bold text-sm text-black mb-4 uppercase border-b-2 border-black pb-2 tracking-wider">By Region</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              <Link href="/paldea-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🏫 Paldea (Gen 9)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Scarlet & Violet</p></Link>
              <Link href="/galar-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">⚔️ Galar (Gen 8)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Sword & Shield</p></Link>
              <Link href="/alola-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🌴 Alola (Gen 7)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Sun & Moon</p></Link>
              <Link href="/kalos-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🗼 Kalos (Gen 6)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">X & Y</p></Link>
              <Link href="/unova-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🗽 Unova (Gen 5)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Black & White</p></Link>
              <Link href="/sinnoh-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">💎 Sinnoh (Gen 4)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Diamond & Pearl</p></Link>
              <Link href="/hoenn-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🌊 Hoenn (Gen 3)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Ruby & Sapphire</p></Link>
              <Link href="/johto-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🔔 Johto (Gen 2)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Gold & Silver</p></Link>
              <Link href="/kanto-pokemon-generator" className="block bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-colors group slasher"><h4 className="font-mono font-bold text-xs mb-0.5 group-hover:text-white uppercase">🔴 Kanto (Gen 1)</h4><p className="font-mono text-[10px] text-charcoal group-hover:text-white/70">Red, Blue & Yellow</p></Link>
            </div>
          </div>

          {/* Challenge Mode */}
          <div className="bg-black text-white p-4 sm:p-6 slasher">
            <h3 className="font-mono font-bold text-sm mb-3 uppercase tracking-wider">💀 Challenge Mode Generators</h3>
            <p className="font-mono text-xs mb-4 text-white/70">Specialized generators for hardcore challenge runs:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/nuzlocke-generator" className="bg-marigold text-black px-4 py-2 border-2 border-marigold hover:bg-white hover:text-black transition-colors font-mono font-bold text-xs uppercase tracking-wider min-h-[44px] flex items-center slasher">Nuzlocke Generator →</Link>
              <Link href="/draft-league-generator" className="bg-white/10 text-white px-4 py-2 border-2 border-white/30 hover:bg-marigold hover:text-black hover:border-marigold transition-colors font-mono font-bold text-xs uppercase tracking-wider min-h-[44px] flex items-center slasher">Draft League Generator →</Link>
            </div>
          </div>
        </section>

        {/* Static SEO Content */}
        <StaticSeoContent />

        {/* SEO Content Section */}
        <SeoContent />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </main>
  );
}
