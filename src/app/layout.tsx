import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals, PerformanceMonitor } from "@/utils/performance";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights for faster loading
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true,
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://www.randompokemon.co";

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBE9BB",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Random Pokemon Generator | Team Builder for Nuzlocke & Draft League (Gen 1-9)",
  description:
    "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool!",
  keywords: [
    "random pokemon",
    "random pokemon generator",
    "pokemon nuzlocke generator",
    "nuzlocke team generator",
    "pokemon team builder",
    "nuzlocke generator",
    "pokemon randomizer",
    "random pokemon team",
    "pokemon team generator",
    "scarlet violet team builder",
    "pokemon picker",
    "random starter pokemon",
    "pokemon draft league",
    "soullink generator",
    "pokemon nuzlocke",
    "nuzlocke challenge",
    "pokemon challenge runs",
  ],
  authors: [{ name: "Random Pokemon Generator" }],
  creator: "Random Pokemon Generator",
  publisher: "Random Pokemon Generator",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Random Pokemon Nuzlocke Generator",
    title: "Random Pokemon Nuzlocke Generator | Team Builder Gen 1-9",
    description:
      "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Random Pokemon Generator - Build Your Dream Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Pokemon Nuzlocke Generator | Team Builder Gen 1-9",
    description:
      "Generate random Pokemon teams instantly for Nuzlocke runs, Draft Leagues & challenge modes. Filter by type, region & rarity. All 1025 Pokemon. Free tool!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PokeGen",
  },
  other: {
    "google-adsense-account": "ca-pub-4072027063101043",
  },
};

// JSON-LD Structured Data - Site-wide schemas only
// Homepage-specific schemas (WebApplication, HowTo, FAQ) are in page.tsx
const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Random Pokemon Nuzlocke Generator",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/pokemon/{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Random Pokemon Nuzlocke Generator",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ["https://x.com/MisterLezend", "https://github.com/DevendraRajoriya"],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {/* PWA Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').then((registration) => {
                  // When a new SW is found, immediately activate it
                  registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                      newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                          // Tell the new SW to skip waiting and take over
                          newWorker.postMessage({ type: 'SKIP_WAITING' });
                        }
                      });
                    }
                  });
                }).catch((err) => {
                  console.warn('SW registration failed:', err);
                });

                // Reload once when the new SW takes control so users get fresh JS
                let refreshing = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                  if (!refreshing) {
                    refreshing = true;
                    window.location.reload();
                  }
                });
              }
            `,
          }}
        />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://pokeapi.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pokeapi.co" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        {/* Language targeting for SEO */}
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        {/* LLM discovery */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Full Documentation" />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4072027063101043"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Note: Fonts are loaded via next/font/google import, no manual preload needed */}
      </head>
      {/* suppressHydrationWarning needed because browser extensions and
          third-party scripts may add attributes to <body> during SSR/CSR mismatch */}
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <WebVitals />
        <PerformanceMonitor />
        <Header />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
