"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Zap, Database, ChevronDown, X, Search, Share2, BookOpen, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TeamGridSkeleton } from "@/components/SkeletonLoader";
import { matchesEvolutionStage, matchesFullyEvolved, matchesGender } from "@/data/evolutionData";

// Dynamic imports for performance optimization - load only when needed
const SeoContent = dynamic(() => import("@/components/SeoContent"), {
  loading: () => <div className="min-h-[200px] animate-pulse bg-cream border-2 border-black" />,
});
const ShareModal = dynamic(() => import("@/components/ShareModal"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
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
  stats?: PokemonStat[];
  height?: number;
  weight?: number;
}

interface FilterState {
  teamSize: number;
  types: string[];
  legendaryStatus: string[];
  evolutionStage: string[];
  fullyEvolved: string[];
  displayFormat: "both" | "name-only" | "sprite-only";
  genders: string[];
  natures: string[];
  forms: string[];
  regions: string[];
}

const POKEMON_TYPES = [
  "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison",
  "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark",
  "steel", "fairy",
];

const REGIONS = [
  { name: "Kanto", range: [1, 151] },
  { name: "Stadium Rentals", range: [1, 151] },
  { name: "Johto", range: [152, 251] },
  { name: "Stadium 2 Rentals", range: [152, 251] },
  { name: "Hoenn", range: [252, 386] },
  { name: "Sinnoh", range: [387, 493] },
  { name: "Sinnoh (Platinum)", range: [387, 493] },
  { name: "Unova", range: [494, 649] },
  { name: "Unova (B2W2)", range: [494, 649] },
  { name: "Kalos", range: [650, 721] },
  { name: "Alola", range: [722, 809] },
  { name: "Alola (USUM)", range: [722, 809] },
  { name: "Galar", range: [810, 905] },
  { name: "Hisui", range: [387, 493] },
  { name: "Paldea", range: [906, 1025] },
  { name: "Kitakami", range: [906, 1025] },
  { name: "Blueberry Academy", range: [906, 1025] },
  { name: "Lumiose City", range: [650, 721] },
];

const LEGENDARY_OPTIONS = [
  "Sub-Legendary",
  "Legendary",
  "Mythical",
  "Paradox",
  "Ultra Beast",
];

const EVOLUTION_STAGES = ["Unevolved", "Evolved Once", "Evolved Twice"];
const FULLY_EVOLVED_OPTIONS = ["Not Fully Evolved", "Fully Evolved"];
const GENDERS = ["Male", "Female", "Genderless"];
const DISPLAY_FORMATS = ["Name Only", "Sprite Only", "Both Name and Sprite"];
const NATURES = [
  "Adamant", "Bold", "Brave", "Calm", "Careful", "Gentle", "Hasty", "Hardy",
  "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest", "Naive", "Naughty",
  "Quiet", "Quirky", "Rash", "Relaxed", "Sassy", "Timid", "Bashful", "Docile",
  "Serious",
];
const FORM_OPTIONS = ["Alternate Forms", "Mega Evolutions", "Gigantamax Forms"];

// Sub-Legendary Pokemon IDs
const SUB_LEGENDARY_IDS = new Set([
  144, 145, 146, // Articuno, Zapdos, Moltres
  243, 244, 245, // Raikou, Entei, Suicune
  377, 378, 379, 380, 381, // Regi trio + Lati twins
  480, 481, 482, // Lake trio (Uxie, Mesprit, Azelf)
  488, // Cresselia
  638, 639, 640, // Swords of Justice
  641, 642, 645, // Forces of Nature
  772, 773, // Type: Null, Silvally
  785, 786, 787, 788, // Tapu guardians
  891, 892, // Kubfu, Urshifu
  896, 897, 898, // Glastrier, Spectrier, Calyrex
  905, // Enamorus
  1001, 1002, 1003, 1004, // Wo-Chien, Chien-Pao, Ting-Lu, Chi-Yu
  1014, 1015, 1016, // Okidogi, Munkidori, Fezandipiti
]);

// Legendary Pokemon IDs
const LEGENDARY_IDS = new Set([
  150, // Mewtwo
  249, 250, // Lugia, Ho-Oh
  382, 383, 384, // Kyogre, Groudon, Rayquaza
  483, 484, 487, // Dialga, Palkia, Giratina
  643, 644, 646, // Reshiram, Zekrom, Kyurem
  716, 717, 718, // Xerneas, Yveltal, Zygarde
  789, 790, 791, 792, 800, // Cosmog line, Solgaleo, Lunala, Necrozma
  888, 889, 890, // Zacian, Zamazenta, Eternatus
  1007, 1008, // Koraidon, Miraidon
  1024, // Terapagos
]);

// Mythical Pokemon IDs
const MYTHICAL_IDS = new Set([
  151, // Mew
  251, // Celebi
  385, 386, // Jirachi, Deoxys
  489, 490, 491, 492, 493, // Phione, Manaphy, Darkrai, Shaymin, Arceus
  494, 647, 648, 649, // Victini, Keldeo, Meloetta, Genesect
  719, 720, 721, // Diancie, Hoopa, Volcanion
  801, 802, 807, 808, 809, // Magearna, Marshadow, Zeraora, Meltan, Melmetal
  893, // Zarude
  1025, // Pecharunt
]);

// Ultra Beast Pokemon IDs
const ULTRA_BEAST_IDS = new Set([
  793, 794, 795, 796, 797, 798, 799, // Nihilego through Kartana + Guzzlord
  803, 804, 805, 806, // Poipole, Naganadel, Stakataka, Blacephalon
]);

// Paradox Pokemon IDs
const PARADOX_IDS = new Set([
  984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, // Gen 9 Paradox
  1005, 1006, 1009, 1010, // Walking Wake, Iron Leaves, etc.
]);

// ============ PERFORMANCE: In-memory Pokemon cache ============
const pokemonCache = new Map<number, Pokemon>();

// Strip massive PokeAPI response (~200KB) down to only fields we need (~2KB)
function stripPokemonData(raw: Record<string, unknown>): Pokemon {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sprites = raw.sprites as any;
  return {
    id: raw.id as number,
    name: raw.name as string,
    height: raw.height as number,
    weight: raw.weight as number,
    sprites: {
      other: {
        "official-artwork": {
          front_default: sprites?.other?.["official-artwork"]?.front_default || "",
        },
      },
    },
    types: (raw.types as PokemonType[]),
    stats: (raw.stats as PokemonStat[]),
  };
}

async function fetchPokemonById(id: number, retries = 3): Promise<Pokemon> {
  const cached = pokemonCache.get(id);
  if (cached) return cached;

  let lastError: unknown;
  for (let attempt = 0; attempt < retries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`API returned ${res.status} for Pokemon ${id}`);
      const raw = await res.json();
      const stripped = stripPokemonData(raw);
      pokemonCache.set(id, stripped);
      return stripped;
    } catch (err) {
      clearTimeout(timeoutId);
      lastError = err;
      if (attempt < retries - 1) {
        // Exponential backoff: 300ms, 600ms, 1200ms…
        await new Promise((resolve) => setTimeout(resolve, 300 * Math.pow(2, attempt)));
      }
    }
  }
  throw lastError;
}

