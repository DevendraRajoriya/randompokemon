"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[80] w-14 h-14 text-black border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all duration-150 flex items-center justify-center animate-slide-up"
            style={{ backgroundColor: '#F5BC22' }}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <ArrowUp size={24} strokeWidth={3} />
        </button>
    );
}
