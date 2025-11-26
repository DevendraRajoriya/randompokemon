import { useQuery } from '@tanstack/react-query';
import type { FilterState } from '../types/filters';
import { buildOptimizedQuery } from '../utils/queryBuilder';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite?: string;
}

async function fetchPokemon(filters: FilterState): Promise<Pokemon[]> {
  const query = buildOptimizedQuery(filters);
  
  try {
    let pokemonIds: number[] = [];

    if (query.regions && query.regions.length > 0) {
      pokemonIds = query.regions;
    } else {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await response.json();
      pokemonIds = data.results.map((_: unknown, index: number) => index + 1);
    }

    if (query.types && query.types.length > 0) {
      const typePromises = query.types.map(type =>
        fetch(`https://pokeapi.co/api/v2/type/${type}`).then(res => res.json())
      );
      const typeData = await Promise.all(typePromises);
      const pokemonByType = new Set(
        typeData.flatMap(data => data.pokemon.map((p: { pokemon: { url: string } }) => {
          const id = parseInt(p.pokemon.url.split('/').slice(-2, -1)[0]);
          return id;
        }))
      );
      pokemonIds = pokemonIds.filter(id => pokemonByType.has(id));
    }

    const shuffled = [...pokemonIds].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, query.count);

    const pokemonPromises = selected.map(id =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
    );
    
    const pokemonData = await Promise.all(pokemonPromises);

    return pokemonData.map(data => ({
      id: data.id,
      name: data.name,
      types: data.types.map((t: { type: { name: string } }) => t.type.name),
      sprite: filters.showSprites ? data.sprites.front_default : undefined
    }));
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
}

export function usePokemonQuery(filters: FilterState, enabled: boolean = true) {
  return useQuery({
    queryKey: ['pokemon', filters],
    queryFn: () => fetchPokemon(filters),
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  });
}
