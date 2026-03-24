/**
 * Skeleton Loader Component
 * Prevents Cumulative Layout Shift (CLS) by reserving space
 * Improves perceived performance during loading states
 */

export const PokemonCardSkeleton = () => {
  return (
    <div className="bg-white border-2 md:border-4 border-black slasher p-2 md:p-6 animate-pulse">
      {/* ID Badge & Share Button */}
      <div className="flex justify-between items-center mb-2 md:mb-4">
        <div className="w-16 h-5 bg-gray-300 rounded"></div>
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
      </div>

      {/* Pokemon Image Skeleton - Fixed aspect ratio */}
      <div className="relative w-full aspect-square mb-2 md:mb-4 bg-gray-200 rounded"></div>

      {/* Name Skeleton */}
      <div className="h-6 md:h-8 bg-gray-300 rounded mb-2 md:mb-3"></div>

      {/* Type Badges Skeleton */}
      <div className="flex gap-2 mb-2 md:mb-6">
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
      </div>

      {/* Action Buttons Skeleton */}
      <div className="grid grid-cols-2 gap-1.5 md:gap-3">
        <div className="h-11 bg-gray-300 rounded"></div>
        <div className="h-11 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export const TeamGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const SearchSuggestionSkeleton = () => {
  return (
    <div className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3 animate-pulse">
      <div className="w-10 h-10 bg-gray-300 rounded flex-shrink-0"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-300 rounded w-32"></div>
      </div>
      <div className="h-3 bg-gray-300 rounded w-12"></div>
    </div>
  );
};

export default PokemonCardSkeleton;
