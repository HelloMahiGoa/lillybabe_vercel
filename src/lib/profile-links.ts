/** Normalize WhatsApp fields into usable hrefs. */
export function whatsappHref(raw: string): string {
  const t = raw.trim();
  if (!t) return '#';
  if (t.startsWith('http://') || t.startsWith('https://')) return t;
  const digits = t.replace(/\D/g, '');
  if (digits.length >= 10) {
    return `https://wa.me/${digits.replace(/^0+/, '')}`;
  }
  return t.startsWith('wa.me') ? `https://${t}` : `https://wa.me/${digits}`;
}

export function whatsappHrefWithMessage(raw: string, message: string): string {
  const base = whatsappHref(raw);
  if (!message.trim() || base === '#') return base;
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(message)}`;
}
