import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Droplet, Sparkles, AlertCircle, ShieldCheck, Download, Printer, X, CheckCircle2, Clock, MapPin, Smile } from 'lucide-react';

interface CoceiraXixiProtocolViewProps {
  onClose: () => void;
}

export const CoceiraXixiProtocolView: React.FC<CoceiraXixiProtocolViewProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [shampooVolumeMl, setShampooVolumeMl] = useState<number>(500);
  const [activeTab, setActiveTab] = useState<'coceira' | 'xixi' | 'download'>('coceira');

  // 15 drops per 500ml for Gentian Violet
  const calculatedDrops = Math.round((shampooVolumeMl / 500) * 15);

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200 shadow-2xl flex flex-col">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#6b21a8] via-[#7e22ce] to-[#0f766e] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🌸🎯
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md shadow-xs">
              {isEn ? 'EXCLUSIVE MASTER COMBO' : 'COMBO DUPLO EXCLUSIVO'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {isEn ? 'Anti-Itch & Potty Training Protocol' : 'Protocolo Coceira + Xixi e Fezes no Lugar Certo'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-purple-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'The ultimate 2-in-1 practical solution: Eliminate desperate itching, allergies, and Malassezia yeast with Gentian Violet 1% + Master positive potty training without yelling or punishment.'
            : 'A solução prática 2 em 1: Elimine a coceira desesperadora, fungos e dermatites com a Violeta Genciana 1% + Ensine seu cão a fazer xixi e fezes no tapete higiênico sem broncas ou estresse.'}
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center bg-slate-100 border-b border-slate-200 p-2 gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('coceira')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
            activeTab === 'coceira'
              ? 'bg-purple-700 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          <span>🌸</span>
          <span>{isEn ? '1. Anti-Itch & Skin Relief' : '1. Alívio de Coceiras & Pele'}</span>
        </button>

        <button
          onClick={() => setActiveTab('xixi')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
            activeTab === 'xixi'
              ? 'bg-teal-700 text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          <span>🎯</span>
          <span>{isEn ? '2. Potty Training Routine' : '2. Xixi e Cocô no Lugar Certo'}</span>
        </button>

        <button
          onClick={() => setActiveTab('download')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
            activeTab === 'download'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-white text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>{isEn ? '3. PDF Downloads' : '3. Downloads de Guias'}</span>
        </button>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        
        {/* TAB 1: COCEIRA & VIOLETA GENCIANA */}
        {activeTab === 'coceira' && (
          <div className="space-y-6 animate-fade-in">
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

            {/* Bath Protocol Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">1</span>
                  {isEn ? 'Application & Contact Time' : 'Aplicação & Tempo de Contato'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Wet the dog with warm water. Apply the medicated shampoo foam, massaging gently between toes, belly, and irritated skin. Leave for 7-10 minutes before full rinse.'
                    : 'Molhe o cão com água morna. Ensaboe com o shampoo diluído, massageando entre as patinhas, barriga e áreas irritadas. Deixe agir por 7 a 10 minutos antes de enxaguar abundantemente.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">2</span>
                  {isEn ? 'Relief Routine & Frequency' : 'Rotina & Frequência Semanal'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? 'During active flare-ups: 1 bath every 5-7 days for 3 weeks. For ongoing prevention: 1 bath every 15-20 days.'
                    : 'Em crises agudas de coceira: 1 banho a cada 5 a 7 dias por 3 semanas. Para manutenção preventiva: 1 banho a cada 15 a 20 dias.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: XIXI E FEZES NO LUGAR CERTO */}
        {activeTab === 'xixi' && (
          <div className="space-y-6 animate-fade-in">
            {/* 4 Golden Moments Box */}
            <div className="bg-teal-50 rounded-2xl p-5 border border-teal-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-700" />
                <h4 className="text-sm font-black text-teal-950">
                  {isEn ? 'The 4 Golden Potty Moments of the Day' : 'Os 4 Momentos de Ouro do Xixi no Dia'}
                </h4>
              </div>

              <p className="text-xs text-slate-600">
                {isEn
                  ? 'Dogs have natural biological triggers. Take them to the pee pad immediately during these 4 moments:'
                  : 'Cães possuem gatilhos biológicos exatos. Leve seu cão ao tapete higiênico imediatamente nestes 4 momentos:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">1</span>
                  <span><strong>{isEn ? 'Upon Waking Up:' : 'Logo ao Acordar:'}</strong> {isEn ? 'First thing in the morning or after naps.' : 'A primeira coisa pela manhã ou após qualquer soneca.'}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">2</span>
                  <span><strong>{isEn ? '15-20m After Meals:' : '15-20m Pós-Refeição:'}</strong> {isEn ? 'Gastrocolic reflex stimulates the bowel.' : 'O reflexo gastrocólico estimula a evacuação rápida.'}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">3</span>
                  <span><strong>{isEn ? 'After Active Play:' : 'Após Brincadeiras:'}</strong> {isEn ? 'Excitement and running trigger the bladder.' : 'A agitação e corridas ativam a bexiga.'}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">4</span>
                  <span><strong>{isEn ? 'Before Bedtime:' : 'Antes de Dormir:'}</strong> {isEn ? 'Ensures a full uninterrupted sleep cycle.' : 'Garante uma noite tranquila sem acidentes no chão.'}</span>
                </div>
              </div>
            </div>

            {/* Positive Reinforcement 3-Second Rule & Odor Removal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <h4 className="text-sm font-extrabold text-amber-950 flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-amber-600" />
                  {isEn ? 'The 3-Second Reward Rule' : 'A Regra dos 3 Segundos de Recompensa'}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {isEn
                    ? 'The moment your dog finishes pee on the pad, reward within 3 seconds with high-value treat and enthusiastic praise. Never yell for past mistakes (they cannot associate past actions with anger).'
                    : 'Assim que o cão terminar o xixi no tapete, recompense em até 3 segundos com um petisco saboroso e elogio caloroso. Nunca brigue por erros passados (eles não associam broncas atrasadas).'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  {isEn ? 'Natural Odor Eliminator Spray' : 'Spray Caseiro Neutralizador de Odor'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? 'Mix 2 parts white vinegar, 1 part water, and 5 drops of pure eucalyptus oil. Spray error spots to erase scent markers completely so they won’t repeat in the same wrong place.'
                    : 'Misture 2 partes de vinagre de álcool com 1 parte de água e 5 gotas de essência suave. Limpe os locais errados para neutralizar a marca olfativa que faz o cão repetir o erro.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DOWNLOADS */}
        {activeTab === 'download' && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-sm font-black text-slate-900">
              {isEn ? 'Download Official Materials & Guides (PDF):' : 'Materiais e Guias Oficiais para Download (PDF):'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-200/60 px-2 py-0.5 rounded">PDF OFICIAL</span>
                  <h5 className="text-xs font-black text-slate-900 mt-2">Guia Anticoceira & Violeta Genciana</h5>
                  <p className="text-[11px] text-slate-500 mt-1">2.9 MB • Tabela de dosagens e banhos</p>
                </div>
                <button
                  onClick={() => alert(isEn ? 'Downloading Guide...' : 'Iniciando download do guia...')}
                  className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Download PDF' : 'Baixar PDF'}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-200/60 px-2 py-0.5 rounded">PDF OFICIAL</span>
                  <h5 className="text-xs font-black text-slate-900 mt-2">Manual Xixi & Fezes no Lugar Certo</h5>
                  <p className="text-[11px] text-slate-500 mt-1">3.4 MB • Guia de adestramento sem broncas</p>
                </div>
                <button
                  onClick={() => alert(isEn ? 'Downloading Guide...' : 'Iniciando download do guia...')}
                  className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Download PDF' : 'Baixar PDF'}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">CHECKLIST</span>
                  <h5 className="text-xs font-black text-slate-900 mt-2">Cronograma Semanal Integrado</h5>
                  <p className="text-[11px] text-slate-500 mt-1">1.2 MB • Tabela para porta de geladeira</p>
                </div>
                <button
                  onClick={() => alert(isEn ? 'Downloading Checklist...' : 'Iniciando download do checklist...')}
                  className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Download Checklist' : 'Baixar Checklist'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
