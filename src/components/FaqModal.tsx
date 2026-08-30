import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getFrequentQuestions } from '../data/bariatricData';
import { HelpCircle, X, ChevronDown, ChevronUp, ShieldCheck, Mail } from 'lucide-react';

export const FaqModal: React.FC = () => {
  const { activeModal, setActiveModal, language, t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (activeModal !== 'support') return null;

  const faqs = getFrequentQuestions(language);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-black">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {t.faqModal.title}
              </h3>
              <p className="text-xs text-amber-300">
                {t.faqModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* FAQ list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 custom-scrollbar">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-white hover:text-rose-300 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-amber-400" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 bg-slate-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {/* Guarantee & Support box */}
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-950 border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.faqModal.guaranteeTitle}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.faqModal.guaranteeText}
            </p>
          </div>
        </div>

        {/* Footer with Contact button */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
          <a
            href="mailto:soporte@bienestarhoy.fun"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.faqModal.supportEmail}: soporte@bienestarhoy.fun</span>
          </a>
        </div>

      </div>
    </div>
  );
};
