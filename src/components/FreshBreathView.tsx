import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Smile, ShieldCheck, Printer, X } from 'lucide-react';

interface FreshBreathViewProps {
  onClose: () => void;
}

export const FreshBreathView: React.FC<FreshBreathViewProps> = ({ onClose }) => {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-100 shadow-2xl flex flex-col">
      <div className="bg-gradient-to-r from-[#0891b2] via-[#0e7490] to-[#155e75] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🦷
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-cyan-100 px-2.5 py-0.5 rounded-md">
              Higiene Bucal & Tártaro
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              Protocolo Antibafo Canino • Pasta Enzimática
            </h2>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-cyan-100 max-w-3xl leading-relaxed mt-2 font-medium">
          Receita 100% segura para deglutição feita com Óleo de Coco Virgem, folhas de hortelã e clorela. Elimina bactérias anaeróbicas causadoras de mau odor e amolece a placa bacteriana sem estresse.
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        <div className="bg-cyan-50/80 rounded-2xl p-5 border border-cyan-200 space-y-3">
          <h4 className="text-sm font-black text-cyan-950">
            Ingredientes da Pasta Dental Enzimática Caseira:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-cyan-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Base</span>
              <strong className="text-xs sm:text-sm text-slate-900 block mt-0.5">2 colheres de sopa de Óleo de Coco Virgem</strong>
              <span className="text-[11px] text-cyan-800">Ação bactericida natural pelo ácido láurico</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-cyan-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Hálito</span>
              <strong className="text-xs sm:text-sm text-slate-900 block mt-0.5">4 folhas de Hortelã fresca picadinhas</strong>
              <span className="text-[11px] text-cyan-800">Refrescância e controle do odor bucal</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-cyan-200">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Clorofila</span>
              <strong className="text-xs sm:text-sm text-slate-900 block mt-0.5">1 pitada de pó de Clorela pura</strong>
              <span className="text-[11px] text-cyan-800">Neutralização biológica de sulfetos voláteis</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-black text-slate-900">
            Como Aplicar Sem Brigas:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-black text-cyan-700">Passo 1 • Dedo ou Gaze</span>
              <p className="text-xs text-slate-600">Passe uma pequena quantidade no seu dedo indicador envolvido com gaze e deixe o cão lamber para se acostumar com o sabor agradável de coco.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-black text-cyan-700">Passo 2 • Massagem nas Gengivas</span>
              <p className="text-xs text-slate-600">Esfregue suavemente na linha da gengiva e nos dentes caninos superiores por 30 segundos, 3 vezes por semana após o jantar.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={() => window.print()}
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Imprimir Guia de Higiene Bucal
          </button>
        </div>
      </div>
    </div>
  );
};
