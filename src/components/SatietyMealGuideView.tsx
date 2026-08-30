import React from 'react';
import { useApp } from '../context/AppContext';
import { Utensils, CheckCircle2, XCircle, Flame, ShieldAlert, Sparkles, Heart } from 'lucide-react';

export const SatietyMealGuideView: React.FC = () => {
  const { isPt, isEn } = useApp();

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border-2 border-teal-500/30 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-black uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>{isPt ? 'Nutrição Inteligente' : isEn ? 'Smart Nutrition' : 'Nutrición Inteligente'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isPt ? 'Guia do Prato Saciante & Combinações' : isEn ? 'Satiety Meal Guide & Pairings' : 'Guía del Plato Saciante & Combinaciones'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isPt
              ? 'Como montar seus pratos após a gelatina bariátrica para manter a insulina baixa e o corpo queimando gordura sem sacrifício.'
              : isEn
              ? 'How to build meals after your bariatric gelatin dose to keep insulin low and fat burning active with zero deprivation.'
              : 'Cómo armar tus platos después de consumir la gelatina para mantener la insulina baja y quemar grasa sin pasar hambre.'}
          </p>
        </div>
      </div>

      {/* The 50 / 25 / 25 Plate Rule */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
        <h3 className="text-lg font-black text-white flex items-center gap-2">
          <span>🍽️</span>
          <span>{isPt ? 'A Regra do Prato 50 / 25 / 25' : isEn ? 'The 50 / 25 / 25 Plate Rule' : 'La Regla del Plato 50 / 25 / 25'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
            <div className="text-2xl font-black text-emerald-400">50%</div>
            <div className="text-xs font-black uppercase text-emerald-300">
              {isPt ? 'Fibras & Vegetais Verdes' : isEn ? 'Fibers & Green Veggies' : 'Fibras & Vegetales Verdes'}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Espinaca, brócoli, calabacín, lechuga, pepino, espárragos. Volumen gástrico masivo con casi cero calorías.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-2">
            <div className="text-2xl font-black text-rose-400">25%</div>
            <div className="text-xs font-black uppercase text-rose-300">
              {isPt ? 'Proteína Magra de Alta Saciedade' : isEn ? 'High Satiety Lean Protein' : 'Proteína Magra de Alta Saciedad'}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Pechuga de pollo, huevos enteros, pescado blanco, carne magra, tofu o atún al agua.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2">
            <div className="text-2xl font-black text-amber-400">25%</div>
            <div className="text-xs font-black uppercase text-amber-300">
              {isPt ? 'Gorduras Boas ou Tubérculos' : isEn ? 'Healthy Fats or Roots' : 'Grasas Buenas o Tubérculos'}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Aguacate / palta, aceite de oliva virgen extra, camote / batata o semillas tostadas.
            </p>
          </div>
        </div>
      </div>

      {/* Allowed vs Prohibited */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Recommended Foods */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-black text-sm uppercase">
            <CheckCircle2 className="w-5 h-5" />
            <span>{isPt ? 'Alimentos Recomendados (Aceleram o Efeito)' : isEn ? 'Recommended Foods (Accelerators)' : 'Alimentos Recomendados (Aceleran el Efecto)'}</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-200">
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🥦 <strong>Vegetales crucíferos:</strong> Brócoli, coliflor y repollo (contienen indol-3-carbinol antiinflamatorio).
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🍳 <strong>Huevos enteros:</strong> La colina de la yema estimula la descomposición de lípidos hepáticos.
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🥑 <strong>Grasas monoinsaturadas:</strong> Aceite de oliva virgen y aguacate (inducen liberación de péptido YY).
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🍋 <strong>Cítricos y especias:</strong> Limón, canela de ceilán, cúrcuma, jengibre fresco.
            </li>
          </ul>
        </div>

        {/* Prohibited Foods */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-black text-sm uppercase">
            <XCircle className="w-5 h-5" />
            <span>{isPt ? 'Evitar nos Primeiros 14 Dias (Sabotadores)' : isEn ? 'Avoid in First 14 Days (Saboteurs)' : 'Evitar en los Primeros 14 Días (Saboteadores)'}</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-200">
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🥤 <strong>Refrescos y jugos embotellados:</strong> Fructosa líquida que bloquea la leptina y causa hambre constante.
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🍞 <strong>Harinas refinadas ultraprocesadas:</strong> Pan blanco, galletas y bollería que disparan la insulina.
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🍿 <strong>Snacks con glutamato monosódico:</strong> Frituras de bolsa que engañan a las papilas gustativas.
            </li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              🍬 <strong>Edulcorantes como aspartamo o maltodextrina:</strong> Inflaman la microbiota intestinal.
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
