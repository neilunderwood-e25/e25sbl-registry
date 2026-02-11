export default function Hero1() {
  return (
    <section className="relative bg-hero-1-bg">
      <div className="container">
        <div className="flex min-h-screen flex-col items-center justify-center text-center py-l">
          <h1 className="text-5xl font-bold tracking-tight text-hero-1-heading sm:text-6xl lg:text-7xl">
            Build beautiful websites
            <span className="block text-hero-1-accent">faster than ever</span>
          </h1>
          <p className="mt-s max-w-2xl text-lg leading-7xl text-hero-1-text">
            Get started with pre-built, production-ready website sections.
            Copy, paste, and customize to match your brand in minutes.
          </p>
          <div className="mt-m flex items-center justify-center gap-s">
            <a
              href="#"
              className="rounded-md bg-hero-1-accent hover:bg-hero-1-accent-hover px-s py-xxs text-base font-semibold text-hero-1-btn-text shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-1-accent transition-colors"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-btn text-hero-1-link hover:text-hero-1-link-hover transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
