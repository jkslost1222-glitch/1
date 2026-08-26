import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Smartphone, Share, PlusSquare, MoreVertical, Check, Sparkles, X } from 'lucide-react';

export const InstallModal: React.FC = () => {
  const { isInstallOpen, closeInstallModal, t } = useApp();
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  if (!isInstallOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        id="install-modal-container"
        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-teal-200 animate-scale-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0f4c5c] via-[#0f766e] to-[#00c5b3] p-6 text-white text-center relative">
          <button
            id="btn-close-install-modal"
            onClick={closeInstallModal}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mx-auto mb-2 shadow-inner border border-white/20">
            📱
          </div>

          <h3 className="text-xl font-black text-white">
            {t.modals.installTitle}
          </h3>
          <p className="text-xs text-teal-100 mt-1 font-medium">
            {t.modals.installSubtitle}
          </p>

          {/* OS Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mt-4 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('ios')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'ios'
                  ? 'bg-white text-teal-950 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.modals.installIosTab}
            </button>
            <button
              onClick={() => setActiveTab('android')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'android'
                  ? 'bg-white text-teal-950 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {t.modals.installAndroidTab}
            </button>
          </div>
        </div>

        {/* Steps Content */}
        <div className="p-6 space-y-4">
          {activeTab === 'ios' ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  No Safari, toque no ícone de <strong>Compartilhar</strong> (<Share className="w-3.5 h-3.5 inline text-teal-700 mx-0.5" />) na barra inferior.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Role a lista para baixo e selecione <strong>Adicionar à Tela de Início</strong> (<PlusSquare className="w-3.5 h-3.5 inline text-teal-700 mx-0.5" />).
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Toque em <strong>Adicionar</strong> no canto superior direito. Pronto! O ícone oficial aparecerá na tela do seu iPhone.
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  No Google Chrome, toque no menu de <strong>3 pontinhos</strong> (<MoreVertical className="w-3.5 h-3.5 inline text-teal-700 mx-0.5" />) no canto superior direito.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Toque na opção <strong>Instalar aplicativo</strong> ou <strong>Adicionar à tela inicial</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  Confirme a instalação. O aplicativo estará pronto para ser usado mesmo offline!
                </div>
              </div>
            </div>
          )}

          <button
            id="btn-understand-install"
            onClick={closeInstallModal}
            className="w-full bg-[#0f4c5c] hover:bg-teal-700 text-white font-black py-3 rounded-2xl text-xs transition-colors cursor-pointer"
          >
            {t.common.understood}
          </button>
        </div>
      </div>
    </div>
  );
};
