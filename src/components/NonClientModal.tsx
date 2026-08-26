import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, KeyRound, CheckCircle2, ArrowRight, ShieldCheck, X } from 'lucide-react';

export const NonClientModal: React.FC = () => {
  const { isNonClientOpen, closeNonClientModal, setUserEmail, t } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isNonClientOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setUserEmail(emailInput.trim());
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeNonClientModal();
      }, 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        id="non-client-modal-container"
        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-teal-200 animate-scale-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#00c5b3] p-6 text-white text-center relative">
          <button
            id="btn-close-non-client-modal"
            onClick={closeNonClientModal}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mx-auto mb-2 shadow-inner border border-white/20">
            🐾
          </div>

          <h3 className="text-xl font-black text-white">
            {t.modals.nonClientTitle}
          </h3>
          <p className="text-xs text-teal-100 mt-1 font-medium">
            {t.modals.nonClientSubtitle}
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-sm font-black text-emerald-950">Acesso Local Validado!</h4>
              <p className="text-xs text-emerald-800">Carregando seus protocolos...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  E-mail utilizado na compra (Kiwify / Hotmart):
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    placeholder={t.modals.nonClientPlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0f4c5c] hover:bg-teal-700 text-white font-black py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>{t.modals.nonClientVerifyBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="pt-2 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-2">
              Ainda não adquiriu nenhum protocolo?
            </p>
            <a
              href="https://pay.kiwify.com.br/sample"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-black text-teal-700 hover:text-teal-900 underline block"
            >
              {t.modals.nonClientBuyNow}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
