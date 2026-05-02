'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── TYPES ────────────────────────────────────────────────────────
interface QuizOption {
  text: string;
  types: Partial<Record<string, number>>;
}
interface QuizQuestion {
  id: number;
  emoji: string;
  question: string;
  options: QuizOption[];
}
interface ResultPokemon {
  name: string;
  id: number;
  type: string;
  typeColor: string;
  personality: string;
  traits: string[];
  description: string;
  typeSlug: string;
}

// ─── QUESTIONS ────────────────────────────────────────────────────
const QUESTIONS: QuizQuestion[] = [
  {
    id: 1, emoji: '🌅',
    question: "What's your perfect weekend?",
    options: [
      { text: 'Exploring nature — hiking, camping, outdoors', types: { grass: 2, dragon: 1, normal: 1 } },
      { text: 'Intense training or sport — push my limits', types: { fighting: 2, fire: 1 } },
      { text: 'Reading, puzzles, or learning something new', types: { psychic: 2, dark: 1 } },
      { text: 'Chilling near water — beach, lake, river', types: { water: 2, fairy: 1 } },
    ],
  },
  {
    id: 2, emoji: '⚔️',
    question: 'How do you handle conflict?',
    options: [
      { text: "Head-on — I say exactly what I think", types: { fighting: 2, fire: 1 } },
      { text: 'Outsmart them — strategy over brute force', types: { psychic: 2, dark: 1 } },
      { text: 'Keep the peace — I avoid unnecessary drama', types: { water: 1, fairy: 2 } },
      { text: 'Disappear, let things cool, then return', types: { ghost: 2, dark: 1 } },
    ],
  },
  {
    id: 3, emoji: '💪',
    question: "What's your greatest strength?",
    options: [
      { text: 'Raw determination and willpower', types: { fighting: 2, fire: 2 } },
      { text: 'Speed and sharp thinking under pressure', types: { electric: 2, psychic: 1 } },
      { text: 'Empathy — I understand people deeply', types: { fairy: 2, water: 1 } },
      { text: 'Strategy and long-term patience', types: { dark: 2, psychic: 1 } },
    ],
  },
  {
    id: 4, emoji: '🌍',
    question: 'Pick your perfect environment:',
    options: [
      { text: 'Deep forest or a sun-drenched meadow', types: { grass: 2, normal: 1 } },
      { text: 'Ocean, misty lake, or flowing river', types: { water: 2, ghost: 1 } },
      { text: 'City skyline or buzzing urban energy', types: { electric: 2, dark: 1 } },
      { text: 'Ancient ruins, dark caves, starry sky', types: { ghost: 2, dragon: 1 } },
    ],
  },
  {
    id: 5, emoji: '🥊',
    question: 'In a competition, your style is:',
    options: [
      { text: 'All-out offense — hit hard and fast', types: { fire: 2, fighting: 1, electric: 1 } },
      { text: 'Wait and study, then strike perfectly', types: { dark: 2, psychic: 2 } },
      { text: 'Defend and outlast — let them tire out', types: { water: 2, fairy: 1 } },
      { text: 'Hit and run — confuse, then vanish', types: { ghost: 2, electric: 1 } },
    ],
  },
  {
    id: 6, emoji: '🗣️',
    question: 'How do people usually describe you?',
    options: [
      { text: 'Intense and passionate about everything', types: { fire: 2, fighting: 1 } },
      { text: 'Calm, mysterious, and hard to read', types: { dark: 2, ghost: 1 } },
      { text: 'Cheerful, energetic, and social', types: { electric: 2, normal: 1, fairy: 1 } },
      { text: 'Thoughtful, wise, quietly observant', types: { psychic: 2, grass: 1 } },
    ],
  },
  {
    id: 7, emoji: '✨',
    question: 'If you had one superpower:',
    options: [
      { text: 'Telekinesis — move anything with my mind', types: { psychic: 3 } },
      { text: 'Lightning speed — faster than anyone', types: { electric: 3 } },
      { text: 'Control over fire or the sun itself', types: { fire: 3 } },
      { text: 'Invisibility and phasing through walls', types: { ghost: 3 } },
    ],
  },
  {
    id: 8, emoji: '❤️',
    question: 'What do you value most in life?',
    options: [
      { text: 'Freedom — going wherever the wind takes me', types: { dragon: 2, fire: 1, electric: 1 } },
      { text: 'Loyalty — standing by my people no matter what', types: { dark: 2, water: 1, normal: 1 } },
      { text: 'Knowledge — always growing, always learning', types: { psychic: 2, grass: 1 } },
      { text: 'Love — deep connections with the people I care about', types: { fairy: 2, normal: 2 } },
    ],
  },
  {
    id: 9, emoji: '🕐',
    question: 'Pick a time of day:',
    options: [
      { text: 'Early morning — fresh starts, dew on grass', types: { grass: 2, normal: 1, water: 1 } },
      { text: 'High noon — peak energy, bright sun', types: { fire: 2, electric: 1, fighting: 1 } },
      { text: 'Golden dusk — reflective, peaceful, warm', types: { psychic: 1, water: 2, fairy: 1 } },
      { text: 'Deep midnight — quiet, mysterious, alive', types: { ghost: 2, dark: 2 } },
    ],
  },
  {
    id: 10, emoji: '🎯',
    question: 'A new challenge appears. You:',
    options: [
      { text: 'Jump in immediately — figure it out as you go', types: { fire: 2, electric: 1, fighting: 1 } },
      { text: 'Research and plan every detail before moving', types: { psychic: 2, dark: 1, grass: 1 } },
      { text: 'Gather allies — teamwork makes everything easier', types: { fairy: 2, normal: 2, water: 1 } },
      { text: 'Watch others attempt it first, then make your move', types: { ghost: 2, dark: 1, dragon: 1 } },
    ],
  },
];

