import React from 'react';
import { useApp } from '../context/AppContext';
import { upsellConfig } from '../data/protocols';
import {
  Lock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  X
} from 'lucide-react';

export const UpsellModal: React.FC = () => {
  const {
    activeModal,
    setActiveModal,
    currentUpsell,
    deliverables,
    isEn
  } = useApp();

  if (activeModal !== 'upsell' || !currentUpsell) return null;

  const targetDeliverable = deliverables.find(
    d => d.id === currentUpsell.id || d.id === currentUpsell.key
  );

  const title = isEn
    ? currentUpsell.id === 'cao-blindado'
      ? 'Armored Dog Protocol'
      : currentUpsell.id === 'anticoceira'
      ? 'Canine Anti-Itch Protocol'
      : currentUpsell.id === 'mobilidade'
      ? 'Canine Mobility Protocol'
      : currentUpsell.title
    : currentUpsell.title;

  const subtitle = isEn
    ? currentUpsell.id === 'cao-blindado'
      ? 'Longevity Master Combo'
      : currentUpsell.id === 'anticoceira'
      ? 'Instant Relief with Gentian Violet 1%'
      : currentUpsell.id === 'mobilidade'
      ? 'Golden Paste Natural Recipe'
      : currentUpsell.subtitle
    : currentUpsell.subtitle;

  const offerPrice = currentUpsell.price || 'R$ 14,90';
  const regularPrice = currentUpsell.originalPrice || 'R$ 97,00';
  const checkoutUrl = currentUpsell.checkoutUrl || 'https://pay.kiwify.com.br/OAXrNvm';
  const salesPageUrl = currentUpsell.salesPageUrl || 'https://pay.kiwify.com.br/OAXrNvm';

  const benefits = isEn
    ? currentUpsell.id === 'cao-blindado'
      ? [
          'Recipe 1: Well-Nourished Canine (Maximum immunity & anti-inflammatory)',
          'Recipe 2: Flexible Joints (Collagen matrix & cartilage relief)',
          'Recipe 3: Natural Calming (Anxiety, noise phobia & stress reduction)',
          'Recipe 4: Odor & Gut Control (Reduced gas, firm stools & fresh breath)',
          'Recipe 5: Healthy Weight Control (Satiety & balanced metabolic rate)',
          'Smart proportional dosage calculator by body weight (kg & lb)',
          'Download complete official illustrated PDF Guide'
        ]
      : currentUpsell.id === 'anticoceira'
      ? [
          'Safe dilution: 15 drops of Gentian Violet 1% per 500ml dog shampoo',
          'Step-by-step application for instant relief on the first bath',
          'Safety protocol for open wounds, red spots, or skin itching',
          'Weekly preventative maintenance schedule',
          'Official High-Resolution PDF Guide Download'
        ]
      : currentUpsell.id === 'mobilidade'
      ? [
          'Golden Paste Recipe (virgin coconut oil + up to 1 spoon turmeric + pepper)',
          'Potent anti-inflammatory compounds that soothe from within',
          '2 Fast preparation methods: raw blend or gently heated version',
          'Weekly dosing schedule (3x per week)',
          'Smart dosage calculator by weight and dog breed size',
          'Download full official illustrated PDF Guide'
        ]
      : currentUpsell.fullBenefits
    : currentUpsell.fullBenefits;

  const closeModal = () => setActiveModal(null);

  const handleUnlockClick = () => {
    // Open the official checkout or sales page in a new window
    window.open(salesPageUrl || checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        id="upsell-modal-container"
        className="relative w-full max-w-xl bg-gradient-to-b from-[#0c2f2b] to-[#08201d] rounded-3xl overflow-hidden shadow-2xl border border-teal-500/30 text-white animate-scale-up"
      >
        {/* Top Close Button */}
        <button
          id="btn-close-upsell-modal"
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pt-7 px-6 pb-2 text-center">
          {/* Gold Sparkle Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {isEn ? 'PREMIUM CONTENT' : 'CONTEÚDO PREMIUM'}
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
            {title}
          </h3>

          <p className="text-sm font-semibold text-teal-300 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* Lock Alert Callout Box */}
          <div className="bg-[#051a17]/90 rounded-2xl p-4 border border-teal-600/30 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {isEn
                ? 'This exclusive content is not yet unlocked on your account. Unlock it now for full, lifetime VIP access.'
                : 'Este conteúdo exclusivo ainda não está desbloqueado em sua conta. Desbloqueie agora para acesso VIP vitalício completo.'}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isEn
              ? currentUpsell.id === 'cao-blindado'
                ? 'The ultimate combo with 5 functional homemade supplement recipes, intelligent weight-based dosing calculator, and 5 illustrated downloadable e-books.'
                : currentUpsell.id === 'anticoceira'
                ? 'Antiseptic and antifungal topical formula with safe Gentian Violet 1% dilution for weekly baths and fast itch relief.'
                : currentUpsell.id === 'mobilidade'
                ? 'Official and safe Golden Paste recipe with pure culinary turmeric and virgin coconut oil with digital reader and PDF guide.'
                : currentUpsell.shortDescription
              : currentUpsell.shortDescription}
          </p>

          {/* What You Unlock Section */}
          <div className="space-y-2.5 pt-1">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">
              {isEn ? 'WHAT YOU UNLOCK RIGHT NOW:' : 'O QUE VOCÊ LIBERA AGORA:'}
            </h4>

            <div className="space-y-2 bg-black/20 p-3.5 rounded-2xl border border-white/5">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Highlight */}
          <div className="flex items-center justify-between bg-teal-950/60 p-3.5 rounded-2xl border border-teal-500/20">
            <div>
              <span className="text-xs text-slate-400 line-through font-bold block">
                {isEn ? `Original ${regularPrice}` : `De ${regularPrice}`}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs text-emerald-400 font-bold uppercase">
                  {isEn ? 'Today for only' : 'Hoje por apenas'}
                </span>
                <span className="text-2xl font-black text-white">
                  {offerPrice}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-teal-300 bg-teal-900/60 border border-teal-500/30 px-3 py-1.5 rounded-xl">
              {isEn ? 'Lifetime Access' : 'Acesso Vitalício'}
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 pt-3 bg-black/30 border-t border-teal-800/40 flex items-center justify-between gap-3">
          <button
            id="btn-not-now"
            onClick={closeModal}
            className="text-xs sm:text-sm font-bold text-slate-400 hover:text-white px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            {isEn ? 'Not now' : 'Não agora'}
          </button>

          <button
            id="btn-unlock-now"
            onClick={handleUnlockClick}
            className="bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>{isEn ? 'UNLOCK NOW' : 'DESBLOQUEAR AGORA'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
