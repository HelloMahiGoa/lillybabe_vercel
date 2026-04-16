'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Props = {
  name: string;
  images: string[];
  heroOverlay?: ReactNode;
};

export function ProfileGalleryLightbox({ name, images, heroOverlay }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === 0 ? images.length - 1 : current - 1;
        });
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((current) => {
          if (current === null) return current;
          return current === images.length - 1 ? 0 : current + 1;
        });
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, images.length]);

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 text-left sm:aspect-[5/6] lg:aspect-[4/5]"
        >
          <Image
            src={images[0]}
            alt={name}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 66vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          {heroOverlay ? <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">{heroOverlay}</div> : null}
          <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs text-white">
            Tap to view fullscreen
          </div>
        </button>

        {images.length > 1 ? (
          <ul className="grid grid-cols-4 gap-3">
            {images.slice(1, 5).map((url, i) => (
              <li key={`${url}-${i}`}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i + 1)}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
                >
                  <Image
                    src={url}
                    alt={`${name} preview ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 180px"
                    className="object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} gallery`}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-white/10"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-white/10 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-white/10 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <div className="flex h-full items-center justify-center px-4 py-16 sm:px-8">
            <div className="relative h-full max-h-[85vh] w-full max-w-5xl">
              <Image
                src={images[activeIndex]}
                alt={`${name} gallery ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-4 px-4 sm:bottom-6">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-zinc-200 backdrop-blur">
              <span>{name}</span>
              <span>
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
