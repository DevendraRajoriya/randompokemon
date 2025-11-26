"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Loader2, Zap, ExternalLink, Database, ChevronDown, X, Search, Filter } from "lucide-react";
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
  { name: "Hisui", range: [387, 905] },
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

interface CompactFilterDropdownProps {
  label: string;
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  minWidth?: string;
}

const CompactFilterDropdown = ({
  label,
  value,
  isOpen,
  onToggle,
  children,
  minWidth = "min-w-[200px]",
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
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className="h-10 md:h-12 px-3 md:px-4 bg-cream hover:bg-charcoal hover:text-cream border-2 border-black font-mono text-xs md:text-sm text-black whitespace-nowrap flex items-center gap-2 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-semibold">{label}:</span>
        <span className="font-normal truncate max-w-[60px] md:max-w-[100px]">{value}</span>
        <ChevronDown
          size={14}
          className={`transform transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 bg-white border-2 border-black ${minWidth} max-w-[90vw] max-h-[60vh] overflow-y-auto z-50 slasher`}
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
        <label className="flex items-center gap-2 cursor-pointer mb-2 pb-2 border-b border-charcoal">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="font-mono text-xs md:text-sm text-black">
            {isAllSelected ? "Deselect All" : "Select All"}
          </span>
        </label>
      )}
      <div className="grid grid-cols-1 gap-1.5">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-cream p-1">
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
      {chips.map((chip, index) => (
        <div
          key={index}
          className="bg-black text-cream px-2 md:px-3 py-1 text-[10px] md:text-xs font-mono flex items-center gap-1.5 slasher border border-black"
        >
          <span>{chip.label}</span>
          <button
            onClick={() => onRemoveFilter(chip.key, chip.value)}
            className="hover:text-marigold transition-colors"
            aria-label={`Remove ${chip.label}`}
          >
            <X size={12} className="md:w-3.5 md:h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [terminalStatus, setTerminalStatus] = useState("IDLE");
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

  const toggleDropdown = useCallback((dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setOpenDropdown(null);
  }, []);

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
      const isLegendary = filters.legendaryStatus.includes("Legendary");
      const isNonLegendary = !isLegendary;

      if (isLegendary) {
        validIds = new Set([...validIds].filter((id) => LEGENDARY_IDS.has(id)));
      } else if (isNonLegendary) {
        validIds = new Set([...validIds].filter((id) => !LEGENDARY_IDS.has(id)));
      }
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

        {/* Compact Filter Toolbar */}
        <div className="mb-6">
          <div className="bg-white border-2 border-black p-3 md:p-4 slasher">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {/* Team Size Filter */}
              <CompactFilterDropdown
                label="Team"
                value={getFilterDisplayValue("teamSize")}
                isOpen={openDropdown === "teamSize"}
                onToggle={() => toggleDropdown("teamSize")}
                minWidth="min-w-[180px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={filters.teamSize}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          teamSize: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-2 bg-cream border-2 border-black cursor-pointer"
                    />
                    <span className="font-mono text-sm text-black font-semibold bg-cream border border-black px-2 py-1 w-10 text-center">
                      {filters.teamSize}
                    </span>
                  </div>
                  <p className="text-[10px] md:text-xs text-charcoal font-mono">1-6 Pokémon</p>
                </div>
              </CompactFilterDropdown>

              {/* Region Filter */}
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

              {/* Type Filter */}
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

              {/* Legendary Filter */}
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

              {/* Evolution Stage Filter */}
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

              {/* Fully Evolved Filter */}
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

              {/* Gender Filter */}
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

              {/* Nature Filter */}
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
                      className="w-full bg-cream border-2 border-black px-2 py-2 pl-8 font-mono text-xs text-black placeholder-charcoal"
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

              {/* Forms Filter */}
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

              {/* Display Format Filter */}
              <CompactFilterDropdown
                label="Display"
                value={getFilterDisplayValue("displayFormat")}
                isOpen={openDropdown === "display"}
                onToggle={() => toggleDropdown("display")}
                minWidth="min-w-[180px]"
              >
                <div className="space-y-1.5">
                  {DISPLAY_FORMATS.map((format) => (
                    <label
                      key={format}
                      className="flex items-center gap-2 cursor-pointer hover:bg-cream p-1"
                    >
                      <input
                        type="radio"
                        name="displayFormat"
                        checked={
                          filters.displayFormat ===
                          (format === "Name Only"
                            ? "name-only"
                            : format === "Sprite Only"
                            ? "sprite-only"
                            : "both")
                        }
                        onChange={() => {
                          const formatValue =
                            format === "Name Only"
                              ? "name-only"
                              : format === "Sprite Only"
                              ? "sprite-only"
                              : "both";
                          setFilters({
                            ...filters,
                            displayFormat: formatValue,
                          });
                          closeAllDropdowns();
                        }}
                        className="w-4 h-4 cursor-pointer flex-shrink-0"
                      />
                      <span className="font-mono text-xs md:text-sm text-black">{format}</span>
                    </label>
                  ))}
                </div>
              </CompactFilterDropdown>

              {/* Reset Button */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="h-10 md:h-12 px-3 md:px-4 bg-black text-cream hover:bg-charcoal font-mono text-xs md:text-sm border-2 border-black transition-colors duration-200 ml-auto"
                  aria-label="Reset all filters"
                >
                  RESET
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Filters Chips */}
        {hasActiveFilters && (
          <div className="mb-6">
            <ActiveFilterChips filters={filters} onRemoveFilter={removeFilter} />
          </div>
        )}

        {/* Generate Button */}
        <div className="flex justify-center mb-8 md:mb-12">
          <button
            onClick={generateTeam}
            disabled={loading}
            className="w-full md:w-auto bg-marigold hover:bg-marigold-hover text-black font-grotesk font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 slasher transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-black"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <Loader2 className="animate-spin" size={20} />
                GENERATING...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <Zap size={20} />
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
                {(filters.displayFormat === "both" ||
                  filters.displayFormat === "sprite-only") && (
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
                )}

                {/* Name */}
                {(filters.displayFormat === "both" ||
                  filters.displayFormat === "name-only") && (
                  <h2 className="font-grotesk font-bold text-2xl text-black mb-3 uppercase">
                    {pokemon.name}
                  </h2>
                )}

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
