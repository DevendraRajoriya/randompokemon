import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PokemonDetailClient from "./PokemonDetailClient";
import { PokemonCardButton } from "./PokemonDetailClient";
import LearnsetTabs, { type GenLearnset } from "./LearnsetTabs";
import { getTier, generateCompetitiveBlurb, TIER_COLORS, TIER_DESCRIPTIONS } from "./tierData";

// ============ TYPES ============
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

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

interface RawMoveEntry {
  move: { name: string };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: { name: string };
    version_group: { name: string };
  }[];
}

// Raw shape returned by the PokéAPI /pokemon endpoint (before enrichment)
interface RawPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  species: { url: string }; // URL pointing to the canonical species endpoint
  sprites: {
    front_default?: string;
    other?: {
      "official-artwork"?: {
        front_default?: string;
      };
      home?: {
        front_default?: string;
      };
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  moves: RawMoveEntry[];
}

interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
}

interface Genera {
  genus: string;
  language: {
    name: string;
  };
}

interface EvolutionDetail {
  trigger: { name: string };
  min_level: number | null;
  item: { name: string } | null;
  min_happiness: number | null;
  time_of_day: string;
}

interface EvolutionChainLink {
  species: { name: string; url: string };
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChainLink[];
}

interface EvolutionChain {
  chain: EvolutionChainLink;
}

interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  genera: Genera[];
  generation: {
    name: string;
  };
  habitat: {
    name: string;
  } | null;
  evolution_chain: {
    url: string;
  };
  capture_rate: number;
  base_happiness: number;
  growth_rate: {
    name: string;
  };
  egg_groups: { name: string }[];
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
}

export interface MoveEntry {
  name: string;
  level: number;
}

export interface PokemonWithSpecies extends Omit<RawPokemon, 'species'> {
  species: {
    flavorText: string;
    genus: string;
    generation: string;
    generationNumber: number;
    habitat: string | null;
    evolutionChain: { name: string; id: number; method: string }[];
    captureRate: number;
    baseHappiness: number;
    growthRate: string;
    eggGroups: string[];
    genderRate: number;
    isLegendary: boolean;
    isMythical: boolean;
  };
  learnset: {
    byGen: Record<number, GenLearnset>;
    availableGens: number[];
    latestGen: number;
  };
}

// ============ CONSTANTS ============
const siteUrl = "https://www.randompokemon.co";

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
  grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
  ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
  rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
  steel: "#B8B8D0", fairy: "#EE99AC",
};

const TYPE_LIGHT_TEXT = new Set(["electric", "normal", "ground", "fairy", "ice", "steel"]);

// Gen 6+ (Scarlet/Violet) defensive type chart
// Each entry: what attacking types deal 2x, 0.5x, or 0x to this defending type.
const TYPE_CHART: Record<string, { weak: string[]; resist: string[]; immune: string[] }> = {
  normal:   { weak: ["fighting"],                                                             resist: [],                                                                               immune: ["ghost"] },
  fire:     { weak: ["water","ground","rock"],                                               resist: ["fire","grass","ice","bug","steel","fairy"],                                     immune: [] },
  water:    { weak: ["electric","grass"],                                                    resist: ["fire","water","ice","steel"],                                                   immune: [] },
  electric: { weak: ["ground"],                                                              resist: ["electric","flying","steel"],                                                    immune: [] },
  grass:    { weak: ["fire","ice","poison","flying","bug"],                                 resist: ["water","electric","grass","ground"],                                             immune: [] },
  ice:      { weak: ["fire","fighting","rock","steel"],                                     resist: ["ice"],                                                                           immune: [] },
  fighting: { weak: ["flying","psychic","fairy"],                                           resist: ["bug","rock","dark"],                                                             immune: [] },
  poison:   { weak: ["ground","psychic"],                                                   resist: ["grass","fighting","poison","bug","fairy"],                                       immune: [] },
  ground:   { weak: ["water","grass","ice"],                                                resist: ["poison","rock"],                                                                 immune: ["electric"] },
  flying:   { weak: ["electric","ice","rock"],                                              resist: ["grass","fighting","bug"],                                                        immune: ["ground"] },
  psychic:  { weak: ["bug","ghost","dark"],                                                 resist: ["fighting","psychic"],                                                            immune: [] },
  bug:      { weak: ["fire","flying","rock"],                                               resist: ["grass","fighting","ground"],                                                     immune: [] },
  rock:     { weak: ["water","grass","fighting","ground","steel"],                         resist: ["normal","fire","poison","flying"],                                               immune: [] },
  ghost:    { weak: ["ghost","dark"],                                                       resist: ["poison","bug"],                                                                  immune: ["normal","fighting"] },
  dragon:   { weak: ["ice","dragon","fairy"],                                               resist: ["fire","water","electric","grass"],                                               immune: [] },
  dark:     { weak: ["fighting","bug","fairy"],                                             resist: ["ghost","dark"],                                                                  immune: ["psychic"] },
  steel:    { weak: ["fire","fighting","ground"],                                           resist: ["normal","grass","ice","flying","psychic","bug","rock","dragon","steel","fairy"], immune: ["poison"] },
  fairy:    { weak: ["poison","steel"],                                                     resist: ["fighting","bug","dark"],                                                         immune: ["dragon"] },
};

// ============ HELPERS ============
function extractEvolutionChain(chain: EvolutionChainLink): { name: string; id: number; method: string }[] {
  const urlParts = chain.species.url.split("/");
  const id = parseInt(urlParts[urlParts.length - 2]);

  let method = "";
  if (chain.evolution_details.length > 0) {
    const detail = chain.evolution_details[0];
    if (detail.min_level) method = `Level ${detail.min_level}`;
    else if (detail.item) method = detail.item.name.replace(/-/g, " ");
    else if (detail.min_happiness) method = `Happiness ${detail.min_happiness}`;
    else if (detail.trigger?.name === "trade") method = "Trade";
    else method = detail.trigger?.name?.replace(/-/g, " ") || "";
  }

  const result = [{ name: chain.species.name, id, method }];
  for (const evolution of chain.evolves_to) {
    result.push(...extractEvolutionChain(evolution));
  }
  return result;
}

function formatStatName(name: string): string {
  const statNames: Record<string, string> = {
    "hp": "HP", "attack": "ATK", "defense": "DEF",
    "special-attack": "SP.ATK", "special-defense": "SP.DEF", "speed": "SPD",
  };
  return statNames[name] || name.toUpperCase();
}

function getStatBarColor(value: number): string {
  if (value >= 150) return "#ef4444"; // red-500 (exceptional)
  if (value >= 100) return "#f59e0b"; // amber-500
  if (value >= 80) return "#22c55e";  // green-500
  if (value >= 50) return "#6366f1";  // indigo-500
  return "#1f2937"; // gray-800
}

function getBattleRole(statName: string): string {
  const roles: Record<string, string> = {
    "hp": "bulk and endurance", "attack": "physical offense",
    "defense": "physical defense", "special-attack": "special offense",
    "special-defense": "special defense", "speed": "outspeeding opponents",
  };
  return roles[statName] || "versatile play";
}

