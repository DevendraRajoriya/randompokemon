import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Crown, ArrowLeft } from "lucide-react";

const PokemonGeneratorClient = dynamic(() => import("../PokemonGeneratorClient"));
const CardShowcase = dynamic(() => import("@/components/CardShowcase"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-cream border-2 border-black" />,
});

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Legendary Pokemon Generator | Random Legendary & Mythical Picker",
  description: "Generate random Legendary and Mythical Pokemon from all generations. All box legendaries, Ubers, mythicals and Ultra Beasts. Updated 2026.",
  keywords: ["legendary pokemon generator", "random legendary pokemon", "mythical pokemon generator", "uber pokemon randomizer", "legendary pokemon picker", "random legendary picker"],
  alternates: { canonical: `${siteUrl}/legendary-pokemon-generator` },
  openGraph: { title: "Legendary Pokemon Generator | Random Legendary Picker", description: "Generate random Legendary and Mythical Pokemon from all generations!", url: `${siteUrl}/legendary-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Legendary Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Legendary Pokemon Generator | Random Legendary Picker", description: "Generate random Legendary and Mythical Pokemon!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Legendary Pokemon Generator",
  description: "Generate random Legendary, Sub-Legendary, and Mythical Pokemon from all generations.",
  url: `${siteUrl}/legendary-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many legendary Pokemon are there?", acceptedAnswer: { "@type": "Answer", text: "As of Gen 9, there are over 60 true Legendaries, 50+ Sub-Legendaries, and 25+ Mythicals — over 135 powerful rare Pokemon in total across all 9 generations." } },
    { "@type": "Question", name: "What is the strongest legendary Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Arceus has 720 BST (120 in every stat). Mega Mewtwo Y and Mega Rayquaza both reach 780 BST. Eternamax Eternatus has 1125 BST but is unobtainable. Koraidon and Miraidon (Gen 9) are 670 BST." } },
    { "@type": "Question", name: "What is the difference between Legendary and Mythical?", acceptedAnswer: { "@type": "Answer", text: "Legendaries can be caught in-game through the main story or post-game. Mythicals (like Mew, Celebi, Jirachi) were historically event-only, though many are now obtainable via Pokemon HOME or modern events." } },
    { "@type": "Question", name: "Can you use legendaries in competitive play?", acceptedAnswer: { "@type": "Answer", text: "Most box legendaries (Mewtwo, Rayquaza, Arceus, etc.) are banned to the Ubers tier. Sub-Legendaries like Landorus-T, Heatran, and the Tapus are allowed in standard OU play. VGC has special rules each season allowing specific legendaries." } },
    { "@type": "Question", name: "What are Ultra Beasts?", acceptedAnswer: { "@type": "Answer", text: "Ultra Beasts are extradimensional Pokemon from Gen 7 (Alola). They include Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, and Guzzlord. They all have the Beast Boost ability and skewed stat distributions. Pheromosa was banned to Ubers." } },
    { "@type": "Question", name: "What are Paradox Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Paradox Pokemon from Gen 9 (Paldea) are ancient or futuristic variants of existing Pokemon. Scarlet has Past forms (Great Tusk, Roaring Moon, Flutter Mane) and Violet has Future forms (Iron Treads, Iron Valiant, Iron Moth). Several were banned from competitive play." } },
    { "@type": "Question", name: "What is the first legendary Pokemon?", acceptedAnswer: { "@type": "Answer", text: "The Legendary Birds — Articuno, Zapdos, and Moltres — are the first legendary Pokemon in the Pokedex (#144-146). Mewtwo (#150) is the most powerful Gen 1 legendary, and Mew (#151) is the first Mythical." } },
    { "@type": "Question", name: "What is the rarest legendary Pokemon?", acceptedAnswer: { "@type": "Answer", text: "Mythicals like Mew, Celebi, Jirachi, and Deoxys were historically the rarest — only obtainable through limited-time events. Shiny-locked legendaries require specific methods like Dynamax Adventures or special event distributions to obtain." } },
    { "@type": "Question", name: "Which legendary has the highest base stat total?", acceptedAnswer: { "@type": "Answer", text: "Eternamax Eternatus has 1125 BST — the highest of any Pokemon — but it is unobtainable. Among obtainable Pokemon: Mega Mewtwo X/Y and Mega Rayquaza share 780 BST, followed by Arceus (720 BST) and fused legendaries like Black Kyurem and White Kyurem (700 BST)." } },
    { "@type": "Question", name: "What is a good legendary team?", acceptedAnswer: { "@type": "Answer", text: "A strong Ubers legendary team might include: Arceus (tank/support), Mega Rayquaza or Kyogre (attacker), Zacian-Crowned (fast physical sweeper), Necrozma-Dusk Mane (Steel/Dragon wall), Yveltal (Dark/Flying pivot), and Calyrex-Shadow (Ghost/Psychic sweeper)." } },
    { "@type": "Question", name: "What does this Legendary Pokemon Generator do?", acceptedAnswer: { "@type": "Answer", text: "This free Legendary Pokemon Generator randomly picks Legendary and Mythical Pokemon from all 9 generations. Filter by generation, type, or legendary category. Perfect for Ubers team building, randomizer runs that include legendaries, or just exploring the most powerful Pokemon in the series." } },
  ],
};

