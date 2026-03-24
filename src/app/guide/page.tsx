import { Metadata } from "next";
import HowToUseGuide from "@/components/HowToUseGuide";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

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
  },
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="border-b-4 border-black bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Guide" }
            ]}
          />
          
          <div className="text-center mt-8">
            <div className="inline-block bg-black px-6 py-3 border-2 border-black mb-6 animate-scale-in">
              <span className="font-mono text-sm text-white font-bold uppercase tracking-widest">Expert Knowledge Base</span>
            </div>
            
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-black leading-tight mb-6 animate-fade-in">
              HOW TO USE THIS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                GENERATOR
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal max-w-3xl mx-auto mb-8 font-mono animate-fade-in">
              Master Pokemon team building with insights from <strong>40+ years of combined experience</strong>. Learn proven strategies for Nuzlocke runs, competitive play, and themed challenges.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-slide-down">
              <Link 
                href="/" 
                className="bg-marigold text-black font-bold px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-smooth slasher"
              >
                Start Generating →
              </Link>
              <Link 
                href="/pokedex" 
                className="bg-white text-black font-bold px-8 py-4 border-2 border-black hover:bg-blue-500 hover:text-white transition-smooth slasher"
              >
                Browse Pokedex
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Guide Content */}
      <HowToUseGuide />

      {/* Call to Action */}
      <section className="border-t-4 border-black bg-gradient-to-br from-marigold to-yellow-300 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-black mb-6">
            Ready to Build Your Team?
          </h2>
          <p className="text-xl text-charcoal mb-8 font-mono">
            Apply these expert strategies and create your perfect Pokemon team now.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-black text-white font-bold px-12 py-5 text-lg border-2 border-black hover:bg-white hover:text-black transition-smooth slasher"
          >
            Open Generator →
          </Link>
        </div>
      </section>
    </main>
  );
}
