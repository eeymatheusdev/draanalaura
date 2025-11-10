"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!";

  return (
    <section
      id="call-to-action"
      className="py-20 px-4 bg-gradient-to-br from-pink via-white to-beige text-primary"
    >
      <motion.div
        className="container mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <Calendar className="w-16 h-16 mx-auto mb-6" />
        </motion.div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Pronto para Transformar seu Sorriso?
        </h2>
        <p className="text-xl mb-16 text-foreground">
          Agende sua avaliação e descubra como podemos ajudar você a conquistar
          o sorriso e a aparência que sempre desejou.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
