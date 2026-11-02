"use client";

import { useState, useEffect, useCallback } from "react";

const RENEWAL_DATE = "2026-11-27";
const RENEWAL_DISPLAY = "27 November 2026";
const RENEWAL_AMOUNT = "$50";
const DONATION_URL = "https://buymeacoffee.com/lezend";
const DISMISS_KEY = "support_banner_dismissed";
const DISMISS_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

export default function SupportBanner() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const now = new Date();
    const renewal = new Date(RENEWAL_DATE + "T23:59:59");
    if (now > renewal) return;

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

    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setAnimate(true));
    }, 1200);

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
      aria-label="Support this site"
      className={`sp-popup ${animate ? "sp-popup--show" : ""}`}
    >
      {/* Close */}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="sp-close"
      >
        ✕
      </button>

      {/* Header */}
      <div className="sp-header">
        <span className="sp-emoji">☕</span>
        <span className="sp-title">Help Keep This Site Online</span>
      </div>

      {/* Body */}
      <div className="sp-body">
        <p className="sp-text">
          This site runs on donations. The domain &amp; server renew on{" "}
          <strong>{RENEWAL_DISPLAY}</strong> at about{" "}
          <strong>{RENEWAL_AMOUNT}</strong>. If you enjoy the site, a small
          coffee helps keep it online.
        </p>

        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener"
          className="sp-btn"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>

      <style jsx>{`
        .sp-popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          width: 380px;
          max-width: calc(100vw - 32px);
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 18px;
          box-shadow:
            0 10px 40px rgba(255, 107, 53, 0.25),
            0 0 0 1px rgba(255, 107, 53, 0.15),
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

        .sp-popup--show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .sp-close {
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

        .sp-close:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          transform: scale(1.1);
        }

        .sp-close:focus-visible {
          outline: 2px solid #ff6b35;
          outline-offset: 2px;
        }

        .sp-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px 14px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931a 100%);
        }

        .sp-emoji {
          font-size: 24px;
          line-height: 1;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }

        .sp-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }

        .sp-body {
          padding: 16px 20px 20px;
        }

        .sp-text {
          margin: 0 0 16px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
        }

        .sp-text strong {
          color: #ffb347;
          font-weight: 600;
        }

        .sp-btn {
          display: block;
          width: 100%;
          padding: 13px 20px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931a 100%);
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

        .sp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.45);
          filter: brightness(1.08);
        }

        .sp-btn:active {
          transform: translateY(0);
        }

        .sp-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* ── Mobile: full-width bottom sheet ── */
        @media (max-width: 640px) {
          .sp-popup {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            border-radius: 18px 18px 0 0;
            transform: translateY(100%);
          }

          .sp-popup--show {
            transform: translateY(0);
          }

          .sp-close {
            top: 14px;
            right: 14px;
            width: 32px;
            height: 32px;
            font-size: 14px;
          }

          .sp-header {
            padding: 16px 16px 14px;
          }

          .sp-emoji {
            font-size: 22px;
          }

          .sp-title {
            font-size: 15px;
          }

          .sp-body {
            padding: 14px 16px 18px;
          }

          .sp-text {
            font-size: 13px;
            line-height: 1.55;
            margin-bottom: 14px;
          }

          .sp-btn {
            font-size: 15px;
            padding: 14px 16px;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  );
}
