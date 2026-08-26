import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PlayCircle, Video, CheckCircle2, Clock, Calendar, X } from 'lucide-react';

interface LiveClassesViewProps {
  onClose: () => void;
}

export const LiveClassesView: React.FC<LiveClassesViewProps> = ({ onClose }) => {
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const classes = [
    {
      title: 'Como Cessar Latidos Excessivos na Campainha, Portão e Janela',
      date: 'Mentoria Gravada',
      duration: '45:10',
      instructor: 'Especialista em Adestramento Positivo',
      summary: 'Método prático de contracondicionamento para o cão associar a campainha a ir para a caminha em vez de latir compulsivamente.',
      steps: [
        'Gravação do som da campainha no celular em volume baixo.',
        'Oferecimento de petisco de alto valor na caminha ao tocar o som suave.',
        'Aumento gradual do volume até neutralizar a reatividade.'
      ]
    },
    {
      title: 'Passeio Calmo Sem Puxar a Guia e Socialização Saudável',
      date: 'Mentoria Gravada',
      duration: '52:40',
      instructor: 'Comportamentalista Canino',
      summary: 'Como transformar a caminhada em momento de relaxamento e gasto de energia mental sem dor nos braços e na traqueia do cão.',
      steps: [
        'Uso correto de peitoral em Y (anti-puxão) sem estrangulamento.',
        'Regra da Estátua: parar imediatamente quando a guia esticar.',
        'Recompensar quando o cão olhar voluntariamente nos olhos do tutor.'
      ]
    },
    {
      title: 'Protocolo Diário para Ansiedade de Separação (Ficar Sozinho)',
      date: 'Mentoria Gravada',
      duration: '60:00',
      instructor: 'Médica Veterinária Integrativa',
      summary: 'Treino de micro-saídas, enriquecimento alimentar congelado e como diminuir a dependência excessiva do cão.',
      steps: [
        'Dessensibilização dos gatilhos de saída (pegar chave, colocar tênis).',
        'Brinquedos recheáveis congelados com pasta de caldo de ossos.',
        'Saídas curtas de 30 segundos evoluindo progressivamente.'
      ]
    }
  ];

  const activeClass = classes[selectedClassIndex];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-100 shadow-2xl flex flex-col">
      <div className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#1e40af] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🎥
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-blue-100 px-2.5 py-0.5 rounded-md">
              Treinamento & Workshops
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              Aulas ao Vivo & Gravações de Especialistas
            </h2>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed mt-2 font-medium">
          Acesse os workshops práticos com cães reais para solucionar latidos, puxões de guia e ansiedade de separação.
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex items-center justify-center text-white p-6">
              {isPlaying ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-b from-blue-950 to-slate-950 p-6 animate-pulse">
                  <Video className="w-12 h-12 text-blue-400" />
                  <h4 className="text-base font-black text-white">{activeClass.title}</h4>
                  <p className="text-xs text-blue-200">Reproduzindo Workshop • {activeClass.duration}</p>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-xl mt-3 cursor-pointer"
                  >
                    Pausar Vídeo
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer mx-auto"
                  >
                    <PlayCircle className="w-8 h-8 ml-0.5" />
                  </button>
                  <h4 className="text-base font-black text-white max-w-md">{activeClass.title}</h4>
                  <span className="text-xs text-slate-400 block">{activeClass.duration} • {activeClass.instructor}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-sm font-black text-slate-900">Resumo da Aula & Plano de Ação:</h4>
              <p className="text-xs sm:text-sm text-slate-700">{activeClass.summary}</p>
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                {activeClass.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">Aulas Disponíveis:</h4>
            {classes.map((cls, idx) => {
              const isSelected = selectedClassIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedClassIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-blue-700 mb-1">
                    <span>Workshop {idx + 1}</span>
                    <span className="text-slate-400">{cls.duration}</span>
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 leading-snug">{cls.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
