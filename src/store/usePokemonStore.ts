import { create } from 'zustand';
import { Pokemon, PokemonFilter } from '../types/pokemon';

interface PokemonState {
  selectedPokemon: Pokemon | null;
  team: Pokemon[];
  filters: PokemonFilter;
  isLoading: boolean;
  error: string | null;
}

interface PokemonActions {
  setSelectedPokemon: (pokemon: Pokemon | null) => void;
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (pokemonId: number) => void;
  clearTeam: () => void;
  setFilters: (filters: PokemonFilter) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePokemonStore = create<PokemonState & PokemonActions>((set, get) => ({
  selectedPokemon: null,
  team: [],
  filters: {},
  isLoading: false,
  error: null,

  setSelectedPokemon: (pokemon) => set({ selectedPokemon: pokemon }),

  addToTeam: (pokemon) => set((state) => {
    const exists = state.team.some(p => p.id === pokemon.id);
    if (exists) return state;
    return { team: [...state.team, pokemon] };
  }),

  removeFromTeam: (pokemonId) => set((state) => ({
    team: state.team.filter(p => p.id !== pokemonId)
  })),

  clearTeam: () => set({ team: [] }),

  setFilters: (filters) => set({ filters }),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),
}));