import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock, Shield, Eye, Cookie, Database, Mail } from "lucide-react";

const siteUrl = "https://www.randompokemon.co";

export const metadata: Metadata = {
  title: "Privacy Policy - Random Pokemon Generator | GDPR Compliant",
  description:
    "Privacy policy for Random Pokemon Generator. We don't collect personal data, use tracking cookies, or store user information. GDPR compliant, privacy-first approach.",
  keywords: [
    "privacy policy",
    "gdpr compliant",
    "no data collection",
    "privacy first",
    "cookie free",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Random Pokemon Generator",
    description:
      "We don't collect your data. No tracking cookies. No user accounts. Your privacy is protected.",
    url: `${siteUrl}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Lock className="text-green-600" size={48} />
          </div>
          <div className="inline-block bg-green-600 px-4 py-2 slasher border-2 border-black mb-4">
            <span className="font-mono text-xs text-white font-bold uppercase tracking-widest">✓ GDPR COMPLIANT</span>
          </div>
          <h1 className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-black mb-6 tracking-tight uppercase">
            PRIVACY POLICY
          </h1>
          <p className="font-mono text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t collect your personal data. No tracking. No cookies. No accounts. Your privacy is our priority.
          </p>
        </div>

        {/* Key Highlights */}
        <section className="mb-12 bg-green-100 border-4 border-green-600 p-8 slasher">
          <h2 className="font-sans font-bold text-2xl text-green-900 mb-4 uppercase">Privacy Highlights</h2>
          <div className="grid md:grid-cols-3 gap-4 font-mono text-base text-green-900">
            <div className="bg-white border-2 border-green-600 p-4 text-center">
              <div className="text-3xl mb-2">🚫</div>
              <p className="font-bold">NO DATA COLLECTION</p>
            </div>
            <div className="bg-white border-2 border-green-600 p-4 text-center">
              <div className="text-3xl mb-2">🍪</div>
              <p className="font-bold">NO TRACKING COOKIES</p>
            </div>
            <div className="bg-white border-2 border-green-600 p-4 text-center">
              <div className="text-3xl mb-2">👤</div>
              <p className="font-bold">NO USER ACCOUNTS</p>
            </div>
          </div>
        </section>

        {/* Data Collection & Legal Basis */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-indigo-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Data Collection & Legal Basis</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              <strong className="text-black">Random Pokemon Generator does NOT collect, store, process, or transmit any personal data</strong> as defined under the General Data Protection Regulation (GDPR) Article 4.
            </p>
            <div className="bg-cream border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">What We DON&apos;T Collect:</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No names, email addresses, or contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No user accounts or registration data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No IP addresses or device identifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No browsing history or behavioral data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No location data or geolocation tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No payment information (the tool is 100% free)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No cookies for tracking, profiling, or advertising</span>
                </li>
              </ul>
            </div>
            <p className="text-base">
              All Pokemon team generation happens <strong className="text-black">entirely client-side</strong> in your browser using JavaScript. Your generated teams, filter preferences, and interactions never leave your device.
            </p>
            <div className="bg-marigold border-2 border-black p-4 mt-4">
              <p className="text-base font-bold text-black">
                💡 Because we don&apos;t collect personal data, there is no legal basis required under GDPR (no consent needed, no legitimate interest claimed, no contract established).
              </p>
            </div>
          </div>
        </section>

        {/* How the Generator Works */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="text-purple-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">How the Generator Works</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              Understanding how our tool operates helps explain why your privacy is automatically protected:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl text-black mb-3">1. Client-Side Processing</h3>
                <p className="text-base">All team generation logic runs locally in your browser. No data is sent to our servers during generation.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl text-black mb-3">2. API Calls to PokeAPI</h3>
                <p className="text-base">Pokemon data is fetched directly from PokeAPI (pokeapi.co), a third-party service. We don&apos;t intercept or store this data.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl text-black mb-3">3. Local Storage Only</h3>
                <p className="text-base">Your browser may cache Pokemon sprites locally to improve performance. This data never leaves your device.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-xl text-black mb-3">4. No Server-Side Database</h3>
                <p className="text-base">We don&apos;t have a database to store user data. There&apos;s nowhere for your information to be saved.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Third-Party Services</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              While we don&apos;t collect data, some external services are used to make the generator function:
            </p>
            <div className="bg-cream border-2 border-black p-6 mt-4">
              <h3 className="font-sans font-bold text-xl text-black mb-4">PokeAPI (pokeapi.co)</h3>
              <p className="text-base mb-3">
                Pokemon data and images are fetched from PokeAPI, a free and open RESTful API. When your browser requests Pokemon data, PokeAPI may log your IP address per their own privacy policy.
              </p>
              <p className="text-base mb-3">
                <strong className="text-black">What PokeAPI might collect:</strong> IP addresses, request timestamps, API endpoint usage
              </p>
              <p className="text-base">
                We recommend reviewing PokeAPI&apos;s privacy practices at <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">pokeapi.co</a>. We have no control over their data collection.
              </p>
            </div>
            <div className="bg-cream border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl text-black mb-4">Hosting Provider (Heroku/Vercel)</h3>
              <p className="text-base mb-3">
                Random Pokemon Generator is hosted on a cloud platform (Heroku or similar). These providers may collect standard server logs including IP addresses, request timestamps, and user agents for security and performance monitoring.
              </p>
              <p className="text-base">
                We do not have access to or control over hosting provider logs. Consult your hosting provider&apos;s privacy policy for details.
              </p>
            </div>
            <p className="text-base mt-4">
              <strong className="text-black">No other external services are used.</strong> We do not integrate:
            </p>
            <ul className="list-none space-y-1 text-base pl-6 border-l-4 border-black mt-2">
              <li>• No Google Analytics or similar tracking tools</li>
              <li>• No advertising networks (Google Ads, Facebook Pixel, etc.)</li>
              <li>• No social media trackers</li>
              <li>• No email marketing services</li>
              <li>• No payment processors (tool is 100% free)</li>
            </ul>
          </div>
        </section>

        {/* Cookies & Analytics */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="text-yellow-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Cookies & Analytics</h2>
          </div>
          <div className="space-y-4 font-mono text-gray-900 leading-relaxed">
            <p className="text-base">
              <strong className="text-black">We do NOT use cookies for tracking, profiling, or advertising purposes.</strong>
            </p>
            <div className="bg-cream border-2 border-black p-6">
              <h3 className="font-sans font-bold text-xl text-black mb-3">Cookie Usage:</h3>
              <p className="text-base mb-3">
                Random Pokemon Generator operates <strong className="text-black">cookie-free</strong> for user tracking. Your browser may use local storage or session storage to temporarily cache Pokemon data for performance reasons, but this is NOT a tracking cookie.
              </p>
              <p className="text-base">
                <strong className="text-black">No consent banner required:</strong> Because we don&apos;t use tracking cookies, we don&apos;t need to show a cookie consent popup (per GDPR ePrivacy Directive).
              </p>
            </div>
            <p className="text-base mt-4">
              <strong className="text-black">Analytics:</strong> We may use privacy-respecting, cookie-free analytics tools (such as Plausible, Fathom, or Simple Analytics) to understand general usage patterns. These tools:
            </p>
            <ul className="list-none space-y-2 text-base pl-6 border-l-4 border-black mt-2">
              <li>• Do NOT use cookies</li>
              <li>• Do NOT track users across sites</li>
              <li>• Do NOT collect personally identifiable information</li>
              <li>• Provide aggregated, anonymous statistics only (page views, popular features)</li>
              <li>• Are GDPR compliant without consent requirements</li>
            </ul>
            <p className="text-base mt-4">
              If privacy-focused analytics are implemented, they will be clearly disclosed here.
            </p>
          </div>
        </section>

        {/* Your Rights Under GDPR */}
        <section className="mb-12 bg-marigold border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Your Rights Under GDPR</h2>
          <div className="space-y-4 font-mono text-black leading-relaxed">
            <p className="text-base">
              As an EU/EEA resident, you have comprehensive data protection rights under the General Data Protection Regulation (GDPR). However, since we <strong>do not collect personal data</strong>, these rights are automatically respected:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Access (Article 15)</h3>
                <p className="text-sm">We have no personal data about you to access. Nothing is collected or stored.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Rectification (Article 16)</h3>
                <p className="text-sm">No personal data exists to rectify or correct.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Erasure (Article 17)</h3>
                <p className="text-sm">There is no data to erase. Your &quot;right to be forgotten&quot; is automatically satisfied.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Data Portability (Article 20)</h3>
                <p className="text-sm">No data is collected, so there is nothing to port or transfer.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Object (Article 21)</h3>
                <p className="text-sm">No data processing occurs that you could object to.</p>
              </div>
              <div className="bg-white border-2 border-black p-5">
                <h3 className="font-sans font-bold text-lg mb-2">Right to Restriction (Article 18)</h3>
                <p className="text-sm">No personal data processing to restrict.</p>
              </div>
            </div>
            <div className="bg-cream border-2 border-black p-4 mt-6">
              <p className="text-sm break-words">
                <strong>If you believe we hold any data about you:</strong> Please contact us at shadowrajoriya@gmail.com and we will verify and respond within 30 days as required by GDPR (Article 12).
              </p>
            </div>
          </div>
        </section>

        {/* Data Retention & Security */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Data Retention & Security</h2>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p className="text-base">
              <strong className="text-black">Data Retention:</strong> Since no personal data is collected, there is no data retention period. Your generated teams and filter settings exist only in your browser&apos;s local memory and can be cleared at any time through your browser settings.
            </p>
            <div className="bg-cream border-2 border-black p-6 mt-4">
              <h3 className="font-sans font-bold text-xl text-black mb-3">How to Clear Local Data:</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Chrome/Edge:</strong> Settings → Privacy → Clear Browsing Data → Cached images and files</li>
                <li>• <strong>Firefox:</strong> Settings → Privacy → Clear Data → Cached Web Content</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data → Remove</li>
              </ul>
            </div>
            <p className="text-base mt-4">
              <strong className="text-black">Security Measures:</strong> We implement industry-standard security practices including:
            </p>
            <ul className="list-none space-y-2 text-sm pl-6 border-l-4 border-black mt-2">
              <li>• HTTPS encryption for all connections (SSL/TLS certificates)</li>
              <li>• Secure hosting infrastructure</li>
              <li>• Regular security updates for dependencies</li>
              <li>• No database to be hacked (since we don&apos;t store data)</li>
            </ul>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12 bg-cream border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">Children&apos;s Privacy (COPPA Compliance)</h2>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p className="text-base">
              Pokemon is enjoyed by fans of all ages, including children. Random Pokemon Generator is safe for children because:
            </p>
            <ul className="list-none space-y-2 text-sm pl-6 border-l-4 border-black mt-2">
              <li>• We do NOT collect personal information from anyone, including children under 13</li>
              <li>• No user accounts or registration required</li>
              <li>• No email collection or contact forms</li>
              <li>• No third-party advertising or tracking</li>
              <li>• No external links to unsafe content</li>
            </ul>
            <p className="text-base mt-4">
              Parents can confidently allow children to use this tool. There is no risk of personal information being collected or shared. We comply with the Children&apos;s Online Privacy Protection Act (COPPA) by not collecting any data from users of any age.
            </p>
          </div>
        </section>

        {/* International Users */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-black mb-6 uppercase">International Users</h2>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p className="text-base">
              Random Pokemon Generator is accessible worldwide. We comply with major international privacy laws including:
            </p>
            <ul className="list-none space-y-2 text-sm pl-6 border-l-4 border-black mt-2">
              <li>• <strong className="text-black">GDPR</strong> (European Union / EEA)</li>
              <li>• <strong className="text-black">CCPA</strong> (California, USA)</li>
              <li>• <strong className="text-black">PIPEDA</strong> (Canada)</li>
              <li>• <strong className="text-black">UK GDPR</strong> (United Kingdom)</li>
              <li>• <strong className="text-black">LGPD</strong> (Brazil)</li>
            </ul>
            <p className="text-base mt-4">
              Compliance is easy because we don&apos;t collect personal data. No matter where you&apos;re located, your privacy is protected.
            </p>
          </div>
        </section>

        {/* Contact & Data Controller */}
        <section className="mb-12 bg-white border-4 border-black p-8 slasher">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-red-600" size={32} />
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase">Data Controller & Contact</h2>
          </div>
          <div className="space-y-4 font-mono text-charcoal leading-relaxed">
            <p className="text-base">
              <strong className="text-black">Data Controller:</strong> Random Pokemon Generator
            </p>
            <p className="text-base">
              For privacy-related questions, GDPR requests, data concerns, or general inquiries, please contact us:
            </p>
            <div className="bg-cream border-2 border-black p-6 mt-4">
              <p className="text-base font-bold text-black break-words">Email: <a href="mailto:shadowrajoriya@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline break-all">shadowrajoriya@gmail.com</a></p>
              <p className="text-sm mt-3">We will respond to all legitimate privacy requests within <strong className="text-black">30 days</strong> as required by GDPR (Article 12).</p>
            </div>
          </div>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="mb-12 bg-cream border-2 border-black p-6 slasher">
          <h2 className="font-sans font-bold text-2xl text-black mb-4 uppercase">Changes to This Privacy Policy</h2>
          <p className="font-mono text-sm text-charcoal leading-relaxed">
            This privacy policy may be updated periodically to reflect changes in our practices, legal requirements, or new features. The date of the last update is displayed below. We will notify users of significant changes by updating this page. Continued use of Random Pokemon Generator after changes constitutes acceptance of the updated privacy policy.
          </p>
          <p className="font-mono text-xs text-black mt-4">
            <strong>Last Updated:</strong> December 14, 2025
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8 bg-green-600 border-4 border-black p-8 slasher text-center">
          <h2 className="font-sans font-bold text-3xl text-white mb-4 uppercase">
            Your Privacy is Protected
          </h2>
          <p className="font-mono text-white text-lg mb-6 max-w-2xl mx-auto">
            No data collection. No tracking. No cookies. Just a fast, free Pokemon team generator that respects your privacy.
          </p>
          <Link href="/" className="inline-block btn-hover-lift">
            <div className="bg-white text-black font-grotesk font-bold text-xl px-12 py-5 border-4 border-black slasher transition-smooth hover:bg-cream">
              START GENERATING TEAMS →
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
