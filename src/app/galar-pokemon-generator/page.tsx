import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Galar Pokemon Generator | Gen 8 Random Team Builder (Sword/Shield)",
  description: "Generate random Galar Pokemon teams from Generation 8 (#810-905). Sword & Shield including Zacian, Zamazenta, Eternatus, Gigantamax forms and Crown Tundra DLC. Updated 2026.",
  keywords: ["galar pokemon generator", "gen 8 random team generator", "galar pokemon team builder", "sword shield team generator", "galar randomizer", "gen 8 nuzlocke generator", "gigantamax generator", "dynamax team builder"],
  alternates: { canonical: `${siteUrl}/galar-pokemon-generator` },
  openGraph: { title: "Galar Pokemon Generator | Gen 8 Random Team Builder", description: "Generate random Galar Pokemon from Gen 8! Sword & Shield.", url: `${siteUrl}/galar-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Galar Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Galar Pokemon Generator | Gen 8 Random Team Builder", description: "Generate random Galar Pokemon from Gen 8!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Galar Pokemon Generator",
  description: "Random Galar Pokemon generator — 96 species from Sword & Shield. Instant team builder for Nuzlocke, Draft League, and challenge runs.",
  url: `${siteUrl}/galar-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Galar?", acceptedAnswer: { "@type": "Answer", text: "Galar introduced 96 new Pokemon (#810-905), including those added in the Isle of Armor and Crown Tundra DLC expansions. Plus 18 Galarian regional forms of existing Pokemon like Galarian Ponyta (Psychic), Galarian Corsola (Ghost), and Galarian Slowpoke (Psychic)." } },
    { "@type": "Question", name: "What is Dynamax?", acceptedAnswer: { "@type": "Answer", text: "Dynamax temporarily giant-izes a Pokemon for 3 turns, boosting HP (1.5x) and replacing moves with Max Moves. Gigantamax is a rarer variant with unique forms and G-Max Moves with added effects. Only one Pokemon per battle can Dynamax." } },
    { "@type": "Question", name: "What is the Hero Duo?", acceptedAnswer: { "@type": "Answer", text: "Zacian (Fairy, or Fairy/Steel Crowned Sword form, 720 BST) is the mascot of Sword. Zamazenta (Fighting, or Fighting/Steel Crowned Shield form, 720 BST) is the mascot of Shield. Both have Intrepid Sword/Dauntless Shield abilities." } },
    { "@type": "Question", name: "Is Sword or Shield better?", acceptedAnswer: { "@type": "Answer", text: "Sword has Zacian, Farfetch'd (Sirfetch'd), Swirlix (Slurpuff), Stonjourner, and Gym Leaders Bea and Gordie. Shield has Zamazenta, Galarian Ponyta (Rapidash), Corsola (Cursola), Eiscue, and Gym Leaders Allister and Melony. The story is identical." } },
    { "@type": "Question", name: "What are Galarian forms?", acceptedAnswer: { "@type": "Answer", text: "Galarian forms are regional variants adapted to the UK-inspired environment. Examples: Galarian Ponyta (Psychic-type unicorn), Galarian Corsola (Ghost-type dead coral), Galarian Meowth (Steel, based on Norse/Viking cats), Galarian Slowpoke (Psychic, now Galar-spice addicted), and Galarian Zigzagoon/Obstagoon (Dark/Normal)." } },
    { "@type": "Question", name: "What is the Wild Area?", acceptedAnswer: { "@type": "Answer", text: "The Wild Area is an open-world zone in Galar where players can explore freely, find Pokemon of varying levels, and participate in Max Raid Battles (4-player co-op against Dynamax Pokemon). It was the first open-world area in any main series Pokemon game, predating Scarlet/Violet's full open world." } },
    { "@type": "Question", name: "What DLC is available for Sword and Shield?", acceptedAnswer: { "@type": "Answer", text: "Two DLC expansions: Isle of Armor (adds Kubfu/Urshifu, Galarian Slowbro, and 100+ returning Pokemon) and Crown Tundra (adds Calyrex, Galarian Birds, Regieleki & Regidrago, and a Dynamax Adventure mode to catch past legendaries). Both are included in the Expansion Pass." } },
    { "@type": "Question", name: "What are the best Galar Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Galar picks: Dragapult (Dragon/Ghost, fastest pseudo-legendary at 142 Speed), Corviknight (Flying/Steel, Mirror Armor defensive wall), Rillaboom (Grass, Grassy Surge + Grassy Glide priority), Cinderace (Fire, Libero + Court Change), Barraskewda (Water, fastest water-type at 136 Speed), and Urshifu-Rapid Strike (Fighting/Water)." } },
    { "@type": "Question", name: "Who are the Galar Gym Leaders?", acceptedAnswer: { "@type": "Answer", text: "Galar Gym Leaders: Milo (Grass), Nessa (Water), Kabu (Fire), Bea/Allister (Fighting/Ghost, version exclusive), Opal (Fairy), Gordie/Melony (Rock/Ice, version exclusive), Piers (Dark), and Raihan (Dragon). Champion Leon is considered undefeated before the player." } },
    { "@type": "Question", name: "What is Eternatus?", acceptedAnswer: { "@type": "Answer", text: "Eternatus (#890, Poison/Dragon) is the true villain of Galar with 690 BST. Its Eternamax form has 1125 BST — the highest of any Pokemon — but is unobtainable by players. It powers Galar's Dynamax phenomenon. You catch it during the climax of the story." } },
    { "@type": "Question", name: "How does the Galar Pokemon Generator work?", acceptedAnswer: { "@type": "Answer", text: "Select Gen 8/Galar filter, choose team size (1-6), optionally filter by type or evolution stage, exclude legendaries for Nuzlockes, and generate. Lock Pokemon you want to keep and regenerate the rest. Great for Sword & Shield playthroughs, Nuzlocke runs, and competitive team exploration." } },
  ],
};

