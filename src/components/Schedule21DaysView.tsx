import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DAILY_21_DAYS_PLAN } from '../data/bariatricData';
import { DailyPlanDay } from '../types';
import { Calendar, CheckCircle2, Circle, Flame, Sparkles, Clock, Coffee, AlertCircle, Award, ChevronRight } from 'lucide-react';

export const Schedule21DaysView: React.FC = () => {
  const { isPt, isEn, completedDays, toggleDayCompletion } = useApp();
  const [selectedDay, setSelectedDay] = useState<DailyPlanDay>(DAILY_21_DAYS_PLAN[0]);

  const progressPercent = Math.min(100, Math.round((completedDays.length / 21) * 100));

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Progress Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border-2 border-emerald-500/40 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>{isPt ? 'Protocolo de 21 Dias' : isEn ? '21-Day Guided Protocol' : 'Protocolo Guiado de 21 Días'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {isPt ? 'Cronograma Diário de Transformação' : isEn ? 'Daily Transformation Schedule' : 'Cronograma Diario de Transformación'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isPt
                ? 'Siga as 3 fases metabólicas passo a passo. Marque cada dia concluído para reprogramar seu centro de saciedade no cérebro e acelerar a queima calórica.'
                : isEn
                ? 'Follow the 3 metabolic phases step-by-step. Mark each completed day to reset satiety receptors and trigger continuous fat oxidation.'
                : 'Sigue las 3 fases metabólicas paso a paso. Marca cada día completado para reprogramar los receptores de saciedad y acelerar la quema de grasa sin efecto rebote.'}
            </p>
          </div>

          {/* Progress Widget */}
          <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 text-center min-w-[200px]">
            <div className="text-3xl font-black text-emerald-400">
              {progressPercent}%
            </div>
            <div className="text-xs text-slate-300 font-bold mt-0.5">
              {completedDays.length} / 21 {isPt ? 'dias concluídos' : isEn ? 'days completed' : 'días completados'}
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mt-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Days Grid Selector */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black uppercase tracking-wider text-amber-300">
            {isPt ? 'Selecione o Dia para Ver o Guia:' : isEn ? 'Select Day to View Guide:' : 'Selecciona el Día para Ver la Guía:'}
          </h3>
          <span className="text-xs text-slate-400">
            {isPt ? 'Clique para ver o cardápio e os shots' : isEn ? 'Click to see meals & shots' : 'Haz clic para ver el menú y los shots'}
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-2">
          {DAILY_21_DAYS_PLAN.map((plan) => {
            const isDone = completedDays.includes(plan.day);
            const isSelected = selectedDay.day === plan.day;

            return (
              <button
                key={plan.day}
                onClick={() => setSelectedDay(plan)}
                className={`py-3 px-2 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-950/60 scale-105 font-black ring-2 ring-rose-400/40'
                    : isDone
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] uppercase font-bold opacity-80">
                  {isPt ? 'Dia' : isEn ? 'Day' : 'Día'}
                </span>
                <span className="text-base font-black leading-none">{plan.day}</span>
                {isDone ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5" />
                ) : (
                  <Circle className="w-3 h-3 opacity-30 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Day Detail Card */}
      <div className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header of the Day */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase">
                {selectedDay.phase}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">
              {selectedDay.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              🎯 <strong>{isPt ? 'Foco do Dia:' : isEn ? 'Daily Focus:' : 'Foco del Día:'}</strong> {selectedDay.focus}
            </p>
          </div>

          <button
            onClick={() => toggleDayCompletion(selectedDay.day)}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
              completedDays.includes(selectedDay.day)
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                : 'bg-slate-800 hover:bg-rose-600 text-white border border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {completedDays.includes(selectedDay.day)
                ? (isPt ? 'Dia Concluído ✓' : isEn ? 'Day Completed ✓' : 'Día Completado ✓')
                : (isPt ? 'Marcar Dia como Concluído' : isEn ? 'Mark Day as Completed' : 'Marcar Día como Completado')}
            </span>
          </button>
        </div>

        {/* 4 Pillars of the Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Morning Shot */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <span>🌅</span>
              <span>{isPt ? 'Shot Matinal em Jejum' : isEn ? 'Fasting Morning Shot' : 'Shot Matutino en Ayunas'}</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold">
              {selectedDay.morningShot}
            </p>
          </div>

          {/* Morning Gelatin Dose */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="text-xs font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <span>🥣</span>
              <span>{isPt ? 'Dose Pré-Almoço (Gelatina)' : isEn ? 'Pre-Lunch Gelatin Dose' : 'Dosis Pre-Almuerzo (Gelatina)'}</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold">
              {selectedDay.gelatinDoseMorning}
            </p>
          </div>

          {/* Afternoon / Evening Dose */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="text-xs font-black uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
              <span>🌆</span>
              <span>{isPt ? 'Dose Tarde / Pré-Jantar' : isEn ? 'Afternoon / Pre-Dinner Dose' : 'Dosis Tarde / Pre-Cena'}</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold">
              {selectedDay.gelatinDoseAfternoon}
            </p>
          </div>

          {/* Drainage Tea */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
            <div className="text-xs font-black uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
              <span>🍵</span>
              <span>{isPt ? 'Chá Drenante do Dia' : isEn ? 'Daily Drainage Tea' : 'Té Drenante del Día'}</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold">
              {selectedDay.drainTea}
            </p>
          </div>

        </div>

        {/* SOS Advice */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-400/30 flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <div className="text-xs font-black text-amber-300 uppercase">
              {isPt ? 'Dica Anti-Compulsão do Dia' : isEn ? 'Anti-Craving Tip for Today' : 'Consejo Anti-Ansiedad del Día'}
            </div>
            <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
              {selectedDay.sosTip}
            </p>
          </div>
        </div>

        {/* Checklist of the Day */}
        <div className="space-y-2 pt-2">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400">
            {isPt ? 'Checklist do Dia:' : isEn ? 'Daily Checklist:' : 'Checklist del Día:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedDay.actionChecklist.map((act, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
