export type Language = 'pt' | 'en';

export type DeliverableType =
  | 'cao-blindado'
  | 'coach-canino'
  | 'anticoceira'
  | 'coceira-xixi'
  | 'mobilidade'
  | 'antiotite'
  | 'aulas-ao-vivo'
  | 'frequencias'
  | 'presentes'
  | 'pet-em-dia'
  | 'antibafo'
  | 'comer-coco'
  | 'suporte';

export interface MaterialItem {
  name: string;
  size: string;
  type: 'PDF' | 'AUDIO' | 'VIDEO' | 'DOC';
  downloadUrl?: string;
}

export interface LessonItem {
  id?: string;
  title: string;
  duration: string;
  description?: string;
  videoThumbnail?: string;
  completed?: boolean;
}

export interface AudioTrack {
  id: string;
  title: string;
  freq: string;
  hz: number;
  duration: string;
  description: string;
  color: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DeliverableItem {
  id: DeliverableType;
  title: string;
  subtitle: string;
  type: DeliverableType;
  isLocked: boolean;
  category: string;
  badge?: string;
  tagline?: string;
  description: string;
  icon?: string;
  color?: string;
  content: {
    overview: string;
    lessons?: LessonItem[];
    materials?: MaterialItem[];
    audioTracks?: AudioTrack[];
    newsArticles?: NewsArticle[];
    faqs?: FaqItem[];
    steps?: string[];
  };
}

export interface RecipeItem {
  id: number;
  number: number;
  name: string;
  categoryName: string;
  badge: string;
  icon: string;
  accentColor: string;
  targetBenefit: string;
  baseDosageGramsPer10kg: number;
  ingredients: {
    name: string;
    amountPer10kg: string;
    rawAmount: number;
    unit: string;
    purpose: string;
  }[];
  instructions: string[];
  tips: string[];
  warning: string;
}

export interface UpsellConfigItem {
  key: string;
  id: DeliverableType;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  badgeText: string;
  shortDescription: string;
  fullBenefits: string[];
  icon: string;
  accentColor: string;
  checkoutUrl: string;
  salesPageUrl?: string;
  guaranteeDays: number;
  price?: string;
  originalPrice?: string;
}

export interface UserProfile {
  email: string;
  name: string;
  isVip: boolean;
  entitlements: Record<string, boolean>;
}
