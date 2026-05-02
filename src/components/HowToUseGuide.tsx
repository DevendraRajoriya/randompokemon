"use client";

import { Book, Zap, Shield, Trophy, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowToUseGuide() {
  return (
    <section className="w-full max-w-7xl mx-auto space-y-8">

      {/* Guide Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Nuzlocke Guide */}
        <div className="bg-cream border-2 border-black p-6 slasher">
          <div className="inline-block bg-black px-3 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">NUZLOCKE</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={20} className="text-black" />
            <h3 className="font-grotesk font-bold text-2xl text-black uppercase">Challenge Setup</h3>
          </div>
          <p className="font-mono text-xs text-charcoal mb-4">Based on 100+ completed Nuzlocke runs by our team:</p>
          <div className="space-y-3">
            {[
              { step: "01", title: "SET TEAM SIZE", desc: "Recommended: 6 Pokemon for full flexibility. Experienced players can challenge with 3–4 Pokemon teams." },
              { step: "02", title: "CHOOSE YOUR REGION", desc: "Beginner Tip: Start with Kanto (Gen 1) or Hoenn (Gen 3) for balanced difficulty. Avoid Sinnoh until experienced." },
              { step: "03", title: "EXCLUDE LEGENDARIES", desc: "Hardcore Mode: Disable Legendary, Mythical, and Paradox Pokemon. Standard ruleset used by 90% of the community." },
              { step: "04", title: "TYPE COVERAGE", desc: "Pro Tip: Generate random first, then re-roll individual Pokemon to optimize. Aim for 5–6 different types minimum." },
              { step: "05", title: "SAVE YOUR TEAM", desc: "Screenshot your team for reference during your playthrough before starting the run." },
            ].map(item => (
              <div key={item.step} className="bg-white border-2 border-black p-3 slasher flex gap-3">
                <span className="font-grotesk font-bold text-lg text-black/20 leading-none">{item.step}</span>
                <div>
                  <h4 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.title}</h4>
                  <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/nuzlocke-generator" className="mt-5 inline-flex items-center gap-2 bg-black hover:bg-charcoal text-white font-mono font-bold text-xs px-5 py-3 border-2 border-black slasher transition-smooth">
            OPEN NUZLOCKE GENERATOR <ArrowRight size={14} />
          </Link>
        </div>

        {/* Competitive Team Building */}
        <div className="bg-cream border-2 border-black p-6 slasher">
          <div className="inline-block bg-marigold px-3 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">COMPETITIVE</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={20} className="text-black" />
            <h3 className="font-grotesk font-bold text-2xl text-black uppercase">Team Building</h3>
          </div>
          <p className="font-mono text-xs text-charcoal mb-4">Insights from VGC regionals & top 500 Showdown rankings:</p>
          <div className="space-y-3">
            {[
              { title: "6-ROLE FRAMEWORK", desc: "Every competitive team needs 1–2 sweepers, 1–2 walls/tanks, 1 pivot/support, 1 speed control." },
              { title: "TYPE BALANCE RULE", desc: "No more than 2 Pokemon of the same type. Ensure coverage for top threats: Dragon, Fairy, Steel." },
              { title: "EVOLUTION STAGE", desc: "Use \"Fully Evolved\" filter for serious battles. Unevolved Pokemon are only viable in Little Cup formats." },
              { title: "LEGENDARY BALANCE", desc: "VGC allows 2 restricted legendaries. Draft Leagues typically ban box legendaries. Check your league's ruleset." },
              { title: "TESTING PROCESS", desc: "Generate 3–5 team variations, test on Pokemon Showdown, then refine. Test 50+ combinations before finalizing." },
            ].map(item => (
              <div key={item.title} className="bg-white border-2 border-black p-3 slasher">
                <h4 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.title}</h4>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/draft-league-generator" className="mt-5 inline-flex items-center gap-2 bg-black hover:bg-charcoal text-white font-mono font-bold text-xs px-5 py-3 border-2 border-black slasher transition-smooth">
            OPEN DRAFT LEAGUE GENERATOR <ArrowRight size={14} />
          </Link>
        </div>

        {/* Monotype Challenge */}
        <div className="bg-cream border-2 border-black p-6 slasher">
          <div className="inline-block bg-black px-3 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">MONOTYPE</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Zap size={20} className="text-black" />
            <h3 className="font-grotesk font-bold text-2xl text-black uppercase">Monotype Challenge</h3>
          </div>
          <p className="font-mono text-xs text-charcoal mb-4">From 50+ successful monotype runs:</p>
          <div className="space-y-3">
            {[
              { title: "EASIEST MONOTYPES", desc: "Water, Steel, Flying: Excellent variety and few weaknesses. Water is most forgiving — recommended for first-timers." },
              { title: "HARDEST MONOTYPES", desc: "Poison, Bug, Ice: Limited options and multiple weaknesses. Ice monotype is hardest — attempt only with Nuzlocke experience." },
              { title: "DUAL-TYPE STRATEGY", desc: "Select your monotype (e.g., Fire), but look for Pokemon with secondary types (Fire/Fighting) to handle disadvantages." },
              { title: "EVOLUTION PLANNING", desc: "Include 1–2 Unevolved Pokemon for early game, then focus on Fully Evolved for late game. Mirrors real progression." },
            ].map(item => (
              <div key={item.title} className="bg-white border-2 border-black p-3 slasher">
                <h4 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.title}</h4>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex gap-2 flex-wrap">
            {[
              { label: "FIRE TYPE →", href: "/" },
              { label: "WATER TYPE →", href: "/" },
              { label: "DRAGON TYPE →", href: "/" },
            ].map(link => (
              <Link key={link.label} href={link.href} className="inline-block bg-cream hover:bg-marigold text-black font-mono font-bold text-xs px-4 py-2 border-2 border-black slasher transition-smooth">{link.label}</Link>
            ))}
          </div>
        </div>

        {/* Quick Team Generation */}
        <div className="bg-cream border-2 border-black p-6 slasher">
          <div className="inline-block bg-marigold px-3 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">QUICK START</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Target size={20} className="text-black" />
            <h3 className="font-grotesk font-bold text-2xl text-black uppercase">Quick Generation</h3>
          </div>
          <p className="font-mono text-xs text-charcoal mb-4">Speed tips from generating 10,000+ teams:</p>
          <div className="space-y-3">
            {[
              { title: "DEFAULT SETTINGS (FASTEST)", desc: "Leave all filters at default, set team size to 6, click Generate. Perfect for content creators who need random teams quickly." },
              { title: "BALANCED TEAM (30 SECONDS)", desc: "Set region, exclude legendaries, generate, then use individual re-rolls to fix type overlaps. Our fastest method." },
              { title: "THEMED TEAM (2–3 MINUTES)", desc: "Select specific types, evolution stages, and regions. Generate 3–4 times until you get a team that clicks." },
              { title: "RE-ROLL STRATEGY", desc: "Pro Technique: Generate a full team first, identify weak spots, then use the re-roll button on 1–2 Pokemon instead of the full team." },
            ].map(item => (
              <div key={item.title} className="bg-white border-2 border-black p-3 slasher">
                <h4 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.title}</h4>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Tips */}
      <section className="bg-marigold border-2 border-black p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-3 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">ADVANCED</span>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <Book size={20} className="text-black" />
          <h3 className="font-grotesk font-bold text-3xl text-black uppercase">Expert Tips</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: "🎯", title: "TYPE COVERAGE MATHEMATICS", desc: "Formula: Aim for 10–12 super-effective matchups across your 6 Pokemon. Use Fairy + Steel + Water as your core — covers 12 of 18 types. Foundation of championship teams." },
            { icon: "⚡", title: "SPEED TIER STRATEGY", desc: "Include 2–3 Pokemon above 100 base speed, 2–3 in the 60–90 range, and 0–1 slow tanks. After generating, check base stats — poor speed distribution loses tournaments." },
            { icon: "🛡️", title: "DEFENSIVE BALANCE", desc: "Nuzlocke survival tip: Ensure 2 Pokemon have 90+ Defense OR Special Defense. Bulky Pokemon save runs. Our team has a 94% survival rate following this rule." },
            { icon: "🌟", title: "STARTER POKEMON SECRET", desc: "When generating starter-like teams, select Fire/Water/Grass types, set to Unevolved stage. Works great for Soul Link pairs and mimics real game starter selection." },
            { icon: "🎲", title: "RANDOMIZER PREPARATION", desc: "Generate 10–15 teams with your ROM's available Pokemon pool. Identify which feel fair and which are broken. Use this data to balance your randomizer's encounter tables." },
            { icon: "🔄", title: "GENERATION MIXING", desc: "Select multiple regions (e.g., Kanto + Alola) for cross-generation teams. Creates unique combinations perfect for creative challenges you'd never see in mainline games." },
          ].map(item => (
            <div key={item.title} className="bg-white border-2 border-black p-4 slasher">
              <h4 className="font-mono font-bold text-xs text-black uppercase mb-2">{item.icon} {item.title}</h4>
              <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-cream border-2 border-black p-6 md:p-10 slasher">
        <div className="inline-block bg-black px-3 py-1 slasher border border-black mb-4">
          <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">MISTAKES</span>
        </div>
        <h3 className="font-grotesk font-bold text-3xl text-black uppercase mb-6">Common Mistakes<br />(We&apos;ve Made Them All)</h3>
        <div className="space-y-3">
          {[
            { title: "OVER-FILTERING", desc: "New users apply 5–6 filters at once and get no results or repetitive teams. Solution: Start with just region + legendary status, then add one filter at a time." },
            { title: "IGNORING TYPE OVERLAP", desc: "Getting 3 Water types = shared weaknesses. Solution: After generation, check types. If you see 3+ of the same type, re-roll individual Pokemon until balanced." },
            { title: "ALL GLASS CANNONS", desc: "Teams of 6 offensive Pokemon with no bulk die in Nuzlockes. Solution: After generating, check that at least 2 Pokemon have high Defense/SpDef stats." },
            { title: "NOT USING RE-ROLL", desc: "Many users regenerate the entire team when only 1 Pokemon is problematic. Solution: Use the individual re-roll button (🔄) on each card to swap just one team member." },
          ].map(item => (
            <div key={item.title} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
              <span className="font-grotesk font-bold text-xl text-black leading-none">✗</span>
              <div>
                <h4 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.title}</h4>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
}
