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
  description: "Browse the complete Pokédex with all 1025 Pokemon species. Search and filter by type.",
  url: `${siteUrl}/pokedex`,
  isPartOf: { "@type": "WebSite", name: "Random Pokemon Generator", url: siteUrl },
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
            {[
              { label: "Gen 1 — Kanto",  href: "/kanto-pokemon-generator"  },
              { label: "Gen 2 — Johto",  href: "/johto-pokemon-generator"  },
              { label: "Gen 3 — Hoenn",  href: "/hoenn-pokemon-generator"  },
              { label: "Gen 4 — Sinnoh", href: "/sinnoh-pokemon-generator" },
              { label: "Gen 5 — Unova",  href: "/unova-pokemon-generator"  },
              { label: "Gen 6 — Kalos",  href: "/kalos-pokemon-generator"  },
              { label: "Gen 7 — Alola",  href: "/alola-pokemon-generator"  },
              { label: "Gen 8 — Galar",  href: "/galar-pokemon-generator"  },
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
                {[
                  { href: "/",                         label: "Random Generator",  desc: "All 1025 Pokémon"        },
                  { href: "/shiny-pokemon-generator",  label: "Shiny Generator",   desc: "Rare color variants"     },
                  { href: "/pokemon-card-generator",   label: "Card Generator",    desc: "Create & download cards" },
                  { href: "/nuzlocke-generator",       label: "Nuzlocke Generator",desc: "Challenge run tool"      },
                ].map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="border-2 border-black p-3 hover:bg-black hover:text-cream transition-colors group"
                  >
                    <p className="font-mono font-bold text-xs text-black group-hover:text-cream uppercase mb-0.5">{t.label}</p>
                    <p className="font-mono text-[10px] text-charcoal group-hover:text-cream/70">{t.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
