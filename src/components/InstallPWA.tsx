'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    // Check if prompt was dismissed before
    const dismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 30) {
        return; // Don't show again for 30 days
      }
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show prompt after 5 seconds
      setTimeout(() => {
        setShowPrompt(true);
      }, 5000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-[95] animate-slide-up">
      <div className="p-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(251,233,187,0.3)] slasher relative" style={{ backgroundColor: '#0F0F0F', color: '#FBE9BB' }}>
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/10 transition-colors font-mono font-bold text-lg"
          aria-label="Close install prompt"
        >
          ✕
        </button>

        {/* Icon + Content */}
        <div className="flex items-start gap-4 pr-6">
          <div className="w-10 h-10 flex items-center justify-center border-2 shrink-0" style={{ backgroundColor: '#F5BC22', borderColor: 'rgba(251,233,187,0.3)' }}>
            <span className="text-black font-bold text-lg">⚡</span>
          </div>
          <div>
            <h3 className="font-grotesk font-bold text-base uppercase tracking-wide mb-1">
              Install PokeGen
            </h3>
            <p className="font-mono text-xs text-cream/70 leading-relaxed mb-4">
              Add to your home screen for instant access &amp; offline use!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-1">
          <button
            onClick={handleInstall}
            className="flex-1 text-black px-4 py-3 font-mono text-sm font-bold uppercase border-2 border-[rgba(251,233,187,0.2)] hover:brightness-90 transition-colors min-h-[44px] btn-hover-lift"
            style={{ backgroundColor: '#F5BC22' }}
          >
            Install Now
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 bg-transparent text-cream px-4 py-3 font-mono text-sm font-bold uppercase border-2 border-cream/30 hover:bg-cream/10 transition-colors min-h-[44px]"
          >
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
}
