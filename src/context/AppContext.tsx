import React, { createContext, useContext, useState, useEffect } from 'react';
import { DeliverableItem, DeliverableType, Language, UpsellConfigItem, UserProfile } from '../types';
import { ptDeliverables, enDeliverables, upsellConfig } from '../data/protocols';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
  isEn: boolean;
  isPt: boolean;
  deliverables: DeliverableItem[];
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  activeModuleId: DeliverableType | null;
  setActiveModuleId: (id: DeliverableType | null) => void;
  activeModal: 'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | null;
  setActiveModal: (modal: 'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | null) => void;
  currentUpsell: UpsellConfigItem | null;
  openUpsellModal: (keyOrId: string) => void;
  entitlements: Record<string, boolean>;
  hasEntitlement: (id: string) => boolean;
  unlockModule: (id: string) => void;
  toggleEntitlement: (id: string) => void;
  unlockAll: () => void;
  resetEntitlements: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_USER: UserProfile = {
  email: 'membro.vip@portalpet.com',
  name: 'Tutor VIP',
  isVip: true,
  entitlements: {
    'cao-blindado': true,
    'antiotite': true,
    'coach-canino': true,
    'anticoceira': true,
    'mobilidade': true,
    'frequencias': true,
    'aulas-ao-vivo': true,
    'presentes': true,
    'pet-em-dia': true,
    'antibafo': true,
    'comer-coco': true,
    'suporte': true
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pet_portal_lang');
    return saved === 'en' ? 'en' : 'pt';
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('pet_portal_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_USER;
      }
    }
    return DEFAULT_USER; // Default logged in for instant seamless experience
  });

  const [entitlements, setEntitlements] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('pet_portal_entitlements');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_USER.entitlements;
      }
    }
    return DEFAULT_USER.entitlements;
  });

  const [activeModuleId, setActiveModuleId] = useState<DeliverableType | null>(null);
  const [activeModal, setActiveModal] = useState<'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | null>(null);
  const [currentUpsell, setCurrentUpsell] = useState<UpsellConfigItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Automatic Kiwify purchase return parameter detector
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const email = params.get('email') || params.get('customer_email');
      const status = params.get('status');
      const product = params.get('product') || params.get('unlocked');

      if (email || status === 'success' || status === 'approved') {
        const buyerEmail = email || 'cliente@kiwify.com';
        login(buyerEmail);
        
        if (product) {
          unlockModule(product);
        } else {
          unlockAll();
        }

        try {
          confetti({
            particleCount: 120,
            spread: 100,
            origin: { y: 0.4 }
          });
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {
      // URL parsing fallback
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pet_portal_lang', language);
  }, [language]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('pet_portal_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pet_portal_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('pet_portal_entitlements', JSON.stringify(entitlements));
  }, [entitlements]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const login = (email: string, name?: string) => {
    const newUser: UserProfile = {
      email,
      name: name || email.split('@')[0],
      isVip: true,
      entitlements: { ...entitlements }
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    setActiveModuleId(null);
  };

  const hasEntitlement = (id: string) => {
    // If user is VIP, everything is unlocked unless simulated locked in dev mode
    return entitlements[id] ?? true;
  };

  const unlockModule = (id: string) => {
    setEntitlements(prev => ({
      ...prev,
      [id]: true
    }));
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const toggleEntitlement = (id: string) => {
    setEntitlements(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const unlockAll = () => {
    setEntitlements({
      'cao-blindado': true,
      'antiotite': true,
      'coach-canino': true,
      'anticoceira': true,
      'mobilidade': true,
      'frequencias': true,
      'aulas-ao-vivo': true,
      'presentes': true,
      'pet-em-dia': true,
      'antibafo': true,
      'comer-coco': true,
      'suporte': true
    });
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 }
      });
    } catch (e) {
      // ignore
    }
  };

  const resetEntitlements = () => {
    setEntitlements({
      'cao-blindado': false,
      'antiotite': true,
      'coach-canino': true,
      'anticoceira': false,
      'mobilidade': false,
      'frequencias': true,
      'aulas-ao-vivo': true,
      'presentes': true,
      'pet-em-dia': true,
      'antibafo': true,
      'comer-coco': true,
      'suporte': true
    });
  };

  const openUpsellModal = (keyOrId: string) => {
    const item =
      upsellConfig[keyOrId] ||
      Object.values(upsellConfig).find(u => u.id === keyOrId) ||
      upsellConfig.caoBlindado;
    setCurrentUpsell(item);
    setActiveModal('upsell');
  };

  const t = translations[language] || translations.pt;
  const rawDeliverables = language === 'en' ? enDeliverables : ptDeliverables;

  const deliverables = rawDeliverables.map(item => ({
    ...item,
    isLocked: !hasEntitlement(item.id)
  }));

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isEn: language === 'en',
        isPt: language === 'pt',
        deliverables,
        user,
        isAuthenticated: !!user,
        login,
        logout,
        activeModuleId,
        setActiveModuleId,
        activeModal,
        setActiveModal,
        currentUpsell,
        openUpsellModal,
        entitlements,
        hasEntitlement,
        unlockModule,
        toggleEntitlement,
        unlockAll,
        resetEntitlements,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory
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
