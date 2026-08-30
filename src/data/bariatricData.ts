import { BariatricRecipe, DailyPlanDay, ShotRecipe, TeaRecipe, FaqItem, ShoppingItem } from '../types';

export const CORE_BARIATRIC_RECIPE: BariatricRecipe = {
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

export const FLAVOR_VARIATIONS: BariatricRecipe[] = [
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
      { stepNumber: 1, title: 'Preparar la infusión', description: 'Hierve 350ml de agua con 1 cucharada de flor de jamaica o bolsita de frutos rojos por 3 minutos. Cuela y deja entibiar.' },
      { stepNumber: 2, title: 'Disolver la grenetina', description: 'Hidrata la gelatina en 50ml de infusión fría y luego disuélvela en el resto de la infusión tibia.' },
      { stepNumber: 3, title: 'Añadir la fruta y enfriar', description: 'Agrega los frutos rojos triturados y refrigera por 2 horas.' }
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
      { name: 'Extracto natural de piña o trocitos de cáscara hervida', amount: '50 ml' },
      { name: 'Pizca de cúrcuma y pimienta negra', amount: '1 pizca (potenciador)' }
    ],
    steps: [
      { stepNumber: 1, title: 'Infusión termogénica', description: 'Hierve 1 trozo de jengibre de 2cm y cáscara de piña bien lavada en 350ml de agua durante 5 minutos.' },
      { stepNumber: 2, title: 'Mezcla activa', description: 'Cuela, hidrata y disuelve la gelatina con la infusión tibia.' },
      { stepNumber: 3, title: 'Refrigeración', description: 'Vierte en moldes y enfría hasta que tome consistencia firme.' }
    ],
    goldenRule: 'Tomar con 2 vasos de agua para activar el efecto osmótico anti-retención.',
    consumptionSchedule: '30 minutos antes del Almuerzo más pesado'
  },
  {
    id: 'manzana-canela',
    title: 'Gelatina Bariátrica Manzana Verde & Canela de Ceilán',
    category: 'Reguladora de Insulina',
    badge: 'CERO ANTOJOS DE AZÚCAR',
    prepTime: '8 min',
    calories: '29 kcal',
    satietyIndex: '99% de Saciedad',
    description: 'La pectina de manzana combinada con cinamaldehído bloquea los picos de glucosa tras las comidas, evitando que el cuerpo almacene grasa en abdomen y caderas.',
    imageUrl: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'Gelatina sin sabor pura', amount: '20g' },
      { name: 'Té de manzana con ramas de canela', amount: '350 ml' },
      { name: '1 cucharadita de semillas de chía', amount: '5g' },
      { name: 'Gotas de vainilla natural y stevia', amount: 'Al gusto' }
    ],
    steps: [
      { stepNumber: 1, title: 'Infusión aromática', description: 'Hierve 1 manzana verde en gajos con 2 ramas de canela por 7 minutos.' },
      { stepNumber: 2, title: 'Disolución con chía', description: 'Disuelve la gelatina hidratada en el té tibio y añade la chía molida.' },
      { stepNumber: 3, title: 'Refrigerar', description: 'Coloca en copas de postre y deja enfriar.' }
    ],
    goldenRule: 'Excelente sustituto de postres tras la cena o como merienda reconfortante.',
    consumptionSchedule: '20:00 (Post-cena o pre-dormir)'
  },
  {
    id: 'cafe-latte',
    title: 'Gelatina Bariátrica Moca / Café Latte Termogénico',
    category: 'Energía & Quema Calórica',
    badge: 'DESPIERTA EL METABOLISMO',
    prepTime: '6 min',
    calories: '35 kcal',
    satietyIndex: '96% de Saciedad',
    description: 'Perfecta para el desayuno o media mañana. La cafeína activa la lipólisis celular mientras la proteína de colágeno sostiene la energía sin temblores ni bajones.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'Gelatina sin sabor', amount: '20g' },
      { name: 'Café negro recién pasado o espresso', amount: '250 ml' },
      { name: 'Leche vegetal sin azúcar (almendra/coco)', amount: '100 ml' },
      { name: 'Cacao amargo 100% puro en polvo', amount: '1 cucharadita' }
    ],
    steps: [
      { stepNumber: 1, title: 'Mezcla de café y cacao', description: 'Disuelve el cacao en el café tibio.' },
      { stepNumber: 2, title: 'Integrar gelatina y leche', description: 'Hidrata la gelatina y añade el café y la leche de almendras tibia.' },
      { stepNumber: 3, title: 'Enfriar en cubos', description: 'Corta en cubos para comer como snack energético entre comidas.' }
    ],
    goldenRule: 'No consumir después de las 17:00 para no alterar el sueño profundo.',
    consumptionSchedule: '09:00 a 11:00 AM (Media mañana)'
  },
  {
    id: 'maracuya-relax',
    title: 'Gelatina Bariátrica Maracuyá & Manzanilla Anti-Cortisol',
    category: 'Noche & Sueño Profundo',
    badge: 'RELAJACIÓN Y QUEMA NOCTURNA',
    prepTime: '8 min',
    calories: '24 kcal',
    satietyIndex: '98% de Saciedad',
    description: 'La apigenina de la manzanilla y los flavonoides del maracuyá reducen el cortisol nocturno, evitando que el cuerpo almacene grasa durante la noche y facilitando un descanso reparador.',
    imageUrl: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'Gelatina sin sabor', amount: '20g' },
      { name: 'Infusión concentrada de manzanilla y melisa', amount: '250 ml' },
      { name: 'Pulpa de maracuyá colada sin azúcar', amount: '100 ml' },
      { name: 'Pizca de magnesio en polvo (opcional)', amount: '1 dosis' }
    ],
    steps: [
      { stepNumber: 1, title: 'Té relajante', description: 'Prepara el té de manzanilla con agua caliente y deja reposar 5 minutos.' },
      { stepNumber: 2, title: 'Añadir pulpa y colágeno', description: 'Mezcla la gelatina hidratada con el té tibio y el jugo de maracuyá.' },
      { stepNumber: 3, title: 'Reposo en frío', description: 'Refrigera en porciones individuales.' }
    ],
    goldenRule: 'Comer 45 minutos antes de dormir para frenar los asaltos nocturnos a la cocina.',
    consumptionSchedule: '21:30 PM (Pre-descanso)'
  }
];

