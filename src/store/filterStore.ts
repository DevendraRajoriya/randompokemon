import { create } from 'zustand';
import type {
  FilterState,
  Region,
  PokemonType,
  LegendaryStatus,
  EvolutionStage,
  Nature,
  Gender
} from '../types/filters';

interface FilterStore extends FilterState {
  setTeamSize: (size: number) => void;
  setRegions: (regions: Region[]) => void;
  setTypes: (types: PokemonType[]) => void;
  setAllTypes: (allTypes: boolean) => void;
  setLegendaryStatus: (status: LegendaryStatus) => void;
  setEvolutionStage: (stage: EvolutionStage) => void;
  setShowSprites: (show: boolean) => void;
  setNatures: (natures: Nature[]) => void;
  setGender: (gender: Gender) => void;
  setIncludeForms: (include: boolean) => void;
  resetFilters: () => void;
  removeRegion: (region: Region) => void;
  removeType: (type: PokemonType) => void;
  removeNature: (nature: Nature) => void;
}

const defaultState: FilterState = {
  teamSize: 6,
  regions: [],
  types: [],
  allTypes: true,
  legendaryStatus: 'all',
  evolutionStage: 'all',
  showSprites: true,
  natures: [],
  gender: 'all',
  includeForms: false
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...defaultState,

  setTeamSize: (size) => set({ teamSize: size }),
  
  setRegions: (regions) => set({ regions }),
  
  setTypes: (types) => set({ types, allTypes: types.length === 0 }),
  
  setAllTypes: (allTypes) => set({ allTypes, types: allTypes ? [] : [] }),
  
  setLegendaryStatus: (status) => set({ legendaryStatus: status }),
  
  setEvolutionStage: (stage) => set({ evolutionStage: stage }),
  
  setShowSprites: (show) => set({ showSprites: show }),
  
  setNatures: (natures) => set({ natures }),
  
  setGender: (gender) => set({ gender }),
  
  setIncludeForms: (include) => set({ includeForms: include }),
  
  resetFilters: () => set(defaultState),

  removeRegion: (region) =>
    set((state) => ({
      regions: state.regions.filter((r) => r !== region)
    })),

  removeType: (type) =>
    set((state) => ({
      types: state.types.filter((t) => t !== type),
      allTypes: state.types.filter((t) => t !== type).length === 0
    })),

  removeNature: (nature) =>
    set((state) => ({
      natures: state.natures.filter((n) => n !== nature)
    }))
}));