// ─── RESULTS ──────────────────────────────────────────────────────
const RESULTS: Record<string, ResultPokemon> = {
  fire: {
    name: 'Charizard', id: 6, type: 'Fire / Flying', typeColor: '#F08030',
    personality: 'THE BOLD LEADER',
    traits: ['Passionate', 'Determined', 'Fierce', 'Free-spirited'],
    description: "You are Charizard — powerful, driven, and impossible to ignore. You tackle every challenge head-on and inspire others with your sheer willpower. Freedom matters deeply to you, and once you commit to something, absolutely nothing can stop you.",
    typeSlug: 'fire',
  },
  water: {
    name: 'Vaporeon', id: 134, type: 'Water', typeColor: '#6890F0',
    personality: 'THE CALM ADAPTOR',
    traits: ['Adaptable', 'Calm', 'Supportive', 'Intuitive'],
    description: "You are Vaporeon — fluid, calm, and endlessly adaptable. Like water, you find a way through any obstacle without forcing it. You're deeply caring and often the emotional anchor for everyone around you.",
    typeSlug: 'water',
  },
  electric: {
    name: 'Jolteon', id: 135, type: 'Electric', typeColor: '#d4a800',
    personality: 'THE SHARP SPARK',
    traits: ['Quick', 'Energetic', 'Sharp', 'Spontaneous'],
    description: "You are Jolteon — fast, electric, and always one step ahead. You thrive on energy and excitement. Your quick thinking means you always have a clever response ready, and you live for the thrill of the moment.",
    typeSlug: 'electric',
  },
  grass: {
    name: 'Leafeon', id: 470, type: 'Grass', typeColor: '#78C850',
    personality: 'THE PEACEFUL NURTURER',
    traits: ['Patient', 'Nurturing', 'Grounded', 'Serene'],
    description: "You are Leafeon — peaceful, steady, and deeply connected to the world around you. You grow slowly but surely, and your quiet strength supports everyone who comes near. Nature recharges you like nothing else can.",
    typeSlug: 'grass',
  },
  psychic: {
    name: 'Espeon', id: 196, type: 'Psychic', typeColor: '#c94070',
    personality: 'THE PERCEPTIVE THINKER',
    traits: ['Intelligent', 'Perceptive', 'Intuitive', 'Analytical'],
    description: "You are Espeon — brilliant, perceptive, and always three moves ahead. You sense what others miss and use your insight to navigate any situation gracefully. People trust your judgment because you're almost never wrong.",
    typeSlug: 'psychic',
  },
  dark: {
    name: 'Umbreon', id: 197, type: 'Dark', typeColor: '#705848',
    personality: 'THE LOYAL GUARDIAN',
    traits: ['Mysterious', 'Loyal', 'Resilient', 'Strategic'],
    description: "You are Umbreon — mysterious, fiercely loyal, and completely unshakeable under pressure. You keep your cards close but would do anything for the people you truly trust. Darkness doesn't scare you — it's where you're most at home.",
    typeSlug: 'dark',
  },
  fairy: {
    name: 'Sylveon', id: 700, type: 'Fairy', typeColor: '#b8527a',
    personality: 'THE CHARMING EMPATH',
    traits: ['Empathetic', 'Charming', 'Harmonious', 'Caring'],
    description: "You are Sylveon — warm, charming, and deeply empathetic. You have an extraordinary ability to connect with others and bring harmony to any room you walk into. Your kindness isn't weakness — it's your greatest power.",
    typeSlug: 'fairy',
  },
  fighting: {
    name: 'Lucario', id: 448, type: 'Fighting / Steel', typeColor: '#4068a0',
    personality: 'THE DISCIPLINED WARRIOR',
    traits: ['Honorable', 'Disciplined', 'Strong', 'Just'],
    description: "You are Lucario — disciplined, honorable, and relentlessly committed to your principles. You train harder than anyone else and always stand up for what's right, even when it's the harder path. Your inner strength is unmatched.",
    typeSlug: 'fighting',
  },
  ghost: {
    name: 'Gengar', id: 94, type: 'Ghost / Poison', typeColor: '#705898',
    personality: 'THE MISCHIEVOUS ENIGMA',
    traits: ['Playful', 'Unpredictable', 'Clever', 'Magnetic'],
    description: "You are Gengar — playful, unpredictable, and endlessly entertaining. You love keeping people guessing and thrive in the chaos. Behind that iconic grin is a surprisingly deep and fiercely loyal friend to those who earn your trust.",
    typeSlug: 'ghost',
  },
  dragon: {
    name: 'Dragonite', id: 149, type: 'Dragon / Flying', typeColor: '#6040a0',
    personality: 'THE GENTLE POWERHOUSE',
    traits: ['Powerful', 'Kind', 'Adventurous', 'Reliable'],
    description: "You are Dragonite — incredibly powerful yet genuinely kind at heart. You might seem intimidating at first glance, but those who know you discover your warmth and quiet reliability. You dream big, and you always follow through.",
    typeSlug: 'dragon',
  },
  normal: {
    name: 'Eevee', id: 133, type: 'Normal', typeColor: '#888060',
    personality: 'LIMITLESS POTENTIAL',
    traits: ['Adaptable', 'Curious', 'Friendly', 'Versatile'],
    description: "You are Eevee — the rarest result of all. You are endlessly adaptable and brimming with untapped potential. Unlike anyone else, you can evolve into virtually anything you set your mind to. Your openness and curiosity are your greatest gifts.",
    typeSlug: 'normal',
  },
};

