"use client";

import Link from "next/link";
import registry from "@/registry/registry.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E25 Section Library Registry
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse and install production-ready website sections for your Next.js projects.
          </p>
          <div className="mt-6">
            <code className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm">
              npx @neilunderwood/e25sbl init
            </code>
          </div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registry.sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {section.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{section.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                  {section.category}
                </span>
                {section.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  href={`/preview/${section.id}`}
                  className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors"
                >
                  Preview
                </Link>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`npx @neilunderwood/e25sbl ${section.id}`);
                    alert("Install command copied!");
                  }}
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Copy Install
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>{registry.sections.length} sections available • Last updated: {registry.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}
