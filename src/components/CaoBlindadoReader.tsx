import React, { useState } from 'react';
import { recipesData } from '../data/protocols';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Printer,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Scale,
  AlertTriangle,
  Info,
  Download,
  BookOpen,
  X
} from 'lucide-react';

interface CaoBlindadoReaderProps {
  onClose: () => void;
}

export const CaoBlindadoReader: React.FC<CaoBlindadoReaderProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [selectedRecipeId, setSelectedRecipeId] = useState<number>(1);
  const [dogWeight, setDogWeight] = useState<number>(10);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [copied, setCopied] = useState(false);

  const activeRecipe = recipesData.find(r => r.id === selectedRecipeId) || recipesData[0];

  // Convert weight to kg for calculation
  const weightInKg = weightUnit === 'lbs' ? dogWeight * 0.453592 : dogWeight;
  const multiplier = Math.max(0.2, weightInKg / 10);

  // Proportional daily dosage in grams
  const calculatedDailyGrams = (activeRecipe.baseDosageGramsPer10kg * multiplier).toFixed(1);

  const handleCopyRecipe = () => {
    const text = `🐾 ${activeRecipe.name} (${activeRecipe.categoryName})\n` +
      `Para cão de ${dogWeight} ${weightUnit} (Dose diária recomendada: ${calculatedDailyGrams}g):\n\n` +
      `Ingredientes Proporcionais:\n` +
      activeRecipe.ingredients
        .map(ing => {
          const scaled = (ing.rawAmount * multiplier).toFixed(1);
          return `- ${ing.name}: ${scaled}${ing.unit} (${ing.purpose})`;
        })
        .join('\n') +
      `\n\nModo de Preparo:\n` +
      activeRecipe.instructions.map((ins, i) => `${i + 1}. ${ins}`).join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col">
      
      {/* Top Bar with 5 Recipes Selector */}
      <div className="bg-slate-900 px-3 sm:px-6 py-3 border-b border-slate-800">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-black uppercase text-amber-400 tracking-wider shrink-0 pr-2 border-r border-slate-700">
              Combo 5 Receitas:
            </span>
            {recipesData.map(recipe => {
              const isSelected = recipe.id === selectedRecipeId;
              return (
                <button
                  key={recipe.id}
                  id={`btn-select-recipe-${recipe.id}`}
                  onClick={() => setSelectedRecipeId(recipe.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400/50 scale-102'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{recipe.icon}</span>
                  <span>Receita {recipe.number}: {recipe.name}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center shrink-0 cursor-pointer"
            title="Fechar Leitor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recipe Header Banner */}
      <div className={`bg-gradient-to-r ${activeRecipe.accentColor} p-5 sm:p-7 text-white transition-all`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
              {activeRecipe.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-200 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Receita {activeRecipe.number} de 5 • {activeRecipe.categoryName}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
                {activeRecipe.name}
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRecipe}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-white/25 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t.common.copied : t.common.copyRecipe}</span>
            </button>
            <button
              onClick={handlePrintOrDownload}
              className="flex items-center gap-1.5 bg-white text-slate-900 hover:bg-amber-50 px-3.5 py-1.5 rounded-xl text-xs font-black shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-red-600" />
              <span>{t.common.printEbook}</span>
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-white/90 font-medium max-w-3xl leading-relaxed">
          <strong>Objetivo Terapêutico:</strong> {activeRecipe.targetBenefit}
        </p>
      </div>

      {/* Main Content Area: Calculator + Ingredients + Preparation */}
      <div className="p-4 sm:p-7 space-y-6">
        
        {/* Dynamic Weight Dosage Calculator Card */}
        <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-amber-950">
                  Calculadora Inteligente de Dosagem Proporcional
                </h4>
                <p className="text-xs text-amber-800">
                  Ajuste o peso do seu cão para calcular os ingredientes e a dose diária exata
                </p>
              </div>
            </div>

            {/* Unit Switcher */}
            <div className="flex items-center bg-amber-200/60 p-1 rounded-xl">
              <button
                onClick={() => setWeightUnit('kg')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  weightUnit === 'kg' ? 'bg-amber-600 text-white shadow-xs' : 'text-amber-900'
                }`}
              >
                KG
              </button>
              <button
                onClick={() => setWeightUnit('lbs')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  weightUnit === 'lbs' ? 'bg-amber-600 text-white shadow-xs' : 'text-amber-900'
                }`}
              >
                LBS
              </button>
            </div>
          </div>

          {/* Slider & Result */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>Porte Mini (2 {weightUnit})</span>
                <span className="text-amber-900 font-extrabold text-sm">
                  {dogWeight} {weightUnit}
                </span>
                <span>Porte Gigante (50+ {weightUnit})</span>
              </div>
              <input
                id="slider-dog-weight"
                type="range"
                min={weightUnit === 'kg' ? 2 : 4}
                max={weightUnit === 'kg' ? 50 : 110}
                step={weightUnit === 'kg' ? 1 : 2}
                value={dogWeight}
                onChange={e => setDogWeight(Number(e.target.value))}
                className="w-full h-2.5 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            <div className="bg-white rounded-xl p-3 border border-amber-300 text-center shadow-xs">
              <span className="text-[11px] font-bold uppercase text-slate-500 block">
                Dose Diária Indicada
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-700">
                {calculatedDailyGrams} g
              </span>
              <span className="text-[10px] text-slate-400 block font-medium">
                misturado à comida (1x ao dia)
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Proportional Ingredients & Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Column 1: Ingredients adjusted to dog's weight */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                Ingredientes Proporcionais ({dogWeight} {weightUnit})
              </h3>
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                Calculado
              </span>
            </div>

            <div className="space-y-2.5">
              {activeRecipe.ingredients.map((ing, idx) => {
                const scaledAmount = (ing.rawAmount * multiplier).toFixed(1);
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 hover:bg-teal-50/50 hover:border-teal-200 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {ing.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {ing.purpose}
                      </p>
                    </div>
                    <span className="text-xs font-black text-teal-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs shrink-0">
                      {scaledAmount} {ing.unit}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Practical Tips */}
            <div className="bg-teal-50/80 rounded-xl p-4 border border-teal-200 text-xs text-teal-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-black text-teal-900">
                <Info className="w-4 h-4 text-teal-700" />
                Dicas Práticas & Conservação:
              </div>
              <ul className="list-disc list-inside space-y-1 text-teal-900/90 pl-1">
                {activeRecipe.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Preparation Steps & Safety */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                Modo de Preparo Passo a Passo
              </h3>
              <span className="text-xs font-bold text-slate-500">
                {activeRecipe.instructions.length} passos
              </span>
            </div>

            <div className="space-y-2.5">
              {activeRecipe.instructions.map((ins, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {ins}
                  </p>
                </div>
              ))}
            </div>

            {/* Safety Warning */}
            <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 text-xs text-rose-950 space-y-1">
              <div className="flex items-center gap-1.5 font-black text-rose-800">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Aviso Veterinário & Segurança:
              </div>
              <p className="text-rose-900/90 font-medium">
                {activeRecipe.warning}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Recipe Navigation */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => setSelectedRecipeId(prev => Math.max(1, prev - 1))}
            disabled={selectedRecipeId === 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Receita Anterior
          </button>

          <span className="text-xs font-extrabold text-slate-500">
            {selectedRecipeId} de 5
          </span>

          <button
            onClick={() => setSelectedRecipeId(prev => Math.min(5, prev + 1))}
            disabled={selectedRecipeId === 5}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Próxima Receita
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
