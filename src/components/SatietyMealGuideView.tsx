import React from 'react';
import { useApp } from '../context/AppContext';
import { Utensils, CheckCircle2, XCircle } from 'lucide-react';

export const SatietyMealGuideView: React.FC = () => {
  const { language, t } = useApp();

  const plateData = {
    es: {
      ruleTitle: 'La Regla del Plato 50 / 25 / 25',
      col1Pct: '50%',
      col1Title: 'Fibras & Vegetales Verdes',
      col1Desc: 'Espinaca, brócoli, calabacín, lechuga, pepino, espárragos. Volumen gástrico masivo con casi cero calorías.',
      col2Pct: '25%',
      col2Title: 'Proteína Magra de Alta Saciedad',
      col2Desc: 'Pechuga de pollo, huevos enteros, pescado blanco, carne magra, tofu o atún al agua.',
      col3Pct: '25%',
      col3Title: 'Grasas Buenas o Tubérculos',
      col3Desc: 'Aguacate / palta, aceite de oliva virgen extra, camote / batata o semillas tostadas.',
      recommendedTitle: 'Alimentos Recomendados (Aceleran el Efecto)',
      recommendedList: [
        { icon: '🥦', title: 'Vegetales crucíferos:', desc: 'Brócoli, coliflor y repollo (contienen indol-3-carbinol antiinflamatorio).' },
        { icon: '🍳', title: 'Huevos enteros:', desc: 'La colina de la yema estimula la descomposición de lípidos hepáticos.' },
        { icon: '🥑', title: 'Grasas monoinsaturadas:', desc: 'Aceite de oliva virgen y aguacate (inducen liberación de péptido YY).' },
        { icon: '🍋', title: 'Cítricos y especias:', desc: 'Limón, canela de ceilán, cúrcuma, jengibre fresco.' }
      ],
      avoidTitle: 'Evitar en los Primeros 14 Días (Saboteadores)',
      avoidList: [
        { icon: '🥤', title: 'Refrescos y jugos embotellados:', desc: 'Fructosa líquida que bloquea la leptina y causa hambre constante.' },
        { icon: '🍞', title: 'Harinas refinadas ultraprocesadas:', desc: 'Pan blanco, galletas y bollería que disparan la insulina.' },
        { icon: '🍿', title: 'Snacks con glutamato monosódico:', desc: 'Frituras de bolsa que engañan a las papilas gustativas.' },
        { icon: '🍬', title: 'Edulcorantes como aspartamo o maltodextrina:', desc: 'Inflaman la microbiota intestinal.' }
      ]
    },
    pt: {
      ruleTitle: 'A Regra do Prato 50 / 25 / 25',
      col1Pct: '50%',
      col1Title: 'Fibras & Vegetais Verdes',
      col1Desc: 'Espinafre, brócolis, abobrinha, alface, pepino, aspargos. Volume gástrico expressivo com quase zero calorias.',
      col2Pct: '25%',
      col2Title: 'Proteína Magra de Alta Saciedade',
      col2Desc: 'Peito de frango, ovos inteiros, peixe branco, carne magra, tofu ou atum em água.',
      col3Pct: '25%',
      col3Title: 'Gorduras Boas ou Tubérculos',
      col3Desc: 'Abacate, azeite de oliva extravirgem, batata-doce ou sementes torradas.',
      recommendedTitle: 'Alimentos Recomendados (Aceleram o Efeito)',
      recommendedList: [
        { icon: '🥦', title: 'Vegetais crucíferos:', desc: 'Brócolis, couve-flor e repolho (ricos em indol-3-carbinol anti-inflamatório).' },
        { icon: '🍳', title: 'Ovos inteiros:', desc: 'A colina da gema ativa a degradação de lipídios no fígado.' },
        { icon: '🥑', title: 'Gorduras boas:', desc: 'Azeite de oliva e abacate (estimulam o hormônio da saciedade peptídeo YY).' },
        { icon: '🍋', title: 'Cítricos e especiarias:', desc: 'Limão, canela do Ceilão, cúrcuma pura e gengibre fresco.' }
      ],
      avoidTitle: 'Evitar nos Primeiros 14 Dias (Sabotadores)',
      avoidList: [
        { icon: '🥤', title: 'Refrigerantes e sucos de caixinha:', desc: 'Frutose líquida que desregula a leptina e causa fome compulsiva.' },
        { icon: '🍞', title: 'Farinhas refinadas ultraprocessadas:', desc: 'Pão branco, biscoitos e massas que elevam a insulina.' },
        { icon: '🍿', title: 'Salgadinhos com glutamato:', desc: 'Frituras industrializadas que viciam o paladar.' },
        { icon: '🍬', title: 'Adoçantes como aspartame ou maltodextrina:', desc: 'Inflamam a flora intestinal e causam inchaço.' }
      ]
    },
    en: {
      ruleTitle: 'The 50 / 25 / 25 Plate Rule',
      col1Pct: '50%',
      col1Title: 'Fibers & Green Veggies',
      col1Desc: 'Spinach, broccoli, zucchini, lettuce, cucumber, asparagus. High physical volume with near zero calories.',
      col2Pct: '25%',
      col2Title: 'High-Satiety Lean Protein',
      col2Desc: 'Chicken breast, whole eggs, white fish, lean beef, tofu, or tuna in water.',
      col3Pct: '25%',
      col3Title: 'Healthy Fats or Root Veggies',
      col3Desc: 'Avocado, extra virgin olive oil, sweet potato, or toasted seeds.',
      recommendedTitle: 'Recommended Foods (Metabolic Accelerators)',
      recommendedList: [
        { icon: '🥦', title: 'Cruciferous vegetables:', desc: 'Broccoli, cauliflower, and cabbage (rich in anti-inflammatory indole-3-carbinol).' },
        { icon: '🍳', title: 'Whole eggs:', desc: 'Yolk choline promotes healthy hepatic lipid breakdown.' },
        { icon: '🥑', title: 'Monounsaturated fats:', desc: 'Olive oil and avocado (stimulate peptide YY fullness hormones).' },
        { icon: '🍋', title: 'Citrus & Spices:', desc: 'Lemon, Ceylon cinnamon, turmeric, fresh ginger.' }
      ],
      avoidTitle: 'Avoid During First 14 Days (Metabolic Saboteurs)',
      avoidList: [
        { icon: '🥤', title: 'Sodas and bottled fruit juices:', desc: 'Liquid fructose blunts leptin signals and triggers constant cravings.' },
        { icon: '🍞', title: 'Refined ultra-processed flours:', desc: 'White bread, pastries, and crackers that trigger insulin spikes.' },
        { icon: '🍿', title: 'MSG snacks and chips:', desc: 'Packaged fried snacks that hijack taste buds.' },
        { icon: '🍬', title: 'Aspartame or maltodextrin sweeteners:', desc: 'Disrupt gut microbiome and provoke fluid retention.' }
      ]
    }
  };

  const current = plateData[language] || plateData.es;

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border-2 border-teal-500/30 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-black uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.plateView.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.plateView.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.plateView.subtitle}
          </p>
        </div>
      </div>

      {/* The 50 / 25 / 25 Plate Rule */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
        <h3 className="text-lg font-black text-white flex items-center gap-2">
          <span>🍽️</span>
          <span>{current.ruleTitle}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
            <div className="text-2xl font-black text-emerald-400">{current.col1Pct}</div>
            <div className="text-xs font-black uppercase text-emerald-300">
              {current.col1Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              {current.col1Desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-2">
            <div className="text-2xl font-black text-rose-400">{current.col2Pct}</div>
            <div className="text-xs font-black uppercase text-rose-300">
              {current.col2Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              {current.col2Desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2">
            <div className="text-2xl font-black text-amber-400">{current.col3Pct}</div>
            <div className="text-xs font-black uppercase text-amber-300">
              {current.col3Title}
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              {current.col3Desc}
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
            <span>{current.recommendedTitle}</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-200">
            {current.recommendedList.map((item, idx) => (
              <li key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                {item.icon} <strong className="text-white">{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Prohibited Foods */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-rose-500/30 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-black text-sm uppercase">
            <XCircle className="w-5 h-5" />
            <span>{current.avoidTitle}</span>
          </div>

          <ul className="space-y-2 text-xs text-slate-200">
            {current.avoidList.map((item, idx) => (
              <li key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                {item.icon} <strong className="text-rose-300">{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};
