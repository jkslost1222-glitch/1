import { DeliverableItem, RecipeItem, UpsellConfigItem } from '../types';

export const ptDeliverables: DeliverableItem[] = [
  {
    id: 'antiotite',
    title: 'Cuidados com os Ouvidos Canino',
    subtitle: 'Protocolo Oficial Adeus Otite',
    type: 'antiotite',
    isLocked: false,
    category: 'Saúde & Prevenção Auditiva',
    badge: 'PRODUTO PRINCIPAL',
    tagline: 'Elimine a Otite Canina, Mau Cheiro, Coceira e Inflamação no Canal Auditivo Sem Dor',
    description: 'Calculadora personalizada com nome, sexo, idade e peso do seu cão. Inclui Receita do Bifinho Protetor, Spray Calmante Auricular, Modo de Preparo e Dicas de Prevenção.',
    icon: '👂',
    color: '#00c5b3',
    content: {
      overview: 'O conduto auditivo dos cães possui formato em "L" anatômico, o que retém umidade, cera e prolifera bactérias e leveduras (Malassezia). Neste protocolo personalizado por peso, tenha a receita do Bifinho protetor, o Spray Auricular natural de Camomila, o Guia de Higiene indolor e as 4 videoaulas completas.',
      lessons: [
        {
          id: 'otite-1',
          title: 'Aula 1: Anatomia do Canal em L & Sinais Precoces de Otite',
          duration: '8 min',
          description: 'Aprenda a inspecionar o ouvido, identificar coloração da cera (amarelada, marrom ou preta) e agir antes da dor intensa.'
        },
        {
          id: 'otite-2',
          title: 'Aula 2: Técnica de Higienização Sem Dor e Sem Trauma',
          duration: '12 min',
          description: 'Como aplicar a solução de limpeza morna, massagear a base cartilaginosa do ouvido e deixar o cão chacoalhar naturalmente.'
        },
        {
          id: 'otite-3',
          title: 'Aula 3: Gotas Naturais de Própolis Verde & Calêndula',
          duration: '10 min',
          description: 'Fórmula calmante antisséptica natural com ação cicatrizante e antifúngica para aplicação segura.'
        },
        {
          id: 'otite-4',
          title: 'Aula 4: Prevenção Pós-Banho & Cuidados em Cães de Orelha Caída',
          duration: '14 min',
          description: 'Protocolo de vedação de água no banho, secagem correta com toalha e manutenção semanal.'
        }
      ],
      materials: [
        { name: 'Guia_Oficial_Adeus_Otite_Canina.pdf', size: '3.8 MB', type: 'PDF' },
        { name: 'Checklist_Inspecao_Semanal_Ouvidos.pdf', size: '1.1 MB', type: 'PDF' },
        { name: 'Receita_Bifinho_e_Spray_Auricular.pdf', size: '1.4 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'cao-blindado',
    title: 'Cão Blindado',
    subtitle: 'Combo da Longevidade Canina',
    type: 'cao-blindado',
    isLocked: false,
    category: 'Suplementos Naturais & Longevidade',
    badge: 'PREMIUM',
    tagline: '5 Fórmulas Naturais para Proteger a Saúde do seu Cão de Dentro para Fora',
    description: '5 Fórmulas Funcionais Caseiras com Leitor Digital Interativo, Calculadora Proporcional de Gramas por Peso do Pet e Download de PDFs.',
    icon: '🥣',
    color: '#0f4c5c',
    content: {
      overview: 'O Cão Blindado é o combo definitivo de nutrição preventiva e longevidade canina. Desenvolvido para proteger a imunidade celular, articulações, digestão, estresse oxidativo e controle saudável de peso.',
      materials: [
        { name: 'Ebook_Cao_Bem_Nutrido_Receita1.pdf', size: '2.8 MB', type: 'PDF' },
        { name: 'Ebook_Articulacoes_Flexiveis_Receita2.pdf', size: '3.1 MB', type: 'PDF' },
        { name: 'Ebook_Calmante_Natural_Receita3.pdf', size: '2.5 MB', type: 'PDF' },
        { name: 'Ebook_Controle_de_Odores_Receita4.pdf', size: '2.4 MB', type: 'PDF' },
        { name: 'Ebook_Controle_de_Peso_Receita5.pdf', size: '2.9 MB', type: 'PDF' },
        { name: 'Tabela_Completa_Dosagens_Por_Quilo.pdf', size: '1.2 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'coach-canino',
    title: 'Coach Canino 24h',
    subtitle: 'Seu Assistente Inteligente & WhatsApp',
    type: 'coach-canino',
    isLocked: false,
    category: 'Suporte Personalizado & IA',
    badge: 'INTERATIVO 24H',
    tagline: 'Tire Dúvidas Imediatas de Comportamento, Nutrição e Sintomas Caninos a Qualquer Momento',
    description: 'Assistente inteligente e acesso direto ao canal de especialistas via WhatsApp para orientações personalizadas.',
    icon: '🐾',
    color: '#0284c7',
    content: {
      overview: 'Conecte-se com nossa inteligência canina treinada em saúde funcional, prevenção veterinária e comportamento positivo. Ou clique para ser atendido pelo time humano no WhatsApp oficial.',
      steps: [
        'Envie uma dúvida na caixa de mensagens interativa abaixo.',
        'Receba respostas imediatas sobre dosagens, alimentação e comportamento.',
        'Se precisar de suporte com vídeos do seu cão, use o botão de WhatsApp oficial.'
      ]
    }
  },
  {
    id: 'anticoceira',
    title: 'Protocolo Anticoceira Canina',
    subtitle: 'Alívio Imediato com Violeta Genciana 1%',
    type: 'anticoceira',
    isLocked: false,
    category: 'Dermatologia & Alívio Tópico',
    badge: 'PREMIUM',
    tagline: 'Elimine a Coceira Desesperadora, Dermatites e Fungos da Pele sem Corticoide',
    description: 'Fórmula tópica antisséptica e antifúngica natural com dosagem segura de Violeta Genciana 1% para banho semanal e alívio rápido da coceira.',
    icon: '🌸',
    color: '#9333ea',
    content: {
      overview: 'Alívio comprovado para cães que lambem as patas compulsivamente, coçam a pele até ferir ou apresentam odor fúngico (Malassezia). Proporção exata e segura: 15 gotas de Violeta Genciana 1% em 500ml de shampoo neutro canino.',
      materials: [
        { name: 'Guia_Oficial_Protocolo_Anticoceira_Canina.pdf', size: '2.9 MB', type: 'PDF' },
        { name: 'Tabela_Diluicao_Violeta_Genciana_Por_Porte.pdf', size: '1.3 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'mobilidade',
    title: 'Protocolo Mobilidade Canina',
    subtitle: 'Receita Natural Pasta Dourada',
    type: 'mobilidade',
    isLocked: false,
    category: 'Ortopedia & Proteção Articular',
    badge: 'PREMIUM',
    tagline: 'Desinflame as Articulações, Coluna e Cartilagens do seu Cão de Dentro para Fora',
    description: 'Receita oficial e segura da Pasta Dourada com cúrcuma culinária e óleo de coco virgem, leitor digital completo de 5 páginas e download do PDF oficial.',
    icon: '🦴',
    color: '#ea580c',
    content: {
      overview: 'Poderosa fórmula anti-inflamatória natural baseada em curcuminoides biodisponíveis com gordura de coco virgem e pitada de pimenta-do-reino moída para absorção 2000% maior nas articulações.',
      materials: [
        { name: 'Guia_Oficial_Pasta_Dourada_Mobilidade.pdf', size: '3.1 MB', type: 'PDF' },
        { name: 'Protocolo_Coluna_e_Articulacoes_Idosos.pdf', size: '1.7 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'frequencias',
    title: 'Frequências de Alívio',
    subtitle: 'Musicoterapia & Áudios Calmantes',
    type: 'frequencias',
    isLocked: false,
    category: 'Musicoterapia & Bem-Estar',
    badge: 'PLAYER ATIVO',
    tagline: 'Ondas Sonoras Calibradas para Ansiedade, Medo de Trovões, Fogos e Estresse',
    description: 'Faixas de áudio sintetizadas em tempo real em frequências terapêuticas (432 Hz, 528 Hz, 174 Hz, 396 Hz) para desacelerar batimentos e acalmar o sistema nervoso do cão.',
    icon: '🎵',
    color: '#0d9488',
    content: {
      overview: 'Paisagens sonoras acústicas caninas projetadas para reduzir o cortisol salivar e desacelerar a respiração do animal durante tempestades, fogos de artifício ou quando fica sozinho.',
      audioTracks: [
        {
          id: 'freq-432',
          title: 'Calma Profunda & Anti-Ansiedade',
          freq: '432 Hz',
          hz: 432,
          duration: '30 min',
          description: 'Ondas delta suaves para redução imediata do estresse e estabilização do ritmo cardíaco.',
          color: 'from-teal-500 to-emerald-600'
        },
        {
          id: 'freq-528',
          title: 'Alívio de Dores & Relaxamento Muscular',
          freq: '528 Hz',
          hz: 528,
          duration: '45 min',
          description: 'Frequência de ressonância biológica para alívio de tensões físicas e dores articulares.',
          color: 'from-cyan-500 to-blue-600'
        },
        {
          id: 'freq-174',
          title: 'Sono Restaurador & Redução de Latidos Noturnos',
          freq: '174 Hz',
          hz: 174,
          duration: '60 min',
          description: 'Tom grave e acolhedor que ameniza ruídos externos e induz relaxamento profundo.',
          color: 'from-indigo-500 to-purple-600'
        },
        {
          id: 'freq-396',
          title: 'Dessensibilização a Trovões & Fogos',
          freq: '396 Hz',
          hz: 396,
          duration: '40 min',
          description: 'Camada harmônica com ruído rosa para blindar a audição contra estalos súbitos.',
          color: 'from-amber-500 to-rose-600'
        }
      ]
    }
  },
  {
    id: 'aulas-ao-vivo',
    title: 'Aulas ao Vivo & Gravações',
    subtitle: 'Workshops Práticos com Especialistas',
    type: 'aulas-ao-vivo',
    isLocked: false,
    category: 'Treinamento Contínuo',
    badge: 'VÍDEOS',
    tagline: 'Assista a Aulas Gravadas e Participe das Mentorias Semanais de Saúde e Comportamento',
    description: 'Acesse workshops passo a passo gravados com casos reais de cães reativos, ansiosos ou com problemas de saúde.',
    icon: '🎥',
    color: '#2563eb',
    content: {
      overview: 'Aulas práticas semanais com especialistas em comportamento canino e médicos veterinários integrativos. Aprenda a lidar com situações desafiadoras no dia a dia.',
      lessons: [
        {
          id: 'live-1',
          title: 'Workshop: Como Cessar Latidos Excessivos na Campainha e Janela',
          duration: '45 min',
          description: 'Técnica de contracondicionamento para o cão relaxar em sua caminha em vez de disparar no portão.'
        },
        {
          id: 'live-2',
          title: 'Workshop: Passeio Calmo Sem Puxar a Guia e Socialização',
          duration: '52 min',
          description: 'Como transformar o passeio em um momento relaxante sem estresse nas articulações do tutor e do cão.'
        },
        {
          id: 'live-3',
          title: 'Workshop: Protocolo Passo a Passo para Ansiedade de Separação',
          duration: '60 min',
          description: 'Etapas diárias de dessensibilização para deixar seu cachorro sozinho em casa em segurança e tranquilidade.'
        }
      ]
    }
  },
  {
    id: 'presentes',
    title: 'Presentes & Bônus Exclusivos',
    subtitle: 'Guias e Materiais de Apoio',
    type: 'presentes',
    isLocked: false,
    category: 'Bônus Exclusivos',
    badge: 'BÔNUS VIP',
    tagline: 'Tabela de Alimentos Seguros vs. Proibidos, Calculadoras e Guias Imprimíveis',
    description: 'Materiais extras preparados com carinho para enriquecer a rotina e proteger seu melhor amigo contra acidentes alimentares.',
    icon: '🎁',
    color: '#d97706',
    content: {
      overview: 'Acesse guias e infográficos essenciais para ter na porta da geladeira ou no celular, garantindo que ninguém na casa ofereça petiscos tóxicos para o pet.',
      materials: [
        { name: 'Tabela_Mestra_Alimentos_Seguros_vs_Toxicos.pdf', size: '4.2 MB', type: 'PDF' },
        { name: 'Calculadora_Petiscos_Saudaveis_Dia_a_Dia.pdf', size: '950 KB', type: 'PDF' },
        { name: 'Manual_Primeiros_Socorros_Caninos_Basicos.pdf', size: '2.6 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'pet-em-dia',
    title: 'Pet em Dia',
    subtitle: 'Notícias & Dicas Veterinárias',
    type: 'pet-em-dia',
    isLocked: false,
    category: 'Notícias & Dicas',
    badge: 'ATUALIZADO',
    tagline: 'Artigos Semanais com os Últimos Avanços da Medicina Veterinária Preventiva',
    description: 'Dicas práticas de hidratação no calor, mastigação funcional contra tártaro e superalimentos da estação.',
    icon: '📰',
    color: '#059669',
    content: {
      overview: 'Mantenha-se informado com nossa curadoria semanal de artigos sobre nutrição natural, enriquecimento ambiental e saúde canina.',
      newsArticles: [
        {
          id: 'news-1',
          title: 'Protegendo seu cão das ondas de calor: 5 regras vitais',
          date: 'Hoje',
          category: 'Saúde & Clima',
          readTime: '3 min',
          summary: 'Como evitar o golpe de calor (hipertermia), horários seguros para passeio e receitas de picolés naturais de caldo de ossos.',
          content: 'Durante períodos de calor intenso, cães transpiram apenas pelos coxins das patas e pela respiração ofegante. Nunca force passeios no asfalto quente e ofereça água fresca sempre aromatizada com rodelas de pepino ou maçã.'
        },
        {
          id: 'news-2',
          title: 'O papel vital da mastigação na prevenção de tártaro e ansiedade',
          date: 'Ontem',
          category: 'Comportamento & Higiene',
          readTime: '4 min',
          summary: 'Mordedores desidratados naturais liberam endorfina e limpam as placas bacterianas sem produtos químicos abrasivos.',
          content: 'A mastigação diária de 15 a 20 minutos com itens naturais adequados estimula a produção de saliva e remove a placa bacteriana inicial de forma mecânica suave.'
        },
        {
          id: 'news-3',
          title: 'Superalimentos da estação que aumentam a imunidade celular do cão',
          date: '3 dias atrás',
          category: 'Nutrição Funcional',
          readTime: '5 min',
          summary: 'Abóbora cabotiá cozida, semente de abóbora triturada e espinafre como fontes ricas de antioxidantes.',
          content: 'A inclusão controlada de fibras solúveis e carotenoides atua no microbioma intestinal, onde 70% das células do sistema imunológico do cão estão localizadas.'
        }
      ]
    }
  },
  {
    id: 'antibafo',
    title: 'Protocolo Antibafo Canino',
    subtitle: 'Higiene Bucal Natural & Tártaro',
    type: 'antibafo',
    isLocked: false,
    category: 'Higiene Bucal',
    badge: 'RECEITA NATURAL',
    tagline: 'Elimine o Mau Hálito, Prevenção Natural de Tártaro e Gengivas Saudáveis',
    description: 'Receita caseira de pasta dental enzimática com óleo de coco virgem, hortelã e clorela para dentes limpos e hálito fresco.',
    icon: '🦷',
    color: '#0284c7',
    content: {
      overview: 'Fórmula 100% segura para deglutição feita com óleo de coco prensado a frio, toque suave de folhas de hortelã fresca e pó de alga clorela. Combate as bactérias anaeróbicas causadoras do mau odor bucal.',
      materials: [
        { name: 'Guia_Oficial_Pasta_Dental_Enzimatica_Caseira.pdf', size: '1.9 MB', type: 'PDF' },
        { name: 'Cronograma_Higienizacao_Bucal_Sem_Estresse.pdf', size: '1.1 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'comer-coco',
    title: 'Protocolo Pare Coprofagia',
    subtitle: 'Spray Bloqueador de Cocô',
    type: 'comer-coco',
    isLocked: false,
    category: 'Comportamento & Coprofagia',
    badge: 'MÉTODO EFICAZ',
    tagline: 'Receita Natural do Spray Bloqueador e Treino de Hábitos para Parar a Coprofagia',
    description: 'Aprenda a fórmula do Spray Bloqueador de Odor e o protocolo comportamental para que seu cão nunca mais coma fezes.',
    icon: '🚫',
    color: '#b45309',
    content: {
      overview: 'A coprofagia canina decorre de deficiências enzimáticas, digestão incompleta ou ansiedade. Nosso protocolo atua na melhora da digestibilidade com abacaxi/mamão e na barreira sensorial com spray repelente natural seguro.',
      materials: [
        { name: 'Guia_Oficial_Pare_Coprofagia_Canina.pdf', size: '3.4 MB', type: 'PDF' },
        { name: 'Formula_Spray_Bloqueador_Repelente_Natural.pdf', size: '1.2 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'coceira-xixi',
    title: 'Protocolo Coceira + Xixi e Fezes no Lugar Certo',
    subtitle: 'Alívio Tópico & Adestramento Higiênico Sem Erros',
    type: 'coceira-xixi',
    isLocked: false,
    category: 'Dermatologia & Comportamento Higiênico',
    badge: 'COMBO EXCLUSIVO',
    tagline: 'Elimine a Coceira Desesperadora e Ensine Seu Cão a Fazer Xixi e Cocô no Lugar Certo Sem Broncas',
    description: 'Protocolo 2 em 1 com Fórmula Anticoceira de Violeta Genciana 1% + Os 4 Momentos de Ouro para Xixi no Tapete e Spray Neutralizador.',
    icon: '🎯',
    color: '#7e22ce',
    content: {
      overview: 'Resolva os dois maiores desafios do dia a dia com seu cão: elimine a coceira, dermatites e lambedura de patas com a diluição segura de Violeta Genciana 1% + aprenda o método infalível de reforço positivo em 3 segundos para xixi e fezes no tapete higiênico sem estresse.',
      materials: [
        { name: 'Guia_Oficial_Coceira_Mais_Xixi_no_Lugar_Certo.pdf', size: '3.6 MB', type: 'PDF' },
        { name: 'Manual_Adestramento_Higienico_Sem_Broncas.pdf', size: '2.4 MB', type: 'PDF' },
        { name: 'Tabela_Diluicao_Violeta_Genciana_e_Spray_Caseiro.pdf', size: '1.5 MB', type: 'PDF' }
      ]
    }
  },
  {
    id: 'suporte',
    title: 'Central de Ajuda & Suporte',
    subtitle: 'FAQ & Atendimento WhatsApp',
    type: 'suporte',
    isLocked: false,
    category: 'Central de Ajuda',
    badge: 'SUPORTE VIP',
    tagline: 'Respostas Rápidas para Dúvidas de Acesso, Aplicativo e Contato Direto',
    description: 'Tire suas dúvidas sobre instalação no celular, validade do acesso e suporte humano.',
    icon: '💬',
    color: '#16a34a',
    content: {
      overview: 'Precisa de ajuda com o aplicativo, acesso às aulas ou orientações adicionais? Nossa equipe de suporte está sempre pronta para ajudar.',
      faqs: [
        {
          question: 'Como faço para instalar o aplicativo no celular?',
          answer: 'Basta clicar no botão "Instalar App" no topo do menu para adicionar o aplicativo diretamente à tela inicial do seu celular Android ou iPhone.'
        },
        {
          question: 'Por quanto tempo terei acesso à plataforma?',
          answer: 'O seu acesso é completo e vitalício, incluindo todas as atualizações futuras e novos conteúdos adicionados.'
        },
        {
          question: 'Como faço para desbloquear módulos adicionais?',
          answer: 'Módulos adicionais podem ser desbloqueados instantaneamente clicando no botão de desbloqueio dentro do próprio módulo ou através do nosso suporte.'
        },
        {
          question: 'Como falo com um atendente humano?',
          answer: 'Clique no botão verde do WhatsApp presente dentro deste módulo de suporte para falar diretamente com nosso atendimento oficial.'
        }
      ]
    }
  }
];

export const enDeliverables: DeliverableItem[] = ptDeliverables.map(item => {
  if (item.id === 'cao-blindado') {
    return {
      ...item,
      title: 'Armored Dog Protocol',
      subtitle: 'Canine Longevity Combo',
      category: 'Natural Supplements & Longevity',
      badge: 'PREMIUM',
      tagline: '5 Natural Formulas to Protect Your Dog’s Health from Inside Out',
      description: '5 Functional Homemade Formulas with Interactive Digital E-book Reader, Exact Weight Dosage Calculator, and PDF Downloads.'
    };
  }
  if (item.id === 'antiotite') {
    return {
      ...item,
      title: 'Goodbye Otitis Protocol',
      subtitle: 'Canine Ear Care & Prevention',
      category: 'Ear Health & Prevention',
      badge: 'OFFICIAL CONTENT',
      tagline: 'Eliminate Canine Ear Infections, Odor, Itching, and Canal Inflammation Painlessly',
      description: 'Step-by-step method to clean the L-shaped ear canal safely, soothe with propolis & calendula, and prevent recurrence.'
    };
  }
  if (item.id === 'coach-canino') {
    return {
      ...item,
      title: 'Canine Coach 24/7',
      subtitle: 'Smart AI Assistant & WhatsApp',
      category: 'Custom Support & AI',
      badge: '24/7 INTERACTIVE',
      tagline: 'Instant Answers for Dog Behavior, Nutrition, and Health Questions Anytime',
      description: 'AI-powered canine health assistant plus direct access to human specialists via WhatsApp.'
    };
  }
  if (item.id === 'anticoceira') {
    return {
      ...item,
      title: 'Canine Anti-Itch Protocol',
      subtitle: 'Instant Relief with Gentian Violet 1%',
      category: 'Dermatology & Topical Relief',
      badge: 'PREMIUM',
      tagline: 'Eliminate Desperate Scratching, Yeast Infections, and Dermatitis Without Cortisone',
      description: 'Antiseptic topical formula with safe Gentian Violet 1% dilution for weekly baths and fast itch relief.'
    };
  }
  if (item.id === 'coceira-xixi') {
    return {
      ...item,
      title: 'Anti-Itch & Potty Training Protocol',
      subtitle: 'Skin Relief & Error-Free Potty Routine',
      category: 'Dermatology & Positive Potty Training',
      badge: 'EXCLUSIVE COMBO',
      tagline: 'Eliminate Desperate Itching and Train Your Dog to Pee & Poop on the Pad Without Yelling',
      description: '2-in-1 Protocol with Gentian Violet 1% Anti-Itch Formula + The 4 Golden Potty Moments and Natural Odor Eliminator Spray.',
      content: {
        ...item.content,
        overview: 'Solve two of the biggest canine daily struggles at once: eliminate itching, yeast, and paw licking with safe Gentian Violet 1% + master 3-second positive reinforcement for error-free pee pad habits without yelling or punishment.'
      }
    };
  }
  if (item.id === 'mobilidade') {
    return {
      ...item,
      title: 'Canine Mobility Protocol',
      subtitle: 'Golden Paste Natural Recipe',
      category: 'Orthopedics & Joint Protection',
      badge: 'PREMIUM',
      tagline: 'Soothe Your Dog’s Joints, Spine, and Cartilage from the Inside Out',
      description: 'Official and safe Golden Paste recipe with pure culinary turmeric and virgin coconut oil with digital reader and PDF guide.'
    };
  }
  if (item.id === 'frequencias') {
    return {
      ...item,
      title: 'Relief Frequencies',
      subtitle: 'Music Therapy & Calming Audios',
      category: 'Music Therapy & Well-Being',
      badge: 'ACTIVE PLAYER',
      tagline: 'Calibrated Sound Waves for Anxiety, Thunder Phobia, Fireworks & Stress',
      description: 'Real-time synthesized audio tracks at therapeutic frequencies (432 Hz, 528 Hz, 174 Hz, 396 Hz) to calm canine nervous systems.'
    };
  }
  if (item.id === 'aulas-ao-vivo') {
    return {
      ...item,
      title: 'Live Classes & Recordings',
      subtitle: 'Practical Workshops with Specialists',
      category: 'Ongoing Training',
      badge: 'VIDEO WORKSHOPS',
      tagline: 'Watch Recorded Workshops and Join Weekly Mentorships on Health & Behavior',
      description: 'Access step-by-step masterclasses featuring real case studies of reactive and anxious dogs.'
    };
  }
  if (item.id === 'presentes') {
    return {
      ...item,
      title: 'Exclusive Gifts & Bonuses',
      subtitle: 'Printable Charts & Reference Guides',
      category: 'Exclusive Bonuses',
      badge: 'VIP BONUS',
      tagline: 'Master Safe vs. Toxic Foods Chart, Treat Calculators, and First Aid Guides',
      description: 'Printable companion charts for your fridge to keep your pet safe from accidental poisonings.'
    };
  }
  if (item.id === 'pet-em-dia') {
    return {
      ...item,
      title: 'Pet Daily News',
      subtitle: 'Veterinary Insights & Daily Tips',
      category: 'Insights & News',
      badge: 'UPDATED',
      tagline: 'Weekly Curated Articles on Natural Preventative Veterinary Medicine',
      description: 'Practical tips on heat safety, dental chewing, and seasonal superfoods.'
    };
  }
  if (item.id === 'antibafo') {
    return {
      ...item,
      title: 'Fresh Breath Protocol',
      subtitle: 'Natural Dental Hygiene & Plaque Care',
      category: 'Dental Hygiene',
      badge: 'NATURAL RECIPE',
      tagline: 'Eliminate Bad Dog Breath, Prevent Plaque & Maintain Healthy Gums',
      description: 'DIY enzymatic natural toothpaste with virgin coconut oil, mint, and chlorella.'
    };
  }
  if (item.id === 'comer-coco') {
    return {
      ...item,
      title: 'Stop Coprophagia Protocol',
      subtitle: 'Poop Block Natural Spray',
      category: 'Behavior & Coprophagia',
      badge: 'EFFECTIVE METHOD',
      tagline: 'Natural Poop Block Spray Formula & Habit Retraining to Stop Stool Eating',
      description: 'Learn the natural sensory deterrent spray formula and digestive enzyme solutions.'
    };
  }
  return {
    ...item,
    title: 'Help Center & Support',
    subtitle: 'FAQ & WhatsApp Assistance',
    category: 'Help Center',
    badge: 'VIP SUPPORT',
    tagline: 'Fast Answers for App Setup, Lifetime Access & Direct Live Contact',
    description: 'Get all your questions answered regarding mobile installation and personalized support.'
  };
});

export const recipesData: RecipeItem[] = [
  {
    id: 1,
    number: 1,
    name: 'Cão Bem Nutrido',
    categoryName: 'Suplemento Anti-inflamatório & Imunidade',
    badge: 'Articulações & Imunidade Celular',
    icon: '🥣',
    accentColor: 'from-[#c92a17] via-[#dc2626] to-[#b91c1c]',
    targetBenefit: 'Ação anti-inflamatória sistêmica potente, modulação imunológica e proteção celular contra radicais livres.',
    baseDosageGramsPer10kg: 10,
    ingredients: [
      { name: 'Cúrcuma pura em pó (grau alimentício)', amountPer10kg: '1/2 colher de chá (1.5g)', rawAmount: 1.5, unit: 'g', purpose: 'Curcuminoides com ação anti-inflamatória potente' },
      { name: 'Óleo de coco virgem prensado a frio', amountPer10kg: '1 colher de chá rasa (5g)', rawAmount: 5, unit: 'g', purpose: 'Ácidos graxos de cadeia média e carreador lipídico' },
      { name: 'Pimenta-preta moída na hora', amountPer10kg: '1 pitada microscópica (<0.1g)', rawAmount: 0.1, unit: 'g', purpose: 'Piperina aumenta biodisponibilidade da cúrcuma em até 2000%' },
      { name: 'Farinha de semente de linhaça dourada moída', amountPer10kg: '1 colher de chá (3.5g)', rawAmount: 3.5, unit: 'g', purpose: 'Ômega-3 vegetal (ALA) e fibras para a microbiota' }
    ],
    instructions: [
      'Misture a cúrcuma em pó com a pitada de pimenta-preta moída na hora em um pequeno recipiente de vidro.',
      'Aqueça o óleo de coco em banho-maria morno (nunca fervendo) apenas até ficar líquido.',
      'Incorpore a cúrcuma e a linhaça no óleo de coco, mexendo com uma espátula de silicone até formar uma pasta homogênea dourada.',
      'Sirva misturado à ração ou alimentação natural do cão na proporção indicada para o peso dele.'
    ],
    tips: [
      'Pode ser conservado em pote de vidro escuro na geladeira por até 14 dias.',
      'Se o cão nunca consumiu cúrcuma, comece com metade da dose nos primeiros 3 dias para adaptação digestiva.'
    ],
    warning: 'Não utilizar em fêmeas gestantes ou animais com cálculos biliares diagnosticados sem supervisão veterinária.'
  },
  {
    id: 2,
    number: 2,
    name: 'Articulações Flexíveis',
    categoryName: 'Suplemento de Colágeno & Regeneração Articular',
    badge: 'Mobilidade & Colágeno',
    icon: '🦴',
    accentColor: 'from-[#b91c1c] via-[#ea580c] to-[#c2410c]',
    targetBenefit: 'Reparação de cartilagens, lubrificação do líquido sinovial e alívio de rigidez ao levantar em cães idosos ou de grande porte.',
    baseDosageGramsPer10kg: 15,
    ingredients: [
      { name: 'Gelatina incolor sem sabor (colágeno hidrolisado)', amountPer10kg: '1 colher de chá cheia (4g)', rawAmount: 4, unit: 'g', purpose: 'Fonte rica de glicina, prolina e peptídeos de colágeno' },
      { name: 'Caldo de ossos caseiro concentrado em gelatina', amountPer10kg: '1 colher de sopa (15ml)', rawAmount: 15, unit: 'ml', purpose: 'Glicosaminoglicanos, sulfato de condroitina e minerais' },
      { name: 'Óleo de peixe ômega-3 (EPA/DHA)', amountPer10kg: '1/2 colher de café (1.5ml)', rawAmount: 1.5, unit: 'ml', purpose: 'Controle de citocinas inflamatórias nas articulações' },
      { name: 'Gergelim triturado na hora', amountPer10kg: '1/2 colher de chá (2g)', rawAmount: 2, unit: 'g', purpose: 'Cálcio natural de alta biodisponibilidade e magnésio' }
    ],
    instructions: [
      'Hidrate a gelatina incolor em 2 colheres de água morna filtrada até dissolver completamente.',
      'Adicione o caldo de ossos morno e misture bem com a gelatina.',
      'Acrescente o óleo de peixe e o gergelim triturado no momento de servir.',
      'Despeje por cima da refeição matinal do seu pet.'
    ],
    tips: [
      'Excelente para cães idosos, raças propensas à displasia (Golden, Pastor, Labrador) ou cães com rigidez matinal.',
      'Pode ser congelado em forminhas de gelo de patinha para servir como petisco gelado e refrescante no verão.'
    ],
    warning: 'Verifique sempre se a gelatina comprada não possui adição de açúcares, adoçantes artificiais ou xilitol.'
  },
  {
    id: 3,
    number: 3,
    name: 'Calmante Natural',
    categoryName: 'Suplemento Relaxante & Neuroprotetor',
    badge: 'Ansiedade & Estresse',
    icon: '💤',
    accentColor: 'from-[#c2410c] via-[#d97706] to-[#b45309]',
    targetBenefit: 'Redução de cortisol, alívio de hiperatividade, suporte durante tempestades, fogos e viagens de carro.',
    baseDosageGramsPer10kg: 8,
    ingredients: [
      { name: 'Infusão concentrada de Camomila e Maracujá (Passiflora)', amountPer10kg: '2 colheres de sopa (20ml)', rawAmount: 20, unit: 'ml', purpose: 'Apigenina e flavonoides agonistas de receptores GABA' },
      { name: 'Extrato de Valeriana canina em pó ou folha seca', amountPer10kg: '1 pitada leve (0.5g)', rawAmount: 0.5, unit: 'g', purpose: 'Relaxamento muscular e ancoragem neurovegetativa' },
      { name: 'L-Triptofano natural (levedura de cerveja)', amountPer10kg: '1/2 colher de chá (1.5g)', rawAmount: 1.5, unit: 'g', purpose: 'Precursor natural de serotonina e melatonina' },
      { name: 'Banana madura amassada', amountPer10kg: '1 fatia média (10g)', rawAmount: 10, unit: 'g', purpose: 'Palatabilizante, magnésio e carreador de triptofano' }
    ],
    instructions: [
      'Faça um chá concentrado de camomila e folhas de maracujá (100ml de água para 1 colher de sopa de ervas). Deixe esfriar completamente.',
      'Amasse a fatia de banana com um garfo até formar um purê.',
      'Misture a levedura de cerveja, a pitada de valeriana e 2 colheres do chá frio na banana amassada.',
      'Ofereça cerca de 45 a 60 minutos antes de situações estressantes (visitas, trovões, fogos, viagens ou saída de casa).'
    ],
    tips: [
      'Pode ser recheado em brinquedos interativos (como Kong) e congelado para o cão lamber por 30 minutos.',
      'Não causa sonolência artificial ou perda de reflexos, promovendo calma consciente e relaxamento biológico.'
    ],
    warning: 'Nunca utilize chás que contenham teína, cafeína ou misturas comerciais aromáticas industrializadas.'
  },
  {
    id: 4,
    number: 4,
    name: 'Controle de Odores',
    categoryName: 'Suplemento Digestivo & Hálito Fresco',
    badge: 'Odor Corporal & Hálito',
    icon: '🧼',
    accentColor: 'from-[#c92a17] via-[#dc2626] to-[#ea580c]',
    targetBenefit: 'Redução drástica de gases intestinais, fezes mais firmes e sem odor fétido, pele com cheiro limpo e hálito renovado.',
    baseDosageGramsPer10kg: 6,
    ingredients: [
      { name: 'Clorela pura em pó prensada a frio', amountPer10kg: '1/4 colher de café (0.5g)', rawAmount: 0.5, unit: 'g', purpose: 'Clorofila natural que atua como desodorizador interno' },
      { name: 'Folhas de hortelã fresca picadinhas', amountPer10kg: '3 folhinhas higienizadas', rawAmount: 1, unit: 'g', purpose: 'Ação refrescante, antisséptica bucal e carminativa' },
      { name: 'Farinha de coco pura (fibra prebiótica)', amountPer10kg: '1 colher de chá (3g)', rawAmount: 3, unit: 'g', purpose: 'Fibras fermentáveis que nutrem as bactérias benéficas do cólon' },
      { name: 'Iogurte natural integral sem açúcar', amountPer10kg: '1 colher de sobremesa (10g)', rawAmount: 10, unit: 'g', purpose: 'Lactobacillus vivos para recomposição da microbiota' }
    ],
    instructions: [
      'Higienize bem as folhas de hortelã e pique-as finamente.',
      'Em um potinho, adicione o iogurte natural sem açúcar.',
      'Polvilhe a clorela e a farinha de coco, mexendo até dissolver o pó esmeralda no iogurte.',
      'Adicione a hortelã picadinha e sirva junto à ração ou como petisco digestivo após a refeição principal.'
    ],
    tips: [
      'Em 7 a 10 dias de uso diário, nota-se grande redução nos gases e melhora evidente do cheiro do pelo e da boca.',
      'Excelente para cães braquicefálicos (Bulldogs, Pugs, Shih Tzus) propensos ao acúmulo de gases.'
    ],
    warning: 'O iogurte deve ser 100% natural, composto apenas por leite e fermento lácteo, sem xilitol ou corantes.'
  },
  {
    id: 5,
    number: 5,
    name: 'Controle de Peso',
    categoryName: 'Suplemento de Saciedade & Manutenção de Peso',
    badge: 'Saciedade & Metabolismo',
    icon: '⚖️',
    accentColor: 'from-[#c92a17] via-[#ea580c] to-[#d97706]',
    targetBenefit: 'Aumento da saciedade sem calorias extras, aceleração do metabolismo lipídico e manutenção da massa magra.',
    baseDosageGramsPer10kg: 25,
    ingredients: [
      { name: 'Purê de abobrinha ou chuchu cozido no vapor', amountPer10kg: '2 colheres de sopa cheias (20g)', rawAmount: 20, unit: 'g', purpose: 'Volume gástrico com densidade calórica quase nula e alta hidratação' },
      { name: 'Psyllium em pó puro', amountPer10kg: '1/3 colher de chá (1g)', rawAmount: 1, unit: 'g', purpose: 'Fibra solúvel mucilaginosa que retarda o esvaziamento gástrico' },
      { name: 'Gengibre fresco ralado em dose mínima', amountPer10kg: '1 raspada milimétrica (<0.2g)', rawAmount: 0.2, unit: 'g', purpose: 'Gingerol termogênico suave que auxilia a queima de gordura' },
      { name: 'Vinagre de maçã orgânico não pasteurizado', amountPer10kg: '1/2 colher de café (1.5ml)', rawAmount: 1.5, unit: 'ml', purpose: 'Ácido acético que modula a glicose sanguínea pós-prandial' }
    ],
    instructions: [
      'Cozinhe a abobrinha ou chuchu no vapor até ficar bem macio e amasse com o garfo.',
      'Misture o psyllium em pó e o vinagre de maçã no purê ainda morno.',
      'Deixe descansar por 3 minutos para que o psyllium absorva os líquidos e forme uma textura gelatinosa sacietógena.',
      'Substitua 15% a 20% da porção habitual de ração por este purê funcional saciante.'
    ],
    tips: [
      'Permite que o cão em dieta coma um volume generoso sem passar fome ou pedir comida o dia todo.',
      'Aumenta o trânsito intestinal e previne a constipação com hidratação celular.'
    ],
    warning: 'Sempre certifique-se de que o cão tem água fresca e abundante disponível ao consumir fibras como psyllium.'
  }
];

export const upsellConfig: Record<string, UpsellConfigItem> = {
  antiOtite: {
    key: 'antiOtite',
    id: 'antiotite',
    title: 'Protocolo Adeus Otite',
    subtitle: 'Higiene & Prevenção Auditiva Sem Dor',
    category: 'Saúde & Prevenção Auditiva',
    tagline: 'Elimine a Otite Canina, Mau Cheiro, Coceira e Inflamação no Canal Auditivo Sem Dor',
    badgeText: 'PROTOCOLO OFICIAL',
    shortDescription: 'Método passo a passo para higienizar o conduto auditivo em "L", desinflamar com própolis e calêndula e acabar com as recidivas.',
    fullBenefits: [
      '4 Videoaulas práticas de anatomia e técnica de limpeza sem dor',
      'Fórmula calmante natural de Gotas de Própolis Verde & Calêndula',
      'Protocolo de prevenção pós-banho para cães de orelhas caídas',
      'Checklist de inspeção semanal e guia em PDF de alta resolução',
      'Garantia incondicional de 7 dias com reembolso total'
    ],
    icon: '👂',
    accentColor: '#00c5b3',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    guaranteeDays: 7,
    price: 'R$ 14,90',
    originalPrice: 'R$ 97,00'
  },
  'cao-blindado': {
    key: 'cao-blindado',
    id: 'cao-blindado',
    title: 'Protocolo Cão Blindado',
    subtitle: 'Combo da Longevidade Canina',
    category: 'Suplementos Naturais & Longevidade',
    tagline: '5 Fórmulas Naturais para Proteger a Saúde do seu Cão de Dentro para Fora',
    badgeText: 'CONTEÚDO PREMIUM',
    shortDescription: 'O combo definitivo com 5 receitas funcionais caseiras de suplementação, calculadora inteligente de dosagens por peso e 5 e-books ilustrados para download.',
    fullBenefits: [
      'Receita 1: Cão Bem Nutrido (Imunidade máxima e anti-inflamatório)',
      'Receita 2: Articulações Flexíveis (Matriz de colágeno e alívio de cartilagem)',
      'Receita 3: Calmante Natural (Redução de ansiedade, fobia de ruídos e estresse)',
      'Receita 4: Controle de Odor e Intestino (Redução de gases, fezes firmes e hálito fresco)',
      'Receita 5: Controle de Peso Saudável (Saciedade e taxa metabólica equilibrada)',
      'Calculadora inteligente de dosagens por peso corporal (kg e lb)',
      'Download do Guia Oficial Ilustrado em PDF completo'
    ],
    icon: '🥣',
    accentColor: '#0f4c5c',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    guaranteeDays: 7,
    price: 'R$ 14,90',
    originalPrice: 'R$ 97,00'
  },
  caoBlindado: {
    key: 'caoBlindado',
    id: 'cao-blindado',
    title: 'Protocolo Cão Blindado',
    subtitle: 'Combo da Longevidade Canina',
    category: 'Suplementos Naturais & Longevidade',
    tagline: '5 Fórmulas Naturais para Proteger a Saúde do seu Cão de Dentro para Fora',
    badgeText: 'CONTEÚDO PREMIUM',
    shortDescription: 'O combo definitivo com 5 receitas funcionais caseiras de suplementação, calculadora inteligente de dosagens por peso e 5 e-books ilustrados para download.',
    fullBenefits: [
      'Receita 1: Cão Bem Nutrido (Imunidade máxima e anti-inflamatório)',
      'Receita 2: Articulações Flexíveis (Matriz de colágeno e alívio de cartilagem)',
      'Receita 3: Calmante Natural (Redução de ansiedade, fobia de ruídos e estresse)',
      'Receita 4: Controle de Odor e Intestino (Redução de gases, fezes firmes e hálito fresco)',
      'Receita 5: Controle de Peso Saudável (Saciedade e taxa metabólica equilibrada)',
      'Calculadora inteligente de dosagens por peso corporal (kg e lb)',
      'Download do Guia Oficial Ilustrado em PDF completo'
    ],
    icon: '🥣',
    accentColor: '#0f4c5c',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 14,90',
    originalPrice: 'R$ 97,00'
  },
  'anticoceira': {
    key: 'anticoceira',
    id: 'anticoceira',
    title: 'Protocolo Anticoceira Canina',
    subtitle: 'Alívio Imediato com Violeta Genciana 1%',
    category: 'Dermatologia & Alívio Tópico',
    tagline: 'Elimine a Coceira Desesperadora, Dermatites e Fungos da Pele sem Corticoide',
    badgeText: 'CONTEÚDO PREMIUM',
    shortDescription: 'Fórmula tópica natural antisséptica e antifúngica com dosagem segura de Violeta Genciana 1% para banhos periódicos e alívio rápido.',
    fullBenefits: [
      'Diluição segura: 15 gotas de Violeta Genciana 1% por 500ml de shampoo canino',
      'Passo a passo de aplicação para alívio imediato no primeiro banho',
      'Protocolo de segurança para feridas abertas, manchas vermelhas ou coceira na pele',
      'Plano de manutenção preventiva semanal',
      'Download do Guia Oficial em PDF de alta resolução'
    ],
    icon: '🌸',
    accentColor: '#9333ea',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 19,90',
    originalPrice: 'R$ 39,00'
  },
  antiCoceira: {
    key: 'antiCoceira',
    id: 'anticoceira',
    title: 'Protocolo Anticoceira Canina',
    subtitle: 'Alívio Imediato com Violeta Genciana 1%',
    category: 'Dermatologia & Alívio Tópico',
    tagline: 'Elimine a Coceira Desesperadora, Dermatites e Fungos da Pele sem Corticoide',
    badgeText: 'CONTEÚDO PREMIUM',
    shortDescription: 'Fórmula tópica natural antisséptica e antifúngica com dosagem segura de Violeta Genciana 1% para banhos periódicos e alívio rápido.',
    fullBenefits: [
      'Diluição segura: 15 gotas de Violeta Genciana 1% por 500ml de shampoo canino',
      'Passo a passo de aplicação para alívio imediato no primeiro banho',
      'Protocolo de segurança para feridas abertas, manchas vermelhas ou coceira na pele',
      'Plano de manutenção preventiva semanal',
      'Download do Guia Oficial em PDF de alta resolução'
    ],
    icon: '🌸',
    accentColor: '#9333ea',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 19,90',
    originalPrice: 'R$ 39,00'
  },
  'coceira-xixi': {
    key: 'coceira-xixi',
    id: 'coceira-xixi',
    title: 'Protocolo Coceira + Xixi e Fezes no Lugar Certo',
    subtitle: 'Combo Duplo Anticoceira & Adestramento Higiênico',
    category: 'Dermatologia & Comportamento Higiênico',
    tagline: 'Elimine a Coceira Desesperadora e Ensine Seu Cão a Fazer Xixi e Cocô no Lugar Certo Sem Broncas',
    badgeText: 'COMBO EXCLUSIVO',
    shortDescription: 'Protocolo 2 em 1: Fórmula Anticoceira de Violeta Genciana 1% + Os 4 Momentos de Ouro para Xixi no Tapete e Spray Neutralizador de Odores.',
    fullBenefits: [
      'Diluição exata de Violeta Genciana 1% em shampoo neutro contra fungos e coceiras',
      'Método dos 4 Momentos de Ouro biológicos para acerto de 100% no tapete higiênico',
      'A Regra dos 3 Segundos de reforço positivo com petisco',
      'Receita do Spray Caseiro Neutralizador de Odor para evitar erros no chão',
      'Download do Guia Ilustrado em PDF de Alta Resolução'
    ],
    icon: '🎯',
    accentColor: '#7e22ce',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 19,90',
    originalPrice: 'R$ 67,00'
  },
  coceiraXixi: {
    key: 'coceiraXixi',
    id: 'coceira-xixi',
    title: 'Protocolo Coceira + Xixi e Fezes no Lugar Certo',
    subtitle: 'Combo Duplo Anticoceira & Adestramento Higiênico',
    category: 'Dermatologia & Comportamento Higiênico',
    tagline: 'Elimine a Coceira Desesperadora e Ensine Seu Cão a Fazer Xixi e Cocô no Lugar Certo Sem Broncas',
    badgeText: 'COMBO EXCLUSIVO',
    shortDescription: 'Protocolo 2 em 1: Fórmula Anticoceira de Violeta Genciana 1% + Os 4 Momentos de Ouro para Xixi no Tapete e Spray Neutralizador de Odores.',
    fullBenefits: [
      'Diluição exata de Violeta Genciana 1% em shampoo neutro contra fungos e coceiras',
      'Método dos 4 Momentos de Ouro biológicos para acerto de 100% no tapete higiênico',
      'A Regra dos 3 Segundos de reforço positivo com petisco',
      'Receita do Spray Caseiro Neutralizador de Odor para evitar erros no chão',
      'Download do Guia Ilustrado em PDF de Alta Resolução'
    ],
    icon: '🎯',
    accentColor: '#7e22ce',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 19,90',
    originalPrice: 'R$ 67,00'
  },
  'mobilidade': {
    key: 'mobilidade',
    id: 'mobilidade',
    title: 'Protocolo Mobilidade Canina',
    subtitle: 'Receita Natural da Pasta Dourada',
    category: 'Ortopedia & Proteção Articular',
    tagline: 'Desinflame as Articulações, Coluna e Cartilagens do seu Cão de Dentro para Fora',
    badgeText: 'CONTEÚDO PREMIUM',
    shortDescription: 'Receita oficial e segura da Pasta Dourada com cúrcuma culinária e óleo de coco virgem, leitor digital completo de 5 páginas e PDF para download.',
    fullBenefits: [
      'Receita da Pasta Dourada (óleo de coco virgem + até 1 colher de cúrcuma + pimenta)',
      'Poderosos compostos anti-inflamatórios que acalmam de dentro para fora',
      '2 Métodos de preparo rápidos: mistura crua ou versão levemente aquecida',
      'Cronograma semanal de dosagem (3x por semana)',
      'Calculadora inteligente de dosagens por peso e porte',
      'Download do Guia Oficial Completo em PDF ilustrado'
    ],
    icon: '🦴',
    accentColor: '#ea580c',
    checkoutUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    checkoutUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    salesPageUrl: 'https://pay.kiwify.com.br/OAXrNvm',
    salesPageUrlEn: 'https://pay.kiwify.com/1MAymAQ',
    guaranteeDays: 7,
    price: 'R$ 14,90',
    originalPrice: 'R$ 97,00'
  }
};
