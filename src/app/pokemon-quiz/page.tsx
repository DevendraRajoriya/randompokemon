import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PokemonQuizClient from "./PokemonQuizClient";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Pokemon Quiz — What Pokemon Are You? | Personality Quiz 2026",
  description:
    "Take the Pokemon quiz to find out what Pokemon you are! Answer 10 personality questions and discover your Pokemon match — from Charizard to Eevee. The most accurate 'what Pokemon am I' quiz online.",
  keywords: [
    "pokemon quiz",
    "what pokemon are you quiz",
    "what pokemon am i quiz",
    "which pokemon are you",
    "pokemon personality quiz",
    "pokemon character quiz",
    "what pokemon am i",
    "pokemon quiz 2026",
    "which pokemon are you based on personality",
  ],
  alternates: { canonical: `${siteUrl}/pokemon-quiz` },
  openGraph: {
    title: "Pokemon Quiz — What Pokemon Are You?",
    description:
      "10 personality questions to find your Pokemon match. Are you Charizard, Eevee, Gengar, or Lucario? Take the quiz now!",
    url: `${siteUrl}/pokemon-quiz`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pokemon Quiz — What Pokemon Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Quiz — What Pokemon Are You?",
    description: "10 personality questions to find your Pokemon match. Take the quiz now!",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "What Pokemon Are You? — Pokemon Personality Quiz",
  description:
    "A 10-question personality quiz that determines which Pokemon best matches your character. Possible results include Charizard, Vaporeon, Jolteon, Leafeon, Espeon, Umbreon, Sylveon, Lucario, Gengar, Dragonite, and Eevee.",
  url: `${siteUrl}/pokemon-quiz`,
  educationalLevel: "General",
  about: { "@type": "Thing", name: "Pokemon" },
  author: { "@type": "Organization", name: "Random Pokemon Generator", url: siteUrl },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Pokemon are you quiz — how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer 10 personality questions about your habits, preferences, and values. Each answer earns points for different Pokemon types. At the end, your dominant type reveals which Pokemon best matches your personality.",
      },
    },
    {
      "@type": "Question",
      name: "What Pokemon am I based on personality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your personality! Passionate, driven people tend to get Charizard. Calm, adaptable people get Vaporeon. Quick-thinking energetic types get Jolteon. Mysterious, loyal people get Umbreon. Empathetic, charming people get Sylveon. Take the quiz to find out your exact match.",
      },
    },
    {
      "@type": "Question",
      name: "Which Pokemon are you based on your zodiac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While our quiz is personality-based rather than zodiac-based, some patterns emerge: Fire signs (Aries, Leo, Sagittarius) often match Charizard or Jolteon. Water signs (Cancer, Scorpio, Pisces) often match Vaporeon or Espeon. Earth signs (Taurus, Virgo, Capricorn) often match Leafeon or Lucario. Air signs (Gemini, Libra, Aquarius) often match Gengar or Dragonite.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rarest result in the Pokemon quiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eevee is the rarest result — it represents someone who is truly adaptable and full of limitless potential, which is a genuinely uncommon personality profile. Dragonite is the second rarest, representing those who combine great power with genuine kindness.",
      },
    },
    {
      "@type": "Question",
      name: "Can I retake the Pokemon personality quiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! After seeing your result, click 'Retake Quiz' to start over. Many people enjoy retaking it with different mindsets — answering as their 'ideal self' vs their 'actual self' often gives different results.",
      },
    },
    {
      "@type": "Question",
      name: "What Pokemon am I if I love adventure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you love adventure and freedom, you're most likely Charizard (bold, free-spirited leader) or Dragonite (powerful yet kind adventurer). If you prefer exploring with curiosity and openness, you might be Eevee — full of potential and ready for anything.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is this Pokemon quiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Pokemon quiz uses a type-scoring system across 10 questions — each answer adds points to multiple Pokemon types. The result reflects which type received the most cumulative points based on your answers. For the most accurate result, answer honestly rather than trying to get a specific Pokemon.",
      },
    },
  ],
};

