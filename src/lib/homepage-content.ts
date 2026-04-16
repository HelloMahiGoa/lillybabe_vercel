function getHomepageNow(): Date {
  return new Date();
}

function getKolkataDateParts(): { year: string; month: string; day: string } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(getHomepageNow());

  return {
    year: parts.find((part) => part.type === 'year')?.value ?? '',
    month: parts.find((part) => part.type === 'month')?.value ?? '',
    day: parts.find((part) => part.type === 'day')?.value ?? '',
  };
}

/**
 * Homepage freshness is generated automatically from the current date.
 * Used by Hero (<time>) and JSON-LD dateModified.
 */
export function getHomepageLastUpdatedIso(): string {
  const { year, month, day } = getKolkataDateParts();
  return `${year}-${month}-${day}`;
}

/** en-IN style label for visible UI */
export function getHomepageLastUpdatedLabel(): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(getHomepageNow());
}
