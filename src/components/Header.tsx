"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap, BookOpen, MapPin, Info, ChevronDown } from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Generator", icon: Zap },
    { href: "/pokedex", label: "Pokédex", icon: BookOpen },
];

const REGION_LINKS = [
    { href: "/kanto-pokemon-generator", label: "Kanto (Gen 1)" },
    { href: "/johto-pokemon-generator", label: "Johto (Gen 2)" },
    { href: "/hoenn-pokemon-generator", label: "Hoenn (Gen 3)" },
    { href: "/sinnoh-pokemon-generator", label: "Sinnoh (Gen 4)" },
    { href: "/unova-pokemon-generator", label: "Unova (Gen 5)" },
    { href: "/kalos-pokemon-generator", label: "Kalos (Gen 6)" },
    { href: "/alola-pokemon-generator", label: "Alola (Gen 7)" },
    { href: "/galar-pokemon-generator", label: "Galar (Gen 8)" },
    { href: "/paldea-pokemon-generator", label: "Paldea (Gen 9)" },
];

const MORE_LINKS = [
    { href: "/blog", label: "Blog & Guides" },
    { href: "/pokemon-card-generator", label: "Card Generator" },
    { href: "/shiny-pokemon-generator", label: "Shiny Generator" },
    { href: "/legendary-pokemon-generator", label: "Legendary Generator" },
    { href: "/starter-pokemon-generator", label: "Starter Generator" },
    { href: "/nuzlocke-generator", label: "Nuzlocke Guide" },
    { href: "/guide", label: "How to Use" },
    { href: "/about", label: "About" },
];


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [regionsOpen, setRegionsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Defer interactive state until after hydration to prevent SSR mismatch
    useEffect(() => { setMounted(true); }, []);
    const moreRef = useRef<HTMLDivElement>(null);

    // Close More dropdown when clicking/tapping outside
    useEffect(() => {
        const handleOutside = (e: MouseEvent | TouchEvent) => {
            if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
                setMoreOpen(false);
            }
        };
        if (moreOpen) {
            document.addEventListener('mousedown', handleOutside);
            document.addEventListener('touchstart', handleOutside, { passive: true });
            return () => {
                document.removeEventListener('mousedown', handleOutside);
                document.removeEventListener('touchstart', handleOutside);
            };
        }
    }, [moreOpen]);

    // Track scroll for shadow effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={`sticky top-0 z-[90] bg-white border-b-4 border-black transition-all duration-200 ${scrolled ? "shadow-[0_4px_0px_0px_#000,0_8px_24px_rgba(0,0,0,0.15)]" : ""
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 group shrink-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Image
                                src="/logo.png"
                                alt="Random Pokemon Logo"
                                width={36}
                                height={36}
                                className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-105 transition-transform duration-200"
                                priority
                            />
                            <span className="font-grotesk font-bold text-sm md:text-base text-black uppercase tracking-tight leading-tight">
                                Random <span className="hidden sm:inline">Pokemon</span><span className="sm:hidden">Pokémon</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-semibold text-black uppercase tracking-wider hover:bg-black hover:text-cream transition-colors"
                                >
                                    <link.icon size={14} />
                                    {link.label}
                                </Link>
                            ))}

                            {/* Regions Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setRegionsOpen(!regionsOpen)}
                                    className="flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-semibold text-black uppercase tracking-wider hover:bg-black hover:text-cream transition-colors"
                                    aria-expanded={mounted ? regionsOpen : undefined}
                                >
                                    <MapPin size={14} />
                                    Regions
                                    <ChevronDown
                                        size={12}
                                        className={`transition-transform duration-200 ${mounted && regionsOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {regionsOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-[89]"
                                            onClick={() => setRegionsOpen(false)}
                                        />
                                        <div className="absolute top-full right-0 mt-1 bg-white border-2 border-black min-w-[200px] z-[91] slasher shadow-[4px_4px_0px_0px_#000]">
                                            {REGION_LINKS.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    onClick={() => setRegionsOpen(false)}
                                                    className="block px-4 py-2.5 font-mono text-xs text-black hover:bg-marigold transition-colors border-b border-black/10 last:border-b-0"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* More Dropdown */}
                            <div ref={moreRef} className="relative">
                                <button
                                    onClick={() => setMoreOpen(!moreOpen)}
                                    className="flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-semibold text-black uppercase tracking-wider hover:bg-black hover:text-cream transition-colors"
                                    aria-expanded={mounted ? moreOpen : undefined}
                                >
                                    <Info size={14} />
                                    More
                                    <ChevronDown
                                        size={12}
                                        className={`transition-transform duration-200 ${mounted && moreOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {moreOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-[89]"
                                            onClick={() => setMoreOpen(false)}
                                        />
                                        <div className="absolute top-full right-0 mt-1 bg-white border-2 border-black min-w-[200px] z-[91] slasher shadow-[4px_4px_0px_0px_#000]">
                                            {MORE_LINKS.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    onClick={() => setMoreOpen(false)}
                                                    className="block px-4 py-2.5 font-mono text-xs text-black hover:bg-marigold transition-colors border-b border-black/10 last:border-b-0"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center bg-black text-cream hover:bg-charcoal transition-colors"
                            aria-label={mounted && mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mounted ? mobileMenuOpen : undefined}
                        >
                            {mounted && mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[85] md:hidden" aria-label="Mobile navigation">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="absolute top-14 left-0 right-0 bottom-0 bg-cream border-t-2 border-black overflow-y-auto animate-slide-down">
                        <nav className="p-4 space-y-1">
                            {/* Main Links */}
                            <div className="mb-4">
                                <span className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest px-3 mb-2 block">
                                    Main
                                </span>
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-3 py-3 font-mono text-sm font-semibold text-black uppercase hover:bg-black hover:text-cream transition-colors border-b border-black/10"
                                    >
                                        <link.icon size={16} />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Region Links */}
                            <div className="mb-4">
                                <span className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest px-3 mb-2 block">
                                    By Region
                                </span>
                                <div className="grid grid-cols-2 gap-1">
                                    {REGION_LINKS.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="px-3 py-2.5 font-mono text-xs text-black hover:bg-marigold transition-colors border border-black/10"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* More Links */}
                            <div>
                                <span className="font-mono text-[10px] text-charcoal/50 uppercase tracking-widest px-3 mb-2 block">
                                    More
                                </span>
                                {MORE_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-3 font-mono text-sm text-black hover:bg-black hover:text-cream transition-colors border-b border-black/10"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
