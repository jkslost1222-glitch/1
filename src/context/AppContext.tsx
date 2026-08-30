import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, UserProfile, ActiveModalType, BariatricRecipe, DailyPlanDay, ShotRecipe, TeaRecipe } from '../types';
import { translations } from '../data/translations';
import { getCoreRecipe, getFlavorVariations, getDailyPlan, getMorningShots, getDrainageTeas } from '../data/bariatricData';

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
  // Default to Spanish ('es') or saved
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
    const defaultName = isPt ? 'Aluna VIP Oficial' : isEn ? 'Official VIP Member' : 'Alumna VIP Oficial';
    const newUser: UserProfile = {
      name: name || email.split('@')[0] || defaultName,
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
    const defaultName = isPt ? 'Aluna VIP Oficial' : isEn ? 'Official VIP Member' : 'Alumna VIP Oficial';
    login('cliente.vip@gelatinabariatrica.com', defaultName);
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

  const [activeDayDetail, setActiveDayDetail] = useState<DailyPlanDay | null>(() => {
    return getDailyPlan(language)[0];
  });

  // Keep activeDayDetail in sync with language
  useEffect(() => {
    const currentDayNum = activeDayDetail?.day || 1;
    const plan = getDailyPlan(language);
    const updated = plan.find(d => d.day === currentDayNum) || plan[0];
    setActiveDayDetail(updated);
  }, [language]);

  const toggleDayCompletion = (day: number) => {
    setCompletedDays(prev => {
      const updated = prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day].sort((a, b) => a - b);
      localStorage.setItem('bariatric_completed_days', JSON.stringify(updated));
      return updated;
    });
  };

  // Dosage Calculator Logic
  const getTimingAdvice = (portions: number, lang: Language) => {
    if (lang === 'pt') {
      if (portions === 3) return '3 doses diárias: 1 no meio da manhã (10:30), 1 antes do Almoço (12:30) e 1 de resgate noturno (19:30) para bloquear a compulsão.';
      if (portions === 1) return '1 dose diária principal: 30 minutos antes da sua refeição mais pesada do dia com 1 copo grande de água.';
      return '2 doses diárias: 1 porção 30 min antes do Almoço e 1 porção 30 min antes do Jantar ou no pico de fome da tarde.';
    }
    if (lang === 'en') {
      if (portions === 3) return '3 daily portions: 1 mid-morning (10:30 AM), 1 before Lunch (12:30 PM) and 1 evening rescue portion (7:30 PM).';
      if (portions === 1) return '1 main daily portion: 30 minutes before your heaviest meal of the day with 1 full glass of water.';
      return '2 daily portions: 1 portion 30 min before Lunch and 1 portion 30 min before Dinner with 300ml water.';
    }
    if (portions === 3) return '3 dosis al día: 1 a media mañana (10:30 AM), 1 antes del Almuerzo (12:30 PM) y 1 de rescate nocturno (19:30 PM) para bloquear el hambre.';
    if (portions === 1) return '1 dosis diaria principal: 30 minutos antes de tu comida más copiosa del día (normalmente el almuerzo) con 1 vaso de agua.';
    return '2 dosis diarias: 1 porção 30 min antes del Almuerzo y 1 porción 30 min antes de la Cena o en el pico de ansiedad de la tarde.';
  };

  const [calculatorData, setCalculatorData] = useState(() => ({
    currentWeight: 75,
    targetLoss: 8,
    anxietyLevel: 'moderada' as 'leve' | 'moderada' | 'alta',
    dailyPortions: 2,
    cubesPerDose: 2,
    timingAdvice: getTimingAdvice(2, language)
  }));

  const updateCalculator = (weight: number, target: number, anxiety: 'leve' | 'moderada' | 'alta') => {
    let portions = 2;
    let cubes = 2;

    if (weight > 85 || target >= 12 || anxiety === 'alta') {
      portions = 3;
      cubes = 2;
    } else if (weight <= 60 || target <= 4) {
      portions = 1;
      cubes = 2;
    } else {
      portions = 2;
      cubes = 2;
    }

    setCalculatorData({
      currentWeight: weight,
      targetLoss: target,
      anxietyLevel: anxiety,
      dailyPortions: portions,
      cubesPerDose: cubes,
      timingAdvice: getTimingAdvice(portions, language)
    });
  };

  // Nutri-Coach Smart Chat
  const getInitialCoachMessage = (lang: Language) => {
    if (lang === 'pt') return 'Olá! Sou seu Nutri-Coach da Gelatina Bariátrica. Tem alguma dúvida sobre o preparo, horários para tomar ou substituição de ingredientes? Escreva aqui.';
    if (lang === 'en') return 'Hello! I am your Bariatric Gelatin AI Nutri-Coach. Do you have any questions about recipe prep, timing, water rules or dosages? Type here.';
    return '¡Hola! Soy tu Nutri-Coach de la Gelatina Bariátrica. ¿Tienes alguna duda sobre la preparación, los horarios para tomarla o cómo sustituir algún ingrediente? Escríbeme aquí.';
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: '1',
      sender: 'coach',
      text: getInitialCoachMessage(language),
      timestamp: 'Agora'
    }
  ]);
  const [isTypingCoach, setIsTypingCoach] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Agora'
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTypingCoach(true);

    try {
      const response = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          language: language,
          history: messages.slice(-4).map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      const data = await response.json();
      const reply = data.answer || (language === 'pt' 
        ? 'A gelatina bariátrica deve ser consumida 25 a 35 minutos antes da refeição com 300ml de água morna para expandir no estômago.' 
        : language === 'en'
        ? 'Bariatric gelatin must be taken 25 to 35 minutes before meals accompanied by 300ml of water to expand gastric fullness.'
        : 'La gelatina bariátrica debe tomarse 25 a 35 minutos antes de comer con 300ml de agua tibia para expandirse en el estómago.');

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'coach',
          text: reply,
          timestamp: 'Agora'
        }
      ]);
    } catch (e) {
      const fallbackReply = language === 'pt'
        ? 'A gelatina bariátrica deve ser consumida 25 a 35 minutos antes da refeição principal sempre acompanhada de 1 copo grande de água morna.'
        : language === 'en'
        ? 'Always consume your bariatric gelatin 25 to 35 minutes before your main meal with a full 300ml glass of water.'
        : 'Consume siempre tu porción de gelatina 25 a 35 minutos antes de la comida principal con 1 vaso grande de agua tibia.';
      
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'coach',
          text: fallbackReply,
          timestamp: 'Agora'
        }
      ]);
    } finally {
      setIsTypingCoach(false);
    }
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
    return saved ? JSON.parse(saved) : ['1', '2'];
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
