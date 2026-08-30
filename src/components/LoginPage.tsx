import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Sparkles, Lock, ArrowRight, CheckCircle2, Heart, Award, Flame, Zap } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, loginAsVip, language, setLanguage, isEn, isPt, isEs, t } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError(t.auth.invalidEmailError);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      login(email);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#111827] text-white flex flex-col justify-between selection:bg-rose-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background glow accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header with Brand & Super Visible Language Switcher */}
      <header className="w-full max-w-6xl mx-auto px-4 py-4 sm:py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-900/40 border border-white/20">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span>GELATINA</span>
              <span className="text-rose-400">BARIÁTRICA</span>
            </h1>
            <p className="text-[10px] sm:text-xs text-rose-200/80 font-bold uppercase tracking-wider">
              {isPt ? 'Área Oficial de Membros' : isEn ? 'Official Members Area' : 'Área Oficial de Miembros'}
            </p>
          </div>
        </div>

        {/* Prominent High-Contrast Language Selector */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 sm:p-1.5 rounded-2xl border-2 border-amber-400 shadow-xl ring-2 ring-amber-400/20">
          <div className="hidden sm:flex items-center gap-1 pl-1.5 pr-1 text-[11px] font-black text-amber-300 uppercase tracking-wider">
            <span className="text-sm">🌐</span>
            <span>{isPt ? 'Idioma:' : isEn ? 'Lang:' : 'Idioma:'}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              id="login-lang-es"
              onClick={() => setLanguage('es')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isEs
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105 ring-2 ring-white/60 font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 opacity-75'
              }`}
              title="Español (Oficial)"
            >
              <span className="text-sm">🇪🇸</span>
              <span>{isEs ? 'Español' : 'ES'}</span>
            </button>
            <button
              id="login-lang-pt"
              onClick={() => setLanguage('pt')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isPt
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105 ring-2 ring-white/60 font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 opacity-75'
              }`}
              title="Português (Brasil)"
            >
              <span className="text-sm">🇧🇷</span>
              <span>{isPt ? 'Português' : 'PT'}</span>
            </button>
            <button
              id="login-lang-en"
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isEn
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105 ring-2 ring-white/60 font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 opacity-75'
              }`}
              title="English (USA)"
            >
              <span className="text-sm">🇺🇸</span>
              <span>{isEn ? 'English' : 'EN'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Login Content Card */}
      <main className="w-full max-w-xl mx-auto px-4 py-6 z-10 my-auto">
        <div className="bg-slate-900/90 backdrop-blur-2xl border-2 border-rose-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isPt ? 'Portal Oficial de Alunas' : isEn ? 'Official Student Portal' : 'Portal Oficial de Alumnas'}</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{isPt ? 'Acesso Seguro' : isEn ? 'Secure Access' : 'Acceso Seguro'}</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isPt ? 'Bem-vinda ao Método da' : isEn ? 'Welcome to the' : 'Bienvenida al Método de la'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300 mt-1">
                {isPt ? 'Gelatina Bariátrica' : isEn ? 'Bariatric Gelatin' : 'Gelatina Bariátrica'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              {isPt
                ? 'Digite o e-mail que você utilizou na compra para acessar imediatamente a receita original, calculadora de doses e cronograma de 21 dias.'
                : isEn
                ? 'Enter the email you used during purchase to instantly access the original formula, dosage calculator, and 21-day schedule.'
                : 'Ingresa el correo que usaste en tu compra para acceder de inmediato a la fórmula original, calculadora de dosis metabólica y cronograma de 21 días.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-200 text-xs font-bold flex items-center gap-2 animate-shake">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-rose-200 mb-1.5">
                {t.auth.emailLabel}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder={t.auth.emailPlaceholder}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/80 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm font-medium transition-all shadow-inner"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-black uppercase tracking-wider text-rose-200">
                  {t.auth.passwordLabel}
                </label>
                <span className="text-[11px] text-amber-300/80 font-bold">
                  {isPt ? '(Opcional para primeiro acesso)' : isEn ? '(Optional for 1st access)' : '(Opcional para primer acceso)'}
                </span>
              </div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={isPt ? 'Digite sua senha ou deixe em branco' : isEn ? 'Enter password or leave blank' : 'Ingresa tu contraseña o déjalo en blanco'}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/80 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm font-medium transition-all shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-sm sm:text-base tracking-wide shadow-xl shadow-rose-950/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <span>{t.auth.processing}</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{isPt ? 'ENTRAR NA MINHA ÁREA DE MEMBROS' : isEn ? 'ENTER MEMBERS AREA' : 'ENTRAR A MI ÁREA DE MIEMBROS'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Buyer 1-Click Access Button (Zero friction for fresh buyers) */}
          <div className="mt-5 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400 mb-2.5">
              {isPt ? '¿Acabou de comprar e quer entrar direto sem digitar?' : isEn ? 'Just purchased and want 1-click access?' : '¿Acabas de comprar y quieres entrar directo sin escribir?'}
            </p>
            <button
              type="button"
              onClick={loginAsVip}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-black flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isPt ? '⚡ ACESSO IMEDIATO DO COMPRADOR' : isEn ? '⚡ INSTANT BUYER ACCESS' : '⚡ ACCESO INMEDIATO DE COMPRADOR'}</span>
            </button>
          </div>

          {/* Guarantee Highlights */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800/80 text-center">
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-amber-400 text-xs font-black">100%</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{isPt ? 'Natural & Seguro' : isEn ? 'Natural & Safe' : 'Natural & Seguro'}</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-rose-400 text-xs font-black">-78%</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{isPt ? 'Menos Fome' : isEn ? 'Less Hunger' : 'Menos Apetito'}</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-emerald-400 text-xs font-black">21 Días</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{isPt ? 'Cronograma Guiado' : isEn ? 'Guided Routine' : 'Cronograma Guiado'}</div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer with Anti-refund credibility and Support note */}
      <footer className="w-full max-w-4xl mx-auto px-4 py-4 text-center text-xs text-slate-400 z-10">
        <div className="flex items-center justify-center gap-2 mb-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300 font-bold">
            {isPt ? 'Garantia Incondicional de 30 Dias • Suporte Nutricional VIP' : isEn ? '30-Day Money Back Guarantee • VIP Nutrition Support' : 'Garantía Incondicional de 30 Días • Soporte Nutricional VIP'}
          </span>
        </div>
        <p className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} Gelatina Bariátrica Oficial. {isPt ? 'Todos os direitos reservados.' : isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </footer>

    </div>
  );
};
