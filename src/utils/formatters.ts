import { Pokemon } from '../types/pokemon';

export const formatPokemonId = (id: number): string => {
  return String(id).padStart(3, '0');
};

export const formatPokemonName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const formatPokemonWeight = (weight: number): string => {
  return `${(weight / 10).toFixed(1)} kg`;
};

export const formatPokemonHeight = (height: number): string => {
  return `${(height / 10).toFixed(1)} m`;
};

export const getPokemonTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  
  return colors[type.toLowerCase()] || '#68A090';
};

export const getStatAbbreviation = (statName: string): string => {
  const abbreviations: Record<string, string> = {
    'hp': 'HP',
    'attack': 'ATK',
    'defense': 'DEF',
    'special-attack': 'SPA',
    'special-defense': 'SPD',
    'speed': 'SPE',
  };
  
  return abbreviations[statName.toLowerCase()] || statName.toUpperCase();
};

export const calculateStatTotal = (pokemon: Pokemon): number => {
  return pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);
};

export const getPrimaryType = (pokemon: Pokemon): string => {
  return pokemon.types[0]?.type.name || 'unknown';
};

export const isDualType = (pokemon: Pokemon): boolean => {
  return pokemon.types.length > 1;
};