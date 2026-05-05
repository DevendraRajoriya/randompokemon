/**
 * PokemonSpotlight — server component, zero JS, fully SSR'd
 *
 * Renders a static grid of POKEMON cards linking to /pokemon/[slug].
 * Each generator page passes its own curated spotlight list so Googlebot
 * sees contextually-relevant /pokemon/* links in the static HTML.
 */
import Link from "next/link";
import Image from "next/image";

export interface SpotlightPokemon {
  slug: string;
  id: number;
  name: string;
  types: readonly [string, ...string[]];
}

interface Props {
  pokemon: readonly SpotlightPokemon[];
  heading?: string;
  /** Label shown in the black pill above the heading */
  badge?: string;
}

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
  grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
  ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
  rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
  steel: "#B8B8D0", fairy: "#EE99AC",
};
const LIGHT_BG_TYPES = new Set(["electric", "normal", "ground", "fairy", "ice", "steel"]);

export default function PokemonSpotlight({
  pokemon,
  heading = "Featured POKEMON",
  badge = "SPOTLIGHT",
}: Props) {
  if (!pokemon.length) return null;

  return (
    <section
      className="max-w-6xl mx-auto mt-10 md:mt-14 mb-2 px-0"
      aria-label={heading}
    >
      {/* Header row */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-2">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              {badge}
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase leading-none">
            {heading}
          </h2>
        </div>
        <Link
          href="/pokedex"
          className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-cream transition-colors flex-shrink-0 slasher"
        >
          Full Pokédex →
        </Link>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {pokemon.map((p) => {
          const primary = p.types[0];
          const secondary = p.types[1] as string | undefined;
          const c1 = TYPE_COLORS[primary] ?? "#68A090";
          const c2 = secondary ? (TYPE_COLORS[secondary] ?? "#68A090") : null;
          const bar = c2
            ? `linear-gradient(90deg, ${c1} 50%, ${c2} 50%)`
            : c1;
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;

          return (
            <Link
              key={p.slug}
              href={`/pokemon/${p.slug}`}
              className="group relative bg-white border-2 border-black slasher overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col"
            >
              {/* Type accent bar */}
              <div className="h-1.5" style={{ background: bar }} />

              <div className="p-3 flex flex-col flex-1">
                {/* Pokédex number */}
                <span className="font-mono text-[9px] text-charcoal/40 font-semibold self-end mb-1">
                  #{String(p.id).padStart(4, "0")}
                </span>

                {/* Sprite */}
                <div className="relative w-full mb-2" style={{ paddingBottom: "80%" }}>
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{ background: `radial-gradient(circle, ${c1} 0%, transparent 70%)` }}
                  />
                  <Image
                    src={sprite}
                    alt={`${p.name} — ${p.types.join("/")} type POKEMON`}
                    fill
                    sizes="(max-width: 640px) 44vw, (max-width: 1024px) 22vw, 18vw"
                    className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 p-1"
                    loading="lazy"
                    unoptimized
                  />
                </div>

                {/* Name */}
                <h3 className="font-grotesk font-bold text-xs sm:text-sm text-black uppercase truncate mb-1.5 group-hover:text-indigo transition-colors">
                  {p.name}
                </h3>

                {/* Type badges */}
                <div className="flex gap-1 flex-wrap mt-auto">
                  {p.types.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] px-1.5 py-0.5 uppercase font-bold border border-black/10"
                      style={{
                        backgroundColor: TYPE_COLORS[t] ?? "#68A090",
                        color: LIGHT_BG_TYPES.has(t) ? "#000" : "#fff",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA bar */}
              <div className="border-t border-black/10 bg-black/[0.02] group-hover:bg-indigo transition-colors duration-200 px-3 py-1.5">
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-charcoal group-hover:text-white transition-colors uppercase tracking-wide">
                  View details →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile "see all" */}
      <div className="mt-4 sm:hidden text-center">
        <Link
          href="/pokedex"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold border-2 border-black px-5 py-2.5 hover:bg-black hover:text-cream transition-colors slasher"
        >
          Browse Full Pokédex →
        </Link>
      </div>
    </section>
  );
}
