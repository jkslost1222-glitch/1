import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
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
  Headphones
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    t,
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
    <div className="w-full space-y-6 pb-16">
      
      {/* Dynamic Active Module Detail View (if selected) */}
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

      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f4c5c] via-[#0f766e] to-[#00c5b3] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black tracking-wide text-teal-100 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{t.dashboard.badgeOfficial}</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {t.dashboard.heroTitle}
            </h1>
            
            <p className="text-xs sm:text-sm text-teal-50 font-medium leading-relaxed">
              {t.dashboard.heroSubtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>{unlockedCount} de {totalCount} {t.dashboard.metricsUnlocked}</span>
              </div>

              <button
                id="btn-quick-coach-banner"
                onClick={() => setActiveModuleId('coach-canino')}
                className="flex items-center gap-1.5 bg-white text-teal-950 hover:bg-teal-50 px-3 py-1.5 rounded-xl text-xs font-black shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                <span>{t.dashboard.quickCoach}</span>
              </button>

              <button
                id="btn-quick-frequencies-banner"
                onClick={() => setActiveModuleId('frequencias')}
                className="flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/20 transition-all cursor-pointer"
              >
                <Headphones className="w-3.5 h-3.5 text-cyan-300" />
                <span>{t.dashboard.quickAudio}</span>
              </button>
            </div>
          </div>

          {/* Quick CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center sm:text-left space-y-2 shrink-0 md:max-w-xs">
            <span className="text-[11px] font-black uppercase text-amber-300 tracking-wider block">
              Dica Veterinária do Dia:
            </span>
            <p className="text-xs text-white/95 leading-relaxed font-medium">
              "Nunca utilize cotonetes dentro do canal auditivo canino. O canal tem formato em L e a cera é empurrada para a curva profunda."
            </p>
            <button
              onClick={() => setActiveModuleId('antiotite')}
              className="text-xs font-black text-white hover:text-amber-300 inline-flex items-center gap-1 underline cursor-pointer"
            >
              Ver protocolo de limpeza indolor <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="input-search-protocols"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.dashboard.searchPlaceholder}
              className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 shadow-xs font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <CategoryFilter />
      </div>

      {/* Deliverables Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            {t.dashboard.protocolsHeading} ({filteredDeliverables.length})
          </h2>
          <span className="text-xs text-slate-500 font-bold">
            Portal Oficial PWA
          </span>
        </div>

        {filteredDeliverables.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="text-base font-black text-slate-800">
              {t.dashboard.noResults}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tente buscar por "otite", "coceira", "cão blindado", "frequência" ou limpe os filtros de categoria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
              }}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-black px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Ver Todos os Protocolos
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
                  // Scroll smoothly to active module container
                  setTimeout(() => {
                    document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
