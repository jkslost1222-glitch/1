import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CoreRecipeView } from './CoreRecipeView';
import { FlavorVariationsView } from './FlavorVariationsView';
import { Schedule21DaysView } from './Schedule21DaysView';
import { ShotsAndTeasView } from './ShotsAndTeasView';
import { ShoppingListView } from './ShoppingListView';
import { SatietyMealGuideView } from './SatietyMealGuideView';
import { SosCravingsView } from './SosCravingsView';
import { AudioSynthesizerPlayer } from './AudioSynthesizerPlayer';
import { FREQUENT_QUESTIONS } from '../data/bariatricData';
import { 
  Flame, 
  Sparkles, 
  Calendar, 
  Calculator, 
  Coffee, 
  Utensils, 
  AlertTriangle, 
  ShoppingCart, 
  Music, 
  HelpCircle, 
  Search, 
  X, 
  Clock, 
  ShieldCheck, 
  Award,
  ArrowRight,
  Download
} from 'lucide-react';

interface DashboardProps {
  searchOpen?: boolean;
  onCloseSearch?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = () => {
  const { 
    activeTab, 
    setActiveTab, 
    setActiveModal, 
    completedDays, 
    isPt, 
    isEn, 
    isEs,
    t 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const quickModules = [
    {
      id: 'receta-original',
      title: isPt ? 'A Fórmula Original' : isEn ? 'The Original Formula' : 'La Fórmula Original',
      subtitle: isPt ? 'Efeito Balão Gástrico' : isEn ? 'Gastric Balloon Effect' : 'Efecto Balón Gástrico',
      icon: Flame,
      color: 'from-rose-600 to-rose-700',
      border: 'border-rose-500/40',
      badge: 'PRINCIPAL'
    },
    {
      id: 'sabores',
      title: isPt ? '6 Sabores Redutores' : isEn ? '6 Satiety Flavors' : '6 Sabores Reductores',
      subtitle: isPt ? 'Frutos Vermelhos, Café, Piña' : isEn ? 'Berries, Coffee, Pineapple' : 'Frutos Rojos, Café, Piña',
      icon: Sparkles,
      color: 'from-amber-600 to-amber-700',
      border: 'border-amber-500/40',
      badge: 'TOP'
    },
    {
      id: 'cronograma',
      title: isPt ? 'Cronograma 21 Dias' : isEn ? '21-Day Schedule' : 'Cronograma 21 Días',
      subtitle: isPt ? 'Passo a Passo Guiado' : isEn ? 'Guided Daily Steps' : 'Paso a Paso Guiado',
      icon: Calendar,
      color: 'from-emerald-600 to-emerald-700',
      border: 'border-emerald-500/40',
      badge: `${completedDays.length}/21 Días`
    },
    {
      id: 'calculadora',
      title: isPt ? 'Calculadora de Doses' : isEn ? 'Dosage Calculator' : 'Calculadora de Dosis',
      subtitle: isPt ? 'Personalizada por Peso' : isEn ? 'Custom by Weight' : 'Personalizada por Peso',
      icon: Calculator,
      color: 'from-sky-600 to-sky-700',
      border: 'border-sky-500/40',
      badge: 'AUTO'
    },
    {
      id: 'shots-tes',
      title: isPt ? 'Shots & Chás Drenantes' : isEn ? 'Shots & Drainage Teas' : 'Shots & Tés Drenantes',
      subtitle: isPt ? '7 Shots + Chás Anti-Inchaço' : isEn ? '7 Shots + Detox Teas' : '7 Shots + Tés Anti-Retención',
      icon: Coffee,
      color: 'from-purple-600 to-purple-700',
      border: 'border-purple-500/40',
      badge: 'BÔNUS'
    },
    {
      id: 'menu-saciante',
      title: isPt ? 'Guia do Prato Saciante' : isEn ? 'Satiety Meal Guide' : 'Guía del Plato Saciante',
      subtitle: isPt ? 'Regra 50/25/25' : isEn ? '50/25/25 Plate Rule' : 'Regla 50/25/25',
      icon: Utensils,
      color: 'from-teal-600 to-teal-700',
      border: 'border-teal-500/40',
      badge: 'GUÍA'
    },
    {
      id: 'sos-antojos',
      title: isPt ? 'SOS Compulsão Noturna' : isEn ? 'SOS Night Cravings' : 'SOS Antojos Nocturnos',
      subtitle: isPt ? 'Reset de 3 Minutos' : isEn ? '3-Minute Neuro Reset' : 'Reset de 3 Minutos',
      icon: AlertTriangle,
      color: 'from-rose-700 to-red-800',
      border: 'border-red-500/40',
      badge: 'URGENTE'
    },
    {
      id: 'lista-compras',
      title: isPt ? 'Lista de Supermercado' : isEn ? 'Shopping List' : 'Lista de Supermercado',
      subtitle: isPt ? 'Ingredientes Econômicos' : isEn ? 'Budget Ingredients' : 'Ingredientes Económicos',
      icon: ShoppingCart,
      color: 'from-amber-600 to-orange-700',
      border: 'border-orange-500/40',
      badge: 'CHECKLIST'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in text-white">
      
      {/* Quick Category Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {quickModules.map((mod) => {
          const Icon = mod.icon;
          const isActive = activeTab === mod.id;

          return (
            <button
              key={mod.id}
              onClick={() => {
                if (mod.id === 'calculadora') {
                  setActiveModal('dosageCalc');
                } else {
                  setActiveTab(mod.id);
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-950/40 scale-105'
                  : 'bg-slate-900/90 hover:bg-slate-850 text-slate-300 border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{mod.title}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic View Rendering based on activeTab */}
      {activeTab === 'receta-original' && <CoreRecipeView />}
      {activeTab === 'sabores' && <FlavorVariationsView />}
      {activeTab === 'cronograma' && <Schedule21DaysView />}
      {activeTab === 'shots-tes' && <ShotsAndTeasView />}
      {activeTab === 'menu-saciante' && <SatietyMealGuideView />}
      {activeTab === 'sos-antojos' && <SosCravingsView />}
      {activeTab === 'lista-compras' && <ShoppingListView />}
      
      {activeTab === 'calculadora' && (
        <div className="space-y-6">
          <CoreRecipeView />
        </div>
      )}

      {activeTab === 'audio-frecuencias' && (
        <div className="space-y-6 text-white max-w-2xl mx-auto">
          <div className="rounded-3xl bg-slate-900 border-2 border-indigo-500/40 p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-black text-white">
              {isPt ? 'Terapia Sonora Anti-Cortisol' : isEn ? 'Anti-Cortisol Sound Therapy' : 'Terapia Sonora Anti-Cortisol'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El estrés y el cortisol alto bloquean la quema de grasa y disparan el apetito voraz por azúcar en las noches. Utiliza el sintetizador de frecuencia sonora en tiempo real abajo para relajarte.
            </p>
            <AudioSynthesizerPlayer />
          </div>
        </div>
      )}

      {activeTab === 'faq-soporte' && (
        <div className="space-y-6 text-white pb-12">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-black text-white">
              {isPt ? 'Dúvidas Frequentes sobre a Gelatina Bariátrica' : isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes sobre la Gelatina Bariátrica'}
            </h2>
            <div className="space-y-3">
              {FREQUENT_QUESTIONS.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <h4 className="font-bold text-sm text-amber-300">
                    {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
