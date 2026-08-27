import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, MessageSquare, PhoneCall, ChevronDown, ChevronUp, ShieldCheck, Mail, X } from 'lucide-react';

interface SupportFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportFaqModal: React.FC<SupportFaqModalProps> = ({ isOpen, onClose }) => {
  const { isEn } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = isEn
    ? [
        {
          q: 'How do I access my purchased protocols offline?',
          a: 'Tap the "Install App" button in the sidebar or top navigation. On iPhone (Safari), tap Share > Add to Home Screen. On Android (Chrome), tap Install App. Once added, the entire portal works 100% offline without needing internet!'
        },
        {
          q: 'Are the recipes and ingredients safe for puppies and senior dogs?',
          a: 'Yes! All protocols (Golden Paste, gentle ear flushes, chamomile tonics) are formulated using natural, veterinary-grade ingredients. We provide weight-based dosage tables inside each protocol.'
        },
        {
          q: 'How does the 7-day money-back guarantee work?',
          a: 'Your purchase is protected by an unconditional 7-day warranty. If for any reason your dog does not benefit from the protocols, you can request an instant 100% refund via Kiwify or our support email.'
        },
        {
          q: 'How can I speak directly with a canine specialist?',
          a: 'You can use the 24/7 Canine Coach AI in the portal anytime, or tap the WhatsApp button below to speak directly with our human support team.'
        }
      ]
    : [
        {
          q: 'Como acesso meus protocolos mesmo sem internet (offline)?',
          a: 'Toque em "Instalar Aplicativo" no menu lateral ou topo. No iPhone (Safari), toque em Compartilhar > Adicionar à Tela de Início. No Android (Chrome), selecione Instalar App. O portal fica salvo no seu celular e abre instantaneamente mesmo offline!'
        },
        {
          q: 'As receitas e ingredientes são seguros para filhotes e idosos?',
          a: 'Sim! Todos os protocolos (Pasta Dourada, limpeza auricular não invasiva, tônicos de camomila) utilizam ingredientes biológicos seguros. Cada guia possui tabela de dosagem proporcional ao peso do cão.'
        },
        {
          q: 'Como funciona a garantia incondicional de 7 dias?',
          a: 'Você tem 7 dias de garantia total pela plataforma Kiwify. Caso não fique 100% satisfeito com a melhora da saúde do seu pet, basta solicitar o reembolso integral com 1 clique.'
        },
        {
          q: 'Como falar com um especialista ou tirar dúvidas da minha compra?',
          a: 'Você pode usar o Coach Canino 24h a qualquer momento no portal ou clicar no botão do WhatsApp Oficial abaixo para atendimento humanizado.'
        }
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-teal-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00c5b3] via-[#0f766e] to-[#0f4c5c] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">
              🙋
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                {isEn ? 'Support & Help Center' : 'Suporte & Central de Ajuda'}
              </h3>
              <p className="text-xs text-teal-100 font-medium">
                {isEn ? 'Official Pet Portal Assistance' : 'Atendimento Oficial Portal Pet'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {/* Quick WhatsApp Support Callout */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-950">
                  {isEn ? 'Direct Human Support via WhatsApp' : 'Suporte Humanizado via WhatsApp'}
                </h4>
                <p className="text-[11px] text-emerald-800 font-medium">
                  {isEn ? 'Daily response for purchase & access inquiries' : 'Atendimento diário para dúvidas de acesso e compras'}
                </p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Ola!%20Gostaria%20de%20ajuda%20com%20o%20Portal%20Adeus%20Otite."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black px-4 py-2 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
            >
              {isEn ? 'Open WhatsApp' : 'Abrir WhatsApp'}
            </a>
          </div>

          {/* Accordion FAQ list */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">
              {isEn ? 'Frequently Asked Questions:' : 'Perguntas Frequentes:'}
            </h4>
            {faqs.map((faq, idx) => {
              const isOpenItem = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpenItem ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-2 font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpenItem ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpenItem && (
                    <div className="p-3.5 pt-0 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100 font-medium animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isEn ? 'Encrypted SSL connection & verified official portal.' : 'Conexão criptografada SSL e portal oficial verificado.'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
