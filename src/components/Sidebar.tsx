import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Home, Download, Search, LogOut, LogIn, ChevronLeft, ChevronRight, Globe, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onSearchClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse, onSearchClick }) => {
  const { isEn, language, setLanguage, user, logout, setActiveModal, openNonClientModal, setActiveModuleId } = useApp();

  return (
    <aside
      className={`relative bg-white border-r border-slate-200/80 shadow-md transition-all duration-300 flex flex-col justify-between z-30 shrink-0 select-none ${
        isCollapsed ? 'w-16 sm:w-20' : 'w-60 sm:w-64'
      }`}
    >
      {/* Collapse / Expand circular toggle button attached to right border */}
      <button
        id="btn-toggle-sidebar"
        onClick={onToggleCollapse}
        className="absolute -right-3.5 top-20 w-7 h-7 rounded-full bg-white border border-slate-300 shadow-md text-slate-600 hover:text-teal-700 hover:scale-110 flex items-center justify-center transition-all z-40 cursor-pointer"
        title={isCollapsed ? (isEn ? "Expand sidebar" : "Expandir menu") : (isEn ? "Collapse sidebar" : "Recolher menu")}
      >
        {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Top Brand Logo: Adeus Otite mascot badge */}
      <div className="p-4 sm:p-5 flex flex-col items-center border-b border-slate-100">
        <button
          onClick={() => {
            setActiveModuleId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          {/* Mascot Circle Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-teal-400 via-[#00c5b3] to-sky-400 p-1 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center overflow-hidden relative">
              <span className="text-2xl sm:text-3xl">🐶</span>
              <span className="absolute bottom-0 text-[8px] sm:text-[9px] font-black text-teal-800 bg-teal-100/90 px-1.5 py-0.2 rounded-t-md">
                Adeus Otite
              </span>
            </div>
          </div>

          {!isCollapsed && (
            <div className="mt-2.5">
              <h2 className="text-sm font-black text-teal-950 tracking-tight leading-none">
                Adeus Otite
              </h2>
              <span className="text-[10px] text-teal-600 font-bold uppercase tracking-wider">
                {isEn ? 'Official Portal' : 'Portal Oficial'}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Navigation Menu Links */}
      <div className="p-3 sm:p-4 space-y-2 flex-1">
        {/* 1. Home / Lar */}
        <button
          id="sidebar-link-home"
          onClick={() => {
            setActiveModuleId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
            'bg-[#e6f8f5] text-[#0f766e] shadow-xs'
          }`}
          title={isEn ? "Home" : "Lar"}
        >
          <Home className="w-5 h-5 shrink-0 text-[#0f766e]" />
          {!isCollapsed && <span>{isEn ? 'Home' : 'Lar'}</span>}
        </button>

        {/* 2. Install App / Instalar aplicativo */}
        <button
          id="sidebar-link-install"
          onClick={() => setActiveModal('install')}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-bold text-xs sm:text-sm text-slate-700 hover:bg-slate-100 hover:text-teal-900 transition-all cursor-pointer"
          title={isEn ? "Install App" : "Instalar aplicativo"}
        >
          <Download className="w-5 h-5 shrink-0 text-slate-500" />
          {!isCollapsed && <span>{isEn ? 'Install App' : 'Instalar aplicativo'}</span>}
        </button>

        {/* 3. Search / Procurar */}
        <button
          id="sidebar-link-search"
          onClick={onSearchClick}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-bold text-xs sm:text-sm text-slate-700 hover:bg-slate-100 hover:text-teal-900 transition-all cursor-pointer"
          title={isEn ? "Search" : "Procurar"}
        >
          <Search className="w-5 h-5 shrink-0 text-slate-500" />
          {!isCollapsed && <span>{isEn ? 'Search' : 'Procurar'}</span>}
        </button>

        {/* 4. Log Out / Sair (or Sign In / Entrar) */}
        {user ? (
          <button
            id="sidebar-link-logout"
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-bold text-xs sm:text-sm text-slate-700 hover:bg-red-50 hover:text-red-700 transition-all cursor-pointer"
            title={isEn ? "Log Out" : "Sair"}
          >
            <LogOut className="w-5 h-5 shrink-0 text-slate-500 hover:text-red-600" />
            {!isCollapsed && <span>{isEn ? 'Log Out' : 'Sair'}</span>}
          </button>
        ) : (
          <button
            id="sidebar-link-login"
            onClick={openNonClientModal}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-bold text-xs sm:text-sm text-teal-800 bg-teal-50 hover:bg-teal-100 transition-all cursor-pointer"
            title={isEn ? "Sign In" : "Entrar"}
          >
            <LogIn className="w-5 h-5 shrink-0 text-teal-700" />
            {!isCollapsed && <span>{isEn ? 'Sign In' : 'Entrar'}</span>}
          </button>
        )}
      </div>

      {/* Bottom Language Selector Box */}
      <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/70">
        {!isCollapsed ? (
          <div className="space-y-1.5">
            <label className="text-[11px] font-black text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>{isEn ? 'Language / Idioma:' : 'Idioma / Language:'}</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-200/80 p-1 rounded-xl">
              <button
                id="sidebar-lang-pt"
                onClick={() => setLanguage('pt')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  !isEn
                    ? 'bg-amber-400 text-slate-950 shadow-sm ring-1 ring-black/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                <span>🇧🇷</span>
                <span>Português</span>
              </button>
              <button
                id="sidebar-lang-en"
                onClick={() => setLanguage('en')}
                className={`py-2 px-2 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  isEn
                    ? 'bg-amber-400 text-slate-950 shadow-sm ring-1 ring-black/10'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setLanguage(isEn ? 'pt' : 'en')}
            className="w-full py-2 bg-amber-400 text-slate-950 hover:bg-amber-300 rounded-xl text-xs font-black text-center transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1"
            title={isEn ? "Switch to Portuguese" : "Mudar para Inglês"}
          >
            <span>{isEn ? '🇺🇸' : '🇧🇷'}</span>
            <span>{isEn ? 'EN' : 'PT'}</span>
          </button>
        )}
      </div>
    </aside>
  );
};
