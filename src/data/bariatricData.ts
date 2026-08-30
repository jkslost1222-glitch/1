import { BariatricRecipe, DailyPlanDay, ShotRecipe, TeaRecipe, FaqItem, ShoppingItem, Language } from '../types';

export const getCoreRecipe = (lang: Language = 'es'): BariatricRecipe => {
  if (lang === 'pt') {
    return {
      id: 'receta-original',
      title: 'A Fórmula Original da Gelatina Bariátrica',
      category: 'Fórmula Mãe',
      badge: 'EFEITO BALÃO GÁSTRICO',
      prepTime: '8 minutos (+ 2h geladeira)',
      calories: '28 kcal por porção',
      satietyIndex: '99% de Saciedade Gástrica',
      description: 'Esta preparação cria uma matriz molecular de colágeno no estômago que se expande suavemente com a água, ativando os receptores de saciedade mecânica (nervos vagais e leptina) e reduzindo o apetite real em até 78% sem causar peso ou desconforto.',
      imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80',
      ingredients: [
        {
          name: 'Gelatina pura incolor e sem sabor em pó ou folhas',
          amount: '20g (aprox. 2 sachês ou 2 colheres de sopa)',
          importance: 'É a matriz proteica de colágeno que forma o hidrogel saciante no estômago.',
          substitute: 'Colágeno hidrolisado puro sem açúcar (mesma quantidade)'
        },
        {
          name: 'Água filtrada em temperatura morna (não fervente)',
          amount: '350 ml',
          importance: 'Temperatura ideal (45°C - 55°C) para dissolver sem desnaturar os peptídeos de colágeno.'
        },
        {
          name: 'Ativador Cítrico: Suco de limão fresco espremido ou Vinagre de Maçã Orgânico',
          amount: '1 colher de sopa (15 ml)',
          importance: 'Acidifica o pH gástrico, acelerando a formação do gel e ativando enzimas digestivas.'
        },
        {
          name: 'Fibra solúvel ativadora (Sementes de Chia moídas ou Psyllium Husk)',
          amount: '1 colher de café (5g)',
          importance: 'Cria uma dupla camada viscoelástica que retarda o esvaziamento gástrico por até 4 horas.'
        },
        {
          name: 'Potencializador Termogênico (Canela do Ceilão em pó ou extrato de gengibre)',
          amount: '1/2 colher de café',
          importance: 'Regula os picos de glicemia no sangue e combate a compulsão incontrolável por doces.'
        },
        {
          name: 'Adoçante natural zero calorias (Stevia pura ou Eritritol)',
          amount: 'A gosto (opcional, 4-6 gotas)',
          importance: 'Não eleva a insulina nem quebra o jejum metabólico.'
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Hidratação Ativa',
          description: 'Em uma tigela de vidro, coloque 100 ml de água fria/em temperatura ambiente e polvilhe a gelatina sem sabor em forma de chuva. Deixe descansar de 3 a 5 minutos até formar uma textura de esponja.',
          durationMinutes: 5,
          tip: 'Não misture bruscamente enquanto hidrata para evitar grumos secos no interior.'
        },
        {
          stepNumber: 2,
          title: 'Dissolução Térmica',
          description: 'Aqueça os 250 ml de água restantes até ficar bem quente, mas suportável ao toque (45°C - 55°C). Despeje sobre a gelatina hidratada e misture suavemente com um garfo ou batedor até ficar 100% transparente.',
          durationMinutes: 2,
          tip: 'Se usar micro-ondas, aqueça apenas em intervalos de 15 segundos. Água fervendo em excesso degrada a capacidade elástica.'
        },
        {
          stepNumber: 3,
          title: 'Ativação Metabólica',
          description: 'Adicione a colher de suco de limão (ou vinagre de maçã), a fibra solúvel (chia/psyllium), a canela e a stevia. Mexa durante 40 segundos para distribuir os ativos de forma homogênea.',
          durationMinutes: 1,
          tip: 'O limão ativa uma cor mais límpida e confere aroma fresco.'
        },
        {
          stepNumber: 4,
          title: 'Moldagem e Gelificação',
          description: 'Despeje a mistura em um recipiente de vidro ou em formas para cubos (tipo forma de gelo grande). Leve à geladeira por pelo menos 2 horas.',
          durationMinutes: 120,
          tip: 'Você pode preparar a dose de 3 a 4 dias de uma só vez e manter em um pote hermético na geladeira.'
        }
      ],
      goldenRule: 'Regra de Ouro: Consuma 1 porção (150g ou 2 cubos grandes) acompanhada obrigatoriamente de 1 copo grande de água morna ou natural exatamente 25 a 35 minutos ANTES da sua refeição principal (almoço ou jantar).',
      consumptionSchedule: 'Horários Estratégicos: 12:30 (pré-almoço) e 19:30 (pré-jantar ou resgate noturno).'
    };
  }

  if (lang === 'en') {
    return {
      id: 'receta-original',
      title: 'The Original Bariatric Gelatin Formula',
      category: 'Mother Formula',
      badge: 'NATURAL GASTRIC BALLOON EFFECT',
      prepTime: '8 minutes (+ 2h fridge)',
      calories: '28 kcal per serving',
      satietyIndex: '99% Gastric Fullness',
      description: 'This bio-active formulation creates an elastic collagen mesh in the stomach that expands upon water contact, triggering vagal fullness receptors and reducing real appetite up to 78% without heaviness.',
      imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80',
      ingredients: [
        {
          name: 'Pure unflavored gelatin powder or sheets',
          amount: '20g (approx. 2 packets or 2 tbsp)',
          importance: 'The bioactive collagen protein matrix that creates the satiating hydrogel in the stomach.',
          substitute: 'Pure sugar-free hydrolyzed collagen (equal amount)'
        },
        {
          name: 'Warm filtered water (not boiling)',
          amount: '350 ml',
          importance: 'Optimal temperature (45°C - 55°C) to dissolve without denaturing the collagen peptides.'
        },
        {
          name: 'Citric Activator: Fresh lemon juice or Organic Apple Cider Vinegar',
          amount: '1 tbsp (15 ml)',
          importance: 'Acidifies gastric pH, accelerating gel expansion and activating digestive enzymes.'
        },
        {
          name: 'Soluble activating fiber (Ground Chia seeds or Psyllium Husk)',
          amount: '1 tsp (5g)',
          importance: 'Forms a secondary viscoelastic layer that slows gastric emptying for up to 4 hours.'
        },
        {
          name: 'Thermogenic Booster (Ceylon Cinnamon powder or ginger extract)',
          amount: '1/2 tsp',
          importance: 'Blunts blood glucose spikes and eliminates uncontrollable sweet cravings.'
        },
        {
          name: 'Natural zero-calorie sweetener (Pure Stevia or Monk Fruit)',
          amount: 'To taste (optional, 4-6 drops)',
          importance: 'Sweetens without elevating insulin levels or breaking metabolic fasting.'
        }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Active Cold Hydration',
          description: 'In a glass bowl, pour 100 ml of cold/room-temperature water and sprinkle the gelatin powder evenly. Allow it to rest for 3 to 5 minutes until a sponge-like texture forms.',
          durationMinutes: 5,
          tip: 'Do not stir violently while hydrating to avoid dry hard clumps in the center.'
        },
        {
          stepNumber: 2,
          title: 'Thermal Dissolution',
          description: 'Warm the remaining 250 ml of water until hot but comfortable to touch (45°C - 55°C). Pour over the hydrated gelatin and mix gently with a fork or whisk until 100% clear.',
          durationMinutes: 2,
          tip: 'If using microwave, heat only in 15-second bursts. Boiling water degrades the gelatin elasticity.'
        },
        {
          stepNumber: 3,
          title: 'Metabolic Activation',
          description: 'Add the tablespoon of lemon juice (or apple cider vinegar), soluble fiber (chia/psyllium), cinnamon, and stevia. Stir for 40 seconds to evenly disperse all active ingredients.',
          durationMinutes: 1,
          tip: 'Lemon activates a brighter color and provides a clean refreshing aroma.'
        },
        {
          stepNumber: 4,
          title: 'Molding & Chilling',
          description: 'Pour the mixture into a glass container or large silicone ice-cube molds. Refrigerate for at least 2 hours until firm.',
          durationMinutes: 120,
          tip: 'You can prepare a 3-4 day batch at once and keep it sealed in an airtight container.'
        }
      ],
      goldenRule: 'Golden Rule: Consume 1 serving (150g or 2 large cubes) accompanied by 1 full glass (300ml) of warm or room-temperature water exactly 25 to 35 minutes BEFORE your main meal (lunch or dinner).',
      consumptionSchedule: 'Strategic Times: 12:30 PM (pre-lunch) and 7:30 PM (pre-dinner or night craving rescue).'
    };
  }

  // Default Spanish
  return {
    id: 'receta-original',
    title: 'La Fórmula Original de la Gelatina Bariátrica',
    category: 'Fórmula Madre',
    badge: 'EFECTO BALÓN GÁSTRICO',
    prepTime: '8 minutos (+ 2h refrigeración)',
    calories: '28 kcal por porción',
    satietyIndex: '99% de Saciedad Gástrica',
    description: 'Esta preparación crea una red molecular en el estómago que se expande suavemente, activando los receptores de saciedad (leptina) y reduciendo el apetito real hasta un 78% sin causar pesadez ni malestar.',
    imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      {
        name: 'Gelatina pura sin sabor (Grenetina) en polvo o láminas',
        amount: '20g (aprox. 2 sobres o 2 cucharadas soperas)',
        importance: 'Es la matriz proteica de colágeno que forma el hidrogel saciante en el estómago.',
        substitute: 'Colágeno hidrolizado puro sin azúcar (misma cantidad)'
      },
      {
        name: 'Agua filtrada a temperatura tibia (no hirviendo)',
        amount: '350 ml',
        importance: 'Temperatura ideal (45°C - 55°C) para disolver sin desnaturalizar los péptidos de colágeno.'
      },
      {
        name: 'Activador Cítrico: Jugo de limón recién exprimido o Vinagre de Manzana Madre',
        amount: '1 cucharada sopera (15 ml)',
        importance: 'Acidifica el pH gástrico, acelerando la formación del gel y estimulando enzimas digestivas.'
      },
      {
        name: 'Fibra soluble activadora (Semillas de Chía molidas o Psyllium Husk)',
        amount: '1 cucharadita de café (5g)',
        importance: 'Crea una doble capa viscoelástica que ralentiza el vaciado gástrico hasta por 4 horas.'
      },
      {
        name: 'Potenciador Termogénico (Canela de Ceilán en polvo o extracto de jengibre)',
        amount: '1/2 cucharadita',
        importance: 'Regula los picos de glucosa en sangre y combate el deseo incontrolable por dulces.'
      },
      {
        name: 'Endulzante cero calorías natural (Stevia pura o Fruto del Monje)',
        amount: 'Al gusto (opcional, 4-6 gotas)',
        importance: 'No altera la insulina ni rompe el ayuno metabólico.'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Hidratación Activa',
        description: 'En un tazón de vidrio, vierte 100 ml de agua fría/temperatura ambiente y espolvorea la gelatina sin sabor en forma de lluvia. Deja reposar durante 3 a 5 minutos hasta que se forme una textura de esponja.',
        durationMinutes: 5,
        tip: 'No revuelvas bruscamente mientras hidrata para evitar grumos secos en el interior.'
      },
      {
        stepNumber: 2,
        title: 'Disolución Térmica',
        description: 'Calienta los 250 ml de agua restantes hasta que esté caliente pero soportable al tacto (45°C - 55°C). Vierte sobre la gelatina hidratada y mezcla suavemente con un tenedor o batidor de varillas hasta que esté 100% transparente.',
        durationMinutes: 2,
        tip: 'Si usas microondas, calienta solo en intervalos de 15 segundos. El agua hirviendo degrada la capacidad elástica.'
      },
      {
        stepNumber: 3,
        title: 'Activación Metabólica',
        description: 'Agrega la cucharada de jugo de limón (o vinagre de manzana orgánico), la fibra soluble (chía/psyllium), la canela y la stevia. Remueve durante 40 segundos para distribuir homogéneamente los activos.',
        durationMinutes: 1,
        tip: 'El limón activa un color ligeramente más claro y aporta aroma fresco.'
      },
      {
        stepNumber: 4,
        title: 'Moldeado y Gelificación',
        description: 'Vierte la mezcla en un recipiente de vidrio o en moldes para cubos (tipo cubitera grande). Lleva a la nevera por al menos 2 horas.',
        durationMinutes: 120,
        tip: 'Puedes preparar la dosis de 3 días de una sola vez y mantenerla en un táper hermético.'
      }
    ],
    goldenRule: 'Regla de Oro: Consume 1 porción (150g o 2 cubos grandes) acompañada obligatoriamente de 1 vaso grande de agua tibia o al clima exactamente 25 a 35 minutos ANTES de tu comida principal (almuerzo o cena).',
    consumptionSchedule: 'Horario Estratégico: 12:30 PM (pre-almuerzo) y 19:30 PM (pre-cena o rescate nocturno).'
  };
};

