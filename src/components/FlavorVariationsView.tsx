import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { getFlavorVariations } from '../data/bariatricData';
import { BariatricRecipe } from '../types';
import { Sparkles, Clock, Flame, ShieldCheck, Heart, Droplet, ChevronRight, Check } from 'lucide-react';

export const FlavorVariationsView: React.FC = () => {
  const { language, t } = useApp();
  const variations = getFlavorVariations(language);
  const [selectedId, setSelectedId] = useState<string>(variations[0]?.id || 'frutos-rojos');

  const selectedRecipe: BariatricRecipe = variations.find(v => v.id === selectedId) || variations[0];

  useEffect(() => {
    if (!variations.some(v => v.id === selectedId)) {
      setSelectedId(variations[0]?.id || 'frutos-rojos');
    }
  }, [language, variations, selectedId]);

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border-2 border-amber-500/30 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.flavorView.allFlavors}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.flavorView.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.flavorView.subtitle}
          </p>
        </div>
      </div>

      {/* Flavor Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {variations.map((flavor) => {
          const isSelected = selectedRecipe.id === flavor.id;
          return (
            <button
              key={flavor.id}
              onClick={() => setSelectedId(flavor.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-gradient-to-b from-rose-900/60 to-slate-900 border-rose-500 shadow-xl shadow-rose-950/40 ring-1 ring-rose-500 scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider bg-rose-500/20 text-rose-300">
                  {flavor.category}
                </span>
                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />}
              </div>

              <div className="font-extrabold text-sm text-white line-clamp-2 leading-snug">
                {flavor.title}
              </div>

              <div className="text-[11px] text-amber-300 font-bold flex items-center gap-2">
                <span>⏱️ {flavor.prepTime}</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-medium">{flavor.satietyIndex}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Flavor Detail Card */}
      {selectedRecipe && (
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Title & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-rose-400">
                {selectedRecipe.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {selectedRecipe.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {selectedRecipe.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-black">
                {selectedRecipe.badge}
              </span>
            </div>
          </div>

          {/* Ingredients & Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Ingredients list */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <span>🥣</span>
                <span>{t.flavorView.ingredientsLabel}</span>
              </h4>

              <ul className="space-y-2">
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                    <span className="font-bold text-white">{ing.name}</span>
                    <span className="font-mono text-rose-300 font-bold shrink-0">{ing.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <span>⚡</span>
                <span>{t.flavorView.stepsLabel}</span>
              </h4>

              <div className="space-y-2.5">
                {selectedRecipe.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-lg bg-rose-500/20 text-rose-300 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {st.stepNumber}
                    </span>
                    <div className="leading-snug">
                      <strong className="text-white">{st.title}:</strong> {st.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Best Consumption Time */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-rose-950/30 border border-rose-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <div className="font-black text-rose-300 uppercase tracking-wider">
                {t.flavorView.scheduleLabel}:
              </div>
              <div className="text-white font-semibold">
                {selectedRecipe.consumptionSchedule}
              </div>
            </div>

            <div className="text-amber-300 text-[11px] font-medium bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
              ⭐ {selectedRecipe.goldenRule}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
