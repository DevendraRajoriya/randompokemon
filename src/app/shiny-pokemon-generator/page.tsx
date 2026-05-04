import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Sparkles, ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const SHINY_SPOTLIGHT = [
  { slug: "charizard",  id: 6,   name: "Charizard",  types: ["fire", "flying"]   as const },
  { slug: "gyarados",   id: 130, name: "Gyarados",   types: ["water", "flying"]  as const },
  { slug: "umbreon",    id: 197, name: "Umbreon",    types: ["dark"]             as const },
  { slug: "gardevoir",  id: 282, name: "Gardevoir",  types: ["psychic", "fairy"] as const },
  { slug: "rayquaza",   id: 384, name: "Rayquaza",   types: ["dragon", "flying"] as const },
  { slug: "sylveon",    id: 700, name: "Sylveon",    types: ["fairy"]            as const },
  { slug: "gengar",     id: 94,  name: "Gengar",     types: ["ghost", "poison"]  as const },
  { slug: "zoroark",    id: 571, name: "Zoroark",    types: ["dark"]             as const },
  { slug: "mimikyu",    id: 778, name: "Mimikyu",    types: ["ghost", "fairy"]   as const },
  { slug: "haxorus",    id: 612, name: "Haxorus",    types: ["dragon"]           as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Shiny Pokemon Generator | Random Rare Color Variants All Gens",
  description: "Generate random shiny Pokemon with ultra-rare alternate color schemes from all 1,025 Pokemon. Perfect for shiny hunting, collectors, and unique team challenges. Updated 2026.",
  keywords: ["shiny pokemon generator", "random shiny pokemon", "shiny pokemon randomizer", "shiny hunter tool", "random shiny picker", "shiny pokemon all generations"],
  alternates: { canonical: `${siteUrl}/shiny-pokemon-generator` },
  openGraph: { title: "Shiny Pokemon Generator | Random Rare Color Variants", description: "Generate random shiny Pokemon from all 1,025 species!", url: `${siteUrl}/shiny-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shiny Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Shiny Pokemon Generator | Random Rare Color Variants", description: "Generate random shiny Pokemon from all 1,025 species!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Shiny Pokemon Generator",
  description: "Generate random shiny Pokemon from all 1,025 species. Perfect for shiny hunting and collectors.",
  url: `${siteUrl}/shiny-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a shiny Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Shiny Pokemon are extremely rare color variants with alternate palettes. They have a 1/4096 base encounter rate (1/512 with the Shiny Charm) and sparkle when sent into battle. They have no stat differences from regular Pokemon." } },
    { "@type": "Question", name: "Which shiny Pokemon are the rarest?", acceptedAnswer: { "@type": "Answer", text: "Square sparkle shinies (1/65536 in Sword/Shield), shiny legendaries locked to specific methods, and event-only shinies like costumed Pikachu variants are the rarest. Full-odds shiny hunting without any boosting methods is also considered the purest challenge." } },
    { "@type": "Question", name: "What is the best shiny Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Fan favorites: Shiny Charizard (pure black), Shiny Umbreon (blue rings instead of yellow), Shiny Gardevoir (black dress), Shiny Rayquaza (jet black), and Shiny Sylveon (blue instead of pink). Shiny Charizard is the most famous and sought-after in the TCG." } },
    { "@type": "Question", name: "What is the Masuda Method?", acceptedAnswer: { "@type": "Answer", text: "The Masuda Method involves breeding two Pokemon from games of different languages (e.g., a Japanese Ditto with an English Eevee). This reduces the shiny rate to 1/682 normally, or 1/512 with the Shiny Charm. Named after Game Freak director Junichi Masuda." } },
    { "@type": "Question", name: "What is the fastest way to get a shiny Pokemon?", acceptedAnswer: { "@type": "Answer", text: "In modern games: Mass Outbreaks (Gen 9) with Shiny Charm and Sparkling Power sandwiches can reach odds below 1/100. SOS Chaining in Sun/Moon reaches 1/315 after 31+ allies. Masuda Method reaches 1/512. PokeRadar in Gen 4/6 with 40-chain reaches ~1/200." } },
    { "@type": "Question", name: "Can shiny Pokemon be used competitively?", acceptedAnswer: { "@type": "Answer", text: "Yes — shiny Pokemon have identical stats to normal variants. Many competitive players specifically use shinies for prestige. Bred shinies (via Masuda Method) can be EV trained simultaneously, making them the most efficient competitive shinies to obtain." } },
    { "@type": "Question", name: "What are Square Shinies in Pokemon Sword and Shield?", acceptedAnswer: { "@type": "Answer", text: "In Sword & Shield, shinies have two sparkle animations: star (the standard multi-colored sparkles, 15/16 chance) and square (a rare pixelated square pattern, 1/16 of shiny encounters, overall 1/65536 odds). Square shinies are cosmetic-only with no gameplay difference." } },
    { "@type": "Question", name: "What generation introduced shiny Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Shiny Pokemon were introduced in Generation 2 (Gold & Silver, 1999) as a byproduct of the stats system. The original shiny odds were 1/8192 — twice as rare as today's 1/4096. The Red Gyarados at the Lake of Rage is the first forced shiny encounter in the series." } },
    { "@type": "Question", name: "What is soft resetting for shinies?", acceptedAnswer: { "@type": "Answer", text: "Soft resetting involves saving before a legendary or static encounter, encountering the Pokemon, and resetting the game if it is not shiny. This is the traditional method for shiny hunting legendaries. Each attempt is independent with 1/4096 odds (1/512 with Shiny Charm)." } },
    { "@type": "Question", name: "What is the shiny hunting method in Scarlet and Violet?", acceptedAnswer: { "@type": "Answer", text: "In Scarlet & Violet, the best method is Mass Outbreaks combined with Sparkling Power Lv. 3 sandwiches (made with Herba Mystica) and the Shiny Charm. This can reduce odds to approximately 1/512 base or even lower with 60+ Pokemon defeated in one outbreak." } },
    { "@type": "Question", name: "What does this Shiny Pokemon Generator do?", acceptedAnswer: { "@type": "Answer", text: "This free Shiny Pokemon Generator randomly selects shiny Pokemon from all 1,025 species. Use it to discover what your next shiny hunt target should be, plan a shiny team challenge run, or just explore rare color variants. Filter by generation, type, or evolution stage." } },
  ],
};

