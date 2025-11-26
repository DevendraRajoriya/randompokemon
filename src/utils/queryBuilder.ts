import type { FilterState } from '../types/filters';
import { REGION_RANGES } from '../types/filters';

export interface PokemonQueryParams {
  count: number;
  regions?: number[];
  types?: string[];
  legendary?: boolean | null;
  evolutionStage?: string | null;
  natures?: string[];
  gender?: string | null;
  includeForms?: boolean;
}

export function buildOptimizedQuery(filters: FilterState): PokemonQueryParams {
  const params: PokemonQueryParams = {
    count: filters.teamSize
  };

  if (filters.regions.length > 0) {
    params.regions = filters.regions.flatMap(region => {
      const range = REGION_RANGES[region];
      const ids: number[] = [];
      for (let i = range.start; i <= range.end; i++) {
        ids.push(i);
      }
      return ids;
    });
  }

  if (!filters.allTypes && filters.types.length > 0) {
    params.types = filters.types;
  }

  if (filters.legendaryStatus !== 'all') {
    if (filters.legendaryStatus === 'legendary') {
      params.legendary = true;
    } else if (filters.legendaryStatus === 'non-legendary') {
      params.legendary = false;
    }
  }

  if (filters.evolutionStage !== 'all') {
    params.evolutionStage = filters.evolutionStage;
  }

  if (filters.natures.length > 0) {
    params.natures = filters.natures;
  }

  if (filters.gender !== 'all') {
    params.gender = filters.gender;
  }

  params.includeForms = filters.includeForms;

  return params;
}

export function getApiEndpoints(params: PokemonQueryParams): string[] {
  const endpoints: string[] = [];
  
  if (params.regions && params.regions.length > 0) {
    params.regions.forEach(id => {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
    });
  } else {
    endpoints.push('https://pokeapi.co/api/v2/pokemon?limit=1025');
  }

  if (params.types && params.types.length > 0) {
    params.types.forEach(type => {
      endpoints.push(`https://pokeapi.co/api/v2/type/${type}`);
    });
  }

  return endpoints;
}
