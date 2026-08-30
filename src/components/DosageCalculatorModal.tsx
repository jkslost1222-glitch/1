import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calculator, X, Sparkles, Scale, Target, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

export const DosageCalculatorModal: React.FC = () => {
  const { activeModal, setActiveModal, calculatorData, updateCalculator, isPt, isEn } = useApp();

  const [weight, setWeight] = useState(calculatorData.currentWeight);
  const [target, setTarget] = useState(calculatorData.targetLoss);
  const [anxiety, setAnxiety] = useState<'leve' | 'moderada' | 'alta'>(calculatorData.anxietyLevel);
  const [calculated, setCalculated] = useState(false);

  if (activeModal !== 'dosageCalc') return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    updateCalculator(weight, target, anxiety);
    setCalculated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-slate-900 border-2 border-rose-500/50 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-black">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {isPt ? 'Calculadora de Doses Personalizada' : isEn ? 'Personalized Dosage Calculator' : 'Calculadora de Dosis Personalizada'}
            </h3>
            <p className="text-xs text-rose-300">
              {isPt ? 'Ajuste exato segundo seu peso e meta' : isEn ? 'Exact adjustment by weight & goal' : 'Ajuste exacto según tu peso y meta'}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleCalculate} className="space-y-4">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase text-slate-300 mb-1">
                {isPt ? 'Seu Peso Atual (kg)' : isEn ? 'Current Weight (kg)' : 'Tu Peso Actual (kg)'}
              </label>
              <input
                type="number"
                min="40"
                max="200"
                value={weight}
                onChange={e => setWeight(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-300 mb-1">
                {isPt ? 'Meta a Perder (kg)' : isEn ? 'Target Loss (kg)' : 'Meta a Perder (kg)'}
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={target}
                onChange={e => setTarget(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-slate-300 mb-1">
              {isPt ? 'Nível de Ansiedade por Doces / Noite:' : isEn ? 'Night Cravings / Anxiety Level:' : 'Nivel de Ansiedad por Dulces / Noche:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['leve', 'moderada', 'alta'] as const).map(lvl => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setAnxiety(lvl)}
                  className={`py-2 px-2 rounded-xl text-xs font-black capitalize transition-all cursor-pointer border ${
                    anxiety === lvl
                      ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm tracking-wide shadow-xl shadow-rose-950/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isPt ? 'CALCULAR MINHA PRESCRIÇÃO' : isEn ? 'CALCULATE MY DOSAGE' : 'CALCULAR MI PRESCRIPCIÓN'}</span>
          </button>
        </form>

        {/* Calculation Result */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-950 border border-rose-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase text-amber-300">
              {isPt ? 'Prescrição Bariátrica Recomendada:' : isEn ? 'Recommended Bariatric Prescription:' : 'Prescripción Bariátrica Recomendada:'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-black">
              {calculatorData.dailyPortions} {isPt ? 'doses / dia' : isEn ? 'doses / day' : 'dosis / día'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {calculatorData.timingAdvice}
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-center">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-amber-400 text-xs font-black">150 ml (2 cubos)</div>
              <div className="text-[10px] text-slate-400">{isPt ? 'Por porção' : isEn ? 'Per portion' : 'Por porción'}</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-emerald-400 text-xs font-black">300 ml Água</div>
              <div className="text-[10px] text-slate-400">{isPt ? 'Obrigatório junto' : isEn ? 'Must drink with it' : 'Obligatorio con la dosis'}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
