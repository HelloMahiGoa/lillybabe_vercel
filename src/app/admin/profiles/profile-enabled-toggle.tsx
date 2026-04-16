'use client';

import { useState, useTransition } from 'react';
import { toggleProfileEnabledAction } from '@/app/admin/profiles/actions';

export function ProfileEnabledToggle({
  id,
  enabled: initial,
}: {
  id: string;
  enabled: boolean;
}) {
  const [enabled, setEnabled] = useState(initial);
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      role="switch"
      aria-checked={enabled}
      onClick={() => {
        const next = !enabled;
        setEnabled(next);
        startTransition(async () => {
          const r = await toggleProfileEnabledAction(id, next);
          if (r && 'ok' in r && r.ok === false) {
            setEnabled(!next);
          }
        });
      }}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-colors ${
        enabled ? 'border-amber-500/60 bg-amber-600/30' : 'border-zinc-600 bg-zinc-800'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
