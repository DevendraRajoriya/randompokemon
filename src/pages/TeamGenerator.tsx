import React, { useState } from 'react';
import { usePokemonList, useMultiplePokemon } from '../hooks/usePokemonData';
import { usePokemonStore } from '../store/usePokemonStore';
import { Pokemon } from '../types/pokemon';
import './TeamGenerator.css';

const TeamGenerator: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  const { data: pokemonList, isLoading: listLoading, error: listError } = usePokemonList(20, offset);
  const { data: pokemons, isLoading: detailsLoading } = useMultiplePokemon(
    pokemonList?.map(p => Number(p.url.split('/').filter(Boolean).pop())) || []
  );
  
  const { team, addToTeam, removeFromTeam } = usePokemonStore();

  const handleSelectPokemon = (pokemon: Pokemon) => {
    if (selectedIds.includes(pokemon.id)) {
      setSelectedIds(selectedIds.filter(id => id !== pokemon.id));
    } else {
      setSelectedIds([...selectedIds, pokemon.id]);
    }
  };

  const handleAddToTeam = () => {
    if (pokemons) {
      pokemons.forEach(pokemon => {
        if (selectedIds.includes(pokemon.id)) {
          addToTeam(pokemon);
        }
      });
      setSelectedIds([]);
    }
  };

  const handleRemoveFromTeam = (pokemonId: number) => {
    removeFromTeam(pokemonId);
  };

  const loadMore = () => {
    setOffset(offset + 20);
  };

  if (listLoading && !pokemonList) {
    return (
      <div className="team-generator">
        <div className="loading">
          <span className="slasher-accent">LOADING</span> POKEMON DATA...
        </div>
      </div>
    );
  }

  if (listError) {
    return (
      <div className="team-generator">
        <div className="error">
          <span className="slasher-accent">ERROR</span> LOADING POKEMON
        </div>
      </div>
    );
  }

  return (
    <div className="team-generator">
      <div className="team-generator-header">
        <h1>
          <span className="slasher-accent">TEAM</span> GENERATOR
        </h1>
        <p>Select Pokemon to build your cypherpunk team</p>
      </div>

      <div className="team-generator-content">
        <div className="pokemon-selection">
          <div className="selection-header">
            <h2>
              <span className="slasher-accent">SELECT</span> POKEMON
            </h2>
            <div className="selection-actions">
              <button 
                className="btn"
                onClick={handleAddToTeam}
                disabled={selectedIds.length === 0}
              >
                Add {selectedIds.length} to Team
              </button>
            </div>
          </div>

          <div className="pokemon-grid">
            {pokemons?.map((pokemon) => (
              <div 
                key={pokemon.id}
                className={`pokemon-card ${selectedIds.includes(pokemon.id) ? 'selected' : ''}`}
                onClick={() => handleSelectPokemon(pokemon)}
              >
                <div className="pokemon-image">
                  <img 
                    src={pokemon.sprites.front_default || ''} 
                    alt={pokemon.name}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Crect width="96" height="96" fill="%23FBE9BB"/%3E%3Ctext x="48" y="48" text-anchor="middle" dy=".3em" fill="black" font-family="monospace" font-size="12"%3E%3F%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="pokemon-info">
                  <h3>{pokemon.name.toUpperCase()}</h3>
                  <p>#{String(pokemon.id).padStart(3, '0')}</p>
                  <div className="pokemon-types">
                    {pokemon.types.map((type) => (
                      <span key={type.type.name} className="type-badge">
                        {type.type.name.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button 
              className="btn"
              onClick={loadMore}
              disabled={listLoading}
            >
              {listLoading ? 'LOADING...' : 'LOAD MORE'}
            </button>
          </div>
        </div>

        <div className="current-team">
          <h2>
            <span className="slasher-accent">CURRENT</span> TEAM ({team.length}/6)
          </h2>
          
          {team.length === 0 ? (
            <div className="empty-team">
              <p>No Pokemon selected yet</p>
              <p>Select Pokemon from the list to build your team</p>
            </div>
          ) : (
            <div className="team-grid">
              {team.map((pokemon) => (
                <div key={pokemon.id} className="team-member">
                  <div className="team-member-image">
                    <img 
                      src={pokemon.sprites.front_default || ''} 
                      alt={pokemon.name}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect width="64" height="64" fill="%23FBE9BB"/%3E%3Ctext x="32" y="32" text-anchor="middle" dy=".3em" fill="black" font-family="monospace" font-size="10"%3E%3F%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="team-member-info">
                    <h4>{pokemon.name.toUpperCase()}</h4>
                    <p>#{String(pokemon.id).padStart(3, '0')}</p>
                    <button 
                      className="btn btn-small"
                      onClick={() => handleRemoveFromTeam(pokemon.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamGenerator;