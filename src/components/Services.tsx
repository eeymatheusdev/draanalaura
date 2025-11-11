"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smile, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Smile,
      title: "Clínica Geral",
      description:
        "Atendimento odontológico completo com foco em prevenção e tratamento de problemas bucais.",
      treatments: [
        "Limpeza e Profilaxia",
        "Restaurações Estéticas",
        "Tratamento de Canal",
        "Periodontia",
        "Próteses e Implantes",
      ],
    },
    {
      icon: Sparkles,
      title: "Harmonização Facial",
      description:
        "Procedimentos estéticos faciais para realçar sua beleza natural com segurança e precisão.",
      treatments: [
        "Toxina Botulínica (Botox)",
        "Preenchimento Labial",
        "Bioestimuladores de Colágeno",
        "Harmonização do Sorriso",
        "Skinbooster",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Revertido para false
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground">
            Oferecemos tratamentos personalizados para cuidar do seu sorriso e
            realçar sua beleza natural
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }} // Revertido para false
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.2,
              }}
            >
              <Card className="border-2 border-pink transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-pink/20 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.treatments.map((treatment, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-foreground/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-pink mr-3 shrink-0"></span>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
