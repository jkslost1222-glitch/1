import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, KeyRound, CheckCircle2, ArrowRight, ShieldCheck, X, Sparkles, ExternalLink, UserCheck, HelpCircle } from 'lucide-react';

export const NonClientModal: React.FC = () => {
  const { isNonClientOpen, closeNonClientModal, setUserEmail, user, login, logout, unlockAll, t } = useApp();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [emailInput, setEmailInput] = useState(user?.email || '');
  const [submitted, setSubmitted] = useState(false);

  if (!isNonClientOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      login(emailInput.trim());
      unlockAll();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeNonClientModal();
      }, 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div
        id="auth-modal-container"
        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-teal-200 animate-scale-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#00c5b3] p-6 text-white text-center relative">
          <button
            id="btn-close-auth-modal"
            onClick={closeNonClientModal}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mx-auto mb-2 shadow-inner border border-white/20">
            🐾
          </div>

          <h3 className="text-xl font-black text-white">
            Área do Aluno & Cadastro
          </h3>
          <p className="text-xs text-teal-100 mt-1 font-medium">
            Portal Oficial Adeus Otite & Cão Blindado
          </p>

          {/* Navigation Tabs */}
          <div className="flex bg-teal-950/40 p-1 rounded-2xl mt-4 border border-white/10">
            <button
              id="tab-btn-login"
              onClick={() => setTab('login')}
              className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                tab === 'login'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'text-teal-100 hover:text-white'
              }`}
            >
              🔑 Já sou Aluno / Entrar
            </button>
            <button
              id="tab-btn-register"
              onClick={() => setTab('register')}
              className={`flex-1 py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                tab === 'register'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'text-teal-100 hover:text-white'
              }`}
            >
              🛒 Novo Aluno / Cadastro
            </button>
          </div>
        </div>

        {/* Tab 1: Entrar com E-mail */}
        {tab === 'login' && (
          <div className="p-6 space-y-4">
            {user && (
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-950">Conectado como:</p>
                    <p className="text-[11px] text-teal-700 font-medium truncate max-w-[170px]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEmailInput('');
                    logout();
                  }}
                  className="text-[11px] font-bold text-red-600 hover:underline cursor-pointer"
                >
                  Trocar conta
                </button>
              </div>
            )}

            {submitted ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-black text-emerald-950">Acesso Validado com Sucesso!</h4>
                <p className="text-xs text-emerald-800">Carregando seus protocolos e videoaulas...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Digite o e-mail cadastrado na compra (Kiwify):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="exemplo@gmail.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    Seus dados e acessos ficam salvos de forma segura no dispositivo.
                  </p>
                </div>

                <button
                  id="btn-submit-login"
                  type="submit"
                  className="w-full bg-[#0f4c5c] hover:bg-teal-800 text-white font-black py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Acessar Meus Protocolos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-slate-100 text-center space-y-1.5">
              <p className="text-xs text-slate-500">
                Ainda não tem acesso liberado?
              </p>
              <button
                type="button"
                onClick={() => setTab('register')}
                className="text-xs font-black text-teal-700 hover:text-teal-900 underline block mx-auto cursor-pointer"
              >
                Como se cadastrar e adquirir por R$ 27,90 →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Como Funciona o Cadastro & Compra */}
        {tab === 'register' && (
          <div className="p-6 space-y-4">
            <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200 flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <p className="font-bold">O cadastro é 100% automático!</p>
                <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                  Ao realizar a compra no checkout da Kiwify, seu cadastro é criado com o e-mail que você preencher lá.
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <p>Clique no botão abaixo para abrir o <strong>Checkout Oficial na Kiwify (R$ 27,90)</strong>.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <p>Preencha seu <strong>Nome e E-mail</strong> no pagamento (PIX ou Cartão com aprovação imediata).</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <p>Pronto! Você é redirecionado para este portal com <strong>todos os conteúdos liberados</strong>.</p>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                id="btn-register-checkout"
                href="https://pay.kiwify.com.br/kYdtxLl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0f4c5c] hover:bg-teal-800 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all text-center"
              >
                <span>Garantir Acesso na Kiwify (R$ 27,90)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                id="btn-register-sales-page"
                href="https://kiwify.app/t3u1lYm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <span>Ver Detalhes na Página Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
