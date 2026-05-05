import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PokemonSpotlight from "@/components/PokemonSpotlight";

const KALOS_SPOTLIGHT = [
  { slug: "greninja",   id: 658, name: "Greninja",   types: ["water", "dark"]    as const },
  { slug: "sylveon",    id: 700, name: "Sylveon",    types: ["fairy"]            as const },
  { slug: "goodra",     id: 706, name: "Goodra",     types: ["dragon"]           as const },
  { slug: "noivern",    id: 715, name: "Noivern",    types: ["flying", "dragon"] as const },
  { slug: "xerneas",    id: 716, name: "Xerneas",    types: ["fairy"]            as const },
  { slug: "yveltal",    id: 717, name: "Yveltal",    types: ["dark", "flying"]   as const },
  { slug: "hawlucha",   id: 701, name: "Hawlucha",   types: ["fighting", "flying"] as const },
  { slug: "aegislash",  id: 681, name: "Aegislash",  types: ["steel", "ghost"]   as const },
  { slug: "talonflame", id: 663, name: "Talonflame", types: ["fire", "flying"]   as const },
  { slug: "clawitzer",  id: 693, name: "Clawitzer",  types: ["water"]            as const },
] as const;

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Kalos Pokemon Generator | Gen 6 Random Team Builder (X/Y)",
  description: "Generate random Kalos Pokemon teams from Generation 6 (#650-721). Pokemon X & Y including Xerneas, Yveltal, Zygarde, Mega Evolutions and the Fairy type. Free team builder. Updated 2026.",
  keywords: ["kalos pokemon generator", "gen 6 random team generator", "kalos pokemon team builder", "pokemon x y team generator", "kalos randomizer", "gen 6 nuzlocke generator", "mega evolution generator", "kalos pokemon picker"],
  alternates: { canonical: `${siteUrl}/kalos-pokemon-generator` },
  openGraph: { title: "Kalos Pokemon Generator | Gen 6 Random Team Builder", description: "Generate random Kalos Pokemon from Gen 6! X & Y including Mega Evolutions.", url: `${siteUrl}/kalos-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kalos Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Kalos Pokemon Generator | Gen 6 Random Team Builder", description: "Generate random Kalos Pokemon from Gen 6!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Kalos Pokemon Generator",
  description: "Random Kalos Pokemon generator — 72 species from X & Y. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/kalos-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Kalos?", acceptedAnswer: { "@type": "Answer", text: "Kalos introduced 72 new Pokemon (#650-721), the fewest of any generation at the time. However, Gen 6 introduced dozens of Mega Evolutions for Pokemon from previous generations, significantly expanding the competitive metagame." } },
    { "@type": "Question", name: "What are Mega Evolutions?", acceptedAnswer: { "@type": "Answer", text: "Mega Evolutions are temporary battle transformations that boost a Pokemon's stats and sometimes change its type. They require a Mega Stone (e.g., Charizardite X) and a Mega Ring or Mega Bracelet. Each trainer can only Mega Evolve one Pokemon per battle." } },
    { "@type": "Question", name: "What is the Fairy type?", acceptedAnswer: { "@type": "Answer", text: "Introduced in Gen 6, Fairy is the 18th Pokemon type. It is super effective against Dragon, Dark, and Fighting. It is weak to Poison and Steel. Fairy was added primarily to reduce Dragon-type dominance in competitive play." } },
    { "@type": "Question", name: "Why is Greninja so popular?", acceptedAnswer: { "@type": "Answer", text: "Greninja (Water/Dark) has exceptional Speed (122) and Special Attack (103), plus two powerful abilities: Protean (changes type to match move used) and Battle Bond (transforms into Ash-Greninja after a KO). It was voted the most popular Pokemon worldwide in 2016." } },
    { "@type": "Question", name: "What games are set in the Kalos region?", acceptedAnswer: { "@type": "Answer", text: "Only two main series games are set in Kalos: Pokemon X and Pokemon Y (2013), the first fully 3D main series titles. As of 2026, Kalos has not received a remake, making it the only modern region without one." } },
    { "@type": "Question", name: "What is the best Kalos starter?", acceptedAnswer: { "@type": "Answer", text: "Froakie/Greninja is the most popular and competitive starter. It evolves into a fast Water/Dark type with Protean ability. Chespin/Chesnaught (Grass/Fighting) is the most defensive. Fennekin/Delphox (Fire/Psychic) has good Special Attack." } },
    { "@type": "Question", name: "What are the Kalos legendary Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Kalos legendaries: Xerneas (#716, Fairy — mascot of X with Fairy Aura), Yveltal (#717, Dark/Flying — mascot of Y with Dark Aura), Zygarde (#718, Dragon/Ground — has 10%, 50%, and Complete forms). Mythicals: Diancie (#719, Rock/Fairy), Hoopa (#720, Psychic/Ghost), Volcanion (#721, Fire/Water)." } },
    { "@type": "Question", name: "What is the best team for Pokemon X and Y?", acceptedAnswer: { "@type": "Answer", text: "A strong X/Y team might include Greninja (Water/Dark), Talonflame (Fire/Flying), Sylveon (Fairy), Garchomp (Dragon/Ground), Aegislash (Steel/Ghost), and Gengar (Ghost/Poison). This covers most type matchups and includes Kalos native Pokemon." } },
    { "@type": "Question", name: "How do you use this Kalos Pokemon Generator?", acceptedAnswer: { "@type": "Answer", text: "Select the Gen 6/Kalos filter, set your team size (1-6), optionally filter by type or exclude legendaries, then click Generate. Lock any Pokemon you want to keep and regenerate the rest. Great for Nuzlocke planning, challenge runs, and team randomization." } },
    { "@type": "Question", name: "What were the major new features in Gen 6?", acceptedAnswer: { "@type": "Answer", text: "Gen 6 introduced: the first fully 3D main series graphics, Mega Evolutions, the Fairy type, Pokemon-Amie bonding system, Super Training for EV training, Sky Battles, Inverse Battles, Horde Encounters, and Wonder Trade (now Surprise Trade in later gens)." } },
    { "@type": "Question", name: "Which Kalos Pokemon are best for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Kalos picks: Greninja (OU/top tier), Aegislash (banned to Ubers temporarily), Talonflame (Gale Wings priority), Sylveon (Fairy wall with Pixilate), Klefki (Prankster dual screens), Goodra (special tank), and Noivern (fast Dragon)." } },
  ],
};

export default function KalosPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Kalos Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">KALOS POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Kalos Pokemon teams</strong> from Generation 6 (#650-721). Pokemon X &amp; Y — the first 3D games — featuring Mega Evolutions, the Fairy type, and the AZ legendary trio.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Kalos" />

        <CardShowcase />

        <PokemonSpotlight
          pokemon={KALOS_SPOTLIGHT}
          heading="Iconic Kalos POKEMON"
          badge="GEN VI"
        />


        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE KALOS REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Kalos</strong> is the sixth region, based on France, centered around the luminous Lumiose City (inspired by Paris). Featured in Pokemon X &amp; Y (2013) — the first fully 3D main series games. Introduced 72 new Pokemon, the Fairy type, Mega Evolutions, and Pokemon-Amie, a bonding system between trainer and Pokemon.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              Kalos is unique in that it has not received a remake as of 2026 — making X &amp; Y the only main-series games of the modern era to remain without an updated version. The region&apos;s rich lore involves the ancient Mega Evolution war and AZ&apos;s ultimate weapon.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "72 NEW POKEMON", desc: "#650 Chespin to #721 Volcanion" }, { label: "MEGA EVOLUTIONS", desc: "New battle transformation mechanic" }, { label: "FAIRY TYPE", desc: "18th type, strong vs Dragon" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">KALOS LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">?? AZ&apos;S TRIO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Xerneas</strong> (#716) — Fairy, Fairy Aura. Mascot of Pokemon X. Learns Geomancy (raises Sp. Atk/Sp. Def/Speed by 2 stages).</p>
                  <p><strong>Yveltal</strong> (#717) — Dark/Flying, Dark Aura. Mascot of Pokemon Y. Learns Oblivion Wing (heals 75% HP dealt).</p>
                  <p><strong>Zygarde</strong> (#718) — Dragon/Ground. Has 10% Cell, 50% Forme, and Complete Forme with 708 BST in Sun/Moon.</p>
                </div>
              </div>
              {[{ title: "MYTHICALS", content: "Diancie (#719, Rock/Fairy, Mega available), Hoopa (#720, Psychic/Ghost, Confined & Unbound forms, 670 BST Unbound), Volcanion (#721, Fire/Water, unique type combo)." }
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/unova-pokemon-generator", label: "UNOVA (GEN 5)", desc: "Black & White" }, { href: "/alola-pokemon-generator", label: "ALOLA (GEN 7)", desc: "Sun & Moon" }, { href: "/galar-pokemon-generator", label: "GALAR (GEN 8)", desc: "Sword & Shield" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">KALOS POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Kalos?", a: "Kalos introduced 72 new Pokemon (#650-721) — the fewest new Pokemon of any generation at that time. However, Gen 6 added Mega Evolutions for over 40 Pokemon from previous generations." },
                { q: "What are Mega Evolutions?", a: "Mega Evolutions are temporary battle transformations requiring a Mega Stone and Mega Ring. They boost a Pokemon's total base stats and sometimes change its type (e.g., Charizard X becomes Fire/Dragon). Only one Mega Evolution is allowed per battle per trainer." },
                { q: "What is the Fairy type?", a: "Introduced in Gen 6, Fairy is the 18th Pokemon type. It is super effective against Dragon, Dark, and Fighting types, and resists Bug, Dark, and Fighting. It is weak to Poison and Steel, and immune to Dragon moves." },
                { q: "Why is Greninja so popular?", a: "Greninja (Water/Dark) has 122 Speed and 103 Special Attack. Its Protean ability changes its type to match each move used, granting free STAB on every attack. Battle Bond Greninja transforms into Ash-Greninja after a KO, boosting its stats further." },
                { q: "What games are set in Kalos?", a: "Only Pokemon X and Y (2013) are set in Kalos — the first main series games on the Nintendo 3DS and the first fully 3D titles. As of 2026, there is no Kalos remake, making it the most-requested remake by fans." },
                { q: "What is the best Kalos starter?", a: "Froakie/Greninja is the strongest competitively. Chespin/Chesnaught is the most defensive (Grass/Fighting). Fennekin/Delphox (Fire/Psychic) has good Special Attack at 114. For playthroughs, Fennekin is often considered easiest due to fewer type weaknesses early game." },
                { q: "What is Zygarde's Complete Forme?", a: "Zygarde Complete Forme has 708 BST — higher than Xerneas or Yveltal. It is made up of Zygarde Cells and Cores collected in Sun/Moon. Its signature move Power Construct transforms it from 50% to Complete Forme when its HP drops below half." },
                { q: "What were the biggest additions in Gen 6?", a: "Gen 6 introduced: fully 3D graphics for the first time, Mega Evolutions (40+ Pokemon), the Fairy type, Pokemon-Amie, Super Training for EVs, Horde Encounters (5v1), Sky Battles (Flying types only), and Wonder Trade (now Surprise Trade)." },
                { q: "Which Kalos Pokemon are banned in competitive play?", a: "Aegislash was temporarily banned for its King's Shield + high defenses combo. Mega Kangaskhan (Parental Bond) was banned to Ubers. Greninja is top OU. Xerneas and Yveltal are Ubers-tier legendaries." },
                { q: "How do I use the Kalos Pokemon Generator?", a: "Select Gen 6 or Kalos in the region filter, set your preferred team size (1 to 6 Pokemon), optionally filter by type or evolution stage, and click Generate. You can lock favorite picks and regenerate the rest — ideal for Nuzlocke planning or fun random challenges." },
                { q: "What is the lore behind Mega Evolution in Kalos?", a: "In the Pokemon universe, Mega Evolution originated in Kalos 3,000 years ago during a great war. King AZ used a machine powered by his Floette's life force to create an ultimate weapon. The energy from this event created Mega Stones throughout the region, enabling Mega Evolution today." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

