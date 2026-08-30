import React from 'react';
import { useApp } from '../context/AppContext';
import { SMART_SHOPPING_LIST } from '../data/bariatricData';
import { ShoppingCart, Check, CheckSquare, Square, DollarSign, Sparkles } from 'lucide-react';

export const ShoppingListView: React.FC = () => {
  const { checkedShoppingItems, toggleShoppingItem, isPt, isEn } = useApp();

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border-2 border-amber-500/30 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black uppercase tracking-wider">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{isPt ? 'Supermercado Inteligente' : isEn ? 'Smart Grocery' : 'Supermercado Inteligente'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {isPt ? 'Lista de Compras Econômica' : isEn ? 'Budget-Friendly Shopping List' : 'Lista de Compras Económica'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isPt
              ? 'Ingredientes acessíveis que você encontra em qualquer supermercado, feira ou ervanária sem gastar fortunas.'
              : isEn
              ? 'Affordable ingredients found in any local store or market without spending a fortune on luxury supplements.'
              : 'Ingredientes económicos y accesibles que encuentras en cualquier supermercado o mercado local sin gastar de más.'}
          </p>
        </div>
      </div>

      {/* Checklist items */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-black uppercase tracking-wider text-amber-300">
            {isPt ? 'Toque no item para marcar como comprado:' : isEn ? 'Tap to mark as purchased:' : 'Toca el elemento para marcarlo como comprado:'}
          </span>
          <span className="text-xs text-emerald-400 font-bold">
            {checkedShoppingItems.length} / {SMART_SHOPPING_LIST.length} {isPt ? 'comprados' : isEn ? 'bought' : 'comprados'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SMART_SHOPPING_LIST.map((item) => {
            const isChecked = checkedShoppingItems.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleShoppingItem(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-400'
                    : 'bg-slate-950 border-slate-800 hover:border-amber-400/40 text-slate-200'
                }`}
              >
                <button
                  type="button"
                  className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isChecked
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {isChecked ? <Check className="w-4 h-4 stroke-[3]" /> : null}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-bold text-xs sm:text-sm leading-snug ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                      {item.item}
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 px-2 py-0.5 rounded-md bg-amber-500/10 shrink-0">
                      {item.estimatedCost}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                    {item.notes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
