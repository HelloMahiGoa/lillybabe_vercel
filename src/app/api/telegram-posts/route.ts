import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

// Only accept posts from the official channel
const KNOWN_CHATS = new Set([
  'tamil_escorts_official',
]);

type TGPhoto = {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
};

type TGMsg = {
  message_id: number;
  date: number;
  media_group_id?: string;
  text?: string;
  caption?: string;
  photo?: TGPhoto[];
  chat: {
    id: number;
    type: string;
    username?: string;
    title?: string;
  };
};

type TGUpdate = {
  update_id: number;
  channel_post?: TGMsg;
  message?: TGMsg;
};

export async function GET() {
  if (!BOT_TOKEN) {
    return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 });
  }

  try {
    // Use URLSearchParams so allowed_updates is properly encoded
    const params = new URLSearchParams({
      limit: '100',
      allowed_updates: JSON.stringify(['channel_post', 'message']),
    });

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?${params.toString()}`,
      { cache: 'no-store' }
    );
    const json: { ok: boolean; result: TGUpdate[]; description?: string } =
      await tgRes.json();

    if (!json.ok) {
      return NextResponse.json(
        { error: 'Telegram API error', detail: json.description },
        { status: 502 }
      );
    }

    // Group by media_group_id (album) or message_id (single post)
    const groups = new Map<
      string,
      { id: number; text: string; date: number; imageFileIds: string[] }
    >();

    for (const update of json.result) {
      // Accept both channel posts AND group messages
      const post = update.channel_post ?? update.message;
      if (!post) continue;

      // Only from known chats
      const username = post.chat.username?.toLowerCase();
      if (!username || !KNOWN_CHATS.has(username)) continue;

      const text = post.caption ?? post.text ?? '';
      const photos = post.photo ?? [];

      // Skip if no text and no photo
      if (!text.trim() && photos.length === 0) continue;

      const key = post.media_group_id ?? String(post.message_id);
      const existing = groups.get(key);

      // Keep first non-empty caption/text across album messages
      const resolvedText =
        existing?.text && existing.text.trim().length > 0 ? existing.text : text;

      // Largest photo size for this message
      const bestPhoto = photos.length > 0 ? photos[photos.length - 1] : null;
      const prevIds = existing?.imageFileIds ?? [];
      const imageFileIds =
        bestPhoto && !prevIds.includes(bestPhoto.file_id)
          ? [...prevIds, bestPhoto.file_id]
          : [...prevIds];

      groups.set(key, {
        id: update.update_id,
        text: resolvedText,
        date: post.date,
        imageFileIds,
      });
    }

    const posts = Array.from(groups.values())
      .sort((a, b) => b.date - a.date)
      .slice(0, 20);

    return NextResponse.json(
      { posts },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          Pragma: 'no-cache',
        },
      }
    );
  } catch (err) {
    console.error('Telegram error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