export const DAILY_21_DAYS_PLAN: DailyPlanDay[] = [
  {
    day: 1,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 1: Activación del Balón Gástrico Natural',
    focus: 'Preparar la primera tanda de Gelatina Bariátrica y consumir la primera dosis pre-almuerzo.',
    morningShot: 'Shot #1 de Limón, Jengibre & Pizca de Sal Marina (en ayunas)',
    gelatinDoseMorning: '1 porción (150g) de Fórmula Madre 30 min antes del almuerzo con 1 vaso grande de agua',
    gelatinDoseAfternoon: '1 porción de Frutos Rojos a las 17:00 para bloquear la ansiedad',
    drainTea: 'Té Drenante #1 de Cola de Caballo y Flor de Jamaica (después de almuerzo)',
    sosTip: 'Si sientes ganas de picar entre comidas, bebe un vaso de agua con unas gotas de limón y espera 10 minutos.',
    actionChecklist: [
      'Tomé el Shot Matutino en ayunas',
      'Preparé la tanda de 3 días de Gelatina Bariátrica',
      'Consumí mi dosis 30 min antes del almuerzo con agua',
      'Tomé al menos 2 litros de agua durante el día'
    ]
  },
  {
    day: 2,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 2: Reducción del Vaciado Gástrico',
    focus: 'Notarás que con la mitad de tu plato habitual ya sientes plenitud y satisfacción.',
    morningShot: 'Shot #2 de Cúrcuma, Pimienta & Vinagre de Manzana',
    gelatinDoseMorning: '1 porción de Gelatina Bariátrica 30 min antes del almuerzo',
    gelatinDoseAfternoon: '1 porción 30 min antes de la cena',
    drainTea: 'Té Verde con Menta fresca (a media tarde)',
    sosTip: 'Come despacio: el hidrogel tarda 15 minutos en expandirse completamente en el estómago.',
    actionChecklist: [
      'Shot en ayunas completado',
      'Dosis pre-almuerzo consumida',
      'Dosis pre-cena consumida',
      'Cero refrescos ni bebidas azucaradas'
    ]
  },
  {
    day: 3,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 3: Eliminación de Líquidos Retenidos',
    focus: 'Primer bajón visible en el abdomen al desinflamarse el intestino.',
    morningShot: 'Shot #3 de Pomelo / Toronja y Jengibre',
    gelatinDoseMorning: '1 porción de Piña & Jengibre pre-almuerzo',
    gelatinDoseAfternoon: '1 porción Fórmula Madre a las 18:00',
    drainTea: 'Té de Diente de León y Limón',
    sosTip: 'Pésate hoy por la mañana en ayunas para registrar tu primera marca de desinflamación.',
    actionChecklist: [
      'Registro de peso del día 3',
      'Dosis de gelatina completada con éxito',
      'Té drenante tomado',
      'Cena ligera completada sin ansiedad'
    ]
  },
  {
    day: 4,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 4: Apagado de la Hormona del Hambre (Grelina)',
    focus: 'El estómago se acostumbra a volúmenes más pequeños de comida.',
    morningShot: 'Shot #1 Limón & Jengibre',
    gelatinDoseMorning: '1 porción Manzana & Canela 30 min antes de comer',
    gelatinDoseAfternoon: '1 porción pre-cena',
    drainTea: 'Infusión de Jengibre y Canela',
    sosTip: 'Mastica cada bocado al menos 20 veces para acompañar la saciedad de la gelatina.',
    actionChecklist: [
      'Rutina matutina completada',
      'Dosis de gelatina cumplidas',
      '2.5L de agua consumidos',
      'Cero picoteo entre horas'
    ]
  },
  {
    day: 5,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 5: Reafirmación Tisular de Colágeno',
    focus: 'Los péptidos de colágeno comienzan a nutrir piel, uñas y cabello mientras pierdes volumen.',
    morningShot: 'Shot #4 de Aloe Vera (Sábila) & Limón',
    gelatinDoseMorning: '1 porción Frutos Rojos pre-almuerzo',
    gelatinDoseAfternoon: '1 porción Maracuyá Relax en la noche',
    drainTea: 'Té de Hibisco (Jamaica) con canela',
    sosTip: 'Observa tu piel en el espejo: notarás mayor luminosidad y firmeza.',
    actionChecklist: [
      'Shot de sábila y limón',
      'Gelatina de frutos rojos',
      'Gelatina maracuyá nocturna',
      'Dormir 7 a 8 horas'
    ]
  },
  {
    day: 6,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 6: Control del Fin de Semana',
    focus: 'Estrategia para eventos sociales o comidas familiares sin romper el proceso.',
    morningShot: 'Shot #2 Vinagre de manzana & Cúrcuma',
    gelatinDoseMorning: '1 porción DOBLE (200g) 40 min antes del almuerzo social',
    gelatinDoseAfternoon: '1 porción de Piña & Jengibre pre-cena',
    drainTea: 'Té Drenante Intenso de Alcachofa o Cola de Caballo',
    sosTip: 'La porción doble de gelatina antes de una comida libre reduce hasta 800 calorías de ingesta involuntaria.',
    actionChecklist: [
      'Dosis doble estratégica antes del evento',
      '1 vaso grande de agua con la gelatina',
      'Plato servido con moderación natural',
      'Sin sensación de culpa ni pesadez'
    ]
  },
  {
    day: 7,
    phase: 'Fase 1: Desinflamación & Adaptación Gástrica',
    phaseNumber: 1,
    title: 'Día 7: Fin de Fase 1 - Evaluación de Medidas',
    focus: 'Celebrar el primer ciclo. Tu ropa se siente más suelta y el estómago plano.',
    morningShot: 'Shot #5 de Chía hidratada, Limón y Té Verde',
    gelatinDoseMorning: '1 porción Fórmula Madre pre-almuerzo',
    gelatinDoseAfternoon: '1 porción Frutos Rojos a media tarde',
    drainTea: 'Té de Manzanilla y Anís estrellado',
    sosTip: 'Mide tu cintura con una cinta métrica y anota la diferencia frente al día 1.',
    actionChecklist: [
      'Registro de cintura y peso de semana 1',
      'Preparar gelatinas para la Fase 2',
      'Dosis del día completadas',
      'Autocuidado y felicitación por 7 días invictos'
    ]
  },
  {
    day: 8,
    phase: 'Fase 2: Quema Acelerada & Cero Ansiedad',
    phaseNumber: 2,
    title: 'Día 8: Entrada en Modo Quema Profunda',
    focus: 'Aumentamos la termogénesis celular combinando gelatina con especias activadoras.',
    morningShot: 'Shot #6 de Cayena, Limón & Jengibre',
    gelatinDoseMorning: '1 porción Café Latte a media mañana (10:30 AM)',
    gelatinDoseAfternoon: '1 porción Piña Termogénica 30 min antes de la cena',
    drainTea: 'Té Verde con Gotas de Limón',
    sosTip: 'Camina 15 a 20 minutos tras consumir la dosis para activar el gasto energético.',
    actionChecklist: [
      'Shot de cayena y limón',
      'Gelatina de café termogénico',
      'Gelatina pre-cena',
      'Caminata de 20 min'
    ]
  },
  {
    day: 9,
    phase: 'Fase 2: Quema Acelerada & Cero Ansiedad',
    phaseNumber: 2,
    title: 'Día 9: Bloqueo de Grasa Visceral',
    focus: 'La fibra viscosa atrapa ácidos biliares forzando al cuerpo a usar reservas grasas.',
    morningShot: 'Shot #2 Vinagre de manzana & Cúrcuma',
    gelatinDoseMorning: '1 porción Manzana Canela pre-almuerzo',
    gelatinDoseAfternoon: '1 porción Fórmula Madre pre-cena',
    drainTea: 'Té de Romero y Menta',
    sosTip: 'Si tienes antojo de carbohidratos, toma una taza de té tibio con una pizca de canela.',
    actionChecklist: [
      'Shot en ayunas completado',
      'Dosis de gelatina en hora exacta',
      'Almuerzo alto en proteína magra',
      'Agua suficiente durante la jornada'
    ]
  },
  {
    day: 10,
    phase: 'Fase 2: Quema Acelerada & Cero Ansiedad',
    phaseNumber: 2,
    title: 'Día 10: Eliminación de Ansiedad Emocional',
    focus: 'Tus niveles de serotonina se estabilizan al no tener caídas bruscas de azúcar.',
    morningShot: 'Shot #1 Limón, Jengibre & Sal Marina',
    gelatinDoseMorning: '1 porción Frutos Rojos pre-almuerzo',
    gelatinDoseAfternoon: '1 porción Maracuyá Relax a las 20:30',
    drainTea: 'Infusión de Lavanda y Manzanilla',
    sosTip: 'Usa la frecuencia sonora 528Hz del app durante 10 minutos antes de acostarte.',
    actionChecklist: [
      'Dosis de gelatina completadas',
      'Escuchar frecuencia 528Hz',
      'Cena ligera completada',
      'Sueño profundo sin despertares'
    ]
  }
];

