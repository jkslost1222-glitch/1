import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, PhoneCall, X, Sparkles, CheckCircle2, Bot, ShieldCheck } from 'lucide-react';

interface CanineCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'coach' | 'user';
  text: string;
  time: string;
  bullets?: string[];
  warning?: string;
  recipe?: { title: string; items: string[]; instructions: string };
}

export const CanineCoachModal: React.FC<CanineCoachModalProps> = ({ isOpen, onClose }) => {
  const { isEn, t } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'coach',
      text: isEn
        ? 'Hello! I am your 24/7 Canine Coach 🐾 How can I assist with your dog behavior, ear health, or nutrition today?'
        : 'Olá! Sou o seu Coach Canino 24h 🐾 Como posso ajudar com a saúde, alimentação natural, coceira ou comportamento do seu cãozinho hoje?',
      time: isEn ? 'Now' : 'Agora'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = isEn
    ? [
        'How to clean ears safely without pain?',
        'My dog scratches ears and shakes head constantly',
        'How to prepare the Golden Paste?',
        'How to stop excessive barking?',
        'What foods are toxic to dogs?'
      ]
    : [
        'Como higienizar o ouvido do cão sem dor?',
        'Meu cachorro se coça e chacoalha a cabeça',
        'Como preparar a Pasta Dourada (Cúrcuma)?',
        'Como diluir a Violeta Genciana para coceira?',
        'Como fazer o xixi e cocô no lugar certo?'
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  if (!isOpen) return null;

  const generateAnswer = (rawQuery: string): { text: string; bullets?: string[]; warning?: string; recipe?: { title: string; items: string[]; instructions: string } } => {
    const q = rawQuery.trim().toLowerCase();

    // 1. Barking & Behavior
    if (q.includes('lat') || q.includes('bark') || q.includes('barulho') || q.includes('ansie') || q.includes('medo') || q.includes('fear') || q.includes('stress')) {
      return isEn
        ? {
            text: '🐾 Canine Calm & Barking Reduction Protocol:',
            bullets: [
              '1. The Desensitization Routine: Do not scream or yell when your dog barks — to them, shouting sounds like you are barking along.',
              '2. 432Hz Sound Waves: Play our soothing audio therapy track 15 minutes before high-trigger times (doorbell, window triggers).',
              '3. Frozen Lick Mat: Give a frozen lick mat with Greek yogurt or pure peanut butter (xylitol-free) to trigger natural endorphin release and slow down their heart rate.',
              '4. 3-Second Rule: Wait for 3 seconds of total silence before offering rewards or affection.'
            ]
          }
        : {
            text: '🐾 Protocolo Anti-Latidos & Ansiedade Canina:',
            bullets: [
              '1. Dessensibilização Ativa: Nunca grite com o cão quando ele latir — para ele, seu grito soa como se você estivesse "latindo junto".',
              '2. Frequências Relaxantes 432Hz: Toque as ondas calmantes do aplicativo 15 minutos antes de horários críticos (visitas, campainha, fogos).',
              '3. Tapete de Lamber Gelado: Espalhe pasta de amendoim 100% pura (sem açúcar) ou iogurte e congele. O ato de lamber libera endorfinas que desaceleram os batimentos cardíacos.',
              '4. Regra dos 3 Segundos: Espere 3 segundos de silêncio para oferecer carinho ou petisco.'
            ]
          };
    }

    // 2. Ear Care & Otitis
    if (q.includes('otite') || q.includes('ouvid') || q.includes('orelh') || q.includes('ear') || q.includes('chacoalha') || q.includes('shake')) {
      return isEn
        ? {
            text: '🐾 Canine Ear Care & Goodbye Otitis Method:',
            bullets: [
              '1. Anatomy Fact: The canine ear canal is shaped like an "L", so cotton swabs push infected wax deep against the delicate eardrum.',
              '2. Temperature: Always warm the cleaning solution bottle in your hands for 2 minutes prior to application.',
              '3. Massage: Fill the vertical canal, massage the cartilage base for 30s until hearing a squishy sound, and let the dog shake naturally.',
              '4. Green Propolis + Calendula: Apply 2-3 soothing drops to eliminate yeast and soothe pain.'
            ],
            warning: '⚠️ Red flag: If ear has foul black discharge, bleeding, or head tilt with balance loss, seek urgent in-person veterinary exam.'
          }
        : {
            text: '🐾 Protocolo de Higienização de Ouvidos & Adeus Otite:',
            bullets: [
              '1. Anatomia em "L": Nunca use hastes de algodão no fundo do conduto, pois empurram a cera contra o tímpano.',
              '2. Regra da Temperatura: Aqueça o frasco nas mãos por 2 minutos para evitar choque térmico e dor.',
              '3. Massagem Cartilaginosa: Pingue a solução, massageie a base por 30s até ouvir o som de líquido ("tchuc-tchuc"), e deixe o cão chacoalhar a cabeça.',
              '4. Própolis Verde & Calêndula: Aplique 2 a 3 gotas calmantes para desinflamar e cicatrizar.'
            ],
            warning: '⚠️ Alerta: Se houver secreção preta fétida, sangramento ou cabeça inclinada, procure atendimento veterinário imediato.'
          };
    }

    // 3. Itching, Allergies, Paw Licking
    if (q.includes('coceira') || q.includes('coçar') || q.includes('pata') || q.includes('lamber') || q.includes('itch') || q.includes('scratch') || q.includes('alergia') || q.includes('violeta')) {
      return isEn
        ? {
            text: '🐾 Canine Anti-Itch & Malassezia Protocol:',
            bullets: [
              '1. Gentian Violet 1% Dilution: 15 drops in 500ml hypoallergenic shampoo. Bathe 1x weekly, letting the foam act for 7-10 min.',
              '2. Organic Apple Cider Vinegar: 1 part vinegar to 2 parts filtered water misted on itchy paws (balances skin pH).',
              '3. Aloe Vera + Chamomile: Apply chilled chamomile infusion on red patches to soothe inflammation.'
            ]
          }
        : {
            text: '🐾 Protocolo de Alívio de Coceiras & Dermatites:',
            bullets: [
              '1. Violeta Genciana 1%: Dilua 15 gotas em 500ml de shampoo canino neutro. Deixe agir na pele por 7 a 10 min antes do enxágue.',
              '2. Vinagre de Maçã Orgânico: Misture 1 parte de vinagre com 2 partes de água para borrifar nas patinhas.',
              '3. Chá de Camomila Concentrado: Aplique gelado nas regiões avermelhadas para alívio imediato do ardor.'
            ]
          };
    }

    // 4. Default intelligent reply
    return isEn
      ? {
          text: `🐾 Holistic Canine Wellness Advice on "${rawQuery}":\nIn our preventative protocol, nutrition, behavioral reinforcement, and natural hygiene create optimal long-term health.`,
          bullets: [
            'Daily Check: Check energy levels, appetite, coat shine, and ear smell.',
            'Natural Balance: Introduce whole foods gradually with proper hydration.',
            'Direct Support: Ask our specialists via WhatsApp anytime!'
          ]
        }
      : {
          text: `🐾 Orientação Veterinária Funcional sobre "${rawQuery}":\nEm nossa metodologia preventiva, nutrição funcional, reforço positivo e higiene suave garantem saúde duradoura.`,
          bullets: [
            'Inspeção Diária: Observe apetite, aspecto das fezes, pelagem e ouvidos.',
            'Alimentação: Introduza alimentos naturais de forma gradual com hidratação abundante.',
            'Suporte Direto: Se precisar de acompanhamento individual com vídeos, fale conosco no WhatsApp oficial!'
          ]
        };
  };

  const handleSend = (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const resp = generateAnswer(q);
      const coachMsg: Message = {
        id: `coach-${Date.now()}`,
        sender: 'coach',
        text: resp.text,
        bullets: resp.bullets,
        warning: resp.warning,
        recipe: resp.recipe,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, coachMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        id="canine-coach-modal-container"
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#0c2f2b] to-[#08201d] rounded-3xl overflow-hidden shadow-2xl border border-teal-500/30 text-white flex flex-col max-h-[90vh] animate-scale-up"
      >
        {/* Top Close Button */}
        <button
          id="btn-close-coach-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pt-6 px-6 pb-4 text-center border-b border-teal-800/40">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {isEn ? 'CUSTOM SUPPORT' : 'SUPORTE PERSONALIZADO'}
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {isEn ? 'Canine Coach • Your WhatsApp Assistant' : 'Coach Canino • Seu Assistente do WhatsApp'}
          </h3>

          <p className="text-xs sm:text-sm text-teal-300 font-medium mt-1 max-w-lg mx-auto">
            {isEn
              ? 'Ask questions 24/7 regarding nutrition, behaviour, and training routines with smart, responsive guidance.'
              : 'Tire dúvidas 24h sobre nutrição, comportamento e rotinas de treino com orientação inteligente.'}
          </p>
        </div>

        {/* Modal Body: Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar bg-black/20">
          
          {/* Top WhatsApp Callout Card */}
          <div className="bg-[#051a17]/90 rounded-2xl p-4 border border-teal-600/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-300 flex items-center justify-center text-xl shrink-0">
                🐾
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-white">
                    {isEn ? 'Canine Coach 24/7' : 'Coach Canino 24h'}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-xs text-teal-200 font-medium">
                  {isEn ? 'Online 24/7 AI Canine Specialist' : 'Especialista em Saúde Canina Online 24h'}
                </p>
              </div>
            </div>

            <a
              id="btn-whatsapp-chat"
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Ola!%20Sou%20aluno%20do%20Portal%20Pet%20e%20gostaria%20de%20tirar%20uma%20duvida."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isEn ? 'Chat on Official WhatsApp' : 'Falar no WhatsApp Oficial'}</span>
            </a>
          </div>

          {/* Chat Messages Window */}
          <div className="bg-[#041513]/90 rounded-2xl p-4 border border-teal-900/60 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 custom-scrollbar">
            {messages.map((msg) => {
              const isCoach = msg.sender === 'coach';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${isCoach ? 'justify-start' : 'justify-end'}`}
                >
                  {isCoach && (
                    <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      🐾
                    </div>
                  )}
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs font-medium leading-relaxed shadow-sm ${
                      isCoach
                        ? 'bg-[#0f3832] text-slate-100 border border-teal-500/20 rounded-bl-xs'
                        : 'bg-emerald-600 text-slate-950 font-bold rounded-br-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {msg.bullets && (
                      <div className="mt-2 space-y-1 pt-2 border-t border-white/10">
                        {msg.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-teal-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <span className="text-[9px] block mt-1.5 text-right opacity-60">
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-teal-300 italic pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                <span>{isEn ? 'Canine Coach is typing...' : 'Coach Canino está digitando...'}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            {quickPrompts.slice(0, 3).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] font-bold text-teal-200 bg-teal-950/80 hover:bg-teal-900 hover:text-white px-2.5 py-1.5 rounded-lg border border-teal-700/40 whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              id="input-coach-modal"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={isEn ? 'Type your message or question here...' : 'Digite sua dúvida aqui...'}
              className="flex-1 bg-[#051a17] border border-teal-700/50 rounded-xl px-3.5 py-2 text-xs text-white placeholder-teal-400/50 focus:outline-none focus:border-emerald-400 font-medium"
            />
            <button
              id="btn-send-coach-modal"
              type="submit"
              disabled={!input.trim()}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>{isEn ? 'Send' : 'Enviar'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Application Step-by-Step Box */}
          <div className="bg-[#051a17]/90 p-4 rounded-2xl border border-teal-700/30 space-y-2">
            <h5 className="text-xs font-black uppercase text-amber-300 tracking-wider">
              {isEn ? 'APPLICATION STEP-BY-STEP' : 'PASSO A PASSO DA APLICAÇÃO'}
            </h5>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-teal-800/80 text-teal-200 font-black flex items-center justify-center text-[10px] shrink-0">1</span>
                <span>{isEn ? 'Click the button below to start the official chat.' : 'Clique no botão acima ou abaixo para iniciar a conversa oficial.'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-teal-800/80 text-teal-200 font-black flex items-center justify-center text-[10px] shrink-0">2</span>
                <span>{isEn ? 'Send a video or question about your dog’s behavior.' : 'Envie um vídeo ou dúvida sobre a saúde e comportamento do seu cão.'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-teal-800/80 text-teal-200 font-black flex items-center justify-center text-[10px] shrink-0">3</span>
                <span>{isEn ? 'Receive personalized guidance within a few hours.' : 'Receba orientações personalizadas diretamente da nossa equipe.'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-black/30 border-t border-teal-800/40 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isEn ? 'VIP MEMBER' : 'MEMBRO VIP'}</span>
          </div>

          <button
            id="btn-close-coach-footer"
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'Fechar'}
          </button>
        </div>

      </div>
    </div>
  );
};
