const DEFAULT_WHATSAPP_BASE = 'https://wa.me/918121426651';

export const BOOKING_WHATSAPP_BASE_URL =
  process.env.NEXT_PUBLIC_BOOKING_WHATSAPP_URL || DEFAULT_WHATSAPP_BASE;

export function buildWhatsAppBookingUrl(message: string): string {
  const separator = BOOKING_WHATSAPP_BASE_URL.includes('?') ? '&' : '?';
  return `${BOOKING_WHATSAPP_BASE_URL}${separator}text=${encodeURIComponent(message)}`;
}
