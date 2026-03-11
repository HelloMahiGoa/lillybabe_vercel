import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

export async function GET() {
  if (!BOT_TOKEN) {
    return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 });
  }

  try {
    const params = new URLSearchParams({
      limit: '10',
      allowed_updates: JSON.stringify(['channel_post', 'message']),
    });

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?${params.toString()}`,
      { cache: 'no-store' }
    );
    const json = await res.json();

    return NextResponse.json(json, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
