import type { ReactNode } from 'react';

/**
 * Wraps the first occurrence of each phrase (in order) in <strong>. Skips missing phrases.
 * Use short, non-overlapping phrases to avoid keyword stuffing.
 */
export function emphasizePhrases(
  text: string,
  phrases: readonly string[],
  strongClassName: string,
): ReactNode {
  if (!phrases.length) return text;
  const phrase = phrases[0];
  const rest = phrases.slice(1);
  const idx = text.indexOf(phrase);
  if (idx === -1) return emphasizePhrases(text, rest, strongClassName);
  const before = text.slice(0, idx);
  const after = text.slice(idx + phrase.length);
  return (
    <>
      {before}
      <strong className={strongClassName}>{phrase}</strong>
      {emphasizePhrases(after, rest, strongClassName)}
    </>
  );
}
