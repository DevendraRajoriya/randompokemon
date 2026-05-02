"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Share2, CreditCard } from "lucide-react";
import ShareModal from "@/components/ShareModal";
import { PokemonWithSpecies } from "./page";

interface Props {
  pokemon: PokemonWithSpecies;
}

// Minimal shape ShareModal accepts
function toCardPokemon(pokemon: PokemonWithSpecies) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprites: pokemon.sprites,
    types: pokemon.types,
    stats: pokemon.stats,
    abilities: pokemon.abilities,
    height: pokemon.height,
    weight: pokemon.weight,
  };
}

// Portal wrapper — mounts children directly on document.body,
// escaping any clip-path / transform stacking context on the page.
function ModalPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

// ─── TOP-BAR: SHARE only ───────────────────────────────────────
export default function PokemonDetailClient({ pokemon }: Props) {
  const [open, setOpen] = useState(false);
  const cardPokemon = toCardPokemon(pokemon);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-white text-black font-mono text-xs sm:text-sm font-bold px-4 py-2.5 slasher border-2 border-black hover:bg-cream transition-all min-h-[44px]"
        aria-label="Share"
      >
        <Share2 size={14} />
        <span className="hidden sm:inline">SHARE</span>
      </button>

      {open && (
        <ModalPortal>
          <ShareModal pokemon={cardPokemon} onClose={() => setOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
}

// ─── UNDER IMAGE: GENERATE CARD button ────────────────────────
export function PokemonCardButton({ pokemon }: Props) {
  const [open, setOpen] = useState(false);
  const cardPokemon = toCardPokemon(pokemon);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-charcoal text-white font-mono font-bold text-xs uppercase tracking-widest px-4 py-3 border-2 border-black slasher transition-smooth"
        aria-label={`Generate ${pokemon.name} card`}
      >
        <CreditCard size={14} />
        GENERATE CARD
      </button>

      {open && (
        <ModalPortal>
          <ShareModal pokemon={cardPokemon} onClose={() => setOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
}
