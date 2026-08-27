import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Droplet, AlertCircle, ShieldCheck, Download, Printer, X, CheckCircle2, Flame, Heart } from 'lucide-react';

interface XixiCocoProtocolViewProps {
  onClose: () => void;
}

export const XixiCocoProtocolView: React.FC<XixiCocoProtocolViewProps> = ({ onClose }) => {
  const { t, language } = useApp();
  const [sprayVolumeMl, setSprayVolumeMl] = useState<number>(300);
  const [activeTab, setActiveTab] = useState<'sprays' | 'tecnica' | 'rotina'>('sprays');

  // Multipliers for Attractant and Deterrent
  const alcoholMl = Math.round((sprayVolumeMl / 300) * 150);
  const vinegarMl = Math.round((sprayVolumeMl / 300) * 50);
  const waterMl = Math.round((sprayVolumeMl / 300) * 100);
  const dropsEucalyptus = Math.round((sprayVolumeMl / 300) * 10);

  const isPt = language === 'pt';

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-200 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0c4a6e] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🚽
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-sky-100 px-2.5 py-0.5 rounded-md">
              {isPt ? 'Educador Sanitário Canino' : 'Canine Potty Educator'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isPt ? 'Xixi e Cocô no Lugar Certo' : 'Potty Training & Spot Marker'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-sky-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isPt
            ? 'Método natural de ação dupla: Spray Atrativo no tapete higiênico para indicar o local correto + Spray Bloqueador Cítrico para afastar de sofás e tapetes, combinado com condicionamento por reforço positivo em 3 passos.'
            : 'Natural dual-action method: Scent Attractant Spray for potty pads + Citrus Deterrent Spray to keep dogs away from sofas/rugs, combined with a 3-step positive habit conditioning routine.'}
        </p>

        {/* Tab navigation */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('sprays')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'sprays'
                ? 'bg-white text-sky-950 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-sky-100'
            }`}
          >
            {isPt ? '🧪 Fórmulas dos 2 Sprays Caseiros' : '🧪 2 DIY Spray Formulas'}
          </button>
          <button
            onClick={() => setActiveTab('tecnica')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'tecnica'
                ? 'bg-white text-sky-950 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-sky-100'
            }`}
          >
            {isPt ? '🎯 Método dos 3 Passos Sem Bronca' : '🎯 3-Step Positive Habit Method'}
          </button>
          <button
            onClick={() => setActiveTab('rotina')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'rotina'
                ? 'bg-white text-sky-950 shadow-md scale-105'
                : 'bg-white/10 hover:bg-white/20 text-sky-100'
            }`}
          >
            {isPt ? '⏰ Cronograma & Horários Chave' : '⏰ Schedule & Key Potty Times'}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {activeTab === 'sprays' && (
          <div className="space-y-6">
            {/* Spray 1: Atrativo Natural */}
            <div className="bg-emerald-50 rounded-2xl p-5 sm:p-6 border border-emerald-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-emerald-950">
                    {isPt ? 'Spray Atrativo Natural (Para o Tapete Higiênico)' : 'Natural Potty Attractant Spray (For Pee Pads)'}
                  </h3>
                  <span className="text-xs font-bold text-emerald-700">
                    {isPt ? 'Estimula o olfato e marca o local correto como seguro' : 'Stimulates canine scent receptors and marks safe spot'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-2">
                  <span className="text-xs font-black text-emerald-900 block uppercase">
                    {isPt ? 'Ingredientes da Fórmula:' : 'Formula Ingredients:'}
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>200 ml</strong> {isPt ? 'de Chá Concentrado de Capim-Limão (ou Cidreira)' : 'concentrated Lemongrass tea'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>5 gotas</strong> {isPt ? 'de essência de Baunilha pura' : 'pure vanilla extract'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>1 colher de café</strong> {isPt ? 'de Soro Fisiológico 0.9%' : 'saline solution'}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-2">
                  <span className="text-xs font-black text-emerald-900 block uppercase">
                    {isPt ? 'Modo de Aplicação:' : 'Application Guide:'}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {isPt
                      ? 'Misture os ingredientes em um frasco borrifador. Aplique 3 borrifadas no centro do tapete higiênico todas as manhãs. O aroma doce e herbal atrai a curiosidade do cão para fazer as necessidades exatamente no centro do tapete.'
                      : 'Mix ingredients into a spray bottle. Spray 3 spritzes in the center of the potty pad every morning. The sweet herbal scent naturally draws the dog to relieve itself right in the target zone.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Spray 2: Bloqueador Cítrico */}
            <div className="bg-amber-50 rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-sm">
                  2
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-amber-950">
                    {isPt ? 'Spray Bloqueador Cítrico (Para Cantos Proibidos, Sofá e Rodapés)' : 'Citrus Deterrent Spray (For Sofas, Rugs & Forbidden Corners)'}
                  </h3>
                  <span className="text-xs font-bold text-amber-700">
                    {isPt ? 'Odor cítrico e ácido que o cão naturalmente rejeita e evita demarcar' : 'Natural citrus acidity that dogs dislike and actively avoid'}
                  </span>
                </div>
              </div>

              {/* Dynamic volume calculator */}
              <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>{isPt ? 'Tamanho do Frasco Borrifador:' : 'Spray Bottle Size:'}</span>
                  <span className="text-amber-700 font-extrabold text-sm">{sprayVolumeMl} ml</span>
                </div>
                <input
                  type="range"
                  min={150}
                  max={600}
                  step={50}
                  value={sprayVolumeMl}
                  onChange={e => setSprayVolumeMl(Number(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-500">{isPt ? 'Álcool 70%' : 'Alcohol 70%'}</span>
                    <span className="text-sm font-black text-amber-900">{alcoholMl} ml</span>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-500">{isPt ? 'Vinagre de Álcool' : 'White Vinegar'}</span>
                    <span className="text-sm font-black text-amber-900">{vinegarMl} ml</span>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-500">{isPt ? 'Água Filtrada' : 'Filtered Water'}</span>
                    <span className="text-sm font-black text-amber-900">{waterMl} ml</span>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                    <span className="block text-[10px] uppercase font-bold text-slate-500">{isPt ? 'Gotas Eucalipto' : 'Eucalyptus Drops'}</span>
                    <span className="text-sm font-black text-amber-900">{dropsEucalyptus} {isPt ? 'gotas' : 'drops'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tecnica' && (
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <h3 className="text-base font-black text-slate-900">
                {isPt ? 'Regra de Ouro: Como Ensinar Sem Gritar ou Esfregar o Focinho' : 'Golden Rule: How to Train Without Screaming or Punishment'}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xs">
                    01
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isPt ? 'Regra dos 3 Segundos' : '3-Second Rule'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {isPt
                      ? 'Recompense com petisco gostoso ou festa nos primeiros 3 segundos após ele fazer no tapete. Cães conectam a recompensa apenas com a ação imediata.'
                      : 'Reward with high-value treats within 3 seconds of completing on the pad. Dogs only associate rewards with the immediate action.'}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xs">
                    02
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isPt ? 'Sem Bronca Tardia' : 'Zero Delayed Scolding'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {isPt
                      ? 'Se encontrar xixi no chão feito horas antes, limpe em silêncio. Gritar depois faz o cão achar que o xixi em si é errado, levando-o a comer fezes ou fazer escondido.'
                      : 'If you find an old accident, clean it silently. Scolding later teaches the dog that eliminating itself is bad, causing hidden accidents or coprophagia.'}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xs">
                    03
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isPt ? 'Limpeza Antiodor' : 'Enzyme Neutralizer'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {isPt
                      ? 'Nunca use produtos com amoníaco ou água sanitária nos erros. Use vinagre de álcool com bicarbonato de sódio para neutralizar totalmente as enzimas.'
                      : 'Never clean accidents with ammonia or bleach. Use white vinegar and baking soda to completely neutralize biological odor enzymes.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rotina' && (
          <div className="space-y-4">
            <div className="bg-sky-50 rounded-2xl p-5 border border-sky-200 space-y-3">
              <h3 className="text-base font-black text-sky-950">
                {isPt ? 'Os 4 Horários Biológicos de Alta Probabilidade' : 'The 4 High-Probability Biological Potty Times'}
              </h3>
              <p className="text-xs text-sky-900 font-medium">
                {isPt
                  ? 'Leve o cão ao tapete higiênico com calma e aguarde 3 minutos nestes momentos cruciais do dia:'
                  : 'Gently guide your dog to the potty pad and wait 3 minutes during these crucial times:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-sky-100 flex items-start gap-3">
                  <span className="text-xl">🌅</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">{isPt ? '1. Ao Acordar pela Manhã' : '1. Immediately Upon Waking'}</strong>
                    <span className="text-slate-600 font-medium">{isPt ? 'A bexiga está cheia após a noite de sono.' : 'Bladder is full after nighttime sleep.'}</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-sky-100 flex items-start gap-3">
                  <span className="text-xl">🥣</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">{isPt ? '2. 15 a 20 Minutos Após as Refeições' : '2. 15-20 Minutes After Eating'}</strong>
                    <span className="text-slate-600 font-medium">{isPt ? 'O reflexo gastrocólico estimula a evacuação.' : 'Gastrocolic reflex naturally triggers bowel movements.'}</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-sky-100 flex items-start gap-3">
                  <span className="text-xl">🎾</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">{isPt ? '3. Logo Após Brincadeiras Intensas' : '3. Right After High-Energy Play'}</strong>
                    <span className="text-slate-600 font-medium">{isPt ? 'A agitação física acelera o metabolismo urinário.' : 'Physical excitement accelerates bladder pressure.'}</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-sky-100 flex items-start gap-3">
                  <span className="text-xl">🌙</span>
                  <div>
                    <strong className="block text-slate-900 font-bold">{isPt ? '4. Antes de Dormir' : '4. Just Before Bedtime'}</strong>
                    <span className="text-slate-600 font-medium">{isPt ? 'Garante uma noite tranquila sem acidentes no tapete do quarto.' : 'Ensures an accident-free restful night.'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isPt ? 'Protocolo Natural Atestado de Comportamento Positivo' : 'Verified Natural Positive Reinforcement Protocol'}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isPt ? 'Imprimir Guia' : 'Print Guide'}</span>
            </button>
            <a
              href="https://pay.kiwify.com.br/kYdtxLl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isPt ? 'Baixar E-book em PDF' : 'Download PDF Guide'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
