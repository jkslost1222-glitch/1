import React from 'react';
import { useApp } from '../context/AppContext';
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
  ChevronRight, 
  Download, 
  ShieldCheck,
  Award,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const { 
    activeTab, 
    setActiveTab, 
    setActiveModal, 
    isEn, 
    isPt, 
    isEs,
    user 
  } = useApp();

  const menuItems = [
    {
      id: 'receta-original',
      label: isPt ? 'A Fórmula Original' : isEn ? 'The Original Formula' : 'La Fórmula Original',
      sub: isPt ? 'Efeito Balão Gástrico' : isEn ? 'Gastric Balloon Effect' : 'Efecto Balón Gástrico',
      icon: Flame,
      badge: 'OFICIAL',
      badgeColor: 'bg-rose-500 text-white'
    },
    {
      id: 'sabores',
      label: isPt ? '6 Sabores Redutores' : isEn ? '6 Satiating Flavors' : '6 Sabores Reductores',
      sub: isPt ? 'Frutas, Café & Maracujá' : isEn ? 'Berries, Coffee & Passionfruit' : 'Frutos Rojos, Café y Piña',
      icon: Sparkles,
      badge: 'TOP',
      badgeColor: 'bg-amber-500 text-slate-950'
    },
    {
      id: 'cronograma',
      label: isPt ? 'Cronograma 21 Dias' : isEn ? '21-Day Schedule' : 'Cronograma 21 Días',
      sub: isPt ? 'Fases 1, 2 e 3 Guiadas' : isEn ? 'Guided Phases 1, 2 & 3' : 'Fases 1, 2 y 3 Guiadas',
      icon: Calendar,
      badge: '21D',
      badgeColor: 'bg-emerald-500 text-slate-950'
    },
    {
      id: 'calculadora',
      label: isPt ? 'Calculadora de Doses' : isEn ? 'Dosage Calculator' : 'Calculadora de Dosis',
      sub: isPt ? 'Personalizada por Peso' : isEn ? 'Custom by Weight' : 'Personalizada por Peso',
      icon: Calculator,
      badge: 'AUTO',
      badgeColor: 'bg-sky-500 text-white'
    },
    {
      id: 'shots-tes',
      label: isPt ? 'Shots & Chás Drenantes' : isEn ? 'Shots & Drainage Teas' : 'Shots & Tés Drenantes',
      sub: isPt ? 'Ativação & Anti-Inchaço' : isEn ? 'Metabolic Boost & Detox' : 'Activación & Desinflamación',
      icon: Coffee,
      badge: 'BÔNUS',
      badgeColor: 'bg-purple-500 text-white'
    },
    {
      id: 'menu-saciante',
      label: isPt ? 'Guia do Prato Saciante' : isEn ? 'Satiety Meal Guide' : 'Guía del Plato Saciante',
      sub: isPt ? 'Combinações que Queimam' : isEn ? 'Fat-Burning Combos' : 'Combinaciones que Queman',
      icon: Utensils,
      badge: 'GUÍA',
      badgeColor: 'bg-teal-500 text-slate-950'
    },
    {
      id: 'sos-antojos',
      label: isPt ? 'SOS Compulsão Noturna' : isEn ? 'SOS Night Cravings' : 'SOS Antojos Nocturnos',
      sub: isPt ? 'Apagar Vontade de Doces' : isEn ? 'Crush Sugar Urges' : 'Apagar Ganas de Azúcar',
      icon: AlertTriangle,
      badge: '3 MIN',
      badgeColor: 'bg-rose-600 text-white'
    },
    {
      id: 'lista-compras',
      label: isPt ? 'Lista de Supermercado' : isEn ? 'Smart Shopping List' : 'Lista de Supermercado',
      sub: isPt ? 'Ingredientes Baratos' : isEn ? 'Budget Ingredients' : 'Ingredientes Económicos',
      icon: ShoppingCart,
      badge: 'PDF',
      badgeColor: 'bg-amber-400 text-slate-950'
    },
    {
      id: 'audio-frecuencias',
      label: isPt ? 'Frequências 528Hz' : isEn ? '528Hz Relax Audio' : 'Frecuencias 528Hz',
      sub: isPt ? 'Redução de Cortisol' : isEn ? 'Anti-Stress Waves' : 'Reducción de Cortisol',
      icon: Music,
      badge: 'AUDIO',
      badgeColor: 'bg-indigo-500 text-white'
    },
    {
      id: 'faq-soporte',
      label: isPt ? 'Dúvidas & Garantia' : isEn ? 'FAQ & Guarantee' : 'Dudas & Garantía',
      sub: isPt ? 'Suporte VIP 24h' : isEn ? 'VIP 24/7 Support' : 'Soporte VIP 24h',
      icon: HelpCircle,
      badge: 'VIP',
      badgeColor: 'bg-slate-700 text-slate-200'
    }
  ];

  return (
    <aside
      className={`h-screen bg-slate-950 border-r border-rose-500/20 text-slate-200 flex flex-col justify-between transition-all duration-300 z-30 sticky top-0 ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Top Section */}
      <div className="p-4 flex flex-col gap-4">
        
        {/* Brand & Collapse Header */}
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Flame className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="font-black text-sm text-white tracking-tight">
                  GELATINA <span className="text-rose-400">BARIÁTRICA</span>
                </div>
                <div className="text-[10px] text-amber-300 font-bold">
                  {isPt ? 'MÉTODO OFICIAL' : isEn ? 'OFFICIAL METHOD' : 'MÉTODO OFICIAL'}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors mx-auto cursor-pointer"
            title={isCollapsed ? 'Expandir' : 'Colapsar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* User Card */}
        {!isCollapsed && (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-rose-500/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-black text-sm">
              👑
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-1">
                <span className="text-xs font-black text-white truncate">{user?.name || 'Alumna VIP'}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
              <div className="text-[10px] text-amber-400 font-bold truncate">
                {isPt ? 'Acesso Vitalício Ativo' : isEn ? 'Lifetime Access Active' : 'Acceso Vitalicio Activo'}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5 custom-scrollbar">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left transition-all cursor-pointer group ${
                isActive
                  ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white font-black shadow-lg shadow-rose-950/60 border border-rose-400/40 translate-x-1'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all ${
                isActive 
                  ? 'bg-white/20 text-white shadow-xs' 
                  : 'bg-slate-900 text-rose-400 group-hover:text-amber-300 group-hover:bg-slate-800'
              }`}>
                <Icon className="w-4 h-4" />
              </div>

              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold truncate">{item.label}</span>
                    {item.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-rose-100' : 'text-slate-400'}`}>
                    {item.sub}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom PWA Install & Guarantee Box */}
      <div className="p-3 border-t border-slate-900 flex flex-col gap-2">
        {!isCollapsed ? (
          <button
            onClick={() => setActiveModal('install')}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>{isPt ? 'Instalar App no Celular' : isEn ? 'Install App on Phone' : 'Instalar App en el Celular'}</span>
          </button>
        ) : (
          <button
            onClick={() => setActiveModal('install')}
            className="w-full p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center cursor-pointer"
            title="Instalar App"
          >
            <Download className="w-4 h-4" />
          </button>
        )}
      </div>

    </aside>
  );
};
