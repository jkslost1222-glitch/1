import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lock, Mail, Key, Eye, EyeOff, LogIn, UserPlus, ExternalLink, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
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
      setErrorMessage(isEn ? 'Please enter your email address.' : 'Por favor, digite seu e-mail de acesso.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage(isEn ? 'Please enter your password.' : 'Por favor, digite sua senha de acesso.');
      return;
    }

    const success = loginWithCredentials(email.trim(), password.trim());
    if (!success) {
      setErrorMessage(
        isEn
          ? 'Incorrect email or password. Please check your credentials.'
          : 'E-mail ou senha incorretos. Verifique suas credenciais de acesso.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003d36] via-[#005249] to-[#042622] text-white flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans selection:bg-teal-300 selection:text-teal-950">
      
      {/* Top Header with Language Selector */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-xl shadow-lg border border-teal-300/30">
            🐶
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
              <span>PORTAL PET</span>
              <span className="text-[10px] bg-amber-400 text-slate-950 font-extrabold px-2 py-0.5 rounded-full uppercase">
                {isEn ? 'Members Area' : 'Área de Membros'}
              </span>
            </h1>
            <p className="text-[11px] text-teal-300 font-medium">Adeus Otite • Cão Blindado • Protocolos Caninos</p>
          </div>
        </div>

        {/* Language Selector in Top Right */}
        <div className="flex items-center bg-black/40 p-1 rounded-2xl border-2 border-teal-300/40 shadow-inner">
          <button
            id="login-lang-pt"
            onClick={() => setLanguage('pt')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              !isEn
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-white/50 scale-105'
                : 'text-teal-100 hover:text-white hover:bg-white/10 opacity-75 hover:opacity-100'
            }`}
            title="Mudar para Português"
          >
            <span>🇧🇷</span>
            <span>PT</span>
          </button>
          <button
            id="login-lang-en"
            onClick={() => setLanguage('en')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              isEn
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-white/50 scale-105'
                : 'text-teal-100 hover:text-white hover:bg-white/10 opacity-75 hover:opacity-100'
            }`}
            title="Switch to English"
          >
            <span>🇺🇸</span>
            <span>EN</span>
          </button>
        </div>
      </header>

      {/* Center Auth Card */}
      <main className="max-w-md w-full mx-auto my-auto py-6">
        <div className="bg-[#051c19]/90 backdrop-blur-xl border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Glow Accent */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>

          {/* Heading */}
          <div className="text-center space-y-1 mb-6">
            <div className="inline-flex items-center gap-1.5 bg-teal-900/60 text-teal-300 border border-teal-700/50 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider mb-1">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{isEn ? 'EXCLUSIVE CLIENT ACCESS' : 'ACESSO EXCLUSIVO PARA ALUNOS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isEn ? 'Student Sign In' : 'Login de Alunos'}
            </h2>
            <p className="text-xs text-teal-200/80 font-medium">
              {isEn ? 'Enter your authorized email and password to access the portal.' : 'Digite seu e-mail e senha de acesso para entrar na área de membros.'}
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-semibold flex items-center gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-teal-200 mb-1">
                {isEn ? 'Access Email:' : 'E-mail de Acesso:'}
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
                  placeholder={isEn ? 'your.email@example.com' : 'seu.email@exemplo.com'}
                  className="w-full bg-[#021311] border border-teal-700/60 rounded-xl pl-9 pr-3.5 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-medium"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-teal-200 mb-1">
                {isEn ? 'Password:' : 'Senha:'}
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
                  className="w-full bg-[#021311] border border-teal-700/60 rounded-xl pl-9 pr-10 py-2.5 text-sm text-white placeholder-teal-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 font-medium"
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

            {/* Submit Button */}
            <button
              id="btn-submit-login"
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-amber-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <LogIn className="w-4 h-4" />
              <span>
                {isEn ? 'SIGN IN TO MEMBERS AREA' : 'ENTRAR NA ÁREA DE MEMBROS'}
              </span>
            </button>
          </form>

          {/* Not a client yet? Kiwify Buy Link */}
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/30 text-center space-y-1.5">
            <span className="text-[11px] text-emerald-200 block font-medium">
              {isEn ? "Haven't purchased access yet?" : 'Ainda não é aluno ou não recebeu seu acesso?'}
            </span>
            <a
              id="link-buy-kiwify-login"
              href={isEn ? "https://pay.kiwify.com/gdEZvLD" : "https://pay.kiwify.com.br/kYdtxLl"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-amber-300 hover:text-amber-200 underline transition-colors cursor-pointer"
            >
              <span>{isEn ? 'Click here to secure your instant access on Kiwify' : 'Clique aqui para adquirir seu acesso oficial na Kiwify'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </main>

      {/* Admin Panel Modal if opened */}
      {activeModal === 'admin' && <AdminModal />}

      {/* Footer with discreet Admin Link */}
      <footer className="text-center text-[11px] text-teal-400 py-3 space-y-1.5">
        <div>
          © {new Date().getFullYear()} Portal Pet • Adeus Otite • {isEn ? 'Secure Protected Area' : 'Área Segura e Protegida'}
        </div>
        <div>
          <button
            type="button"
            onClick={() => setActiveModal('admin')}
            className="inline-flex items-center gap-1.5 text-teal-400/70 hover:text-amber-300 transition-colors cursor-pointer text-[11px] font-bold underline"
          >
            <Shield className="w-3 h-3 text-amber-400" />
            <span>{isEn ? 'Admin Access & Student Management' : 'Painel do Administrador (Cadastrar / Ver Alunos)'}</span>
          </button>
        </div>
      </footer>

    </div>
  );
};
