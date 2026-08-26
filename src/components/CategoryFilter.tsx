import React from 'react';
import { useApp } from '../context/AppContext';

export const CategoryFilter: React.FC = () => {
  const { t, selectedCategory, setSelectedCategory } = useApp();

  const categories = [
    { id: 'all', label: t.categories.all, icon: '🐾' },
    { id: 'earHealth', label: t.categories.earHealth, icon: '👂' },
    { id: 'supplements', label: t.categories.supplements, icon: '🥣' },
    { id: 'dermatology', label: t.categories.dermatology, icon: '🌸' },
    { id: 'orthopedics', label: t.categories.orthopedics, icon: '🦴' },
    { id: 'soundTherapy', label: t.categories.soundTherapy, icon: '🎵' },
    { id: 'training', label: t.categories.training, icon: '🎥' },
    { id: 'bonuses', label: t.categories.bonuses, icon: '🎁' },
    { id: 'dental', label: t.categories.dental, icon: '🦷' },
    { id: 'behavior', label: t.categories.behavior, icon: '🐕' }
  ];

  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-category-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
                isActive
                  ? 'bg-[#0f4c5c] text-white shadow-md shadow-teal-900/20 ring-2 ring-teal-500/50 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
