'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface ProjectSlideshowProps {
  images: string[];
  title: string;
  captions?: string[];
  category?: string;
}

export function ProjectSlideshow({ images, title, captions, category }: ProjectSlideshowProps) {
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
      <div className="w-full aspect-video rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-500 shadow-sm p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-slate-400">
          <CheckCircle2 size={32} />
        </div>
        {category && <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">{category}</span>}
        <h3 className="text-3xl font-bold text-slate-700">{title}</h3>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
      <Image
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="object-cover"
        fill
        priority
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
