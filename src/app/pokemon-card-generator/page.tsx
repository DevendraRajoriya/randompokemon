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
  title: "POKEMON Card Generator — All 1025 POKEMON | Create & Download Free Cards",
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
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is the Pokemon Card Generator free?", acceptedAnswer: { "@type": "Answer", text: "Yes, 100% free with no signup, no watermarks, no ads, and no download limits. Generate and download as many Pokemon cards as you like. Free forever." } },
    { "@type": "Question", name: "What resolution are the downloaded cards?", acceptedAnswer: { "@type": "Answer", text: "Cards are rendered at 1080×1350 pixels at 2x scale (2160×2700 actual resolution), giving you ultra-sharp, print-quality PNG images perfect for Instagram, Twitter, and physical printing." } },
    { "@type": "Question", name: "Can I use the cards commercially?", acceptedAnswer: { "@type": "Answer", text: "The cards use official artwork from PokeAPI (sourced from The Pokemon Company). They are ideal for personal use, fan content, social media, and educational purposes. Pokemon is a trademark of Nintendo/Game Freak/The Pokemon Company." } },
    { "@type": "Question", name: "Which Pokemon are available?", acceptedAnswer: { "@type": "Answer", text: "All 1,025 Pokemon from Generation 1 (Kanto) through Generation 9 (Paldea), including Scarlet/Violet DLC Pokemon, Paradox Pokemon, Ultra Beasts, all legendaries, and mythical Pokemon." } },
    { "@type": "Question", name: "What stats are shown on each card?", acceptedAnswer: { "@type": "Answer", text: "Each card displays HP, Attack, Defense, Special Attack, Special Defense, Speed, and the Base Stat Total (BST). Additional details include the Pokemon's height, weight, abilities, and primary/secondary types." } },
    { "@type": "Question", name: "How do I search for a Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Type any Pokemon name in the search bar — autocomplete suggestions appear as you type. The search works for all 1,025 Pokemon names in English. You can also search by Pokedex number." } },
    { "@type": "Question", name: "How do I download a Pokemon card?", acceptedAnswer: { "@type": "Answer", text: "After generating a card, click the share/download button on the card preview. Choose Download PNG to save the high-resolution image directly to your device. You can also copy to clipboard or share directly to Twitter, Facebook, Reddit, and Instagram." } },
    { "@type": "Question", name: "What file format are the downloaded cards?", acceptedAnswer: { "@type": "Answer", text: "Cards are downloaded as PNG files — the highest quality lossless image format. PNG preserves all details including transparency and gradients, making it ideal for sharing on social media or printing." } },
    { "@type": "Question", name: "Can I make cards for Shiny Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Yes! The card generator supports shiny variants for Pokemon that have alternate shiny sprites. Use the shiny toggle in the card generator to switch between standard and shiny artwork on the card." } },
    { "@type": "Question", name: "What is the card design style?", acceptedAnswer: { "@type": "Answer", text: "Cards feature a premium dark gradient background with holographic accent borders, type-colored glows matching each Pokemon's typing (e.g., orange for Fire, blue for Water), clean sans-serif typography, and official Ken Sugimori or modern artwork." } },
    { "@type": "Question", name: "Where does the Pokemon data come from?", acceptedAnswer: { "@type": "Answer", text: "All data is pulled live from PokeAPI (pokeapi.co), the most comprehensive open Pokemon database. It includes accurate base stats, abilities, type data, height, weight, and official artwork for all 1,025 Pokemon." } },
  ],
};

export default function PokemonCardGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cardJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
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
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">
            POKEMON CARD GENERATOR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              ALL 1025 POKEMON
            </span>
          </h1>
          <p className="font-mono text-sm md:text-base text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Search any of the <strong>1,025 Pokemon</strong>, preview premium
            trading card designs with full stats, and{" "}
            <strong>download high-resolution PNG cards</strong> for free.
            Perfect for social media, Nuzlocke documentation, and collection
            showcasing.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
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
            <div className="space-y-2">
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">Is the Pokemon Card Generator free?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Yes, <strong>100% free</strong> — no signup, no watermarks, no ads, and no download limits. Generate and download as many Pokemon cards as you like. The tool is and will always be completely free to use for everyone in the Pokemon community.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">What resolution are the downloaded cards?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Cards are rendered at <strong>1080×1350 pixels</strong> at 2x scale (2160×2700 actual), giving you ultra-sharp, print-quality PNG images perfect for Instagram posts, Twitter shares, and physical printing.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">How do I search for a Pokemon?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Type any Pokemon name in the search bar — autocomplete suggestions appear as you type. Works for all <strong>1,025 Pokemon</strong> in English. You can also search by Pokedex number (e.g. type &quot;6&quot; for Charizard or &quot;25&quot; for Pikachu).</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">How do I download a Pokemon card?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">After generating a card, click the <strong>share/download button</strong> on the card preview. Choose Download PNG to save to your device, copy to clipboard, or share directly to Twitter, Facebook, Reddit, or Instagram.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">What stats are shown on each card?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Every card shows <strong>HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed</strong>, and Base Stat Total (BST). Additional info includes height, weight, abilities, and primary/secondary type badges with type-matched colour coding.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">What file format are the cards downloaded in?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Cards are saved as <strong>PNG files</strong> — a lossless, high-quality format that preserves all gradients, transparency, and fine details. PNG is ideal for social media sharing and print use without quality loss.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">Can I make cards for Shiny Pokemon?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Yes! The card generator supports <strong>shiny variants</strong> for Pokemon that have alternate shiny sprites. Use the shiny toggle to switch between standard and shiny artwork on any card before downloading.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">What is the card design style?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Cards feature a <strong>premium dark gradient background</strong> with holographic accent borders, type-colored glows (orange for Fire, blue for Water, purple for Psychic, etc.), clean bold typography, and official Pokemon artwork sourced from PokeAPI.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">Can I use the cards commercially?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">Cards use official artwork from PokeAPI (sourced from The Pokemon Company). They&apos;re perfect for <strong>personal use, fan content, social media, and educational purposes</strong>. Pokemon is a trademark of Nintendo/Game Freak/The Pokemon Company — commercial resale is not permitted.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">Which Pokemon are available?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">All <strong>1,025 Pokemon</strong> from Generation 1 (Kanto) through Generation 9 (Paldea), including Scarlet/Violet DLC Pokemon, Paradox Pokemon, Ultra Beasts, all legendaries, and mythical Pokemon. The complete National Pokedex.</p></div>
              </details>
              <details className="bg-white border-2 border-black slasher">
                <summary className="bg-black text-white p-4 cursor-pointer"><h3 className="font-sans font-bold text-lg md:text-xl">Where does the Pokemon data come from?</h3></summary>
                <div className="border-t-0 p-4 md:p-6"><p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">All data is pulled live from <strong>PokeAPI (pokeapi.co)</strong>, the most comprehensive open Pokemon database — accurate base stats, abilities, type data, height, weight, and official artwork for all 1,025 Pokemon updated in real time.</p></div>
              </details>

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
