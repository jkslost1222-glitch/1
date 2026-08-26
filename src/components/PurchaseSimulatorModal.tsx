import React from 'react';
import { useApp } from '../context/AppContext';
import { Sliders, CheckCircle2, Lock, Unlock, RotateCcw, Sparkles, X } from 'lucide-react';

export const PurchaseSimulatorModal: React.FC = () => {
  const {
    isSimulatorOpen,
    closeSimulatorModal,
    entitlements,
    deliverables,
    unlockEntitlement,
    lockEntitlement,
    unlockAll,
    resetEntitlements,
    t
  } = useApp();

  if (!isSimulatorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        id="purchase-simulator-modal"
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scale-up max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 p-5 sm:p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">
                {t.modals.simulatorTitle}
              </h3>
              <p className="text-xs text-slate-300">
                {t.modals.simulatorSubtitle}
              </p>
            </div>
          </div>

          <button
            onClick={closeSimulatorModal}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Global Quick Action Buttons */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <button
            id="btn-unlock-all-modules"
            onClick={unlockAll}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.modals.simulatorUnlockAll}</span>
          </button>

          <button
            id="btn-reset-default-modules"
            onClick={resetEntitlements}
            className="flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.modals.simulatorResetDefault}</span>
          </button>
        </div>

        {/* Deliverables Entitlement List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1">
          {deliverables.map(item => {
            const isUnlocked = entitlements[item.id] ?? !item.isLocked;
            return (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  id={`btn-toggle-entitlement-${item.id}`}
                  onClick={() => {
                    if (isUnlocked) {
                      lockEntitlement(item.id);
                    } else {
                      unlockEntitlement(item.id);
                    }
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isUnlocked
                      ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <Unlock className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Liberado</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Bloqueado</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={closeSimulatorModal}
            className="bg-[#0f4c5c] hover:bg-teal-700 text-white font-black px-5 py-2 rounded-xl text-xs transition-colors cursor-pointer"
          >
            {t.common.close}
          </button>
        </div>
      </div>
    </div>
  );
};
