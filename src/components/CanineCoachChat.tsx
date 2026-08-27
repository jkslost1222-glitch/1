import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Send, Bot, Sparkles, MessageSquare, PhoneCall, X, RefreshCw, ThumbsUp, Heart, CheckCircle2 } from 'lucide-react';

interface CanineCoachChatProps {
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

export const CanineCoachChat: React.FC<CanineCoachChatProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'coach',
      text: isEn
        ? 'Hello! I am your 24/7 Canine Coach 🐾 How can I assist with your dog’s ear health, natural nutrition, itch relief, or positive behavior today?'
        : 'Olá! Sou o seu Coach Canino 24h 🐾 Como posso ajudar com a saúde dos ouvidos, alimentação natural, alívio de coceiras ou comportamento do seu pet hoje?',
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
        'What foods are toxic to dogs?',
        'Safe recipe for bad breath'
      ]
    : [
        'Como higienizar o ouvido do cão sem dor?',
        'Meu cachorro se coça e chacoalha a cabeça',
        'Como preparar a Pasta Dourada (Cúrcuma)?',
        'Como diluir a Violeta Genciana para coceira?',
        'Como fazer o xixi e cocô no lugar certo?',
        'Quais alimentos são proibidos para cães?'
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Comprehensive, intelligent veterinary wellness response engine
  const generateIntelligentAnswer = (rawQuery: string): { text: string; bullets?: string[]; warning?: string; recipe?: { title: string; items: string[]; instructions: string } } => {
    const q = rawQuery.trim().toLowerCase();

    // 1. Greetings & pleasantries (hi, hello, ola, oi, bom dia, boa tarde, etc.)
    if (/^(hi|hello|hey|ola|olá|oi|opa|eae|bom dia|boa tarde|boa noite|tudo bem|tudo bom|help|ajuda|socorro|s|teste|test)$/i.test(q)) {
      return isEn
        ? {
            text: 'Hello! I am here and ready to help you and your dog! 🐾 You can ask me anything about:\n• Ear cleaning & Otitis relief\n• Itching, allergies & skin soothing\n• Natural Golden Paste & joint health\n• Stopping stool eating & potty training\n• Fresh breath & safe nutrition\n\nWhat would you like to know or what symptom is your dog experiencing?',
            bullets: [
              'Ear care & safe cleaning techniques',
              'Skin itching & natural allergy baths',
              'Homemade recipes (Golden Paste, Bone Broth)',
              'Behavior, barking & potty training'
            ]
          }
        : {
            text: 'Olá! Estou aqui e pronto para cuidar do seu pet com você! 🐾 Você pode me perguntar livremente sobre:\n• Limpeza de ouvidos e alívio de otites\n• Coceira, alergias e cuidados com a pele\n• Receita da Pasta Dourada e articulações\n• Parar de comer fezes e xixi no lugar certo\n• Hálito fresco e alimentação natural\n\nQual dúvida você tem ou qual sintoma o seu cãozinho está apresentando agora?',
            bullets: [
              'Cuidados com o ouvido e limpeza sem dor',
              'Coceiras e banhos calmantes naturais',
              'Receitas funcionais (Pasta Dourada, Caldo de Ossos)',
              'Comportamento e adestramento positivo'
            ]
          };
    }

    // 2. Ear Care, Otitis, Wax, Head Shaking, Smelly Ears
    if (q.includes('otite') || q.includes('ouvido') || q.includes('orelha') || q.includes('chacoalha') || q.includes('chacoalhar') || q.includes('cera') || q.includes('ear') || q.includes('shake') || q.includes('head tilt') || q.includes('cheiro no ouvido')) {
      return isEn
        ? {
            text: '🐾 Comprehensive Canine Ear Protocol (Goodbye Otitis Method):',
            bullets: [
              '1. NEVER use cotton swabs inside the deep canal — the canine canal is "L-shaped", and swabs push infected wax directly against the eardrum.',
              '2. Temperature Rule: Warm the cleaning solution bottle in your closed hands for 2-3 minutes to body temperature before applying.',
              '3. Application: Gently fill the vertical canal, massage the cartilage base for 30 seconds until you hear a squishy liquid sound ("squish-squish"), then step back and let your dog shake.',
              '4. Drying: Use a dry cotton ball or soft gauze to wipe ONLY the outer visible flap.',
              '5. Soothing Drops: Apply 2-3 drops of natural alcohol-free green propolis + calendula oil extract to calm inflammation.'
            ],
            warning: '⚠️ Red flag alert: If the ear has bloody discharge, intense heat, or the dog keeps their head tilted sideways with loss of balance, have a vet inspect the eardrum immediately.'
          }
        : {
            text: '🐾 Protocolo Completo para Ouvidos e Otite (Método Adeus Otite):',
            bullets: [
              '1. NUNCA introduza hastes flexíveis (cotonetes) no fundo do canal — o ouvido do cão tem formato em "L" e o cotonete compacta bactérias e cera no tímpano.',
              '2. Regra da Temperatura: Aqueça o frasco do limpador nas palmas das mãos por 2 minutos para não causar choque térmico e dor.',
              '3. Aplicação Segura: Pingue a solução no canal, massageie a cartilagem na base da orelha por 30 segundos até ouvir o som de líquido ("tchuc-tchuc"), e deixe o cão chacoalhar a cabeça.',
              '4. Secagem: Limpe APENAS o pavilhão externo visível com algodão seco ou gaze macia.',
              '5. Gotas Calmantes: Use 2 a 3 gotas de extrato de Própolis Verde sem álcool com Calêndula para regenerar a mucosa sem agredir.'
            ],
            warning: '⚠️ Atenção: Se o ouvido tiver secreção preta com cheiro rançoso forte, sangue ou o cão andar com a cabeça inclinada para um lado, consulte o veterinário para descartar ruptura timpânica.'
          };
    }

    // 3. Itching, Allergies, Paw Licking, Gentian Violet, Hot Spots, Fleas/Ticks
    if (q.includes('coceira') || q.includes('coçar') || q.includes('pata') || q.includes('lamber') || q.includes('alergia') || q.includes('violeta') || q.includes('vermelh') || q.includes('itch') || q.includes('scratch') || q.includes('lick') || q.includes('paw') || q.includes('fungo') || q.includes('malassezia')) {
      return isEn
        ? {
            text: '🐾 Anti-Itch & Malassezia Skin Relief Protocol:',
            bullets: [
              '1. Gentian Violet 1% Dilution: Add 15 drops of Gentian Violet 1% into 500ml of hypoallergenic dog shampoo. Bathe once a week, let the lather sit on the skin for 7-10 minutes before rinsing thoroughly.',
              '2. Apple Cider Vinegar Paw Spray: Mix 1 part organic unpasteurized apple cider vinegar with 2 parts filtered water. Mist on itchy paws and wipe dry with a clean towel (restores natural skin pH against yeast).',
              '3. Soothing Aloe Vera + Chamomile Gel: Apply pure aloe vera gel infused with chilled concentrated chamomile tea to red hot spots.',
              '4. Allergy Root Cause: 70% of persistent skin allergies stem from chicken byproduct meal in kibbles or corn/soy fillers. Consider a protein rotation.'
            ],
            recipe: {
              title: 'Fast Chamomile & Apple Cider Vinegar Skin Tonic',
              items: ['200ml concentrated brewed chamomile tea (chilled)', '50ml organic apple cider vinegar', '1 spray bottle'],
              instructions: 'Combine ingredients, spray twice daily on itchy areas (avoid eyes and open bleeding wounds).'
            }
          }
        : {
            text: '🐾 Protocolo de Alívio de Coceiras & Fungo Malassezia:',
            bullets: [
              '1. Protocolo da Violeta Genciana 1%: Dilua 15 gotas de Violeta Genciana 1% em 500ml de shampoo neutro canino. Dê banho 1 vez por semana, deixando agir por 7 a 10 minutos antes do enxágue completo.',
              '2. Tônico de Vinagre de Maçã para Patinhas: Misture 1 parte de vinagre de maçã orgânico com 2 partes de água filtrada. Borrife nas patas lambidas e seque bem (regula o pH contra fungos).',
              '3. Gel Calmante de Babosa e Camomila: Aplique gel puro de aloe vera com chá concentrado de camomila gelado nas áreas vermelhas.',
              '4. Causa Raiz: Grande parte das dermatites recorrentes decorre de excesso de farinha de vísceras de frango e transgênicos na ração seca.'
            ],
            recipe: {
              title: 'Tônico Calmante de Camomila & Vinagre de Maçã',
              items: ['200ml de chá de camomila forte e gelado', '50ml de vinagre de maçã orgânico', '1 frasco borrifador limpo'],
              instructions: 'Misture bem e borrife até 2x ao dia nas áreas que o cão mais coça (evite contato com os olhos e feridas abertas).'
            }
          };
    }

    // 4. Golden Paste, Turmeric, Joints, Arthritis, Spine, Mobility
    if (q.includes('dourada') || q.includes('curcuma') || q.includes('cúrcuma') || q.includes('articul') || q.includes('coluna') || q.includes('manco') || q.includes('mancar') || q.includes('patela') || q.includes('golden paste') || q.includes('joint') || q.includes('arthritis') || q.includes('mobility')) {
      return isEn
        ? {
            text: '🐾 The Official Golden Paste (Turmeric Anti-Inflammatory) Protocol:',
            bullets: [
              '1. Why it works: Turmeric contains curcumin, one of the most potent natural COX-2 inhibitors for joint cartilage and ear tissue.',
              '2. The Piperine Secret: Curcumin is poorly absorbed alone, but combining it with a tiny pinch of black pepper (piperine) increases bioavailability by up to 2000%!',
              '3. Healthy Fat: Virgin coconut oil provides medium-chain triglycerides (MCTs) to carry the curcumin directly into circulation.'
            ],
            recipe: {
              title: 'Canine Golden Paste Recipe',
              items: [
                '1/2 cup organic pure culinary turmeric powder',
                '1 cup filtered water',
                '1/3 cup cold-pressed virgin coconut oil',
                '1/2 teaspoon freshly ground black pepper'
              ],
              instructions: 'Simmer turmeric and water on low heat for 7-10 minutes until a thick paste forms. Turn off heat, let cool slightly, then stir in coconut oil and black pepper. Store in a sealed glass jar in the fridge for up to 2 weeks. Dosage: 1/4 tsp per 5kg of dog body weight mixed in meals daily.'
            }
          }
        : {
            text: '🐾 Protocolo Oficial da Pasta Dourada (Cúrcuma & Articulações):',
            bullets: [
              '1. Por que funciona: A cúrcuma contém curcuminoides, potentes anti-inflamatórios naturais que protegem cartilagens, coluna e reduzem inflamação crônica nos ouvidos.',
              '2. O Segredo da Piperina: A cúrcuma pura é pouco absorvida pelo intestino do cão, mas a adição de pimenta-do-reino moída na hora (piperina) multiplica a absorção em até 2000%!',
              '3. Gordura Boa: O óleo de coco virgem fornece triglicerídeos de cadeia média (TCM) para transportar os princípios ativos.'
            ],
            recipe: {
              title: 'Receita Caseira da Pasta Dourada Canina',
              items: [
                '1/2 xícara de cúrcuma pura em pó (100% pura)',
                '1 xícara de água filtrada',
                '1/3 xícara de óleo de coco extravirgem prensado a frio',
                '1/2 colher de café de pimenta-do-reino preta moída na hora'
              ],
              instructions: 'Cozinhe a cúrcuma com a água em fogo baixo por 7 a 10 min mexendo até virar uma pasta consistente. Desligue o fogo, aguarde amornar e misture o óleo de coco e a pimenta. Guarde em pote de vidro na geladeira por até 15 dias. Dosagem: 1/4 colher de chá para cada 5kg de peso do cão misturado na comida.'
            }
          };
    }

    // 5. Coprophagia, Eating Poop, Potty Training, Pee/Poop in right place
    if (q.includes('xixi') || q.includes('coco') || q.includes('cocô') || q.includes('fezes') || q.includes('comer') || q.includes('copro') || q.includes('potty') || q.includes('poop') || q.includes('urina')) {
      return isEn
        ? {
            text: '🐾 Coprophagia & Potty Training Master Protocol:',
            bullets: [
              '1. Why dogs eat poop: Lack of digestive enzymes, poorly digested kibble that still smells like food, or fear of being punished for indoor accidents.',
              '2. The Pineapple/Papaya Remedy: Add 1 small chunk of fresh raw pineapple or papaya to meals daily. Bromelain & papain enzymes make the resulting stool taste unappealing to the dog.',
              '3. Natural Poop-Block Spray: Mist natural bitter apple or diluted lemon water directly over freshly cleaned surfaces to extinguish scent markers.',
              '4. Never Scold: Never rub their nose in accidents! Take them to the potty area 15-20 min after every meal and reward within 2 seconds with a high-value treat when they succeed.'
            ]
          }
        : {
            text: '🐾 Protocolo Completo contra Coprofagia & Xixi no Lugar Certo:',
            bullets: [
              '1. Por que cães comem fezes: Deficiência de enzimas digestivas, ração mal absorvida que sai com cheiro de alimento, ou medo de broncas por ter feito no lugar errado.',
              '2. O Truque do Abacaxi/Mamão: Dê 1 pedaço pequeno de abacaxi fresco ou mamão junto à refeição. As enzimas bromelina e papaína tornam o gosto das fezes desagradável ao paladar canino.',
              '3. Spray Bloqueador: Limpe o local do erro com desinfetante enzimático (evite produtos com amônia que atraem o olfato canino).',
              '4. Jamais dê bronca tardia: Nunca esfregue o focinho nas necessidades. Leve o pet ao tapetinho 15 minutos após comer e recompense nos primeiros 2 segundos após ele acertar!'
            ]
          };
    }

    // 6. Bad Breath, Teeth, Tartar, Oral Hygiene
    if (q.includes('bafo') || q.includes('halito') || q.includes('hálito') || q.includes('dente') || q.includes('tartaro') || q.includes('tártaro') || q.includes('boca') || q.includes('breath') || q.includes('teeth') || q.includes('tartar')) {
      return isEn
        ? {
            text: '🐾 Fresh Breath & Natural Canine Dental Care Protocol:',
            bullets: [
              '1. Raw Crunchy Carrots: Give cold raw whole carrots as natural mechanical scrubbers that scrape soft plaque safely.',
              '2. Coconut Oil + Parsley Toothpaste: Coconut oil has natural lauric acid that fights oral bacteria. Add finely minced fresh parsley for breath freshness.',
              '3. Never use human toothpaste: Human toothpastes contain fluoride and often xylitol, which is highly toxic and fatal to dogs.'
            ],
            recipe: {
              title: 'Homemade Enzymatic Dog Toothpaste',
              items: ['2 tbsp virgin coconut oil', '1/2 tsp food-grade calcium carbonate or baking soda (tiny pinch)', '1 tbsp minced fresh parsley'],
              instructions: 'Mix and brush gently using a soft silicone finger brush or clean gauze wrapped around your finger 3x weekly.'
            }
          }
        : {
            text: '🐾 Protocolo Hálito Fresco & Controle Natural de Tártaro:',
            bullets: [
              '1. Cenoura Crua Gelada: Ofereça cenouras inteiras e geladas. A mastigação mecânica remove a placa bacteriana recente de forma natural e sem estresse.',
              '2. Pasta Dental de Óleo de Coco: O ácido láurico do óleo de coco é bactericida natural contra bactérias periodontais.',
              '3. NUNCA use pasta dental humana: Pastas humanas têm flúor e muitas contêm xilitol, que é altamente tóxico e letal para cães.'
            ],
            recipe: {
              title: 'Pasta Dental Natural Caseira',
              items: ['2 colheres de sopa de óleo de coco virgem', '1 pitada microscópica de bicarbonato', '1 colher de chá de salsa fresca picada'],
              instructions: 'Misture bem e aplique nos dentes com uma dedeira de silicone ou gaze enrolada no dedo 3 vezes por semana.'
            }
          };
    }

    // 7. Diet, Food, Fruits, Vegetables, Toxic Foods
    if (q.includes('comida') || q.includes('racao') || q.includes('ração') || q.includes('aliment') || q.includes('fruta') || q.includes('legume') || q.includes('pode comer') || q.includes('proibido') || q.includes('food') || q.includes('diet') || q.includes('fruit') || q.includes('toxic')) {
      return isEn
        ? {
            text: '🐾 Canine Nutrition & Safe Food Guide:',
            bullets: [
              '✅ SAFE & HEALTHY: Seedless apples, blueberries, carrots, cooked pumpkin, seedless watermelon, green beans, boiled skinless chicken breast, boiled eggs.',
              '🚫 STRICTLY TOXIC & DANGEROUS: Grapes & raisins (kidney failure), chocolate (theobromine), onions & garlic (hemolytic anemia), macadamia nuts, avocado pit/skin, xylitol sweetener, cooked poultry bones (splinters).'
            ]
          }
        : {
            text: '🐾 Guia de Alimentação & Alimentos Seguros e Proibidos:',
            bullets: [
              '✅ ALIMENTOS PERMITIDOS & NUTRITIVOS: Maçã sem sementes, mirtilos, cenoura crua, abóbora cozida, melancia sem sementes, chuchu, ovo cozido, peito de frango cozido sem tempero/sal.',
              '🚫 ALIMENTOS PROIBIDOS & TÓXICOS: Uvas e passas (falência renal), chocolate (teobromina tóxica), cebola e alho em excesso (destrói glóbulos vermelhos), noz macadâmia, xilitol (adoçante letal), ossos cozidos (lascam no estômago).'
            ]
          };
    }

    // 8. Tummy, Vomiting, Diarrhea, Stomach
    if (q.includes('vomit') || q.includes('vômito') || q.includes('diarreia') || q.includes('fezes mole') || q.includes('barriga') || q.includes('estomago') || q.includes('estômago') || q.includes('diarrhea') || q.includes('stomach')) {
      return isEn
        ? {
            text: '🐾 Canine Gentle Digestive Recovery Protocol:',
            bullets: [
              '1. 12-Hour Rest: For adult dogs, rest the digestive tract for 12 hours (water or electrolyte broth always available).',
              '2. Bland Recovery Meal: Pure boiled white rice mixed with shredded boiled skinless chicken breast (no oil, no onion, no garlic, no seasonings).',
              '3. Pure Pumpkin Puree: Add 1 tablespoon of plain cooked pumpkin puree (natural soluble fiber balances loose stool).',
              '4. Hydration Check: Gently pinch the skin on the back of the neck. If it snaps back instantly, hydration is good.'
            ],
            warning: '⚠️ Seek a clinic immediately if: You see blood in vomit/stool, lethargy, fever, or if your dog is an unvaccinated puppy.'
          }
        : {
            text: '🐾 Protocolo de Recuperação Digestiva & Diarreia Leve:',
            bullets: [
              '1. Descanso Gástrico: Para cães adultos, suspenda a ração pesada por 12 horas, mantendo água fresca ou soro caseiro sempre disponível.',
              '2. Dieta Branda: Arroz branco bem cozido (papa de arroz) com peito de frango desfiado sem pele, sem sal, sem alho e sem óleo.',
              '3. Purê de Abóbora Cozida: 1 colher de sopa de abóbora cabotiá cozida na água (fibras solúveis que firmam o bolo fecal).',
              '4. Teste de Hidratação: Puxe suavemente a pele da nuca do cão; se voltar rápido, a hidratação está preservada.'
            ],
            warning: '⚠️ Leve ao veterinário urgente se: Houver sangue nas fezes/vômito, fraqueza severa, prostração, ou se for filhote sem vacinação completa.'
          };
    }

    // 9. Barking, Anxiety, Calming, Sound, Fireworks
    if (q.includes('latir') || q.includes('late') || q.includes('medo') || q.includes('ansiedade') || q.includes('fogos') || q.includes('barulho') || q.includes('calm') || q.includes('bark') || q.includes('anxiety') || q.includes('fear') || q.includes('thunder')) {
      return isEn
        ? {
            text: '🐾 Canine Calm & Anti-Anxiety Protocol:',
            bullets: [
              '1. 432Hz Sound Therapy: Play the 432Hz calming frequencies in the app 15 minutes before stressful events (lowers cortisol).',
              '2. Safe Den Space: Create a cozy den with your dog’s favorite blanket in an interior room with blinds closed.',
              '3. Lick Mat Mental Stimulation: Spread pure peanut butter (xylitol-free) or Greek yogurt on a lick mat and freeze it. The repetitive licking motion releases natural endorphins and calms the heart rate.',
              '4. Never Reward Anxious Barking: Do not give treats while they are frantically barking; wait for 3 seconds of calm before rewarding.'
            ]
          }
        : {
            text: '🐾 Protocolo Anti-Ansiedade, Medo de Fogos & Latidos Excessivos:',
            bullets: [
              '1. Frequências Calmantes 432Hz: Coloque as faixas de áudio relaxante do aplicativo para tocar 15 a 30 minutos antes do momento de estresse.',
              '2. Toca Segura: Monte um refúgio acolhedor com a manta favorita do pet em um cômodo interno e com janelas fechadas.',
              '3. Tapete de Lamber (Lick Mat): Espalhe pasta de amendoim 100% pura (sem açúcar/xilitol) ou iogurte natural em um tapete de lamber e congele. O ato de lamber libera endorfinas calmantes.',
              '4. Recompensa por Calma: Espere 3 segundos de silêncio para dar atenção ou petisco, reforçando o estado sereno.'
            ]
          };
    }

    // 10. General / Custom query fallback with intelligent structure
    return isEn
      ? {
          text: `🐾 Veterinary Wellness Insight for "${rawQuery}":\nIn our holistic canine wellness approach, natural care, diet quality, and gentle physical checks are the foundations of long-term health.`,
          bullets: [
            `Key Assessment: Monitor your dog's energy level, appetite, and coat condition daily.`,
            `Holistic Prevention: Ensure daily hydration, appropriate omega-3 fatty acids, and clean bedding.`,
            `Direct Action: Explore our step-by-step protocols in the dashboard or click WhatsApp for personalized vet assistance!`
          ]
        }
      : {
          text: `🐾 Orientação Veterinária sobre "${rawQuery}":\nEm nossa metodologia preventiva e integrativa, o bem-estar do seu cão é tratado com respeito à biologia natural, alimentação funcional e cuidados não invasivos.`,
          bullets: [
            `Avaliação: Observe a disposição, apetite, brilho da pelagem e aspecto dos ouvidos.`,
            `Prevenção Ativa: Mantenha a imunidade fortalecida com nutrientes funcionais e hidratação.`,
            `Aprofundamento: Navegue pelos protocolos específicos na tela inicial ou fale conosco pelo WhatsApp oficial se precisar de suporte direto!`
          ]
        };
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
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

    setTimeout(() => {
      const replyData = generateIntelligentAnswer(query);
      const coachMsg: Message = {
        id: `coach-${Date.now()}`,
        sender: 'coach',
        text: replyData.text,
        bullets: replyData.bullets,
        warning: replyData.warning,
        recipe: replyData.recipe,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, coachMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col h-[680px] max-h-[85vh]">
      
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#00c5b3] via-[#0f766e] to-[#0f4c5c] p-4 sm:p-5 text-white flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner border border-white/20">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-black text-white">
                {isEn ? '24/7 Canine Coach' : 'Coach Canino 24h'}
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-[11px] text-teal-100 font-medium">
              {isEn ? 'Specialist in Canine Health & Positive Behavior' : 'Especialista em Saúde & Comportamento Canino'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://api.whatsapp.com/send?phone=5511999999999&text=Ola!%20Sou%20aluno%20do%20Portal%20Pet%20e%20gostaria%20de%20tirar%20uma%20duvida."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow-md transition-all cursor-pointer hover:scale-102"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isEn ? 'Official WhatsApp' : 'WhatsApp Oficial'}</span>
          </a>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
            title={isEn ? "Close" : "Fechar"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50 space-y-4">
        {messages.map((msg) => {
          const isCoach = msg.sender === 'coach';
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-2.5 ${isCoach ? 'justify-start' : 'justify-end'}`}
            >
              {isCoach && (
                <div className="w-8 h-8 rounded-full bg-[#00c5b3] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                  🐾
                </div>
              )}
              <div
                className={`max-w-[90%] sm:max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed shadow-sm ${
                  isCoach
                    ? 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                    : 'bg-[#0f4c5c] text-white rounded-br-xs'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>

                {msg.bullets && msg.bullets.length > 0 && (
                  <div className="mt-3 space-y-1.5 pt-2 border-t border-slate-100">
                    {msg.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {msg.recipe && (
                  <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-2">
                    <p className="font-black text-amber-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      {msg.recipe.title}
                    </p>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-900">
                      {msg.recipe.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-amber-800 italic pt-1 border-t border-amber-200">
                      <strong>{isEn ? 'How to prepare:' : 'Como preparar:'}</strong> {msg.recipe.instructions}
                    </p>
                  </div>
                )}

                {msg.warning && (
                  <div className="mt-3 p-2.5 bg-red-50 text-red-900 rounded-xl border border-red-200 text-[11px] font-bold">
                    {msg.warning}
                  </div>
                )}

                <span
                  className={`text-[10px] block mt-2 text-right font-medium ${
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
          <div className="flex items-center gap-2 text-xs text-slate-400 italic pl-10">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]"></span>
            <span>{t.moduleDetail.coachTyping}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-4 py-2.5 bg-white border-t border-slate-100 overflow-x-auto scrollbar-none flex items-center gap-2">
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
          placeholder={isEn ? 'Type any question about ear, itch, nutrition or behavior...' : 'Digite qualquer dúvida sobre ouvidos, coceira, alimentação ou comportamento...'}
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