export const MORNING_SHOTS: ShotRecipe[] = [
  {
    id: 'shot-1',
    name: 'Shot #1: Activador Hepático (Limón, Jengibre & Sal Marina)',
    time: 'Inmediatamente al despertar en ayunas',
    benefits: ['Despierta el hígado y la vesícula', 'Alcaliniza el tracto digestivo', 'Elimina toxinas acumuladas en la noche'],
    ingredients: ['Jugo de 1/2 limón fresco', '1 cucharadita de jugo de jengibre rallado', '1 pizca de sal marina o del Himalaya', '40 ml de agua tibia'],
    preparation: 'Mezcla todo en un vasito de shot y tómalo de un solo trago. Espera 15 minutos antes de desayunar o tomar café.'
  },
  {
    id: 'shot-2',
    name: 'Shot #2: Bloqueador de Glucosa (Vinagre de Manzana & Cúrcuma)',
    time: 'En ayunas o 15 min antes del primer alimento',
    benefits: ['Mejora la sensibilidad a la insulina', 'Reduce la grasa en el vientre bajo', 'Antiinflamatorio celular'],
    ingredients: ['1 cucharada de Vinagre de Manzana orgánico con la madre', '1/2 cucharadita de cúrcuma en polvo', '1 pizca minúscula de pimienta negra', '50 ml de agua al clima'],
    preparation: 'Revuelve vigorosamente para suspender la cúrcuma y consume con pajilla/popote para proteger el esmalte dental.'
  },
  {
    id: 'shot-3',
    name: 'Shot #3: Bomba Cítrica Drenante (Pomelo/Toronja & Canela)',
    time: 'En ayunas días 3, 7 y 14',
    benefits: ['Moviliza líquidos retenidos en piernas y abdomen', 'Acelera el metabolismo basal', 'Aporta vitamina C pura'],
    ingredients: ['Jugo de 1/2 toronja o naranja agria', '1/2 cucharadita de canela de ceilán', '30 ml de agua'],
    preparation: 'Exprime el cítrico al instante, añade la canela y bebe de inmediato para no oxidar los bioflavonoides.'
  },
  {
    id: 'shot-4',
    name: 'Shot #4: Regenerador de Mucosa Gástrica (Aloe Vera & Limón)',
    time: 'En ayunas días de pesadez o acidez',
    benefits: ['Cura la gastritis y el reflujo', 'Prepara el estómago para absorber nutrientes', 'Efecto saciante preliminar'],
    ingredients: ['2 cucharadas de gel de sábila/aloe vera puro lavado', 'Jugo de 1/2 limón', '50 ml de agua de coco o agua pura'],
    preparation: 'Licúa durante 10 segundos a velocidad baja para homogeneizar el gel y bebe fresco.'
  }
];

