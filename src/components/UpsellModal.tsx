import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { upsellConfig } from '../data/protocols';
import {
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  ExternalLink,
  Gift,
  X
} from 'lucide-react';

export const UpsellModal: React.FC = () => {
  const {
    isUpsellOpen,
    closeUpsellModal,
    upsellTargetModuleId,
    deliverables,
    unlockEntitlement,
    isEn,
    t
  } = useApp();

  const [simulating, setSimulating] = useState(false);

  if (!isUpsellOpen || !upsellTargetModuleId) return null;

  const targetItem = deliverables.find(d => d.id === upsellTargetModuleId);
  const cfg = upsellConfig[upsellTargetModuleId];
  const title = cfg?.title || targetItem?.title || 'Protocolo Especial';
  const headline = cfg?.tagline || cfg?.subtitle || 'Desbloqueie o Acesso Imediato ao Protocolo Completo';
  const regularPrice = cfg?.originalPrice || 'R$ 97,00';
  const offerPrice = cfg?.price || 'R$ 27,90';
  const checkoutUrl = cfg?.checkoutUrl || 'https://pay.kiwify.com.br/kYdtxLl';
  const salesPageUrl = cfg?.salesPageUrl || 'https://kiwify.app/t3u1lYm';
  const benefits = cfg?.fullBenefits || [
    'Acesso vitalício ao guia digital e videoaulas',
    'Calculadora automática de dosagem por peso',
    'Download do E-book oficial em PDF de alta resolução',
    'Garantia incondicional de 7 dias ou seu dinheiro de volta'
  ];

  const handleSimulateUnlock = () => {
    setSimulating(true);
    setTimeout(() => {
      unlockEntitlement(upsellTargetModuleId);
      setSimulating(false);
      closeUpsellModal();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        id="upsell-modal-container"
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80 animate-scale-up"
      >
        {/* Top Header Badge */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 p-6 text-white text-center relative overflow-hidden">
          <button
            id="btn-close-upsell-modal"
            onClick={closeUpsellModal}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-amber-200 mb-2 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            {t.modals.upsellOfferBadge}
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
            {headline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Pricing Box */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 line-through font-bold block">
                {isEn ? `From ${regularPrice}` : `De ${regularPrice}`}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-slate-600">{isEn ? "For only" : "Por apenas"}</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-700">
                  {offerPrice}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 block font-medium">
                {isEn ? "One-time payment • No recurring fees" : "Pagamento único • Sem mensalidades"}
              </span>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 flex items-center justify-center text-2xl shadow-inner shrink-0">
              <Gift className="w-6 h-6" />
            </div>
          </div>

          {/* Included Benefits List */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
              {isEn ? "What you receive today:" : "O que você recebe hoje:"}
            </h4>
            <div className="space-y-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isEn ? "100% unconditional 7-day money-back guarantee." : "Garantia incondicional de 7 dias com devolução integral."}</span>
          </div>

          {/* Buttons: Official Checkout CTA & Presentation Page */}
          <div className="space-y-2.5 pt-2">
            <a
              id="link-official-checkout"
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black py-3.5 px-4 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.01] text-center cursor-pointer"
            >
              <span>{isEn ? `Unlock at Official Checkout for ${offerPrice}` : `Desbloquear no Checkout Kiwify por ${offerPrice}`}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {salesPageUrl && (
              <a
                id="link-official-sales-page"
                href={salesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <span>{isEn ? "View Details on Presentation Page" : "Conhecer todos os detalhes na Página Oficial"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
