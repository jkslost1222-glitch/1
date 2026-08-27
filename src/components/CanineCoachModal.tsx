import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, PhoneCall, X, Sparkles, CheckCircle2, Bot, ShieldCheck, AlertTriangle, RefreshCw, Heart } from 'lucide-react';

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
        ? 'Hello! I am your 24/7 Canine AI Coach 🐾 Ask me anything about ear infections, itching, natural recipes, potty training, or canine behavior!'
        : 'Olá! Sou o seu Coach Canino IA 24h 🐾 Pode me perguntar qualquer dúvida sobre otite, coceira, receitas naturais (Pasta Dourada), adestramento, xixi no lugar certo ou comportamento do seu cão!',
      bullets: isEn
        ? [
            'Ear cleaning & natural otitis protocol (No pain)',
            'Anti-itch baths with Gentian Violet & Apple Cider Vinegar',
            'Functional natural recipes (Golden Paste, Bone Broth)',
            'Positive potty training & stopping stool eating'
          ]
        : [
            'Limpeza segura de ouvidos e combate à otite sem dor',
            'Alívio de coceiras com Violeta Genciana e Vinagre de Maçã',
            'Receitas naturais comprovadas (Pasta Dourada, Caldo de Ossos)',
            'Adestramento positivo e parar de comer fezes'
          ],
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
        'How to prepare the Golden Paste (Turmeric)?',
        'How to stop excessive barking & anxiety?',
        'What foods are toxic to dogs?',
        'How to stop my dog from eating poop?'
      ]
    : [
        'Como higienizar o ouvido do cão sem dor?',
        'Meu cachorro se coça e chacoalha a cabeça',
        'Como preparar a Pasta Dourada de Cúrcuma?',
        'Como diluir a Violeta Genciana para coceira?',
        'Como fazer o cão parar de comer fezes?',
        'Como ensinar o xixi e cocô no lugar certo?'
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

  // Rich, comprehensive veterinary knowledge base fallback
  const getContextualOfflineAnswer = (rawQuery: string): { text: string; bullets?: string[]; warning?: string; recipe?: { title: string; items: string[]; instructions: string } } => {
    const q = rawQuery.trim().toLowerCase();

    // 1. Greetings & general pleasantries
    if (/^(oi|ola|olá|opa|eae|bom dia|boa tarde|boa noite|tudo bem|tudo bom|hello|hi|hey|test|teste|ajuda|help|socorro)$/i.test(q)) {
      return isEn
        ? {
            text: 'Hello! I am online and ready to guide you step-by-step. 🐾 What is your dog experiencing right now? Feel free to ask about ear care, itching, food recipes, or dog training.',
            bullets: [
              'Ear hygiene without pain & Otitis relief',
              'Skin itching & natural allergy treatments',
              'Nutritional recipes (Golden Paste, Bone Broth)',
              'Behavior, barking & potty training'
            ]
          }
        : {
            text: 'Olá! Estou online e pronto para te ajudar com o seu cãozinho! 🐾 O que você gostaria de saber ou qual sintoma ele está apresentando hoje?',
            bullets: [
              'Limpeza correta de ouvidos e prevenção de otite',
              'Alívio de coceiras e alergias na pele',
              'Receitas naturais funcionais (Pasta Dourada, Caldo de Ossos)',
              'Comportamento, xixi no lugar e adestramento positivo'
            ]
          };
    }

    // 2. Ear Care, Otitis, Head Shaking, Ear Wax, Smelly Ears
    if (q.includes('otite') || q.includes('ouvid') || q.includes('orelh') || q.includes('chacoalh') || q.includes('cera') || q.includes('ear') || q.includes('shake')) {
      return isEn
        ? {
            text: '🐾 Canine Ear Care & Goodbye Otitis Method:\nThe canine ear canal is shaped like an "L", meaning cotton swabs push debris into the eardrum. Here is the gentle, pain-free protocol:',
            bullets: [
              '1. Warm the Cleanser: Warm the cleaning solution bottle in your hands for 2 minutes to avoid thermal shock.',
              '2. Fill & Massage: Gently instill the solution, massage the ear cartilage base for 30s until hearing a "squishy" sound, and let the dog shake their head.',
              '3. Outer Dry Only: Wipe only the outer visible flap with a dry cotton ball or soft gauze.',
              '4. Natural Soothing Drops: Apply 2-3 drops of alcohol-free Green Propolis + Calendula extract to regenerate delicate tissues and eliminate yeast.'
            ],
            warning: '⚠️ Red Flag: If the ear has foul black tar-like discharge, bleeding, or your dog tilts their head sideways with balance loss, see a veterinarian immediately.'
          }
        : {
            text: '🐾 Protocolo de Higienização de Ouvidos & Adeus Otite:\nO canal auditivo do cão tem formato anatômico em "L". Por isso, nunca devemos introduzir cotonetes no fundo, pois empurram as bactérias e cera contra o tímpano. Siga este passo a passo seguro:',
            bullets: [
              '1. Regra da Temperatura: Aqueça o frasco do produto nas mãos por 2 minutos para evitar choque térmico e dor.',
              '2. Aplicação e Massagem: Pingue a solução no canal e massageie a base da orelha por 30 segundos até ouvir o som de líquido ("tchuc-tchuc"). Em seguida, deixe o cão chacoalhar a cabeça.',
              '3. Limpeza Externa: Use algodão seco ou gaze macia APENAS na parte externa visível da orelha.',
              '4. Gotas Cicatrizantes: Aplique 2 a 3 gotas de extrato de Própolis Verde sem álcool com Calêndula para desinflamar e combater fungos.'
            ],
            warning: '⚠️ Alerta Vermelho: Se houver secreção preta com cheiro fétido forte, sangue ou o cão andar com a cabeça inclinada para um lado, leve ao veterinário para checar o tímpano.'
          };
    }

    // 3. Itching, Allergies, Paw Licking, Gentian Violet, Hot Spots
    if (q.includes('coceira') || q.includes('coçar') || q.includes('pata') || q.includes('lamber') || q.includes('alergia') || q.includes('violeta') || q.includes('genciana') || q.includes('itch') || q.includes('scratch') || q.includes('paw')) {
      return isEn
        ? {
            text: '🐾 Anti-Itch & Malassezia Skin Relief Protocol:\nSkin allergies and paw licking are commonly caused by yeast proliferation (Malassezia) or food intolerances. Here is how to relieve it naturally:',
            bullets: [
              '1. Gentian Violet 1% Dilution: Add 15 drops of Gentian Violet 1% to 500ml of neutral hypoallergenic dog shampoo. Bathe once a week, letting the foam act for 7 to 10 minutes before rinsing.',
              '2. Apple Cider Vinegar Paw Spray: Mix 1 part organic apple cider vinegar with 2 parts filtered water. Mist on itchy paws to restore natural skin pH.',
              '3. Chamomile + Pure Aloe Vera Gel: Apply chilled concentrated chamomile tea or pure aloe vera to soothe red itchy areas immediately.',
              '4. Dietary Check: 70% of chronic canine itching comes from low-quality poultry byproduct meal in dry kibble. Consider rotating proteins.'
            ],
            recipe: {
              title: 'Chamomile & Apple Cider Vinegar Paw Soother',
              items: ['200ml strong brewed chamomile tea (chilled)', '50ml organic apple cider vinegar', '1 clean spray bottle'],
              instructions: 'Combine ingredients, shake well, and spray on itchy paws or abdomen 1-2x daily (avoid eyes and open bleeding wounds).'
            }
          }
        : {
            text: '🐾 Protocolo de Alívio de Coceiras & Dermatites:\nA coceira intensa e o hábito de lamber patas geralmente estão ligados ao fungo Malassezia ou alergias alimentares a subprodutos de rações. Aqui está o tratamento natural comprovado:',
            bullets: [
              '1. Protocolo da Violeta Genciana 1%: Dilua 15 gotas de Violeta Genciana 1% em 500ml de shampoo neutro canino. Dê banho 1 vez por semana, deixando agir por 7 a 10 minutos antes de enxaguar.',
              '2. Tônico para Patinhas: Misture 1 parte de vinagre de maçã orgânico com 2 partes de água filtrada. Borrife nas patas lambidas e seque suavemente para regular o pH.',
              '3. Chá de Camomila Gelado com Babosa: Aplique compressas de chá de camomila gelado nas áreas vermelhas para alívio imediato do ardor.',
              '4. Causa Raiz Alimentar: Grande parte das dermatites recorrentes decorre do excesso de transgênicos e farinha de vísceras de frango na ração seca.'
            ],
            recipe: {
              title: 'Tônico Calmante de Camomila & Vinagre de Maçã',
              items: ['200ml de chá de camomila bem forte e gelado', '50ml de vinagre de maçã orgânico', '1 frasco borrifador limpo'],
              instructions: 'Misture bem e borrife até 2x ao dia nas patas e barriga (evite contato com os olhos e feridas abertas).'
            }
          };
    }

    // 4. Golden Paste, Turmeric, Joints, Spine, Arthritis
    if (q.includes('dourada') || q.includes('curcuma') || q.includes('cúrcuma') || q.includes('articul') || q.includes('coluna') || q.includes('manco') || q.includes('mancar') || q.includes('golden paste') || q.includes('joint')) {
      return isEn
        ? {
            text: '🐾 Golden Paste (Turmeric Curcumin) Anti-Inflammatory Recipe:\nA powerful natural anti-inflammatory for joint pain, arthritis, ear health, and immune support.',
            bullets: [
              'Dosage: Small dogs (<10kg): 1/4 teaspoon 2x daily | Medium dogs (10-25kg): 1/2 teaspoon 2x daily | Large dogs (>25kg): 1 level teaspoon 2x daily.',
              'Storage: Store in a sealed glass jar in the refrigerator for up to 2 weeks, or freeze in silicone ice trays for up to 3 months.',
              'Black Pepper Rule: Black pepper increases curcumin absorption by up to 2000%!'
            ],
            recipe: {
              title: 'Official Golden Paste Recipe',
              items: [
                '1/2 cup (60g) 100% pure organic turmeric powder',
                '1 cup (250ml) filtered water',
                '1/3 cup (70ml) organic extra virgin coconut oil',
                '1/2 teaspoon freshly ground organic black pepper'
              ],
              instructions: 'Combine turmeric and water in a pan over low heat for 7-10 minutes until a smooth paste forms. Turn off the heat, wait to cool to warm, then stir in the coconut oil and black pepper. Mix into regular food gradually.'
            }
          }
        : {
            text: '🐾 Receita Oficial da Pasta Dourada (Cúrcuma Funcional):\nUm dos anti-inflamatórios naturais mais potentes do mundo para articulações, dores na coluna, otites e imunidade canina.',
            bullets: [
              'Dosagem Diária: Cães pequenos (até 10kg): 1/4 de colher de chá 2x ao dia | Cães médios (10-25kg): 1/2 colher de chá 2x ao dia | Cães grandes (+25kg): 1 colher de chá cheia 2x ao dia.',
              'Armazenamento: Guarde em pote de vidro esterilizado na geladeira por até 14 dias, ou congele em forminhas de gelo por até 3 meses.',
              'Importância da Pimenta Preta: A piperina presente na pimenta aumenta a absorção da curcumina no organismo em até 2000%!'
            ],
            recipe: {
              title: 'Receita Prática da Pasta Dourada',
              items: [
                '60g (1/2 xícara) de cúrcuma pura 100% (açafrão-da-terra)',
                '250ml (1 xícara) de água filtrada',
                '70ml (1/3 de xícara) de óleo de coco extravirgem',
                '1/2 colher de café de pimenta preta moída na hora'
              ],
              instructions: 'Em fogo baixo, misture a cúrcuma com a água mexendo por 7 a 10 minutos até virar uma pasta consistente. Desligue o fogo, espere amornar e misture o óleo de coco e a pimenta preta. Misture na comida do pet.'
            }
          };
    }

    // 5. Eating Poop, Coprophagia
    if (q.includes('fezes') || q.includes('cocô') || q.includes('coco') || q.includes('comer') || q.includes('coprofagia') || q.includes('poop')) {
      return isEn
        ? {
            text: '🐾 Protocol to Stop Coprophagia (Dog Eating Poop):\nCoprophagia is usually triggered by nutritional enzyme deficiency, poor protein digestibility in kibble, or anxiety.',
            bullets: [
              '1. Fresh Pineapple Enzyme Trick: Add 1 small chunk of fresh pineapple (or papaya) to their meal. When digested, it produces an unpleasant bitter taste in their stool.',
              '2. Probiotics & Digestive Enzymes: Introduce natural kefir or plain unsweetened Greek yogurt (1 tablespoon) to restore intestinal flora.',
              '3. Instant Cleanup: Pick up stool immediately without showing anger or chasing the dog.',
              '4. High-Value Redirection: Call the dog with a high-value treat as soon as they finish doing their business.'
            ]
          }
        : {
            text: '🐾 Protocolo para Eliminar a Coprofagia (Cão que Come Fezes):\nO hábito de comer fezes quase sempre decorre de deficiência na digestão da ração, carência de enzimas digestivas ou ansiedade.',
            bullets: [
              '1. Truque do Abacaxi Fresco: Ofereça 1 pedacinho de abacaxi fresco ou mamão junto à refeição. As enzimas do abacaxi deixam o sabor das fezes extremamente amargo e desagradável para o cão.',
              '2. Probióticos Naturais: Adicione 1 colher de sopa de iogurte natural desnatado (sem açúcar) ou kefir para recompor a flora intestinal.',
              '3. Limpeza Imediata e Silenciosa: Recolha o cocô imediatamente sem gritar ou fazer drama (muitos cães comem para "esconder" por medo de bronca).',
              '4. Recompensa de Alto Valor: Chame o cão com um petisco gostoso assim que ele terminar de defecar, premiando-o por se afastar das fezes.'
            ]
          };
    }

    // 6. Potty Training, Pee in Wrong Place
    if (q.includes('xixi') || q.includes('mijar') || q.includes('lugar certo') || q.includes('tapete higienico') || q.includes('potty') || q.includes('pee')) {
      return isEn
        ? {
            text: '🐾 Positive Reinforcement Potty Training Protocol:',
            bullets: [
              '1. Never Scold Hours Later: Dogs only associate consequences within 1.5 seconds. Yelling about old pee causes them to hide and pee secretly.',
              '2. Biological Schedule: Take your dog to the potty pad immediately after waking up, 15 minutes after eating, and right after intense play.',
              '3. Enzymatic Cleaner: Clean accidental spots with enzymatic cleaner or alcohol with vinegar to completely eliminate the residual scent marker.',
              '4. The Jackpot Reward: Give a high-value treat and enthusiastic praise the exact second they finish on the pad.'
            ]
          }
        : {
            text: '🐾 Protocolo de Adestramento Positivo: Xixi e Cocô no Lugar Certo:',
            bullets: [
              '1. NUNCA dê bronca após o ocorrido: O cão só associa consequências em até 1,5 segundo. Esfregar o focinho no xixi gera medo e faz o cão urinar escondido.',
              '2. Momentos Biológicos Críticos: Leve o cão ao tapetinho higiênico assim que ele acordar, 15 a 20 minutos após comer e logo após brincadeiras ativas.',
              '3. Limpeza Enzimática: Limpe erros com vinagre de álcool ou limpador enzimático para remover o cheiro que atrai novas micções.',
              '4. Festa e Recompensa Imediata: No exato segundo em que ele terminar de fazer no tapetinho, dê um petisco gostoso e faça muita festa.'
            ]
          };
    }

    // 7. Barking, Fear, Fireworks, Separation Anxiety
    if (q.includes('lat') || q.includes('bark') || q.includes('barulho') || q.includes('ansie') || q.includes('medo') || q.includes('fogos') || q.includes('trovao') || q.includes('chorar') || q.includes('chora')) {
      return isEn
        ? {
            text: '🐾 Barking Reduction & Canine Calm Protocol:',
            bullets: [
              '1. Never Yell: Yelling sounds like barking to a dog and escalates excitement.',
              '2. 432Hz Sound Waves: Play our soothing audio therapy track 15 minutes before trigger times.',
              '3. Frozen Lick Mat: Licking releases natural endorphins and lowers cortisol/heart rate.',
              '4. 3-Second Rule: Reward only when the dog has remained quiet for at least 3 seconds.'
            ]
          }
        : {
            text: '🐾 Protocolo Anti-Latidos, Medo de Fogos e Ansiedade:',
            bullets: [
              '1. Não Grite com o Cão: Gritar quando ele late soa para o pet como se você estivesse "latindo junto", aumentando a excitação.',
              '2. Frequências Sonoras 432Hz: Toque as ondas sonoras relaxantes do app 15 minutos antes de horários críticos (visitas, campainha, fogos).',
              '3. Tapete de Lamber Gelado: Espalhe pasta de amendoim 100% pura ou iogurte e congele. O ato de lamber libera serotonina e desacelera os batimentos.',
              '4. Regra dos 3 Segundos: Espere 3 segundos de silêncio absoluto para recompensar com carinho ou petisco.'
            ]
          };
    }

    // 8. Bad Breath, Teeth, Tartar
    if (q.includes('hálito') || q.includes('halito') || q.includes('boca') || q.includes('tártaro') || q.includes('tartaro') || q.includes('dente') || q.includes('breath') || q.includes('teeth')) {
      return isEn
        ? {
            text: '🐾 Fresh Breath & Natural Dental Care Protocol:',
            bullets: [
              '1. Coconut Oil Tooth Brushing: Extra virgin coconut oil has natural lauric acid that kills oral anaerobic bacteria.',
              '2. Fresh Parsley or Mint: Finely chop fresh parsley (1/2 teaspoon) into their food 3x a week to neutralize stomach odors.',
              '3. Natural Chews: Raw whole carrots or dehydrated beef tendons clean tartar mechanically through abrasion.',
              '4. Probiotics: Many cases of bad breath come from poor gut digestion rather than teeth alone.'
            ]
          }
        : {
            text: '🐾 Protocolo de Hálito Fresco & Controle Natural de Tártaro:',
            bullets: [
              '1. Escovação com Óleo de Coco: O ácido láurico do óleo de coco extravirgem elimina bactérias anaeróbicas que causam mau cheiro.',
              '2. Salsa Fresca Picadinha: Adicione 1/2 colher de café de salsinha fresca picada na comida 3x na semana (neutraliza odores gástricos).',
              '3. Cenoura Crua Inteira: Ofereça cenouras cruas ou mastigáveis desidratados para promover a limpeza mecânica do tártaro por atrito.',
              '4. Saúde Intestinal: Hálito fétido persistente frequentemente é sinal de má digestão de rações com excesso de amido.'
            ]
          };
    }

    // 9. Prohibited/Toxic Foods
    if (q.includes('proibido') || q.includes('veneno') || q.includes('toxico') || q.includes('tóxico') || q.includes('pode dar') || q.includes('chocolate') || q.includes('toxic') || q.includes('food')) {
      return isEn
        ? {
            text: '🐾 Guide to Toxic and Safe Foods for Dogs:',
            bullets: [
              '⛔ STRICTLY FORBIDDEN: Chocolate (theobromine), Grapes & Raisins (causes acute kidney failure), Onions & Garlic in excess, Xylitol artificial sweetener (causes deadly hypoglycemia), Cooked bones (splinter in digestive tract), Avocado pit/skin.',
              '✅ SAFE & HEALTHY: Pumpkin, Cooked sweet potato, Carrots, Seedless apples, Watermelon (seedless), Eggs, Plain cooked chicken/beef, Blueberries.'
            ],
            warning: '⚠️ Emergency: If your dog ingested chocolate, grapes, or xylitol, contact a 24/7 veterinary ER immediately for emergency induction.'
          }
        : {
            text: '🐾 Guia de Alimentos Proibidos e Permitidos para Cães:',
            bullets: [
              '⛔ ESTRITAMENTE PROIBIDOS: Chocolate (teobromina tóxica), Uvas e Passas (falência renal aguda), Cebola e excesso de alho, Adoçante Xilitol (letal por hipoglicemia rápida), Ossos cozidos (lascam e perfuram o estômago), Caroço de abacate.',
              '✅ PERMITIDOS E SAUDÁVEIS: Abóbora cozida, Batata-doce cozida, Cenoura crua ou cozida, Maçã (sem sementes), Melancia (sem sementes), Ovos mexidos sem sal, Frango cozido sem tempero, Mirtilos.'
            ],
            warning: '⚠️ Emergência: Se o cão ingeriu chocolate, uvas, cebola ou xilitol, procure um pronto-socorro veterinário urgente para lavagem gástrica.'
          };
    }

    // 10. Default intelligent tailored answer for any other question
    return isEn
      ? {
          text: `🐾 Holistic Canine Specialist Advice on "${rawQuery}":\nTo ensure your dog stays healthy and happy, follow our core preventative wellness principles:`,
          bullets: [
            '1. Daily Health Observation: Monitor energy, appetite, stool consistency, and ear cleanliness daily.',
            '2. Natural Hydration & Diet: Ensure clean fresh water and add anti-inflammatory whole foods like pure pumpkin or Golden Paste.',
            '3. Positive Routine: Regular exercise, mental stimulation toys, and calming 432Hz sound frequencies reduce stress-related symptoms.',
            '4. Direct WhatsApp Support: You can also message our team with videos for individualized clinical follow-up!'
          ]
        }
      : {
          text: `🐾 Orientação Especializada do Coach Canino sobre "${rawQuery}":\nPara cuidar da saúde, longevidade e bem-estar do seu cão de forma preventiva e natural, aplique os seguintes fundamentos:`,
          bullets: [
            '1. Avaliação de Sinais Vitais: Observe se o pet apresenta coceira excessiva, apatia, fezes amolecidas ou odores atípicos nos ouvidos.',
            '2. Nutrição Funcional: Introduza alimentos naturais gradualmente (como abóbora cozida, caldo de ossos ou Pasta Dourada) para fortalecer a imunidade.',
            '3. Estímulo Mental e Calmaria: Use brinquedos de enriquecimento ambiental e as frequências sonoras 432Hz do aplicativo para equilibrar o humor.',
            '4. Suporte Especializado: Se precisar de acompanhamento individual com envio de fotos ou vídeos do seu pet, use nosso canal oficial de WhatsApp!'
          ]
        };
  };

  const handleSend = async (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim() || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // Call real server-side Gemini endpoint
      const response = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: q,
          history: messages.map(m => ({ sender: m.sender, text: m.text })),
          isEn: isEn
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.answer) {
          const coachMsg: Message = {
            id: `coach-${Date.now()}`,
            sender: 'coach',
            text: data.answer,
            bullets: data.bullets && data.bullets.length > 0 ? data.bullets : undefined,
            warning: data.warning || undefined,
            recipe: data.recipe || undefined,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, coachMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch (err) {
      console.warn('API chat offline, using rich veterinary knowledge engine:', err);
    }

    // Comprehensive contextual fallback
    setTimeout(() => {
      const resp = getContextualOfflineAnswer(q);
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
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        id="canine-coach-modal-container"
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#0c2f2b] via-[#08201d] to-[#041210] rounded-3xl overflow-hidden shadow-2xl border border-teal-500/40 text-white flex flex-col max-h-[92vh] animate-scale-up"
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
        <div className="pt-5 px-5 pb-3.5 text-center border-b border-teal-800/40 bg-teal-950/40">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full px-3 py-0.5 text-[11px] font-black uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {isEn ? 'AI VETERINARY ASSISTANT' : 'IA ESPECIALISTA EM SAÚDE CANINA'}
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {isEn ? 'Canine Coach 24/7 • Real-Time AI Support' : 'Coach Canino 24h • Inteligência Artificial Canina'}
          </h3>

          <p className="text-xs text-teal-300 font-medium mt-1 max-w-lg mx-auto">
            {isEn
              ? 'Ask any question about natural remedies, otitis, itch relief, nutrition, and canine behavior.'
              : 'Tire dúvidas sobre tratamentos naturais, otite, coceiras, receitas da Pasta Dourada, alimentação e comportamento.'}
          </p>
        </div>

        {/* Modal Body: Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5 custom-scrollbar bg-black/20">
          
          {/* Top WhatsApp Callout Card */}
          <div className="bg-[#051a17]/90 rounded-2xl p-3.5 border border-teal-600/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-300 flex items-center justify-center text-xl shrink-0">
                🐾
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-white">
                    {isEn ? 'Coach Canino 24h (AI Active)' : 'Coach Canino 24h (IA Ativa)'}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-xs text-teal-200 font-medium">
                  {isEn ? 'Online • Instant Responses' : 'Online • Respostas Imediatas e Precisas'}
                </p>
              </div>
            </div>

            <a
              id="btn-whatsapp-chat"
              href="https://api.whatsapp.com/send?phone=5511999999999&text=Ola!%20Sou%20aluno%20do%20Portal%20Pet%20e%20gostaria%20de%20tirar%20uma%20duvida."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isEn ? 'Chat on WhatsApp' : 'Falar no WhatsApp Oficial'}</span>
            </a>
          </div>

          {/* Chat Messages Window */}
          <div className="bg-[#041513]/90 rounded-2xl p-3.5 sm:p-4 border border-teal-900/60 min-h-[240px] max-h-[340px] overflow-y-auto space-y-3 custom-scrollbar">
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
                    className={`max-w-[90%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      isCoach
                        ? 'bg-[#0f3832] text-slate-100 border border-teal-500/30 rounded-bl-xs'
                        : 'bg-emerald-600 text-slate-950 font-bold rounded-br-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Bullet Points */}
                    {msg.bullets && msg.bullets.length > 0 && (
                      <div className="mt-2.5 space-y-1.5 pt-2 border-t border-teal-400/20">
                        {msg.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-teal-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Recipe Card */}
                    {msg.recipe && (
                      <div className="mt-2.5 p-2.5 bg-black/40 rounded-xl border border-amber-400/30 space-y-1.5">
                        <div className="text-[11px] font-black text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>{msg.recipe.title}</span>
                        </div>
                        {msg.recipe.items && (
                          <ul className="text-[10px] text-slate-200 list-disc list-inside space-y-0.5">
                            {msg.recipe.items.map((it, i) => (
                              <li key={i}>{it}</li>
                            ))}
                          </ul>
                        )}
                        {msg.recipe.instructions && (
                          <p className="text-[10px] text-teal-200/90 italic pt-1 border-t border-white/10">
                            <strong>Como fazer:</strong> {msg.recipe.instructions}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Safety Warning */}
                    {msg.warning && (
                      <div className="mt-2 p-2 bg-red-950/60 border border-red-500/40 rounded-xl text-[10px] text-red-200 font-semibold flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{msg.warning}</span>
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
              <div className="flex items-center gap-1.5 text-xs text-teal-300 italic pl-8 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                <span>{isEn ? 'Coach Canino is analyzing and typing...' : 'Coach Canino está analisando e respondendo...'}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={isTyping}
                className="text-[10px] font-bold text-teal-200 bg-teal-950/80 hover:bg-teal-900 hover:text-white px-2.5 py-1.5 rounded-lg border border-teal-700/40 whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
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
              disabled={isTyping}
              placeholder={isEn ? 'Ask anything about your dog\'s health, food or behavior...' : 'Digite qualquer dúvida sobre a saúde, alimentação ou comportamento do seu cão...'}
              className="flex-1 bg-[#051a17] border border-teal-700/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-teal-400/50 focus:outline-none focus:border-emerald-400 font-medium"
            />
            <button
              id="btn-send-coach-modal"
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
            >
              <span>{isEn ? 'Send' : 'Enviar'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-black/40 border-t border-teal-800/40 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isEn ? 'VIP MEMBER • FULL ACCESS' : 'MEMBRO VIP • RESPOSTAS ILIMITADAS'}</span>
          </div>

          <button
            id="btn-close-coach-footer"
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-1.5 rounded-xl transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'Fechar'}
          </button>
        </div>

      </div>
    </div>
  );
};
