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

  const localizedRecipes = isEn
    ? [
        {
          id: 1,
          number: 1,
          name: 'Well-Nourished Dog',
          categoryName: 'Anti-inflammatory Supplement & Immunity',
          badge: 'Joints & Cellular Immunity',
          icon: '🥣',
          accentColor: 'from-[#c92a17] via-[#dc2626] to-[#b91c1c]',
          targetBenefit: 'Potent systemic anti-inflammatory support, immune modulation, and cellular protection against free radicals.',
          baseDosageGramsPer10kg: 10,
          ingredients: [
            { name: 'Pure culinary turmeric powder (human grade)', amountPer10kg: '1/2 tsp (1.5g)', rawAmount: 1.5, unit: 'g', purpose: 'Curcuminoids providing potent natural anti-inflammatory action' },
            { name: 'Cold-pressed extra virgin coconut oil', amountPer10kg: '1 level tsp (5g)', rawAmount: 5, unit: 'g', purpose: 'Medium-chain fatty acids (lauric acid) serving as lipid carrier' },
            { name: 'Freshly ground black pepper', amountPer10kg: '1 microscopic pinch (<0.1g)', rawAmount: 0.1, unit: 'g', purpose: 'Piperine boosts curcumin bio-absorption by up to 2000%' },
            { name: 'Ground golden flaxseed meal', amountPer10kg: '1 tsp (3.5g)', rawAmount: 3.5, unit: 'g', purpose: 'Plant-based Omega-3 (ALA) and microbiome prebiotic fiber' }
          ],
          instructions: [
            'Combine turmeric powder with a microscopic pinch of freshly ground black pepper in a clean glass bowl.',
            'Gently warm coconut oil in a warm water bath (never boiling) just until it turns liquid.',
            'Incorporate turmeric and flaxseed meal into the coconut oil, stirring with a silicone spatula into a smooth golden paste.',
            'Serve mixed directly into food once daily according to your dog’s weight.'
          ],
          tips: [
            'Store in an airtight dark glass jar in the refrigerator for up to 14 days.',
            'If your dog has never had turmeric, start with half dose for the first 3 days.'
          ],
          warning: 'Do not use in pregnant females or dogs with diagnosed bile duct obstruction without veterinary consultation.'
        },
        {
          id: 2,
          number: 2,
          name: 'Flexible Joints',
          categoryName: 'Collagen & Joint Cartilage Regeneration',
          badge: 'Mobility & Collagen',
          icon: '🦴',
          accentColor: 'from-[#b91c1c] via-[#ea580c] to-[#c2410c]',
          targetBenefit: 'Cartilage rebuilding, synovial fluid lubrication, and relief of morning stiffness in senior or large-breed dogs.',
          baseDosageGramsPer10kg: 15,
          ingredients: [
            { name: 'Unflavored pure gelatin (hydrolyzed collagen)', amountPer10kg: '1 heaping tsp (4g)', rawAmount: 4, unit: 'g', purpose: 'Rich source of glycine, proline, and bioactive collagen peptides' },
            { name: 'Homemade bone broth concentrated in natural gelatin', amountPer10kg: '1 tbsp (15ml)', rawAmount: 15, unit: 'ml', purpose: 'Glucosaminoglycans, chondroitin sulfate, and bio-available minerals' },
            { name: 'Purified Omega-3 fish oil (EPA/DHA)', amountPer10kg: '1/2 small tsp (1.5ml)', rawAmount: 1.5, unit: 'ml', purpose: 'Suppression of inflammatory cytokines in synovial joint capsules' },
            { name: 'Freshly ground sesame seeds', amountPer10kg: '1/2 tsp (2g)', rawAmount: 2, unit: 'g', purpose: 'Natural bio-available calcium and muscle-relaxing magnesium' }
          ],
          instructions: [
            'Bloom unflavored gelatin in 2 tablespoons of warm filtered water until fully dissolved.',
            'Add warm homemade bone broth and stir thoroughly with the gelatin.',
            'Add the Omega-3 fish oil and ground sesame seeds immediately before serving.',
            'Drizzle over your pet’s morning meal.'
          ],
          tips: [
            'Ideal for senior dogs, hip-dysplasia prone breeds (Golden, German Shepherd, Labrador), or dogs with stiffness.',
            'Can be poured into paw silicone molds and frozen into refreshing, cooling summer joint treats.'
          ],
          warning: 'Ensure gelatin contains zero artificial sweeteners, added sugars, or xylitol.'
        },
        {
          id: 3,
          number: 3,
          name: 'Natural Calming Formula',
          categoryName: 'Relaxing & Neuroprotective Supplement',
          badge: 'Anxiety & Stress',
          icon: '💤',
          accentColor: 'from-[#c2410c] via-[#d97706] to-[#b45309]',
          targetBenefit: 'Cortisol reduction, hyperactivity relief, support during thunderstorms, fireworks, vet visits, and car rides.',
          baseDosageGramsPer10kg: 8,
          ingredients: [
            { name: 'Chamomile and Passionflower (Passiflora) concentrated tea', amountPer10kg: '2 tbsp (20ml)', rawAmount: 20, unit: 'ml', purpose: 'Apigenin and natural flavonoids acting on calming GABA receptors' },
            { name: 'Canine Valerian root powder / dried leaf', amountPer10kg: '1 light pinch (0.5g)', rawAmount: 0.5, unit: 'g', purpose: 'Muscular relaxation and vegetative nervous system anchoring' },
            { name: 'Natural L-Tryptophan (Brewer’s nutritional yeast)', amountPer10kg: '1/2 tsp (1.5g)', rawAmount: 1.5, unit: 'g', purpose: 'Direct biochemical precursor to soothing serotonin and melatonin' },
            { name: 'Ripe mashed banana', amountPer10kg: '1 medium slice (10g)', rawAmount: 10, unit: 'g', purpose: 'Flavorful carrier rich in magnesium and tryptophan transport carbs' }
          ],
          instructions: [
            'Brew a concentrated infusion of chamomile and passionflower leaves (100ml water to 1 tbsp herbs). Allow to cool completely.',
            'Mash a slice of ripe banana with a fork into a fine puree.',
            'Mix brewer’s yeast, valerian pinch, and 2 tbsp of the cool herbal tea into the banana mash.',
            'Offer 45 to 60 minutes prior to stressful events (thunderstorms, guests, fireworks, travel, or departure).'
          ],
          tips: [
            'Can be stuffed inside an interactive lick toy (like a Kong) and frozen for 30 minutes of calming licking activity.',
            'Does not cause sedation or loss of motor control; promotes mindful, biological relaxation.'
          ],
          warning: 'Never use teas containing black/green tea caffeine or industrial artificial flavorings.'
        },
        {
          id: 4,
          number: 4,
          name: 'Odor & Digestion Control',
          categoryName: 'Digestive Supplement & Fresh Breath',
          badge: 'Body Odor & Breath',
          icon: '🧼',
          accentColor: 'from-[#c92a17] via-[#dc2626] to-[#ea580c]',
          targetBenefit: 'Drastic reduction of intestinal gas, firmer stools with minimal odor, clean coat smell, and refreshed breath.',
          baseDosageGramsPer10kg: 6,
          ingredients: [
            { name: 'Cold-pressed pure Chlorella powder', amountPer10kg: '1/4 small tsp (0.5g)', rawAmount: 0.5, unit: 'g', purpose: 'Natural chlorophyll acting as a whole-body internal deodorizer' },
            { name: 'Fresh organic mint leaves finely minced', amountPer10kg: '3 clean leaves', rawAmount: 1, unit: 'g', purpose: 'Refreshing action, oral antiseptics, and carminative gas reduction' },
            { name: 'Pure coconut flour (prebiotic fiber)', amountPer10kg: '1 tsp (3g)', rawAmount: 3, unit: 'g', purpose: 'Fermentable fibers that nourish beneficial colonic microbiome bacteria' },
            { name: 'Plain unsweetened whole milk yogurt or kefir', amountPer10kg: '1 dessert spoon (10g)', rawAmount: 10, unit: 'g', purpose: 'Live probiotic Lactobacillus strains to restore gut flora balance' }
          ],
          instructions: [
            'Wash fresh mint leaves thoroughly and mince them finely.',
            'In a small bowl, place plain unsweetened yogurt.',
            'Dust chlorella powder and coconut flour over top, stirring until emerald green and uniform.',
            'Fold in the minced mint and mix into food or offer as a healthy post-meal treat.'
          ],
          tips: [
            'Within 7 to 10 days of consistent use, notice a sharp drop in flatulence and much fresher breath.',
            'Especially beneficial for flat-faced brachycephalic breeds (Bulldogs, Pugs, Shih Tzus).'
          ],
          warning: 'Yogurt must be 100% plain (milk + cultures only) without added sugars, xylitol, or artificial colorings.'
        },
        {
          id: 5,
          number: 5,
          name: 'Healthy Weight Management',
          categoryName: 'Satiety & Metabolism Support',
          badge: 'Satiety & Metabolism',
          icon: '⚖️',
          accentColor: 'from-[#c92a17] via-[#ea580c] to-[#d97706]',
          targetBenefit: 'Increased meal volume and fullness with negligible calories, lipid metabolism support, and lean muscle retention.',
          baseDosageGramsPer10kg: 25,
          ingredients: [
            { name: 'Steamed zucchini or chayote squash puree', amountPer10kg: '2 heaping tbsp (20g)', rawAmount: 20, unit: 'g', purpose: 'High stomach fullness with near-zero calorie density and deep hydration' },
            { name: 'Pure psyllium husk powder', amountPer10kg: '1/3 tsp (1g)', rawAmount: 1, unit: 'g', purpose: 'Soluble mucilaginous fiber that slows gastric emptying gently' },
            { name: 'Fresh ginger root finely grated', amountPer10kg: '1 millimeter micro-grate (<0.2g)', rawAmount: 0.2, unit: 'g', purpose: 'Mild thermogenic gingerols aiding healthy fat metabolism' },
            { name: 'Organic raw unfiltered apple cider vinegar', amountPer10kg: '1/2 small tsp (1.5ml)', rawAmount: 1.5, unit: 'ml', purpose: 'Acetic acid modulating post-meal blood sugar and digestion' }
          ],
          instructions: [
            'Steam zucchini until tender and mash thoroughly with a fork.',
            'Mix psyllium powder and apple cider vinegar into the warm vegetable puree.',
            'Let rest for 3 minutes until the psyllium expands into a satisfying, gelatinous texture.',
            'Replace 15% to 20% of your dog’s standard kibble portion with this filling functional puree.'
          ],
          tips: [
            'Allows overweight dogs to enjoy generous meal bowls without constant begging or hunger stress.',
            'Improves gut transit time and helps prevent constipation through cellular hydration.'
          ],
          warning: 'Always ensure your dog has unlimited access to clean fresh water when consuming psyllium fiber.'
        }
      ]
    : recipesData;

  const activeRecipe = localizedRecipes.find(r => r.id === selectedRecipeId) || localizedRecipes[0];

  // Convert weight to kg for calculation
  const weightInKg = weightUnit === 'lbs' ? dogWeight * 0.453592 : dogWeight;
  const multiplier = Math.max(0.2, weightInKg / 10);

  // Proportional daily dosage in grams
  const calculatedDailyGrams = (activeRecipe.baseDosageGramsPer10kg * multiplier).toFixed(1);

  const handleCopyRecipe = () => {
    const text = isEn
      ? `🐾 ${activeRecipe.name} (${activeRecipe.categoryName})\n` +
        `For dog of ${dogWeight} ${weightUnit} (Recommended daily dose: ${calculatedDailyGrams}g):\n\n` +
        `Proportional Ingredients:\n` +
        activeRecipe.ingredients
          .map(ing => {
            const scaled = (ing.rawAmount * multiplier).toFixed(1);
            return `- ${ing.name}: ${scaled}${ing.unit} (${ing.purpose})`;
          })
          .join('\n') +
        `\n\nInstructions:\n` +
        activeRecipe.instructions.map((ins, i) => `${i + 1}. ${ins}`).join('\n')
      : `🐾 ${activeRecipe.name} (${activeRecipe.categoryName})\n` +
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
              {isEn ? '5-Formula Combo:' : 'Combo 5 Receitas:'}
            </span>
            {localizedRecipes.map(recipe => {
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
                  <span>{isEn ? `Recipe ${recipe.number}: ${recipe.name}` : `Receita ${recipe.number}: ${recipe.name}`}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center shrink-0 cursor-pointer"
            title={isEn ? 'Close Reader' : 'Fechar Leitor'}
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
                {isEn
                  ? `Recipe ${activeRecipe.number} of 5 • ${activeRecipe.categoryName}`
                  : `Receita ${activeRecipe.number} de 5 • ${activeRecipe.categoryName}`}
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
          <strong>{isEn ? 'Therapeutic Goal:' : 'Objetivo Terapêutico:'}</strong> {activeRecipe.targetBenefit}
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
                  {isEn ? 'Smart Proportional Dosage Calculator' : 'Calculadora Inteligente de Dosagem Proporcional'}
                </h4>
                <p className="text-xs text-amber-800">
                  {isEn
                    ? 'Adjust your dog’s weight to instantly calculate proportional ingredients and exact daily dose'
                    : 'Ajuste o peso do seu cão para calcular os ingredientes e a dose diária exata'}
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
                <span>{isEn ? `Toy / Mini (2 ${weightUnit})` : `Porte Mini (2 ${weightUnit})`}</span>
                <span className="text-amber-900 font-extrabold text-sm">
                  {dogWeight} {weightUnit}
                </span>
                <span>{isEn ? `Giant (50+ ${weightUnit})` : `Porte Gigante (50+ ${weightUnit})`}</span>
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
                {isEn ? 'Recommended Daily Dose' : 'Dose Diária Indicada'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-700">
                {calculatedDailyGrams} g
              </span>
              <span className="text-[10px] text-slate-400 block font-medium">
                {isEn ? 'mixed with food (1x daily)' : 'misturado à comida (1x ao dia)'}
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
                {isEn
                  ? `Proportional Ingredients (${dogWeight} ${weightUnit})`
                  : `Ingredientes Proporcionais (${dogWeight} ${weightUnit})`}
              </h3>
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                {isEn ? 'Calculated' : 'Calculado'}
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
                {isEn ? 'Practical Tips & Storage:' : 'Dicas Práticas & Conservação:'}
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
                {isEn ? 'Step-by-Step Preparation' : 'Modo de Preparo Passo a Passo'}
              </h3>
              <span className="text-xs font-bold text-slate-500">
                {activeRecipe.instructions.length} {isEn ? 'steps' : 'passos'}
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
                {isEn ? 'Veterinary Warning & Safety:' : 'Aviso Veterinário & Segurança:'}
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
            {isEn ? 'Previous Recipe' : 'Receita Anterior'}
          </button>

          <span className="text-xs font-extrabold text-slate-500">
            {isEn ? `${selectedRecipeId} of 5` : `${selectedRecipeId} de 5`}
          </span>

          <button
            onClick={() => setSelectedRecipeId(prev => Math.min(5, prev + 1))}
            disabled={selectedRecipeId === 5}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {isEn ? 'Next Recipe' : 'Próxima Receita'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
