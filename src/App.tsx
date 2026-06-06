import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Shield, 
  Lock, 
  Zap, 
  HelpCircle, 
  ArrowRight, 
  Heart, 
  Calendar,
  Sparkles,
  Info,
  Clock,
  Volume2,
  CheckCircle,
  AlertCircle,
  Users,
  Check,
  X,
  FileText,
  Award,
  Flame,
  Scissors,
  PartyPopper
} from 'lucide-react';
import { PricingPlan } from './types';

import FAQAccordion from './components/FAQAccordion';
import PlanCard from './components/PlanCard';
import UpsellModal from './components/UpsellModal';
import VSLPlayer from './components/VSLPlayer';

// Import local generated images
import avatarProfessora from './assets/images/avatar_professora_nova.jpg';
const mockupPremium = 'https://i.imgur.com/WELMJhy.jpeg';
import seloGarantia from './assets/images/selo_garantia_7_dias_novo.png';

const flagColors = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#e67e22', '#9b59b6'];

const testimonialImages = [
  'https://i.postimg.cc/50JMbCMF/1.webp',
  'https://i.postimg.cc/sXzRshRS/2.webp',
  'https://i.postimg.cc/cHWN0nNn/3.webp',
  'https://i.postimg.cc/TwxXfDX5/4.webp',
  'https://i.postimg.cc/MTw8qQ8M/5.webp',
];

