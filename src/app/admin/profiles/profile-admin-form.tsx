'use client';

import {
  useEffect,
  useRef,
  useState,
  useTransition,
  type ChangeEvent,
  type ComponentType,
  type DragEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Camera,
  Globe,
  ImagePlus,
  IndianRupee,
  MapPin,
  MessageCircle,
  Sparkles,
  UserRound,
} from 'lucide-react';
import {
  createProfileAction,
  regenerateMetaAction,
  updateProfileAction,
} from '@/app/admin/profiles/actions';
import { whatsappHref } from '@/lib/profile-links';
import { DEFAULT_PRICES, randomAge20to25 } from '@/lib/profile-meta-generate';
import { slugifyName } from '@/lib/profile-slug';
import type { ProfileLocation, ProfileRow } from '@/types/profile';
import { PROFILE_LOCATIONS } from '@/types/profile';

const DEFAULT_WHATSAPP = '918121426651';

const PRICE_PRESETS = {
  Budget: {
    price_one_shot: 6000,
    price_two_shot: 9000,
    price_three_shot: 12000,
    price_full_night: 18000,
  },
  Standard: DEFAULT_PRICES,
  Premium: {
    price_one_shot: 9000,
    price_two_shot: 14000,
    price_three_shot: 18000,
    price_full_night: 28000,
  },
} as const;

type Props = { mode: 'create' } | { mode: 'edit'; profile: ProfileRow };

type PriceState = {
  price_one_shot: string;
  price_two_shot: string;
  price_three_shot: string;
  price_full_night: string;
};

function SectionCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  const Icon = icon;
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2 text-amber-300">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function formatInr(value: string): string {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return 'Rs --';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ProfileAdminForm(props: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isEdit = props.mode === 'edit';
  const p = isEdit ? props.profile : null;

  const [name, setName] = useState(p?.name ?? '');
  const [age, setAge] = useState(() => p?.age ?? randomAge20to25());
  const [location, setLocation] = useState<ProfileLocation>(p?.location ?? 'Egmore');
  const [whatsapp, setWhatsapp] = useState(p?.whatsapp ?? DEFAULT_WHATSAPP);
  const [metaTitle, setMetaTitle] = useState(p?.meta_title ?? '');
  const [metaDesc, setMetaDesc] = useState(p?.meta_description ?? '');
  const [metaTags, setMetaTags] = useState((p?.meta_tags ?? []).join(', '));
  const [shortDesc, setShortDesc] = useState(p?.short_description ?? '');
  const [galleryText, setGalleryText] = useState((p?.gallery_urls ?? []).join('\n'));
  const [prices, setPrices] = useState<PriceState>({
    price_one_shot: String(p?.price_one_shot ?? DEFAULT_PRICES.price_one_shot),
    price_two_shot: String(p?.price_two_shot ?? DEFAULT_PRICES.price_two_shot),
    price_three_shot: String(p?.price_three_shot ?? DEFAULT_PRICES.price_three_shot),
    price_full_night: String(p?.price_full_night ?? DEFAULT_PRICES.price_full_night),
  });
  const [mainObjectUrl, setMainObjectUrl] = useState<string | null>(null);
  const [galleryObjectUrls, setGalleryObjectUrls] = useState<string[]>([]);
  const [isMainDragOver, setIsMainDragOver] = useState(false);
  const [isGalleryDragOver, setIsGalleryDragOver] = useState(false);
  const mainInputRef = useRef<HTMLInputElement | null>(null);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (mainObjectUrl) {
        URL.revokeObjectURL(mainObjectUrl);
      }
    };
  }, [mainObjectUrl]);

  useEffect(() => {
    return () => {
      galleryObjectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [galleryObjectUrls]);

  const previewSlug = slugifyName(name);
  const previewHref = `/profiles/${previewSlug}`;
  const mainPreviewUrl = mainObjectUrl ?? p?.main_image_url ?? '';
  const galleryPreviewUrls = galleryObjectUrls.length > 0 ? galleryObjectUrls : p?.gallery_urls ?? [];
  const seoTitle = metaTitle.trim() || `${name.trim() || 'New profile'} in ${location} | LillyBabe`;
  const seoDescription =
    metaDesc.trim() ||
    shortDesc.trim() ||
    `${name.trim() || 'New profile'} in ${location}, age ${age}. Contact on WhatsApp for rates and availability.`;
  const seoUrl = `https://lillybabe.com${previewHref}`;

  function onRegenerate() {
    if (!name.trim()) {
      setError('Enter a name before regenerating SEO fields.');
      return;
    }
    setError(null);
    startTransition(async () => {
      const meta = await regenerateMetaAction({ name: name.trim(), location, age });
      if (!meta) {
        setError('Not signed in.');
        return;
      }
      setMetaTitle(meta.meta_title);
      setMetaDesc(meta.meta_description);
      setMetaTags(meta.meta_tags.join(', '));
      setShortDesc(meta.short_description);
      setSuccess('SEO fields regenerated.');
    });
  }

  function applyPricePreset(preset: keyof typeof PRICE_PRESETS) {
    const values = PRICE_PRESETS[preset];
    setPrices({
      price_one_shot: String(values.price_one_shot),
      price_two_shot: String(values.price_two_shot),
      price_three_shot: String(values.price_three_shot),
      price_full_night: String(values.price_full_night),
    });
  }

  function updatePrice(field: keyof PriceState, value: string) {
    setPrices((current) => ({ ...current, [field]: value }));
  }

  function onMainImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (mainObjectUrl) {
      URL.revokeObjectURL(mainObjectUrl);
      setMainObjectUrl(null);
    }
    if (!file) return;
    setMainObjectUrl(URL.createObjectURL(file));
  }

  function onGalleryChange(e: ChangeEvent<HTMLInputElement>) {
    galleryObjectUrls.forEach((url) => URL.revokeObjectURL(url));
    const files = Array.from(e.target.files ?? []);
    setGalleryObjectUrls(files.map((file) => URL.createObjectURL(file)));
  }

  function setFilesOnInput(input: HTMLInputElement | null, files: File[]) {
    if (!input) return;
    const dt = new DataTransfer();
    files.forEach((file) => dt.items.add(file));
    input.files = dt.files;
  }

  function onMainDrop(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsMainDragOver(false);
    const file = Array.from(e.dataTransfer.files).find((item) => item.type.startsWith('image/'));
    if (!file) return;
    setFilesOnInput(mainInputRef.current, [file]);
    if (mainObjectUrl) {
      URL.revokeObjectURL(mainObjectUrl);
    }
    setMainObjectUrl(URL.createObjectURL(file));
  }

  function onGalleryDrop(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsGalleryDragOver(false);
    const files = Array.from(e.dataTransfer.files).filter((item) => item.type.startsWith('image/'));
    if (files.length === 0) return;
    setFilesOnInput(galleryInputRef.current, files);
    galleryObjectUrls.forEach((url) => URL.revokeObjectURL(url));
    setGalleryObjectUrls(files.map((file) => URL.createObjectURL(file)));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    startTransition(async () => {
      try {
        if (props.mode === 'create') {
          const result = await createProfileAction(fd);
          if (result && 'ok' in result && result.ok === false) {
            setError(result.error ?? 'Failed');
          }
          return;
        }
        const result = await updateProfileAction(props.profile.id, fd);
        if (result && 'ok' in result) {
          if (result.ok === false) {
            setError(result.error ?? 'Failed');
          } else {
            router.push('/admin/profiles');
            router.refresh();
          }
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <SectionCard
            title="Basic Info"
            description="Start with the core details that shape the profile URL, SEO, and listing card."
            icon={UserRound}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="pf-name" className="mb-1 block text-xs font-medium text-zinc-400">
                  Profile name
                </label>
                <input
                  id="pf-name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1">
                    URL preview
                  </span>
                  <span className="font-mono text-zinc-400">{previewHref}</span>
                </div>
              </div>

              <div>
                <label htmlFor="pf-age" className="mb-1 block text-xs font-medium text-zinc-400">
                  Age
                </label>
                <div className="flex gap-2">
                  <input
                    id="pf-age"
                    name="age"
                    type="number"
                    min={18}
                    max={99}
                    required
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <button
                    type="button"
                    onClick={() => setAge(randomAge20to25())}
                    className="shrink-0 rounded-lg border border-zinc-600 px-3 py-2 text-xs text-zinc-300 hover:bg-zinc-800"
                  >
                    Random
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="pf-location"
                  className="mb-1 block text-xs font-medium text-zinc-400"
                >
                  Location
                </label>
                <select
                  id="pf-location"
                  name="location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value as ProfileLocation)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  {PROFILE_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-3">
                <input
                  id="pf-enabled"
                  name="enabled"
                  type="checkbox"
                  defaultChecked={p?.enabled ?? true}
                  className="h-4 w-4 rounded border-zinc-600 bg-zinc-950 text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="pf-enabled" className="text-sm text-zinc-300">
                  Profile enabled and ready to appear on the site after save
                </label>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Contact"
            description="These links power the booking buttons shown on the public profile."
            icon={MessageCircle}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="pf-wa" className="mb-1 block text-xs font-medium text-zinc-400">
                  WhatsApp
                </label>
                <input
                  id="pf-wa"
                  name="whatsapp"
                  type="text"
                  placeholder="+91... or https://wa.me/..."
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
                <p className="mt-2 text-xs text-zinc-500">
                  Number only is fine. It will open as{' '}
                  <span className="font-mono text-zinc-400">{whatsappHref(whatsapp)}</span>
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Pricing"
            description="Use a preset for quick setup, then fine-tune the individual rates."
            icon={IndianRupee}
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {(Object.keys(PRICE_PRESETS) as Array<keyof typeof PRICE_PRESETS>).map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => applyPricePreset(preset)}
                  className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-amber-500/50 hover:bg-zinc-950"
                >
                  {preset}
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">1 shot (Rs)</label>
                <input
                  name="price_one_shot"
                  type="number"
                  min={0}
                  step={1}
                  value={prices.price_one_shot}
                  onChange={(e) => updatePrice('price_one_shot', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">2 shot (Rs)</label>
                <input
                  name="price_two_shot"
                  type="number"
                  min={0}
                  step={1}
                  value={prices.price_two_shot}
                  onChange={(e) => updatePrice('price_two_shot', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">3 shot (Rs)</label>
                <input
                  name="price_three_shot"
                  type="number"
                  min={0}
                  step={1}
                  value={prices.price_three_shot}
                  onChange={(e) => updatePrice('price_three_shot', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">
                  Full night (Rs)
                </label>
                <input
                  name="price_full_night"
                  type="number"
                  min={0}
                  step={1}
                  value={prices.price_full_night}
                  onChange={(e) => updatePrice('price_full_night', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Images"
            description="Choose a strong cover photo first, then add supporting gallery images."
            icon={ImagePlus}
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">
                  Main image {isEdit && p?.main_image_url ? '(leave empty to keep current)' : ''}
                </label>
                <button
                  type="button"
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsMainDragOver(true);
                  }}
                  onDragLeave={() => setIsMainDragOver(false)}
                  onDrop={onMainDrop}
                  onClick={() => mainInputRef.current?.click()}
                  className={`mb-3 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-8 text-center transition ${
                    isMainDragOver
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-zinc-700 bg-zinc-950/70 hover:border-zinc-500 hover:bg-zinc-950'
                  }`}
                >
                  <Camera className="mb-3 h-7 w-7 text-amber-300" />
                  <p className="text-sm font-medium text-white">Drag and drop the cover image here</p>
                  <p className="mt-1 text-xs text-zinc-500">or click to browse from your device</p>
                </button>
                <input
                  ref={mainInputRef}
                  name="main_image"
                  type="file"
                  accept="image/*"
                  onChange={onMainImageChange}
                  className="sr-only"
                />
                {isEdit && p?.main_image_url ? (
                  <input type="hidden" name="main_image_url" value={p.main_image_url} />
                ) : null}
                <p className="mt-2 text-xs text-zinc-500">
                  Portrait images work best for the listing card and profile hero.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-400">
                  Gallery images
                </label>
                <button
                  type="button"
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsGalleryDragOver(true);
                  }}
                  onDragLeave={() => setIsGalleryDragOver(false)}
                  onDrop={onGalleryDrop}
                  onClick={() => galleryInputRef.current?.click()}
                  className={`mb-3 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-8 text-center transition ${
                    isGalleryDragOver
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-zinc-700 bg-zinc-950/70 hover:border-zinc-500 hover:bg-zinc-950'
                  }`}
                >
                  <ImagePlus className="mb-3 h-7 w-7 text-amber-300" />
                  <p className="text-sm font-medium text-white">Drop gallery images here</p>
                  <p className="mt-1 text-xs text-zinc-500">You can drop multiple image files at once</p>
                </button>
                <input
                  ref={galleryInputRef}
                  name="gallery"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onGalleryChange}
                  className="sr-only"
                />
                <p className="mt-2 text-xs text-zinc-500">
                  Add extra angles or close-up shots to make the profile feel complete.
                </p>
              </div>

              {galleryPreviewUrls.length > 0 ? (
                <div>
                  <p className="mb-2 text-xs font-medium text-zinc-400">Selected gallery preview</p>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {galleryPreviewUrls.slice(0, 8).map((url, index) => (
                      <div
                        key={`${url}-${index}`}
                        className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950"
                      >
                        <img
                          src={url}
                          alt={`Gallery preview ${index + 1}`}
                          className="aspect-square w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {isEdit ? (
                <div>
                  <label
                    htmlFor="pf-gallery-text"
                    className="mb-1 block text-xs font-medium text-zinc-400"
                  >
                    Gallery image URLs (one per line; edit or remove)
                  </label>
                  <textarea
                    id="pf-gallery-text"
                    name="gallery_urls_text"
                    rows={4}
                    value={galleryText}
                    onChange={(e) => setGalleryText(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-200"
                  />
                </div>
              ) : null}
            </div>
          </SectionCard>

          {isEdit ? (
            <SectionCard
              title="SEO & Description"
              description="Polish the snippet that appears in search and the short text used across the site."
              icon={Sparkles}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <p className="text-sm text-zinc-300">
                    Refresh the SEO copy from the current name, location, and age.
                  </p>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={onRegenerate}
                    className="rounded-lg border border-amber-600/50 bg-amber-950/40 px-3 py-1.5 text-xs font-medium text-amber-200 hover:bg-amber-950/70 disabled:opacity-50"
                  >
                    Regenerate
                  </button>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <label htmlFor="pf-short" className="block text-xs font-medium text-zinc-400">
                      Short description
                    </label>
                    <span className="text-xs text-zinc-500">{shortDesc.length} chars</span>
                  </div>
                  <textarea
                    id="pf-short"
                    name="short_description"
                    rows={3}
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <label htmlFor="pf-mt" className="block text-xs font-medium text-zinc-400">
                      Meta title
                    </label>
                    <span className="text-xs text-zinc-500">{metaTitle.length} chars</span>
                  </div>
                  <input
                    id="pf-mt"
                    name="meta_title"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <label htmlFor="pf-md" className="block text-xs font-medium text-zinc-400">
                      Meta description
                    </label>
                    <span className="text-xs text-zinc-500">{metaDesc.length} chars</span>
                  </div>
                  <textarea
                    id="pf-md"
                    name="meta_description"
                    rows={3}
                    value={metaDesc}
                    onChange={(e) => setMetaDesc(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label htmlFor="pf-mtags" className="mb-1 block text-xs font-medium text-zinc-400">
                    Meta tags (comma-separated)
                  </label>
                  <input
                    id="pf-mtags"
                    name="meta_tags"
                    value={metaTags}
                    onChange={(e) => setMetaTags(e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>
            </SectionCard>
          ) : null}
        </div>

        <aside className="space-y-4 xl:sticky xl:top-6 xl:self-start">
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-zinc-950 to-zinc-950 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              Live preview
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              This card helps you judge the visual balance before saving.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90">
            <div className="relative aspect-[4/5] bg-zinc-900">
              {mainPreviewUrl ? (
                <img src={mainPreviewUrl} alt={name || 'Profile preview'} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-600">
                  <Camera className="h-8 w-8" />
                  <p className="text-sm">Main image preview</p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 pb-4 pt-12">
                <p className="text-lg font-bold text-white">{name.trim() || 'New profile'}</p>
                <p className="text-xs text-zinc-300">
                  {age} · {location}
                </p>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-amber-300" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <IndianRupee className="h-3.5 w-3.5 text-amber-300" />
                <span>From {formatInr(prices.price_one_shot)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MessageCircle className="h-3.5 w-3.5 text-amber-300" />
                <span className="truncate">{whatsappHref(whatsapp)}</span>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
                <p className="line-clamp-3 text-sm text-zinc-300">
                  {shortDesc.trim() || 'Add a short description after saving to strengthen the public profile card.'}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 text-xs text-zinc-500">
                Public URL preview: <span className="font-mono text-zinc-300">{previewHref}</span>
              </div>
            </div>
          </div>

          {galleryPreviewUrls.length > 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
              <p className="mb-3 text-sm font-medium text-white">Gallery thumbnails</p>
              <div className="grid grid-cols-3 gap-2">
                {galleryPreviewUrls.slice(0, 6).map((url, index) => (
                  <img
                    key={`${url}-aside-${index}`}
                    src={url}
                    alt={`Gallery thumbnail ${index + 1}`}
                    className="aspect-square w-full rounded-lg border border-zinc-800 object-cover"
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-300" />
              <p className="text-sm font-medium text-white">SEO snippet preview</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-white px-4 py-3">
              <p className="truncate text-xs text-green-700">{seoUrl}</p>
              <p className="mt-1 line-clamp-2 text-lg leading-6 text-blue-700">{seoTitle}</p>
              <p className="mt-1 line-clamp-3 text-sm leading-5 text-zinc-600">{seoDescription}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1">
                Title {seoTitle.length}
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1">
                Description {seoDescription.length}
              </span>
            </div>
          </div>
        </aside>
      </div>

      {error ? (
        <p className="rounded-lg bg-red-950/80 px-3 py-2 text-sm text-red-200" role="alert">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="rounded-lg bg-emerald-950/80 px-3 py-2 text-sm text-emerald-200">{success}</p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-black hover:bg-amber-500 disabled:opacity-50"
        >
          {pending ? 'Saving…' : isEdit ? 'Save changes' : 'Create profile'}
        </button>
        <Link
          href="/admin/profiles"
          className="rounded-lg border border-zinc-600 px-5 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
