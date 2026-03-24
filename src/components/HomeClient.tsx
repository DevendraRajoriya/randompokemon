"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Zap, ChevronDown, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TeamGridSkeleton } from "@/components/SkeletonLoader";
import SavedTeams from "@/components/SavedTeams";
import InstallPWA from "@/components/InstallPWA";
import { matchesEvolutionStage, matchesFullyEvolved, matchesGender } from "@/data/evolutionData";

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
    144, 145, 146, 243, 244, 245, 377, 378, 379, 380, 381,
    480, 481, 482, 488, 638, 639, 640, 641, 642, 645,
    772, 773, 785, 786, 787, 788, 891, 892, 896, 897, 898,
    905, 1001, 1002, 1003, 1004, 1014, 1015, 1016,
]);

const LEGENDARY_IDS = new Set([
    150, 249, 250, 382, 383, 384, 483, 484, 487,
    643, 644, 646, 716, 717, 718, 789, 790, 791, 792, 800,
    888, 889, 890, 1007, 1008, 1024,
]);

const MYTHICAL_IDS = new Set([
    151, 251, 385, 386, 489, 490, 491, 492, 493,
    494, 647, 648, 649, 719, 720, 721,
    801, 802, 807, 808, 809, 893, 1025,
]);

const ULTRA_BEAST_IDS = new Set([
    793, 794, 795, 796, 797, 798, 799, 803, 804, 805, 806,
]);

const PARADOX_IDS = new Set([
    984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995,
    1005, 1006, 1009, 1010,
]);

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
                className="min-h-[48px] h-14 w-full px-4 md:px-5 bg-white hover:bg-gray-100 border-2 border-black font-mono text-sm md:text-base text-black whitespace-nowrap flex items-center gap-2 transition-all btn-hover-lift group"
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
                <label className="flex items-center gap-3 cursor-pointer mb-2 pb-2 border-b border-charcoal min-h-[44px]">
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={handleSelectAll}
                        className="w-5 h-5 cursor-pointer flex-shrink-0"
                    />
                    <span className="font-mono text-sm md:text-base text-black font-semibold">
                        {isAllSelected ? "Deselect All" : "Select All"}
                    </span>
                </label>
            )}
            <div className="grid grid-cols-1 gap-1">
                {options.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-blue-50 p-2 rounded transition-all min-h-[44px]">
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
                            className="w-5 h-5 cursor-pointer flex-shrink-0"
                        />
                        <span className="font-mono text-sm md:text-base text-black">{option}</span>
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
                    className="bg-marigold text-black px-3 md:px-4 py-1.5 text-xs md:text-sm font-mono flex items-center gap-2 slasher border-2 border-black filter-chip min-h-[36px]"
                >
                    <span>{chip.label}</span>
                    <button
                        onClick={() => onRemoveFilter(chip.key, chip.value)}
                        className="text-black hover:text-charcoal transition-all min-w-[24px] min-h-[24px] flex items-center justify-center"
                        aria-label={`Remove ${chip.label}`}
                    >
                        <X size={14} className="md:w-4 md:h-4" />
                    </button>
                </div>
            ))}
        </div>
    );
};

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

async function fetchPokemonById(id: number): Promise<Pokemon> {
    const cached = pokemonCache.get(id);
    if (cached) return cached;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error(`API returned ${res.status} for Pokemon ${id}`);
    const raw = await res.json();
    const stripped = stripPokemonData(raw);
    pokemonCache.set(id, stripped);
    return stripped;
}