export default function App() {
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleBasicClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  };

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    let formatted = date.toLocaleDateString('pt-BR', options);
    // Capitalize first letter
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    setFormattedDate(formatted);
  }, []);

  const pricingPlans: PricingPlan[] = [
    {
      id: 'premium',
      name: 'Kit Arraiá PREMIADO (Completo)',
      tagline: 'A solução definitiva para o seu São João + Todos os bônus exclusivos de decoração e diversão!',
      badge: '🔥 MAIS VENDIDO',
      mockupSrc: mockupPremium,
      regularPrice: 'De R$ 97,00',
      currentPrice: '27,90',
      paymentDetails: 'PAGAMENTO ÚNICO',
      checkoutUrl: 'https://pay.wiapy.com/F9vclZ4hQ-',
      isPopular: true,
      features: [
        { text: 'Manual & Dinâmica Completa do Jogo da Pescaria Infantil', included: true },
        { text: 'Instruções do Jogo das Argolas tradicional com regras que geram gargalhadas', included: true },
        { text: 'Desenho da Dinâmica do Painel Premiado (engajamento máximo)', included: true },
        { text: 'Espetáculo do Jogo "Acerte o Milho" (Inédito e divertidíssimo)', included: true },
        { text: 'Guia de Decoração Caipira Temática Completa para o local', included: true },
        { text: 'Plaquinhas caipiras com frases divertidas para fotos marcantes', included: true },
        { text: 'Layout de Cardápio Caipira para Festa de São João', included: true },
        { text: 'E-book Secreto: Receitas Juninas Tradicionais de Sucesso', included: true },
        { text: 'Acesso Vitalício Garantido para o resto de sua vida', included: true },
        { text: 'Resolução visual premium em altíssima nitidez e clareza de uso', included: true },
      ]
    },
    {
      id: 'basico',
      name: 'Kit Arraiá Básico',
      tagline: 'O essencial para as brincadeiras fundamentais com total organização.',
      regularPrice: 'De R$ 47,90',
      currentPrice: '10,00',
      paymentDetails: 'PAGAMENTO ÚNICO',
      checkoutUrl: 'https://pay.wiapy.com/4Ttcy-vBeM',
      isPopular: false,
      features: [
        { text: 'Manual & Dinâmica Completa do Jogo da Pescaria Infantil', included: true },
        { text: 'Instruções do Jogo das Argolas tradicional com regras que geram gargalhadas', included: true },
        { text: 'Desenho da Dinâmica do Painel Premiado (engajamento máximo)', included: true },
        { text: 'Acesso Vitalício Garantido para o resto de sua vida', included: true },
        { text: 'Resolução visual premium em altíssima nitidez e clareza de uso', included: true },
        { text: 'Espetáculo do Jogo "Acerte o Milho" (Inédito e divertidíssimo)', included: false },
        { text: 'Guia de Decoração Caipira Temática', included: false },
        { text: 'Plaquinhas caipiras com frases divertidas', included: false },
        { text: 'Layout de Cardápio Caipira', included: false },
        { text: 'E-book Secreto: Receitas Caipiras', included: false },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e5d7af] text-[#2d1e15] font-sans antialiased selection:bg-[#f1c40f]/50 flex flex-col">
      
      {/* Top Special Offer Banner */}
      <div className="w-full bg-gradient-to-r from-[#2d1e15] via-[#d35400] to-[#2d1e15] text-white py-2.5 px-4 text-center border-b border-[#f1c40f]/30 z-50 relative shadow-md select-none">
        <p className="font-black text-xs sm:text-sm text-[#f1c40f] tracking-wider uppercase flex items-center justify-center gap-1.5 animate-pulse">
          🔥 OFERTA VÁLIDA DURANTE O PERÍODO JUNINO 🔥
        </p>
      </div>

      <main id="main-content" className="flex-grow">
      
      {/* 2. Hero Section (Landing Hook with Flags) */}
      <section className="relative z-10 pt-6 pb-8 md:pb-12 px-4 bg-gradient-to-b from-amber-50/20 to-transparent">
        
        {/* Row of Festive Flags */}
        <div className="zoom-in-flags pointer-events-none flex w-full justify-between px-2 overflow-hidden mb-6" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, i) => (
            <span 
              key={i}
              className="inline-block animate-wave-flag origin-top"
              style={{
                width: '0',
                height: '0',
                borderLeft: '11px solid transparent',
                borderRight: '11px solid transparent',
                borderTop: `20px solid ${flagColors[i % flagColors.length]}`,
                animationDelay: `${(i * 0.12).toFixed(2)}s`,
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.15))'
              }}
            ></span>
          ))}
        </div>



        {/* Primary Benefit-focused Headings block */}
        <div className="max-w-4xl mx-auto text-center mt-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#d35400] tracking-tight leading-[1.12] mb-5 font-display uppercase">
            Sua Festa Junina <span className="text-[#1b4332] underline decoration-[#f1c40f] decoration-4">completa e super organizada</span> em poucos minutos
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-[#5d4037] max-w-3xl mx-auto leading-relaxed mb-4 font-bold">
            Receba um kit completo com tudo pronto para baixar, imprimir e utilizar hoje mesmo <span className="text-[#1e3a8a] font-black">+BONUS</span>
          </p>
        </div>

        {/* Optimized Video Block (VSL vertical story style) */}
        <div className="max-w-[360px] mx-auto mt-6 px-4 sm:px-0">
          <p className="text-center text-[#5d4037] text-sm sm:text-base font-black uppercase tracking-wider mb-2">
            ASSISTA AO VÍDEO:
          </p>
          <VSLPlayer />
        </div>

        {/* Checklist below VSL */}
        <div className="max-w-2xl mx-auto my-6 px-5 py-5 bg-[#ebdcb9] border-2 border-amber-900/10 rounded-3xl text-left shadow-sm">
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[#2d1e15] font-semibold text-sm sm:text-base leading-snug">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Mais de 70 materiais exclusivos inclusos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Brincadeiras e dinâmicas prontas para animar sua festa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Bingo Junino, Pescaria, Correio Elegante e Gincanas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Cartazes, painéis e materiais decorativos exclusivos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Kit organizado, pronto para imprimir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 shrink-0">✅</span>
              <span>Acesso imediato após a compra</span>
            </li>
          </ul>
        </div>


        {/* Primary CTA Block */}
        <div className="max-w-2xl mx-auto mt-6 text-center px-4">
          <p className="mt-4 text-xs sm:text-sm text-[#1e3a8a] font-black uppercase tracking-wider select-none">
            👇 VEJA ABAIXO OPINIÕES DE QUEM JÁ COMPROU 👇
          </p>
        </div>
      </section>

      {/* 8. Moving Testimonials with Creator Profile Card */}
      <section className="relative z-10 pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-gradient-to-b from-[#e5d7af] to-white overflow-hidden border-t border-amber-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e3a8a] mb-3 tracking-tight font-display">
            Histórias de Sucesso Reais 💬
          </h2>
          <div className="text-[#5d4037] font-extrabold uppercase tracking-wide text-xs sm:text-sm flex flex-col items-center justify-center gap-2 max-w-2xl mx-auto">
            <span className="text-amber-400 text-xl tracking-widest select-none">⭐⭐⭐⭐⭐</span>
            <p className="leading-relaxed text-center">
              +1.248 Famílias, Escolas e Líderes já aprovaram e relataram alívio no planejamento!
            </p>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden py-4 select-none bg-neutral-50/50 rounded-2xl border border-amber-100">
          <div className="flex w-max gap-4 md:gap-6 animate-marquee-x py-1">
            {/* Double elements to allow seamless loops */}
            {[...testimonialImages, ...testimonialImages].map((url, i) => (
              <img 
                key={i}
                src={url} 
                alt={`Depoimento de comprador feliz do kit arraiá ${i + 1}`}
                loading="lazy"
                decoding="async"
                width={280}
                height={384}
                referrerPolicy="no-referrer"
                className="h-72 md:h-96 w-auto rounded-3xl shadow-md border-4 border-white shrink-0 object-contain hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-8 px-4 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <a 
            href="#oferta" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E9B21C] to-[#d49f13] text-neutral-950 text-lg sm:text-xl font-black px-10 py-5 rounded-full shadow-2xl hover:from-[#d49f13] hover:to-[#b58509] transition-all hover:scale-[1.02] ring-4 ring-[#E9B21C]/40 font-display animate-pulse-cta"
          >
            ACESSAR MATERIAIS
          </a>
          <p className="mt-3 text-xs text-[#5d4037] font-semibold">
            Evite sofrer com a pressa de última hora. Tenha toda a solução e tranquilidade em menos de 1 minuto.
          </p>
        </div>
      </section>

      {/* 3. Pain-Points Section (Seção de Dores) */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white border-y border-amber-100">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="bg-[#ebdcb9] border-2 border-[#e67e22] rounded-[2rem] p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-3.5xl font-black text-[#2d1e15] mb-4 tracking-tight font-display leading-tight">
              Você também sofre com a correria do São João?
            </h2>
            <p className="text-[#5d4037] text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
              Organizar um arraiá incrível é gratificante, mas os preparativos podem consumir tempo e energia de quem fica responsável por tudo.
            </p>
          </div>

          <div className="bg-[#ebdcb9] border-2 border-[#e67e22] rounded-[2rem] p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <p className="text-[#e67e22] text-lg sm:text-xl font-black mb-4 font-display uppercase tracking-wide">
              🚫 Chega de estressar sua semana de São João!
            </p>
            <p className="text-[#5d4037] text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
              Nós já fizemos todo o planejamento, a pesquisa pedagógica e a criação das brincadeiras. Agora você só precisa aplicar e aproveitar um arraiá organizado, divertido e sem dor de cabeça.
            </p>
          </div>

          <div className="bg-[#ebdcb9] border-2 border-[#e67e22] rounded-[2rem] p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <p className="text-[#e67e22] text-lg sm:text-xl font-black mb-4 font-display uppercase tracking-wide">
              ❌ Cansado de improvisar brincadeiras sem graça na última hora?
            </p>
            <p className="text-[#5d4037] text-sm sm:text-base font-bold leading-relaxed max-w-2xl mx-auto">
              Improvisar na véspera gera estresse e correria para comprar materiais de última hora, resultando em gincanas confusas que dispersam a atenção das crianças e frustram os convidados.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Audience Segments Section (Para Escolas, Igrejas e Famílias) */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-[#2d1e15] mb-3 tracking-tight font-display">
              Quem mais se beneficia deste Kit Pronto?
            </h2>
            <p className="text-[#5d4037] text-sm sm:text-base font-semibold max-w-2xl mx-auto">
              Independentemente do tamanho do seu evento, o material foi criado para se adaptar com facilidade à sua realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Segment 1: Escolas */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-5 border border-[#f1c40f]/45 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#f1c40f]/30 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                👩‍🏫
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Escolas & Professoras
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Atividades alinhadas ao desenvolvimento infantil, coordenação motora e socialização. Perfeitas para a educação infantil e ensino fundamental, reduzindo horas de planejamento e preparação.
              </p>
            </div>

            {/* Segment 2: Igrejas */}
            <div className="bg-gradient-to-br from-[#2ecc71]/10 to-white rounded-2xl p-5 border border-emerald-100 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                ⛪
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#2d1e15] mb-1.5 font-display tracking-tight">
                Igrejas, Catequistas & Quermesses
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Ideal para festas comunitárias, encontros de catequese e gincanas. Um material visual e intuitivo que facilita a organização mesmo com poucos voluntários.
              </p>
            </div>

            {/* Segment 3: Famílias */}
            <div className="bg-gradient-to-br from-[#e67e22]/10 to-white rounded-2xl p-5 border border-[#e67e22]/20 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <div className="w-11 h-11 rounded-full bg-[#e67e22]/15 flex items-center justify-center text-2xl mb-3.5 font-display shadow-inner">
                🏡
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#d35400] mb-1.5 font-display tracking-tight">
                Famílias, Recreadores & Sítios
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Transforme qualquer espaço em um verdadeiro arraiá. Promova diversão, interação entre gerações e momentos inesquecíveis longe das telas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Benefits & Features Section (Tudo o que você recebe) */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#e5d7af] border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-[#d35400] mb-4 tracking-tight font-display uppercase">
              TUDO O QUE VOCÊ PRECISA PARA ORGANIZAR UMA FESTA JUNINA INESQUECÍVEL
            </h2>
            <p className="text-[#5d4037] font-semibold md:text-lg max-w-2xl mx-auto">
              Economize horas de planejamento e tenha acesso imediato a materiais prontos para imprimir e utilizar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                🎯
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                MAIS DE 70 BRINCADEIRAS PRONTAS
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Não perca tempo procurando ideias na internet.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                🖨️
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                MATERIAL 100% PRONTO PARA IMPRIMIR
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Baixe e utilize imediatamente.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                🎉
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                FESTA MAIS DIVERTIDA E ORGANIZADA
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Atividades que mantêm crianças e convidados engajados.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                ⏰
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                ECONOMIZE HORAS DE PREPARAÇÃO
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Tudo já está criado e organizado.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                🎨
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                DECORAÇÕES E PAINÉIS EXCLUSIVOS
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Deixe sua festa mais bonita sem gastar muito.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                🏆
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                BINGOS, GINCANAS E DINÂMICAS
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Diversão garantida para todas as idades.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                💌
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                CORREIO ELEGANTE INCLUSO
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Um dos itens mais procurados em festas juninas.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-6 border-2 border-[#2d1e15]/10 hover:border-[#f1c40f]/60 hover:shadow-[0_20px_40px_-15px_rgba(230,126,34,0.15)] transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-[#f1c40f]/20 transition-colors duration-300 flex items-center justify-center text-3xl mb-4 shadow-inner select-none">
                📱
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#2d1e15] mb-2 font-display uppercase tracking-wider">
                ACESSO IMEDIATO
              </h3>
              <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed font-semibold">
                Receba o material logo após a confirmação do pagamento.
              </p>
            </div>

          </div>

          {/* Bottom Impact CTA section */}
          <div className="mt-16 text-center max-w-2xl mx-auto px-4 flex flex-col items-center">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-[#e74c3c] font-display uppercase tracking-wide mb-6">
              ✨ VOCÊ RECEBE TUDO ISSO POR MENOS DO QUE O PREÇO DE UM LANCHE.
            </p>
            <a 
              href="#oferta" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E9B21C] to-[#d49f13] hover:from-[#d49f13] hover:to-[#b58509] text-neutral-950 text-lg sm:text-xl md:text-2xl font-black px-10 py-5 rounded-full shadow-2xl hover:scale-[1.03] transition-all duration-300 ring-4 ring-[#E9B21C]/40 font-display uppercase tracking-wide animate-pulse-cta"
            >
              QUERO RECEBER MEU KIT ARRAIÁ AGORA
            </a>
            
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-4 text-[#5d4037] text-xs sm:text-sm font-extrabold">
              <span className="flex items-center gap-1.5">
                <span>🔒</span> Compra Segura
              </span>
              <span className="flex items-center gap-1.5">
                <span>⚡</span> Acesso Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <span>💳</span> Pagamento Único
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* 10. Calendar and Time Urgency Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#2d1e15] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#e74c3c] text-white text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 shadow-md tracking-wider font-display shrink-0 uppercase animate-pulse">
            ⏳ O CALENDÁRIO NÃO ESPERA
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight font-display text-[#f1c40f] uppercase">
            O São João tem dia e hora para acontecer!
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-semibold">
            Ao contrário de outras escolhas, o tempo útil para salvar o seu São João corre muito rápido. Conforme os dias passam, resta menos tempo para você estruturar as brincadeiras, garantir que tudo ocorra com tranquilidade e organizar tudo com a calma que você merece.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/10 max-w-xl mx-auto text-left mb-8">
            <span className="text-xs font-black text-[#f1c40f] tracking-widest uppercase block mb-2 font-display">
              ⚠️ ATENÇÃO ORGANIZADOR
            </span>
            <p className="text-white/95 text-sm sm:text-base font-semibold leading-relaxed">
              Deixar para os últimos dias significa se submeter à correria desesperadora de última hora, improvisar brincadeiras confusas na correria, ou o pior cenário: ver as crianças frustradas, entediadas e todos reclamando da desorganização.
            </p>
          </div>


        </div>
      </section>



      {/* 11. Exclusive Bonuses Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-white border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-2xl sm:text-3xl mb-1.5 block select-none">🎁</span>
            <h2 className="text-sm sm:text-base md:text-lg font-black text-[#d35400] leading-relaxed max-w-[320px] md:max-w-md mx-auto uppercase">
              E ISSO NÃO É TUDO... AO ADQUIRIR O KIT ARRAIÁ PREMIUM, VOCÊ RECEBE 4 BÔNUS EXCLUSIVOS TOTALMENTE GRATUITOS.
            </h2>
          </div>

          {/* 4 Bonuses Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Bonus 1 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-4.5 border-2 border-[#2d1e15]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center max-w-[210px] mx-auto w-full">
              <div>
                <span className="inline-block bg-[#1e3a8a] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  💌 BÔNUS 1
                </span>
                <h3 className="text-sm font-black text-[#2d1e15] mb-2.5 font-display uppercase tracking-tight leading-snug">
                  KIT CORREIO ELEGANTE PREMIUM
                </h3>
                <p className="text-[#5d4037] text-xs leading-relaxed font-semibold">
                  Mensagens divertidas e prontas para animar a interação entre os participantes da festa.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2d1e15]/10">
                <p className="text-sm font-black font-display text-[#5d4037] flex items-center justify-center gap-1.5">
                  <span className="line-through text-neutral-400 font-semibold text-xs">R$ 19,90</span>
                  <span>→</span>
                  <span className="text-emerald-700">R$ 0,00</span>
                </p>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-4.5 border-2 border-[#2d1e15]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center max-w-[210px] mx-auto w-full">
              <div>
                <span className="inline-block bg-[#1e3a8a] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  📸 BÔNUS 2
                </span>
                <h3 className="text-sm font-black text-[#2d1e15] mb-2.5 font-display uppercase tracking-tight leading-snug">
                  KIT PLAQUINHAS E CARTAZES JUNINOS
                </h3>
                <p className="text-[#5d4037] text-xs leading-relaxed font-semibold">
                  Modelos criativos para fotos, decoração e momentos especiais durante o evento.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2d1e15]/10">
                <p className="text-sm font-black font-display text-[#5d4037] flex items-center justify-center gap-1.5">
                  <span className="line-through text-neutral-400 font-semibold text-xs">R$ 14,90</span>
                  <span>→</span>
                  <span className="text-emerald-700">R$ 0,00</span>
                </p>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-4.5 border-2 border-[#2d1e15]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center max-w-[210px] mx-auto w-full">
              <div>
                <span className="inline-block bg-[#1e3a8a] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  🎯 BÔNUS 3
                </span>
                <h3 className="text-sm font-black text-[#2d1e15] mb-2.5 font-display uppercase tracking-tight leading-snug">
                  KIT BINGO JUNINO COMPLETO
                </h3>
                <p className="text-[#5d4037] text-xs leading-relaxed font-semibold">
                  Uma das atrações mais tradicionalistas, com cartelas prontas para preencher e usar.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2d1e15]/10">
                <p className="text-sm font-black font-display text-[#5d4037] flex items-center justify-center gap-1.5">
                  <span className="line-through text-neutral-400 font-semibold text-xs">R$ 24,90</span>
                  <span>→</span>
                  <span className="text-emerald-700">R$ 0,00</span>
                </p>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-[#ebdcb9] rounded-3xl p-4.5 border-2 border-[#2d1e15]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center max-w-[210px] mx-auto w-full">
              <div>
                <span className="inline-block bg-[#1e3a8a] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  🏆 BÔNUS 4
                </span>
                <h3 className="text-sm font-black text-[#2d1e15] mb-2.5 font-display uppercase tracking-tight leading-snug">
                  KIT DESAFIOS E GINCANAS JUNINAS
                </h3>
                <p className="text-[#5d4037] text-xs leading-relaxed font-semibold">
                  Atividades extras para coordenar dinâmicas que animam e integram todos os convidados.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2d1e15]/10">
                <p className="text-sm font-black font-display text-[#5d4037] flex items-center justify-center gap-1.5">
                  <span className="line-through text-neutral-400 font-semibold text-xs">R$ 19,90</span>
                  <span>→</span>
                  <span className="text-emerald-700">R$ 0,00</span>
                </p>
              </div>
            </div>

          </div>

          {/* Simple minimalist card with the exact discount message */}
          <div className="mt-10 bg-[#ebdcb9] rounded-2xl p-5 border border-amber-900/10 max-w-md mx-auto shadow-sm text-center">
            <p className="text-sm sm:text-base font-extrabold text-[#5d4037] leading-relaxed">
              Você recebe mais 79,60 de desconto ao garantir o plano premium.
            </p>
          </div>

        </div>
      </section>

      {/* 12. Pricing Offer Block (Comparação de Planos) */}
      <section id="oferta" className="relative z-10 py-16 md:py-24 px-4 bg-gradient-to-b from-[#e5d7af] to-[#d6bb89] border-t border-amber-200/50">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e3a8a] tracking-tight font-display uppercase">
            Aproveite Esta Oferta Especial
          </h2>
        </div>

        {/* Pricing Layout Container - Centered Single Plan Card */}
        <div className="max-w-md mx-auto px-4 mb-2">
          
          {/* Plano Essencial */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 border-2 border-orange-100 shadow-2xl flex flex-col justify-between text-center relative mt-5 transition-transform duration-300 hover:scale-[1.01]">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#5d4037] mb-2 font-display uppercase">
                PLANO ESSENCIAL
              </h3>
              <p className="text-xs text-[#5d4037] mb-6 font-semibold uppercase tracking-wider">
                O essencial para as brincadeiras fundamentais com total organização
              </p>

              {/* Pricing */}
              <div className="mb-1 text-sm text-[#5d4037] font-semibold">
                <span className="line-through opacity-80">De R$ 47,90</span>
              </div>
              <div className="flex items-end justify-center gap-1 mb-1">
                <span className="text-lg font-extrabold text-[#5d4037] mb-1.5 font-display">R$</span>
                <span className="font-black leading-none tracking-tight font-display text-5xl sm:text-6xl text-[#d35400]">
                  10,00
                </span>
              </div>
              <p className="text-xs text-[#5d4037] mb-6 font-medium">
                PAGAMENTO ÚNICO
              </p>

              {/* Divider */}
              <div className="my-6 border-b border-[#f1c40f]/20"></div>

              {/* Features List */}
              <ul className="text-left text-sm text-[#2d1e15] space-y-3.5 max-w-xs mx-auto mb-8 font-semibold">
                <li className="flex items-start gap-2.5 leading-snug">
                  <span className="text-emerald-500 font-extrabold shrink-0">✅</span>
                  <span className="text-sm">Mais de 70 materiais inclusos</span>
                </li>
                <li className="flex items-start gap-2.5 leading-snug">
                  <span className="text-emerald-500 font-extrabold shrink-0">✅</span>
                  <span className="text-sm">Brincadeiras e dinâmicas prontas</span>
                </li>
                <li className="flex items-start gap-2.5 leading-snug">
                  <span className="text-emerald-500 font-extrabold shrink-0">✅</span>
                  <span className="text-sm">Cartazes e painéis exclusivos</span>
                </li>
              </ul>
            </div>

            <div>
              {/* CTA Button */}
              <a 
                href="https://pay.wiapy.com/4Ttcy-vBeM"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBasicClick}
                className="inline-flex items-center justify-center gap-2 w-full font-black text-base sm:text-lg px-6 py-4.5 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer font-display uppercase tracking-wide bg-gradient-to-r from-[#E9B21C] to-[#d49f13] text-neutral-950 hover:from-[#d49f13] hover:to-[#b58509] shadow-[0_15px_35px_-5px_rgba(233,178,28,0.5)] ring-4 ring-[#E9B21C]/40 animate-pulse-cta"
              >
                ADQUIRIR ESSA OFERTA
              </a>
              <p className="mt-3 text-[11px] text-[#5d4037] font-bold">
                ⚡ Acesso imediato após a confirmação do pagamento.
              </p>
            </div>
          </div>

        </div>

        {/* Guarantee Badge Seal */}
        <div className="mt-14 mb-4 flex justify-center w-full text-center px-4 select-none">
          <div className="flex flex-col items-center">
            <img 
              src={seloGarantia} 
              alt="Selo de 7 Dias de Garantia Incondicional" 
              loading="lazy"
              decoding="async"
              width={240}
              height={240}
              referrerPolicy="no-referrer"
              className="w-48 h-48 sm:w-60 sm:h-60 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Dynamic checkout upsell modal popup */}
        <UpsellModal 
          isOpen={isUpsellOpen}
          onClose={() => setIsUpsellOpen(false)}
          mockupPremium={mockupPremium}
          basicCheckoutUrl="https://pay.wiapy.com/4Ttcy-vBeM"
          promoCheckoutUrl="https://pay.wiapy.com/3U-q-8WSel"
        />


      </section>

      {/* Creator Profile Section */}
      <section className="relative z-10 py-16 md:py-20 px-4 bg-white border-y border-amber-100">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#e5d7af] via-[#e2c483] to-[#dbca9e] rounded-[2.5rem] p-6 sm:p-8 md:p-11 flex flex-col md:flex-row items-center gap-6 sm:gap-10 border-2 border-[#f1c40f] shadow-lg">
          <div className="relative shrink-0 select-none">
            <img 
              src={avatarProfessora} 
              alt="Professora Isabela Marina especialista em gincana e brincadeiras escolares caipiras" 
              loading="lazy"
              decoding="async"
              width="144"
              height="144"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover shadow-lg ring-6 ring-white"
            />
            <div className="absolute -bottom-2 -right-1 bg-amber-500 text-white w-8 h-8 rounded-full shadow-md text-base flex items-center justify-center border-2 border-white">
              👑
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <span className="text-[11px] font-black tracking-wider uppercase text-[#d35400] bg-white px-3 py-1 rounded-full shadow-sm mb-2.5 inline-block font-display">
              ORGANIZADORA & PEDAGOGA
            </span>
            <h3 className="text-2xl sm:text-3.5xl font-black text-[#d35400] font-display mb-3 leading-tight leading-none">
              Desenvolvido pela Professora Isabela Marina
            </h3>
            <p className="text-[#5d4037] text-base md:text-lg font-semibold mt-1.5 leading-relaxed leading-[1.6]">
              "Olá, eu sou a Isabela Marina! Desenvolvi o Kit Arraiá Premiado unindo minha experiência em sala de aula de muitos anos ao desejo de descomplicar a vida das professoras e organizadores voluntários. Quero que você economize dezenas de horas de estresse e dor de cabeça e possa de fato curtir as festividades e recolher os elogios de todos com uma programação lúdica, super segura e incrivelmente prática de realizar. Vamos resgatar os sorrisos reais e o brilho nos olhos das crianças este ano?" 💛
            </p>
          </div>
        </div>
      </section>

      {/* 13. FAQ Accordion Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 bg-[#e5d7af] border-t border-neutral-100">
        <FAQAccordion />
      </section>


      </main>

      {/* 15. Professional Trust Footer with Complete Badges */}
      <footer className="relative z-10 bg-[#2d1e15] text-white pt-16 pb-8 px-4 border-t border-neutral-900 select-none">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">🔒</div>
            <div className="font-black text-[#f1c40f] font-display">Compra 100% Segura</div>
            <div className="text-white/70 text-sm font-medium">Sua transação é processada em ambiente criptografado e totalmente seguro.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">⚡</div>
            <div className="font-black text-[#f1c40f] font-display font-bold">Acesso Instantâneo</div>
            <div className="text-white/70 text-sm font-medium">As credenciais para salvar o seu São João são enviadas ao seu e-mail imediatamente após a aprovação.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">💬</div>
            <div className="font-black text-[#f1c40f] font-display font-medium">Suporte Atencioso</div>
            <div className="text-white/70 text-sm font-medium">Tem alguma dúvida? Conte com nosso atendimento exclusivo por e-mail comercial.</div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="text-3xl mb-1">🛡️</div>
            <div className="font-black text-[#f1c40f] font-display">Risco Zero Avaliado</div>
            <div className="text-white/70 text-sm font-medium">Sua satisfação está totalmente resguardada pela nossa garantia incondicional de 7 dias.</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-white/10 text-center text-white/50 text-xs sm:text-sm space-y-3 font-medium">
          <p>© 2026 Arraiá Premiado • Professora Isabela Marina — Todos os direitos reservados.</p>
          <p className="text-white/30 text-[11px] font-sans leading-relaxed">
            Este é um método lúdico pedagógico para facilitar e organizar eventos de forma online, com foco em salvar seu tempo livre e gerar risadas coletivas. Os mockups tridimensionais representam de forma gráfica a experiência visualizada do projeto físico.
          </p>
        </div>
      </footer>
    </div>
  );
}
