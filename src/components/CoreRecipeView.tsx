import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getCoreRecipe } from '../data/bariatricData';
import { 
  Flame, 
  Clock, 
  Sparkles, 
  Check, 
  Droplet, 
  ShieldCheck, 
  Award,
  ChevronRight
} from 'lucide-react';

export const CoreRecipeView: React.FC = () => {
  const { language, t, setActiveModal } = useApp();
  const recipe = getCoreRecipe(language);

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepDone = (stepNum: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNum) ? prev.filter(s => s !== stepNum) : [...prev, stepNum]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in text-white pb-12">
      
      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 border-2 border-rose-500/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black uppercase tracking-wider">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{recipe.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {recipe.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {recipe.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-bold text-slate-200">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{recipe.satietyIndex}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-bold text-rose-300">
                <Droplet className="w-4 h-4" />
                <span>{recipe.calories}</span>
              </div>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="shrink-0 flex flex-col gap-2.5">
            <button
              onClick={() => setActiveModal('dosageCalc')}
              className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm shadow-xl shadow-rose-950/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.recipeView.calcDoseBtn}</span>
            </button>

            <div className="p-3 rounded-2xl bg-slate-950/90 border border-rose-500/30 text-center">
              <div className="text-[11px] text-amber-300 font-black uppercase">
                {t.recipeView.yieldBadge}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {t.recipeView.storageTip}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Rule Highlight Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border-2 border-amber-400/50 flex items-start sm:items-center gap-3.5 shadow-lg">
        <div className="p-2.5 rounded-xl bg-amber-400 text-slate-950 shrink-0 font-black">
          <Award className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-black uppercase tracking-wider text-amber-300">
            {t.recipeView.goldenRuleTitle}
          </div>
          <p className="text-xs sm:text-sm text-white font-semibold mt-0.5 leading-snug">
            {recipe.goldenRule}
          </p>
        </div>
      </div>

      {/* Grid: Left column (Ingredients) & Right column (Interactive Preparation Steps) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Ingredients Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">🧪</span>
                <h3 className="text-base font-black text-white">
                  {t.recipeView.exactIngredientsTitle}
                </h3>
              </div>
              <span className="text-xs font-bold text-rose-400">
                {recipe.ingredients.length} {t.recipeView.elementsLabel}
              </span>
            </div>

            <div className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <div 
                  key={i}
                  className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-rose-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-bold text-xs sm:text-sm text-white leading-snug">
                      {ing.name}
                    </div>
                    <span className="px-2 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 font-mono text-[11px] font-black shrink-0">
                      {ing.amount}
                    </span>
                  </div>

                  {ing.importance && (
                    <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                      💡 <strong className="text-slate-300">{t.recipeView.functionLabel}</strong> {ing.importance}
                    </p>
                  )}

                  {ing.substitute && (
                    <div className="text-[10px] text-amber-300/90 font-medium mt-1">
                      🔄 <em>{t.recipeView.substituteLabel}</em> {ing.substitute}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-center">
              <button
                onClick={() => setActiveModal('shoppingList')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
              >
                <span>🛒 {t.recipeView.viewShoppingList}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Preparation Steps Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">🥣</span>
                <h3 className="text-base font-black text-white">
                  {t.recipeView.prepStepsTitle}
                </h3>
              </div>
              <div className="text-xs text-emerald-400 font-bold">
                {completedSteps.length} / {recipe.steps.length} {t.recipeView.completedLabel}
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-4">
              {recipe.steps.map((step, idx) => {
                const isDone = completedSteps.includes(step.stepNumber);
                const isCurrent = activeStepIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-200'
                        : isCurrent
                        ? 'bg-slate-950 border-rose-500 shadow-lg shadow-rose-950/40 ring-1 ring-rose-500/50'
                        : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStepDone(step.stepNumber);
                          }}
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black transition-all cursor-pointer ${
                            isDone
                              ? 'bg-emerald-500 text-slate-950 shadow-md'
                              : 'bg-slate-800 hover:bg-rose-600 text-white'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.stepNumber}
                        </button>
                        <div>
                          <h4 className="text-sm font-black text-white flex items-center gap-2">
                            <span>{step.title}</span>
                            {step.durationMinutes && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                                ⏱️ {step.durationMinutes} {t.recipeView.minDuration}
                              </span>
                            )}
                          </h4>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStepDone(step.stepNumber);
                        }}
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          isDone ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-white bg-slate-800/60'
                        }`}
                      >
                        {isDone ? t.recipeView.markedDone : t.recipeView.markDone}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed pl-10">
                      {step.description}
                    </p>

                    {step.tip && (
                      <div className="mt-2.5 ml-10 p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-[11px] text-amber-200 leading-relaxed">
                        ⭐ <strong>{t.recipeView.goldenTipLabel}</strong> {step.tip}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Consumption Strategy */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-rose-500/30">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase mb-1">
                <Clock className="w-4 h-4" />
                <span>{t.recipeView.consumptionScheduleTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {recipe.consumptionSchedule}
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
