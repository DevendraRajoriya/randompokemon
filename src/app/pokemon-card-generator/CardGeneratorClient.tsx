"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Download, Share2, Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getTypeColor } from "@/utils/typeColors";

const ShareModal = dynamic(() => import("@/components/ShareModal"));

interface PokemonType {
  type: { name: string };
}

interface PokemonStat {
  base_stat: number;
  stat: { name: string };
}

interface PokemonAbility {
  ability: { name: string };
  is_hidden?: boolean;
}

interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  sprites: {
    front_default?: string;
    other?: {
      "official-artwork"?: { front_default?: string };
      home?: { front_default?: string };
    };
  };
  types: PokemonType[];
  stats?: PokemonStat[];
  abilities?: PokemonAbility[];
}

interface PokemonListItem {
  name: string;
  id: number;
}

// Cache for fetched Pokemon data
const pokemonDetailCache = new Map<number, Pokemon>();

function capitalize(str: string): string {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

async function fetchPokemonDetail(id: number): Promise<Pokemon> {
  const cached = pokemonDetailCache.get(id);
  if (cached) return cached;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error(`API returned ${res.status}`);
  const raw = await res.json();

  const pokemon: Pokemon = {
    id: raw.id,
    name: raw.name,
    height: raw.height,
    weight: raw.weight,
    sprites: {
      front_default: raw.sprites?.front_default,
      other: {
        "official-artwork": {
          front_default:
            raw.sprites?.other?.["official-artwork"]?.front_default,
        },
        home: {
          front_default: raw.sprites?.other?.home?.front_default,
        },
      },
    },
    types: raw.types,
    stats: raw.stats,
    abilities: raw.abilities,
  };

  pokemonDetailCache.set(id, pokemon);
  return pokemon;
}

const ITEMS_PER_PAGE = 24;

export default function CardGeneratorClient() {
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<PokemonListItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [displayedPokemon, setDisplayedPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredIds, setFilteredIds] = useState<number[]>([]);
  const [sharePokemon, setSharePokemon] = useState<Pokemon | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Fetch Pokemon list on mount
  useEffect(() => {
    async function loadPokemonList() {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1025"
        );
        const data = await res.json();
        const list = data.results.map(
          (p: { name: string; url: string }, idx: number) => ({
            name: p.name,
            id: idx + 1,
          })
        );
        setAllPokemon(list);

        // Set all IDs as default
        const ids = list.map((p: PokemonListItem) => p.id);
        setFilteredIds(ids);

        // Load first page
        await loadPage(ids, 1);
      } catch (err) {
        console.error("Failed to load Pokemon list:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPokemonList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPage = async (ids: number[], page: number) => {
    setLoadingMore(true);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageIds = ids.slice(start, end);

    try {
      const results = await Promise.all(
        pageIds.map((id) => fetchPokemonDetail(id))
      );
      setDisplayedPokemon(results);
    } catch (err) {
      console.error("Error loading page:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    if (value.trim().length > 0) {
      const filtered = allPokemon
        .filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase().trim())
        )
        .slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      const query = searchQuery.trim().toLowerCase();
      setShowSuggestions(false);

      if (!query) {
        // Reset to all
        const ids = allPokemon.map((p) => p.id);
        setFilteredIds(ids);
        setCurrentPage(1);
        await loadPage(ids, 1);
        return;
      }

      // Filter by search
      const matchingIds = allPokemon
        .filter((p) => p.name.toLowerCase().includes(query))
        .map((p) => p.id);

      setFilteredIds(matchingIds);
      setCurrentPage(1);
      await loadPage(matchingIds, 1);

      // Scroll to grid
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchQuery, allPokemon]
  );

  const handleSuggestionClick = async (item: PokemonListItem) => {
    setSearchQuery(item.name);
    setShowSuggestions(false);

    // Show just this Pokemon
    setFilteredIds([item.id]);
    setCurrentPage(1);
    await loadPage([item.id], 1);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearSearch = async () => {
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
    const ids = allPokemon.map((p) => p.id);
    setFilteredIds(ids);
    setCurrentPage(1);
    await loadPage(ids, 1);
  };

  const goToPage = async (page: number) => {
    setCurrentPage(page);
    await loadPage(filteredIds, page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalPages = Math.ceil(filteredIds.length / ITEMS_PER_PAGE);

  const getImageUrl = (pokemon: Pokemon) =>
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.other?.home?.front_default ||
    pokemon.sprites?.front_default ||
    "";

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8" ref={searchRef}>
        <form onSubmit={handleSearch} className="relative">
          <div className="flex border-4 border-black bg-white slasher overflow-hidden">
            <div className="flex items-center px-4 border-r-2 border-black bg-black">
              <Search className="w-5 h-5 text-white" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder="Search Pokemon by name... (e.g. Pikachu, Charizard)"
              className="flex-1 px-4 py-4 font-mono text-sm md:text-base text-black bg-white outline-none placeholder:text-charcoal/50"
              aria-label="Search Pokemon"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="px-3 text-charcoal hover:text-black transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-4 bg-black text-white font-mono font-bold text-sm uppercase hover:bg-charcoal transition-colors"
            >
              SEARCH
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border-4 border-black z-50 max-h-80 overflow-y-auto slasher">
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSuggestionClick(item)}
                  className="w-full text-left px-4 py-3 font-mono text-sm hover:bg-marigold/20 flex items-center gap-3 border-b border-black/10 transition-colors"
                >
                  <span className="text-charcoal font-bold">
                    #{String(item.id).padStart(4, "0")}
                  </span>
                  <span className="text-black capitalize">{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </form>
        <p className="font-mono text-xs text-charcoal mt-2 text-center">
          {filteredIds.length.toLocaleString()} Pokemon available •{" "}
          {searchQuery ? `Showing results for "${searchQuery}"` : "Showing all Pokemon"}
        </p>
      </div>

      {/* Pokemon Cards Grid */}
      <div ref={gridRef} className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-black" />
            <span className="ml-3 font-mono text-charcoal">
              Loading Pokemon database...
            </span>
          </div>
        ) : filteredIds.length === 0 ? (
          <div className="text-center py-20 border-4 border-black bg-white slasher">
            <p className="font-grotesk font-bold text-2xl text-black mb-2">
              NO POKEMON FOUND
            </p>
            <p className="font-mono text-charcoal">
              Try a different search term
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {loadingMore
                ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                    <div key={`skeleton-${i}`} className="animate-pulse bg-white border-2 border-black slasher overflow-hidden">
                      <div className="h-2 bg-gray-200" />
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full" />
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="h-5 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="space-y-1.5 pt-1">
                          {[1,2,3,4].map(n => <div key={n} className="h-2 bg-gray-200 rounded" />)}
                        </div>
                      </div>
                    </div>
                  ))
                : displayedPokemon.map((pokemon) => {
                    const primaryType = pokemon.types[0]?.type.name || "normal";
                    const secondaryType = pokemon.types[1]?.type.name;
                    const typeColor = getTypeColor(primaryType);
                    const secondaryColor = secondaryType ? getTypeColor(secondaryType) : typeColor;
                    const getStat = (name: string) => pokemon.stats?.find(s => s.stat.name === name)?.base_stat || 0;
                    const hp  = getStat("hp");
                    const atk = getStat("attack");
                    const def = getStat("defense");
                    const spd = getStat("speed");
                    const bst = (pokemon.stats || []).reduce((sum, s) => sum + s.base_stat, 0);

                    return (
                      <div
                        key={pokemon.id}
                        className="group relative bg-white border-2 border-black slasher overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer"
                        onClick={() => setSharePokemon(pokemon)}
                      >
                        {/* Type-coloured accent bar */}
                        <div className="h-1.5 sm:h-2" style={{
                          background: secondaryType
                            ? `linear-gradient(90deg, ${typeColor} 50%, ${secondaryColor} 50%)`
                            : typeColor
                        }} />

                        <div className="p-2.5 sm:p-4">
                          {/* Top row: ID + BST + Download */}
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <span className="font-mono text-[10px] sm:text-xs text-charcoal/60 font-semibold">
                              #{String(pokemon.id).padStart(4, "0")}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {bst > 0 && (
                                <span className="font-mono text-[9px] sm:text-[10px] bg-black/5 text-charcoal/70 px-1.5 py-0.5 font-bold">BST {bst}</span>
                              )}
                              <button
                                onClick={(e) => { e.stopPropagation(); setSharePokemon(pokemon); }}
                                className="p-1 text-black/30 hover:text-black transition-colors"
                                aria-label={`Download ${pokemon.name} card`}
                              >
                                <Download size={13} />
                              </button>
                            </div>
                          </div>

                          {/* Pokemon image */}
                          <div className="relative w-full mb-2 sm:mb-3" style={{ paddingBottom: "75%" }}>
                            <div className="absolute inset-0 opacity-[0.07]" style={{ background: `radial-gradient(circle, ${typeColor} 0%, transparent 70%)` }} />
                            {getImageUrl(pokemon) ? (
                              <Image
                                src={getImageUrl(pokemon)}
                                alt={`${capitalize(pokemon.name)} - ${pokemon.types.map(t => t.type.name).join("/")} type Pokemon`}
                                fill
                                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 p-1"
                                loading="lazy"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-black/20 font-mono text-xs">No Image</div>
                            )}
                          </div>

                          {/* Name */}
                          <h3 className="font-grotesk font-bold text-sm sm:text-base text-black mb-1.5 uppercase truncate group-hover:opacity-80 transition-colors">
                            {capitalize(pokemon.name)}
                          </h3>

                          {/* Type badges */}
                          <div className="flex gap-1 sm:gap-1.5 mb-2 sm:mb-3 flex-wrap">
                            {pokemon.types.map(({ type }) => (
                              <span
                                key={type.name}
                                className="font-mono text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 text-white uppercase font-bold border border-black/20 rounded-sm"
                                style={{ backgroundColor: getTypeColor(type.name) }}
                              >
                                {type.name}
                              </span>
                            ))}
                          </div>

                          {/* Mini stat bars */}
                          {pokemon.stats && pokemon.stats.length > 0 && (
                            <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                              {[
                                { label: "HP",  value: hp },
                                { label: "ATK", value: atk },
                                { label: "DEF", value: def },
                                { label: "SPD", value: spd },
                              ].map(stat => (
                                <div key={stat.label} className="flex items-center gap-1 sm:gap-1.5">
                                  <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/50 w-5 sm:w-6 text-right font-bold flex-shrink-0">{stat.label}</span>
                                  <div className="flex-1 h-1 sm:h-1.5 bg-black/5 overflow-hidden">
                                    <div
                                      className="h-full transition-all duration-500"
                                      style={{
                                        width: `${Math.min((stat.value / 255) * 100, 100)}%`,
                                        backgroundColor: stat.value >= 100 ? "#000" : stat.value >= 70 ? "#333" : typeColor,
                                      }}
                                    />
                                  </div>
                                  <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/40 w-5 font-bold flex-shrink-0 tabular-nums">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* CTA */}
                          <div className="w-full text-center font-mono font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 border border-black/10 bg-black/[0.02] group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-200 flex items-center justify-center gap-1">
                            <Download size={10} /> GENERATE CARD
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 mb-4">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-marigold transition-colors disabled:opacity-30 disabled:cursor-not-allowed slasher"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page numbers */}
                {(() => {
                  const pages: number[] = [];
                  const start = Math.max(1, currentPage - 2);
                  const end = Math.min(totalPages, currentPage + 2);

                  if (start > 1) pages.push(1);
                  if (start > 2) pages.push(-1); // Ellipsis

                  for (let i = start; i <= end; i++) pages.push(i);

                  if (end < totalPages - 1) pages.push(-2); // Ellipsis
                  if (end < totalPages) pages.push(totalPages);

                  return pages.map((page, idx) =>
                    page < 0 ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="font-mono text-charcoal px-1"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-10 h-10 border-2 border-black font-mono text-sm font-bold transition-colors slasher ${
                          page === currentPage
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-marigold"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  );
                })()}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-marigold transition-colors disabled:opacity-30 disabled:cursor-not-allowed slasher"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <p className="text-center font-mono text-xs text-charcoal mb-8">
              Page {currentPage} of {totalPages} •{" "}
              {filteredIds.length.toLocaleString()} Pokemon
            </p>
          </>
        )}
      </div>

      {/* Share Modal */}
      {sharePokemon && (
        <ShareModal
          pokemon={sharePokemon}
          onClose={() => setSharePokemon(null)}
        />
      )}
    </>
  );
}
