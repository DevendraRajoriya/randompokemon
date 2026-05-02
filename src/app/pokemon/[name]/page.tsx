import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PokemonDetailClient from "./PokemonDetailClient";
import { PokemonCardButton } from "./PokemonDetailClient";

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

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
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

export interface PokemonWithSpecies extends Pokemon {
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

// ============ DATA FETCHING ============
async function getPokemon(name: string): Promise<PokemonWithSpecies | null> {
  try {
    const [pokemonRes, speciesRes] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { next: { revalidate: 86400 } }),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, { next: { revalidate: 86400 } }),
    ]);

    if (!pokemonRes.ok) return null;

    const pokemon: Pokemon = await pokemonRes.json();

    let speciesData: PokemonWithSpecies["species"] = {
      flavorText: "", genus: "Pokémon", generation: "Generation 1",
      generationNumber: 1, habitat: null, evolutionChain: [],
      captureRate: 0, baseHappiness: 0, growthRate: "medium",
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

    return { ...pokemon, species: speciesData };
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

  const uniqueDescription = `${formattedName} (#${pokemon.id}) is a ${typesDisplay}-type ${pokemon.species.genus} from ${pokemon.species.generation}. Base stats total: ${totalStats}. Height: ${(pokemon.height / 10).toFixed(1)}m, Weight: ${(pokemon.weight / 10).toFixed(1)}kg.${evolutionInfo}`;

  return {
    title: `${formattedName} (#${pokemon.id}) - Stats, Evolution & Type | Pokemon Database`,
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
      title: `${formattedName} (#${pokemon.id}) - ${typesDisplay} Type | Pokemon Database`,
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
      title: `${formattedName} (#${pokemon.id}) | Pokemon Database`,
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
  const typesDisplay = pokemon.types.map(t => capitalize(t.type.name)).join("/");
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const highestStat = pokemon.stats.reduce((max, stat) =>
    stat.base_stat > max.base_stat ? stat : max, pokemon.stats[0]);

  const evolutionChain = pokemon.species.evolutionChain || [];
  const currentEvoIndex = evolutionChain.findIndex(e => e.name.toLowerCase() === pokemon.name.toLowerCase());
  const otherEvolutions = evolutionChain.filter(e => e.name.toLowerCase() !== pokemon.name.toLowerCase());

  // Gender ratio
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
      answer: `${capitalizedName} stands at ${(pokemon.height / 10).toFixed(1)} meters (${(pokemon.height * 3.937 / 10).toFixed(1)} inches) tall and weighs ${(pokemon.weight / 10).toFixed(1)} kg (${(pokemon.weight * 0.2205).toFixed(1)} lbs). This makes it a ${sizeCategory} Pokémon. Its weight can affect certain moves like Low Kick and Heavy Slam in battle.`,
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

  // ============ JSON-LD STRUCTURED DATA ============
  const pokemonJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Thing",
      "@id": `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}`,
      name: capitalizedName,
      alternateName: `Pokemon #${pokemon.id}`,
      description: `${capitalizedName} is a ${typesDisplay}-type ${pokemon.species.genus} from ${pokemon.species.generation}. ${pokemon.species.flavorText}`,
      image: {
        "@type": "ImageObject",
        url: pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default || "",
        caption: `${capitalizedName} official artwork`,
      },
      identifier: pokemon.id.toString(),
      additionalProperty: [
        { "@type": "PropertyValue", name: "National Dex Number", value: pokemon.id.toString() },
        { "@type": "PropertyValue", name: "Type", value: typesDisplay },
        { "@type": "PropertyValue", name: "Generation", value: pokemon.species.generation },
        { "@type": "PropertyValue", name: "Classification", value: pokemon.species.genus },
        { "@type": "PropertyValue", name: "Height", value: `${(pokemon.height / 10).toFixed(1)} m` },
        { "@type": "PropertyValue", name: "Weight", value: `${(pokemon.weight / 10).toFixed(1)} kg` },
        { "@type": "PropertyValue", name: "Total Base Stats", value: totalStats.toString() },
        ...pokemon.stats.map(stat => ({
          "@type": "PropertyValue",
          name: formatStatName(stat.stat.name),
          value: stat.base_stat.toString(),
        })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Pokédex", item: `${siteUrl}/pokedex` },
        { "@type": "ListItem", position: 3, name: capitalizedName, item: `${siteUrl}/pokemon/${pokemon.name.toLowerCase()}` },
      ],
    },
  ];

  return (
    <>
      {/* JSON-LD — Server-rendered for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pokemonJsonLd) }}
      />

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
                    ["Height", `${(pokemon.height / 10).toFixed(1)} m (${(pokemon.height * 3.937 / 10).toFixed(1)}″)`],
                    ["Weight", `${(pokemon.weight / 10).toFixed(1)} kg (${(pokemon.weight * 0.2205).toFixed(1)} lbs)`],
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

          {/* SEO Content Section — Server-rendered */}
          <article className="mt-8 md:mt-12 bg-white border-2 border-black slasher p-5 sm:p-6 md:p-8">
            <div className="inline-block bg-black px-3 py-1 mb-6">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">TRAINER INTEL</span>
            </div>

            <h2 className="font-grotesk font-bold text-xl sm:text-2xl md:text-3xl mb-5 sm:mb-6 text-black uppercase">
              About {capitalizedName}
            </h2>

            <div className="space-y-4">
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Looking for details on <strong className="text-black">{capitalizedName}</strong>?
                This <strong className="text-black">{typesDisplay}</strong>-type Pokémon was first introduced in{" "}
                <strong className="text-black">{pokemon.species.generation}</strong>.
                {pokemon.species.genus && (
                  <> It is known as the <strong className="text-black">{pokemon.species.genus}</strong>.</>
                )}
              </p>

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
                  evolution line.
                  {currentEvoIndex === 0 && " As the base form, it can evolve into stronger forms."}
                  {currentEvoIndex === evolutionChain.length - 1 && evolutionChain.length > 1 && " This is the final evolved form."}
                </p>
              )}

              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                In terms of <strong className="text-black">battle strategy</strong>,{" "}
                {capitalizedName} has a total base stat of{" "}
                <strong className="text-black">{totalStats}</strong>. Its highest attribute is{" "}
                <strong className="text-black">
                  {formatStatName(highestStat.stat.name)} ({highestStat.base_stat})
                </strong>, making it a strong choice for trainers looking for{" "}
                <strong className="text-black">{getBattleRole(highestStat.stat.name)}</strong>.
                <strong className="text-black"> Competitive viability:</strong> With a BST of <strong className="text-black">{totalStats}</strong>,
                {" "}{capitalizedName} is considered <strong className="text-black">{totalStats >= 600 ? "exceptional — pseudo-legendary tier" : totalStats >= 500 ? "very strong" : totalStats >= 400 ? "solid" : "moderate BST"}</strong>.
                {" "}Trainers should build movesets that capitalise on this strength while covering type weaknesses.
              </p>

              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Standing at <strong className="text-black">{(pokemon.height / 10).toFixed(1)} meters</strong> tall
                and weighing <strong className="text-black">{(pokemon.weight / 10).toFixed(1)} kg</strong>,{" "}
                {capitalizedName} is a{" "}
                {pokemon.height < 10 ? "compact" : pokemon.height < 20 ? "medium-sized" : "large"} Pokémon
                {pokemon.species.habitat && (
                  <> typically found in <strong className="text-black">{pokemon.species.habitat}</strong> environments</>
                )}.
                {" "}Whether you&apos;re building a competitive team or completing your Pokédex,{" "}
                {capitalizedName} offers unique strengths worth considering.
              </p>

              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                <strong className="text-black">Capture difficulty:</strong> {capitalizedName} has a capture rate of{" "}
                <strong className="text-black">{pokemon.species.captureRate}/255</strong> —{" "}
                {pokemon.species.captureRate >= 200 ? "very easy to catch with standard Poké Balls" :
                  pokemon.species.captureRate >= 120 ? "moderate difficulty; Great Balls recommended" :
                    pokemon.species.captureRate >= 60 ? "difficult; use Ultra Balls with a status condition" :
                      "extremely difficult — use Ultra Balls and apply Sleep or Paralysis first"}.
                {" "}Growth rate: <strong className="text-black">{capitalize(pokemon.species.growthRate)}</strong>.
              </p>

              {otherEvolutions.length > 0 && (
                <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                  Want to learn about related Pokémon? Check out{" "}
                  {otherEvolutions.map((evo, index) => {
                    const formatted = capitalize(evo.name);
                    const isLast = index === otherEvolutions.length - 1;
                    const separator = otherEvolutions.length > 2
                      ? (isLast ? ", or " : ", ")
                      : (isLast ? " or " : "");
                    return (
                      <span key={evo.name}>
                        {index > 0 && separator}
                        <Link href={`/pokemon/${evo.name.toLowerCase()}`} className="text-black underline font-semibold hover:no-underline">
                          {formatted}
                        </Link>
                      </span>
                    );
                  })}.
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
