'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'yoni71_a11y_settings';

interface A11ySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  lineHeight: 'normal' | 'medium' | 'large';
  letterSpacing: 'normal' | 'medium' | 'large';
  highContrast: boolean;
  invert: boolean;
  highlightLinks: boolean;
  grayscale: boolean;
  stopAnimations: boolean;
  readableFont: boolean;
  focusHighlight: boolean;
  bigCursor: boolean;
}

const defaults: A11ySettings = {
  fontSize: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  highContrast: false,
  invert: false,
  highlightLinks: false,
  grayscale: false,
  stopAnimations: false,
  readableFont: false,
  focusHighlight: false,
  bigCursor: false,
};

const FONT_SIZES = { normal: '16px', large: '18px', xlarge: '20px' };

const TOGGLE_FEATURES = [
  {
    key: 'highContrast' as const,
    label: 'ניגודיות גבוהה',
    className: 'a11y-high-contrast',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 010 16V4z" />
      </svg>
    ),
  },
  {
    key: 'invert' as const,
    label: 'היפוך צבעים',
    className: 'a11y-invert',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C18.93 5.77 22 8.65 22 12c0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    key: 'highlightLinks' as const,
    label: 'הדגשת קישורים',
    className: 'a11y-highlight-links',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
      </svg>
    ),
  },
  {
    key: 'grayscale' as const,
    label: 'גווני אפור',
    className: 'a11y-grayscale',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
      </svg>
    ),
  },
  {
    key: 'stopAnimations' as const,
    label: 'עצירת אנימציות',
    className: 'a11y-stop-animations',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    ),
  },
  {
    key: 'readableFont' as const,
    label: 'פונט קריא',
    className: 'a11y-readable-font',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
      </svg>
    ),
  },
  {
    key: 'focusHighlight' as const,
    label: 'הדגשת פוקוס',
    className: 'a11y-focus-highlight',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    key: 'bigCursor' as const,
    label: 'סמן גדול',
    className: 'a11y-big-cursor',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.64 21.97C13.14 22.21 12.54 22 12.31 21.5l-2.8-6.17-3.33 3.34c-.31.31-.85.09-.85-.35V3.21c0-.45.54-.67.85-.35l10.97 10.97c.31.31.09.85-.35.85h-4.41l2.8 6.16c.24.5.02 1.1-.48 1.34l-.77.35z" />
      </svg>
    ),
  },
];

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(() => {
    if (typeof window === 'undefined') return defaults;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaults, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return defaults;
  });
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Apply settings to DOM whenever they change
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Font size
    html.style.fontSize = FONT_SIZES[settings.fontSize];

    // Line height classes
    body.classList.remove('a11y-line-height-medium', 'a11y-line-height-large');
    if (settings.lineHeight === 'medium') body.classList.add('a11y-line-height-medium');
    if (settings.lineHeight === 'large') body.classList.add('a11y-line-height-large');

    // Letter spacing classes
    body.classList.remove('a11y-letter-spacing-medium', 'a11y-letter-spacing-large');
    if (settings.letterSpacing === 'medium') body.classList.add('a11y-letter-spacing-medium');
    if (settings.letterSpacing === 'large') body.classList.add('a11y-letter-spacing-large');

    // Toggle classes
    for (const feature of TOGGLE_FEATURES) {
      body.classList.toggle(feature.className, settings[feature.key]);
    }

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings]);

  // Focus trap + escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const updateSetting = useCallback(<K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setSettings(defaults);
    document.documentElement.style.fontSize = '16px';
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        className="a11y-trigger"
        onClick={togglePanel}
        aria-label="הגדרות נגישות"
        aria-expanded={isOpen}
        aria-controls="a11yPanel"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
        </svg>
      </button>
      <span className="a11y-trigger-label">נגישות</span>

      {/* Overlay */}
      <div
        className={`a11y-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id="a11yPanel"
        className={`a11y-panel ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="הגדרות נגישות"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="a11y-panel-header">
          <h2>הגדרות נגישות</h2>
          <button
            className="a11y-close-btn"
            onClick={() => {
              setIsOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="סגור"
          >
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="a11y-panel-body">
          {/* Font Size */}
          <div className="a11y-section">
            <div className="a11y-section-title">
              <svg viewBox="0 0 24 24">
                <path d="M2 4v3h5v12h3V7h5V4H2zm19 5h-9v3h3v7h3v-7h3V9z" />
              </svg>
              <span>גודל טקסט</span>
            </div>
            <div className="a11y-options">
              {([['normal', 'רגיל'], ['large', 'גדול'], ['xlarge', 'גדול מאוד']] as const).map(
                ([value, label]) => (
                  <button
                    key={value}
                    className={`a11y-option-btn ${settings.fontSize === value ? 'active' : ''}`}
                    onClick={() => updateSetting('fontSize', value)}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Line Height */}
          <div className="a11y-section">
            <div className="a11y-section-title">
              <svg viewBox="0 0 24 24">
                <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" />
              </svg>
              <span>ריווח שורות</span>
            </div>
            <div className="a11y-options">
              {([['normal', 'רגיל'], ['medium', 'מרווח'], ['large', 'מרווח מאוד']] as const).map(
                ([value, label]) => (
                  <button
                    key={value}
                    className={`a11y-option-btn ${settings.lineHeight === value ? 'active' : ''}`}
                    onClick={() => updateSetting('lineHeight', value)}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Letter Spacing */}
          <div className="a11y-section">
            <div className="a11y-section-title">
              <svg viewBox="0 0 24 24">
                <path d="M22 7h-2v1h-4V7h-2v4h2V10h4v1h2V7zM2 17h2v-1h4v1h2v-4H8v1H4v-1H2v4zm8-10h4l1.5 8h-2l-.3-2h-2.4l-.3 2h-2L10 7zm1.7 4.5h1.6L12.5 7h-.1l-.7 4.5z" />
              </svg>
              <span>ריווח אותיות</span>
            </div>
            <div className="a11y-options">
              {([['normal', 'רגיל'], ['medium', 'מרווח'], ['large', 'מרווח מאוד']] as const).map(
                ([value, label]) => (
                  <button
                    key={value}
                    className={`a11y-option-btn ${settings.letterSpacing === value ? 'active' : ''}`}
                    onClick={() => updateSetting('letterSpacing', value)}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Display Adjustments */}
          <div className="a11y-section">
            <div className="a11y-section-title">
              <svg viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>
              <span>התאמות תצוגה</span>
            </div>
            <div className="a11y-toggle-grid">
              {TOGGLE_FEATURES.map((feature) => (
                <button
                  key={feature.key}
                  className={`a11y-toggle-btn ${settings[feature.key] ? 'active' : ''}`}
                  onClick={() => updateSetting(feature.key, !settings[feature.key])}
                >
                  {feature.icon}
                  <span>{feature.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          <button className="a11y-reset-btn" onClick={resetAll}>
            ↻ איפוס כל ההגדרות
          </button>

          {/* Link to accessibility page */}
          <a href="/accessibility" className="a11y-footer-link">
            הצהרת נגישות
          </a>
        </div>
      </div>
    </>
  );
}
