import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

interface PlanCardProps {
  plan: PricingPlan;
  key?: React.Key;
  onBasicClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function PlanCard({ plan, onBasicClick }: PlanCardProps) {
  return (
    <div 
      className={`relative bg-white rounded-[2rem] text-center transition-all duration-300 hover:-translate-y-1 ${
        plan.isPopular 
          ? 'shadow-[0_30px_80px_-30px_rgba(231,76,60,0.45)] border-4 border-[#1e3a8a] p-6 sm:p-8 md:p-10 pt-11 md:pt-12 mt-5 md:mt-2' 
          : 'shadow-xl border-2 border-neutral-200 p-6 sm:p-8 md:p-10 mt-5'
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e74c3c] text-white px-5 py-2 rounded-full font-extrabold text-xs sm:text-sm shadow-lg whitespace-nowrap z-10 ring-4 ring-white animate-pulse font-display tracking-wider">
          {plan.badge}
        </span>
      )}

      {/* Plan Details */}
      <h3 className={`text-xl sm:text-2xl font-extrabold mb-2 font-display ${plan.isPopular ? 'text-[#d35400]' : 'text-[#5d4037]'}`}>
        {plan.name}
      </h3>
      <p className="text-sm text-[#5d4037] mb-5 font-semibold">
        {plan.tagline}
      </p>

      {/* Mockup image */}
      {plan.mockupSrc && (
        <div className="relative mb-6 select-none flex justify-center">
          <img 
            src={plan.mockupSrc} 
            alt={plan.name} 
            loading="lazy"
            decoding="async"
            width={plan.isPopular ? 240 : 208}
            height={plan.isPopular ? 208 : 176}
            referrerPolicy="no-referrer"
            className={`mx-auto drop-shadow-xl transition-transform duration-500 hover:scale-[1.04] object-contain ${
              plan.isPopular ? 'w-48 sm:w-56 md:w-60 h-44 sm:h-52' : 'w-40 sm:w-48 md:w-52 h-36 sm:h-44'
            }`}
          />
        </div>
      )}

      {/* Pricing label */}
      <div className="mb-1.5 text-sm text-[#5d4037] font-semibold">
        <span className="line-through opacity-80">{plan.regularPrice}</span>
      </div>
      
      <div className="flex items-end justify-center gap-1.5 mb-1">
        <span className="text-lg font-extrabold text-[#5d4037] mb-1.5 font-display">R$</span>
        <span 
          className={`font-black leading-none tracking-tight font-display ${
            plan.isPopular ? 'text-6xl sm:text-7xl text-[#e74c3c]' : 'text-5xl sm:text-6xl text-[#d35400]'
          }`}
        >
          {plan.currentPrice}
        </span>
      </div>
      <p className="text-xs text-[#5d4037] mb-6 font-medium">
        {plan.paymentDetails}
      </p>

      {/* CTA Trigger Button */}
      <a 
        href={plan.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={plan.id === 'basico' ? onBasicClick : undefined}
        className={`inline-flex items-center justify-center gap-2 w-full font-black text-base sm:text-lg px-6 py-4.5 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer font-display uppercase tracking-wide ${
          plan.isPopular 
            ? 'bg-gradient-to-r from-[#E9B21C] to-[#d49f13] text-neutral-950 hover:from-[#d49f13] hover:to-[#b58509] shadow-[0_15px_35px_-5px_rgba(233,178,28,0.5)] ring-4 ring-[#E9B21C]/40 animate-pulse-cta' 
            : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-[0_10px_25px_-5px_rgba(230,126,34,0.3)]'
        }`}
      >
        ADQUIRIR ESSA OFERTA
      </a>
      
      <p className="mt-3 text-xs text-[#5d4037] font-semibold">
        ⚡ Acesso imediato após a confirmação do pagamento.
      </p>

      {/* Features Divider */}
      <div className="my-6 border-b border-[#f1c40f]/20"></div>

      {/* Features List */}
      <ul className="text-left text-sm text-[#2d1e15] space-y-2.5 max-w-xs mx-auto">
        {plan.features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2.5 leading-snug">
            <span className="text-emerald-500 font-extrabold scale-110 shrink-0">
              {feat.included ? '✓' : '✗'}
            </span>
            <span className={`text-[13px] sm:text-sm font-semibold ${feat.included ? 'text-[#2d1e15]' : 'text-neutral-400 line-through'}`}>
              {feat.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
