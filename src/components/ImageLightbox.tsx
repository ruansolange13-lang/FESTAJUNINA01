import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ActivityImage } from '../types';

interface ImageLightboxProps {
  images: ActivityImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  if (currentIndex === null) return null;
  const currentImage = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-550 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-6 right-6 z-560 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95 cursor-pointer"
          onClick={onClose}
          aria-label="FECHAR LIGHTBOX"
        >
          <X size={24} />
        </motion.button>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-560 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95 cursor-pointer"
          aria-label="ANTERIOR"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-560 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 active:scale-95 cursor-pointer"
          aria-label="PRÓXIMO"
        >
          <ChevronRight size={28} />
        </button>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative max-w-4xl w-full flex flex-col items-center bg-zinc-900/50 rounded-3xl overflow-hidden p-3 border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black">
            <img 
              src={currentImage.src} 
              alt={currentImage.title}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[11px] text-white/80 font-mono tracking-wider uppercase flex items-center gap-1.5 border border-white/5">
              <ZoomIn size={12} className="text-[#f1c40f]" /> VISUALIZAÇÃO AMPLIADA
            </div>
          </div>
          
          <div className="w-full pt-4 pb-2 px-4 text-center">
            <h4 className="text-xl font-bold text-[#f1c40f] tracking-tight font-display">{currentImage.title}</h4>
            <p className="text-neutral-400 text-sm mt-1 leading-relaxed max-w-xl mx-auto">{currentImage.description}</p>
          </div>
          
          <div className="text-[11px] font-mono text-neutral-500 mt-2 bg-neutral-950/40 px-3 py-1 rounded-full">
            IMAGEM {currentIndex + 1} DE {images.length}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