export default function HomeClient() {
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
        legendaryStatus: [],
        evolutionStage: [],
        fullyEvolved: [],
        displayFormat: "both",
        genders: [],
        natures: [],
        forms: [],
        regions: [],
    });
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [typeCache, setTypeCache] = useState<Record<string, Set<number>>>({});
    const [natureSearch, setNatureSearch] = useState("");
    const [showAdvanced, setShowAdvanced] = useState(false);

    const hasGeneratedInitialTeam = useRef(false);
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
            hasFetchedPokemonList.current = false; // Allow retry on error
        }
    }, [allPokemon.length]);

    // Auto-generate team on initial page load (incremental loading)
    // Deferred to not block initial render/hydration
    useEffect(() => {
        if (!hasGeneratedInitialTeam.current) {
            hasGeneratedInitialTeam.current = true;

            const autoGenerateTeam = async () => {
                setLoading(true);
                setTerminalStatus("FETCHING...");

                try {
                    const uniqueIds = new Set<number>();
                    while (uniqueIds.size < 6) {
                        uniqueIds.add(Math.floor(Math.random() * 1025) + 1);
                    }

                    // Incremental: show each card as it arrives
                    const ids = Array.from(uniqueIds);
                    ids.forEach(id => {
                        fetchPokemonById(id).then(pokemon => {
                            setTeam(prev => {
                                if (prev.find(p => p.id === pokemon.id)) return prev;
                                return [...prev, pokemon];
                            });
                        }).catch(err => console.error(`Failed to fetch Pokemon ${id}:`, err));
                    });

                    // Wait for all to complete for status update
                    await Promise.all(ids.map(id => fetchPokemonById(id)));
                    setTerminalStatus("SUCCESS");
                } catch (error) {
                    console.error("Error auto-generating team:", error);
                    setTerminalStatus("ERROR");
                } finally {
                    setLoading(false);
                }
            };

            // Defer until after initial paint to not block hydration
            if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
                (window as Window).requestIdleCallback(() => autoGenerateTeam(), { timeout: 2000 });
            } else {
                setTimeout(autoGenerateTeam, 100);
            }
        }
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
                for (let i = start; i <= end; i++) validIds.add(i);
            }
        } else {
            for (let i = 1; i <= 1025; i++) validIds.add(i);
        }

        if (filters.types.length > 0) {
            const typeIdSets = await Promise.all(filters.types.map((type) => getTypeIds(type)));
            const allTypeIds = typeIdSets.reduce((acc, set) => new Set([...acc, ...set]), new Set<number>());
            validIds = new Set([...validIds].filter((id) => allTypeIds.has(id)));
        }

        if (filters.legendaryStatus.length > 0) {
            const matchingIds = new Set<number>();
            if (filters.legendaryStatus.includes("Sub-Legendary")) SUB_LEGENDARY_IDS.forEach((id) => matchingIds.add(id));
            if (filters.legendaryStatus.includes("Legendary")) LEGENDARY_IDS.forEach((id) => matchingIds.add(id));
            if (filters.legendaryStatus.includes("Mythical")) MYTHICAL_IDS.forEach((id) => matchingIds.add(id));
            if (filters.legendaryStatus.includes("Paradox")) PARADOX_IDS.forEach((id) => matchingIds.add(id));
            if (filters.legendaryStatus.includes("Ultra Beast")) ULTRA_BEAST_IDS.forEach((id) => matchingIds.add(id));
            validIds = new Set([...validIds].filter((id) => matchingIds.has(id)));
        }

        // Filter by evolution stage (uses static data - instant)
        if (filters.evolutionStage.length > 0) {
            validIds = new Set([...validIds].filter((id) => matchesEvolutionStage(id, filters.evolutionStage)));
        }

        // Filter by fully evolved status (uses static data - instant)
        if (filters.fullyEvolved.length > 0) {
            validIds = new Set([...validIds].filter((id) => matchesFullyEvolved(id, filters.fullyEvolved)));
        }

        // Filter by gender (uses static data - instant)
        if (filters.genders.length > 0) {
            validIds = new Set([...validIds].filter((id) => matchesGender(id, filters.genders)));
        }

        return Array.from(validIds);
    };

    const getTypeIds = async (typeName: string): Promise<Set<number>> => {
        if (typeCache[typeName]) return typeCache[typeName];

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
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
            setTypeCache((prev) => ({ ...prev, [typeName]: ids }));
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

            // Incremental: show each card as it arrives (cached ones are instant)
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

            // Wait for all to finish for status update
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
            normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
            grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
            ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
            rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
            steel: "#B8B8D0", fairy: "#EE99AC",
        };
        return typeColors[type] || "#68A090";
    };

    const resetFilters = () => {
        setFilters({
            teamSize: 6, types: [], legendaryStatus: [], evolutionStage: [],
            fullyEvolved: [], displayFormat: "both", genders: [], natures: [],
            forms: [], regions: [],
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
                setFilters({ ...filters, [key]: arr.filter((item) => item !== value) });
            } else {
                setFilters({ ...filters, [key]: [] });
            }
        }
    };

    const hasActiveFilters = useMemo(() => {
        return (
            filters.teamSize !== 6 || filters.types.length > 0 || filters.legendaryStatus.length > 0 ||
            filters.evolutionStage.length > 0 || filters.fullyEvolved.length > 0 ||
            filters.displayFormat !== "both" || filters.genders.length > 0 ||
            filters.natures.length > 0 || filters.forms.length > 0 || filters.regions.length > 0
        );
    }, [filters]);

    const filteredNatures = useMemo(() => {
        return NATURES.filter((nature) => nature.toLowerCase().includes(natureSearch.toLowerCase()));
    }, [natureSearch]);

    const getFilterDisplayValue = (key: keyof FilterState): string => {
        switch (key) {
            case "teamSize": return String(filters.teamSize);
            case "regions":
                return filters.regions.length === 0 ? "All" : filters.regions.length === 1 ? filters.regions[0] : `${filters.regions.length}`;
            case "types":
                return filters.types.length === 0 ? "Any" : filters.types.length === 1
                    ? filters.types[0].charAt(0).toUpperCase() + filters.types[0].slice(1) : `${filters.types.length}`;
            case "legendaryStatus":
                return filters.legendaryStatus.length === 0 ? "All" : filters.legendaryStatus.length === 1
                    ? filters.legendaryStatus[0] : `${filters.legendaryStatus.length}`;
            case "evolutionStage":
                return filters.evolutionStage.length === 0 ? "All" : filters.evolutionStage.length === 1
                    ? filters.evolutionStage[0] : `${filters.evolutionStage.length}`;
            case "fullyEvolved":
                return filters.fullyEvolved.length === 0 ? "All" : filters.fullyEvolved.length === 1
                    ? filters.fullyEvolved[0] : `${filters.fullyEvolved.length}`;
            case "genders":
                return filters.genders.length === 0 ? "All" : filters.genders.length === 1
                    ? filters.genders[0] : `${filters.genders.length}`;
            case "natures":
                return filters.natures.length === 0 ? "All" : filters.natures.length === 1
                    ? filters.natures[0] : `${filters.natures.length}`;
            case "forms":
                return filters.forms.length === 0 ? "All" : filters.forms.length === 1
                    ? filters.forms[0] : `${filters.forms.length}`;
            case "displayFormat":
                return filters.displayFormat === "both" ? "Both" : filters.displayFormat === "name-only" ? "Name" : "Sprite";
            default: return "All";
        }
    };

    return (
        <>
            {/* Blur Overlay when search is active */}
            {showSuggestions && suggestions.length > 0 && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[55]"
                    onClick={() => setShowSuggestions(false)}
                />
            )}

            {/* Status Box */}
            <div className="text-center mb-4">
                <div className={`inline-block bg-black px-4 md:px-6 py-2 md:py-3 slasher transition-all ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px]' : ''}`}>
                    <p className="font-mono text-xs md:text-sm font-semibold text-white">
                        STATUS: {terminalStatus}
                    </p>
                </div>
            </div>

            {/* Direct Search Form with Autocomplete */}
            <div ref={searchRef} className="w-full max-w-md mx-auto relative mb-6 md:mb-8 z-[70] px-2">
                <form onSubmit={handleSearch} className="flex w-full">
                    <div className="relative w-full">
                        <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-black/40 w-4 h-4 md:w-5 md:h-5 z-10" />
                        <input
                            type="text"
                            placeholder="SEARCH_DATABASE..."
                            value={searchQuery}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            onFocus={() => { fetchAllPokemonIfNeeded(); suggestions.length > 0 && setShowSuggestions(true); }}
                            className="w-full bg-white border-2 border-black py-4 md:py-5 pl-12 md:pl-14 pr-4 md:pr-5 font-mono text-sm md:text-base text-black placeholder:text-gray-500 focus:outline-none focus:bg-blue-50 transition-all rounded-none min-h-[48px]"
                            aria-label="Search Pokemon database"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 md:px-8 font-mono text-sm md:text-base font-bold hover:bg-charcoal transition-all btn-hover-lift border-2 border-black border-l-0 min-h-[48px]"
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
                                className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 font-mono text-sm md:text-base text-black hover:bg-blue-100 transition-all border-b border-black/10 last:border-b-0 min-h-[48px]"
                            >
                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-blue-50">
                                    <Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                        alt={`${pokemon.name} Pokemon sprite`}
                                        fill
                                        sizes="(max-width: 768px) 40px, 48px"
                                        className="object-contain"
                                        loading="lazy"
                                        unoptimized
                                    />
                                </div>
                                <span className="uppercase font-semibold truncate">{pokemon.name}</span>
                                <span className="text-gray-500 text-sm ml-auto flex-shrink-0">#{String(pokemon.id).padStart(4, "0")}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Rest of page content */}
            <div className={`transition-all ${showSuggestions && suggestions.length > 0 ? 'opacity-30 blur-[2px] pointer-events-none' : ''}`}>
                {/* CONTROL PANEL GRID */}
                <div className="mb-6">
                    <div className="bg-white border-2 border-black p-3 md:p-4 relative z-50 overflow-visible">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 overflow-visible">

                            {/* 1. TEAM */}
                            <CompactFilterDropdown label="Team" value={filters.teamSize.toString()} isOpen={openDropdown === "teamSize"} onToggle={() => toggleDropdown("teamSize")} minWidth="min-w-[150px]">
                                <div className="space-y-1">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <button key={num} onClick={() => { setFilters({ ...filters, teamSize: num }); setOpenDropdown(null); }}
                                            className={`w-full text-left px-3 py-2 font-mono text-sm md:text-base hover:bg-blue-50 transition-all min-h-[44px] ${filters.teamSize === num ? 'bg-blue-100 font-bold' : ''}`}>
                                            {num} Pokemon
                                        </button>
                                    ))}
                                </div>
                            </CompactFilterDropdown>

                            {/* 2. REGION */}
                            <CompactFilterDropdown label="Region" value={getFilterDisplayValue("regions")} isOpen={openDropdown === "regions"} onToggle={() => toggleDropdown("regions")} minWidth="min-w-[220px]">
                                <MultiSelectCheckboxes options={REGIONS.map((r) => r.name)} selected={filters.regions} onChange={(regions) => setFilters({ ...filters, regions })} showSelectAll={true} />
                            </CompactFilterDropdown>

                            {/* 3. TYPE */}
                            <CompactFilterDropdown label="Type" value={getFilterDisplayValue("types")} isOpen={openDropdown === "types"} onToggle={() => toggleDropdown("types")} minWidth="min-w-[200px]">
                                <MultiSelectCheckboxes options={POKEMON_TYPES.map((t) => t.charAt(0).toUpperCase() + t.slice(1))} selected={filters.types.map((t) => t.charAt(0).toUpperCase() + t.slice(1))} onChange={(types) => setFilters({ ...filters, types: types.map((t) => t.toLowerCase()) })} showSelectAll={true} />
                            </CompactFilterDropdown>

                            {/* 4. RARITY */}
                            <CompactFilterDropdown label="Rarity" value={getFilterDisplayValue("legendaryStatus")} isOpen={openDropdown === "legendary"} onToggle={() => toggleDropdown("legendary")} minWidth="min-w-[200px]">
                                <MultiSelectCheckboxes options={LEGENDARY_OPTIONS} selected={filters.legendaryStatus} onChange={(legendaryStatus) => setFilters({ ...filters, legendaryStatus })} showSelectAll={true} />
                            </CompactFilterDropdown>

                            {/* MOBILE TOGGLE BUTTON */}
                            <button type="button" onClick={() => setShowAdvanced(!showAdvanced)}
                                className="col-span-2 md:hidden min-h-[48px] h-14 border-2 border-black bg-marigold text-black font-mono uppercase text-sm font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2">
                                <span>{showAdvanced ? '[-] CLOSE FILTERS' : '[+] ADVANCED FILTERS'}</span>
                            </button>

                            {/* 5-10: ADVANCED FILTERS */}
                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Stage" value={getFilterDisplayValue("evolutionStage")} isOpen={openDropdown === "evolution"} onToggle={() => toggleDropdown("evolution")} minWidth="min-w-[180px]">
                                    <MultiSelectCheckboxes options={EVOLUTION_STAGES} selected={filters.evolutionStage} onChange={(evolutionStage) => setFilters({ ...filters, evolutionStage })} showSelectAll={true} />
                                </CompactFilterDropdown>
                            </div>

                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Evolved" value={getFilterDisplayValue("fullyEvolved")} isOpen={openDropdown === "fullyEvolved"} onToggle={() => toggleDropdown("fullyEvolved")} minWidth="min-w-[180px]">
                                    <MultiSelectCheckboxes options={FULLY_EVOLVED_OPTIONS} selected={filters.fullyEvolved} onChange={(fullyEvolved) => setFilters({ ...filters, fullyEvolved })} showSelectAll={false} />
                                </CompactFilterDropdown>
                            </div>

                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Gender" value={getFilterDisplayValue("genders")} isOpen={openDropdown === "gender"} onToggle={() => toggleDropdown("gender")} minWidth="min-w-[160px]">
                                    <MultiSelectCheckboxes options={GENDERS} selected={filters.genders} onChange={(genders) => setFilters({ ...filters, genders })} showSelectAll={true} />
                                </CompactFilterDropdown>
                            </div>

                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Nature" value={getFilterDisplayValue("natures")} isOpen={openDropdown === "nature"} onToggle={() => toggleDropdown("nature")} minWidth="min-w-[200px]">
                                    <div className="space-y-2">
                                        <div className="relative">
                                            <Search size={14} className="absolute left-2 top-2.5 text-charcoal" />
                                            <input type="text" placeholder="Search..." value={natureSearch} onChange={(e) => setNatureSearch(e.target.value)}
                                                className="w-full bg-cream border-2 border-black px-2 py-2 pl-8 font-mono text-xs text-black placeholder-charcoal min-h-[40px]" />
                                        </div>
                                        <MultiSelectCheckboxes options={filteredNatures} selected={filters.natures} onChange={(natures) => setFilters({ ...filters, natures })} showSelectAll={true} />
                                    </div>
                                </CompactFilterDropdown>
                            </div>

                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Forms" value={getFilterDisplayValue("forms")} isOpen={openDropdown === "forms"} onToggle={() => toggleDropdown("forms")} minWidth="min-w-[180px]">
                                    <MultiSelectCheckboxes options={FORM_OPTIONS} selected={filters.forms} onChange={(forms) => setFilters({ ...filters, forms })} showSelectAll={true} />
                                </CompactFilterDropdown>
                            </div>

                            <div className={`${showAdvanced ? '' : 'hidden md:block'}`}>
                                <CompactFilterDropdown label="Display" value={getFilterDisplayValue("displayFormat")} isOpen={openDropdown === "display"} onToggle={() => toggleDropdown("display")} minWidth="min-w-[180px]">
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
                                <button onClick={resetFilters}
                                    className="hidden md:flex h-12 px-4 bg-marigold text-black hover:bg-marigold-hover font-mono text-xs md:text-sm font-semibold border-2 border-black transition-smooth btn-hover-lift items-center justify-center min-h-[44px]"
                                    aria-label="Reset all filters">
                                    RESET
                                </button>
                            )}
                        </div>

                        {/* RESET BUTTON - Mobile */}
                        {hasActiveFilters && (
                            <button onClick={resetFilters}
                                className="md:hidden w-full mt-2 h-12 bg-marigold text-black hover:bg-marigold-hover font-mono text-xs font-semibold border-2 border-black transition-smooth btn-hover-lift flex items-center justify-center min-h-[48px]"
                                aria-label="Reset all filters">
                                RESET FILTERS
                            </button>
                        )}
                    </div>
                </div>

                {/* Active filter chips */}
                {hasActiveFilters && (
                    <div className="mb-4">
                        <ActiveFilterChips filters={filters} onRemoveFilter={removeFilter} />
                    </div>
                )}

                {/* Generate Button and Save/Load Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mb-8 md:mb-12">
                    <button
                        onClick={generateTeam}
                        disabled={loading}
                        className="w-full md:w-auto px-10 py-5 font-grotesk font-bold text-xl uppercase tracking-wider bg-[#4ADE80] hover:bg-[#22c55e] text-black border-2 border-black slasher shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#000] btn-hover-lift min-h-[56px]"
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
                    <SavedTeams currentTeam={team} onLoadTeam={(loadedTeam) => { setTeam(loadedTeam); setTerminalStatus("LOADED"); }} />
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="py-8">
                        <TeamGridSkeleton count={filters.teamSize} />
                    </div>
                )}

                {/* Pokemon Grid */}
                {!loading && team.length > 0 && (
                    <div ref={teamGridRef} data-team-grid className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
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
                                <Link
                                    key={pokemon.id}
                                    href={`/pokemon/${pokemon.name}`}
                                    className="group relative bg-white border-2 md:border-4 border-black slasher overflow-hidden hover:shadow-2xl transition-all duration-300 pokemon-card block"
                                >
                                    {/* Type-colored accent bar at top */}
                                    <div className="h-1.5 sm:h-2" style={{ background: pokemon.types.length > 1 ? `linear-gradient(90deg, ${typeColor} 50%, ${getTypeColor(pokemon.types[1].type.name)} 50%)` : typeColor }} />

                                    <div className="p-2.5 sm:p-4 md:p-5">
                                        {/* Top Row: ID + BST */}
                                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                            <span className="font-mono text-[10px] sm:text-xs text-charcoal/60 font-semibold">
                                                #{String(pokemon.id).padStart(4, "0")}
                                            </span>
                                            {pokemon.stats && (
                                                <span className="font-mono text-[9px] sm:text-[10px] bg-black/5 text-charcoal/70 px-1.5 py-0.5 font-bold">
                                                    BST {bst}
                                                </span>
                                            )}
                                        </div>

                                        {/* Pokemon Image */}
                                        {(filters.displayFormat === "both" || filters.displayFormat === "sprite-only") && (() => {
                                            const imgSrc = pokemon.sprites.other["official-artwork"].front_default
                                                || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                                            const isFirstFour = team.indexOf(pokemon) < 4;
                                            return (
                                                <div className="relative w-full mb-2 sm:mb-3" style={{ paddingBottom: '75%' }}>
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
                                                </div>
                                            );
                                        })()}

                                        {/* Name */}
                                        {(filters.displayFormat === "both" || filters.displayFormat === "name-only") && (
                                            <h2 className="font-grotesk font-bold text-sm sm:text-base md:text-xl text-black mb-1.5 sm:mb-2 uppercase truncate group-hover:text-indigo transition-colors">
                                                {pokemon.name}
                                            </h2>
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

                                        {/* View Button */}
                                        <div
                                            className="w-full text-center font-mono font-bold text-[10px] sm:text-xs py-1.5 sm:py-2 border border-black/10 bg-black/[0.02] group-hover:bg-indigo group-hover:text-white group-hover:border-indigo transition-all duration-200"
                                        >
                                            VIEW DETAILS →
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}

                {/* Empty State */}
                {!loading && team.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-block border-4 border-charcoal p-8 slasher">
                            <p className="font-mono text-charcoal text-lg">
                                Loading your team...
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* PWA Install Prompt */}
            <InstallPWA />
        </>
    );
}
