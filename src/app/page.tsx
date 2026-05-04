import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import StaticSeoContent from "@/components/StaticSeoContent";
import FAQ from "@/components/FAQ";

// ── POPULAR POKÉMON — hardcoded, zero-fetch, fully SSR'd ──────────────────────
// These 30 entries appear in static HTML on every homepage response so Googlebot
// always has a crawl path to /pokemon/* detail pages without running JavaScript.
const POPULAR_POKEMON = [
  { slug: "charizard",   id: 6,    name: "Charizard",   types: ["fire", "flying"],    gen: "Gen I"    },
  { slug: "blastoise",   id: 9,    name: "Blastoise",   types: ["water"],              gen: "Gen I"    },
  { slug: "venusaur",    id: 3,    name: "Venusaur",    types: ["grass", "poison"],   gen: "Gen I"    },
  { slug: "pikachu",     id: 25,   name: "Pikachu",     types: ["electric"],           gen: "Gen I"    },
  { slug: "mewtwo",      id: 150,  name: "Mewtwo",      types: ["psychic"],            gen: "Gen I"    },
  { slug: "gengar",      id: 94,   name: "Gengar",      types: ["ghost", "poison"],   gen: "Gen I"    },
  { slug: "eevee",       id: 133,  name: "Eevee",       types: ["normal"],             gen: "Gen I"    },
  { slug: "snorlax",     id: 143,  name: "Snorlax",     types: ["normal"],             gen: "Gen I"    },
  { slug: "dragonite",   id: 149,  name: "Dragonite",   types: ["dragon", "flying"],  gen: "Gen I"    },
  { slug: "umbreon",     id: 197,  name: "Umbreon",     types: ["dark"],               gen: "Gen II"   },
  { slug: "espeon",      id: 196,  name: "Espeon",      types: ["psychic"],            gen: "Gen II"   },
  { slug: "lugia",       id: 249,  name: "Lugia",       types: ["psychic", "flying"],  gen: "Gen II"   },
  { slug: "tyranitar",   id: 248,  name: "Tyranitar",   types: ["rock", "dark"],       gen: "Gen II"   },
  { slug: "blaziken",    id: 257,  name: "Blaziken",    types: ["fire", "fighting"],   gen: "Gen III"  },
  { slug: "gardevoir",   id: 282,  name: "Gardevoir",   types: ["psychic", "fairy"],   gen: "Gen III"  },
  { slug: "rayquaza",    id: 384,  name: "Rayquaza",    types: ["dragon", "flying"],   gen: "Gen III"  },
  { slug: "salamence",   id: 373,  name: "Salamence",   types: ["dragon", "flying"],   gen: "Gen III"  },
  { slug: "lucario",     id: 448,  name: "Lucario",     types: ["fighting", "steel"],  gen: "Gen IV"   },
  { slug: "garchomp",    id: 445,  name: "Garchomp",    types: ["dragon", "ground"],   gen: "Gen IV"   },
  { slug: "togekiss",    id: 468,  name: "Togekiss",    types: ["fairy", "flying"],    gen: "Gen IV"   },
  { slug: "volcarona",   id: 637,  name: "Volcarona",   types: ["bug", "fire"],        gen: "Gen V"    },
  { slug: "zoroark",     id: 571,  name: "Zoroark",     types: ["dark"],               gen: "Gen V"    },
  { slug: "sylveon",     id: 700,  name: "Sylveon",     types: ["fairy"],              gen: "Gen VI"   },
  { slug: "greninja",    id: 658,  name: "Greninja",    types: ["water", "dark"],      gen: "Gen VI"   },
  { slug: "mimikyu",     id: 778,  name: "Mimikyu",     types: ["ghost", "fairy"],     gen: "Gen VII"  },
  { slug: "toxtricity",  id: 849,  name: "Toxtricity",  types: ["electric", "poison"], gen: "Gen VIII" },
  { slug: "dragapult",   id: 887,  name: "Dragapult",   types: ["dragon", "ghost"],    gen: "Gen VIII" },
  { slug: "gholdengo",   id: 1000, name: "Gholdengo",   types: ["steel", "ghost"],     gen: "Gen IX"   },
  { slug: "iron-valiant",id: 1006, name: "Iron Valiant", types: ["fairy", "fighting"],  gen: "Gen IX"   },
  { slug: "meowscarada", id: 908,  name: "Meowscarada", types: ["grass", "dark"],      gen: "Gen IX"   },
] as const;

