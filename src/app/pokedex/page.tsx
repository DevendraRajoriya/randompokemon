import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PokedexClient from "./PokedexClient";

const siteUrl = "https://www.randompokemon.co";
const POKEMON_SPECIES_COUNT = 1025;

// ── METADATA ──────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pokédex | Complete Pokemon Database | Random Pokemon Generator",
  description:
    "Browse the complete Pokédex with all 1025 Pokemon species. Search, filter by type, and view detailed stats, evolutions, and abilities for every Pokemon from Gen 1–9.",
  keywords: [
    "pokedex",
    "pokemon database",
    "complete pokedex",
    "all pokemon list",
    "pokemon stats",
    "national pokedex",
    "pokemon search",
    "pokemon types",
  ],
  alternates: { canonical: `${siteUrl}/pokedex` },
  openGraph: {
    title: "Pokédex | Complete Pokemon Database",
    description:
      "Browse all 1025 Pokemon species with stats, types, and evolutions. The complete Pokemon database.",
    url: `${siteUrl}/pokedex`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokédex - Complete Pokemon Database" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokédex | Complete Pokemon Database",
    description: "Browse all 1025 Pokemon species with stats, types, and evolutions.",
    images: ["/og-image.png"],
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────

const pokedexJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pokédex — Complete Pokemon Database",
  description: "Browse the complete Pokédex with all 1,025 Pokemon species. Search and filter by type, region, and generation.",
  url: `${siteUrl}/pokedex`,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "Random Pokemon Generator", url: siteUrl },
};

const pokedexAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pokemon Pokédex — Complete National Database",
  description: "Interactive Pokédex covering all 1,025 Pokemon from Generation 1 (Kanto) through Generation 9 (Paldea). Search by name, filter by type, and click any entry to view full stats, moves, evolution chain, and type matchups. Free with no account required.",
  url: `${siteUrl}/pokedex`,
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  inLanguage: "en",
  dateModified: "2026-05-04",
  featureList: [
    "Search all 1,025 Pokemon by name or Pokédex number",
    "Filter by all 18 types (Fire, Water, Grass, Electric, etc.)",
    "Filter by generation (Kanto through Paldea)",
    "Direct links to full detail pages with stats, moves, and type charts",
    "Includes regional forms, Paradox Pokemon, Ultra Beasts, and all DLC",
    "Free with no account or login required",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  isPartOf: { "@type": "WebApplication", name: "Random Pokemon Generator", url: siteUrl },
};

// ── TYPES ─────────────────────────────────────────────────────────

interface PokemonListItem { name: string; url: string; }
interface PokemonCard {
  id: number;
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
}

// ── HELPERS ───────────────────────────────────────────────────────

