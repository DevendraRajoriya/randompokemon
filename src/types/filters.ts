export type PokemonType =
  | 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
  | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

export type Region =
  | 'kanto' | 'johto' | 'hoenn' | 'sinnoh' | 'unova'
  | 'kalos' | 'alola' | 'galar' | 'paldea';

export type LegendaryStatus = 'all' | 'legendary' | 'mythical' | 'non-legendary';

export type EvolutionStage = 'all' | 'basic' | 'stage1' | 'stage2';

export type Nature =
  | 'hardy' | 'lonely' | 'brave' | 'adamant' | 'naughty'
  | 'bold' | 'docile' | 'relaxed' | 'impish' | 'lax'
  | 'timid' | 'hasty' | 'serious' | 'jolly' | 'naive'
  | 'modest' | 'mild' | 'quiet' | 'bashful' | 'rash'
  | 'calm' | 'gentle' | 'sassy' | 'careful' | 'quirky';

export type Gender = 'all' | 'male' | 'female' | 'genderless';

export interface FilterState {
  teamSize: number;
  regions: Region[];
  types: PokemonType[];
  allTypes: boolean;
  legendaryStatus: LegendaryStatus;
  evolutionStage: EvolutionStage;
  showSprites: boolean;
  natures: Nature[];
  gender: Gender;
  includeForms: boolean;
}

export interface FilterChip {
  id: string;
  label: string;
  value: string | string[];
  onRemove: () => void;
}

export const ALL_TYPES: PokemonType[] = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

export const ALL_REGIONS: Region[] = [
  'kanto', 'johto', 'hoenn', 'sinnoh', 'unova',
  'kalos', 'alola', 'galar', 'paldea'
];

export const ALL_NATURES: Nature[] = [
  'hardy', 'lonely', 'brave', 'adamant', 'naughty',
  'bold', 'docile', 'relaxed', 'impish', 'lax',
  'timid', 'hasty', 'serious', 'jolly', 'naive',
  'modest', 'mild', 'quiet', 'bashful', 'rash',
  'calm', 'gentle', 'sassy', 'careful', 'quirky'
];

export const REGION_RANGES: Record<Region, { start: number; end: number }> = {
  kanto: { start: 1, end: 151 },
  johto: { start: 152, end: 251 },
  hoenn: { start: 252, end: 386 },
  sinnoh: { start: 387, end: 493 },
  unova: { start: 494, end: 649 },
  kalos: { start: 650, end: 721 },
  alola: { start: 722, end: 809 },
  galar: { start: 810, end: 905 },
  paldea: { start: 906, end: 1025 }
};
