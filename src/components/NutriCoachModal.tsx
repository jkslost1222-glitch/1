import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, X, Send, Sparkles, Bot, User, CheckCircle2 } from 'lucide-react';

export const NutriCoachModal: React.FC = () => {
  const { activeModal, setActiveModal, messages, sendMessage, isTypingCoach, isPt, isEn } = useApp();
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeModal === 'nutriChat') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeModal, isTypingCoach]);

  if (activeModal !== 'nutriChat') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  const quickQuestions = [
    '¿Cómo se conserva en la nevera?',
    '¿Puedo tomarla si tengo diabetes?',
    '¿Qué pasa si olvido tomar el vaso de agua?',
    '¿Cuál es la mejor receta para la noche?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-slate-900 border-2 border-rose-500/50 rounded-3xl w-full max-w-xl h-[85vh] max-h-[680px] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm sm:text-base font-black text-white">
                  Nutri-Coach IA 24/7
                </h3>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  ONLINE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {isPt ? 'Assistente especialista na Gelatina Bariátrica' : isEn ? 'Bariatric Gelatin Smart Assistant' : 'Asistente especialista en la Gelatina Bariátrica'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar bg-slate-900/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'coach' && (
                <div className="w-7 h-7 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  🤖
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-rose-600 text-white rounded-tr-xs shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-xs shadow-md'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTypingCoach && (
            <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce [animation-delay:0.4s]" />
              <span>{isPt ? 'Nutri-Coach digitando...' : isEn ? 'Coach is typing...' : 'Nutri-Coach escribiendo...'}</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Question suggestions */}
        <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-850 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              className="text-[11px] font-semibold text-rose-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-800 whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <form onSubmit={handleSubmit} className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={isPt ? 'Faça sua pergunta sobre a gelatina...' : isEn ? 'Ask a question about the gelatin...' : 'Haz tu pregunta sobre la gelatina...'}
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isTypingCoach}
            className="p-3 rounded-2xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white shadow-lg transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
