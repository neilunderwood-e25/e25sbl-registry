import Link from "next/link";
import registry from "@/registry/registry.json";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 border-r bg-gray-50 p-6 md:min-h-screen shrink-0">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold text-gray-900">
            E25 Registry
          </Link>
        </div>
        <nav className="space-y-1">
          <Link
            href="/docs"
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Introduction
          </Link>
          <div className="pt-4 pb-2">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Components
            </h3>
          </div>
          {registry.sections.map((section) => (
            <Link
              key={section.id}
              href={`/docs/${section.id}`}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-12 max-w-[900px] w-full">
        {children}
      </main>
    </div>
  );
}
