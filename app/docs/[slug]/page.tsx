import CopyButton from "@/components/copy-button";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import registry from "@/registry/registry.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return registry.sections.map((section) => ({
    slug: section.id,
  }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  
  const section = registry.sections.find((s) => s.id === slug);

  if (!section) {
    notFound();
  }

  const filePath = path.join(process.cwd(), section.files.component);
  let code = "";
  
  try {
    code = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    code = "// Error reading file content";
  }

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{section.name}</h1>
        <p className="text-gray-600 text-lg">{section.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-medium">
          {section.category}
        </span>
        {section.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="bg-gray-50 px-4 py-2 border-b flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-700">Preview</h3>
          <a 
            href={`/preview/${section.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            Open in new tab ↗
          </a>
        </div>
        <div className="relative w-full border-b bg-gray-50/50 h-[500px]">
           <iframe 
             src={`/preview/${section.id}`}
             className="w-full h-full border-0"
             title={`${section.name} preview`}
           />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden bg-gray-900 text-white shadow-sm">
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-200">Code</h3>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-mono">
              {section.files.component}
            </span>
            <CopyButton text={code} />
          </div>
        </div>
        <div className="max-h-[500px] overflow-y-auto">
          <pre className="p-4 overflow-x-auto text-sm font-mono">
            <code>{code}</code>
          </pre>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
        <p className="text-sm text-gray-600 mb-3">
          Run the following command to add this component to your project:
        </p>
        <div className="bg-white border rounded p-3 font-mono text-sm text-gray-700 overflow-x-auto">
          <code>npx @neilunderwood/e25sbl {section.id}</code>
        </div>
      </div>
    </div>
  );
}
