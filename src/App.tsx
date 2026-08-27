import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import { UpsellModal } from './components/UpsellModal';
import { InstallModal } from './components/InstallModal';
import { PurchaseSimulatorModal } from './components/PurchaseSimulatorModal';
import { NonClientModal } from './components/NonClientModal';
import { CanineCoachModal } from './components/CanineCoachModal';
import { AdminModal } from './components/AdminModal';
import { MessageSquare, Headphones, ShieldCheck, Heart, Sparkles, Menu, Shield } from 'lucide-react';

const AppContent: React.FC = () => {
  const { isAuthenticated, setActiveModuleId, activeModal, setActiveModal, t, isEn } = useApp();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // If not logged in, display the dedicated Login Page
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-[#00bfa5] text-slate-900 flex font-sans selection:bg-teal-200 selection:text-teal-950">
      
      {/* Desktop & Tablet Collapsible Left Sidebar */}
      <div className="hidden md:flex">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
          onSearchClick={() => {
            setSearchOpen(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {/* Mobile Drawer Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-64 bg-white h-full shadow-2xl flex flex-col justify-between">
            <Sidebar
              isCollapsed={false}
              onToggleCollapse={() => setMobileSidebarOpen(false)}
              onSearchClick={() => {
                setSearchOpen(true);
                setMobileSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Right Area with Turquoise Gradient Background */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-gradient-to-br from-[#00dfca] via-[#00c5b3] to-[#00a89a]">
        
        {/* Mobile Header Bar with Hamburger Toggle */}
        <div className="md:hidden sticky top-0 z-50 flex items-center justify-between px-3 py-2.5 bg-[#0f4c5c] border-b border-teal-800/60 text-white shadow-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white cursor-pointer transition-transform"
              title="Menu Lateral"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              <span className="text-xl">🐶</span>
              <span className="font-black text-sm text-white tracking-tight">
                PORTAL<span className="text-teal-300 ml-0.5">PET</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveModal('admin')}
              className="flex items-center gap-1 bg-amber-400 text-slate-950 text-[11px] font-black px-2 py-1.5 rounded-xl shadow-xs active:scale-95 cursor-pointer"
              title="Painel Admin"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>

            <button
              onClick={() => setActiveModal('install')}
              className="flex items-center gap-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-[11px] font-black px-2 py-1.5 rounded-xl active:scale-95 cursor-pointer"
            >
              <span>📲</span>
              <span>{isEn ? 'App' : 'Baixar'}</span>
            </button>

            <button
              onClick={() => setActiveModal('coachChat')}
              className="flex items-center gap-1 bg-teal-800 text-teal-100 border border-teal-600 text-[11px] font-black px-2 py-1.5 rounded-xl shadow-md active:scale-95 cursor-pointer"
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
          <Dashboard
            searchOpen={searchOpen}
            onCloseSearch={() => setSearchOpen(false)}
          />
        </main>

        {/* Floating Action Buttons for quick 1-click access to Coach Canino and Sound Synthesizer */}
        <aside aria-label="Ações Rápidas" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
          <button
            id="btn-floating-synthesizer"
            onClick={() => {
              setActiveModuleId('frequencias');
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-[#0284c7] hover:bg-sky-600 text-white px-4 py-2.5 rounded-full shadow-xl shadow-sky-950/20 hover:scale-105 transition-all text-xs font-black cursor-pointer border border-white/30"
            title={isEn ? "Calming 432Hz Audio" : "Frequências 432Hz"}
          >
            <Headphones className="w-4 h-4" />
            <span className="hidden sm:inline">{isEn ? 'Calming 432Hz' : 'Frequências 432Hz'}</span>
          </button>

          <button
            id="btn-floating-coach-chat"
            onClick={() => {
              setActiveModal('coachChat');
            }}
            className="flex items-center gap-2 bg-[#0f4c5c] hover:bg-teal-900 text-white px-4 py-3 rounded-full shadow-2xl shadow-teal-950/30 hover:scale-105 transition-all text-xs sm:text-sm font-black cursor-pointer border border-white/30"
            title={isEn ? "Open 24/7 Canine Coach" : "Abrir Coach Canino 24h"}
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <span>{isEn ? '24/7 Canine Coach' : 'Coach Canino 24h'}</span>
          </button>
        </aside>

        {/* Global Modals */}
        <UpsellModal />
        <InstallModal />
        <NonClientModal />
        <PurchaseSimulatorModal />
        {activeModal === 'admin' && <AdminModal />}
        <CanineCoachModal
          isOpen={activeModal === 'coachChat'}
          onClose={() => setActiveModal(null)}
        />

        {/* Bottom Footer */}
        <footer className="bg-black/15 backdrop-blur-md border-t border-white/20 mt-auto py-8 text-center text-xs text-teal-100">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🐾</span>
              <span className="font-extrabold text-white tracking-tight">
                {isEn ? 'Goodbye Otitis & Fortified Dog Official Portal' : 'Portal Oficial Adeus Otite & Cão Blindado'}
              </span>
            </div>
            <p className="max-w-xl mx-auto text-white/80 text-[11px] leading-relaxed">
              {isEn
                ? 'Educational and integrative wellness protocols for canine health. Does not replace in-person veterinary consultation.'
                : 'Plataforma de conteúdos educativos e protocolos integrativos para o bem-estar canino. Não substitui o diagnóstico clínico presencial.'}
            </p>
            <p className="text-[10px] text-teal-200">
              © {new Date().getFullYear()} Adeus Otite • {isEn ? 'PWA offline-ready & dynamic weight-based dosing' : 'PWA offline-ready & dosagens dinâmicas'}
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
