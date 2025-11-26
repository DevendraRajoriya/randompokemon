import { useQuery } from '@tanstack/react-query';
import { pokemonService } from '../services/pokemonService';
import { Pokemon } from '../types/pokemon';

export const usePokemon = (id: number | string) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => pokemonService.getPokemon(id),
    enabled: !!id,
  });
};

export const usePokemonSpecies = (id: number | string) => {
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => pokemonService.getPokemonSpecies(id),
    enabled: !!id,
  });
};

export const useEvolutionChain = (id: number) => {
  return useQuery({
    queryKey: ['evolution-chain', id],
    queryFn: () => pokemonService.getEvolutionChain(id),
    enabled: !!id,
  });
};

export const useCompletePokemonData = (id: number | string) => {
  return useQuery({
    queryKey: ['complete-pokemon', id],
    queryFn: () => pokemonService.getCompletePokemonData(id),
    enabled: !!id,
  });
};

export const usePokemonList = (limit: number = 20, offset: number = 0) => {
  return useQuery({
    queryKey: ['pokemon-list', limit, offset],
    queryFn: () => pokemonService.getPokemonList(limit, offset),
  });
};

export const useMultiplePokemon = (ids: (number | string)[]) => {
  return useQuery({
    queryKey: ['multiple-pokemon', ids],
    queryFn: () => pokemonService.getMultiplePokemon(ids),
    enabled: ids.length > 0,
  });
};

export const usePokemonByType = (typeName: string) => {
  return useQuery({
    queryKey: ['pokemon-by-type', typeName],
    queryFn: () => pokemonService.getPokemonByType(typeName),
    enabled: !!typeName,
  });
};

export const useSearchPokemon = (query: string) => {
  return useQuery({
    queryKey: ['search-pokemon', query],
    queryFn: () => pokemonService.searchPokemon(query),
    enabled: !!query && query.length > 0,
  });
};