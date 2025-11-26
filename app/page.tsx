"use client";

import { useState, useMemo } from "react";
import { Loader2, Zap, ExternalLink, Database, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

interface FilterState {
  teamSize: 3 | 6 | 9;
  type: string | null;
  legendaryStatus: "all" | "legendary" | "non-legendary";
  evolutionStage: "all" | "fully-evolved" | "not-fully-evolved";
  region: string | null;
}

const POKEMON_TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const REGIONS = [
  { name: "Kanto", generation: 1, range: [1, 151] },
  { name: "Johto", generation: 2, range: [152, 251] },
  { name: "Hoenn", generation: 3, range: [252, 386] },
  { name: "Sinnoh", generation: 4, range: [387, 493] },
  { name: "Unova", generation: 5, range: [494, 649] },
  { name: "Kalos", generation: 6, range: [650, 721] },
  { name: "Alola", generation: 7, range: [722, 809] },
  { name: "Galar", generation: 8, range: [810, 905] },
  { name: "Paldea", generation: 9, range: [906, 1025] },
];

const LEGENDARY_IDS = new Set([
  144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380,
  381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 487, 488, 489,
  490, 491, 492, 493, 494, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646,
  647, 648, 649, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727,
  728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742,
  743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757,
  758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772,
  773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787,
  788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802,
  803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817,
  818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832,
]);

export default function Home() {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [terminalStatus, setTerminalStatus] = useState("IDLE");
  const [filters, setFilters] = useState<FilterState>({
    teamSize: 6,
    type: null,
    legendaryStatus: "all",
    evolutionStage: "all",
    region: null,
  });
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [typeCache, setTypeCache] = useState<Record<string, Set<number>>>({});

  const getValidPokemonIds = async (): Promise<number[]> => {
    let validIds = new Set<number>();

    if (filters.region) {
      const region = REGIONS.find((r) => r.name === filters.region);
      if (region) {
        for (let i = region.range[0]; i <= region.range[1]; i++) {
          validIds.add(i);
        }
      }
    } else {
      for (let i = 1; i <= 1025; i++) {
        validIds.add(i);
      }
    }

    if (filters.type) {
      const typeIds = await getTypeIds(filters.type);
      validIds = new Set([...validIds].filter((id) => typeIds.has(id)));
    }

    if (filters.legendaryStatus === "legendary") {
      validIds = new Set([...validIds].filter((id) => LEGENDARY_IDS.has(id)));
    } else if (filters.legendaryStatus === "non-legendary") {
      validIds = new Set([...validIds].filter((id) => !LEGENDARY_IDS.has(id)));
    }

    return Array.from(validIds);
  };

  const getTypeIds = async (typeName: string): Promise<Set<number>> => {
    if (typeCache[typeName]) {
      return typeCache[typeName];
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${typeName}`
      );
      const data = await response.json();
      const ids = new Set(
        data.pokemon
          .map((p: { pokemon: { url: string } }) => {
            const id = parseInt(p.pokemon.url.split("/")[6]);
            return id <= 1025 ? id : null;
          })
          .filter((id: number | null) => id !== null)
      );

      setTypeCache((prev) => ({
        ...prev,
        [typeName]: ids,
      }));

      return ids;
    } catch (error) {
      console.error("Error fetching type data:", error);
      return new Set();
    }
  };

  const generateTeam = async () => {
    setLoading(true);
    setTerminalStatus("FETCHING...");
    setTeam([]);

    try {
      const validIds = await getValidPokemonIds();

      if (validIds.length === 0) {
        setTerminalStatus("NO MATCHES");
        return;
      }

      const uniqueIds = new Set<number>();
      const teamSize = filters.teamSize;
      const maxAttempts = Math.min(validIds.length, teamSize * 10);
      let attempts = 0;

      while (
        uniqueIds.size < Math.min(teamSize, validIds.length) &&
        attempts < maxAttempts
      ) {
        uniqueIds.add(validIds[Math.floor(Math.random() * validIds.length)]);
        attempts++;
      }

      const fetchPromises = Array.from(uniqueIds).map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      );

      const pokemonData = await Promise.all(fetchPromises);
      setTeam(pokemonData);
      setTerminalStatus("SUCCESS");
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setTerminalStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type: string): string => {
    const typeColors: Record<string, string> = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      grass: "#78C850",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC",
    };
    return typeColors[type] || "#68A090";
  };

  const resetFilters = () => {
    setFilters({
      teamSize: 6,
      type: null,
      legendaryStatus: "all",
      evolutionStage: "all",
      region: null,
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.type !== null ||
      filters.legendaryStatus !== "all" ||
      filters.evolutionStage !== "all" ||
      filters.region !== null ||
      filters.teamSize !== 6
    );
  }, [filters]);

  return (
    <main className="min-h-screen bg-cream p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-grotesk font-bold text-5xl md:text-7xl text-black mb-4 tracking-tight">
            RANDOM PROTOCOL
          </h1>
          <div className="inline-block bg-black px-6 py-3 slasher">
            <p className="font-mono text-sm text-cream">
              STATUS: <span className="text-marigold">{terminalStatus}</span>
            </p>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="mb-8">
          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="w-full md:w-auto bg-black text-cream font-grotesk font-semibold px-6 py-3 border-2 border-black slasher flex items-center justify-between gap-3 hover:bg-charcoal transition-colors duration-200"
          >
            <span>FILTERS</span>
            <ChevronDown
              size={20}
              className={`transform transition-transform duration-200 ${
                isPanelOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isPanelOpen && (
            <div className="mt-4 bg-white border-4 border-black slasher p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Team Size */}
                <div>
                  <label className="font-grotesk font-semibold text-sm text-charcoal block mb-2">
                    TEAM SIZE
                  </label>
                  <select
                    value={filters.teamSize}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        teamSize: parseInt(e.target.value) as 3 | 6 | 9,
                      })
                    }
                    className="w-full bg-cream border-2 border-black px-3 py-2 font-mono text-sm text-black"
                  >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="font-grotesk font-semibold text-sm text-charcoal block mb-2">
                    TYPE
                  </label>
                  <select
                    value={filters.type || ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        type: e.target.value || null,
                      })
                    }
                    className="w-full bg-cream border-2 border-black px-3 py-2 font-mono text-sm text-black"
                  >
                    <option value="">All Types</option>
                    {POKEMON_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Legendary Status */}
                <div>
                  <label className="font-grotesk font-semibold text-sm text-charcoal block mb-2">
                    LEGENDARY STATUS
                  </label>
                  <select
                    value={filters.legendaryStatus}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        legendaryStatus: e.target.value as FilterState["legendaryStatus"],
                      })
                    }
                    className="w-full bg-cream border-2 border-black px-3 py-2 font-mono text-sm text-black"
                  >
                    <option value="all">All</option>
                    <option value="legendary">Legendary</option>
                    <option value="non-legendary">Non-Legendary</option>
                  </select>
                </div>

                {/* Evolution Stage */}
                <div>
                  <label className="font-grotesk font-semibold text-sm text-charcoal block mb-2">
                    EVOLUTION STAGE
                  </label>
                  <select
                    value={filters.evolutionStage}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        evolutionStage: e.target.value as FilterState["evolutionStage"],
                      })
                    }
                    disabled
                    className="w-full bg-gray-200 border-2 border-black px-3 py-2 font-mono text-sm text-black cursor-not-allowed"
                  >
                    <option value="all">All Stages (Coming Soon)</option>
                    <option value="fully-evolved" disabled>Fully Evolved</option>
                    <option value="not-fully-evolved" disabled>Not Fully Evolved</option>
                  </select>
                </div>

                {/* Region */}
                <div>
                  <label className="font-grotesk font-semibold text-sm text-charcoal block mb-2">
                    REGION
                  </label>
                  <select
                    value={filters.region || ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        region: e.target.value || null,
                      })
                    }
                    className="w-full bg-cream border-2 border-black px-3 py-2 font-mono text-sm text-black"
                  >
                    <option value="">All Regions</option>
                    {REGIONS.map((region) => (
                      <option key={region.name} value={region.name}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reset Button */}
              {hasActiveFilters && (
                <div className="mt-4">
                  <button
                    onClick={resetFilters}
                    className="text-sm font-mono text-charcoal hover:text-black underline"
                  >
                    RESET FILTERS
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Active Filters Chips */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.teamSize !== 6 && (
              <div className="bg-black text-cream px-3 py-1 text-xs font-mono flex items-center gap-2 slasher border border-black">
                <span>SIZE: {filters.teamSize}</span>
                <button
                  onClick={() => setFilters({ ...filters, teamSize: 6 })}
                  className="hover:text-marigold"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {filters.type && (
              <div className="bg-black text-cream px-3 py-1 text-xs font-mono flex items-center gap-2 slasher border border-black">
                <span>TYPE: {filters.type.toUpperCase()}</span>
                <button
                  onClick={() => setFilters({ ...filters, type: null })}
                  className="hover:text-marigold"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {filters.legendaryStatus !== "all" && (
              <div className="bg-black text-cream px-3 py-1 text-xs font-mono flex items-center gap-2 slasher border border-black">
                <span>
                  {filters.legendaryStatus === "legendary"
                    ? "LEGENDARY"
                    : "NON-LEGENDARY"}
                </span>
                <button
                  onClick={() =>
                    setFilters({ ...filters, legendaryStatus: "all" })
                  }
                  className="hover:text-marigold"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {filters.region && (
              <div className="bg-black text-cream px-3 py-1 text-xs font-mono flex items-center gap-2 slasher border border-black">
                <span>REGION: {filters.region.toUpperCase()}</span>
                <button
                  onClick={() => setFilters({ ...filters, region: null })}
                  className="hover:text-marigold"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Generate Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={generateTeam}
            disabled={loading}
            className="bg-marigold hover:bg-marigold-hover text-black font-grotesk font-bold text-xl px-12 py-6 slasher transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-black"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <Loader2 className="animate-spin" size={24} />
                GENERATING...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Zap size={24} />
                GENERATE TEAM
              </span>
            )}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-indigo" size={64} />
          </div>
        )}

        {/* Pokémon Grid */}
        {!loading && team.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((pokemon) => (
              <div
                key={pokemon.id}
                className="bg-white border-4 border-black slasher p-6 hover:shadow-2xl transition-shadow duration-200"
              >
                {/* ID Badge */}
                <div className="mb-4">
                  <span className="font-mono text-xs bg-black text-cream px-3 py-1 inline-block">
                    #{String(pokemon.id).padStart(4, "0")}
                  </span>
                </div>

                {/* Pokémon Image */}
                <div className="relative w-full h-48 mb-4 bg-cream">
                  <Image
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                    fill
                    className="object-contain blend-multiply"
                    unoptimized
                  />
                </div>

                {/* Name */}
                <h2 className="font-grotesk font-bold text-2xl text-black mb-3 uppercase">
                  {pokemon.name}
                </h2>

                {/* Type Badges */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {pokemon.types.map((typeInfo) => (
                    <span
                      key={typeInfo.type.name}
                      className="font-mono text-xs px-3 py-1 text-white uppercase border border-black"
                      style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
                    >
                      {typeInfo.type.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/pokemon/${pokemon.name}`}
                    className="flex-1 bg-indigo hover:bg-opacity-90 text-cream font-grotesk font-semibold text-sm px-4 py-3 text-center border-2 border-black transition-all duration-200"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Database size={16} />
                      DATA
                    </span>
                  </Link>
                  <a
                    href={`https://www.amazon.com/s?k=${pokemon.name}+pokemon+plush&tag=YOUR_TAG_HERE`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brass hover:bg-opacity-90 text-black font-grotesk font-semibold text-sm px-4 py-3 text-center border-2 border-black transition-all duration-200"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      MERCH
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && team.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block border-4 border-charcoal p-8 slasher">
              <p className="font-mono text-charcoal text-lg">
                Press GENERATE TEAM to start
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
