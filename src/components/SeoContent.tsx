'use client';

import Link from 'next/link';

/**
 * SeoContent Component
 * 
 * Styling Notes:
 * - All section badges: bg-black with text-white for consistency
 * - Slasher cuts: Applied to all section containers and item headers
 * - Operating Instructions & Core Capabilities: Containers match Legal Disclaimer style (border-2 border-black border-t-0)
 */
export default function SeoContent() {
  return (
    <>
      {/* Section 1: The Advanced Random Pokemon Generator */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">PROTOCOL V1.0</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-8 uppercase">
          ADVANCED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            POKEMON GENERATOR
          </span>
        </h2>
        <div className="space-y-4">
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            Whether you&apos;re planning a Nuzlocke, building a Draft League roster, or just want to discover POKEMON you&apos;ve never used before — this tool generates random teams instantly, with no ads, no sign-up, and no friction. It covers every mainline game from Red &amp; Blue through Scarlet &amp; Violet, and will support Legends: Z-A on day one.
          </p>
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            All 1,025 species are included: base forms, regional variants (Alolan, Galarian, Hisuian, Paldean), Paradox POKEMON, Mega Evolutions, and Gigantamax forms. Use the filters to narrow by type, generation, or rarity — or leave everything open and embrace the chaos.
          </p>
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            The database syncs with new releases within 48 hours of launch. If Game Freak ships a new form or a DLC POKEMON, it shows up here without you having to do anything.
          </p>
        </div>
      </section>

      {/* Section 2: How to Use */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USER GUIDE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-4 uppercase">
          HOW TO USE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            THIS GENERATOR
          </span>
        </h2>
        <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed mb-8">
          Follow these simple steps to generate your perfect Pokemon team. Customize filters for specific challenges or leave them blank for completely random results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">🎯</span>
            <h4 className="font-bold text-lg mb-1">Set Team Size</h4>
            <p className="text-sm text-brown/70">
              Select 1-6 Pokemon for your team
            </p>
          </div>
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">🗺️</span>
            <h4 className="font-bold text-lg mb-1">Select Region</h4>
            <p className="text-sm text-brown/70">
              Filter by Kanto, Johto, Hoenn, or other regions
            </p>
          </div>
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">🔥</span>
            <h4 className="font-bold text-lg mb-1">Apply Type Filters</h4>
            <p className="text-sm text-brown/70">
              Select from 18 Pokemon types
            </p>
          </div>
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">⭐</span>
            <h4 className="font-bold text-lg mb-1">Set Rarity</h4>
            <p className="text-sm text-brown/70">
              Toggle legendary and mythical Pokemon
            </p>
          </div>
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">⚡</span>
            <h4 className="font-bold text-lg mb-1">Generate Team</h4>
            <p className="text-sm text-brown/70">
              Click to create your random team instantly
            </p>
          </div>
          <div className="block bg-white border-2 border-black p-4 slasher">
            <span className="text-2xl mb-2 block">📊</span>
            <h4 className="font-bold text-lg mb-1">View Details</h4>
            <p className="text-sm text-brown/70">
              Click DATA to see stats and abilities
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Nuzlocke Tools */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHALLENGE MODE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-8 uppercase">
          Best Random Pokemon <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            Generator for Nuzlocke Runs
          </span>
        </h2>
        <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6 mb-8">
          Our <strong>Pokemon random generator</strong> has become the go-to tool for the Nuzlocke community. Use our generator to pre-determine starter options, simulate encounter tables, or generate replacement Pokemon for fallen team members. Perfect for Classic Nuzlocke, Hardcore Nuzlocke, and Randomizer challenge runs across all generations. <Link href="/nuzlocke-generator" className="text-black hover:text-charcoal underline font-bold">Learn more about Nuzlocke strategies →</Link>
        </p>
        <div className="border-2 border-black bg-white p-6 md:p-8 slasher">
          <h3 className="font-sans font-bold uppercase text-xl md:text-2xl text-black mb-6">
            Supported Challenge Formats
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 border-b border-black/10 pb-4">
              <span className="bg-marigold text-black font-mono text-xs font-bold px-2 py-1 slasher">01</span>
              <div>
                <span className="font-mono font-bold text-sm text-black uppercase">Classic Nuzlocke</span>
                <p className="font-mono text-sm text-charcoal mt-1">Generate random starter trios or simulate route encounters for ROM hacks and fan games.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-black/10 pb-4">
              <span className="bg-marigold text-black font-mono text-xs font-bold px-2 py-1 slasher">02</span>
              <div>
                <span className="font-mono font-bold text-sm text-black uppercase">SoulLink Challenges</span>
                <p className="font-mono text-sm text-charcoal mt-1">Generate paired teams for two players running synchronized Nuzlocke runs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-black/10 pb-4">
              <span className="bg-marigold text-black font-mono text-xs font-bold px-2 py-1 slasher">03</span>
              <div>
                <span className="font-mono font-bold text-sm text-black uppercase">Draft Leagues</span>
                <p className="font-mono text-sm text-charcoal mt-1">Create randomized draft pools for competitive Pokemon draft leagues and tournaments. <Link href="/draft-league-generator" className="text-black hover:text-charcoal underline">See draft guide →</Link></p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-black/10 pb-4">
              <span className="bg-marigold text-black font-mono text-xs font-bold px-2 py-1 slasher">04</span>
              <div>
                <span className="font-mono font-bold text-sm text-black uppercase">Randomizer Seeds</span>
                <p className="font-mono text-sm text-charcoal mt-1">Preview potential team compositions before starting a randomized ROM playthrough. <Link href="/randomizer-guide" className="text-black hover:text-charcoal underline">Read randomizer guide →</Link></p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-marigold text-black font-mono text-xs font-bold px-2 py-1 slasher">05</span>
              <div>
                <span className="font-mono font-bold text-sm text-black uppercase">Wonderlocke Prep</span>
                <p className="font-mono text-sm text-charcoal mt-1">Generate expectations for Wonder Trade-based challenge runs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Core Features */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SYSTEM SPECS</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-8 uppercase">
          CORE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            CAPABILITIES
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <div className="bg-black text-white p-4 slasher">
              <h3 className="font-mono font-bold text-sm md:text-xl">Type Filtering System</h3>
            </div>
            <div className="border-2 border-black border-t-0 p-4 bg-white">
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Filter by any of the 18 Pokemon types. Select multiple types to include dual-type Pokemon or focus on a single type for monotype challenges.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-black text-white p-4 slasher">
              <h3 className="font-mono font-bold text-sm md:text-xl">Legendary &amp; Rarity Toggle</h3>
            </div>
            <div className="border-2 border-black border-t-0 p-4 bg-white">
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Fine-tune with granular rarity controls. Include or exclude Legendaries, Mythicals, Paradox Pokemon, and Ultra Beasts.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-black text-white p-4 slasher">
              <h3 className="font-mono font-bold text-sm md:text-xl">Sprite &amp; Artwork Modes</h3>
            </div>
            <div className="border-2 border-black border-t-0 p-4 bg-white">
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Choose &quot;Sprite Only&quot; for pixel-art, &quot;Name Only&quot; for minimal view, or &quot;Both&quot; for high-resolution artwork with full details.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-black text-white p-4 slasher">
              <h3 className="font-mono font-bold text-sm md:text-xl">Complete Pokedex Database</h3>
            </div>
            <div className="border-2 border-black border-t-0 p-4 bg-white">
              <p className="font-mono text-sm md:text-base text-charcoal leading-relaxed">
                Access our comprehensive Pokedex database with detailed stats, types, abilities, and Pokédex entries for all 1025 Pokemon across every generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Scarlet & Violet Support */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">GEN 9 COMPATIBLE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-8 uppercase">
          Best Random Pokemon Generator<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            for Scarlet & Violet
          </span>
        </h2>
        <div className="space-y-6">
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            Fully optimized for Pokemon Scarlet and Violet (Generation 9), our generator includes all Paldean Pokemon, regional forms, and Paradox Pokemon from both games. Whether you&apos;re planning a playthrough of the main story, tackling the Academy Ace Tournament, or preparing for Tera Raid battles, our tool generates balanced teams compatible with the latest generation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">Paldean Pokemon</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
               All new Gen 9 species including starters <Link href="/pokemon/sprigatito" className="font-bold underline hover:text-charcoal">Sprigatito</Link>, <Link href="/pokemon/fuecoco" className="font-bold underline hover:text-charcoal">Fuecoco</Link>, and <Link href="/pokemon/quaxly" className="font-bold underline hover:text-charcoal">Quaxly</Link>, plus Legendaries <Link href="/pokemon/koraidon" className="font-bold underline hover:text-charcoal">Koraidon</Link> and <Link href="/pokemon/miraidon" className="font-bold underline hover:text-charcoal">Miraidon</Link>. Filter by Paldea region to generate teams exclusively from the newest games.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">Paradox Pokemon</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Toggle &quot;Paradox&quot; in rarity filters to include exclusive Ancient (Scarlet) and Future (Violet) forms like Iron Valiant, Roaring Moon, and Walking Wake. Perfect for post-game team building.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">Terastallize Planning</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Use type filters to plan Tera Type strategies. Generate mono-type teams or mixed teams with type coverage for Scarlet & Violet&apos;s Terastallize mechanic.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-2 uppercase">DLC Compatible</h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Includes Pokemon from The Teal Mask and The Indigo Disk DLC expansions. Generate teams featuring Ogerpon, Terapagos, and all returning Pokemon from Kitakami and Blueberry Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Filter Features */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FILTERING ENGINE</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          FILTER POKEMON BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">TYPE, REGION & RARITY</span>
        </h2>
        <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-8">
          Our advanced filtering system gives you surgical precision when generating Pokemon teams. Combine multiple filters to create highly specific team compositions, or leave filters open for maximum randomization.
        </p>

        <div className="space-y-6">
          {/* Type Filtering */}
          <div className="border-2 border-black p-6 bg-cream slasher">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-black text-white font-mono text-xs font-bold px-3 py-1 slasher">TYPE FILTER</span>
              <h3 className="font-mono font-bold text-sm uppercase text-black uppercase">18 Pokemon Types Available</h3>
            </div>
            <p className="font-mono text-sm text-charcoal mb-4 leading-relaxed">
              Select from all 18 Pokemon types: Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, and Fairy. Choose multiple types to broaden your pool, or select one type for a pure monotype team challenge. Dual-type Pokemon are included when either of their types match your filter.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono">
              <div className="bg-[#A8A878] text-black p-2 border border-black">🔲 NORMAL</div>
              <div className="bg-[#F08030] text-white p-2 border border-black">🔥 FIRE</div>
              <div className="bg-[#6890F0] text-white p-2 border border-black">💧 WATER</div>
              <div className="bg-[#F8D030] text-black p-2 border border-black">⚡ ELECTRIC</div>
              <div className="bg-[#78C850] text-white p-2 border border-black">🌿 GRASS</div>
              <div className="bg-[#98D8D8] text-black p-2 border border-black">❄️ ICE</div>
            </div>
          </div>

          {/* Region Filtering */}
          <div className="border-2 border-black p-6 bg-cream slasher">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-black text-white font-mono text-xs font-bold px-3 py-1 slasher">REGION FILTER</span>
              <h3 className="font-mono font-bold text-sm uppercase text-black uppercase">10 Generations & Regions</h3>
            </div>
            <p className="font-mono text-sm text-charcoal mb-4 leading-relaxed">
              Filter Pokemon by their native region across all nine generations plus Hisui. Perfect for generation-specific challenges or nostalgia runs. Select multiple regions to create cross-generation teams.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs font-mono font-bold">
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 1: KANTO</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 2: JOHTO</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 3: HOENN</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 4: SINNOH</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 5: UNOVA</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 6: KALOS</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 7: ALOLA</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 8: GALAR</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 8: HISUI</div>
              <div className="bg-white text-black p-2 border-2 border-black text-center">GEN 9: PALDEA</div>
            </div>
          </div>

          {/* Rarity Filtering */}
          <div className="border-2 border-black p-6 bg-cream slasher">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-black text-white font-mono text-xs font-bold px-3 py-1 slasher">RARITY FILTER</span>
              <h3 className="font-mono font-bold text-sm uppercase text-black uppercase">Granular Legendary Control</h3>
            </div>
            <p className="font-mono text-sm text-charcoal mb-4 leading-relaxed">
              Precisely control which special Pokemon appear in your random teams. Toggle Legendary, Mythical, Paradox, and Ultra Beast classifications independently. Essential for Nuzlocke runs with specific legendary clauses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-white border border-black p-3">
                <span className="text-2xl">🔱</span>
                <div>
                  <span className="font-mono font-bold text-sm text-black uppercase">LEGENDARY</span>
                  <p className="font-mono text-xs text-charcoal">Box-art legendaries like <Link href="/pokemon/mewtwo" className="font-bold underline hover:text-charcoal">Mewtwo</Link>, <Link href="/pokemon/lugia" className="font-bold underline hover:text-charcoal">Lugia</Link>, <Link href="/pokemon/rayquaza" className="font-bold underline hover:text-charcoal">Rayquaza</Link>, <Link href="/pokemon/dialga" className="font-bold underline hover:text-charcoal">Dialga</Link>, <Link href="/pokemon/reshiram" className="font-bold underline hover:text-charcoal">Reshiram</Link>, <Link href="/pokemon/xerneas" className="font-bold underline hover:text-charcoal">Xerneas</Link>, <Link href="/pokemon/solgaleo" className="font-bold underline hover:text-charcoal">Solgaleo</Link>, <Link href="/pokemon/zacian" className="font-bold underline hover:text-charcoal">Zacian</Link>, and <Link href="/pokemon/koraidon" className="font-bold underline hover:text-charcoal">Koraidon</Link></p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-black p-3">
                <span className="text-2xl">✨</span>
                <div>
                  <span className="font-mono font-bold text-sm text-black uppercase">MYTHICAL</span>
                  <p className="font-mono text-xs text-charcoal">Event-exclusive Pokemon like Mew, Celebi, Jirachi, Darkrai, Victini, Genesect, Diancie, Marshadow, and Zarude</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-black p-3">
                <span className="text-2xl">⚔️</span>
                <div>
                  <span className="font-mono font-bold text-sm text-black uppercase">PARADOX</span>
                  <p className="font-mono text-xs text-charcoal">Ancient and Future forms exclusive to Scarlet & Violet (Iron Valiant, Roaring Moon, Walking Wake, Iron Leaves)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-black p-3">
                <span className="text-2xl">👾</span>
                <div>
                  <span className="font-mono font-bold text-sm text-black uppercase">ULTRA BEAST</span>
                  <p className="font-mono text-xs text-charcoal">Interdimensional Pokemon from Gen 7 (Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, Guzzlord)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Use Generator */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USE CASES</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl text-black leading-[0.9] mb-6 uppercase">
          WHY USE A RANDOM <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">POKEMON GENERATOR?</span>
        </h2>
        <div className="space-y-6">
          <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6">
            Random Pokemon generators inject fresh excitement into Pokemon games you&apos;ve played dozens of times. Instead of using the same team of favorites, embrace chaos and discover hidden gems you&apos;ve never trained before.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-3 uppercase flex items-center gap-2">
                <span className="text-black">✓</span> Break the Meta
              </h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
               Tired of the same <Link href="/pokemon/garchomp" className="font-bold underline hover:text-charcoal">Garchomp</Link>, <Link href="/pokemon/metagross" className="font-bold underline hover:text-charcoal">Metagross</Link>, and <Link href="/pokemon/blaziken" className="font-bold underline hover:text-charcoal">Blaziken</Link> teams? Random generation forces you out of your comfort zone and into uncharted territory. You might discover that <Link href="/pokemon/dunsparce" className="font-bold underline hover:text-charcoal">Dunsparce</Link> is actually viable, or that <Link href="/pokemon/ledian" className="font-bold underline hover:text-charcoal">Ledian</Link> can surprise you in unexpected ways.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-3 uppercase flex items-center gap-2">
                <span className="text-black">✓</span> Perfect for Streamers
              </h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Content creators love random Pokemon generators because they create unpredictable, engaging content. Chat can suggest filter combinations, viewers stay invested in unusual team compositions, and no two playthroughs are ever the same.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-3 uppercase flex items-center gap-2">
                <span className="text-black">✓</span> Learn Type Coverage
              </h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Working with random teams teaches you the importance of type coverage and balanced team building. You&apos;ll quickly learn which types cover each other&apos;s weaknesses and which Pokemon have surprisingly good move pools.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-mono font-bold text-sm text-black mb-3 uppercase flex items-center gap-2">
                <span className="text-black">✓</span> Challenge Run Prep
              </h3>
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                Before starting a Nuzlocke, Wonderlocke, or Randomizer run, use our generator to mentally prepare for the kinds of teams you might encounter. Practice team-building with constraints before your actual playthrough begins.
              </p>
            </div>
          </div>

          <div className="bg-marigold border-4 border-black p-6 slasher">
            <h3 className="font-mono font-bold text-sm uppercase text-black mb-4 uppercase">Popular Generator Challenges</h3>
            <ul className="space-y-2 font-mono text-sm text-black">
              <li className="flex items-start gap-2">
                <span className="font-bold">→</span>
                <span><strong>Generation Roulette:</strong> Generate a team with each Pokemon from a different generation. No repeats allowed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">→</span>
                <span><strong>Type Survivor:</strong> Generate 6 Pokemon, each with a different primary type. Can you cover all weaknesses?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">→</span>
                <span><strong>Starter Roulette:</strong> Generate 3 random Pokemon, pick one as your &quot;starter&quot; for your next playthrough.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">→</span>
                <span><strong>Speed Run Team:</strong> Generate a random team and try to beat your Pokemon game&apos;s Elite Four as fast as possible.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">→</span>
                <span><strong>Draft League Simulation:</strong> Generate 6-8 Pokemon and &quot;draft&quot; from them with friends for competitive battles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us */}
      <section className="mt-12 md:mt-16 mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BENCHMARKS</span>
        </div>
        <h2 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl  text-black leading-[0.9] mb-8 uppercase">
          WHY CHOOSE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-charcoal">
            THIS TOOL?
          </span>
        </h2>
        <div className="space-y-4">
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            Unlike other random Pokemon generators, our protocol is built with performance and accuracy as top priorities. The database pulls directly from verified Pokemon API sources ensuring that all information—types, sprites, and Pokédex numbers—is accurate and up-to-date.
          </p>
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            The minimalist cypherpunk design philosophy means zero bloat, zero unnecessary animations, and zero wasted time. Our generator works flawlessly on desktop computers, tablets, and mobile devices.
          </p>
          <p className="font-mono text-charcoal text-xs md:text-sm leading-relaxed border-l-4 border-black pl-6">
            Join the thousands of trainers who trust our random Pokemon generator for their team-building needs. From casual fans to hardcore Nuzlockers, our tool serves the entire Pokemon community with speed, reliability, and style.
          </p>
        </div>
      </section>
    </>
  );
}