export default function GalarGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Galar Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">GALAR POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Galar Pokemon teams</strong> from Generation 8 (#810-905). Sword &amp; Shield with Dynamax, Gigantamax forms, the Wild Area, and two DLC expansions.
           Looking for standard Pokemon? Visit our <Link href="/" className="text-black underline font-bold hover:text-charcoal">main random Pokemon generator</Link>.</p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Galar" />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE GALAR REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Galar</strong> is the eighth region, based on Great Britain. Featured in Sword &amp; Shield (2019, Nintendo Switch). Introduced Dynamax/Gigantamax battle mechanics, the Wild Area (the first open-world zone in main series Pokemon), and version-exclusive Gym Leaders.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              DLC expansions added the Isle of Armor (Fighting dojo, Kubfu/Urshifu) and Crown Tundra (Calyrex, Galarian legendary birds, Dynamax Adventures for all past legendaries).
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "96 NEW POKEMON", desc: "#810 Grookey to #905 Enamorus" }, { label: "DYNAMAX/GIGANTAMAX", desc: "Giant battle transformation" }, { label: "WILD AREA", desc: "Open-world exploration zone" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">GALAR LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">⚔️🛡️ HERO DUO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Zacian</strong> (#888) — Fairy/Steel (Crowned Sword), 720 BST. Mascot of Pokemon Sword.</p>
                  <p><strong>Zamazenta</strong> (#889) — Fighting/Steel (Crowned Shield), 720 BST. Mascot of Pokemon Shield.</p>
                </div>
              </div>
              {[
                { title: "🌑 ETERNATUS", content: "Eternatus (#890, Poison/Dragon, 690 BST) is the true villain of Galar. Its Eternamax form has 1125 BST — the highest of any Pokemon — but is unobtainable by players." },
                { title: "🐻🦊 KUBFU LINE", content: "Kubfu & Urshifu (Fighting/Dark or Fighting/Water) from the Isle of Armor DLC. Rapid Strike Style is especially competitive, and Single Strike Style is more offensive." },
                { title: "👑 CROWN TUNDRA", content: "Calyrex (Psychic/Grass) can fuse with Glastrier (Ice) or Spectrier (Ghost) for 680 BST forms. The DLC also adds Galarian Legendary Birds and returns Regi legendaries with Regieleki & Regidrago." },
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST GALAR POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔴 UBERS</h3><p className="font-mono text-xs text-charcoal">Zacian-Crowned, Calyrex-Ice/Shadow, Eternamax Eternatus, Urshifu-SS</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟡 OU</h3><p className="font-mono text-xs text-charcoal">Dragapult, Corviknight, Rillaboom, Cinderace, Barraskewda, Urshifu-RS</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟢 UU/RU</h3><p className="font-mono text-xs text-charcoal">Obstagoon, Polteageist, Toxtricity, Falinks, Alcremie, Sirfetch&apos;d</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/alola-pokemon-generator", label: "ALOLA (GEN 7)", desc: "Sun & Moon" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }, { href: "/shiny-pokemon-generator", label: "SHINY POKEMON", desc: "Ultra rare variants" }, { href: "/legendary-pokemon-generator", label: "LEGENDARY", desc: "Powerful rare Pokemon" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">GALAR POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Galar?", a: "Galar introduced 96 new Pokemon (#810-905), including those added in Isle of Armor and Crown Tundra DLC. Plus 18 Galarian regional forms like Galarian Ponyta (Psychic), Galarian Corsola (Ghost), and Galarian Meowth (Steel)." },
                { q: "What is Dynamax?", a: "Dynamax temporarily giant-izes a Pokemon for 3 turns, boosting HP by 1.5x and replacing moves with Max Moves. Gigantamax is rarer with unique visual forms and G-Max Moves with added effects (e.g., G-Max Wildfire from Charizard lingers for 4 turns)." },
                { q: "What is the Hero Duo?", a: "Zacian (Fairy/Steel Crowned Sword, 720 BST) and Zamazenta (Fighting/Steel Crowned Shield, 720 BST) are Galar's mascots. Zacian is considered more competitively dominant due to its offensive typing." },
                { q: "Is Sword or Shield better?", a: "Sword has Zacian, Sirfetch'd, Swirlix, Stonjourner, and Gym Leaders Bea (Fighting) and Gordie (Rock). Shield has Zamazenta, Galarian Ponyta, Cursola, Eiscue, and Gym Leaders Allister (Ghost) and Melony (Ice). Otherwise identical." },
                { q: "What are Galarian forms?", a: "Galarian forms are regional variants adapted to the UK environment. Galarian Ponyta (Psychic unicorn), Corsola (Ghost dead coral), Meowth (Steel Viking cat), Slowpoke (Psychic, spice-addicted), Rapidash (Psychic/Fairy), and Zigzagoon/Linoone/Obstagoon (Dark/Normal)." },
                { q: "What is the Wild Area?", a: "The Wild Area is Galar's open-world zone — the first in main series Pokemon. It features Pokemon of varying levels, weather-based spawns, and Max Raid Dens for 4-player co-op Dynamax battles. It was an early preview of what Scarlet/Violet's full open world would become." },
                { q: "What DLC did Sword and Shield get?", a: "The Expansion Pass includes Isle of Armor (adds Kubfu, Urshifu, Galarian Slowbro/King, and 100+ returning Pokemon) and Crown Tundra (adds Calyrex fusions, Galarian legendary birds, Regieleki & Regidrago, and Dynamax Adventures to catch all past legendaries)." },
                { q: "What Galar Pokemon are best competitively?", a: "Top picks: Dragapult (Dragon/Ghost, 142 Speed pseudo-legendary), Corviknight (Flying/Steel mirror armor wall), Rillaboom (Grass, Grassy Surge + Grassy Glide priority), Cinderace (Fire, Libero + Court Change), Barraskewda (Water, 136 Speed), Urshifu-RS (Fighting/Water)." },
                { q: "Who are the Galar Gym Leaders?", a: "Milo (Grass), Nessa (Water), Kabu (Fire), Bea or Allister (Fighting/Ghost, version-exclusive), Opal (Fairy), Gordie or Melony (Rock/Ice, version-exclusive), Piers (Dark), Raihan (Dragon). Champion Leon is considered undefeated before the player." },
                { q: "What is Eternatus?", a: "Eternatus (#890, Poison/Dragon, 690 BST) powers Galar's Dynamax phenomenon. Its Eternamax form has 1125 BST — the highest stat total of any Pokemon — but the form is unobtainable. You catch it during the story climax." },
                { q: "How does the Galar Pokemon Generator work?", a: "Select Gen 8/Galar filter, set team size (1-6), filter by type or evolution stage, optionally exclude legendaries for Nuzlockes. Generate, lock favorites, regenerate the rest. Free, instant, no account required." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

