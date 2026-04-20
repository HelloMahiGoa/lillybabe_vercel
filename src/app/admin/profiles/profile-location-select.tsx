'use client';

import { useState, useTransition } from 'react';
import { updateProfileLocationAction } from '@/app/admin/profiles/actions';
import { PROFILE_LOCATIONS, type ProfileLocation } from '@/types/profile';

export function ProfileLocationSelect({
  id,
  location: initial,
}: {
  id: string;
  location: ProfileLocation;
}) {
  const [location, setLocation] = useState<ProfileLocation>(initial);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2">
      <select
        value={location}
        disabled={pending}
        onChange={(e) => {
          const next = e.target.value as ProfileLocation;
          const prev = location;
          setLocation(next);
          setStatus('idle');
          startTransition(async () => {
            const result = await updateProfileLocationAction(id, next);
            if (result && 'ok' in result && result.ok === false) {
              setLocation(prev);
              setStatus('error');
              setTimeout(() => setStatus('idle'), 2000);
              return;
            }
            setStatus('saved');
            setTimeout(() => setStatus('idle'), 1600);
          });
        }}
        className="rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-200 focus:border-amber-500 focus:outline-none"
        aria-label="Change profile location"
      >
        {PROFILE_LOCATIONS.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      {status === 'saved' ? <span className="text-xs text-emerald-400">Saved</span> : null}
      {status === 'error' ? <span className="text-xs text-red-400">Failed</span> : null}
    </div>
  );
}
