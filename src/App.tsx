import { useState, useCallback } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterPanel } from './components/FilterPanel';
import { useFilterStore } from './store/filterStore';
import { usePokemonQuery } from './hooks/usePokemonQuery';

const queryClient = new QueryClient();

function AppContent() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const filters = useFilterStore();
  const { data: pokemon, isLoading, error, refetch } = usePokemonQuery(filters, shouldFetch);

  const handleFiltersChange = useCallback(() => {
    setShouldFetch(true);
  }, []);

  const handleGenerate = () => {
    setShouldFetch(true);
    refetch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Random Pokémon Team Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Create your perfect team with advanced filtering options
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel onFiltersChange={handleFiltersChange} isLoading={isLoading} />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Team</h2>
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isLoading ? 'Generating...' : 'Generate Team'}
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-red-800 font-semibold">Error Loading Pokémon</h3>
                      <p className="text-red-700 text-sm mt-1">
                        {error instanceof Error ? error.message : 'An unexpected error occurred'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!shouldFetch && !pokemon && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to Generate</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Configure your filters and click "Generate Team" to create your random Pokémon team
                  </p>
                </div>
              )}

              {isLoading && (
                <div className="text-center py-16">
                  <div className="inline-block w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Generating Your Team</h3>
                  <p className="text-gray-500">Please wait while we fetch your Pokémon...</p>
                </div>
              )}

              {pokemon && pokemon.length > 0 && !isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pokemon.map((poke) => (
                    <div
                      key={poke.id}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-md"
                    >
                      {filters.showSprites && poke.sprite && (
                        <img
                          src={poke.sprite}
                          alt={poke.name}
                          className="w-24 h-24 mx-auto mb-2"
                        />
                      )}
                      <h3 className="text-lg font-bold text-gray-800 text-center capitalize mb-2">
                        {poke.name}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {poke.types.map((type) => (
                          <span
                            key={type}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                      <p className="text-center text-gray-500 text-sm mt-2">#{poke.id}</p>
                    </div>
                  ))}
                </div>
              )}

              {pokemon && pokemon.length === 0 && !isLoading && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Pokémon Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    No Pokémon match your current filters. Try adjusting your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
