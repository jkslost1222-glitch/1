import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { UpsellModal } from './components/UpsellModal';
import { InstallModal } from './components/InstallModal';
import { PurchaseSimulatorModal } from './components/PurchaseSimulatorModal';
import { NonClientModal } from './components/NonClientModal';
import { MessageSquare, Headphones, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const AppContent: React.FC = () => {
  const { setActiveModuleId, t } = useApp();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-teal-200 selection:text-teal-950">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Dashboard />
      </main>

      {/* Floating Action Buttons for quick 1-click access to Coach Canino and Sound Synthesizer */}
      <aside aria-label="Ações Rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          id="btn-floating-synthesizer"
          onClick={() => {
            setActiveModuleId('frequencias');
            document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 bg-[#0284c7] hover:bg-sky-600 text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-sky-900/20 hover:scale-105 transition-all text-xs font-black cursor-pointer border border-white/20"
          title="Frequências de Alívio Canino"
        >
          <Headphones className="w-4 h-4" />
          <span className="hidden sm:inline">Frequências 432Hz</span>
        </button>

        <button
          id="btn-floating-coach-chat"
          onClick={() => {
            setActiveModuleId('coach-canino');
            document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 bg-[#0f4c5c] hover:bg-teal-700 text-white px-4 py-3 rounded-full shadow-xl shadow-teal-900/25 hover:scale-105 transition-all text-xs sm:text-sm font-black cursor-pointer border border-white/20"
          title="Abrir Coach Canino 24h"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <span>Coach Canino 24h</span>
        </button>
      </aside>

      {/* Global Modals */}
      <UpsellModal />
      <InstallModal />
      <PurchaseSimulatorModal />
      <NonClientModal />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">🐾</span>
            <span className="font-extrabold text-slate-800 tracking-tight">Portal Adeus Otite & Cão Blindado</span>
          </div>
          <p className="max-w-xl mx-auto text-slate-500 text-[11px] leading-relaxed">
            Plataforma de conteúdos educativos e protocolos integrativos para o bem-estar canino. Não substitui o diagnóstico clínico de um médico-veterinário presencial.
          </p>
          <p className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} Adeus Otite • Desenvolvido com PWA offline-first & dosagens dinâmicas
          </p>
        </div>
      </footer>
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

