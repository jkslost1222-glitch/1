import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  PlayCircle,
  Download,
  CheckCircle2,
  AlertTriangle,
  Info,
  Sparkles,
  ShieldCheck,
  Droplets,
  HeartPulse,
  BookOpen,
  ArrowRight,
  X
} from 'lucide-react';

interface OtiteProtocolViewProps {
  onClose: () => void;
}

export const OtiteProtocolView: React.FC<OtiteProtocolViewProps> = ({ onClose }) => {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<'guide' | 'lessons' | 'drops' | 'symptoms'>('guide');
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const lessons = [
    {
      id: 1,
      title: 'Aula 1: Anatomia do Canal em L & Sinais Precoces de Otite',
      duration: '08:45',
      summary: 'Entenda por que o formato anatômico do canal canino facilita a proliferação de fungos (Malassezia) e bactérias quando há umidade ou cera acumulada.',
      keyPoints: [
        'O canal vertical desce e faz uma curva de 90° em canal horizontal até o tímpano.',
        'Cotonetes empurram a cera para o fundo da curva em L e causam impacto doloroso.',
        'Inspeção semanal sem dor: olfato e visualização do pavilhão auricular.'
      ]
    },
    {
      id: 2,
      title: 'Aula 2: Técnica de Higienização Sem Dor e Sem Trauma',
      duration: '12:20',
      summary: 'Passo a passo seguro para aplicar solução limpadora morna, massagear a base cartilaginosa e deixar o cão chacoalhar naturalmente.',
      keyPoints: [
        'Aqueça levemente a solução de limpeza nas mãos para não dar choque térmico.',
        'Preencha o canal sem encostar o bico do frasco para não contaminar.',
        'Massageie a base do ouvido por 30 segundos (ouça o som característico de líquido).',
        'Deixe o cão chacoalhar a cabeça e remova apenas o excesso externo com algodão ou gaze.'
      ]
    },
    {
      id: 3,
      title: 'Aula 3: Gotas Naturais de Própolis Verde & Calêndula',
      duration: '10:15',
      summary: 'Fórmula calmante natural antisséptica com ação cicatrizante e antifúngica para aplicação nas orelhas.',
      keyPoints: [
        'Própolis verde sem álcool (extrato aquoso ou glicólico padronizado).',
        'Óleo carreador puro de calêndula ou jojoba para restaurar a barreira lipídica.',
        'Aplicação suave de 2 a 3 gotas no pavilhão com massagem leve.'
      ]
    },
    {
      id: 4,
      title: 'Aula 4: Prevenção Pós-Banho & Cuidados em Cães de Orelha Caída',
      duration: '14:30',
      summary: 'Como proteger cães com orelhas pendulosas (Cocker, Golden, Beagle, Basset, Shih Tzu) contra umidade retida pós-banho.',
      keyPoints: [
        'Uso de algodão hidrófobo (impermeável) durante o banho.',
        'Secagem térmica controlada e ventilação das orelhas.',
        'Rotina de manutenção quinzenal preventiva.'
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#00c5b3] via-[#0f766e] to-[#0f4c5c] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            👂
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-teal-100 px-2.5 py-0.5 rounded-md">
              Protocolo Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              Protocolo Adeus Otite Canina
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-teal-100 max-w-3xl leading-relaxed mt-2 font-medium">
          Método completo e seguro para eliminar a otite canina, mau cheiro, secreção fúngica e inflamação do canal auditivo sem dor e sem traumas para seu pet.
        </p>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto mt-5 pt-2 border-t border-white/20 scrollbar-none">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'guide' ? 'bg-white text-teal-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            📖 Guia & Higiene Passo a Passo
          </button>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'lessons' ? 'bg-white text-teal-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🎥 4 Aulas em Vídeo
          </button>
          <button
            onClick={() => setActiveTab('drops')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'drops' ? 'bg-white text-teal-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            💧 Gotas Naturais Calmantes
          </button>
          <button
            onClick={() => setActiveTab('symptoms')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeTab === 'symptoms' ? 'bg-white text-teal-950 shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🔍 Teste de Sintomas & Alertas
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-5 sm:p-8">
        
        {/* TAB 1: GUIDE */}
        {activeTab === 'guide' && (
          <div className="space-y-6">
            
            {/* Anatomical explanation */}
            <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200">
              <h3 className="text-base font-black text-teal-950 flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-teal-700" />
                Por Que a Otite é Tão Frequente em Cães? (O Canal em L)
              </h3>
              <p className="text-xs sm:text-sm text-teal-900/90 leading-relaxed">
                Ao contrário do ouvido humano que é reto, o conduto auditivo dos cães possui formato em <strong>"L"</strong>: um canal vertical longo que se dobra abruptamente num canal horizontal em direção à membrana timpânica. Isso dificulta a circulação de ar e favorece o acúmulo de umidade, calor e cera, tornando-se o ambiente ideal para o fungo <em>Malassezia pachydermatis</em> e bactérias oportunistas.
              </p>
            </div>

            {/* Step-by-step cleaning */}
            <div>
              <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                Técnica de Limpeza Indolor em 4 Etapas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs">
                      1
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Aquecimento da Solução
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coloque o frasco da solução otológica limpadora nas mãos por 2 minutos. O líquido frio causa vertigem e dor súbita no cão.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs">
                      2
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Preenchimento Cuidadoso
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Levante a aba da orelha suavemente e aplique a quantidade recomendada da solução no canal sem introduzir a ponta do frasco.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs">
                      3
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Massagem da Base Cartilaginosa
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Massageie a base da orelha (logo abaixo do pavilhão) por 30 segundos. Você deve ouvir um som suave de líquido soltando o cerúmen.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs">
                      4
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      Chacoalhar & Remoção Externa
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Permita que o cão chacoalhe a cabeça vigorosamente. Limpe <strong>apenas a parte visível externa</strong> com algodão ou gaze seca. <em>Nunca use hastes flexíveis no interior do canal!</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Material Download Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">
                    Guia Oficial Adeus Otite Canina (PDF Completo)
                  </h4>
                  <p className="text-xs text-slate-400">
                    Diagramação oficial em alta resolução • 3.8 MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => window.print()}
                className="bg-[#00c5b3] hover:bg-teal-400 text-teal-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Baixar Guia PDF
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: LESSONS */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left: Video Player Simulator */}
              <div className="lg:col-span-2 space-y-4">
                <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-center items-center text-white p-6">
                  {isPlayingVideo ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-b from-teal-950 to-slate-950 p-6 animate-pulse">
                      <HeartPulse className="w-12 h-12 text-[#00c5b3]" />
                      <h4 className="text-lg font-black text-white">
                        {lessons[activeLessonIndex].title}
                      </h4>
                      <p className="text-xs text-teal-200">
                        Reproduzindo Masterclass • Duração: {lessons[activeLessonIndex].duration}
                      </p>
                      <button
                        onClick={() => setIsPlayingVideo(false)}
                        className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-xl mt-4 cursor-pointer"
                      >
                        Pausar Aula
                      </button>
                    </div>
                  ) : (
                    <div className="text-center space-y-3">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-16 h-16 rounded-full bg-[#00c5b3] hover:bg-teal-400 text-teal-950 flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer mx-auto"
                      >
                        <PlayCircle className="w-8 h-8 ml-0.5" />
                      </button>
                      <div>
                        <h4 className="text-base font-black text-white">
                          {lessons[activeLessonIndex].title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Clique para assistir à aula gravada ({lessons[activeLessonIndex].duration})
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lesson summary */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-slate-900 mb-2">
                    Resumo da Aula:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 mb-3">
                    {lessons[activeLessonIndex].summary}
                  </p>
                  <div className="space-y-1.5">
                    {lessons[activeLessonIndex].keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Lesson Playlist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                  Conteúdo Programático:
                </h4>
                {lessons.map((lesson, idx) => {
                  const isActive = activeLessonIndex === idx;
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        setActiveLessonIndex(idx);
                        setIsPlayingVideo(false);
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-teal-50 border-teal-500 shadow-sm'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-black text-teal-700">
                          Aula {idx + 1}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                          {lesson.duration}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-800 line-clamp-2">
                        {lesson.title}
                      </h5>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: DROPS */}
        {activeTab === 'drops' && (
          <div className="space-y-6">
            <div className="bg-amber-50/90 rounded-2xl p-5 border border-amber-200">
              <h3 className="text-base font-black text-amber-950 flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5 text-amber-600" />
                Gotas Naturais de Própolis Verde & Calêndula (Receita Oficial)
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Esta fórmula caseira suave acalma a coceira, desinflama o epitélio do ouvido e possui ação antimicrobiana natural.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-sm font-black text-slate-900">
                  Ingredientes Necessários:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>10ml de Óleo de Calêndula puro</strong> ou Óleo de Jojoba prensado a frio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>3 gotas de Extrato de Própolis Verde aquoso</strong> (100% sem álcool).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>Frasco conta-gotas de vidro âmbar esterilizado.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-sm font-black text-slate-900">
                  Modo de Aplicação Consciente:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">1.</span>
                    <span>Pingue 2 a 3 gotas no pavilhão auricular limpo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">2.</span>
                    <span>Massageie a base suavemente por 20 segundos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">3.</span>
                    <span>Aplique 1 vez ao dia por 5 a 7 dias durante crises leves ou 1x na semana como prevenção.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 text-xs text-rose-950">
              <strong>Atenção Veterinária:</strong> Nunca instile qualquer gota no ouvido se houver suspeita de tímpano perfurado (cão com a cabeça inclinada para um lado, perda de equilíbrio ou andar em círculos) sem avaliação otoscópica prévia.
            </div>
          </div>
        )}

        {/* TAB 4: SYMPTOMS */}
        {activeTab === 'symptoms' && (
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900">
              Checklist Rápido de Sinais de Otite Canina:
            </h3>

            <div className="space-y-2.5">
              {[
                { title: 'Chacoalhar de cabeça frequente', desc: 'O cão bate as orelhas repetidamente como se tentasse ejetar algo.', risk: 'Alerta Médio' },
                { title: 'Coceira desesperadora com a pata traseira', desc: 'O cão geme ou chora enquanto tenta coçar a orelha.', risk: 'Alerta Alto' },
                { title: 'Odor adocicado ou de queijo azedo', desc: 'Sinal clássico de proliferação do fungo Malassezia.', risk: 'Alerta Alto' },
                { title: 'Cera escura / secreção marrom excessiva', desc: 'Acúmulo de secreção ceruminosa espessa.', risk: 'Alerta Médio' },
                { title: 'Orelha quente, avermelhada ou sensível ao toque', desc: 'Inflamação ativa do epitélio auricular.', risk: 'Alerta Alto' }
              ].map((sym, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                  <div>
                    <h5 className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {sym.title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {sym.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md shrink-0">
                    {sym.risk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
