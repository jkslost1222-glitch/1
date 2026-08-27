import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Droplet, AlertCircle, ShieldCheck, Download, Printer, X } from 'lucide-react';

interface AntiItchProtocolViewProps {
  onClose: () => void;
}

export const AntiItchProtocolView: React.FC<AntiItchProtocolViewProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [shampooVolumeMl, setShampooVolumeMl] = useState<number>(500);

  // 15 drops per 500ml
  const calculatedDrops = Math.round((shampooVolumeMl / 500) * 15);

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-100 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7e22ce] via-[#6b21a8] to-[#4c1d95] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🌸
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-purple-100 px-2.5 py-0.5 rounded-md">
              {isEn ? 'Natural Canine Dermatology' : 'Dermatologia Canina Natural'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isEn ? 'Anti-Itch Protocol & Gentian Violet 1%' : 'Protocolo Anticoceira & Violeta Genciana 1%'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-purple-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'Natural antiseptic and antifungal topical formula with safe, exact dilution for weekly baths. Eliminates Malassezia yeast overgrowth and relieves desperate itching without harsh steroids.'
            : 'Fórmula tópica natural antisséptica e antifúngica com proporção exata e segura para banho semanal. Elimina a proliferação da levedura Malassezia e alivia o prurido desesperador sem uso de cortisona.'}
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Dynamic Calculator for Shampoo Dilution */}
        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-purple-700" />
            <h4 className="text-sm font-black text-purple-950">
              {isEn
                ? 'Safe Dilution Calculator: Gentian Violet 1% in Dog Shampoo'
                : 'Calculadora de Diluição Segura: Violeta Genciana 1% no Shampoo'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                {isEn ? 'Gentle Dog Shampoo Bottle Volume:' : 'Volume do Frasco de Shampoo Neutro Canino:'}
              </label>
              <input
                type="range"
                min={200}
                max={1000}
                step={50}
                value={shampooVolumeMl}
                onChange={e => setShampooVolumeMl(Number(e.target.value))}
                className="w-full h-2.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
              />
              <div className="flex justify-between text-xs text-slate-500 font-bold">
                <span>200 ml</span>
                <span className="text-purple-900 font-extrabold">{shampooVolumeMl} ml</span>
                <span>1000 ml</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-purple-300 text-center shadow-xs">
              <span className="text-[11px] font-bold uppercase text-slate-500 block">
                {isEn ? 'Drops of Gentian Violet 1%' : 'Gotas de Violeta Genciana 1%'}
              </span>
              <span className="text-2xl font-black text-purple-700">
                {calculatedDrops} {isEn ? 'drops' : 'gotas'}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {isEn ? 'mix & shake well in bottle' : 'homogeneizar bem no frasco'}
              </span>
            </div>
          </div>
        </div>

        {/* Bath Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">1</span>
              {isEn ? 'Application & Lather Time' : 'Aplicação & Tempo de Pausa'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEn
                ? 'Wet the dog with warm water. Lather the entire body with the prepared medicated shampoo, focusing on paws, belly, and armpits. Let it sit for 7 to 10 minutes before rinsing thoroughly.'
                : 'Molhe o cão com água morna. Ensaboe o corpo todo com o shampoo medicado preparado, focando nas patas, barriga e axilas. Deixe agir por 7 a 10 minutos antes do enxágue.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">2</span>
              {isEn ? 'Maintenance Frequency' : 'Frequência de Manutenção'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEn
                ? 'During active flare-ups with intense scratching: 1 bath every 5 to 7 days for 3 weeks. For preventive maintenance: 1 bath every 15 to 20 days.'
                : 'Durante crises ativas de coceira intensa: 1 banho a cada 5 a 7 dias por 3 semanas. Para manutenção preventiva: 1 banho a cada 15 a 20 dias.'}
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-950 space-y-1">
          <div className="flex items-center gap-1.5 font-black text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            {isEn ? 'Important Precaution:' : 'Precaução Importante:'}
          </div>
          <p className="text-amber-900/90 font-medium">
            {isEn
              ? 'Never apply pure, undiluted Gentian Violet directly to the skin. If there are deep bleeding wounds or open sores, rinse with sterile saline solution first and consult a veterinarian.'
              : 'Nunca aplique a Violeta Genciana pura diretamente na pele sem diluição. Em caso de feridas sangrentas profundas, higienize primeiro com soro fisiológico e consulte o veterinário.'}
          </p>
        </div>

        {/* Download PDF button */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white font-black px-4 py-2 rounded-xl text-xs shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            {isEn ? 'Print / Download Anti-Itch Guide PDF' : 'Imprimir / Baixar Guia Anticoceira PDF'}
          </button>
        </div>
      </div>
    </div>
  );
};
