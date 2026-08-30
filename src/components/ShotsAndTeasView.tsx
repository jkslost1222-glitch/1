import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getMorningShots, getDrainageTeas } from '../data/bariatricData';
import { Coffee, Flame, Droplet, Clock, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const ShotsAndTeasView: React.FC = () => {
  const { language, t } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'shots' | 'teas'>('shots');

  const shots = getMorningShots(language);
  const teas = getDrainageTeas(language);

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border-2 border-purple-500/30 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-black uppercase tracking-wider">
            <Coffee className="w-3.5 h-3.5" />
            <span>{t.shotsView.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.shotsView.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.shotsView.subtitle}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-md">
        <button
          onClick={() => setActiveSubTab('shots')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'shots'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span>🌅</span>
          <span>{t.shotsView.tabShots}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('teas')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'teas'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span>🍵</span>
          <span>{t.shotsView.tabTeas}</span>
        </button>
      </div>

      {/* Shots Content */}
      {activeSubTab === 'shots' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {shots.map((shot) => (
            <div
              key={shot.id}
              className="p-5 rounded-3xl bg-slate-900/90 border border-purple-500/30 hover:border-purple-500/60 transition-all shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-black text-base text-white">
                  {shot.name}
                </h3>
                <span className="px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase shrink-0">
                  {shot.time}
                </span>
              </div>

              {/* Benefits */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                  {t.shotsView.benefitsLabel}:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {shot.benefits.map((b, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
                <div className="text-[11px] font-bold text-rose-300 uppercase">
                  {t.shotsView.ingredientsLabel}:
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {shot.ingredients.map((ing, idx) => (
                    <li key={idx}>• {ing}</li>
                  ))}
                </ul>
              </div>

              {/* Preparation */}
              <div className="text-xs text-slate-300 leading-relaxed bg-purple-950/20 p-3 rounded-2xl border border-purple-500/20">
                <strong className="text-purple-300 font-bold">{t.shotsView.prepLabel}:</strong> {shot.preparation}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Teas Content */}
      {activeSubTab === 'teas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teas.map((tea) => (
            <div
              key={tea.id}
              className="p-5 rounded-3xl bg-slate-900/90 border border-teal-500/30 hover:border-teal-500/60 transition-all shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-black text-base text-white">
                  {tea.name}
                </h3>
                <span className="px-2.5 py-1 rounded-xl bg-teal-500/20 text-teal-300 text-[10px] font-black uppercase shrink-0">
                  {tea.bestTime}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-xs font-semibold text-teal-200">
                ⚡ <strong>{t.shotsView.effectLabel}:</strong> {tea.effect}
              </div>

              {/* Ingredients */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-850 space-y-1">
                <div className="text-[11px] font-bold text-teal-300 uppercase">
                  {t.shotsView.ingredientsLabel}:
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {tea.ingredients.map((ing, idx) => (
                    <li key={idx}>• {ing}</li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <strong className="text-amber-300 font-bold">{t.shotsView.prepLabel}:</strong> {tea.instructions}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
