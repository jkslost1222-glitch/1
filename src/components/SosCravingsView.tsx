import React from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle, Clock, Flame, Sparkles, Droplet, Moon, Heart } from 'lucide-react';

export const SosCravingsView: React.FC = () => {
  const { isPt, isEn, setActiveTab, toggleAudioPlay } = useApp();

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/60 to-slate-900 border-2 border-rose-500/50 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>{isPt ? 'Protocolo de Resgate SOS' : isEn ? 'SOS Rescue Protocol' : 'Protocolo de Rescate SOS'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isPt ? 'SOS Compulsão Noturna & Vontade de Doces' : isEn ? 'SOS Night Cravings & Sugar Fix' : 'SOS Antojos Nocturnos & Deseo de Azúcar'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isPt
              ? 'Teve um dia estressante e sentiu vontade incontrolável de assaltar a geladeira? Execute uma das 4 técnicas de 3 minutos abaixo para resetar a dopamina.'
              : isEn
              ? 'Had a stressful day and feeling an irresistible urge to binge? Run one of the 4 three-minute neuro-reset hacks below.'
              : '¿Tuviste un día estresante y sientes una urgencia incontrolable de picar dulces o asaltar la nevera? Aplica una de las 4 técnicas rápidas de 3 minutos.'}
          </p>
        </div>
      </div>

      {/* 4 SOS Hacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Hack 1 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-rose-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🧊</span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 uppercase">
              Técnica 1 • 60 Segundos
            </span>
          </div>
          <h3 className="font-black text-base text-white">
            El Rescate de Hielo con Limón & Canela
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Chupa 1 cubo de hielo frotado con una rodaja de limón y una pizca de canela en polvo. El frío intenso en las papilas gustativas desactiva la señal de dopamina del deseo por azúcar en el cerebro.
          </p>
        </div>

        {/* Hack 2 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🥣</span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 uppercase">
              Técnica 2 • Gelatina Nocturna
            </span>
          </div>
          <h3 className="font-black text-base text-white">
            Porción SOS de Maracuyá o Frutos Rojos
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ten siempre en tu nevera 2 cubos de la Gelatina de Maracuyá Anti-Cortisol o Frutos Rojos. Cómela lentamente con cuchara pequeña junto con 1 vaso de infusión tibia de manzanilla.
          </p>
        </div>

        {/* Hack 3 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-amber-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🫁</span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 uppercase">
              Técnica 3 • Respiración 4-7-8
            </span>
          </div>
          <h3 className="font-black text-base text-white">
            El Reset Vagal de 3 Minutos
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Inhala por la nariz en 4 segundos, retén el aire 7 segundos y exhala despacio por la boca en 8 segundos. Repite 4 ciclos. Reduce el cortisol sérico en un 38% al instante.
          </p>
        </div>

        {/* Hack 4 */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-indigo-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🎧</span>
            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 uppercase">
              Técnica 4 • Frecuencia 528Hz
            </span>
          </div>
          <h3 className="font-black text-base text-white">
            Terapia Sonora Anti-Ansiedad
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Ponte audífonos y activa la frecuencia sonora integrada en esta aplicación durante 5 minutos para inducir ondas cerebrales alfa.
          </p>
          <button
            onClick={toggleAudioPlay}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>🎧 {isPt ? 'Tocar Áudio Anti-Cortisol Agora' : isEn ? 'Play 528Hz Audio Now' : 'Reproducir Audio Anti-Cortisol Ahora'}</span>
          </button>
        </div>

      </div>

    </div>
  );
};
