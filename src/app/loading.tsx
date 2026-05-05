export default function Loading() {
    return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-4">
            <div className="text-center animate-fade-in">
                {/* Pokeball spinner */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-black rounded-full animate-spin" style={{ borderTopColor: '#EF4444', borderBottomColor: 'white' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-3 border-black rounded-full z-10" />
                </div>
                <div className="inline-block bg-black px-4 py-2 slasher mb-4">
                    <p className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                        Loading...
                    </p>
                </div>
                <p className="font-mono text-xs text-charcoal/60">
                    Fetching POKEMON data
                </p>
            </div>
        </div>
    );
}
