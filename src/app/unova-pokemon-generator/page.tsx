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
  title: "Unova Pokemon Generator | Gen 5 Random Team Builder (Black/White)",
  description: "Generate random Unova Pokemon teams from Generation 5 (#494-649). Black, White, Black 2 & White 2 including the Tao Trio, 156 new Pokemon and the best story in the series. Updated 2026.",
  keywords: ["unova pokemon generator", "gen 5 random team generator", "unova pokemon team builder", "black white team generator", "unova randomizer", "gen 5 nuzlocke generator", "black 2 white 2 team builder"],
  alternates: { canonical: `${siteUrl}/unova-pokemon-generator` },
  openGraph: { title: "Unova Pokemon Generator | Gen 5 Random Team Builder", description: "Generate random Unova Pokemon from Gen 5! Black & White.", url: `${siteUrl}/unova-pokemon-generator`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Unova Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Unova Pokemon Generator | Gen 5 Random Team Builder", description: "Generate random Unova Pokemon from Gen 5!", images: ["/og-image.png"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication", name: "Unova Pokemon Generator",
  description: "Generate random Pokemon teams from the Unova region (Gen 5). Pokemon #494-649.",
  url: `${siteUrl}/unova-pokemon-generator`, applicationCategory: "GameApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many Pokemon are in Unova?", acceptedAnswer: { "@type": "Answer", text: "Unova introduced 156 new Pokemon (#494-649) — the largest single-generation addition since Gen 1. Black & White also locked players to only new Unova Pokemon until post-game, making it a fresh experience." } },
    { "@type": "Question", name: "What is the Tao Trio?", acceptedAnswer: { "@type": "Answer", text: "Reshiram (Fire/Dragon, Turboblaze), Zekrom (Electric/Dragon, Teravolt), and Kyurem (Ice/Dragon) form the Tao Trio. In B2W2, Kyurem can fuse with Reshiram to become White Kyurem (700 BST) or with Zekrom to become Black Kyurem (700 BST)." } },
    { "@type": "Question", name: "Is Black or White better?", acceptedAnswer: { "@type": "Answer", text: "Black has Black City (city filled with trainers) and Reshiram; White has White Forest (wild Pokemon area) and Zekrom. Black 2 & White 2 are considered far superior to the originals with more content, PWT, and a larger Pokemon roster." } },
    { "@type": "Question", name: "Why is Gen 5 considered to have the best story?", acceptedAnswer: { "@type": "Answer", text: "Black & White features N as a complex antagonist who genuinely believes Pokemon should be free, challenging the ethics of Pokemon training. Team Plasma's ideology and N's redemption arc represent the most mature, nuanced narrative in the main series." } },
    { "@type": "Question", name: "What new features did Gen 5 introduce?", acceptedAnswer: { "@type": "Answer", text: "Gen 5 introduced: animated battle sprites for the first time, seasonal changes (weather/encounter changes with real-world seasons), the C-Gear (IR/Wi-Fi hub), Dream World (online feature), Pokemon Global Link, Triple Battles and Rotation Battles, and the Hidden Ability system." } },
    { "@type": "Question", name: "What are the best Unova Pokemon for competitive play?", acceptedAnswer: { "@type": "Answer", text: "Top competitive Unova picks: Volcarona (Bug/Fire, Quiver Dance sweeper), Ferrothorn (Grass/Steel, the ultimate entry hazard setter), Conkeldurr (Fighting, Guts + Flame Orb), Excadrill (Ground/Steel, Sand Rush in Sand), Haxorus (Dragon, 147 Attack), and Reuniclus (Psychic, Magic Guard Trick Room)." } },
    { "@type": "Question", name: "What games are set in Unova?", acceptedAnswer: { "@type": "Answer", text: "Pokemon Black & White (2010, DS) and Pokemon Black 2 & White 2 (2012, DS) are the only main series games set in Unova. B2W2 are direct sequels set 2 years later and are widely regarded as the best DS Pokemon games." } },
    { "@type": "Question", name: "What is the Pokemon World Tournament in BW2?", acceptedAnswer: { "@type": "Answer", text: "The Pokemon World Tournament (PWT) is a facility in Black 2 & White 2 where you can battle Gym Leaders and Champions from every region in the series — all in one place. It is considered the greatest single post-game facility in Pokemon history." } },
    { "@type": "Question", name: "What is the best Unova starter?", acceptedAnswer: { "@type": "Answer", text: "Oshawott/Samurott (Water) is the most reliable for playthroughs with good bulk and coverage. Snivy/Serperior is weakest in-game but has Contrary Leaf Storm in later gens (game-breaking in competitive). Tepig/Emboar (Fire/Fighting) hits hard but is frail." } },
    { "@type": "Question", name: "What makes the Unova Pokemon Generator useful?", acceptedAnswer: { "@type": "Answer", text: "This free generator randomly picks Unova Pokemon (#494-649) based on your settings. Filter by type, rarity, or evolution stage. Exclude legendaries for Nuzlockes, lock favorites, and regenerate. Gen 5 has incredibly diverse Pokemon making this great for challenge runs and team discovery." } },
    { "@type": "Question", name: "Who is N in Pokemon Black and White?", acceptedAnswer: { "@type": "Answer", text: "N (Natural Harmonia Gropius) is the king of Team Plasma and the primary rival/antagonist of Black & White. He was raised by Pokemon and believes they should be free from trainers. He is not evil — his motives are genuine — and he ultimately becomes an ally after being deceived by Ghetsis." } },
  ],
};

