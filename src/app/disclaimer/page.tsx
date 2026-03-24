import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AlertTriangle, Shield, Scale, FileText } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Legal Disclaimer - Random Pokemon Generator | Copyright & Fair Use",
  description:
    "Legal disclaimer for Random Pokemon Generator. Important copyright information, fair use policy, fan project status, and data sources. Please read before using our tool.",
  keywords: [
    "pokemon generator disclaimer",
    "copyright notice",
    "fair use pokemon",
    "fan made pokemon tool",
    "legal disclaimer",
  ],
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Legal Disclaimer - Random Pokemon Generator",
    description:
      "Important legal information about Random Pokemon Generator including copyright notices and fair use policy.",
    url: `${siteUrl}/disclaimer`,
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-6">
          <div className="bg-black px-4 py-2 slasher border-2 border-black hover:bg-charcoal transition-smooth">
            <span className="font-mono text-sm font-semibold text-white">← BACK TO GENERATOR</span>
          </div>
        </Link>

        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'Legal Disclaimer' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="text-red-600" size={48} />
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight uppercase">
            LEGAL DISCLAIMER
          </h1>
          <p className="font-mono text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Important legal information regarding copyrights, trademarks, and fair use. Please read carefully before using Random Pokemon Generator.
          </p>
        </div>

        {/* Important Notice */}
        <section className="mb-12 bg-red-100 border-4 border-red-600 p-8 slasher">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-red-600 flex-shrink-0" size={32} />
            <div>
              <h2 className="font-sans font-bold text-2xl text-red-900 mb-3 uppercase">Important Notice</h2>
              <p className="font-mono text-base text-red-900 leading-relaxed">
                By using this website, you acknowledge and agree to the terms outlined in this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of the Random Pokemon Generator immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Copyright Notice */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-indigo-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Copyright Notice</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              <strong className="text-black">Pokémon™</strong> and all related content including but not limited to character names, character designs, images, sprites, artwork, logos, and trademarks are © 1995-2025 <strong className="text-black">Nintendo / Creatures Inc. / GAME FREAK inc.</strong>
            </p>
            <p className="text-base">
              The following are registered trademarks of Nintendo and The Pokémon Company:
            </p>
            <ul className="list-none space-y-2 pl-6 border-l-4 border-black">
              <li>• Pokémon® (ポケモン)</li>
              <li>• All Pokemon character names (Pikachu™, Charizard™, Mewtwo™, etc.)</li>
              <li>• Pokédex™</li>
              <li>• Game titles: Pokemon Red, Blue, Yellow, Gold, Silver, Crystal, Ruby, Sapphire, Emerald, Diamond, Pearl, Platinum, Black, White, X, Y, Sun, Moon, Sword, Shield, Scarlet, Violet, and all other official Pokemon games</li>
              <li>• Pokemon Trading Card Game™</li>
              <li>• All Pokemon logos and brand identities</li>
            </ul>
            <p className="text-base">
              <strong className="text-black">Nintendo®</strong>, <strong className="text-black">Game Boy®</strong>, <strong className="text-black">Nintendo DS®</strong>, <strong className="text-black">Nintendo 3DS®</strong>, <strong className="text-black">Nintendo Switch™</strong>, and related marks are trademarks of Nintendo.
            </p>
            <div className="bg-cream border-2 border-black p-4 mt-4">
              <p className="text-base font-bold text-black">
                ⚠️ Random Pokemon Generator does NOT claim any ownership, copyright, or trademark rights to Pokemon or any related intellectual property.
              </p>
            </div>
          </div>
        </section>

        {/* Fan Project Status */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-purple-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Fan Project Status</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              Random Pokemon Generator is a <strong className="text-black">fan-made, non-commercial, non-profit project</strong> created by Pokemon fans for the Pokemon community. This website exists purely for entertainment and educational purposes.
            </p>
            <div className="bg-white border-2 border-black p-6 mt-4">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">We Are NOT:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Affiliated with Nintendo Co., Ltd.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Endorsed by The Pokémon Company</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Sponsored by Creatures Inc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Approved by GAME FREAK inc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Representing any official Pokemon products or services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Selling Pokemon-related products or services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Making any profit from Pokemon intellectual property</span>
                </li>
              </ul>
            </div>
            <p className="text-base mt-4">
              This tool is provided completely free of charge with no advertisements, no paid features, and no monetization whatsoever. We do not generate revenue from Pokemon content.
            </p>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-green-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Data Sources & Attribution</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              All Pokemon data displayed on this website is sourced from <strong className="text-black">PokeAPI</strong> (<a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">pokeapi.co</a>), a free and open-source RESTful Pokemon database maintained by the community.
            </p>
            <div className="bg-cream border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Data Includes:</h3>
              <ul className="space-y-1 text-base">
                <li>• Pokemon names, IDs, and National Dex numbers</li>
                <li>• Type information (Fire, Water, Grass, etc.)</li>
                <li>• Base stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)</li>
                <li>• Abilities and hidden abilities</li>
                <li>• Evolution chains and evolution methods</li>
                <li>• Official artwork and sprites</li>
                <li>• Pokédex descriptions and flavor text</li>
                <li>• Height, weight, and classification data</li>
                <li>• Generation and regional information</li>
              </ul>
            </div>
            <p className="text-base">
              <strong className="text-black">Image Attribution:</strong> Pokemon sprites and artwork are official assets from Pokemon games, originally created by Nintendo, Creatures Inc., and GAME FREAK inc. These images are aggregated and distributed by PokeAPI under fair use for educational and informational purposes.
            </p>
            <p className="text-base">
              We do not host, modify, or claim ownership of any Pokemon images or data. All content is pulled dynamically from PokeAPI&apos;s public API endpoints.
            </p>
          </div>
        </section>

        {/* Fair Use */}
        <section className="mb-12 bg-marigold border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Fair Use Doctrine</h2>
          <div className="space-y-4 font-mono text-black leading-relaxed">
            <p className="text-base">
              We believe Random Pokemon Generator falls under <strong>Fair Use</strong> as defined by U.S. Copyright Law (17 U.S.C. § 107) and similar international copyright doctrines for the following reasons:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl mb-3">1. Non-Commercial Purpose</h3>
                <p className="text-base">This website is entirely non-commercial. We do not sell products, display advertisements, or generate revenue. The tool is free for everyone.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl mb-3">2. Transformative Use</h3>
                <p className="text-base">We provide a transformative utility tool that generates random Pokemon teams—functionality not provided by official Pokemon products.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl mb-3">3. Educational Value</h3>
                <p className="text-base">Our tool helps trainers learn about Pokemon types, stats, abilities, and team composition strategies. It serves an educational purpose.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl mb-3">4. No Market Harm</h3>
                <p className="text-base">This tool does not compete with or substitute for official Pokemon products. It enhances the Pokemon gaming experience and may encourage game purchases.</p>
              </div>
            </div>
            <p className="text-base mt-6">
              Our use of Pokemon names, images, and data is for <strong>informational, educational, and entertainment purposes</strong> only. We are not distributing Pokemon games, ROMs, or any pirated content.
            </p>
          </div>
        </section>

        {/* Disclaimer of Liability */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Disclaimer of Liability</h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <p>
              Random Pokemon Generator is provided &quot;AS IS&quot; without warranty of any kind, express or implied. We make no guarantees regarding:
            </p>
            <ul className="list-none space-y-2 pl-6 border-l-4 border-black">
              <li>• Accuracy of Pokemon data (types, stats, abilities may contain errors)</li>
              <li>• Availability of the service (downtime may occur)</li>
              <li>• Suitability for any particular purpose</li>
              <li>• Compatibility with specific devices or browsers</li>
            </ul>
            <p>
              We are not liable for any damages, losses, or issues arising from use of this website, including but not limited to data loss, device issues, or decisions made based on generated teams.
            </p>
            <p>
              <strong className="text-black">External Links:</strong> This website may contain links to third-party websites (PokeAPI, official Pokemon websites, etc.). We are not responsible for the content, privacy policies, or practices of external sites.
            </p>
          </div>
        </section>

        {/* Copyright Compliance */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Copyright Compliance</h2>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              We respect intellectual property rights. If you are a representative of Nintendo, The Pokémon Company, Creatures Inc., GAME FREAK inc., or any other rights holder and have concerns about this website, please contact us immediately.
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Takedown Requests</h3>
              <p className="text-base mb-4">
                If you believe any content on this website infringes your copyright, please send a DMCA takedown notice to:
              </p>
              <div className="bg-cream border border-black p-4">
                <p className="text-sm font-bold break-words">Email: <a href="mailto:shadowrajoriya@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline break-all">shadowrajoriya@gmail.com</a></p>
                <p className="text-xs mt-2">We will respond to all legitimate requests within 48 hours.</p>
              </div>
            </div>
            <p className="text-base mt-4">
              We are committed to resolving any copyright concerns promptly and respectfully. Our goal is to support the Pokemon community, not violate intellectual property rights.
            </p>
          </div>
        </section>

        {/* Changes to Disclaimer */}
        <section className="mb-12 bg-white border-2 border-black p-6 slasher">
          <h2 className="font-sans font-bold text-2xl text-black mb-4 uppercase">Changes to This Disclaimer</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            This legal disclaimer may be updated periodically to reflect changes in copyright law, fair use standards, or our operational practices. The date of the last update is displayed below. Continued use of Random Pokemon Generator after changes constitutes acceptance of the updated disclaimer.
          </p>
          <p className="font-mono text-xs text-black mt-4">
            <strong>Last Updated:</strong> December 14, 2025
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8 bg-black border-4 border-black p-8 slasher text-center">
          <h2 className="font-sans font-bold text-2xl text-white mb-4 uppercase">
            Questions About This Disclaimer?
          </h2>
          <p className="font-mono text-marigold text-sm mb-6 max-w-2xl mx-auto break-words">
            For legal inquiries, copyright concerns, or questions about fair use, please contact us at shadowrajoriya@gmail.com
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-white text-black font-grotesk font-bold text-lg px-10 py-4 border-4 border-marigold slasher transition-smooth hover:bg-marigold">
              RETURN TO GENERATOR →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
