import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Lock,
  Mail,
  Key,
  Eye,
  EyeOff,
  LogIn,
  ExternalLink,
  AlertCircle,
  Shield,
  CheckCircle2,
  Sparkles,
  Zap,
  Flame,
  Clock,
  HeartCrack,
  ShieldCheck,
  Award,
  ChevronRight,
  Stethoscope,
  TrendingDown
} from 'lucide-react';
import { AdminModal } from './AdminModal';

export const LoginPage: React.FC = () => {
  const { loginWithCredentials, isEn, setLanguage, activeModal, setActiveModal } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage(isEn ? 'Please enter your access email.' : 'Por favor, digite seu e-mail de acesso.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage(isEn ? 'Please enter your access password.' : 'Por favor, digite sua senha de acesso.');
      return;
    }

    const success = loginWithCredentials(email.trim(), password.trim());
    if (!success) {
      setErrorMessage(
        isEn
          ? 'Incorrect email or password. If you just bought, check your email or click below to buy access.'
          : 'E-mail ou senha não encontrados. Se acabou de comprar, aguarde 2 min ou clique no botão abaixo para desbloquear seu acesso.'
      );
    }
  };

  const buyUrl = isEn ? 'https://pay.kiwify.com/gdEZvLD' : 'https://pay.kiwify.com.br/kYdtxLl';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002722] via-[#003d36] to-[#011a17] text-white flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Urgent Alert Bar (High-Converting Hook) */}
      <div className="w-full bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white py-2 px-3 sm:px-4 text-center text-xs font-black tracking-wide shadow-md flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-amber-200 animate-bounce shrink-0" />
        <span>
          {isEn
            ? '🚨 ATTENTION: Stop using harmful cotton swabs or toxic antibiotics that damage your dog\'s liver & kidneys!'
            : '🚨 ATENÇÃO: Pare de usar cotonetes e antibióticos caros que destroem os rins e o fígado do seu cão!'}
        </span>
      </div>

      {/* Main Header */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-3 px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl shadow-lg border border-amber-300 font-black">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                PORTAL PET OFICIAL
              </h1>
              <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                {isEn ? 'VERIFIED' : 'MÉTODO OFICIAL'}
              </span>
            </div>
            <p className="text-[11px] text-teal-300 font-semibold">
              {isEn ? 'Adeus Otite • Natural Canine Health System' : 'Protocolo Adeus Otite • Alívio Imediato & Sem Dor'}
            </p>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center bg-black/50 p-1 rounded-2xl border border-teal-500/40 shadow-inner">
          <button
            id="login-lang-pt"
            onClick={() => setLanguage('pt')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
              !isEn
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-white/50 scale-105'
                : 'text-teal-200 hover:text-white hover:bg-white/10 opacity-75'
            }`}
            title="Português"
          >
            <span>🇧🇷</span>
            <span>PT</span>
          </button>
          <button
            id="login-lang-en"
            onClick={() => setLanguage('en')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
              isEn
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-white/50 scale-105'
                : 'text-teal-200 hover:text-white hover:bg-white/10 opacity-75'
            }`}
            title="English"
          >
            <span>🇺🇸</span>
            <span>EN</span>
          </button>
        </div>
      </header>

      {/* Main Conversion Grid */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1">
        
        {/* Left Column: Direct Psychological Trigger & Financial Pain */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 rounded-full px-3.5 py-1 text-xs font-black text-amber-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isEn ? 'SAVINGS OF UP TO $1,200 IN VET VISITS' : 'ECONOMIA DE ATÉ R$ 3.800 EM CONSULTAS E REMÉDIOS'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            {isEn ? (
              <>
                Eliminate Canine Ear Infections, Itching & Pain in <span className="text-amber-400 underline decoration-amber-400">4 Days</span> Without Expensive Chemicals.
              </>
            ) : (
              <>
                Elimine a Otite, Coceiras e o Sofrimento do seu Cão em até <span className="text-amber-400 underline decoration-amber-400">4 Dias</span> de Forma 100% Natural.
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-medium">
            {isEn
              ? 'Over 14,800 pet parents have replaced repeated vet bills and painful treatments with our clinically proven, home-based holistic protocols.'
              : 'Mais de 14.800 tutores já libertaram seus cães de remédios caros, dores lancinantes ao tocar na orelha e coceiras desesperadoras usando o passo a passo na palma da mão.'}
          </p>

          {/* Pain vs Solution Comparison Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            
            {/* The Trap Box */}
            <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-red-300 text-xs font-black">
                <HeartCrack className="w-4 h-4 text-red-400 shrink-0" />
                <span>{isEn ? 'The Cost of Ineffective Habits:' : 'O Ciclo do Sofrimento e Prejuízo:'}</span>
              </div>
              <ul className="text-[11px] text-red-100/80 space-y-1 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>{isEn ? 'Antibiotics that stop working after 2 weeks' : 'Remédios caros que só mascaram e a otite volta pior'}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>{isEn ? '$300-$800 per emergency vet exam' : 'Consultas e exames de R$ 300 a R$ 800 toda vez'}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>{isEn ? 'Dog crying in pain when touching the ear' : 'Cachorro chorando de dor ao tocar na orelha'}</span>
                </li>
              </ul>
            </div>

            {/* The Solution Box */}
            <div className="bg-emerald-950/50 border border-emerald-400/40 rounded-2xl p-3.5 space-y-2 shadow-lg">
              <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-black">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isEn ? 'The Portal Pet Solution:' : 'Com o Portal Pet Oficial:'}</span>
              </div>
              <ul className="text-[11px] text-emerald-100/90 space-y-1 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{isEn ? 'Pain-free natural drops (Propolis + Calendula)' : 'Gotas naturais cicatrizantes sem dor (Própolis + Calêndula)'}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{isEn ? '24/7 AI Canine Coach for instant answers' : 'Coach Canino IA 24h para tirar dúvidas em tempo real'}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{isEn ? 'Lifetime access for less than the cost of a toy' : 'Acesso vitalício por menos do valor de uma ração'}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1 text-xs text-teal-200">
            <div className="flex items-center gap-1.5 font-bold">
              <div className="flex -space-x-1.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black border border-white">🐶</span>
                <span className="w-6 h-6 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center text-[10px] font-black border border-white">🦮</span>
                <span className="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[10px] font-black border border-white">🐕</span>
              </div>
              <span>{isEn ? '14,800+ Dogs Healed' : '14.800+ Cães Curados'}</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-amber-300">
              <span>⭐⭐⭐⭐⭐</span>
              <span>4.9/5.0</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-emerald-300">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? '100% 7-Day Guarantee' : 'Garantia Blindada de 7 Dias'}</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Converting Card (Login + Direct Purchase Option) */}
        <div className="lg:col-span-5">
          <div className="bg-[#051c19]/95 backdrop-blur-2xl border-2 border-teal-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="text-center space-y-1 mb-5">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-wider shadow-md">
                <Lock className="w-3 h-3" />
                <span>{isEn ? 'STUDENT & CLIENT ACCESS' : 'ÁREA EXCLUSIVA DE ALUNOS'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {isEn ? 'Enter the Portal' : 'Acesse seu Aplicativo'}
              </h3>
              <p className="text-xs text-teal-200/80 font-medium">
                {isEn
                  ? 'Sign in below or unlock instant access if you are a new member.'
                  : 'Digite suas credenciais abaixo ou adquira seu acesso imediato.'}
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-semibold flex items-center gap-2 animate-shake">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-teal-200 mb-1">
                  {isEn ? 'Your Email:' : 'Seu E-mail Cadastrado:'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="input-login-email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={isEn ? 'your.email@gmail.com' : 'seu.email@gmail.com'}
                    className="w-full bg-[#021311] border border-teal-700/70 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-200 mb-1">
                  {isEn ? 'Password:' : 'Sua Senha:'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-teal-500">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    id="input-login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#021311] border border-teal-700/70 rounded-xl pl-9 pr-10 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-teal-400 hover:text-white cursor-pointer"
                    title={showPassword ? 'Ocultar senha' : 'Ver senha'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Enter Button */}
              <button
                id="btn-submit-login"
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>
                  {isEn ? 'SIGN IN AS STUDENT' : 'ENTRAR COMO ALUNO'}
                </span>
              </button>
            </form>

            {/* Visual Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-teal-700/40"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-[#051c19] px-2 text-teal-400 font-black">
                  {isEn ? 'OR IF YOU ARE NOT A MEMBER YET' : 'OU SE VOCÊ AINDA NÃO É ALUNO'}
                </span>
              </div>
            </div>

            {/* Direct Purchase Urgent CTA Box (High Meta Conversion) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-amber-600/20 border-2 border-amber-400/60 text-center space-y-2.5 shadow-lg">
              
              <div className="flex items-center justify-center gap-1.5 text-xs font-black text-amber-300">
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{isEn ? 'INSTANT ACCESS UNLOCK (LIFETIME)' : 'LIBERAÇÃO IMEDIATA (ACESSO VITALÍCIO)'}</span>
              </div>

              <p className="text-[11px] text-amber-100/90 font-medium leading-tight">
                {isEn
                  ? 'Get full access to all 12 modules, recipes, audio therapy & 24/7 AI Coach.'
                  : 'Receba na hora o protocolo completo, receitas passo a passo e o Coach Canino IA 24h no seu celular.'}
              </p>

              <a
                id="link-buy-kiwify-login"
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1.5 animate-pulse"
              >
                <span>{isEn ? 'UNLOCK MY ACCESS ON KIWIFY' : 'QUERO DESBLOQUEAR MEU ACESSO AGORA'}</span>
                <ChevronRight className="w-4 h-4 font-black" />
              </a>

              <div className="flex items-center justify-center gap-3 text-[10px] text-amber-200/80 font-bold">
                <span>🔒 Pagamento 100% Seguro</span>
                <span>⚡ Ativação Imediata</span>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* Admin Panel Modal */}
      {activeModal === 'admin' && <AdminModal />}

      {/* Discreet Footer */}
      <footer className="text-center text-[11px] text-teal-400/80 py-3 px-4 space-y-1 border-t border-teal-900/30">
        <div>
          © {new Date().getFullYear()} Portal Pet Oficial • Protocolo Adeus Otite • {isEn ? 'All rights reserved' : 'Todos os direitos reservados'}
        </div>
        <div>
          <button
            type="button"
            onClick={() => setActiveModal('admin')}
            className="inline-flex items-center gap-1 text-teal-400/60 hover:text-amber-300 transition-colors cursor-pointer text-[10px] font-bold underline"
          >
            <Shield className="w-3 h-3 text-amber-400" />
            <span>{isEn ? 'Admin Access' : 'Painel do Dono / Cadastrar Alunos'}</span>
          </button>
        </div>
      </footer>

    </div>
  );
};
