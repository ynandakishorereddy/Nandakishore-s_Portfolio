'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSlideshowProps {
  images: string[];
  title: string;
  captions?: string[];
}

export function ProjectSlideshow({ images, title, captions }: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-slate-900 border border-slate-200 flex items-center justify-center text-slate-500 shadow-lg">
        No images available
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Counter Pill */}
      <div className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
        {/* Caption */}
      {captions && captions[currentIndex] && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-xl text-center max-w-[80%] shadow-lg">
          {captions[currentIndex]}
        </div>
      )}
    </div>
  );
}
