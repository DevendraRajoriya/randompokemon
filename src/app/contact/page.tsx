import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Github, Twitter, Send, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Contact Us - Random Pokemon Generator | Get in Touch",
  description: "Contact Random Pokemon Generator for support, feedback, bug reports, or partnership inquiries. Reach out via email or social media. We respond within 48 hours.",
  keywords: ["contact random pokemon generator", "support", "feedback", "bug report", "pokemon generator help"],
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us - Random Pokemon Generator", description: "Get in touch with the Random Pokemon Generator team. We're here to help!", url: `${siteUrl}/contact`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Random Pokemon Generator" }] },
  twitter: { card: "summary_large_image", title: "Contact Us - Random Pokemon Generator", description: "Get in touch with the Random Pokemon Generator team. We're here to help!", images: ["/og-image.png"] },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">Contact</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SUPPORT & FEEDBACK</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">GET IN TOUCH</h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed">
            Questions, feedback, bug reports, or partnership ideas? We&apos;d love to hear from you. We respond within 48 hours.
          </p>
        </div>

        {/* Primary Contact */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">EMAIL US</span></div>
          <div className="flex items-center gap-2 mb-6"><Send size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">PRIMARY CONTACT</h2></div>
          <div className="bg-white border-2 border-black p-8 text-center slasher">
            <p className="font-mono text-xs text-charcoal mb-4">Our primary contact method:</p>
            <a href="mailto:shadowrajoriya@gmail.com" className="inline-block bg-black hover:bg-charcoal text-white font-grotesk font-bold text-lg px-10 py-4 border-4 border-black slasher transition-smooth break-all">
              shadowrajoriya@gmail.com
            </a>
            <p className="font-mono text-xs text-charcoal mt-6">
              <strong className="text-black">Response Time:</strong> We typically respond within 24–48 hours. For urgent issues, include &quot;URGENT&quot; in your subject line.
            </p>
          </div>
        </section>

        {/* What we help with */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SUPPORT TOPICS</span></div>
          <div className="flex items-center gap-2 mb-6"><MessageSquare size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">WHAT WE CAN HELP WITH</h2></div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: "🐛", label: "BUG REPORTS", desc: "Found a bug? Report it with details: what happened, what you expected, your browser/device, and steps to reproduce. Screenshots help!" },
              { icon: "💡", label: "FEATURE REQUESTS", desc: "Have an idea for a new feature? Describe your suggestion and how it would help the Pokemon community." },
              { icon: "❓", label: "TECHNICAL SUPPORT", desc: "Generator not working? Filters not applying? Contact us with your issue and we'll troubleshoot with you." },
              { icon: "📊", label: "DATA CORRECTIONS", desc: "Noticed incorrect Pokemon stats or types? Let us know! We pull from PokeAPI and will report issues upstream." },
              { icon: "🤝", label: "PARTNERSHIPS", desc: "Content creator or community organizer? Reach out to discuss how we can work together." },
              { icon: "⚖️", label: "LEGAL & PRIVACY", desc: "Copyright concerns, GDPR requests, DMCA notices? Contact us and we'll respond within 30 days per GDPR." },
              { icon: "💬", label: "GENERAL FEEDBACK", desc: "Love the tool or think something could be better? We appreciate all feedback, positive or constructive!" },
              { icon: "🎮", label: "COMMUNITY EVENTS", desc: "Running a Nuzlocke tournament or draft league? Let us know — we'd love to support the community!" },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">{item.icon} {item.label}</h3>
                <p className="font-mono text-xs text-charcoal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before contacting */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">BEFORE YOU WRITE</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">CHECK THESE FIRST</h2>
          <div className="space-y-3">
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">1. CHECK THE FAQ</h3>
              <p className="font-mono text-xs text-charcoal mb-2">Visit our <Link href="/#faq" className="text-black underline font-bold">FAQ section</Link> — it answers common questions about filters, Nuzlocke usage, data sources, and browser compatibility.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">2. EXPLORE OUR GUIDES</h3>
              <div className="font-mono text-xs text-charcoal space-y-1">
                <p>• <Link href="/nuzlocke-generator" className="text-black underline">Nuzlocke Challenge Guide</Link></p>
                <p>• <Link href="/draft-league-generator" className="text-black underline">Draft League Generator Guide</Link></p>
                <p>• <Link href="/randomizer-guide" className="text-black underline">Pokemon Randomizer Guide</Link></p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">3. BASIC TROUBLESHOOTING</h3>
              <div className="font-mono text-xs text-charcoal space-y-1">
                <p>• Refresh the page (Ctrl+R / Cmd+R)</p>
                <p>• Clear your browser cache</p>
                <p>• Try a different browser (Chrome, Firefox, Safari, Edge)</p>
                <p>• Disable extensions that might interfere</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to write */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">EMAIL TIPS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">HOW TO WRITE A GREAT EMAIL</h2>
          <div className="space-y-3">
            {[
              { icon: "✉️", label: "CLEAR SUBJECT LINE", desc: "Use descriptive subjects like \"Bug Report: Filters not working\" or \"Feature Request: Gen 10 Support\"" },
              { icon: "🖥️", label: "YOUR SETUP", desc: "Mention your browser (Chrome, Firefox, Safari, Edge), device (desktop/mobile/tablet), and OS (Windows, Mac, iOS, Android)" },
              { icon: "📸", label: "SCREENSHOTS", desc: "If reporting a bug, attach screenshots or recordings showing the issue — this speeds up diagnosis significantly." },
              { icon: "🔁", label: "STEPS TO REPRODUCE", desc: "For bugs: \"I selected Fire type, clicked Generate, and got an error message...\" — exact steps are invaluable." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher flex gap-4 items-start">
                <span className="font-mono font-bold text-lg">{item.icon}</span>
                <div><h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3><p className="font-mono text-xs text-charcoal">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Response time */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">RESPONSE TIMES</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT TO EXPECT</h2>
          <p className="font-mono text-xs text-charcoal mb-4">We&apos;re a small team of passionate Pokemon fans working on this in our spare time:</p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { label: "URGENT ISSUES", time: "~24 HOURS", desc: "Site down, major bugs" },
              { label: "GENERAL INQUIRIES", time: "24–48 HOURS", desc: "Support, feedback, questions" },
              { label: "FEATURE REQUESTS", time: "1–2 WEEKS", desc: "New features, improvements" },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="font-grotesk font-bold text-2xl text-black mb-1">{item.time}</div>
                <div className="font-mono font-bold text-xs text-black uppercase mb-1">{item.label}</div>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-marigold border-2 border-black p-4 slasher">
            <p className="font-mono text-xs text-black font-bold">💬 We read every email! Even if we can&apos;t implement your suggestion immediately, we appreciate your input and may use it for future updates.</p>
          </div>
        </section>

        {/* Other ways */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SOCIAL</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">OTHER WAYS TO CONNECT</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-black p-4 slasher flex items-start gap-4">
              <Github className="text-black flex-shrink-0" size={24} />
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">GitHub Issues</h3>
                <p className="font-mono text-xs text-charcoal">Report bugs or request features on our GitHub repository. Public issue tracking helps the community see what we&apos;re working on.</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher flex items-start gap-4">
              <Twitter className="text-black flex-shrink-0" size={24} />
              <div>
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">Social Media</h3>
                <p className="font-mono text-xs text-charcoal">Follow us on Twitter/X for updates, announcements, and Pokemon content. DMs open for quick questions!</p>
              </div>
            </div>
          </div>
          <p className="font-mono text-xs text-charcoal mt-3"><strong className="text-black">Note:</strong> For now, email is the fastest way to reach us.</p>
        </section>

        {/* What we can't help with */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">LIMITATIONS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">WHAT WE CAN&apos;T HELP WITH</h2>
          <div className="bg-white border-2 border-black p-4 slasher space-y-2">
            {[
              "Questions about official Pokemon games (contact Nintendo/The POKEMON Company)",
              "ROM distribution or piracy requests (we do not support pirated content)",
              "Trading Pokemon or providing Pokemon game codes",
              "Custom development or white-label versions of our tool",
              "Monetary donations (the tool is free forever, no donations accepted)",
            ].map(item => (
              <div key={item} className="flex items-start gap-2 font-mono text-xs text-charcoal">
                <span className="text-black font-bold">✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">READY TO<br />GET IN TOUCH?</h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">We&apos;re here to help make Random Pokemon Generator the best tool for the community. Drop us an email!</p>
          <a href="mailto:shadowrajoriya@gmail.com" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">EMAIL US NOW →</div>
          </a>
        </section>
      </div>
    </main>
  );
}