// ─── HELPERS ──────────────────────────────────────────────────────
function calculateResult(scores: Record<string, number>): string {
  let topType = 'normal';
  let topScore = 0;
  for (const [type, score] of Object.entries(scores)) {
    if (score > topScore && RESULTS[type]) {
      topScore = score;
      topType = type;
    }
  }
  return topType;
}

// ─── COMPONENT ────────────────────────────────────────────────────
type QuizPhase = 'intro' | 'quiz' | 'result';

export default function PokemonQuizClient() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<ResultPokemon | null>(null);
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);

  const progress = ((currentQ) / QUESTIONS.length) * 100;
  const question = QUESTIONS[currentQ];

  const handleStart = () => {
    setPhase('quiz');
    setCurrentQ(0);
    setScores({});
    setSelectedOption(null);
    setResult(null);
  };

  const handleAnswer = (option: QuizOption, index: number) => {
    if (animating) return;
    setSelectedOption(index);
    setAnimating(true);

    // Add to scores
    const newScores = { ...scores };
    for (const [type, pts] of Object.entries(option.types)) {
      newScores[type] = (newScores[type] || 0) + (pts as number);
    }
    setScores(newScores);

    setTimeout(() => {
      if (currentQ + 1 >= QUESTIONS.length) {
        const topType = calculateResult(newScores);
        setResult(RESULTS[topType]);
        setPhase('result');
      } else {
        setCurrentQ(q => q + 1);
        setSelectedOption(null);
      }
      setAnimating(false);
    }, 400);
  };

  const handleShare = async () => {
    if (!result) return;
    const text = `I took the Pokémon Quiz and I'm ${result.name}! ${result.personality}\n\nFind out which Pokémon you are → https://www.randompokemon.co/pokemon-quiz`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  // ── INTRO ──────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-2 border-black slasher overflow-hidden">
          <div className="bg-black px-6 py-3 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">PERSONALITY QUIZ</span>
            <span className="font-mono text-[10px] text-white/40">10 QUESTIONS</span>
          </div>
          <div className="p-6 sm:p-10 text-center">
            <div className="text-6xl sm:text-7xl mb-6">🎴</div>
            <h2 className="font-grotesk font-black text-2xl sm:text-3xl text-black uppercase mb-3">
              Which Pokémon Are You?
            </h2>
            <p className="font-mono text-sm text-charcoal leading-relaxed mb-8 max-w-md mx-auto">
              Answer 10 questions honestly and discover which of <strong className="text-black">11 iconic Pokémon</strong> matches your personality — from Charizard to Eevee.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: '10', sub: 'Questions' },
                { label: '11', sub: 'Results' },
                { label: '~2 min', sub: 'Duration' },
              ].map(stat => (
                <div key={stat.label} className="border-2 border-black bg-cream p-3">
                  <div className="font-grotesk font-black text-xl text-black">{stat.label}</div>
                  <div className="font-mono text-[10px] text-charcoal uppercase">{stat.sub}</div>
                </div>
              ))}
            </div>
            <button
              onClick={handleStart}
              className="w-full bg-black hover:bg-charcoal text-white font-mono font-black text-sm uppercase tracking-widest px-8 py-4 border-2 border-black transition-all slasher"
            >
              START THE QUIZ →
            </button>
          </div>
        </div>

        {/* Possible results preview */}
        <div className="mt-6 bg-cream border-2 border-black slasher p-5">
          <div className="inline-block bg-black px-3 py-1 mb-4">
            <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">POSSIBLE RESULTS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.values(RESULTS).map(r => (
              <span key={r.name}
                className="font-mono text-[10px] font-bold px-3 py-1 border-2 border-black bg-white uppercase">
                {r.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────────
  if (phase === 'quiz' && question) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-[10px] text-charcoal uppercase tracking-widest">
              Question {currentQ + 1} of {QUESTIONS.length}
            </span>
            <span className="font-mono text-[10px] text-charcoal">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-black/10 border border-black/20">
            <div
              className="h-full bg-black transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white border-2 border-black slasher overflow-hidden">
          <div className="bg-black px-6 py-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              {question.emoji} Q{currentQ + 1}
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="font-grotesk font-black text-xl sm:text-2xl text-black mb-6 uppercase leading-tight">
              {question.question}
            </h2>
            <div className="space-y-3">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option, i)}
                  disabled={animating}
                  className={`w-full text-left px-5 py-4 border-2 border-black font-mono text-sm transition-all duration-200 slasher
                    ${selectedOption === i
                      ? 'bg-black text-white'
                      : 'bg-cream hover:bg-black hover:text-white text-black'
                    } disabled:cursor-not-allowed`}
                >
                  <span className="font-black mr-3 text-xs opacity-60">
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULT ─────────────────────────────────────────────────────
  if (phase === 'result' && result) {
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Result card */}
        <div className="bg-white border-2 border-black slasher overflow-hidden">
          <div className="bg-black px-6 py-3 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">YOUR RESULT</span>
            <span className="font-mono text-[10px] text-white/40 uppercase">{result.type}</span>
          </div>

          {/* Type colour strip */}
          <div className="h-1.5" style={{ backgroundColor: result.typeColor }} />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Pokemon artwork */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 border-2 border-black bg-cream"
                  style={{ boxShadow: `4px 4px 0 ${result.typeColor}` }}>
                  <Image
                    src={spriteUrl}
                    alt={`${result.name} official artwork`}
                    fill
                    className="object-contain p-3"
                    sizes="192px"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-block font-mono text-[10px] font-bold text-white uppercase tracking-widest px-3 py-1 mb-3"
                  style={{ backgroundColor: result.typeColor }}>
                  {result.personality}
                </div>
                <h2 className="font-grotesk font-black text-4xl sm:text-5xl text-black uppercase mb-1">
                  {result.name}
                </h2>
                <p className="font-mono text-xs text-charcoal uppercase mb-4">{result.type} type</p>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                  {result.traits.map(trait => (
                    <span key={trait}
                      className="font-mono text-[10px] font-bold px-3 py-1 border-2 border-black bg-cream uppercase">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-l-4 border-black pl-4 mt-4 mb-6">
              <p className="font-mono text-sm text-charcoal leading-relaxed">
                {result.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShare}
                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-charcoal text-white font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 border-2 border-black slasher transition-all"
              >
                {copied ? '✓ COPIED!' : '📋 SHARE RESULT'}
              </button>
              <button
                onClick={handleStart}
                className="flex-1 flex items-center justify-center gap-2 bg-cream hover:bg-black hover:text-white text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 border-2 border-black slasher transition-all"
              >
                🔄 RETAKE QUIZ
              </button>
              <Link
                href={`/pokemon/${result.name.toLowerCase()}`}
                className="flex-1 flex items-center justify-center gap-2 bg-cream hover:bg-black hover:text-white text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 border-2 border-black slasher transition-all"
              >
                📖 VIEW {result.name.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>

        {/* Explore more */}
        <div className="mt-5 bg-cream border-2 border-black slasher p-5">
          <div className="inline-block bg-black px-3 py-1 mb-3">
            <span className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">EXPLORE MORE</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link href={`/pokedex?type=${result.typeSlug}`}
              className="font-mono text-xs font-bold px-4 py-3 border-2 border-black bg-white hover:bg-black hover:text-white transition-all text-center slasher">
              All {result.typeSlug} Pokémon →
            </Link>
            <Link href="/"
              className="font-mono text-xs font-bold px-4 py-3 border-2 border-black bg-black text-white hover:bg-charcoal transition-all text-center slasher">
              ⚡ Random Generator
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