export default function UnovaPokemonGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="min-h-screen bg-cream p-4 md:p-8 relative">
        <nav className="mb-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-mono text-xs">
            <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
            <li className="text-charcoal/40">/</li>
            <li className="text-black font-bold uppercase">Unova Generator</li>
          </ol>
        </nav>

        <div className="max-w-6xl mx-auto mb-5 text-center">
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black mb-3 md:mb-4 tracking-tight px-2 uppercase">UNOVA POKEMON GENERATOR</h1>
          <p className="font-mono text-xs md:text-sm text-charcoal max-w-2xl mx-auto mb-4 leading-relaxed">
            Generate random <strong>Unova Pokemon teams</strong> from Generation 5 (#494-649). Black, White, Black 2 &amp; White 2 — the generation with the most Pokemon and the best story in the series.
          </p>
        </div>

        <PokemonGeneratorClient hideHero={true} hideGenericContent={true} defaultRegion="Unova" />

        <CardShowcase />

        <div className="max-w-6xl mx-auto mt-10 space-y-6">
          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">REGION OVERVIEW</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">ABOUT THE UNOVA REGION</h2>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-4">
              <strong>Unova</strong> is the fifth region, based on New York City, USA. Featured in Black &amp; White (2010) and Black 2 &amp; White 2 (2012). It had the most new Pokemon of any generation (156) and forced players to use only new Unova Pokemon through the main story — creating a truly fresh experience.
            </p>
            <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">
              B2W2 are direct sequels set 2 years later and are considered the best DS Pokemon games, featuring the Pokemon World Tournament where you battle Champions and Gym Leaders from every region.
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[{ label: "156 NEW POKEMON", desc: "#494 Victini to #649 Genesect" }, { label: "ANIMATED SPRITES", desc: "First gen with battle animations" }, { label: "SEASONAL SYSTEM", desc: "Game changes with real seasons" }].map(item => (
                <div key={item.label} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGENDARIES</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">UNOVA LEGENDARY POKEMON</h2>
            <div className="space-y-3">
              <div className="bg-white border-2 border-black p-4 slasher border-l-4 border-l-marigold">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">☯ TAO TRIO</h3>
                <div className="font-mono text-xs text-charcoal space-y-1">
                  <p><strong>Reshiram</strong> (#643) — Fire/Dragon, Turboblaze, 680 BST. Mascot of Pokemon Black.</p>
                  <p><strong>Zekrom</strong> (#644) — Electric/Dragon, Teravolt, 680 BST. Mascot of Pokemon White.</p>
                  <p><strong>Kyurem</strong> (#646) — Ice/Dragon, 660 BST. Fuses to form Black (700) or White Kyurem (700) in B2W2.</p>
                </div>
              </div>
              {[{ title: "⚔️ SWORDS OF JUSTICE", content: "Cobalion (Steel/Fighting), Terrakion (Rock/Fighting), Virizion (Grass/Fighting), Keldeo (Water/Fighting). Based on the Three Musketeers + d'Artagnan." },
                { title: "🌪️ FORCES OF NATURE", content: "Tornadus (Flying), Thundurus (Electric/Flying), Landorus (Ground/Flying). Have Therian Formes in B2W2. Landorus-T is top OU competitively." }
              ].map(item => (<div key={item.title} className="bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h3><p className="font-mono text-xs text-charcoal">{item.content}</p></div>))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COMPETITIVE</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">BEST UNOVA POKEMON (TIER LIST)</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🔴 UBERS</h3><p className="font-mono text-xs text-charcoal">Reshiram, Zekrom, Kyurem-Black/White, Genesect (banned), Landorus-I</p></div>
              <div className="border-l-4 border-marigold pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟡 OU</h3><p className="font-mono text-xs text-charcoal">Volcarona, Ferrothorn, Conkeldurr, Excadrill, Haxorus, Reuniclus, Landorus-T</p></div>
              <div className="border-l-4 border-charcoal pl-4 bg-white border-2 border-black p-4 slasher"><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">🟢 UU/RU</h3><p className="font-mono text-xs text-charcoal">Lilligant, Chandelure, Krookodile, Mienshao, Galvantula, Braviary</p></div>
            </div>
          </section>

          <section className="bg-black border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-marigold px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-black uppercase tracking-widest">MORE TOOLS</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-white leading-[0.9] mb-6 uppercase">EXPLORE MORE <span className="text-marigold">GENERATORS</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[{ href: "/sinnoh-pokemon-generator", label: "SINNOH (GEN 4)", desc: "Diamond & Pearl" }, { href: "/kalos-pokemon-generator", label: "KALOS (GEN 6)", desc: "X & Y" }, { href: "/alola-pokemon-generator", label: "ALOLA (GEN 7)", desc: "Sun & Moon" }, { href: "/paldea-pokemon-generator", label: "PALDEA (GEN 9)", desc: "Scarlet & Violet" }].map(link => (
                <Link key={link.href} href={link.href} className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-marigold hover:text-black hover:border-black transition-all group"><h3 className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</h3><p className="font-mono text-[10px] text-white/60 group-hover:text-black/60">{link.desc}</p></Link>
              ))}
            </div>
          </section>

          <section className="bg-cream border-2 border-black p-3 sm:p-4 md:p-6 slasher">
            <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span></div>
            <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">UNOVA POKEMON FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many Pokemon are in Unova?", a: "Unova introduced 156 new Pokemon (#494-649) — the largest single generation since Gen 1. Black & White locked players to only new Pokemon until post-game, making it feel completely fresh." },
                { q: "What is the Tao Trio?", a: "Reshiram (Fire/Dragon), Zekrom (Electric/Dragon), and Kyurem (Ice/Dragon). Kyurem can fuse with Reshiram or Zekrom in B2W2 to become White Kyurem or Black Kyurem (700 BST each)." },
                { q: "Is Black 2 or White 2 better?", a: "Both are nearly identical. Black 2 has Black City and Reshiram; White 2 has White Forest and Zekrom. Both are direct sequels set 2 years after BW with significantly more content than the originals." },
                { q: "Why is Gen 5 considered the best story?", a: "N's moral complexity — genuinely believing Pokemon should be free — creates real philosophical conflict. His redemption after being manipulated by Ghetsis is the most emotionally mature narrative in the main Pokemon series." },
                { q: "What new features did Gen 5 introduce?", a: "Animated battle sprites, seasonal changes (real-world seasons affect the game), Triple and Rotation Battles, the C-Gear (IR/Wi-Fi hub), Hidden Ability system, and the Pokemon Global Link online feature." },
                { q: "What is the Pokemon World Tournament?", a: "The PWT in B2W2 lets you battle Gym Leaders and Champions from every generation in one location. It is widely considered the greatest post-game facility in Pokemon history, with remixed boss themes." },
                { q: "What is the best Unova starter?", a: "Oshawott/Samurott (Water) is most reliable for playthroughs. Snivy/Serperior (Grass) is competitive via Hidden Ability Contrary + Leaf Storm in Gen 6+. Tepig/Emboar (Fire/Fighting) hits hard but is slow and frail." },
                { q: "What Unova Pokemon are best competitively?", a: "Volcarona (Quiver Dance sweeper), Ferrothorn (entry hazard king), Conkeldurr (Guts + Flame Orb brawler), Excadrill (Sand Rush in Sand), Landorus-T (OU pivot), Haxorus (147 Attack Dragon), Reuniclus (Trick Room Psychic)." },
                { q: "What are version exclusives in Black and White?", a: "Black exclusives: Cottonee, Gothita line, Vullaby/Mandibuzz, Rufflet/Braviary, Reshiram. White exclusives: Petilil, Solosis line, Rufflet in some versions, Zekrom. Opelucid City is also visually different between versions." },
                { q: "Who are the Unova Elite Four?", a: "Shauntal (Ghost), Grimsley (Dark), Caitlin (Psychic), and Marshal (Fighting). Champion Alder uses a diverse team. In B2W2, Champion Iris (Dragon specialist, previously Opelucid Gym Leader in White) becomes Champion." },
                { q: "How does the Unova Pokemon Generator work?", a: "Set your team size (1-6), optionally filter by type, evolution stage, or exclude legendaries, then hit Generate. Lock picks you want to keep and regenerate the rest. Perfect for Nuzlocke runs, randomizer prep, and draft league pools." },
              ].map(faq => (<details key={faq.q} className="bg-white border-2 border-black p-4 slasher group"><summary className="font-mono font-bold text-sm text-black uppercase cursor-pointer group-open:mb-2">{faq.q}</summary><p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p></details>))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
