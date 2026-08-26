import React from 'react';
import { DeliverableItem } from '../types';
import { useApp } from '../context/AppContext';
import { Lock, Unlock, ArrowRight, BookOpen, Sparkles, CheckCircle2, PlayCircle, Download } from 'lucide-react';

interface DeliverableCardProps {
  item: DeliverableItem;
  onOpen: () => void;
}

export const DeliverableCard: React.FC<DeliverableCardProps> = ({ item, onOpen }) => {
  const { t, isEn, openUpsellModal } = useApp();

  const handleCardClick = () => {
    if (item.isLocked) {
      openUpsellModal(item.id);
    } else {
      onOpen();
    }
  };

  // Header styling based on module type
  const getHeaderBg = () => {
    if (item.type === 'antiotite') return 'bg-gradient-to-br from-[#00c5b3] to-[#0f766e] text-white';
    if (item.type === 'cao-blindado') return 'bg-gradient-to-br from-[#0f4c5c] to-[#134e4a] text-white';
    if (item.type === 'anticoceira') return 'bg-gradient-to-br from-[#7e22ce] to-[#581c87] text-white';
    if (item.type === 'mobilidade') return 'bg-gradient-to-br from-[#c2410c] to-[#9a3412] text-white';
    if (item.type === 'frequencias') return 'bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white';
    if (item.type === 'coach-canino') return 'bg-gradient-to-br from-[#0d9488] to-[#115e59] text-white';
    if (item.type === 'aulas-ao-vivo') return 'bg-gradient-to-br from-[#2563eb] to-[#1e40af] text-white';
    if (item.type === 'presentes') return 'bg-gradient-to-br from-[#d97706] to-[#b45309] text-white';
    if (item.type === 'pet-em-dia') return 'bg-gradient-to-br from-[#059669] to-[#047857] text-white';
    if (item.type === 'antibafo') return 'bg-gradient-to-br from-[#0891b2] to-[#155e75] text-white';
    if (item.type === 'comer-coco') return 'bg-gradient-to-br from-[#b45309] to-[#78350f] text-white';
    return 'bg-gradient-to-br from-slate-700 to-slate-900 text-white';
  };

  return (
    <div
      id={`deliverable-card-${item.id}`}
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        item.isLocked
          ? 'border-amber-200/80 hover:border-amber-300'
          : 'border-slate-200/80 hover:border-teal-300'
      }`}
    >
      {/* Top Banner / Card Hero */}
      <div className={`${getHeaderBg()} p-5 sm:p-6 relative overflow-hidden`}>
        {/* Subtle decorative background pattern */}
        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-15 text-8xl select-none pointer-events-none">
          {item.icon}
        </div>

        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner border border-white/20">
              {item.icon}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-100 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
                {item.category}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mt-1 leading-snug">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Status Badge */}
          <div>
            {item.isLocked ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-2.5 py-1 rounded-full shadow-sm">
                <Lock className="w-3 h-3" />
                {t.dashboard.cardPremium}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-emerald-400 text-emerald-950 px-2.5 py-1 rounded-full shadow-sm">
                <CheckCircle2 className="w-3 h-3" />
                {t.dashboard.cardUnlocked}
              </span>
            )}
          </div>
        </div>

        {item.subtitle && (
          <p className="mt-2.5 text-xs text-white/85 font-semibold line-clamp-1">
            {item.subtitle}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          {item.tagline && (
            <p className="text-xs font-bold text-teal-900 mb-2 line-clamp-2 leading-relaxed">
              {item.tagline}
            </p>
          )}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Action Button & Metadata */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
            {item.content.lessons && <span>{item.content.lessons.length} aulas • </span>}
            {item.content.materials && <span>{item.content.materials.length} PDFs • </span>}
            {item.content.audioTracks && <span>{item.content.audioTracks.length} faixas • </span>}
            <span className="text-teal-700 font-semibold">{t.dashboard.badgeVerified}</span>
          </div>

          <button
            id={`btn-open-${item.id}`}
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              item.isLocked
                ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm'
                : 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm group-hover:scale-102'
            }`}
          >
            {item.isLocked ? (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>{t.dashboard.unlockProtocol}</span>
              </>
            ) : (
              <>
                <span>{t.dashboard.viewProtocol}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
