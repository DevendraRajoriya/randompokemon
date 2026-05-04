import { Metadata } from "next";
import HowToUseGuide from "@/components/HowToUseGuide";
import Link from "next/link";
import { Zap, ArrowLeft, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Pokemon Generator - Expert Guide | Random Pokemon Generator",
  description: "Learn expert strategies from 40+ years of combined Pokemon experience. Master Nuzlocke challenges, competitive team building, and monotype runs with proven techniques.",
  keywords: [
    "pokemon generator guide",
    "how to use pokemon generator",
    "nuzlocke guide",
    "competitive pokemon team building",
    "monotype challenge",
    "pokemon team strategy",
    "random pokemon tips",
  ],
  openGraph: {
    title: "How to Use Pokemon Generator - Expert Guide",
    description: "Master Pokemon team building with expert strategies for Nuzlocke, competitive play, and themed challenges.",
    type: "article",
    url: "https://www.randompokemon.co/guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Use Pokemon Generator" }],
  },
  twitter: { card: "summary_large_image", title: "How to Use Pokemon Generator - Expert Guide", description: "Master Pokemon team building with expert strategies for Nuzlocke, competitive play, and themed challenges.", images: ["/og-image.png"] },
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      {/* Breadcrumb */}
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">How to Use Guide</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Expert Knowledge Base</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">
            HOW TO USE<br />THIS GENERATOR
          </h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto mb-6 leading-relaxed">
            Master Pokemon team building with insights from <strong>40+ years of combined experience</strong>. Proven strategies for Nuzlocke runs, competitive play, and themed challenges.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="inline-block btn-hover-lift">
              <div className="bg-black hover:bg-charcoal text-white font-grotesk font-bold text-base px-10 py-4 border-4 border-black slasher transition-smooth flex items-center gap-3">
                <Zap size={20} />
                START GENERATING
              </div>
            </Link>
            <Link href="/pokedex" className="inline-block btn-hover-lift">
              <div className="bg-cream hover:bg-marigold text-black font-grotesk font-bold text-base px-10 py-4 border-4 border-black slasher transition-smooth flex items-center gap-3">
                <BookOpen size={20} />
                BROWSE POKEDEX
              </div>
            </Link>
          </div>
        </div>

        {/* Quick nav tiles */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">QUICK LINKS</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/nuzlocke-generator", label: "NUZLOCKE GUIDE", desc: "Challenge run strategies" },
              { href: "/draft-league-generator", label: "DRAFT LEAGUE", desc: "Competitive draft tips" },
              { href: "/randomizer-guide", label: "RANDOMIZER", desc: "ROM randomizer prep" },
              { href: "/starter-pokemon-generator", label: "STARTER PICKER", desc: "All 27 starters" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-white border-2 border-black p-4 slasher hover:bg-marigold hover:border-black transition-all group">
                <h3 className="font-mono font-bold text-xs text-black uppercase mb-1">{link.label}</h3>
                <p className="font-mono text-[10px] text-charcoal/70 group-hover:text-black/70">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Main Guide Content */}
        <HowToUseGuide />

        {/* Final CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">
            READY TO BUILD<br />YOUR TEAM?
          </h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">Apply these expert strategies and create your perfect Pokemon team now. Free forever.</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">
              OPEN GENERATOR →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
