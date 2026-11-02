"use client";

import { useState, useEffect, useCallback } from "react";

const DONATION_URL = "https://buymeacoffee.com/lezend";
const DISMISS_KEY = "pledge_banner_dismissed";
const DISMISS_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

export default function PledgeBanner() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Only show in November
    const now = new Date();
    if (now.getMonth() !== 10) return; // 10 = November (0-indexed)

    try {
      const dismissed = localStorage.getItem(DISMISS_KEY);
      if (dismissed) {
        const dismissedAt = parseInt(dismissed, 10);
        if (!isNaN(dismissedAt) && now.getTime() - dismissedAt < DISMISS_COOLDOWN_MS) {
          return;
        }
      }
    } catch {
      // localStorage unavailable
    }

    // Stagger after the support banner (which appears at 1.2s)
    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setAnimate(true));
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setVisible(false);
      try {
        localStorage.setItem(DISMISS_KEY, Date.now().toString());
      } catch {
        // localStorage unavailable
      }
    }, 300);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="NNN pledge"
      className={`pledge-popup ${animate ? "pledge-popup--show" : ""}`}
    >
      {/* Close */}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="pledge-close"
      >
        ✕
      </button>

      {/* Header */}
      <div className="pledge-header">
        <span className="pledge-emoji">🔥</span>
        <span className="pledge-title">NNN Pledge 😜</span>
      </div>

      {/* Body */}
      <div className="pledge-body">
        <p className="pledge-text">
          It&apos;s <strong>No Nut November</strong>! Take the pledge to
          complete your NNN challenge — and channel that energy into helping
          keep this site alive by covering the server costs. 💪
        </p>
        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener"
          className="pledge-btn"
        >
          🏆 Take the Pledge
        </a>
      </div>

      <style jsx>{`
        .pledge-popup {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 9999;
          width: 370px;
          max-width: calc(100vw - 32px);
          background: linear-gradient(145deg, #1e0533 0%, #2d1b69 100%);
          border-radius: 18px;
          box-shadow:
            0 10px 40px rgba(139, 92, 246, 0.3),
            0 0 0 1px rgba(139, 92, 246, 0.2),
            0 2px 8px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          font-family: var(--font-space-grotesk), system-ui, sans-serif;

          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition:
            opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .pledge-popup--show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .pledge-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          padding: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, transform 0.15s;
        }

        .pledge-close:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          transform: scale(1.1);
        }

        .pledge-close:focus-visible {
          outline: 2px solid #a78bfa;
          outline-offset: 2px;
        }

        .pledge-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px 14px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
        }

        .pledge-emoji {
          font-size: 24px;
          line-height: 1;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }

        .pledge-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }

        .pledge-body {
          padding: 16px 20px 20px;
        }

        .pledge-text {
          margin: 0 0 8px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }

        .pledge-text strong {
          color: #c4b5fd;
          font-weight: 600;
        }

        .pledge-subtext {
          margin: 0 0 16px;
          font-size: 12.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.55);
          font-style: italic;
        }

        .pledge-btn {
          display: block;
          width: 100%;
          padding: 13px 20px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 12px;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
        }

        .pledge-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
          filter: brightness(1.1);
        }

        .pledge-btn:active {
          transform: translateY(0);
        }

        .pledge-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* Hide on mobile — the support banner already covers it */
        @media (max-width: 640px) {
          .pledge-popup {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
