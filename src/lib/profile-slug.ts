/** URL-safe slug from display name (ASCII). */
export function slugifyName(name: string): string {
  const s = name
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return s || 'profile';
}

/** Ensure slug is unique by querying existing slugs and appending -2, -3, … */
export async function ensureUniqueSlug(
  base: string,
  isTaken: (slug: string) => Promise<boolean>
): Promise<string> {
  let candidate = base;
  let n = 2;
  while (await isTaken(candidate)) {
    const suffix = `-${n}`;
    const max = Math.max(1, 80 - suffix.length);
    candidate = `${base.slice(0, max)}${suffix}`;
    n += 1;
  }
  return candidate;
}