function capitalize(str: string): string {
  return str.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// Compute final type multipliers for a Pokémon's type combination.
// Returns a map of attacking-type → final damage multiplier (0, 0.25, 0.5, 1, 2, 4).
function computeTypeEffectiveness(defTypes: string[]): Record<string, number> {
  const ALL_TYPES = ["normal","fire","water","electric","grass","ice","fighting","poison",
    "ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
  const mul: Record<string, number> = {};
  ALL_TYPES.forEach(t => (mul[t] = 1));

  for (const defType of defTypes) {
    const chart = TYPE_CHART[defType];
    if (!chart) continue;
    chart.weak.forEach(atk => { mul[atk] *= 2; });
    chart.resist.forEach(atk => { mul[atk] *= 0.5; });
    // Immunity overrides — set to 0 regardless of other type
    chart.immune.forEach(atk => { mul[atk] = 0; });
  }
  return mul;
}

// ============ DATA FETCHING ============
async function getPokemon(name: string): Promise<PokemonWithSpecies | null> {
  try {
    // Step 1: fetch the Pokémon data first so we can read its canonical species URL.
    // Fetching species by name directly fails for alternate forms (e.g. pyroar-male → 404),
    // because PokéAPI only has species entries for the base form. The species.url field
    // in the Pokémon response always points to the correct base-species endpoint.
    const pokemonRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      { next: { revalidate: 86400 } }
    );

    if (!pokemonRes.ok) return null;

    const pokemon: RawPokemon = await pokemonRes.json();

    // Step 2: use the species URL from the Pokémon data (handles all alternate forms).
    const speciesRes = await fetch(pokemon.species.url, { next: { revalidate: 86400 } });

    let speciesData: PokemonWithSpecies["species"] = {
      flavorText: "", genus: "Pokémon", generation: "Generation 1",
      generationNumber: 1, habitat: null, evolutionChain: [],
      captureRate: 45, baseHappiness: 50, growthRate: "medium",
      eggGroups: [], genderRate: -1, isLegendary: false, isMythical: false,
    };

    if (speciesRes.ok) {
      const species: PokemonSpecies = await speciesRes.json();

      const englishFlavorEntry = species.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      const flavorText = englishFlavorEntry
        ? englishFlavorEntry.flavor_text.replace(/[\n\f\r]/g, " ").replace(/\s+/g, " ").trim()
        : "";

      const englishGenus = species.genera.find((g) => g.language.name === "en");
      const genus = englishGenus ? englishGenus.genus : "Pokémon";

      const genMatch = species.generation.name.match(/generation-(\w+)/);
      const romanToNum: Record<string, number> = {
        i: 1, ii: 2, iii: 3, iv: 4, v: 5, vi: 6, vii: 7, viii: 8, ix: 9,
      };
      const genNumeral = genMatch ? genMatch[1] : "i";
      const generationNumber = romanToNum[genNumeral] || 1;
      const generation = `Generation ${generationNumber}`;

      const habitat = species.habitat ? species.habitat.name : null;

      let evolutionChain: { name: string; id: number; method: string }[] = [];
      if (species.evolution_chain?.url) {
        try {
          const evoRes = await fetch(species.evolution_chain.url, { next: { revalidate: 86400 } });
          if (evoRes.ok) {
            const evoData: EvolutionChain = await evoRes.json();
            evolutionChain = extractEvolutionChain(evoData.chain);
          }
        } catch { /* continue without evolution data */ }
      }

      speciesData = {
        flavorText, genus, generation, generationNumber, habitat, evolutionChain,
        captureRate: species.capture_rate,
        baseHappiness: species.base_happiness || 0,
        growthRate: species.growth_rate?.name || "medium",
        eggGroups: species.egg_groups?.map(g => g.name) || [],
        genderRate: species.gender_rate,
        isLegendary: species.is_legendary,
        isMythical: species.is_mythical,
      };
    }

    // ── LEARNSET: parse all generations from the existing /pokemon response ──
    // Maps every PokéAPI version-group name to its canonical generation number.
    const VG_TO_GEN: Record<string, number> = {
      "red-blue": 1, "yellow": 1,
      "gold-silver": 2, "crystal": 2,
      "ruby-sapphire": 3, "emerald": 3, "firered-leafgreen": 3, "colosseum": 3, "xd": 3,
      "diamond-pearl": 4, "platinum": 4, "heartgold-soulsilver": 4,
      "black-white": 5, "black-2-white-2": 5,
      "x-y": 6, "omega-ruby-alpha-sapphire": 6,
      "sun-moon": 7, "ultra-sun-ultra-moon": 7, "lets-go-pikachu-lets-go-eevee": 7,
      "sword-shield": 8, "brilliant-diamond-shining-pearl": 8, "legends-arceus": 8,
      "scarlet-violet": 9,
    };

    // Intermediate accumulator: gen → method → Set of move names (to deduplicate),
    // with a separate map for level-up levels.
    const genData: Record<number, {
      levelUp: Map<string, number>; // name → level
      machine: Set<string>;
      egg: Set<string>;
      tutor: Set<string>;
    }> = {};

    for (const entry of (pokemon.moves ?? [])) {
      const moveName = capitalize(entry.move.name.replace(/-/g, " "));

      for (const vgd of entry.version_group_details) {
        const gen = VG_TO_GEN[vgd.version_group.name];
        if (!gen) continue; // unknown/future version groups

        if (!genData[gen]) {
          genData[gen] = {
            levelUp: new Map(),
            machine: new Set(),
            egg: new Set(),
            tutor: new Set(),
          };
        }

        const method = vgd.move_learn_method.name;
        if (method === "level-up") {
          // Keep the highest level seen (favours non-evolution-carry-over entries)
          const existing = genData[gen].levelUp.get(moveName) ?? -1;
          if (vgd.level_learned_at > existing) {
            genData[gen].levelUp.set(moveName, vgd.level_learned_at);
          }
        } else if (method === "machine") {
          genData[gen].machine.add(moveName);
        } else if (method === "egg") {
          genData[gen].egg.add(moveName);
        } else if (method === "tutor") {
          genData[gen].tutor.add(moveName);
        }
      }
    }

    // Convert to final sorted arrays
    const byGen: Record<number, GenLearnset> = {};
    for (const [genStr, data] of Object.entries(genData)) {
      const gen = Number(genStr);
      const levelUp: MoveEntry[] = Array.from(data.levelUp.entries())
        .map(([name, level]) => ({ name, level }))
        .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
      const machine: MoveEntry[] = Array.from(data.machine)
        .sort()
        .map(name => ({ name, level: 0 }));
      const egg: MoveEntry[] = Array.from(data.egg)
        .sort()
        .map(name => ({ name, level: 0 }));
      const tutor: MoveEntry[] = Array.from(data.tutor)
        .sort()
        .map(name => ({ name, level: 0 }));
      byGen[gen] = { levelUp, machine, egg, tutor };
    }

    const availableGens = Object.keys(byGen).map(Number).sort((a, b) => a - b);
    const latestGen = availableGens.length > 0 ? availableGens[availableGens.length - 1] : 9;

    return {
      ...pokemon,
      species: speciesData,
      learnset: { byGen, availableGens, latestGen },
    };
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
}

// ============ METADATA ============
type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  if (!pokemon) {
    return {
      title: "Pokemon Not Found | Random Pokemon Generator",
      description: "The requested Pokemon could not be found.",
    };
  }

  const formattedName = capitalize(pokemon.name);
  const typesDisplay = pokemon.types.map(t => capitalize(t.type.name)).join("/");
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  const hasEvolutions = pokemon.species.evolutionChain.length > 1;
  const evolutionInfo = hasEvolutions
    ? ` Part of the ${capitalize(pokemon.species.evolutionChain[0].name)} evolution line.`
    : "";

  const paddedId = String(pokemon.id).padStart(4, "0");
  const genShort = pokemon.species.generation.replace("Generation ", "Gen ");
  const weaknessTypes = (() => {
    const mul: Record<string, number> = {};
    ["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"].forEach(t => (mul[t] = 1));
    // inline simple multiplier for description only (no import needed — tiny)
    const chart: Record<string, [string[], string[], string[]]> = {
      normal:[["fighting"],[],["ghost"]], fire:[["water","ground","rock"],["fire","grass","ice","bug","steel","fairy"],[]], water:[["electric","grass"],["fire","water","ice","steel"],[]], electric:[["ground"],["electric","flying","steel"],[]], grass:[["fire","ice","poison","flying","bug"],["water","electric","grass","ground"],[]], ice:[["fire","fighting","rock","steel"],["ice"],[]], fighting:[["flying","psychic","fairy"],["bug","rock","dark"],[]], poison:[["ground","psychic"],["grass","fighting","poison","bug","fairy"],[]], ground:[["water","grass","ice"],["poison","rock"],["electric"]], flying:[["electric","ice","rock"],["grass","fighting","bug"],["ground"]], psychic:[["bug","ghost","dark"],["fighting","psychic"],[]], bug:[["fire","flying","rock"],["grass","fighting","ground"],[]], rock:[["water","grass","fighting","ground","steel"],["normal","fire","poison","flying"],[]], ghost:[["ghost","dark"],["poison","bug"],["normal","fighting"]], dragon:[["ice","dragon","fairy"],["fire","water","electric","grass"],[]], dark:[["fighting","bug","fairy"],["ghost","dark"],["psychic"]], steel:[["fire","fighting","ground"],["normal","grass","ice","flying","psychic","bug","rock","dragon","steel","fairy"],["poison"]], fairy:[["poison","steel"],["fighting","bug","dark"],["dragon"]],
    };
    for (const t of pokemon.types.map(x => x.type.name)) {
      const [w, r, i] = chart[t] ?? [[],[],[]];
      w.forEach(a => { mul[a] = (mul[a] ?? 1) * 2; });
      r.forEach(a => { mul[a] = (mul[a] ?? 1) * 0.5; });
      i.forEach(a => { mul[a] = 0; });
    }
    return Object.entries(mul).filter(([,v]) => v >= 2).map(([k]) => capitalize(k)).slice(0, 3).join(", ");
  })();
  const uniqueDescription = `${formattedName} — ${typesDisplay}-type Pokémon from ${genShort}. Full stats (BST ${totalStats}), moves, weaknesses${weaknessTypes ? ` (${weaknessTypes})` : ""}, and evolution chain.`;

  return {
    title: `${formattedName} (#${paddedId}) - Stats, Evolution & Type | Pokemon Database`,
    description: uniqueDescription,
    keywords: [
      formattedName.toLowerCase(),
      `${formattedName.toLowerCase()} stats`,
      `${formattedName.toLowerCase()} evolution`,
      `${formattedName.toLowerCase()} type`,
      ...pokemon.types.map(t => `${t.type.name} type pokemon`),
      pokemon.species.genus.toLowerCase(),
      pokemon.species.generation.toLowerCase(),
    ],
    alternates: {
      canonical: `/pokemon/${pokemon.name.toLowerCase()}`,
    },
    openGraph: {
      title: `${formattedName} (#${paddedId}) - ${typesDisplay} Type | Pokemon Database`,
      description: uniqueDescription,
      url: `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}`,
      images: [{
        url: pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default || "",
        width: 475, height: 475,
        alt: `${formattedName} official artwork - ${typesDisplay} type Pokemon`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedName} (#${paddedId}) | Pokemon Database`,
      description: uniqueDescription,
      images: [pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default || ""],
    },
  };
}

// ============ PAGE COMPONENT (SERVER) ============
export default async function PokemonDetailPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  if (!pokemon) {
    notFound();
  }

  const capitalizedName = capitalize(pokemon.name);
  const paddedId = String(pokemon.id).padStart(4, "0");
  const typesDisplay = pokemon.types.map(t => capitalize(t.type.name)).join("/");
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const highestStat = pokemon.stats.reduce((max, stat) =>
    stat.base_stat > max.base_stat ? stat : max, pokemon.stats[0]);

  const evolutionChain = pokemon.species.evolutionChain || [];
  const currentEvoIndex = evolutionChain.findIndex(e => e.name.toLowerCase() === pokemon.name.toLowerCase());
  const otherEvolutions = evolutionChain.filter(e => e.name.toLowerCase() !== pokemon.name.toLowerCase());

  // ── TYPE EFFECTIVENESS ──
  const typeMultipliers = computeTypeEffectiveness(pokemon.types.map(t => t.type.name));
  const typeGroups = {
    x4:    Object.entries(typeMultipliers).filter(([, v]) => v === 4).map(([k]) => k),
    x2:    Object.entries(typeMultipliers).filter(([, v]) => v === 2).map(([k]) => k),
    x0_5:  Object.entries(typeMultipliers).filter(([, v]) => v === 0.5).map(([k]) => k),
    x0_25: Object.entries(typeMultipliers).filter(([, v]) => v === 0.25).map(([k]) => k),
    x0:    Object.entries(typeMultipliers).filter(([, v]) => v === 0).map(([k]) => k),
  };

  // ── COMPETITIVE TIER ──
  const tierInfo = getTier(pokemon.name);
  const competitiveBlurb = generateCompetitiveBlurb(
    capitalizedName,
    tierInfo?.tier ?? null,
    totalStats,
    pokemon.types.map(t => t.type.name),
    highestStat.stat.name,
    highestStat.base_stat,
    pokemon.species.isLegendary,
    pokemon.species.isMythical,
  );
  let genderText = "Genderless";
  if (pokemon.species.genderRate >= 0) {
    const femalePercent = (pokemon.species.genderRate / 8) * 100;
    const malePercent = 100 - femalePercent;
    genderText = `♂ ${malePercent.toFixed(0)}% / ♀ ${femalePercent.toFixed(0)}%`;
  }

  // Prev/Next Pokemon
  const prevId = pokemon.id > 1 ? pokemon.id - 1 : null;
  const nextId = pokemon.id < 1025 ? pokemon.id + 1 : null;

  // ============ DYNAMIC FAQ GENERATION ============
  const abilitiesList = pokemon.abilities.map(a => capitalize(a.ability.name.replace(/-/g, " "))).join(", ");
  const hiddenAbility = pokemon.abilities.find(a => a.is_hidden);
  const lowestStat = pokemon.stats.reduce((min, stat) =>
    stat.base_stat < min.base_stat ? stat : min, pokemon.stats[0]);

  const sizeCategory = pokemon.height < 5 ? "very small" : pokemon.height < 10 ? "small" : pokemon.height < 20 ? "medium-sized" : pokemon.height < 30 ? "large" : "very large";
  const statTier = totalStats >= 600 ? "exceptional (pseudo-legendary tier)" : totalStats >= 500 ? "very strong" : totalStats >= 400 ? "solid" : totalStats >= 300 ? "moderate" : "low";
  const catchDifficulty = pokemon.species.captureRate >= 200 ? "very easy" : pokemon.species.captureRate >= 120 ? "easy" : pokemon.species.captureRate >= 60 ? "moderate" : pokemon.species.captureRate >= 30 ? "difficult" : "extremely difficult";

  const faqItems: { question: string; answer: string }[] = [
    {
      question: `What type is ${capitalizedName}?`,
      answer: `${capitalizedName} is a ${typesDisplay}-type Pokémon classified as the ${pokemon.species.genus}. It was first introduced in ${pokemon.species.generation} of the Pokémon series. As a ${typesDisplay} type, it has specific strengths and weaknesses in battle that trainers should consider when building their team.`,
    },
    {
      question: `What are ${capitalizedName}'s base stats?`,
      answer: `${capitalizedName} has a total base stat (BST) of ${totalStats}, which is considered ${statTier}. Its stat distribution is: ${pokemon.stats.map(s => `${formatStatName(s.stat.name)}: ${s.base_stat}`).join(", ")}. Its strongest stat is ${formatStatName(highestStat.stat.name)} at ${highestStat.base_stat}, while its weakest stat is ${formatStatName(lowestStat.stat.name)} at ${lowestStat.base_stat}.`,
    },
    {
      question: `Is ${capitalizedName} good for competitive battles?`,
      answer: `With a BST of ${totalStats}, ${capitalizedName} is ${statTier} for competitive play. Its standout stat is ${formatStatName(highestStat.stat.name)} (${highestStat.base_stat}), making it excel at ${getBattleRole(highestStat.stat.name)}. ${totalStats >= 500 ? `${capitalizedName} is strong enough for serious competitive use.` : totalStats >= 400 ? `${capitalizedName} can be viable in certain team compositions and tiers.` : `While not top-tier, ${capitalizedName} can still be effective with the right strategy and support.`}`,
    },
    {
      question: `What abilities does ${capitalizedName} have?`,
      answer: `${capitalizedName} can have the following abilities: ${abilitiesList}.${hiddenAbility ? ` Its hidden ability is ${capitalize(hiddenAbility.ability.name.replace(/-/g, " "))}, which can be obtained through special methods like Max Raid Battles or breeding.` : ""} These abilities can significantly impact ${capitalizedName}'s effectiveness in battle.`,
    },
    {
      question: `How tall and heavy is ${capitalizedName}?`,
      answer: `${capitalizedName} stands at ${(pokemon.height / 10).toFixed(1)} meters (${((pokemon.height / 10) * 39.3701).toFixed(1)} inches) tall and weighs ${(pokemon.weight / 10).toFixed(1)} kg (${((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs). This makes it a ${sizeCategory} Pokémon. Its weight can affect certain moves like Low Kick and Heavy Slam in battle.`,
    },
    {
      question: `How hard is it to catch ${capitalizedName}?`,
      answer: `${capitalizedName} has a capture rate of ${pokemon.species.captureRate} out of 255, making it ${catchDifficulty} to catch. ${pokemon.species.captureRate < 60 ? "Using Ultra Balls or specialized Poké Balls, along with status conditions like Sleep or Paralysis, will significantly improve your chances." : pokemon.species.captureRate < 120 ? "Standard Poké Balls should work, but Great Balls or Ultra Balls will help ensure success." : "It should be relatively easy to catch with standard Poké Balls."}${pokemon.species.isLegendary ? " As a Legendary Pokémon, you may want to save your Master Ball for this encounter." : ""}${pokemon.species.isMythical ? " As a Mythical Pokémon, it is typically only available through special events or distributions." : ""}`,
    },
  ];

  // Evolution FAQ (only if it evolves)
  if (evolutionChain.length > 1) {
    const evoText = evolutionChain.map((evo, i) => {
      if (i === 0) return capitalize(evo.name);
      return `${capitalize(evo.name)}${evo.method ? ` (${evo.method})` : ""}`;
    }).join(" → ");

    faqItems.push({
      question: `How does ${capitalizedName} evolve?`,
      answer: `${capitalizedName} is part of the following evolution chain: ${evoText}.${currentEvoIndex === 0 ? ` ${capitalizedName} is the base form and can evolve into ${capitalize(evolutionChain[1].name)}${evolutionChain[1].method ? ` via ${evolutionChain[1].method}` : ""}.` : currentEvoIndex === evolutionChain.length - 1 ? ` ${capitalizedName} is the final evolved form in this line.` : ` ${capitalizedName} is a middle-stage evolution.`}`,
    });
  }

  // Habitat FAQ
  if (pokemon.species.habitat) {
    faqItems.push({
      question: `Where can I find ${capitalizedName}?`,
      answer: `${capitalizedName} is typically found in ${pokemon.species.habitat} environments. The exact location varies by game version, but look for ${capitalize(pokemon.species.habitat).toLowerCase()}-type areas, routes, and habitats. You can also use the Random Pokémon Generator to discover ${capitalizedName} and plan your team.`,
    });
  }

  // Gender FAQ
  faqItems.push({
    question: `Can ${capitalizedName} be male or female?`,
    answer: pokemon.species.genderRate < 0
      ? `${capitalizedName} is a genderless Pokémon and cannot be male or female. Genderless Pokémon can still breed with Ditto in most games.`
      : `${capitalizedName} has a gender ratio of ${genderText}. ${pokemon.species.genderRate === 0 ? "It is always male." : pokemon.species.genderRate === 8 ? "It is always female." : `There is a ${(100 - (pokemon.species.genderRate / 8) * 100).toFixed(0)}% chance of being male and a ${((pokemon.species.genderRate / 8) * 100).toFixed(0)}% chance of being female.`}`,
  });

  // Egg group FAQ
  if (pokemon.species.eggGroups.length > 0 && !pokemon.species.eggGroups.includes("no-eggs")) {
    faqItems.push({
      question: `What egg group is ${capitalizedName} in?`,
      answer: `${capitalizedName} belongs to the ${pokemon.species.eggGroups.map(g => capitalize(g)).join(" and ")} egg group${pokemon.species.eggGroups.length > 1 ? "s" : ""}. This means it can breed with other Pokémon in ${pokemon.species.eggGroups.length > 1 ? "either of these groups" : "this group"} to produce eggs. Compatible breeding partners can pass down moves, natures, and IVs.`,
    });
  }

  // ── Schema: ItemPage (primary entity) ──
  const itemPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}#webpage`,
    url: `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}`,
    name: `${capitalizedName} (#${paddedId}) - Stats, Evolution & Type`,
    description: `${capitalizedName} is a ${typesDisplay}-type ${pokemon.species.genus} from ${pokemon.species.generation}. ${pokemon.species.flavorText}`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Random Pokémon Generator" },
    about: {
      "@type": "Thing",
      "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}#pokemon`,
      name: capitalizedName,
      alternateName: `Pokémon #${paddedId}`,
      description: `${capitalizedName} is a ${typesDisplay}-type Pokémon, classified as the ${pokemon.species.genus}, introduced in ${pokemon.species.generation}.`,
      image: {
        "@type": "ImageObject",
        url: pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default || "",
        name: `${capitalizedName} official artwork`,
        caption: `Official artwork of ${capitalizedName}, a ${typesDisplay}-type Pokémon`,
      },
      identifier: pokemon.id.toString(),
    },
    breadcrumb: { "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}#breadcrumb` },
  };

  // ── Schema: BreadcrumbList ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Pokédex", item: `${siteUrl}/pokedex` },
      { "@type": "ListItem", position: 3, name: capitalizedName, item: `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}` },
    ],
  };

  // ── Schema: FAQPage ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}#faq`,
    mainEntity: faqItems.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      {/* JSON-LD — Three separate script tags; each schema type must be independent for Google rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />


      <main className="min-h-screen bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">

          {/* Top Navigation */}
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <Link
              href="/"
              className="flex items-center gap-2 bg-black text-white font-mono text-xs sm:text-sm px-4 py-2.5 slasher hover:bg-charcoal transition-colors min-h-[44px]"
            >
              ← GENERATOR
            </Link>
            <PokemonDetailClient pokemon={pokemon} />
          </div>

          {/* Breadcrumbs */}
          <nav className="mb-4 md:mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li className="text-black/30">/</li>
              <li><Link href="/pokedex" className="hover:text-black transition-colors">Pokédex</Link></li>
              <li className="text-black/30">/</li>
              <li className="text-black font-bold">{capitalizedName}</li>
            </ol>
          </nav>


          {/* Hero Header */}
          <header className="bg-white border-2 border-black slasher mb-6 md:mb-8 overflow-hidden">
            {/* Black accent top bar */}
            <div className="bg-black px-5 sm:px-6 md:px-8 py-2 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-white/60 uppercase tracking-widest">Pokédex</span>
                <span className="font-mono text-xs text-white/30">/</span>
                <span className="font-mono text-xs font-bold text-white tracking-widest">#{String(pokemon.id).padStart(4, "0")}</span>
                <span className="font-mono text-xs text-white/50 uppercase">{pokemon.species.generation}</span>
              </div>
              {(pokemon.species.isLegendary || pokemon.species.isMythical) && (
                <span className="font-mono text-[10px] font-bold text-black bg-marigold px-3 py-1 uppercase tracking-widest slasher">
                  {pokemon.species.isMythical ? "✦ MYTHICAL" : "✦ LEGENDARY"}
                </span>
              )}
            </div>

            {/* Main hero body */}
            <div className="p-5 sm:p-6 md:p-8">
              <h1 className="font-grotesk font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black uppercase tracking-tight leading-none mb-2">
                {capitalizedName}
              </h1>
              <p className="font-mono text-xs text-charcoal uppercase tracking-widest mb-4 flex flex-wrap gap-x-3 gap-y-1">
                <span>{pokemon.species.genus}</span>
                <span className="text-black/20">•</span>
                <span>{typesDisplay} Type</span>
                <span className="text-black/20">•</span>
                <span>BST <strong className="text-black">{totalStats}</strong></span>
                <span className="text-black/20">•</span>
                <span>Best: <strong className="text-black">{formatStatName(highestStat.stat.name)} {highestStat.base_stat}</strong></span>
              </p>
              {pokemon.species.flavorText && (
                <div className="border-l-4 border-black pl-4 mt-4">
                  <p className="font-mono text-sm sm:text-base text-charcoal leading-relaxed italic max-w-3xl">
                    &ldquo;{pokemon.species.flavorText}&rdquo;
                  </p>
                </div>
              )}
            </div>
          </header>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Left Column - Artwork & Info (5/12) */}
            <div className="lg:col-span-5 space-y-4 md:space-y-6">

              {/* Artwork Box */}
              <div className="bg-white border-2 border-black slasher p-4 sm:p-6 md:p-8">
                <div className="mx-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                  <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                    <Image
                      src={pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default || ""}
                      alt={`${capitalizedName} official artwork - ${typesDisplay} type Pokemon from ${pokemon.species.generation}`}
                      fill
                      className="object-contain p-3 mix-blend-multiply"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* Type Badges */}
                <div className="flex gap-2 sm:gap-3 justify-center mt-4 flex-wrap">
                  {pokemon.types.map((typeInfo) => (
                    <Link
                      key={typeInfo.type.name}
                      href={`/pokedex?type=${typeInfo.type.name}`}
                      className="font-mono text-xs sm:text-sm px-5 sm:px-6 py-2 uppercase font-bold border-2 border-black hover:brightness-110 hover:scale-105 transition-all"
                      style={{
                        backgroundColor: TYPE_COLORS[typeInfo.type.name] || "#888",
                        color: TYPE_LIGHT_TEXT.has(typeInfo.type.name) ? "#000" : "#fff",
                      }}
                    >
                      {typeInfo.type.name}
                    </Link>
                  ))}
                </div>

                {/* Generate Card Button */}
                <div className="mt-4 border-t-2 border-black pt-4">
                  <PokemonCardButton pokemon={pokemon} />
                </div>
              </div>

              {/* Physical Data + Training */}
              <div className="bg-white border-2 border-black slasher p-5 sm:p-6">
                <div className="inline-block bg-black px-3 py-1 mb-4">
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">PROFILE</span>
                </div>
                <div className="divide-y-2 divide-black/10">
                  {[
                    ["Classification", pokemon.species.genus],
                    ["Height", `${(pokemon.height / 10).toFixed(1)} m (${((pokemon.height / 10) * 39.3701).toFixed(1)}″)`],
                    ["Weight", `${(pokemon.weight / 10).toFixed(1)} kg (${((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs)`],
                    ...(pokemon.species.habitat ? [["Habitat", capitalize(pokemon.species.habitat)]] : []),
                    ["Gender", genderText],
                    ["Growth Rate", capitalize(pokemon.species.growthRate)],
                    ["Capture Rate", `${pokemon.species.captureRate} / 255`],
                    ["Base Happiness", `${pokemon.species.baseHappiness}`],
                    ["Egg Groups", pokemon.species.eggGroups.map(g => capitalize(g)).join(", ") || "Unknown"],
                    ...(pokemon.base_experience ? [["Base XP", `${pokemon.base_experience}`]] : []),
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex justify-between items-center py-3 gap-4">
                      <span className="font-mono text-xs sm:text-sm text-charcoal uppercase flex-shrink-0">{label}</span>
                      <span className="font-mono text-xs sm:text-sm text-black font-bold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities */}
              <div className="bg-cream border-2 border-black slasher p-5 sm:p-6">
                <div className="inline-block bg-black px-3 py-1 mb-4">
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">ABILITIES</span>
                </div>
                <div className="space-y-2">
                  {pokemon.abilities.map((abilityInfo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 border-2 border-black px-4 py-2.5 bg-white"
                    >
                      <span className="font-mono text-sm text-black uppercase font-semibold">
                        {abilityInfo.ability.name.replace(/-/g, " ")}
                      </span>
                      {abilityInfo.is_hidden && (
                        <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase flex-shrink-0 slasher">
                          HIDDEN
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Data (7/12) */}
            <div className="lg:col-span-7 space-y-4 md:space-y-6">

              {/* Combat Statistics */}
              <div className="bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-block bg-black px-3 py-1">
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">BASE STATS</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-charcoal">BST: {totalStats}</span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {pokemon.stats.map((stat) => {
                    const pct = Math.min((stat.base_stat / 255) * 100, 100);
                    const color = getStatBarColor(stat.base_stat);
                    return (
                      <div key={stat.stat.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-mono text-xs font-bold text-black w-16 sm:w-20">
                            {formatStatName(stat.stat.name)}
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-bold text-black tabular-nums">
                            {stat.base_stat}
                          </span>
                        </div>
                        <div className="w-full h-5 sm:h-6 bg-black/5 border-2 border-black relative overflow-hidden">
                          <div
                            className="h-full transition-all duration-700 ease-out"
                            style={{ width: `${pct}%`, backgroundColor: color }}
                          />
                        </div>
                      </div>
                    );
                  })}

                  {/* Total Stats Row */}
                  <div className="pt-3 sm:pt-4 mt-2 border-t-4 border-black">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm font-bold text-black uppercase">Total</span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-black tabular-nums">{totalStats}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evolution Chain */}
              {evolutionChain.length > 1 && (
                <div className="bg-white border-2 border-black slasher p-5 sm:p-6">
                  <div className="inline-block bg-black px-3 py-1 mb-5">
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">EVOLUTION CHAIN</span>
                  </div>
                  <div className="overflow-x-auto pb-2">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 min-w-max mx-auto">
                    {evolutionChain.map((evo, index) => {
                      const isCurrentPokemon = evo.name.toLowerCase() === pokemon.name.toLowerCase();
                      const formattedEvoName = capitalize(evo.name);
                      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`;

                      return (
                        <div key={evo.name} className="flex items-center gap-1 sm:gap-2">
                          {index > 0 && (
                            <div className="flex flex-col items-center mx-1">
                              <span className="font-mono text-lg sm:text-xl text-charcoal">→</span>
                              {evo.method && (
                                <span className="font-mono text-[9px] sm:text-[10px] text-charcoal text-center max-w-[60px] sm:max-w-[80px] leading-tight capitalize">
                                  {evo.method}
                                </span>
                              )}
                            </div>
                          )}
                          {isCurrentPokemon ? (
                            <div className="flex flex-col items-center bg-black border-2 border-black p-2 sm:p-3 min-w-[70px] sm:min-w-[90px]">
                              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                                <Image
                                  src={spriteUrl}
                                  alt={`${formattedEvoName} sprite`}
                                  fill
                                  className="object-contain"
                                  sizes="64px"
                                  unoptimized
                                />
                              </div>
                              <span className="font-mono text-[10px] sm:text-xs font-bold text-white text-center mt-1 uppercase">
                                {formattedEvoName}
                              </span>
                            </div>
                          ) : (
                            <Link
                              href={`/pokemon/${evo.name.toLowerCase()}`}
                              className="flex flex-col items-center bg-white hover:bg-black hover:text-white border-2 border-black p-2 sm:p-3 min-w-[70px] sm:min-w-[90px] transition-all group"
                            >
                              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                                <Image
                                  src={spriteUrl}
                                  alt={`${formattedEvoName} sprite`}
                                  fill
                                  className="object-contain"
                                  sizes="64px"
                                  unoptimized
                                />
                              </div>
                              <span className="font-mono text-[10px] sm:text-xs font-bold text-black group-hover:text-white text-center mt-1 uppercase">
                                {formattedEvoName}
                              </span>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  </div>
                  {currentEvoIndex >= 0 && (
                    <p className="font-mono text-xs text-charcoal text-center mt-3">
                      {currentEvoIndex === 0 && evolutionChain.length > 1 && "Base form • Can evolve"}
                      {currentEvoIndex > 0 && currentEvoIndex < evolutionChain.length - 1 && "Middle evolution"}
                      {currentEvoIndex === evolutionChain.length - 1 && evolutionChain.length > 1 && "Final evolution"}
                    </p>
                  )}
                </div>
              )}

              {/* Explore By Type */}
              <div className="bg-white border-2 border-black slasher p-5 sm:p-6">
                <div className="inline-block bg-black px-3 py-1 mb-4">
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">EXPLORE BY TYPE</span>
                </div>
                <p className="font-mono text-xs text-charcoal mb-3">
                  Find more {typesDisplay}-type Pokémon:
                </p>
                <div className="flex flex-wrap gap-2">
                  {pokemon.types.map((typeInfo) => (
                    <Link
                      key={typeInfo.type.name}
                      href={`/pokedex?type=${typeInfo.type.name}`}
                      className="font-mono text-xs px-4 py-2 uppercase font-bold border-2 border-black hover:brightness-110 hover:scale-105 transition-all"
                      style={{
                        backgroundColor: TYPE_COLORS[typeInfo.type.name] || "#888",
                        color: TYPE_LIGHT_TEXT.has(typeInfo.type.name) ? "#000" : "#fff",
                      }}
                    >
                      All {typeInfo.type.name} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/pokedex"
                  className="bg-cream hover:bg-black hover:text-white text-black font-mono font-bold text-xs sm:text-sm px-4 py-3 sm:py-4 text-center border-2 border-black transition-all slasher flex items-center justify-center gap-2 min-h-[48px]"
                >
                  📖 POKÉDEX
                </Link>
                <Link
                  href="/"
                  className="bg-black hover:bg-charcoal text-white font-mono font-bold text-xs sm:text-sm px-4 py-3 sm:py-4 text-center border-2 border-black transition-all slasher flex items-center justify-center gap-2 min-h-[48px]"
                >
                  ⚡ GENERATOR
                </Link>
              </div>

              {/* Battle Role Analysis */}
              <div className="bg-cream border-2 border-black slasher p-5 sm:p-6">
                <div className="inline-block bg-black px-3 py-1 mb-4">
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">BATTLE ROLE</span>
                </div>
                <div className="space-y-2">
                  {pokemon.stats.map((stat) => {
                    const role = getBattleRole(stat.stat.name);
                    const isHighest = stat.stat.name === highestStat.stat.name;
                    return (
                      <div key={stat.stat.name} className="flex items-center justify-between gap-2 px-3 py-2 border-2 border-black bg-white">
                        <span className="font-mono text-xs uppercase font-bold text-charcoal">{formatStatName(stat.stat.name)}</span>
                        <span className="font-mono text-[10px] text-charcoal">{role}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ══ COMPETITIVE PROFILE ─ server-rendered ══ */}
          <section
            className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8"
            id="competitive"
            aria-label={`${capitalizedName} competitive tier and analysis`}
          >
            <div className="inline-block bg-black px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                COMPETITIVE
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-1 text-black uppercase">
              Is {capitalizedName} Good Competitively?
            </h2>
            <p className="font-mono text-xs sm:text-sm text-charcoal mb-6">
              Smogon Gen 9 tier placement and competitive analysis for {capitalizedName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">

              {/* Tier badge + label */}
              <div className="flex-shrink-0">
                {tierInfo ? (
                  <div className="flex flex-col items-start gap-2">
                    <span
                      className="font-mono text-2xl sm:text-3xl font-black px-4 py-2 border-2 border-black inline-block"
                      style={{
                        backgroundColor: TIER_COLORS[tierInfo.tier].bg,
                        color: TIER_COLORS[tierInfo.tier].text,
                      }}
                      title={TIER_DESCRIPTIONS[tierInfo.tier]}
                    >
                      {tierInfo.tier}
                    </span>
                    <span className="font-mono text-[10px] text-charcoal uppercase tracking-widest">
                      Smogon Gen 9
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-mono text-2xl sm:text-3xl font-black px-4 py-2 border-2 border-black bg-black/5 text-charcoal">
                      —
                    </span>
                    <span className="font-mono text-[10px] text-charcoal uppercase tracking-widest">
                      Untiered / Regional
                    </span>
                  </div>
                )}
              </div>

              {/* Blurb + stat callouts */}
              <div className="flex-1 space-y-4">
                <p className="font-mono text-sm sm:text-base text-black leading-relaxed">
                  {competitiveBlurb}
                </p>

                {/* Stat snapshot relevant to competitive play */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {([
                    { label: "BST",   value: totalStats },
                    { label: highestStat.stat.name === "special-attack" ? "Sp. Atk" : highestStat.stat.name === "special-defense" ? "Sp. Def" : highestStat.stat.name.toUpperCase(), value: highestStat.base_stat },
                    { label: "SPEED", value: pokemon.stats.find(s => s.stat.name === "speed")?.base_stat ?? 0 },
                  ] as const).map(item => (
                    <div key={item.label} className="bg-cream/50 border-2 border-black/10 px-3 py-2">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-charcoal">{item.label}</p>
                      <p className="font-grotesk font-bold text-lg sm:text-xl text-black">{item.value}</p>
                    </div>
                  ))}
                </div>

                {tierInfo && (
                  <p className="font-mono text-[11px] text-charcoal/70 italic">
                    {TIER_DESCRIPTIONS[tierInfo.tier]}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* ══ TYPE EFFECTIVENESS CHART ─ server-rendered, zero extra API calls ══ */}
          <section
            className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8"
            id="weaknesses"
            aria-label={`${capitalizedName} type weaknesses and resistances`}
          >
            <div className="inline-block bg-black px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                TYPE CHART
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-1 text-black uppercase">
              {capitalizedName} Weaknesses &amp; Resistances
            </h2>
            <p className="font-mono text-xs sm:text-sm text-charcoal mb-6">
              Type effectiveness for {typesDisplay}-type {capitalizedName} (Generation 9 / Scarlet &amp; Violet).
            </p>

            <div className="space-y-2">
              {([
                { key: "x4",    label: "4×",  note: "Quadruple Weakness",  bg: "#dc2626", rows: typeGroups.x4 },
                { key: "x2",    label: "2×",  note: "Super Effective",      bg: "#f97316", rows: typeGroups.x2 },
                { key: "x0_5",  label: "½×",   note: "Resistant",            bg: "#16a34a", rows: typeGroups.x0_5 },
                { key: "x0_25", label: "¼×",   note: "Doubly Resistant",    bg: "#15803d", rows: typeGroups.x0_25 },
                { key: "x0",    label: "0×",  note: "Immune",              bg: "#4b5563", rows: typeGroups.x0 },
              ] as const).map(row => (
                <div key={row.key} className="flex items-start gap-3">
                  {/* Multiplier badge */}
                  <div
                    className="flex-shrink-0 w-[4.5rem] sm:w-20 text-right pt-1"
                    title={row.note}
                  >
                    <span
                      className="font-mono text-xs sm:text-sm font-black leading-none"
                      style={{ color: row.bg }}
                    >
                      {row.label}
                    </span>
                  </div>

                  {/* Type badges or dash */}
                  <div className="flex flex-wrap gap-1.5 flex-1 pt-0.5">
                    {row.rows.length === 0 ? (
                      <span className="font-mono text-xs text-charcoal/40">—</span>
                    ) : (
                      row.rows.map(type => (
                        <span
                          key={type}
                          className="inline-block font-mono text-[10px] sm:text-xs font-bold px-2 py-1 uppercase border border-black/10"
                          style={{
                            backgroundColor: TYPE_COLORS[type] || "#888",
                            color: TYPE_LIGHT_TEXT.has(type) ? "#1a1a1a" : "#fff",
                          }}
                        >
                          {type}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <p className="font-mono text-[10px] text-charcoal/50 mt-5">
              * Immunities override all other multipliers. Chart based on Gen 6+ rules (Fairy type included).
            </p>
          </section>

          {/* ══ EVOLUTION CHAIN ─ server-rendered, SEO-rich ══ */}
          {evolutionChain.length > 1 && (
            <section
              className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8"
              id="evolution"
              aria-label={`${capitalizedName} evolution chain`}
            >
              <div className="inline-block bg-black px-3 py-1 mb-6">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  EVOLUTION CHAIN
                </span>
              </div>
              <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-1 text-black uppercase">
                {capitalizedName} Evolution
              </h2>
              <p className="font-mono text-xs sm:text-sm text-charcoal mb-8">
                How {capitalizedName} evolves — complete {evolutionChain.length}-stage evolution line.
              </p>

              {/* Chain — wraps on mobile, horizontal on sm+ */}
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-0">
                {evolutionChain.map((evo, index) => {
                  const isCurrent = evo.name.toLowerCase() === pokemon.name.toLowerCase();
                  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.id}.png`;
                  const evoName = capitalize(evo.name);

                  return (
                    <div key={evo.id} className="flex items-center sm:flex-nowrap gap-2 sm:gap-0">
                      {/* Arrow + Method (not shown before the first stage) */}
                      {index > 0 && (
                        <div className="flex flex-col items-center mx-2 sm:mx-3 flex-shrink-0 w-16 sm:w-20">
                          <div className="font-mono text-[9px] sm:text-[10px] text-center text-charcoal leading-tight mb-1 min-h-[2.5rem] flex items-center justify-center">
                            {evo.method ? (
                              <span className="bg-black/5 border border-black/10 px-1.5 py-0.5 text-center">
                                {capitalize(evo.method)}
                              </span>
                            ) : (
                              <span className="text-charcoal/40">Evolve</span>
                            )}
                          </div>
                          <div className="text-black text-lg leading-none select-none">→</div>
                        </div>
                      )}

                      {/* Pokémon card */}
                      <Link
                        href={`/pokemon/${evo.name.toLowerCase()}`}
                        className={`flex flex-col items-center gap-2 p-3 sm:p-4 border-2 transition-all group hover:scale-105 ${
                          isCurrent
                            ? "border-black bg-black text-white"
                            : "border-black/20 bg-cream/50 hover:border-black hover:bg-white"
                        }`}
                        aria-label={`View ${evoName} details${isCurrent ? " (current)" : ""}`}
                      >
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={spriteUrl}
                            alt={`${evoName} sprite`}
                            width={96}
                            height={96}
                            className={`w-full h-full object-contain ${isCurrent ? "" : "mix-blend-multiply"}`}
                            loading="lazy"
                          />
                        </div>
                        <div className="text-center">
                          <p className={`font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isCurrent ? "text-white" : "text-charcoal"}`}>
                            #{String(evo.id).padStart(4, "0")}
                          </p>
                          <p className={`font-grotesk font-bold text-sm sm:text-base mt-0.5 ${isCurrent ? "text-white" : "text-black"}`}>
                            {evoName}
                          </p>
                        </div>
                        {isCurrent && (
                          <span className="font-mono text-[9px] bg-white text-black px-2 py-0.5 font-bold uppercase tracking-widest">
                            CURRENT
                          </span>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Fallback text for SEO / screen readers */}
              <p className="sr-only">
                {capitalizedName} evolution chain: {evolutionChain.map((evo, i) => {
                  if (i === 0) return capitalize(evo.name);
                  return `evolves into ${capitalize(evo.name)}${evo.method ? ` via ${evo.method}` : ""}`;
                }).join(", ")}.
              </p>
            </section>
          )}

          {/* ══ LEARNSET SECTION ─ all generations ══ */}
          {pokemon.learnset.availableGens.length > 0 && (
            <section className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8" id="moves">
              <div className="inline-block bg-black px-3 py-1 mb-6">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">LEARNSET</span>
              </div>
              <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-1 text-black uppercase">
                {capitalizedName} Moves &amp; Learnset
              </h2>
              <p className="font-mono text-xs sm:text-sm text-charcoal mb-6">
                Complete {capitalizedName} moveset for all generations — level-up, TM/HM, tutor, and egg moves.
              </p>
              <LearnsetTabs
                pokemonName={capitalizedName}
                byGen={pokemon.learnset.byGen}
                availableGens={pokemon.learnset.availableGens}
                latestGen={pokemon.learnset.latestGen}
              />
            </section>
          )}

          {/* SEO Content Section — Server-rendered */}
          <article className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8">
            <div className="inline-block bg-black px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">TRAINER INTEL</span>
            </div>

            <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-5 sm:mb-6 text-black uppercase">
              About {capitalizedName}
            </h2>

            <div className="space-y-4">
              {/* Paragraph 1 — Identity & Pokédex intro */}
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                <strong className="text-black">{capitalizedName}</strong> (Pokédex #{paddedId}) is a <strong className="text-black">{typesDisplay}</strong>-type Pokémon first introduced in <strong className="text-black">{pokemon.species.generation}</strong>.
                {pokemon.species.genus && (
                  <> It is officially classified as the <strong className="text-black">{pokemon.species.genus}</strong>.</>  
                )}
                {pokemon.species.flavorText && (
                  <> {pokemon.species.flavorText}</>
                )}
              </p>

              {/* Paragraph 2 — Type effectiveness summary */}
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                As a <strong className="text-black">{typesDisplay}</strong>-type Pokémon, {capitalizedName} has a specific set of type matchups that trainers must account for.
                {typeGroups.x4.length > 0 && (
                  <> It has a <strong className="text-black">4× weakness</strong> to {typeGroups.x4.map(t => capitalize(t)).join(" and ")} — these moves deal quadruple damage and should always be avoided in battle.</>
                )}
                {typeGroups.x2.length > 0 && (
                  <> It takes <strong className="text-black">double damage</strong> from {typeGroups.x2.map(t => capitalize(t)).join(", ")} moves.</>
                )}
                {typeGroups.x0.length > 0 && (
                  <> Conversely, {capitalizedName} is <strong className="text-black">completely immune</strong> to {typeGroups.x0.map(t => capitalize(t)).join(" and ")} — these moves deal zero damage regardless of power.</>
                )}
                {typeGroups.x0_5.length > 0 && (
                  <> It resists {typeGroups.x0_5.map(t => capitalize(t)).join(", ")} moves, taking only half damage from them.</>
                )}
              </p>

              {/* Paragraph 3 — Stat profile & battle role */}
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                <strong className="text-black">{capitalizedName}&apos;s battle stats</strong>: Base Stat Total of <strong className="text-black">{totalStats}</strong> ({totalStats >= 600 ? "exceptional — pseudo-legendary tier" : totalStats >= 500 ? "very strong" : totalStats >= 400 ? "solid" : "moderate"}).
                {" "}Full distribution: <strong className="text-black">{pokemon.stats.map(s => `${formatStatName(s.stat.name)} ${s.base_stat}`).join(" · ")}</strong>.
                {" "}Its standout stat is <strong className="text-black">{formatStatName(highestStat.stat.name)} ({highestStat.base_stat})</strong>, which makes it best suited for <strong className="text-black">{getBattleRole(highestStat.stat.name)}</strong> roles.
                {" "}Its abilities are <strong className="text-black">{abilitiesList}</strong>{hiddenAbility ? `, with ${capitalize(hiddenAbility.ability.name.replace(/-/g, " "))} as its hidden ability` : ""}.
              </p>

              {/* Paragraph 4 — Physical profile & catch info */}
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                {capitalizedName} stands <strong className="text-black">{(pokemon.height / 10).toFixed(1)} m ({((pokemon.height / 10) * 39.3701).toFixed(0)}&quot;)</strong> tall and weighs <strong className="text-black">{(pokemon.weight / 10).toFixed(1)} kg ({((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs)</strong>.
                {pokemon.species.habitat && (
                  <> It is typically found in <strong className="text-black">{capitalize(pokemon.species.habitat)}</strong> environments.</>
                )}
                {" "}Capture rate: <strong className="text-black">{pokemon.species.captureRate}/255</strong> ({catchDifficulty} to catch).
                {pokemon.species.captureRate < 60 && " Use Ultra Balls with a status condition (Sleep or Paralysis) for the best results."}
                {" "}Growth rate: <strong className="text-black">{capitalize(pokemon.species.growthRate)}</strong>. Egg groups: <strong className="text-black">{pokemon.species.eggGroups.map(g => capitalize(g)).join(", ") || "None"}</strong>.
                {pokemon.species.isLegendary && <> <strong className="text-black">{capitalizedName} is a Legendary Pokémon.</strong></>}
                {pokemon.species.isMythical && <> <strong className="text-black">{capitalizedName} is a Mythical Pokémon</strong> — typically only available through special event distributions.</>}
              </p>

              {/* Paragraph 5 — Evolution (conditional) */}
              {evolutionChain.length > 1 && (
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-black">{capitalizedName}</strong> is part of the{" "}
                  {evolutionChain.map((evo, index) => {
                    const formatted = capitalize(evo.name);
                    const isCurrent = evo.name.toLowerCase() === pokemon.name.toLowerCase();
                    return (
                      <span key={evo.name}>
                        {index > 0 && " → "}
                        {isCurrent ? (
                          <strong className="text-black">{formatted}</strong>
                        ) : (
                          <Link href={`/pokemon/${evo.name.toLowerCase()}`} className="text-indigo hover:underline">
                            {formatted}
                          </Link>
                        )}
                      </span>
                    );
                  })}{" "}
                  evolution line ({evolutionChain.length}-stage).
                  {currentEvoIndex === 0 && ` ${capitalizedName} is the base form and can evolve into ${capitalize(evolutionChain[1].name)}${evolutionChain[1].method ? ` via ${evolutionChain[1].method}` : ""}.`}
                  {currentEvoIndex === evolutionChain.length - 1 && evolutionChain.length > 1 && ` ${capitalizedName} is the final evolved form — the strongest stage of this line.`}
                  {currentEvoIndex > 0 && currentEvoIndex < evolutionChain.length - 1 && ` ${capitalizedName} is a middle-stage evolution.`}
                </p>
              )}

              {/* Paragraph 6 — Related evolutions cross-links */}
              {otherEvolutions.length > 0 && (
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Related Pokémon in the same evolution line:{" "}
                  {otherEvolutions.map((evo, index) => {
                    const formatted = capitalize(evo.name);
                    const isLast = index === otherEvolutions.length - 1;
                    const separator = otherEvolutions.length > 2
                      ? (isLast ? ", and " : ", ")
                      : (isLast ? " and " : "");
                    return (
                      <span key={evo.name}>
                        {index > 0 && separator}
                        <Link href={`/pokemon/${evo.name.toLowerCase()}`} className="text-black underline font-semibold hover:no-underline">
                          {formatted}
                        </Link>
                      </span>
                    );
                  })}. Click any name to view their full stats, moves, and type matchup chart.
                </p>
              )}

              {/* Generate Card CTA */}
              <div className="mt-6 border-t-2 border-black pt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/pokemon-card-generator?pokemon=${pokemon.name.toLowerCase()}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-charcoal text-white font-mono font-bold text-sm uppercase tracking-widest px-6 py-4 border-2 border-black slasher transition-smooth"
                >
                  🃏 GENERATE {capitalizedName.toUpperCase()} CARD
                </Link>
                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 bg-cream hover:bg-black hover:text-white text-black font-mono font-bold text-sm uppercase tracking-widest px-6 py-4 border-2 border-black slasher transition-smooth"
                >
                  ⚡ RANDOM TEAM GENERATOR
                </Link>
              </div>
            </div>
          </article>

          {/* FAQ Section — Server-rendered, keyword-rich */}
          <section className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8">
            <div className="inline-block bg-black px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">FAQ</span>
            </div>

            <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-2 text-black uppercase">
              Frequently Asked Questions About {capitalizedName}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-charcoal mb-6">
              Everything trainers need to know about {capitalizedName} (#{String(pokemon.id).padStart(4, "0")}).
            </p>

            <div className="divide-y-2 divide-black/10">
              {faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="group py-4 first:pt-0 last:pb-0"
                  {...(index < 3 ? { open: true } : {})}
                >
                  <summary className="flex items-start justify-between gap-3 cursor-pointer list-none font-mono text-sm sm:text-base font-bold text-black leading-snug hover:text-indigo transition-colors select-none">
                    <span className="flex-1">{faq.question}</span>
                    <span className="text-charcoal group-open:rotate-45 transition-transform duration-200 text-lg leading-none flex-shrink-0 mt-0.5">+</span>
                  </summary>
                  <div className="mt-3 font-mono text-xs sm:text-sm text-charcoal leading-relaxed pl-0 sm:pl-1">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom Prev/Next */}
          <div className="flex justify-between items-center mt-6 md:mt-8 gap-4">
            {prevId ? (
              <Link
                href={`/pokemon/${prevId}`}
                className="flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm font-bold slasher hover:bg-charcoal transition-all min-h-[48px]"
              >
                ← PREV #{String(prevId).padStart(4, "0")}
              </Link>
            ) : <div />}
            {nextId ? (
              <Link
                href={`/pokemon/${nextId}`}
                className="flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-3 font-mono text-xs sm:text-sm font-bold slasher hover:bg-charcoal transition-all min-h-[48px]"
              >
                NEXT #{String(nextId).padStart(4, "0")} →
              </Link>
            ) : <div />}
          </div>

        </div>
      </main>
    </>
  );
}
