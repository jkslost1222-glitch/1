import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  PlayCircle,
  Download,
  CheckCircle2,
  AlertTriangle,
  Info,
  Sparkles,
  ShieldCheck,
  Droplets,
  HeartPulse,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  X,
  Smartphone,
  RotateCcw,
  Utensils,
  Wind,
  CookingPot,
  Lightbulb,
  Check
} from 'lucide-react';

interface OtiteProtocolViewProps {
  onClose: () => void;
}

interface PetProfile {
  name: string;
  gender: 'Macho' | 'Fêmea';
  age: 'Filhote (até 1 ano)' | 'Adulto (1 a 7 anos)' | 'Idoso (mais de 7 anos)';
  weight: number;
}

export const OtiteProtocolView: React.FC<OtiteProtocolViewProps> = ({ onClose }) => {
  const { t, isEn, openInstallModal } = useApp();

  // Load saved pet profile from localStorage if exists
  const [pet, setPet] = useState<PetProfile | null>(() => {
    try {
      const saved = localStorage.getItem('pet_otite_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return null;
  });

  // Onboarding Quiz state
  const [quizStep, setQuizStep] = useState<number>(1);
  const [nameInput, setNameInput] = useState('');
  const [genderInput, setGenderInput] = useState<'Macho' | 'Fêmea'>('Macho');
  const [ageInput, setAgeInput] = useState<'Filhote (até 1 ano)' | 'Adulto (1 a 7 anos)' | 'Idoso (mais de 7 anos)'>('Adulto (1 a 7 anos)');
  const [weightInput, setWeightInput] = useState<string>('5');

  // Main Tabs: 'bifinho' | 'spray' | 'preparar' | 'dicas' | 'videoaulas'
  const [activeTab, setActiveTab] = useState<'bifinho' | 'spray' | 'preparar' | 'dicas' | 'videoaulas'>('bifinho');
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // If user has a pet, sync inputs
  useEffect(() => {
    if (pet) {
      setNameInput(pet.name);
      setGenderInput(pet.gender);
      setAgeInput(pet.age);
      setWeightInput(pet.weight.toString());
    }
  }, [pet]);

  const handleFinishQuiz = () => {
    const finalName = nameInput.trim() || (isEn ? 'Your pup' : 'Seu cãozinho');
    const finalWeight = parseFloat(weightInput) || 5;
    const newProfile: PetProfile = {
      name: finalName,
      gender: genderInput,
      age: ageInput,
      weight: finalWeight
    };
    setPet(newProfile);
    localStorage.setItem('pet_otite_profile', JSON.stringify(newProfile));
  };

  const handleResetPet = () => {
    setPet(null);
    setQuizStep(1);
  };

  // Dynamic ingredient scaling according to pet's weight
  const getBifinhoIngredients = (weight: number) => {
    if (isEn) {
      if (weight <= 5) {
        return {
          label: 'Up to 5 kg (11 lbs)',
          mel: '1/2 tablespoon',
          iogurte: '1 tablespoon',
          aveia: '2 tablespoons',
          oleoCoco: '1/2 small teaspoon',
          rendimento: 'Yields ~10 to 12 small treats',
          doseDiaria: '1 treat per day'
        };
      } else if (weight <= 15) {
        return {
          label: '5 kg to 15 kg (11-33 lbs)',
          mel: '1 tablespoon',
          iogurte: '2 tablespoons',
          aveia: '4 tablespoons',
          oleoCoco: '1 teaspoon',
          rendimento: 'Yields ~15 medium treats',
          doseDiaria: '1 to 2 treats per day'
        };
      } else if (weight <= 25) {
        return {
          label: '15 kg to 25 kg (33-55 lbs)',
          mel: '1 and 1/2 tablespoons',
          iogurte: '3 tablespoons',
          aveia: '6 tablespoons',
          oleoCoco: '1 heaping teaspoon',
          rendimento: 'Yields ~20 treats',
          doseDiaria: '2 treats per day'
        };
      } else {
        return {
          label: 'Over 25 kg (55+ lbs)',
          mel: '2 tablespoons',
          iogurte: '4 tablespoons',
          aveia: '8 tablespoons',
          oleoCoco: '1 tablespoon',
          rendimento: 'Yields ~25 large treats',
          doseDiaria: '2 to 3 treats per day'
        };
      }
    }

    if (weight <= 5) {
      return {
        label: 'Até 5 kg',
        mel: '1/2 colher de sopa',
        iogurte: '1 colher de sopa',
        aveia: '2 colheres de sopa',
        oleoCoco: '1/2 colher de café',
        rendimento: 'Rende ~10 a 12 bifinhos pequenos',
        doseDiaria: '1 bifinho ao dia'
      };
    } else if (weight <= 15) {
      return {
        label: '5 kg a 15 kg',
        mel: '1 colher de sopa',
        iogurte: '2 colheres de sopa',
        aveia: '4 colheres de sopa',
        oleoCoco: '1 colher de café',
        rendimento: 'Rende ~15 bifinhos médios',
        doseDiaria: '1 a 2 bifinhos ao dia'
      };
    } else if (weight <= 25) {
      return {
        label: '15 kg a 25 kg',
        mel: '1 e 1/2 colher de sopa',
        iogurte: '3 colheres de sopa',
        aveia: '6 colheres de sopa',
        oleoCoco: '1 colher de chá',
        rendimento: 'Rende ~20 bifinhos',
        doseDiaria: '2 bifinhos ao dia'
      };
    } else {
      return {
        label: 'Acima de 25 kg',
        mel: '2 colheres de sopa',
        iogurte: '4 colheres de sopa',
        aveia: '8 colheres de sopa',
        oleoCoco: '1 colher de sopa',
        rendimento: 'Rende ~25 bifinhos grandes',
        doseDiaria: '2 a 3 bifinhos ao dia'
      };
    }
  };

  const currentIngredients = getBifinhoIngredients(pet?.weight || 5);

  const lessons = isEn
    ? [
        {
          id: 1,
          title: 'Lesson 1: Anatomy of the L-Shaped Canal & Early Otitis Signs',
          duration: '08:45',
          summary: 'Understand why the canine L-shaped ear canal traps moisture and accelerates yeast (Malassezia) and bacterial growth.',
          keyPoints: [
            'The vertical canal descends and takes a 90° turn into the horizontal canal toward the eardrum.',
            'Cotton swabs push wax deep into the L-bend causing painful impactions.',
            'Pain-free weekly checks: smell assessment and pinna visualization.'
          ]
        },
        {
          id: 2,
          title: 'Lesson 2: Painless & Safe Ear Cleaning Technique',
          duration: '12:20',
          summary: 'Step-by-step method to apply lukewarm cleaning solution, massage the ear base, and let your dog shake out debris naturally.',
          keyPoints: [
            'Warm the cleaning solution between your palms to avoid cold shock.',
            'Fill the canal gently without touching the bottle tip to the ear.',
            'Massage the ear base for 30 seconds (listen for the squishy liquid sound).',
            'Let your dog shake their head and gently wipe away dislodged external wax with gauze.'
          ]
        },
        {
          id: 3,
          title: 'Lesson 3: Natural Green Propolis & Calendula Soothing Drops',
          duration: '10:15',
          summary: 'Natural antiseptic and soothing formula with anti-fungal and healing properties for ear flap application.',
          keyPoints: [
            'Alcohol-free standardized aqueous green propolis extract.',
            'Pure calendula or jojoba carrier oil to replenish delicate lipid skin barriers.',
            'Gentle application of 2 to 3 drops to the pinna with light massage.'
          ]
        },
        {
          id: 4,
          title: 'Lesson 4: Post-Bath Care & Prevention in Floppy-Eared Breeds',
          duration: '14:30',
          summary: 'Protecting dogs with heavy, drop ears (Cocker, Golden, Beagle, Basset, Shih Tzu) from trapped post-bath moisture.',
          keyPoints: [
            'Use dry hydrophobic cotton balls during baths.',
            'Controlled thermal drying and proper ear flap ventilation.',
            'Bi-weekly preventive maintenance routine.'
          ]
        }
      ]
    : [
        {
          id: 1,
          title: 'Aula 1: Anatomia do Canal em L & Sinais Precoces de Otite',
          duration: '08:45',
          summary: 'Entenda por que o formato anatômico do canal canino facilita a proliferação de fungos (Malassezia) e bactérias quando há umidade ou cera acumulada.',
          keyPoints: [
            'O canal vertical desce e faz uma curva de 90° em canal horizontal até o tímpano.',
            'Cotonetes empurram a cera para o fundo da curva em L e causam impacto doloroso.',
            'Inspeção semanal sem dor: olfato e visualização do pavilhão auricular.'
          ]
        },
        {
          id: 2,
          title: 'Aula 2: Técnica de Higienização Sem Dor e Sem Trauma',
          duration: '12:20',
          summary: 'Passo a passo seguro para aplicar solução limpadora morna, massagear a base cartilaginosa e deixar o cão chacoalhar naturalmente.',
          keyPoints: [
            'Aqueça levemente a solução de limpeza nas mãos para não dar choque térmico.',
            'Preencha o canal sem encostar o bico do frasco para não contaminar.',
            'Massageie a base do ouvido por 30 segundos (ouça o som característico de líquido).',
            'Deixe o cão chacoalhar a cabeça e remova apenas o excesso externo com algodão ou gaze.'
          ]
        },
        {
          id: 3,
          title: 'Aula 3: Gotas Naturais de Própolis Verde & Calêndula',
          duration: '10:15',
          summary: 'Fórmula calmante natural antisséptica com ação cicatrizante e antifúngica para aplicação nas orelhas.',
          keyPoints: [
            'Própolis verde sem álcool (extrato aquoso ou glicólico padronizado).',
            'Óleo carreador puro de calêndula ou jojoba para restaurar a barreira lipídica.',
            'Aplicação suave de 2 a 3 gotas no pavilhão com massagem leve.'
          ]
        },
        {
          id: 4,
          title: 'Aula 4: Prevenção Pós-Banho & Cuidados em Cães de Orelha Caída',
          duration: '14:30',
          summary: 'Como proteger cães com orelhas pendulosas (Cocker, Golden, Beagle, Basset, Shih Tzu) contra umidade retida pós-banho.',
          keyPoints: [
            'Uso de algodão hidrófobo (impermeável) durante o banho.',
            'Secagem térmica controlada e ventilação das orelhas.',
            'Rotina de manutenção quinzenal preventiva.'
          ]
        }
      ];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col animate-fade-in">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#00c5b3] via-[#0f766e] to-[#0f4c5c] p-6 sm:p-7 text-white relative">
        <button
          id="btn-close-otite-view"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          title={isEn ? "Close" : "Fechar"}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-1.5">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            👂
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 text-teal-100 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>{isEn ? "Official Goodbye Otitis Protocol" : "Protocolo Oficial Adeus Otite"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isEn ? "Canine Ear Care & Health" : "Cuidados com os Ouvidos Canino"}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-teal-100 max-w-3xl leading-relaxed mt-1 font-medium">
          {isEn
            ? "Let's take care of your pup! Natural recipes, weight-personalized dosages, painless ear hygiene, and definitive relapse prevention."
            : "Vamos cuidar do seu cãozinho! Receitas naturais, dosagens personalizadas por peso, higiene sem dor e prevenção definitiva de recidivas."}
        </p>

        {/* If pet is configured, show tab navigation */}
        {pet && (
          <div className="flex items-center gap-2 overflow-x-auto mt-5 pt-3 border-t border-white/20 scrollbar-none">
            <button
              id="tab-btn-bifinho"
              onClick={() => setActiveTab('bifinho')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'bifinho'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{isEn ? "Treat Recipe" : "Bifinho"}</span>
            </button>

            <button
              id="tab-btn-spray"
              onClick={() => setActiveTab('spray')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'spray'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>{isEn ? "Soothing Spray" : "Spray"}</span>
            </button>

            <button
              id="tab-btn-preparar"
              onClick={() => setActiveTab('preparar')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'preparar'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <CookingPot className="w-3.5 h-3.5" />
              <span>{isEn ? "Preparation" : "Preparar"}</span>
            </button>

            <button
              id="tab-btn-dicas"
              onClick={() => setActiveTab('dicas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'dicas'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{isEn ? "Care Tips" : "Dicas"}</span>
            </button>

            <button
              id="tab-btn-videoaulas"
              onClick={() => setActiveTab('videoaulas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeTab === 'videoaulas'
                  ? 'bg-white text-teal-950 shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>{isEn ? "4 Video Lessons" : "4 Videoaulas"}</span>
            </button>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* ONBOARDING QUIZ (When pet is not yet configured)        */}
      {/* ======================================================== */}
      {!pet && (
        <div className="p-6 sm:p-12 max-w-xl mx-auto w-full">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map(step => (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  quizStep === step
                    ? 'w-8 bg-[#00c5b3]'
                    : quizStep > step
                    ? 'w-4 bg-teal-300'
                    : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-3xl bg-teal-50 border border-teal-200 flex items-center justify-center text-3xl mx-auto mb-3 shadow-inner">
              🐶
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {isEn ? "Goodbye Otitis" : "Adeus Otite"}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {isEn ? "Let's customize the exact natural dosages for your dog" : "Vamos personalizar as dosagens para o seu cãozinho"}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {/* Step 1: Nome */}
            {quizStep === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-slate-800">
                    {isEn ? "What is your dog's name?" : "Qual o nome do seu cão?"}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isEn ? "Nicknames work great too" : "Pode ser apelido também"}
                  </p>
                </div>

                <div className="space-y-2">
                  <input
                    id="input-pet-name"
                    type="text"
                    autoFocus
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    placeholder={isEn ? "e.g., Thor, Luna, Max..." : "Ex: Thor, Luna, Max..."}
                    className="w-full bg-white border-2 border-teal-300 focus:border-teal-500 rounded-2xl px-4 py-3.5 text-center text-base sm:text-lg font-bold text-slate-900 shadow-xs focus:outline-none"
                  />
                </div>

                <button
                  id="btn-quiz-step1-next"
                  onClick={() => setQuizStep(2)}
                  className="w-full bg-[#00c5b3] hover:bg-teal-500 text-teal-950 font-black py-3.5 rounded-2xl text-sm sm:text-base shadow-md transition-all cursor-pointer"
                >
                  {isEn ? "Continue" : "Continuar"}
                </button>
              </div>
            )}

            {/* Step 2: Sexo */}
            {quizStep === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-slate-800">
                    {isEn ? `What is the sex of ${nameInput || 'your pet'}?` : `Qual o sexo de ${nameInput || 'seu pet'}?`}
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGenderInput('Macho')}
                    className={`py-4 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                      genderInput === 'Macho'
                        ? 'bg-teal-50 border-teal-500 text-teal-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-teal-200'
                    }`}
                  >
                    <span>{isEn ? "♂ Male" : "♂ Macho"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGenderInput('Fêmea')}
                    className={`py-4 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                      genderInput === 'Fêmea'
                        ? 'bg-teal-50 border-teal-500 text-teal-950 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-teal-200'
                    }`}
                  >
                    <span>{isEn ? "♀ Female" : "♀ Fêmea"}</span>
                  </button>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => setQuizStep(1)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 rounded-2xl text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                  <button
                    onClick={() => setQuizStep(3)}
                    className="flex-2 bg-[#00c5b3] hover:bg-teal-500 text-teal-950 font-black py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isEn ? "Continue" : "Continuar"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Idade */}
            {quizStep === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-slate-800">
                    {isEn ? `How old is ${nameInput || 'your pet'}?` : `Qual a idade de ${nameInput || 'seu pet'}?`}
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {[
                    { val: 'Filhote (até 1 ano)', label: isEn ? 'Puppy (under 1 year)' : 'Filhote (até 1 ano)' },
                    { val: 'Adulto (1 a 7 anos)', label: isEn ? 'Adult (1 to 7 years)' : 'Adulto (1 a 7 anos)' },
                    { val: 'Idoso (mais de 7 anos)', label: isEn ? 'Senior (over 7 years)' : 'Idoso (mais de 7 anos)' }
                  ].map(option => (
                    <button
                      key={option.val}
                      type="button"
                      onClick={() => setAgeInput(option.val as any)}
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm text-left flex items-center justify-between border-2 transition-all cursor-pointer ${
                        ageInput === option.val
                          ? 'bg-teal-50 border-teal-500 text-teal-950 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-teal-200'
                      }`}
                    >
                      <span>{option.label}</span>
                      {ageInput === option.val && <Check className="w-4 h-4 text-teal-600" />}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => setQuizStep(2)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 rounded-2xl text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                  <button
                    onClick={() => setQuizStep(4)}
                    className="flex-2 bg-[#00c5b3] hover:bg-teal-500 text-teal-950 font-black py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isEn ? "Continue" : "Continuar"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Peso */}
            {quizStep === 4 && (
              <div className="space-y-5 animate-fade-in">
                <div className="text-center space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-slate-800">
                    {isEn ? `How many kilograms does ${nameInput || 'your dog'} weigh?` : `Quantos quilos ${nameInput || 'ele'} pesa?`}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isEn ? "Approximately, if you do not know the exact weight" : "Aproximadamente, se não souber o peso exato"}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      id="input-pet-weight"
                      type="number"
                      min="1"
                      max="120"
                      autoFocus
                      value={weightInput}
                      onChange={e => setWeightInput(e.target.value)}
                      placeholder="Ex: 5"
                      className="w-full bg-white border-2 border-teal-300 focus:border-teal-500 rounded-2xl px-4 py-3.5 text-center text-lg sm:text-xl font-black text-slate-900 shadow-xs focus:outline-none"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                      kg
                    </span>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => setQuizStep(3)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 rounded-2xl text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                  <button
                    onClick={() => setQuizStep(5)}
                    className="flex-2 bg-[#00c5b3] hover:bg-teal-500 text-teal-950 font-black py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isEn ? "Continue" : "Continuar"}
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Tudo certo? Confirmação */}
            {quizStep === 5 && (
              <div className="space-y-6 text-center animate-fade-in">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">
                    {isEn ? "All set? 🎉" : "Tudo certo? 🎉"}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {isEn ? "Review your pup's details before starting" : "Confira as informações do seu pet antes de começar"}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-teal-200 shadow-xs space-y-2 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-3xl mx-auto shadow-inner">
                    🐶
                  </div>
                  <h5 className="text-base font-black text-slate-900">
                    {nameInput || (isEn ? 'Your Pet' : 'Seu Pet')}
                  </h5>
                  <p className="text-xs font-bold text-teal-700 bg-teal-50 py-1 px-3 rounded-xl inline-block">
                    {genderInput} • {ageInput.split(' ')[0]} • {weightInput || 5} kg
                  </p>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => setQuizStep(4)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 rounded-2xl text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                  <button
                    id="btn-quiz-start"
                    onClick={handleFinishQuiz}
                    className="flex-2 bg-gradient-to-r from-[#00c5b3] to-teal-700 hover:from-teal-400 hover:to-teal-600 text-white font-black py-3.5 rounded-2xl text-sm sm:text-base shadow-lg shadow-teal-700/20 transition-all cursor-pointer hover:scale-[1.01]"
                  >
                    {isEn ? "Start Protocol! 🚀" : "Começar! 🚀"}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN PROTOCOL CONTENT (When pet profile is filled)      */}
      {/* ======================================================== */}
      {pet && (
        <div className="p-5 sm:p-8 space-y-6">
          
          {/* Top Pet Profile Card & Recalculate Bar */}
          <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-2xl shadow-sm">
                🐶
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  {pet.name}
                </h4>
                <p className="text-xs text-teal-800 font-medium">
                  {pet.gender} • {pet.age} • <strong>{pet.weight} kg</strong> ({currentIngredients.label})
                </p>
              </div>
            </div>

            <button
              onClick={handleResetPet}
              className="text-xs font-bold text-teal-800 hover:text-teal-950 bg-white border border-teal-200 hover:bg-teal-50 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isEn ? "Switch dog or recalculate dosage" : "Trocar cãozinho ou recalcular dosagem"}
            >
              <RotateCcw className="w-3.5 h-3.5 text-teal-600" />
              <span>{isEn ? "Switch Dog Profile" : "Trocar Cãozinho"}</span>
            </button>
          </div>

          {/* Offline PWA Installation Banner */}
          <div className="bg-gradient-to-r from-teal-900 to-[#0f4c5c] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md border border-teal-700/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white">
                  {isEn ? "Install the app on your home screen for offline access" : "Instale o aplicativo na tela inicial para usar offline"}
                </h4>
                <p className="text-[11px] text-teal-200 mt-0.5">
                  {isEn
                    ? "How to install: Open this site on mobile (Chrome or Safari) and tap 'Add to Home Screen'."
                    : "Como instalar: Abra este site no celular (Chrome ou Safari) e use a opção de adicionar à tela inicial."}
                </p>
              </div>
            </div>
            <button
              onClick={openInstallModal}
              className="bg-[#00c5b3] hover:bg-teal-300 text-teal-950 font-black text-xs px-4 py-2 rounded-xl shadow-md transition-all shrink-0 cursor-pointer self-stretch sm:self-auto text-center"
            >
              {isEn ? "Install App" : "Instalar App"}
            </button>
          </div>

          {/* TAB 1: BIFINHO (RECEITA DO BIFINHO DO LYNDOR) */}
          {activeTab === 'bifinho' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-black uppercase text-teal-700 tracking-wider">
                      {isEn ? "Daily Functional Formula" : "Fórmula Funcional Diária"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                      {isEn ? "Lyndor's Soothing Ear Treat" : "Bifinho do Lyndor (Desinflamatório)"}
                    </h3>
                  </div>
                  <span className="bg-teal-100 text-teal-950 font-black text-xs px-3 py-1 rounded-xl">
                    {isEn ? "Weight Range" : "Faixa"}: {currentIngredients.label}
                  </span>
                </div>

                {/* Ingredients Table */}
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                    {isEn
                      ? `Exact Ingredients for ${pet.name} (${pet.weight} kg):`
                      : `Ingredientes Exatos para ${pet.name} (${pet.weight} kg):`}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🍯</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{isEn ? "Pure Natural Honey" : "Mel puro"}</p>
                          <p className="text-[11px] text-slate-500">{isEn ? "Antibacterial & natural prebiotic" : "Antibacteriano e prebiótico natural"}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-teal-800 bg-white px-2.5 py-1 rounded-xl border border-slate-200">
                        {currentIngredients.mel}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🥛</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{isEn ? "Plain Whole Yogurt" : "Iogurte integral natural"}</p>
                          <p className="text-[11px] text-slate-500">{isEn ? "Live gut flora probiotics" : "Probiótico vivo de flora intestinal"}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-teal-800 bg-white px-2.5 py-1 rounded-xl border border-slate-200">
                        {currentIngredients.iogurte}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🌾</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{isEn ? "Fine Rolled Oats" : "Aveia em flocos finos"}</p>
                          <p className="text-[11px] text-slate-500">{isEn ? "Prebiotic fibers supporting skin barrier" : "Fibras que acalmam a barreira dérmica"}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-teal-800 bg-white px-2.5 py-1 rounded-xl border border-slate-200">
                        {currentIngredients.aveia}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🥥</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{isEn ? "Extra Virgin Coconut Oil" : "Óleo de coco extra-virgem"}</p>
                          <p className="text-[11px] text-slate-500">{isEn ? "Natural antifungal lauric acid" : "Ácido láurico antifúngico natural"}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-black text-teal-800 bg-white px-2.5 py-1 rounded-xl border border-slate-200">
                        {currentIngredients.oleoCoco}
                      </span>
                    </div>
                  </div>
                </div>

                {/* How to offer */}
                <div className="bg-teal-50/80 rounded-2xl p-4 border border-teal-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-teal-950 space-y-1">
                    <p className="font-black text-sm">{isEn ? `How to feed ${pet.name}:` : `Como Oferecer a ${pet.name}:`}</p>
                    <p className="text-teal-900 leading-relaxed font-medium">
                      {isEn ? (
                        <>Offer <strong>{currentIngredients.doseDiaria}</strong>. Can be given daily as an immunity booster or as a calming treat before ear cleaning.</>
                      ) : (
                        <>Ofereça <strong>{currentIngredients.doseDiaria}</strong>. Pode ser dado diariamente como reforço de imunidade ou como petisco calmante antes do procedimento de limpeza dos ouvidos.</>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 font-medium">
                    {currentIngredients.rendimento}
                  </span>
                  <button
                    onClick={() => setActiveTab('preparar')}
                    className="bg-[#00c5b3] hover:bg-teal-400 text-teal-950 font-black text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{isEn ? "View Preparation Steps" : "Ver Modo de Preparo"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: SPRAY (SPRAY CALMANTE AURICULAR) */}
          {activeTab === 'spray' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[11px] font-black uppercase text-teal-700 tracking-wider">
                      {isEn ? "External Topical Use" : "Uso Tópico Externo"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                      {isEn ? "Soothing Ear Spray & Wipe" : "Spray Calmante Auricular"}
                    </h3>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 font-black text-xs px-3 py-1 rounded-xl">
                    {isEn ? "100% Natural & Gentle" : "100% Natural & Seguro"}
                  </span>
                </div>

                {/* Ingredients */}
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                    {isEn ? "Ingredients & Proportions:" : "Ingredientes e Proporções:"}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-xl">🌼</span>
                      <p className="text-xs font-bold text-slate-800">{isEn ? "Concentrated Chamomile Tea" : "Chá de Camomila Concentrado"}</p>
                      <p className="text-sm font-black text-teal-800">150 ml</p>
                      <p className="text-[10px] text-slate-400">{isEn ? "Soothes itchiness and burning" : "Acalma a coceira e o ardor"}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-xl">🍏</span>
                      <p className="text-xs font-bold text-slate-800">{isEn ? "Organic Apple Cider Vinegar" : "Vinagre de Maçã Orgânico"}</p>
                      <p className="text-sm font-black text-teal-800">{isEn ? "1 teaspoon" : "1 colher de chá"}</p>
                      <p className="text-[10px] text-slate-400">{isEn ? "Balances ear pH against fungi" : "Equilibra o pH contra fungos"}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-xl">💧</span>
                      <p className="text-xs font-bold text-slate-800">{isEn ? "0.9% Sterile Saline Solution" : "Soro Fisiológico 0,9%"}</p>
                      <p className="text-sm font-black text-teal-800">50 ml</p>
                      <p className="text-[10px] text-slate-400">{isEn ? "Gentle isotonic liquid base" : "Base isotônica não agressiva"}</p>
                    </div>
                  </div>
                </div>

                {/* Application Guide */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                    {isEn ? "Correct Application Method:" : "Modo de Aplicação Correto:"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {isEn ? (
                      <>Dampen a <strong>clean cotton pad or gauze</strong> with the solution and gently wipe the visible ear flap (pinna) <strong>1 to 2 times daily</strong>. Never force swabs into the deep ear canal.</>
                    ) : (
                      <>Umedeça um <strong>algodão limpo ou gaze</strong> com a solução e limpe delicadamente a parte visível da orelha (pavilhão auricular) de <strong>1 a 2 vezes ao dia</strong>. Nunca force para dentro do canal auditivo profundo.</>
                    )}
                  </p>

                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 text-xs text-rose-950 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      {isEn ? (
                        <><strong>Warning:</strong> DO NOT spray directly into the deep ear canal or near the dog's eyes. Always apply using a moistened cotton pad.</>
                      ) : (
                        <><strong>Atenção:</strong> NÃO BORRIFE o spray diretamente no canal do ouvido nem próximo aos olhos do cão. Utilize sempre o algodão umedecido.</>
                      )}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: PREPARAR (MODO DE PREPARO) */}
          {activeTab === 'preparar' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-black uppercase text-teal-700 tracking-wider">
                    {isEn ? "Kitchen Step-by-Step" : "Passo a Passo da Cozinha"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    {isEn ? "How to Prepare the Soothing Treat" : "Modo de Preparo do Bifinho"}
                  </h3>
                </div>

                <div className="space-y-3">
                  {(isEn ? [
                    {
                      step: 1,
                      title: 'Liquid Blending',
                      text: 'Mix the honey and whole yogurt in a clean bowl until completely smooth and creamy.'
                    },
                    {
                      step: 2,
                      title: 'Adding the Oats',
                      text: 'Gradually stir in the fine rolled oats, kneading until a moldable dough texture forms.'
                    },
                    {
                      step: 3,
                      title: 'Coconut Oil Infusion',
                      text: 'Stir in the liquid virgin coconut oil last (gently warm if solidified).'
                    },
                    {
                      step: 4,
                      title: 'Shaping the Treats',
                      text: `Shape into bite-sized balls or strips the size of small grapes and place on a parchment-lined baking sheet.`
                    },
                    {
                      step: 5,
                      title: 'Baking',
                      text: 'Bake at 180°C (350°F) for 15 to 20 minutes in a standard oven (or 14 to 16 minutes in an Air Fryer) until lightly golden.'
                    },
                    {
                      step: 6,
                      title: 'Cooling & Storing',
                      text: `Let cool completely before serving to ${pet.name}. Store in an airtight container in the refrigerator for up to 5 days.`
                    }
                  ] : [
                    {
                      step: 1,
                      title: 'Mistura dos Líquidos',
                      text: 'Misture o mel + o iogurte numa tigela até virar um creme homogêneo e uniforme.'
                    },
                    {
                      step: 2,
                      title: 'Adição da Aveia',
                      text: 'Adicione a aveia em flocos finos de pouco em pouco, mexendo bem até virar uma massa moldável (textura de massinha de modelar).'
                    },
                    {
                      step: 3,
                      title: 'Óleo de Coco',
                      text: 'Adicione o óleo de coco por último (se estiver em estado sólido/duro, aqueça alguns segundos até ficar líquido).'
                    },
                    {
                      step: 4,
                      title: 'Modelagem dos Bifinhos',
                      text: `Modele bolinhas ou tirinhas do tamanho de uma uva pequena e disponha em um tabuleiro forrado com papel manteiga.`
                    },
                    {
                      step: 5,
                      title: 'Assar',
                      text: 'Asse a 180°C por 15 a 20 minutos no forno convencional (ou 14 a 16 minutos na Airfryer) até dourar levemente por fora.'
                    },
                    {
                      step: 6,
                      title: 'Resfriamento e Armazenamento',
                      text: 'Espere esfriar completamente antes de oferecer a ' + pet.name + '. Guarde em um pote hermético na geladeira por até 5 dias.'
                    }
                  ]).map(item => (
                    <div key={item.step} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-teal-700 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Important Tip */}
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-950 space-y-0.5">
                    <p className="font-bold">{isEn ? "Veterinary Tip:" : "Dica Importante:"}</p>
                    <p className="text-amber-900 leading-relaxed">
                      {isEn
                        ? "Avoid pouring liquids into the ear canal if there is active purulent discharge. The functional treat works from the inside out, restoring healthy gut and mucosal immunity."
                        : "Evite colocar qualquer substância líquida dentro do canal se houver secreção com pus ativo sem a limpeza diária prévia. O bifinho atua de dentro para fora, restabelecendo a imunidade intestinal do pet."}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: DICAS (GUIA DE CUIDADOS E PREVENÇÃO) */}
          {activeTab === 'dicas' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-black uppercase text-teal-700 tracking-wider">
                    {isEn ? "Definitive Prevention" : "Prevenção Definitiva"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    {isEn ? "Care & Relapse Prevention Guide" : "Guia de Cuidados e Prevenção"}
                  </h3>
                </div>

                <div className="space-y-4">
                  
                  {/* Dica 1 */}
                  <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                    <h4 className="text-sm font-black text-teal-950 flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-teal-700" />
                      {isEn ? "Strict Bath Protection" : "Cuidado Rigoroso no Banho"}
                    </h4>
                    <p className="text-xs sm:text-sm text-teal-900/90 leading-relaxed font-medium">
                      {isEn ? (
                        <>Always place <strong>dry cotton balls</strong> inside {pet.name}'s ears before starting any bath. Remove immediately after rinsing and thoroughly dry the ear flaps to prevent trapped water in the L-canal.</>
                      ) : (
                        <>Sempre coloque <strong>chumaços de algodão secos</strong> nos ouvidos de {pet.name} antes de iniciar o banho. Após o enxágue, retire os algodões e seque muito bem a região com uma toalha macia para não deixar umidade retida no canal em L.</>
                      )}
                    </p>
                  </div>

                  {/* Dica 2 */}
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <h4 className="text-sm font-black text-emerald-950 flex items-center gap-2">
                      <HeartPulse className="w-4 h-4 text-emerald-700" />
                      {isEn ? "Gut Microbiome & Ear Immunity Axis" : "Imunidade e Flora Intestinal"}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed font-medium">
                      {isEn ? (
                        <>Over 80% of recurrent canine ear troubles stem from gut microbiome dysbiosis and allergic skin reactions. The functional recipe with honey and live yogurt reinforces natural immunity against fungal overgrowth.</>
                      ) : (
                        <>Cerca de 80% das otites recorrentes têm origem em desequilíbrios alérgicos da microbiota intestinal. O bifinho funcional com mel e probiótico atua fortalecendo a barreira imunológica, evitando crises fúngicas.</>
                      )}
                    </p>
                  </div>

                  {/* Dica 3 */}
                  <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                    <h4 className="text-sm font-black text-rose-950 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-700" />
                      {isEn ? "Clinical Warning Signs" : "Sinais de Alerta para Avaliação Presencial"}
                    </h4>
                    <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed font-medium">
                      {isEn ? (
                        <>If your dog shows acute pain upon slight touch, fever, continuous head tilt (circling), or bloody discharge, see an in-person veterinarian immediately for an otoscopic evaluation to rule out a ruptured eardrum.</>
                      ) : (
                        <>Se o cão apresentar dor intensa ao simples toque, febre, cabeça inclinada constante (andar em círculos) ou corrimento com sangue, leve imediatamente a um médico veterinário para exame otoscópico com descarte de tímpano perfurado.</>
                      )}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 5: VIDEOAULAS (4 AULAS EM VÍDEO) */}
          {activeTab === 'videoaulas' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left: Video Player Simulator */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col justify-center items-center text-white p-6">
                    {isPlayingVideo ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-b from-teal-950 to-slate-950 p-6 animate-pulse">
                        <HeartPulse className="w-12 h-12 text-[#00c5b3]" />
                        <h4 className="text-lg font-black text-white">
                          {lessons[activeLessonIndex].title}
                        </h4>
                        <p className="text-xs text-teal-200">
                          {isEn ? "Playing Masterclass • Duration:" : "Reproduzindo Masterclass • Duração:"} {lessons[activeLessonIndex].duration}
                        </p>
                        <button
                          onClick={() => setIsPlayingVideo(false)}
                          className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-2 rounded-xl mt-4 cursor-pointer"
                        >
                          {isEn ? "Pause Lesson" : "Pausar Aula"}
                        </button>
                      </div>
                    ) : (
                      <div className="text-center space-y-3">
                        <button
                          onClick={() => setIsPlayingVideo(true)}
                          className="w-16 h-16 rounded-full bg-[#00c5b3] hover:bg-teal-400 text-teal-950 flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer mx-auto"
                        >
                          <PlayCircle className="w-8 h-8 ml-0.5" />
                        </button>
                        <div>
                          <h4 className="text-base font-black text-white">
                            {lessons[activeLessonIndex].title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {isEn
                              ? `Click to watch recorded masterclass (${lessons[activeLessonIndex].duration})`
                              : `Clique para assistir à aula gravada (${lessons[activeLessonIndex].duration})`}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lesson summary */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h4 className="text-sm font-black text-slate-900 mb-2">
                      {isEn ? "Lesson Summary:" : "Resumo da Aula:"}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3 font-medium">
                      {lessons[activeLessonIndex].summary}
                    </p>
                    <div className="space-y-1.5">
                      {lessons[activeLessonIndex].keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Lesson Playlist */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    {isEn ? "Course Curriculum:" : "Conteúdo Programático:"}
                  </h4>
                  {lessons.map((lesson, idx) => {
                    const isActive = activeLessonIndex === idx;
                    return (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          setActiveLessonIndex(idx);
                          setIsPlayingVideo(false);
                        }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-teal-50 border-teal-500 shadow-sm'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[11px] font-black text-teal-700">
                            {isEn ? `Lesson ${idx + 1}` : `Aula ${idx + 1}`}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                            {lesson.duration}
                          </span>
                        </div>
                        <h5 className="text-xs font-bold text-slate-800 line-clamp-2">
                          {lesson.title}
                        </h5>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              id="btn-back-to-main"
              onClick={onClose}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEn ? "Back to Main Dashboard" : "Voltar para o Painel Principal"}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="bg-teal-50 hover:bg-teal-100 text-teal-800 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-teal-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEn ? "Print / Save Recipes" : "Imprimir / Salvar Receitas"}</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
