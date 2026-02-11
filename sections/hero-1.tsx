import * as React from "react";

export default function Hero1() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Build beautiful websites
            <span className="block text-indigo-600">faster than ever</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Get started with pre-built, production-ready website sections.
            Copy, paste, and customize to match your brand in minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-700 transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