export const getFlavorVariations = (lang: Language = 'es'): BariatricRecipe[] => {
  if (lang === 'pt') {
    return [
      {
        id: 'frutos-rojos',
        title: 'Gelatina Bariátrica Frutas Vermelhas Antioxidante',
        category: 'Colágeno & Firmeza da Pele',
        badge: 'FAVORITA DA COMUNIDADE',
        prepTime: '10 min',
        calories: '32 kcal',
        satietyIndex: '97% de Saciedade',
        description: 'Infusionada com morangos, amoras e flor de hibisco. Rica em antocianinas que combatem a celulite e firmam os tecidos durante o emagrecimento.',
        imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Gelatina pura incolor', amount: '20g' },
          { name: 'Chá concentrado de Hibisco e Frutas Vermelhas', amount: '350 ml' },
          { name: 'Frutas vermelhas picadas (morangos/amoras)', amount: '2 colheres de sopa' },
          { name: 'Gotas de limão e stevia', amount: 'A gosto' }
        ],
        steps: [
          { stepNumber: 1, title: 'Preparar o chá', description: 'Faça uma infusão forte com 350ml de água fervente e hibisco por 3 minutos. Coe e deixe amornar.' },
          { stepNumber: 2, title: 'Dissolver a gelatina', description: 'Hidrate a gelatina em 50ml de água fria e dissolva no chá morno.' },
          { stepNumber: 3, title: 'Adicionar frutas e gelar', description: 'Misture as frutas picadas e leve à geladeira por 2 horas.' }
        ],
        goldenRule: 'Ideal para o lanche da tarde para bloquear a vontade incontrolável de comer doces ou pães.',
        consumptionSchedule: '16:00 às 18:00 (Lanche saciante)'
      },
      {
        id: 'pina-jengibre',
        title: 'Gelatina Bariátrica Abacaxi, Gengibre & Drenagem',
        category: 'Termogênica & Anti-Inchaço',
        badge: 'QUEIMA EXPRESS',
        prepTime: '10 min',
        calories: '26 kcal',
        satietyIndex: '98% de Saciedade',
        description: 'Contém bromelina natural do abacaxi e gingerol do gengibre. Desincha a barriga e drena a retenção de líquidos acumulada na cintura.',
        imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Gelatina pura incolor', amount: '20g' },
          { name: 'Chá de gengibre fresco ralado com hortelã', amount: '300 ml' },
          { name: 'Extrato natural de abacaxi ou casca fervida', amount: '50 ml' },
          { name: 'Pitada de cúrcuma pura', amount: '1 pitada' }
        ],
        steps: [
          { stepNumber: 1, title: 'Infusão termogênica', description: 'Ferva 1 pedaço de gengibre e cascas de abacaxi em 350ml de água por 5 minutos.' },
          { stepNumber: 2, title: 'Mistura ativa', description: 'Coe, hidrate e dissolva a gelatina no chá morno.' },
          { stepNumber: 3, title: 'Resfriamento', description: 'Coloque em recipientes e leve para gelar por 2 horas.' }
        ],
        goldenRule: 'Tome com 2 copos de água para potencializar o efeito diurético.',
        consumptionSchedule: '30 minutos antes do almoço principal'
      },
      {
        id: 'maracuja-noite',
        title: 'Gelatina Bariátrica Maracujá Anti-Cortisol Noturna',
        category: 'Calmante & Anti-Compulsão',
        badge: 'SONO PROFUNDO & ZERO ANSIEDADE',
        prepTime: '8 min',
        calories: '22 kcal',
        satietyIndex: '99% de Saciedade',
        description: 'Enriquecida com passiflorina natural e camomila concentrada. Reduz os níveis de cortisol noturno e zera a fome emocional de madrugada.',
        imageUrl: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Gelatina pura incolor', amount: '20g' },
          { name: 'Chá concentrado de Camomila e Melissa', amount: '300 ml' },
          { name: 'Polpa de 1 maracujá natural coada', amount: '50 ml' },
          { name: 'Adoçante stevia ou eritritol', amount: 'A gosto' }
        ],
        steps: [
          { stepNumber: 1, title: 'Chá calmante', description: 'Faça a infusão quente de camomila por 5 minutos.' },
          { stepNumber: 2, title: 'Incorporar colágeno', description: 'Dissolva a gelatina hidratada no chá e junte a polpa de maracujá.' },
          { stepNumber: 3, title: 'Gelar', description: 'Despeje em taças e leve para gelar até firmar.' }
        ],
        goldenRule: 'Coma devagar com colher pequena 45 minutos antes de dormir.',
        consumptionSchedule: '21:00 às 22:30 (Resgate Noturno)'
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        id: 'frutos-rojos',
        title: 'Berry Antioxidant Bariatric Gelatin',
        category: 'Collagen & Skin Firming',
        badge: 'COMMUNITY FAVORITE',
        prepTime: '10 min',
        calories: '32 kcal',
        satietyIndex: '97% Satiety',
        description: 'Infused with strawberries, blueberries and hibiscus. Packed with anthocyanins that target cellulite and firm up tissues during weight loss.',
        imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Pure unflavored gelatin', amount: '20g' },
          { name: 'Concentrated Hibiscus & Berry Tea', amount: '350 ml' },
          { name: 'Mashed fresh berries', amount: '2 tbsp' },
          { name: 'Lemon drops and stevia', amount: 'To taste' }
        ],
        steps: [
          { stepNumber: 1, title: 'Brew the infusion', description: 'Steep hibiscus in 350ml hot water for 3 minutes. Strain and let cool slightly.' },
          { stepNumber: 2, title: 'Dissolve gelatin', description: 'Hydrate gelatin in cold water, then mix into the warm tea until completely clear.' },
          { stepNumber: 3, title: 'Add fruit and chill', description: 'Mix in the mashed berries and refrigerate for 2 hours.' }
        ],
        goldenRule: 'Ideal for mid-afternoon cravings to shut down bread or chocolate urges.',
        consumptionSchedule: '4:00 PM to 6:00 PM (Satiating Snack)'
      },
      {
        id: 'pina-jengibre',
        title: 'Pineapple, Ginger & Drainage Bariatric Gelatin',
        category: 'Thermogenic & Anti-Bloat',
        badge: 'RAPID FAT BURN',
        prepTime: '10 min',
        calories: '26 kcal',
        satietyIndex: '98% Satiety',
        description: 'Features natural bromelain from pineapple and active gingerol from ginger. Flushes excess water weight and flattens lower belly puffiness.',
        imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Pure unflavored gelatin', amount: '20g' },
          { name: 'Fresh grated ginger tea with mint', amount: '300 ml' },
          { name: 'Natural pineapple extract or boiled peel tea', amount: '50 ml' },
          { name: 'Pinch of pure turmeric', amount: '1 pinch' }
        ],
        steps: [
          { stepNumber: 1, title: 'Thermogenic infusion', description: 'Boil sliced ginger and pineapple peel in 350ml water for 5 minutes.' },
          { stepNumber: 2, title: 'Active blend', description: 'Strain and dissolve hydrated gelatin into the warm liquid.' },
          { stepNumber: 3, title: 'Chill', description: 'Pour into molds and refrigerate for 2 hours.' }
        ],
        goldenRule: 'Drink with 2 full glasses of water to trigger maximum diuretic water flushing.',
        consumptionSchedule: '30 minutes before heavy lunch'
      },
      {
        id: 'maracuja-noite',
        title: 'Nighttime Passion Fruit Anti-Cortisol Gelatin',
        category: 'Relaxation & Anti-Craving',
        badge: 'DEEP SLEEP & CALM',
        prepTime: '8 min',
        calories: '22 kcal',
        satietyIndex: '99% Satiety',
        description: 'Enriched with natural passiflorine and chamomile. Lowers evening cortisol levels and halts late-night refrigerator raiding.',
        imageUrl: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&auto=format&fit=crop&q=80',
        ingredients: [
          { name: 'Pure unflavored gelatin', amount: '20g' },
          { name: 'Chamomile and Lemon Balm hot infusion', amount: '300 ml' },
          { name: 'Natural strained passion fruit pulp', amount: '50 ml' },
          { name: 'Stevia or monk fruit', amount: 'To taste' }
        ],
        steps: [
          { stepNumber: 1, title: 'Calming tea', description: 'Brew a rich cup of chamomile tea for 5 minutes.' },
          { stepNumber: 2, title: 'Mix collagen', description: 'Dissolve gelatin into the tea and stir in passion fruit pulp.' },
          { stepNumber: 3, title: 'Chill', description: 'Refrigerate until firmly set.' }
        ],
        goldenRule: 'Eat slowly with a small dessert spoon 45 minutes before sleep.',
        consumptionSchedule: '9:00 PM to 10:30 PM (Night Rescue)'
      }
    ];
  }

  // Spanish default
  return [
    {
      id: 'frutos-rojos',
      title: 'Gelatina Bariátrica Frutos Rojos Antioxidante',
      category: 'Colágeno & Antienvejecimiento',
      badge: 'FAVORITA DE LA COMUNIDAD',
      prepTime: '10 min',
      calories: '32 kcal',
      satietyIndex: '97% de Saciedad',
      description: 'Infusionada con arándanos, fresas y flor de jamaica. Aporta antocianinas que reducen la celulitis, reafirman los tejidos al bajar de peso y dan un sabor dulce y delicioso.',
      imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
      ingredients: [
        { name: 'Gelatina sin sabor pura', amount: '20g' },
        { name: 'Infusión concentrada de Flor de Jamaica / Té de Frutos Rojos', amount: '350 ml' },
        { name: 'Frutos rojos triturados (arándanos o fresas)', amount: '2 cucharadas' },
        { name: 'Gotas de limón y stevia', amount: 'Al gusto' }
      ],
      steps: [
        { stepNumber: 1, title: 'Preparar la infusión', description: 'Hierve 350ml de agua con 1 cucharada de flor de jamaica o frutos rojos por 3 minutos. Cuela y deja entibiar.' },
        { stepNumber: 2, title: 'Disolver la grenetina', description: 'Hidrata la gelatina en 50ml de agua fría y luego disuélvela en el té tibio.' },
        { stepNumber: 3, title: 'Añadir fruta y enfriar', description: 'Agrega los frutos rojos triturados y refrigera por 2 horas.' }
      ],
      goldenRule: 'Ideal para consumir en la tarde para calmar la ansiedad por pasteles o chocolate.',
      consumptionSchedule: '16:00 a 18:00 (Merienda saciante)'
    },
    {
      id: 'pina-jengibre',
      title: 'Gelatina Bariátrica Piña, Jengibre & Drenaje',
      category: 'Termogénica & Anti-Hinchazón',
      badge: 'QUEMA-GRASA EXPRESS',
      prepTime: '10 min',
      calories: '26 kcal',
      satietyIndex: '98% de Saciedad',
      description: 'Contiene bromelina natural de la piña y gingerol del jengibre. Diseñada para desinflamar el vientre bajo, acelerar el tránsito intestinal lento y drenar líquidos retenidos.',
      imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=80',
      ingredients: [
        { name: 'Gelatina sin sabor', amount: '20g' },
        { name: 'Té de jengibre rallado fresco', amount: '300 ml' },
        { name: 'Extracto natural de piña o cáscara hervida', amount: '50 ml' },
        { name: 'Pizca de cúrcuma pura', amount: '1 pizca' }
      ],
      steps: [
        { stepNumber: 1, title: 'Infusión termogénica', description: 'Hierve 1 trozo de jengibre y cáscara de piña lavada en 350ml de agua durante 5 minutos.' },
        { stepNumber: 2, title: 'Mezcla activa', description: 'Cuela, hidrata y disuelve la gelatina con la infusión tibia.' },
        { stepNumber: 3, title: 'Refrigeración', description: 'Vierte en moldes y enfría hasta que tome consistencia firme.' }
      ],
      goldenRule: 'Tomar con 2 vasos de agua para activar el efecto osmótico anti-retención.',
      consumptionSchedule: '30 minutos antes del Almuerzo más pesado'
    },
    {
      id: 'maracuja-noite',
      title: 'Gelatina Bariátrica Maracuyá Anti-Cortisol Nocturna',
      category: 'Relax & Anti-Ansiedad',
      badge: 'SUEÑO PROFUNDO & CERO ANTOJOS',
      prepTime: '8 min',
      calories: '22 kcal',
      satietyIndex: '99% de Saciedad',
      description: 'Enriquecida con passiflorina natural y manzanilla concentrada. Reduce los niveles de cortisol nocturno y apaga el hambre emocional de madrugada.',
      imageUrl: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&auto=format&fit=crop&q=80',
      ingredients: [
        { name: 'Gelatina sin sabor', amount: '20g' },
        { name: 'Té concentrado de Manzanilla y Melisa', amount: '300 ml' },
        { name: 'Pulpa de 1 maracuyá natural colada', amount: '50 ml' },
        { name: 'Stevia o fruto del monje', amount: 'Al gusto' }
      ],
      steps: [
        { stepNumber: 1, title: 'Té relajante', description: 'Prepara una infusión de manzanilla bien concentrada por 5 minutos.' },
        { stepNumber: 2, title: 'Incorporar colágeno', description: 'Disuelve la gelatina en el té y agrega la pulpa de maracuyá.' },
        { stepNumber: 3, title: 'Refrigerar', description: 'Vierte en copas y lleva a la nevera hasta que cuaje.' }
      ],
      goldenRule: 'Come despacio con cuchara pequeña 45 minutos antes de dormir.',
      consumptionSchedule: '21:00 a 22:30 (Rescate Nocturno)'
    }
  ];
};