function capitalize(name: string) {
  return name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function getPokemonId(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
}

// ── DATA FETCHING ─────────────────────────────────────────────────

async function getPokemonList(): Promise<{ list: PokemonListItem[]; count: number }> {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_SPECIES_COUNT}&offset=0`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("Failed to fetch Pokemon list");
    const data = await res.json();
    return { list: data.results as PokemonListItem[], count: POKEMON_SPECIES_COUNT };
  } catch {
    return { list: [], count: POKEMON_SPECIES_COUNT };
  }
}

/** Fetch full card data for the first 24 Pokémon — populates PokedexClient's initial grid via SSR */
async function getInitialCards(list: PokemonListItem[]): Promise<PokemonCard[]> {
  const results = await Promise.allSettled(
    list.slice(0, 24).map(async (p) => {
      const id = getPokemonId(p.url);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { next: { revalidate: 86400 } });
      if (!res.ok) throw new Error();
      const raw = await res.json();
      return { id: raw.id, name: raw.name, sprites: raw.sprites, types: raw.types, stats: raw.stats } as PokemonCard;
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<PokemonCard> => r.status === "fulfilled")
    .map((r) => r.value);
}

// ── PAGE ─────────────────────────────────────────────────────────

export default async function PokedexPage() {
  const { list, count } = await getPokemonList();
  const initialCards = await getInitialCards(list);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pokedexJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pokedexAppJsonLd) }} />

      {/* ── SERVER-RENDERED CONTENT ──────────────────────────────
          Everything below this comment is in the static HTML that
          Googlebot receives. It includes H1, intro text, generation
          nav links, and a full <ul> of all 1,025 Pokémon with
          crawlable <Link> tags to every /pokemon/[name] detail page.
          This section renders before PokedexClient's JS executes.
      ──────────────────────────────────────────────────────────── */}
      <main className="min-h-screen bg-cream">
        {/* ── STATIC SEO HEADER ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-charcoal">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="text-black/30">/</li>
              <li className="text-black font-bold">Pokédex</li>
            </ol>
          </nav>

          <div className="inline-block bg-black px-4 py-1 border border-black mb-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">INDEX: ONLINE</span>
          </div>

          <h1 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-7xl text-black leading-none uppercase mb-3">
            POKÉDEX
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mb-2 leading-relaxed">
            The complete National Pokédex — all <strong>{count} Pokémon species</strong> from{" "}
            <Link href="/pokemon/bulbasaur" className="underline font-bold hover:text-charcoal">Bulbasaur (#0001)</Link>
            {" "}to{" "}
            <Link href="/pokemon/pecharunt" className="underline font-bold hover:text-charcoal">Pecharunt (#1025)</Link>.
            Click any Pokémon to view its full stats, type matchups, evolution chain, and competitive tier.
          </p>

          {/* Generation jump links */}
          <nav aria-label="Jump to generation" className="mb-6 flex flex-wrap gap-2">
            <Link href="/kanto-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 1 — Kanto</Link>
            <Link href="/johto-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 2 — Johto</Link>
            <Link href="/hoenn-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 3 — Hoenn</Link>
            <Link href="/sinnoh-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 4 — Sinnoh</Link>
            <Link href="/unova-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 5 — Unova</Link>
            <Link href="/kalos-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 6 — Kalos</Link>
            <Link href="/alola-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 7 — Alola</Link>
            <Link href="/galar-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 8 — Galar</Link>
            <Link href="/paldea-pokemon-generator" className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors">Gen 9 — Paldea</Link>
          </nav>

          <div className="bg-white border-2 border-black p-5 mb-4">
            <h2 className="font-grotesk font-bold text-lg text-black uppercase mb-3">About This Pokédex</h2>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-3">
              This is the complete National Pokédex — every species from Generation 1 through Generation 9, including all regional forms, Paradox Pokémon, Ultra Beasts, and the Scarlet &amp; Violet DLC additions. Each Pokémon entry links to a full detail page with base stats, type matchup charts, evolution chains, learnset data, competitive tier placement, and Pokédex flavor text from every game the species has appeared in.
            </p>
            <p className="font-mono text-xs text-charcoal leading-relaxed mb-3">
              The Pokédex started with 151 species in Red and Blue (1996) and has grown to 1,025 as of the Indigo Disk DLC for Scarlet and Violet (2023). Pokémon #1 is Bulbasaur, the Grass/Poison Seed Pokémon from Kanto. Pokémon #1025 is Pecharunt, the Mythical Poison/Ghost Pokémon introduced in the Indigo Disk epilogue. Use the search and type filters above to navigate the full list interactively, or browse the complete static index below.
            </p>
            <p className="font-mono text-xs text-charcoal leading-relaxed">
              Each Pokémon&apos;s detail page includes its complete base stat total (BST), competitive tier rating (Ubers/OU/UU/RU/NU), full type effectiveness chart showing all weaknesses, resistances, and immunities, and the complete learnset across all generations. Click any Pokémon name in the index below to view its full profile.
            </p>
          </div>
        </section>

        {/* ── INTERACTIVE CLIENT LAYER (search, filter, grid) ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Suspense fallback={null}>
            <PokedexClient
              initialPokemonList={list}
              totalCount={count}
              initialCards={initialCards}
            />
          </Suspense>
        </div>

        {/* ── FULL STATIC POKÉDEX INDEX ────────────────────────
            This <ul> is in every bot's raw HTML response.
            1,025 crawlable <Link> tags → /pokemon/[name].
            Visually de-emphasised (border-t, muted text) so it
            doesn't compete with the interactive grid above.
        ──────────────────────────────────────────────────────── */}
        {list.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-8 border-t-4 border-black mt-8">
            <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-4 border-b-2 border-black pb-2">
              Full Pokédex Index — All {count} Pokémon
            </h2>
            <p className="font-mono text-xs text-charcoal mb-6">
              Use the search and filter tools above to browse interactively, or explore the complete index below.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
              {list.map((p) => {
                const id = getPokemonId(p.url);
                return (
                  <li key={p.name}>
                    <Link
                      href={`/pokemon/${p.name}`}
                      className="flex items-center gap-1.5 font-mono text-xs text-charcoal hover:text-black hover:bg-cream px-2 py-1.5 transition-colors"
                    >
                      <span className="text-black/30 text-[10px] w-8 flex-shrink-0">
                        #{String(id).padStart(4, "0")}
                      </span>
                      {capitalize(p.name)}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Related tools */}
            <div className="mt-12 pt-8 border-t-2 border-black">
              <h2 className="font-grotesk font-bold text-lg text-black uppercase mb-4">Related Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link href="/" className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group">
                  <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">Random Generator</p>
                  <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">All 1025 Pokémon</p>
                </Link>
                <Link href="/shiny-pokemon-generator" className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group">
                  <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">Shiny Generator</p>
                  <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">Rare color variants</p>
                </Link>
                <Link href="/pokemon-card-generator" className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group">
                  <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">Card Generator</p>
                  <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">Create &amp; download cards</p>
                </Link>
                <Link href="/nuzlocke-generator" className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group">
                  <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">Nuzlocke Generator</p>
                  <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">Challenge run tool</p>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
