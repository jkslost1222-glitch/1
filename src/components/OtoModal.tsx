import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ShieldCheck, ArrowRight, X, Flame, Clock, CheckCircle2, Gift } from 'lucide-react';

interface OtoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OtoModal: React.FC<OtoModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useApp();
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes countdown

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isPt = language === 'pt';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/60 my-6">
        {/* Top Urgency Header */}
        <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-400 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-rose-600 animate-bounce" />
              {isPt ? 'OFERTA ÚNICA DE BOAS-VINDAS • 50% OFF' : 'EXCLUSIVE ONE-TIME OFFER • 50% OFF'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {isPt ? '🎉 Parabéns! Seu Acesso Foi Liberado!' : '🎉 Congratulations! Your Access is Unlocked!'}
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 mt-1 font-medium leading-relaxed">
            {isPt
              ? 'Aproveite esta condição única exclusiva desta página para levar nosso Combo Especial de Tratamento:'
              : 'Take advantage of this one-time exclusive page offer to add our Special Treatment Combo:'}
          </p>

          {/* Countdown timer */}
          <div className="mt-3 inline-flex items-center gap-2 bg-black/30 backdrop-blur-xs px-3 py-1 rounded-xl text-xs font-black text-yellow-300 border border-white/20">
            <Clock className="w-3.5 h-3.5" />
            <span>
              {isPt ? 'Oferta expira em:' : 'Offer expires in:'}{' '}
              <span className="text-white">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Offer Package Spotlight */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-xl shadow-xs">
                  🎁
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    {isPt ? 'Combo Duplo: Coceira Zero + Xixi no Lugar Certo' : 'Double Combo: Zero-Itch + Potty Spot Training'}
                  </h3>
                  <span className="text-xs font-bold text-amber-700">
                    {isPt ? '2 Protocolos Completos em 1 Único Clique' : '2 Complete Protocols in 1 Single Click'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-amber-200/60 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>{isPt ? 'Protocolo Coceira Zero:' : 'Zero-Itch Protocol:'}</strong> {isPt ? 'Banho Antisséptico de Violeta Genciana 1% + Spray Calmante Tópico.' : 'Antiseptic Violet 1% Bath + Calming Topical Spray.'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>{isPt ? 'Xixi e Cocô no Lugar Certo:' : 'Potty Training:'}</strong> {isPt ? 'Spray Atrativo de Capim-Limão + Spray Bloqueador Cítrico.' : 'Lemongrass Scent Attractant + Citrus Deterrent Spray.'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isPt ? 'Calculadoras automáticas de diluição e dosagem por peso' : 'Automatic weight dilution and dosage calculators'}</span>
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 line-through block">
                {isPt ? 'De R$ 97,00' : 'From $47.00'}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  {isPt ? 'R$ 19,90' : '$9.90'}
                </span>
                <span className="text-[11px] text-slate-300 font-bold">
                  {isPt ? '(Pagamento Único)' : '(One-time payment)'}
                </span>
              </div>
            </div>

            <span className="bg-emerald-500 text-emerald-950 font-black text-xs px-3 py-1.5 rounded-xl shadow-xs">
              50% DE DESCONTO
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <a
              id="btn-oto-accept"
              href="https://pay.kiwify.com.br/kYdtxLl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-teal-700/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
            >
              <span>{isPt ? 'SIM! QUERO APROVEITAR COM 50% DE DESCONTO' : 'YES! CLAIM MY 50% DISCOUNT NOW'}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              id="btn-oto-decline"
              onClick={onClose}
              className="w-full text-center text-xs text-slate-400 hover:text-slate-600 font-bold py-2 transition-colors cursor-pointer"
            >
              {isPt ? 'Não, obrigado. Quero acessar apenas o meu pedido principal.' : 'No thanks, take me to my main purchase.'}
            </button>
          </div>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-bold text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isPt ? 'Garantia Blindada de 7 Dias • Acesso Imediato no seu E-mail' : '7-Day Money-Back Guarantee • Instant Access'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
