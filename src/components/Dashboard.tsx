import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CircularLauncher } from './CircularLauncher';
import { CategoryFilter } from './CategoryFilter';
import { DeliverableCard } from './DeliverableCard';
import { OtiteProtocolView } from './OtiteProtocolView';
import { CaoBlindadoReader } from './CaoBlindadoReader';
import { AudioSynthesizerPlayer } from './AudioSynthesizerPlayer';
import { CanineCoachChat } from './CanineCoachChat';
import { AntiItchProtocolView } from './AntiItchProtocolView';
import { MobilityProtocolView } from './MobilityProtocolView';
import { BonusGiftsView } from './BonusGiftsView';
import { PetEmDiaView } from './PetEmDiaView';
import { FreshBreathView } from './FreshBreathView';
import { StopCoprophagiaView } from './StopCoprophagiaView';
import { LiveClassesView } from './LiveClassesView';
import { SupportFaqModal } from './SupportFaqModal';
import {
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Heart,
  MessageSquare,
  Volume2,
  BookOpen,
  ArrowRight,
  Headphones,
  LayoutGrid,
  CircleDot
} from 'lucide-react';

interface DashboardProps {
  searchOpen?: boolean;
  onCloseSearch?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ searchOpen, onCloseSearch }) => {
  const {
    t,
    isEn,
    deliverables,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    activeModuleId,
    setActiveModuleId,
    openSimulatorModal,
    openUpsellModal,
    entitlements
  } = useApp();

  const [viewMode, setViewMode] = useState<'circles' | 'grid'>('circles');
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Filter deliverables according to search and selected category
  const filteredDeliverables = deliverables.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tagline && item.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedCategory === 'all') return true;

    // Category mappings
    if (selectedCategory === 'earHealth' && item.type === 'antiotite') return true;
    if (selectedCategory === 'supplements' && item.type === 'cao-blindado') return true;
    if (selectedCategory === 'dermatology' && item.type === 'anticoceira') return true;
    if (selectedCategory === 'orthopedics' && item.type === 'mobilidade') return true;
    if (selectedCategory === 'soundTherapy' && item.type === 'frequencias') return true;
    if (selectedCategory === 'training' && (item.type === 'aulas-ao-vivo' || item.type === 'coach-canino')) return true;
    if (selectedCategory === 'bonuses' && item.type === 'presentes') return true;
    if (selectedCategory === 'dental' && item.type === 'antibafo') return true;
    if (selectedCategory === 'behavior' && (item.type === 'comer-coco' || item.type === 'aulas-ao-vivo')) return true;

    return false;
  });

  const unlockedCount = deliverables.filter(d => !d.isLocked).length;
  const totalCount = deliverables.length;

  return (
    <div className="w-full relative min-h-screen">
      
      {/* Background Decorative SVG Waves for the vibrant turquoise aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C 300 100, 600 350, 1000 220 C 1200 150, 1400 280, 1600 200 L 1600 900 L -100 900 Z"
            fill="rgba(255, 255, 255, 0.15)"
          />
          <path
            d="M-50 450 C 250 350, 700 600, 1100 480 C 1300 420, 1500 520, 1650 460 L 1650 900 L -50 900 Z"
            fill="rgba(255, 255, 255, 0.12)"
          />
          <path
            d="M-80 650 C 350 580, 800 780, 1200 670 C 1400 620, 1550 710, 1700 680 L 1700 900 L -80 900 Z"
            fill="rgba(255, 255, 255, 0.08)"
          />
        </svg>
      </div>

      <div className="space-y-6">
        
        {/* Dynamic Active Module Detail View (when user opens a protocol or reader) */}
        {activeModuleId && (
          <div id="active-module-view" className="animate-fade-in mb-8">
            {activeModuleId === 'antiotite' && (
              <OtiteProtocolView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'cao-blindado' && (
              <CaoBlindadoReader onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'frequencias' && (
              <AudioSynthesizerPlayer onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'coach-canino' && (
              <CanineCoachChat onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'anticoceira' && (
              <AntiItchProtocolView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'mobilidade' && (
              <MobilityProtocolView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'presentes' && (
              <BonusGiftsView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'pet-em-dia' && (
              <PetEmDiaView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'antibafo' && (
              <FreshBreathView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'comer-coco' && (
              <StopCoprophagiaView onClose={() => setActiveModuleId(null)} />
            )}
            {activeModuleId === 'aulas-ao-vivo' && (
              <LiveClassesView onClose={() => setActiveModuleId(null)} />
            )}
          </div>
        )}

        {/* View Mode Switcher Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-black/15 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-teal-100 tracking-wider">
              {isEn ? 'View Layout:' : 'Modo de Visualização:'}
            </span>
            <div className="flex items-center bg-black/30 p-1 rounded-xl border border-white/10">
              <button
                id="btn-view-circles"
                onClick={() => setViewMode('circles')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  viewMode === 'circles'
                    ? 'bg-white text-teal-950 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <CircleDot className="w-3.5 h-3.5" />
                <span>{isEn ? 'Circular Bubbles' : 'Círculos Originais'}</span>
              </button>
              <button
                id="btn-view-grid"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-teal-950 shadow-md'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{isEn ? 'Detailed Cards' : 'Cards Detalhados'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-white/90 font-bold hidden sm:block">
              {unlockedCount} / {totalCount} {isEn ? 'Protocols Unlocked' : 'Protocolos Liberados'}
            </div>
            <button
              onClick={() => setIsSupportOpen(true)}
              className="bg-white/20 hover:bg-white/30 text-white text-xs font-black px-3 py-1.5 rounded-xl border border-white/30 transition-all cursor-pointer"
            >
              {isEn ? 'Help & FAQ' : 'Ajuda & FAQ'}
            </button>
          </div>
        </div>

        {/* Search & Filter Bar (shown if opened or in grid mode) */}
        {(searchOpen || viewMode === 'grid' || searchQuery) && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-white/40 shadow-xl space-y-3 animate-fade-in">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="input-search-protocols"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.dashboard.searchPlaceholder}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 font-medium text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  {t.dashboard.clear}
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <CategoryFilter />
          </div>
        )}

        {/* PRIMARY VIEW 1: Iconic Circular Launcher (Exact layout from user's screenshots) */}
        {viewMode === 'circles' && !searchQuery && (
          <div className="py-2 animate-fade-in">
            <CircularLauncher onOpenSupport={() => setIsSupportOpen(true)} />
          </div>
        )}

        {/* PRIMARY VIEW 2: Detailed Cards Grid */}
        {(viewMode === 'grid' || searchQuery) && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between text-white">
              <h2 className="text-lg sm:text-xl font-black tracking-tight drop-shadow-xs">
                {t.dashboard.protocolsHeading} ({filteredDeliverables.length})
              </h2>
              <span className="text-xs text-white/80 font-bold bg-white/20 px-3 py-1 rounded-full border border-white/20">
                PWA Offline-Ready
              </span>
            </div>

            {filteredDeliverables.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-2xl">
                  🔍
                </div>
                <h3 className="text-base font-black text-slate-800">
                  {t.dashboard.noResults}
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {isEn
                    ? 'Try searching for "otitis", "itching", "armored dog", "frequencies" or clear your filters.'
                    : 'Tente buscar por "otite", "coceira", "cão blindado", "frequência" ou limpe os filtros de categoria.'}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-black px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {isEn ? 'View All Protocols' : 'Ver Todos os Protocolos'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredDeliverables.map(item => (
                  <DeliverableCard
                    key={item.id}
                    item={item}
                    onOpen={() => {
                      setActiveModuleId(item.id);
                      setTimeout(() => {
                        document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Support FAQ Modal */}
      <SupportFaqModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

    </div>
  );
};
