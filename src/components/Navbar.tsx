import React from 'react';
import { useApp } from '../context/AppContext';
import { Download, Globe, LogOut, ShieldCheck, Sparkles, Smartphone, Settings } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, isEn, user, logout, setActiveModal } = useApp();

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
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded-full border border-teal-400/30">
                  <ShieldCheck className="w-3 h-3 text-teal-300" />
                  {t.nav.vipMember}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-teal-100/80 hidden sm:block font-medium">
                {t.nav.membersArea}
              </p>
            </div>
          </div>

          {/* Quick Actions & Header Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
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

            {/* Language Switcher */}
            <div className="flex items-center bg-teal-900/60 p-0.5 rounded-xl border border-teal-700/50">
              <button
                id="btn-lang-pt"
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  !isEn
                    ? 'bg-[#00c5b3] text-teal-950 shadow-sm'
                    : 'text-teal-200 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                id="btn-lang-en"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  isEn
                    ? 'bg-[#00c5b3] text-teal-950 shadow-sm'
                    : 'text-teal-200 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Admin / Access Simulator Button */}
            <button
              id="btn-open-simulator-header"
              onClick={() => setActiveModal('simulator')}
              className="flex items-center gap-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
              title="Simulador de Acesso & Checkout"
            >
              <Settings className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden lg:inline">{t.dashboard.adminSimulator}</span>
            </button>

            {/* User Profile & Logout */}
            {user && (
              <div className="flex items-center gap-2 pl-1 sm:pl-2 border-l border-teal-700/50">
                <div className="hidden md:flex flex-col text-right">
                  <span className="text-xs font-bold text-white truncate max-w-[120px]">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-teal-300 font-semibold">
                    {t.nav.unlimitedAccess}
                  </span>
                </div>
                <button
                  id="btn-logout"
                  onClick={logout}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-900/80 hover:bg-red-500/20 text-teal-200 hover:text-red-300 border border-teal-700/60 flex items-center justify-center transition-all cursor-pointer"
                  title={t.nav.logout}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};
