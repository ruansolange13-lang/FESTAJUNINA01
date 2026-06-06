import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Como recebo o acesso a essa tranquilidade para a minha festa?',
    answer: 'O seu acesso para salvar a sua festa é imediato! Logo após a confirmação do pagamento, você receberá um e-mail com as suas credenciais exclusivas para abrir toda a programação e dinâmica do Arraiá Premiado. Tudo organizado passo a passo de forma simples e intuitiva para você poupar seu final de semana e ter sucesso imediato.',
  },
  {
    id: '2',
    question: 'Eu realmente não terei trabalho algum de planejamento?',
    answer: 'Exatamente! O planejamento cansativo já foi totalmente feito por nós durante meses. Cada momento do arraiá foi pensado nos mínimos detalhes, com orientações extremamente mastigadas sobre o que falar e como organizar. É o fim de improvisos exaustivos ou passar noites em claro tentando inventar atividades.',
  },
  {
    id: '3',
    question: 'Esse método realmente consegue tirar as crianças do celular?',
    answer: 'Sim! Esse é o maior benefício. As atividades e dinâmicas interativas foram desenhadas com foco em engajamento emocional ativo. Elas criam uma curiosidade tão grande que crianças e adultos abandonam as telas de forma natural e espontânea para participarem juntos das risadas e brincadeiras.',
  },
  {
    id: '4',
    question: 'Por quanto tempo terei acesso a essa facilidade?',
    answer: 'Seu acesso é permanente e vitalício. Isso significa que você nunca mais precisará se preocupar com o planejamento ou estresse de organizar uma Festa Junina na sua vida! Este ano, no próximo, e nos seguintes, você estará 100% blindada contra a correria de última hora recomendada pela Isabela.',
  },
  {
    id: '5',
    question: 'Como funciona a abertura e preparação?',
    answer: 'De forma instantânea! Você pode acessar e visualizar o material por qualquer celular, tablet ou computador, de onde estiver. Tudo foi estruturado de forma visualmente rica e prática para que você simplesmente execute, sem complicação ou necessidade de softwares caros.',
  },
  {
    id: '6',
    question: 'E se eu não me sentir aliviada ou achar que a organização não ficou mais rápida?',
    answer: 'Nós temos tanta certeza de que este kit vai devolver suas noites de sono e paz de espírito que te damos risco zero! Se em até 7 dias você sentir que o seu estresse ainda resiste ou que a festa não ficou cem vezes mais prática, basta nos mandar uma única mensagem e devolvemos cada centavo do seu investimento. Sem perguntas ou burocracia.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#d35400] mb-10 tracking-tight font-display">
        Perguntas frequentes
      </h2>

      {/* Accordion List */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_15px_45px_-20px_rgba(45,30,21,0.15)] p-4 sm:p-6 md:p-8 border border-[#f1c40f]/40">
        <div className="divide-y divide-[#f1c40f]/20">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-2.5 first:pt-0 last:pb-0">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between text-left py-4 px-2 text-[#2d1e15] font-extrabold text-base sm:text-lg hover:text-[#d35400] transition-colors gap-4 group cursor-pointer"
                  >
                    <span className="font-display tracking-tight leading-snug">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#d35400] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pt-1 px-2 text-[#5d4037] text-sm sm:text-base leading-relaxed pl-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
