"use client";

import { useState, useEffect } from "react";
import { X, Download, FolderOpen, Trash2 } from "lucide-react";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

interface SavedTeam {
  id: string;
  name: string;
  pokemon: Pokemon[];
  savedAt: string;
}

interface SavedTeamsProps {
  currentTeam?: Pokemon[];
  onLoadTeam?: (team: Pokemon[]) => void;
}

export default function SavedTeams({ currentTeam, onLoadTeam }: SavedTeamsProps) {
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  const [teamName, setTeamName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showTeamsList, setShowTeamsList] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Load saved teams from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("savedPokemonTeams");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedTeams(parsed);
        } else {
          localStorage.removeItem("savedPokemonTeams");
        }
      }
    } catch (error) {
      console.error("Error loading saved teams:", error);
      localStorage.removeItem("savedPokemonTeams");
    }
  }, []);

  // Save team to localStorage
  const saveTeam = () => {
    if (!currentTeam || currentTeam.length === 0) return;

    const newTeam: SavedTeam = {
      id: Date.now().toString(),
      name: teamName || `Team ${savedTeams.length + 1}`,
      pokemon: currentTeam,
      savedAt: new Date().toISOString(),
    };

    const updated = [...savedTeams, newTeam];
    setSavedTeams(updated);
    localStorage.setItem("savedPokemonTeams", JSON.stringify(updated));

    setTeamName("");
    setShowSaveDialog(false);
  };

  // Delete a saved team
  const deleteTeam = (teamId: string) => {
    const updated = savedTeams.filter((t) => t.id !== teamId);
    setSavedTeams(updated);
    localStorage.setItem("savedPokemonTeams", JSON.stringify(updated));
    setConfirmDeleteId(null);
  };

  // Load a saved team
  const loadTeam = (team: SavedTeam) => {
    if (onLoadTeam) {
      onLoadTeam(team.pokemon);
    }
    setShowTeamsList(false);
  };

  // Format date for display
  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Unknown date";
    }
  };

  return (
    <>
      {/* Action Buttons */}
      <div className="flex gap-2 md:gap-3">
        {/* Save Current Team */}
        {currentTeam && currentTeam.length > 0 && (
          <button
            onClick={() => setShowSaveDialog(true)}
            className="bg-green-600 text-white font-bold px-5 py-3 border-2 border-black hover:bg-green-700 transition-all slasher flex items-center gap-2 min-h-[48px] btn-hover-lift"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Save Team</span>
            <span className="sm:hidden">Save</span>
          </button>
        )}

        {/* View Saved Teams */}
        {savedTeams.length > 0 && (
          <button
            onClick={() => setShowTeamsList(true)}
            className="bg-indigo-600 text-white font-bold px-5 py-3 border-2 border-black hover:bg-indigo-700 transition-all slasher flex items-center gap-2 min-h-[48px] btn-hover-lift"
          >
            <FolderOpen size={18} />
            <span className="hidden sm:inline">My Teams ({savedTeams.length})</span>
            <span className="sm:hidden">{savedTeams.length}</span>
          </button>
        )}
      </div>

      {/* Save Dialog */}
      {showSaveDialog && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setShowSaveDialog(false)}
        >
          <div
            className="bg-white border-4 border-black max-w-md w-full p-6 slasher animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold font-grotesk">SAVE TEAM</h3>
              <button
                onClick={() => setShowSaveDialog(false)}
                className="hover:bg-gray-100 p-2 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter team name (optional)"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveTeam()}
              className="w-full border-2 border-black px-4 py-3 font-mono text-base mb-4 min-h-[48px]"
              autoComplete="off"
              autoFocus
            />
            {/* Preview */}
            {currentTeam && currentTeam.length > 0 && (
              <div className="flex gap-1 mb-4 flex-wrap">
                {currentTeam.map((p) => (
                  <span
                    key={p.id}
                    className="font-mono text-xs bg-cream border border-black px-2 py-1"
                  >
                    {p.name.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={saveTeam}
                className="flex-1 bg-green-600 text-white font-bold py-3 border-2 border-black hover:bg-green-700 transition-all min-h-[48px]"
              >
                Save
              </button>
              <button
                onClick={() => setShowSaveDialog(false)}
                className="flex-1 bg-gray-200 text-black font-bold py-3 border-2 border-black hover:bg-gray-300 transition-all min-h-[48px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teams List Modal */}
      {showTeamsList && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setShowTeamsList(false)}
        >
          <div
            className="bg-white border-4 border-black max-w-lg w-full max-h-[85vh] flex flex-col slasher animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b-2 border-black">
              <h3 className="text-xl font-bold font-grotesk uppercase">
                Saved Teams ({savedTeams.length})
              </h3>
              <button
                onClick={() => setShowTeamsList(false)}
                className="hover:bg-gray-100 p-2 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Teams List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {savedTeams.length === 0 ? (
                <div className="text-center py-8">
                  <p className="font-mono text-charcoal/60">No saved teams yet.</p>
                  <p className="font-mono text-xs text-charcoal/40 mt-2">
                    Generate a team and click &quot;Save&quot; to save it.
                  </p>
                </div>
              ) : (
                savedTeams.map((team) => (
                  <div
                    key={team.id}
                    className="border-2 border-black bg-cream p-4 slasher hover:shadow-md transition-all"
                  >
                    {/* Team Header */}
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-base font-grotesk uppercase">
                          {team.name}
                        </h4>
                        <span className="font-mono text-[10px] text-charcoal/50">
                          {formatDate(team.savedAt)} · {team.pokemon.length} Pokemon
                        </span>
                      </div>
                    </div>

                    {/* Pokemon List */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {team.pokemon.map((p) => (
                        <span
                          key={p.id}
                          className="font-mono text-[10px] sm:text-xs bg-white border border-black/20 px-1.5 py-0.5 uppercase"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {onLoadTeam && (
                        <button
                          onClick={() => loadTeam(team)}
                          className="flex-1 bg-blue-600 text-white font-mono text-xs font-bold py-2 border-2 border-black hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5 min-h-[40px]"
                        >
                          <FolderOpen size={14} />
                          LOAD
                        </button>
                      )}
                      {confirmDeleteId === team.id ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => deleteTeam(team.id)}
                            className="bg-red-600 text-white font-mono text-xs font-bold px-3 py-2 border-2 border-black hover:bg-red-700 transition-all min-h-[40px]"
                          >
                            DELETE
                          </button>
                          <button
                            onClick={() => setConfirmDeleteId(null)}
                            className="bg-gray-200 text-black font-mono text-xs font-bold px-3 py-2 border-2 border-black hover:bg-gray-300 transition-all min-h-[40px]"
                          >
                            CANCEL
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDeleteId(team.id)}
                          className="bg-white text-red-600 font-mono text-xs font-bold px-3 py-2 border-2 border-black hover:bg-red-50 transition-all flex items-center gap-1.5 min-h-[40px]"
                          aria-label={`Delete ${team.name}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
