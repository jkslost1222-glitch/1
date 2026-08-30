import React from 'react';
import { useApp } from '../context/AppContext';
import { Flame, Calculator, ShoppingCart, MessageSquare, Sparkles, Volume2, ShieldCheck, Download, LogOut, HelpCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    isEn, 
    isPt, 
    isEs, 
    user, 
    logout, 
    setActiveModal, 
    setActiveTab, 
    isPlayingAudio, 
    toggleAudioPlay 
  } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-xl border-b border-rose-500/20 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('receta-original')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-900/40 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-1">
              <span>GELATINA</span>
              <span className="text-rose-400">BARIÁTRICA</span>
            </div>
            <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
              {isPt ? 'Portal Oficial VIP' : isEn ? 'Official VIP Portal' : 'Portal Oficial VIP'}
            </div>
          </div>
        </div>

        {/* Quick Tools in Navbar */}
        <div className="hidden lg:flex items-center gap-2">
          
          {/* Dosage Calculator Button */}
          <button
            onClick={() => setActiveModal('dosageCalc')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-rose-400" />
            <span>{isPt ? 'Calculadora de Doses' : isEn ? 'Dose Calculator' : 'Calculadora de Dosis'}</span>
          </button>

          {/* Shopping List Button */}
          <button
            onClick={() => setActiveModal('shoppingList')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
            <span>{isPt ? 'Lista de Compras' : isEn ? 'Shopping List' : 'Lista de Compras'}</span>
          </button>

          {/* 528Hz Audio Synthesizer Quick Button */}
          <button
            onClick={toggleAudioPlay}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-rose-500 text-white animate-pulse shadow-md shadow-rose-900/40'
                : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5 text-rose-400" />
            <span>{isPlayingAudio ? '528Hz Sonando' : 'Frecuencia 528Hz'}</span>
          </button>

        </div>

        {/* Right Action Tools: Language Selector + PWA Button + User */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Super Prominent Language Selector */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-amber-400/80 shadow-md">
            <button
              onClick={() => setLanguage('es')}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                isEs
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Español (Oficial)"
            >
              <span>🇪🇸</span>
              <span className="hidden sm:inline">{isEs ? 'Español' : 'ES'}</span>
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                isPt
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Português"
            >
              <span>🇧🇷</span>
              <span className="hidden sm:inline">{isPt ? 'Português' : 'PT'}</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                isEn
                  ? 'bg-amber-400 text-slate-950 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="English"
            >
              <span>🇺🇸</span>
              <span className="hidden sm:inline">{isEn ? 'English' : 'EN'}</span>
            </button>
          </div>

          {/* Nutri-Coach Quick Button */}
          <button
            onClick={() => setActiveModal('nutriChat')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white text-xs font-black shadow-md shadow-rose-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nutri-Coach IA</span>
          </button>

          {/* Install App Shortcut */}
          <button
            onClick={() => setActiveModal('install')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black hover:bg-emerald-500/30 transition-all cursor-pointer"
            title="Instalar App en el Celular"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isPt ? 'Baixar App' : isEn ? 'Get App' : 'Instalar App'}</span>
          </button>

          {/* FAQ Support */}
          <button
            onClick={() => setActiveModal('support')}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
            title="Preguntas Frecuentes y Soporte"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Logout button */}
          <button
            onClick={logout}
            className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-800 transition-all cursor-pointer"
            title="Cerrar Sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
};
