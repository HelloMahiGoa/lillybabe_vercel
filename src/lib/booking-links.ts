const DEFAULT_WHATSAPP_BASE = 'https://wa.me/918121426651';
const DEFAULT_TELEGRAM_URL = 'https://t.me/Tamil_Escorts_Official';

export const BOOKING_WHATSAPP_BASE_URL =
  process.env.NEXT_PUBLIC_BOOKING_WHATSAPP_URL || DEFAULT_WHATSAPP_BASE;
export const BOOKING_TELEGRAM_URL =
  process.env.NEXT_PUBLIC_BOOKING_TELEGRAM_URL || DEFAULT_TELEGRAM_URL;

export function buildWhatsAppBookingUrl(message: string): string {
  const separator = BOOKING_WHATSAPP_BASE_URL.includes('?') ? '&' : '?';
  return `${BOOKING_WHATSAPP_BASE_URL}${separator}text=${encodeURIComponent(message)}`;
}