export const DRAINAGE_TEAS: TeaRecipe[] = [
  {
    id: 'tea-1',
    name: 'Infusión Drenante Ultra-Fuerte (Cola de Caballo & Flor de Jamaica)',
    effect: 'Drena hasta 1 litro de líquido retenido en 24 horas y reduce la hinchazón de piernas y vientre.',
    ingredients: ['1 cucharada de Flor de Jamaica (Hibisco)', '1 cucharada de Cola de Caballo seca', '1 ramita de canela', '750 ml de agua'],
    instructions: 'Hierve el agua con la canela. Al hervir, apaga el fuego, añade la jamaica y la cola de caballo, tapa y deja reposar 10 minutos. Cuela y toma a lo largo del día.',
    bestTime: 'Entre 10:00 AM y 17:00 PM (no en la noche para no interrumpir el sueño al orinar).'
  },
  {
    id: 'tea-2',
    name: 'Té Verde Termogénico con Jengibre & Menta Piperita',
    effect: 'Eleva el gasto calórico diario un 4-5% e inhibe las bacterias que provocan inflamación intestinal.',
    ingredients: ['1 bolsita o cucharada de Té Verde de calidad', '3 rodajas de jengibre fresco', '4 hojas de menta o hierbabuena', '500 ml de agua'],
    instructions: 'Calienta el agua a 80°C (antes de hervir). Infusiona por solo 3 minutos para que no amargue. Sirve con hielo o caliente.',
    bestTime: 'A media mañana o 30 minutos después del almuerzo.'
  },
  {
    id: 'tea-3',
    name: 'Té Relajante Anti-Cortisol (Manzanilla, Melisa & Pasiflora)',
    effect: 'Disminuye la hormona del estrés (cortisol), frena el hambre por ansiedad nocturna y propicia sueño profundo.',
    ingredients: ['1 cucharada de flores de manzanilla', '1 cucharadita de hojas de melisa o toronjil', '1 taza de agua caliente'],
    instructions: 'Infusiona durante 7 minutos en agua caliente tapada. Endulza con 2 gotas de stevia si lo deseas.',
    bestTime: '45 minutos antes de dormir.'
  }
];