export const getDailyPlan = (lang: Language = 'es'): DailyPlanDay[] => {
  const plan: DailyPlanDay[] = [];

  for (let i = 1; i <= 21; i++) {
    const phaseNumber = i <= 7 ? 1 : i <= 14 ? 2 : 3;
    
    let phaseTitle = '';
    let dayTitle = '';
    let focus = '';
    let morningShot = '';
    let gelatinDoseMorning = '';
    let gelatinDoseAfternoon = '';
    let drainTea = '';
    let sosTip = '';
    let actionChecklist: string[] = [];

    if (lang === 'pt') {
      phaseTitle = phaseNumber === 1 
        ? 'Fase 1: Desinflamação & Choque Metabólico'
        : phaseNumber === 2 
        ? 'Fase 2: Queima Acelerada & Adaptação Gástrica'
        : 'Fase 3: Blindagem Metabólica & Zero Efeito Sanfona';
      
      dayTitle = `Dia ${i} • ${i <= 7 ? 'Desinflamando o Organismo' : i <= 14 ? 'Ativação Termogênica' : 'Fixação de Resultados'}`;
      focus = i <= 7 
        ? 'Eliminar retenção de líquidos e adaptar o estômago à expansão do colágeno.'
        : i <= 14 
        ? 'Acelerar a queima de gordura profunda e controlar a saciedade por 5 horas.'
        : 'Blindar o metabolismo, mantendo o estômago retraído e comendo 50% menos naturalmente.';
      
      morningShot = i % 2 === 1 
        ? 'Shot de Limão com Cúrcuma e pimenta-do-reino em 50ml de água morna.'
        : 'Shot de Vinagre de Maçã Orgânico (1 colher) com limão e água.';
      
      gelatinDoseMorning = '1 porção da Fórmula Original 25 min antes do almoço + 300ml de água morna.';
      gelatinDoseAfternoon = i % 2 === 1 
        ? '1 porção de Gelatina de Frutas Vermelhas às 16h30.'
        : '1 porção de Gelatina de Maracujá 40 min antes de dormir.';
      
      drainTea = i <= 7 ? 'Chá de Cavalinha com Hibisco às 15h00.' : 'Chá Verde com Gengibre e Canela às 15h30.';
      sosTip = 'Se sentir vontade de doce, tome 1 copo grande de água gelada com 3 rodelas de limão.';
      actionChecklist = [
        'Tomar o Shot Matinal em jejum',
        'Ingerir a dose de Gelatina com 300ml de água antes do almoço',
        'Beber o chá drenante no meio da tarde',
        'Completar no mínimo 2,5 litros de água hoje'
      ];
    } else if (lang === 'en') {
      phaseTitle = phaseNumber === 1 
        ? 'Phase 1: Anti-Inflammatory & Metabolic Shock'
        : phaseNumber === 2 
        ? 'Phase 2: Accelerated Fat Burn & Gastric Adaptation'
        : 'Phase 3: Metabolic Shield & Anti-Rebound';
      
      dayTitle = `Day ${i} • ${i <= 7 ? 'System Detox & Debloat' : i <= 14 ? 'Thermogenic Activation' : 'Full Result Lock-In'}`;
      focus = i <= 7 
        ? 'Flush water retention and train stomach stretch receptors to signal fullness.'
        : i <= 14 
        ? 'Accelerate visceral fat oxidation while maintaining 5-hour satiety between meals.'
        : 'Lock in metabolic tone and stomach capacity reduction effortlessly.';
      
      morningShot = i % 2 === 1 
        ? 'Fasting Lemon & Turmeric with black pepper shot in 50ml warm water.'
        : 'Organic Apple Cider Vinegar (1 tbsp) with lemon and water.';
      
      gelatinDoseMorning = '1 portion of Mother Formula 25 min before lunch + 300ml water.';
      gelatinDoseAfternoon = i % 2 === 1 
        ? '1 portion of Berry Antioxidant Gelatin at 4:30 PM.'
        : '1 portion of Passion Fruit Gelatin 40 min before sleep.';
      
      drainTea = i <= 7 ? 'Hibiscus & Horsetail tea at 3:00 PM.' : 'Green Tea with Ginger & Cinnamon at 3:30 PM.';
      sosTip = 'If craving sugar, drink 1 large glass of iced water with lemon slices.';
      actionChecklist = [
        'Drink Fasting Morning Shot',
        'Consume Gelatin portion + 300ml water before lunch',
        'Drink afternoon drainage tea',
        'Hit 2.5 liters of pure water total today'
      ];
    } else {
      phaseTitle = phaseNumber === 1 
        ? 'Fase 1: Desinflamación & Choque Metabólico'
        : phaseNumber === 2 
        ? 'Fase 2: Quema Acelerada & Adaptación Gástrica'
        : 'Fase 3: Blindaje Metabólico & Cero Rebote';
      
      dayTitle = `Día ${i} • ${i <= 7 ? 'Desinflamando el Organismo' : i <= 14 ? 'Activación Termogénica' : 'Fijación de Resultados'}`;
      focus = i <= 7 
        ? 'Eliminar retención de líquidos y adaptar el estómago a la expansión del colágeno.'
        : i <= 14 
        ? 'Acelerar la quema de grasa profunda y controlar la saciedad por 5 horas.'
        : 'Blindar el metabolismo, manteniendo el estómago retraído y comiendo 50% menos naturalmente.';
      
      morningShot = i % 2 === 1 
        ? 'Shot de Limón con Cúrcuma y pimienta negra en 50ml de agua tibia.'
        : 'Shot de Vinagre de Manzana Orgánico (1 cucharada) con limón y agua.';
      
      gelatinDoseMorning = '1 porción de la Fórmula Original 25 min antes del almuerzo + 300ml de agua tibia.';
      gelatinDoseAfternoon = i % 2 === 1 
        ? '1 porción de Gelatina de Frutos Rojos a las 16:30.'
        : '1 porción de Gelatina de Maracuyá 40 min antes de dormir.';
      
      drainTea = i <= 7 ? 'Té de Cola de Caballo con Flor de Jamaica a las 15:00.' : 'Té Verde con Jengibre y Canela a las 15:30.';
      sosTip = 'Si sientes antojo de dulce, toma 1 vaso grande de agua helada con 3 rodajas de limón.';
      actionChecklist = [
        'Tomar el Shot Matutino en ayunas',
        'Ingerir la dosis de Gelatina con 300ml de agua antes del almuerzo',
        'Tomar el té drenante a media tarde',
        'Completar al menos 2.5 litros de agua pura hoy'
      ];
    }

    plan.push({
      day: i,
      phase: phaseTitle,
      phaseNumber,
      title: dayTitle,
      focus,
      morningShot,
      gelatinDoseMorning,
      gelatinDoseAfternoon,
      drainTea,
      sosTip,
      actionChecklist
    });
  }

  return plan;
};

