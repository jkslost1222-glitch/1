export type Language = 'es' | 'pt' | 'en';

export interface UserProfile {
  name: string;
  email: string;
  isVip: boolean;
  startDate: string;
  targetWeightLossKg: number;
  currentWeightKg: number;
  completedDays: number[];
  unlockedModules: string[];
}

export type ModuleCategory = 'protocolo' | 'recetas' | 'herramientas' | 'bonus' | 'soporte';

export interface RecipeStep {
  stepNumber: number;
  title: string;
  description: string;
  durationMinutes?: number;
  tip?: string;
}

export interface RecipeIngredient {
  name: string;
  amount: string;
  importance?: string;
  substitute?: string;
}

export interface BariatricRecipe {
  id: string;
  title: string;
  category: string;
  badge: string;
  prepTime: string;
  calories: string;
  satietyIndex: string; // e.g. "98% Saciedad"
  description: string;
  imageUrl: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  goldenRule: string;
  consumptionSchedule: string;
}

export interface DailyPlanDay {
  day: number;
  phase: string;
  phaseNumber: number;
  title: string;
  focus: string;
  morningShot: string;
  gelatinDoseMorning: string;
  gelatinDoseAfternoon: string;
  drainTea: string;
  sosTip: string;
  actionChecklist: string[];
}

export interface ShotRecipe {
  id: string;
  name: string;
  time: string;
  benefits: string[];
  ingredients: string[];
  preparation: string;
}

export interface TeaRecipe {
  id: string;
  name: string;
  effect: string;
  ingredients: string[];
  instructions: string;
  bestTime: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ShoppingItem {
  id: string;
  item: string;
  category: 'esenciales' | 'frutas_y_sabores' | 'activadores' | 'opcionales';
  estimatedCost: string;
  notes: string;
}

export type ActiveModalType = 'install' | 'nutriChat' | 'admin' | 'support' | 'dosageCalc' | 'shoppingList' | null;
