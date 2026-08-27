import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, Bot, User, Sparkles, MessageSquare, PhoneCall, CheckCheck, X } from 'lucide-react';

interface CanineCoachChatProps {
  onClose: () => void;
}

interface Message {
  sender: 'coach' | 'user';
  text: string;
  time: string;
}

export const CanineCoachChat: React.FC<CanineCoachChatProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'coach',
      text: isEn
        ? 'Hello! I am your 24/7 Canine Coach 🐾 How can I assist with your dog’s ear health, nutrition, or behavior today?'
        : 'Olá! Sou o seu Coach Canino 24h 🐾 Como posso ajudar com a saúde dos ouvidos, coceiras, alimentação natural ou comportamento do seu cão hoje?',
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
        'How to stop excessive barking?'
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
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('otite') || q.includes('ouvido') || q.includes('orelha') || q.includes('ear')) {
      return isEn
        ? 'For ear infections and itching: 1) Never use cotton swabs inside the canal (it pushes debris into the L-bend). 2) Warm the ear cleaning solution in your hands. 3) Apply, massage the base of the ear for 30s until you hear the fluid sound, then let your dog shake it out. 4) Wipe only the outer visible flap with cotton. Apply natural alcohol-free propolis + calendula drops for soothing relief!'
        : 'Para cuidados com os ouvidos e otite: 1) Nunca introduza cotonetes no canal profundo (o canal canino tem formato em "L" e isso empurra a cera). 2) Aqueça a solução limpadora nas mãos. 3) Aplique, massageie a base cartilaginosa por 30s até ouvir o som líquido, e deixe o cão chacoalhar a cabeça. 4) Limpe apenas a borda externa visível. Use as gotas de Própolis Verde sem álcool + Calêndula para desinflamar!';
    }

    if (q.includes('coceira') || q.includes('patas') || q.includes('violeta') || q.includes('itch') || q.includes('scratch')) {
      return isEn
        ? 'For severe scratching and yeast infections: Use the safe 1% Gentian Violet protocol! Dilute 15 drops of Gentian Violet 1% in 500ml of gentle dog shampoo. Bathe once a week, let it lather for 5-10 minutes, then rinse thoroughly. It naturally eliminates Malassezia fungi and calms hot spots without steroids.'
        : 'Para coceiras desesperadoras e fungos na pele: Use o Protocolo da Violeta Genciana 1%! A proporção segura é de 15 gotas de Violeta Genciana 1% em 500ml de shampoo canino neutro. Dê um banho semanal, deixe a espuma agir por 5 a 10 minutos e enxágue bem. Ajuda a eliminar o fungo Malassezia e alivia a pele avermelhada sem corticoide!';
    }

    if (q.includes('dourada') || q.includes('curcuma') || q.includes('articul') || q.includes('golden paste') || q.includes('joint')) {
      return isEn
        ? 'Golden Paste Recipe: Mix 3 teaspoons of virgin coconut oil, 1/2 to 1 teaspoon of pure culinary turmeric powder, and 1 microscopic pinch of freshly ground black pepper (piperine boosts absorption by 2000%). Offer proportionally to your dog’s weight mixed in their food for powerful joint & anti-inflammatory protection.'
        : 'Receita da Pasta Dourada: Misture 3 colheres de chá de óleo de coco virgem, 1/2 a 1 colher de chá de cúrcuma pura em pó (grau alimentício) e 1 pitada microscópica de pimenta-do-reino moída na hora (aumenta a absorção dos curcuminoides em até 2000%). Sirva misturado à ração de acordo com o peso do pet para proteger articulações e coluna!';
    }

    if (q.includes('xixi') || q.includes('coco') || q.includes('potty') || q.includes('poop') || q.includes('comer')) {
      return isEn
        ? 'For potty training & coprophagia: 1) Never yell or push the nose into mistakes (it causes anxiety and hidden elimination). 2) Supervise after meals and immediately reward the correct spot with positive reinforcement. 3) For coprophagia, use the Poop Block natural spray and include digestive enzymes (papaya/pineapple) in their diet.'
        : 'Para xixi no lugar certo e coprofagia: 1) Nunca esfregue o focinho ou grite (isso gera medo e faz o cão comer fezes para esconder). 2) Leve ao local correto 15 minutos após as refeições e recompense na hora exata com petisco de alto valor. 3) Para cães que comem fezes, use o Spray Bloqueador natural e adicione enzimas digestivas (fatia de mamão ou abacaxi na refeição)!';
    }

    return isEn
      ? 'Great question! In our natural veterinary wellness protocols, prevention, proper nutrition, and gentle care are essential. Would you like specific details on our E-books, Otitis cleaning guide, or to speak directly with a specialist via WhatsApp?'
      : 'Excelente pergunta! Nosso método baseia-se em prevenção biológica, alimentação funcional e cuidados não invasivos. Você pode consultar os detalhes no Leitor Digital do Cão Blindado, no Protocolo Adeus Otite ou falar diretamente com nosso especialista no WhatsApp oficial!';
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAnswer(query);
      const coachMsg: Message = {
        sender: 'coach',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, coachMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col h-[650px] max-h-[85vh]">
      
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0f4c5c] p-4 sm:p-5 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner border border-white/20">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-black text-white">
                {isEn ? '24/7 Canine Coach' : 'Coach Canino 24h'}
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-[11px] text-sky-100 font-medium">
              {isEn ? 'Specialist in Canine Health & Positive Behavior' : 'Especialista em Saúde & Comportamento Canino'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=5511999999999&text=Ola!%20Sou%20aluno%20do%20Portal%20Pet%20e%20gostaria%20de%20tirar%20uma%20duvida."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isEn ? 'Official WhatsApp' : 'WhatsApp Oficial'}</span>
          </a>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50 space-y-4">
        {messages.map((msg, i) => {
          const isCoach = msg.sender === 'coach';
          return (
            <div
              key={i}
              className={`flex items-end gap-2.5 ${isCoach ? 'justify-start' : 'justify-end'}`}
            >
              {isCoach && (
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                  🐾
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed shadow-xs ${
                  isCoach
                    ? 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                    : 'bg-[#0f4c5c] text-white rounded-br-xs'
                }`}
              >
                <p>{msg.text}</p>
                <span
                  className={`text-[10px] block mt-1 text-right ${
                    isCoach ? 'text-slate-400' : 'text-teal-200'
                  }`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]"></span>
            <span>{t.moduleDetail.coachTyping}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-4 py-2 bg-white border-t border-slate-100 overflow-x-auto scrollbar-none flex items-center gap-2">
        <span className="text-[10px] font-black uppercase text-slate-400 shrink-0">
          {isEn ? 'Suggestions:' : 'Sugestões:'}
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-900 px-3 py-1.5 rounded-xl whitespace-nowrap border border-slate-200 transition-colors cursor-pointer shrink-0"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Message Input Box */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          id="input-coach-chat"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t.moduleDetail.chatPlaceholder}
          className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 font-medium"
        />
        <button
          id="btn-send-coach-chat"
          type="submit"
          disabled={!input.trim()}
          className="bg-[#0f4c5c] hover:bg-teal-700 disabled:opacity-40 text-white px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
        >
          <span>{t.moduleDetail.chatSend}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
