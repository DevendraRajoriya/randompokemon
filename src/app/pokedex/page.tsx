import { Metadata } from "next";
import Link from "next/link";
import PokedexClient from "./PokedexClient";
import { Suspense } from "react";

// Number of Pokémon cards to fully SSR (sprites + types + stats in initial HTML)
const SSR_CARD_COUNT = 24;

const siteUrl = "https://www.randompokemon.co";

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
  alternates: {
    canonical: `${siteUrl}/pokedex`,
  },
  openGraph: {
    title: "Pokédex | Complete Pokemon Database",
    description:
      "Browse all 1025 Pokemon species with stats, types, and evolutions. The complete Pokemon database.",
    url: `${siteUrl}/pokedex`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pokédex - Complete Pokemon Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokédex | Complete Pokemon Database",
    description: "Browse all 1025 Pokemon species with stats, types, and evolutions.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const pokedexJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pokédex — Complete Pokemon Database",
  description:
    "Browse the complete Pokédex with all 1025 Pokemon species. Search and filter by type.",
  url: `${siteUrl}/pokedex`,
  isPartOf: {
    "@type": "WebSite",
    name: "Random Pokemon Generator",
    url: siteUrl,
  },
};

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonCard {
  id: number;
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
}

const POKEMON_SPECIES_COUNT = 1025;

async function getPokemonList(): Promise<{ list: PokemonListItem[]; count: number }> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_SPECIES_COUNT}&offset=0`,
      { next: { revalidate: 86400 } }
    );
    if (!response.ok) throw new Error("Failed to fetch Pokemon list");
    const data = await response.json();
    return { list: data.results as PokemonListItem[], count: POKEMON_SPECIES_COUNT };
  } catch {
    return { list: [], count: POKEMON_SPECIES_COUNT };
  }
}

/**
 * Fetch full detail data for the first SSR_CARD_COUNT Pokémon in parallel.
 * This data is embedded in the server-rendered HTML so Googlebot sees real
 * card content (name, sprite URL, types, stats) without executing JS.
 */
async function getInitialCards(list: PokemonListItem[]): Promise<PokemonCard[]> {
  const slice = list.slice(0, SSR_CARD_COUNT);
  const results = await Promise.allSettled(
    slice.map(async (p) => {
      const id = getPokemonId(p.url);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        next: { revalidate: 86400 },
      });
      if (!res.ok) throw new Error(`Failed to fetch #${id}`);
      const raw = await res.json();
      return {
        id: raw.id,
        name: raw.name,
        sprites: raw.sprites,
        types: raw.types,
        stats: raw.stats,
      } as PokemonCard;
    })
  );
  return results
    .filter((r): r is PromiseFulfilledResult<PokemonCard> => r.status === "fulfilled")
    .map((r) => r.value);
}

function capitalize(name: string) {
  return name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function getPokemonId(url: string): number {
  const parts = url.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
}

export default async function PokedexPage() {
  const { list, count } = await getPokemonList();
  // Fetch first 24 cards server-side so the initial grid is in the HTML
  const initialCards = await getInitialCards(list);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pokedexJsonLd) }}
      />

      {/* Interactive client component — search, filter, card grid */}
      {/* initialCards pre-populates the first page so SSR HTML has real content */}
      <Suspense fallback={null}>
        <PokedexClient
          initialPokemonList={list}
          totalCount={count}
          initialCards={initialCards}
        />
      </Suspense>

      {/* ── SERVER-RENDERED POKEMON INDEX ── */}
      {/* Fully visible to Googlebot and users. Provides the H1, intro text,  */}
      {/* and crawlable links to all 1025 individual Pokemon detail pages.     */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-8">
        <div className="border-t-4 border-black pt-10">
          {/* H1 heading — visible to Google */}
          <h1 className="font-grotesk font-bold text-3xl md:text-5xl text-black uppercase tracking-tight mb-4">
            Complete Pokédex — All {count} Pokémon
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-3xl mb-2 leading-relaxed">
            The complete National Pokédex covering all <strong>{count} Pokémon species</strong> from
            Generation 1 (Kanto) through Generation 9 (Paldea). Click any Pokémon to view its full
            stats, type matchups, evolution chain, abilities, and competitive tier.
          </p>
          <p className="font-mono text-sm text-charcoal max-w-3xl mb-8 leading-relaxed">
            Use the <strong>search and filter tools above</strong> to browse by type, generation, or
            name. Or explore the full index below — every Pokémon from{" "}
            <Link href="/pokemon/bulbasaur" className="underline font-bold hover:text-charcoal">
              Bulbasaur (#0001)
            </Link>{" "}
            to{" "}
            <Link href="/pokemon/pecharunt" className="underline font-bold hover:text-charcoal">
              Pecharunt (#1025)
            </Link>
            .
          </p>

          {/* Generation jump links */}
          <nav aria-label="Jump to generation" className="mb-8 flex flex-wrap gap-2">
            {[
              { label: "Gen 1 — Kanto", href: "/kanto-pokemon-generator" },
              { label: "Gen 2 — Johto", href: "/johto-pokemon-generator" },
              { label: "Gen 3 — Hoenn", href: "/hoenn-pokemon-generator" },
              { label: "Gen 4 — Sinnoh", href: "/sinnoh-pokemon-generator" },
              { label: "Gen 5 — Unova", href: "/unova-pokemon-generator" },
              { label: "Gen 6 — Kalos", href: "/kalos-pokemon-generator" },
              { label: "Gen 7 — Alola", href: "/alola-pokemon-generator" },
              { label: "Gen 8 — Galar", href: "/galar-pokemon-generator" },
              { label: "Gen 9 — Paldea", href: "/paldea-pokemon-generator" },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="font-mono text-xs font-bold border-2 border-black px-3 py-1.5 hover:bg-black hover:text-cream transition-colors"
              >
                {g.label}
              </Link>
            ))}
          </nav>

          {/* Full A–Z Pokemon index — server-rendered, crawlable */}
          {list.length > 0 && (
            <div>
              <h2 className="font-grotesk font-bold text-xl text-black uppercase mb-4 border-b-2 border-black pb-2">
                Full Pokédex Index ({count} Pokémon)
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
                {list.map((p) => {
                  const id = getPokemonId(p.url);
                  const display = capitalize(p.name);
                  return (
                    <li key={p.name}>
                      <Link
                        href={`/pokemon/${p.name}`}
                        className="flex items-center gap-1.5 font-mono text-xs text-charcoal hover:text-black hover:bg-cream px-2 py-1.5 transition-colors"
                      >
                        <span className="text-black/30 text-[10px] w-8 flex-shrink-0">
                          #{String(id).padStart(4, "0")}
                        </span>
                        {display}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Related tools */}
          <div className="mt-12 pt-8 border-t-2 border-black">
            <h2 className="font-grotesk font-bold text-lg text-black uppercase mb-4">
              Related Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { href: "/", label: "Random Generator", desc: "All 1025 Pokémon" },
                { href: "/shiny-pokemon-generator", label: "Shiny Generator", desc: "Rare color variants" },
                { href: "/pokemon-card-generator", label: "Card Generator", desc: "Create & download cards" },
                { href: "/nuzlocke-generator", label: "Nuzlocke Generator", desc: "Challenge run tool" },
              ].map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group"
                >
                  <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">
                    {t.label}
                  </p>
                  <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">
                    {t.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