export const SMART_SHOPPING_LIST: ShoppingItem[] = [
  {
    id: 'shop-1',
    item: 'Gelatina pura sin sabor (Grenetina) en polvo',
    category: 'esenciales',
    estimatedCost: 'Económico ($2 - $4 USD)',
    notes: 'Busca cajas con sobres de 7g o bolsas de 250g a granel sin azúcares ni maltodextrina añadida.'
  },
  {
    id: 'shop-2',
    item: 'Limones frescos o Vinagre de Manzana con la madre',
    category: 'esenciales',
    estimatedCost: 'Muy barato ($1 - $3 USD)',
    notes: 'El vinagre debe decir "sin filtrar" o "con la madre" para contener los probióticos vivos.'
  },
  {
    id: 'shop-3',
    item: 'Semillas de Chía o Psyllium Husk',
    category: 'esenciales',
    estimatedCost: 'Accesible ($2 - $4 USD)',
    notes: '1 bolsa de 250g te dura más de 2 meses.'
  },
  {
    id: 'shop-4',
    item: 'Canela en polvo (preferiblemente de Ceilán) y Jengibre fresco',
    category: 'activadores',
    estimatedCost: 'Muy barato ($1 - $2 USD)',
    notes: 'La canela de Ceilán es más dulce y suave que la cassia común.'
  },
  {
    id: 'shop-5',
    item: 'Flor de Jamaica (Hibisco) a granel',
    category: 'activadores',
    estimatedCost: 'Muy económico ($1 - $2 USD)',
    notes: 'Disponible en cualquier mercado local, herbolaria o supermercado.'
  },
  {
    id: 'shop-6',
    item: 'Endulzante 100% natural (Stevia pura líquida o Fruto del Monje)',
    category: 'esenciales',
    estimatedCost: 'Rinde meses ($3 - $5 USD)',
    notes: 'Evita los que contengan sacarina, sucralosa o aspartamo.'
  },
  {
    id: 'shop-7',
    item: 'Frutos rojos congelados o frescos (Fresas, Arándanos)',
    category: 'frutas_y_sabores',
    estimatedCost: 'Medio ($2 - $4 USD)',
    notes: 'Comprar congelados es hasta un 50% más barato y conservan todas sus antocianinas.'
  },
  {
    id: 'shop-8',
    item: 'Cúrcuma en polvo & Pimienta Negra molida',
    category: 'activadores',
    estimatedCost: 'Muy barato ($1 USD)',
    notes: 'La pimienta aumenta la absorción de la curcumina hasta en un 2000%.'
  }
];

