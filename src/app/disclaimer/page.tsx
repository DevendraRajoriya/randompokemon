import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Shield, Scale, FileText, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Legal Disclaimer - Random Pokemon Generator | Copyright & Fair Use",
  description: "Legal disclaimer for Random Pokemon Generator. Important copyright information, fair use policy, fan project status, and data sources. Please read before using our tool.",
  keywords: ["pokemon generator disclaimer", "copyright notice", "fair use pokemon", "fan made pokemon tool", "legal disclaimer"],
  alternates: { canonical: "/disclaimer" },
  openGraph: { title: "Legal Disclaimer - Random Pokemon Generator", description: "Important legal information including copyright notices and fair use policy.", url: `${siteUrl}/disclaimer`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Random Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Legal Disclaimer - Random Pokemon Generator", description: "Important legal information including copyright notices and fair use policy.", images: ["/og-image.png"] },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">Disclaimer</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGAL INFORMATION</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">LEGAL DISCLAIMER</h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed">
            Important legal information regarding copyrights, trademarks, and fair use. Please read carefully before using Random Pokemon Generator.
          </p>
        </div>

        {/* Important Notice */}
        <section className="mb-8 bg-black border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-marigold flex-shrink-0" size={28} />
            <div>
              <h2 className="font-grotesk font-bold text-2xl text-white uppercase mb-3">IMPORTANT NOTICE</h2>
              <p className="font-mono text-xs md:text-sm text-white/80 leading-relaxed">
                By using this website, you acknowledge and agree to the terms outlined in this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of Random Pokemon Generator immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Notice */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COPYRIGHT</span></div>
          <div className="flex items-center gap-2 mb-6"><Scale size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">COPYRIGHT NOTICE</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p><strong className="text-black">Pokémon™</strong> and all related content including character names, designs, images, sprites, artwork, logos, and trademarks are © 1995-2025 <strong className="text-black">Nintendo / Creatures Inc. / GAME FREAK inc.</strong></p>
            <p>The following are registered trademarks of Nintendo and The Pokémon Company:</p>
            <ul className="border-l-4 border-black pl-6 space-y-1">
              <li>• Pokémon® (ポケモン)</li>
              <li>• All Pokemon character names (Pikachu™, Charizard™, Mewtwo™, etc.)</li>
              <li>• Pokédex™</li>
              <li>• All official Pokemon game titles (Red through Scarlet/Violet)</li>
              <li>• Pokemon Trading Card Game™</li>
              <li>• All Pokemon logos and brand identities</li>
            </ul>
            <div className="bg-marigold border-2 border-black p-4 slasher">
              <p className="text-xs font-bold text-black">⚠️ Random Pokemon Generator does NOT claim any ownership, copyright, or trademark rights to Pokemon or any related intellectual property.</p>
            </div>
          </div>
        </section>

        {/* Fan Project */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">STATUS</span></div>
          <div className="flex items-center gap-2 mb-6"><Shield size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">FAN PROJECT STATUS</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6">Random Pokemon Generator is a <strong className="text-black">fan-made, non-commercial, non-profit project</strong> created by Pokemon fans for the Pokemon community. This website exists purely for entertainment and educational purposes.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-3">WE ARE NOT:</h3>
              <div className="space-y-1">
                {["Affiliated with Nintendo Co., Ltd.", "Endorsed by The Pokémon Company", "Sponsored by Creatures Inc.", "Approved by GAME FREAK inc.", "Representing any official Pokemon products or services", "Selling Pokemon-related products or services", "Making any profit from Pokemon intellectual property"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-black font-bold">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="border-l-4 border-black pl-6">This tool is provided completely free of charge with no advertisements, no paid features, and no monetization whatsoever.</p>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">DATA SOURCES</span></div>
          <div className="flex items-center gap-2 mb-6"><FileText size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">DATA & ATTRIBUTION</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>All Pokemon data displayed is sourced from <strong className="text-black">PokeAPI</strong> (<a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-black underline">pokeapi.co</a>), a free and open-source RESTful Pokemon database maintained by the community.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">DATA INCLUDES:</h3>
              <ul className="space-y-1">
                {["Pokemon names, IDs, and National Dex numbers", "Type information", "Base stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)", "Abilities and hidden abilities", "Evolution chains and methods", "Official artwork and sprites", "Pokédex descriptions and flavor text", "Height, weight, and classification data", "Generation and regional information"].map(item => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <p>We do not host, modify, or claim ownership of any Pokemon images or data. All content is pulled dynamically from PokeAPI&apos;s public API endpoints.</p>
          </div>
        </section>

        {/* Fair Use */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LEGAL BASIS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">FAIR USE DOCTRINE</h2>
          <p className="font-mono text-xs md:text-sm text-black leading-relaxed mb-4">We believe Random Pokemon Generator falls under <strong>Fair Use</strong> as defined by U.S. Copyright Law (17 U.S.C. § 107) for the following reasons:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: "1. NON-COMMERCIAL PURPOSE", desc: "This website is entirely non-commercial. We do not sell products, display advertisements, or generate revenue." },
              { label: "2. TRANSFORMATIVE USE", desc: "We provide a transformative utility tool — random team generation — functionality not provided by official products." },
              { label: "3. EDUCATIONAL VALUE", desc: "Our tool helps trainers learn about Pokemon types, stats, abilities, and team composition strategies." },
              { label: "4. NO MARKET HARM", desc: "This tool does not compete with or substitute for official Pokemon products. It enhances the gaming experience." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liability */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LIABILITY</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">DISCLAIMER OF LIABILITY</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>Random Pokemon Generator is provided &quot;AS IS&quot; without warranty of any kind. We make no guarantees regarding:</p>
            <ul className="border-l-4 border-black pl-6 space-y-1">
              <li>• Accuracy of Pokemon data (types, stats, abilities may contain errors)</li>
              <li>• Availability of the service (downtime may occur)</li>
              <li>• Suitability for any particular purpose</li>
              <li>• Compatibility with specific devices or browsers</li>
            </ul>
            <p>We are not liable for any damages, losses, or issues arising from use of this website.</p>
            <p><strong className="text-black">External Links:</strong> This website may contain links to third-party websites. We are not responsible for the content or privacy policies of external sites.</p>
          </div>
        </section>

        {/* Copyright compliance */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">DMCA</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">COPYRIGHT COMPLIANCE</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>We respect intellectual property rights. If you are a representative of Nintendo, The Pokémon Company, Creatures Inc., or GAME FREAK inc. and have concerns, please contact us immediately.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">TAKEDOWN REQUESTS</h3>
              <p className="mb-2">Send DMCA takedown notices to:</p>
              <div className="bg-marigold border-2 border-black p-3 slasher">
                <p className="text-xs font-bold break-words">Email: <a href="mailto:shadowrajoriya@gmail.com" className="text-black underline break-all">shadowrajoriya@gmail.com</a></p>
                <p className="text-xs mt-1">We respond to all legitimate requests within 48 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Last updated */}
        <section className="mb-8 bg-cream border-2 border-black p-4 slasher">
          <h2 className="font-grotesk font-bold text-xl text-black mb-2 uppercase">CHANGES TO THIS DISCLAIMER</h2>
          <p className="font-mono text-xs text-charcoal leading-relaxed">This disclaimer may be updated periodically. Continued use after changes constitutes acceptance of the updated disclaimer.</p>
          <p className="font-mono text-xs text-black mt-3"><strong>Last Updated:</strong> December 14, 2025</p>
        </section>

        {/* CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">QUESTIONS ABOUT<br />THIS DISCLAIMER?</h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto break-words">For legal inquiries, copyright concerns, or fair use questions, contact us at shadowrajoriya@gmail.com</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">RETURN TO GENERATOR →</div>
          </Link>
        </section>
      </div>
    </main>
  );
}
