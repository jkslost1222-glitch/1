import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, CheckCircle2, XCircle, AlertTriangle, Download, Gift, X } from 'lucide-react';

interface BonusGiftsViewProps {
  onClose: () => void;
}

interface FoodItem {
  name: string;
  category: 'safe' | 'toxic' | 'moderate';
  status: string;
  notes: string;
}

export const BonusGiftsView: React.FC<BonusGiftsViewProps> = ({ onClose }) => {
  const { t } = useApp();
  const [foodSearch, setFoodSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'safe' | 'toxic' | 'moderate'>('all');

  const foods: FoodItem[] = [
    { name: 'Cenoura crua ou cozida', category: 'safe', status: 'Seguro & Saudável', notes: 'Excelente para limpar os dentes, rica em betacaroteno e fibras.' },
    { name: 'Maçã (Sem sementes)', category: 'safe', status: 'Seguro & Saudável', notes: 'Fonte de quercetina e vitamina C. Sempre retire todas as sementes (possuem cianeto).' },
    { name: 'Abóbora Cabotiá Cozida', category: 'safe', status: 'Superalimento Seguro', notes: 'Excelente regulador intestinal tanto para diarreia quanto para constipação.' },
    { name: 'Ovo cozido', category: 'safe', status: 'Excelente Proteína', notes: 'Proteína de altíssimo valor biológico, colina e aminoácidos essenciais.' },
    { name: 'Mirtilo / Blueberry', category: 'safe', status: 'Antioxidante Potente', notes: 'Protege a saúde cerebral em cães idosos e combate radicais livres.' },
    { name: 'Chocolate & Cacau', category: 'toxic', status: 'ALTAMENTE TÓXICO ⚠️', notes: 'Contém teobromina. Pode causar arritmia, convulsões e óbito.' },
    { name: 'Uva e Uva Passa', category: 'toxic', status: 'ALTAMENTE TÓXICO ⚠️', notes: 'Causa insuficiência renal aguda mesmo em doses mínimas. Nunca oferecer.' },
    { name: 'Cebola & Alho em excesso', category: 'toxic', status: 'TÓXICO ⚠️', notes: 'Compostos de tiossulfato que destroem os glóbulos vermelhos causando anemia hemolítica.' },
    { name: 'Abacate (Casca e Caroço)', category: 'toxic', status: 'TÓXICO ⚠️', notes: 'Contém persina e risco grave de obstrução intestinal mecânica pelo caroço.' },
    { name: 'Xilitol (Adoçante Artificial)', category: 'toxic', status: 'LETAL ⚠️', notes: 'Provoca liberação maciça de insulina com hipoglicemia fulminante e falência hepática.' },
    { name: 'Banana', category: 'moderate', status: 'Com Moderação', notes: 'Rica em potássio e triptofano, porém rica em açúcares naturais. Oferecer fatias pequenas.' },
    { name: 'Melancia (Sem sementes)', category: 'safe', status: 'Seguro & Hidratante', notes: '92% de água, perfeita para dias quentes de verão.' },
    { name: 'Queijo Branco / Ricota', category: 'moderate', status: 'Com Moderação', notes: 'Apenas para cães sem intolerância à lactose. Evite queijos amarelos gordurosos.' }
  ];

  const filteredFoods = foods.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(foodSearch.toLowerCase()) || f.notes.toLowerCase().includes(foodSearch.toLowerCase());
    const matchesFilter = filterType === 'all' || f.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-100 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#d97706] via-[#b45309] to-[#78350f] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🎁
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-amber-100 px-2.5 py-0.5 rounded-md">
              Bônus VIP & Segurança
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              Guia Mestre: Alimentos Permitidos vs. Proibidos
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-amber-100 max-w-3xl leading-relaxed mt-2 font-medium">
          Consulte rapidamente quais alimentos humanos são benéficos e quais são perigosos para a saúde do seu pet.
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Search & Filter */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={foodSearch}
              onChange={e => setFoodSearch(e.target.value)}
              placeholder="Pesquisar alimento (ex: maçã, chocolate, ovo)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilterType('safe')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'safe' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              Seguros ✓
            </button>
            <button
              onClick={() => setFilterType('toxic')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterType === 'toxic' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              Tóxicos ⚠️
            </button>
          </div>
        </div>

        {/* Food List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[420px] overflow-y-auto pr-1">
          {filteredFoods.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                item.category === 'safe'
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : item.category === 'toxic'
                  ? 'bg-rose-50/50 border-rose-200'
                  : 'bg-amber-50/50 border-amber-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h4 className="text-sm font-extrabold text-slate-900">
                  {item.name}
                </h4>
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                    item.category === 'safe'
                      ? 'bg-emerald-100 text-emerald-800'
                      : item.category === 'toxic'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Printable Button */}
        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-black px-4 py-2 rounded-xl text-xs shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Imprimir Tabela para a Geladeira (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
