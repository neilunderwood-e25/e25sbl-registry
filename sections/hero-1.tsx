import * as React from "react";

export default function Hero1() {
  return (
    <section className="relative" style={{ backgroundColor: 'var(--color-hero-1-bg)' }}>
      <div className="mx-auto max-w-7xl" style={{ paddingLeft: 'var(--spacing-xs)', paddingRight: 'var(--spacing-xs)' }}>
        <div className="flex min-h-screen flex-col items-center justify-center text-center" style={{ paddingTop: 'var(--spacing-l)', paddingBottom: 'var(--spacing-l)' }}>
          <h1 className="font-bold tracking-tight sm:text-6xl lg:text-7xl" style={{ fontSize: 'var(--text-5xl)', color: 'var(--color-hero-1-heading)' }}>
            Build beautiful websites
            <span className="block" style={{ color: 'var(--color-hero-1-accent)' }}>faster than ever</span>
          </h1>
          <p className="max-w-2xl" style={{ marginTop: 'var(--spacing-s)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-7xl)', color: 'var(--color-hero-1-text)' }}>
            Get started with pre-built, production-ready website sections.
            Copy, paste, and customize to match your brand in minutes.
          </p>
          <div className="flex items-center justify-center" style={{ marginTop: 'var(--spacing-m)', gap: 'var(--spacing-s)' }}>
            <a
              href="#"
              className="rounded-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors"
              style={{ 
                backgroundColor: 'var(--color-hero-1-accent)', 
                paddingLeft: 'var(--spacing-s)', 
                paddingRight: 'var(--spacing-s)', 
                paddingTop: 'var(--spacing-xxs)', 
                paddingBottom: 'var(--spacing-xxs)', 
                fontSize: 'var(--text-base)', 
                color: 'var(--color-hero-1-btn-text)',
                outlineColor: 'var(--color-hero-1-accent)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-hero-1-accent-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-hero-1-accent)'}
            >
              Get started
            </a>
            <a
              href="#"
              className="font-semibold transition-colors"
              style={{ 
                fontSize: 'var(--text-base)', 
                lineHeight: 'var(--leading-btn)', 
                color: 'var(--color-hero-1-link)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-hero-1-link-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-hero-1-link)'}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
