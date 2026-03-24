import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, MessageSquare, Github, Twitter, Send } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Contact Us - Random Pokemon Generator | Get in Touch",
  description:
    "Contact Random Pokemon Generator for support, feedback, bug reports, or partnership inquiries. Reach out via email or social media. We respond within 48 hours.",
  keywords: [
    "contact random pokemon generator",
    "support",
    "feedback",
    "bug report",
    "pokemon generator help",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us - Random Pokemon Generator",
    description:
      "Get in touch with the Random Pokemon Generator team. We're here to help!",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
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
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Mail className="text-indigo-600" size={48} />
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight uppercase">
            GET IN TOUCH
          </h1>
          <p className="font-mono text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Questions, feedback, bug reports, or partnership ideas? We&apos;d love to hear from you. We respond within 48 hours.
          </p>
        </div>

        {/* Primary Contact Method */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Send className="text-red-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Email Us</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-black p-8 text-center">
            <p className="font-mono text-gray-900 text-base mb-4">Our primary contact method:</p>
            <a 
              href="mailto:shadowrajoriya@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-grotesk font-bold text-xl px-10 py-4 border-4 border-black slasher transition-smooth break-all"
            >
              shadowrajoriya@gmail.com
            </a>
            <p className="font-mono text-base text-gray-900 mt-6">
              <strong className="text-black">Response Time:</strong> We typically respond within 24-48 hours. For urgent issues, please mention &quot;URGENT&quot; in your subject line.
            </p>
          </div>
        </section>

        {/* What to Contact Us About */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-purple-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">What We Can Help With</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">🐛 Bug Reports</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Found a bug or error? Please report it with details: what happened, what you expected, your browser/device, and steps to reproduce. Screenshots help!
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">💡 Feature Requests</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Have an idea for a new feature or improvement? We&apos;d love to hear it! Describe your suggestion and how it would help the Pokemon community.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">❓ Technical Support</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Generator not working? Filters not applying? Team generation failing? Contact us with your issue and we&apos;ll troubleshoot with you.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">📊 Data Corrections</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Noticed incorrect Pokemon stats, types, or abilities? Let us know! We pull data from PokeAPI, but we&apos;ll investigate and report issues upstream.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">🤝 Partnerships</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Content creator? Pokemon community organizer? Interested in collaboration? Reach out to discuss how we can work together.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">⚖️ Legal & Privacy</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Copyright concerns, GDPR requests, DMCA takedown notices, or privacy questions? Contact us and we&apos;ll respond within 30 days per GDPR requirements.
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">💬 General Feedback</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Love the tool? Think something could be better? Just want to say hi? We appreciate all feedback, positive or constructive!
              </p>
            </div>
            <div className="bg-white border-2 border-black p-5 slasher">
              <h3 className="font-sans font-bold text-xl text-black mb-3 uppercase">🎮 Community Events</h3>
              <p className="font-mono text-base text-gray-900 leading-relaxed">
                Running a Nuzlocke tournament or draft league? Want to feature our tool? Let us know about your event—we&apos;d love to support the community!
              </p>
            </div>
          </div>
        </section>

        {/* Before Contacting */}
        <section className="mb-12 bg-marigold border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Before You Contact Us</h2>
          <div className="space-y-4 font-mono text-black leading-relaxed">
            <p className="text-base">
              To help us assist you faster, please check these resources first:
            </p>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl mb-3">1. Check the FAQ</h3>
              <p className="text-base mb-2">
                Visit our <Link href="/#faq" className="text-indigo-600 hover:text-indigo-800 underline font-bold">FAQ section</Link> on the homepage. It answers common questions about:
              </p>
              <ul className="text-base space-y-1 pl-6">
                <li>• How to generate teams</li>
                <li>• Filter options (type, generation, rarity)</li>
                <li>• Nuzlocke and challenge mode usage</li>
                <li>• Data sources and accuracy</li>
                <li>• Browser compatibility</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl mb-3">2. Explore Our Guides</h3>
              <p className="text-base mb-2">
                We have comprehensive guides for different use cases:
              </p>
              <ul className="text-base space-y-1 pl-6">
                <li>• <Link href="/nuzlocke-generator" className="text-indigo-600 hover:text-indigo-800 underline">Nuzlocke Challenge Guide</Link></li>
                <li>• <Link href="/draft-league-generator" className="text-indigo-600 hover:text-indigo-800 underline">Draft League Generator Guide</Link></li>
                <li>• <Link href="/randomizer-guide" className="text-indigo-600 hover:text-indigo-800 underline">Pokemon Randomizer Guide</Link></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl mb-3">3. Try Basic Troubleshooting</h3>
              <ul className="text-base space-y-1 pl-6">
                <li>• Refresh the page (Ctrl+R or Cmd+R)</li>
                <li>• Clear your browser cache</li>
                <li>• Try a different browser (Chrome, Firefox, Safari, Edge)</li>
                <li>• Disable browser extensions that might interfere</li>
                <li>• Check your internet connection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Email Tips */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">How to Write a Great Email</h2>
          <div className="space-y-3 font-mono text-gray-900 text-base leading-relaxed">
            <p className="text-base">
              To help us respond quickly and effectively, please include:
            </p>
            <div className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-black p-5">
              <span className="text-xl">✉️</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Clear Subject Line</h3>
                <p>Use descriptive subjects like &quot;Bug Report: Filters not working&quot; or &quot;Feature Request: Gen 10 Support&quot;</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-black p-5">
              <span className="text-xl">🖥️</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Your Setup</h3>
                <p>Mention your browser (Chrome, Firefox, Safari, Edge), device (desktop, mobile, tablet), and operating system (Windows, Mac, iOS, Android)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-black p-5">
              <span className="text-xl">📸</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Screenshots</h3>
                <p>If reporting a bug, attach screenshots or screen recordings showing the issue</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-black p-5">
              <span className="text-xl">🔁</span>
              <div>
                <h3 className="font-sans font-bold text-black text-lg mb-2">Steps to Reproduce</h3>
                <p>For bugs, explain exactly what you did: &quot;I selected Fire type, clicked Generate, and got an error message...&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Response Time & Expectations</h2>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              We&apos;re a small team of passionate Pokemon fans working on this project in our spare time. Here&apos;s what to expect:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-green-600 p-5 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-sans font-bold text-black mb-2">Urgent Issues</h3>
                <p className="text-base">Site down, major bugs: <strong className="text-black">24 hours</strong></p>
              </div>
              <div className="bg-white border-2 border-blue-600 p-5 text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-sans font-bold text-black mb-2">General Inquiries</h3>
                <p className="text-base">Support, feedback, questions: <strong className="text-black">24-48 hours</strong></p>
              </div>
              <div className="bg-white border-2 border-purple-600 p-5 text-center">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-sans font-bold text-black mb-2">Feature Requests</h3>
                <p className="text-base">New features, improvements: <strong className="text-black">1-2 weeks</strong></p>
              </div>
            </div>
            <div className="bg-marigold border-2 border-black p-4 mt-4">
              <p className="text-base font-bold text-black">
                💬 We read every email! Even if we can&apos;t implement your suggestion immediately, we appreciate your input and may use it for future updates.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Other Ways to Connect</h2>
          <div className="space-y-4">
            <p className="font-mono text-gray-900 text-base mb-6">
              While email is our primary contact method, you can also reach out through:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-black p-6 flex items-start gap-4">
                <Github className="text-black flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-sans font-bold text-lg text-black mb-2">GitHub Issues</h3>
                  <p className="font-mono text-base text-gray-900">
                    Report bugs or request features on our GitHub repository. Public issue tracking helps the community see what we&apos;re working on.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-black p-6 flex items-start gap-4">
                <Twitter className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-sans font-bold text-lg text-black mb-2">Social Media</h3>
                  <p className="font-mono text-base text-gray-900">
                    Follow us on Twitter/X for updates, announcements, and Pokemon community content. DMs open for quick questions!
                  </p>
                </div>
              </div>
            </div>
            <p className="font-mono text-sm text-gray-700 mt-4">
              <strong className="text-black">Note:</strong> Social media links coming soon. For now, email is the best way to reach us.
            </p>
          </div>
        </section>

        {/* What We DON'T Offer */}
        <section className="mb-12 bg-red-100 border-4 border-red-600 p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-red-900 mb-6 uppercase">What We Can&apos;t Help With</h2>
          <div className="space-y-2 font-mono text-base text-red-900">
            <p className="mb-4">Please note that we <strong>cannot</strong> assist with:</p>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Questions about official Pokemon games (contact Nintendo/The Pokémon Company)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>ROM distribution or piracy requests (we do not provide or support pirated content)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Trading Pokemon or providing Pokemon game codes</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Custom development or white-label versions of our tool</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Monetary donations (the tool is free forever, no donations accepted)</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8 bg-indigo-600 border-4 border-black p-8 slasher text-center">
          <h2 className="font-sans font-bold text-3xl text-white mb-4 uppercase">
            Ready to Get in Touch?
          </h2>
          <p className="font-mono text-white text-lg mb-6 max-w-2xl mx-auto">
            We&apos;re here to help make Random Pokemon Generator the best tool for the Pokemon community. Drop us an email!
          </p>
          <a 
            href="mailto:shadowrajoriya@gmail.com"
            className="inline-block bg-white text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-black slasher transition-smooth hover:bg-cream"
          >
            EMAIL US NOW →
          </a>
        </section>
      </div>
    </main>
  );
}
