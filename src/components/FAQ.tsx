// Server component — no "use client" — all FAQ text is in the static HTML crawled by Googlebot
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Everything you need to know about the Random Pokémon Generator, Nuzlocke challenges, and our Pokémon database
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group" open>
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Does this include Gen 9 Pokémon?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. Our generator includes all 1,025 Pokémon through Generation 9, including Pokémon Scarlet and Violet base game, The Teal Mask DLC, and The Indigo Disk DLC. All Paldea, Kitakami, and Blueberry Academy Pokémon are available and filterable by region.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">How many Pokémon are in the database?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">1,025 Pokémon from all 9 generations — Kanto through Paldea. This includes all regional forms (Alolan, Galarian, Hisuian, Paldean), Mega Evolutions, Gigantamax forms, Paradox Pokémon (Iron and Ancient forms), and Ultra Beasts. The database is updated within 48 hours of new official releases.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">How do I generate a random Pokémon team?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Click the GENERATE TEAM button on the homepage. You can customise your team by adjusting filters for team size (1–6 Pokémon), region (Kanto through Paldea), type (all 18 types), rarity (include or exclude Legendary, Mythical, Paradox), evolution stage, gender, nature, and more. The generator runs entirely in your browser — results are instant with no server round-trip.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">How do I generate a single random Pokémon?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Set the team size slider to 1 and click GENERATE TEAM. You can combine this with type and region filters — for example, set size to 1, select Fire type, and generate to get a single random Fire-type Pokémon. This is useful for Nuzlocke encounter replacements and for picking a random starter when you can&apos;t decide.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">What is a Nuzlocke challenge?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">A Nuzlocke is a set of self-imposed hardcore Pokémon rules: (1) If a Pokémon faints, it is considered dead and must be permanently released or boxed — no exceptions. (2) You can only catch the first Pokémon encountered on each route — if it faints or flees, you get no Pokémon from that area. (3) You must nickname every Pokémon to build emotional attachment. Most players also add the Species Clause (no duplicate species) and the Dupes Clause (re-roll if the first encounter is a species you already have). Our <Link href="/nuzlocke-generator" className="text-black font-bold underline">Nuzlocke Generator</Link> helps you prepare randomised teams for these challenge runs.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Can I exclude Legendary Pokémon?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. Use the Rarity filter to exclude Legendary Pokémon, Mythical Pokémon, Ultra Beasts, Paradox Pokémon, and Sub-Legendary Pokémon individually or all at once. This ensures you only get standard catchable Pokémon — ideal for balanced Nuzlocke and randomiser playthroughs where Legendaries would be overpowered or unavailable.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Can I generate Shiny Pokémon only?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. Visit our dedicated <Link href="/shiny-pokemon-generator" className="text-black font-bold underline">Shiny Pokémon Generator</Link> page to generate teams consisting exclusively of Shiny Pokémon. All 1,025 Pokémon with their alternate shiny colour palettes are supported. Use type, region, and rarity filters to create your perfect all-Shiny team or single Shiny pick.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Does this work for Pokémon Scarlet and Violet?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. All 400+ Pokémon from Scarlet and Violet (base game and both DLC packs) are fully supported. Select the Paldea region filter for base game Gen 9 Pokémon, Kitakami for the Teal Mask DLC additions, or Blueberry Academy for the Indigo Disk DLC Pokémon. Paradox forms (Iron and Ancient variants) are included and can be filtered by the Rarity dropdown.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Can I generate a monotype team?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. Select a single type from the Type filter — Fire, Water, Grass, Electric, Psychic, Dragon, Fairy, Ghost, Dark, Steel, Fighting, Rock, Ground, Ice, Flying, Bug, Poison, or Normal — to generate a team containing only Pokémon of that type. Perfect for monotype Nuzlocke challenges and type-restriction playthroughs. All 18 types across all 9 generations are supported.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Is this tool free?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes, 100% free with no ads, no signup required, and no hidden costs. We built this tool for the Pokémon community and it will always remain free. There are no premium features, no paywalls, and no usage limits. Generate as many teams as you want, as often as you want, with no restrictions.</p>
          </div>
        </details>

        <details className="bg-white border-2 md:border-4 border-black slasher overflow-hidden group">
          <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors cursor-pointer min-h-[44px]">
            <h3 className="text-base md:text-xl font-bold pr-4">Does it work on mobile devices?</h3>
          </summary>
          <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">Yes. The Random Pokémon Generator is fully responsive and optimised for phones, tablets, and desktop computers. All filters, buttons, and features are mobile-optimised with 44px+ touch targets for easy tapping. The generator has been tested on iOS Safari, Android Chrome, Firefox Mobile, and Samsung Internet across multiple screen sizes.</p>
          </div>
        </details>

      </div>

      <div className="mt-12 text-center">
        <p className="text-base md:text-lg text-gray-600 mb-4">Still have questions?</p>
        <a
          href="/contact"
          className="inline-block bg-indigo text-cream font-bold text-base md:text-lg px-8 py-3 border-2 md:border-4 border-black slasher hover:bg-cream hover:text-black transition-colors min-h-[44px]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