export default function LegendaryPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Legendary Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">LEGENDARY POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Legendary and Mythical Pokemon</strong> from all generations. Box legendaries, Sub-Legendaries, Ultra Beasts, Paradox forms, and Mythicals.
          </p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultLegendary={["Legendary", "Sub-Legendary", "Mythical"]} />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARY TIERS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">TYPES OF LEGENDARY POKEMON</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "BOX LEGENDARIES", desc: "The mascots on game covers. Mewtwo, Lugia, Rayquaza, Dialga, Reshiram, Xerneas, Solgaleo, Zacian, Koraidon and more." },
                { title: "SUB-LEGENDARIES", desc: "Legendary trios and duos. Birds, Beasts, Regis, Lake Guardians, Swords of Justice, Tapus, and Ruinous quartet." },
                { title: "MYTHICAL POKEMON", desc: "Event-exclusive rarities: Mew, Celebi, Jirachi, Deoxys, Darkrai, Shaymin, Arceus, Victini, Genesect, Diancie and more." },
                { title: "ULTRA BEASTS", desc: "Extradimensional Pokemon from Gen 7: Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, Guzzlord." },
              ].map(item => (
                <div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.title}</h3><p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">POWER RANKINGS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">STRONGEST LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">👑 HIGHEST BST LEGENDARIES</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Eternamax Eternatus</strong> — 1125 BST (unobtainable form)</p>
                  <p><strong>Mega Mewtwo X/Y & Mega Rayquaza</strong> — 780 BST</p>
                  <p><strong>Arceus</strong> — 720 BST (120 in every stat)</p>
                  <p><strong>Zacian/Zamazenta Crowned, Kyurem-Black/White</strong> — 720 BST</p>
                </div>
              </div>
              {[
                { title: "🔴 UBERS TIER", content: "Arceus, Mewtwo, Rayquaza, Kyogre, Groudon, Dialga, Palkia, Giratina, Reshiram, Zekrom, Xerneas, Yveltal, Solgaleo, Lunala, Necrozma, Zacian, Koraidon, Miraidon." },
                { title: "🟡 BEST COMPETITIVE PICKS", content: "Landorus-T (Ground/Flying), Heatran (Fire/Steel), Tapu Koko (Electric/Fairy), Cresselia (Psychic), Regieleki (Electric)." },
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/shiny-pokemon-generator", label: "SHINY POKEMON", desc: "Ultra rare variants" }, { href: "/starter-pokemon-generator", label: "STARTER POKEMON", desc: "All starter picks" }, { href: "/hoenn-pokemon-generator", label: "HOENN (GEN 3)", desc: "Ruby & Sapphire" }, { href: "/", label: "ALL REGIONS", desc: "Full generator" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">LEGENDARY POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many legendary Pokemon are there?", a: "As of Gen 9, there are 60+ true Legendaries, 50+ Sub-Legendaries, and 25+ Mythicals — over 135 powerful rare Pokemon in total across all 9 generations." },
                { q: "What is the strongest legendary Pokemon?", a: "Arceus has 720 BST (120 in every stat). Mega Mewtwo Y and Mega Rayquaza both reach 780 BST. Eternamax Eternatus has 1125 BST but is unobtainable. Koraidon and Miraidon are 670 BST." },
                { q: "What is the difference between Legendary and Mythical?", a: "Legendaries can be caught in-game through story or post-game. Mythicals (Mew, Celebi, Jirachi, etc.) were historically event-only, though many are now available via Pokemon HOME or events." },
                { q: "Can you use legendaries in competitive play?", a: "Most box legendaries are banned to Ubers. Sub-Legendaries like Landorus-T, Heatran, and the Tapus are allowed in standard OU. VGC has special seasonal rules that sometimes allow specific restricted legendaries." },
                { q: "What are Ultra Beasts?", a: "Ultra Beasts from Gen 7 include Nihilego, Buzzwole, Pheromosa, Xurkitree, Celesteela, Kartana, and Guzzlord. They all have Beast Boost ability. Pheromosa was banned to Ubers for its extreme Speed and Attack." },
                { q: "What are Paradox Pokemon?", a: "Gen 9 Paradox Pokemon are ancient or futuristic variants of existing Pokemon. Past forms in Scarlet (Great Tusk, Flutter Mane) and Future forms in Violet (Iron Treads, Iron Valiant). Several (Chi-Yu, Chien-Pao) were banned from competitive." },
                { q: "What is the first legendary Pokemon?", a: "The Legendary Birds — Articuno (#144), Zapdos (#145), Moltres (#146) — are first in the Pokedex. Mewtwo (#150) is the most powerful Gen 1 legendary, and Mew (#151) is the first Mythical Pokemon." },
                { q: "Which legendary has the highest BST?", a: "Eternamax Eternatus has 1125 BST but is unobtainable. Among obtainable: Mega Mewtwo X/Y and Mega Rayquaza share 780 BST, followed by Arceus (720 BST) and fused legendaries Black/White Kyurem (700 BST)." },
                { q: "What is a good Ubers legendary team?", a: "A strong Ubers team: Arceus-Ground (support), Mega Rayquaza (attacker), Zacian-Crowned (physical sweeper), Necrozma-DM (Steel/Dragon wall), Yveltal (Dark/Flying pivot), and Calyrex-Shadow (Ghost/Psychic sweeper)." },
                { q: "What is the rarest legendary Pokemon?", a: "Mythicals like Mew, Celebi, Jirachi, and Deoxys were historically rarest — event-only distributions. Shiny-locked legendaries require Dynamax Adventures or special methods. Shiny Mew from original events is arguably the rarest legitimately owned legendary." },
                { q: "What does this Legendary Pokemon Generator do?", a: "This free generator randomly picks Legendary and Mythical Pokemon from all 9 generations. Filter by generation, type, or legendary category. Perfect for Ubers team building, randomizer runs including legendaries, or exploring the most powerful Pokemon in the series." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
