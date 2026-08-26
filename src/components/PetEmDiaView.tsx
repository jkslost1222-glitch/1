import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Newspaper, Calendar, Clock, BookOpen, ChevronRight, X } from 'lucide-react';

interface PetEmDiaViewProps {
  onClose: () => void;
}

export const PetEmDiaView: React.FC<PetEmDiaViewProps> = ({ onClose }) => {
  const { isEn } = useApp();
  const [selectedArticleId, setSelectedArticleId] = useState<string>('news-1');

  const articles = [
    {
      id: 'news-1',
      title: 'Protegendo seu cão das ondas de calor: 5 regras vitais',
      date: 'Publicado hoje',
      category: 'Saúde & Clima',
      readTime: '3 min',
      image: '☀️',
      summary: 'Como evitar o golpe de calor (hipertermia), horários seguros para passeio e receitas de picolés naturais de caldo de ossos.',
      content: `Durante períodos de temperaturas elevadas, cães sofrem muito mais com o calor do que nós humanos. Eles transpiram exclusivamente pelas almofadinhas das patas (coxins) e regulam a temperatura interna através da respiração ofegante.

Regras de Ouro para Dias Quentes:
1. Teste do Asfalto dos 7 Segundos: Coloque o dorso da sua mão no chão. Se não aguentar por 7 segundos, o asfalto queimará as patas do seu cão.
2. Hidratação Aromatizada: Adicione rodelas de pepino, folhas de hortelã ou cubos de melancia sem sementes na vasilha de água.
3. Picolés de Caldo de Ossos: Congele caldo de frango ou carne (sem sal, alho ou cebola) em forminhas para o cão se refrescar e nutrir as articulações.
4. Jamais tose cães de pelagem dupla até a pele: A pelagem funciona como isolante térmico contra o calor extremo e os raios UV.`
    },
    {
      id: 'news-2',
      title: 'O papel vital da mastigação na prevenção de tártaro e ansiedade',
      date: 'Ontem',
      category: 'Comportamento & Higiene',
      readTime: '4 min',
      image: '🦴',
      summary: 'Mordedores desidratados naturais liberam endorfina e limpam as placas bacterianas sem produtos químicos abrasivos.',
      content: `A necessidade de roer e mastigar é um comportamento canino intrínseco e vital. Quando o cão mastiga itens apropriados:
- O cérebro libera dopamina e endorfinas, reduzindo o estresse e a reatividade.
- A salivação abundante neutraliza ácidos e lava restos de alimentos dos dentes.
- A remoção mecânica suave do tártaro inicial mantém o hálito limpo.

Recomenda-se oferecer itens naturais desidratados (orelhas de boi com pelos, cascos bovinos ou chifres de búfalo) sob supervisão 3 vezes por semana.`
    },
    {
      id: 'news-3',
      title: 'Superalimentos da estação que aumentam a imunidade celular do cão',
      date: '3 dias atrás',
      category: 'Nutrição Funcional',
      readTime: '5 min',
      image: '🥬',
      summary: 'Abóbora cabotiá cozida, semente de abóbora triturada e espinafre como fontes ricas de antioxidantes.',
      content: `Cerca de 70% a 80% das células do sistema imunológico do cão estão localizadas no trato gastrointestinal (GALT).
Superalimentos fáceis de incluir na rotina:
1. Abóbora Cabotiá Cozida: Rica em carotenoides e prebióticos que alimentam bactérias benéficas.
2. Semente de Abóbora Moída: Vermífugo natural suave rico em cucurbitacina e magnésio.
3. Óleo de Coco Virgem: Fonte de ácido láurico com ação antibacteriana e antifúngica natural.`
    }
  ];

  const activeArticle = articles.find(a => a.id === selectedArticleId) || articles[0];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-100 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#059669] via-[#047857] to-[#065f46] p-6 sm:p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            📰
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-emerald-100 px-2.5 py-0.5 rounded-md">
              Notícias & Dicas Veterinárias
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              Pet em Dia • Saúde Preventiva
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-emerald-100 max-w-3xl leading-relaxed mt-2 font-medium">
          Artigos semanais selecionados por especialistas em saúde funcional, nutrição integrativa e comportamento canino.
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Article List */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
              Artigos Recentes:
            </h4>
            {articles.map(art => {
              const isSelected = art.id === selectedArticleId;
              return (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                    <span className="text-emerald-700 font-extrabold">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    {art.title}
                  </h5>
                </div>
              );
            })}
          </div>

          {/* Full Article Content */}
          <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                {activeArticle.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {activeArticle.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeArticle.readTime} de leitura
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-medium">
              {activeArticle.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
