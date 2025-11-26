# RandomPokemon

A cypherpunk-themed Pokémon team generator built with Vite, React, and TypeScript.

## Features

- **Cypherpunk Aesthetic**: Sharp corners, #FBE9BB background, and slasher accents
- **Modern Tech Stack**: Vite + React + TypeScript with routing and state management
- **PokeAPI Integration**: Batching, caching, and typed service layer
- **Team Generator**: Build your Pokémon team with a consistent data contract
- **Responsive Design**: Mobile-first grid system with responsive breakpoints

## Tech Stack

- **Frontend**: Vite, React 18, TypeScript
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Styling**: CSS with CSS custom properties for theming
- **API**: PokeAPI with custom service layer

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd randompokemon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main app layout
│   └── Layout.css
├── pages/              # Route components
│   ├── TeamGenerator.tsx
│   └── TeamGenerator.css
├── services/           # API service layer
│   └── pokemonService.ts
├── store/              # State management
│   └── usePokemonStore.ts
├── hooks/              # Custom React hooks
│   └── usePokemonData.ts
├── types/              # TypeScript type definitions
│   └── pokemon.ts
├── styles/             # Global styles and theme
│   ├── index.css       # Theme variables and base styles
│   └── App.css
├── utils/              # Utility functions
│   ├── constants.ts
│   └── formatters.ts
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Features in Detail

### Cypherpunk Theme

The application features a distinctive cypherpunk aesthetic with:
- **Background**: #FBE9BB (warm beige)
- **Typography**: Monospace fonts for that hacker aesthetic
- **Accents**: Slasher (/) symbols and sharp corners
- **Color Scheme**: High contrast black text on beige background
- **Grid System**: Responsive 12-column grid with custom breakpoints

### PokeAPI Service Layer

The service layer provides:
- **Request Batching**: Prevents duplicate API calls
- **Local Caching**: 15-minute TTL cache with LRU eviction
- **Type Safety**: Full TypeScript integration
- **Error Handling**: Robust error management
- **Performance Optimized**: Efficient data fetching patterns

### Data Contract

The service layer exposes a consistent API for:
- Basic Pokémon data
- Species information
- Evolution chains
- Type-based filtering
- Search functionality
- Multi-Pokemon fetching

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions (camelCase for variables, PascalCase for components)
- Maintain the cypherpunk aesthetic in all UI components
- Use the provided utility functions for data formatting

### Adding New Features

1. Define TypeScript types in `src/types/`
2. Add service methods to `src/services/pokemonService.ts`
3. Create custom hooks in `src/hooks/`
4. Build UI components in `src/components/` or `src/pages/`
5. Update state management in `src/store/` as needed

### Styling Guidelines

- Use CSS custom properties defined in `src/styles/index.css`
- Follow the BEM-like class naming convention
- Maintain responsive design patterns
- Keep the cypherpunk aesthetic consistent

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the linter: `npm run lint`
5. Build the project: `npm run build`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [Vite](https://vitejs.dev/) for the fast development tooling
- [React](https://reactjs.org/) for the UI framework