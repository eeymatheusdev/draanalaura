"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useReducedMotion } from "framer-motion";

export const FAQ = () => {
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "Quanto tempo dura o efeito da toxina botulínica?",
      answer:
        "O efeito da toxina botulínica geralmente dura de 4 a 6 meses, variando de acordo com o metabolismo de cada paciente. Após esse período, é recomendado realizar uma nova aplicação para manter os resultados.",
    },
    {
      question: "O procedimento de harmonização facial é doloroso?",
      answer:
        "Os procedimentos são realizados com anestesia local e são minimamente invasivos. Você pode sentir um leve desconforto durante a aplicação, mas a maioria dos pacientes tolera muito bem o procedimento.",
    },
    {
      question: "Quanto tempo leva uma limpeza dental?",
      answer:
        "Uma limpeza dental profissional geralmente leva de 30 a 60 minutos, dependendo da condição dos dentes e da quantidade de tártaro acumulado. É recomendado realizar a limpeza a cada 6 meses.",
    },
    {
      question: "Como funciona o clareamento dental?",
      answer:
        "O clareamento dental pode ser feito em consultório ou em casa com moldeiras personalizadas. No consultório, utilizamos géis de alta concentração com resultados visíveis já na primeira sessão. O tratamento caseiro é mais gradual e supervisionado.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos diversas formas de pagamento incluindo dinheiro, cartões de crédito e débito, PIX e parcelamento em até 12x. Entre em contato para saber mais sobre as condições especiais.",
    },
    {
      question: "Qual a idade recomendada para harmonização facial?",
      answer:
        "A idade mínima recomendada é 18 anos, quando o desenvolvimento facial está completo. Cada caso é avaliado individualmente para determinar os melhores procedimentos de acordo com as necessidades e objetivos do paciente.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 bg-card bg-gradient-to-br from-pink via-white to-beige"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Revertido para false
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Tire suas dúvidas sobre nossos procedimentos
          </p>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }} // Revertido para false
          transition={
            shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }
          }
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-pink/20 rounded-lg px-6 data-[state=open]:border-pink/40 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
