'use client';

import { useState } from 'react';
import { deleteProfileAction } from '@/app/admin/profiles/actions';

export function DeleteProfileButton({ id }: { id: string }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {confirm ? (
        <>
          <span className="text-xs text-red-300">Delete this profile?</span>
          <form action={deleteProfileAction.bind(null, id)}>
            <button
              type="submit"
              className="rounded-lg bg-red-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-600"
            >
              Yes, delete
            </button>
          </form>
          <button
            type="button"
            onClick={() => setConfirm(false)}
            className="rounded-lg border border-zinc-600 px-3 py-1.5 text-xs text-zinc-300"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setConfirm(true)}
          className="rounded-lg border border-red-800/80 px-3 py-1.5 text-xs text-red-300 hover:bg-red-950/50"
        >
          Delete
        </button>
      )}
    </div>
  );
}
