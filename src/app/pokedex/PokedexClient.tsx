'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Share2, Loader2, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import ShareModal from '@/components/ShareModal';

// ─── TYPES ──────────────────────────────────────────────────────
interface PokemonListItem { name: string; url: string; id: number; }
interface Pokemon {
  id: number; name: string;
  sprites: { other: { 'official-artwork': { front_default: string } } };
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  // hydrated = false means we only have name+id so far (skeleton)
  hydrated?: boolean;
}
interface PokedexClientProps {
  initialPokemonList: { name: string; url: string }[];
  totalCount: number;
  /** Full card data for the first page, fetched server-side so SSR HTML has real content */
  initialCards?: Pokemon[];
}

// ─── CONSTANTS ───────────────────────────────────────────────────
const TYPE_COLORS: Record<string, string> = {
  normal:'#A8A878', fire:'#F08030', water:'#6890F0', electric:'#F8D030',
  grass:'#78C850', ice:'#98D8D8', fighting:'#C03028', poison:'#A040A0',
  ground:'#E0C068', flying:'#A890F0', psychic:'#F85888', bug:'#A8B820',
  rock:'#B8A038', ghost:'#705898', dragon:'#7038F8', dark:'#705848',
  steel:'#B8B8D0', fairy:'#EE99AC',
};
const ALL_TYPES = ['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];

const GEN_RANGES = [
  { label: 'I',   min: 1,   max: 151  },
  { label: 'II',  min: 152, max: 251  },
  { label: 'III', min: 252, max: 386  },
  { label: 'IV',  min: 387, max: 493  },
  { label: 'V',   min: 494, max: 649  },
  { label: 'VI',  min: 650, max: 721  },
  { label: 'VII', min: 722, max: 809  },
  { label: 'VIII',min: 810, max: 905  },
  { label: 'IX',  min: 906, max: 1025 },
];

const ITEMS_PER_PAGE = 24;

// Cache for Pokemon detail data and type lookups
const detailCache = new Map<number, Pokemon>();
const typeIdCache = new Map<string, Set<number>>();

// ─── HELPERS ─────────────────────────────────────────────────────
function getIdFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1]) || 0;
}
function formatName(name: string) {
  return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
function formatId(id: number) { return `#${String(id).padStart(4, '0')}`; }

async function fetchDetail(id: number, retries = 3): Promise<Pokemon> {
  if (detailCache.has(id)) return detailCache.get(id)!;
  let lastError: unknown;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}?_cb=${Date.now()}`, {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`${res.status}`);
      const raw = await res.json();
      const p: Pokemon = { id: raw.id, name: raw.name, sprites: raw.sprites, types: raw.types, stats: raw.stats };
      detailCache.set(id, p);
      return p;
    } catch (err) {
      lastError = err;
      if (attempt < retries - 1) await new Promise(r => setTimeout(r, 300 * Math.pow(2, attempt)));
    }
  }
  throw lastError;
}

async function fetchTypeIds(type: string): Promise<Set<number>> {
  if (typeIdCache.has(type)) return typeIdCache.get(type)!;
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      const ids = new Set<number>(
        data.pokemon
          .map((e: { pokemon: { url: string } }) => getIdFromUrl(e.pokemon.url))
          .filter((id: number) => id >= 1 && id <= 1025)
      );
      typeIdCache.set(type, ids);
      return ids;
    } catch (err) {
      lastError = err;
      if (attempt < 2) await new Promise(r => setTimeout(r, 300 * Math.pow(2, attempt)));
    }
  }
  throw lastError;
}

// Portal for ShareModal (escapes clip-path stacking context)
function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────

/**
 * Build a lightweight skeleton Pokemon object from list data alone.
 * No API call required — only name + id are populated.
 * This gives Googlebot real card links/names in the SSR HTML.
 */
function makeSkeleton(name: string, id: number): Pokemon {
  return {
    id,
    name,
    hydrated: false,
    sprites: { other: { 'official-artwork': { front_default: '' } } },
    types: [],
    stats: [],
  };
}

export default function PokedexClient({ initialPokemonList, totalCount, initialCards = [] }: PokedexClientProps) {
  // Enrich list with IDs once
  const allPokemon = useMemo<PokemonListItem[]>(() =>
    initialPokemonList.map(p => ({ ...p, id: getIdFromUrl(p.url) })),
    [initialPokemonList]
  );

  // Pre-populate cache with server-fetched data so first page renders instantly
  // and doesn't need a client-side fetch round-trip
  const initialCardsRef = useRef(initialCards);
  useMemo(() => {
    for (const card of initialCardsRef.current) {
      if (!detailCache.has(card.id)) detailCache.set(card.id, card);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Start with server-fetched cards already visible (no loading spinner on first paint)
  const [visiblePokemon, setVisiblePokemon] = useState<Pokemon[]>(initialCards);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  // If we received server cards, we don't need to show a loading state initially
  const [loading, setLoading] = useState(initialCards.length === 0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sharePokemon, setSharePokemon] = useState<Pokemon | null>(null);

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedGen, setSelectedGen] = useState<number | null>(null); // index into GEN_RANGES
  const [sortBy, setSortBy] = useState<'id' | 'name'>('id');
  const [typeIds, setTypeIds] = useState<Set<number> | null>(null);
  const [typeLoading, setTypeLoading] = useState(false);

  // Mobile filter drawer
  const [filterOpen, setFilterOpen] = useState(false);

  // Read ?type= from URL on mount and pre-apply it
  const searchParams = useSearchParams();
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam && ALL_TYPES.includes(typeParam)) {
      setSelectedType(typeParam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Active filter count
  const activeFilters = [selectedType, selectedGen !== null ? 'gen' : null, searchQuery ? 'search' : null].filter(Boolean).length;

  // ─── DERIVED FILTERED LIST ────────────────────────────────────
  const filteredList = useMemo(() => {
    let list = allPokemon;

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(p => p.name.includes(q) || String(p.id).includes(q));
    }

    // Generation filter (by ID range, no API needed)
    if (selectedGen !== null) {
      const { min, max } = GEN_RANGES[selectedGen];
      list = list.filter(p => p.id >= min && p.id <= max);
    }

    // Type filter (uses fetched typeIds set)
    if (selectedType && typeIds) {
      list = list.filter(p => typeIds.has(p.id));
    }

    // Sort
    if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    // 'id' is already sorted by default

    return list;
  }, [allPokemon, searchQuery, selectedGen, selectedType, typeIds, sortBy]);

  // ─── LOAD PAGE OF DETAIL DATA ─────────────────────────────────
  const loadPage = useCallback(async (list: PokemonListItem[], count: number) => {
    const ids = list.slice(0, count).map(p => p.id);
    const results = await Promise.all(ids.map(id => fetchDetail(id)));
    return results;
  }, []);

  // ─── INITIAL / FILTER CHANGE LOAD ────────────────────────────
  useEffect(() => {
    if (selectedType && !typeIds) return; // wait for type data
    let cancelled = false;

    // If no filters are active and we still have the server-fetched initial page,
    // skip the fetch — the cards are already rendered from SSR.
    const noFilters = !searchQuery.trim() && selectedGen === null && !selectedType;
    if (noFilters && visiblePokemon.length >= ITEMS_PER_PAGE && displayCount === ITEMS_PER_PAGE) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setDisplayCount(ITEMS_PER_PAGE);
    loadPage(filteredList, ITEMS_PER_PAGE)
      .then(results => { if (!cancelled) { setVisiblePokemon(results); setLoading(false); } })
      .catch(() => { if (!cancelled) { setError('Failed to load POKEMON. Please try again.'); setLoading(false); } });
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList, loadPage, selectedType, typeIds]);

  // ─── TYPE FILTER FETCH ────────────────────────────────────────
  useEffect(() => {
    if (!selectedType) { setTypeIds(null); return; }
    setTypeLoading(true);
    fetchTypeIds(selectedType)
      .then(ids => { setTypeIds(ids); setTypeLoading(false); })
      .catch(() => setTypeLoading(false));
  }, [selectedType]);

  // ─── LOAD MORE ────────────────────────────────────────────────
  const loadMore = async () => {
    if (loadingMore || displayCount >= filteredList.length) return;
    setLoadingMore(true);
    const nextCount = displayCount + ITEMS_PER_PAGE;
    try {
      const results = await loadPage(filteredList, nextCount);
      setVisiblePokemon(results);
      setDisplayCount(nextCount);
    } catch { setError('Failed to load more.'); }
    setLoadingMore(false);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedType(null);
    setSelectedGen(null);
    setSortBy('id');
    setTypeIds(null);
  };

  const toggleType = (t: string) => setSelectedType(prev => prev === t ? null : t);
  const toggleGen = (i: number) => setSelectedGen(prev => prev === i ? null : i);

  // ─── RENDER ───────────────────────────────────────────────────
  return (
    <div>
      <div className="py-4 md:py-6">

        {/* ── SEARCH + FILTER BAR ── */}
        <div className="mb-6">
          <div className="flex gap-2 items-stretch">
            {/* Search */}
            <div className="flex-1 flex border-2 border-black bg-white overflow-hidden">
              <div className="flex items-center px-3 bg-black flex-shrink-0">
                <Search size={16} className="text-white" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by name or #..."
                className="flex-1 px-3 py-3 font-mono text-sm text-black bg-white outline-none placeholder:text-charcoal/40 min-w-0"
                aria-label="Search POKEMON"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="px-3 text-charcoal hover:text-black">
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort (desktop only) */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'id' | 'name')}
              className="hidden sm:block border-2 border-black bg-white font-mono text-xs text-black px-3 py-2 outline-none cursor-pointer"
              aria-label="Sort by"
            >
              <option value="id">Sort: Number</option>
              <option value="name">Sort: Name</option>
            </select>

            {/* Filter toggle */}
            <button
              onClick={() => setFilterOpen(o => !o)}
              className={`flex items-center gap-1.5 border-2 border-black font-mono text-xs font-bold px-3 py-2 transition-colors relative ${filterOpen ? 'bg-black text-white' : 'bg-white text-black hover:bg-cream'}`}
              aria-label="Toggle filters"
            >
              <SlidersHorizontal size={14} />
              <span className="hidden sm:inline">FILTER</span>
              {activeFilters > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {activeFilters}
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel — Brutalist theme */}
          {filterOpen && (
            <div className="mt-3 bg-white border-4 border-black p-5 space-y-5">

              {/* Sort (mobile only) */}
              <div className="sm:hidden">
                <div className="inline-block bg-black px-3 py-1 mb-3">
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">SORT</span>
                </div>
                <div className="flex gap-2">
                  {(['id', 'name'] as const).map(s => (
                    <button key={s} onClick={() => setSortBy(s)}
                      className={`font-mono text-xs font-bold px-4 py-2 border-2 border-black slasher transition-colors ${sortBy === s ? 'bg-black text-white' : 'bg-cream hover:bg-black hover:text-white'}`}>
                      {s === 'id' ? '#NUMBER' : 'NAME A–Z'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generation */}
              <div>
                <div className="inline-block bg-black px-3 py-1 mb-3">
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">GENERATION</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {GEN_RANGES.map((g, i) => (
                    <button key={i} onClick={() => toggleGen(i)}
                      className={`font-mono text-xs font-bold px-3 py-1.5 border-2 border-black slasher transition-colors ${selectedGen === i ? 'bg-black text-white' : 'bg-cream text-black hover:bg-black hover:text-white'}`}>
                      GEN {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <div className="inline-block bg-black px-3 py-1 mb-3">
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">TYPE</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ALL_TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => toggleType(t)}
                      className={`font-mono text-xs font-bold px-3 py-1.5 border-2 uppercase transition-all slasher ${
                        selectedType === t ? 'border-black ring-2 ring-black ring-offset-1 scale-105' : 'border-black/20 hover:border-black'
                      }`}
                      style={{
                        backgroundColor: TYPE_COLORS[t],
                        color: ['electric','normal','ground','fairy','ice','steel'].includes(t) ? '#000' : '#fff',
                        opacity: selectedType && selectedType !== t ? 0.4 : 1,
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {activeFilters > 0 && (
                <div className="border-t-2 border-black/10 pt-4">
                  <button onClick={clearAllFilters}
                    className="font-mono text-xs font-bold bg-white border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors slasher">
                    ✕ CLEAR ALL FILTERS ({activeFilters})
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Active filter pills summary */}
          {activeFilters > 0 && !filterOpen && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {selectedGen !== null && (
                <span className="inline-flex items-center gap-1 bg-black text-white font-mono text-[10px] font-bold px-2 py-1">
                  GEN {GEN_RANGES[selectedGen].label}
                  <button onClick={() => setSelectedGen(null)} aria-label="Remove gen filter"><X size={10} /></button>
                </span>
              )}
              {selectedType && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-1 border border-black"
                  style={{ backgroundColor: TYPE_COLORS[selectedType], color: ['electric','normal','ground','fairy','ice','steel'].includes(selectedType) ? '#000' : '#fff' }}>
                  {selectedType.toUpperCase()}
                  <button onClick={() => { setSelectedType(null); setTypeIds(null); }} aria-label="Remove type filter"><X size={10} /></button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono text-xs text-charcoal">
            {typeLoading ? 'Loading type data…' : `${filteredList.length.toLocaleString()} POKEMON`}
            {activeFilters > 0 && <span className="text-black font-bold"> (filtered)</span>}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="border-2 border-black bg-white p-6 text-center mb-6">
            <p className="font-mono text-sm text-black mb-3">{error}</p>
            <button onClick={() => window.location.reload()} className="bg-black text-white font-mono text-xs font-bold px-6 py-2 border-2 border-black hover:bg-charcoal">
              RETRY
            </button>
          </div>
        )}

        {/* Loading */}
        {(loading || typeLoading) && !error && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="animate-spin text-black" size={36} />
            <p className="font-mono text-xs text-charcoal">{typeLoading ? 'Fetching type data…' : 'Loading POKEMON…'}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !typeLoading && !error && filteredList.length === 0 && (
          <div className="text-center py-20 border-4 border-black bg-white">
            <p className="font-grotesk font-bold text-2xl text-black mb-2">NO POKEMON FOUND</p>
            <p className="font-mono text-xs text-charcoal mb-4">Try adjusting your filters</p>
            <button onClick={clearAllFilters} className="bg-black text-white font-mono text-xs font-bold px-6 py-2 border-2 border-black hover:bg-charcoal">
              CLEAR FILTERS
            </button>
          </div>
        )}

        {/* ── GRID ── */}
        {!loading && !typeLoading && !error && filteredList.length > 0 && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
              {visiblePokemon.map(pokemon => {
                const primaryType = pokemon.types[0]?.type.name || 'normal';
                const typeColor = TYPE_COLORS[primaryType] || '#68A090';
                const getStat = (name: string) => pokemon.stats?.find(s => s.stat.name === name)?.base_stat || 0;
                const hp = getStat('hp'); const atk = getStat('attack');
                const def = getStat('defense'); const spd = getStat('speed');
                const bst = pokemon.stats?.reduce((sum, s) => sum + s.base_stat, 0) || 0;

                return (
                  <Link
                    key={pokemon.id}
                    href={`/pokemon/${pokemon.name}`}
                    className="group relative bg-white border-2 md:border-4 border-black slasher overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 block"
                  >
                    {/* Type-colored accent bar */}
                    <div className="h-1.5 sm:h-2" style={{
                      background: pokemon.types.length > 1
                        ? `linear-gradient(90deg, ${typeColor} 50%, ${TYPE_COLORS[pokemon.types[1].type.name] || '#888'} 50%)`
                        : typeColor
                    }} />

                    <div className="p-2.5 sm:p-4 md:p-5">
                      {/* Top Row: ID + Share + BST */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="font-mono text-[10px] sm:text-xs text-charcoal/60 font-semibold">{formatId(pokemon.id)}</span>
                        <div className="flex items-center gap-1.5">
                          {bst > 0 && (
                            <span className="font-mono text-[9px] sm:text-[10px] bg-black/5 text-charcoal/70 px-1.5 py-0.5 font-bold">BST {bst}</span>
                          )}
                          <button
                            onClick={e => { e.preventDefault(); e.stopPropagation(); setSharePokemon(pokemon); }}
                            className="p-1 text-black/30 hover:text-marigold transition-colors cursor-pointer"
                            aria-label="Share"
                          >
                            <Share2 size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Pokemon Image */}
                      <div className="relative w-full mb-2 sm:mb-3" style={{ paddingBottom: '75%' }}>
                        <div className="absolute inset-0 opacity-[0.07]" style={{ background: `radial-gradient(circle, ${typeColor} 0%, transparent 70%)` }} />
                        {pokemon.sprites.other['official-artwork'].front_default ? (
                          <Image
                            src={pokemon.sprites.other['official-artwork'].front_default}
                            alt={`${formatName(pokemon.name)} - ${pokemon.types.map(t => t.type.name).join('/')} type Pokemon`}
                            fill
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                            className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 p-1"
                            priority={pokemon.id <= 12}
                            loading={pokemon.id <= 12 ? undefined : 'lazy'}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-black/20 font-mono text-xs">No Image</div>
                        )}
                      </div>

                      {/* Pokemon Name */}
                      <h2 className="font-grotesk font-bold text-sm sm:text-base md:text-lg text-black mb-1.5 sm:mb-2 uppercase truncate group-hover:text-indigo transition-colors">
                        {formatName(pokemon.name)}
                      </h2>

                      {/* Type Badges */}
                      <div className="flex gap-1 sm:gap-1.5 mb-2 sm:mb-3 flex-wrap">
                        {pokemon.types.map(({ type }) => (
                          <span
                            key={type.name}
                            className="font-mono text-[9px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 md:px-2.5 py-0.5 text-white uppercase font-bold border border-black/20 rounded-sm"
                            style={{ backgroundColor: TYPE_COLORS[type.name] || '#888' }}
                          >
                            {type.name}
                          </span>
                        ))}
                      </div>

                      {/* Mini Stat Bars */}
                      {pokemon.stats && pokemon.stats.length > 0 && (
                        <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                          {[
                            { label: 'HP', value: hp },
                            { label: 'ATK', value: atk },
                            { label: 'DEF', value: def },
                            { label: 'SPD', value: spd },
                          ].map(stat => (
                            <div key={stat.label} className="flex items-center gap-1 sm:gap-1.5">
                              <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/50 w-5 sm:w-6 text-right font-bold flex-shrink-0">{stat.label}</span>
                              <div className="flex-1 h-1 sm:h-1.5 bg-black/5 overflow-hidden">
                                <div
                                  className="h-full transition-all duration-500"
                                  style={{
                                    width: `${Math.min((stat.value / 255) * 100, 100)}%`,
                                    backgroundColor: stat.value >= 100 ? '#f59e0b' : stat.value >= 70 ? '#22c55e' : typeColor,
                                  }}
                                />
                              </div>
                              <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/40 w-4 sm:w-5 font-bold flex-shrink-0 tabular-nums">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* View Details */}
                      <div className="w-full text-center font-mono font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 border border-black/10 bg-black/[0.02] group-hover:bg-indigo group-hover:text-white group-hover:border-indigo transition-all duration-200">
                        VIEW DETAILS →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Load more */}
            {displayCount < filteredList.length && (
              <div className="mt-8 flex flex-col items-center gap-2">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="bg-black text-white font-mono text-xs sm:text-sm font-bold px-8 py-3 sm:py-4 border-2 border-black hover:bg-charcoal transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {loadingMore ? <><Loader2 className="animate-spin" size={16} /> LOADING…</> : <><ChevronDown size={16} /> LOAD MORE ({filteredList.length - displayCount} remaining)</>}
                </button>
                <p className="font-mono text-[10px] text-charcoal">
                  Showing {Math.min(displayCount, filteredList.length)} of {filteredList.length}
                </p>
              </div>
            )}

            {/* End of results */}
            {displayCount >= filteredList.length && filteredList.length > 0 && (
              <div className="mt-6 text-center">
                <p className="font-mono text-xs text-charcoal">All {filteredList.length} POKEMON displayed</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Share Modal (portal) */}
      {sharePokemon && (
        <ModalPortal>
          <ShareModal pokemon={sharePokemon} onClose={() => setSharePokemon(null)} />
        </ModalPortal>
      )}
    </div>
  );
}