export const FREQUENT_QUESTIONS: FaqItem[] = [
  {
    question: '¿Por qué la Gelatina Bariátrica quita el hambre tan rápido?',
    answer: 'Al mezclarse con agua tibia y el activador cítrico, la proteína hidrolizada de la gelatina y la fibra soluble forman un hidrogel elástico en la cavidad estomacal. Este hidrogel ocupa espacio físico y presiona suavemente las paredes gástricas, enviando señales nerviosas al hipotálamo indicando que estás lleno, mucho antes de ingerir calorías pesadas.',
    category: 'Ciencia & Efecto'
  },
  {
    question: '¿Puedo prepararla para varios días a la vez?',
    answer: '¡Sí! Es lo más recomendado. Puedes preparar la mezcla multiplicada por 3 o 4 porciones en recipientes herméticos de vidrio y conservarla en el refrigerador hasta por 5 a 6 días en perfecto estado.',
    category: 'Preparación'
  },
  {
    question: '¿Las personas con diabetes o hipertensión pueden tomarla?',
    answer: 'Totalmente. La receta original NO contiene azúcar, ni sal en exceso, ni químicos. De hecho, la gelatina y la canela ayudan a estabilizar la glucosa en sangre y a proteger las articulaciones.',
    category: 'Salud & Seguridad'
  },
  {
    question: '¿Es obligatorio tomar el vaso de agua junto con la gelatina?',
    answer: 'Sí, es fundamental. La fibra y la grenetina necesitan esa agua para hidratarse y expandirse al máximo en el estómago. Si la tomas seca o sin agua adicional, el efecto saciante se reduce a la mitad.',
    category: 'Uso Correcto'
  },
  {
    question: '¿Qué hago si un día olvido tomarla antes del almuerzo?',
    answer: 'No te preocupes. Puedes consumirla como merienda en la tarde (entre las 16:00 y las 18:00) o 30 minutos antes de la cena. Lo importante es mantener la constancia en el protocolo de 21 días.',
    category: 'Uso Correcto'
  },
  {
    question: '¿Por qué no sirve la gelatina normal de paquete del supermercado?',
    answer: 'Las gelatinas comerciales convencionales contienen un 85% de azúcar o edulcorantes artificiales inflamatorios (como aspartamo y maltodextrina), y casi nada de colágeno real. La Fórmula Bariátrica usa grenetina pura sin sabor + activadores que crean el verdadero efecto balón gástrico.',
    category: 'Ingredientes'
  }
];
