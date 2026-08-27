import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Droplet,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Download,
  X,
  CheckCircle2,
  Clock,
  MapPin,
  Smile,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  Lock,
  HeartCrack,
  Flame,
  Zap,
  Award,
  ExternalLink,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

interface CoceiraXixiProtocolViewProps {
  onClose: () => void;
}

export const CoceiraXixiProtocolView: React.FC<CoceiraXixiProtocolViewProps> = ({ onClose }) => {
  const { isEn, user, isAdmin } = useApp();

  const isVipUser = Boolean(user?.isVip || isAdmin);

  // State for Quiz flow
  // step 0: Quiz Start / Question 1
  // step 1: Question 2
  // step 2: Question 3
  // step 3: Question 4
  // step 4: Analyzing / Loading Animation
  // step 5: Result & Payment Checkout
  // step 6: (Optional / Unlocked) Full Protocol View
  const [quizStep, setQuizStep] = useState<number>(0);
  const [analyzingProgress, setAnalyzingProgress] = useState<number>(0);
  const [shampooVolumeMl, setShampooVolumeMl] = useState<number>(500);
  const [activeTab, setActiveTab] = useState<'coceira' | 'xixi' | 'download'>('coceira');

  // User answers
  const [answers, setAnswers] = useState({
    mainProblem: '',
    duration: '',
    previousAttempts: '',
    dogSize: 'Médio (10 a 25kg)',
    dogAge: 'Adulto (1 a 7 anos)'
  });

  // 15 drops per 500ml for Gentian Violet
  const calculatedDrops = Math.round((shampooVolumeMl / 500) * 15);

  const checkoutUrl = isEn
    ? 'https://pay.kiwify.com/1MAymAQ'
    : 'https://pay.kiwify.com.br/OAXrNvm';

  // Analysis simulation
  useEffect(() => {
    if (quizStep === 4) {
      setAnalyzingProgress(10);
      const interval = setInterval(() => {
        setAnalyzingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setQuizStep(5), 400);
            return 100;
          }
          return prev + 15;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [quizStep]);

  const handleSelectAnswer = (field: string, value: string, nextStep: number) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setQuizStep(nextStep);
  };

  const handleRestartQuiz = () => {
    setQuizStep(0);
    setAnalyzingProgress(0);
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200 shadow-2xl flex flex-col font-sans">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#581c87] via-[#7e22ce] to-[#0f766e] p-5 sm:p-7 text-white relative">
        <button
          id="btn-close-coceira-xixi"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
          title={isEn ? 'Close' : 'Fechar'}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
              🌸🎯
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md shadow-xs">
                {isEn ? 'CLINICAL EVALUATION & PROTOCOL' : 'AVALIAÇÃO & PROTOCOLO 2 EM 1'}
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight mt-1">
                {isEn
                  ? 'Anti-Itch & Positive Potty Protocol'
                  : 'Protocolo Coceira + Xixi e Fezes no Lugar Certo'}
              </h2>
            </div>
          </div>

          {isVipUser && quizStep !== 6 && (
            <button
              id="btn-quick-access-vip-coceira"
              onClick={() => setQuizStep(6)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-md flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>{isEn ? 'Access VIP Unlocked Content' : 'Acessar Conteúdo VIP Liberado'}</span>
            </button>
          )}
        </div>

        <p className="text-xs sm:text-sm text-purple-100 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'Complete the 1-minute diagnostic quiz to evaluate your dog\'s symptoms and get your customized action plan and checkout.'
            : 'Responda ao quiz rápido de 1 minuto para diagnosticar o caso do seu cão e receber seu plano personalizado de alívio e treino.'}
        </p>
      </div>

      {/* QUIZ STEP 0: QUESTION 1 */}
      {quizStep === 0 && (
        <div className="p-6 sm:p-10 space-y-6 animate-fade-in max-w-3xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-black text-purple-700 uppercase tracking-wider">
            <span>{isEn ? 'Question 1 of 4' : 'Pergunta 1 de 4'}</span>
            <span>25% {isEn ? 'Completed' : 'Concluído'}</span>
          </div>

          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-1/4 rounded-full transition-all duration-300"></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">
              {isEn
                ? 'What is the biggest challenge with your dog right now?'
                : 'Qual é o principal desafio com o seu cão hoje?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isEn
                ? 'Select the option that best describes what is bothering your pet the most:'
                : 'Selecione a opção que melhor descreve o sofrimento ou incômodo do seu pet:'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'q1-coceira',
                icon: '🐾',
                title: isEn ? 'Desperate Itching & Paw Licking' : 'Coceira Desesperadora & Lambedura de Patas',
                desc: isEn ? 'Constant scratching, red belly, skin odor or hot spots' : 'Coceira frequente, patas vermelhas, feridas e cheiro fúngico na pele'
              },
              {
                id: 'q1-xixi',
                icon: '🎯',
                title: isEn ? 'Pee & Poop in Wrong Places' : 'Xixi e Cocô Fora do Lugar Certo',
                desc: isEn ? 'Ignores the pee pad, does business on carpets, sofas or corners' : 'Ignora o tapete higiênico, faz xixi em tapetes da casa ou cantos proibidos'
              },
              {
                id: 'q1-ambos',
                icon: '⚠️',
                title: isEn ? 'Both Issues (Itching AND Potty Mess)' : 'Os Dois Problemas Juntos (Coceira E Sujeira)',
                desc: isEn ? 'Dog suffers with allergies and household messes every day' : 'O cão sofre com dermatite e a casa vive com cheiro forte de xixi e acidentes'
              },
              {
                id: 'q1-estresse',
                icon: '⚡',
                title: isEn ? 'Anxiety, Bad Odors & Frustration' : 'Estresse com Limpeza & Mau Cheiro Persistente',
                desc: isEn ? 'Already spent on sprays and antibiotics with no lasting result' : 'Já gastei dinheiro com remédios e tapetes e a situação continua estressante'
              }
            ].map((opt) => (
              <button
                key={opt.id}
                id={`btn-${opt.id}`}
                onClick={() => handleSelectAnswer('mainProblem', opt.title, 1)}
                className="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-purple-600 hover:bg-purple-50/60 transition-all cursor-pointer flex items-center justify-between group shadow-xs active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-2xl sm:text-3xl shrink-0 p-2 bg-slate-100 group-hover:bg-purple-200/60 rounded-xl transition-colors">
                    {opt.icon}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-purple-900">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-slate-500 group-hover:text-purple-700">
                      {opt.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUIZ STEP 1: QUESTION 2 */}
      {quizStep === 1 && (
        <div className="p-6 sm:p-10 space-y-6 animate-fade-in max-w-3xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-black text-purple-700 uppercase tracking-wider">
            <span>{isEn ? 'Question 2 of 4' : 'Pergunta 2 de 4'}</span>
            <span>50% {isEn ? 'Completed' : 'Concluído'}</span>
          </div>

          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-2/4 rounded-full transition-all duration-300"></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">
              {isEn
                ? 'How long has your dog been experiencing this problem?'
                : 'Há quanto tempo seu cão apresenta esse comportamento ou coceira?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isEn
                ? 'Chronic duration helps determine the level of biological conditioning required.'
                : 'O tempo de evolução indica se o caso exige desintoxicação tópica e reprogramação de rotina.'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'q2-1mes',
                title: isEn ? 'Less than 1 month (Recently started)' : 'Menos de 1 mês (Começou recentemente)',
                desc: isEn ? 'Easier to reverse before it becomes a chronic habit' : 'Fase inicial ideal para corte imediato do ciclo sem remédios fortes'
              },
              {
                id: 'q2-6meses',
                title: isEn ? 'Between 1 and 6 months (Recurring cycle)' : 'Entre 1 e 6 meses (Ciclo recorrente e estressante)',
                desc: isEn ? 'Fungus or bad bathroom habits are already establishing' : 'A proliferação de fungos ou marcação olfativa incorreta já se instalou'
              },
              {
                id: 'q2-anos',
                title: isEn ? 'More than 6 months / Years (Chronic)' : 'Mais de 6 meses ou anos (Já virou um sofrimento crônico)',
                desc: isEn ? 'Already spent thousands on failed vet visits and remedies' : 'Já gastei centenas de reais em medicamentos e a coceira/xixi sempre voltam'
              },
              {
                id: 'q2-filhote',
                title: isEn ? 'Since puppyhood / Always been like this' : 'Desde filhote (Nunca aprendeu da forma certa)',
                desc: isEn ? 'Needs biological clock conditioning and positive reward rules' : 'Necessita do método dos 4 Momentos de Ouro biológicos com reforço positivo'
              }
            ].map((opt) => (
              <button
                key={opt.id}
                id={`btn-${opt.id}`}
                onClick={() => handleSelectAnswer('duration', opt.title, 2)}
                className="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-purple-600 hover:bg-purple-50/60 transition-all cursor-pointer flex items-center justify-between group shadow-xs active:scale-[0.99]"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-purple-900">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-purple-700">
                    {opt.desc}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUIZ STEP 2: QUESTION 3 */}
      {quizStep === 2 && (
        <div className="p-6 sm:p-10 space-y-6 animate-fade-in max-w-3xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-black text-purple-700 uppercase tracking-wider">
            <span>{isEn ? 'Question 3 of 4' : 'Pergunta 3 de 4'}</span>
            <span>75% {isEn ? 'Completed' : 'Concluído'}</span>
          </div>

          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-3/4 rounded-full transition-all duration-300"></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">
              {isEn
                ? 'What have you already tried to solve it?'
                : 'O que você já tentou fazer para resolver até hoje?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isEn
                ? 'Most commercial solutions only mask symptoms or create fear in dogs.'
                : 'A maioria dos métodos comerciais apenas mascara o sintoma ou gera medo no cão.'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                id: 'q3-remedios',
                title: isEn ? 'Expensive antibiotics, corticoids or Apoquel' : 'Antibióticos, corticoides ou remédios caros de pet shop',
                desc: isEn ? 'They work for 2 weeks, then the itch returns twice as strong' : 'Aliviam por 10 dias, mas quando o efeito passa a coceira volta dobrada'
              },
              {
                id: 'q3-broncas',
                title: isEn ? 'Scolding, yelling or rubbing snout in pee' : 'Broncas, gritos ou esfregar o focinho no xixi errado',
                desc: isEn ? 'Generates fear and makes the dog pee secretly behind sofas' : 'Causa medo e faz o cão urinar escondido nos quartos e atrás dos móveis'
              },
              {
                id: 'q3-shampoos',
                title: isEn ? 'Medicated generic shampoos & store pee pads' : 'Shampoos medicinais comuns e vários tipos de tapetes',
                desc: isEn ? 'Spent a lot of money without real lasting results' : 'Gastei muito dinheiro e o cão continuou se coçando e errando o lugar'
              },
              {
                id: 'q3-nada',
                title: isEn ? 'Still looking for a safe, natural step-by-step method' : 'Ainda não sei o método certo e quero uma solução segura',
                desc: isEn ? 'I want to avoid toxic chemicals and stop household frustration' : 'Quero proteger a saúde do meu pet sem químicos e sem estresse na casa'
              }
            ].map((opt) => (
              <button
                key={opt.id}
                id={`btn-${opt.id}`}
                onClick={() => handleSelectAnswer('previousAttempts', opt.title, 3)}
                className="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-purple-600 hover:bg-purple-50/60 transition-all cursor-pointer flex items-center justify-between group shadow-xs active:scale-[0.99]"
              >
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-purple-900">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-slate-500 group-hover:text-purple-700">
                    {opt.desc}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUIZ STEP 3: QUESTION 4 (SIZE & AGE) */}
      {quizStep === 3 && (
        <div className="p-6 sm:p-10 space-y-6 animate-fade-in max-w-3xl mx-auto w-full">
          <div className="flex items-center justify-between text-xs font-black text-purple-700 uppercase tracking-wider">
            <span>{isEn ? 'Question 4 of 4 (Final)' : 'Pergunta 4 de 4 (Final)'}</span>
            <span>100% {isEn ? 'Final Step' : 'Última Etapa'}</span>
          </div>

          <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-full rounded-full"></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">
              {isEn
                ? 'What is the size and age profile of your dog?'
                : 'Qual o porte e faixa etária do seu cão?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isEn
                ? 'This determines the exact Gentian Violet drop count and biological potty timing.'
                : 'Necessário para calcular a dosagem da Violeta Genciana e o cronograma dos 4 Momentos de Ouro.'}
            </p>
          </div>

          {/* Size selection */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-700 tracking-wider block">
              {isEn ? '1. Dog Size:' : '1. Porte do Cão:'}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'size-small', name: isEn ? 'Small (< 10kg)' : 'Pequeno (até 10kg)' },
                { id: 'size-med', name: isEn ? 'Medium (10-25kg)' : 'Médio (10 a 25kg)' },
                { id: 'size-large', name: isEn ? 'Large (> 25kg)' : 'Grande (+25kg)' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, dogSize: s.name }))}
                  className={`py-3 px-2 rounded-xl text-xs font-black border-2 transition-all cursor-pointer text-center ${
                    answers.dogSize === s.name
                      ? 'border-purple-600 bg-purple-100 text-purple-950 ring-2 ring-purple-400'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Age selection */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-black uppercase text-slate-700 tracking-wider block">
              {isEn ? '2. Age Range:' : '2. Idade do Pet:'}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'age-pup', name: isEn ? 'Puppy (< 1 yr)' : 'Filhote (< 1 ano)' },
                { id: 'age-adult', name: isEn ? 'Adult (1-7 yrs)' : 'Adulto (1 a 7 anos)' },
                { id: 'age-senior', name: isEn ? 'Senior (7+ yrs)' : 'Idoso (+7 anos)' }
              ].map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, dogAge: a.name }))}
                  className={`py-3 px-2 rounded-xl text-xs font-black border-2 transition-all cursor-pointer text-center ${
                    answers.dogAge === a.name
                      ? 'border-teal-600 bg-teal-100 text-teal-950 ring-2 ring-teal-400'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Quiz button */}
          <button
            id="btn-submit-quiz-coceira"
            onClick={() => setQuizStep(4)}
            className="w-full mt-4 bg-gradient-to-r from-purple-700 via-purple-600 to-teal-600 hover:from-purple-600 hover:to-teal-500 text-white font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            <span>{isEn ? 'GENERATE CUSTOM DIAGNOSIS & ACTION PLAN' : 'GERAR MEU DIAGNÓSTICO & PLANO DE AÇÃO'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* QUIZ STEP 4: ANALYZING ANIMATION */}
      {quizStep === 4 && (
        <div className="p-8 sm:p-16 text-center space-y-6 max-w-xl mx-auto w-full animate-fade-in">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full border-4 border-purple-200 border-t-purple-700 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-purple-700">
              🐾
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {isEn
                ? 'Analyzing Biological & Behavioral Profile...'
                : 'Analisando o Perfil Biológico e Comportamental do seu Cão...'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isEn
                ? 'Calculating Gentian Violet proportions & 4 Golden Potty Moments schedule...'
                : 'Calculando proporção exata da Violeta Genciana e o cronograma dos 4 Momentos de Ouro...'}
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200 p-0.5">
              <div
                className="bg-gradient-to-r from-purple-600 via-amber-400 to-teal-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${analyzingProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-500">
              <span>{isEn ? 'Processing clinical markers' : 'Cruzando dados de pele e hábitos'}</span>
              <span className="font-black text-purple-700">{analyzingProgress}%</span>
            </div>
          </div>

          <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isEn ? 'Identified dermatological & odor markers' : 'Marcadores fúngicos e olfativos identificados'}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isEn ? 'Eliminated ineffective chemical approaches' : 'Ajustada fórmula sem corticoide e sem agressão ao fígado'}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isEn ? 'Custom protocol ready for immediate download' : 'Plano de alívio rápido de 4 dias pronto para liberação'}</span>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ STEP 5: FINAL RESULT & PAYMENT CHECKOUT (USER GOAL) */}
      {quizStep === 5 && (
        <div className="p-5 sm:p-8 space-y-6 animate-fade-in max-w-4xl mx-auto w-full">
          
          {/* Top Result Alert */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/15 to-purple-500/10 border-2 border-amber-400/80 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl shrink-0 font-black shadow-sm">
                🚨
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-full">
                  {isEn ? 'DIAGNOSTIC STATUS: HIGH ALERT' : 'STATUS DO DIAGNÓSTICO: GRAU ELEVADO'}
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-900 mt-1">
                  {isEn
                    ? `Action Plan Ready for: ${answers.dogSize} • ${answers.dogAge}`
                    : `Plano de Ação Pronto para: ${answers.dogSize} • ${answers.dogAge}`}
                </h4>
              </div>
            </div>

            <button
              onClick={handleRestartQuiz}
              className="text-xs font-bold text-slate-600 hover:text-purple-700 flex items-center gap-1 transition-colors cursor-pointer self-end sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isEn ? 'Retake Quiz' : 'Refazer Quiz'}</span>
            </button>
          </div>

          {/* Diagnostic Summary Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Box 1: Why it happens */}
            <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-2.5">
              <div className="flex items-center gap-2 text-purple-900 font-black text-sm">
                <HeartCrack className="w-4 h-4 text-purple-700" />
                <span>{isEn ? 'Clinical Cause Identified:' : 'Causa Raiz Identificada:'}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEn
                  ? 'Your dog is trapped in a vicious cycle: proliferation of Malassezia yeast in paws/skin + sensory odor confusion in wrong spots. Traditional antibiotics only mask symptoms temporarily.'
                  : 'Seu cão está preso em um ciclo vicioso: proliferação fúngica de Malassezia nas patas e barriga + confusão olfativa nos locais errados. Broncas atrasadas ou remédios fortes apenas aumentam o estresse.'}
              </p>
              <div className="pt-2 border-t border-purple-200 text-xs font-bold text-purple-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isEn ? 'Proved reversible with natural protocols in 4 days' : 'Reversível em até 4 dias com o protocolo correto'}</span>
              </div>
            </div>

            {/* Box 2: What is included in this Protocol */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/80 border border-teal-200 space-y-2.5">
              <div className="flex items-center gap-2 text-teal-900 font-black text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>{isEn ? 'Your Customized Solution:' : 'O Que Está Incluído no Seu Plano:'}</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Fórmula Violeta Genciana 1%:</strong> Diluição de 15 gotas por 500ml para banho sem coceira.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Os 4 Momentos de Ouro:</strong> Rotina biológica de 100% de acerto no tapete sem broncas.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Spray Caseiro Anti-Odor:</strong> Neutralizador para nunca mais repetirem o erro no chão.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>3 PDFs Oficiais + Coach Canino IA 24h:</strong> Suporte vitalício no celular.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* HIGH CONVERSION CHECKOUT BOX */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c2f2b] via-[#051a17] to-[#041210] border-2 border-amber-400 text-white shadow-2xl space-y-5 text-center relative overflow-hidden">
            
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
              <Zap className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
              <span>{isEn ? 'INSTANT ACCESS UNLOCK (LIFETIME)' : 'LIBERAÇÃO IMEDIATA (ACESSO VITALÍCIO)'}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-3xl font-black text-white">
                {isEn
                  ? 'Unlock the Complete Anti-Itch & Potty Master Protocol'
                  : 'Desbloqueie o Protocolo Completo Coceira + Xixi no Lugar Certo'}
              </h3>
              <p className="text-xs sm:text-sm text-teal-200 max-w-xl mx-auto font-medium">
                {isEn
                  ? 'Get instant lifetime access to the formulas, video tutorials, downloadable PDF guides, and 24/7 AI Coach support.'
                  : 'Tenha acesso imediato e vitalício a todas as receitas, dosagens por peso, manuais em PDF e suporte 24h.'}
              </p>
            </div>

            {/* Price Anchor Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto flex items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[11px] text-slate-400 line-through block">
                  De R$ 67,00
                </span>
                <span className="text-xs font-black text-emerald-400 uppercase">
                  Oferta Promocional do Quiz:
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-black text-amber-300">
                  R$ 19,90
                </span>
                <span className="text-[10px] text-slate-300 block">
                  pagamento único • vitalício
                </span>
              </div>
            </div>

            {/* DIRECT KIWIFY CHECKOUT BUTTON / VIP UNLOCKED ACCESS */}
            {isVipUser ? (
              <div className="space-y-3 max-w-md mx-auto">
                <div className="p-3 bg-amber-400/20 border border-amber-400/50 rounded-2xl text-amber-200 text-xs font-bold flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isEn ? 'Your VIP Plan includes 100% full access to this protocol!' : 'Sua Conta VIP possui Acesso 100% Liberado a este protocolo!'}</span>
                </div>
                <button
                  id="btn-access-vip-coceira-step5"
                  onClick={() => setQuizStep(6)}
                  className="w-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-950 font-black" />
                  <span>{isEn ? 'ACCESS COMPLETE PROTOCOL NOW (VIP)' : 'ACESSAR PROTOCOLO COMPLETO AGORA (VIP)'}</span>
                </button>
              </div>
            ) : (
              <a
                id="btn-checkout-quiz-coceira-kiwify"
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 animate-pulse"
              >
                <span>{isEn ? 'UNLOCK MY PROTOCOL ON KIWIFY' : 'QUERO DESBLOQUEAR MEU PROTOCOLO AGORA'}</span>
                <ChevronRight className="w-5 h-5 font-black" />
              </a>
            )}

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-teal-200/90 font-bold pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantia de 7 Dias</span>
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Liberação Imediata</span>
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-teal-300" />
                <span>Pagamento 100% Blindado</span>
              </span>
            </div>

            {/* Option to toggle preview or full content */}
            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setQuizStep(6)}
                className="text-xs text-teal-300 hover:text-white underline font-semibold transition-colors cursor-pointer"
              >
                {isEn
                  ? 'Already a student or want to preview the protocol tools? Click here'
                  : 'Já é aluno ou quer ver a prévia das ferramentas do protocolo? Clique aqui'}
              </button>
            </div>

          </div>

        </div>
      )}

      {/* QUIZ STEP 6: FULL DETAILED PROTOCOL CONTENT (PREVIEW OR UNLOCKED) */}
      {quizStep === 6 && (
        <div className="animate-fade-in">
          
          {/* Top Return to Quiz Bar */}
          <div className="bg-slate-100 p-3 px-6 border-b border-slate-200 flex items-center justify-between">
            <button
              onClick={() => setQuizStep(5)}
              className="text-xs font-black text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
            >
              <span>← {isEn ? 'Back to Checkout & Quiz Results' : 'Voltar ao Resultado do Diagnóstico & Checkout'}</span>
            </button>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Buy Protocol (R$ 19,90)' : 'Comprar Acesso (R$ 19,90)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center bg-slate-100 border-b border-slate-200 p-2 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('coceira')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'coceira'
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>🌸</span>
              <span>{isEn ? '1. Anti-Itch & Skin Relief' : '1. Alívio de Coceiras & Pele'}</span>
            </button>

            <button
              onClick={() => setActiveTab('xixi')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'xixi'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>🎯</span>
              <span>{isEn ? '2. Potty Training Routine' : '2. Xixi e Cocô no Lugar Certo'}</span>
            </button>

            <button
              onClick={() => setActiveTab('download')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === 'download'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{isEn ? '3. PDF Downloads' : '3. Downloads de Guias'}</span>
            </button>
          </div>

          <div className="p-5 sm:p-8 space-y-6">
            
            {/* TAB 1: COCEIRA & VIOLETA GENCIANA */}
            {activeTab === 'coceira' && (
              <div className="space-y-6 animate-fade-in">
                {/* Dynamic Calculator for Shampoo Dilution */}
                <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-purple-700" />
                    <h4 className="text-sm font-black text-purple-950">
                      {isEn
                        ? 'Safe Dilution Calculator: Gentian Violet 1% in Dog Shampoo'
                        : 'Calculadora de Diluição Segura: Violeta Genciana 1% no Shampoo'}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-slate-700 block">
                        {isEn ? 'Gentle Dog Shampoo Bottle Volume:' : 'Volume do Frasco de Shampoo Neutro Canino:'}
                      </label>
                      <input
                        type="range"
                        min={200}
                        max={1000}
                        step={50}
                        value={shampooVolumeMl}
                        onChange={e => setShampooVolumeMl(Number(e.target.value))}
                        className="w-full h-2.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-700"
                      />
                      <div className="flex justify-between text-xs text-slate-500 font-bold">
                        <span>200 ml</span>
                        <span className="text-purple-900 font-extrabold">{shampooVolumeMl} ml</span>
                        <span>1000 ml</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-purple-300 text-center shadow-xs">
                      <span className="text-[11px] font-bold uppercase text-slate-500 block">
                        {isEn ? 'Drops of Gentian Violet 1%' : 'Gotas de Violeta Genciana 1%'}
                      </span>
                      <span className="text-2xl font-black text-purple-700">
                        {calculatedDrops} {isEn ? 'drops' : 'gotas'}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {isEn ? 'mix & shake well in bottle' : 'homogeneizar bem no frasco'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bath Protocol Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">1</span>
                      {isEn ? 'Application & Contact Time' : 'Aplicação & Tempo de Contato'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isEn
                        ? 'Wet the dog with warm water. Apply the medicated shampoo foam, massaging gently between toes, belly, and irritated skin. Leave for 7-10 minutes before full rinse.'
                        : 'Molhe o cão com água morna. Ensaboe com o shampoo diluído, massageando entre as patinhas, barriga e áreas irritadas. Deixe agir por 7 a 10 minutos antes de enxaguar abundantemente.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center text-xs font-bold">2</span>
                      {isEn ? 'Relief Routine & Frequency' : 'Rotina & Frequência Semanal'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isEn
                        ? 'During active flare-ups: 1 bath every 5-7 days for 3 weeks. For ongoing prevention: 1 bath every 15-20 days.'
                        : 'Em crises agudas de coceira: 1 banho a cada 5 a 7 dias por 3 semanas. Para manutenção preventiva: 1 banho a cada 15 a 20 dias.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: XIXI E FEZES NO LUGAR CERTO */}
            {activeTab === 'xixi' && (
              <div className="space-y-6 animate-fade-in">
                {/* 4 Golden Moments Box */}
                <div className="bg-teal-50 rounded-2xl p-5 border border-teal-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-700" />
                    <h4 className="text-sm font-black text-teal-950">
                      {isEn ? 'The 4 Golden Potty Moments of the Day' : 'Os 4 Momentos de Ouro do Xixi no Dia'}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600">
                    {isEn
                      ? 'Dogs have natural biological triggers. Take them to the pee pad immediately during these 4 moments:'
                      : 'Cães possuem gatilhos biológicos exatos. Leve seu cão ao tapete higiênico imediatamente nestes 4 momentos:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">1</span>
                      <span><strong>{isEn ? 'Upon Waking Up:' : 'Logo ao Acordar:'}</strong> {isEn ? 'First thing in the morning or after naps.' : 'A primeira coisa pela manhã ou após qualquer soneca.'}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">2</span>
                      <span><strong>{isEn ? '15-20m After Meals:' : '15-20m Pós-Refeição:'}</strong> {isEn ? 'Gastrocolic reflex stimulates the bowel.' : 'O reflexo gastrocólico estimula a evacuação rápida.'}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">3</span>
                      <span><strong>{isEn ? 'After Active Play:' : 'Após Brincadeiras:'}</strong> {isEn ? 'Excitement and running trigger the bladder.' : 'A agitação e corridas ativam a bexiga.'}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-teal-200 text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">4</span>
                      <span><strong>{isEn ? 'Before Bedtime:' : 'Antes de Dormir:'}</strong> {isEn ? 'Ensures a full uninterrupted sleep cycle.' : 'Garante uma noite tranquila sem acidentes no chão.'}</span>
                    </div>
                  </div>
                </div>

                {/* Positive Reinforcement 3-Second Rule & Odor Removal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                    <h4 className="text-sm font-extrabold text-amber-950 flex items-center gap-1.5">
                      <Smile className="w-4 h-4 text-amber-600" />
                      {isEn ? 'The 3-Second Reward Rule' : 'A Regra dos 3 Segundos de Recompensa'}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {isEn
                        ? 'The moment your dog finishes pee on the pad, reward within 3 seconds with high-value treat and enthusiastic praise. Never yell for past mistakes (they cannot associate past actions with anger).'
                        : 'Assim que o cão terminar o xixi no tapete, recompense em até 3 segundos com um petisco saboroso e elogio caloroso. Nunca brigue por erros passados (eles não associam broncas atrasadas).'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      {isEn ? 'Natural Odor Eliminator Spray' : 'Spray Caseiro Neutralizador de Odor'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isEn
                        ? 'Mix 2 parts white vinegar, 1 part water, and 5 drops of pure eucalyptus oil. Spray error spots to erase scent markers completely so they won’t repeat in the same wrong place.'
                        : 'Misture 2 partes de vinagre de álcool com 1 parte de água e 5 gotas de essência suave. Limpe os locais errados para neutralizar a marca olfativa que faz o cão repetir o erro.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DOWNLOADS */}
            {activeTab === 'download' && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="text-sm font-black text-slate-900">
                  {isEn ? 'Download Official Materials & Guides (PDF):' : 'Materiais e Guias Oficiais para Download (PDF):'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-200/60 px-2 py-0.5 rounded">PDF OFICIAL</span>
                      <h5 className="text-xs font-black text-slate-900 mt-2">Guia Anticoceira & Violeta Genciana</h5>
                      <p className="text-[11px] text-slate-500 mt-1">2.9 MB • Tabela de dosagens e banhos</p>
                    </div>
                    <button
                      onClick={() => alert(isEn ? 'Downloading Guide...' : 'Iniciando download do guia...')}
                      className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Download PDF' : 'Baixar PDF'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-200/60 px-2 py-0.5 rounded">PDF OFICIAL</span>
                      <h5 className="text-xs font-black text-slate-900 mt-2">Manual Xixi & Fezes no Lugar Certo</h5>
                      <p className="text-[11px] text-slate-500 mt-1">3.4 MB • Guia de adestramento sem broncas</p>
                    </div>
                    <button
                      onClick={() => alert(isEn ? 'Downloading Guide...' : 'Iniciando download do guia...')}
                      className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Download PDF' : 'Baixar PDF'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">CHECKLIST</span>
                      <h5 className="text-xs font-black text-slate-900 mt-2">Cronograma Semanal Integrado</h5>
                      <p className="text-[11px] text-slate-500 mt-1">1.2 MB • Tabela para porta de geladeira</p>
                    </div>
                    <button
                      onClick={() => alert(isEn ? 'Downloading Checklist...' : 'Iniciando download do checklist...')}
                      className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Download Checklist' : 'Baixar Checklist'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
