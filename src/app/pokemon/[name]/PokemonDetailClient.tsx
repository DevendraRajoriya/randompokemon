"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import ShareModal from "@/components/ShareModal";
import { PokemonWithSpecies } from "./page";

interface Props {
  pokemon: PokemonWithSpecies;
}

export default function PokemonDetailClient({ pokemon }: Props) {
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowShareModal(true)}
        className="flex items-center gap-2 bg-sky-400 text-black font-mono text-xs sm:text-sm font-bold px-4 py-2.5 slasher border-2 border-black hover:brightness-110 transition-all min-h-[44px]"
      >
        <Share2 size={14} />
        SHARE
      </button>

      {showShareModal && (
        <ShareModal
          pokemon={pokemon}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </>
  );
}
