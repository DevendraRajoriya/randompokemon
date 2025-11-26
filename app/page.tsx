"use client";

import { useState } from "react";
import { Loader2, Zap, ExternalLink, Database } from "lucide-react";
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

export default function Home() {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [terminalStatus, setTerminalStatus] = useState("IDLE");

  const generateTeam = async () => {
    setLoading(true);
    setTerminalStatus("FETCHING...");
    setTeam([]);

    try {
      const uniqueIds = new Set<number>();
      while (uniqueIds.size < 6) {
        uniqueIds.add(Math.floor(Math.random() * 1025) + 1);
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
