import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, Zap, Target, Code, Trophy, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "About Us - Random Pokemon Generator | Our Mission & Story",
  description: "Learn about the Random Pokemon Generator - the world's leading free Pokemon database and team builder. Built by fans, for fans. Supporting Nuzlocke, Draft Leagues, and more since 2024.",
  keywords: ["about random pokemon generator", "pokemon team builder", "nuzlocke tool", "pokemon database", "fan made pokemon tool"],
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us - Random Pokemon Generator", description: "The world's leading free Pokemon database and team builder. Built by fans, for fans worldwide.", url: `${siteUrl}/about`, type: "website" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">About</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BUILT BY FANS, FOR FANS</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
            ABOUT RANDOM<br />POKEMON GENERATOR
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed">
            The world&apos;s leading free Pokemon database and team builder. Built by fans, for fans worldwide.
          </p>
        </div>

        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">OUR MISSION</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT WE&apos;RE BUILDING</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6">Random Pokemon Generator was created to solve a simple problem: trainers needed an easy, fast, and free way to generate random Pokemon teams for challenge runs, competitive preparation, and creative gameplay.</p>
            <p className="border-l-4 border-black pl-6">We believe Pokemon team building should be accessible to everyone — without paywalls, without ads, and without compromising your privacy. Our mission is to provide the most comprehensive, user-friendly Pokemon generator on the internet, completely free forever.</p>
            <p className="border-l-4 border-black pl-6">With over 1,025 Pokemon across 9 generations, our database is constantly updated to include new releases, regional forms, Paradox Pokemon, and special variants.</p>
          </div>
        </section>

        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FEATURES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT WE OFFER</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: Zap, label: "INSTANT TEAM GENERATION", desc: "Generate random Pokemon teams in milliseconds. Advanced algorithm ensures balanced, diverse teams every time." },
              { icon: Globe, label: "COMPREHENSIVE DATABASE", desc: "All 1,025+ Pokemon with detailed stats, abilities, types, and Pokedex entries from verified sources." },
              { icon: Target, label: "SMART FILTERING", desc: "Filter by type, generation, region, legendary status, and more. Perfect for Nuzlockes, monotype runs, or draft leagues." },
              { icon: Users, label: "24/7 AVAILABILITY", desc: "Available worldwide, anytime. No registration required. Works on all devices. Zero data collection." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <div className="flex items-center gap-2 mb-2"><item.icon size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">{item.label}</h3></div>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">USE CASES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">PERFECT FOR</h2>
          <div className="space-y-3">
            {[
              { icon: "⚔️", label: "NUZLOCKE RUNS", desc: "Generate starter options, simulate route encounters, and create backup teams for hardcore challenge runs." },
              { icon: "🏆", label: "DRAFT LEAGUES", desc: "Create balanced draft pools for competitive Pokemon leagues and tournaments." },
              { icon: "🎲", label: "RANDOMIZER PLAYTHROUGHS", desc: "Preview potential teams before starting ROM randomizers. Plan strategies in advance." },
              { icon: "🎮", label: "CONTENT CREATION", desc: "Streamers and YouTubers love our tool for creating engaging, unpredictable content." },
              { icon: "✨", label: "CASUAL DISCOVERY", desc: "Discover Pokemon you've never used before. Break out of the meta and try something new." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                <span className="font-mono font-bold text-lg">{item.icon}</span>
                <div><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">VALUES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">OUR VALUES</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: "🔓", label: "ALWAYS FREE", desc: "No premium tiers, no paywalls, no hidden costs. Every feature is free forever." },
              { icon: "🔒", label: "PRIVACY FIRST", desc: "We don't collect your data. No tracking cookies, no accounts, no analytics invasions." },
              { icon: "⚡", label: "SPEED & PERFORMANCE", desc: "Lightning-fast generation. Minimal design. Zero bloat. We respect your time." },
              { icon: "🌍", label: "GLOBAL ACCESSIBILITY", desc: "Works on any device, any browser, anywhere. Pokemon has no borders." },
              { icon: "📱", label: "MOBILE-FRIENDLY", desc: "Fully responsive design. Same smooth experience on phone, tablet, or desktop." },
              { icon: "🎨", label: "CLEAN DESIGN", desc: "Brutalist aesthetics. No clutter, no distractions. Function over form." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.icon} {item.label}</h3>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">THE TEAM</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">MEET THE TEAM</h2>
          <p className="font-mono text-xs md:text-sm text-charcoal leading-relaxed border-l-4 border-black pl-6 mb-6">Our team combines 40+ years of collective Pokemon experience with cutting-edge web development expertise. We&apos;re active trainers, competitive players, and Nuzlocke enthusiasts who use this tool daily.</p>
          <div className="space-y-3">
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Code size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Devendra Rajoriya — Lead Developer</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">Pokemon Database Architect & Full-Stack Dev</p>
              <p className="font-mono text-xs text-charcoal mb-2">15+ years since Diamond/Pearl. 28 mainline games completed. Platinum Hardcore Nuzlocke with 0 deaths (2022). Masterball tier VGC 2024.</p>
              <div className="flex gap-2">
                <a href="https://github.com/DevendraRajoriya" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 py-1 border-2 border-black hover:bg-charcoal text-xs font-mono slasher">GitHub →</a>
                <a href="https://x.com/MisterLezend" target="_blank" rel="noopener noreferrer" className="bg-cream text-black px-3 py-1 border-2 border-black hover:bg-marigold text-xs font-mono slasher">X →</a>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Trophy size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Alex &quot;NuzlockeMaster&quot; Chen</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">Nuzlocke Strategy Consultant & Content Contributor</p>
              <p className="font-mono text-xs text-charcoal">12+ years of Nuzlocke challenges. 50+ successful runs. Creator of &quot;The Ultimate Nuzlocke Ruleset&quot;. YouTube channel with 45,000+ subscribers.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <div className="flex items-center gap-2 mb-2"><Target size={18} className="text-black" /><h3 className="font-mono font-bold text-sm text-black uppercase">Jordan &quot;DraftKing&quot; Martinez</h3></div>
              <p className="font-mono text-xs text-marigold font-bold mb-2">Competitive Pokemon Analyst & Draft League Specialist</p>
              <p className="font-mono text-xs text-charcoal">10+ years competitive play. Top 500 globally on Pokemon Showdown. 8 Draft League championship titles. Founded Premier Draft League with 200+ players.</p>
            </div>
          </div>
        </section>

        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">JOIN OUR<br />COMMUNITY</h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Thousands of trainers worldwide trust Random Pokemon Generator. Start generating teams today. Free forever.</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">START GENERATING →</div>
          </Link>
          <div className="mt-6"><Link href="/contact" className="font-mono text-xs text-white/60 hover:text-white underline transition-colors">Have questions? Contact us →</Link></div>
        </section>
      </div>
    </main>
  );
}