export const getMorningShots = (lang: Language = 'es'): ShotRecipe[] => {
  if (lang === 'pt') {
    return [
      {
        id: 'shot-curcuma',
        name: 'Shot Alcalinizante de Cúrcuma & Limão',
        time: 'Em jejum (logo ao acordar)',
        benefits: ['Ativa o fígado', 'Diminui a inflamação celular', 'Prepara o estômago'],
        ingredients: ['Suco de 1/2 limão espremido', '1 colher de café rasa de cúrcuma pura', '1 pitada de pimenta-do-reino', '50ml de água morna'],
        preparation: 'Misture todos os ingredientes em um copinho e beba imediatamente em um único gole.'
      },
      {
        id: 'shot-vinagre',
        name: 'Shot Gástrico de Vinagre de Maçã',
        time: '15 min antes da primeira refeição sólida',
        benefits: ['Reduz picos de insulina', 'Melhora a digestão', 'Evita inchaço abdominal'],
        ingredients: ['1 colher de sopa de vinagre de maçã orgânico com madre', '50ml de água', 'Gotas de limão'],
        preparation: 'Dilua o vinagre na água e beba com canudo para proteger o esmalte dos dentes.'
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        id: 'shot-curcuma',
        name: 'Turmeric & Lemon Alkaline Morning Shot',
        time: 'First thing upon waking (fasting)',
        benefits: ['Flushes liver toxins', 'Decreases cellular inflammation', 'Primes gastric mucosa'],
        ingredients: ['Juice of 1/2 lemon', '1 flat tsp pure turmeric powder', 'Pinch of black pepper', '50ml warm water'],
        preparation: 'Mix vigorously in a small glass and drink immediately in one shot.'
      },
      {
        id: 'shot-vinagre',
        name: 'Apple Cider Vinegar Glucose Shield Shot',
        time: '15 min before first solid meal',
        benefits: ['Blunts post-meal insulin spikes', 'Enhances digestion', 'Flattens post-meal bloating'],
        ingredients: ['1 tbsp raw organic apple cider vinegar (with mother)', '50ml water', 'Lemon drops'],
        preparation: 'Dilute in water and drink with a straw to protect dental enamel.'
      }
    ];
  }

  return [
    {
      id: 'shot-curcuma',
      name: 'Shot Alcalinizante de Cúrcuma & Limón',
      time: 'En ayunas (nada más despertar)',
      benefits: ['Activa el hígado', 'Disminuye la inflamación celular', 'Prepara el estómago'],
      ingredients: ['Jugo de 1/2 limón exprimido', '1 cucharadita rasa de cúrcuma pura', '1 pizca de pimienta negra', '50ml de agua tibia'],
      preparation: 'Mezcla todos los ingredientes en un vasito y bébelo de un solo trago.'
    },
    {
      id: 'shot-vinagre',
      name: 'Shot Gástrico de Vinagre de Manzana',
      time: '15 min antes de la primera comida sólida',
      benefits: ['Reduce picos de insulina', 'Mejora la digestión', 'Evita pesadez abdominal'],
      ingredients: ['1 cucharada de vinagre de manzana orgánico madre', '50ml de agua', 'Gotas de limón'],
      preparation: 'Diluye el vinagre en el agua y bebe con pajita para proteger el esmalte dental.'
    }
  ];
};

