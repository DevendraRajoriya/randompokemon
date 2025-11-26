import { useState, useEffect } from 'react';
import { useFilterStore } from '../store/filterStore';
import { ALL_TYPES, ALL_REGIONS, ALL_NATURES } from '../types/filters';
import type { PokemonType, Region, Nature, LegendaryStatus, EvolutionStage, Gender } from '../types/filters';
import { FilterChips } from './FilterChips';
import { useDebounce } from '../hooks/useDebounce';

interface FilterPanelProps {
  onFiltersChange?: () => void;
  isLoading?: boolean;
}

export function FilterPanel({ onFiltersChange, isLoading }: FilterPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    teamSize,
    regions,
    types,
    allTypes,
    legendaryStatus,
    evolutionStage,
    showSprites,
    natures,
    gender,
    includeForms,
    setTeamSize,
    setRegions,
    setTypes,
    setAllTypes,
    setLegendaryStatus,
    setEvolutionStage,
    setShowSprites,
    setNatures,
    setGender,
    setIncludeForms,
    resetFilters
  } = useFilterStore();

  const debouncedTeamSize = useDebounce(teamSize, 300);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange();
    }
  }, [debouncedTeamSize, regions, types, allTypes, legendaryStatus, evolutionStage, showSprites, natures, gender, includeForms, onFiltersChange]);

  const handleTypeToggle = (type: PokemonType) => {
    if (types.includes(type)) {
      setTypes(types.filter(t => t !== type));
    } else {
      setTypes([...types, type]);
    }
  };

  const handleRegionToggle = (region: Region) => {
    if (regions.includes(region)) {
      setRegions(regions.filter(r => r !== region));
    } else {
      setRegions([...regions, region]);
    }
  };

  const handleNatureToggle = (nature: Nature) => {
    if (natures.includes(nature)) {
      setNatures(natures.filter(n => n !== nature));
    } else {
      setNatures([...natures, nature]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Advanced Filters</h2>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden p-2 hover:bg-white/20 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isCollapsed ? 'Expand filters' : 'Collapse filters'}
            aria-expanded={!isCollapsed}
          >
            <svg
              className={`w-6 h-6 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isMobile && isCollapsed ? 'hidden' : 'block'}`}>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="team-size" className="block text-sm font-semibold text-gray-700">
              Team Size
            </label>
            <div className="flex items-center gap-4">
              <input
                id="team-size"
                type="range"
                min="1"
                max="12"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Team size slider"
              />
              <span className="text-lg font-bold text-gray-800 w-8 text-center">{teamSize}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Regions</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ALL_REGIONS.map(region => (
                <button
                  key={region}
                  onClick={() => handleRegionToggle(region)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleRegionToggle(region))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    regions.includes(region)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  role="checkbox"
                  aria-checked={regions.includes(region)}
                >
                  {region.charAt(0).toUpperCase() + region.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold text-gray-700">Types</label>
              <button
                onClick={() => setAllTypes(!allTypes)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  allTypes
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Types
              </button>
            </div>
            {!allTypes && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {ALL_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => handleTypeToggle(type)}
                    onKeyDown={(e) => handleKeyDown(e, () => handleTypeToggle(type))}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      types.includes(type)
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    role="checkbox"
                    aria-checked={types.includes(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="legendary-status" className="block text-sm font-semibold text-gray-700">
                Legendary Status
              </label>
              <select
                id="legendary-status"
                value={legendaryStatus}
                onChange={(e) => setLegendaryStatus(e.target.value as LegendaryStatus)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All</option>
                <option value="legendary">Legendary</option>
                <option value="mythical">Mythical</option>
                <option value="non-legendary">Non-Legendary</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="evolution-stage" className="block text-sm font-semibold text-gray-700">
                Evolution Stage
              </label>
              <select
                id="evolution-stage"
                value={evolutionStage}
                onChange={(e) => setEvolutionStage(e.target.value as EvolutionStage)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All</option>
                <option value="basic">Basic</option>
                <option value="stage1">Stage 1</option>
                <option value="stage2">Stage 2</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Natures</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-md">
              {ALL_NATURES.map(nature => (
                <button
                  key={nature}
                  onClick={() => handleNatureToggle(nature)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleNatureToggle(nature))}
                  className={`px-2 py-1 rounded text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    natures.includes(nature)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  role="checkbox"
                  aria-checked={natures.includes(nature)}
                >
                  {nature.charAt(0).toUpperCase() + nature.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-semibold text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showSprites}
                  onChange={(e) => setShowSprites(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Show Sprites</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeForms}
                  onChange={(e) => setIncludeForms(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Include Forms</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={resetFilters}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled={isLoading}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="px-6 pb-6">
          <FilterChips />
        </div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-700 font-medium">Generating team...</span>
          </div>
        </div>
      )}
    </div>
  );
}
