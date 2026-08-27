import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Bone, Flame, Check, Printer, X, Info } from 'lucide-react';

interface MobilityProtocolViewProps {
  onClose: () => void;
}

export const MobilityProtocolView: React.FC<MobilityProtocolViewProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [prepMethod, setPrepMethod] = useState<'raw' | 'heated'>('heated');

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-orange-100 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#d97706] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🦴
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-amber-100 px-2.5 py-0.5 rounded-md">
              {isEn ? 'Orthopedics & Joints' : 'Ortopedia & Articulações'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isEn ? 'Canine Mobility Protocol • Golden Paste' : 'Protocolo Mobilidade Canina • Pasta Dourada'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-amber-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'Recipe for Golden Paste with culinary turmeric and virgin coconut oil. Deep anti-inflammatory support for dogs suffering from arthritis, hip dysplasia, and spinal stiffness.'
            : 'Receita da Pasta Dourada com Cúrcuma de grau alimentício e Óleo de Coco Virgem. Ação anti-inflamatória profunda para cães com artrite, artrose, displasia e rigidez na coluna.'}
        </p>

        {/* Method Switcher */}
        <div className="flex items-center gap-2 mt-4 pt-2 border-t border-white/20">
          <button
            onClick={() => setPrepMethod('heated')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              prepMethod === 'heated'
                ? 'bg-white text-orange-950 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {isEn ? '🔥 Traditional Cooked Method (Maximum Bioavailability)' : '🔥 Método Aquecido Tradicional (Maior biodisponibilidade)'}
          </button>
          <button
            onClick={() => setPrepMethod('raw')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              prepMethod === 'raw'
                ? 'bg-white text-orange-950 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {isEn ? '🥣 Quick No-Cook Method' : '🥣 Método Rápido Sem Fogo'}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Ingredients Matrix */}
        <div className="bg-orange-50/80 rounded-2xl p-5 border border-orange-200 space-y-3">
          <h4 className="text-sm font-black text-orange-950 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-600" />
            {isEn
              ? 'Proportional Golden Paste Formula (For 1 Jar / 14 Days)'
              : 'Fórmula Proporcional da Pasta Dourada (Para 1 Pote de 14 Dias)'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-orange-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">{isEn ? 'Ingredient 1' : 'Ingrediente 1'}</span>
              <strong className="text-sm text-slate-900 block mt-0.5">{isEn ? '1/2 Cup Pure Turmeric' : '1/2 Xícara de Cúrcuma Pura'}</strong>
              <span className="text-[11px] text-orange-800">{isEn ? 'Culinary grade (additive-free)' : 'Grau alimentício (sem corantes)'}</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-orange-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">{isEn ? 'Ingredient 2' : 'Ingrediente 2'}</span>
              <strong className="text-sm text-slate-900 block mt-0.5">{isEn ? '1/3 Cup Virgin Coconut Oil' : '1/3 Xícara de Óleo de Coco'}</strong>
              <span className="text-[11px] text-orange-800">{isEn ? 'Cold-pressed virgin oil' : 'Virgem prensado a frio'}</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-orange-200">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">{isEn ? 'Ingredient 3 (Activator)' : 'Ingrediente 3 (Ativador)'}</span>
              <strong className="text-sm text-slate-900 block mt-0.5">{isEn ? '1/2 Tsp Fresh Black Pepper' : '1/2 Colher de Café de Pimenta-Preta'}</strong>
              <span className="text-[11px] text-orange-800">{isEn ? 'Freshly ground (+2000% absorption)' : 'Moída na hora (+2000% absorção)'}</span>
            </div>
          </div>
        </div>

        {/* Preparation Guide */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-slate-900">
            {prepMethod === 'heated'
              ? (isEn ? 'Preparation Steps: Cooked Version' : 'Modo de Preparo: Versão Aquecida')
              : (isEn ? 'Preparation Steps: Quick No-Cook Version' : 'Modo de Preparo: Versão Rápida Sem Fogo')}
          </h4>

          {prepMethod === 'heated' ? (
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <p className="text-xs sm:text-sm text-slate-700">
                  {isEn
                    ? 'Boil 1 cup of water with the turmeric over low heat for 7 to 10 minutes, stirring constantly until a thick paste forms.'
                    : 'Ferva 1 xícara de água com a cúrcuma em fogo baixo por 7 a 10 minutos mexendo sempre até formar uma pasta grossa.'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <p className="text-xs sm:text-sm text-slate-700">
                  {isEn
                    ? 'Turn off the heat and let it cool slightly. Add the coconut oil and freshly ground black pepper, stirring vigorously until smooth.'
                    : 'Desligue o fogo e espere amornar. Adicione o óleo de coco e a pimenta moída na hora, misturando vigorosamente.'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <p className="text-xs sm:text-sm text-slate-700">
                  {isEn
                    ? 'Store in a sterile glass jar in the refrigerator for up to 2 weeks.'
                    : 'Guarde em pote de vidro esterilizado na geladeira por até 2 semanas.'}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <p className="text-xs sm:text-sm text-slate-700">
                  {isEn
                    ? 'Soften 1 tsp of virgin coconut oil and stir in 1/4 tsp of pure turmeric and a microscopic pinch of fresh pepper.'
                    : 'Amoleça 1 colher de chá de óleo de coco e misture diretamente 1/4 colher de café de cúrcuma e uma pitadinha de pimenta.'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <p className="text-xs sm:text-sm text-slate-700">
                  {isEn
                    ? 'Mix directly into your dog’s meal immediately.'
                    : 'Misture à refeição do cão imediatamente.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Dosage Guidelines */}
        <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs space-y-0.5">
            <span className="font-black text-amber-400">{isEn ? 'Recommended Daily Dosage:' : 'Dosagem Recomendada:'}</span>
            <p className="text-slate-300">
              {isEn
                ? 'Small dogs (up to 10kg/22lbs): 1/4 tsp daily • Medium dogs (10-25kg): 1/2 tsp • Large dogs (25kg+): 1 level tsp.'
                : 'Cães pequenos (até 10kg): 1/4 colher de chá ao dia • Cães médios (10-25kg): 1/2 colher • Grandes (25kg+): 1 colher de chá rasa.'}
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            {isEn ? 'Print Guide' : 'Imprimir Guia'}
          </button>
        </div>
      </div>
    </div>
  );
};
