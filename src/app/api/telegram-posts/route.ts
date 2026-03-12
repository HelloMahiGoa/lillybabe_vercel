import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

// Only accept posts from the official channel
const KNOWN_CHATS = new Set([
  'tamil_escorts_official',
]);

const MAX_PAGES   = 10;  // up to 1000 updates per request
const MAX_PROFILES = 50; // profiles returned to the UI

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
    // ── Paginate through all available updates ──────────────────────────────
    // Without offset, Telegram always returns the SAME oldest 100 updates.
    // By advancing the offset after each batch, we consume and see ALL posts.
    const allUpdates: TGUpdate[] = [];
    let offset = 0; // 0 = start from the oldest unprocessed update

    for (let page = 0; page < MAX_PAGES; page++) {
      const params = new URLSearchParams({
        offset: String(offset),
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

      const batch = json.result ?? [];
      if (batch.length === 0) break; // no more updates

      allUpdates.push(...batch);

      if (batch.length < 100) break; // last partial page — we have everything

      // Advance offset to the next unread update (also acknowledges this batch)
      offset = batch[batch.length - 1].update_id + 1;
    }

    // ── Group by media_group_id (album) or message_id (single post) ─────────
    const groups = new Map<
      string,
      { id: number; text: string; date: number; imageFileIds: string[] }
    >();

    for (const update of allUpdates) {
      const post = update.channel_post ?? update.message;
      if (!post) continue;

      // Only from the known channel
      const username = post.chat.username?.toLowerCase();
      if (!username || !KNOWN_CHATS.has(username)) continue;

      const text   = post.caption ?? post.text ?? '';
      const photos = post.photo ?? [];

      // Skip posts with no content
      if (!text.trim() && photos.length === 0) continue;

      const key      = post.media_group_id ?? String(post.message_id);
      const existing = groups.get(key);

      // Keep the first non-empty caption across album messages
      const resolvedText =
        existing?.text && existing.text.trim().length > 0 ? existing.text : text;

      // One cover image per profile — keep the largest photo from the first
      // message that has one; ignore subsequent album photos
      const bestPhoto = photos.length > 0 ? photos[photos.length - 1] : null;
      const prevIds   = existing?.imageFileIds ?? [];
      const imageFileIds =
        prevIds.length > 0
          ? prevIds
          : bestPhoto
          ? [bestPhoto.file_id]
          : [];

      groups.set(key, {
        id: update.update_id,
        text: resolvedText,
        date: post.date,
        imageFileIds,
      });
    }

    // Sort newest-first, cap at MAX_PROFILES
    const posts = Array.from(groups.values())
      .sort((a, b) => b.date - a.date)
      .slice(0, MAX_PROFILES);

    return NextResponse.json(
      { posts, total: groups.size },
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
