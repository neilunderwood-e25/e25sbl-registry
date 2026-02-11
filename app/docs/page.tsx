export default function DocsPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to the E25 Section Library Registry documentation. Here you can explore our collection of production-ready website sections.
      </p>
      <p className="text-gray-600 mb-4">
        Each component is designed to be copy-pasted directly into your project. They are built with Tailwind CSS and React, ensuring they are easy to customize and integrate.
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Getting Started</h2>
      <div className="bg-gray-900 text-white p-4 rounded-md mb-6 font-mono text-sm">
        <code>npx @neilunderwood/e25sbl init</code>
      </div>
      <p className="text-gray-600">
        Run the init command to set up the necessary dependencies in your project. Then you can add individual components using their ID.
      </p>
    </div>
  );
}
