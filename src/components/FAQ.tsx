"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Does this include Gen 9 Pokemon?",
    answer:
      "Yes. Our generator includes all 1025 Pokemon through Generation 9, including Pokemon Scarlet and Violet base game, The Teal Mask DLC, and The Indigo Disk DLC. All Paldea, Kitakami, and Blueberry Academy Pokemon are available.",
  },
  {
    question: "How many Pokemon are in the database?",
    answer:
      "1025 Pokemon from all 9 generations (Kanto through Paldea). This includes all regional forms, Mega Evolutions, Gigantamax forms, Paradox Pokemon, and Ultra Beasts. Updated within 48 hours of new releases.",
  },
  {
    question: "How do I generate a random Pokemon team?",
    answer:
      "Click the 'GENERATE TEAM' button on the homepage. You can customize your team by adjusting filters for team size (1-6 Pokemon), region (Kanto-Paldea), type (18 types), rarity (Legendary/Mythical), evolution stage, gender, nature, and more before generating.",
  },
  {
    question: "What is a Nuzlocke challenge?",
    answer:
      "A Nuzlocke is a self-imposed set of hardcore Pokemon rules: (1) If a Pokemon faints, it's considered 'dead' and must be released or permanently boxed, (2) You can only catch the first Pokemon encountered on each route, (3) You must nickname all Pokemon. Our generator helps you prepare randomized teams for these challenge runs.",
  },
  {
    question: "Can I exclude Legendary Pokemon?",
    answer:
      "Yes. Use the 'Rarity' filter to exclude Legendary Pokemon, Mythical Pokemon, Ultra Beasts, Paradox Pokemon, and Sub-Legendary Pokemon. This ensures you only get standard Pokemon for balanced Nuzlocke and challenge runs.",
  },
  {
    question: "Can I generate Shiny Pokemon only?",
    answer:
      "Yes. Visit our Shiny Pokemon Generator page to generate teams of only Shiny Pokemon. Use filters for type, region, and rarity to create your perfect Shiny team.",
  },
  {
    question: "Does this work for Pokemon Scarlet and Violet?",
    answer:
      "Yes. All 400+ Pokemon from Scarlet and Violet (base game + DLC) are included. Select 'Paldea' region for Gen 9 Pokemon, 'Kitakami' for Teal Mask DLC, or 'Blueberry Academy' for Indigo Disk DLC Pokemon.",
  },
  {
    question: "Can I generate a monotype team?",
    answer:
      "Yes. Select a single type from the 'Type' filter (Fire, Water, Grass, Electric, Psychic, Dragon, Fairy, etc.) to generate a team containing only Pokemon of that type. Perfect for monotype Nuzlocke challenge runs. All 18 types are supported.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes, 100% free with no ads, no signup required, and no hidden costs. We built this tool for the Pokemon community and it will always remain free. No premium features or paywalls.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes. The Random Pokemon Generator is fully responsive and optimized for phones, tablets, and desktop computers. All filters, buttons, and features are mobile-optimized with 44px+ touch targets for easy tapping.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Everything you need to know about the Random Pokemon Generator, Nuzlocke challenges, and our database
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-2 md:border-4 border-black slasher overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-cream transition-colors min-h-[44px]"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-base md:text-xl font-bold pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t-2 md:border-t-4 border-black">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo text-cream font-bold text-base md:text-lg px-8 py-3 border-2 md:border-4 border-black slasher hover:bg-cream hover:text-black transition-colors min-h-[44px]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
