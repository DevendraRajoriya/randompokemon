# Random Pokémon Team Generator

A modern React application with an advanced filter panel for generating random Pokémon teams with customizable criteria.

## Features

### Advanced Filter Panel

The application includes a comprehensive filter panel with the following controls:

- **Team Size**: Adjustable slider (1-12 Pokémon, default: 6)
- **Regions**: Multi-select for Pokémon regions (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea)
- **Types**: Multi-select with "All Types" toggle (Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy)
- **Legendary Status**: Dropdown (All, Legendary, Mythical, Non-Legendary)
- **Evolution Stage**: Dropdown (All, Basic, Stage 1, Stage 2)
- **Sprite Display**: Toggle to show/hide Pokémon sprites
- **Natures**: Multi-select from all 25 Pokémon natures
- **Gender**: Dropdown (All, Male, Female, Genderless)
- **Forms**: Toggle to include alternate forms

### Key Functionalities

- **Global State Management**: All filter selections are persisted using Zustand
- **Filter Chips**: Active filters are displayed as removable chips below the filter panel
- **Debounced Callbacks**: Filter changes trigger debounced callbacks to prevent excessive API calls
  - Team size: 300ms debounce
  - Other filters: 500ms debounce (via useDebounce hook)
- **Query Optimization**: Filters feed into an optimized query builder that:
  - Pre-filters species lists based on region/type before requesting individual Pokémon
  - Only calls needed endpoints (e.g., filters by region before type filtering)
  - Caches results using React Query
- **Loading States**: Displays loading spinner during data fetching
- **Empty States**: Shows helpful messages when no Pokémon match filters or before generation
- **Error Handling**: Gracefully handles API errors with user-friendly messages
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Responsive Layout**: 
  - Desktop: Side-by-side filter panel and results
  - Mobile: Collapsible accordion-style filter panel

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Build tool and development server
- **Zustand** - Lightweight state management
- **React Query** (@tanstack/react-query) - Data fetching and caching
- **TailwindCSS** - Utility-first CSS framework
- **PokeAPI** - RESTful Pokémon API

## Project Structure

```
src/
├── components/
│   ├── FilterPanel.tsx      # Main filter panel component
│   └── FilterChips.tsx       # Active filter chips display
├── store/
│   └── filterStore.ts        # Zustand store for filter state
├── hooks/
│   ├── useDebounce.ts        # Debounce hook for filter changes
│   └── usePokemonQuery.ts    # Optimized Pokémon data fetching
├── types/
│   └── filters.ts            # TypeScript type definitions
├── utils/
│   └── queryBuilder.ts       # Query optimization logic
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles
```

## Development

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint
```

## Usage

1. **Configure Filters**: Use the filter panel to set your desired criteria
2. **View Active Filters**: See active filters as chips below the filter panel
3. **Generate Team**: Click the "Generate Team" button to create a random team
4. **Remove Filters**: Click on individual chips to remove specific filters, or use "Reset Filters" to clear all

## Architecture Highlights

### State Management

The application uses Zustand for global state management, providing a simple and performant way to manage filter state across components.

### Query Optimization

The query builder optimizes API calls by:
1. Filtering by region first (reduces ID pool)
2. Then filtering by type (further narrows selection)
3. Only fetching individual Pokémon data for the final selection
4. Using React Query for caching and request deduplication

### Accessibility

- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

### Responsive Design

- Mobile-first approach
- Collapsible filter panel on narrow screens
- Grid layout adapts to screen size
- Touch-friendly controls

## API Integration

The application uses [PokeAPI](https://pokeapi.co/) to fetch Pokémon data. The query builder optimizes API calls to minimize requests and improve performance.

## License

MIT
