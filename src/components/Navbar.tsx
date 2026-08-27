import React from 'react';
import { useApp } from '../context/AppContext';
import { Download, Globe, LogOut, LogIn, User, ShieldCheck, Sparkles, Smartphone, Settings, Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, isEn, user, logout, setActiveModal, openNonClientModal, isAdmin } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-[#0f4c5c] text-white shadow-lg border-b border-teal-800/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo & Portal Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-teal-400 to-[#00c5b3] flex items-center justify-center shadow-md shadow-teal-900/30 text-white font-black text-2xl">
              🐾
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans drop-shadow-sm">
                  PORTAL<span className="text-teal-300 ml-1">PET</span>
                </span>
                {(user?.isVip || isAdmin) ? (
                  <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full border border-amber-300 shadow-xs">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    {t.nav.vipMember}
                  </span>
                ) : user ? (
                  <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded-full border border-teal-400/30">
                    <ShieldCheck className="w-3 h-3 text-teal-300" />
                    {isEn ? 'OFFICIAL STUDENT' : 'ALUNO OFICIAL'}
                  </span>
                ) : (
                  <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded-full border border-teal-400/30">
                    <ShieldCheck className="w-3 h-3 text-teal-300" />
                    {isEn ? 'OFFICIAL' : 'MÉTODO OFICIAL'}
                  </span>
                )}
              </div>
              <p className="text-[11px] sm:text-xs text-teal-100/80 hidden sm:block font-medium">
                {t.nav.membersArea}
              </p>
            </div>
          </div>

          {/* Quick Actions & Header Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Admin Management Button - ONLY for Administrator Accounts */}
            {isAdmin && (
              <button
                id="btn-admin-panel-header"
                onClick={() => setActiveModal('admin')}
                className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-md hover:scale-102 cursor-pointer"
                title={isEn ? "Admin Dashboard (Manage Students)" : "Painel do Admin (Gerenciar Alunos)"}
              >
                <Shield className="w-4 h-4 text-slate-950" />
                <span>{isEn ? 'Admin Panel' : 'Painel Admin'}</span>
              </button>
            )}

            {/* Install App (PWA) Button */}
            <button
              id="btn-install-app-header"
              onClick={() => setActiveModal('install')}
              className="flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm hover:scale-102 cursor-pointer"
              title={t.nav.installApp}
            >
              <Smartphone className="w-4 h-4 text-emerald-300" />
              <span className="hidden sm:inline">{t.nav.installApp}</span>
              <span className="sm:hidden">{t.auth.installAppBtnTop}</span>
            </button>

            {/* Language Switcher with Flags & Prominent High-Contrast Design for 45+ Users */}
            <div className="flex items-center bg-black/40 p-1 rounded-2xl border-2 border-teal-300/40 shadow-inner">
              <span className="hidden xl:inline-flex items-center text-[11px] font-black text-teal-200 px-1.5 uppercase tracking-wider">
                {isEn ? 'Lang:' : 'Idioma:'}
              </span>
              <div className="flex items-center gap-1">
                <button
                  id="btn-lang-pt"
                  onClick={() => setLanguage('pt')}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                    !isEn
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-105 ring-2 ring-white/50'
                      : 'text-teal-100 hover:text-white hover:bg-white/10 opacity-75 hover:opacity-100'
                  }`}
                  title="Mudar para Português (Brasil)"
                >
                  <span className="text-sm">🇧🇷</span>
                  <span>PT</span>
                </button>
                <button
                  id="btn-lang-en"
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                    isEn
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-105 ring-2 ring-white/50'
                      : 'text-teal-100 hover:text-white hover:bg-white/10 opacity-75 hover:opacity-100'
                  }`}
                  title="Switch to English (USA)"
                >
                  <span className="text-sm">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>
            </div>

            {/* User Profile / Login & Cadastro Button */}
            {user ? (
              <div className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-teal-700/50">
                <button
                  id="btn-user-profile"
                  onClick={openNonClientModal}
                  className="flex items-center gap-1.5 bg-teal-900/60 hover:bg-teal-800/80 px-2.5 py-1.5 rounded-xl border border-teal-700/50 transition-all cursor-pointer text-left"
                  title={isEn ? "Click to manage your account access" : "Clique para gerenciar seu e-mail de acesso"}
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/30 flex items-center justify-center text-xs text-teal-200">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="hidden md:flex flex-col">
                    <span className="text-xs font-bold text-white truncate max-w-[110px]">
                      {user.email || user.name}
                    </span>
                    <span className="text-[10px] text-teal-300 font-semibold">
                      {t.nav.unlimitedAccess}
                    </span>
                  </div>
                </button>
                <button
                  id="btn-logout"
                  onClick={logout}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-900/80 hover:bg-red-500/20 text-teal-200 hover:text-red-300 border border-teal-700/60 flex items-center justify-center transition-all cursor-pointer"
                  title={t.nav.logout}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                id="btn-open-login"
                onClick={openNonClientModal}
                className="flex items-center gap-1.5 bg-[#00c5b3] hover:bg-teal-300 text-teal-950 font-black px-3 py-2 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>{isEn ? "Sign In / Register" : "Entrar / Cadastrar"}</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};
