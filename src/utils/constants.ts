export const POKEAPI_ENDPOINTS = {
  BASE_URL: 'https://pokeapi.co/api/v2',
  POKEMON: '/pokemon',
  POKEMON_SPECIES: '/pokemon-species',
  EVOLUTION_CHAIN: '/evolution-chain',
  TYPE: '/type',
  GENERATION: '/generation',
} as const;

export const CACHE_CONFIG = {
  MAX_SIZE: 1000,
  TTL: 1000 * 60 * 15, // 15 minutes
} as const;

export const TEAM_LIMIT = 6;

export const POKEMON_TYPES = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic',
  'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
] as const;