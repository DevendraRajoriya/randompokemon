import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

const CardGeneratorClient = dynamic(
  () => import("./CardGeneratorClient"),
  {
    loading: () => (
      <div className="min-h-[600px] animate-pulse bg-white border-4 border-black slasher" />
    ),
  }
);

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokemon Card Generator | Create & Download Free Pokemon Cards (2026)",
  description:
    "Create stunning Pokemon trading cards for all 1025 Pokemon! Search any Pokemon, preview premium card designs with stats, and download high-resolution PNG cards. Free forever.",
  keywords: [
    "pokemon card generator",
    "pokemon card maker",
    "pokemon card creator",
    "custom pokemon card",
    "pokemon trading card generator",
    "pokemon card download",
    "pokemon card png",
    "free pokemon card maker",
    "pokemon card template",
  ],
  alternates: {
    canonical: `${siteUrl}/pokemon-card-generator`,
  },
  openGraph: {
    title: "Pokemon Card Generator | Create & Download Free Cards",
    description:
      "Create stunning Pokemon trading cards for all 1025 Pokemon! Search, preview, and download high-res PNG cards. Free tool.",
    url: `${siteUrl}/pokemon-card-generator`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pokemon Card Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Card Generator | Create & Download Free Cards",
    description:
      "Create stunning Pokemon trading cards for all 1025 Pokemon! Free download.",
    images: ["/og-image.png"],
  },
};

const cardJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pokemon Card Generator",
  description:
    "Create and download premium Pokemon trading cards for all 1025 Pokemon. Search by name, preview designs with full stats, and save as high-resolution PNG images.",
  url: `${siteUrl}/pokemon-card-generator`,
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
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

