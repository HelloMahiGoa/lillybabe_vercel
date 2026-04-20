'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Props = {
  name: string;
  images: string[];
};

export function ProfilePhotoHighlightsLightbox({ name, images }: Props) {
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

  if (images.length === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((url, i) => (
          <li key={`${url}-${i}`}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="relative block aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <Image
                src={url}
                alt={`${name} gallery ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] bg-black/95" role="dialog" aria-modal="true">
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
                onClick={() =>
                  setActiveIndex((current) =>
                    current === null ? current : current === 0 ? images.length - 1 : current - 1
                  )
                }
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-white/10 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) =>
                    current === null ? current : current === images.length - 1 ? 0 : current + 1
                  )
                }
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
        </div>
      ) : null}
    </>
  );
}
