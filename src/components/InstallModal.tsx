import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Download, X, Smartphone, Apple, Monitor, CheckCircle2, Sparkles } from 'lucide-react';

export const InstallModal: React.FC = () => {
  const { activeModal, setActiveModal, t, isPt, isEn } = useApp();
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'pc'>('android');
  const [installed, setInstalled] = useState(false);

  if (activeModal !== 'install') return null;

  const handleInstallClick = () => {
    setInstalled(true);
    setTimeout(() => {
      setInstalled(false);
      setActiveModal(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {t.installModal.title}
            </h3>
            <p className="text-xs text-emerald-300">
              {t.installModal.subtitle}
            </p>
          </div>
        </div>

        {/* Platform tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 mb-5">
          <button
            onClick={() => setActiveTab('android')}
            className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'android'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.installModal.tabAndroid}</span>
          </button>

          <button
            onClick={() => setActiveTab('ios')}
            className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'ios'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            <span>{t.installModal.tabIos}</span>
          </button>

          <button
            onClick={() => setActiveTab('pc')}
            className={`py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'pc'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.installModal.tabPc}</span>
          </button>
        </div>

        {/* Instructions by Platform */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          {activeTab === 'android' && (
            <>
              <div className="font-bold text-white mb-1">{t.installModal.androidHeading}</div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span>{t.installModal.androidStep1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span>{t.installModal.androidStep2}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">3</span>
                <span>{t.installModal.androidStep3}</span>
              </div>
            </>
          )}

          {activeTab === 'ios' && (
            <>
              <div className="font-bold text-white mb-1">{t.installModal.iosHeading}</div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span>{t.installModal.iosStep1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span>{t.installModal.iosStep2}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">3</span>
                <span>{t.installModal.iosStep3}</span>
              </div>
            </>
          )}

          {activeTab === 'pc' && (
            <>
              <div className="font-bold text-white mb-1">{t.installModal.pcHeading}</div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <span>{t.installModal.pcStep1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <span>{t.installModal.pcStep2}</span>
              </div>
            </>
          )}
        </div>

        {/* Action button */}
        <button
          onClick={handleInstallClick}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {installed ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>{t.installModal.installSuccessTitle}</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>{t.installModal.btnInstallNow}</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
};