export default function PokemonCardGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cardJsonLd) }}
      />
      <main className="min-h-screen bg-cream px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs md:text-sm font-bold uppercase">
            <li>
              <Link
                href="/"
                className="text-black hover:text-indigo transition-colors flex items-center gap-1"
              >
                ← Home
              </Link>
            </li>
            <li className="text-black/30">/</li>
            <li className="text-black">Pokemon Card Generator</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              CARD MAKER
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2">
            POKEMON CARD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
              GENERATOR
            </span>
          </h1>
          <p className="font-mono text-sm md:text-base text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Search any of the <strong>1,025 Pokemon</strong>, preview premium
            trading card designs with full stats, and{" "}
            <strong>download high-resolution PNG cards</strong> for free.
            Perfect for social media, Nuzlocke documentation, and collection
            showcasing.
          </p>
        </div>

        {/* Card Generator Client Component */}
        <CardGeneratorClient />

        {/* How To Use Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-0">
          <section className="mt-12 md:mt-16 mb-8 border-2 border-black p-6 md:p-10 slasher max-w-4xl mx-auto bg-white filter-drop-shadow text-left">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                HOW TO USE
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-[0.9] mb-8 uppercase">
              CREATE YOUR CARDS
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-grotesk font-bold text-lg flex-shrink-0 slasher">
                  1
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-black mb-1">
                    Search for a Pokemon
                  </h3>
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Type any Pokemon name in the search bar above. Autocomplete
                    suggestions appear as you type — works for all 1,025
                    Pokemon from Gen 1 through Gen 9.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-grotesk font-bold text-lg flex-shrink-0 slasher">
                  2
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-black mb-1">
                    Preview the Card
                  </h3>
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Each card features official artwork, type badges, full base
                    stats (HP, ATK, DEF, SP.A, SP.D, SPD), BST score, height,
                    weight, and abilities — all styled in a premium dark theme
                    with holographic borders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-grotesk font-bold text-lg flex-shrink-0 slasher">
                  3
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-black mb-1">
                    Download or Share
                  </h3>
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Click the share button on any card to open the export modal.
                    Download as a high-resolution PNG, copy to clipboard, or
                    share directly to Twitter, Facebook, Reddit, and Instagram.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0 mt-8">
          {/* Features Section */}
          <section className="mt-8 mb-8 bg-cream border-2 border-black p-6 md:p-12 slasher max-w-4xl mx-auto">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                FEATURES
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-[0.9] mb-8 uppercase">
              What Makes Our Cards Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col h-full">
                <div className="bg-black text-white p-3 slasher">
                  <h3 className="font-sans font-bold text-base md:text-lg uppercase">
                    ✨ Premium Design
                  </h3>
                </div>
                <div className="border-2 border-black border-t-0 p-4 bg-white flex-grow">
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Dark gradient backgrounds with holographic accent borders,
                    type-colored glows, and clean typography. Cards look
                    stunning on any social media platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="bg-black text-white p-3 slasher">
                  <h3 className="font-sans font-bold text-base md:text-lg uppercase">
                    📊 Full Stats Included
                  </h3>
                </div>
                <div className="border-2 border-black border-t-0 p-4 bg-white flex-grow">
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Every card shows HP, Attack, Defense, Sp. Attack, Sp.
                    Defense, Speed, BST total, height, weight, and abilities.
                    All data pulled from PokeAPI.
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="bg-black text-white p-3 slasher">
                  <h3 className="font-sans font-bold text-base md:text-lg uppercase">
                    📱 Social Ready
                  </h3>
                </div>
                <div className="border-2 border-black border-t-0 p-4 bg-white flex-grow">
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Cards are rendered at 1080×1350px — the perfect Instagram
                    post ratio. Share directly to Twitter, Facebook, Reddit, or
                    save for Instagram stories.
                  </p>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="bg-black text-white p-3 slasher">
                  <h3 className="font-sans font-bold text-base md:text-lg uppercase">
                    🎴 All 1,025 Pokemon
                  </h3>
                </div>
                <div className="border-2 border-black border-t-0 p-4 bg-white flex-grow">
                  <p className="font-mono text-sm text-charcoal leading-relaxed">
                    Complete database through Gen 9 — including Scarlet/Violet
                    DLC, Paradox Pokemon, all legendaries, mythicals, and Ultra
                    Beasts. Updated for 2026.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mt-8 mb-8 bg-cream border-2 border-black p-6 md:p-12 slasher max-w-4xl mx-auto">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                USE CASES
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-[0.9] mb-8 uppercase">
              What People Use Cards For
            </h2>
            <div className="space-y-3">
              <div className="border-l-8 border-red pl-4 mb-4">
                <h3 className="font-bold text-black mb-2 font-grotesk text-lg uppercase tracking-tight">
                  🎮 Nuzlocke Documentation
                </h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed">
                  Document every Pokemon in your Nuzlocke run with beautiful
                  cards. Share your team&apos;s journey on social media — memorialize
                  fallen teammates and celebrate survivors.
                </p>
              </div>
              <div className="border-l-8 border-blue pl-4 mb-4">
                <h3 className="font-bold text-black mb-2 font-grotesk text-lg uppercase tracking-tight">
                  📱 Social Media Content
                </h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed">
                  Create eye-catching Pokemon content for Twitter, Instagram,
                  Reddit, and Discord. The premium card design stands out in
                  feeds and gets engagement.
                </p>
              </div>
              <div className="border-l-8 border-purple pl-4 mb-4">
                <h3 className="font-bold text-black mb-2 font-grotesk text-lg uppercase tracking-tight">
                  🏆 Draft League Showcases
                </h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed">
                  Show off your drafted Pokemon roster with premium cards.
                  Perfect for league announcements, trade proposals, and team
                  reveal posts.
                </p>
              </div>
              <div className="border-l-8 border-green pl-4 mb-4">
                <h3 className="font-bold text-black mb-2 font-grotesk text-lg uppercase tracking-tight">
                  📚 Educational & Reference
                </h3>
                <p className="font-mono text-sm text-charcoal leading-relaxed">
                  Quick visual reference cards with complete stat breakdowns.
                  Great for studying competitive tiers, comparing Pokemon, or
                  teaching new players about type matchups.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="mt-12 md:mt-16 mb-8 bg-white border-4 border-black p-6 md:p-10 slasher shadow-[6px_6px_0px_#000] max-w-4xl mx-auto text-left mb-12"
          >
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                HELP DESK
              </span>
            </div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-[0.9] mb-8 uppercase">
              Card Generator{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
                FAQS
              </span>
            </h2>
            <div className="space-y-0">
              <div className="mt-4">
                <div className="bg-black text-white p-4 slasher">
                  <h3 className="font-sans font-bold text-lg md:text-xl">
                    Is the Pokemon Card Generator free?
                  </h3>
                </div>
                <div className="border-4 border-black border-t-0 p-4 md:p-6 bg-white shadow-[6px_6px_0px_#000]">
                  <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                    Yes, <strong>100% free</strong> with no signup, no ads, and
                    no limits. Generate and download unlimited Pokemon cards.
                    We&apos;ll keep this free forever.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-black text-white p-4 slasher">
                  <h3 className="font-sans font-bold text-lg md:text-xl">
                    What resolution are the downloaded cards?
                  </h3>
                </div>
                <div className="border-4 border-black border-t-0 p-4 md:p-6 bg-white shadow-[6px_6px_0px_#000]">
                  <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                    Cards are rendered at <strong>1080×1350 pixels</strong> at
                    2x scale (2160×2700 actual), giving you ultra-sharp images
                    perfect for Instagram posts, Twitter shares, and printing.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-black text-white p-4 slasher">
                  <h3 className="font-sans font-bold text-lg md:text-xl">
                    Can I use the cards commercially?
                  </h3>
                </div>
                <div className="border-4 border-black border-t-0 p-4 md:p-6 bg-white shadow-[6px_6px_0px_#000]">
                  <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                    The cards use official artwork from PokeAPI (which sources
                    from The Pokemon Company). They&apos;re perfect for personal use,
                    fan content, social media, and educational purposes. Pokemon
                    is a trademark of Nintendo/Game Freak/The Pokemon Company.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-black text-white p-4 slasher">
                  <h3 className="font-sans font-bold text-lg md:text-xl">
                    Which Pokemon are available?
                  </h3>
                </div>
                <div className="border-4 border-black border-t-0 p-4 md:p-6 bg-white shadow-[6px_6px_0px_#000]">
                  <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                    All <strong>1,025 Pokemon</strong> from Generation 1 (Kanto)
                    through Generation 9 (Paldea), including Scarlet/Violet DLC
                    Pokemon, Paradox Pokemon, Ultra Beasts, all legendaries, and
                    mythical Pokemon.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Generators */}
          <section className="mt-8 mb-8 bg-cream border-2 border-black p-6 md:p-12 slasher max-w-4xl mx-auto">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                EXPLORE
              </span>
            </div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-[0.9] mb-8 uppercase flex items-center gap-3">
              <ExternalLink className="w-8 h-8 md:w-10 md:h-10" />
              OTHER GENERATORS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="block bg-white border-4 border-black p-4 hover:bg-green-700 hover:text-white transition-colors group slasher filter-drop-shadow card-hover"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  🎲 Random Team Generator
                </h3>
                <p className="text-sm text-charcoal font-mono group-hover:text-white/90">
                  Generate random teams from all 1,025 Pokemon
                </p>
              </Link>
              <Link
                href="/shiny-pokemon-generator"
                className="block bg-white border-4 border-black p-4 hover:bg-red hover:text-white transition-colors group slasher filter-drop-shadow card-hover"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ✨ Shiny Pokemon Generator
                </h3>
                <p className="text-sm text-charcoal font-mono group-hover:text-white/90">
                  Generate ultra-rare shiny color variants
                </p>
              </Link>
              <Link
                href="/nuzlocke-generator"
                className="block bg-white border-4 border-black p-4 hover:bg-purple hover:text-white transition-colors group slasher filter-drop-shadow card-hover"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  ⚔️ Nuzlocke Generator
                </h3>
                <p className="text-sm text-charcoal font-mono group-hover:text-white/90">
                  Challenge mode team generator with permadeath
                </p>
              </Link>
              <Link
                href="/pokedex"
                className="block bg-white border-4 border-black p-4 hover:bg-blue hover:text-white transition-colors group slasher filter-drop-shadow card-hover"
              >
                <h3 className="font-bold mb-1 group-hover:text-white">
                  📖 Full Pokedex
                </h3>
                <p className="text-sm text-charcoal font-mono group-hover:text-white/90">
                  Browse the complete Pokemon database
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
