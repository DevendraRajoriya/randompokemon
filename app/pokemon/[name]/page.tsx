"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Loader2, ExternalLink } from "lucide-react";
import Image from "next/image";

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
  };
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

export default function PokemonDetail() {
  const params = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${params.name}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.name) {
      fetchPokemon();
    }
  }, [params.name]);

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

  const formatStatName = (name: string): string => {
    return name
      .replace("special-attack", "SP.ATK")
      .replace("special-defense", "SP.DEF")
      .toUpperCase();
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-cream p-4 md:p-8 flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo" size={64} />
      </main>
    );
  }

  if (!pokemon) {
    return (
      <main className="min-h-screen bg-cream p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-charcoal text-lg mb-6">
            POKÉMON NOT FOUND
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-marigold hover:bg-marigold-hover text-black font-grotesk font-bold px-8 py-4 border-2 border-black"
          >
            RETURN HOME
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 mb-8 bg-black text-cream font-mono text-sm px-4 py-2 hover:bg-charcoal transition-colors"
        >
          <ArrowLeft size={16} />
          BACK TO PROTOCOL
        </button>

        {/* Header */}
        <div className="bg-black text-cream p-6 slasher mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-grotesk font-bold text-4xl md:text-5xl uppercase mb-2">
                {pokemon.name}
              </h1>
              <p className="font-mono text-sm">
                ID: <span className="text-marigold">#{String(pokemon.id).padStart(4, "0")}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Image & Basic Info */}
          <div>
            {/* Image Card */}
            <div className="bg-white border-4 border-black slasher p-6 mb-6">
              <div className="relative w-full h-64 bg-cream mb-4">
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  fill
                  className="object-contain blend-multiply"
                  unoptimized
                />
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                {pokemon.types.map((typeInfo) => (
                  <span
                    key={typeInfo.type.name}
                    className="font-mono text-xs px-4 py-2 text-white uppercase border border-black"
                    style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
                  >
                    {typeInfo.type.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Physical Attributes */}
            <div className="bg-white border-4 border-black slasher p-6">
              <h3 className="font-grotesk font-bold text-xl mb-4 text-black">
                PHYSICAL DATA
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b-2 border-brass pb-2">
                  <span className="font-mono text-sm text-charcoal">HEIGHT</span>
                  <span className="font-mono text-sm text-black font-bold">
                    {(pokemon.height / 10).toFixed(1)} m
                  </span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-brass pb-2">
                  <span className="font-mono text-sm text-charcoal">WEIGHT</span>
                  <span className="font-mono text-sm text-black font-bold">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Abilities */}
          <div>
            {/* Stats Card */}
            <div className="bg-white border-4 border-black slasher p-6 mb-6">
              <h3 className="font-grotesk font-bold text-xl mb-4 text-black">
                BASE STATS
              </h3>
              <div className="space-y-3">
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-charcoal">
                        {formatStatName(stat.stat.name)}
                      </span>
                      <span className="font-mono text-xs text-black font-bold">
                        {stat.base_stat}
                      </span>
                    </div>
                    <div className="w-full bg-cream h-2 border border-black">
                      <div
                        className="bg-indigo h-full"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abilities Card */}
            <div className="bg-white border-4 border-black slasher p-6 mb-6">
              <h3 className="font-grotesk font-bold text-xl mb-4 text-black">
                ABILITIES
              </h3>
              <div className="space-y-2">
                {pokemon.abilities.map((abilityInfo, index) => (
                  <div
                    key={index}
                    className="bg-cream border-2 border-brass px-4 py-2"
                  >
                    <span className="font-mono text-sm text-black uppercase">
                      {abilityInfo.ability.name.replace("-", " ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Merch Button */}
            <a
              href={`https://www.amazon.com/s?k=${pokemon.name}+pokemon+plush&tag=YOUR_TAG_HERE`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brass hover:bg-opacity-90 text-black font-grotesk font-bold text-lg px-6 py-4 text-center border-2 border-black transition-all duration-200 slasher"
            >
              <span className="flex items-center justify-center gap-2">
                <ExternalLink size={20} />
                GET MERCH
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
