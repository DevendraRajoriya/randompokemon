"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("App error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center animate-scale-in">
                <div className="bg-white border-4 border-black p-8 slasher">
                    {/* Error Icon */}
                    <div className="w-16 h-16 bg-red-100 border-2 border-red-600 flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle size={32} className="text-red-600" />
                    </div>

                    <h2 className="font-grotesk font-bold text-2xl text-black mb-3 uppercase">
                        Something Went Wrong
                    </h2>

                    <p className="font-mono text-sm text-charcoal/70 mb-6 leading-relaxed">
                        {error.message || "An unexpected error occurred while loading the page."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={reset}
                            className="flex-1 bg-black text-cream px-6 py-3 font-mono text-sm font-bold uppercase hover:bg-charcoal transition-colors border-2 border-black flex items-center justify-center gap-2 min-h-[48px] btn-hover-lift"
                        >
                            <RefreshCw size={16} />
                            Try Again
                        </button>
                        <a
                            href="/"
                            className="flex-1 bg-cream text-black px-6 py-3 font-mono text-sm font-bold uppercase hover:bg-marigold transition-colors border-2 border-black flex items-center justify-center min-h-[48px]"
                        >
                            Go Home
                        </a>
                    </div>

                    {error.digest && (
                        <p className="font-mono text-[10px] text-charcoal/40 mt-4">
                            Error ID: {error.digest}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
