import React from 'react';
import { useApp } from '../context/AppContext';
import { Lock, Sparkles, MessageSquare, Headphones, ArrowRight, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';

interface CircularLauncherProps {
  onOpenSupport: () => void;
}

export const CircularLauncher: React.FC<CircularLauncherProps> = ({ onOpenSupport }) => {
  const { isEn, setActiveModuleId, openUpsellModal, entitlements } = useApp();

  const isCaoBlindadoLocked = !entitlements.caoBlindado;
  const isAntiItchLocked = !entitlements.anticoceira;
  const isMobilityLocked = !entitlements.mobilidade;

  const handleCircleClick = (moduleId: string, isLocked: boolean) => {
    if (isLocked) {
      openUpsellModal(moduleId);
    } else {
      setActiveModuleId(moduleId);
      setTimeout(() => {
        document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="w-full">
      {/* Top Banner Tag from screenshot: "Members Area • Official Content" */}
      <div className="flex items-center justify-between mb-8">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black tracking-wide text-white border border-white/30 shadow-xs">
          <span>{isEn ? 'Members Area • Official Content' : 'Área de membros • Conteúdo oficial'}</span>
        </div>
      </div>

      {/* Grid of Launcher Circles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 place-items-center">
        
        {/* 1. Longevity Combo / Armored Dog (Cão Blindado) */}
        <button
          id="bubble-cao-blindado"
          onClick={() => handleCircleClick('cao-blindado', isCaoBlindadoLocked)}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#00dfca] via-[#00c5b3] to-[#00aba0] border-[6px] border-amber-300/80 shadow-2xl hover:scale-108 hover:border-amber-300 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          {isCaoBlindadoLocked && (
            <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center mb-1 shadow-md border border-white/20">
              <Lock className="w-4 h-4" />
            </div>
          )}
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-amber-900 tracking-wider">
            {isEn ? 'LONGEVITY COMBO' : 'COMBINAÇÃO DE LONGEVIDADE'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900 tracking-tight leading-tight mt-0.5">
            {isEn ? 'armored dog' : 'blindado cachorro'}
          </span>
          <span className="mt-1 bg-yellow-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-xs">
            PREMIUM
          </span>
        </button>

        {/* 2. Canine Coach (WhatsApp Assistant) */}
        <button
          id="bubble-coach-canino"
          onClick={() => {
            setActiveModuleId('coach-canino');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight leading-tight">
            {isEn ? 'Canine' : 'Canino'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-orange-600 tracking-tight leading-tight">
            {isEn ? 'Coach' : 'Treinador'}
          </span>

          {/* Green WhatsApp style icon badge */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center my-1 shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
            <span className="text-lg">💬</span>
          </div>

          <span className="bg-slate-900 text-white font-black text-[8px] sm:text-[9px] px-2.5 py-0.5 rounded-full shadow-xs mt-0.5">
            {isEn ? 'WhatsApp Assistant' : 'Assistente do WhatsApp'}
          </span>
        </button>

        {/* 3. Protocol Anti-Itch Canine (Anti-Coceira) */}
        <button
          id="bubble-anticoceira"
          onClick={() => handleCircleClick('anticoceira', isAntiItchLocked)}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#00dfca] via-[#00c5b3] to-[#00aba0] border-[6px] border-white/80 shadow-2xl hover:scale-108 hover:border-white transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          {isAntiItchLocked && (
            <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center mb-1 shadow-md border border-white/20">
              <Lock className="w-4 h-4" />
            </div>
          )}
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-orange-950 tracking-wider">
            {isEn ? 'protocol' : 'protocolo'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900 tracking-tight leading-tight">
            {isEn ? 'anti-itch canine' : 'anti-coceira canino'}
          </span>
          <span className="mt-1 bg-yellow-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-xs">
            PREMIUM
          </span>
        </button>

        {/* 4. Protocol Mobility Canine (Mobilidade) */}
        <button
          id="bubble-mobilidade"
          onClick={() => handleCircleClick('mobilidade', isMobilityLocked)}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#00dfca] via-[#00c5b3] to-[#00aba0] border-[6px] border-white/80 shadow-2xl hover:scale-108 hover:border-white transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          {isMobilityLocked && (
            <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center mb-1 shadow-md border border-white/20">
              <Lock className="w-4 h-4" />
            </div>
          )}
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-orange-950 tracking-wider">
            {isEn ? 'protocol' : 'protocolo'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900 tracking-tight leading-tight">
            {isEn ? 'mobility canine' : 'mobilidade canino'}
          </span>
          <span className="mt-1 bg-yellow-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-xs">
            PREMIUM
          </span>
        </button>

        {/* 5. Protocol Ear Care Canine (Adeus Otite) */}
        <button
          id="bubble-antiotite"
          onClick={() => {
            setActiveModuleId('antiotite');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-orange-600 tracking-wider">
            {isEn ? 'protocol' : 'protocolo'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight leading-tight mt-0.5">
            {isEn ? 'ear care canine' : 'cuidados com os ouvidos canino'}
          </span>
          <div className="flex items-center gap-1 mt-1 text-slate-700">
            <span className="text-base sm:text-lg">🐾</span>
            <span className="text-sm sm:text-base">🐾</span>
          </div>
        </button>

        {/* 6. Live Classes (Aulas ao Vivo) */}
        <button
          id="bubble-aulas-ao-vivo"
          onClick={() => {
            setActiveModuleId('aulas-ao-vivo');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20 overflow-hidden"
        >
          <div className="z-10">
            <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight block">
              {isEn ? 'live' : 'ao'}
            </span>
            <span className="text-sm sm:text-base lg:text-lg font-black text-orange-600 tracking-tight block">
              {isEn ? 'classes' : 'vivo aulas'}
            </span>
          </div>

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-teal-500 shadow-md mt-1">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80"
              alt="Veterinarian"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>

        {/* 7. Relief Calming Audio (Frequências Calmantes 432Hz) */}
        <button
          id="bubble-frequencias"
          onClick={() => {
            setActiveModuleId('frequencias');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-[#fed7aa] border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <div className="flex items-center justify-center text-xl sm:text-2xl mb-0.5">
            <span>🎧</span>
            <span>🐶</span>
            <span className="text-xs text-sky-700 ml-0.5">🎵</span>
          </div>
          <span className="text-sm sm:text-base lg:text-lg font-black text-orange-600 tracking-tight leading-tight">
            {isEn ? 'relief' : 'alívio'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight leading-tight">
            {isEn ? 'calming audio' : 'áudio relaxante'}
          </span>
        </button>

        {/* 8. Bonus Gifts (Bônus & Presentes) */}
        <button
          id="bubble-presentes"
          onClick={() => {
            setActiveModuleId('presentes');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <span className="text-sm sm:text-base lg:text-lg font-black text-orange-600 tracking-tight leading-tight">
            {isEn ? 'bonus' : 'bônus'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight leading-tight">
            {isEn ? 'gifts' : 'presentes'}
          </span>
          <div className="text-2xl mt-1">
            🐾🎁
          </div>
        </button>

        {/* 9. Pet Daily News / Bicho de Estimação Diário Notícias (Pet Em Dia) */}
        <button
          id="bubble-pet-em-dia"
          onClick={() => {
            setActiveModuleId('pet-em-dia');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <div className="flex items-baseline gap-1">
            <span className="text-base sm:text-xl font-black text-teal-800">
              Pet
            </span>
            <span className="text-xs sm:text-sm font-black text-orange-600">
              Daily
            </span>
          </div>
          <span className="text-base sm:text-xl font-black text-orange-600 leading-none">
            News
          </span>
          <span className="text-[8px] sm:text-[9px] text-slate-500 font-bold mt-1">
            {isEn ? 'dog world news' : 'notícias do mundo canino'}
          </span>
        </button>

        {/* 10. Protocol Fresh Breath Canine (Hálito Fresco) */}
        <button
          id="bubble-antibafo"
          onClick={() => {
            setActiveModuleId('antibafo');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          {/* Cute tooth icon avatar with sparkle */}
          <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center text-sm shadow-sm mb-0.5">
            🦷✨
          </div>
          <span className="text-[9px] sm:text-[10px] font-black uppercase text-orange-600 tracking-wider">
            {isEn ? 'protocol' : 'protocolo'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-teal-800 tracking-tight leading-tight">
            {isEn ? 'fresh breath' : 'hálito fresco'}
          </span>
          <span className="text-xs sm:text-sm font-bold text-teal-800">
            canine
          </span>
        </button>

        {/* 11. Protocol STOP COPRO - POOP BLOCK SPRAY (Parar de Comer Cocô) */}
        <button
          id="bubble-comer-coco"
          onClick={() => {
            setActiveModuleId('comer-coco');
            setTimeout(() => {
              document.getElementById('active-module-view')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-[#f97316] border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <span className="bg-black text-white font-black text-[8px] sm:text-[9px] uppercase px-2.5 py-0.5 rounded-full mb-1 shadow-xs">
            {isEn ? 'PROTOCOL' : 'PROTOCOLO'}
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight leading-tight">
            {isEn ? 'STOP COPRO' : 'PARAR COPRO'}
          </span>
          <span className="mt-1 bg-emerald-500 text-white font-black text-[8px] sm:text-[9px] uppercase px-2.5 py-0.5 rounded-full shadow-xs">
            {isEn ? 'POOP BLOCK SPRAY' : 'SPRAY BLOQUEADOR DE FEZES'}
          </span>
        </button>

        {/* 12. Support & Help FAQ (Apoiar / Ajuda) */}
        <button
          id="bubble-support-faq"
          onClick={onOpenSupport}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full bg-white border-[6px] border-white shadow-2xl hover:scale-108 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer shadow-teal-950/20"
        >
          <span className="text-sm sm:text-base lg:text-lg font-black text-orange-600 tracking-tight leading-tight">
            {isEn ? 'support' : 'apoiar'}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-teal-800 tracking-tight leading-tight mt-0.5">
            {isEn ? 'help & FAQ' : 'Ajuda e perguntas frequentes'}
          </span>

          <div className="w-8 h-8 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-700 text-sm font-black mt-1 shadow-xs">
            👤❓
          </div>
        </button>

      </div>
    </div>
  );
};
