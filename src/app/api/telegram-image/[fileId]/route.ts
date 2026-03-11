import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function GET(
  _req: NextRequest,
  { params }: { params: { fileId: string } }
) {
  if (!TELEGRAM_BOT_TOKEN) {
    return new NextResponse('Telegram not configured', { status: 500 });
  }

  try {
    const fileId = decodeURIComponent(params.fileId);
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

    // Get file info from Telegram
    const file = await bot.getFile(fileId);
    if (!file.file_path) {
      return new NextResponse('File not found', { status: 404 });
    }

    // Build direct file URL and fetch the bytes
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${file.file_path}`;
    const tgRes = await fetch(fileUrl);

    if (!tgRes.ok) {
      return new NextResponse('Failed to load image from Telegram', {
        status: 502,
      });
    }

    const buffer = await tgRes.arrayBuffer();
    const contentType = tgRes.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err) {
    console.error('Telegram image proxy error:', err);
    return new NextResponse('Error fetching image', { status: 500 });
  }
}

