"use client";

import resultadoBotox from "@/assets/resultado-botox.jpg";
import resultadoClareamento from "@/assets/resultado-clareamento.jpg";
import resultadoRestauracao from "@/assets/resultado-restauracao.jpg";
import { motion } from "framer-motion";

export const Results = () => {
  const results = [
    {
      title: "Toxina Botulínica",
      image: resultadoBotox,
      description: "Redução de linhas de expressão com resultados naturais",
    },
    {
      title: "Clareamento Dental",
      image: resultadoClareamento,
      description:
        "Clareamento dental seguro para um sorriso mais branco e confiante.",
    },
    {
      title: "Restauração Estética",
      image: resultadoRestauracao,
      description: "Sorrisos renovados com restaurações naturais e duradouras.",
    },
  ];

  return (
    <section
      id="results"
      className="py-20 px-4 bg-gradient-to-br from-pink via-white to-beige"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gold mb-3">
            Resultados que transformam
          </h2>
          <p className="text-muted-foreground">
            Veja a transformação real dos nossos pacientes com procedimentos
            personalizados
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden transition hover:scale-105 w-full bg-white"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <img
                src={result.image.src}
                alt={result.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-pink/20 h-full">
                <h3 className="font-semibold text-gold mb-2">{result.title}</h3>
                <p className="text-sm text-gray-700">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
