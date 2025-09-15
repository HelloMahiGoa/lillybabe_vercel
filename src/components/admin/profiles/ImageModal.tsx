'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageModal({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onPrevious, 
  onNext 
}: ImageModalProps) {
  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="relative">
                  {/* Close button */}
                  <button
                    type="button"
                    className="absolute top-4 right-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  {/* Navigation buttons */}
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
                        onClick={onPrevious}
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </button>
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none"
                        onClick={onNext}
                        aria-label="Next image"
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </button>
                    </>
                  )}

                  {/* Image */}
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={currentImage}
                      alt={`Image ${currentIndex + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Image counter */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black bg-opacity-50 px-3 py-1 text-sm text-white">
                      {currentIndex + 1} / {images.length}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
