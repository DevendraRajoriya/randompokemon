import { 
  Pokemon, 
  PokemonSpecies, 
  EvolutionChain, 
  PokemonFilter, 
  CacheKey,
  NamedAPIResource 
} from '../types/pokemon';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// Local cache implementation
class PokemonCache {
  private cache = new Map<string, any>();
  private maxSize = 1000;
  private ttl = 1000 * 60 * 15; // 15 minutes

  private generateKey(key: CacheKey): string {
    return `${key.pokemonId}-${JSON.stringify(key.filters)}`;
  }

  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > this.ttl;
  }

  get(key: CacheKey): any | null {
    const cacheKey = this.generateKey(key);
    const entry = this.cache.get(cacheKey);
    
    if (!entry) return null;
    
    if (this.isExpired(entry.timestamp)) {
      this.cache.delete(cacheKey);
      return null;
    }
    
    // Move to end (LRU)
    this.cache.delete(cacheKey);
    this.cache.set(cacheKey, entry);
    
    return entry.data;
  }

  set(key: CacheKey, data: any): void {
    const cacheKey = this.generateKey(key);
    
    // Remove oldest if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

const pokemonCache = new PokemonCache();

// Request batching implementation
class RequestBatcher {
  private pendingRequests = new Map<string, Promise<any>>();
  
  async batchRequest<T>(key: string, requestFn: () => Promise<T>): Promise<T> {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key) as Promise<T>;
    }

    const promise = requestFn().finally(() => {
      this.pendingRequests.delete(key);
    });

    this.pendingRequests.set(key, promise);
    return promise;
  }
}

const requestBatcher = new RequestBatcher();

// Base API client
class PokeAPIClient {
  private async fetchFromAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${POKEAPI_BASE_URL}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`PokeAPI error: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  }

  async getPokemon(id: number | string): Promise<Pokemon> {
    const cacheKey: CacheKey = { pokemonId: Number(id), filters: {} };
    const cached = pokemonCache.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    const data = await requestBatcher.batchRequest(
      `pokemon-${id}`,
      () => this.fetchFromAPI<Pokemon>(`/pokemon/${id}`)
    );

    pokemonCache.set(cacheKey, data);
    return data;
  }

  async getPokemonSpecies(id: number | string): Promise<PokemonSpecies> {
    const cacheKey: CacheKey = { pokemonId: Number(id), filters: {} };
    const cached = pokemonCache.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    const data = await requestBatcher.batchRequest(
      `pokemon-species-${id}`,
      () => this.fetchFromAPI<PokemonSpecies>(`/pokemon-species/${id}`)
    );

    pokemonCache.set(cacheKey, data);
    return data;
  }

  async getEvolutionChain(id: number): Promise<EvolutionChain> {
    const cacheKey: CacheKey = { pokemonId: id, filters: {} };
    const cached = pokemonCache.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    const data = await requestBatcher.batchRequest(
      `evolution-chain-${id}`,
      () => this.fetchFromAPI<EvolutionChain>(`/evolution-chain/${id}`)
    );

    pokemonCache.set(cacheKey, data);
    return data;
  }

  async getPokemonList(limit: number = 20, offset: number = 0): Promise<{
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
  }> {
    return this.fetchFromAPI(`/pokemon?limit=${limit}&offset=${offset}`);
  }

  async getType(name: string): Promise<any> {
    return requestBatcher.batchRequest(
      `type-${name}`,
      () => this.fetchFromAPI(`/type/${name}`)
    );
  }

  async getGeneration(name: string): Promise<any> {
    return requestBatcher.batchRequest(
      `generation-${name}`,
      () => this.fetchFromAPI(`/generation/${name}`)
    );
  }
}

const pokeAPIClient = new PokeAPIClient();

// Typed helper functions
export const pokemonService = {
  // Get basic Pokemon data
  async getPokemon(id: number | string): Promise<Pokemon> {
    return pokeAPIClient.getPokemon(id);
  },

  // Get Pokemon species data (includes flavor text, genera, etc.)
  async getPokemonSpecies(id: number | string): Promise<PokemonSpecies> {
    return pokeAPIClient.getPokemonSpecies(id);
  },

  // Get evolution chain data
  async getEvolutionChain(id: number): Promise<EvolutionChain> {
    return pokeAPIClient.getEvolutionChain(id);
  },

  // Get list of Pokemon with optional filtering
  async getPokemonList(
    limit: number = 20, 
    offset: number = 0,
    filters?: PokemonFilter
  ): Promise<NamedAPIResource[]> {
    const response = await pokeAPIClient.getPokemonList(limit, offset);
    let results = response.results;

    // Apply basic filtering (more complex filtering would be done client-side)
    if (filters) {
      if (filters.type) {
        // This would require additional API calls to filter by type
        // For now, we'll return unfiltered and let the client handle it
      }
    }

    return results;
  },

  // Get Pokemon with all related data
  async getCompletePokemonData(id: number | string): Promise<{
    pokemon: Pokemon;
    species: PokemonSpecies;
    evolutionChain?: EvolutionChain;
  }> {
    const [pokemon, species] = await Promise.all([
      pokeAPIClient.getPokemon(id),
      pokeAPIClient.getPokemonSpecies(id)
    ]);

    let evolutionChain: EvolutionChain | undefined;
    if (species.evolution_chain) {
      const evolutionChainId = species.evolution_chain.url.split('/').filter(Boolean).pop();
      if (evolutionChainId) {
        evolutionChain = await pokeAPIClient.getEvolutionChain(Number(evolutionChainId));
      }
    }

    return { pokemon, species, evolutionChain };
  },

  // Get multiple Pokemon in parallel
  async getMultiplePokemon(ids: (number | string)[]): Promise<Pokemon[]> {
    const promises = ids.map(id => pokeAPIClient.getPokemon(id));
    return Promise.all(promises);
  },

  // Search Pokemon by name
  async searchPokemon(query: string): Promise<Pokemon[]> {
    try {
      const pokemon = await pokeAPIClient.getPokemon(query.toLowerCase());
      return [pokemon];
    } catch (error) {
      return [];
    }
  },

  // Get Pokemon by type
  async getPokemonByType(typeName: string): Promise<Pokemon[]> {
    try {
      const typeData = await pokeAPIClient.getType(typeName);
      const pokemonPromises = typeData.pokemon.map((p: any) => 
        pokeAPIClient.getPokemon(p.pokemon.name)
      );
      return Promise.all(pokemonPromises);
    } catch (error) {
      return [];
    }
  },

  // Cache management
  clearCache(): void {
    pokemonCache.clear();
  },

  getCacheSize(): number {
    return pokemonCache.size();
  }
};

export default pokemonService;