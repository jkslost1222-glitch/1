import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, UserProfile, ActiveModalType, BariatricRecipe, DailyPlanDay, ShotRecipe, TeaRecipe } from '../types';
import { translations } from '../data/translations';
import { CORE_BARIATRIC_RECIPE, FLAVOR_VARIATIONS, DAILY_21_DAYS_PLAN, MORNING_SHOTS, DRAINAGE_TEAS } from '../data/bariatricData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isEn: boolean;
  isPt: boolean;
  isEs: boolean;
  t: typeof translations.es;
  
  // Auth state
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  loginAsVip: () => void;
  
  // Navigation & Views
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeRecipeId: string | null;
  setActiveRecipeId: (id: string | null) => void;
  activeModal: ActiveModalType;
  setActiveModal: (modal: ActiveModalType) => void;
  
  // 21 Days Progress
  completedDays: number[];
  toggleDayCompletion: (day: number) => void;
  activeDayDetail: DailyPlanDay | null;
  setActiveDayDetail: (day: DailyPlanDay | null) => void;
  
  // Dosage Calculator State
  calculatorData: {
    currentWeight: number;
    targetLoss: number;
    anxietyLevel: 'leve' | 'moderada' | 'alta';
    dailyPortions: number;
    cubesPerDose: number;
    timingAdvice: string;
  };
  updateCalculator: (weight: number, target: number, anxiety: 'leve' | 'moderada' | 'alta') => void;
  
  // Nutri-Coach Chat
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
  isTypingCoach: boolean;
  
  // Audio Synthesizer State
  isPlayingAudio: boolean;
  audioFrequency: 528 | 432;
  toggleAudioPlay: () => void;
  setAudioFrequency: (freq: 528 | 432) => void;
  
  // Shopping list checked items
  checkedShoppingItems: string[];
  toggleShoppingItem: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Spanish ('es')
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bariatric_lang');
    return (saved === 'pt' || saved === 'en' || saved === 'es') ? (saved as Language) : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bariatric_lang', lang);
  };

  const isEs = language === 'es';
  const isPt = language === 'pt';
  const isEn = language === 'en';
  const t = translations[language] || translations.es;

  // Authentication
  const [user, setUser] = useState<UserProfile | null>(() => {
    const savedUser = localStorage.getItem('bariatric_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch {
        return null;
      }
    }
    return null;
  });

  const isAuthenticated = !!user;

  const login = (email: string, name?: string) => {
    const newUser: UserProfile = {
      name: name || email.split('@')[0] || 'Miembro VIP',
      email: email.trim().toLowerCase(),
      isVip: true,
      startDate: new Date().toISOString().split('T')[0],
      targetWeightLossKg: 8,
      currentWeightKg: 74,
      completedDays: [1],
      unlockedModules: ['receta-original', 'calculadora', 'cronograma', 'sabores', 'shots', 'tes', 'menu', 'sos', 'compras']
    };
    setUser(newUser);
    localStorage.setItem('bariatric_user', JSON.stringify(newUser));
  };

  const loginAsVip = () => {
    login('cliente.vip@gelatinabariatrica.com', 'Alumna VIP Oficial');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bariatric_user');
  };

  // Active View & Modals
  const [activeTab, setActiveTab] = useState<string>('receta-original');
  const [activeRecipeId, setActiveRecipeId] = useState<string | null>('receta-original');
  const [activeModal, setActiveModal] = useState<ActiveModalType>(null);

  // 21 Days Progress
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('bariatric_completed_days');
    return saved ? JSON.parse(saved) : [1];
  });

  const [activeDayDetail, setActiveDayDetail] = useState<DailyPlanDay | null>(DAILY_21_DAYS_PLAN[0]);

  const toggleDayCompletion = (day: number) => {
    setCompletedDays(prev => {
      const updated = prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day].sort((a, b) => a - b);
      localStorage.setItem('bariatric_completed_days', JSON.stringify(updated));
      return updated;
    });
  };

  // Dosage Calculator Logic
  const [calculatorData, setCalculatorData] = useState({
    currentWeight: 75,
    targetLoss: 8,
    anxietyLevel: 'moderada' as 'leve' | 'moderada' | 'alta',
    dailyPortions: 2,
    cubesPerDose: 2,
    timingAdvice: '1 dosis (150g o 2 cubos) 30 min antes del Almuerzo + 1 dosis 35 min antes de la Cena con 1 vaso grande de agua tibia.'
  });

  const updateCalculator = (weight: number, target: number, anxiety: 'leve' | 'moderada' | 'alta') => {
    let portions = 2;
    let cubes = 2;
    let timing = '';

    if (weight > 85 || target >= 12 || anxiety === 'alta') {
      portions = 3;
      cubes = 2;
      timing = '3 dosis al día: 1 a media mañana (10:30 AM), 1 antes del Almuerzo (12:30 PM) y 1 de rescate nocturno (19:30 PM) para bloquear el hambre.';
    } else if (weight <= 60 || target <= 4) {
      portions = 1;
      cubes = 2;
      timing = '1 dosis diaria principal: 30 minutos antes de tu comida más copiosa del día (normalmente el almuerzo) con 1 vaso de agua.';
    } else {
      portions = 2;
      cubes = 2;
      timing = '2 dosis diarias: 1 porción 30 min antes del Almuerzo y 1 porción 30 min antes de la Cena o en el pico de ansiedad de la tarde.';
    }

    setCalculatorData({
      currentWeight: weight,
      targetLoss: target,
      anxietyLevel: anxiety,
      dailyPortions: portions,
      cubesPerDose: cubes,
      timingAdvice: timing
    });
  };

  // Nutri-Coach Smart Chat (in Spanish)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'coach',
      text: '¡Hola! Soy tu Nutri-Coach de la Gelatina Bariátrica. ¿Tienes alguna duda sobre la preparación, los horarios para tomarla o cómo sustituir algún ingrediente? Escríbeme aquí.',
      timestamp: 'Ahora'
    }
  ]);
  const [isTypingCoach, setIsTypingCoach] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Ahora'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTypingCoach(true);

    setTimeout(() => {
      let reply = '¡Excelente pregunta! La clave de la Gelatina Bariátrica es tomarla exactamente 25 a 35 minutos antes de comer con 1 vaso lleno de agua. Esto le da tiempo al hidrogel de expandirse en el estómago.';
      const lower = text.toLowerCase();

      if (lower.includes('diabetes') || lower.includes('azucar') || lower.includes('presion')) {
        reply = 'Totalmente seguro. La receta no contiene azúcar ni químicos, y la canela junto con la grenetina ayuda a estabilizar la glucosa en sangre. Puedes usar stevia pura o fruto del monje.';
      } else if (lower.includes('nevera') || lower.includes('dias') || lower.includes('durar') || lower.includes('guardar')) {
        reply = 'Puedes preparar la cantidad de 4 a 5 días y guardarla en un recipiente hermético de vidrio en el refrigerador. Se conserva en perfecto estado y lista para consumir.';
      } else if (lower.includes('limon') || lower.includes('vinagre') || lower.includes('acidez')) {
        reply = 'El limón o el vinagre de manzana activa el pH para que la proteína forme la red viscoelástica saciante. Si tienes gastritis severa, puedes usar el Shot #4 de Sábila/Aloe Vera con agua tibia.';
      } else if (lower.includes('agua') || lower.includes('vaso')) {
        reply = '¡El agua es obligatoria! La fibra y el colágeno absorben el líquido para inflarse suavemente en el estómago. Toma mínimo 250ml de agua inmediatamente con tu porción.';
      } else if (lower.includes('noche') || lower.includes('dulce') || lower.includes('ansiedad')) {
        reply = 'Para la noche, te recomiendo la versión Maracuyá Anti-Cortisol o Frutos Rojos a las 19:30 o 20:00. Frena el antojo de azúcar de raíz en menos de 10 minutos.';
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'coach',
          text: reply,
          timestamp: 'Ahora'
        }
      ]);
      setIsTypingCoach(false);
    }, 900);
  };

  // Audio Relaxation Synthesizer
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioFrequency, setAudioFrequency] = useState<528 | 432>(528);

  const toggleAudioPlay = () => {
    setIsPlayingAudio(prev => !prev);
  };

  // Shopping List state
  const [checkedShoppingItems, setCheckedShoppingItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('bariatric_shopping_checked');
    return saved ? JSON.parse(saved) : ['shop-1', 'shop-2'];
  });

  const toggleShoppingItem = (id: string) => {
    setCheckedShoppingItems(prev => {
      const updated = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('bariatric_shopping_checked', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isEn,
        isPt,
        isEs,
        t,
        isAuthenticated,
        user,
        login,
        logout,
        loginAsVip,
        activeTab,
        setActiveTab,
        activeRecipeId,
        setActiveRecipeId,
        activeModal,
        setActiveModal,
        completedDays,
        toggleDayCompletion,
        activeDayDetail,
        setActiveDayDetail,
        calculatorData,
        updateCalculator,
        messages,
        sendMessage,
        isTypingCoach,
        isPlayingAudio,
        audioFrequency,
        toggleAudioPlay,
        setAudioFrequency,
        checkedShoppingItems,
        toggleShoppingItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