export const getDrainageTeas = (lang: Language = 'es'): TeaRecipe[] => {
  if (lang === 'pt') {
    return [
      {
        id: 'cha-hibisco',
        name: 'Chá Drenante Turbo (Cavalinha + Hibisco)',
        effect: 'Elimina até 800ml de retenção de líquidos em 24 horas.',
        ingredients: ['1 colher de sopa de cavalinha', '1 colher de sopa de flores de hibisco', '500ml de água filtrada'],
        instructions: 'Ferva a água, desligue o fogo, coloque as ervas e tampe por 8 minutos. Coe e beba ao longo da tarde.',
        bestTime: 'Entre 14h e 17h'
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        id: 'cha-hibisco',
        name: 'Turbo Drainage Tea (Horsetail + Hibiscus)',
        effect: 'Flushes up to 800ml of trapped water weight in 24 hours.',
        ingredients: ['1 tbsp dry horsetail herb', '1 tbsp hibiscus flowers', '500ml boiling water'],
        instructions: 'Boil water, remove from heat, add herbs and cover for 8 minutes. Strain and enjoy warm or iced.',
        bestTime: 'Between 2:00 PM and 5:00 PM'
      }
    ];
  }

  return [
    {
      id: 'cha-hibisco',
      name: 'Té Drenante Turbo (Cola de Caballo + Flor de Jamaica)',
      effect: 'Elimina hasta 800ml de retención de líquidos en 24 horas.',
      ingredients: ['1 cucharada de cola de caballo', '1 cucharada de flor de jamaica', '500ml de agua filtrada'],
      instructions: 'Hierve el agua, apaga el fuego, añade las hierbas y tapa durante 8 minutos. Cuela y bebe a lo largo de la tarde.',
      bestTime: 'Entre las 14:00 y las 17:00'
    }
  ];
};