const TYPE_BADGE_COLORS: Record<string, string> = {
  normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
  grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
  ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
  rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
  steel: "#B8B8D0", fairy: "#EE99AC",
};
// Light-text types use dark text for readability
const DARK_TEXT_TYPES = new Set(["electric", "normal", "ground", "fairy", "ice", "steel"]);

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
  title: "Random Pokemon Generator",
  description:
    "Easily generate a random Pokemon or full teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon from Gen 1-9. Free tool!",
  keywords: [
    "random pokemon generator",
    "random pokemon",
    "random generator pokemon",
    "pokemon random generator",
    "pokemon random pokemon generator",
    "generate a random pokemon",
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
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Random Pokemon Generator",
    title: "Random Pokemon Generator",
    description:
      "Easily generate a random Pokemon or full teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool!",
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
    title: "Random Pokemon Generator",
    description:
      "Easily generate a random Pokemon or full teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. All 1025 Pokemon. Free tool!",
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

// JSON-LD Structured Data for the homepage — one object per script tag
const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Random Pokemon Generator",
  description:
    "The #1 free Random Pokemon Generator — instantly generate random Pokemon or full teams of 1-6 from all 1,025 species across Generations 1-9. Filter by type, region, rarity, evolution stage, and gender. Built for Nuzlocke runs, Draft Leagues, and challenge modes. No account required.",
  url: siteUrl,
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  datePublished: "2024-11-15",
  dateModified: "2026-05-04",
  featureList: [
    "Generate random Pokemon teams of 1-6 Pokemon instantly",
    "Filter by all 18 Pokemon types (Fire, Water, Grass, Electric, etc.)",
    "Filter by region: Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea",
    "Exclude Legendary, Mythical, Paradox, and Ultra Beast Pokemon",
    "Filter by evolution stage (unevolved, middle, final)",
    "Lock favorite Pokemon and regenerate the rest",
    "Shiny variant toggle for alternate color schemes",
    "All 1,025 Pokemon through Generation 9 including Scarlet and Violet DLC",
    "Free with no account, login, or download required",
    "Nuzlocke challenge mode with advanced rarity filters",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  isPartOf: { "@type": "WebSite", name: "Random Pokemon Generator", url: siteUrl },
};

const howToJsonLd = {
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
};

const homeFaqJsonLd = {
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
      name: "How do I generate a random Pokemon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To generate a random Pokemon, simply set the team size to 1 and click the GENERATE TEAM button. You can also use filters to specify exactly what type or region you want.",
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
        text: "Yes, 100% free with no signup required and no hidden costs. This tool will always remain free.",
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
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      {/* Structured Data — one script tag per schema type (Google requirement) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Server-Rendered H1 for SEO */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">
            RANDOM POKEMON GENERATOR
          </h1>
          <p className="font-mono text-sm md:text-base text-charcoal max-w-xl mx-auto mb-6 leading-relaxed">
            The #1 <strong>Pokemon random generator</strong> to <strong>generate a random Pokemon</strong> or full team instantly. Filter all <strong>1,025 Pokemon</strong> (Gen 1-9) for Nuzlocke &amp; Draft Leagues. Fast, LLM-optimized &amp; 100% free.
          </p>
        </div>

        {/* Static prose — server-rendered, boosts text-to-HTML ratio */}
        <section className="mb-8 border-2 border-black slasher p-5 bg-white">
          <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-3">Generate a Random Pokémon — All 1,025 Species</h2>
          <p className="font-mono text-xs text-charcoal leading-relaxed mb-3">
            This free Random Pokémon Generator lets you instantly pick one or a full team of six from the complete National Pokédex — all 1,025 species across Generations 1 through 9. Whether you need a random starter for your next Nuzlocke, a draft pool for your Pokémon Draft League, or just want to discover a Pokémon you&apos;ve never used before, the generator has you covered in under a second.
          </p>
          <p className="font-mono text-xs text-charcoal leading-relaxed mb-3">
            Use the <strong>Type filter</strong> to restrict results to any of the 18 Pokémon types — Fire, Water, Grass, Electric, Psychic, Dragon, Fairy, Ghost, Dark, Steel, Fighting, Rock, Ground, Ice, Flying, Bug, Poison, or Normal. Use the <strong>Region filter</strong> to pull from a specific generation: Kanto (Gen 1), Johto (Gen 2), Hoenn (Gen 3), Sinnoh (Gen 4), Unova (Gen 5), Kalos (Gen 6), Alola (Gen 7), Galar (Gen 8), or Paldea (Gen 9). The <strong>Rarity filter</strong> lets you include or exclude Legendary, Mythical, Paradox, Ultra Beast, and Sub-Legendary Pokémon.
          </p>
          <p className="font-mono text-xs text-charcoal leading-relaxed">
            All generation data is sourced from <strong>PokeAPI</strong> and includes regional forms (Alolan, Galarian, Hisuian, Paldean), Mega Evolutions, Gigantamax forms, and all Scarlet &amp; Violet DLC additions. The generator runs entirely in your browser — no data is sent to our servers, there are no ads, and no login is required. Free forever.
          </p>
        </section>

        {/* Interactive Client Generator */}
        <HomeClient />

        {/* ── POPULAR POKÉMON — server-rendered, zero-JS, crawlable ── */}
        {/* 20 hardcoded entries give Googlebot a direct crawl path to   */}
        {/* /pokemon/* detail pages on every homepage visit.             */}
        <section className="mt-10 md:mt-14 mb-2" aria-label="Popular Pokémon">
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-2">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">POPULAR</span>
              </div>
              <h2 className="font-grotesk font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase leading-none">
                Fan-Favourite Pokémon
              </h2>
            </div>
            <Link
              href="/pokedex"
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-cream transition-colors flex-shrink-0 slasher"
            >
              Full Pokédex →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {POPULAR_POKEMON.map((p) => {
              const primaryType = p.types[0];
              const secondaryType = p.types[1] as string | undefined;
              const primaryColor = TYPE_BADGE_COLORS[primaryType] ?? "#68A090";
              const secondaryColor = secondaryType ? (TYPE_BADGE_COLORS[secondaryType] ?? "#68A090") : null;
              const accentBar = secondaryColor
                ? `linear-gradient(90deg, ${primaryColor} 50%, ${secondaryColor} 50%)`
                : primaryColor;
              const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;

              return (
                <Link
                  key={p.slug}
                  href={`/pokemon/${p.slug}`}
                  className="group relative bg-white border-2 border-black slasher overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col"
                >
                  {/* Type accent bar */}
                  <div className="h-1.5" style={{ background: accentBar }} />

                  <div className="p-3 flex flex-col flex-1">
                    {/* Gen badge + ID */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] text-charcoal/50 font-bold uppercase tracking-wide">
                        {p.gen}
                      </span>
                      <span className="font-mono text-[9px] text-charcoal/40 font-semibold">
                        #{String(p.id).padStart(4, "0")}
                      </span>
                    </div>

                    {/* Sprite */}
                    <div className="relative w-full mb-2.5" style={{ paddingBottom: "80%" }}>
                      <div
                        className="absolute inset-0 opacity-[0.06] rounded-full"
                        style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
                      />
                      <Image
                        src={spriteUrl}
                        alt={`${p.name} — ${p.types.join("/")} type Pokémon`}
                        fill
                        sizes="(max-width: 640px) 44vw, (max-width: 1024px) 22vw, 18vw"
                        className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 p-1"
                        loading="lazy"
                        unoptimized
                      />
                    </div>

                    {/* Name */}
                    <h3 className="font-grotesk font-bold text-xs sm:text-sm text-black uppercase truncate mb-1.5 group-hover:text-indigo transition-colors">
                      {p.name}
                    </h3>

                    {/* Type badges */}
                    <div className="flex gap-1 flex-wrap mt-auto">
                      {p.types.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] px-1.5 py-0.5 uppercase font-bold border border-black/10"
                          style={{
                            backgroundColor: TYPE_BADGE_COLORS[t] ?? "#68A090",
                            color: DARK_TEXT_TYPES.has(t) ? "#000" : "#fff",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA bar */}
                  <div className="border-t border-black/10 bg-black/[0.02] group-hover:bg-indigo transition-colors duration-200 px-3 py-1.5">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-charcoal group-hover:text-white transition-colors uppercase tracking-wide">
                      View details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile "See all" link */}
          <div className="mt-4 sm:hidden text-center">
            <Link
              href="/pokedex"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold border-2 border-black px-5 py-2.5 hover:bg-black hover:text-cream transition-colors slasher"
            >
              Browse Full Pokédex →
            </Link>
          </div>
        </section>

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
