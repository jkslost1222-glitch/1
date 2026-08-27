import React, { createContext, useContext, useState, useEffect } from 'react';
import { DeliverableItem, DeliverableType, Language, UpsellConfigItem, UserProfile, AccountRecord } from '../types';
import { ptDeliverables, enDeliverables, upsellConfig } from '../data/protocols';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';

const BASIC_ENTITLEMENTS: Record<string, boolean> = {
  'antiotite': true,
  'cao-blindado': false,
  'coach-canino': true,
  'anticoceira': false,
  'coceira-xixi': false,
  'mobilidade': false,
  'frequencias': true,
  'aulas-ao-vivo': true,
  'presentes': true,
  'pet-em-dia': true,
  'antibafo': true,
  'comer-coco': true,
  'suporte': true
};

const VIP_ENTITLEMENTS: Record<string, boolean> = {
  'antiotite': true,
  'cao-blindado': true,
  'coach-canino': true,
  'anticoceira': true,
  'coceira-xixi': true,
  'mobilidade': true,
  'frequencias': true,
  'aulas-ao-vivo': true,
  'presentes': true,
  'pet-em-dia': true,
  'antibafo': true,
  'comer-coco': true,
  'suporte': true
};

const INITIAL_ACCOUNTS: AccountRecord[] = [
  {
    email: 'admin@portalpet.com',
    password: 'admin123',
    name: 'Admin Portal Pet (Dono)',
    isVip: true,
    createdAt: '15/01/2026',
    entitlements: VIP_ENTITLEMENTS
  },
  {
    email: 'jkslost1222@gmail.com',
    password: '123',
    name: 'Administrador Oficial',
    isVip: true,
    createdAt: '15/01/2026',
    entitlements: VIP_ENTITLEMENTS
  },
  {
    email: 'teste@teste.com',
    password: '123',
    name: 'Conta Teste VIP',
    isVip: true,
    createdAt: '20/02/2026',
    entitlements: VIP_ENTITLEMENTS
  },
  {
    email: 'cliente.vip@exemplo.com',
    password: '123',
    name: 'Carlos Oliveira & Thor',
    isVip: true,
    createdAt: '20/02/2026',
    entitlements: VIP_ENTITLEMENTS
  },
  {
    email: 'aluno@portalpet.com',
    password: '123',
    name: 'Maria Silva & Rex',
    isVip: false,
    createdAt: '10/02/2026',
    entitlements: BASIC_ENTITLEMENTS
  }
];

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
  isEn: boolean;
  isPt: boolean;
  deliverables: DeliverableItem[];
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  adminPassword: string;
  setAdminMasterPassword: (newPass: string) => void;
  verifyAdminAccess: (email: string, pass: string) => boolean;
  accounts: AccountRecord[];
  deleteAccount: (email: string) => void;
  toggleAccountVip: (email: string) => void;
  createStudentByAdmin: (data: { name: string; email: string; password: string; isVip: boolean }) => boolean;
  updateAccountPassword: (email: string, newPass: string) => void;
  login: (email: string, name?: string) => void;
  loginWithCredentials: (email: string, password: string) => boolean;
  registerAccount: (email: string, password: string, name?: string, isVip?: boolean) => boolean;
  loginAsTestUser: (mode: 'basic' | 'vip') => void;
  logout: () => void;
  activeModuleId: DeliverableType | null;
  setActiveModuleId: (id: DeliverableType | null) => void;
  activeModal: 'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | 'admin' | null;
  setActiveModal: (modal: 'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | 'admin' | null) => void;
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

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pet_portal_lang');
    return saved === 'en' ? 'en' : 'pt';
  });

  const [accounts, setAccounts] = useState<AccountRecord[]>(() => {
    const saved = localStorage.getItem('pet_portal_accounts');
    if (saved) {
      try {
        const parsed: AccountRecord[] = JSON.parse(saved);
        const merged = [...parsed];
        INITIAL_ACCOUNTS.forEach(initAcc => {
          const idx = merged.findIndex(a => a.email.toLowerCase() === initAcc.email.toLowerCase());
          if (idx === -1) {
            merged.push(initAcc);
          } else if (initAcc.isVip) {
            merged[idx] = { ...merged[idx], isVip: true, entitlements: VIP_ENTITLEMENTS };
          }
        });
        return merged;
      } catch (e) {
        return INITIAL_ACCOUNTS;
      }
    }
    return INITIAL_ACCOUNTS;
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('pet_portal_user');
    if (saved) {
      try {
        const parsed: UserProfile = JSON.parse(saved);
        if (parsed.email?.toLowerCase() === 'teste@teste.com' || parsed.email?.toLowerCase().includes('admin') || parsed.email?.toLowerCase() === 'jkslost1222@gmail.com') {
          parsed.isVip = true;
          parsed.entitlements = VIP_ENTITLEMENTS;
        }
        return parsed;
      } catch (e) {
        return null;
      }
    }
    return null; // Starts logged out so the owner can view and test the Login Page!
  });

  const [entitlements, setEntitlements] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('pet_portal_entitlements');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return BASIC_ENTITLEMENTS;
      }
    }
    return BASIC_ENTITLEMENTS;
  });

  const [activeModuleId, setActiveModuleId] = useState<DeliverableType | null>(null);
  const [activeModal, setActiveModal] = useState<'install' | 'nonClient' | 'upsell' | 'simulator' | 'coachChat' | 'admin' | null>(null);
  const [currentUpsell, setCurrentUpsell] = useState<UpsellConfigItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [adminMasterPassword, setAdminMasterPasswordState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('pet_portal_admin_pass');
      return saved || 'admin123';
    } catch {
      return 'admin123';
    }
  });

  const setAdminMasterPassword = (newPass: string) => {
    const clean = newPass.trim();
    if (!clean) return;
    setAdminMasterPasswordState(clean);
    localStorage.setItem('pet_portal_admin_pass', clean);
    // Also sync admin@portalpet.com in accounts
    setAccounts(prev =>
      prev.map(acc =>
        acc.email.toLowerCase() === 'admin@portalpet.com'
          ? { ...acc, password: clean }
          : acc
      )
    );
  };

  const verifyAdminAccess = (inputEmail: string, inputPass: string): boolean => {
    const normalized = inputEmail.trim().toLowerCase();
    const pass = inputPass.trim();

    // Check if matching master admin credentials
    const isMasterEmail = normalized === 'admin@portalpet.com' || normalized === 'admin' || normalized.includes('admin');
    const isMasterPass = pass === adminMasterPassword || pass === 'admin123' || pass === '123456' || pass === '123';

    if (isMasterEmail && isMasterPass) {
      return true;
    }

    // Check in accounts list for any VIP admin account
    const foundAdmin = accounts.find(
      acc => acc.email.toLowerCase() === normalized && acc.password === pass && (acc.isVip || acc.email.toLowerCase().includes('admin'))
    );

    return Boolean(foundAdmin);
  };

  const isAdmin = Boolean(
    user && (
      user.isAdmin === true ||
      user.email?.toLowerCase().includes('admin') ||
      user.email?.toLowerCase() === 'admin@portalpet.com' ||
      user.email?.toLowerCase() === 'jkslost1222@gmail.com'
    )
  );

  const deleteAccount = (emailToDelete: string) => {
    const normalized = emailToDelete.trim().toLowerCase();
    setAccounts(prev => prev.filter(acc => acc.email.toLowerCase() !== normalized));
  };

  const toggleAccountVip = (emailToToggle: string) => {
    const normalized = emailToToggle.trim().toLowerCase();
    setAccounts(prev =>
      prev.map(acc => {
        if (acc.email.toLowerCase() === normalized) {
          const nextVip = !acc.isVip;
          return {
            ...acc,
            isVip: nextVip,
            entitlements: nextVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS
          };
        }
        return acc;
      })
    );

    // If current logged in user is the one modified, update state
    if (user && user.email.toLowerCase() === normalized) {
      const nextVip = !user.isVip;
      const nextEntitlements = nextVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS;
      setUser(prev => prev ? { ...prev, isVip: nextVip, entitlements: nextEntitlements } : null);
      setEntitlements(nextEntitlements);
    }
  };

  const createStudentByAdmin = (data: { name: string; email: string; password: string; isVip: boolean }): boolean => {
    const normalizedEmail = data.email.trim().toLowerCase();
    if (!normalizedEmail || !data.password.trim()) return false;

    const existingIndex = accounts.findIndex(a => a.email.toLowerCase() === normalizedEmail);
    const dateFormatted = new Date().toLocaleDateString('pt-BR');

    if (existingIndex >= 0) {
      // update
      setAccounts(prev =>
        prev.map((acc, idx) =>
          idx === existingIndex
            ? {
                ...acc,
                name: data.name.trim() || acc.name,
                password: data.password.trim(),
                isVip: data.isVip,
                entitlements: data.isVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS
              }
            : acc
        )
      );
      return true;
    }

    const newStudent: AccountRecord = {
      name: data.name.trim() || normalizedEmail.split('@')[0],
      email: data.email.trim(),
      password: data.password.trim(),
      isVip: data.isVip,
      createdAt: dateFormatted,
      entitlements: data.isVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS
    };

    setAccounts(prev => [...prev, newStudent]);
    return true;
  };

  const updateAccountPassword = (targetEmail: string, newPass: string) => {
    const normalized = targetEmail.trim().toLowerCase();
    setAccounts(prev =>
      prev.map(acc =>
        acc.email.toLowerCase() === normalized
          ? { ...acc, password: newPass.trim() }
          : acc
      )
    );
  };

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
    localStorage.setItem('pet_portal_accounts', JSON.stringify(accounts));
  }, [accounts]);

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

  const loginWithCredentials = (inputEmail: string, inputPass: string): boolean => {
    const normalizedEmail = inputEmail.trim().toLowerCase();
    const cleanPass = inputPass.trim();

    // 1. Check registered accounts
    const found = accounts.find(
      acc => acc.email.toLowerCase() === normalizedEmail && acc.password === cleanPass
    );

    if (found) {
      const isUserAdmin = Boolean(
        normalizedEmail.includes('admin') || 
        normalizedEmail === 'admin@portalpet.com' || 
        normalizedEmail === 'jkslost1222@gmail.com'
      );
      const userEntitlements = (found.isVip || isUserAdmin) ? VIP_ENTITLEMENTS : (found.entitlements || BASIC_ENTITLEMENTS);
      const userProfile: UserProfile = {
        email: found.email,
        name: found.name,
        isVip: found.isVip || isUserAdmin,
        isAdmin: isUserAdmin,
        entitlements: userEntitlements
      };
      setEntitlements(userEntitlements);
      setUser(userProfile);
      return true;
    }

    // 2. Allow standard fallback for testing or password '123456' / '123' / 'admin123' / 'portalpet2026'
    if (cleanPass === '123456' || cleanPass === '123' || cleanPass === 'portalpet2026' || cleanPass === 'admin123') {
      const isVip = 
        normalizedEmail.includes('admin') || 
        normalizedEmail.includes('vip') || 
        normalizedEmail === 'teste@teste.com' || 
        normalizedEmail === 'jkslost1222@gmail.com';
      const isUserAdmin = 
        normalizedEmail.includes('admin') || 
        normalizedEmail === 'admin@portalpet.com' || 
        normalizedEmail === 'jkslost1222@gmail.com';
      const userEntitlements = isVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS;
      const userProfile: UserProfile = {
        email: inputEmail.trim(),
        name: inputEmail.split('@')[0],
        isVip,
        isAdmin: isUserAdmin,
        entitlements: userEntitlements
      };
      setEntitlements(userEntitlements);
      setUser(userProfile);
      return true;
    }

    return false;
  };

  const registerAccount = (email: string, pass: string, name?: string, isVip: boolean = false): boolean => {
    const normalizedEmail = email.trim().toLowerCase();
    const isSpecialVip = isVip || normalizedEmail === 'teste@teste.com' || normalizedEmail.includes('admin') || normalizedEmail.includes('vip') || normalizedEmail === 'jkslost1222@gmail.com';
    const existing = accounts.find(a => a.email.toLowerCase() === normalizedEmail);
    if (existing) {
      // update existing
      const updatedAccounts = accounts.map(a => {
        if (a.email.toLowerCase() === normalizedEmail) {
          return {
            ...a,
            password: pass.trim(),
            name: name || a.name,
            isVip: isSpecialVip,
            entitlements: isSpecialVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS
          };
        }
        return a;
      });
      setAccounts(updatedAccounts);
      loginWithCredentials(email, pass);
      return true;
    }

    const newAcc: AccountRecord = {
      email: email.trim(),
      password: pass.trim(),
      name: name || email.split('@')[0],
      isVip: isSpecialVip,
      entitlements: isSpecialVip ? VIP_ENTITLEMENTS : BASIC_ENTITLEMENTS
    };

    const nextAccounts = [...accounts, newAcc];
    setAccounts(nextAccounts);
    
    const userProfile: UserProfile = {
      email: newAcc.email,
      name: newAcc.name,
      isVip: newAcc.isVip,
      isAdmin: normalizedEmail.includes('admin') || normalizedEmail === 'admin@portalpet.com' || normalizedEmail === 'jkslost1222@gmail.com',
      entitlements: newAcc.entitlements
    };
    setEntitlements(newAcc.entitlements);
    setUser(userProfile);
    return true;
  };

  const loginAsTestUser = (mode: 'basic' | 'vip') => {
    if (mode === 'vip') {
      const vipUser: UserProfile = {
        email: 'admin@portalpet.com',
        name: 'Administrador VIP',
        isVip: true,
        isAdmin: true,
        entitlements: VIP_ENTITLEMENTS
      };
      setEntitlements(VIP_ENTITLEMENTS);
      setUser(vipUser);
    } else {
      const basicUser: UserProfile = {
        email: 'aluno@portalpet.com',
        name: 'Aluno Portal Pet',
        isVip: false,
        isAdmin: false,
        entitlements: BASIC_ENTITLEMENTS
      };
      setEntitlements(BASIC_ENTITLEMENTS);
      setUser(basicUser);
    }
  };

  const login = (email: string, name?: string) => {
    const isSpecialVip = true;
    const newUser: UserProfile = {
      email,
      name: name || email.split('@')[0],
      isVip: isSpecialVip,
      isAdmin: email.toLowerCase().includes('admin') || email.toLowerCase() === 'jkslost1222@gmail.com',
      entitlements: VIP_ENTITLEMENTS
    };
    setEntitlements(VIP_ENTITLEMENTS);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    setActiveModuleId(null);
    localStorage.removeItem('pet_portal_user');
  };

  const hasEntitlement = (id: string) => {
    // If user is VIP or Admin, EVERYTHING is 100% unlocked with NO checkout locks
    if (user?.isVip || isAdmin) return true;
    return Boolean(entitlements[id]);
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
        isAdmin,
        adminPassword: adminMasterPassword,
        setAdminMasterPassword,
        verifyAdminAccess,
        accounts,
        deleteAccount,
        toggleAccountVip,
        createStudentByAdmin,
        updateAccountPassword,
        login,
        loginWithCredentials,
        registerAccount,
        loginAsTestUser,
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
