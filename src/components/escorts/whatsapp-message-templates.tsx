'use client';

import { useState } from 'react';

type Template = {
  id: string;
  text: string;
};

const TEMPLATES: Template[] = [
  {
    id: 'area',
    text: "Hi, I'm looking for Chennai escort booking today in {area}. Please share available profiles and rates.",
  },
  {
    id: 'profile',
    text: 'Hi, I want profile {name}. Is she available today? Please confirm timing, location, and price details.',
  },
  {
    id: 'local',
    text: 'Vanakkam, today evening booking venum in {location}. Please share genuine available profiles and final rate.',
  },
];

export function WhatsAppMessageTemplates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function onCopy(template: Template) {
    try {
      await navigator.clipboard.writeText(template.text);
      setCopiedId(template.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="mt-4 space-y-3 text-sm">
      {TEMPLATES.map((template) => (
        <div
          key={template.id}
          className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:flex-row sm:items-start sm:justify-between"
        >
          <p className="text-zinc-200">{template.text}</p>
          <button
            type="button"
            onClick={() => onCopy(template)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-emerald-500/60 hover:text-emerald-200"
          >
            {copiedId === template.id ? 'Copied' : 'Copy message'}
          </button>
        </div>
      ))}
    </div>
  );
}
