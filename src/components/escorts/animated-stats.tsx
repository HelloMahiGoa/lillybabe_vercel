'use client';

import { useEffect, useState } from 'react';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: Stat[] = [
  { label: 'Active profiles', value: 18, suffix: '+' },
  { label: 'City locations', value: 10, suffix: '+' },
  { label: 'Avg response', value: 5, suffix: ' min' },
];

export function AnimatedStats() {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const durationMs = 1000;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / durationMs);
      setCounts(STATS.map((stat) => Math.floor(stat.value * progress)));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {STATS.map((stat, index) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-center backdrop-blur"
        >
          <p className="text-xl font-black text-white">
            {counts[index]}
            {stat.suffix ?? ''}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-300">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