export const getShoppingList = (lang: Language = 'es'): ShoppingItem[] => {
  if (lang === 'pt') {
    return [
      {
        id: '1',
        item: 'Gelatina Incolor e Sem Sabor (5 a 8 sachês de 12g ou 24g)',
        category: 'esenciales',
        estimatedCost: 'R$ 14,00 / $ 2.80',
        notes: 'Base do protocolo. Rende mais de 15 dias de doses.'
      },
      {
        id: '2',
        item: 'Limões frescos (1 dúzia de limão tahiti ou siciliano)',
        category: 'frutas_y_sabores',
        estimatedCost: 'R$ 6,00 / $ 1.50',
        notes: 'Para os shots matinais diários e ativação do colágeno.'
      },
      {
        id: '3',
        item: 'Canela em pó pura do Ceilão e Cúrcuma',
        category: 'activadores',
        estimatedCost: 'R$ 8,00 / $ 2.00',
        notes: 'Estabilizadores naturais de insulina e ativadores termogênicos.'
      },
      {
        id: '4',
        item: 'Chia em grãos ou Psyllium Husk',
        category: 'activadores',
        estimatedCost: 'R$ 10,00 / $ 2.20',
        notes: 'Fibras solúveis para retardar o esvaziamento gástrico.'
      },
      {
        id: '5',
        item: 'Chá de Cavalinha, Hibisco e Camomila em folhas',
        category: 'opcionales',
        estimatedCost: 'R$ 12,00 / $ 2.50',
        notes: 'Para os chás drenantes diários e a gelatina noturna.'
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        id: '1',
        item: 'Unflavored Pure Gelatin (5 to 8 packets or bulk powder)',
        category: 'esenciales',
        estimatedCost: '$ 3.50 / R$ 18,00',
        notes: 'Base protocol foundation. Yields over 15 days of portions.'
      },
      {
        id: '2',
        item: 'Fresh Lemons (1 dozen)',
        category: 'frutas_y_sabores',
        estimatedCost: '$ 2.50 / R$ 8,00',
        notes: 'For fasting morning shots and gelatin citric activation.'
      },
      {
        id: '3',
        item: 'Ceylon Cinnamon powder & Pure Turmeric',
        category: 'activadores',
        estimatedCost: '$ 3.00 / R$ 10,00',
        notes: 'Thermogenic accelerators and glucose blunters.'
      },
      {
        id: '4',
        item: 'Chia Seeds or Whole Psyllium Husk',
        category: 'activadores',
        estimatedCost: '$ 4.00 / R$ 12,00',
        notes: 'High-viscosity soluble fibers that prolong stomach fullness.'
      }
    ];
  }

  return [
    {
      id: '1',
      item: 'Gelatina Pura Sin Sabor / Grenetina (5 a 8 sobres)',
      category: 'esenciales',
      estimatedCost: '$ 3.00 / R$ 15,00',
      notes: 'Base indispensable del protocolo. Rinde para más de 15 días.'
    },
    {
      id: '2',
      item: 'Limones frescos (1 docena)',
      category: 'frutas_y_sabores',
      estimatedCost: '$ 1.80 / R$ 7,00',
      notes: 'Para los shots en ayunas y la activación cítrica del colágeno.'
    },
    {
      id: '3',
      item: 'Canela de Ceilán en polvo y Cúrcuma pura',
      category: 'activadores',
      estimatedCost: '$ 2.50 / R$ 9,00',
      notes: 'Termogénicos y reguladores naturales de insulina.'
    },
    {
      id: '4',
      item: 'Semillas de Chía o Psyllium Husk',
      category: 'activadores',
      estimatedCost: '$ 3.20 / R$ 11,00',
      notes: 'Fibra soluble para duplicar la duración de la saciedad gástrica.'
    }
  ];
};

