import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  mockupPremium: string;
  basicCheckoutUrl: string;
  promoCheckoutUrl: string;
}

export default function UpsellModal({
  isOpen,
  onClose,
  mockupPremium,
  basicCheckoutUrl,
  promoCheckoutUrl,
}: UpsellModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Subtle backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs select-none animate-none"
          />

          {/* Ultra Mini Upsell Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="relative bg-white w-full max-w-[340px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#E9B21C] z-10 p-5 flex flex-col text-center"
          >
            {/* Direct Close Button in the corner */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100 transition-all cursor-pointer"
              aria-label="Fechar"
              id="close-upsell-modal-top"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Micro Image Visualizer */}
            <div className="mx-auto select-none pt-2 pb-1.5 animate-none">
              <img 
                src={mockupPremium} 
                alt="Completo" 
                loading="lazy"
                width={110}
                height={110}
                className="w-24 h-24 object-contain drop-shadow"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Direct Value Offer */}
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-display">
                <Sparkles className="w-3 h-3 fill-orange-600 animate-pulse text-orange-600" />
                OFERTA ESPECIAL
              </span>
              <h3 className="text-lg font-black text-neutral-800 tracking-tight leading-tight">
                Levar o Kit Completo?
              </h3>
              <p className="text-[#1e3a8a] text-xs sm:text-[13px] font-bold max-w-[250px] mx-auto leading-relaxed">
                Garanta todas as decorações, brincadeiras + 5 bônus adicionais.
              </p>
            </div>

            {/* Clean Pricing Comparison */}
            <div className="my-4 bg-neutral-50 rounded-2xl py-3 border border-neutral-100 flex items-center justify-center gap-1.5 select-none">
              <span className="text-[10px] text-neutral-400 line-through font-extrabold uppercase">
                R$ 27,90
              </span>
              <span className="text-xs font-bold text-neutral-500 font-display">por apenas</span>
              <span className="text-2xl font-black text-red-600 tracking-tight font-display">
                R$ 17,90
              </span>
            </div>

            {/* Ultra-Straight Actions using Native Anchor Links */}
            <div className="space-y-2.5">
              <a
                href={promoCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                id="accept-upsell-upgrade-cta"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black text-sm py-3 px-5 rounded-full shadow-md hover:scale-[1.01] transition-all uppercase tracking-wider font-display cursor-pointer"
              >
                SIM, QUERO O COMPLETO
              </a>

              <a
                href={basicCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                id="decline-upsell-keep-basic"
                className="inline-flex items-center justify-center w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-bold text-xs py-2.5 px-5 rounded-full transition-colors uppercase tracking-wide cursor-pointer"
              >
                Não, prefiro o Básico por R$ 10,00
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
