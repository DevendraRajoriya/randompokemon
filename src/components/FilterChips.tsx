import { useFilterStore } from '../store/filterStore';

export function FilterChips() {
  const {
    teamSize,
    regions,
    types,
    allTypes,
    legendaryStatus,
    evolutionStage,
    natures,
    gender,
    includeForms,
    removeRegion,
    removeType,
    removeNature,
    setLegendaryStatus,
    setEvolutionStage,
    setGender,
    setIncludeForms
  } = useFilterStore();

  const chips: Array<{ id: string; label: string; onRemove: () => void }> = [];

  if (teamSize !== 6) {
    chips.push({
      id: 'teamSize',
      label: `Team Size: ${teamSize}`,
      onRemove: () => useFilterStore.setState({ teamSize: 6 })
    });
  }

  regions.forEach(region => {
    chips.push({
      id: `region-${region}`,
      label: region.charAt(0).toUpperCase() + region.slice(1),
      onRemove: () => removeRegion(region)
    });
  });

  if (!allTypes) {
    types.forEach(type => {
      chips.push({
        id: `type-${type}`,
        label: type.charAt(0).toUpperCase() + type.slice(1),
        onRemove: () => removeType(type)
      });
    });
  }

  if (legendaryStatus !== 'all') {
    chips.push({
      id: 'legendary',
      label: legendaryStatus.charAt(0).toUpperCase() + legendaryStatus.slice(1),
      onRemove: () => setLegendaryStatus('all')
    });
  }

  if (evolutionStage !== 'all') {
    chips.push({
      id: 'evolution',
      label: `Evolution: ${evolutionStage}`,
      onRemove: () => setEvolutionStage('all')
    });
  }

  natures.forEach(nature => {
    chips.push({
      id: `nature-${nature}`,
      label: nature.charAt(0).toUpperCase() + nature.slice(1),
      onRemove: () => removeNature(nature)
    });
  });

  if (gender !== 'all') {
    chips.push({
      id: 'gender',
      label: `Gender: ${gender}`,
      onRemove: () => setGender('all')
    });
  }

  if (includeForms) {
    chips.push({
      id: 'forms',
      label: 'Include Forms',
      onRemove: () => setIncludeForms(false)
    });
  }

  if (chips.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
      <span className="text-sm font-medium text-gray-700 self-center">Active Filters:</span>
      {chips.map(chip => (
        <button
          key={chip.id}
          onClick={chip.onRemove}
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          aria-label={`Remove ${chip.label} filter`}
        >
          <span>{chip.label}</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
