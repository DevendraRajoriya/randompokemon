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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {loadingMore
                ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                    <div
                      key={`skeleton-${i}`}
                      className="animate-pulse bg-white border-2 border-black slasher"
                    >
                      <div className="h-32 bg-gray-200" />
                      <div className="p-3">
                        <div className="h-4 bg-gray-200 rounded mb-2" />
                        <div className="h-3 bg-gray-200 rounded w-2/3" />
                      </div>
                    </div>
                  ))
                : displayedPokemon.map((pokemon) => {
                    const primaryType =
                      pokemon.types[0]?.type.name || "normal";
                    const typeColor = getTypeColor(primaryType);
                    const bst = (pokemon.stats || []).reduce(
                      (sum, s) => sum + s.base_stat,
                      0
                    );

                    return (
                      <div
                        key={pokemon.id}
                        className="group bg-white border-2 border-black slasher card-hover transition-all duration-200 overflow-hidden cursor-pointer"
                        onClick={() => setSharePokemon(pokemon)}
                      >
                        {/* Card Image */}
                        <div
                          className="relative h-32 sm:h-36 flex items-center justify-center overflow-hidden"
                          style={{
                            background: `linear-gradient(180deg, ${typeColor}20 0%, ${typeColor}08 100%)`,
                          }}
                        >
                          {/* Pokemon ID Badge */}
                          <div className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                            #{String(pokemon.id).padStart(4, "0")}
                          </div>

                          {/* Share/Download Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSharePokemon(pokemon);
                            }}
                            className="absolute top-2 right-2 w-7 h-7 bg-white/90 border border-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-marigold"
                            aria-label={`Download ${pokemon.name} card`}
                          >
                            <Download className="w-3.5 h-3.5 text-black" />
                          </button>

                          {/* Pokemon Image */}
                          <Image
                            src={getImageUrl(pokemon)}
                            alt={`${capitalize(pokemon.name)} official artwork`}
                            width={120}
                            height={120}
                            className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Card Info */}
                        <div className="p-2.5 sm:p-3 border-t-2 border-black">
                          <h3 className="font-grotesk font-bold text-xs sm:text-sm text-black uppercase truncate mb-1">
                            {capitalize(pokemon.name)}
                          </h3>

                          {/* Type Badges */}
                          <div className="flex gap-1 mb-1.5">
                            {pokemon.types.map((t) => (
                              <span
                                key={t.type.name}
                                className="text-[9px] sm:text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded uppercase"
                                style={{
                                  backgroundColor: getTypeColor(t.type.name),
                                }}
                              >
                                {t.type.name}
                              </span>
                            ))}
                          </div>

                          {/* BST */}
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-[10px] text-charcoal">
                              BST
                            </span>
                            <span className="font-mono text-xs font-bold text-black">
                              {bst}
                            </span>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
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
