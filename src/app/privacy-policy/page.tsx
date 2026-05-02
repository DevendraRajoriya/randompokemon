import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Shield, Eye, Cookie, Database, Mail, ArrowLeft } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Privacy Policy - Random Pokemon Generator | GDPR Compliant",
  description: "Privacy policy for Random Pokemon Generator. We don't collect personal data, use tracking cookies, or store user information. GDPR compliant, privacy-first approach.",
  keywords: ["privacy policy", "gdpr compliant", "no data collection", "privacy first", "cookie free"],
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy - Random Pokemon Generator", description: "We don't collect your data. No tracking cookies. No user accounts. Your privacy is protected.", url: `${siteUrl}/privacy-policy`, type: "website" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream p-4 md:p-8 relative">
      <nav className="mb-6 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-mono text-xs">
          <li><Link href="/" className="text-charcoal hover:text-black transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Home</Link></li>
          <li className="text-charcoal/40">/</li>
          <li className="text-black font-bold uppercase">Privacy Policy</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">✓ GDPR COMPLIANT</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-4 uppercase tracking-tight">PRIVACY POLICY</h1>
          <p className="font-mono text-sm text-charcoal max-w-2xl mx-auto leading-relaxed">
            We don&apos;t collect your personal data. No tracking. No cookies. No accounts. Your privacy is our priority.
          </p>
        </div>

        {/* Key Highlights */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">HIGHLIGHTS</span></div>
          <h2 className="font-grotesk font-bold text-2xl text-black mb-4 uppercase">PRIVACY HIGHLIGHTS</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { icon: "🚫", label: "NO DATA COLLECTION" },
              { icon: "🍪", label: "NO TRACKING COOKIES" },
              { icon: "👤", label: "NO USER ACCOUNTS" },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-mono font-bold text-xs text-black uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">DATA COLLECTION</span></div>
          <div className="flex items-center gap-2 mb-6"><Database size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">DATA COLLECTION & LEGAL BASIS</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6"><strong className="text-black">Random Pokemon Generator does NOT collect, store, process, or transmit any personal data</strong> as defined under the General Data Protection Regulation (GDPR) Article 4.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-3">WHAT WE DON&apos;T COLLECT:</h3>
              <div className="space-y-1">
                {["No names, email addresses, or contact information", "No user accounts or registration data", "No IP addresses or device identifiers", "No browsing history or behavioral data", "No location data or geolocation tracking", "No payment information (the tool is 100% free)", "No cookies for tracking, profiling, or advertising"].map(item => (
                  <div key={item} className="flex items-start gap-2"><span className="text-black font-bold">✓</span><span>{item}</span></div>
                ))}
              </div>
            </div>
            <p className="border-l-4 border-black pl-6">All Pokemon team generation happens <strong className="text-black">entirely client-side</strong> in your browser. Your generated teams, filter preferences, and interactions never leave your device.</p>
            <div className="bg-marigold border-2 border-black p-4 slasher">
              <p className="text-xs font-bold text-black">💡 Because we don&apos;t collect personal data, there is no legal basis required under GDPR (no consent needed, no legitimate interest claimed).</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">TECHNICAL</span></div>
          <div className="flex items-center gap-2 mb-6"><Eye size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">HOW THE GENERATOR WORKS</h2></div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: "1. CLIENT-SIDE PROCESSING", desc: "All team generation logic runs locally in your browser. No data is sent to our servers during generation." },
              { label: "2. API CALLS TO POKEAPI", desc: "Pokemon data is fetched directly from PokeAPI (pokeapi.co). We don't intercept or store this data." },
              { label: "3. LOCAL STORAGE ONLY", desc: "Your browser may cache Pokemon sprites locally to improve performance. This data never leaves your device." },
              { label: "4. NO SERVER DATABASE", desc: "We don't have a database to store user data. There's nowhere for your information to be saved." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-sm text-black uppercase mb-1">{item.label}</h3>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Third-party services */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">THIRD PARTIES</span></div>
          <div className="flex items-center gap-2 mb-6"><Shield size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">THIRD-PARTY SERVICES</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>While we don&apos;t collect data, some external services are used to make the generator function:</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">POKEAPI (pokeapi.co)</h3>
              <p className="mb-2">Pokemon data and images are fetched from PokeAPI. When your browser requests Pokemon data, PokeAPI may log your IP address per their own privacy policy.</p>
              <p>Review PokeAPI&apos;s privacy practices at <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-black underline">pokeapi.co</a>. We have no control over their data collection.</p>
            </div>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">HOSTING PROVIDER (VERCEL)</h3>
              <p>Vercel may collect standard server logs including IP addresses and request timestamps for security and performance monitoring. Consult Vercel&apos;s privacy policy for details.</p>
            </div>
            <p><strong className="text-black">No other external services are used.</strong> We do not integrate:</p>
            <ul className="border-l-4 border-black pl-6 space-y-1">
              <li>• No Google Analytics or tracking tools</li>
              <li>• No advertising networks (Google Ads, Facebook Pixel, etc.)</li>
              <li>• No social media trackers</li>
              <li>• No email marketing services</li>
              <li>• No payment processors (tool is 100% free)</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">COOKIES</span></div>
          <div className="flex items-center gap-2 mb-6"><Cookie size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">COOKIES & ANALYTICS</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6"><strong className="text-black">We do NOT use cookies for tracking, profiling, or advertising purposes.</strong></p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">COOKIE USAGE:</h3>
              <p className="mb-2">Random Pokemon Generator operates <strong className="text-black">cookie-free</strong> for user tracking. Your browser may use local storage to cache Pokemon data for performance — this is NOT a tracking cookie.</p>
              <p><strong className="text-black">No consent banner required:</strong> Because we don&apos;t use tracking cookies, we don&apos;t need a cookie consent popup (per GDPR ePrivacy Directive).</p>
            </div>
          </div>
        </section>

        {/* GDPR Rights */}
        <section className="mb-8 bg-marigold border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">YOUR RIGHTS</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">YOUR RIGHTS UNDER GDPR</h2>
          <p className="font-mono text-xs md:text-sm text-black leading-relaxed mb-4">As an EU/EEA resident, you have comprehensive data protection rights. Since we <strong>do not collect personal data</strong>, these rights are automatically respected:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: "RIGHT TO ACCESS (Art. 15)", desc: "We have no personal data about you to access." },
              { label: "RIGHT TO RECTIFICATION (Art. 16)", desc: "No personal data exists to rectify or correct." },
              { label: "RIGHT TO ERASURE (Art. 17)", desc: "There is no data to erase. Your right to be forgotten is automatically satisfied." },
              { label: "RIGHT TO PORTABILITY (Art. 20)", desc: "No data is collected, so there is nothing to port." },
              { label: "RIGHT TO OBJECT (Art. 21)", desc: "No data processing occurs that you could object to." },
              { label: "RIGHT TO RESTRICTION (Art. 18)", desc: "No personal data processing to restrict." },
            ].map(item => (
              <div key={item.label} className="bg-white border-2 border-black p-4 slasher">
                <h3 className="font-mono font-bold text-xs text-black uppercase mb-1">{item.label}</h3>
                <p className="font-mono text-xs text-charcoal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">SECURITY</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">DATA RETENTION & SECURITY</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p className="border-l-4 border-black pl-6"><strong className="text-black">Data Retention:</strong> Since no personal data is collected, there is no data retention period. Generated teams exist only in your browser&apos;s local memory.</p>
            <div className="bg-white border-2 border-black p-4 slasher">
              <h3 className="font-mono font-bold text-sm text-black uppercase mb-2">HOW TO CLEAR LOCAL DATA:</h3>
              <ul className="space-y-1">
                <li>• <strong>Chrome/Edge:</strong> Settings → Privacy → Clear Browsing Data → Cached images and files</li>
                <li>• <strong>Firefox:</strong> Settings → Privacy → Clear Data → Cached Web Content</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data → Remove</li>
              </ul>
            </div>
            <p><strong className="text-black">Security Measures:</strong> HTTPS encryption (SSL/TLS), secure hosting, regular security updates, and no database to be hacked.</p>
          </div>
        </section>

        {/* Children */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CHILDREN</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">CHILDREN&apos;S PRIVACY (COPPA)</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>Pokemon is enjoyed by fans of all ages, including children. Random Pokemon Generator is safe for children because:</p>
            <ul className="border-l-4 border-black pl-6 space-y-1">
              <li>• We do NOT collect personal information from anyone, including children under 13</li>
              <li>• No user accounts or registration required</li>
              <li>• No email collection or contact forms</li>
              <li>• No third-party advertising or tracking</li>
              <li>• No external links to unsafe content</li>
            </ul>
          </div>
        </section>

        {/* International */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">INTERNATIONAL</span></div>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] mb-6 uppercase">INTERNATIONAL USERS</h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p>Random Pokemon Generator is accessible worldwide. We comply with major international privacy laws including:</p>
            <ul className="border-l-4 border-black pl-6 space-y-1">
              <li>• <strong className="text-black">GDPR</strong> (European Union / EEA)</li>
              <li>• <strong className="text-black">CCPA</strong> (California, USA)</li>
              <li>• <strong className="text-black">PIPEDA</strong> (Canada)</li>
              <li>• <strong className="text-black">UK GDPR</strong> (United Kingdom)</li>
              <li>• <strong className="text-black">LGPD</strong> (Brazil)</li>
            </ul>
            <p>Compliance is easy because we don&apos;t collect personal data. No matter where you&apos;re located, your privacy is protected.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8 bg-cream border-2 border-black p-4 sm:p-6 md:p-10 slasher">
          <div className="inline-block bg-black px-4 py-1 slasher border border-black mb-4"><span className="font-mono text-xs font-bold text-white uppercase tracking-widest">CONTACT</span></div>
          <div className="flex items-center gap-2 mb-6"><Mail size={18} className="text-black" /><h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-black leading-[0.9] uppercase">DATA CONTROLLER & CONTACT</h2></div>
          <div className="space-y-3 font-mono text-xs md:text-sm text-charcoal leading-relaxed">
            <p><strong className="text-black">Data Controller:</strong> Random Pokemon Generator</p>
            <p>For privacy-related questions, GDPR requests, or general inquiries:</p>
            <div className="bg-marigold border-2 border-black p-4 slasher">
              <p className="text-xs font-bold text-black break-words">Email: <a href="mailto:shadowrajoriya@gmail.com" className="text-black underline break-all">shadowrajoriya@gmail.com</a></p>
              <p className="text-xs mt-1 text-black">We respond to all legitimate privacy requests within <strong>30 days</strong> as required by GDPR (Article 12).</p>
            </div>
          </div>
        </section>

        {/* Last updated */}
        <section className="mb-8 bg-cream border-2 border-black p-4 slasher">
          <h2 className="font-grotesk font-bold text-xl text-black mb-2 uppercase">CHANGES TO THIS POLICY</h2>
          <p className="font-mono text-xs text-charcoal leading-relaxed">This privacy policy may be updated periodically. Continued use after changes constitutes acceptance of the updated policy.</p>
          <p className="font-mono text-xs text-black mt-3"><strong>Last Updated:</strong> December 14, 2025</p>
        </section>

        {/* CTA */}
        <section className="text-center bg-black border-4 border-black p-12 slasher mb-8">
          <h2 className="font-grotesk font-bold text-3xl md:text-5xl text-white mb-4 uppercase">YOUR PRIVACY<br />IS PROTECTED</h2>
          <p className="font-mono text-marigold text-sm mb-8 max-w-xl mx-auto">No data collection. No tracking. No cookies. Just a fast, free Pokemon team generator that respects your privacy.</p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-marigold hover:bg-yellow-400 text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-white slasher transition-smooth">START GENERATING TEAMS →</div>
          </Link>
        </section>
      </div>
    </main>
  );
}