export default function ShinyPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Shiny Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">SHINY POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>shiny Pokemon</strong> with ultra-rare alternate color schemes from all 1,025 Pokemon. Perfect for shiny hunters, collectors, unique team challenges, and discovering rare color variants.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} />

        <CardShowcase />

        <PokemonSpotlight
          pokemon={SHINY_SPOTLIGHT}
          heading="Most-Hunted Shiny Pokémon"
          badge="BEST SHINIES"
        />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">WHAT IS SHINY?</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT SHINY POKEMON</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              Shiny Pokemon are extremely rare color variants with alternate palettes. First introduced in Gold & Silver (1999) as a side effect of the stats system, shinies are now coveted collectibles. They sparkle when entering battle and have a base encounter rate of <strong>1 in 4,096</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "1/4096 BASE RATE", desc: "Without Shiny Charm in modern games" }, { label: "1/512 WITH CHARM", desc: "After completing the Pokedex" }, { label: "SINCE GEN 2", desc: "Introduced in Gold & Silver (1999)" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BEST SHINIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">MOST POPULAR SHINY POKEMON</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "🔥 SHINY CHARIZARD", desc: "Pure black body instead of orange. One of the most iconic shinies. Heavily sought in the TCG." },
                { title: "🌙 SHINY UMBREON", desc: "Blue rings instead of yellow. Considered one of the most beautiful shiny designs." },
                { title: "🌿 SHINY GARDEVOIR", desc: "Black dress replacing white. Elegant transformation from the base form." },
                { title: "🐉 SHINY RAYQUAZA", desc: "Jet black body replacing green. One of the most impressive legendary shinies." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">HUNTING METHODS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOW TO HUNT SHINY POKEMON</h2>
            <div className="space-y-3">
              {[
                { title: "MASUDA METHOD", desc: "Breed two Pokemon from different language games. Reduces rate to 1/682 (1/512 with Shiny Charm). Best for specific species." },
                { title: "CHAIN FISHING / POKERADAR", desc: "Building encounter chains boosts shiny odds. PokeRadar in Gen 4/6 can reach 1/200 odds with a 40-chain." },
                { title: "SOS CHAINING (GEN 7)", desc: "In Sun/Moon, calling for help builds a chain. After 31+ allies, odds reach 1/315 (1/100 with charm)." },
                { title: "MASS OUTBREAKS (GEN 9)", desc: "In Scarlet/Violet, mass outbreaks let you find 60+ of one species, boosting shiny odds significantly." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }, { href: "/starter-pokemon-generator", label: "STARTER POKEMON", desc: "All starter picks" }, { href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">SHINY POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What is a shiny Pokemon?", a: "Shiny Pokemon are extremely rare color variants with a 1/4096 base encounter rate (1/512 with the Shiny Charm). They sparkle when sent into battle and have no stat differences from normal Pokemon." },
                { q: "Which shiny Pokemon are the rarest?", a: "Square sparkle shinies (1/65536 in Sword/Shield), shiny legendaries locked to specific methods, and event-only shinies like costumed Pikachu variants are the rarest forms." },
                { q: "What is the best shiny Pokemon?", a: "Fan favorites: Shiny Charizard (black body), Shiny Umbreon (blue rings), Shiny Gardevoir (black dress), Shiny Rayquaza (jet black), and Shiny Sylveon (blue instead of pink). Shiny Charizard is most famous in the TCG." },
                { q: "Can shiny Pokemon be used competitively?", a: "Yes! Shiny Pokemon have identical stats to normal ones. Many competitive players prefer shinies for prestige. Masuda Method allows breeding competitive shinies simultaneously with EV training." },
                { q: "What is the Masuda Method?", a: "Breed two Pokemon from games of different languages (e.g., Japanese Ditto + English Eevee) to reduce shiny odds to 1/682, or 1/512 with the Shiny Charm. Named after Game Freak director Junichi Masuda." },
                { q: "What is the fastest way to get a shiny?", a: "In Gen 9: Mass Outbreaks with Sparkling Power Lv. 3 sandwiches and Shiny Charm can reach sub-1/100 odds. SOS Chaining in Gen 7 reaches 1/315 after 31+ allies. Masuda Method gives 1/512 with Charm." },
                { q: "What are Square Shinies in Sword and Shield?", a: "In SwSh, shinies have two animations: standard star sparkles (15/16 of shinies) and square sparkles (1/16 of shinies, overall 1/65536 odds). Square shinies are purely cosmetic with no gameplay difference." },
                { q: "What generation introduced shiny Pokemon?", a: "Gen 2 (Gold & Silver, 1999). The original odds were 1/8192 — twice as rare as today's 1/4096. The Red Gyarados at the Lake of Rage is the first forced shiny encounter in the series." },
                { q: "What is soft resetting for shinies?", a: "Save before a legendary encounter, battle it, reset the game if not shiny, and repeat. Each attempt is independent with 1/4096 odds (1/512 with Shiny Charm). It's the traditional method for shiny legendary hunting." },
                { q: "What is the best shiny hunting method in Scarlet/Violet?", a: "Mass Outbreaks with Sparkling Power Lv. 3 sandwiches (using Herba Mystica) plus the Shiny Charm can reduce odds to ~1/512 or lower with 60+ Pokemon defeated in one outbreak." },
                { q: "What does this Shiny Pokemon Generator do?", a: "This free generator randomly picks shiny Pokemon from all 1,025 species. Discover your next shiny hunt target, plan a shiny team challenge, or explore rare color variants. Filter by generation, type, or evolution stage." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
