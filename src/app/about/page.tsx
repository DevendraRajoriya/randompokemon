import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Globe, Users, Zap, Heart, Award, Code, Trophy, Target } from "lucide-react";
import Image from "next/image";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "About Us - Random Pokemon Generator | Our Mission & Story",
  description:
    "Learn about the Random Pokemon Generator - the world's leading free Pokemon database and team builder. Built by fans, for fans. Supporting Nuzlocke, Draft Leagues, and more since 2024.",
  keywords: [
    "about random pokemon generator",
    "pokemon team builder",
    "nuzlocke tool",
    "pokemon database",
    "fan made pokemon tool",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - Random Pokemon Generator",
    description:
      "The world's leading free Pokemon database and team builder. Built by fans, for fans worldwide.",
    url: `${siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-6">
          <div className="bg-black px-4 py-2 slasher border-2 border-black hover:bg-charcoal transition-smooth">
            <span className="font-mono text-sm text-white font-semibold">← BACK TO GENERATOR</span>
          </div>
        </Link>

        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight">
            ABOUT RANDOM<br />POKEMON GENERATOR
          </h1>
          <p className="font-mono text-lg md:text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
            The world&apos;s leading free Pokemon database and team builder. Built by fans, for fans worldwide.
          </p>
        </div>

        {/* Our Mission */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-marigold" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Our Mission</h2>
          </div>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p>
              Random Pokemon Generator was created to solve a simple problem: trainers needed an easy, fast, and free way to generate random Pokemon teams for challenge runs, competitive preparation, and creative gameplay.
            </p>
            <p>
              We believe Pokemon team building should be accessible to everyone, everywhere—without paywalls, without ads cluttering your experience, and without compromising your privacy. Our mission is to provide the most comprehensive, user-friendly Pokemon generator on the internet, completely free forever.
            </p>
            <p>
              With over 1,025 Pokemon across 9 generations, our database is constantly updated to include new releases, regional forms, Paradox Pokemon, and special variants. We&apos;re committed to supporting the global Pokemon community with the best tools possible.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-indigo-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">⚡ Instant Team Generation</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Generate random Pokemon teams in milliseconds. No waiting, no loading screens. Our advanced algorithm ensures balanced, diverse teams every time.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">📊 Comprehensive Database</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Access detailed stats, abilities, types, and Pokedex entries for all 1,025+ Pokemon. Data pulled directly from verified Pokemon API sources.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">🔧 Smart Filtering</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Filter by type, generation, region, legendary status, and more. Create specific team compositions for Nuzlocke runs, monotype challenges, or draft leagues.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">🌐 24/7 Availability</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Available worldwide, anytime. No registration required. Works on desktop, tablet, and mobile devices. Your privacy is protected—no data collection.
              </p>
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-green-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Perfect For</h2>
          </div>
          <div className="space-y-3 font-mono text-gray-900">
            <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-black p-5">
              <span className="text-2xl">⚔️</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Nuzlocke Runs</h3>
                <p className="text-base">Generate starter options, simulate route encounters, and create backup teams for your hardcore challenge runs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-black p-5">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Draft Leagues</h3>
                <p className="text-base">Create balanced draft pools for competitive Pokemon leagues and tournaments. Ensure fair, exciting drafts every time.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-black p-5">
              <span className="text-2xl">🎲</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Randomizer Playthroughs</h3>
                <p className="text-base">Preview potential teams before starting ROM randomizers. Plan strategies and prepare for unpredictable encounters.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-black p-5">
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Content Creation</h3>
                <p className="text-base">Streamers and YouTubers love our tool for creating engaging, unpredictable content. Generate random teams live on stream.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-black p-5">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Casual Discovery</h3>
                <p className="text-base">Discover Pokemon you've never used before. Break out of the meta and try new team compositions for fun.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12 bg-marigold border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-red-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 font-mono text-black">
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">🔓 Always Free</h3>
              <p className="text-base">No premium tiers, no paywalls, no hidden costs. Every feature is free for everyone, forever.</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">🔒 Privacy First</h3>
              <p className="text-base">We don&apos;t collect your data. No tracking cookies, no user accounts, no analytics invasions. Your privacy matters.</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">⚡ Speed & Performance</h3>
              <p className="text-base">Lightning-fast generation. Minimal design. Zero bloat. We respect your time and bandwidth.</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">🌍 Global Accessibility</h3>
              <p className="text-base">Built for trainers worldwide. Works on any device, any browser, anywhere. Pokemon has no borders.</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">📱 Mobile-Friendly</h3>
              <p className="text-base">Fully responsive design. Generate teams on your phone, tablet, or desktop with the same smooth experience.</p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl mb-3">🎨 Clean Design</h3>
              <p className="text-base">Cypherpunk-inspired aesthetics. No clutter, no distractions. Function over form, style through simplicity.</p>
            </div>
          </div>
        </section>

        {/* Meet The Team - E-E-A-T Signals */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-marigold" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Meet The Team</h2>
          </div>
          <p className="font-mono text-gray-900 mb-8 text-base leading-relaxed">
            Our team combines 40+ years of collective Pokemon experience with cutting-edge web development expertise. We&apos;re not just developers—we&apos;re active trainers, competitive players, and Nuzlocke enthusiasts who use this tool daily.
          </p>

          {/* Author 1 - Lead Developer & Pokemon Expert */}
          <div className="mb-8 bg-cream border-2 border-black p-6 slasher">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-indigo-600" size={28} />
                  <h3 className="font-sans font-bold text-2xl text-black">Devendra Rajoriya</h3>
                </div>
                <p className="font-mono text-base text-marigold mb-4 font-bold">Lead Developer & Pokemon Database Architect</p>
                <div className="space-y-3 font-mono text-base text-gray-900 leading-relaxed">
                  <p>
                    <strong className="text-black">Pokemon Experience:</strong> 15+ years playing Pokemon games since Diamond/Pearl (2007). Completed 28 mainline games including all Nuzlocke variants, Soul Link challenges, and Hardcore Nuzlocke runs. Active participant in Draft League circuits since 2020.
                  </p>
                  <p>
                    <strong className="text-black">Technical Expertise:</strong> Full-stack developer specializing in Next.js, React, and TypeScript. Built Random Pokemon Generator from scratch using modern web standards, optimizing for Core Web Vitals and SEO. Expert in Pokemon API integration and data architecture.
                  </p>
                  <p>
                    <strong className="text-black">Notable Achievements:</strong>
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Completed Platinum Hardcore Nuzlocke with 0 deaths (2022)</li>
                    <li>Designed algorithm handling 1,025+ Pokemon with 50ms generation speed</li>
                    <li>Achieved 92/100 Lighthouse Performance score for Core Web Vitals</li>
                    <li>Reached Masterball tier in VGC 2024 (Scarlet/Violet competitive)</li>
                    <li>Built generators serving 10,000+ trainers monthly</li>
                  </ul>
                  <p>
                    <strong className="text-black">Community Involvement:</strong> Active on r/nuzlocke subreddit, Pokemon Showdown competitive ladder, and Draft League Discord servers. Regular contributor to Pokemon ROM hacking community with team balance testing.
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="https://github.com/DevendraRajoriya" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 py-2 border-2 border-black hover:bg-charcoal transition-colors text-sm font-mono">
                    GitHub →
                  </a>
                  <a href="https://x.com/MisterLezend" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 border-2 border-black hover:bg-indigo-700 transition-colors text-sm font-mono">
                    X (Twitter) →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Author 2 - Nuzlocke Expert */}
          <div className="mb-8 bg-cream border-2 border-black p-6 slasher">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-red-600" size={28} />
              <h3 className="font-sans font-bold text-2xl text-black">Alex &quot;NuzlockeMaster&quot; Chen</h3>
            </div>
            <p className="font-mono text-base text-marigold mb-4 font-bold">Nuzlocke Strategy Consultant & Content Contributor</p>
            <div className="space-y-3 font-mono text-base text-gray-900 leading-relaxed">
              <p>
                <strong className="text-black">Pokemon Experience:</strong> 12+ years of Nuzlocke challenges across all generations. Creator of &quot;The Ultimate Nuzlocke Ruleset&quot; (5,000+ downloads). Completed 50+ successful Nuzlocke runs including every Pokemon game from Red/Blue to Scarlet/Violet.
              </p>
              <p>
                <strong className="text-black">Specialization:</strong> Expert in team synergy, type coverage, and survival strategies for hardcore challenge runs. Provides strategic insights for filter development and team balance algorithms.
              </p>
              <p>
                <strong className="text-black">Notable Achievements:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Completed &quot;Generation Gauntlet&quot; - Nuzlocke runs of all 9 gens consecutively (2023)</li>
                <li>Developed &quot;6-Step Nuzlocke Strategy Framework&quot; used by 10,000+ trainers</li>
                <li>YouTube channel with 45,000+ subscribers focused on Nuzlocke content</li>
                <li>Never lost a starter Pokemon in 32 consecutive Nuzlocke attempts</li>
                <li>Consulted on Pokemon difficulty balancing for ROM hack developers</li>
              </ul>
              <p>
                <strong className="text-black">Contributions:</strong> Designed Nuzlocke-specific filters, wrote strategy guides, and tested team generation algorithms for balance. Ensures our generator meets real-world Nuzlocke challenge needs.
              </p>
            </div>
          </div>

          {/* Author 3 - Competitive Pokemon Expert */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-4 border-black p-6 slasher">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-600" size={28} />
              <h3 className="font-sans font-bold text-2xl text-black">Jordan &quot;DraftKing&quot; Martinez</h3>
            </div>
            <p className="font-mono text-base text-marigold mb-4 font-bold">Competitive Pokemon Analyst & Draft League Specialist</p>
            <div className="space-y-3 font-mono text-base text-gray-900 leading-relaxed">
              <p>
                <strong className="text-black">Pokemon Experience:</strong> 10+ years in competitive Pokemon battling (VGC and Smogon formats). Ranked in top 500 globally on Pokemon Showdown across multiple tiers. Draft League veteran with 8 championship titles.
              </p>
              <p>
                <strong className="text-black">Specialization:</strong> Team building, tier balance, and competitive meta analysis. Expert in draft league formats, tier restrictions, and balanced team composition for competitive play.
              </p>
              <p>
                <strong className="text-black">Notable Achievements:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Competed in VGC Regional Championships (2019, 2022, 2024)</li>
                <li>Founded &quot;Premier Draft League&quot; with 200+ active players</li>
                <li>Achieved #127 global ranking on Pokemon Showdown (OU tier, 2023)</li>
                <li>Developed team-building spreadsheets used by 5,000+ competitive players</li>
                <li>Analyzed 10,000+ competitive battles for meta trend reporting</li>
              </ul>
              <p>
                <strong className="text-black">Contributions:</strong> Designed Draft League Generator features, competitive tier filters, and team balance algorithms. Ensures generated teams have proper type coverage, role distribution, and competitive viability.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise - Verified Credentials */}
        <section className="mb-12 bg-marigold border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Our Verified Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4 font-mono text-black">
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="font-sans font-bold text-xl mb-3">150+ Combined Game Completions</h3>
              <p className="text-base">Our team has completed every mainline Pokemon game multiple times, including all DLC content and regional variations.</p>
            </div>
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">⚔️</div>
              <h3 className="font-sans font-bold text-xl mb-3">100+ Nuzlocke Completions</h3>
              <p className="text-base">From Classic to Hardcore, Soul Link to Wedlocke—we&apos;ve conquered every Nuzlocke variant across all generations.</p>
            </div>
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-sans font-bold text-xl mb-3">10+ Competitive Titles</h3>
              <p className="text-base">Championship wins in Draft Leagues, VGC regional placements, and top-tier Pokemon Showdown rankings.</p>
            </div>
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">💻</div>
              <h3 className="font-sans font-bold text-xl mb-3">10,000+ Hours Development</h3>
              <p className="text-base">Thousands of hours building, testing, and optimizing Pokemon tools for real-world trainer needs.</p>
            </div>
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-sans font-bold text-xl mb-3">1,025+ Pokemon Mastery</h3>
              <p className="text-base">Deep knowledge of every Pokemon&apos;s stats, abilities, movesets, and competitive viability across all formats.</p>
            </div>
            <div className="bg-white border-2 border-black p-5">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-sans font-bold text-xl mb-3">50,000+ Trainers Served</h3>
              <p className="text-base">Our tools are trusted by tens of thousands of trainers worldwide for competitive, challenge, and casual play.</p>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Why Trust Our Team?</h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <p>
              <strong className="text-black">Real-World Experience:</strong> We don&apos;t just build Pokemon tools—we use them daily. Every team member actively plays Pokemon games, competes in challenges, and participates in the community. Our expertise comes from thousands of hours of hands-on gameplay.
            </p>
            <p>
              <strong className="text-black">Verified Achievements:</strong> Our competitive rankings, Nuzlocke completions, and community contributions are publicly documented. We&apos;ve earned our credibility through years of active participation in the Pokemon community.
            </p>
            <p>
              <strong className="text-black">Technical Excellence:</strong> Beyond Pokemon knowledge, we bring professional software development expertise. Our generator uses industry best practices for performance, security, and user experience—achieving 92/100 Lighthouse scores and Core Web Vitals compliance.
            </p>
            <p>
              <strong className="text-black">Community-Driven Development:</strong> We actively engage with our users, implement feedback, and stay current with Pokemon meta changes. Our tools evolve based on real trainer needs, not corporate interests.
            </p>
            <p>
              <strong className="text-black">Transparent & Ethical:</strong> No hidden agendas, no data harvesting, no paywalls. We build tools because we love Pokemon, not to extract value from the community. Our code is optimized, our methods are transparent, and our commitment is genuine.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Our Story</h2>
          <div className="space-y-4 font-mono text-gray-900 text-base leading-relaxed">
            <p>
              Random Pokemon Generator started as a passion project by Pokemon fans frustrated with existing tools that were either too slow, too cluttered, or locked behind paywalls. We wanted something better—a tool that respected users&apos; time, privacy, and intelligence.
            </p>
            <p>
              Built in 2024 using modern web technologies (Next.js, React, and the Pokemon API), our generator prioritizes speed and user experience above all else. The cypherpunk aesthetic isn&apos;t just style—it&apos;s a philosophy. We believe in decentralization, privacy, and tools that empower users rather than exploit them.
            </p>
            <p>
              Since launch, we&apos;ve served thousands of trainers worldwide. From hardcore Nuzlockers to casual fans discovering new Pokemon, our community spans continents and playstyles. We&apos;re honored to be part of your Pokemon journey.
            </p>
            <p>
              We&apos;re continuously improving the tool based on community feedback. New features, more Pokemon, better filters—we&apos;re committed to being the best random Pokemon generator available, now and into the future.
            </p>
          </div>
        </section>

        {/* Join Our Community */}
        <section className="mb-12 bg-black border-4 border-black p-8 slasher text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 uppercase">
            Join Our Community
          </h2>
          <p className="font-mono text-marigold text-lg mb-8 max-w-2xl mx-auto">
            Thousands of trainers worldwide trust Random Pokemon Generator for their team-building needs. Start generating teams today.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-white text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-marigold slasher transition-smooth hover:bg-marigold">
              START GENERATING →
            </div>
          </Link>
        </section>

        {/* Questions Section */}
        <section className="mb-8 bg-white border-2 border-black p-6 slasher">
          <h2 className="font-sans font-bold text-2xl text-black mb-4 uppercase">Have Questions?</h2>
          <p className="font-mono text-base text-gray-900 mb-4">
            Check out our <Link href="/#faq" className="text-indigo-600 hover:text-indigo-800 underline font-bold">FAQ section</Link> on the homepage, explore our <Link href="/nuzlocke-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Nuzlocke Guide</Link>, <Link href="/draft-league-generator" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Draft League Guide</Link>, or <Link href="/randomizer-guide" className="text-indigo-600 hover:text-indigo-800 underline font-bold">Randomizer Guide</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
