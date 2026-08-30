import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import { DosageCalculatorModal } from './components/DosageCalculatorModal';
import { NutriCoachModal } from './components/NutriCoachModal';
import { FaqModal } from './components/FaqModal';
import { InstallModal } from './components/InstallModal';
import { MessageSquare, Volume2, ShieldCheck, Flame, Sparkles, Menu, Download } from 'lucide-react';

const AppContent: React.FC = () => {
  const { 
    isAuthenticated, 
    activeModal, 
    setActiveModal, 
    isPlayingAudio, 
    toggleAudioPlay, 
    isEn, 
    isPt, 
    isEs,
    language,
    setLanguage
  } = useApp();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If not logged in, render the high-converting Spanish Login Page
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Desktop & Tablet Collapsible Left Sidebar */}
      <div className="hidden md:flex">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
        />
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-black/80 backdrop-blur-xs animate-fade-in">
          <div className="w-72 bg-slate-950 h-full shadow-2xl flex flex-col justify-between border-r border-rose-500/20">
            <Sidebar
              isCollapsed={false}
              onToggleCollapse={() => setMobileSidebarOpen(false)}
            />
          </div>
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Right Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-gradient-to-br from-slate-950 via-[#111827] to-[#0f172a]">
        
        {/* Mobile Header Bar with Hamburger Toggle */}
        <div className="md:hidden sticky top-0 z-50 flex items-center justify-between px-3 py-2.5 bg-slate-950/95 border-b border-rose-500/20 text-white shadow-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-white cursor-pointer transition-transform border border-slate-800"
              title="Abrir Menú"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white">
                <Flame className="w-4 h-4" />
              </div>
              <span className="font-black text-xs text-white tracking-tight">
                GELATINA <span className="text-rose-400">BARIÁTRICA</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveModal('install')}
              className="flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-black px-2 py-1.5 rounded-xl active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isPt ? 'App' : isEn ? 'App' : 'App'}</span>
            </button>

            <button
              onClick={() => setActiveModal('nutriChat')}
              className="flex items-center gap-1 bg-rose-600 text-white text-[11px] font-black px-2.5 py-1.5 rounded-xl shadow-md active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Coach</span>
            </button>
          </div>
        </div>

        {/* Top Navbar / Header Bar (Desktop & Tablet) */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Main Interactive Stage */}
        <main className="flex-1 w-full px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
          <Dashboard />
        </main>

        {/* Floating Action Buttons for quick 1-click access to Nutri-Coach and Sound Synthesizer */}
        <aside aria-label="Acciones Rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
          <button
            id="btn-floating-synthesizer"
            onClick={toggleAudioPlay}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-xl hover:scale-105 transition-all text-xs font-black cursor-pointer border ${
              isPlayingAudio
                ? 'bg-rose-500 text-white border-rose-300 animate-pulse shadow-rose-900/40'
                : 'bg-slate-900 hover:bg-slate-800 text-rose-300 border-rose-500/30'
            }`}
            title="Terapia Sonora 528Hz"
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isPlayingAudio ? '528Hz Sonando' : 'Audio Anti-Cortisol'}
            </span>
          </button>

          <button
            id="btn-floating-coach-chat"
            onClick={() => setActiveModal('nutriChat')}
            className="flex items-center gap-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-rose-950/60 hover:scale-105 transition-all text-xs sm:text-sm font-black cursor-pointer border border-white/20"
            title="Abrir Nutri-Coach IA 24/7"
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <span>Nutri-Coach 24/7</span>
          </button>
        </aside>

        {/* Global Modals */}
        <DosageCalculatorModal />
        <NutriCoachModal />
        <FaqModal />
        <InstallModal />

        {/* Bottom Footer */}
        <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-900 mt-auto py-8 text-center text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">👑</span>
              <span className="font-extrabold text-white tracking-tight">
                {isPt ? 'Portal Oficial da Gelatina Bariátrica' : isEn ? 'Official Bariatric Gelatin Portal' : 'Portal Oficial de la Gelatina Bariátrica'}
              </span>
            </div>
            <p className="max-w-xl mx-auto text-slate-400 text-[11px] leading-relaxed">
              {isPt
                ? 'Plataforma oficial com método redutor gástrico, receitas funcionais e acompanhamento nutricional integrativo.'
                : isEn
                ? 'Official platform featuring natural gastric balloon recipes, functional dosages, and integrative nutrition guidelines.'
                : 'Plataforma oficial con el método reductor gástrico, recetas funcionales de colágeno y acompañamiento nutricional integrativo.'}
            </p>
            <p className="text-[10px] text-rose-300/80">
              © {new Date().getFullYear()} Gelatina Bariátrica Oficial • PWA Offline-Ready & Calculadora Metabólica
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
