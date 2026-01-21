import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Github, Youtube, ExternalLink } from 'lucide-react';

export default function Lightbox({ image, images, onClose, onNext, onPrevious }) {
  if (!image) return null;

  const hasLinks = image.links && Object.keys(image.links).length > 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <div className="flex items-center max-w-6xl w-full h-full">
        {/* Image container */}
        <div className="flex-1 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Metadata panel */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 p-6 border-t border-gray-200 dark:border-zinc-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 mb-2">{image.description}</p>
                <p className="text-sm text-gray-500 dark:text-zinc-500">{image.time}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                image.category === 'work' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
              }`}>
                {image.category}
              </span>
            </div>

            {/* Links */}
            {hasLinks && (
              <div className="flex gap-4 flex-wrap">
                {image.links.github && (
                  <a 
                    href={image.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {image.links.demo && (
                  <a 
                    href={image.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  >
                    <Youtube size={16} /> Demo
                  </a>
                )}
                {image.links.website && (
                  <a 
                    href={image.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <ExternalLink size={16} /> Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}