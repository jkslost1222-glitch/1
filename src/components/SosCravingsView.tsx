import React from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle } from 'lucide-react';

export const SosCravingsView: React.FC = () => {
  const { language, t, toggleAudioPlay } = useApp();

  const hacksData = {
    es: {
      badge: 'Protocolo de Rescate SOS',
      title: 'SOS Antojos Nocturnos & Deseo de Azúcar',
      subtitle: '¿Tuviste un día estresante y sientes una urgencia incontrolable de picar dulces o asaltar la nevera? Aplica una de las 4 técnicas rápidas de 3 minutos.',
      btnPlay: 'Reproducir Audio Anti-Cortisol Ahora',
      hacks: [
        {
          icon: '🧊',
          badge: 'Técnica 1 • 60 Segundos',
          title: 'El Rescate de Hielo con Limón & Canela',
          desc: 'Chupa 1 cubo de hielo frotado con una rodaja de limón y una pizca de canela en polvo. El frío intenso en las papilas gustativas desactiva la señal de dopamina del deseo por azúcar en el cerebro.'
        },
        {
          icon: '🥣',
          badge: 'Técnica 2 • Gelatina Nocturna',
          title: 'Porción SOS de Maracuyá o Frutos Rojos',
          desc: 'Ten siempre en tu nevera 2 cubos de la Gelatina de Maracuyá Anti-Cortisol o Frutos Rojos. Cómela lentamente con cuchara pequeña junto con 1 vaso de infusión tibia de manzanilla.'
        },
        {
          icon: '🫁',
          badge: 'Técnica 3 • Respiración 4-7-8',
          title: 'El Reset Vagal de 3 Minutos',
          desc: 'Inhala por la nariz en 4 segundos, retén el aire 7 segundos y exhala despacio por la boca en 8 segundos. Repite 4 ciclos. Reduce el cortisol sérico en un 38% al instante.'
        },
        {
          icon: '🎧',
          badge: 'Técnica 4 • Frecuencia 528Hz',
          title: 'Terapia Sonora Anti-Ansiedad',
          desc: 'Ponte audífonos y activa la frecuencia sonora integrada en esta aplicación durante 5 minutos para inducir ondas cerebrales alfa y relajar el sistema nervioso.'
        }
      ]
    },
    pt: {
      badge: 'Protocolo de Resgate SOS',
      title: 'SOS Compulsão Noturna & Vontade de Doces',
      subtitle: 'Teve um dia estressante e sentiu vontade incontrolável de assaltar a geladeira? Execute uma das 4 técnicas de 3 minutos abaixo para resetar a dopamina.',
      btnPlay: 'Tocar Áudio Anti-Cortisol Agora',
      hacks: [
        {
          icon: '🧊',
          badge: 'Técnica 1 • 60 Segundos',
          title: 'O Resgate do Gelo com Limão & Canela',
          desc: 'Chupe 1 cubo de gelo passado em uma rodela de limão com uma pitada de canela em pó. O estímulo térmico nas papilas desativa o circuito de compulsão por doces no cérebro.'
        },
        {
          icon: '🥣',
          badge: 'Técnica 2 • Gelatina Noturna',
          title: 'Porção SOS de Maracujá ou Frutas Vermelhas',
          desc: 'Tenha sempre na geladeira 2 cubos da Gelatina de Maracujá Anti-Cortisol. Coma devagar com colher de sobremesa acompanhado de 1 xícara morna de chá de camomila.'
        },
        {
          icon: '🫁',
          badge: 'Técnica 3 • Respiração 4-7-8',
          title: 'O Reset Vagal de 3 Minutos',
          desc: 'Inspire pelo nariz em 4 segundos, segure o ar por 7 segundos e solte o ar pela boca suavemente em 8 segundos. Repita 4 ciclos para derrubar o cortisol.'
        },
        {
          icon: '🎧',
          badge: 'Técnica 4 • Frequência 528Hz',
          title: 'Terapia Sonora Anti-Ansiedade',
          desc: 'Coloque fones de ouvido e ative a frequência regenerativa de 528Hz integrada no aplicativo por 5 minutos para induzir ondas cerebrais alfa.'
        }
      ]
    },
    en: {
      badge: 'SOS Rescue Protocol',
      title: 'SOS Night Cravings & Sugar Urges',
      subtitle: 'Had a stressful day and feeling an irresistible urge to binge? Run one of the 4 three-minute neuro-reset hacks below.',
      btnPlay: 'Play 528Hz Anti-Cortisol Audio Now',
      hacks: [
        {
          icon: '🧊',
          badge: 'Hack 1 • 60 Seconds',
          title: 'Lemon & Cinnamon Ice Cube Reset',
          desc: 'Suck on 1 ice cube rubbed with fresh lemon and a dust of Ceylon cinnamon. The acute thermal chill blunts oral dopamine sweet receptors instantly.'
        },
        {
          icon: '🥣',
          badge: 'Hack 2 • Night Gelatin',
          title: 'SOS Passion Fruit or Berry Portion',
          desc: 'Keep 2 set cubes of Passion Fruit or Berry gelatin in your fridge. Eat slowly with a dessert spoon alongside 1 warm cup of chamomile tea.'
        },
        {
          icon: '🫁',
          badge: 'Hack 3 • 4-7-8 Breathing',
          title: '3-Minute Vagal Reset',
          desc: 'Inhale through your nose for 4 seconds, hold for 7 seconds, and exhale slowly through your mouth for 8 seconds. Repeat 4 rounds to lower cortisol.'
        },
        {
          icon: '🎧',
          badge: 'Hack 4 • 528Hz Tone',
          title: 'Anti-Anxiety Sound Therapy',
          desc: 'Put on headphones and activate our built-in 528Hz restorative frequency for 5 minutes to trigger alpha brainwave relaxation.'
        }
      ]
    }
  };

  const current = hacksData[language] || hacksData.es;

  return (
    <div className="space-y-6 text-white pb-12 animate-fade-in">
      
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950/60 to-slate-900 border-2 border-rose-500/50 p-6 sm:p-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* 4 SOS Hacks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {current.hacks.map((hack, idx) => (
          <div 
            key={idx} 
            className={`p-5 sm:p-6 rounded-3xl bg-slate-900/90 border transition-all shadow-xl space-y-3 ${
              idx === 0 ? 'border-rose-500/30' : idx === 1 ? 'border-purple-500/30' : idx === 2 ? 'border-amber-500/30' : 'border-indigo-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{hack.icon}</span>
              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 uppercase">
                {hack.badge}
              </span>
            </div>
            <h3 className="font-black text-base text-white">
              {hack.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {hack.desc}
            </p>

            {idx === 3 && (
              <button
                onClick={toggleAudioPlay}
                className="w-full py-2.5 mt-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🎧 {current.btnPlay}</span>
              </button>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
