"use client";

import { useState } from "react";

export interface MoveEntry {
  name: string;
  level: number;
}

export interface GenLearnset {
  levelUp: MoveEntry[];
  machine: MoveEntry[];
  egg: MoveEntry[];
  tutor: MoveEntry[];
}

interface LearnsetTabsProps {
  pokemonName: string;
  byGen: Record<number, GenLearnset>;
  availableGens: number[];
  latestGen: number;
}

const GEN_LABELS: Record<number, string> = {
  1: "Gen 1",
  2: "Gen 2",
  3: "Gen 3",
  4: "Gen 4",
  5: "Gen 5",
  6: "Gen 6",
  7: "Gen 7",
  8: "Gen 8",
  9: "Gen 9",
};

const GEN_SUBLABELS: Record<number, string> = {
  1: "RBY",
  2: "GSC",
  3: "RSE",
  4: "DPPt",
  5: "BW",
  6: "XY",
  7: "SM",
  8: "SwSh",
  9: "SV",
};

function MoveTable({ moves, pokemonName }: { moves: MoveEntry[]; pokemonName: string }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="w-full border-collapse font-mono text-sm"
        role="table"
        aria-label={`${pokemonName} level-up moves`}
      >
        <thead>
          <tr className="border-b-2 border-black">
            <th className="text-left py-2 pr-6 font-bold text-xs uppercase tracking-wider text-charcoal w-14">
              LV.
            </th>
            <th className="text-left py-2 font-bold text-xs uppercase tracking-wider text-charcoal">
              MOVE
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10">
          {moves.map((move, i) => (
            <tr key={i} className="hover:bg-cream/60 transition-colors">
              <td className="py-2 pr-6">
                <span className="inline-block bg-black text-white font-bold text-xs px-2 py-0.5 min-w-[2.25rem] text-center">
                  {move.level === 0 ? "—" : move.level}
                </span>
              </td>
              <td className="py-2 font-semibold text-black">{move.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MovePills({ moves }: { moves: MoveEntry[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {moves.map((move, i) => (
        <div key={i} className="border border-black/20 bg-cream/40 px-3 py-2">
          <span className="font-mono text-xs font-semibold text-black">{move.name}</span>
        </div>
      ))}
    </div>
  );
}

function MoveSection({
  label,
  badge,
  moves,
  pokemonName,
  variant,
}: {
  label: string;
  badge: string;
  moves: MoveEntry[];
  pokemonName: string;
  variant: "table" | "pills";
}) {
  if (moves.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-black px-2 py-0.5">
          <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">
            {badge}
          </span>
        </div>
        <span className="font-mono text-xs text-charcoal">{moves.length} moves</span>
      </div>
      {variant === "table" ? (
        <MoveTable moves={moves} pokemonName={pokemonName} />
      ) : (
        <MovePills moves={moves} />
      )}
    </div>
  );
}

export default function LearnsetTabs({
  pokemonName,
  byGen,
  availableGens,
  latestGen,
}: LearnsetTabsProps) {
  const [activeGen, setActiveGen] = useState(latestGen);

  const current: GenLearnset = byGen[activeGen] ?? {
    levelUp: [],
    machine: [],
    egg: [],
    tutor: [],
  };

  const isEmpty =
    current.levelUp.length === 0 &&
    current.machine.length === 0 &&
    current.egg.length === 0 &&
    current.tutor.length === 0;

  return (
    <div>
      {/* Generation Tab Bar */}
      <div
        className="flex flex-wrap gap-1.5 mb-6 pb-4 border-b-2 border-black/10"
        role="tablist"
        aria-label="Select generation"
      >
        {availableGens.map((gen) => (
          <button
            key={gen}
            role="tab"
            aria-selected={activeGen === gen}
            onClick={() => setActiveGen(gen)}
            className={`flex flex-col items-center px-3 py-1.5 border-2 border-black font-mono transition-all duration-150 slasher ${
              activeGen === gen
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-marigold"
            }`}
          >
            <span className="text-[11px] font-bold leading-none">
              {GEN_LABELS[gen] ?? `Gen ${gen}`}
            </span>
            <span
              className={`text-[9px] font-normal leading-none mt-0.5 ${
                activeGen === gen ? "text-white/60" : "text-charcoal/50"
              }`}
            >
              {GEN_SUBLABELS[gen] ?? ""}
            </span>
          </button>
        ))}
      </div>

      {/* Move Tables */}
      {isEmpty ? (
        <p className="font-mono text-sm text-charcoal">
          No move data available for Generation {activeGen}.
        </p>
      ) : (
        <div className="space-y-8">
          <MoveSection
            label="Level Up"
            badge="LEVEL UP"
            moves={current.levelUp}
            pokemonName={pokemonName}
            variant="table"
          />
          <MoveSection
            label="TM / HM"
            badge="TM / HM"
            moves={current.machine}
            pokemonName={pokemonName}
            variant="pills"
          />
          <MoveSection
            label="Move Tutor"
            badge="TUTOR"
            moves={current.tutor}
            pokemonName={pokemonName}
            variant="pills"
          />
          <MoveSection
            label="Egg Moves"
            badge="EGG MOVES"
            moves={current.egg}
            pokemonName={pokemonName}
            variant="pills"
          />
        </div>
      )}
    </div>
  );
}
