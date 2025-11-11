"use client";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

export const Hero = () => {
  const whatsappLink =
    "https://wa.me/5516994653366?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!";

  const shouldReduceMotion = useReducedMotion();

  // Variantes para animação escalonada
  const containerVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink via-white to-beige px-4 pt-20 overflow-hidden"
    >
      <motion.div
        className="container mx-auto text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.div variants={itemVariants}>
          <Image
            src={logo}
            alt="Ana Laura Moretti - Cirurgiã Dentista"
            // Ajuste para celular: w-56 (224px)
            // Ajuste para monitores: md:h-72 w-auto (voltando para altura controlada e largura automática para evitar distorção)
            className="w-80 h-auto md:h-72 md:w-auto mx-auto mb-12 md:mb-16 transform translate-x-3 md:translate-x-7 transition-transform duration-500 hover:scale-105"
            priority
          />
        </motion.div>

        <motion.h1
          // Ajuste para celular: text-5xl
          // Ajuste para monitores: md:text-6xl (ou md:text-7xl se preferir maior)
          className="font-serif text-5xl md:text-6xl text-gold/90 font-bold mb-6"
          variants={itemVariants}
        >
          Sorria com Confiança
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-8 text-foreground/80 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Clínica Odontológica e Harmonização Facial com excelência em cuidados
          estéticos e odontológicos
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            asChild
            size="lg"
            className="bg-pink hover:bg-pink/90 text-accent-foreground font-semibold text-base px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl animate-pulse-slow"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 h-6 w-6" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
