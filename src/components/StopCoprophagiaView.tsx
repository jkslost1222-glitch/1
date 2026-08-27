import React from 'react';
import { useApp } from '../context/AppContext';
import { Ban, ShieldAlert, Sparkles, Printer, X } from 'lucide-react';

interface StopCoprophagiaViewProps {
  onClose: () => void;
}

export const StopCoprophagiaView: React.FC<StopCoprophagiaViewProps> = ({ onClose }) => {
  const { t, isEn } = useApp();

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-100 shadow-2xl flex flex-col">
      <div className="bg-gradient-to-r from-[#b45309] via-[#92400e] to-[#78350f] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🚫
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-amber-100 px-2.5 py-0.5 rounded-md">
              {isEn ? 'Behavior & Digestion' : 'Comportamento & Digestão'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isEn ? 'Stop Coprophagia Protocol • Blocker Spray' : 'Protocolo Pare Coprofagia • Spray Bloqueador'}
            </h2>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-amber-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'Definitive solution for dogs that eat their own stools or stools from other animals. Combines digestive enzymatic supplementation with a 100% natural, safe deterrent sensory spray.'
            : 'Solução definitiva para cães que comem fezes próprias ou de outros animais. Combina suplementação enzimática alimentar com spray sensorial dissuasor 100% natural e seguro.'}
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phase 1: Dietary Enriched */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <span className="text-xs font-black uppercase text-amber-800 bg-amber-200/80 px-2.5 py-1 rounded-md">
              {isEn ? 'Stage 1 • Internal Nutritional Action' : 'Etapa 1 • Ação Nutricional Interna'}
            </span>
            <h4 className="text-sm font-black text-slate-900">
              {isEn ? 'Proteolytic Enzymes (Pineapple or Papaya)' : 'Enzimas Proteolíticas (Abacaxi ou Mamão)'}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isEn
                ? 'Add 1 small slice of fresh pineapple or 1 piece of fresh papaya to your dog’s meal once daily. Bromelain and papain completely alter stool odor and taste during digestion, making stools repulsive to the canine sense of smell.'
                : 'Adicione 1 fatia pequena de abacaxi fresco ou 1 pedaço de mamão papaia à refeição do cão 1 vez ao dia. A bromelina e a papaína alteram completamente o odor e o sabor das fezes na digestão, tornando-as altamente desagradáveis ao olfato canino.'}
            </p>
          </div>

          {/* Phase 2: Spray Barrier */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-black uppercase text-slate-700 bg-slate-200 px-2.5 py-1 rounded-md">
              {isEn ? 'Stage 2 • Sensory Deterrent Barrier Spray' : 'Etapa 2 • Spray Repelente de Barreira'}
            </span>
            <h4 className="text-sm font-black text-slate-900">
              {isEn ? 'Natural Deterrent Spray Formula' : 'Fórmula do Spray Dissuasor Natural'}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isEn
                ? 'Mix in a spray bottle: 200ml warm water + 50ml raw apple cider vinegar + 1 pinch cayenne pepper. Mist directly onto stools immediately before cleanup during training to disrupt searching behavior.'
                : 'Misture em um borrifador: 200ml de água morna + 50ml de vinagre de maçã + 1 pitada de pimenta-caiena. Borrife sobre as fezes imediatamente antes de recolhê-las durante a fase de treino para quebrar o padrão de busca.'}
            </p>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 text-xs text-rose-950 space-y-1">
          <span className="font-black text-rose-800">{isEn ? 'Golden Behavioral Rule:' : 'Regra Comportamental de Ouro:'}</span>
          <p className="text-rose-900/90">
            {isEn
              ? 'Never yell, hit, or rub the dog’s nose in stool. The dog interprets scolding as "my owner does not want to see the poop", driving them to eat it faster to hide it. Always clean up calmly and reward immediately when they eliminate in the correct spot.'
              : 'Nunca grite, espanque ou empurre o focinho do cão nas fezes. O cão interpreta a bronca como "meu tutor não quer ver o cocô", levando-o a comer as fezes o mais rápido possível para escondê-las. Apenas recolha com calma e recompense quando fizer no local certo.'}
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={() => window.print()}
            className="bg-amber-800 hover:bg-amber-900 text-white font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            {isEn ? 'Print Anti-Coprophagia Protocol' : 'Imprimir Protocolo Anti-Coprofagia'}
          </button>
        </div>
      </div>
    </div>
  );
};
