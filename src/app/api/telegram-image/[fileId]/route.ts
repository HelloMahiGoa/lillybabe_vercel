import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

export async function GET(
  _req: NextRequest,
  { params }: { params: { fileId: string } }
) {
  if (!BOT_TOKEN) {
    return new NextResponse('Telegram not configured', { status: 500 });
  }

  try {
    const fileId = decodeURIComponent(params.fileId);

    // Step 1: resolve fileId → file_path via Telegram Bot API (no cache)
    const infoRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${encodeURIComponent(fileId)}`,
      { cache: 'no-store' }
    );
    const info: { ok: boolean; result?: { file_path?: string } } = await infoRes.json();

    if (!info.ok || !info.result?.file_path) {
      return new NextResponse('File not found', { status: 404 });
    }

    // Step 2: fetch the actual image bytes from Telegram CDN (no cache)
    const imageRes = await fetch(
      `https://api.telegram.org/file/bot${BOT_TOKEN}/${info.result.file_path}`,
      { cache: 'no-store' }
    );

    if (!imageRes.ok) {
      return new NextResponse('Failed to load image', { status: 502 });
    }

    const buffer = await imageRes.arrayBuffer();
    const contentType = imageRes.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
      },
    });
  } catch (err) {
    console.error('Telegram image proxy error:', err);
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
