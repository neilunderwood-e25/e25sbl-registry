"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-gray-400 hover:text-white transition-colors border border-gray-700 rounded px-2 py-1"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