export const getFrequentQuestions = (lang: Language = 'es'): FaqItem[] => {
  if (lang === 'pt') {
    return [
      {
        category: 'Geral',
        question: 'Por que a Gelatina Bariátrica reduz a fome sem cirurgia?',
        answer: 'Ao ser consumida com água morna antes das refeições, a matriz proteica de colágeno se hidrata e expande suavemente no estômago, enviando sinais ao cérebro de que o estômago já está preenchido em 70% (saciedade mecânica).'
      },
      {
        category: 'Preparo',
        question: 'Posso usar gelatina de caixinha com sabor tradicional?',
        answer: 'Não recomendamos gelatinas de caixinha comuns com sabor porque contêm corantes artificiais, conservantes ou maltodextrina que inflamam o intestino. Use sempre a incolor sem sabor e saborize naturalmente com frutas, limão ou chás.'
      },
      {
        category: 'Conservação',
        question: 'Quanto tempo dura na geladeira?',
        answer: 'Em um recipiente de vidro bem fechado com tampa hermética, a gelatina se mantém fresca e firme por até 5 a 6 dias na geladeira.'
      }
    ];
  }

  if (lang === 'en') {
    return [
      {
        category: 'General',
        question: 'How does Bariatric Gelatin reduce appetite without surgery?',
        answer: 'When consumed with warm water before meals, the collagen protein matrix gently expands in the stomach cavity, activating physical stretch receptors that signal natural fullness to the brain.'
      },
      {
        category: 'Preparation',
        question: 'Can I use regular artificially flavored store-bought gelatin?',
        answer: 'We do not recommend regular artificially flavored gelatins because they contain chemical food colorings and hidden maltodextrin that trigger intestinal inflammation. Always use pure unflavored gelatin and flavor it naturally.'
      },
      {
        category: 'Storage',
        question: 'How long does a batch last in the refrigerator?',
        answer: 'In a sealed glass container, prepared bariatric gelatin stays fresh and elastic for up to 5 to 6 days.'
      }
    ];
  }

  return [
    {
      category: 'General',
      question: '¿Por qué la Gelatina Bariátrica reduce el apetito sin cirugía?',
      answer: 'Al consumirse con agua antes de las comidas, la matriz de colágeno se hidrata y expande suavemente en el estómago, activando los mecanorreceptores de plenitud que avisan al cerebro que ya estás satisfecha con solo el 50% de comida.'
    },
    {
      category: 'Preparación',
      question: '¿Puedo usar gelatina con sabor comercial tradicional?',
      answer: 'No recomendamos gelatinas de caja con sabor comercial porque contienen colorantes artificiales y maltodextrina que elevan la insulina. Usa siempre gelatina pura sin sabor y dale sabor natural con limón, frutas o infusiones.'
    },
    {
      category: 'Conservación',
      question: '¿Cuánto tiempo dura fresca en la nevera?',
      answer: 'En un recipiente de vidrio bien tapado herméticamente, la gelatina se conserva perfecta y elástica hasta por 5 a 6 días en el refrigerador.'
    }
  ];
};