interface CompactFilterDropdownProps {
  label: string;
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  minWidth?: string;
  className?: string;
}

const CompactFilterDropdown = ({
  label,
  value,
  isOpen,
  onToggle,
  children,
  minWidth = "min-w-[200px]",
  className = "",
}: CompactFilterDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onToggle]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={onToggle}
        className="min-h-[36px] h-9 md:h-11 w-full px-2 md:px-4 bg-white hover:bg-gray-100 border-2 border-black font-mono text-xs md:text-sm text-black whitespace-nowrap flex items-center gap-1.5 md:gap-2 transition-all btn-hover-lift group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-semibold text-black">{label}:</span>
        <span className="font-normal truncate flex-1 text-left text-black">{value}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-200 flex-shrink-0 text-black ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 bg-white border-2 border-black ${minWidth} max-w-[85vw] max-h-[60vh] overflow-y-auto z-50 slasher`}
        >
          <div className="p-3 md:p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

interface MultiSelectCheckboxesProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  showSelectAll?: boolean;
}

const MultiSelectCheckboxes = ({
  options,
  selected,
  onChange,
  showSelectAll = false,
}: MultiSelectCheckboxesProps) => {
  const isAllSelected = options.length > 0 && selected.length === options.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange(options);
    }
  };

  return (
    <div className="space-y-2">
      {showSelectAll && (
        <label className="flex items-center gap-2 cursor-pointer mb-1.5 pb-1.5 border-b border-charcoal min-h-[32px] md:min-h-[40px]">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer flex-shrink-0"
          />
          <span className="font-mono text-xs md:text-sm text-black font-semibold">
            {isAllSelected ? "Deselect All" : "Select All"}
          </span>
        </label>
      )}
      <div className="grid grid-cols-1 gap-1">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-blue-50 p-1.5 md:p-2 rounded transition-all min-h-[32px] md:min-h-[40px]">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange([...selected, option]);
                } else {
                  onChange(selected.filter((s) => s !== option));
                }
              }}
              className="w-4 h-4 cursor-pointer flex-shrink-0"
            />
            <span className="font-mono text-xs md:text-sm text-black">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

interface ActiveFilterChipsProps {
  filters: FilterState;
  onRemoveFilter: (key: keyof FilterState, value?: string) => void;
}

const ActiveFilterChips = ({ filters, onRemoveFilter }: ActiveFilterChipsProps) => {
  const chips: { label: string; key: keyof FilterState; value?: string }[] = [];

  if (filters.teamSize !== 6) {
    chips.push({ label: `SIZE: ${filters.teamSize}`, key: "teamSize" });
  }

  filters.types.forEach((type) => {
    chips.push({ label: `TYPE: ${type.toUpperCase()}`, key: "types", value: type });
  });

  filters.legendaryStatus.forEach((status) => {
    chips.push({ label: `${status.toUpperCase()}`, key: "legendaryStatus", value: status });
  });

  filters.regions.forEach((region) => {
    chips.push({ label: `${region.toUpperCase()}`, key: "regions", value: region });
  });

  filters.evolutionStage.forEach((stage) => {
    chips.push({ label: stage.toUpperCase(), key: "evolutionStage", value: stage });
  });

  filters.fullyEvolved.forEach((evolved) => {
    chips.push({ label: evolved.toUpperCase(), key: "fullyEvolved", value: evolved });
  });

  filters.genders.forEach((gender) => {
    chips.push({ label: `${gender.toUpperCase()}`, key: "genders", value: gender });
  });

  filters.natures.forEach((nature) => {
    chips.push({ label: nature.toUpperCase(), key: "natures", value: nature });
  });

  filters.forms.forEach((form) => {
    chips.push({ label: form.toUpperCase(), key: "forms", value: form });
  });

  if (filters.displayFormat !== "both") {
    chips.push({
      label: `DISPLAY: ${filters.displayFormat.toUpperCase()}`,
      key: "displayFormat",
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {chips.map((chip) => (
        <div
          key={`${chip.key}-${chip.value || chip.label}`}
          className="bg-marigold text-black px-2 md:px-3 py-1 text-[10px] md:text-xs font-mono flex items-center gap-1.5 slasher border-2 border-black filter-chip"
        >
          <span>{chip.label}</span>
          <button
            onClick={() => onRemoveFilter(chip.key, chip.value)}
            className="text-black hover:text-charcoal transition-smooth"
            aria-label={`Remove ${chip.label}`}
          >
            <X size={12} className="md:w-3.5 md:h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

interface PokemonGeneratorClientProps {
  hideGenericContent?: boolean;
  hideHero?: boolean;
  title?: string;
  badge?: string;
  defaultRegion?: string;
  defaultLegendary?: string[];
  idRange?: [number, number];
  defaultIds?: number[]; // explicit list of IDs to auto-generate from
}

export default function PokemonGeneratorClient({
  hideGenericContent = false,
  hideHero = false,
  title,
  badge,
  defaultRegion,
  defaultLegendary,
  idRange,
  defaultIds,
}: PokemonGeneratorClientProps) {
  const router = useRouter();
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [terminalStatus, setTerminalStatus] = useState("IDLE");
  const [searchQuery, setSearchQuery] = useState("");
  const [allPokemon, setAllPokemon] = useState<{ name: string; id: number }[]>([]);
  const [suggestions, setSuggestions] = useState<{ name: string; id: number }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<FilterState>({
    teamSize: 6,
    types: [],
    legendaryStatus: defaultLegendary ?? [],
    evolutionStage: [],
    fullyEvolved: [],
    displayFormat: "both",
    genders: [],
    natures: [],
    forms: [],
    regions: defaultRegion ? [defaultRegion] : [],
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [typeCache, setTypeCache] = useState<Record<string, Set<number>>>({});
  const [natureSearch, setNatureSearch] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sharePokemon, setSharePokemon] = useState<Pokemon | null>(null);

  // Ref for scrolling to team grid
  const teamGridRef = useRef<HTMLDivElement>(null);

  const hasFetchedPokemonList = useRef(false);

  // Fetch all Pokemon names for autocomplete - deferred until search is focused
  const fetchAllPokemonIfNeeded = useCallback(async () => {
    if (hasFetchedPokemonList.current || allPokemon.length > 0) return;
    hasFetchedPokemonList.current = true;
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
      if (!response.ok) throw new Error(`API returned ${response.status}`);
      const data = await response.json();
      const pokemonList = data.results.map((p: { name: string; url: string }) => {
        const urlParts = p.url.split("/");
        const id = parseInt(urlParts[urlParts.length - 2]);
        return { name: p.name, id };
      });
      setAllPokemon(pokemonList);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
      hasFetchedPokemonList.current = false;
    }
  }, [allPokemon.length]);

  // Auto-generate on every mount using region/legendary defaults if provided
  useEffect(() => {
    let mounted = true;

    setLoading(true);
    setTerminalStatus("FETCHING...");

    (async () => {
      try {
        // Determine the ID pool for the initial generate
        let pool: number[];
        if (defaultIds && defaultIds.length > 0) {
          pool = defaultIds;
        } else if (idRange) {
          pool = Array.from({ length: idRange[1] - idRange[0] + 1 }, (_, i) => i + idRange[0]);
        } else if (defaultRegion) {
          // Use the region's ID range
          const region = REGIONS.find(r => r.name === defaultRegion);
          if (region) {
            pool = Array.from({ length: region.range[1] - region.range[0] + 1 }, (_, i) => i + region.range[0]);
          } else {
            pool = Array.from({ length: 1025 }, (_, i) => i + 1);
          }
        } else if (defaultLegendary && defaultLegendary.length > 0) {
          // Use the legendary ID sets
          const matchingIds = new Set<number>();
          if (defaultLegendary.includes("Sub-Legendary")) SUB_LEGENDARY_IDS.forEach(id => matchingIds.add(id));
          if (defaultLegendary.includes("Legendary")) LEGENDARY_IDS.forEach(id => matchingIds.add(id));
          if (defaultLegendary.includes("Mythical")) MYTHICAL_IDS.forEach(id => matchingIds.add(id));
          if (defaultLegendary.includes("Paradox")) PARADOX_IDS.forEach(id => matchingIds.add(id));
          if (defaultLegendary.includes("Ultra Beast")) ULTRA_BEAST_IDS.forEach(id => matchingIds.add(id));
          pool = Array.from(matchingIds);
        } else {
          pool = Array.from({ length: 1025 }, (_, i) => i + 1);
        }

        const uniqueIds = new Set<number>();
        const teamSize = 6;
        const maxAttempts = Math.min(pool.length, teamSize * 10);
        let attempts = 0;
        while (uniqueIds.size < teamSize && attempts < maxAttempts) {
          uniqueIds.add(pool[Math.floor(Math.random() * pool.length)]);
          attempts++;
        }

        const ids = Array.from(uniqueIds);
        const results = await Promise.allSettled(ids.map(id => fetchPokemonById(id)));
        if (!mounted) return;
        const successful = results
          .filter((r): r is PromiseFulfilledResult<Pokemon> => r.status === "fulfilled")
          .map(r => r.value);
        if (successful.length > 0) {
          setTeam(successful);
          setTerminalStatus("SUCCESS");
        } else {
          setTerminalStatus("ERROR");
        }
      } catch (err) {
        console.error("Auto-generate failed:", err);
        if (mounted) setTerminalStatus("ERROR");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    if (value.trim().length > 0) {
      const filtered = allPokemon
        .filter((p) => p.name.toLowerCase().includes(value.toLowerCase().trim()))
        .slice(0, 8);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    setShowSuggestions(false);
    router.push(`/pokemon/${name}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setShowSuggestions(false);
    router.push(`/pokemon/${searchQuery.toLowerCase().trim()}`);
  };

  const toggleDropdown = useCallback((dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  // Close dropdowns on scroll
  useEffect(() => {
    if (!openDropdown) return;

    const handleScroll = (e: Event) => {
      const target = e.target as Element;
      const dropdownElement = target.closest('.max-h-[60vh]');
      if (dropdownElement) return;

      closeAllDropdowns();
    };

    const handleWheel = (e: Event) => {
      const target = e.target as Element;
      const dropdownElement = target.closest('.max-h-[60vh]');
      if (dropdownElement) return;

      closeAllDropdowns();
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('wheel', handleWheel, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('wheel', handleWheel, true);
    };
  }, [openDropdown, closeAllDropdowns]);

  const getValidPokemonIds = async (): Promise<number[]> => {
    let validIds = new Set<number>();

    if (filters.regions.length > 0) {
      const regionRanges = filters.regions.map((regionName) => {
        const region = REGIONS.find((r) => r.name === regionName);
        return region?.range || [0, 0];
      });

      for (const [start, end] of regionRanges) {
        for (let i = start; i <= end; i++) {
          validIds.add(i);
        }
      }
    } else {
      for (let i = 1; i <= 1025; i++) {
        validIds.add(i);
      }
    }

    if (filters.types.length > 0) {
      const typeIdSets = await Promise.all(
        filters.types.map((type) => getTypeIds(type))
      );
      const allTypeIds = typeIdSets.reduce(
        (acc, set) => new Set([...acc, ...set]),
        new Set<number>()
      );
      validIds = new Set([...validIds].filter((id) => allTypeIds.has(id)));
    }

    if (filters.legendaryStatus.length > 0) {
      const matchingIds = new Set<number>();

      if (filters.legendaryStatus.includes("Sub-Legendary")) {
        SUB_LEGENDARY_IDS.forEach((id) => matchingIds.add(id));
      }
      if (filters.legendaryStatus.includes("Legendary")) {
        LEGENDARY_IDS.forEach((id) => matchingIds.add(id));
      }
      if (filters.legendaryStatus.includes("Mythical")) {
        MYTHICAL_IDS.forEach((id) => matchingIds.add(id));
      }
      if (filters.legendaryStatus.includes("Paradox")) {
        PARADOX_IDS.forEach((id) => matchingIds.add(id));
      }
      if (filters.legendaryStatus.includes("Ultra Beast")) {
        ULTRA_BEAST_IDS.forEach((id) => matchingIds.add(id));
      }

      validIds = new Set([...validIds].filter((id) => matchingIds.has(id)));
    }

    if (filters.evolutionStage.length > 0) {
      validIds = new Set([...validIds].filter((id) => matchesEvolutionStage(id, filters.evolutionStage)));
    }

    if (filters.fullyEvolved.length > 0) {
      validIds = new Set([...validIds].filter((id) => matchesFullyEvolved(id, filters.fullyEvolved)));
    }

    if (filters.genders.length > 0) {
      validIds = new Set([...validIds].filter((id) => matchesGender(id, filters.genders)));
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
      if (!response.ok) throw new Error(`API returned ${response.status} for type ${typeName}`);
      const data = await response.json();
      const ids = new Set<number>(
        data.pokemon
          .map((p: { pokemon: { url: string } }) => {
            const id = parseInt(p.pokemon.url.split("/")[6]);
            return id <= 1025 ? id : null;
          })
          .filter((id: number | null): id is number => id !== null)
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
        setLoading(false);
        return;
      }

      const uniqueIds = new Set<number>();
      const teamSize = Math.min(filters.teamSize, validIds.length);
      const maxAttempts = Math.min(validIds.length, teamSize * 10);
      let attempts = 0;

      while (uniqueIds.size < teamSize && attempts < maxAttempts) {
        uniqueIds.add(validIds[Math.floor(Math.random() * validIds.length)]);
        attempts++;
      }

      const ids = Array.from(uniqueIds);
      let scrolled = false;

      ids.forEach(id => {
        fetchPokemonById(id).then(pokemon => {
          setTeam(prev => {
            if (prev.find(p => p.id === pokemon.id)) return prev;
            return [...prev, pokemon];
          });
          if (!scrolled) {
            scrolled = true;
            setTimeout(() => {
              teamGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        }).catch(err => console.error(`Failed to fetch Pokemon ${id}:`, err));
      });

      await Promise.all(ids.map(id => fetchPokemonById(id)));
      setTerminalStatus("SUCCESS");
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
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
      types: [],
      legendaryStatus: [],
      evolutionStage: [],
      fullyEvolved: [],
      displayFormat: "both",
      genders: [],
      natures: [],
      forms: [],
      regions: [],
    });
  };

  const removeFilter = (key: keyof FilterState, value?: string) => {
    if (key === "teamSize") {
      setFilters({ ...filters, teamSize: 6 });
    } else if (key === "displayFormat") {
      setFilters({ ...filters, displayFormat: "both" });
    } else if (Array.isArray(filters[key])) {
      const arr = filters[key] as string[];
      if (value) {
        setFilters({
          ...filters,
          [key]: arr.filter((item) => item !== value),
        });
      } else {
        setFilters({
          ...filters,
          [key]: [],
        });
      }
    }
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.teamSize !== 6 ||
      filters.types.length > 0 ||
      filters.legendaryStatus.length > 0 ||
      filters.evolutionStage.length > 0 ||
      filters.fullyEvolved.length > 0 ||
      filters.displayFormat !== "both" ||
      filters.genders.length > 0 ||
      filters.natures.length > 0 ||
      filters.forms.length > 0 ||
      filters.regions.length > 0
    );
  }, [filters]);

  const filteredNatures = useMemo(() => {
    return NATURES.filter((nature) =>
      nature.toLowerCase().includes(natureSearch.toLowerCase())
    );
  }, [natureSearch]);

  const getFilterDisplayValue = (key: keyof FilterState): string => {
    switch (key) {
      case "teamSize":
        return String(filters.teamSize);
      case "regions":
        return filters.regions.length === 0
          ? "All"
          : filters.regions.length === 1
            ? filters.regions[0]
            : `${filters.regions.length}`;
      case "types":
        return filters.types.length === 0
          ? "Any"
          : filters.types.length === 1
            ? filters.types[0].charAt(0).toUpperCase() + filters.types[0].slice(1)
            : `${filters.types.length}`;
      case "legendaryStatus":
        return filters.legendaryStatus.length === 0
          ? "All"
          : filters.legendaryStatus.length === 1
            ? filters.legendaryStatus[0]
            : `${filters.legendaryStatus.length}`;
      case "evolutionStage":
        return filters.evolutionStage.length === 0
          ? "All"
          : filters.evolutionStage.length === 1
            ? filters.evolutionStage[0]
            : `${filters.evolutionStage.length}`;
      case "fullyEvolved":
        return filters.fullyEvolved.length === 0
          ? "All"
          : filters.fullyEvolved.length === 1
            ? filters.fullyEvolved[0]
            : `${filters.fullyEvolved.length}`;
      case "genders":
        return filters.genders.length === 0
          ? "All"
          : filters.genders.length === 1
            ? filters.genders[0]
            : `${filters.genders.length}`;
      case "natures":
        return filters.natures.length === 0
          ? "All"
          : filters.natures.length === 1
            ? filters.natures[0]
            : `${filters.natures.length}`;
      case "forms":
        return filters.forms.length === 0
          ? "All"
          : filters.forms.length === 1
            ? filters.forms[0]
            : `${filters.forms.length}`;
      case "displayFormat":
        return filters.displayFormat === "both"
          ? "Both"
          : filters.displayFormat === "name-only"
            ? "Name"
            : "Sprite";
      default:
        return "All";
    }
  };

  return (
    <div className={!hideHero ? "min-h-screen bg-cream p-4 md:p-8 relative" : "relative pb-8 md:pb-12"}>
      {/* Blur Overlay when search is active */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[55]"
          onClick={() => setShowSuggestions(false)}
        />
      )}

      <div className="max-w-6xl mx-auto relative">
        {/* Hero Section - hidden when parent page provides its own h1 */}
        {!hideHero && (
          <div className="mb-4 md:mb-6 text-center relative z-[60]">
            {badge && (
              <div className={`inline-flex items-center gap-2 bg-marigold text-black border-2 md:border-4 border-black slasher px-4 py-1.5 md:py-2 mb-4 transition-all ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px]' : ''}`}>
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black" />
                <span className="font-mono text-[10px] md:text-sm font-bold uppercase tracking-widest leading-none mt-0.5">{badge}</span>
              </div>
            )}
            <h1 className={`font-grotesk font-bold text-4xl sm:text-5xl lg:text-7xl text-black mb-3 md:mb-4 uppercase tracking-tight transition-all px-2 ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px]' : ''}`}>
              {title || "RANDOM POKEMON NUZLOCKE GENERATOR"}
            </h1>
          </div>
        )}

        {/* Status Box + Search - always visible on all pages */}
        <div className="text-center mb-4 md:mb-6 relative z-[60]">
          {/* Status Box */}
          <div className={`inline-block bg-black px-4 md:px-6 py-2 md:py-3 slasher mb-4 md:mb-6 transition-all ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px]' : ''}`}>
            <p className="font-mono text-xs md:text-sm font-semibold text-white">
              STATUS: {terminalStatus}
            </p>
          </div>

          {/* Direct Search Form with Autocomplete */}
          <div ref={searchRef} className="w-full max-w-md mx-auto relative mb-2 z-[70] px-2">
            <form onSubmit={handleSearch} className="flex w-full">
              <div className="relative w-full">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4 md:w-5 md:h-5 z-10" />
                <input
                  type="text"
                  placeholder="SEARCH_DATABASE..."
                  value={searchQuery}
                  onChange={(e) => handleSearchInput(e.target.value)}
                  onFocus={() => { fetchAllPokemonIfNeeded(); suggestions.length > 0 && setShowSuggestions(true); }}
                  className="w-full bg-white border-2 border-black py-3 md:py-4 pl-10 md:pl-12 pr-3 md:pr-4 font-mono text-xs md:text-sm text-black placeholder:text-black/30 focus:outline-none focus:bg-cream transition-smooth rounded-none"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 md:px-6 font-mono text-xs md:text-sm font-bold hover:bg-charcoal transition-smooth btn-hover-lift border-2 border-black border-l-0"
              >
                GO
              </button>
            </form>

            {/* Autocomplete Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border-2 border-black border-t-0 z-50 max-h-64 md:max-h-80 overflow-y-auto animate-slide-down">
                {suggestions.map((pokemon) => (
                  <button
                    key={pokemon.name}
                    type="button"
                    onClick={() => handleSuggestionClick(pokemon.name)}
                    className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 font-mono text-xs md:text-sm text-black hover:bg-cream transition-smooth border-b border-black/10 last:border-b-0"
                  >
                    <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-cream">
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt={`${pokemon.name} Pokemon sprite`}
                        fill
                        sizes="(max-width: 768px) 32px, 40px"
                        className="object-contain"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <span className="uppercase font-semibold truncate">{pokemon.name}</span>
                    <span className="text-black/40 text-xs ml-auto flex-shrink-0">#{String(pokemon.id).padStart(4, "0")}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rest of page content - blurs when search is active */}
        <div className={`transition-all ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px] pointer-events-none' : ''}`}>
          {/* CONTROL PANEL GRID */}
          <div className="mb-6">
            <div className="bg-white border-2 border-black p-3 md:p-4 relative z-50 overflow-visible">
              {/* CSS Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 overflow-visible">

                {/* 1. TEAM */}
                <CompactFilterDropdown
                  label="Team"
                  value={filters.teamSize.toString()}
                  isOpen={openDropdown === "teamSize"}
                  onToggle={() => toggleDropdown("teamSize")}
                  minWidth="min-w-[150px]"
                >
                  <div className="space-y-1">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          setFilters({ ...filters, teamSize: num });
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-3 py-2 font-mono text-sm md:text-base hover:bg-blue-50 transition-all min-h-[44px] ${filters.teamSize === num ? 'bg-blue-100 font-bold' : ''
                          }`}
                      >
                        {num} Pokemon
                      </button>
                    ))}
                  </div>
                </CompactFilterDropdown>

                {/* 2. REGION */}
                <CompactFilterDropdown
                  label="Region"
                  value={getFilterDisplayValue("regions")}
                  isOpen={openDropdown === "regions"}
                  onToggle={() => toggleDropdown("regions")}
                  minWidth="min-w-[220px]"
                >
                  <MultiSelectCheckboxes
                    options={REGIONS.map((r) => r.name)}
                    selected={filters.regions}
                    onChange={(regions) => setFilters({ ...filters, regions })}
                    showSelectAll={true}
                  />
                </CompactFilterDropdown>

                {/* 3. TYPE */}
                <CompactFilterDropdown
                  label="Type"
                  value={getFilterDisplayValue("types")}
                  isOpen={openDropdown === "types"}
                  onToggle={() => toggleDropdown("types")}
                  minWidth="min-w-[200px]"
                >
                  <MultiSelectCheckboxes
                    options={POKEMON_TYPES.map(
                      (t) => t.charAt(0).toUpperCase() + t.slice(1)
                    )}
                    selected={filters.types.map(
                      (t) => t.charAt(0).toUpperCase() + t.slice(1)
                    )}
                    onChange={(types) =>
                      setFilters({
                        ...filters,
                        types: types.map((t) => t.toLowerCase()),
                      })
                    }
                    showSelectAll={true}
                  />
                </CompactFilterDropdown>

                {/* 4. RARITY */}
                <CompactFilterDropdown
                  label="Rarity"
                  value={getFilterDisplayValue("legendaryStatus")}
                  isOpen={openDropdown === "legendary"}
                  onToggle={() => toggleDropdown("legendary")}
                  minWidth="min-w-[200px]"
                >
                  <MultiSelectCheckboxes
                    options={LEGENDARY_OPTIONS}
                    selected={filters.legendaryStatus}
                    onChange={(legendaryStatus) =>
                      setFilters({ ...filters, legendaryStatus })
                    }
                    showSelectAll={true}
                  />
                </CompactFilterDropdown>

                {/* MOBILE TOGGLE BUTTON - Shows between basic and advanced filters */}
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="col-span-2 md:hidden h-8 border-2 border-black bg-marigold text-black font-mono uppercase text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{showAdvanced ? '[-] CLOSE FILTERS' : '[+] ADVANCED FILTERS'}</span>
                </button>

                {/* 5. STAGE - Hidden on mobile unless toggled, always visible on desktop */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Stage"
                    value={getFilterDisplayValue("evolutionStage")}
                    isOpen={openDropdown === "evolution"}
                    onToggle={() => toggleDropdown("evolution")}
                    minWidth="min-w-[180px]"
                  >
                    <MultiSelectCheckboxes
                      options={EVOLUTION_STAGES}
                      selected={filters.evolutionStage}
                      onChange={(evolutionStage) =>
                        setFilters({ ...filters, evolutionStage })
                      }
                      showSelectAll={true}
                    />
                  </CompactFilterDropdown>
                </div>

                {/* 6. EVOLVED */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Evolved"
                    value={getFilterDisplayValue("fullyEvolved")}
                    isOpen={openDropdown === "fullyEvolved"}
                    onToggle={() => toggleDropdown("fullyEvolved")}
                    minWidth="min-w-[180px]"
                  >
                    <MultiSelectCheckboxes
                      options={FULLY_EVOLVED_OPTIONS}
                      selected={filters.fullyEvolved}
                      onChange={(fullyEvolved) =>
                        setFilters({ ...filters, fullyEvolved })
                      }
                      showSelectAll={false}
                    />
                  </CompactFilterDropdown>
                </div>

                {/* 7. GENDER */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Gender"
                    value={getFilterDisplayValue("genders")}
                    isOpen={openDropdown === "gender"}
                    onToggle={() => toggleDropdown("gender")}
                    minWidth="min-w-[160px]"
                  >
                    <MultiSelectCheckboxes
                      options={GENDERS}
                      selected={filters.genders}
                      onChange={(genders) => setFilters({ ...filters, genders })}
                      showSelectAll={true}
                    />
                  </CompactFilterDropdown>
                </div>

                {/* 8. NATURE */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Nature"
                    value={getFilterDisplayValue("natures")}
                    isOpen={openDropdown === "nature"}
                    onToggle={() => toggleDropdown("nature")}
                    minWidth="min-w-[200px]"
                  >
                    <div className="space-y-2">
                      <div className="relative">
                        <Search size={14} className="absolute left-2 top-2.5 text-charcoal" />
                        <input
                          type="text"
                          placeholder="Search..."
                          value={natureSearch}
                          onChange={(e) => setNatureSearch(e.target.value)}
                          className="w-full bg-cream border-2 border-black px-2 py-2 pl-8 font-mono text-xs text-black placeholder-charcoal min-h-[40px]"
                        />
                      </div>
                      <MultiSelectCheckboxes
                        options={filteredNatures}
                        selected={filters.natures}
                        onChange={(natures) => setFilters({ ...filters, natures })}
                        showSelectAll={true}
                      />
                    </div>
                  </CompactFilterDropdown>
                </div>

                {/* 9. FORMS */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Forms"
                    value={getFilterDisplayValue("forms")}
                    isOpen={openDropdown === "forms"}
                    onToggle={() => toggleDropdown("forms")}
                    minWidth="min-w-[180px]"
                  >
                    <MultiSelectCheckboxes
                      options={FORM_OPTIONS}
                      selected={filters.forms}
                      onChange={(forms) => setFilters({ ...filters, forms })}
                      showSelectAll={true}
                    />
                  </CompactFilterDropdown>
                </div>

                {/* 10. DISPLAY */}
                <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                  <CompactFilterDropdown
                    label="Display"
                    value={getFilterDisplayValue("displayFormat")}
                    isOpen={openDropdown === "display"}
                    onToggle={() => toggleDropdown("display")}
                    minWidth="min-w-[180px]"
                  >
                    <div className="space-y-1.5">
                      {DISPLAY_FORMATS.map((format) => (
                        <label key={format} className="flex items-center gap-2 cursor-pointer hover:bg-cream p-1 min-h-[44px]">
                          <input type="radio" name="displayFormat"
                            checked={filters.displayFormat === (format === "Name Only" ? "name-only" : format === "Sprite Only" ? "sprite-only" : "both")}
                            onChange={() => { setFilters({ ...filters, displayFormat: format === "Name Only" ? "name-only" : format === "Sprite Only" ? "sprite-only" : "both" }); closeAllDropdowns(); }}
                            className="w-5 h-5 cursor-pointer flex-shrink-0" />
                          <span className="font-mono text-xs md:text-sm text-black">{format}</span>
                        </label>
                      ))}
                    </div>
                  </CompactFilterDropdown>
                </div>

                {/* RESET BUTTON - Desktop */}
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="hidden md:flex h-12 px-4 bg-marigold text-black hover:bg-marigold-hover font-mono text-xs md:text-sm font-semibold border-2 border-black transition-smooth btn-hover-lift items-center justify-center min-h-[44px]"
                    aria-label="Reset all filters"
                  >
                    RESET
                  </button>
                )}
              </div>

              {/* RESET BUTTON - Mobile (Full Width Below Grid) */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="md:hidden w-full mt-1.5 h-8 bg-marigold text-black hover:bg-marigold-hover font-mono text-xs font-semibold border-2 border-black transition-smooth btn-hover-lift flex items-center justify-center"
                  aria-label="Reset all filters"
                >
                  RESET FILTERS
                </button>
              )}
            </div>
          </div>

          {/* Generate Button - 44px minimum touch target */}
          <div className="flex justify-center mb-8 md:mb-12">
            <button
              onClick={generateTeam}
              disabled={loading}
              className="w-full md:w-auto px-4 py-2 md:px-6 md:py-3 font-grotesk font-bold text-sm md:text-lg uppercase tracking-wider bg-[#4ADE80] hover:bg-[#22c55e] text-black border-2 border-black slasher shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#000] btn-hover-lift"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <Loader2 className="animate-spin" size={20} />
                  GENERATING...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <Zap size={20} className="animate-pulse text-[#FFEA00] fill-[#FFEA00]" />
                  GENERATE TEAM
                </span>
              )}
            </button>
          </div>

          {/* Loading State */}
          {loading && <TeamGridSkeleton count={filters.teamSize} />}

          {/* Pokemon Grid */}
          {!loading && team.length > 0 && (
            <div ref={teamGridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {team.map((pokemon) => {
                const primaryType = pokemon.types[0]?.type.name || 'normal';
                const typeColor = getTypeColor(primaryType);
                const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                const typeText = pokemon.types.map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join('/');
                const altText = `${pokemonName} official artwork - ${typeText} type`;

                // Extract key stats if available
                const getStat = (name: string) => pokemon.stats?.find(s => s.stat.name === name)?.base_stat || 0;
                const hp = getStat('hp');
                const atk = getStat('attack');
                const def = getStat('defense');
                const spd = getStat('speed');
                const bst = pokemon.stats?.reduce((sum, s) => sum + s.base_stat, 0) || 0;

                return (
                  <div
                    key={pokemon.id}
                    className="group relative bg-white border-2 md:border-4 border-black slasher overflow-hidden hover:shadow-2xl transition-all duration-300 pokemon-card flex flex-col"
                  >
                    {/* Type-colored accent bar at top */}
                    <div className="h-1.5 sm:h-2" style={{ background: pokemon.types.length > 1 ? `linear-gradient(90deg, ${typeColor} 50%, ${getTypeColor(pokemon.types[1].type.name)} 50%)` : typeColor }} />

                    <div className="p-2.5 sm:p-4 md:p-5 flex-1 flex flex-col">
                      {/* Top Row: ID + BST + Share */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-charcoal/60 font-semibold">
                            #{String(pokemon.id).padStart(4, "0")}
                          </span>
                          {pokemon.stats && (
                            <span className="font-mono text-[9px] sm:text-[10px] bg-black/5 text-charcoal/70 px-1.5 py-0.5 font-bold">
                              BST {bst}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setSharePokemon(pokemon)}
                          className="p-1 text-black/40 hover:text-marigold transition-smooth cursor-pointer z-10"
                          aria-label={`Share ${pokemon.name} flash card`}
                        >
                          <Share2 size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>

                      {/* Pokemon Image */}
                      {(filters.displayFormat === "both" || filters.displayFormat === "sprite-only") && (() => {
                        const imgSrc = pokemon.sprites.other["official-artwork"].front_default
                          || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                        const isFirstFour = team.indexOf(pokemon) < 4;
                        return (
                          <Link href={`/pokemon/${pokemon.name}`} className="relative w-full mb-2 sm:mb-3 block" style={{ paddingBottom: '75%' }}>
                            <div className="absolute inset-0 opacity-[0.07]" style={{ background: `radial-gradient(circle, ${typeColor} 0%, transparent 70%)` }} />
                            <Image
                              src={imgSrc}
                              alt={altText}
                              fill
                              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                              className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 p-1"
                              priority={isFirstFour}
                              loading={isFirstFour ? undefined : "lazy"}
                              unoptimized
                            />
                          </Link>
                        );
                      })()}

                      {/* Name */}
                      {(filters.displayFormat === "both" || filters.displayFormat === "name-only") && (
                        <Link href={`/pokemon/${pokemon.name}`} className="block">
                          <h2 className="font-grotesk font-bold text-sm sm:text-base md:text-xl text-black mb-1.5 sm:mb-2 uppercase truncate group-hover:text-indigo transition-colors flex-1">
                            {pokemon.name}
                          </h2>
                        </Link>
                      )}

                      {/* Type Badges */}
                      <div className="flex gap-1 sm:gap-1.5 mb-2 sm:mb-3 flex-wrap">
                        {pokemon.types.map((typeInfo) => (
                          <span
                            key={typeInfo.type.name}
                            className="font-mono text-[9px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 md:px-2.5 py-0.5 text-white uppercase font-bold border border-black/20 rounded-sm"
                            style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
                          >
                            {typeInfo.type.name}
                          </span>
                        ))}
                      </div>

                      {/* Mini Stat Bars */}
                      {pokemon.stats && (
                        <div className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                          {[
                            { label: 'HP', value: hp },
                            { label: 'ATK', value: atk },
                            { label: 'DEF', value: def },
                            { label: 'SPD', value: spd },
                          ].map(stat => (
                            <div key={stat.label} className="flex items-center gap-1 sm:gap-1.5">
                              <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/50 w-5 sm:w-6 text-right font-bold flex-shrink-0">
                                {stat.label}
                              </span>
                              <div className="flex-1 h-1 sm:h-1.5 bg-black/5 overflow-hidden">
                                <div
                                  className="h-full transition-all duration-500"
                                  style={{
                                    width: `${Math.min((stat.value / 255) * 100, 100)}%`,
                                    backgroundColor: stat.value >= 100 ? '#f59e0b' : stat.value >= 70 ? '#22c55e' : typeColor,
                                  }}
                                />
                              </div>
                              <span className="font-mono text-[8px] sm:text-[9px] text-charcoal/40 w-4 sm:w-5 font-bold flex-shrink-0 tabular-nums">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-2">
                        <Link
                          href={`/pokemon/${pokemon.name}`}
                          className="block w-full text-center font-mono font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 border border-black/10 bg-black/[0.02] hover:bg-indigo hover:text-white hover:border-indigo transition-all duration-200"
                        >
                          VIEW DETAILS →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* If team is empty and not loading, show nothing — auto-generate handles the initial load */}
        </div>

        {/* Card Showcase Section - only on main generator */}
        {!hideGenericContent && <CardShowcase />}

        {/* SEO Content Section - only on main generator */}
        {!hideGenericContent && <SeoContent />}

        {/* FAQ Section - only on main generator */}
        {!hideGenericContent && <section id="faq" className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-6 md:p-12 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">HELP DESK</span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-[0.9] mb-8 uppercase">
            FREQUENTLY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
              ASKED
            </span>
          </h2>
          <div className="space-y-0">
            {/* FAQ Item 1 */}
            <div>
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  How do I generate a random Pokemon team?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Click the &apos;GENERATE TEAM&apos; button on the homepage. You can customize your team by adjusting filters for team size, region, type, rarity, evolution stage, and more before generating.
                </p>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  What is a Nuzlocke challenge?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  A Nuzlocke is a self-imposed set of hardcore Pokemon rules: if a Pokemon faints, it&apos;s considered &apos;dead&apos; and must be released or boxed permanently, and you can only catch the first Pokemon encountered on each route. Our generator helps you prepare teams for these challenge runs.
                </p>
              </div>
            </div>
            {/* FAQ Item 3 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I exclude Legendary Pokemon?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. Use the &apos;Rarity&apos; filter to exclude Legendary Pokemon, Mythical Pokemon, Ultra Beasts, and Paradox Pokemon. This ensures you only get standard Pokemon for balanced challenge runs.
                </p>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Is this updated for Pokemon Scarlet and Violet?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. Our database includes all 1025 Pokemon through Generation 9, including Pokemon Scarlet and Violet base game and DLC (The Teal Mask and The Indigo Disk). We update within 48 hours of new releases.
                </p>
              </div>
            </div>
            {/* FAQ Item 5 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  How do I filter by region?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Use the &apos;Region&apos; dropdown menu to select from Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Hisui, or Paldea. You can select multiple regions or leave it as &apos;All&apos; for Pokemon from every generation.
                </p>
              </div>
            </div>
            {/* FAQ Item 6 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I generate a monotype team?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. Select a single type from the &apos;Type&apos; filter (Fire, Water, Grass, Electric, etc.) to generate a team containing only Pokemon of that type. Perfect for monotype challenge runs.
                </p>
              </div>
            </div>
            {/* FAQ Item 7 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Is this tool free?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes, 100% free with no ads, no signup required, and no hidden costs. We built this tool for the Pokemon community and it will always remain free.
                </p>
              </div>
            </div>
            {/* FAQ Item 8 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Does it work on mobile devices?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. The Random Pokemon Generator is fully responsive and works perfectly on phones, tablets, and desktop computers. All filters and features are optimized for mobile use.
                </p>
              </div>
            </div>
            {/* FAQ Item 9 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I save my generated team?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Use the &apos;Share&apos; button on any Pokemon card to get a permanent link to that Pokemon&apos;s details page. You can bookmark the page or take screenshots of your generated team.
                </p>
              </div>
            </div>
            {/* FAQ Item 10 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  What&apos;s the difference between this and other Pokemon generators?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Our generator includes all 1025 Pokemon (most complete database), advanced filters for Nuzlocke-specific needs, evolution stage controls, gender/nature filters, instant generation speed, and a clean interface with no ads or bloat.
                </p>
              </div>
            </div>
            {/* FAQ Item 11 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I use this for Pokemon ROM hacks?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. The generator is perfect for randomizer playthroughs, ROM hack team planning, and simulating encounter tables. Many ROM hackers use it to pre-plan teams before starting their playthrough.
                </p>
              </div>
            </div>
            {/* FAQ Item 12 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  How often is the Pokemon database updated?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  We update the database within 48 hours of any new Pokemon release, DLC expansion, or official announcement. Our data comes from PokeAPI, which is continuously maintained by the community.
                </p>
              </div>
            </div>
            {/* FAQ Item 13 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I generate starter Pokemon only?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. Set team size to 3, select &apos;Unevolved&apos; in the evolution stage filter, and exclude legendary Pokemon. This simulates a starter trio selection similar to beginning a Pokemon game.
                </p>
              </div>
            </div>
            {/* FAQ Item 14 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  What is a Soul Link challenge?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  A Soul Link is a challenge where two players run simultaneous Nuzlocke runs with linked Pokemon pairs. If one player&apos;s Pokemon faints, both players must release their linked pair. Our generator helps create balanced paired teams.
                </p>
              </div>
            </div>
            {/* FAQ Item 15 */}
            <div className="mt-4">
              <div className="bg-black text-white p-4 slasher">
                <h3 className="font-sans font-bold text-lg md:text-xl">
                  Can I filter by evolution stage?
                </h3>
              </div>
              <div className="border-2 border-black border-t-0 p-4 bg-white">
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Yes. Use the &apos;Stage&apos; filter to choose &apos;Unevolved&apos; (basic forms), &apos;Evolved Once&apos; (middle evolutions), or &apos;Evolved Twice&apos; (final evolutions). You can also filter by &apos;Fully Evolved&apos; status for competitive team building.
                </p>
              </div>
            </div>
          </div>
        </section>}
      </div>

      {/* Share Modal */}
      {sharePokemon && (
        <ShareModal
          pokemon={sharePokemon}
          onClose={() => setSharePokemon(null)}
        />
      )}
    </div>
  );
}