export default function PokemonQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-cream py-6 md:py-10">
        <div className="max-w-3xl mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <nav className="mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-charcoal flex-wrap">
              <li><Link href="/" className="hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
              <li className="text-black/30">/</li>
              <li className="text-black font-bold">Pokémon Quiz</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-black px-4 py-1 mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">PERSONALITY QUIZ</span>
            </div>
            <h1 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none mb-3">
              WHAT POKÉMON<br className="hidden sm:block" /> ARE YOU?
            </h1>
            <p className="font-mono text-xs sm:text-sm text-charcoal max-w-xl mx-auto leading-relaxed">
              The original <strong className="text-black">Pokémon quiz</strong> — answer 10 personality questions
              and discover which Pokémon you truly are. No right or wrong answers.
            </p>
          </div>

          {/* Quiz Component */}
          <PokemonQuizClient />

          {/* SEO Article */}
          <article className="mt-10 space-y-5">
            <section className="bg-white border-2 border-black slasher p-5 sm:p-6">
              <div className="inline-block bg-black px-3 py-1 mb-4">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">ABOUT THIS QUIZ</span>
              </div>
              <h2 className="font-grotesk font-black text-2xl sm:text-3xl text-black uppercase mb-4">
                What Pokémon Am I?
              </h2>
              <div className="space-y-3 font-mono text-sm text-charcoal leading-relaxed">
                <p>
                  The <strong className="text-black">"What Pokémon are you?"</strong> question is one of the most popular personality
                  questions among fans. Our Pokémon quiz uses a 10-question personality scoring system to match
                  you with one of <strong className="text-black">11 iconic Pokémon</strong> — each representing a distinct personality archetype.
                </p>
                <p>
                  Unlike random quizzes, our <strong className="text-black">Pokémon personality quiz</strong> assigns weighted points
                  to different Pokémon types based on your answers. At the end, your dominant type
                  determines your result — so every answer genuinely matters.
                </p>
              </div>
            </section>

            <section className="bg-white border-2 border-black slasher p-5 sm:p-6">
              <div className="inline-block bg-black px-3 py-1 mb-4">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">POSSIBLE RESULTS</span>
              </div>
              <h2 className="font-grotesk font-black text-2xl sm:text-3xl text-black uppercase mb-4">
                Which Pokémon Could You Be?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { name: 'Charizard', emoji: '🔥', desc: 'Bold, passionate, free-spirited leader' },
                  { name: 'Vaporeon', emoji: '💧', desc: 'Calm, adaptable, emotionally intelligent' },
                  { name: 'Jolteon', emoji: '⚡', desc: 'Quick, sharp, spontaneous, energetic' },
                  { name: 'Leafeon', emoji: '🌿', desc: 'Peaceful, nurturing, deeply grounded' },
                  { name: 'Espeon', emoji: '🔮', desc: 'Brilliant, perceptive, always ahead' },
                  { name: 'Umbreon', emoji: '🌙', desc: 'Mysterious, fiercely loyal, resilient' },
                  { name: 'Sylveon', emoji: '💕', desc: 'Empathetic, charming, brings harmony' },
                  { name: 'Lucario', emoji: '🥋', desc: 'Disciplined, honorable, stands for justice' },
                  { name: 'Gengar', emoji: '👻', desc: 'Playful, unpredictable, magnetic' },
                  { name: 'Dragonite', emoji: '🐉', desc: 'Powerful yet kind, adventurous, reliable' },
                  { name: 'Eevee', emoji: '⭐', desc: 'Adaptable, full of limitless potential' },
                ].map(r => (
                  <div key={r.name} className="flex items-start gap-3 p-3 border-2 border-black bg-cream">
                    <span className="text-lg">{r.emoji}</span>
                    <div>
                      <div className="font-mono text-xs font-black text-black uppercase">{r.name}</div>
                      <div className="font-mono text-[10px] text-charcoal">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white border-2 border-black slasher p-5 sm:p-6">
              <div className="inline-block bg-black px-3 py-1 mb-4">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">FAQ</span>
              </div>
              <h2 className="font-grotesk font-black text-2xl sm:text-3xl text-black uppercase mb-4">
                Pokémon Quiz FAQ
              </h2>
              <div className="space-y-2">
                {[
                  { q: 'What Pokémon are you quiz — how does it work?', a: 'Answer 10 personality questions about your habits, preferences, and values. Each answer adds weighted points to different Pokémon types. Your dominant type at the end reveals your Pokémon match.' },
                  { q: 'What Pokémon am I based on my personality?', a: 'Passionate, driven people tend to get Charizard. Calm, adaptive people get Vaporeon. Quick thinkers get Jolteon. Mysterious, loyal people get Umbreon. Empathetic types get Sylveon. Take the quiz to find your exact match.' },
                  { q: 'Can I retake the Pokémon quiz?', a: "Yes! Click 'Retake Quiz' after your result to start fresh. Try answering as your ideal self vs. your actual self — you may get different results." },
                  { q: 'What is the rarest Pokémon quiz result?', a: 'Eevee is the rarest result — it represents someone who is genuinely adaptable with truly limitless potential. Dragonite is the second rarest.' },
                  { q: 'How accurate is this Pokémon personality quiz?', a: 'We use a cumulative type-scoring system across 10 questions. For the most accurate result, answer honestly instead of trying to get a specific Pokémon.' },
                  { q: 'What Pokémon am I if I love adventure?', a: "Adventure lovers usually get Charizard (bold, free-spirited) or Dragonite (powerful adventurer). Curious, open-minded explorers often get Eevee." },
                ].map(faq => (
                  <details key={faq.q} className="bg-cream border-2 border-black p-4 slasher group">
                    <summary className="font-mono font-bold text-xs text-black uppercase cursor-pointer group-open:mb-3">
                      {faq.q}
                    </summary>
                    <p className="font-mono text-xs text-charcoal leading-relaxed border-l-4 border-black pl-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Links */}
            <section className="bg-black border-2 border-black slasher p-5 sm:p-6">
              <div className="inline-block bg-white px-3 py-1 mb-4">
                <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">EXPLORE MORE</span>
              </div>
              <h2 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase mb-4">
                More Pokémon Tools
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { href: '/', label: '⚡ Random Generator', desc: 'Build a random team' },
                  { href: '/pokedex', label: '📖 Pokédex', desc: 'All 1,025 Pokémon' },
                  { href: '/legendary-pokemon-generator', label: '✨ Legendaries', desc: 'Legendary Pokémon' },
                  { href: '/shiny-pokemon-generator', label: '💎 Shiny Pokémon', desc: 'Rare color variants' },
                  { href: '/starter-pokemon-generator', label: '🌱 Starters', desc: 'All starter picks' },
                  { href: '/nuzlocke-generator', label: '💀 Nuzlocke', desc: 'Challenge runs' },
                ].map(link => (
                  <Link key={link.href} href={link.href}
                    className="bg-charcoal border-2 border-white/20 p-4 slasher hover:bg-white hover:text-black hover:border-black transition-all group">
                    <div className="font-mono font-bold text-xs text-white group-hover:text-black uppercase mb-1">{link.label}</div>
                    <div className="font-mono text-[10px] text-white/50 group-hover:text-black/60">{link.desc}</div>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
